---
title: "Roles, and where the human stays"
sidebar_position: 5
---

# The human is the router, not a stage

[Lesson 4](./plan-review-implement-critic.md) gave the loop its two gates. This last lesson places the human
relative to that loop — and the placement is the whole point. The human's job is not to be one more stage inside
the loop, taking a turn between the planner and the critic. It is to sit **above** the loop: framing the goal,
setting the done-conditions, owning the gates, deciding what routes where and what is allowed to land. A human
wired in as a stage is the first thing the loop starves when it speeds up; a human above it is the thing the
loop is accountable to.

## The roles, and the one that isn't a stage

Across the loop there are working roles: something plans, something implements, something critiques. Agents can
hold all three, and increasingly do. The human holds a different kind of role — not a step in the sequence but
the router over it: the one who framed the goal into [checkable stages](./vision-to-stages.md), set what "done"
means, owns the critic gate, and makes the final call to land. Kief Morris's framing is "on the loop," not in
it: [the human supervises the loop rather than taking a turn inside it](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html)
(`REPORTED`). In the loop, you become a bottleneck the moment the agents outpace you. On the loop, you are the
control the whole thing answers to — and that role does not get slower as generation gets faster.

## Where the human must stay

Not everything needs a human, and pretending it does is its own failure. But a few checkpoints are irreducible —
delegate them to the loop and the loop loses the thing that made it trustworthy. Three of them: **setting the
done-conditions** (a loop that writes its own acceptance criteria is grading its own homework); **owning the
critic gate** on anything whose failure is a security or correctness problem (Part I's rule holds — that has to
be a hook, and a human stands behind the hook); and **the decision to land** a high-blast-radius change. These
are not "review everything." Reviewing everything is the rubber-stamp trap — a person waved through two hundred
agent outputs a day is not exercising oversight, only laundering it. The irreducible checkpoints are the
specific points where a human's judgment *is* the control and nothing else can be.

## Overload evicts the human first

Part II's recurring failure returns one last time. When artifacts pile up faster than anyone can read them, the
human in the loop is the first casualty — not because someone decided to remove them, but because the volume
made their review impossible. Gojko Adzic names it from the spec-driven world:
[artifact volume broke the human-in-the-loop](https://www.linkedin.com/pulse/spec-driven-development-revenge-waterfall-bdd-taken-gojko-adzic-imquf)
— the ceremony meant to *enable* oversight is exactly what destroyed it (`REPORTED`). This is the deepest reason
the human has to be *on* the loop rather than in it: a router above the work stays effective as throughput
rises; a stage inside it drowns. So design the loop to keep the irreducible checkpoints cheap to perform —
scoped artifacts, clear done-conditions, a critic that pre-filters — precisely so overload can never quietly
evict the human it was supposed to serve.

:::tip[▶ Video]

<YouTube id="5hK7pQsvpy0" title="Building an AI Agent Governance Framework: 5 Essential Pillars — IBM Technology" />

IBM on the structure built around an agent. Read it through this lesson's lens: governance that works puts the
human *on* the loop with a few enforced checkpoints — not *in* it reviewing everything, which is how oversight
quietly becomes a rubber stamp.

:::

## The three tiers — soloist · small-team · enterprise

The invariant holds at every scale: **the human is the router over the loop, not a stage within it — and the
router role can't be collapsed into the work.** What changes is who holds it and how it's enforced.

- **Soloist.** You are every role — planner, implementer, critic, and router. The discipline is not to let the
  router dissolve into the other three: still set your own done-conditions, still make a deliberate land call,
  even when it is only you. *The failure it prevents:* becoming a stage in your own loop, approving your output
  because you also produced it.
- **Small-team.** Split the roles so the router — whoever owns the done-conditions and the land decision — is
  not the implementer, and the human gate is a named person, not "the team." *The failure it prevents:* diffuse
  ownership, where everyone is in the loop and no one is on it.
- **Enterprise.** The human's checkpoints are enforced and provably independent: sign-off on a high-impact
  change is a role the implementing team cannot fill — the same two-party independence
  [Part I tied to SLSA and the DORA regulation](../part-1-foundation/verification-bottleneck.md). *The failure
  it prevents:* "human in the loop" as a compliance checkbox — a name on a form who could not actually have
  reviewed what they signed.

## What to take away

- The human is the router, not a stage: on the loop, not in it. Frame the goal, set the done-conditions, own the
  gates, make the land call — don't take a turn between the agents.
- Some checkpoints are irreducible: defining "done," owning the critic gate on security or correctness, and the
  decision to land a high-blast-radius change. The rest can be delegated.
- Overload evicts the human first. Artifact volume broke the human-in-the-loop in practice — design so the
  irreducible checkpoints stay cheap enough that rising throughput can't quietly remove them.
- "Review everything" is not oversight; it is a rubber stamp. Oversight is a few enforced checkpoints where a
  human's judgment is the control and nothing else can be.

**[New terms](../glossary.md#roles-and-the-human)**: human router (on-the-loop vs in-the-loop), irreducible checkpoint, oversight vs rubber-stamp.
