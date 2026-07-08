---
id: glossary
title: Glossary
sidebar_position: 4
---

# Glossary

Single definitions for the terms the handbook pages link to. Each one is defined here exactly once. The
list grows as we work through the layers.

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

**BM25 / sparse retrieval** — classic lexical search by word overlap (term frequencies). Catches exact
tokens, blind to synonyms.

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
