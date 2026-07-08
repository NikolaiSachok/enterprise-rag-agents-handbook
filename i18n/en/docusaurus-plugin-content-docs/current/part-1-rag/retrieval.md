---
id: retrieval
title: Retrieval
sidebar_position: 2
---

# Retrieval

After ingestion, the chunks are already sitting in a vector database. The naive version of retrieval goes
like this: embed the query, return the K nearest vectors by cosine. That's a starting point, not a
finished solution. The retrieval layer is about turning "nearest vectors" into results that are genuinely
relevant, ordered correctly, and kept within what a given user is allowed to see.

Hold on to the frame from the first lesson: a **retrieval failure** is when the chunk you needed isn't in
what you returned. The whole layer comes down to making that miss happen less often.

:::tip[▶ Video]

<YouTube id="T-D1OfcDW1M" title="What is Retrieval-Augmented Generation (RAG)? — IBM Technology" />

The big picture: how search feeds context into generation.

:::

## Why plain vector top-K isn't enough

On live queries the naive "K nearest vectors" scheme sags for several reasons at once.

Dense search catches meaning but misses exact tokens — error codes, part numbers, names, acronyms. It may
never surface the query "error X-42," where an exact-word search finds the right chunk instantly. Add the
vocabulary gap — the user asks in different words than the ones in the document — and the complete absence
of any notion of access rights. The naive search needs a few layers built on top of it.

There are four of them: fix the query (query transformation), close the blind spots (hybrid search), fix
the ordering (reranking), constrain scope and permissions (filters + ACL).

## Query transformation — fix the query before searching

The query a user types is rarely the best query to search with. A few cheap LLM calls *before* retrieval
lift the hit rate noticeably.

- **Rewriting.** Resolve pronouns and shorthand. In chat this is non-negotiable: "and how much is it?"
  means nothing without the dialogue history — you rewrite it into a self-contained "how much does
  product X cost?".
- **Multi-query.** Generate several paraphrases of the query, search on each, merge the results.
- **HyDE.** Ask the model to sketch a hypothetical answer, embed that, and search with it. A rough draft
  answer often sits closer to the chunk you need in embedding space than a short question does.

## Hybrid search — dense plus keyword

The single biggest improvement over naive search. Two mechanisms with opposite strengths are at work:

| | **Dense (vector)** | **Sparse / keyword (BM25)** |
|---|---|---|
| What it catches | Meaning, synonyms, paraphrases | Exact words: codes, names, part numbers, rare terms |
| Where it's blind | Exact tokens the model gives little weight to | Synonyms and meaning — only a literal match counts |

A hybrid runs both and merges their scores — weighted, or through Reciprocal Rank Fusion. Each covers the
other's blind spot, and there's your answer to "why one vector isn't enough."

Take the query "how to reset a password." Dense search finds the document "recovering account access" by
meaning; BM25 finds the one titled, word for word, "password reset." Together they return what each one
missed alone.

## Reranking — fix the ordering

The first stage — dense or hybrid search — is tuned for **recall**: drag the chunk you need somewhere into
the top-K, where K is 50–100. But the ordering inside that hundred is crude, and only a few chunks fit
into the model's context. So the second stage works on **precision**: a cross-encoder from the [previous
lesson](./ingestion.md) re-scores every candidate against the query and re-sorts the list, floating the
best to the top. Only the top few reach generation.

This is the canonical two-stage scheme: cheap and wide (a bi-encoder or hybrid — recall), then expensive
and precise (a cross-encoder — precision). Here the bi- and cross-encoder from Lesson 2 click into a
single picture.

## Filters and access control — relevance and permissions

In an enterprise setting, retrieval answers more than "is this similar in meaning." It also answers "what
is this person even allowed to see."

- **Metadata filtering** on the fields attached during chunking: date, department, document type,
  language. "Only HR documents after 2024."
- **Access control.** Permissions cut *before* results are returned, so a user physically can't get a
  chunk they have no access to (the payroll-ledger example from the first lesson). This is a hard
  requirement: a system that hands back a restricted document on relevance alone has produced a security
  incident, not merely a dip in quality. The usual arrangement is a pre-filter — screen by permissions
  first, then search.

## The full pipeline

```text
query → [transform] → [hybrid: dense + BM25, metadata filter + ACL]
      → candidates (top-K) → [rerank: cross-encoder] → top-few → into generation
```

Every stage drives retrieval failure down. By exactly how much is something you **measure**: recall@K,
precision@K, MRR, nDCG. We formalize the metrics in the [Evaluation](./cross-cutting.md) layer.

## What to take away

- Naive vector top-K is a start, not a finish.
- Query transformation fixes the query itself: rewriting, multi-query, HyDE.
- Hybrid search (dense + BM25) closes the gap between meaning and the exact word — the single biggest step
  up.
- Reranking (a cross-encoder) fixes the ordering: a recall stage, then a precision stage.
- Filters and access control give you relevance together with permissions; ACL is a security requirement.

**New terms** → [Glossary](../glossary.md): dense retrieval, top-K, query transformation, multi-query,
HyDE, hybrid search, BM25 / sparse retrieval, Reciprocal Rank Fusion, reranking, two-stage retrieval,
metadata filtering, access control (ACL), recall@K, precision@K.
