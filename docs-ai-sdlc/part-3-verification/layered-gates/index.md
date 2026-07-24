---
title: "Layered gates and mechanism diversity"
slug: /part-3-verification/layered-gates/
---

# Every gate is blind to something

Part I argued that [verification, not generation, is the bottleneck](../../part-1-foundation/verification-bottleneck.md).
Part II built the loop that spends generation cheaply and puts a [critic gate before anything lands](../../part-2-loop/plan-review-implement-critic.md).
This lesson is about the gate itself — and the uncomfortable fact that any single one of them is a single point
of failure. Not because it was built carelessly, but because its blind spot is a property of its **mechanism**,
not of its thoroughness. You cannot tune a static analyzer into seeing a stuck runtime state; you cannot make a
visual diff notice an animation. Coverage does not come from making one gate stricter. It comes from stacking
gates whose mechanisms are blind to *different* things — and the design move that makes that real is to write
down, for each gate, exactly what it structurally cannot see, then let that blind spot define the next gate.

## Thoroughness is not coverage

The instinct, when something slips through, is to make the gate that missed it stricter. Usually that is the
wrong fix. A gate misses a defect class for one of two reasons: it was not thorough enough, or its mechanism
*cannot perceive that class at all*. The first is worth fixing in place. The second is not fixable in place at
any level of effort — a linter reads source, so it will never see a control that is dead only at runtime; a
pattern-matcher reads structure, so it will never see that a correct-looking screen renders the wrong value from
live state. Turning up the strictness on a gate that is structurally blind to a class just produces more noise in
the classes it *can* see, while the real gap stays exactly as open as before.

Birgitta Böckeler names the same problem from the harness-engineering side. Reviewing coding-agent controls, she
asks the question most teams never do: [*"If sensors never fire, is that a sign of high quality or inadequate
detection mechanisms?"*](https://martinfowler.com/articles/sensors-for-coding-agents.html) (`REPORTED`, her own
practice) — and reaches for mutation testing to answer it, because the only way to know whether a gate can catch
anything is to inject a defect and see if it fires. In one case she found a file reporting *100% statement
coverage* that had **no unit tests at all**; the coverage was real, but it measured that a line had *executed*,
never that its behavior was *checked*. A green gate is evidence about the gate's mechanism before it is evidence
about the code. If you have never watched a gate fail on a defect you planted, you do not know what it is blind
to — you only know it is quiet.

## Name what each gate cannot see

The discipline that follows is cheap and almost nobody does it: **for every gate, write the one sentence
describing the defect class it structurally cannot catch — and choose the next gate to cover exactly that.** The
blind spot is not an apology for the gate; it is the specification for the one after it.

Here is the shape, drawn from a verification chain I designed for a production pipeline where agents generate
application code from a design spec and other agents audit it. Each row's last column is the whole point — it is
why the next row exists.

| Gate | Mechanism | Catches | Structurally cannot see |
|---|---|---|---|
| Behavior audit | drives every control on every route | dead handlers, broken navigation, stuck flows | whether working controls mean the *right* thing |
| Logic audit | checks visible state against behavior and spec | gate bypasses, state/label mismatches, forbidden-value leaks | whether correct behavior *looks* acceptable |
| Static + test harness | pattern-matching over a matrix of state variants | crash-class exceptions, overflow, contract violations | anything only a *running* app shows — no runtime, no cold start |
| Runtime driver | cold-starts the built app and walks reachable screens | stuck states, dead controls, cold-start crashes | nothing visual — an internally consistent but wrong-*looking* screen passes cleanly |
| Visual-fidelity diff | per-screen structural comparison against the spec | missing or drifted widgets, layout and color drift | animation and transient state — it is static-only |
| Human eyeball | a person walks every screen on real hardware | real-font rendering, animation feel, contrast over imagery | — (terminal gate) |

Read down the last column and the architecture explains itself. The behavior audit cannot judge meaning, so a
logic gate follows. The logic gate works on the spec, not the built artifact, so a static-plus-harness gate
follows to check the real build. That gate cannot see a running app, so a runtime driver follows. The driver
takes no screenshots, so a visual diff follows. The visual diff is static, so a human closes the chain on the
things that are properties of real hardware and real fonts. No gate is redundant, because each one exists to
cover the precisely-named blindness of the one before it. That is *mechanism diversity*: the gates differ not in
strictness but in the kind of thing they can perceive.

Ordering is part of the design, not an afterthought. Run the passes **mechanical → semantic → aesthetic**, and
lock the order — reviewing whether a screen *looks* right before checking whether its controls *work* wastes the
aesthetic pass critiquing screens that a behavior fix will invalidate anyway. Order the chain by how much a fix
at each stage moves the surface underneath it, cheapest-to-invalidate first.

:::tip[▶ Video]

<YouTube id="nthEXs12nFE" title="Cybersecurity Architecture: Application Security — IBM Technology" />

IBM's Jeff Crume on application security as layers. Read it through this lesson's lens: static analysis and
dynamic testing are the canonical case of *mechanism diversity* — one reads the code and is blind to runtime,
the other runs the code and is blind to the source — and the assurance comes from stacking checks that fail
differently, so what one is blind to, another catches.

:::

## Compose the deterministic gate with the semantic one

The most important mechanism split is the cheapest to state: a **deterministic** gate (a test, a type check, a
literal grep) is reproducible and cannot be argued out of a hit; a **semantic** gate (an LLM judging whether the
code means the right thing) catches classes no grep can phrase, but expensively and probabilistically. They are
blind to opposite things, so compose them — and never let one stand in for the other. A grep for a forbidden
construct will catch every literal instance and miss the paraphrase; a semantic reviewer will catch the
paraphrase and, being probabilistic, occasionally wave through the literal instance it should have caught. The
mature form runs both and treats a hit from *either* as real. In the chain above, a project-specific violation is
graded serious *even when the general-purpose reviewer stays silent*, because the reviewer's silence is not
evidence — it has no knowledge of the class, and absence of a flag from a gate blind to the class means nothing.

This course applies the same layering to its own leak defense: a cheap deterministic pass (a wordlist grep,
run on every commit) composed with an expensive judgment pass (a semantic audit against a private domain policy),
stacked precisely because each is blind to what the other sees — the grep cannot catch a domain leak phrased in
neutral words, and the semantic audit is too costly to run on every keystroke. Neither is the gate. The
composition is.

## The three tiers — soloist · small-team · enterprise

The invariant holds at every scale: **one gate is a single point of failure; coverage comes from mechanism
diversity, and every gate's blind spot must be named.** What changes is who names it and how it is enforced.

- **Soloist.** The chain is your own discipline, and the blind spots live in a doc you actually keep. The
  discipline is to write the one blind-spot sentence per gate *before* you trust the chain — and to compose at
  least one deterministic gate with one semantic one. *The failure it prevents:* trusting a quiet gate you have
  never watched fail, and shipping the whole class it cannot see.
- **Small-team.** The gates are named checks in CI, and the blind-spot map is a shared artifact reviewed like any
  other design. *The failure it prevents:* two people each assuming the *other's* favourite gate covers a class
  that, in mechanism, neither one can see.
- **Enterprise.** The layers are enforced and provably independent, and the blind-spot review is a deliberate
  design exercise with an owner — the security world's [defense in depth](https://csrc.nist.gov/glossary/term/defense_in_depth),
  where no single control is trusted and each assumes the one in front of it will sometimes fail. *The failure it
  prevents:* a compliance chain that is long but mechanistically uniform — six gates that are all the same kind of
  gate, blind to the same class, and therefore, against that class, no better than one.

## What to take away

- One gate is a single point of failure. Its blind spot is a property of its **mechanism**, not its
  thoroughness — you cannot tune a static analyzer into seeing a runtime state.
- Coverage comes from **mechanism diversity**, not from making one gate stricter. Stack gates that are blind to
  *different* things.
- Do the exercise most teams skip: for each gate, write the one sentence naming what it structurally cannot see —
  and let that sentence specify the next gate.
- A green gate is evidence about the gate before it is evidence about the code. If you have never watched a gate
  fail on a defect you planted, you know it is quiet, not that it works.
- Compose a deterministic gate with a semantic one and treat a hit from either as real. Silence from a gate that
  is blind to the class is not a pass.

**[New terms](../../glossary.md#layered-gates)**: layered gates, structural blind spot, mechanism diversity, thoroughness vs coverage, deterministic vs semantic gate, defense in depth.

---

:::note[Next — part 2 of the lesson]

**[Mutation testing and the order of the chain](./deep-dive.md)** — the deep dive: how to *measure* a gate's detection power instead of trusting its silence, why mutation score is the honest metric, and the arithmetic of ordering a chain so the cheapest-to-invalidate pass runs first.

:::
