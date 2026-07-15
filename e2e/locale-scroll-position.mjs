// End-to-end check for the "preserve reading position across a language switch"
// feature (see src/lib/localeScrollPosition.ts + the swizzled locale dropdown).
//
// It drives a real headless browser against a *production* build served locally,
// so it exercises exactly what a reader hits: open a long lesson, scroll into a
// mid/late section, switch locale via the navbar dropdown, and assert the new
// page lands in the SAME structural section (same heading index) — not at the top.
//
// Usage:
//   npm run build && npm run serve -- --port 3210 --no-open &
//   BASE_URL=http://localhost:3210 node e2e/locale-scroll-position.mjs
//
// Requires Playwright's chromium: `npx playwright install chromium`.

import {chromium} from 'playwright';

const BASE = (process.env.BASE_URL ?? 'http://localhost:3210').replace(/\/$/, '');
const SITE = `${BASE}/ai-engineering-handbook`;

// The same "which section am I in" rule the feature uses at runtime, evaluated in
// the page: the index of the last h2/h3 whose top has scrolled above the line just
// under the sticky navbar. Returns {count, index, text}.
function pageSectionProbe() {
  const nav = document.querySelector('.navbar')?.offsetHeight ?? 60;
  const headings = Array.from(
    document.querySelectorAll('.theme-doc-markdown h2[id], .theme-doc-markdown h3[id]'),
  );
  let index = -1;
  for (let i = 0; i < headings.length; i += 1) {
    if (headings[i].getBoundingClientRect().top <= nav + 1) index = i;
    else break;
  }
  return {
    count: headings.length,
    index,
    text: index >= 0 ? headings[index].textContent.replace(/​/g, '').trim() : null,
    scrollY: Math.round(window.scrollY),
  };
}

// Scroll so the reader is ~40px INTO the section at `targetIdx` (its heading has
// just passed above the navbar line), making that the unambiguous current section.
function scrollIntoSection(targetIdx) {
  const nav = document.querySelector('.navbar')?.offsetHeight ?? 60;
  const headings = Array.from(
    document.querySelectorAll('.theme-doc-markdown h2[id], .theme-doc-markdown h3[id]'),
  );
  const el = headings[targetIdx];
  const absTop = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo(0, absTop - nav + 40);
}

async function switchLocaleTo(page, linkText) {
  // The only navbar dropdown is the locale switcher; hover to open, then click.
  const dropdown = page.locator('.navbar__items--right .dropdown').first();
  await dropdown.hover();
  const link = dropdown.locator('a.dropdown__link', {hasText: linkText}).first();
  await link.waitFor({state: 'visible', timeout: 5000});
  await Promise.all([page.waitForNavigation({waitUntil: 'load'}), link.click()]);
}

async function settle(page) {
  // Let the restore run and async content (mermaid) finish shifting layout.
  await page.waitForLoadState('networkidle').catch(() => {});
  await page.waitForTimeout(1200);
}

const results = [];
function check(name, cond, detail) {
  results.push({name, ok: !!cond, detail});
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}  — ${detail}`);
}

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({viewport: {width: 1280, height: 820}});

  const lesson = 'part-3-production/llmops';

  // ---- RU -> EN, from a late section ----
  // After the EN-canonical flip: RU serves under /ru/, EN at the root.
  const ruTarget = 13; // "Диета токенов" -> "The token diet"
  await page.goto(`${SITE}/ru/${lesson}/`, {waitUntil: 'load'});
  await page.waitForTimeout(600);
  await page.evaluate(scrollIntoSection, ruTarget);
  await page.waitForTimeout(150);
  const ruBefore = await page.evaluate(pageSectionProbe);
  await switchLocaleTo(page, 'English');
  await settle(page);
  const enAfter = await page.evaluate(pageSectionProbe);
  check(
    'RU→EN lands in the same structural section',
    enAfter.index === ruBefore.index && enAfter.scrollY > 200,
    `RU was in [${ruBefore.index}] "${ruBefore.text}" → EN is in [${enAfter.index}] "${enAfter.text}" (scrollY=${enAfter.scrollY})`,
  );

  // ---- EN -> RU, from a different (earlier) section ----
  const enTarget = 6; // "Monitoring in production" -> "Мониторинг ..."
  await page.goto(`${SITE}/${lesson}/`, {waitUntil: 'load'});
  await page.waitForTimeout(600);
  await page.evaluate(scrollIntoSection, enTarget);
  await page.waitForTimeout(150);
  const enBefore = await page.evaluate(pageSectionProbe);
  await switchLocaleTo(page, 'Русский');
  await settle(page);
  const ruAfter = await page.evaluate(pageSectionProbe);
  check(
    'EN→RU lands in the same structural section',
    ruAfter.index === enBefore.index && ruAfter.scrollY > 200,
    `EN was in [${enBefore.index}] "${enBefore.text}" → RU is in [${ruAfter.index}] "${ruAfter.text}" (scrollY=${ruAfter.scrollY})`,
  );

  // ---- Count-mismatch page: proportional fallback (not top) ----
  // Some parallel-authored deep-dives are subdivided more finely in one locale
  // than the other (e.g. guardrails deep-dive: RU 18 vs EN 9 h2/h3), so the
  // section-index mapping can't line up. The feature must fall back to the
  // whole-document scroll fraction rather than dumping the reader at the top.
  const mmLesson = 'part-1-rag/cross-cutting/guardrails/deep-dive';
  const readFraction = () =>
    page.evaluate(() => {
      const max = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const headings = document.querySelectorAll(
        '.theme-doc-markdown h2[id], .theme-doc-markdown h3[id]',
      ).length;
      return {frac: window.scrollY / max, headings, scrollY: Math.round(window.scrollY)};
    });
  await page.goto(`${SITE}/ru/${mmLesson}/`, {waitUntil: 'load'});
  await page.waitForTimeout(600);
  await page.evaluate((f) => {
    const max = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1,
    );
    window.scrollTo(0, Math.round(f * max));
  }, 0.55);
  await page.waitForTimeout(150);
  const ruMm = await readFraction();
  await switchLocaleTo(page, 'English');
  await settle(page);
  const enMm = await readFraction();
  check(
    'count-mismatch page restores by proportional fallback (not top)',
    enMm.headings !== ruMm.headings &&
      enMm.scrollY > 200 &&
      Math.abs(enMm.frac - ruMm.frac) < 0.15,
    `RU(${ruMm.headings}h @${ruMm.frac.toFixed(2)}) → EN(${enMm.headings}h @${enMm.frac.toFixed(2)}, scrollY=${enMm.scrollY})`,
  );

  // ---- Regression: a plain load (no locale switch) must NOT teleport ----
  await page.goto(`${SITE}/${lesson}/`, {waitUntil: 'load'});
  await page.waitForTimeout(700);
  const plainLoad = await page.evaluate(pageSectionProbe);
  check(
    'plain page load stays at the top (no teleport)',
    plainLoad.scrollY < 50,
    `scrollY=${plainLoad.scrollY}`,
  );

  // ---- Regression: in-page TOC anchor navigation still works ----
  // Run on the EN (root) page: its ASCII anchor ids let us string-compare the
  // clicked href against location.hash (RU anchors are percent-encoded there).
  await page.goto(`${SITE}/${lesson}/`, {waitUntil: 'load'});
  await page.waitForTimeout(700);
  const tocLink = page.locator('.table-of-contents__link').nth(4);
  const tocHref = await tocLink.getAttribute('href');
  await tocLink.click();
  await page.waitForTimeout(400);
  const afterToc = await page.evaluate(() => ({
    scrollY: Math.round(window.scrollY),
    hash: window.location.hash,
  }));
  check(
    'in-page TOC anchor link still scrolls (not regressed)',
    afterToc.scrollY > 100 && !!afterToc.hash && tocHref?.endsWith(afterToc.hash),
    `clicked "${tocHref}" → hash=${afterToc.hash} scrollY=${afterToc.scrollY}`,
  );

  await browser.close();

  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
  process.exit(failed.length ? 1 : 0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
