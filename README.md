# Enterprise RAG & Agents Handbook

A practical, first-principles guide to production RAG (retrieval-augmented generation)
and agentic systems.

🚧 **Work in progress.** The site is a scaffold — lesson content is being written and
added incrementally.

Built with [Docusaurus](https://docusaurus.io/). Bilingual: **Russian (default)** and
**English**, with Mermaid diagrams and offline local search.

## Run locally

```bash
npm install

# Russian (default locale)
npm run start

# English locale
npm run start -- --locale en
```

Docusaurus dev server serves one locale at a time; use the `--locale` flag to preview EN.

## Build

```bash
npm run build   # builds all locales (ru + en)
```

Output is generated into `build/` and can be served with any static host.

## Structure

- `docs/` — the handbook in English, the canonical locale, served at the site root. Part I — RAG,
  Part II — Agents, Part III — Production & LLMOps, Glossary.
- `i18n/ru/`, `i18n/sk/` — the Russian and Slovak locale trees (docs + theme strings), served at `/ru/`
  and `/sk/`. Both are audience-primary: written natively, never machine-translated.
- `editorial/` — the style canon: a thin cross-language router plus a per-language term ledger
  (`canon/ru.md`, `canon/sk.md`).

## Contributing / workflow

The handbook follows a small, real SDLC (kept proportionate to a docs site):

- **Trunk-based, PR-only.** `main` is always deployable and auto-deploys to GitHub Pages.
  All changes land via a short-lived branch + Pull Request — no direct pushes to `main`.
- **Conventional Commits** for messages (`docs:`, `feat:`, `fix:`, `chore:`, `ci:`) and PR
  titles. PRs are **squash-merged**.
- **CI gates every PR** (branch protection should require them green before merge):
  1. `npm run build` for **both locales** — the real correctness gate (`onBrokenLinks: 'throw'`
     catches dead internal links; a broken i18n tree fails the build).
  2. **Markdown lint** — `npm run lint:md` (structure/format hygiene).
  3. **Generic leak scan** — `npm run leak-scan` (secrets, credentials, local paths, emails).
- **Content PRs** additionally require a **literary-edit pass per language, independently**
  (see the editorial standard in `CLAUDE.md`) — enforced via the PR-template checklist.
- **Issues & milestones** are the planning surface: issues track lessons/topics; milestones
  = Part I / Part II; labels `lesson` / `editorial` / `infra` / `chore`.

### Enable the pre-commit hook (once per clone)

A local pre-commit hook mirrors the generic leak scan so leaks are caught before they're
committed. No extra toolchain — enable it with:

```bash
git config core.hooksPath .githooks
```
