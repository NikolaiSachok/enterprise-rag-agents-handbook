---
id: overview
title: Part I — RAG
sidebar_label: Part overview
---

# Part I — RAG

RAG (retrieval-augmented generation) is how you make an LLM answer from **your** documents rather than from
what it memorized in training. Before generating, the system finds the relevant pieces of your data and
puts them in the model's context. Part I works through this path as a **static pipeline**: a fixed sequence
of steps, the same for every query.

One diagnostic backbone runs through the whole part — **failure decomposition**. A bad answer comes in one
of two kinds: a *retrieval failure* (the piece you needed never made it into the results) or a *generation
failure* (the piece was retrieved, but the model ignored or garbled it). Almost every decision in the
pipeline addresses one of these two breakages, and the first move is always to tell which one you're
looking at.

## What's inside

- **[Ingestion](./ingestion.md)** — the offline preparation of documents: chunking and embeddings,
  metadata. This is where the ceiling on all of search quality gets set.
- **[Retrieval](./retrieval.md)** — how to turn "nearest vectors" into genuinely relevant results: query
  transformation, hybrid search, reranking, filters and access control.
- **[Generation](./generation.md)** — how to ground the answer in the retrieved context: grounding,
  citations, an honest refusal instead of invention.
- **Cross-cutting concerns** — what doesn't reduce to a single step: [eval](./cross-cutting/evaluation.md)
  (knowing the system works), [guardrails](./cross-cutting/guardrails.md) (keeping it safe),
  [observability](./cross-cutting/observability.md) (seeing what it does in production).

## Prerequisites

General familiarity with LLMs: what a prompt, a context, and an embedding are at the level of the idea. No
deep math required — we explain from first principles.

:::note[Status]

Part I's base is complete — every lesson is published: Ingestion, Retrieval, Generation, and the
cross-cutting concerns (eval, guardrails, observability). 🚧 A second pass is still ahead — deepening each
layer (topics listed in the "Next — going deeper" notes on the lesson pages).

:::
