---
title: "Plan, review, implement, critic"
sidebar_position: 4
---

# Review the plan before the work; critique the work before it lands

The last three lessons built the vocabulary: [verifiable stages](./vision-to-stages.md),
[atomic units](./atomic-tasks.md), [artifacts as the interface](./artifacts-interface.md). This lesson is the
loop those pieces run in, and it is the keystone of Part II. The loop has exactly two gates that matter: a
**review before any code is written**, and a **critic before anything lands**. Cheap generation sits between
them. Take out either gate and the loop collapses back into the unchecked generation Part I warned about.

## Plan-first: the cheapest place to be wrong

Reviewing a plan is the highest-leverage check you have, because a mistake in a plan costs a sentence to fix and
the same mistake in the code costs a rewrite. The plan is an artifact, made of verifiable stages — so it is
reviewable in a way a half-built feature is not. Read it before a line of code exists: is the decomposition
right, are the done-conditions actually checkable, is anything load-bearing missing? Every problem you catch
here is one you don't pay for, far more expensively, downstream.

## Implement against the reviewed plan

Then generation runs — cheaply, freely — but against the plan you already reviewed, not against a fresh
interpretation invented on the way. The plan is the contract; the implementation's job is to satisfy it, stage
by stage, each stage carrying the done-condition that says when it's finished. This is the part agents are
genuinely good at, and it is the part that got cheap. It is also the part that means the least on its own: an
implementation nobody planned and nobody checked is just confident output.

## The critic is a gate, not a suggestion

Before anything lands, a critic checks the work — and here the whole course converges. A critic that only
advises is a skill, not a hook: the model may take it or leave it. What the loop needs is a gate the work cannot
pass without clearing. And it cannot be the same agent that produced the work, because
[an agent grading its own homework is not verification](../part-1-foundation/rules-that-hold.md) — it optimizes
the check instead of doing the job, and it will find the shortcut. So the critic has to be independent, and it
must not be able to edit what it critiques: separation of duties, restated for the loop. Simon Willison puts the
human version as a flat rule —
[don't file pull requests with code you haven't reviewed yourself](https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/)
(`REPORTED`). The critic gate is where Part I's "review is the control point" stops being a slogan and becomes a
step you can't skip.

## When the loop is too much

The loop is priced for change-risk, and not every task carries it. Run the full plan-review-implement-critic
ceremony on a one-line fix and you get [Böckeler's sledgehammer](https://martinfowler.com/articles/harness-engineering.html) —
sixteen acceptance criteria for a typo (`REPORTED`). The judgment is the one from Lesson 2: size the process to
what is at stake. A throwaway script does not need a critic gate; a change to production authentication needs
both gates and a human standing at the second one. The loop is a control system — you scale it to the blast
radius, not to every keystroke.

:::tip[▶ Video]

<YouTube id="trfUBIDeI1Y" title="LLM as a Judge: Scaling AI Evaluation Strategies — IBM Technology" />

IBM on using a model as an automated critic. Useful and real — with the caution this lesson insists on: a
model-judge is inferential and gameable, so keep it independent of the work it judges, and never optimize the
work against the judge.

:::

## The three tiers — soloist · small-team · enterprise

The invariant holds at every scale: **the loop has a review before the work and a gate before the landing, and
the gate is not run by the thing it checks.** What changes is who runs the gate.

- **Soloist.** You are both author and critic, so make the gap real: review your own plan before you build, and
  your own diff before it lands, as two separate acts with your generator's output in between. *The failure it
  prevents:* writing and "reviewing" in one pass, which is not reviewing.
- **Small-team.** A second person reviews the plan and a second person — or shared CI the author can't edit —
  gates the merge. The critic is not the author. *The failure it prevents:* rubber-stamp review, the gate that
  exists but always passes.
- **Enterprise.** Plan review and merge gate are both enforced and both provably independent of the
  implementer; the critic cannot be overridden by the thing it is checking. *The failure it prevents:* a gate
  the implementing team controls, which is a gate in name only.

## What to take away

- The loop has two gates: review the plan before the work, critique the work before it lands. Generation is the
  cheap part between them, and it means little on its own.
- Plan-first is the highest-leverage review: a plan error costs a sentence; the same error in code costs a
  rewrite.
- The critic is a gate, not a suggestion — and never the agent that did the work. An agent grading its own
  homework optimizes the check instead of doing the job.
- Scale the ceremony to the risk. The full loop on a one-line fix is a sledgehammer; production auth needs both
  gates and a human at the second.

**[New terms](../glossary.md#plan-review-implement-critic)**: the loop (plan-review-implement-critic), plan-first review, critic gate.
