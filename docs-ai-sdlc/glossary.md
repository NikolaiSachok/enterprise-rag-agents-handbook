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
