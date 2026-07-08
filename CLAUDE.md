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

## Editorial standard (required gate before a page is "done")
Conversational drafts may contain **calques** — literal translations that read unnaturally in the target
language (e.g. RU "Центральное напряжение" for *central tension*, "по возрастанию ума", "Семя на
будущее"). Fine for a fast draft, **not** fine on a published page.

**Before publishing, run a dedicated literary-editing pass for EACH language independently** — not just
the translation; the original needs it too. The pass:
- removes calques and unnatural phrasing; rewrites into idiomatic prose in that language;
- preserves technical meaning exactly — no drift, no invented claims;
- keeps industry terms-of-art in English where that's the norm (*chunking*, *reranking*, *access
  control*) but frames the surrounding sentence naturally.
Treat this like a build that must pass: a page with raw calques is not ready to publish.

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
