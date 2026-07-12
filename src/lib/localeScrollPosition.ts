/**
 * Preserve the reader's position across a language switch.
 *
 * The problem: heading anchor ids are localized — the Russian «## Что внутри»
 * gets id `#что-внутри`, the English «## What's inside» gets `#whats-inside`.
 * So the naive fix (carry `location.hash` to the other locale) lands on an
 * anchor that doesn't exist, and the reader is dumped at the top of the article.
 *
 * The two locales share the same heading STRUCTURE (same skeleton, same order),
 * so we map by structural POSITION instead of by hash string:
 *
 *   1. On a locale-switch click we record which section the reader is in — the
 *      0-based index (in document order, over the article's h2/h3 headings) of
 *      the last heading that has scrolled above the line just under the sticky
 *      navbar — plus a fractional offset (0..1) of how deep into that section
 *      they are. That record is proportional, so it transfers across locales
 *      even though the two languages render sections of different pixel heights.
 *
 *   2. A locale switch is a full page navigation, so the record is persisted in
 *      `sessionStorage`, keyed by the DESTINATION pathname. After the new page
 *      mounts we read the record for the current path, scroll to the heading at
 *      that same index (+ the fractional offset), and clear the record.
 *
 * The two locales are authored in parallel (RU is not a 1:1 translation), so a
 * page can legitimately be subdivided more finely in one language than the other
 * — a DIFFERENT h2/h3 count. When that happens the section index+offset can't
 * line up, so instead of giving up (which dumped the reader back at the top) we
 * fall back to a proportional whole-document scroll fraction, captured alongside
 * the structural record. Less precise than section mapping, but it keeps the
 * reader near where they were. It only degrades to top-of-page when there is no
 * record at all.
 */

const STORAGE_PREFIX = 'localeScrollPos:';

/** Records older than this (ms) are ignored — they mean the navigation never
 *  actually happened, so a later plain reload shouldn't teleport the reader. */
const MAX_AGE_MS = 30_000;

type PositionRecord = {
  /** Index into the h2/h3 heading list; -1 means "above the first heading". */
  index: number;
  /** How far into the section the reader is, as a fraction (0..1). */
  offset: number;
  /** Number of headings on the source page — a cheap structural sanity check. */
  count: number;
  /** Source scroll position as a fraction (0..1) of the source page's scrollable
   *  height. The fallback used when the two locales' heading skeletons differ. */
  docFraction: number;
  /** Capture time, for the freshness guard. */
  ts: number;
};

function canUseDom(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/** Normalize a pathname so the write key (from the dropdown href) and the read
 *  key (from `window.location`) match: decoded, without a trailing slash. */
export function normalizePathname(pathname: string): string {
  let p = pathname;
  try {
    p = decodeURIComponent(p);
  } catch {
    // Leave as-is if it isn't valid percent-encoding.
  }
  return p.length > 1 ? p.replace(/\/+$/, '') : p;
}

function storageKey(pathname: string): string {
  return STORAGE_PREFIX + normalizePathname(pathname);
}

/** The article's section headings, in document order. Restricted to the doc
 *  content so navbar/TOC/footer headings never enter the mapping. */
function getSectionHeadings(): HTMLElement[] {
  const container =
    document.querySelector('.theme-doc-markdown') ??
    document.querySelector('article');
  if (!container) return [];
  return Array.from(
    container.querySelectorAll<HTMLElement>('h2[id], h3[id]'),
  );
}

/** Height of the sticky navbar — content below this line is what the reader
 *  actually sees at the top of the viewport. */
function navbarHeight(): number {
  const navbar = document.querySelector<HTMLElement>('.navbar');
  return navbar?.offsetHeight ?? 60;
}

/** Absolute (document-relative) top of an element. */
function absoluteTop(el: HTMLElement): number {
  return el.getBoundingClientRect().top + window.scrollY;
}

/** Total scrollable distance of the page (>=1 to avoid a divide-by-zero on
 *  pages shorter than the viewport). */
function scrollableHeight(): number {
  return Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
}

/** Start/end of a section in absolute document coordinates. `index === -1` is the
 *  region above the first heading; the last section ends at the document bottom. */
function sectionBounds(
  headings: HTMLElement[],
  index: number,
): {start: number; end: number} {
  const start = index < 0 ? 0 : absoluteTop(headings[index]);
  const end =
    index + 1 < headings.length
      ? absoluteTop(headings[index + 1])
      : Math.max(
          document.documentElement.scrollHeight - window.innerHeight,
          start + 1,
        );
  return {start, end: Math.max(end, start + 1)};
}

/**
 * Capture the reader's current structural position and persist it against the
 * destination pathname. Called from the locale dropdown's click handler, before
 * the browser navigates away.
 */
export function capturePosition(destinationPathname: string): void {
  if (!canUseDom()) return;
  const headings = getSectionHeadings();

  // The line just under the sticky navbar is the reader's effective "top".
  const referenceLine = window.scrollY + navbarHeight();

  // Last heading that has scrolled at/above the reference line. Stays -1 (and the
  // record leans on docFraction) when the page has no h2/h3 headings at all.
  let index = -1;
  for (let i = 0; i < headings.length; i += 1) {
    if (absoluteTop(headings[i]) <= referenceLine) index = i;
    else break;
  }

  const {start, end} = sectionBounds(headings, index);
  const offset = Math.min(Math.max((referenceLine - start) / (end - start), 0), 1);
  const docFraction = Math.min(Math.max(window.scrollY / scrollableHeight(), 0), 1);

  const record: PositionRecord = {
    index,
    offset,
    count: headings.length,
    docFraction,
    ts: Date.now(),
  };

  try {
    window.sessionStorage.setItem(
      storageKey(destinationPathname),
      JSON.stringify(record),
    );
  } catch {
    // Private mode / quota — the feature simply degrades to top-of-page.
  }
}

function readRecord(pathname: string): PositionRecord | null {
  let raw: string | null = null;
  try {
    raw = window.sessionStorage.getItem(storageKey(pathname));
  } catch {
    return null;
  }
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as PositionRecord;
    if (typeof parsed?.index !== 'number' || typeof parsed?.offset !== 'number') {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function clearRecord(pathname: string): void {
  try {
    window.sessionStorage.removeItem(storageKey(pathname));
  } catch {
    // Ignore — nothing we can do, and nothing depends on the removal.
  }
}

/** Compute the scroll target for a record and jump there. Returns the applied
 *  scrollY, or null only when nothing usable can be resolved. */
function applyPosition(record: PositionRecord): number | null {
  const headings = getSectionHeadings();

  // Precise path: the two locales share the same heading skeleton (same count),
  // so map by section index + fractional offset — accurate even though the two
  // languages render sections at different pixel heights.
  const structuresAlign =
    headings.length > 0 &&
    record.count === headings.length &&
    record.index < headings.length;

  let target: number;
  if (structuresAlign) {
    const {start, end} = sectionBounds(headings, record.index);
    target = start + record.offset * (end - start) - navbarHeight();
  } else if (typeof record.docFraction === 'number') {
    // Fallback: the heading skeletons differ (a page subdivided more finely in
    // one locale) or there are no headings — restore by the proportional
    // whole-document scroll fraction so the reader lands near where they were,
    // never dumped back at the top.
    target = record.docFraction * scrollableHeight();
  } else {
    return null; // pre-fallback record with a mismatched structure → leave at top
  }

  const clamped = Math.max(0, Math.round(target));
  window.scrollTo({top: clamped, left: 0, behavior: 'auto'});
  return clamped;
}

/**
 * Restore the reader's position for the current page, if a fresh record exists.
 * Called once after the destination page mounts.
 *
 * Async content (e.g. Mermaid diagrams) can shift layout after the first scroll,
 * so we re-apply a couple of times — but only while the reader hasn't scrolled
 * themselves, so we never fight a deliberate scroll.
 */
export function restorePosition(pathname: string): void {
  if (!canUseDom()) return;

  const record = readRecord(pathname);
  if (!record) return;

  // Consume the record immediately so a later plain reload never re-triggers.
  clearRecord(pathname);

  if (Date.now() - record.ts > MAX_AGE_MS) return; // stale → leave at top

  window.requestAnimationFrame(() => {
    const first = applyPosition(record);
    if (first === null) return; // structures differ → stayed at top

    let lastApplied = first;
    const reapply = () => {
      // If the reader scrolled since our last jump, respect that and stop.
      if (Math.abs(window.scrollY - lastApplied) > 4) return;
      const next = applyPosition(record);
      if (next !== null) lastApplied = next;
    };
    window.setTimeout(reapply, 150);
    window.setTimeout(reapply, 450);
  });
}
