---
id: mcp
title: MCP and agent protocols
sidebar_position: 6
---

# The standard that wires agents to the world

In [tool-use](./tool-use/index.md) the agent learned to call tools, but every integration was its own bespoke job:
each agent wired to each tool by hand-written glue. That works for one agent and three tools. It stops
working the moment you have many of each. With M apps that each need N tools, you are on the hook for M × N
custom connectors — the same database wrapper rebuilt for every agent, the same agent re-taught for every
API. This is the **M×N integration problem**, and it grows the way integration problems always grow: badly.

A standard is the usual escape. Wrap each tool once, behind one server; implement the client once, in each
app; then any app can talk to any tool without new glue. That collapses M × N into **N + M** — you write N
servers and M clients instead of M × N pairwise connectors. The mental picture the standard itself reaches
for is **a USB-C port for AI applications**: one connector instead of a different cable for every device. This lesson is
about the protocol that makes that trade, where it genuinely differs from the API docs you already know, and
the new attack surface it opens.

:::tip[▶ Video]

<YouTube id="g9JIUM0MHgQ" title="CLI vs [MCP](https://modelcontextprotocol.io): How AI Agents Choose the Right Tool for the Job — IBM Technology" />

Watch this before the Swagger section below — it sets up the same question head-on: when the CLI and the API
spec already describe what a tool does, what does MCP actually add?

:::

## What MCP is

**MCP (Model Context Protocol)** is an open standard introduced by Anthropic in late 2024 and donated in
December 2025 to the Agentic AI Foundation under the Linux Foundation — neutral, community-driven
governance. It is built on a
client–server architecture. Two roles do the work. An **MCP server** wraps a single tool or data source — a
database, a file system, a SaaS API, a code repository — and exposes its capabilities in a uniform way. An
**MCP client** is the agent or app on the other end: it connects to servers and consumes whatever they
expose. One server can be reached by many clients; one client can hold connections to many servers.

What makes MCP more than a tool-calling convention is that it standardizes three primitives, not one:

- **tools** — callable functions, exactly the tool-use concept, now with a standard shape;
- **resources** — data and context the server exposes to the client (a file's contents, a record, a
  documentation page) for the model to read;
- **prompts** — reusable templates the server offers, so a server can ship not just its actions but the
  known-good way to invoke them.

Transport is deliberately boring. A server that runs on your own machine speaks over **stdio**; a remote
server speaks over **streamable HTTP**. The primitives are the same either way — where the server runs is a
deployment detail, not a change to what the client sees.

## The AI delta — decoupling tools from agents

The point of all this is not tidiness. MCP decouples *building tools* from *building agents*. You author an
MCP server once, and every MCP client — across apps, across frameworks, across models — can use it, with no
per-integration glue. A wrapper for your ticketing system stops being something each agent team re-implements
and becomes something one team ships once and everyone connects to.

That is an ecosystem effect rather than a feature. It is the N + M win restated in human terms: a tool built
for one app is now reusable by any app, the same way a USB-C peripheral works with any host. The value shows
up not in a single project but in the second, third, and tenth project that reuse the server instead of
rebuilding it.

## How MCP differs from Swagger/OpenAPI and CLI `--help`

Here is the objection worth taking seriously, because a sharp engineer will raise it: *"MCP is just Swagger
for LLMs. It slaps descriptions on your endpoints so a model can read them. We've had OpenAPI for a decade."*
It's a fair challenge, and answering it honestly is the fastest way to understand what MCP is — and what it
isn't.

Start by conceding the part that's true, because it really is true. OpenAPI and Swagger already carry
semantic descriptions: every endpoint can have a `summary` and a `description`, every parameter a note on
what it means. CLI `--help` text does the same for command-line tools. And you *can* drive an LLM straight
off an OpenAPI spec — map each endpoint to a tool definition, hand the model the descriptions, and tool-use's
rule that **a description is a prompt** applies there word for word. So the difference is emphatically *not*
"MCP has semantics and the others don't." Anyone who tells you Swagger can't carry meaning is wrong, and the
rest of this section falls apart if you believe them.

The real deltas are four, and none of them is about having descriptions:

1. **A runtime consumption protocol, not design-time developer docs.** An MCP client *discovers* a server's
   capabilities at runtime and calls them through a uniform protocol — the agent asks the server what it
   offers and then invokes it, live. OpenAPI and `--help` describe an API for a *developer* to read and then
   write client code against, ahead of time. One is consumed by a running agent; the other is documentation
   for a human building an integration. That is a difference in *who reads it and when*, not in whether it
   has meaning.

2. **LLM-native primitives beyond actions.** OpenAPI and CLI both describe callable *actions* and nothing
   else. MCP's resources (context to read) and prompts (templates to reuse) have no equivalent in either —
   there is no OpenAPI construct for "here is a document the model should have in context" or "here is the
   blessed template for this operation." MCP standardizes context and templates alongside actions.

3. **One uniform client.** Any MCP client talks to any MCP server. There is no bespoke client per API, no
   per-framework adapter. This is the N + M win made concrete: the client-side glue you'd otherwise rewrite
   for every API collapses into a single protocol implementation.

4. **A session, and it's bidirectional.** MCP is a stateful session rather than a stack of independent
   request/response calls. A server can push updates to the client, and through **sampling** a server can ask
   the *client's* model to generate something for it — a two-way capability that a static API spec has no way
   to express.

Now the honest qualifier, because there is a sense in which the objector is right. In practice MCP servers
*do* tend to be more legible to a model than a raw OpenAPI dump — but for a reason of craft, not capability.
MCP servers are authored agent-first: their descriptions are written as prompts (tool-use's
description-as-prompt discipline), and they expose a curated, focused toolset rather than every endpoint an
API happens to have (tool-use's "few, non-overlapping tools"). A hand-authored MCP server is usually easier
for a model to use well than an auto-generated 200-endpoint Swagger file. But that is a *design-practice*
difference, not a semantic power OpenAPI lacks. Swagger can carry every bit of meaning MCP can; MCP servers
are simply, by convention, written to be consumed by a model. Keep the two apart in your head — "curated for
an agent" is a habit of authorship, not a property of the protocol.

## MCP vs A2A — agent-to-tools versus agent-to-agent

MCP standardizes one axis: agent to tool, agent to data. There is a second axis it says nothing about — agent
to *agent*, the communication you needed the moment you built [multi-agent](./multi-agent.md) systems. When
one agent hands off to another, what protocol carries that? MCP is the wrong tool; it connects an agent to
its tools, not an agent to a peer.

**[A2A](https://a2a-protocol.org) (Agent-to-Agent)** is the emerging answer — a standard proposed by Google and since moved under the
Linux Foundation — and it is not the only contender. The distinction worth committing to memory is clean:
**MCP is agent-to-tools/context; A2A is agent-to-agent.** This corner of the field moves fast and the roster of contenders will have changed by the
time you read this, so learn the *distinction* rather than the names. The two axes are real and durable; any
particular protocol on either axis is a snapshot.

## Security — a new attack surface

Connecting an agent to a server you don't control is connecting it to input you don't control. An MCP server
is a **new attack surface**. A malicious or compromised server can smuggle indirect **prompt injection** into
the resources and tool results it returns — text that reads as instructions to your model; even the tool
description itself is an injection vector (tool poisoning), because a description is a prompt. It can try to
exfiltrate data the agent has access to. It can over-reach the permissions it was granted, doing more than
the one job you connected it for. The uniform protocol that makes servers easy to plug in makes a hostile
server just as easy to plug in.

The defense is the discipline you already have, extended one layer out. Grant **least privilege** — a limited
toolset per server, nothing the task doesn't require. Connect only to servers you have vetted and trust;
"it's on a registry" is not vetting. Require human approval for sensitive actions, so a compromised server
can't quietly act on your behalf. And the guardrails from Part I — instruction hierarchy and spotlighting —
apply directly to MCP: treat everything a server sends, resources and tool results alike, as untrusted *data*
to be reasoned over, never as trusted *instructions* to be obeyed. A resource is content, not a command,
even when it's phrased like one.

---

That closes the lesson — and the core toolkit of Part II. We started Part II with a single agentic loop in [agentic-rag](./agentic-rag.md) —
retrieval as an action the model chooses. We gave it tools to act with ([tool-use](./tool-use/index.md)), a way to
plan over many steps and actually stop ([planning-loops](./planning-loops.md)), teammates to divide the work
([multi-agent](./multi-agent.md)), and frameworks to package all of it
([orchestration-frameworks](./orchestration-frameworks.md)). This lesson supplied the last piece: the
standard protocols that wire agents to tools, and to each other, in production. One loop, grown into a system
that connects to the world through a common plug. What all of it looks like on live Claude, OpenAI, and
Gemini is the [closing capstone on real agents](./real-agents.md).

## What to take away

- The **M×N integration problem** — M apps × N tools = M × N bespoke connectors — is what a standard exists to
  kill. MCP collapses it to **N + M**: wrap each tool once as a server, implement the client once per app.
  Think **a USB-C port for AI applications**.
- **MCP (Model Context Protocol)** is an open client–server standard (created by Anthropic in late 2024, a
  project of the Agentic AI Foundation under the Linux Foundation since December 2025). An **MCP server**
  wraps a tool or data source; an **MCP client** is the agent that consumes it. It standardizes three
  primitives — **tools**, **resources**, and **prompts** — over stdio (local) or streamable HTTP (remote).
- The AI delta: MCP **decouples building tools from building agents.** Author a server once, and any client
  reuses it — an ecosystem effect, not a feature.
- MCP is *not* "Swagger with descriptions." Swagger and CLI `--help` already carry semantics, and you can
  drive an LLM off an OpenAPI spec. The real deltas are runtime consumption vs design-time docs, LLM-native
  primitives beyond actions (resources, prompts), one uniform client, and a bidirectional session (sampling).
  MCP servers *tend* to be more model-legible — but by authoring convention, not because OpenAPI can't carry
  meaning.
- **MCP is agent-to-tools; A2A (Agent-to-Agent) is agent-to-agent.** Two axes. The field churns — learn the
  distinction, not the current names.
- An MCP server is a **new attack surface**: indirect prompt injection, data exfiltration, permission
  over-reach. Defend with **least privilege**, vetted-only servers, and human approval for sensitive actions;
  treat all server-supplied content as untrusted input, never as instructions.

**New terms** → [Glossary](../glossary.md): MCP (Model Context Protocol), MCP server, MCP client, MCP resources, MCP prompts, M×N integration problem, A2A (Agent-to-Agent).

---

:::note[Next — going deeper]

🚧 Second pass: building an MCP server hands-on, the sampling/elicitation capabilities in depth, MCP registries and discovery, transport tradeoffs (stdio vs streamable HTTP), the evolving agent-protocol landscape (A2A and peers), and hardened deployment patterns for untrusted servers.

:::
