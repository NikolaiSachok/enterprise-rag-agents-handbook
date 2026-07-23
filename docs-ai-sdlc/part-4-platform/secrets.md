---
title: "Secrets"
sidebar_position: 1
---

# A secret the agent never holds cannot leak

Part I through III lived inside the loop — planning, decomposing, generating, gating. Part IV is the ground the
loop runs on: the **platform**, the production layer that decides how much damage a mistake can do. It opens
with the oldest rule in the book, because agents have quietly made it larger. The rule is: **a secret never
reaches the agent or the repo.** A human developer who would never paste a production key into a source file is
one narrow, trusted channel. A coding agent is a wide, replicating one — it reads the entire tree, carries
whatever it reads into a third-party model call, logs its own reasoning, and then acts. Every one of those is a
new place a credential can escape from. The old advice "don't commit secrets" now has a second surface that is
larger than the first: the agent's context window.

## The invariant, and the two surfaces it protects

The invariant is one sentence and it does not change with scale: **the secret's value reaches neither the
repository nor the agent's context.** Two surfaces, two different reasons.

The **repository** is permanent. Git history is append-only; a secret committed on Monday and deleted on Tuesday
is still in Tuesday's history, still in every clone, still in every fork. Deletion is not remediation — the file
looks clean while the credential stays live in the log. This is a structural fact, not a probability: the only
thing that closes a committed secret is revoking it.

The **agent's context** is a channel you do not fully control. Whatever the agent reads to do its job is sent to
a model provider, may be retained or logged there, and can be echoed back out — into a generated file, a pull
request description, a log line, a comment. A human reads a secret and forgets it; an agent reads a secret and
may *reproduce* it somewhere you never looked. So the secret must not sit anywhere the agent is pointed, which
in practice means it must not sit in the code at all.

## Reference at runtime, never embed

One mechanism makes the invariant hold at every scale: secrets live *outside* the code as *references*, and are
resolved into the running process only at runtime. Code reads a name — `DATABASE_URL`, `STRIPE_KEY` — never a
literal value. The value is injected into the process environment by something the agent and the repo never see.
This is the configuration principle the [twelve-factor app](https://12factor.net/config) states as strict
separation of config from code (`ASSERTED`, and near-universal practice): the agent gets the config surface it
needs — the *names* of the things it wires together — without the secret surface it does not.

What "injected by something else" is scales cleanly:

- **Locally**, a `.env` file that git is configured to ignore and the agent is configured not to read, loaded
  into the environment at process start.
- **In CI**, environment variables handed to the job by the platform's secret store, never `echo`-ed into a log.
- **In production**, a broker or vault that hands the process a credential at boot and takes it away when the
  process dies.

In all three the agent manipulates the *reference* and never the *value*. That is the whole trick: you cannot
leak, commit, or paste into a prompt a thing you were never holding.

:::tip[▶ Video]

<YouTube id="BqekRTA6VCs" title="Secrets Management: Secure Credentials & Avoid Data Leaks — IBM Technology" />

IBM's walkthrough of secrets management as its own discipline — storage, injection, rotation. Read it through
this lesson's frame: every mechanism it shows exists to keep the *value* out of the two surfaces a coding fleet
makes dangerous — the repo and the agent's context.

:::

## When it leaks anyway: scan, block, rotate

Prevention is not a plan, so the platform composes the same two-mechanism layering Part III used for
[gate design](../part-3-verification/layered-gates.md). A **deterministic** secret scanner — a pattern-and-entropy
grep like gitleaks or a provider's native scanning — is the cheap gate that catches the literal key before it
enters history. It is blind to the credential expressed in an unusual shape, exactly as a grep is blind to a
paraphrase, so it composes with review; but for the common case, a fast literal gate is precisely right.

Two rules keep it honest. First, **the block belongs on the server, not only in the pre-commit hook.** A local
hook is advisory — an agent running `git commit --no-verify`, or simply not wired to the hook, sails straight
past it. Push protection enforced by the remote is the gate that an agent cannot skip. Second, **a leaked
secret is rotated, not deleted.** Because history is permanent, editing the file remediates nothing; the only
action that closes the exposure is revoking the credential at its source and issuing a new one. Rewriting
history is cleanup, not remediation — assume the value was captured the moment it was pushed.

The scale of the problem is real and worth stating carefully. GitGuardian's *State of Secrets Sprawl* reports
millions of new leaked credentials found in public commits each year, a count that has risen with the volume of
AI-assisted commits (`REPORTED`). Read it through the course's vendor rule: GitGuardian sells secret scanning,
so the number is a claim about the *scale of the problem it addresses*, directionally credible but not an
independent measurement. The direction is the point — machine-speed commit volume moves secret sprawl the wrong
way, which is exactly why the block has to be automatic.

## The three tiers — soloist · small-team · enterprise

The invariant holds at every scale — **the secret's value reaches neither the repo nor the agent** — and, as
the intro's blast-radius rule predicts, the closer a credential sits to real damage the shorter its life must
be. What changes across tiers is the mechanism that enforces it.

- **Soloist.** A gitignored `.env` read into the environment, plus a pre-commit secret scanner you actually
  install. *The failure it prevents:* a key pasted into a config file that the agent then commits to a public
  repo — the single most common way a solo project leaks a live credential.
- **Small-team.** Secrets injected from the CI or platform secret store, server-side push protection on the
  repository, and a written rotation runbook. *The failure it prevents:* one shared, long-lived key living in a
  `.env` passed around chat, still valid months after the person who minted it has moved on.
- **Enterprise.** A managed vault issuing short-lived, dynamically generated, per-workload credentials with
  audit and automatic rotation — the credential expires faster than an exfiltrated copy stays useful. *The
  failure it prevents:* a static, broadly-scoped credential whose blast radius, once leaked, is every system it
  can reach, discovered only in the breach post-mortem.

## What to take away

- The invariant is one sentence at every scale: **the secret's value reaches neither the repository nor the
  agent's context.** Agents widen the second surface — they read, transmit, log, and reproduce — so the old
  "don't commit secrets" is now the smaller half of the rule.
- Keep the value out by holding only a **reference**: code reads a name, the value is injected into the process
  at runtime by something the agent and the repo never see. You cannot leak what you never held.
- Compose a **deterministic** scanner with review, enforce the block **server-side** (a local hook is advisory
  and an agent skips it), and treat every leak as **rotate, not delete** — git history is permanent.
- Scale the mechanism, not the invariant: gitignored `.env` → CI-injected secrets with push protection → a
  vault issuing short-lived per-workload credentials. The closer the secret sits to the blast radius, the
  shorter its life.

**[New terms](../glossary.md#secrets)**: secrets invariant, config/code separation, reference-not-embed, runtime injection, secret scanning, push protection, rotation-not-deletion, short-lived credential.
