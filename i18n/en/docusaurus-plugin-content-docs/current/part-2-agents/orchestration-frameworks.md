---
id: orchestration-frameworks
title: Orchestration frameworks
sidebar_position: 5
---

# Orchestration frameworks — what a framework adds over the bare loop

The lessons so far built agents up from primitives: the loop in [agentic-rag](./agentic-rag.md), the tools it
calls in [tool-use](./tool-use.md), planning and termination over that loop in
[planning-loops](./planning-loops.md), and teams of agents in [multi-agent](./multi-agent.md). In practice
you don't hand-roll all of that. You reach for an **orchestration framework** — LangChain, LangGraph,
LlamaIndex, and their neighbors. This lesson is about what a framework actually adds on top of the bare loop,
so you can choose one and use it well: not reimplement what it already gives you, and not hide behind it when
something breaks.

So set the scope plainly. This is an AI-delta lesson for engineers who already know the primitives — not a
from-scratch framework tutorial, and not an API walkthrough. We're after the philosophies and the boundaries:
what these libraries are *for*, where they earn their keep, and where they cost you more than they save. No
code tutorials.

:::tip[▶ Video]

<YouTube id="ZVPlLaehjLk" title="Agentic AI Frameworks Explained: Workflows, Multi-Agent, & Production — IBM Technology" />

IBM's map of the same territory — how frameworks split into workflow, multi-agent, and production concerns —
is a good orientation before we get into what each layer buys you.

:::

## What you'd otherwise hand-roll

Start with the honest question: if you skip the framework, what do you write yourself? Once you've built a
couple of agents from scratch, the answer is a familiar pile of plumbing.

The loop comes first — the reason → decide → act → observe cycle itself, spun until the agent decides it's done. Then the
tool-calling glue around it: the schemas the model reads, the dispatch that maps a tool name to the right
function, and the formatting that folds each result back into the conversation. Neither of those is deep, but
both are fiddly, and you write them every single time.

On top of that sit the things that grow as the agent does:

- **State and memory** carried across steps, so the agent remembers what it did three turns ago.
- Control flow with teeth — branching, retries, loops, and the pauses where a human steps in.
- Multi-agent orchestration: the handoffs and routing between agents, the topologies from the multi-agent lesson.
- The production tail — tracing hooks, streaming, persistence, and checkpointing.

None of this is the interesting part of your agent. It's the boilerplate underneath it. A framework's core
pitch is that it writes this pile for you, once and consistently, so your code is about the behavior and not
the wiring.

## The main abstraction — an agent as a graph / state machine

Strip away the branding and most frameworks converge on one idea, and LangGraph states it most clearly: model
the agent as a **graph**, a state machine. The steps become **nodes** — call the model, call a tool, make a
decision — and the control flow becomes **edges** between them, including edges that loop back so the cycle
can keep going until a condition is met.

Here's why that reframing is the whole point. The bare loop is a `while` block: opaque while it runs, and
all-or-nothing when it fails. Turn it into a state machine and it becomes something you can inspect, pause,
and resume. You get checkpoints you can roll back to, nodes where a human approves before the flow continues,
retries scoped to a single step, and branching that's deterministic instead of buried inside the model's
free-running loop. That is the AI-delta in one line: the graph turns an opaque loop into a controllable,
inspectable, resumable machine.

## The players, by layer

The framework landscape looks crowded until you sort it by what each tool is trying to be. Three rough layers.

The **integrations layer** is broad libraries of connectors — models, tools, data sources — so you're not
writing adapters by hand. LangChain lives here, and so does LlamaIndex, which is tilted toward data and RAG in
particular. If your problem is "wire the agent to fifteen different services," this is the layer you're
shopping in.

The **control-flow and state layer** is where the graph idea lives: LangGraph, and Microsoft Agent
Framework, Microsoft's enterprise-oriented entry. This is the layer that owns the state machine of the
previous section.

The **multi-agent layer** packages the multi-agent lesson's topologies. CrewAI organizes work into
role-based "crews" of agents with assigned jobs; Microsoft Agent Framework ships prebuilt multi-agent
orchestrations, inherited from AutoGen — agents that converse with one another. When the thing you want to
model *is* a team, you start here.

One caveat, and it matters more than the taxonomy. These borders blur — LangChain does control flow too,
frameworks copy each other's good ideas within a release or two, and the whole ecosystem churns fast —
Microsoft Agent Framework 1.0 (GA April 2026) absorbed Semantic Kernel and AutoGen, both now in maintenance
mode. Read the three layers as a snapshot of philosophies, not a durable leaderboard. Learn the categories; the version
numbers will have moved by the time you ship.

## Typical patterns you actually use

In day-to-day work a small set of shapes recurs, and knowing them by name is most of what you need from a
framework's docs.

The base shape is a graph of **tool-nodes with conditional edges** — the agent calls a tool, and an edge
decides where to go next based on the result. For the common case, most frameworks ship a **prebuilt ReAct
agent**, a batteries-included tool-caller you can instantiate instead of assembling the graph yourself.

Persistence shows up as a **checkpointer** — a memory component that saves state so a run can be paused and
resumed later, and keeps separate threads apart so two conversations don't bleed into each other. On top of
that sits the **human-in-the-loop (HITL)** interrupt: a node where the loop pauses for a person to approve,
then resumes from exactly where it stopped. That's planning-loops' human-in-the-loop, now promoted to a
first-class node in the graph instead of a manual stop button.

For teams, the framework hands you a **supervisor or crew construct** — the multi-agent lesson's orchestrator, prebuilt,
so you configure the topology rather than code it. And running through all of it is **tracing integration**,
LangSmith being the obvious example: the observability layer that lets you see what the graph actually did.
That's [Part III](../part-3-production/overview.md)'s subject, and it plugs in here.

## When NOT to — the tradeoffs

A framework is not free, and the costs are the mirror image of the benefits.

The sharpest one is **abstraction cost**. A framework hides the prompt and the control flow — which is exactly
what you wanted, right up until something breaks and you're debugging *through* layers of code you didn't
write. For a simple agent, a plain loop plus the provider's native tool-calling is clearer, shorter, and far
easier to debug than the same behavior threaded through a graph framework. The abstraction earns its cost only
when there's real complexity for it to manage.

Two more sit alongside it. **Ecosystem churn** means the APIs and the blessed patterns shift release to
release; the idiomatic code you write today is next year's legacy you're migrating off. And adopting a
framework's abstractions is a **portability-versus-lock-in** trade — the more you lean on its constructs, the
more coupled to it you are.

So the rule is a sequencing rule. Understand the primitives from the earlier lessons first; reach for a framework to
delete boilerplate, never to avoid understanding what the boilerplate does. Pull in a graph framework when you
genuinely need controllable complex flows — checkpoints, HITL, branching, multi-agent coordination. For a
simple agent, use the provider SDK directly and skip the layer.

## Where it connects

Nothing in this lesson is a new *concept*. Frameworks don't change the ideas from the earlier lessons — the loop,
tools, planning, the multi-agent topologies. They package them, and hand them back to you minus the
boilerplate. And because they package the same primitives, they plug straight into the observability and eval layer
that [Part III](../part-3-production/overview.md) takes up: the graph you built here is the thing you'll
trace and measure there.

## What to take away

- An **orchestration framework** removes the boilerplate you'd otherwise write around the bare loop — the
  loop plumbing, tool-calling glue, state and memory, control flow, multi-agent handoffs, and the tracing /
  streaming / checkpointing tail.
- The main abstraction most frameworks converge on is the **agent as a graph / state machine**: nodes (call
  model, call tool, decide) and edges (control flow, including loops). The AI-delta is that this turns an
  opaque `while` loop into a controllable, inspectable, resumable machine.
- Sort the players by layer — integrations (LangChain, LlamaIndex), control-flow/state (LangGraph,
  Microsoft Agent Framework), multi-agent (CrewAI and Microsoft Agent Framework's orchestrations) — but
  treat it as a snapshot: the borders blur and the ecosystem churns. Learn the categories, not the version
  numbers.
- The cost is **abstraction**: a framework hides the prompt and control flow, so you debug through layers you
  didn't write. For a simple agent, a plain loop plus native tool-calling is clearer.
- The rule: **primitives first**. Use a framework to remove boilerplate, not to avoid understanding — a graph
  framework for controllable complex flows, the provider SDK directly for a simple agent.

**New terms** → [Glossary](../glossary.md): orchestration framework, agent as a graph / state machine, node / edge, checkpointing, human-in-the-loop (HITL).

---

:::note[Next — going deeper]

🚧 Second pass: a concrete LangGraph graph walkthrough, durable execution and checkpoint backends, framework-native memory and multi-agent constructs compared, declarative vs imperative agent definitions, and framework-level tracing/eval integration (Part III).

:::
