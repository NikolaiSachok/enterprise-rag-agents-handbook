---
title: "Least privilege and sandboxing — deep dive"
sidebar_label: "Inside the sandbox: the layers of confinement"
sidebar_position: 2
---

# The sandbox from the inside

[Part 1](./index.md) argued the design goal for an agent that reads untrusted text: not a perfect injection
filter, but a box small enough that a *successful* injection does no lasting damage. It named three dials —
filesystem, egress, environment — and asserted the platform enforces them. This page opens the box. What each
boundary actually is, what a successful attack at the layer above buys the attacker, what stops it here, and
where real sandboxes quietly leak. The through-line is the one from the
[layered-gates deep dive](../../part-3-verification/layered-gates/index.md): no single boundary is trusted, and
each is designed assuming the one in front of it will sometimes fail — [defense in depth](./index.md), applied
to capability instead of detection.

## The confinement stack, boundary by boundary

Four boundaries, weakest-assumption first. Read them as a stack: each one exists because the one above it can
be defeated.

**Process and namespace isolation.** The agent runs with its own view of the system — its own filesystem
mounts, process table, and network stack — usually a container. This is the outer wall, and its honest
limitation is the one teams most often miss: a container shares the host **kernel**, so it is an isolation
boundary, not a hard security boundary against a kernel-level exploit. It contains an ordinary process
cleanly; it is not, by itself, a wall against an attacker who can reach the kernel. That is precisely why it is
the *first* layer and not the only one.

**Syscall filtering.** Everything a process does that matters — open a file, make a network connection, start
another process — is a call into the kernel. A syscall filter (**seccomp** on Linux) restricts which of those
calls the process may make at all, so even arbitrary code execution inside the box cannot reach an operation
the filter forbids. The design choice that decides its worth is **default-deny**: allow the small set the task
needs and refuse the rest, rather than block a blocklist of known-bad calls and hope you enumerated them —
the same closed-world argument Part 1 made for permissions.

**Filesystem confinement.** A read-only root, one writable scratch directory, and — the load-bearing part —
**no mount that reaches host secrets, other projects, or the container runtime's own socket**. The writable
surface is exactly the task's workspace and nothing else. This is where the previous lesson's rule lands
physically: a credential the box cannot read is a credential a successful injection cannot exfiltrate.

**Egress control.** The network allowlist, enforced by a proxy the agent routes through, not by asking the
agent to behave. An agent that can open a connection only to its package registry and its model endpoint
cannot POST your repository to an arbitrary host, whatever instruction it was tricked into following. Egress
is the **exfiltration boundary** — the last layer, and the one that turns "the agent read something it
shouldn't" into a non-event, because the data has nowhere to go.

## The threat model is one question per boundary

A boundary is only meaningful against a stated attack, so make the threat model explicit and per-layer. For
each one, ask: *if an injection fully succeeds at the layer above, what does it buy the attacker, and what
stops it here?*

- Injection makes the agent **run arbitrary code** → process isolation keeps that code off the host's own
  process space.
- The code tries a **privileged operation** → seccomp refuses the syscall.
- It tries to **read a secret or another project** → the filesystem has no mount that reaches them.
- It tries to **send what it found out** → egress has no route to the destination.

Written this way, the stack is [mechanism diversity](../../part-3-verification/layered-gates/index.md) for
capability: each layer is blind to a different attack, and the coverage is a property of the stack, not of any
one wall. And it exposes the cheap mistake — a single strong-looking layer with nothing behind it. A hardened
container with a wide-open egress allowlist stops a process escape and waves the exfiltration through.

## Where sandboxes leak

The failures are not exotic. Each is a boundary quietly removed, usually for convenience, usually by someone
who did not picture the attack.

- **The mounted runtime socket.** Bind-mounting the container runtime's control socket into the box hands
  anything inside it the ability to start a new, unconfined container — a full escape through the front door.
  It is a well-known misconfiguration precisely because it is so tempting for tooling that wants to manage
  containers (`REPORTED`, a standard finding in container-security guidance).
- **The over-broad egress allowlist.** Allowlisting a whole cloud or CDN range to reach one service inside it
  reopens the exfiltration path, because the same range will proxy a request onward to anywhere.
- **`--privileged`, or piling on capabilities.** Granting the box broad kernel capabilities to make one thing
  work dissolves the seccomp and namespace boundaries at once. It is the sandbox equivalent of the shared
  omnipotent token from Part 1.
- **Ambient credentials inside the box.** A secret in the environment of the sandboxed process defeats the
  whole point: the box confines what the agent can *reach*, but a credential you handed it is already reached.
  This is [Lesson 1's invariant](./index.md) at the sandbox boundary.
- **The shared cache across runs.** A writable cache or state directory reused between tasks lets one run
  influence the next — a slower, quieter channel than the network, and an easy one to forget when everything
  else is locked down.

## The cost, and the thing that makes it worthless

The box is not free: it adds start-up latency, image and policy maintenance, and a debugging surface where "it
works outside the sandbox" is a sentence you will say often. Part 1's trade still holds — a boundary the
platform enforces removes a class of interference rather than managing it — but two failure modes turn a
sandbox into theatre.

The first is **drift**, the [rule-rot argument](../../part-5-scale-governance/drift-and-rot.md) applied to
policy: a seccomp profile or egress allowlist that no longer matches what the task does gets widened "just to
unblock things," one exception at a time, until it confines nothing. A sandbox policy needs an owner and a
review the same way a rule corpus does.

The second is **irreproducibility**. A box assembled by hand, un-versioned, that only one person can rebuild is
not a control — it is a machine that happens to be configured safely today. The confinement has to be defined
as code, built the same way every time, so that "the agent runs confined" is a property of the system and not
a fact about one laptop. That is the same standard the whole course applies to everything it calls a control.

## What to take away

- The sandbox is a **stack of boundaries**, each assuming the one before it fails: process isolation, syscall
  filter, filesystem confinement, egress. Coverage is a property of the stack — mechanism diversity for
  capability.
- A **container is an isolation boundary, not a hard security boundary** on its own — it shares the host
  kernel, which is why it is the first layer and never the only one.
- **State the threat model per boundary:** for each layer, what a successful injection above buys the attacker
  and what stops it here. It exposes the cheap mistake of one strong wall with nothing behind it.
- Sandboxes **leak at the boundaries people remove for convenience** — a mounted runtime socket, a wide egress
  allowlist, `--privileged`, ambient credentials in the box, a shared cache across runs.
- A sandbox is only a control if it is **owned against drift and defined as code**. An un-versioned,
  hand-built, ever-widening box is a machine that is safe today, not a boundary you can rely on.

**[New terms](../../glossary.md#least-privilege-and-sandboxing)**: process/namespace isolation, container as isolation vs security boundary, syscall filtering (seccomp), default-deny, filesystem confinement, egress proxy / exfiltration boundary, threat model per boundary, container escape (mounted runtime socket), sandbox drift, confinement-as-code.
