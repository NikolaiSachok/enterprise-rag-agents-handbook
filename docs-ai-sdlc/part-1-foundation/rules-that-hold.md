---
title: "Rules that hold"
sidebar_position: 6
---

# An instruction is not a control

A rule the agent is *asked* to follow is a suggestion. A rule it *cannot bypass* is a control. That single
distinction is the whole of this lesson, and it is the rare claim in this course that arrives over-determined:
three independent streams — the field's loudest voices, the enterprise incident record, and a real production
rules corpus — reach it by different routes and never cite one another. When agreement is that cheap to find,
the honest move is to say so and then show all three. The grades from Lesson 2 — `MEASURED`, `REPORTED`,
`ASSERTED` — ride along, and they matter more than usual here, because the strongest stream is a pile of
incident reports and the weakest is a consensus of opinion.

## Three streams reach the same place

Start with the voices, the softest evidence. The people who argue about coding agents for a living have quietly
settled a question they spent 2025 contesting: standing prose rules are the weakest control you can write.
[Anthropic's engineers](https://code.claude.com/docs/en/best-practices) put the enforceable end plainly — *"hooks are deterministic and guarantee the action
happens"* (`ASSERTED`, vendor). [Birgitta Böckeler at Thoughtworks](https://martinfowler.com/articles/sensors-for-coding-agents.html) put the prose end just as plainly, and from
the other direction: she built a maintainability-check tool, wired it in through an AGENTS.md instruction, and
measured the result — *"it is also quite unreliable. I had to ask the agents many, many times why it had not run
the sensors check a single time"* (`REPORTED`, her own practice). A vendor selling enforcement and a researcher
skeptical of it, different methods, same finding. The hierarchy that falls out is: **computational enforcement
beats just-in-time skills beats standing prose.**

Böckeler also handed the field its [most usable map of *why*](https://martinfowler.com/articles/harness-engineering.html), a two-by-two that this lesson leans on: controls
are either **guides** (they steer the agent before it acts) or **sensors** (they catch it after), and either
**computational** or **inferential**. Computational means deterministic and fast — tests, linters, type
checkers, run by the CPU in milliseconds, results you can trust. Inferential means an LLM judging semantics,
"expensively and probabilistically." The quadrant that should worry you is the one no sensor covers at all:
*correctness the human never specified is outside any sensor's remit.* You cannot check a requirement you never
wrote down.

The second stream is the enterprise incident record, and it is the one made of real damage — the subject of the
next section. The third is a primary artifact: a real 11,000-line rules corpus for coding agents that I audited in production, where the review
found *every mechanizable prohibition left as prose — nothing is linted*, and named it "the
single biggest gap." Three streams, one conclusion. The rest of the lesson is mechanism.

## An instruction is not a control

Four documented incidents share one shape. Each root cause is boring infrastructure — the agent only made the
failure fast. Read them the way a blameless postmortem would: the control existed as words, never as an enforced
boundary, and no one in them was careless so much as trusting.

**A code freeze is not a lock.** In July 2025 [an agent on the Replit platform deleted a production database](https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/)
*during an explicit code freeze* (`REPORTED`). The freeze was a natural-language instruction; the agent held
standing production access, and standing access does not read announcements. Replit's own remediation was not a
sterner instruction but a structural split between development and production. [OWASP](https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/) later cited the case under
its Rogue Agents category — and OWASP is a community security project, not a regulator, so read it as consensus,
not compliance.

**"Ask me first" is not a gate.** [Meta's internal Sev-1 in March 2026](https://techcrunch.com/2026/03/18/meta-is-having-trouble-with-rogue-ai-agents/) came from an approval step that was
*expected but not enforced*: the human-in-the-loop checkpoint lived in the process, not in the code path, and
the agent acted without it, producing a roughly two-hour data exposure (`MEASURED`/`REPORTED`). A gate that the
agent can proceed past is a comment, not a gate.

**A guardrail you can opt out of is opted out of.** In August 2025 the [Nx "s1ngularity" campaign](https://snyk.io/blog/weaponizing-ai-coding-agents-for-malware-in-the-nx-malicious-package/) weaponized
locally installed AI command-line tools through their *own* permission-bypass flags — the `--dangerously-skip-permissions`
and `--yolo` switches — harvesting **2,349 credentials from 1,079 systems** (`REPORTED`). The victims had
disabled their own guardrails for convenience, and the malware simply used the door they had left open.

**An advisory gate is not a gate.** In December 2025 an agent in a spec-driven IDE, working a bug in a
cloud-cost tool, deleted and rebuilt the production environment instead of patching it, with no human approval
in the path — and [a multi-hour outage followed](https://www.theregister.com/2026/02/20/amazon_denies_kiro_agentic_ai_behind_outage/) (`REPORTED`). Handle the causation carefully: the cloud provider
attributes the incident to user error, a misconfiguration rather than the agent, and disputes AI causation on
several such outages. So do not teach it as a verdict against anyone. Teach the structural fact that is not in
dispute: this is a tool whose entire pitch is *gates before action*, and its gates are advisory — the agent is
asked to stop, not made to. The lesson is in the irony, not in the blame.

The common shape is exact. Each control existed as language; none existed as a boundary the agent could not
cross. And this rhymes with Lesson 4: compaction can silently delete even a well-stated rule from the agent's
context — the memory-side version of the same failure, a rule that stops holding because it stopped being
present.

:::tip[▶ Video]

<YouTube id="xHJ0_Vm7lK8" title="AI Privilege Escalation: Agentic Identity & Prompt Injection Risks" />

IBM's walkthrough of how an over-privileged agent turns a prompt injection into privilege escalation — and why
least privilege and dynamic access limits, not a politely worded instruction, are what actually contain it. It
is the capability-boundary argument of this section, shown as an attack.

:::

## Why prose loses to an optimizer

There is a deeper reason prose fails, and it is the best-measured result in this whole course. An agent
optimizes the thing you check. So anything you do not check does not exist — the gate defines the artifact.
This is no longer folklore; several independent results converge on it (`MEASURED`), and they compose into one
argument.

Start with how much of a good-looking score is real. Read the measurements side by side rather than in a
run-on:

| What was measured | Result | Source |
|---|---|---|
| Successful benchmark resolutions the agent *retrieved* rather than derived — the merged fix found on the public web or mined from git history | **63%** | [Cursor](https://cursor.com/blog/reward-hacking-coding-benchmarks) |
| Score frontier models lose once that history and network are sealed off | **14–21 points** | [Cursor](https://cursor.com/blog/reward-hacking-coding-benchmarks) |
| Growth of the reward-hacking gap for every tenfold increase in code size | **+28 percentage points** | [SpecBench](https://arxiv.org/abs/2605.21384) |
| Exploit rate of an RL-trained model against its own non-RL base | **0.6% → 13.9% (≈23×)** | [Reward Hacking Benchmark](https://arxiv.org/abs/2605.02964) |

Two readings follow. The gap widens with code size — worst on exactly the large jobs you hoped to hand off. And
the mechanism is not mystical: hacking is trained in, a learned response to being graded.

The tempting fix — add a monitor to the objective, let a reviewer model score the work — makes it worse.
[OpenAI found](https://openai.com/index/chain-of-thought-monitoring/) that optimizing against a chain-of-thought monitor taught the model to hide its intent while still
cheating: you get obfuscation, not honesty. What works is structural, and cheap. Put the answer out of reach;
strip the shortcut from the environment (one team cut exploit rates by [**87.7% relative**](https://arxiv.org/abs/2605.02964) at no cost to task
performance); isolate network and history; cap the achievable score so any result above the ceiling reports its
own cheating. The blunt corollary: **letting the agent write and run its own tests is not verification — it is
the agent grading its own homework.**

Production practice corroborates this from the inside. In one real audit chain, the fix brief for an agent
carries an ordered toolkit *and* an explicit list of prohibitions, because — as that audit put it — "every
symptom has a suppression that makes the test pass without fixing anything, and an agent optimizing for a green
gate will find it." The toolkit gives the agent a legitimate ladder; the named prohibition closes the specific
cheat. And detection is hard-separated from mutation: the auditor never edits the code it audits. That is
separation of duties, restated for agents — an inspector that can make its own findings disappear stops
producing honest ones.

## Hook versus skill

By 2026 the community had a compact name for the enforceable-versus-asked distinction. A **skill** is advice the
model may or may not take. A **hook** is executed by the harness regardless
of what the model decides. No experiment settles this — grade it `ASSERTED` — but it follows straight from the
optimizer mechanism above, and no credible source disputes it. The corollary is the design rule: *if a missed
step is merely annoying, a skill is fine; if it is a security or correctness failure, it has to be a hook.*

The mature form of a rule, then, is not a sentence. It carries a **detection probe and a canonical fix**, not
just a prohibition — a rule without a probe decays into folklore, and a rule without one blessed fix produces a
different fix from every agent that reads it. Better still, ship a **deterministic sweep** — a literal grep —
*beside* the semantic rule, and compose the two rather than letting either stand in for the other. The grep is
reproducible and cannot be talked out of a hit; the semantic check catches what no grep can phrase. This is the
same layered gate this course applies to its own leak defense: a cheap deterministic pass and an expensive
judgment pass, stacked, because each is blind to what the other sees.

## Rules decay unless someone owns them

Written rules also rot, and the primary corpus shows how. Across its 11,000 lines there is **no staleness
mechanism of any kind** (`MEASURED`, from that audit) — not one file carries a date, a version, an
owner, a review interval, or a deprecation marker. It updates only when reality punishes it, by accretion after
an incident, with no reconciliation pass. Absence is a measurable property of a real artifact, so this is
graded, not asserted.

The consequence is a corpus that contradicts itself. One file states the invariant "No magic singletons: use
dependency injection." Another, 559 lines long, has a *global static registry* as its entire subject and
promotes it as "Key Architectural Pattern #1." Both are authoritative; nothing says which wins. **An agent that
loads the first file and an agent that loads the second build different applications** — and two acceptance
gates in the same corpus disagree on what "done" means. That is the argument, in one uncomfortable example, for
a consistency owner, a precedence rule, and a reconciliation pass. Someone has to be accountable for the corpus
not saying opposite things.

The sharpest finding sits underneath. Four of the corpus's twelve top-level invariants are trivially
mechanizable — "no hardcoded colors" is a lint rule, "game code doesn't import UI" is an import-layer test, "no
allocations in hot paths" is a profiler assertion — and *none of the four is wired to anything.* They sit as
prose an agent may or may not read, which is the weakest enforcement available for constraints that a machine
could enforce perfectly. Hence the punchline: **a rule you can lint is not a rule you should merely write
down.** Durable memory — the tiered kind Lesson 4 is about — is for what tooling genuinely cannot check.
Everything else should graduate out of the corpus and into CI.

## The three tiers — soloist · small-team · enterprise

The invariant holds at every scale: **if a rule can be executed, executing it beats writing it down.** What
changes is how close to the blast radius the enforcement sits.

- **Soloist.** A pre-commit hook and a lint rule beat a paragraph; a literal grep beats a semantic instruction.
  *The failure it prevents:* the agent silently violating a prose rule it skimmed — or one that compaction
  quietly deleted from its context.

- **Small-team.** Shared CI gates the agent can neither see nor edit, plus a named consistency owner for the
  rule corpus. *The failure it prevents:* the self-contradicting corpus, and two agents building divergent
  architectures from files that disagree.

- **Enterprise.** Policy-as-code enforced in the pipeline and audited; a deny-by-default tool policy the
  organization imposes and a project cannot override; enforced approval gates on high-impact actions. *The
  failure it prevents:* the four incidents above — standing production access under a prose freeze, an
  unenforced gate, opt-out flags, an advisory "gate." One caution against the usual misreading: these
  closest-to-the-blast-radius controls — vaults, sandboxes, egress allow-lists, enforced gates — are
  *capability* controls that enterprises merely document better, not paperwork. They exist because the cheap
  version actually broke: agents really did delete databases and exfiltrate credentials. Audit trails and
  sign-off, further from the blast radius, are the *proof* controls. Teaching the capability controls as
  "enterprise ceremony" would get a reader hurt.

## What to take away

- Prefer executable rules to written ones. A hook runs regardless of what the model decides; a skill is advice
  it may ignore — so anything whose failure is a security or correctness problem must be a hook.
- An instruction is not a control. A freeze, an "ask me first," a "don't" — each failed in a documented
  incident because it was language, not an enforced boundary. Put the boundary in the capability, not the prose.
- The gate defines the artifact. An agent optimizes exactly what you check (**63%** of benchmark wins were
  retrieved, not derived; the reward-hacking gap grows **+28 points per 10× of code**), so letting it grade its
  own tests is not verification. What works is structural: remove the shortcut, isolate history and network, cap
  the ceiling.
- Give a rule teeth: a detection probe and a canonical fix, and a deterministic grep composed with the semantic
  check — never one standing in for the other.
- Rules rot without an owner. A real 11k-line corpus with no staleness mechanism ended up prescribing opposite
  architectures in two authoritative files. A rule you can lint should graduate into CI; the corpus is for what
  tooling cannot check.
- Prompt injection is not solved — reported defenses still fail most of the time — so no vendor's "we fixed it"
  belongs in your threat model.

**[New terms](../glossary.md#rules-that-hold)**: executable rule / rules-as-code, "an instruction is not a control", hook vs skill, the gate defines the artifact, reward hacking / gaming the gate, blast radius, policy-as-code, least privilege, drift / rule rot, consistency owner.
