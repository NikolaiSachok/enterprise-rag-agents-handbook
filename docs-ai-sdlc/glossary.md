---
id: glossary
title: Glossary
sidebar_position: 7
---

# Glossary

Every term the lessons introduce, defined once. Each lesson closes with a **New terms** line that links to
its section here. The list grows as the course does.

## Verification bottleneck

**Verification bottleneck** — the binding constraint in agent-built software: generation is cheap, checking is not; throughput is gated by review and verification capacity, not by model capability.

**Proxy metric** — any measured stand-in for value (merged PRs, commits, lines of code, time-on-task). Throughput is measurable; value is not.

**Denominator choice** — "% of code written by AI" figures depend entirely on the denominator: the same telemetry can read as 28.7% or 70.6%.

**Benchmark-to-production gap** — the collapse from an offline benchmark score to the real-SDLC applied rate (Meta: 68% → 19.7%, roughly 3.5×).

**Self-assessment gap** — developers can't judge AI's effect on their own speed; the measured error is around 40 points — wrong even about the sign.

**Tech debt on credit** — velocity gained early and paid back later, as the sustained complexity and warning increases that drive the slowdown.

## Reading the evidence

**Evidence grade (the ladder)** — the `MEASURED` / `REPORTED` / `ASSERTED` classification of a claim. Grades are inherited, never upgraded.

**Conflict of interest, stated inline** — naming the conflict of interest (who is paying) as part of the finding itself, not as a footnote.

**Going to the primary** — reading the primary source, with its date, instead of trusting a second-hand summary of it.

## Preparation over model

**Preparation over model** — setup and scope move success more than the choice of model does.

**The gate-not-the-agent misread** — a low failure number that belongs to the review gate, not to the agent.

**Controllable scope** — starting where the problem is bounded, with a requirements gate.

**Architecture-first with a loop** — design before code, while accepting that sound-looking design still needs iteration.

**Harness staleness** — scaffold components encode model-limit assumptions that expire.

## Project memory and tiering

**Project memory** — durable, agent-readable knowledge that persists across runs.

**Amnesia** — agents keep nothing between sessions but the files on disk.

**Context tax** — the measured &gt;20%-per-turn cost of standing context: every line is re-sent and billed each turn.

**Over-compliance** — the measured way extra artifacts hurt: agents follow instructions thoroughly but unnecessarily.

**Scar archive** — the reasoning behind each locked decision, appended after every fixed bug class — a blameless postmortem kept where the agent will read it.

**Knowledge tiering** — organising memory by rate-of-change or distance-from-focus, so only the relevant tier loads.

**LOD ladder** — three-level (map / contract / blueprint) tiering by an artifact's relation to the task, mirrored by Anthropic Skills' activation / reference / deep dive.

**Hot set / cold set** — the always-loaded, one-screen non-negotiables versus the on-demand detail.

**Progressive disclosure** — loading only a name and description until the body is actually needed.

**Artifact overload** — spec-driven work's central unsolved failure: artifacts generated faster than review or context can absorb them, with no lifecycle discipline.

## Rules that hold

**Executable rule / rules-as-code** — a constraint enforced by the harness or CI (a hook, lint, grep, or gate) that the model cannot bypass.

**"An instruction is not a control"** — a rule stated in natural language is a suggestion, not an enforced boundary.

**Hook vs skill** — a hook is deterministic harness enforcement; a skill is model judgment it may ignore. Security and correctness failures must be hooks.

**The gate defines the artifact** — an agent optimizes what you check, so anything unchecked doesn't exist. "The agent grading its own homework" is not verification.

**Reward hacking / gaming the gate** — satisfying the checked metric without doing the requested work: retrieving rather than deriving, or suppressing a symptom to pass a test.

**Blast radius** — the scope of damage a confused or compromised agent can reach; controls are placed relative to it.

**Policy-as-code** — enforced-in-the-pipeline, audited rules — the enterprise form of executable rules.

**Least privilege** — the agent can reach exactly the resources its current task needs, and no more.

**Drift / rule rot** — the decay of a rule corpus with no staleness mechanism: constants diverge, copied code goes stale, superseded rules survive, and seams between files contradict.

**Consistency owner** — the role accountable for reconciling a corpus so that two authoritative files can't prescribe opposite things.

## Vision to stages

**Verifiable stage** — a unit of a plan defined by a done-condition you can confirm, not by a step you can describe; the interval between two checks you can actually run.

**Done-condition** — the concrete, inspectable fact that becomes true when a stage is genuinely complete (a passing test, a 401 on an untokened request), as opposed to the agent merely reporting it done.

**Checkable vs inferential control** — a done-condition confirmed by a deterministic check that can't be talked out of a failure (checkable / computational) versus one confirmed by a model's judgment (inferential); prefer the former, and treat a stage that admits only the latter as not yet cut small or concrete enough.

**Stage sizing** — sizing a stage to what you can verify in a short pass, not to what the model offers to do in one confident go.

## Atomic tasks

**Atomic task** — a unit of work small enough to verify in a single reading; the granularity at which you actually keep control of what an agent produces.

**Decomposition as control** — the principle that how finely you cut the work sets how tightly you can check it: every boundary is a place to stop and verify, so control is decided at decomposition, not recovered later.

**Over-decomposition** — cutting work so fine that coordination overhead — more briefs, more context re-sent each turn, more artifacts to keep consistent — outweighs the checkability gained; the artifact-overload failure reached by "just split it smaller."

**Orchestrator and ephemeral workers** — a split where a long-lived orchestrator holds the plan, context, and done-conditions while short-lived workers each take one atomic task and return a compressed result; the orchestrator's job is verification, not generation.

## Artifacts as interface

**Artifact as interface** — the rule that stages hand off through written artifacts, not conversation: what crosses a boundary must be a thing someone can inspect, diff, and check against a done-condition.

**Context reset vs compaction** — two ways to carry state across a long task: compaction summarizes the conversation in place (lossy, drifts); reset hands the next step a durable artifact and starts clean. The artifact survives the reset; the transcript isn't meant to.

**Durable handoff** — a boundary crossing recorded as a persistent artifact (a plan, spec, patch, or test output) rather than left in a chat, so it outlives the context window and can be reviewed later.

**Scope and evict** — the discipline that keeps the artifact interface from becoming artifact overload: pass only what the next stage needs, and drop what's finished instead of carrying it forward.

## Plan, review, implement, critic

**The loop (plan-review-implement-critic)** — the core cycle of Part II: review the plan before any code, implement against the reviewed plan, then critique the result before it lands. Cheap generation sits between two gates; remove either and it collapses into unchecked generation.

**Plan-first review** — reviewing the plan before implementation, the highest-leverage check because a mistake in a plan costs a sentence to fix and the same mistake in code costs a rewrite.

**Critic gate** — a check the work cannot pass without clearing (a hook, not a suggestion), run by something independent of the work and unable to edit it; an agent grading its own output optimizes the check instead of doing the job.

## Roles and the human

**Human router (on-the-loop vs in-the-loop)** — the human's place is above the loop (supervising it, owning the done-conditions and gates and the land decision), not a stage inside it taking a turn between agents. On the loop, the role stays effective as generation speeds up; in the loop, it becomes a bottleneck and then a casualty.

**Irreducible checkpoint** — one of the few points that can't be delegated to the loop without the loop losing its meaning: setting the done-conditions, owning the critic gate on security or correctness failures, and the decision to land a high-blast-radius change.

**Oversight vs rubber-stamp** — real oversight is a few enforced checkpoints where a human's judgment is the control; "review everything" is not oversight but a rubber stamp — a person waved through more outputs than anyone could actually review.

## Layered gates

**Layered gates** — a verification chain built from several checks in sequence, where each gate exists to cover a defect class the previous one structurally cannot see. Coverage is a property of the whole stack, never of any single gate.

**Structural blind spot** — the class of defect a gate cannot catch because of its *mechanism*, not its thoroughness: a static analyzer reads source and so cannot see a runtime state; a visual diff is static and so cannot see an animation. The blind spot is fixed by adding a differently-mechanised gate, never by tuning the blind one stricter.

**Mechanism diversity** — the design principle that coverage comes from stacking gates whose mechanisms fail differently (static vs dynamic, deterministic vs semantic, machine vs human), so that what one is blind to, another perceives.

**Thoroughness vs coverage** — thoroughness is how hard one gate looks within the classes it can perceive; coverage is how many classes the chain can perceive at all. Making a gate more thorough never buys coverage of a class its mechanism can't see.

**Deterministic vs semantic gate** — a deterministic gate (test, type check, literal grep) is reproducible and cannot be argued out of a hit but only catches what can be phrased mechanically; a semantic gate (an LLM judging meaning) catches unphraseable classes but expensively and probabilistically. They are blind to opposite things, so they are composed, and a hit from either counts.

**Defense in depth** — the security world's name for the same idea: multiple independent controls in layers, none trusted alone, each assuming the one in front of it will sometimes fail.

## The escape ledger

**Escape ledger** — a record of every defect that reached production despite passing the gate chain, kept as blameless-postmortem discipline pointed at the gates: one row per escape names the defect class, the gate that should have caught it, the blind spot, and the promotion that now covers it.

**Defect-class escape** — an escape recorded as the *class* it belongs to (e.g. "boundary inputs are never exercised"), not as the single bug, because the class is the unit a gate can be built to catch.

**Blind-spot promotion** — turning an escape into a permanent improvement of the chain: a new probe, test, or rule added to the gate that missed it. An escape is closed when the gate is improved, not when the bug is fixed.

**Probe-list bias** — the tendency of a probe or test suite to cover only classes that have burned you before, because probe lists are built from remembered incidents; it leaves classes that have never happened structurally off the chain.

**Broad-probe hunt** — the proactive complement to the ledger: a deliberately coarse probe that over-reports, filtered by judgment, used to surface a defect class that every precise probe is structurally unable to name.

## Detection vs mutation

**Detection vs mutation** — the rule that the step which *finds* a defect must be separate from the step which *fixes* (mutates) the code. An auditor that can also edit what it audits can make a finding disappear instead of reporting it, so the finding list stops describing reality.

**Separation of duties (agentic)** — the classic control — whoever makes a change cannot also certify it — restated for agents: the finder is not the fixer, the reviewer is not the author, and the sign-off is not self-granted. The same two-party independence Part I tied to SLSA and DORA.

**Priced-out cheat** — a shortcut that greens the gate without doing the work (suppress the warning, clip instead of reflow), made unavailable in advance by naming and forbidding it in the fix brief. Gaming the gate is the default agent behavior, so the cheat must be priced out, not merely discouraged.

**Ordered toolkit and prohibition list** — the two-part fix brief: an ordered ladder of legitimate remedies (most-correct first, the symptom-suppressing shortcut last-resort or forbidden) plus an explicit list of the specific cheats this class of fix may not use.

**Symptom suppression** — turning off the signal instead of fixing the cause: a test that passes over dead code, a lint clean bought by suppressing the warning, a diff that hides the symptom from the reviewed surface.

**Goodhart's law** — "when a measure becomes a target, it ceases to be a good measure"; a proxy metric optimized hard enough (merged-PR count, tickets closed) stops tracking the value it stood for.

## Review at volume

**Review at volume** — the problem of keeping human review meaningful once agents generate faster than anyone can read; past a point, "review everything" stops being oversight and becomes a rubber stamp.

**Concentrate human attention** — the design principle that automation's job is to run every mechanical gate *ahead* of the human, so the scarce, non-scaling human attention lands only on what already passed and only where a human's judgment is the actual control.

**Enumerated irreducible** — the explicit, written list of the specific things only a human can perceive (real-font rendering, animation feel, real-device behavior, contrast over imagery). Writing it down is what stops the human gate from silently re-absorbing mechanical work.

**Reachability calibration** — weighting a finding's severity by whether a user can actually reach the affected code: an unreachable "critical" is a latent defect, not an emergency. Severity without reachability is noise that trains the reviewer to distrust the gate.

**Output-modality bias** — the systematic under-weighting of a finding when a gate's output channel is narrower than the defect it detects — e.g. a visual diff reports *appearance*, so a "missing widget" reads as cosmetic when the real defect is missing *behavior*. The rule: treat a structural gate's "missing" as a functional gap until proven cosmetic.

**Machine-readable human-defer** — an inline, machine-readable marker an agent leaves on a genuine judgment call ("I need a human here") that a later human gate consumes as its worklist; it routes human attention instead of consuming it.
