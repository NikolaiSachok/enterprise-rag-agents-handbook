---
id: overview
title: Part III — Production & LLMOps
sidebar_label: Part overview
---

# Part III — Production & LLMOps

Parts I and II assembled the system: a static RAG pipeline and agents on top of it. Part III is about **how
you actually ship it**: serving, cloud platforms, the tooling ecosystem, and operations. This is the applied
layer the job market names by tool — the one that separates "works on my laptop" from "works under load,
observably, and on budget."

## What's inside

- **Serving — FastAPI + Docker** 🚧 — wrapping a model or agent in a service: API, container, scaling.
- **Cloud AI platforms** 🚧 — Azure OpenAI, Amazon Bedrock, Google Cloud Gemini Enterprise Agent Platform
  (formerly Vertex AI): what they offer and how they differ.
- **The tooling ecosystem** 🚧 — eval, guardrails, observability in production: what to measure, what to
  guard, what to see.
- **LLMOps** 🚧 — deploy, monitor, cost: the LLM system's life after release.

## Prerequisites

All of Parts I and II — serving and operations assume the RAG agent itself is already built and understood.

:::note[Status]

🚧 The part hasn't started yet — it's planned next. Lessons will appear here as they're written.

:::
