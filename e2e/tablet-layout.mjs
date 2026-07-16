// End-to-end check for the tablet "middle" layout (see src/css/custom.css, the
// `@media (min-width: 997px) and (max-width: 1279.98px)` block).
//
// The bug it guards against: on tablets in landscape (≈997–1279px — iPad 1024,
// iPad Pro 11" ~1180) stock Docusaurus shows BOTH the left doc sidebar and the
// right desktop TOC, squeezing the article into a narrow middle column (the
// content column is capped at max-width:75% and the TOC takes the other 25%).
//
// The fix, in that band only: hide the desktop TOC column, let the content column
// grow to 100%, and reveal the inline collapsible TOC (the same dropdown phones
// get) so no table-of-contents is lost. ≥1280px keeps the 3-column desktop layout;
// <997px is unchanged (drawer + inline TOC).
//
// This drives a real headless browser against a *production* build served locally
// and measures the rendered article width at a spread of viewport widths, exactly
// what a reader hits.
//
// Usage:
//   npm run build && npm run serve -- --port 3210 --no-open &
//   BASE_URL=http://localhost:3210 node e2e/tablet-layout.mjs
//
// Requires Playwright's chromium: `npx playwright install chromium`.

import {chromium} from 'playwright';

const BASE = (process.env.BASE_URL ?? 'http://localhost:3210').replace(/\/$/, '');
const SITE = `${BASE}/ai-engineering-handbook`;
const LESSON = 'rag-agents/part-3-production/tooling-ecosystem';

// The widths we care about: phone, small tablets (still <997 → drawer), the two
// landscape-tablet widths the bug hit hardest (1024, 1180), the boundary (1280),
// and a roomy desktop (1440).
const WIDTHS = [390, 768, 834, 1024, 1180, 1280, 1440];

// Read the layout facts that matter, in the page.
function probe() {
  const vis = (el) => {
    if (!el) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && getComputedStyle(el).display !== 'none';
  };
  const md = document.querySelector('.theme-doc-markdown.markdown');
  const tocDesktop = document.querySelector('.theme-doc-toc-desktop');
  const tocMobile = document.querySelector('.theme-doc-toc-mobile');
  const sidebar = document.querySelector('.theme-doc-sidebar-container');
  return {
    articleWidth: md ? Math.round(md.getBoundingClientRect().width) : 0,
    tocDesktopVisible: vis(tocDesktop),
    tocMobileVisible: vis(tocMobile),
    // The left sidebar as an in-layout column (a drawer/off-canvas has zero/neg x).
    sidebarInLayout: sidebar ? sidebar.getBoundingClientRect().right > 40 : false,
    scrollW: document.documentElement.scrollWidth,
    clientW: document.documentElement.clientWidth,
  };
}

const results = [];
function check(name, cond, detail) {
  results.push({name, ok: !!cond, detail});
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}  — ${detail}`);
}

async function run() {
  const browser = await chromium.launch();
  const measured = {};

  for (const w of WIDTHS) {
    const page = await browser.newPage({viewport: {width: w, height: 900}});
    await page.goto(`${SITE}/${LESSON}/`, {waitUntil: 'load'});
    await page.waitForTimeout(500);
    const m = await page.evaluate(probe);
    measured[w] = m;
    console.log(
      `w=${String(w).padStart(4)}  article=${String(m.articleWidth).padStart(4)}px  ` +
        `tocDesktop=${m.tocDesktopVisible ? 'on ' : 'off'}  tocMobile=${m.tocMobileVisible ? 'on ' : 'off'}  ` +
        `sidebarCol=${m.sidebarInLayout ? 'yes' : 'no '}  overflow=${m.scrollW > m.clientW + 1 ? 'YES' : 'no'}`,
    );
    await page.close();
  }
  console.log('');

  // If BEFORE-only run is requested, just print the table and exit 0.
  if (process.env.MEASURE_ONLY) {
    await browser.close();
    return;
  }

  // ---- Tablet band (1024, 1180): article reclaims the TOC column ----
  for (const w of [1024, 1180]) {
    const m = measured[w];
    check(
      `tablet ${w}: desktop TOC hidden, inline TOC shown`,
      !m.tocDesktopVisible && m.tocMobileVisible,
      `tocDesktop=${m.tocDesktopVisible} tocMobile=${m.tocMobileVisible}`,
    );
    check(
      `tablet ${w}: left sidebar column kept`,
      m.sidebarInLayout,
      `sidebarInLayout=${m.sidebarInLayout}`,
    );
    // Article should fill most of the space left of the (kept) sidebar — well past
    // the old 75%-of-content-column squeeze. Content area ≈ w - sidebar(~300).
    check(
      `tablet ${w}: article widened to fill reclaimed column`,
      m.articleWidth > w - 380,
      `article=${m.articleWidth}px (viewport ${w}, expect > ${w - 380})`,
    );
  }

  // The inline TOC must actually expand/collapse (it's the collapsible component).
  {
    const page = await browser.newPage({viewport: {width: 1024, height: 900}});
    await page.goto(`${SITE}/${LESSON}/`, {waitUntil: 'load'});
    await page.waitForTimeout(400);
    const button = page.locator('.theme-doc-toc-mobile button').first();
    const linksBefore = await page.locator('.theme-doc-toc-mobile a').count();
    await button.click();
    await page.waitForTimeout(400);
    const linksAfter = await page.locator('.theme-doc-toc-mobile a:visible').count();
    check(
      'tablet 1024: inline TOC expands to reveal heading links',
      linksAfter > 0 && linksAfter >= linksBefore,
      `visible TOC links after expand = ${linksAfter}`,
    );
    await page.close();
  }

  // ---- Desktop unregressed (1280, 1440): still 3 columns ----
  for (const w of [1280, 1440]) {
    const m = measured[w];
    check(
      `desktop ${w}: 3-column layout (desktop TOC on, inline TOC off)`,
      m.tocDesktopVisible && !m.tocMobileVisible && m.sidebarInLayout,
      `tocDesktop=${m.tocDesktopVisible} tocMobile=${m.tocMobileVisible} sidebar=${m.sidebarInLayout}`,
    );
  }

  // ---- Phone unregressed (390): inline TOC present, sidebar is a drawer ----
  {
    const m = measured[390];
    check(
      'phone 390: inline TOC present, no desktop TOC, sidebar off-canvas',
      m.tocMobileVisible && !m.tocDesktopVisible && !m.sidebarInLayout,
      `tocMobile=${m.tocMobileVisible} tocDesktop=${m.tocDesktopVisible} sidebarCol=${m.sidebarInLayout}`,
    );
  }

  // ---- No horizontal overflow anywhere ----
  for (const w of WIDTHS) {
    const m = measured[w];
    check(
      `w=${w}: no horizontal overflow`,
      m.scrollW <= m.clientW + 1,
      `scrollW=${m.scrollW} clientW=${m.clientW}`,
    );
  }

  await browser.close();

  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
  process.exit(failed.length ? 1 : 0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
