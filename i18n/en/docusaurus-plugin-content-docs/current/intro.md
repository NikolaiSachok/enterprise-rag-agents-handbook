---
id: intro
title: Introduction
sidebar_position: 1
slug: /
---

# Enterprise RAG & Agents Handbook

A practical, first-principles guide to production RAG (retrieval-augmented generation) and agents: not "what
tools exist" but **why** a system is built the way it is and where it breaks. The material is living — it
grows layer by layer as the course goes on.

## Who this handbook is for

It plays three roles at once:

- **A course** — for any engineer who wants to understand RAG and agents in earnest: with the "why" and the
  failure modes, not just a feature list.
- **The author's reference** — a durable record of design principles and the decisions made.
- **Portfolio** — a demonstration of mature engineering practice: eval, guardrails, observability, design
  discipline.

We assume an experienced reader: commodity tools (vector databases, orchestrators) aren't covered from
scratch — instead we show the **AI delta**, what actually changes when you apply them to an LLM system.

## Structure

- **[Part I — RAG](./part-1-rag/overview.md):** ingestion, retrieval, generation, and the cross-cutting
  concerns (eval, guardrails, observability) of the static pipeline.
- **[Part II — Agents](./part-2-agents/overview.md):** agentic RAG, tool use, planning and loops,
  multi-agent systems, orchestration frameworks, MCP.
- **Part III — Production & LLMOps** (🚧 planned): serving on FastAPI + Docker, cloud AI platforms
  (Azure OpenAI, AWS Bedrock, GCP Vertex), the tooling ecosystem (eval, guardrails, observability), and
  LLMOps — deploy, monitor, cost. The applied layer the job market names by tool.
- **[Glossary](./glossary.md):** single definitions for the terms the pages link to.

Each published part opens with an overview page: where it starts, what's inside, and what you should know
first.
