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
cut line: the fact survives whole in at least one of the two neighbors (provided the fact is shorter than
the overlap). Usually 10–20% of the chunk size.

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
↗ [SIGIR'09](https://cormack.uwaterloo.ca/cormacksigir09-rrf.pdf)

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
sits at the start and end. ↗ [arXiv](https://arxiv.org/abs/2307.03172)

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

**Retrieval failure / generation failure** — the diagnostic backbone of RAG: a bad answer comes in two
kinds — a *retrieval failure* (the needed chunk never made it into the results) and a *generation failure*
(the chunk was in the context, but the model ignored or garbled it). The first debugging move is to tell
which one you're looking at.

**Golden set / golden dataset / ground truth** — examples of "question + relevant chunks / correct answer" that metrics
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

**Content safety / moderation** — filtering harmful or off-policy content on the input and the output.

**Jailbreak** — bypassing a model's built-in safeguards (unlike injection, which exploits the instruction/data ambiguity).

**Least privilege / tool allow-listing** — limiting the set of tools and actions available to an agent, so a successful injection can do little.

**Attack success rate (ASR)** — the share of successful attacks over a set; a guardrails quality metric.

**Defense-in-depth** — layered defense: no single layer is complete; they work together.

## Observability

**Observability** — the ability to see what a live system actually does: debug a bad answer, measure cost
and latency.

**Trace / span** — the full record of one request through the pipeline (trace) as steps (spans): query →
retrieval + scores → prompt → output → agent steps.

**RAG tracing** — tracing the RAG-specifics: which chunks were retrieved and with what scores, the final
prompt, the raw output.

**Cost per request / token accounting** — tracking cost and tokens per request; in LLM every call costs
money.

**Latency (p50 / p95)** — delay by percentiles; the generation and reranking steps matter most.

**Three pillars (metrics / logs / traces)** — the three pillars of observability; for LLM, traces are the
key one.

**Feedback loop (observability → eval)** — production failures and user feedback become new golden-set
cases.

## Agents — agentic RAG

**Agentic RAG** — RAG in which retrieval becomes an action the model chooses inside a loop, rather than a
fixed pipeline step. The model owns the control flow, not the code.

**Agent loop** — the repeating "reason → decide → act → observe" cycle that runs until the model judges it
has enough to answer.

**ReAct (Reasoning + Acting)** — the "reason → act → observe" pattern: the model interleaves reasoning
steps with actions (tool calls), feeding each action's result back into the context.
↗ [arXiv](https://arxiv.org/abs/2210.03629)

**Routing / query router** — the lightest level of agency: the model makes one choice — where to send the
query (which index/tool, or "no retrieval needed") — and the flow is static after that.

**Multi-hop retrieval** — an answer that needs several dependent searches, where the next query is built
from the previous result.

**Query planning** — decomposing a complex question into sub-queries before searching.

**Self-correction / self-reflection** — the agent evaluates intermediate results, notices they're off, and
reformulates the query or searches again.

**Iterative retrieval** — searching in a loop with refinement, rather than one fixed call.

## Agents — tools

**Tool use / function calling** — the general mechanism by which the model calls an external function: the
model emits a structured intent and your code executes it. Retrieval is a special case.

**Tool definition** — a name, a description in words, and a parameter schema (JSON Schema) passed to the
model: the "menu" of available tools. The description acts as a prompt — the model selects a tool by it.

**Tool call** — the structured JSON (tool name and arguments) the model emits instead of, or alongside,
ordinary text.

**Tool result** — the result of running a tool, returned to the model as a separate message in context.

**Tool selection** — the model's choice of which tool to call; a frequent source of errors with a large or
overlapping tool set.

**JSON Schema** — a language for describing the structure and types of data; it defines a tool's allowed
parameters and narrows what the model may emit.

**Structured output** — model output in a prescribed machine-readable form (JSON to a schema) rather than
free text; the basis for reliable tool calling.

## Agents — planning & loops

**Planning** — how the agent arranges the sequence of steps toward a goal; the plan may be fixed up front or
emerge as the loop runs.

**Task decomposition** — breaking a goal into subtasks the agent tackles one at a time, either explicitly (a
written plan / todo list) or implicitly (emerging as it reasons in the loop).

**Plan-and-execute** — a strategy that plans the whole sequence of steps up front and then executes it,
re-planning when a step fails; more structured and cheaper than ReAct, but more rigid.

**Re-planning** — revising the plan when a step fails or an observation breaks it; the mechanism
plan-and-execute cannot work without.

**Reflection / self-critique** — a dedicated step where the agent judges its own trajectory ("am I making
progress?") and decides to stop, re-plan, or continue; the main lever against drift and silent looping.

**Termination criterion** — a defined condition for "done" that ends the loop; often implemented as a
"finish" tool the model calls.

**Step budget / iteration limit** — a hard cap on steps, calls, tokens, cost, or time; the backstop that
guarantees the loop stops in production.

**Loop detection** — watching for the same action repeated (same call, arguments, result) and intervening
when the agent spins in place.

**Scratchpad / working memory** — a working space where the agent keeps only what's relevant to the current
trajectory (intermediate notes, a list of what's done), so the context doesn't bloat.

**Non-termination** — the signature failure of the agent loop: it never stops, gets stuck repeating an
action, or drifts from the goal.

## Agents — multi-agent systems

**Multi-agent system** — several specialized agents collaborating instead of one agent; motivated by
specialization, context isolation, modularity, and parallelism.

**Orchestrator / supervisor** — a lead agent that decomposes a task, routes subtasks to workers, and
synthesizes their results; its "tools" are the sub-agents.

**Worker / sub-agent** — a specialized agent that handles a routed subtask and returns a result.

**Handoff** — passing control plus the relevant context from one agent to another; the handoff message acts
as a prompt for the receiving agent.

**Agent chain** — a sequential topology where each agent transforms the previous agent's output (e.g.
writer → editor → fact-checker).

**Critic / debate** — a topology where a critic agent (or several independent agents) challenges or compares
solutions, raising quality through independent perspectives.

## Agents — orchestration frameworks

**Orchestration framework** — a library that packages the agent loop, tool-calling glue, state, control
flow, and multi-agent orchestration so you don't hand-roll them (LangChain, LangGraph, LlamaIndex, Semantic
Kernel, AutoGen, CrewAI).

**Agent as a graph / state machine** — modeling an agent as nodes (call model / call tool / decide) and
edges (control flow, including loops) so the loop becomes inspectable, resumable, and controllable.

**Node / edge** — graph elements: a node is a step (call model / call tool / decide); an edge is control
flow.

**Checkpointing** — persisting agent state so a run can be paused, resumed, and inspected.

**Human-in-the-loop (HITL)** — a pause point where a human approves or intervenes before the loop continues;
in a framework, a first-class interrupt node.

## Agents — MCP and agent protocols

**MCP (Model Context Protocol)** — an open client–server standard (Anthropic, late 2024) for connecting
agents to tools and data; standardizes tools, resources, and prompts. Turns M×N bespoke integrations into
N+M. ↗ [modelcontextprotocol.io](https://modelcontextprotocol.io)

**MCP server** — wraps a tool or data source and exposes its capabilities uniformly.

**MCP client** — the agent or app that connects to MCP servers and consumes their capabilities.

**MCP resources** — data and context an MCP server exposes (no OpenAPI/CLI equivalent).

**MCP prompts** — reusable templates an MCP server offers.

**M×N integration problem** — M apps × N tools = M×N bespoke connectors; a standard collapses it to N+M.

**A2A (Agent-to-Agent)** — an emerging standard (Google) for agent-to-agent communication; MCP is
agent-to-tools, A2A is agent-to-agent.
