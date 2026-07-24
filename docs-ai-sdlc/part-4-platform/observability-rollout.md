---
title: "Observability, rollout, and the kill switch"
sidebar_position: 4
---

# Production is the last gate, and it has to be able to answer back

The course opened with [a loop, not a pipeline](../intro.md) — and the edge that makes it a loop is the one
running from live operation back to planning. This lesson builds that edge. It takes three mechanisms, and they
answer three different questions: **telemetry** decides whether you can *tell* a change went wrong,
**staged rollout** decides *how many people* find out before you do, and the **kill switch** decides *how fast*
it stops. Skip any one and the loop is a pipeline with optimistic wording.

## Some defect classes exist only in production

Part III built a [chain of gates](../part-3-verification/layered-gates/index.md) that runs before anything lands. It
cannot be complete, and not because it was built carelessly: a class of defects only exists under real traffic,
real data distributions, real devices, and real concurrency. No pre-merge gate perceives them, for exactly the
mechanism reason that lesson gave. So production is not "after verification" — production is the **terminal
gate in the chain**, and telemetry is its mechanism. A deploy you cannot observe is a gate with no sensor
attached.

The minimum useful sensor set is small and worth naming, because teams often instrument everything and watch
nothing:

- **Error rate**, split by new-code path where you can, so a regression is not averaged into a healthy
  denominator.
- **Latency at a high percentile**, not the mean — the mean hides the tail where users actually suffer.
- **Saturation** of whatever is scarce: connections, queue depth, memory.
- **One business signal** that would move if the feature were broken in a way none of the technical metrics can
  see — checkouts started, messages sent, sessions resumed. This is the one people skip, and it is the one that
  catches a change which is technically healthy and functionally useless.

And close the circuit back to Part III: a defect that reaches production *is* an escape, so it belongs in the
[escape ledger](../part-3-verification/escape-ledger.md) with the gate that should have caught it named. That is
the feedback edge in its most concrete form — operation teaching the gate chain what it is blind to.

## Staged rollout bounds the blast radius in audience and time

If a bad change is going to happen, the useful question is how many users meet it first. A staged rollout —
canary, then a percentage ramp, then full — converts a binary event into a controlled one. Two design points
carry most of the value.

**Separate deploy from release.** Shipping code and enabling behaviour should be two different acts, which is
what a feature flag buys you. The code goes out dark; the behaviour turns on for 1%, then 10%, then everyone.
When something is wrong, you change the audience without shipping anything.

**Automate the rollback trigger.** A ramp that advances on a schedule and retreats only when a human notices is
a slow gate wearing a fast one's clothes. Bind the ramp to the signals above: an error-rate or latency breach
stops and reverses it without waiting for judgment. Human judgment is the scarce thing Part III told you to
[spend deliberately](../part-3-verification/review-at-volume.md); noticing a metric move is not where to spend
it.

There is a measured hint that this edge deserves the attention. DORA's 2025 report finds AI adoption carries a
*negative* relationship with delivery stability — and, as the introduction insisted, that is `MEASURED` only in
the weak sense of a large self-reported survey, perception rather than telemetry. It does not license "AI makes
teams worse." It licenses precisely one thing: when generation accelerates, the part that absorbs the shock is
the release and recovery path, so build that part deliberately.

:::tip[▶ Video]

<YouTube id="ztIIcXNzMN4" title="What is Site Reliability Engineering (SRE)? — IBM Technology" />

IBM's introduction to SRE — service level objectives, error budgets, and reliability treated as an engineering
target rather than an aspiration. Read it as the vocabulary for this lesson's automation: an SLO is the
threshold a rollout ramp can be bound to, which is what turns "someone will notice" into a mechanism.

:::

## The kill switch must not need the pipeline that broke

A rollback that requires a green CI run, a fresh build, and a deploy is not a kill switch. It is a hope with a
lead time — and it fails in exactly the situation it exists for, when the pipeline itself is part of what went
wrong. The switch has to be a *state change*, not a *build*: flip the flag, shift the traffic weight, revert
the routing. Whatever the mechanism, the test is one question — can it be operated by one person, in seconds,
without producing a new artefact?

Fleets add a second position to the switch that single-developer workflows do not have. Stopping the *change*
is a rollback; stopping the *source* means pausing the agents. A fleet that is still generating against a base
you have just reverted will cheerfully rebuild the problem, or stack new work on a foundation you no longer
trust. So the runbook needs both: revert the artefact, and halt the loop that produced it — the
[human router](../part-2-loop/roles-and-the-human.md) exercising the one intervention that cannot be delegated
to the thing being stopped.

## The three tiers — soloist · small-team · enterprise

The invariant does not move: **a change is observable in production, reaches its audience gradually, and can be
stopped by one person in seconds without a rebuild.** What scales is how much of it runs without a human in the
path.

- **Soloist.** Error tracking that actually pages you, a flag you can flip from your phone, and the previous
  version kept ready to serve. *The failure it prevents:* learning from a user, days later, that the release
  broke sign-up — and then needing an hour to undo it.
- **Small-team.** Dashboards tied to a handful of agreed signals, canary or percentage rollout as the default,
  automated revert on threshold breach, and a written runbook naming who flips what. *The failure it prevents:*
  everyone assuming someone else is watching the graph during a ramp.
- **Enterprise.** SLOs with error budgets governing release pace, progressive delivery with automated analysis,
  audited kill-switch procedures rehearsed like a fire drill, and incident review feeding the escape ledger.
  *The failure it prevents:* a rollback capability that has never been exercised outside a slide deck, being
  discovered during the incident it was written for.

## What to take away

- **Production is the terminal gate.** Some defect classes exist only under real traffic and real devices; no
  pre-merge gate can perceive them. Telemetry is that gate's sensor — a deploy you cannot observe is a gate
  with nothing attached.
- Instrument few things well: error rate on the new path, high-percentile latency, saturation, and **one
  business signal** that catches a change which is technically healthy and functionally broken.
- **Separate deploy from release** so audience is a dial, not a deploy — and bind the ramp to automatic
  reversal on a threshold, because "someone will notice" is not a mechanism.
- **The kill switch is a state change, not a build.** If undoing needs the pipeline, it fails precisely when
  the pipeline is the problem. For fleets it has two positions: revert the change *and* pause the agents.
- A production defect is an **escape**: send it back to the gate chain with the blind spot named, or the loop
  is a pipeline that merely ends near production.

**[New terms](../glossary.md#observability-rollout-and-the-kill-switch)**: production as terminal gate, telemetry signal set, business signal, deploy/release separation, feature flag, staged rollout (canary · ramp), automated revert, kill switch, fleet pause.
