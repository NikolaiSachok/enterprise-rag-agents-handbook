# Enterprise RAG & Agents Handbook — Project Guide

A public, open-source, **bilingual (RU primary / EN)** teaching handbook on production RAG and agentic
systems. Built with **Docusaurus → GitHub Pages** (docs = the course, blog = article excerpts, Mermaid
diagrams, offline local search).

## Audiences (every page should serve all three)
1. **Learners** — any engineer studying the topic should come away understanding it: teach the *why* and
   the first principles (design tradeoffs, failure modes, "when NOT to"), not just feature lists.
2. **Reference** — a durable record worth returning to and deepening over time.
3. **A quality bar** — the handbook itself should model engineering maturity it describes: evaluation,
   guardrails, observability, clean issue/CI discipline.

## Content workflow
- Pages are drafted **conversationally, RU first**, then reworked into publish-quality prose.
- **EN** is produced by a translation pass into the parallel i18n tree
  (`i18n/en/docusaurus-plugin-content-docs/current/...`).
- Structure: **Part I — RAG** → **Part II — Agents**, a single-definition **Glossary**, and (later)
  per-topic case-study pages kept separate from the industry-general theory pages.
- **Editorial gate** = the `editorial-team` skill (`~/.claude/skills/editorial-team`); the "Editorial
  standard" section below is its handbook-facing summary. Run it on every page before publish.

### Layer-close ritual
When a layer's *base* is finished, do all of this before moving on:
1. **Deepen issue** — open `Deepen: <Layer>` in the `Part I/II — deepening` milestone with its topics.
2. **On-page pointer** — a brief `:::note[Дальше — углубление слоя]` / `[Next — going deeper]` at the page
   bottom (deepening topics only; no issue/milestone refs on the public page).
3. **Glossary** — add the layer's new terms to the Glossary (RU + EN).
4. Publish (PR → CI → merge → deploy) and run the editorial pass.
A `🚧` note must mean *next-pass deepening*, never *unfinished base* — if something base is unwritten, the
layer isn't closed.

### Editorial config (input to the editorial-team skill)
- Primary language **RU**; translation target **EN**. Voice: second-person «ты».
- Keep terms-of-art in English (*chunking*, *reranking*, *bi-encoder*, *grounding*, *access control*, …).
- General theory only — no private domain / anti-keywords.
- Tier: routine handbook pages = 2 passes/language; a flagship / LinkedIn extract gets the full team.

## Editorial standard (required gate before a page or article is "done")
Conversational drafts are fine as **input**. Before publishing, run an **independent editorial pass per
language** (not just the translation — the original needs it too). Treat it like a build that must pass.
The editor(s) verify THREE things:

**1. No AI tells — it must read as written by a human.** This is the hard bar for anything public (LinkedIn,
articles). Reject and rewrite these machine-text patterns (sources: editor/HR guides on spotting AI text):
- **Uniform rhythm** — sentences all a similar length. Vary it; mix short, blunt lines with longer ones.
- **Over-signposting / meta-narration** — "In this section we'll explore…", "In conclusion…", "It's worth
  noting that", "Important to note". Cut them and just say the thing. (RU: «Стоит отметить», «Важно
  понимать», «В заключение».)
- **Rule-of-three everywhere & forced parallelism**; the "not just X, but Y" cliché; fake hooks ("Here's
  the kicker", "But here's the thing").
- **Listicle uniformity** — every bullet as "**Bold header:** one explanatory sentence." Mix bullet shapes;
  use prose where prose fits.
- **Hedging seesaw** — a claim then immediately softened ("however", "to some extent", "generally"). Take a
  stance.
- **AI vocabulary** — delve, tapestry, leverage (as a verb), underscore, pivotal, realm, beacon,
  multifaceted, meticulous, intricate, harness, facilitate, bolster, testament, symphony, "in today's
  fast-paced world". (RU: «в современном мире», «играет ключевую роль», «неотъемлемая часть».)
- **Tonal flatness & abstraction** — evenly polite, no opinion, abstract where a concrete example belongs.
  Keep the author's voice, concrete specifics, the occasional take.
- **Treadmill** — circling the same idea without adding information. Every paragraph earns its place.

**2. Idiomatic target language, zero anglicisms (especially RU).** Phrasing a native writer would actually
use; no calques (e.g. RU "Центральное напряжение" ← *central tension*, "покрывает" ← *covers*, "адресует
проблему" ← *addresses*). Keep industry terms-of-art in English where that's the norm (*chunking*,
*reranking*, *access control*) but frame the surrounding sentence naturally.

**3. Factual integrity preserved.** Editing must NOT change technical meaning, drop nuance, or invent
claims. A dedicated fact-integrity check diffs the edited version's claims against the source. When style
and fidelity conflict, **fidelity wins** — flag it, don't smooth it into something false.

**Pipeline — scale editorial effort to the stakes:**
- **Handbook page (default):** two independent passes per language — (a) literary / de-AI / anti-anglicism
  editor, then (b) fact-integrity + proofread verifier.
- **Flagship / LinkedIn / article extract:** a small **editorial team** — literary editor → technical
  (fact) editor → proofreader, coordinated by a chief editor who adjudicates conflicts. Independence is the
  point: each gets the text fresh; a rubber-stamp pass is worthless.
- **Translation** is its own step (RU→EN); the EN output then goes through the same passes independently — a
  translation isn't "done" until it also passes the AI-tell + idiom checks in English.

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

## Local dev
- RU (default): `npm run start`
- EN: `npm run start -- --locale en`
- Full both-locale build (must pass before publish): `npm run build`
- Deploy config in `docusaurus.config.ts` (`url`, `baseUrl`, `organizationName`) and the Pages workflow
  use placeholders — set them before the first deploy.
