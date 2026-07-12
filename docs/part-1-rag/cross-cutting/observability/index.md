---
title: Observability
slug: /part-1-rag/cross-cutting/observability/
---

# Seeing what the system does in production

Eval tells you whether the system is good (offline, on a dataset). Guardrails keep it safe. **Observability**
is seeing what the system actually does in production, on live traffic. Without it, production problems are
invisible: you don't know *why* a given answer came out bad, what was pulled from the store, what it cost, or
how slow it was.

## What's shared, and what's about AI

The three pillars of observability — **traces, metrics, logs** — you already know as an engineer. This lesson
is about the delta: what changes when you observe an **LLM/RAG system** rather than an ordinary service.

## Why an LLM system is harder to observe

Nondeterminism plus a black box. You can't reproduce a bad production answer without the full record: what the
query was (already after transformation), which chunks came back and with what score, what prompt went to the
model, what it returned, which tools the agent called. Ordinary software is deterministic — there's a stack
trace. An LLM application needs a log of the **whole reasoning chain**.

## The pipeline trace — the core primitive

A **trace** is the full record of one request through the pipeline: query → transformed query → chunks
(+score) → rerank → the prompt that was sent → model output → (for an agent) every step and tool call. Each
step is a **span**. The trace answers the main debugging question: "why did this query produce exactly this
answer?"

## What to log (RAG specifics)

- **The retrieved chunks and their scores** — did the right one show up (a direct tie to retrieval eval).
- **The final prompt** — what the model actually saw.
- **The raw model output** plus post-processing.
- For agents — **the full trace of steps and tool calls**.
- Per step: latency, token count, cost, model version.

## Cost and latency — first-class concerns

Unlike an ordinary application, every request **costs money** (tokens), and LLM calls are slow. Observability
has to account for cost-per-request and per-step latency (generation and rerank especially) — to catch the
expensive, slow patterns and optimise: caching, a cheaper model, fewer chunks in the prompt.

## Feedback: observability feeds eval

Production traces and user feedback become new eval cases — exactly the hard, failing real-world queries.
Catch a bad answer in production → add it to the golden set → guard against the regression. The loop closes:
eval measures, guardrails protect, observability sees and feeds what it finds back into eval. The whole
cross-cutting layer is one loop.

*(The tools — [LangSmith](https://www.langchain.com/langsmith), [Langfuse](https://langfuse.com), [Arize Phoenix](https://arize.com/phoenix), [OpenTelemetry](https://opentelemetry.io) — are a separate layer: see [the tooling
ecosystem lesson](../../../part-3-production/tooling-ecosystem.md); here we're on the principle.)*

---

This closes more than the lesson — it closes Part I. You now hold its backbone: a bad answer decomposes
into a retrieval failure or a generation failure, the pipeline is built layer by layer — ingestion,
retrieval, generation — and the cross-cutting practices keep it measurable, safe, and visible. In
[Part II](../../../part-2-agents/overview.md) this static pipeline comes alive: the model starts making the
control-flow decisions — and all the discipline you've built here travels with you.

## What to take away

- Observability = seeing what a live LLM system actually does; you need it because the system is
  nondeterministic and, without a full record, a bad answer can't be debugged.
- The core primitive is the trace (spans) of one request end to end: query → retrieval+score → prompt →
  output → agent steps.
- Log the RAG specifics: chunks with scores, the final prompt, the raw output, latency/tokens/cost per
  step.
- Three pillars: traces (the key one for LLM), metrics (latency/cost/quality), logs.
- Cost and latency come first (tokens = money, calls are slow).
- Observability feeds eval: production failures → new golden-set cases → eval-driven development.

**New terms** → [Glossary](../../../glossary.md): observability, trace / span, RAG tracing, cost per request /
token accounting, latency (p50 / p95), three pillars (metrics / logs / traces), feedback loop
(observability → eval).

---

:::note[Next — part 2 of the lesson]

**[Sampling, SLOs & budgets](./deep-dive.md)** — the observability layer's second pass: trace sampling
strategies (head, tail, priority) and privacy in logs (PII, retention); quality dashboards, alert thresholds
and SLOs for an LLM system; attributing a regression back to its cause from traces; and per-request token
accounting with p50/p95 latency and cost budgets.

See also: the sibling cross-cutting concerns — [Evaluation](../evaluation/index.md) (observability's traces
become new eval cases) and [Guardrails](../guardrails/index.md); and, for observability running continuously
in production, [LLMOps](../../../part-3-production/llmops.md).

:::
