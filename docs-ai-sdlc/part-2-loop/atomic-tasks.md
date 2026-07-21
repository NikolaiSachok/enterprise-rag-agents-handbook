---
title: "Atomic tasks: decomposition as control"
sidebar_position: 2
---

# The unit of decomposition is the unit of control

[Lesson 1](./vision-to-stages.md) gave every stage a done-condition you can check. This lesson is about the
*size* of that stage — and size is not a matter of neatness. You control an agent at the granularity you cut the
work into. A task too large to verify in one reading is a task you have already lost control of: not because the
agent is sure to fail it, but because you won't be able to tell whether it did. Atomicity is a verification
budget, not a tidiness preference.

## Decomposition is control

The smaller the unit, the tighter the check you can wrap around it. A three-line change you can read in full and
be sure of; a thousand-line change you can only spot-check and hope. Between those extremes control degrades
smoothly — every line you can't hold in your head is a line you're trusting rather than checking. Each boundary
you draw between units is a place you're allowed to stop and verify, and the number of boundaries is the number
of times you get to catch a problem before it compounds into the next unit. So the way you cut the work *is* how
much control you keep over it, and nothing downstream recovers control you gave away at decomposition.

## The right size has a floor and a ceiling

Cut too large and the done-condition goes soft: you can't verify the unit in one pass, so "done" collapses back
into "looks done" — the inferential trap Lesson 1 warned against. Cut too small and a different cost appears:
each tiny unit still needs its own brief, its own slice of context, its own handoff, and past a point the
overhead of coordinating the pieces costs more than the pieces save. The target sits between them: **the largest
unit you can still verify in a single read.** Maximize the work inside each boundary without exceeding what you
can actually check. That is the whole optimization.

## Over-decomposition is its own failure mode

The reflex after a bad surprise is to cut finer and finer, as if smaller were always safer. It isn't, and the
cost is measured. When ETH Zurich
[handed agents more written context per task, the extra artifacts *hurt*](https://arxiv.org/abs/2602.11988) —
success fell and cost rose over 20% per turn, because the agent complied with everything it was given, thoroughly
and unnecessarily (`MEASURED`). Finer decomposition pulls in exactly that direction: more units means more
briefs, more context re-sent each turn, more artifacts to keep consistent with one another. That is Part II's
recurring failure — **artifact overload** — arriving through the back door of "just split it smaller." The cost
curve has a floor. Find it; don't chase zero.

## Something has to hold the whole

When you do split the work, the pieces still have to add up, and something has to keep the whole in view while
the parts get done. The pattern that holds up: an orchestrator keeps the plan and the context; short-lived
workers each take one atomic task, do it, and return a compressed result rather than their entire transcript.
Anthropic reports a
[multi-agent research system beating a single agent by 90.2%](https://www.anthropic.com/engineering/multi-agent-research-system)
on their own task — while cautioning, in the same breath, that coding parallelizes far less cleanly, so the
number doesn't carry across (`MEASURED`, vendor). Read the structure, not the figure: the orchestrator's job
*is* the verification job. It holds the done-conditions and checks each returned piece against them. The workers
generate; the orchestrator decides what counts as done.

This is Lesson 1's verifiable stage, now sized. A stage is atomic when you can verify it in one pass — small
enough that the check is real, large enough that the boundary earns its overhead. Below that line you lose
checkability; above it you pay overload. Decomposition is where you set the line, and it is the last cheap place
to set it.

:::tip[▶ Video]

<YouTube id="kYkZI3oj2W4" title="Multi AI Agent Systems: When One AI Brain Isn't Enough — IBM Technology" />

IBM's walkthrough of the orchestrator-and-workers split, shown as an architecture. Hold it next to this lesson's
warning: the same split that lets you verify pieces is also what pulls in the coordination cost, so weigh it
against a single agent whose whole output you could still check yourself.

:::

## The three tiers — soloist · small-team · enterprise

The invariant holds at every scale: **you control the work at the granularity you decompose it.** What changes
is what the boundary is made of.

- **Soloist.** Cut the work to what you can read in one sitting; the boundary is your own attention. *The failure
  it prevents:* a change too big to review that you approve anyway, because re-reading it became more work than
  trusting it.
- **Small-team.** Agree task boundaries up front and give each unit an owner; the boundary is a reviewable pull
  request. *The failure it prevents:* a unit sized to the author's confidence, landing as a review no one can
  actually perform.
- **Enterprise.** Decomposition becomes a pipeline concern — units sized to independent review and audit, not to
  convenience. *The failure it prevents:* work batched so large that the provably-independent check degrades into
  a rubber stamp.

## What to take away

- You control the work at the granularity you decompose it. A unit too big to verify in one read is control
  you've already lost — decomposition is the last cheap place to keep it.
- Size to the check: the largest unit you can still verify in a single pass. Larger, and "done" goes inferential;
  smaller, and coordination overhead swamps the work.
- Over-decomposition is a real failure, not a safe default. More units means more briefs, more context re-sent,
  more to keep consistent — the measured over-20%-per-turn cost. The cost curve has a floor.
- When you split, keep an orchestrator holding the plan and the done-conditions while short-lived workers return
  compressed results. The orchestrator's job is verification, not generation.

**[New terms](../glossary.md#atomic-tasks)**: atomic task, decomposition as control, over-decomposition, orchestrator and ephemeral workers.
