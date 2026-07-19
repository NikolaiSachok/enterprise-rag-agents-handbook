---
title: Verification is the bottleneck
sidebar_position: 1
---

# Verification is the bottleneck

Generation got cheap; checking did not. That single asymmetry is the spine of this whole course. And the
evidence for it is unusually clean — cleaner, in fact, than for almost anything else people claim about AI and
software. Go to the primary studies and one half of the story is measured cleanly, the other barely at all.
Output rises, reliably, across independent measurements; whether the output is any *good* stays unmeasured. Put
those two together and you get the thesis of this lesson: unchecked generation is a liability, not throughput.

A note on how the claims are graded, because this lesson leans on it. `MEASURED` means a controlled study or
randomised trial found the effect; `REPORTED` means practitioners describe it but nobody has isolated it;
`ASSERTED` means someone argues it without measuring. The grade rides along with every number below. Lesson 2
defines the full ladder.

## Throughput rises — this half of the story is real, and it replicates

Start with the part that is not in doubt. Adopters of command-line coding agents merge more pull requests, and
the effect is large, durable, and reproduced across companies.

Microsoft measured it most carefully (`MEASURED`): engineers who adopted a CLI coding agent merged about
**24% more pull requests**, and the lift held across four months with no fade. It is dose-responsive, too —
five or more days a week of use tracked to roughly +50%, four days to +22%, three days to +15%. The study was
observational, using within-person fixed effects, and it passed a clean placebo test (−1.1%, with a confidence
interval spanning zero). Two cautions travel with it. The authors are Microsoft employees, and Microsoft owns
both GitHub and the Copilot CLI — the sell-and-measure conflict this course flags everywhere. To their credit,
they flag it themselves. And the outcome is *merged PRs per engineer per day for voluntary adopters* — a
**proxy metric**, a measurable stand-in for value, not value itself.

Google saw the same shape (`MEASURED`): **+17.5% change-lists** per developer-month, with a tight interval, for
adopters of its "Transform Code" tooling. Same caveats — a throughput proxy, an observational
difference-in-differences design over 36,000 treated and 18,000 control developers, and adopters who
self-select into using the tool.

A third number circulates and is worth citing only with its caveat attached (`MEASURED`): one enterprise that
*mandated* a "2×" target reached **2.09×** per-capita merged PRs. That is a textbook Goodhart case — a single
company that mandated the exact metric it then measured. When the metric is the target, it stops measuring
anything.

The teaching move here is small and strict: state the lift plainly, and always name the proxy. "24% more merged
PRs at Microsoft," never "24% more productive."

## Quality falls — and the debt is on credit

Now the other half. The same wave of agent-written code shows measurably worse internal quality, and the
degradation persists after the speed stops.

A Carnegie Mellon matched difference-in-differences study (`MEASURED`) compared agent-first repositories against
matched controls: cognitive **complexity rose 34.85%** (standard error 0.059, p&lt;0.001) and **static-analysis
warnings rose 17.73%** (SE 0.048, p&lt;0.001). Code duplication rose **7.92%**, but that result was not
statistically significant — a detail worth holding onto, because "AI increases copy-paste" is a claim that
does not survive controls. The comparison covered 401 treated repositories against 606 matched controls, with
data ending November 2025. One honest limit: warnings are not defects. And a citation guard: quote **17.73% and 34.85%** with their cohort, not as the abstract's headline "18% and 39%," because that 39% actually
belongs nearer the IDE-first group, a different population.

A companion study (`MEASURED`) makes the timing explicit: the quality risks are sustained "even when velocity
advantages fade," and the accumulated debt is what *drives* the later slowdown. The velocity lift faded around
month two and was gone by month three, while the complexity stayed. That is the shape of debt taken on credit.
You get the speed now and pay for it later, with interest — the mess you generated slows the next change down.

One thing not to hide: the same research group authored these quality studies, so they corroborate each other
rather than independently replicate each other, and the literature leans heavily on a single dataset of
self-identifying agent pull requests. The finding is real; it is not yet the settled consensus a stack of
independent replications would make it.

The teaching move: you don't get the speed for free. You get it on credit.

## Comprehension falls — without even buying speed

A randomised controlled trial from Anthropic and Stanford (`MEASURED`) put the cost somewhere more uncomfortable
than code quality: understanding. Engineers learning an unfamiliar async library scored **50%** on comprehension
with AI versus **67%** doing it manually — a gap of **17 percentage points** (a 25% relative drop). And they did not
even buy speed with it: completion was about two minutes faster with AI, a difference that was not statistically
significant. The study ran with 52 mostly-junior engineers on an unfamiliar library.

Say that gap correctly or forfeit the right to teach the topic: 67 to 50 is **17 percentage points**, not "17%
lower." Percentage points and percent are different quantities, and getting it wrong is the exact kind of sloppy
that this course exists to correct.

The genuinely interesting result is inside the AI group. Full delegators — the ones who handed the whole task to
the model — scored under 40%. Those who used AI for conceptual inquiry, asking it to explain rather than to do,
scored at or above 65% — near the manual group's 67%. The researchers found six interaction patterns;
three of them preserved learning. So the tool did not decide the outcome — the interaction pattern did.

Two caveats keep this honest. The scope is *learning an unfamiliar library*, not steady-state work on a codebase
you know — a regime chosen to stress comprehension. And the result cuts against its source's own interest: an
Anthropic author published a limit of AI. That is exactly what makes it credible. Whether comprehension debt
compounds over a whole career is `UNKNOWN` — nobody has measured that.

## Self-assessment is broken — you can't feel the effect, you have to measure it

If quality and comprehension were the only casualties, you could hope to notice the damage as you worked. You
can't — and that is the finding that reorganizes everything.

METR's randomised trial (`MEASURED`) is the one that lands the point: experienced developers **estimated they
were 20% faster** using AI on their own repositories; measured, they were **19% slower**. They had forecast a
24% speedup beforehand and, even after finishing, still believed AI had sped them up. METR's own summary is that
participants overestimated by **about 40 percentage points**. The experts got the *sign* wrong too — economists
surveyed beforehand predicted 39% shorter completion times, ML researchers 38%.

Two things about that study. It was small — 16 developers across 246 tasks — and it studied expert maintainers
on repositories they had owned for around five years, the exact regime where AI helps least. The entire
self-assessment conclusion rests on this single trial; even METR notes it is the only study to gather survey and
field-experiment results on the same population and metric. Lean on it for what it robustly shows and nothing
more.

And here is the critical freshness caveat, because this number is the most-misquoted figure in the field: the
"19% slower" result is **superseded** — METR itself has labelled it out of date. Do not carry "AI makes
developers 19% slower" as a current fact. The lesson that survives is not the number; it is the mechanism. You
cannot feel AI's effect on your own speed. You have to measure it.

## Benchmarks don't predict production — the denominator trap

Move from how developers feel to how the tools score, and the same gap reopens between the number and the
reality it is supposed to stand for.

Meta published the cleanest production figure in the corpus (`MEASURED`), and it is sobering: a code-review
assistant that scored **68% on an offline exact-match benchmark applied at just 19.7% in production** — about a
3.5× gap. "Applied" here means the concrete thing that matters: an AI-suggested fix to a real review comment was
*actually accepted and used by the engineer*. Roughly one suggestion in five. About 80% were not applied. That
Meta built the tool and still published the low number is what makes it credible.

Then the denominator trap, from the same Google telemetry (`MEASURED`): the *identical* data yields either
**28.7% or 70.6%** for "share of code written by AI," depending only on whether copy-paste sits in the
denominator — and Google prints both figures side by side, from one dataset. The lesson generalises: any "X% of
our code is AI-written" headline is a **denominator choice**, not a fact. Every one of these productivity
headlines — merged PRs, commits, lines of code, characters, time-on-task — is a proxy. None of them is value.

## The benchmark itself collapsed

It gets worse for anyone hoping a benchmark will settle the question, because right now there is no trustworthy
benchmark to appeal to.

OpenAI retired SWE-bench Verified in February 2026 (`MEASURED`). On audit, **at least 59.4% of the hard
problems had tests that reject functionally correct solutions** — the benchmark was failing right answers — and
OpenAI's own note was that scores had come to "reflect how much the model was exposed to the benchmark at
training time." Five months later it **retracted its recommendation of the replacement**, SWE-bench Pro, in July
2026, estimating that **around 30% of that benchmark's tasks are broken** too. As of this writing there is no
industry-endorsed frontier coding benchmark.

:::tip[▶ Video]

<YouTube id="kDY4TodQwbg" title="What are Large Language Model (LLM) Benchmarks? — IBM Technology" />

IBM's primer on what an LLM benchmark actually measures — useful background for why the coding benchmarks above
stopped measuring what everyone assumed they did.

:::

Two supporting findings point at the mechanism rather than the headline: an audit found **63% of successful
resolutions retrieved the fix rather than derived it**, and among plausible-looking patches, **29.6% pass the
tests while being the wrong fix**. The failure is not one bad dataset that a better one would replace. Mining
merged pull requests for benchmark tasks keeps reproducing the same defect class, for a structural reason worth
stating flatly: **a merged PR was never a specification.** It records that something shipped, not what was
required — and you cannot grade a solution against a spec you never had. (This thread returns in Lesson 3, on
misreading what a merge proves, and in Lesson 5, on gates that can be gamed.)

## The one honest headline

Put the halves together and the honest synthesis writes itself — in the words of the people holding the
strongest pro-AI number. Output is up; whether *value* is up is not established; and the field lacks
agreed-upon measures to answer the question. That is Microsoft's own conclusion, from the same team that
reported the 24% throughput gain. The researchers most entitled to declare victory decline to.

And every study, whichever way its sign points, indicts the same missing capacity: **review and verification.**
As one of the quality studies puts it, review is the control point — and AI does not fix the sign of its own
effect on quality. The team does. That is why this course spends its length on verification and not on prompts.

:::note[Same tool, opposite results — it's task familiarity]

Two randomised trials, opposite signs. Google engineers on an *unfamiliar* enterprise task came out **21%
faster** with AI; expert maintainers on repositories they had owned for *five years* came out **19% slower**.
The difference is almost certainly not the AI — it is **task familiarity**, the underlying variable that
explains the split, sitting underneath both results. Teach the contrast, not either number in isolation; and note that both are now stale.

:::

## The three tiers — soloist · small-team · enterprise

The invariant holds at every scale: **unchecked generation is a liability, not throughput.** The bottleneck is
universal. What scales is the verification budget you can bring to it. And, following the course's recurring
lens, the further that check sits from the blast radius, the more it becomes about *proof* rather than raw
*capability* to catch the bug.

- **Soloist.** The mechanism is your own eyeballs plus one automated gate — a build or test suite the agent
  cannot edit. Speaking from my own solo practice, the non-negotiable is that second clause: the gate has to be
  something the generator cannot reach in and quietly relax. *The failure it prevents:* shipping generated code
  you *feel* is faster but that is measurably debt-laden — because, per the self-assessment finding above, you
  cannot judge that by feel.

- **Small-team.** Add a second human's independent review, with shared CI standing in as the evidence both of
  you trust. *The failure it prevents:* the author-reviews-own-work blind spot, and the complexity debt that
  otherwise accrues silently until it drives the month-three slowdown.

- **Enterprise.** Independent review becomes a structural requirement — the reviewer is provably not the author
  — feeding a loop where production telemetry returns to the fix. *The failure it prevents:* velocity that
  raises change volume without a control system able to absorb it, which is the downstream instability DORA
  flags. Here the practice meets a named standard almost exactly. Keeping the critic separate from the
  implementer *is* **separation of duties**, the long-standing audit and security principle — and it is
  codified, not merely recommended. OpenSSF's **SLSA Source Level 4** requires "Two-Party Review," and the EU's
  **DORA regulation (RTS Article 17)** mandates independence between the functions that approve a change and the
  functions that implement it. That backing is strong in its own right: `MEASURED` for the change-approval
  research beneath it, and regulator-mandated for the DORA clause. This is the tier where the same review is
  also about *proof* — evidence a third party or an auditor can test — whereas at the soloist tier it is purely
  about the *capability* to catch the bug. And it is worth naming the gap the standards leave: they mandate that
  the reviewer be independent, but not that each layer of checking declare what it structurally *cannot* see.
  That discipline — naming each gate's blind spot — is the course's own contribution, and it shows up in
  Lesson 5.

## What to take away

- Generation is cheap; checking is not. The binding constraint on agent-built software is verification capacity,
  not model capability.
- Throughput genuinely rises and the result replicates — but every throughput number (merged PRs, change-lists,
  lines, characters) is a proxy. None of them measures value.
- Quality and comprehension fall in controlled measurement, and the quality cost persists after the speed fades.
  You take the velocity on credit and repay it as tech debt.
- You cannot self-assess AI's effect on your own speed — the measured error is around 40 percentage points, and
  developers get even the sign wrong. Measure; don't feel.
- Benchmark scores don't survive contact with a real SDLC (Meta's 68% → 19.7%), "% AI-written" is a denominator
  choice, and there is currently no trustworthy frontier coding benchmark at all — because a merged PR was never
  a specification.
- The honest headline, from the strongest pro-AI number's own authors: output is up, value is unproven, and the
  lever that decides which way it goes is review.

**New terms:** verification bottleneck, proxy metric, denominator choice, benchmark-to-production gap,
self-assessment gap, tech debt on credit.
