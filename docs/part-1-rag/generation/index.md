---
title: Generation
slug: /part-1-rag/generation/
---

# Composing a grounded answer from the context

Retrieval handed over good, permitted context. Now the "G" — the model has to phrase an answer **from that
context**. Go back to the frame from the part overview: a **generation failure** is when the chunk you needed
*was* in the context, but the answer still came out wrong. The model ignored it, garbled it, or mixed in its
own guess. This layer is about not letting that happen.

## The core idea: answer from the context, not from memory

An LLM carries **parametric knowledge** — everything it absorbed during training. Left unconstrained, it
will happily answer from that internal memory: possibly stale, possibly wrong, and certainly not from your
documents. RAG wants the opposite — to keep the model pinned to the **context you supply**: fresh, permitted,
verifiable. So generation here isn't "let the model off the leash," it's "keep it inside the sources."

:::tip[▶ Video]

<YouTube id="cfqtFvWOfg0" title="Why Large Language Models Hallucinate — IBM Technology" />

Why a model makes things up in the first place.

:::

## Building the prompt and packing the context

How you assemble the prompt is half the battle. The basic structure: a system instruction + the retrieved
chunks (clearly set apart) + the user's question. Three things break most often:

- **Marking the context off explicitly.** Flag where the sources begin and end, so the model can tell "data
  to answer from" apart from "instructions." This doubles as the first line of defence against prompt
  injection (more on that in the Guardrails layer).
- **Order: the lost-in-the-middle effect.** A model "sees" the beginning and end of a long context better
  and loses whatever is buried in the middle. Hence the rule: don't dump 50 chunks — pass a handful of the
  best (thanks to reranking) and put the most relevant ones at the edges.
- **Metadata for citations.** The source and section, attached back at chunking, ride along into the prompt
  — otherwise the answer has nothing to cite.

:::tip[▶ Video]

<YouTube id="1c9iyoVIwDs" title="4 Methods of Prompt Engineering — IBM Technology" />

Ways to structure a prompt.

:::

## Grounding instructions — the main lever against hallucinations

The strongest tool is a simple one: give the model explicit boundaries. "Answer **only** from the provided
context. If the answer isn't there, say so — don't make it up." That one instruction noticeably cuts the
share of hallucinations, because it strips the model of its "licence" to top up the answer from memory.

## Citations

Make the model state which chunk or source each claim came from. The payoff is twofold. The user can
**check** the answer — that's trust. And the model itself invents less: it's harder to fabricate a fact when
you have to put a source next to it. This runs off the metadata laid down at chunking.

## Refusal is a feature, not a bug

The system must be allowed to say "I don't know" — and it has to be instructed to. A confident wrong answer
is worse than an honest "that isn't in the documents." If retrieval came back empty, the answer should be a
**refusal**, not a guess. In an enterprise setting this is fundamental: people lean on a confident answer as
if it were fact, and a single error travels further — into a report, into someone's decision.

## Faithfulness: where generation runs into measurement

Even with instructions, a model will sometimes override the context with its own knowledge, or stumble when
the context contradicts what it "believes." How far the answer actually rests on the sources is something you
**measure** — with the faithfulness / groundedness metric. We formalize it in the
[Evaluation](../cross-cutting/evaluation/index.md) layer; for now, hold on to the idea that "the model behaves well" isn't a
feeling, it's a number.

## Fixing generation failure, class by class

| Failure | The fix |
|---|---|
| Ignored the chunk it needed | Less noise (reranking → few chunks) + a grounding instruction |
| Made up a fact | Grounding + citations + a permitted refusal |
| Lost what was buried in the middle | Chunk order, fewer chunks |
| Answered from stale memory | A hard tie to the context, "sources only" |

## What to take away

- Generation in RAG = an answer **from the context**, not from parametric memory.
- Prompt assembly: set the sources apart explicitly, mind lost-in-the-middle, pass a handful of the best
  chunks.
- **Grounding instructions** ("only from the context, otherwise — I don't know") are the main lever against
  hallucinations.
- **Citations** give verifiability and, on their own, cut down on invention.
- **Refusal** is normal behaviour, not a malfunction.
- Faithfulness to the context is something you **measure** → the bridge to Evaluation.

**New terms** → [Glossary](../../glossary.md): grounding, grounding instructions, context packing,
lost-in-the-middle, citations / attribution, refusal / abstention, faithfulness / groundedness, parametric
knowledge, hallucination.

---

:::note[Next — part 2 of the lesson]

**[Self-verification & structured output](./deep-dive.md)** — the generation layer's second pass:
self-verification loops (chain-of-verification, self-consistency), structured output and forced/inline
citations via constrained decoding, the conflict between the context and the model's parametric knowledge,
long-context packing beyond lost-in-the-middle, and answer-shaping (format, tone, length).

See also: what feeds this layer — [Retrieval](../retrieval/index.md); where the chunks come from —
[Ingestion](../ingestion/index.md); and how faithfulness is actually measured —
[Evaluation](../cross-cutting/evaluation/index.md).

:::
