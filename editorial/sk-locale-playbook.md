# Slovak locale (sk) — translation playbook

How to add a third locale to the handbook. Written before the work starts so the executing agent inherits
the decisions, not just the task. **Read this whole file before touching anything.**

## Stakes and the core constraint

The Slovak locale is presentation-grade: it will be read by native Slovak speakers as a showcase of the
book. The author **cannot proofread Slovak** the way he proofreads Russian — there is no human ground truth
downstream. Every quality mechanism that for RU ran as "gates + author's final eye" runs for SK as **gates
only**. That raises the bar on the gates; it never lowers the bar on the text. A visibly machine-translated
Slovak course is worse than no Slovak course.

Slovak is also a lower-resource language for LLMs than Russian or English, with one failure mode neither of
those has: **Czech interference** — Czech word forms, Czech collocations, and Czech–Slovak false friends
leaking into Slovak prose (the two languages are close enough that models blend them). Treat bohemisms as
SK's counterpart of RU's anglicism problem: a named, always-on check.

## Doctrine (inherited from the RU/EN experience)

1. **Native composition from a fact skeleton — never sentence-by-sentence translation.** Per the
   authoring-team method: sentence translation anchors the target to the source's syntax and imports
   calques by construction. For each page, a skeleton extractor derives the fact skeleton **from the EN
   page** (claims numbered, section structure, examples, figure plans, links; EN because models handle
   EN→analysis best and EN is the terminology anchor), the fact editor may cross-check the RU page when a
   claim is ambiguous, and then a **Slovak writer composes native prose from the skeleton alone** — the
   writer never sees the EN or RU prose.
2. **RU authorial figures do not port.** The RU/EN canon's protected figures (`canon/ru.md` §6) are language-bound
   Russian coinages. The SK writer composes its own plain prose or its own figures (which enter the SK
   canon section on probation, per the figure-probation rule). Never translate a figure.
3. **The glossary is the term ledger — translate it FIRST.** Deciding all ~130 term renderings up front
   (native SK term vs kept-EN, bridge form) prevents the per-page drift that cost the RU corpus several
   fix rounds. Expect the SK kept-EN set to be **larger** than RU's: Slovak developer speech keeps more
   English terms; do not force Slovak coinages where the community says the English word.
4. **Voice:** informal singular («ty»), mirroring the RU «ты» register — standard in Slovak developer
   tutorials. Recurring block strings (the lesson closer, terms footer, deepening note, video tip, status
   note) get fixed SK wordings in the canon during bootstrap, decided once.
5. **Typography:** Slovak quotes „…“, decimal comma, Slovak spacing conventions. The proofreader persona
   carries these.
6. **Print bar for SK:** prose a senior Slovak engineer would accept as written by a Slovak colleague —
   calibrate against professional Slovak technical writing (university CS textbooks, quality tech
   journalism), not against translated marketing copy. The back-translation test applies: an SK sentence
   that reverse-maps 1:1 onto an idiomatic English sentence is a calque skeleton.

## Verification without a human proofreader

- **Full editorial-team gates in SK**, with the personas configured for the language:
  - *naive monolingual Slovak reader* — reads NO English, NO Czech, NO Russian; every term/figure must
    decode from Slovak alone;
  - *literary editor* — collocation test, back-translation test, **anti-bohemism check** (flag any Czech
    form, Czech collocation, or CZ–SK false friend), print bar;
  - *proofreader* — Slovak grammar/diacritics/typography + count lint + sentence-initial caps;
  - *fact editor* — diff against the extracted skeleton (and EN page for coverage);
  - *consistency editor* — against the SK canon (`editorial/canon/sk.md`) + the shared router;
  - jump-in surfaces (checklists, takeaways, headings, glossary lines, captions) read in isolation.
- **Cold-read pass is mandatory per page** (fresh literary + naive personas, one page each, blind to the
  batch) — for SK run it **twice**, in separate sessions, since no human backstop exists.
- **Collocation web-verification:** SK reviewers may (and for suspect verb+noun pairs, should) verify
  usage against live Slovak text via web search — this partially substitutes for the native intuition the
  team lacks. A pair that returns only Czech hits is a bohemism.
- **Human calibration (strongly recommended, once):** have one native Slovak speaker spot-check the pilot
  lesson and mark everything that reads foreign. Tune the SK personas/canon against those findings before
  scaling to 20+ pages — this is exactly how the RU gates matured (reader findings → named checks). If no
  human is available, compensate with a third independent cold read on the pilot.
- **Strongest available model** for SK runs — the producer sets the session model; SK competence is
  thinner than RU/EN, so don't run SK waves on a mid-tier model.

## Mechanics (Docusaurus)

- Locale: add `sk` to the `LOCALES` array + a `localeConfigs` label in `docusaurus.config.ts` (the config is
  locale-list-driven, so the browser-language detector and switcher pick `sk` up with no other code change);
  content under `i18n/sk/docusaurus-plugin-content-docs/current/**` mirroring the **EN default in `docs/`**
  (EN is canonical since the EN-canonical flip; RU is itself a secondary locale under `i18n/ru/`);
  `_category_.json` translations; navbar/footer strings; blog if/when applicable.
- **Gated visibility:** merge SK content to `main` continuously, but keep `sk` OUT of the deployed locale
  list until launch (env/config-driven locales array: CI builds all three for verification; the deployed
  build adds `sk` only when the final milestone pass signs off). A public locale dropdown pointing at a
  half-translated locale (Docusaurus falls back to the **default locale, EN**, for missing pages)
  undermines the showcase purpose.
- **Theme strings:** audit Docusaurus' shipped SK translation coverage (`npm run write-translations -- --locale sk`);
  fill gaps in `code.json` — theme chrome in English/Russian inside SK pages is a defect.
- **Glossary anchors:** SK glossary headings produce SK slugs; every lesson's terms-footer links must
  target the SK slugs. Verify anchors in the build (broken-anchor check), don't assume RU slug parity.
- **Do not translate:** code blocks and identifiers, product names, Mermaid node IDs (labels/captions DO
  translate and pass prose gates), YouTube embeds (videos stay English; the one-line "why watch" note is
  Slovak and should say the video is in English — same convention as RU).
- Local search: confirm the search plugin indexes the third locale.

## Unit of work and sequencing

Not the whole book in one batch (one bad convention replicates across ~38 pages before anyone reads it), and
not isolated single articles either (the canon must accrete). **Waves, part by part, batched by page — a
deepened lesson is now TWO pages (Часть 1 `index.md` + Часть 2 `deep-dive.md`), so ≈2–4 pages per PR:**

- **Phase 0 — Infrastructure.** Locale scaffolding, theme-string audit, CI matrix, gated visibility
  mechanism. No content beyond a smoke-test page. One PR.
- **Phase 1 — Canon bootstrap + glossary.** SK canon in `editorial/canon/sk.md` (voice, typography,
  recurring block strings, bridge policy, anti-bohemism rule, kept-EN defaults) + the full SK glossary
  (= all term decisions, materialized). One PR. Everything later cites this.
- **Phase 2 — Pilot.** ONE mid-complexity lesson (recommended: *Tool use* or *Agentic RAG* — long enough
  to exercise every gate, central enough that its terminology feeds everything after) through the FULL
  pipeline including double cold read and (if available) the human calibration. **Do BOTH of its pages —
  Часть 1 (`index.md`) + Часть 2 (`deep-dive.md`) — so the gates are calibrated on the dense deep-dive
  too**, since every wave lesson now carries one. Then a retro: update canon and persona instructions with
  what leaked. Do not start waves until the retro lands.
- **Phases 3–5 — Waves: Part I → Part II → Part III**, reading order, ≈2–4 pages per PR (each deepened
  lesson = Часть 1 + Часть 2; the deep-dive is a dense mastery page — lean to the smaller end of the batch
  for those), each PR through the full pipeline. Each wave closes with a **wave milestone pass**
  (consistency + managing editor over the wave + cold-read spot checks).
- **Phase 6 — Front matter + launch.** intro, part overviews, any remaining chrome; corpus-wide SK
  milestone pass (delta-driven, plus fact-rot re-verification if months passed); flip `sk` into the
  deployed locales; add the **locale-parity rule** to CLAUDE.md: from launch on, every content PR either
  updates SK too or files a parity issue.

## Preconditions

- Start only **after the deepening milestones for Parts I–III are complete** — translating pages that are
  about to be rewritten is churn. During SK waves, treat RU/EN content as frozen; if a RU/EN change lands
  mid-wave, the affected SK page re-enters the pipeline (skeleton re-extract → re-compose or patch).
- The RU corpus must be clean at wave start (latest milestone pass done) — SK inherits whatever the
  skeleton extractor reads.

## What the orchestrator sends to the skills (per lesson)

To **authoring-team**: target language `sk` (audience-primary for the run); skeleton = extract from the EN
page (writer never sees EN/RU prose); voice/register per canon SK section; term decisions from the SK
glossary/ledger — including sense cards; 1–2 existing SK sibling pages for voice calibration (post-pilot);
house skeleton strings per canon; figures: compose natively, RU figures do not port; coined SK figures →
probation list in the handoff note.

To **editorial-team**: primary language `sk`; personas as configured above (naive reader excludes EN + CZ +
RU; literary editor carries the anti-bohemism check; collocation web-verification allowed); canon = SK
section; mandatory cold-read ×2; deliver via PR with canon updates in the same PR.

## Effort shape (for planning, not billing)

**~38 pages** (intro + glossary + Part I 13 + Part II 14 + Part III 9), as of 2026-07-12 **after the
Parts I–III deepening** — every lesson now carries a Часть 2 deep-dive, so the surface roughly doubled from
the original 21-page estimate (intro + glossary + 7 + 7 + 5). Per **page** ≈ 1 skeleton extractor + 1 writer
+ ~6 gate personas + 2×2 cold-read personas. Plus Phase 0/1 infra and three wave passes. Roughly **16–20 PRs**
end to end. (Per-part page counts: Part I = overview + ingestion/retrieval/generation ×2 + cross-cutting
evaluation/guardrails/observability ×2 = 13; Part II = overview + 6 deepened lessons ×2 + real-agents capstone
= 14; Part III = overview + serving/cloud-platforms/tooling-ecosystem/llmops ×2 = 9. Part overviews + intro are
Phase 6.)
