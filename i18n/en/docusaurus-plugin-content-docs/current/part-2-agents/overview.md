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
- **Planning & loops** 🚧 — ReAct and its alternatives, task decomposition, breaking out of loops.
- **Multi-agent systems** 🚧 — several specialized agents, roles, handoff.
- **Orchestration frameworks** 🚧 — LangGraph, LangChain, Semantic Kernel, AutoGen, CrewAI: what they add
  on top of a bare loop.
- **MCP and agent protocols** 🚧 — a standardized way for an agent to reach tools and data.

## Prerequisites

All of Part I, especially the **Retrieval** layer (the agent calls it as a tool) and the **cross-cutting
concerns** — here eval and observability move from nice-to-have to mandatory.

:::note[Status]

🚧 The part is growing. The first lessons — Agentic RAG and tool use — are published; the rest arrive as we
work through them.

:::
