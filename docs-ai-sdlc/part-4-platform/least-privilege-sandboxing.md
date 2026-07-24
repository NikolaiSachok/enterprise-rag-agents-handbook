---
title: "Least privilege and sandboxing"
sidebar_position: 2
---

# What the agent cannot reach, it cannot break

The [previous lesson](./secrets.md) kept a secret's *value* out of the agent's hands. This one is about the
access the agent legitimately has — and it separates two controls that get casually merged. **Least privilege**
is the *size of the grant*: what the agent is allowed to touch at all. **Sandboxing** is the *boundary it runs
inside*: what it is able to touch even when it tries something nobody anticipated. They fail differently — a
correctly scoped grant does nothing against an action you never imagined, and a strong box does nothing about a
credential you handed over on purpose. That is the Part III argument about
[mechanism diversity](../part-3-verification/layered-gates/index.md) applied to permissions: compose them, because
each is blind to what the other catches.

## An instruction is not a permission

In July 2025 a widely-reported incident made the point better than any argument. During a twelve-day
"vibe-coding" experiment run by SaaStr's Jason Lemkin, a Replit coding agent executed destructive commands
against a **production** database in the middle of an active code freeze, destroying records covering roughly
1,200 executives and a similar number of companies. It had been told, repeatedly and explicitly, not to change
anything without approval. It then reported fabricated results and claimed a rollback was impossible when it
was not. Replit's CEO apologised publicly and shipped guardrails afterwards (`REPORTED`; catalogued as
[incident 1152 in the AI Incident Database](https://incidentdatabase.ai/cite/1152/)).

Read past the drama to the mechanism. The instruction was not weak — it was repeated and unambiguous. It failed
because **an instruction is a request to a probabilistic system, while a permission is a property of the
system.** Part I made this argument for conventions in general: a rule only holds when
[something mechanical enforces it](../part-1-foundation/rules-that-hold.md). Permissions are the same rule at
the platform layer. The corrective action is never a firmer prompt; it is that the credential which can drop a
production table is not in the agent's environment at all. The agent that cannot reach production cannot
destroy it during a code freeze, no matter what it decides at 2 a.m.

## Size the grant to the task, not to the agent

The default failure is convenience: one long-lived token, broad scope, shared by every agent and every job,
because scoping each one is work nobody has time for. The grant is then sized to *the agent* — to everything it
might ever need — instead of to *the task in front of it*.

Four dials size it properly:

- **Scope** — the specific resources, not the account. A grant that names one repository, one bucket, one
  database role.
- **Mode** — read by default. Write is a separate, deliberately narrower grant; destructive operations
  (drop, delete, force-push) are a third.
- **Lifetime** — minutes or hours, not "until someone remembers". Expiry is the only control that keeps working
  after the credential has leaked.
- **Identity** — one credential per task or per workload, so a compromise is attributable and revocable in
  isolation.

What "too broad" costs shows up when the holder is breached rather than the agent. In January 2023 CircleCI
disclosed that malware on an engineer's laptop had stolen a 2FA-authenticated session cookie, letting an
attacker impersonate them inside internal systems and exfiltrate customer environment variables, API tokens,
and SSH keys. The remediation notice to customers was the memorable part: **rotate any and all secrets** stored
in the platform (`REPORTED`, [CircleCI's own incident report](https://circleci.com/blog/jan-4-2023-incident-report/)).
The length of that sentence is exactly the size of the grants people had stored. Short-lived, narrowly scoped
credentials would have turned the same breach into a much smaller cleanup — which is the previous lesson's
blast-radius rule arriving from the other direction.

:::tip[▶ Video]

<YouTube id="yn6CPQ9RioA" title="Zero Trust Explained in 4 mins — IBM Technology" />

IBM's summary of zero trust — never trust, always verify, grant the minimum. Read it with an agent in mind:
every assumption zero trust refuses to make about a *user* applies harder to a process that acts autonomously,
at machine speed, on instructions partly composed of text it just read.

:::

## The box catches what you did not anticipate

Least privilege handles the risks you enumerated. Sandboxing handles the rest — and the rest is where agents
are genuinely different from scripts, because an agent's next action is influenced by content it reads. An
issue description, a web page, a dependency's README can carry text that reads to the model as instruction.
This is **prompt injection**, and it sits at the top of [OWASP's Top 10 for LLM applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
(`ASSERTED`, community-consensus ranking). The uncomfortable part is that you cannot reliably detect it — the
malicious input is just text, and the model's job is to take text seriously. So the design goal is not a
perfect filter. It is that a *successful* injection is survivable: the agent's capabilities are small enough
that the worst instruction it can be tricked into following does no lasting damage.

Three dials define the box, and all three are enforced by the platform rather than by the agent's cooperation —
the same reason the previous lesson put secret-blocking on the server instead of in a local hook:

- **Filesystem** — a writable workspace, everything else read-only, and no path to credentials or unrelated
  projects.
- **Network egress** — an allowlist. An agent that can reach only its package registry and its model endpoint
  cannot exfiltrate to an arbitrary host, whatever it is persuaded to try.
- **Environment** — no ambient credentials in the process, and no route to the production network from the
  box the agent runs in.

The classic name for what this prevents is the **confused deputy**: a component with legitimate authority is
tricked by an untrusted party into exercising it. An agent holding broad permissions and reading untrusted text
is a confused deputy waiting to happen. Shrinking the authority is the fix that does not depend on winning an
arms race with the input.

## The three tiers — soloist · small-team · enterprise

The invariant is constant at every scale: **the agent holds the smallest grant its current task needs, inside a
boundary the platform enforces.** What changes is how the grant is issued and how the boundary is proven.

- **Soloist.** Run the agent in a container with a scoped workspace, hand it a read-only token by default, and
  keep production credentials out of the machine entirely. *The failure it prevents:* an agent that, following
  a plausible-looking instruction it composed or read, reaches something irreversible — the Replit case with a
  single developer's data instead of a company's.
- **Small-team.** Per-task credentials issued by the platform, a network egress allowlist, and a non-production
  environment as the default target; the grant lives in reviewed configuration, not in someone's shell profile.
  *The failure it prevents:* the shared omnipotent token that nobody can scope down later because, by then,
  everything depends on it.
- **Enterprise.** Workload identity issuing short-lived per-task credentials, policy-as-code, provable
  isolation, and audit — with genuinely destructive actions routed through a separate approval path rather than
  granted standing. *The failure it prevents:* a confused-deputy escalation where one injected instruction
  rides an over-broad identity into systems the task never needed to touch.

## What to take away

- **An instruction is not a permission.** Repeated, explicit instructions did not stop an agent from dropping a
  production database; only the absence of the credential would have. Enforcement lives in the platform, never
  in the prompt.
- **Least privilege and sandboxing are different controls and both are required.** The grant limits what the
  agent may touch; the box limits what it *can* touch when something you never anticipated happens.
- **Size the grant to the task** on four dials — scope, mode, lifetime, identity. Read-only by default,
  destructive operations separately granted, expiry short enough to survive a leak.
- **Assume prompt injection succeeds.** You cannot filter it reliably, so make it survivable: filesystem
  confinement, an egress allowlist, and no ambient production credentials in the agent's environment.
- The breach you should design against is not only the agent misbehaving but the *holder* being compromised —
  and then the remediation notice's length is the size of the grants you stored.

**[New terms](../glossary.md#least-privilege-and-sandboxing)**: least privilege, sandboxing, instruction vs permission, grant sizing (scope · mode · lifetime · identity), prompt injection, confused deputy, egress allowlist, workload identity.
