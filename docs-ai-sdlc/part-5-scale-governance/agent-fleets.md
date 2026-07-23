---
title: "Running agent fleets: isolation and parallelism"
sidebar_position: 1
---

# Agents parallelise only where they share nothing

Parts II through IV built one stream of work: a loop, a chain of gates, and a platform under it. Part V asks
what changes when many agents run at once — and it starts with the question that gets skipped in the rush to
launch more of them. *What can actually run in parallel?* The answer has almost nothing to do with how many
agents you can afford. It is decided by what they share.

## Sharing is what serialises

Two agents are independent exactly when their work touches disjoint sets — different files, different branches,
different resources. The moment they share something mutable, that shared thing stops being a detail and
becomes the scheduler: it decides who waits.

In coding work the most common one is the **working tree**. A git checkout has exactly one branch checked out
at a time, so two agents each building their own branch in one tree collide by construction — not occasionally,
not under load, but by definition. The failure is confusing rather than loud: one agent's uncommitted edits
show up in the other's `git status`, a commit sweeps up files nobody meant to include, and a branch switch
silently carries someone else's work along.

The same shape repeats elsewhere. One database that every agent migrates. One API quota they all draw down.
And the quiet one: **a shared corpus that each task appends to** — a rules file, a decision log, a canon.
Two parallel appends do not merge; the second write wins and the first disappears, with nothing failing to
announce it.

## Isolation is cheaper than coordination

The instinct is to coordinate: locks, a queue, "just tell the agents to take turns." The cheaper answer is to
remove the sharing. Give each agent its own checkout — `git worktree add` creates a separate working directory
against the same object store, so each agent's `git status` reflects only its own changes and no branch
switch can disturb a neighbour.

The cost is real but small and constant: a moment of setup and some disk per agent. The benefit is that an
entire class of interference stops existing rather than being managed. This is the same trade Part IV made
with [the sandbox](../part-4-platform/least-privilege-sandboxing.md) — a boundary the platform enforces beats
cooperation you have to trust — and the same reason the fix belongs in the mechanism rather than in an
instruction telling agents to be careful.

## What must stay serial, and why

Isolation does not make everything parallel. Three things stay serial, and pretending otherwise is how fleets
produce work that has to be redone.

- **Accretive shared state.** Anything where tasks *append* to one artefact — the rules corpus, a glossary, a
  changelog. Run those sequentially, or have each task emit its own fragment and merge deliberately.
- **Schema and other one-way changes.** Two concurrent migrations against one database is not a race you want
  to discover in production; Part IV's [expand → migrate → contract](../part-4-platform/environments-migrations-data.md)
  assumes one hand at a time.
- **Integration.** Generation parallelises; merging does not. The gate chain and the merge queue are a single
  file, by design — that is where conflicting work is reconciled.

There is a fourth, easy to miss: **a review that reads a live branch while another agent is mutating the tree**
sees a moving target. Read from the remote, or read in isolation.

:::tip[▶ Video]

<YouTube id="X3XJeTApVMM" title="What Are Orchestrator Agents? AI Tools Working Smarter Together — IBM Technology" />

IBM on orchestrator agents — one agent coordinating others rather than doing the work itself. Watch it against
this lesson's constraint: orchestration decides *who does what*, but it cannot make two tasks independent that
share a mutable resource. Orchestrate the assignment; isolate the workspace.

:::

## The fleet is bounded by review, not by compute

Part I's thesis returns here in its most practical form: [verification is the bottleneck](../part-1-foundation/verification-bottleneck.md).
Doubling the agents doubles the output *and* doubles the review queue. Since the gate chain and the human
router do not double with them, fleet size is capped by the capacity to check, not by how many processes you
can start.

That gives an honest way to size a fleet: measure the serial fraction — integration, review, and whatever else
cannot run concurrently — because that fraction, not the agent count, sets the ceiling on the whole thing.
Beyond it, more agents buy contention, rework, and a longer queue rather than more finished work. The useful
question is never "how many agents can I run" but "how much can this chain absorb," and the honest answer is
usually smaller than the number of agents you could afford.

## The three tiers — soloist · small-team · enterprise

The invariant holds everywhere: **parallelise only across disjoint state, isolate the workspace rather than
coordinating access to it, and size the fleet to what the verification chain can absorb.**

- **Soloist.** One worktree per concurrent task, and no more concurrent tasks than you can genuinely review in
  a sitting. *The failure it prevents:* two agents in one checkout producing a commit that mixes their work,
  with the cleanup costing more than the parallelism saved.
- **Small-team.** Isolation by default in the tooling rather than by remembering, a serial merge queue, and an
  explicit list of the artefacts that only one task may touch at a time. *The failure it prevents:* two
  parallel tasks appending to the same shared corpus, where the second silently erases the first.
- **Enterprise.** Fleet capacity planned against measured verification throughput, isolation enforced by the
  platform, and contention treated as a first-class metric alongside cost. *The failure it prevents:* scaling
  the fleet to the budget instead of to the bottleneck, and discovering the ceiling as a growing backlog of
  unreviewed changes.

## What to take away

- **What can run in parallel is decided by what is shared,** not by how many agents you can launch. Shared
  mutable state is the scheduler.
- A single working tree is the classic collision: one checked-out branch means concurrent branch work fails by
  construction, and it fails confusingly rather than loudly.
- **Isolate rather than coordinate.** A private worktree per agent costs a little setup and removes a whole
  class of interference; locks and turn-taking only manage it.
- Keep serial what is genuinely serial: **accretive artefacts**, schema changes, and integration. Generation
  parallelises; merging does not.
- **The fleet is bounded by review capacity.** Measure the serial fraction — it, not the agent count, sets the
  ceiling. Past it, more agents buy contention rather than throughput.

**[New terms](../glossary.md#running-agent-fleets-isolation-and-parallelism)**: agent fleet, shared-state serialiser, worktree isolation, accretive artefact, parallel generation / serial integration, serial fraction, contention.
