---
title: "Reading the field's evidence"
sidebar_position: 3
---

# Reading the field's evidence

Lesson 1 leaned on a grade attached to every number — `MEASURED`, `REPORTED`, `ASSERTED`. This lesson is
where that grade comes from — the one instrument this course hands you and carries into every other lesson. You arrive
holding claims that are wrong, not because anyone lied, but because the field's secondary layer distorts
numbers in both directions as they travel. Boosters inflate one way, skeptics the other, and a figure passed
hand to hand loses the one thing that made it mean anything. So the method is small and unglamorous: go to the
primary source, grade what you find, and say the grade out loud.

## Every claim gets a grade

Three grades, and the whole discipline rides on keeping them apart.

- **`MEASURED`** — a controlled study, telemetry, a dataset, or a reproducible benchmark found the effect.
- **`REPORTED`** — a named practitioner or company credibly describing their own experience. Most of this
  field lives here.
- **`ASSERTED`** — an opinion, a marketing line, or an argument offered with no backing.

Two rules keep the ladder honest. First, a famous name does not raise a claim's grade. Fame is not evidence,
and "Karpathy says" is `ASSERTED` until you find what he actually measured. Second, you may never upgrade a
grade in the retelling — an assertion repeated by a large account is still an assertion. State the grade in the
words you choose: "a randomised trial found," "practitioners report," "one influential post argues." Those
three openings are not decoration. They are the grade, spoken.

## Four things to read for

Once a claim has a grade, four checks decide whether the number survives contact.

**Denominators first.** The same Google telemetry yields either `28.7%` or `70.6%` for "share of code written
by AI," and the only thing that moves between them is whether copy-paste sits in the denominator (`MEASURED`;
Google prints both figures side by side, on one dataset). Any "X% of our code is AI-written" headline is a
denominator choice, not a fact. Ask what the bottom of the fraction is before you repeat the top.

**Then the conflict of interest — and name it inline, not in a footnote.** "GitHub researchers measuring
GitHub's product" is part of the finding. The structural rule underneath it: whoever sells the tool cannot
measure it. The organisation with nothing to sell tends to publish the useful number — Meta printed its own
unflattering `19.7%`; the vendor prints the flattering one.

**Then currency.** A live number can be stale or withdrawn and still circulate. Google quietly retracted a 2022
context-switch benefit for lack of statistical significance; a web search repeated it as fact in 2026 anyway.
METR's "19% slower" has been superseded by METR's own hand. A number does not stop travelling when it stops
being true.

**And above all, go to the primary.** During the research behind this course, search snippets were wrong
repeatedly — inventing decimals, turning percentages into counts, attaching real numbers to the wrong paper.
The fix was never a better snippet. It was opening the paper.

## Percentage points are not percent

One check earns the course the right to teach the rest, and it is the one most outlets get wrong. When
comprehension falls from `67%` to `50%` (`MEASURED`), that is a drop of **17 percentage points** — a 25%
relative decline — not "17% lower." METR's self-assessment error is **40 percentage points**, not 40%. And a
relative increase is not a share: "+31.3% more PRs merge without review" does not mean 31% of PRs go
unreviewed. These are different quantities. Blurring them is exactly the sloppiness this lesson exists to
correct — get it wrong once and you forfeit the right to teach it.

## The most-repeated number in the genre — and why you can't use it

Put those checks to work on the single most-quoted statistic in the "AI hurts code quality" genre: block
duplication up `81%` since 2023, copy-paste from `9.4%` to `15.7%`. It comes from GitClear, a vendor that sells
code-quality analysis. Run the four checks and it dissolves in your hands. No author is listed. The page
carries no date. The corpus is private, so no one outside can reproduce it. No method is stated, there are no
controls, and — the load-bearing flaw — there is no per-line AI attribution at all. It is a time-series across
a period when AI adoption rose, not a comparison of AI code against non-AI code. Its own scale figure even
drifts across editions: 153 million lines, then 211 million changed lines, then 623 million analysed changes,
different units each time. Don't chain them into a trend.

Here is the subtle part, and it is the whole lesson. GitClear's weakness is not that it has been debunked.
Five targeted searches turned up no credible methodological rebuttal either — no teardown, no failed
reproduction, nothing. The weakness is that **you can't check it.** There is nothing to reproduce. That is a
different and quieter failure than being wrong, and it is the more common one.

Meanwhile the honest version of the claim survives. The only independent causal test — a Carnegie Mellon
matched difference-in-differences, 401 treated repos against 606 controls — finds duplication up `7.92%` in
agent-first repos, not statistically significant, and `−0.94%`, also not significant, for IDE-first. What
*is* strongly significant is complexity (`+34.85%`) and static-analysis warnings (`+17.73%`). So "AI degrades
maintainability" holds — but through complexity, not clones. The most-repeated number in the genre is the one
that fails to replicate; the real finding is the quieter one beside it. And note the grade: despite all those
decimals, GitClear is `REPORTED`, not `MEASURED`. A time-series over an adoption period is not a measurement of
AI's effect.

## The secondary layer distorts in both directions

GitClear is not an outlier; it is a type. Across the research for this course, six claims came apart the same
way — and the point is never that people lie. It is survival, not scholarship. These are why the course goes to
primaries.

- **A pipeline that turned out to be only a diagram** — a workflow drawn as a feedback loop that, on
  inspection, had no feedback edge at all.
- **A "compiler for specifications" that is a 70 KB prompt.** The repository behind the product holds no code —
  four prose files — and the "compiler" is a system prompt instructing a chatbot to assert that it is a
  compiler. Enforcement by politeness.
- **A CVE surge pinned on one AI tool** — "27 attributed to Claude Code" — that on inspection measures which
  tool signs its commits. Claude Code signs by default; most tools don't. The number counts fingerprints, not
  flaws.
- **A field's most-quoted aphorism** — "you can outsource your thinking, but not your understanding" —
  attributed to Karpathy, who explicitly credits a tweet he admired and never claims authorship. Handing it to
  him is the exact third-hand failure this lesson prevents.
- **A retracted Google figure**, withdrawn in 2022 for lack of significance, handed back as current fact by a
  live web search in 2026.
- **An OpenAI "97.9%"** that appears in neither the paper nor the blog it is sourced to — a string with no
  sentence behind it, whose denominator quietly flipped from "active workers" to "employees."

Every one of these would have survived a confident write-up. None survived reading the primary. That is the
method, stated as six failures instead of a rule.

:::tip[▶ Video]

<YouTube id="-dAmqHFWzyg" title="Top 5 AI Myths — IBM Technology" />

IBM's quick tour of five claims "everybody knows" about AI that don't survive a careful look — the same reflex
this lesson trains, one field over.

:::

## A few numbers you may already be carrying

Some distorted claims are common enough to name and set down.

- The **"441% review-time"** figure is Faros AI, not DORA — and it is +441.5%, and the "+31.3%" beside it is a
  relative increase in unreviewed PRs, not a 31% share.
- The **"Stanford 100,000-developer study"** has no published paper. The numbers travel through talks and slide
  decks; the method is unpublished. Cite it, if at all, as "a Stanford group reports, in talks but not a
  paper."
- **"Copilot makes developers 55% faster"** is GitHub researchers, on GitHub's product, timing one toy
  HTTP-server task, in 2023. It is a marketing artefact, not a finding about your work.
- **"AI capability doubles every 7 months"** is a rounding of METR's own fit — 207 days — and METR's 2026
  revision puts the recent rate at 131 days. It is a regression through twelve models on tasks METR itself
  calls "unpunishing" and "static." Cite the fit; don't cite it as a law.

## How to state a finding honestly

The failure mode on both sides is identical: a real number, stripped of its population and its proxy. The
repair is a sentence shape. State the number, then attach what most retellings drop — who it was measured on,
what proxy stood in for value, who paid, and whether it is still current. "Across tens of thousands of
Microsoft engineers compared against themselves, adopting a CLI agent came with ~24% more merged pull requests
over four months — and a merged PR is not the value it delivers." One sentence, and it carries the number, the
population, the proxy, and the conflict. It reads no worse for it.

Five rules fall out of that shape. Never state a productivity number without its proxy and its population. Keep
percentage points and percent apart. Name the conflict of interest inline. When a source disowns its own
result, lead with that. And prefer the finding that cuts against whoever published it — Anthropic publishing a
cost of its own tool, OpenAI retiring its own benchmark. A result that hurts its author's interest is the
strongest evidence a field full of conflicts can offer.

## The three tiers — soloist · small-team · enterprise

Grading evidence is a universal skill; only the stakes scale.

- **Soloist.** The mechanism is a personal habit: before I act on a number, I trace it to its primary. That is
  the whole discipline. *The failure it prevents:* spending a weekend building on a laundered figure that
  dissolves the moment you open the source.
- **Small-team.** Make "how do we know?" a standing question in design review, and cite primaries in the
  decision doc — not vendor blog posts. *The failure it prevents:* a team standard, a framework choice or a
  testing policy, built on a number nobody traced.
- **Enterprise.** Set an evidence bar for tooling decisions, and have procurement read primaries, not vendor
  decks. *The failure it prevents:* setting policy for thousands off a misread study. Here the course's
  recurring lens bites hardest: the further a decision sits from the work, the more a mis-reading becomes
  *proof* that others rely on. Once "the study says X" is written into a standard, everyone downstream inherits
  the error without ever seeing the source.

## What to take away

- Grade every claim — `MEASURED`, `REPORTED`, `ASSERTED` — and never upgrade a grade in the retelling. Fame is
  not evidence.
- Read for the denominator, the conflict of interest, and the currency of the number; and when in doubt, open
  the primary. Search snippets were wrong repeatedly. The papers were not.
- Percentage points are not percent, and a relative increase is not a share. Get this wrong and you forfeit the
  right to teach the topic.
- The most-repeated number in a genre is often the one that can't be checked, not the one that has been proven.
  GitClear's duplication claim doesn't replicate; the honest finding — maintainability falls via complexity,
  not clones — is the quieter one beside it.
- State a finding with its population, its proxy, its conflict, and its currency attached. Prefer the result
  that cuts against whoever published it.

**New terms:** evidence grade (the `MEASURED` / `REPORTED` / `ASSERTED` ladder), conflict of interest named
inline, going to the primary.
