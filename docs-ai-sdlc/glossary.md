---
id: glossary
title: Glossary
sidebar_position: 7
---

# Glossary

Every term the lessons introduce, defined once. Each lesson closes with a **New terms** line that links to
its section here. The list grows as the course does.

## Verification bottleneck

**verification bottleneck** — the binding constraint in agent-built software: generation is cheap, checking is not; throughput is gated by review and verification capacity, not by model capability.

**proxy metric** — any measured stand-in for value (merged PRs, commits, lines of code, time-on-task). Throughput is measurable; value is not.

**denominator choice** — "% of code written by AI" figures depend entirely on the denominator: the same telemetry can read as 28.7% or 70.6%.

**benchmark-to-production gap** — the collapse from an offline benchmark score to the real-SDLC applied rate (Meta: 68% → 19.7%, roughly 3.5×).

**self-assessment gap** — developers can't judge AI's effect on their own speed; the measured error is around 40 points — wrong even about the sign.

**tech debt on credit** — velocity gained early and paid back later, as the sustained complexity and warning increases that drive the slowdown.

## Reading the evidence

**evidence grade (the ladder)** — the `MEASURED` / `REPORTED` / `ASSERTED` classification of a claim. Grades are inherited, never upgraded.

**conflict of interest, stated inline** — naming the conflict of interest (who is paying) as part of the finding itself, not as a footnote.

**going to the primary** — reading the primary source, with its date, instead of trusting a second-hand summary of it.

## Preparation over model

**preparation over model** — setup and scope move success more than the choice of model does.

**the gate-not-the-agent misread** — a low failure number that belongs to the review gate, not to the agent.

**controllable scope** — starting where the problem is bounded, with a requirements gate.

**architecture-first with a loop** — design before code, while accepting that sound-looking design still needs iteration.

**harness staleness** — scaffold components encode model-limit assumptions that expire.

## Project memory and tiering

**project memory** — durable, agent-readable knowledge that persists across runs.

**amnesia** — agents keep nothing between sessions but the files on disk.

**context tax** — the measured &gt;20%-per-turn cost of standing context: every line is re-sent and billed each turn.

**over-compliance** — the measured way extra artifacts hurt: agents follow instructions thoroughly but unnecessarily.

**scar archive** — the reasoning behind each locked decision, appended after every fixed bug class — a blameless postmortem kept where the agent will read it.

**knowledge tiering** — organising memory by rate-of-change or distance-from-focus, so only the relevant tier loads.

**LOD ladder** — three-level (map / contract / blueprint) tiering by an artifact's relation to the task, mirrored by Anthropic Skills' activation / reference / deep dive.

**hot set / cold set** — the always-loaded, one-screen non-negotiables versus the on-demand detail.

**progressive disclosure** — loading only a name and description until the body is actually needed.

**artifact overload** — spec-driven work's central unsolved failure: artifacts generated faster than review or context can absorb them, with no lifecycle discipline.

## Rules that hold

**executable rule / rules-as-code** — a constraint enforced by the harness or CI (a hook, lint, grep, or gate) that the model cannot bypass.

**"an instruction is not a control"** — a rule stated in natural language is a suggestion, not an enforced boundary.

**hook vs skill** — a hook is deterministic harness enforcement; a skill is model judgment it may ignore. Security and correctness failures must be hooks.

**the gate defines the artifact** — an agent optimizes what you check, so anything unchecked doesn't exist. "The agent grading its own homework" is not verification.

**reward hacking / gaming the gate** — satisfying the checked metric without doing the requested work: retrieving rather than deriving, or suppressing a symptom to pass a test.

**blast radius** — the scope of damage a confused or compromised agent can reach; controls are placed relative to it.

**policy-as-code** — enforced-in-the-pipeline, audited rules — the enterprise form of executable rules.

**least privilege** — the agent can reach exactly the resources its current task needs, and no more.

**drift / rule rot** — the decay of a rule corpus with no staleness mechanism: constants diverge, copied code goes stale, superseded rules survive, and seams between files contradict.

**consistency owner** — the role accountable for reconciling a corpus so that two authoritative files can't prescribe opposite things.
