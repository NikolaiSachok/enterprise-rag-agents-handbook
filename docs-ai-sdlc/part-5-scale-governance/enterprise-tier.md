---
title: "The enterprise tier: audit, provenance, and what's required"
sidebar_position: 4
---

# At this tier, a control that cannot be proven did not happen

Every lesson in this course has ended with three tiers, and the enterprise one has been arriving with the same
shape each time: the mechanism is not really stronger, it is *demonstrable*. This closing lesson is about that
difference. The [introduction](../intro.md) put it as a rule — the further a control sits from the blast
radius, the more it is about proof; the closer it sits, the more it is about capability. Here we are as far
from the blast radius as the course goes, so everything is about proof.

That is worth stating without cynicism. "Compliance theatre" is a real thing, but the requirement underneath
is not silly: at scale, the person who must answer for a change is not the person who made it, often was not
there, and cannot inspect every artefact. The only thing that can carry the answer across that gap is evidence
produced at the time. A control nobody can demonstrate afterwards is, from that person's position,
indistinguishable from one that never ran.

## Audit: what happened, and who is answerable

An audit trail answers *who did what, when, and on whose authority* — and agents add a column. The record now
has to name not only the human accountable but the **agent, the model, and the brief** that produced the
change, because "an AI wrote it" is not an actor and cannot be asked anything later.

The property that makes a trail worth keeping is **non-repudiation**: the record is produced by the system as
a side effect of the work, not written afterwards by the person being recorded. A log an operator can edit is
a story. Signed commits, immutable CI logs, and platform-side records are evidence because the actor could not
have shaped them.

:::tip[▶ Video]

<YouTube id="yh-3WU1FKrk" title="What is Responsible AI? A Guide to AI Governance — IBM Technology" />

IBM's overview of AI governance — accountability, transparency, and oversight as organisational machinery
rather than sentiment. Read it through this lesson's lens: each principle it names has to land as an artefact
somebody can produce on request, or it stays a value statement.

:::

## Provenance: where the artefact came from

Audit records the act; **provenance** records the lineage of the thing produced — which source, which build,
which dependencies, which agent. Two mechanisms carry it in practice. A **software bill of materials** lists
what went into the artefact, so a newly-disclosed vulnerability becomes a lookup instead of an archaeology
project. **Signed attestations** bind the artefact to the process that built it, so "this binary came from
that commit through that pipeline" is checkable rather than asserted; Part I already tied the two-person rule
to [SLSA and DORA](../part-1-foundation/verification-bottleneck.md), and this is the same framework's other
half.

Agent-generated code adds a question these frameworks were not built for but handle cleanly: *which agent and
which model produced this, under what instructions?* Record it at generation time. Reconstructing it later
from commit messages is guesswork, and the moment you need it — a defect class traced to one model's habit, a
licensing question about generated content — is exactly the moment guesswork will not do.

## Separation of duties, when both parties are agents

Part III made this an engineering argument: the agent that writes a change
[cannot be the one that certifies it](../part-3-verification/detection-vs-mutation.md), because whatever
optimises for passing a check will find the cheapest way to pass it. At this tier the same rule arrives from
compliance, and the two justifications reinforce rather than duplicate each other — one says separation
produces better verification, the other says it produces *defensible* verification.

Applied to a fleet, it means the generating agent and the reviewing agent are distinct, run under distinct
identities, and the record shows which was which. And it means the human approval has to be real: Part III's
[review at volume](../part-3-verification/review-at-volume.md) warned that a name on a document nobody could
have read is a compliance artefact rather than oversight. The enterprise version of that warning is sharper,
because the signature is legally meaningful — approving at a rate no human could actually sustain is the exact
failure the control exists to prevent, wearing the control's own clothes.

## The three tiers — soloist · small-team · enterprise

The invariant, stated for the last time: **a control counts when someone other than its operator can
demonstrate afterwards that it ran.**

- **Soloist.** You are your own audit trail, so let the tooling be it: real commits, CI logs you keep, and a
  note of which model produced non-trivial work. *The failure it prevents:* being unable to answer, six months
  on, why a piece of code exists or what generated it.
- **Small-team.** Protected branches, reviews that are recorded rather than verbal, generation and approval by
  different actors, and dependencies inventoried. *The failure it prevents:* an approval culture where the
  record shows sign-off that everyone remembers as "someone glanced at it".
- **Enterprise.** Non-repudiable trails, signed provenance for every artefact, enforced separation of duties
  including between agents, and evidence produced automatically rather than assembled for the audit. *The
  failure it prevents:* controls that work in practice but cannot be shown to have worked — which, at this
  distance from the blast radius, counts as not having them.

## What to take away

- At this tier the mechanism is not stronger, it is **demonstrable**. A control nobody can evidence afterwards
  is, to the person answerable for it, indistinguishable from one that never ran.
- An audit trail must name the **agent, model, and brief** alongside the accountable human — "an AI wrote it"
  is not an actor and cannot be questioned later.
- **Non-repudiation is the property that matters:** the record is a side effect of the work, not something the
  recorded party could have shaped afterwards.
- **Provenance is lineage** — an SBOM for what went in, signed attestations for what produced it. Capture the
  generating model and instructions at generation time; it cannot be reconstructed honestly later.
- **Separation of duties has two independent justifications** — better verification and defensible
  verification — and at scale it applies between agents, not only between people.
- An approval rate no human could sustain is not oversight. It is the failure the control exists to prevent,
  wearing the control's own clothes.

**[New terms](../glossary.md#the-enterprise-tier-audit-provenance-and-whats-required)**: demonstrable control, audit trail, non-repudiation, agent/model attribution, provenance, SBOM, signed attestation, separation of duties between agents, defensible verification.
