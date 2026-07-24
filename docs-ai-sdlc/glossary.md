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

**Mutation testing** — measuring a gate's detection power by injecting a deliberate defect and checking whether the gate catches it. It measures what coverage cannot: whether behavior is *checked*, not merely executed. *(deep dive)*

**Mutant (killed / survived)** — a single injected defect. A killed mutant was caught by the gate; a surviving mutant is a demonstrated blind spot — a concrete defect the gate let through.

**Mutation score** — killed mutants over total, the honest replacement for coverage: not how much code the gate touched, but how much of it the gate can actually defend.

**Mutation operator** — the rule that generates a mutant (statement deletion, boundary flip `<`→`<=`, return-value or constant change). The set of operators is itself a probe list, so mutation testing inherits probe-list bias — it tests only the defect classes an operator encodes.

**Equivalent mutant** — a mutation that changes the code without changing its behavior, so no test can kill it. It lowers the score through no fault of the suite, and deciding whether a survivor is equivalent is undecidable in general — a per-survivor human judgment.

**Coverage vs detection** — coverage answers "did this line run"; detection answers "would a defect here be caught". A suite can execute every line and assert nothing: 100% coverage, zero detection.

**Cost-to-invalidate ordering** — running the pass whose fixes most disturb later passes first, so the more expensive downstream judgments land on a surface that has stopped moving. It is why behavior is checked before appearance.

**Cost-per-run ordering** — running the cheapest gate first so the expensive gate only examines what already survived everything cheaper. For the gate chain it points the same direction as cost-to-invalidate, which is why the chain has a single order.

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

## Secrets

**Secrets invariant** — the rule that a secret's *value* reaches neither the repository nor the agent's context. Agents widen the second surface — they read the whole tree, transmit it to a model provider, log it, and can reproduce it — so "don't commit secrets" is now the smaller half of the rule.

**Config/code separation** — the twelve-factor principle that configuration (including secrets) lives outside the code and is supplied by the environment, so the code carries only *names*, never values.

**Reference-not-embed** — holding a secret as a reference the code resolves at runtime (a variable name) rather than a literal baked into a file; you cannot leak, commit, or paste into a prompt a value you were never holding.

**Runtime injection** — supplying the secret's value into the running process at start-up (from a gitignored env file, a CI secret store, or a vault) rather than storing it anywhere the agent or the repo can see.

**Secret scanning** — a deterministic pattern-and-entropy gate (e.g. gitleaks or native provider scanning) that catches a literal credential before it enters history; blind to unusually-shaped secrets, so it composes with review.

**Push protection** — secret scanning enforced server-side by the remote, not only in a local pre-commit hook; the pre-commit hook is advisory and an agent (`--no-verify`, or simply unwired) skips it.

**Rotation-not-deletion** — the remediation rule that a leaked secret is revoked and reissued at its source, never merely deleted from a file, because git history is permanent and the exposed value must be assumed captured.

**Short-lived credential** — a dynamically generated, per-workload secret that expires faster than an exfiltrated copy stays useful; the blast-radius rule in credential form — the closer a secret sits to real damage, the shorter its life.

## Least privilege and sandboxing

**Least privilege** — sizing a grant to the task in front of the agent rather than to everything the agent might ever need: the specific resource, read-only unless writing is the task, expiring soon, under an identity that can be revoked alone.

**Sandboxing** — the boundary the agent runs inside, enforced by the platform rather than by the agent's cooperation. Least privilege limits what it *may* touch; the sandbox limits what it *can* touch when something nobody anticipated happens.

**Instruction vs permission** — an instruction is a request to a probabilistic system; a permission is a property of the system. Repeated explicit instructions do not constitute a control — only the absence of the capability does.

**Grant sizing** — the four dials that make a grant least-privilege: *scope* (which resources), *mode* (read / write / destructive as separate grants), *lifetime* (short enough to survive a leak), and *identity* (one credential per task, revocable in isolation).

**Prompt injection** — untrusted content the agent reads (an issue, a page, a README) acting on it as instruction. It cannot be filtered reliably, so the design goal is that a *successful* injection is survivable rather than prevented.

**Confused deputy** — a component with legitimate authority tricked by an untrusted party into exercising it on their behalf. An agent holding broad permissions while reading untrusted text is the canonical modern instance.

**Egress allowlist** — restricting the agent's outbound network to the few hosts its task needs, so exfiltration to an arbitrary destination is impossible regardless of what the agent is persuaded to attempt.

**Workload identity** — issuing short-lived credentials to a workload per task rather than storing static tokens, so compromise is attributable, time-boxed, and revocable without breaking everything else.

## Environments, migrations, and real data

**Realistic-not-real data** — the rule that an agent works against a dataset shaped like production but containing no real people, because a production copy both multiplies the obligations attached to personal data and feeds real records into the agent's uncontrolled context.

**Data masking vs anonymisation** — masking replaces identifying fields; anonymisation means re-identification is infeasible. Masking does not automatically achieve it — joining against another source, or a generator memorising its training rows, can undo it. A masked set is lower risk, not no risk.

**Referential integrity (of a test corpus)** — the property that a masked or synthetic dataset's keys still line up across tables. Without it, tests pass for reasons unrelated to the code under test.

**Distribution tail** — the ugly cases a corpus must keep to be worth testing against: empty strings, apostrophes in names, oversized fields, rows predating a schema change. Happy-path-only fixtures produce green tests that mean nothing.

**Expand–migrate–contract (parallel change)** — the schema-change pattern that stays reversible under fast generation: add the new shape (additive, backward-compatible), backfill and switch reads/writes one step at a time, and only later remove the old shape as its own deliberate change.

**Destructive-statement gate** — a deterministic check that fails any migration containing a destructive operation unless it carries an explicit marker; it replaces "someone will spot the `DROP` in review", which does not scale with generation speed.

**Rehearsed restore** — actually restoring a backup into a throwaway environment and confirming the data is there and coherent. Until that has been done, a backup is an untested assertion, exactly as an unfired gate is quiet rather than working.

**Point-in-time recovery** — the ability to restore state as of a chosen moment rather than only the last snapshot, which is what makes "undo the last hour" a capability instead of a hope.

## Observability, rollout, and the kill switch

**Production as terminal gate** — treating live operation as the last gate in the verification chain, because some defect classes exist only under real traffic, real data distributions, and real devices, where no pre-merge gate can perceive them.

**Telemetry signal set** — the small set of sensors worth watching per change: error rate on the new path, high-percentile (not mean) latency, saturation of the scarce resource, and one business signal.

**Business signal** — the product-level metric that moves when a change is technically healthy but functionally useless (checkouts started, messages sent). The signal teams most often omit and the one that catches the defect no technical metric can see.

**Deploy/release separation** — shipping code and enabling behaviour as two distinct acts, usually via a feature flag, so the audience for a change becomes a dial that can be turned without another deploy.

**Staged rollout (canary · ramp)** — exposing a change to a small population first and widening it in steps, converting a binary release event into a bounded one.

**Automated revert** — binding the rollout ramp to thresholds so a breach stops and reverses it without waiting for a human to notice; noticing a metric move is not a good use of scarce human attention.

**Kill switch** — a state change (flag flip, traffic shift, routing revert) that one person can operate in seconds without producing a new artefact. If undoing requires the pipeline, it fails exactly when the pipeline is the problem.

**Fleet pause** — the second position of the kill switch when agents are generating continuously: stopping the *source* as well as the *change*, so a fleet does not rebuild the problem on top of the revert.

## Running agent fleets: isolation and parallelism

**Agent fleet** — several agents working concurrently on one codebase. Its size is governed not by available compute but by how much the verification chain can absorb.

**Shared-state serialiser** — any mutable thing two agents both touch (a working tree, a database, a quota, an appended-to corpus). Whatever is shared decides who waits, so it, not the scheduler, sets the real concurrency.

**Worktree isolation** — giving each agent its own checkout against the same object store, so one branch switch or one stray commit cannot disturb a neighbour. Isolation removes a class of interference that coordination can only manage.

**Accretive artefact** — a file tasks *append* to (rules corpus, glossary, decision log). Two parallel appends do not merge: the second write wins silently, so these stay serial or are merged deliberately.

**Parallel generation / serial integration** — the division that actually holds: generating candidate work concurrently while merging stays single-file, because integration is where conflicting work must be reconciled.

**Serial fraction** — the portion of the pipeline that cannot run concurrently (integration, review, one-way changes). It, not the agent count, sets the ceiling on total throughput.

**Contention** — what additional agents buy once the serial fraction is saturated: queueing, rework, and a longer backlog rather than more finished work.

## Drift control and rule rot

**Rule rot** — the decay of a rule corpus as the code it describes moves on. A stale rule is worse than no rule: a human ignores an obsolete convention, an agent complies with it.

**Staleness / contradiction / bloat** — the three decay shapes. Staleness describes a structure that no longer exists; contradiction makes agent behaviour nondeterministic because two reasonable rules now conflict; bloat dilutes the important constraints and invites silent truncation of the corpus.

**Executable vs prose rule** — a rule expressed as a check fails loudly when reality moves; a rule expressed only in prose decays in silence and keeps being obeyed. Prefer the check; where prose is unavoidable, schedule a human against it.

**Silent decay** — going out of date without any signal, the defining hazard of prose rules and of project memory, which reads as description and therefore is never audited.

**Rule ownership / rule expiry** — the two fields almost never written next to a rule: who is accountable for it, and when it is next checked against the code. Without an owner, corpora only grow, because deleting always feels riskier than keeping.

**Never-fired rule** — a check that has caught nothing for a long time. It is either guarding a class that no longer occurs or is broken and being trusted for its silence; planting a violation tells you which.

**Memory drift** — the same decay in project memory: superseded decisions left standing beside the ones that replaced them, read by the agent as current fact.

## Cost and the economics of agent work

**Cost per accepted change** — the honest unit of agent economics: everything spent reaching a change that survived the gate chain, including retries, abandoned runs, verification calls, and review time. Cost per token is a price list, not a measurement.

**Retry rate** — how many attempts a change takes to land. Under the honest denominator it outweighs sticker price: a cheaper model needing more attempts is usually the more expensive one.

**Context cost** — the recurring price of what the agent re-reads on every attempt (repository, rules corpus, brief). Usually the largest line item in agentic workloads and the one price-list estimates omit entirely.

**Verification cost** — the model calls the semantic gates themselves consume. It scales with output, so a fleet that generates twice as much pays twice as much to check it.

**Per-task attribution** — tagging spend to the task that caused it (naturally, via the per-task identity already used for credentials), which turns "what did this feature cost" from rhetorical into answerable.

**Spend cap** — a hard per-task bound that stops a runaway loop while it is running. Agents fail by repeating, which is precisely what a monthly report can only explain afterwards.

**Unit economics / outcome metric** — unit cost reported *next to* a measure of what shipped. A falling cost per change alongside an unmeasured outcome optimises the denominator, not the business.

## The enterprise tier: audit, provenance, and what's required

**Demonstrable control** — a control someone other than its operator can show, afterwards, to have run. At this distance from the blast radius, a control that cannot be evidenced is indistinguishable from one that never existed.

**Audit trail** — the record of who did what, when, and on whose authority. With agents it must also name the agent, the model, and the brief: "an AI wrote it" is not an actor and cannot be questioned later.

**Non-repudiation** — the property that makes a trail evidence rather than narrative: it is produced by the system as a side effect of the work, not written afterwards by the party being recorded.

**Provenance** — the lineage of an artefact: which source, build, dependencies, and agent produced it. Recorded at generation time, because reconstructing it later is guesswork.

**SBOM (software bill of materials)** — the inventory of what went into an artefact, which turns a newly-disclosed vulnerability into a lookup instead of an investigation.

**Signed attestation** — a cryptographic binding of an artefact to the process that built it, making "this came from that commit through that pipeline" checkable rather than asserted.

**Separation of duties (between agents)** — generation and certification performed by distinct actors under distinct identities, with the record showing which was which. It has two independent justifications: it produces better verification, and it produces *defensible* verification.

**Defensible verification** — verification that survives someone else's later examination. An approval rate no human could sustain fails this test even when the signature is genuine.
