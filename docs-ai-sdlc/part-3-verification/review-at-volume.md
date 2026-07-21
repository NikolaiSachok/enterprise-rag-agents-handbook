---
title: "Reviewing agent output at volume"
sidebar_position: 4
---

# You can't read all of it, so decide what only you can check

Part III has built a chain of diverse gates, a ledger that learns from what escapes them, and a discipline that
keeps the agent from gaming them. This last lesson is about the one gate that does not scale by adding compute:
the human. When agents generate faster than anyone can read, "review everything" stops being oversight and
becomes a rubber stamp — and the human is the first thing the flood washes out, exactly as [Part II
warned](../part-2-loop/roles-and-the-human.md). The answer is not to read faster or care harder. It is to
*design* the review so the scarce human attention lands only where a human's judgment is the actual control, and
everything a machine can check has already been checked before the human looks.

## The volume is not hypothetical

The numbers are in, and they describe a review problem, not a generation one. In a field deployment of 802
developers over 196,212 PRs, per-capita throughput reached **2.09×** the pre-mandate baseline —
[among the largest gains reported](https://arxiv.org/abs/2607.01904) — but the same study records what that did
downstream: per-reviewer load **roughly doubled**, and **automated review overtook human review** (`MEASURED`).
That is the shape of the problem stated in data. Generation got cheap; the reading did not; and the review queue
is where the bottleneck moved. "Review everything" was always the reflex, and at 2.09× it is the
[rubber-stamp trap](../part-2-loop/roles-and-the-human.md) — a person waved through more diffs in a day than any
person could actually have read is not exercising oversight, only laundering it. Volume does not just strain
review; past a point it quietly converts review into theater while every dashboard still shows it as green.

## Automate to concentrate, then enumerate what's left

The design that survives volume has two halves, and the order matters. First, put the cheap automated gates
*ahead* of the human so the expensive human step runs only on what has already passed them — in the chain I run
in production, the human capture-and-eyeball step is deliberately sequenced last and is only worth its cost
because the automated gates already guarantee the thing cold-starts and navigates; spending human minutes before
that is spending them on defects a machine would have caught for free. Second — and this is the move most teams
skip — **enumerate the specific things only a human can perceive, and reserve the human strictly for that list.**
In that production chain the list is explicit: real-font rendering versus test-fallback fonts, animation feel,
native behavior, image-decode quality, real-device touch targets, contrast over imagery — the properties of real
hardware and real perception that no host-run driver observes. Writing the list down is what stops the human gate
from silently re-absorbing the mechanical work the automation was supposed to remove. A human reviewing
everything is drowning; a human reviewing *only the enumerated irreducible* is doing the one job that doesn't get
slower as generation speeds up.

:::tip[▶ Video]

<YouTube id="cmEJ-5zYKHA" title="Why AI Agents Need A Human in the Loop Now — IBM Technology" />

IBM on why agentic systems still need a human in the loop — and, read through this lesson's lens, *where*. The
point is not a human approving every step (that is the queue that doesn't scale) but a human placed at the few
decisions that are theirs alone, with the rest gated by machine before it ever reaches them.

:::

## Risk-weight the queue: reachability and the modality trap

Even the reduced queue needs triage, and two disciplines keep it honest. The first is **reachability
calibration**: a finding's severity is meaningless until you know whether a user can actually reach the code that
carries it. A "critical" on a screen no navigation path leads to is a latent defect, not an emergency —
downgrade it, mark it latent, and say so. Severity without reachability is noise, and noise is not harmless: it
trains the reviewer to distrust the gate, and a gate the reviewer has learned to wave past has already failed.
The scarce attention goes to user-reachable findings first.

The second is subtler and catches good reviewers: **the tool's output modality biases your triage.** A
visual-diff gate reports *appearance*, so its findings get read as cosmetic and triaged down — while the actual
defect behind "this widget is missing on one side" is often missing *behavior*, not missing chrome. When a
gate's output channel is narrower than the defect it detects, its findings are systematically under-weighted
exactly where they matter most. The fix is a rule, not vigilance: treat a "missing" from a structural gate as a
possible functional gap until proven cosmetic, never the reverse. And give the agent a way to hand ambiguity
*up* — a machine-readable "I need a human here" marker it can leave inline (a tagged comment on a genuine
judgment call) that the later human gate consumes as its worklist. An agent that can say "I wasn't sure" is worth
more than one that guesses and moves on, because it routes your attention instead of consuming it.

## The three tiers — soloist · small-team · enterprise

The invariant holds at every scale: **automate to concentrate human attention, enumerate what only a human can
check, and spend that attention on the reachable and the ambiguous.** What changes is who is protected from the
flood, and how.

- **Soloist.** It is only your eyes, so be *stricter* about what earns a slot on the enumerated list — and put
  every mechanical check ahead of yourself so you never spend your own attention on what a grep would have
  caught. *The failure it prevents:* becoming your own rubber stamp, skimming a volume you produced because
  re-reading it is now harder than trusting it.
- **Small-team.** A shared triage rubric — reachability annotations, a modality rule, a defined irreducible list
  — so review means the same thing across people, and the human gate is a named owner, not "the team." *The
  failure it prevents:* diffuse review where everyone assumes someone else read it closely and no one did.
- **Enterprise.** Risk-weighted sampling instead of the pretense of reviewing everything, and sign-off that is
  provably independent — the [two-party rule Part I tied to SLSA and DORA](../part-1-foundation/verification-bottleneck.md).
  *The failure it prevents:* "human in the loop" as a compliance checkbox — a name on a form who, at the real
  volume, could not possibly have reviewed what they signed.

## What to take away

- Generation got cheap and reading did not, so the bottleneck moved to the review queue — measured at **2.09×**
  throughput with per-reviewer load roughly doubled. At that volume "review everything" is a rubber stamp.
- Design beats heroics: sequence the cheap automated gates ahead of the human so their attention lands only on
  what already passed, and **enumerate the specific things only a human can perceive** — reserve the human for
  exactly that list.
- Risk-weight what remains: calibrate severity by reachability (an unreachable "critical" is latent), and
  distrust the modality trap — a structural gate's "missing" is a functional gap until proven cosmetic.
- Let the agent route your attention: a machine-readable "I need a human" marker on genuine judgment calls is
  worth more than a confident guess.
- The human is the gate that doesn't scale with compute, so protect it by design — or volume will quietly turn
  your oversight into theater while every dashboard stays green.

**[New terms](../glossary.md#review-at-volume)**: review at volume, concentrate human attention, enumerated irreducible, reachability calibration, output-modality bias, machine-readable human-defer.
