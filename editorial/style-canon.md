# Style canon — router / index

The Enterprise RAG & Agents Handbook keeps a **per-language** style & term canon. This file is the **router**:
it holds the language-agnostic spine (the principles every locale inherits) and points at the per-language
canon files. It stays the **default entry point** — the `editorial-team` skill resolves `editorial/style-canon.md`
first, then loads the row for the language it is editing.

**Load only your target language.** An author/editor working in one language reads the router **plus that
language's file** — never the other language's figures, false-friends, or calque lists. Priming the SK writer
with RU figures (or vice versa) imports the wrong reflexes; separating the files is a real quality lever, not
just filing.

## Honesty rule (whole project)

The canon is **normative**: new pages are written to it, and deviations found in the corpus are corrected to it.
The canon **lives with the text** — a canon update ships **in the same PR** as the page that motivates it.
Process rules (editorial passes, checklists) live in `CLAUDE.md` and in the skills (`editorial-team`,
`authoring-team`); the canon holds only language and structural norms. Never enshrine a form the naturalness
gate has not cleared; a form still awaiting a native check is marked *proposed, pending human check*, not settled.

## Pointer table

| Language(s) | File | Role |
|---|---|---|
| **RU + EN** | [`canon/ru.md`](./canon/ru.md) | RU is audience-primary (written natively, never by translation); EN is the canonical source locale in `docs/`. |
| **SK** | [`canon/sk.md`](./canon/sk.md) | Slovak — presentation-grade secondary locale, composed natively from EN meaning. Mirrors the RU/EN canon's *shape*, not its decisions; carries the anti-bohemism gate (§1.3) and EN→SK calque templates (§1.4). |

**Add a language** → add `canon/<lang>.md` (mirror the section shape, decide its own kept-EN set / false
friends / figures) **and add a row here**. Keep this router's filename stable — it is the fixed entry point.

## Cross-language principles (stated once; both files inherit)

These are the language-agnostic spine. The per-language files specialise them; they do not restate them.

- **What a canon is.** A single ledger of term decisions, semantic reservations, casing/typography, recurring
  block strings, voice, and rejected variants — so every page stays consistent with the rest of the corpus and
  a new page is written *to* the ledger, not from scratch.
- **The ledger binds SENSE, not the string.** Registry and reservation rows bind the **terminological meaning**,
  not the raw word. When a term's word is used as an ordinary word, the translation follows the natural idiom,
  not the term gloss (e.g. *the core failure of this approach* → "the fundamental problem," not the taxonomic
  "failure" term). Each locale spells out its own collisions.
- **Bridge rule (principle).** At a term's **first defining mention on a page**, bridge it once in parentheses;
  refresh once at the first mention in a new major section of a long page. Direction is per-locale: a kept-EN
  term gets a native-language gloss; a native term gets the English original. Never two bridges of the same term
  within a screen. Video captions and preview/announce lists do **not** count as the first mention. (RU/EN: §7 in
  `canon/ru.md`; SK: §7 / §7.1 in `canon/sk.md`.)
- **Bold budget.** Bold is a **navigation** tool, not intonation: a soft cap of ~0.36 bold spans per line of
  prose. Emphasise a term anchor at its first defining mention, a definition-list lead, or a rare lone page
  maxim — never rhetorical stress, whole clauses, or repeats of already-introduced terms. A clause-length maxim
  goes in quotes or italics, not bold. (RU/EN: §8; SK: §8.)
- **Metaphor / figure budget + figure-probation.** Authorial figures are language-bound coinages and do **not**
  port across locales — each language composes its own (or plain prose) and confirms it **for itself**. A figure
  introduced in a PR enters **on probation** («(на испытании)» / „(na skúšobnej dobe)") and reviewers check it
  like ordinary text until the next cold read / milestone pass confirms it (a naive monolingual reader decodes it
  at first contact, without the English page) or strikes it (then it joins the rejected variants). Keep the
  per-page figure count modest. (RU/EN: §6; SK: "Figúry (§6)".)
- **Sense cards.** Where one word carries several senses across the corpus, a **sense card** fixes one meaning
  per frame and names the disambiguating question to ask before writing the word — a reservation breach is a
  defect even when the sentence is otherwise correct. Each locale keeps its own cards (their polysemy differs;
  e.g. Slovak has clean pairs where Russian must disambiguate one word). (RU/EN: §2; SK: §2.)
- **Book units.** The corpus's structural vocabulary is shared: **lesson** (one page), **layer** (a conceptual
  pipeline stage), **part** (Part I / II / III), **cross-cutting aspects** (eval, guardrails, observability).
  Reference lessons **by name, never by number**; internal links point at the `.md` file. (RU/EN: §5; SK: §4 +
  the RU §5 rules it inherits.)
- **Method lives in the skills.** Structural checks (grammatical anchor, explicit object, metaphor budget,
  clause-split, agreement sweep — the editorial-team **Gate 2a**) and the authoring **meaning-first** method are
  **language-agnostic and live in the skills**, not here. The canon only names each language's specific traps.
