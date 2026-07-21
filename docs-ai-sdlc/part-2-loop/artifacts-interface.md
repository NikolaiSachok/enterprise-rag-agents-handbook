---
title: "Artifacts as the only interface"
sidebar_position: 3
---

# If it didn't cross as an artifact, it didn't cross

[Lesson 1](./vision-to-stages.md) gave each stage a done-condition; [Lesson 2](./atomic-tasks.md) sized the
stages. This lesson is about what passes *between* them. Stages hand off through **written artifacts, not
conversation** — and the artifact at each boundary is the only thing a reviewer, or the next agent, can actually
inspect. A decision, a spec, or a result that lived only in a chat and never became an artifact didn't really
cross the boundary: there is nothing to review, nothing to diff, nothing the next stage can be held to.

## Conversation is not a handoff

A conversation is unreviewable. You can't diff it, can't check it against a done-condition, can't hand it to a
fresh agent without it being re-summarized — and summarizing is lossy. The moment a stage's output actually
matters, it has to leave the conversation and become a thing on disk: a plan, a spec, a patch, a test result.
Only a thing can be checked. "It's in the thread" is the handoff version of "looks done" — a claim you can't
verify, dressed up as a status.

## The artifact is the contract

What crosses the boundary is the contract between stages. It fixes what the next stage is entitled to assume and
what it will be checked against. This is Lesson 1's done-condition made concrete and portable — the artifact
*is* the checkable fact, now written where the next stage can read it. A good boundary artifact is small enough
to read and specific enough to verify against: the same floor and ceiling Lesson 2 put on work units, applied to
what you write down rather than what you build.

## Reset the context; don't summarize it

There is a failure mode in how state gets carried across a long task: **compaction** — summarizing the
conversation in place as the window fills. It is lossy, and it drifts, because each summary is a translation of
the last. The pattern that holds up is the opposite:
[reset over compaction](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) —
hand the next step a durable artifact and start clean, rather than dragging a summarized transcript forward
(`REPORTED`, vendor). The artifact is what survives the reset; the transcript was never meant to. That is the
deeper reason the interface has to be written down: it is the only thing that outlives the context window.

## But artifacts are the overload, too

Here is the tension this Part keeps returning to. The same artifacts that make handoffs checkable are the ones
that, unmanaged, become **artifact overload** — the measured failure where more generated context per task
actually [lowers success and raises cost](https://arxiv.org/abs/2602.11988) (`MEASURED`). So the interface can't
simply accumulate. It has to be **scoped to the task and evicted when done**: what crosses the boundary is only
what the next stage needs, and what's finished gets dropped, not carried forward out of habit. Scoping and
eviction are the discipline; the tiering that makes them systematic is
[Part I's lesson on project memory](../part-1-foundation/project-memory-and-tiering.md).

## The strongest version of this

What a fully realized artifact interface looks like in the wild: Kenton Varda's
[`cloudflare/workers-oauth-provider`](https://github.com/cloudflare/workers-oauth-provider) ships with the
prompts that produced it *in the git history*, and the code was reviewed line by line against the RFCs by
security engineers (`REPORTED`). The prompt is an artifact; the review is against a spec — the RFC — not a
feeling; and the whole chain is auditable after the fact. Every boundary was crossed as something someone could
inspect. That is the bar, and it is rare precisely because it is work.

:::tip[▶ Video]

<YouTube id="UC4vDpSJCkM" title="How to Pass Context in an Agentic AI Flow — IBM Technology" />

IBM on moving context between the steps of an agentic flow — the practical face of this lesson, and it carries
the same caution: pass the artifact the next step needs, not the whole conversation.

:::

## The three tiers — soloist · small-team · enterprise

The invariant holds at every scale: **what crosses a boundary has to be an artifact someone can inspect.** What
changes is who inspects it and how long it has to last.

- **Soloist.** Write the handoff down — a plan file, a diff, a saved test output — instead of keeping it in your
  head or the chat. *The failure it prevents:* the decision that lived only in a conversation and can't be
  reconstructed a week later.
- **Small-team.** Shared, versioned artifacts are the contract between people and stages: a pull request is an
  artifact, a design doc is an artifact. *The failure it prevents:* two people carrying different mental models
  of "what we agreed," neither of them written down.
- **Enterprise.** Artifacts are the audit trail — every boundary crossing is a durable, reviewable record,
  scoped and retained on purpose. *The failure it prevents:* an interface that is either unauditable (nothing
  written) or drowning (everything written, nothing evicted).

## What to take away

- Stages hand off through written artifacts, not conversation. If it didn't cross as an artifact, it didn't
  cross — there is nothing to review or diff.
- The artifact is the contract: what the next stage may assume and will be checked against. It is Lesson 1's
  done-condition made portable.
- Reset over compaction: carry a durable artifact across a long task, not a summarized transcript. The artifact
  outlives the context window; the transcript doesn't.
- Scope and evict. The same artifacts that make handoffs checkable become artifact overload if they accumulate —
  pass only what the next stage needs, and drop what's done.

**[New terms](../glossary.md#artifacts-as-interface)**: artifact as interface, context reset vs compaction, durable handoff, scope and evict.
