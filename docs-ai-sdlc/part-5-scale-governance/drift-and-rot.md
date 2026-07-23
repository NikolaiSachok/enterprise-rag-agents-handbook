---
title: "Drift control and rule rot"
sidebar_position: 2
---

# A stale rule is worse than no rule, because the agent obeys it

Part I built the two things a fleet works against: [project memory](../part-1-foundation/project-memory-and-tiering.md)
and [rules that a machine enforces](../part-1-foundation/rules-that-hold.md). This lesson is about what happens
to them afterwards, once the code they describe keeps moving and they do not. A rule encodes an assumption
about a codebase. The codebase changes weekly; the rule was written once. When they diverge, the rule does not
politely become irrelevant — it becomes **actively harmful**, because unlike a human, who reads a stale
convention and quietly ignores it, an agent reads it and complies.

## Three ways a rule corpus decays

The failure has three distinct shapes, and they need different remedies.

**Staleness.** The rule describes a structure that no longer exists — a directory that moved, a wrapper that
was replaced, a pattern the team abandoned two refactors ago. The agent faithfully reproduces the old world
inside the new one.

**Contradiction.** Two rules, added months apart by people solving different problems, now conflict. Nothing
detects this, because each was reasonable when written. The agent resolves the conflict by picking one — not
always the same one, which is worse than picking badly, because the behaviour is now nondeterministic and
nobody can reproduce the complaint.

**Bloat.** The corpus grows because adding a rule is the cheapest possible response to any incident. Past a
point, the important constraints are diluted by accumulated trivia, and what happens next is the part people
miss: a corpus too large to fit the working context gets *truncated*, and neither you nor the agent gets to
choose which rules survive the cut.

## Executable rules rot loudly; prose rules rot silently

The single most useful property of a rule is whether its decay is *visible*. A rule expressed as a check — a
test, a lint rule, a CI gate — fails the moment reality moves out from under it. That failure is annoying and
it is exactly the point: it is the corpus telling you it has gone out of date. A rule expressed only in prose
has no such property. It goes stale in perfect silence and keeps being obeyed.

That gives the practical hierarchy for anything you want to stay true: make it a check if you can; make it a
check *plus* a sentence if the check cannot carry the reasoning; and accept prose-only for genuinely
judgement-shaped guidance, knowing you have accepted silent decay and must schedule a human to look at it.

:::tip[▶ Video]

<YouTube id="DgXV8QSlI4U" title="What is AI Technical Debt? Key Risks for Machine Learning Projects — IBM Technology" />

IBM's Jeff Crume on AI technical debt — the interest you pay later on shortcuts taken now. A rule corpus is
one of the places that debt hides most quietly: it costs nothing to add a rule, the balance compounds
invisibly, and the bill arrives as agents confidently building against a world that no longer exists.

:::

## Ownership and expiry: the part nobody assigns

Every rule needs two things written next to it that almost never are: **who owns it** and **when it is next
looked at**. Without an owner the rule belongs to everyone, which means it belongs to no one and is never
deleted — deletion feels riskier than leaving it, so corpora only ever grow.

Two mechanisms make maintenance real rather than aspirational.

- **Date-stamp every rule** and review the oldest first. Age is a weak signal but it is free, and it beats the
  alternative, which is reviewing nothing.
- **Treat a rule that never fires as suspect.** This is Part III's [mutation-testing argument](../part-3-verification/layered-gates.md)
  applied to the corpus: a check that has not caught anything in a year is either guarding a class that no
  longer occurs, or it is broken and you have been trusting silence. Both are worth knowing, and you find out
  the same way — plant a violation and see whether the rule fires.

The deletion bar deserves saying plainly: **removing a rule that no longer matches reality is maintenance, not
loss.** A corpus you are willing to shrink is one an agent can still read in full.

## Memory drifts the same way

Project memory decays with the same three shapes, but it degrades more insidiously than rules do, because
memory reads as *description* rather than *instruction* — so nobody audits it. An entry recording "we chose X
because Y" stays in the file long after Y stopped being true, and the agent treats it as current fact. The
discipline is the same: entries carry dates, contradictions get reconciled rather than accumulated, and
superseded decisions are marked superseded instead of quietly left standing next to the decision that replaced
them.

## The three tiers — soloist · small-team · enterprise

The invariant does not change with scale: **a rule is only as good as its last verification against reality,
and something must make its decay visible.** What changes is who is accountable and how the review is
triggered.

- **Soloist.** Prefer checks over prose, date-stamp what stays prose, and delete aggressively — you are the
  only reader and a bloated corpus costs you context you need. *The failure it prevents:* an agent rebuilding
  a structure you abandoned months ago, confidently, because your own notes still describe it.
- **Small-team.** An owner per rule area, rules reviewed when the code they describe changes (not on a separate
  calendar nobody keeps), and contradictions resolved at review rather than left for an agent to arbitrate.
  *The failure it prevents:* two conflicting rules producing nondeterministic agent behaviour that no one can
  reproduce or explain.
- **Enterprise.** The corpus is a governed artefact: versioned, owned, with expiry and an audit trail showing
  when each rule was last confirmed against the code. *The failure it prevents:* a control that exists on
  paper, has not matched the system for two years, and is discovered during the audit that assumed it worked.

## What to take away

- **A stale rule is worse than no rule.** A human ignores an obsolete convention; an agent complies with it.
- Decay comes in three shapes — **staleness, contradiction, bloat** — and they need different fixes.
  Contradiction is the nastiest, because it makes behaviour nondeterministic rather than merely wrong.
- **Executable rules rot loudly, prose rules rot silently.** Make it a check where you can; where you cannot,
  accept that you have chosen silent decay and schedule a human against it.
- **Assign an owner and a review trigger, and date-stamp the rest.** Unowned corpora only grow, because
  deleting always feels riskier than keeping.
- A rule that has never fired is not proof of a clean codebase — it is an unverified rule. Plant a violation
  and find out which.

**[New terms](../glossary.md#drift-control-and-rule-rot)**: rule rot, staleness / contradiction / bloat, executable vs prose rule, silent decay, rule ownership, rule expiry, never-fired rule, memory drift, superseded decision.
