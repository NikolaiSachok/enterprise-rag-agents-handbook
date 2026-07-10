---
id: evaluation
title: "Evaluation"
sidebar_position: 1
---

# Evaluation

More than once we've hit the wall of "you measure that with metrics" — at chunking, retrieval,
reranking, and faithfulness. Evaluation is **how** you measure. It's not a side topic: without it you tune
the pipeline blind (change the chunk size, the prompt, or the reranker — "feels better"). Eval turns "feels
better" into a number. That's what separates production from a demo, and it's what interviews dig into most.

## The core principle: evaluate retrieval and generation separately

The failure decomposition from the first lesson turns into a working tool here. The two stages break in
different ways and get fixed with different levers — so you have to measure them apart.

| | **Retrieval metrics** — did we find the right chunks? | **Generation metrics** — is the answer good given the context? |
|---|---|---|
| What they measure | Did the needed chunk make it into the results, and at what rank | Does the answer rest on the context and actually answer the question |
| The key ones | **Recall@K** (the main one for RAG), Precision@K, MRR, nDCG | **Faithfulness**, **Answer relevance**, Correctness |

Why Recall@K is the main one: if the needed chunk isn't in the results, generation physically can't answer
correctly. At the first stage recall matters more than precision — miss the relevant material and everything
downstream is already pointless.

## No dataset, no evaluation

To measure anything you need examples with a reference: questions plus either the relevant chunks or the
correct answer. That's the **golden set**. You build it by hand or synthetically — an LLM generates
question-answer pairs over the corpus and a human proofreads them. A small but clean set beats a big, noisy
one. This is exactly where teams cut corners the most, and without a reference the whole eval falls apart.

## LLM-as-a-judge — evaluating free-form text

Answers are free-form text — you can't score them with an exact match. For generation quality (faithfulness,
relevance) you bring in **another LLM as a judge**: it grades the answer against a rubric or compares it to a
reference and assigns a score. The trick scales human judgment to thousands of examples — a key
generation-eval technique and a frequent interview question.

:::tip[▶ Video]

<YouTube id="trfUBIDeI1Y" title="LLM as a Judge: Scaling AI Evaluation Strategies — IBM Technology" />

How evaluation by an LLM judge works.

:::

The judge has biases, and you need to know them: **position bias** (it prefers the first of two answers),
**verbosity bias** (longer reads as better), **self-preference** (it rates its own style higher). Hence the
rules: give it a clear rubric and **validate the judge against human ratings** before you trust it.

:::tip[▶ Video]

<YouTube id="dAE7OFm9oek" title="Can You Trust an AI to Judge Fairly? Exploring LLM Biases — IBM Technology" />

The judge's biases, and whether you can trust one.

:::

## Offline and online — two loops

- **Offline:** run the golden set through the pipeline before deploy, in CI. These are unit tests for RAG —
  they catch regressions ("improved X, quietly broke Y").
- **Online:** measure in production — user feedback (thumbs up/down), implicit signals, A/B tests. Real
  queries surface what the golden set missed.

## Eval-driven development

From here comes the loop that makes the pipeline tunable: change something → run eval → compare metrics →
keep it or roll back. This closes every earlier "here we measure" into one process, and regression eval in
CI keeps an improvement to one thing from breaking another.

## Metrics tell you what to fix

The main practical power of eval: it shows you which stage the failure is in.

| Symptom | Diagnosis | Where to fix |
|---|---|---|
| Answer wrong, the needed chunk **wasn't** in the results | retrieval failure → low Recall@K | chunking / hybrid / reranking |
| Answer wrong, but the needed chunk **was** in the context | generation failure → low faithfulness | grounding / prompt |

## What to take away

- Eval turns "feels better" into a number; it makes the pipeline tunable and separates production from a
  demo.
- Measure retrieval and generation **separately** — they break in different ways.
- Retrieval: **Recall@K** (the main one), Precision@K, MRR, nDCG. Generation: faithfulness, answer
  relevance, correctness.
- You need a **golden set** (question + relevant chunks / correct answer); a clean set beats a big one.
- **LLM-as-a-judge** scores free-form text against a rubric; mind the biases, validate against humans.
- **Offline** (regressions in CI) + **online** (feedback, A/B).
- Metrics tell you which stage to fix.

**New terms** → [Glossary](../../glossary.md): evaluation, golden set / golden dataset / ground truth, answer relevance,
correctness, LLM-as-a-judge, judge bias, offline vs online eval, regression eval, A/B testing.

---

:::note[Next — going deeper]

🚧 Second pass: RAGAS-style metric internals, LLM-judge calibration, human-in-the-loop labeling.

:::
