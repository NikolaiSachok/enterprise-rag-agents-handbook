---
title: "The escape ledger"
sidebar_position: 2
---

# An escape is data about the gate, not just about the bug

[Lesson 1](./layered-gates/index.md) built a chain of gates whose mechanisms are blind to different things. This
lesson is about the defects that get through it anyway — because they will. No chain is complete; every one of
them has a seam its mechanisms don't cover, and the honest question is not whether something will escape but
what you *do* with the one that does. The move is small and almost nobody makes it: when a defect reaches
production, record **which gate should have caught it and didn't** — and then close that gate so the same class
can't escape the same way twice. An escape is a measurement of your detection layer. Thrown away, it is just a
bug you fixed. Written down, it is the one piece of evidence that tells you where the chain is blind.

## The ledger entry

A blameless postmortem asks what in the system let a failure through, not who erred. The escape ledger is that
discipline pointed at your *gates* instead of your incident response, and its unit is one row:

- **The defect class** — not the single bug, the class it belongs to. "Off-by-one in the date parser" is a
  bug; "inputs at a boundary value are never exercised" is the class, and the class is what a gate catches.
- **Which gate should have caught it** — name the specific gate in the chain that owns this class. If no gate
  owns it, that is the finding: the class is off the whole chain.
- **Why it didn't** — the blind spot, in one sentence. Almost always this is the *mechanism* speaking, exactly
  as [Lesson 1](./layered-gates/index.md) described: the gate that should have caught it is structurally unable to,
  or it had no probe for the class at all.
- **The promotion** — the new probe, test, or rule that now covers the class, and the gate it was added to. An
  escape you merely fix teaches nothing; an escape you *promote* changes the chain.

That is the whole artifact. For a soloist it is one row in a table; for an enterprise it is a tracked defect
with an owner. The cost is trivial and the payoff compounds: each escape permanently retires a way things can
get through.

## What escapes actually look like

Here is the shape from a verification chain I ran in production — a six-gate automated chain in front of a human
eyeball, the same one [Lesson 1](./layered-gates/index.md) drew. Over its life, roughly **seven distinct defect
classes reached the human or a user despite passing every automated gate.** Each one, recorded, named a real
blind spot:

- A class of **interaction-rule** violation that only a human driving the UI could feel — caught at eyeball,
  never by the automated chain, and then *promoted into the rule set* as an explicit checked rule.
- An **aspect-ratio / crop** class that no pass thought to compute — rendered-versus-source proportions were
  simply never measured, so it **slipped through for the artifact's entire lifecycle until a user reported it.**
- A **layout-transition** class that "no pass had thought to look for" — it was not on any probe list because
  probe lists are built from *remembered* incidents, and this one had never happened before.

Read those together and a pattern falls out that is more useful than any single fix: the escapes cluster on
classes that were **off every probe list** — not classes a gate looked for and missed, but classes no gate was
ever pointed at. That is the expensive kind of blind spot, because a chain reports "all clear" on a surface it
was never checking, and "all clear" is indistinguishable from "not looked at" until something escapes.

:::tip[▶ Video]

<YouTube id="VNp35Uw_bSM" title="Cybersecurity Threat Hunting Explained — IBM Technology" />

IBM's Jeff Crume on threat hunting — the discipline of actively looking for what your automated detections
*missed* rather than waiting for an alert. Read it through this lesson's lens: threat hunting is the security
world's version of hunting the class that is off every probe list, and every hunt that finds something becomes a
new detection — the same promotion loop the escape ledger runs on your gates.

:::

## Hunt the class that is off every list

The escape ledger is reactive by construction — it learns from what already got out. The complement is a
deliberate, proactive move against exactly the blind spot the ledger keeps exposing: periodically stop and ask,
**"what class of defect is structurally *off* every probe we run?"** You cannot answer it by running the probes
harder, because a probe list is a memory of past incidents and is therefore biased toward the hot path — the
places that have already burned you. The trick that works is counterintuitive: write a **broader, dumber** probe
that deliberately over-reports, then filter its hits by judgment. In that production chain, a deliberately
coarse probe surfaced **about ten times as many candidate hits** as the precise one it complemented, and buried
in that noise was a whole defect class the precise probe was structurally unable to name. A probe tuned to be
right is tuned to the classes you already know; a probe tuned to be *broad* is how you find the class you don't.

Both moves feed the same machine. The reactive ledger names a blind spot after an escape; the proactive coarse
probe hunts blind spots before one. Each new class they surface becomes a promotion — and a promotion is not a
note in a doc but a new gate or rule in the chain, ideally an executable one. That is the direct tie to
[rules that hold](../part-1-foundation/rules-that-hold.md): an escape recorded as prose is folklore the next
agent may or may not read; an escape promoted into a lint rule, a test, or a hook is a boundary the next run
*cannot* cross. The ledger is where verification gets better over time instead of merely staying constant.

## The three tiers — soloist · small-team · enterprise

The invariant holds at every scale: **every escape names a gate's blind spot; record it, and promote it into
the chain.** What changes is the ledger's weight and who owns the promotion.

- **Soloist.** One row per escape, kept where you will actually see it — defect class, the gate that missed it,
  the probe you added. *The failure it prevents:* fixing the same class of bug a third time because the first
  two fixes taught the chain nothing.
- **Small-team.** A shared ledger that feeds a probe backlog; an escape is not closed when the bug is fixed but
  when the gate is improved so the class can't recur. *The failure it prevents:* tribal knowledge — one person
  "knowing" a fragile area that never becomes a check anyone else's work has to pass.
- **Enterprise.** Escapes are tracked defects with owners and a review cadence, and they drive the gate roadmap
  the way a blameless-postmortem backlog drives reliability work. *The failure it prevents:* a long, static
  verification chain that never learns — impressive on paper, blind to the same classes it was blind to a year
  ago.

## What to take away

- An escape is data about the gate, not just about the bug. The defect you fix is worth one fix; the escape you
  *record* tells you where the chain is blind.
- Write the ledger row: defect **class**, the gate that should have caught it, the blind spot in one sentence,
  and the promotion that now covers it. Close the escape when the *gate* is improved, not when the bug is fixed.
- The expensive escapes are the classes off every probe list — a chain reports "all clear" on a surface it was
  never checking. "All clear" and "never looked" are indistinguishable until something gets out.
- Hunt those proactively with a broad, dumber probe that over-reports, then filter by judgment — a probe tuned
  to be right only finds classes you already know.
- Promote every escape into an executable rule where you can. A recorded escape left as prose is folklore; one
  wired into the chain is a boundary the next run can't cross.

**[New terms](../glossary.md#escape-ledger)**: escape ledger, defect-class escape, blind-spot promotion, probe-list bias, broad-probe hunt.
