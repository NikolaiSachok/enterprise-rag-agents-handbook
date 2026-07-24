---
title: "Layered gates — deep dive"
sidebar_label: "Mutation testing and the order of the chain"
sidebar_position: 2
---

# Measuring a gate, and ordering the chain

[Part 1](./index.md) argued that a gate's blind spot is a property of its mechanism, and that coverage comes
from stacking gates that fail differently. It left two things asserted rather than shown. First, that you can
*tell* whether a gate detects anything at all — the claim behind "if you have never watched a gate fail on a
planted defect, you only know it is quiet." Second, that the chain has a correct *order* — mechanical, then
semantic, then aesthetic. This page makes both concrete: the method that measures detection power, and the
arithmetic that fixes the order. Part 1 is assumed throughout; the blind-spot frame and mechanism diversity
are not re-argued, only built on.

## Coverage measures execution; mutation testing measures detection

The trap Part 1 named — a file at 100% statement coverage with no assertions — is not an anomaly. It is what
coverage *is*. Coverage answers "did this line run while the tests ran," a question about the test's reach.
It says nothing about whether the line's behavior was *checked*, which is the question you actually care
about. The two come apart completely: a test that executes every line and asserts nothing scores 100% and
detects zero.

Mutation testing measures the thing coverage cannot. The procedure is mechanical: introduce a small, deliberate
defect into the code under test — a **mutant** — and run the gate. If the gate fails, the mutant is *killed*.
If it passes, the mutant *survives*, and a surviving mutant is a defect class your gate is provably blind to,
demonstrated rather than suspected. The **mutation score** — killed over total — is the honest replacement for
coverage: not how much of the code the gate touched, but how much of it the gate can actually defend.

The mutation operators are the vocabulary of small defects, and naming a few makes the idea concrete:

- **Statement deletion** — remove a line. A test that never notices a missing statement is asserting nothing
  about it.
- **Boundary mutation** — turn `<` into `<=`, `>` into `>=`. This is the off-by-one class, the one Part 1's
  escape ledger keeps recording, made injectable on purpose.
- **Return-value and constant mutation** — return a fixed value, flip a boolean, bump a constant. Catches
  assertions that check shape but not value.

Run these against a suite and the survivors are a worklist with no guesswork in it: each one is a concrete edit
your gate did not catch, and Part 1's discipline — name the blind spot, build the next gate for it — now has an
input that is generated rather than remembered.

## Why it is the escape ledger, run forwards

Part 1's [escape ledger](../escape-ledger.md) learns from defects that reached production: it is reactive by
construction, because you cannot record an escape that has not happened yet. Mutation testing is the same
discipline pointed the other way. Instead of waiting for a defect class to burn you and then adding the gate,
you *manufacture* the defect, confirm whether any gate catches it, and add the gate before the class ever
ships. It converts the ledger from a record of past pain into a generator of the next probe.

That reframing also exposes the method's own ceiling, and it is the same one the ledger has. The mutation
operators are a **probe list** — the exact bias Part 1 warned about, now one level up. A mutation tool injects
the defect classes its authors thought to encode: boundary flips, deletions, operator swaps. A defect class no
operator expresses — a whole missing screen, a semantic contract nobody encoded as a rule — produces no mutant,
so it is never tested for, so the gate's blindness to it stays invisible. A high mutation score proves your
gates catch the mutations *someone wrote an operator for*. It says nothing about the classes no operator
reaches, which are exactly the ones a [broad-probe hunt](../escape-ledger.md) exists to surface. Mutation
testing sharpens the gates you have against the defects you can imagine; it does not tell you what you failed
to imagine.

## Equivalent mutants, and the honest cost

Two things keep mutation testing from being free, and pretending otherwise is how teams try it once and abandon
it.

The **equivalent mutant** is the theoretical snag. Some mutations change the code without changing its
behavior — a mutant that is genuinely indistinguishable from the original, so no test could ever kill it
because there is nothing to detect. It drags the score down through no fault of the suite, and deciding whether
a survivor is a real gap or an equivalent mutant cannot, in general, be automated — it is undecidable, and in
practice it costs human judgment per survivor. The remedy is not to chase 100%: treat the score as a direction,
watch it over time, and spend the per-survivor judgment only where the code is worth defending.

The **compute cost** is the practical snag. Naively, mutation testing runs the whole suite once per mutant, so
a thousand mutants means a thousand suite runs. That is why it belongs where the earlier lessons put every
expensive check — not on every keystroke, but on the code that matters, run deliberately. The same
[layering logic](./index.md) that keeps a semantic gate off the hot path keeps mutation testing off it too:
it is a periodic audit of your gates' detection power, not a per-commit gate itself.

## The order of the chain is an economic argument

Part 1 fixed the sequence — mechanical, then semantic, then aesthetic — and called ordering "part of the
design." Here is why that specific order, argued from cost rather than taste.

Order the chain by **cost to invalidate downstream work**, cheapest-to-invalidate first. The reasoning is a
dependency, not a preference: a behavior fix changes what the screen does, which can change what it should
*look* like, so any aesthetic judgment made before the behavior was settled may have to be redone. Grading
appearance before function risks paying for the aesthetic pass twice. Run the pass whose fixes most disturb the
passes after it *first*, so the later, more expensive judgments are made against a surface that has stopped
moving.

The second ordering runs the same direction, which is why the chain has one order and not a tension between
two. Order also by **cost per run**, cheapest-to-run first, so the expensive gate only ever examines what
already survived everything cheaper. A deterministic grep is fractions of a cent and instant; a semantic
review is a model call; a human is the scarce input from [review at volume](../review-at-volume.md). Putting
the grep first is not only about invalidation — it means the model and the human never spend their budget on a
defect a free check would have caught. Both orderings point the same way: cheap-and-foundational before
expensive-and-dependent.

Two corollaries fall out once the principle is explicit. A gate that is expensive *and* catches a
foundational defect class is a signal to build a cheaper gate for that class upstream, not to reorder the
expensive one earlier — you want the cheap proxy to run first and the expensive one to confirm only what
survives. And a gate whose fixes never invalidate anything downstream — a final formatting pass, say — belongs
last regardless of its run cost, because nothing waits on it.

## What to take away

- **Coverage measures execution; mutation testing measures detection.** A suite can execute every line and
  assert nothing — 100% coverage, zero detection. Mutation score, killed over total, is the honest metric.
- A **surviving mutant is a demonstrated blind spot**, not a suspected one: a concrete defect your gate let
  through, generated instead of remembered.
- Mutation testing is **the escape ledger run forwards** — manufacture the defect and add the gate before the
  class ships — but it inherits probe-list bias: it only tests the defect classes an operator encodes, never
  the ones you failed to imagine.
- **Equivalent mutants and compute cost are real.** Treat the score as a direction, not a target to max out,
  and run it as a periodic audit of your gates, not a per-commit gate.
- **The chain's order is economic:** cheapest-to-invalidate and cheapest-to-run both point the same way, so
  run mechanical before semantic before aesthetic — the later, more expensive judgments then land on a surface
  that has stopped moving.

**[New terms](../../glossary.md#layered-gates)**: mutation testing, mutant (killed / survived), mutation score, mutation operator, equivalent mutant, coverage vs detection, cost-to-invalidate ordering, cost-per-run ordering.
