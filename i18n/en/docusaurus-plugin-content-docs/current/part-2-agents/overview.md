---
id: overview
title: Part II — Agents
sidebar_label: Part overview
---

# Part II — Agents

In Part I you assembled a **static pipeline**: a query runs a fixed path, `retrieve → generate`, and the
code owns that path. Part II hands control to the model. The pipeline becomes a **loop the LLM itself
drives**: it decides whether to search, what to search for, which tool to use, and when to stop. That is an
agent.

Hold one line through the whole part: we keep giving the model more freedom — from a single routing
decision to a full loop with planning and several agents — and at every step we pay for that freedom in
latency, cost, and debugging difficulty. The engineering job isn't to "make it more agentic," it's to take the
**minimum degree of agency the task needs**.

## What's inside

- **[Agentic RAG](./agentic-rag.md)** — retrieval turns from a step into an action inside a loop; the
  spectrum from router to full loop.
- **[Tool use](./tool-use.md)** — how the model calls external functions: search, SQL, APIs, a calculator.
- **[Planning & loops](./planning-loops.md)** — ReAct and plan-and-execute, task decomposition, termination
  criteria, and breaking out of loops.
- **[Multi-agent systems](./multi-agent.md)** — several specialized agents, roles, handoff; the topologies
  and when NOT to split one agent.
- **[Orchestration frameworks](./orchestration-frameworks.md)** — LangGraph, LangChain, Semantic Kernel,
  AutoGen, CrewAI: what they add on top of a bare loop, and when to skip them.
- **[MCP and agent protocols](./mcp.md)** — a standardized way for an agent to reach tools and data; MCP
  versus A2A.

## Prerequisites

All of Part I, especially the **Retrieval** layer (the agent calls it as a tool) and the **cross-cutting
concerns** — here eval and observability move from nice-to-have to mandatory.

:::note[Status]

Part II's base is complete — every lesson is published: Agentic RAG, tool use, planning & loops, multi-agent
systems, orchestration frameworks, and MCP. 🚧 A second pass is still ahead — deepening each layer (topics
listed in the "Next — going deeper" notes on the lesson pages).

:::
