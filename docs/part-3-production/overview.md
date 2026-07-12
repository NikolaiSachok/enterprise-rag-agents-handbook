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

- **[Serving — FastAPI + Docker](./serving/index.md)** — wrapping a model or agent in a service: API, streaming,
  container, inference servers.
- **[Cloud AI platforms](./cloud-platforms/index.md)** — [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-services/openai-service), [Amazon Bedrock](https://aws.amazon.com/bedrock/), Google Cloud Gemini
  Enterprise Agent Platform (formerly [Vertex AI](https://cloud.google.com/vertex-ai)): what they offer and how they differ.
- **[The tooling ecosystem](./tooling-ecosystem/index.md)** — eval, guardrails, observability in production:
  what to measure, what to guard, what to see.
- **[LLMOps — deploy, monitor, cost](./llmops.md)** — the LLM system's life after release.

## Prerequisites

All of Parts I and II — serving and operations assume the RAG agent itself is already built and understood.

:::note[Status]

Part III's base is complete — every lesson is published: serving, cloud AI platforms, the tooling
ecosystem, and LLMOps. 🚧 A second pass is still ahead — deepening each layer (topics listed in the
"Next — going deeper" notes on the lesson pages).

:::
