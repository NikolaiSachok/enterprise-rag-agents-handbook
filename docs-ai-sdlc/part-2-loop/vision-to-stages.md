---
title: "From vision to verifiable stages"
sidebar_position: 1
---

# A goal you can't check isn't a plan

Part I ended on a single constraint: [the bottleneck in agent-built software is verification capacity, not
generation](../part-1-foundation/verification-bottleneck.md). Part II is the answer to that constraint — **the loop** that spends cheap generation freely and
concentrates the scarce resource, human review, exactly where it changes the outcome. This first lesson is where
the loop begins, and it begins before a line of code: with how you cut a vision into stages. The move that
decides everything downstream is quiet and easy to skip — **give every stage a done-condition you can check
without trusting the agent that it's done.** A stage without one isn't a small stage. It isn't a stage at all.

## A stage is a done-condition, not a step

The instinct is to break a goal into *things to do*: scaffold the API, add auth, wire the client. That is a list
of steps, and a list of steps is not yet a plan you can run an agent against — because nothing in it tells you
when a step is actually *finished*, as opposed to merely reported finished. An agent will tell you it added auth.
The question the plan has to answer in advance is: **how would I know, without asking it?**

So the unit of a plan is not the step but the **done-condition** — the concrete, inspectable fact that becomes
true when the stage is genuinely complete. "Auth is done" is a hope. "A request without a valid token gets a 401,
and here's the test that asserts it" is a done-condition. The difference is whether completion is something you
can *confirm* or something you have to *believe*. In a loop where generation is cheap and trust is the expensive
thing, the done-condition is the unit of trust — and stages are just the intervals between two checks you can
actually run.

## Checkable beats inferential

Not all done-conditions are worth the same. Lesson 5 of Part I drew the line this course keeps returning to:
[a control is either **computational** — deterministic, fast, and trustworthy (a test, a linter, a type check, a
diff) — or **inferential**](../part-1-foundation/rules-that-hold.md), an LLM judging semantics "expensively and
probabilistically." A done-condition inherits that split. "The test suite goes green" is computational: it can't
be talked out of a failure. "A reviewer model says the code looks correct" is inferential: it can, and under the
right pressure it will.

Prefer the checkable one, and when a stage's only available done-condition is inferential, treat that as a signal
about the *stage*, not just the check. A stage you can only confirm by asking a model to vouch for it is a stage
you haven't cut small or concrete enough. The best planning question is not "what should the agent build next?"
but "what is the next thing whose completion I could verify in a few minutes with something that can't lie to
me?" Size the stage to *that*.

## The anti-pattern: stages sized to the model's confidence

The common failure is to decompose by what the model seems able to do in one confident pass — a whole feature, a
whole module — because it *offers* to, and the offer is persuasive. That inverts control. You end up with stages
sized to the generator's reach instead of to your ability to check them, and the gap between "looks done" and "is
done" widens exactly as the stakes rise. Birgitta Böckeler's blunt version of the same trap: an agent asked to do
a large, loosely-bounded chunk turns
[a small bug into "4 user stories with a total of 16 acceptance criteria"](https://martinfowler.com/articles/harness-engineering.html) —
ceremony that looks like rigor while the one thing that mattered, a check you could actually run, never arrives
(`REPORTED`, her own practice).

The discipline is the reverse: let the size of the check set the size of the stage. Generation is cheap enough
that cutting a feature into six verifiable stages costs you almost nothing in output and buys you six places to
catch a problem while it's still small.

## Why this is the verification bottleneck, at planning time

None of this is new to Part II; it is Part I's thesis moved one step earlier. "Verification is the bottleneck"
sounds like a claim about *review* — something you do after code exists. But the leverage is upstream: **a plan
whose stages carry checkable done-conditions is a plan that has pre-decided where verification will happen and
whether it can succeed.** Skip the done-conditions and you have deferred the bottleneck, not removed it — you'll
meet it later, all at once, as a pile of generated code nobody scoped a way to check. The cheapest place to spend
verification is in the shape of the plan.

## The evidence, honestly graded

The field is early here, and the honest grade on most of it is `REPORTED`, not `MEASURED` — practitioners
converging, not a controlled trial. But the convergence is worth stating, because it points one way. Every
public account of spec-and-stage-driven development that *succeeds* is a **creation** story — a greenfield app,
a fresh feature — and nearly every account that *fails* is a **maintenance** story, where the plan met a
codebase that already existed and drifted from it. Colin Eberhardt's hands-on trial reaches the same
uncomfortable place from the inside: the ceremony helps most exactly where the work is new and bounded, and
[reads as "reinvented waterfall" when it isn't](https://blog.scottlogic.com/2025/11/26/putting-spec-kit-through-its-paces-radical-idea-or-reinvented-waterfall.html)
(`REPORTED`).

The falsifiable prediction the course is willing to be judged on: **stage-driven planning survives as a technique
for well-bounded increments and does not survive as a methodology for evolving whole systems.** That is not a
reason to skip verifiable stages — it is a reason to size them to a real increment you can check, and to be
suspicious of any plan that promises to spec an entire system into existence up front.

:::tip[▶ Video]

<YouTube id="2ihEirLXeas" title="AI Agents + LLM Reasoning: Transforming Autonomous Workflows — IBM Technology" />

IBM's tour of how an agent reasons a goal into a workflow — the planning step this lesson disciplines. The
distinction that matters here: a sequence the model proposes is not yet a sequence of stages you can check.

:::

## The three tiers — soloist · small-team · enterprise

The invariant holds at every scale: **a stage is defined by a done-condition you can check, not by a step you can
describe.** What changes is how independent and how enforced that check has to be.

- **Soloist.** The done-condition is something you can eyeball or run in a minute — a test, a diff, a page that
  loads. The whole discipline is refusing to mark a stage done on the agent's word. *The failure it prevents:*
  a weekend spent building on a stage that only ever "looked" finished.
- **Small-team.** Done-conditions are written into the plan and shared, so two people agree in advance on what
  "done" means for each stage. *The failure it prevents:* the stage that's done by the author's definition and
  unfinished by the reviewer's — discovered at merge, not at planning.
- **Enterprise.** The done-condition is an enforced gate a provably-independent check runs, not a line in a doc
  the implementer can wave past. *The failure it prevents:* stages that self-certify at scale, where "done"
  quietly means "the person who built it says so."

## What to take away

- A step is a thing to do; a stage is a thing you can confirm is done. Plan in stages, and give each one a
  **done-condition** — the inspectable fact that turns true when it's genuinely complete.
- Prefer **checkable** (computational) done-conditions over **inferential** ones. If a stage can only be
  confirmed by a model vouching for it, cut the stage smaller or more concrete.
- Size the stage to the check, not to the model's confidence. Generation is cheap; six verifiable stages cost
  almost nothing and buy six early places to catch a problem.
- This is the verification bottleneck moved to planning time: a plan with checkable stages has pre-decided where
  verification happens and whether it can succeed.
- Honest grade: mostly `REPORTED`. The convergent signal — success is a creation story, failure a maintenance
  story — is a reason to bound your stages to real increments, not to spec a whole system up front.

**[New terms](../glossary.md#vision-to-stages)**: verifiable stage, done-condition, checkable vs inferential control, stage sizing.
