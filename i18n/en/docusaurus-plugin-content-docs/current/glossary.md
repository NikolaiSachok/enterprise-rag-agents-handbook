---
id: glossary
title: Glossary
sidebar_position: 4
---

# Glossary

Single definitions for the terms the handbook pages link to. Each one is defined here exactly once. The
list grows as we work through the layers. Where a term has a canonical source for its formulas and history,
a link follows the definition (↗ Wikipedia for classics, ↗ arXiv for techniques from papers).

## Ingestion — chunking

**Chunk** — a fragment of a document, the unit of indexing. It is at once the unit of search and the unit
of what the model gets to see.

**Chunk overlap** — a shared stretch of text between neighboring chunks. It rescues a fact that fell on the
cut line: the fact survives whole in at least one of the two neighbors. Usually 10–20% of the chunk size.

**Recursive / structural chunking** — splitting along natural boundaries, hierarchically (sections →
paragraphs → sentences), so chunk boundaries line up with the boundaries of ideas. The default choice.

**Semantic chunking** — the chunk boundary goes where the semantic closeness of neighboring sentences
drops sharply (a change of topic). Pricier, but each chunk ends up "about one thing."

**Chunk metadata** — data attached to a chunk: source, title, section path, date, access rights. It feeds
filtering, citation, and access control.

**Parent-document (small-to-big) retrieval** — search over small, precise chunks, but pass the model the
larger parent fragment around the match. It pulls apart a chunk's two roles: search and context.

## Ingestion — embeddings

**Embedding** — a vector representing text in a space where geometric closeness means closeness in meaning.

**Embedding space** — the vector space a model maps texts into; search reduces to finding the points
nearest to the query's vector.

**Bi-encoder** — encodes the query and the chunk separately into two vectors and compares them by distance.
Fast — chunk vectors are computed once, at indexing time. The backbone of vector search.

**Cross-encoder** — feeds the pair "query + chunk" into the model together and returns a single relevance
number. More accurate than a bi-encoder but slower (the score can't be precomputed). Used in reranking.

**Dimensionality** — the length of an embedding vector (e.g. 384 / 768 / 1536). Higher is more expressive
but costs more in memory, search speed, and money.

**Cosine similarity** — closeness measured by the angle between vectors; it reads direction and ignores
length. The default metric; for normalized vectors it coincides with the dot product.
↗ [Wikipedia](https://en.wikipedia.org/wiki/Cosine_similarity)

**Retrieval-optimized (asymmetric) embeddings** — models trained on "query ↔ passage" pairs rather than on
general sentence similarity. They often expect a `query:` / `passage:` prefix.

**Multilingual embeddings** — embedding models that work across several languages; essential for
multilingual enterprise content.

**Self-hosted vs. API embeddings** — the choice between an open model on your own infrastructure (data
stays inside the perimeter) and a proprietary API (simpler, but data leaves and each call is billed).

## Retrieval

**Dense retrieval** — search over embedding vectors; catches meaning and synonyms, blind to exact tokens.

**Top-K** — the number of nearest candidates the first search stage returns (usually 50–100 before
reranking).

**Query transformation** — reshaping the query before search: rewriting, multi-query, HyDE.

**Multi-query** — generating several paraphrases of the query, searching on each, and merging the results.

**HyDE (Hypothetical Document Embeddings)** — generate a hypothetical answer, embed it, and search with it:
it often sits closer to the chunk you need than a short question does.
↗ [arXiv](https://arxiv.org/abs/2212.10496)

**BM25 / sparse retrieval** — classic lexical search by word overlap (term frequencies). Catches exact
tokens, blind to synonyms. ↗ [Wikipedia](https://en.wikipedia.org/wiki/Okapi_BM25)

**Hybrid search** — running dense and lexical search together and merging their scores. Covers each one's
blind spot.

**Reciprocal Rank Fusion (RRF)** — a way to combine the results of several searches by their positions in
each ranking, without reconciling their different score scales.

**Reranking** — re-scoring the top-K candidates with a cross-encoder and re-sorting them so the best rises
to the top. The second stage; it works on precision.

**Two-stage retrieval** — cheap and wide for recall (bi-encoder / hybrid), then expensive and precise for
precision (cross-encoder). The canonical retrieval scheme.

**Metadata filtering** — narrowing search by a chunk's fields: date, department, type, language.

**Access control (ACL)** — cutting chunks by access rights before results go out, so a user never gets what
they aren't entitled to. A security requirement, not an option.

**Recall@K / Precision@K** — search metrics: the share of the needed documents that landed in the top-K
(recall), and the share of relevant ones among those returned (precision).
↗ [Wikipedia](https://en.wikipedia.org/wiki/Precision_and_recall)

**nDCG (normalized discounted cumulative gain)** — a ranking metric that accounts not just for whether
relevant documents are found but for their positions (higher is worth more).
↗ [Wikipedia](https://en.wikipedia.org/wiki/Discounted_cumulative_gain)

**MRR (mean reciprocal rank)** — the reciprocal position of the first relevant result, averaged over
queries. ↗ [Wikipedia](https://en.wikipedia.org/wiki/Mean_reciprocal_rank)

## Generation

**Grounding** — tying the answer to the supplied context rather than the model's parametric memory.

**Grounding instructions** — telling the model explicitly to answer only from the context and to admit when
the answer isn't there. The main lever against hallucination.

**Context packing** — how retrieved chunks are assembled into the prompt: delimiting sources, ordering,
picking a few best.

**Lost-in-the-middle** — a model uses information buried in the middle of a long context worse than what
sits at the start and end.

**Citations / attribution** — pointing to the source of each claim in the answer; gives verifiability and
curbs invention.

**Refusal / abstention** — a proper "I don't know" when context is insufficient; better than a confident
error.

**Faithfulness / groundedness** — a metric of how much the answer actually rests on the supplied sources
rather than the model's memory.

**Parametric knowledge** — what the model learned in training and holds in its weights; RAG deliberately
suppresses it in favor of the context.

**Hallucination** — a confidently stated fact that isn't in the sources, or is wrong.

## Evaluation

**Evaluation** — measuring pipeline quality with metrics instead of by feel. It makes the pipeline tunable.

**Golden dataset / ground truth** — examples of "question + relevant chunks / correct answer" that metrics
are computed against. Quality beats size.

**Answer relevance** — a generation metric: does the answer address the question asked.

**Correctness** — whether the answer matches a reference answer in substance.

**LLM-as-a-judge** — scoring free-text output with another LLM against a rubric or reference; it scales
human-like judgment to thousands of examples.

**Judge bias** — systematic skews of an LLM judge: position bias (favors the first option), verbosity bias
(longer = better), self-preference (its own style).

**Offline vs online eval** — evaluating on a golden set before deploy (regression in CI) versus measuring
in production (user feedback, A/B).

**Regression eval** — running the golden set in CI so an improvement in one place doesn't break another.

**A/B testing** — comparing two versions of the system on live traffic by their metrics.

## Guardrails

**Guardrails** — a safety layer on the input and output of an LLM system: against attacks, leaks, and harmful output.

**Prompt injection** — planting instructions in text the model reads to override the system prompt. Direct (from the user) and indirect (hidden in retrieved content — dangerous for RAG).

**Spotlighting** — marking untrusted content (delimiters, random sentinels) so the model sees it as data, not instructions.

**Instruction hierarchy** — source priority: system > developer > user > tool/retrieved; retrieved content is least trusted.

**PII redaction** — detecting and hiding personal data on input and output; critical with external APIs.

**Input / output validation** — checking the input (attacks, off-topic) and the output (leaks, PII, policy violations).

**Content safety / moderation** — filtering harmful or off-policy content on both surfaces.

**Jailbreak** — bypassing a model's built-in safeguards (unlike injection, which exploits the instruction/data ambiguity).

**Tool egress control** — limiting the tools and actions available to an agent (least privilege), so a successful injection can do little.

**Attack success rate (ASR)** — the share of successful attacks over a set; a guardrails quality metric.

**Defense-in-depth** — layered defense: no single layer is complete; they work together.
