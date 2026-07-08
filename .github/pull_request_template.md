<!--
Conventional-Commit PR title, e.g.:
  docs: add reranking lesson (Part I)
  feat: enable offline search
  ci: add build+lint+leak-scan gates
Squash-merge keeps `main` history clean.
-->

## Summary

<!-- What this PR changes and why. Link issues: Closes #NN -->

## Type

- [ ] `docs` — handbook content (lesson/topic/glossary)
- [ ] `feat` / `fix` — site behavior
- [ ] `ci` / `chore` / `infra` — tooling, workflow, config

## Gates

- [ ] `npm run build` passes for **both locales** (ru + en)
- [ ] Markdown lint passes (`npm run lint:md`)
- [ ] Generic leak scan passes (`npm run leak-scan`)
- [ ] Internal links valid (the build's `onBrokenLinks: 'throw'` confirms this)
- [ ] PR title follows **Conventional Commits**

## Content PRs only

- [ ] Literary-edit pass done **for EACH language independently** (RU and EN) — no calques,
      idiomatic prose, technical meaning preserved exactly
- [ ] New terms added to the Glossary
- [ ] General / vendor-neutral only — no confidential, employer-internal, or client-specific material
