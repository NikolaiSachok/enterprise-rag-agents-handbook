# Enterprise RAG & Agents Handbook — Project Guide

A public, open-source, **bilingual** teaching handbook on production RAG and agentic systems. Built with
**Docusaurus → GitHub Pages** (docs = the course, blog = article excerpts, Mermaid diagrams, offline local
search).

**Locale model (EN-canonical).** English is the **default locale** — it lives in the top-level `docs/` +
`blog/` and serves at the site root `/`. Russian is a secondary locale under
`i18n/ru/docusaurus-plugin-content-docs/current/` (+ `i18n/ru/docusaurus-plugin-content-blog/`) and serves
at `/ru/`. This is only the URL/serving structure: **RU stays audience-primary in *authoring*** (written
natively per the workflow below, never machine-translated). A first visitor's browser language is
auto-detected (blocking `<head>` script in `docusaurus.config.ts`, `localeDetectionScript`) and their choice
is remembered in a `preferred_locale` cookie; the whole mechanism is **locale-list-driven** — adding a
locale = add it to the `LOCALES`/`localeConfigs` in the config, no other code change.
- **Sidebar CATEGORY labels are localized in `i18n/ru/docusaurus-plugin-content-docs/current.json`**, NOT in
  the localized `_category_.json`. A `_category_.json` under `i18n/ru/…` is silently OVERRIDDEN by
  `current.json` at render time, so a RU label only in `_category_.json` renders as the English source string.
  When you add/rename a category (e.g. a deepened lesson's folder), set its RU label in `current.json` under
  `sidebar.handbookSidebar.category.<English label>` — keep the i18n `_category_.json` in sync too, but
  `current.json` is the one that actually renders. (Regression source: the EN-canonical flip left every RU
  category label English because they were only in `_category_.json`.)

## Audiences (every page should serve all three)
1. **Learners** — any engineer studying the topic should come away understanding it: teach the *why* and
   the first principles (design tradeoffs, failure modes, "when NOT to"), not just feature lists.
2. **Reference** — a durable record worth returning to and deepening over time.
3. **A quality bar** — the handbook itself should model engineering maturity it describes: evaluation,
   guardrails, observability, clean issue/CI discipline.

## Scope & prerequisites (assume an experienced audience)
The reader is an experienced engineer. **Do NOT teach the basics of commodity, non-AI-specific tools**
(Docker, Kubernetes, cloud, a web framework, a database) — assume they know them or can pick them up from a
good existing course. For each such tool:
- **Link the canonical basics once** (official site / docs / a solid course) as a one-line *Prerequisite*,
  then move on. This is separate from the Glossary's `↗` concept refs — it's "go learn the tool elsewhere."
- **Teach only the AI-specific delta:** what changes when this tool meets an LLM / RAG / agent workload —
  the patterns, the glue, the gotchas unique to LLM work. Every tool lesson answers one question:
  *"what's different about using this FOR AI?"*
- Deltas, for calibration: FastAPI → streaming token output (SSE), async for long generations, timeouts;
  Docker → model/GPU images, weight caching, cold starts; cloud → data residency & token cost,
  managed-vs-self-hosted; Kubernetes → GPU scheduling, autoscaling on token throughput; vector DB → HNSW for
  embeddings, hybrid + metadata filters for RAG.

Keeps the handbook lean and respects the reader's time — no Tool-101 filler.

## Content workflow
- New pages are authored via the **`authoring-team` skill** (`~/.claude/skills/authoring-team`) — layered:
  a language-agnostic **fact skeleton** (claims + sources + term decisions against the style canon, drafted
  in EN where models reason best), then **independent native prose drafts per language in parallel** —
  never one language translated from another's finished prose. **RU is audience-primary** (never produced
  by translation) and lives in the parallel i18n tree
  (`i18n/ru/docusaurus-plugin-content-docs/current/...`); **EN is the default locale** and lives in the
  top-level `docs/`. Small mirror touch-ups to existing pages may still be translation-based — full lessons
  are drafted natively per language.
- Structure: **Part I — RAG** → **Part II — Agents**, a single-definition **Glossary**, and (later)
  per-topic case-study pages kept separate from the industry-general theory pages.
- **Editorial gate** = the `editorial-team` skill (`~/.claude/skills/editorial-team`) — the single source of
  truth for editorial rules; the "Editorial gate" section below is only a brief pointer + this project's
  config. Run the skill on every page before publish.

### Layer-close ritual
When a layer's *base* is finished, do all of this before moving on:
1. **Deepen issue** — open `Deepen: <Layer>` in the `Part I/II — deepening` milestone with its topics.
2. **On-page pointer** — a brief `:::note[Дальше — углубление слоя]` / `[Next — going deeper]` at the page
   bottom (deepening topics only; no issue/milestone refs on the public page).
3. **Glossary** — add the layer's new terms to the Glossary (RU + EN).
4. **Managing-editor pass** — run the structure checklist in "Structure & presentation" below: update the
   part opener's TOC/status, keep `intro.md` + the milestone plan in sync, and check page uniformity.
5. Publish (PR → CI → merge → deploy) and run the editorial pass.
A `🚧` note must mean *next-pass deepening*, never *unfinished base* — if something base is unwritten, the
layer isn't closed.

### Editorial config (project-specific input to the editorial-team skill)
The editorial **rules** live in the `editorial-team` skill — that is the single source of truth. This section
holds only what's specific to THIS project, which the skill consumes:
- Primary language **RU**; translation target **EN**. Voice: second-person «ты».
- **Style canon — per-language, behind a router.** `editorial/style-canon.md` is a thin **router**: the
  cross-language spine (what a canon is; bridge-rule principle; bold & metaphor budgets; figure-probation;
  sense-card + book-unit concepts; ledger-binds-sense-not-string) + a pointer table. The actual term ledger
  (rejected variants, semantic reservations, casing, recurring-block strings, voice) lives **per language**:
  **`editorial/canon/ru.md`** (RU audience-primary + EN canonical source) and **`editorial/canon/sk.md`**
  (Slovak). An editor loads the router **plus its target language's file only**. All of it is normative for
  every page; canon updates ship **in the same PR** as the page that motivates them. (Add a language → add
  `editorial/canon/<lang>.md` + a router row.)
- **Terms this project keeps in English** (no crisp RU equivalent): *grounding*, *bi-encoder*,
  *cross-encoder*, *prompt injection*, *spotlighting*, *HyDE*, *BM25*, *ReAct*, *faithfulness*, *top-K*.
  (*Chunking* is NOT on this list: «чанкинг» is an established Cyrillic term — write «чанкинг», bridged as
  «чанкинг (chunking)» at first page-mention.)
  Canonical stage names (Ingestion / Retrieval / Generation / Agentic RAG) and code-facing acronyms (ACL)
  stay as-is. Everything else with a natural RU term follows the skill's term-rendering policy (established RU
  term in the body + English in parens at first page-mention, bridge refreshed periodically); the canon's
  ledger records the per-term decisions.
- General theory only — no private domain / anti-keywords.
- Tier: routine handbook pages = 2 passes/language; a flagship / LinkedIn extract gets the full team.

## Editorial gate (required before a page or article is "done")
Conversational drafts are fine as **input**. Before publishing, run the **`editorial-team` skill** — it is
the canonical, evolving spec for editorial quality, and it must pass like a build. Its gates, in brief:
1. **No AI tells** — reads as written by a human (no uniform rhythm, over-signposting, listicle uniformity,
   hedging seesaw, AI-vocabulary).
2. **Idiomatic target language + naive-reader term check** — zero anglicisms/calques; an independent
   *monolingual-reader* pass that kills opaque calques **and false friends** (a native-looking word with the
   wrong meaning, e.g. RU «рубрика» ← *rubric*), applying the RU term-rendering policy in the config above.
3. **Factual integrity** — no claim changed, no nuance dropped; when style and fidelity conflict, fidelity
   wins.
4. **Structural consistency** (managing editor) — see "Structure & presentation" below.

Independent passes **per language** (the RU original needs it too, not just the translation); translation
(RU→EN) is its own step and re-runs every gate in English. Scale to stakes: routine handbook page = 2 passes
/language; a flagship / LinkedIn extract = the full team. **The full checklists, the naive-reader method,
worked examples, and role breakdown live in the skill — don't restate them here** (one source of truth, no
drift).

## Honesty & scope
- **General, vendor-neutral theory only.** No confidential, employer-internal, or client-specific
  material; all examples are generic and invented. Only true, evidenced claims — no marketing.
- License: **MIT**.

## Authoring conventions (content pages)
- **Internal links → link the `.md` file, not a bare path.** Use `[x](./retrieval.md)` /
  `[x](../glossary.md)`, NOT `[x](./retrieval)` / `[x](../glossary)`. Docusaurus resolves `.md` links by
  file path and validates them at build (`onBrokenLinks: 'throw'`), so a wrong target hard-fails CI. Bare
  relative paths are treated as URL-relative to the page's trailing-slash URL (e.g. `../glossary` from
  `/part-1-rag/ingestion/` → the wrong `/part-1-rag/glossary`) and are NOT validated — they ship broken.
- **Admonitions:** `:::type[Title]` with a blank line after the opening line and before the closing `:::`;
  the space-title form (`:::tip Title`) renders as literal text.
- **Videos:** embed with the global `<YouTube id="…" title="…" />` component, not a bare YouTube link, so
  the player is in-page (nocookie, lazy, responsive).
- **Glossary external refs:** a glossary term that maps to a named algorithm/metric/technique gets ONE
  canonical link at the end of its definition — `↗ [Wikipedia](…)` for classics (BM25, cosine similarity,
  precision/recall, nDCG, MRR), `↗ [arXiv](…)` for techniques from papers (HyDE, ColBERT). Verify every URL
  (like video links) — never from memory. External links live only in the Glossary; lessons link to it.

## Structure & presentation (managing-editor gate)
The handbook is one book, not a pile of pages — its structure and framing must stay uniform as it grows. A
dedicated **managing-editor pass** (the `editorial-team` skill's managing-editor role) owns this; it runs at
every layer-close, alongside the prose editorial pass.

**Part-opener convention (uniform across ALL parts).** Every Part is fronted by a written opener page, never
a bare auto-index:
- `docs/part-N-<slug>/overview.md` (EN, default) — `id: overview`, `sidebar_label: "Part overview"` (the RU
  mirror at `i18n/ru/.../current/part-N-<slug>/overview.md` uses `"Обзор части"`), and **no**
  `sidebar_position` (it is the category index, not a child in the list).
- `_category_.json` points at it: `{"label": "…", "position": N, "link": {"type": "doc", "id":
  "part-N-<slug>/overview"}}` — so the part label itself opens the opener and the doc is pulled out of the
  child list (no duplicate). Mirror it in **both** locales.
- The opener carries: a 1–2-paragraph **framing** (what the part is, why, how it builds on the previous part
  — the through-line); a **«Что внутри» / "What's inside"** TOC (one hook per lesson — link published
  lessons as `.md`, mark unpublished ones with 🚧); **«Предпосылки» / "Prerequisites"**; and a
  `:::note[Статус]` with an honest 🚧 while the part is still growing.
- **Sub-categories** (e.g. cross-cutting) stay lighter: a `generated-index` with a framing `description` is
  fine. The written-opener rule is for **parts**, not every sub-folder. Caveat: don't link a bare
  `./sub-folder/` path from prose — the broken-link checker rejects generated-index routes; link the
  sub-pages' `.md` files individually instead.

**Keep the frame current (managing-editor checklist, run at each layer-close):**
1. **Part opener** — add the new lesson to its «Что внутри» TOC; flip its 🚧 → a live `.md` link once
   published; refresh the status note.
2. **Intro** (`intro.md`, both locales) — the Structure list matches the parts that actually exist; no stale
   "🚧 заглушка" language once real content ships.
3. **Curriculum ↔ milestones** — the part TOC reflects the GitHub milestone/issue plan; seed each part's TOC
   from its milestone up front, and move it when issues are added or the plan shifts.
4. **Uniformity** — a new page matches the established skeleton (frontmatter, «Что забрать из урока», «Новые
   термины» → glossary, deepening `:::note`) and the admonition/link/video conventions above, in the
   EN-default (`docs/`) + RU-parallel (`i18n/ru/`) layout.
A `🚧` anywhere must mean *planned next*, never *silently missing*.

**Deepening / Часть 2 (a lesson's second pass).** A base lesson stays **optimal-length** — deepening is
**never** appended to the base. Mastery-tier detail ships as a **companion «Часть 2 — Глубже» / "Part 2 —
Deep dive"** page. The convention (piloted on Tool use, #64):
- **Nest via folder + index — the base becomes the group index, so its URL is preserved.** A deepened lesson
  `docs/part-N/<lesson>.md` moves to `docs/part-N/<lesson>/index.md` (Часть 1, unchanged length; set an
  explicit `slug: /part-N/<lesson>/` so the base URL is stable), gains a sibling `deep-dive.md` (Часть 2),
  and a `_category_.json` whose **`label`** is the lesson's topic (English in `docs/`, Russian in the
  `i18n/ru/` mirror), **`position`** = the base's old `sidebar_position`, and **`link: {type: doc, id:
  part-N/<lesson>/index}`** so clicking the group label opens Часть 1. Mirror the whole folder in **both**
  locales. The autogenerated sidebar then shows a **collapsible group** (the topic) whose label opens Часть 1
  and whose single child carries a **concise, descriptive `sidebar_label`** (on `deep-dive.md`) that names
  *that* deep-dive's focus in ~2–4 words — **not** the vague «Часть 2 — Глубже» / "Part 2 — Deep dive". E.g.
  tool-use's Часть 2 is labelled «Надёжность и масштаб» / "Reliability & scale" (precedent). The page still
  identifies itself as the deep second pass in its own H1/intro and the Часть 1 backlink; the sidebar label is
  just the descriptor a reader scans in the tree. (`title:` frontmatter is unchanged — it keeps the lesson's
  short name for breadcrumbs/tab per `canon/ru.md` §4.)
- **A lesson becomes a group ONLY once its Часть 2 exists.** Un-deepened lessons stay flat single `.md`
  files; do not pre-create empty folders.
- **Inbound links follow the move.** Every `.md` link to the base becomes `./<lesson>/index.md` (or
  `../part-N/<lesson>/index.md` from another part) in **both** locales — `onBrokenLinks: 'throw'` catches a
  miss. Links *inside* the moved base shift up one level (`../glossary.md` → `../../glossary.md`).
- **Fold-vs-split rule.** A short, must-have clarification the base reader needs → fold into the base. Opt-in
  mastery detail (internals, failure-mode catalogue, "when NOT to," scale concerns) → Часть 2. If in doubt,
  the base stays tight and the detail goes to Часть 2.
- **Pointers both ways, no stale 🚧.** Once Часть 2 exists, Часть 1's closing `:::note` stops being a `🚧`
  preview and becomes a **live, plain pointer to Часть 2** — title `:::note[Дальше — вторая часть урока]` /
  `[Next — part 2 of the lesson]`, naming the deep-dive by its **descriptive label** and listing its topics
  matter-of-factly (**no marketing** — no «доведённый до мастерского уровня» / "taken to mastery", no
  «показывает капстоун» sales phrasing), linking `./deep-dive.md`; Часть 2 **backlinks to Часть 1**
  (`./index.md`) in its first lines. Gate 4 (managing editor) enforces both on every future deepening.
- **Same standard as a base lesson**, authored the same way (authoring-team → editorial-team, RU-primary),
  with the house skeleton (takeaways, glossary footer), Mermaid, `.md`-only links, and glossary + per-language
  canon (`editorial/canon/<lang>.md`) updates shipped in the same PR.

## Engineering workflow (SDLC)
The handbook is itself a demonstration of engineering maturity, so it follows a real workflow — kept
proportionate to a docs site, no ceremony for its own sake.

- **Trunk-based, PR-only.** `main` is always deployable (auto-deploys to Pages). All changes land via a
  short-lived branch + Pull Request; no direct pushes to `main` (the one exception is the initial import).
- **Conventional Commits** for messages (`docs:`, `feat:`, `fix:`, `chore:`, `ci:`). **Squash-merge** PRs.
- **CI gates every PR** (branch protection requires them green before merge):
  1. `npm run build` for **both locales** — the real correctness gate (`onBrokenLinks: 'throw'` catches
     dead internal links; a broken i18n tree fails the build).
  2. **Markdown lint** (structure/format hygiene).
  3. **Generic leak scan** — secrets, credentials, local filesystem paths, emails. (The domain-specific
     leak gate runs privately; see the private brief.)
- **Content PRs** additionally require the **editorial gate** above (literary-edit pass per language) —
  enforced as a PR-template checklist item, not automation.
- **Pre-commit hook** mirrors the generic leak scan locally so leaks are caught before they're committed.
- **Issues & milestones** are the planning surface: issues track lessons/topics; **milestones = Part I /
  Part II**; labels `lesson` / `editorial` / `infra` / `chore`.
- **Dependabot** keeps the Docusaurus toolchain patched (weekly), draining the inherited npm advisories
  over time.
- **Actions are SHA-pinned.** Every `uses:` in a workflow is pinned to a full-length commit SHA (with a
  `# vX` comment), not a moving tag — supply-chain hardening. The repo's Actions policy **enforces** this
  (GitHub-owned actions only, SHA-pinned), so an unpinned `@v4` will hard-fail the run at startup.
- **Deploy:** merge to `main` → GitHub Actions builds all locales → GitHub Pages.
- **Drive PR → CI → merge autonomously; don't make the user poll.** After opening a PR, watch CI to
  completion and act on the result yourself — do not end the turn parked on a wait or promising "I'll report
  when CI passes". The mechanism: launch **`gh pr checks <N> --watch --fail-fast`** with
  `run_in_background: true`. It blocks until checks settle and then exits — that exit **is your notification
  hook** (it re-invokes you), and its exit code is the result (0 = all green, non-zero = a check failed). On
  it: **green →** merge (then confirm `gh pr view <N> --json state` = `MERGED`) → clean up branch/worktree →
  report the finished result; **red →** report the failure and the failing check now, don't sit on it. Do NOT
  hand-roll a `until … gh pr checks … grep …; do sleep; done` poll — that loop swallows transient `gh` errors
  (`2>/dev/null` → empty jq → no match) and spins forever without ever notifying you (observed 2026-07-11: it
  hung silently while CI was long green, and the user had to poll). Self-merge of your own green PRs is
  pre-authorized for this repo. The user should never have to ask "how's CI?" or "did it merge?" — a state
  change he'd act on is a cue to report, not to wait.
- **Concurrent agents: worktree isolation + cleanup.** More than one agent/session may write to this repo
  at once, and the main checkout has ONE global branch — so every writing agent works in its **own git
  worktree** (`git worktree add ../<name> -b <branch>`), never in the shared main checkout, and integrates
  via PR only. Before committing on a branch that has lived a while, **rebase onto current `main`** — the
  files you're editing may have changed there since you branched (don't let a stale copy resurrect old
  content). After your PR merges: **first CONFIRM the merge actually happened** — check
  `gh pr view <N> --json state` says `MERGED`, never infer it from running `gh pr merge` (the command can
  decline softly, e.g. when the branch fell behind a protected `main`, and a piped/`tail`-ed invocation
  hides that) — only then delete the remote **and local** branch (squash-merge makes git see the local one
  as unmerged — force-delete your own), `git worktree remove` your worktree, and leave the shared checkout
  on a pulled `main`. Deleting the head branch of a still-open PR **closes the PR unmerged** (observed
  2026-07: a PR was lost this way and had to be re-created from the orphaned commit). **Clean up only what
  you created**: never delete another agent's branches or worktrees, never stage/commit/stash files you
  didn't touch (`git status` before every commit; stage your paths explicitly, no `git add -A`).

## Local dev
- EN (default): `npm run start`
- RU: `npm run start -- --locale ru`
- Full both-locale build (must pass before publish): `npm run build`
- Locale-flip / detection E2E (needs a served prod build): `npm run test:e2e` (detection + locale-scroll +
  tablet layout) — see `e2e/`.
- Deploy config in `docusaurus.config.ts` (`url`, `baseUrl`, `organizationName`) and the Pages workflow
  use placeholders — set them before the first deploy.
