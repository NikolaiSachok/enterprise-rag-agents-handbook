---
title: "Environments, migrations, and real data"
sidebar_position: 3
---

# The agent gets a copy, and every change gets a way back

[Lesson 1](./secrets.md) kept a secret's value out of the agent's hands and
[Lesson 2](./least-privilege-sandboxing.md) sized the grant and built the box around it. This lesson is about
what the grant points *at*: the data and the schema. Two halves, and they fail in opposite directions. The
agent should be working against data that is realistic but not real — and every structural change it makes
should have a way back that you have actually exercised.

## Realistic data, not real data

Agents reason better with plausible data, and that creates a standing temptation: copy a production dump into
the development environment and let the agent work against something true. It solves the realism problem and
creates two worse ones at once.

The first is regulatory and blunt: a copy of personal data is still personal data. Moving it into a
lower-protection environment does not shed the obligations attached to it — it multiplies the number of places
that must satisfy them (`ASSERTED`, the plain reading of data-protection regimes like the GDPR). The second is
the one Part IV keeps circling: whatever sits in the development environment is what the agent reads, and
[Lesson 1](./secrets.md) established that the agent's context is a channel you do not fully control. Real
customer records enter a model provider's request, possibly its logs, and potentially a generated fixture file
that gets committed.

The alternative is a dataset that preserves the *shape* of production without preserving *people*: seeded
synthetic records, or a masked subset. Two properties decide whether it is usable. **Referential integrity**
must survive — a masked dataset whose foreign keys no longer line up produces tests that pass for reasons
unrelated to the code. And the **distribution** must survive, including the ugly tail: the empty string, the
name with an apostrophe, the 400-character address, the row that predates a schema change. Synthetic data that
contains only the happy path is a test fixture pretending to be a corpus.

One honest caveat belongs here, because the technique is often oversold. Masking is not automatically
anonymisation. A dataset scrubbed of direct identifiers can often be re-identified by joining it against
another source, and synthetic data generated from real data can memorise and reproduce parts of it
(`REPORTED`, a persistent finding in the privacy literature). Treat a masked or synthetic set as *lower* risk,
not *no* risk, and keep it out of public repositories accordingly.

:::tip[▶ Video]

<YouTube id="QQtSa9ngqQk" title="Can you trust synthetic data? — IBM Technology" />

IBM asks the question this lesson insists on rather than assuming the answer. Watch it for the failure modes:
synthetic data inherits the biases and can leak fragments of the real data it was derived from — which is why
it lowers risk rather than removing it, and why the safe default stays "the agent never touches production."

:::

## Migrations: expand, migrate, contract

Schema change is where an agent's speed turns dangerous, because a destructive migration and a safe one look
structurally identical in a diff — a few lines of SQL either way. Part III's
[review at volume](../part-3-verification/review-at-volume.md) already established that human attention does not
scale with generation, so "someone will notice the `DROP`" is not a control.

The pattern that survives fast generation is **expand → migrate → contract**, also called parallel change:

1. **Expand.** Add the new column, table, or index. Additive, backward-compatible, safe to deploy while the old
   code is still running.
2. **Migrate.** Backfill, then move reads and writes to the new shape — one step at a time, each one
   independently deployable and independently reversible.
3. **Contract.** Only after the old shape has been unused in production for long enough to be sure, remove it —
   as its own deliberate change, never bundled with a feature.

Each step is reversible on its own, which is the property that matters when the change was authored in four
seconds. And the enforcement belongs in a machine, not in vigilance: a deterministic gate that fails any
migration containing a destructive statement unless it carries an explicit marker turns "please be careful"
into [a rule that holds](../part-1-foundation/rules-that-hold.md). That is the whole Part I argument, applied
to the one file type where a mistake is not revertible by editing code.

## Rollback is something you build, not something you hope for

A backup you have never restored is not a backup; it is an untested assertion about a file. This is exactly
Part III's point about a gate you have never watched fail — quiet is not the same as working — moved to the
recovery path. The only thing that establishes recovery is a rehearsed restore: take the backup, bring up a
throwaway environment from it, and check that the data is actually there and coherent.

The [Replit incident](https://incidentdatabase.ai/cite/1152/) from the previous lesson has a second lesson
hiding in it. The agent destroyed the production data, then asserted that rollback was impossible — and it was
wrong (`REPORTED`). The interesting failure is not the false claim; it is that nobody could immediately
contradict it. When recovery is a known, exercised procedure, an agent's opinion about whether it is possible
is irrelevant. When it is not, the fastest confident voice in the room wins, and it may be a language model.

## The three tiers — soloist · small-team · enterprise

The invariant is constant: **the agent works against a realistic copy, and every structural change is
individually reversible by a procedure someone has actually run.** What scales is how the copy is produced and
how strongly reversibility is proven.

- **Soloist.** A seeded local database the agent can freely destroy, production credentials nowhere near the
  machine, and one rehearsed restore so you know the backup works. *The failure it prevents:* discovering that
  the only copy of real data was the one the agent just rewrote.
- **Small-team.** A non-production environment as the default target, a masked or synthetic dataset produced by
  a repeatable pipeline rather than by hand, expand/contract migrations with a CI gate on destructive
  statements, and point-in-time recovery with a periodic restore drill. *The failure it prevents:* the
  "temporary" production dump that quietly becomes the team's shared test fixture.
- **Enterprise.** Provable environment isolation, data classification driving masking policy automatically, a
  separate approval path for contracting migrations, and disaster recovery tested against stated RPO and RTO
  objectives. *The failure it prevents:* a recovery capability that exists on paper, is owned by no one, and is
  first exercised during the incident it was meant for.

## What to take away

- **Realistic, not real.** A production dump in a development environment multiplies the places that carry the
  obligations of personal data — and hands real records to the agent's context, which is not a channel you
  control.
- A usable synthetic or masked dataset preserves **referential integrity** and the **distribution's ugly tail**.
  Happy-path-only fixtures make green tests that mean nothing.
- Masking is not anonymisation. Re-identification by joining and memorisation by generators are real; treat the
  copy as lower risk, never no risk.
- **Expand → migrate → contract.** Additive by default, each step independently reversible, contraction as its
  own deliberate change — and a deterministic gate on destructive statements, because at generation speed
  nobody reliably spots the one dangerous line.
- **A backup you have never restored is not a backup.** Rehearse recovery so that whether rollback is possible
  is a fact you own, not a claim the agent makes.

**[New terms](../glossary.md#environments-migrations-and-real-data)**: realistic-not-real data, data masking vs anonymisation, referential integrity, distribution tail, expand–migrate–contract (parallel change), destructive-statement gate, rehearsed restore, point-in-time recovery.
