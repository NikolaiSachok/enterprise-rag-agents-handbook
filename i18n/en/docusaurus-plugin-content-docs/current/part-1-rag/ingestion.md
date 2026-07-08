---
id: ingestion
title: Ingestion
sidebar_position: 1
---

# Ingestion

Ingestion is the offline half of RAG: everything that happens to your documents **before** the first
question is ever asked. This is where you prepare everything that search will later run over. The
pipeline: parse documents → **chunking** → metadata → embed into a vector database.

For now this page covers **chunking** and **embedding models** — the two pillars of ingestion. Document
parsing is still to come.

:::info[How to read this]

Each topic is presented first "as it works across the industry." Anything tied to a specific project
(Strata-RAG) is moved out into separate case-study pages — so the theory doesn't get tangled up with
implementation details.

:::

---

## Chunking

### Why split documents at all

The naive recipe goes: "split the document into chunks." But *why* split — and why is this the first
place everything breaks?

Two independent constraints force the split:

1. **An embedding model compresses a whole piece of text into a single vector.** The larger and more
   heterogeneous the piece, the more averaged-out that vector becomes. The vector of a paragraph about a
   single idea is sharp. The vector of an entire 40-page manual is a blurry cloud that matches *any*
   specific question poorly.
2. **A chunk is both the unit of search and the unit of what the LLM sees.** Search runs over chunks,
   and the chunks it finds are what get fed to the model. Keep this in mind for the whole section: **a
   chunk plays two roles at once, and they pull its size requirements in opposite directions.**

### The key tradeoff: large chunk vs. small chunk

Everything in this section comes down to one table:

| | Chunk too **large** | Chunk too **small** |
|---|---|---|
| Effect on the embedding | Vector is blurred → matches a specific query poorly | Vector is sharp |
| Effect on the LLM's context | Lots of noise, the relevant part "drowns" (the *lost in the middle* effect), expensive in tokens | Meaning is lost — the chunk makes no sense on its own |
| Typical failure | You retrieve something "roughly on topic," but the fact you need is diluted | You retrieve a fragment that is meaningless by itself |

The classic example of a small chunk is losing the **reference**. A sentence from a report:

> "In the third quarter it grew by 20%."

As a standalone chunk this is garbage: *what* is "it"? which year's quarter? The embedding of such a
sentence won't match anything meaningfully, and even if it does surface, the LLM can't do anything with
it. The context ("it" = division X's revenue for 2025) stayed in the neighboring paragraph, which didn't
make it into this chunk.

That's why the "just cut every N characters" approach fails — and why smarter strategies emerged.

### Chunking strategies (from simple to sophisticated)

1. **Fixed-size.** Cut every N tokens/characters. Simple, fast, reproducible. Downside: it cuts blindly —
   mid-sentence, mid-table. The baseline that everything else builds on.
2. **Overlap.** Adjacent chunks partly overlap — a "sliding window." If a fact lands on the cut line, it
   survives intact in at least one of the two neighboring chunks. A cheap fix for facts sliced in half.
   The price is duplicated text. It's applied almost always, on top of any strategy; overlap is usually
   ~10–20% of the chunk size.
3. **Recursive / structural.** Instead of cutting blindly, cut along natural boundaries, hierarchically:
   first by sections, then — if a piece is still too big — by paragraphs, then by sentences. Chunk
   boundaries line up with idea boundaries. The **industry default** — the "simple and almost always
   decent" tradeoff.
4. **Semantic.** Walk through the sentences and look at their embeddings: as long as neighboring
   sentences are close in meaning, they're one chunk; a sharp drop in similarity signals a topic shift —
   that is, a boundary. The chunks come out as tightly "about one thing" as possible. Downside: it's more
   expensive (you have to embed already at the splitting stage) and doesn't always earn its cost.
5. **Document-structure-aware.** Respect the source's markup: headings, tables, code blocks. Don't cut a
   table row by row, don't tear code in the middle of a function, and attach the **heading path**
   ("Chapter 3 › Section 2 › Payout Terms") to the chunk as metadata. For enterprise documents
   (policies, contracts, tables) this is often the deciding factor for quality.

:::tip[There is no universal chunk size]

It depends on the document type (dense legal text ≠ chatty message threads) and the query type (a
pinpoint fact ≠ "explain the policy"). So you don't guess the chunk size — you **measure** it: run the
variants through retrieval evaluation and look at the metrics. That's the bridge to the
[Evaluation](./cross-cutting/evaluation.md) layer: chunking isn't "set it and forget it," it's a parameter you tune
against metrics.

:::

### Chunk metadata — where enterprise specifics turn into search quality

A chunk isn't just text. You attach **metadata** to it: the source (file/URL), the title, the section
path, the date, the version and — critically for enterprise — **access control** (who is allowed to see
it). Three reasons to lay this down right here:

- **Filtering:** "search only in documents after 2024" / "only in the HR section" — that's a filter over
  metadata layered on top of the vector search.
- **Citations:** for an answer to reference "the Leave Policy, section 2," that reference has to travel
  along with the chunk from the very start.
- **Access control:** in an enterprise system, an employee from marketing must not get a slice of the
  payroll ledger back in an answer. Permissions are checked at the chunk level — and it's the metadata
  that carries them.

**Takeaway: metadata is laid down at the chunking stage.** If you didn't attach it then, there's nowhere
to get it from later.

### Looking ahead: a chunk has two roles — you can split them apart

Back to the fact that a chunk is both searched over and fed to the LLM. An advanced idea (in detail — in
the [retrieval](./retrieval.md) layer): **it doesn't have to be the same piece of text.** You can *search*
over small, sharp chunks (a good embedding) and *feed the LLM* a larger parent fragment around the match
(full context). This family of techniques is *parent-document / small-to-big retrieval*. For now it's
enough to remember that splitting a chunk's two roles apart is possible.

### What to take away

- A chunk is **both searched over and read by the model** — two roles, with conflicting size
  requirements.
- Too large → a blurry embedding and noise; too small → lost context and lost references.
- Strategies: fixed → **+overlap** → **recursive (default)** → semantic → structure-aware.
- **Metadata** (source, section, date, permissions) is laid down here and feeds filtering, citations,
  and access control.
- You **measure** chunk size with metrics — you don't guess it.

**New terms** → [Glossary](../glossary.md): chunk, chunk overlap, recursive/structural chunking, semantic
chunking, chunk metadata, parent-document (small-to-big) retrieval.

---

## Embedding models

You know the general mechanics: chunk → vector → vector database. Here are the nuances that separate
"watched a video" from "I understand why it was built this way."

### What an embedding actually is

An embedding is a vector in a space where **geometric closeness means closeness in meaning**. The model
is a trained "text → vector" function: texts about the same thing land near each other, unrelated ones
land far apart. Search is then "find the vectors nearest to the query's vector."

The main consequence follows: **retrieval quality is capped by embedding quality.** If the vector of the
chunk you need didn't land near the query's vector, there's almost nothing further down the pipeline that
can save it (hybrid search only softens the blow — more on that in the retrieval layer). That's why
the choice of model lays the foundation for all of retrieval.

:::tip[▶ Video]

<YouTube id="wgfSDrqYMJ4" title="What are Word Embeddings? — IBM Technology" />

The video is about **word** embeddings (the historical root of the idea); in RAG we embed whole chunks —
the same principle, scaled up from a word to a piece of text.

:::

### Bi-encoder vs. cross-encoder

The key distinction that both vector search and reranking grow out of.

| | **Bi-encoder** | **Cross-encoder** |
|---|---|---|
| How it computes | Encodes the query and the chunk separately → two vectors → compares by distance | Feeds the pair (query + chunk) together → outputs a single relevance number |
| Accuracy | Lower (sees the texts apart) | Higher (sees the interaction of the words) |
| Speed | Fast | Slow |
| Precompute | **Yes** — chunk vectors are computed once at indexing time | **No** — the score depends on the pair |
| Where it's used | **Vector search** over the whole database | **Reranking** the top-K |

The "accuracy vs. speed" conflict is resolved by combining the two: the bi-encoder quickly pulls the
top-K out of millions (recall), the cross-encoder re-scores those K (precision). That re-scoring step is
exactly what **reranking** is. More in the [retrieval](./retrieval.md) layer.

### How you pick an embedding model

- **Tuned for retrieval (retrieval-optimized).** Not every model is trained for search — you want ones
  trained on "query ↔ passage" pairs, not on general sentence similarity.
- **Vector dimensionality** (384 / 768 / 1536+). Higher is more expressive but more expensive: memory,
  search speed, cost. "Bigger" ≠ "always better."
- **Language and domain.** A model that's strong on English may sag on Russian, legal text, or code. For
  enterprise multilingual content this is critical.
- **Maximum input length** — what size of chunk the model can even accept. A direct link back to
  chunking.
- **API vs. self-hosted.** A proprietary API (OpenAI, Cohere, Voyage) is simple and powerful, but your
  data leaves the perimeter and there's a per-call charge. Open self-hosted models (E5, BGE, gte) keep
  your data inside (often the deciding factor for enterprise privacy) and cost nothing per call, but you
  run the infrastructure yourself.

### The similarity metric — in brief

**Cosine similarity** (the angle between vectors; it accounts for direction and ignores length) is the
default choice. Many models emit normalized vectors, where cosine ≈ dot product. The rule: use the
metric the model was trained for (stated on its model card) — a mismatch hurts quality.

### Two common pitfalls

- **One model for queries and documents.** You embedded the documents with one model and the queries
  with another → the vectors live in different spaces → garbage. A corollary: switching the model means
  re-indexing the entire corpus.
- **query/passage asymmetry.** Retrieval models often expect a prefix (`query:` / `passage:`); mix them
  up and quality quietly drops.

### What to take away

- **Bi-encoder** (fast, precomputed, = vector search) vs. **cross-encoder** (accurate, per pair, =
  reranking).
- Retrieval quality is capped by embedding quality.
- Choose along the axes: retrieval-optimized · dimensionality · language/domain · input length · **API
  vs. self-hosted (privacy)**.
- One model for both query and document; watch the metric and the prefixes.

**New terms** → [Glossary](../glossary.md): embedding, embedding space, bi-encoder, cross-encoder,
dimensionality, cosine similarity, retrieval-optimized (asymmetric) embeddings, multilingual embeddings,
self-hosted vs API embeddings.

:::tip[▶ Video]

<YouTube id="t9IDoenf-lo" title="What is a Vector Database? — IBM Technology" />

A bridge to the next layer: where the chunk vectors get stored and how you search them for nearest
neighbors quickly.

:::

---

:::note[Next — going deeper]

🚧 Second pass: document parsing (PDF, tables, HTML, OCR), advanced chunking (late chunking, contextual
chunk embeddings), embedding fine-tuning.

:::
