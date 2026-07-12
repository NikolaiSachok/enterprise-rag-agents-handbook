---
id: glossary
title: Glossary
sidebar_position: 5
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
query (which index/tool, or "no retrieval needed") — and the flow is static after that. Not to be confused
with model routing — picking which model answers (Part III).

**Multi-hop retrieval** — an answer that needs several dependent searches, where the next query is built
from the previous result.

**Query planning** — decomposing a complex question into sub-queries before searching.

**Self-correction / self-reflection** — the agent evaluates intermediate results, notices they're off, and
reformulates the query or searches again.

**Iterative retrieval** — searching in a loop with refinement, rather than one fixed call.

**Self-RAG** — self-reflective RAG: the model is trained to emit special reflection tokens during
generation that decide, on demand, whether to retrieve for a segment, whether each retrieved passage is
relevant, and whether the answer is supported by it (and how useful). The retrieve/relevance/support
judgments are inline in generation, not an external scaffold. ↗ [arXiv](https://arxiv.org/abs/2310.11511)

**Corrective RAG (CRAG)** — a lightweight retrieval evaluator grades retrieved documents and buckets its
confidence score: Correct → refine (keep only the relevant fragments), Incorrect → discard and fall back to
web search, Ambiguous → combine both. Plug-and-play on top of any RAG.
↗ [arXiv](https://arxiv.org/abs/2401.15884)

**Adaptive RAG** — a trained classifier predicts a query's complexity and routes it to the cheapest
sufficient strategy: no retrieval (answer from parametric memory), single-step retrieval, or multi-step
iterative retrieval. ↗ [arXiv](https://arxiv.org/abs/2403.14403)

**Retrieval budget** — a hard cap on the retrieval loop — maximum hops, searches, or retrieved tokens — that
guarantees termination regardless of the model's judgment; the retrieval-specific mirror of the step / token
budget.

**Sufficient context** — the termination criterion for a retrieval loop: "do I have enough to answer?"
Stopping too early under-retrieves (unsupported answers); never stopping over-retrieves (cost +
lost-in-the-middle). Self-RAG's support / usefulness tokens are one implementation.

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

**Parallel tool calls** — several independent tool calls the model emits in one turn; the runtime fans them
out (runs them concurrently) and fans them in (collects the results). Valid only when the calls don't depend
on or interfere with each other; controlled per vendor (`disable_parallel_tool_use`, `parallel_tool_calls`).

**Constrained decoding** — enforcing a schema during generation: the schema is compiled to a grammar, and at
each step every token that would break the grammar is masked out, so the output is schema-valid by
construction rather than validated afterward.

**Strict mode / Structured Outputs** — the productized switch (`strict: true`) that turns constrained
decoding on for tool arguments; guarantees well-formed, schema-valid arguments (not correct ones). Requires
`additionalProperties: false` and every property marked required.

**Idempotency / idempotency key** — a write is idempotent when running it twice with the same input has the
same effect as running it once; an idempotency key lets the server dedupe retried writes, so a retry after a
timeout is safe. ↗ [Wikipedia](https://en.wikipedia.org/wiki/Idempotence)

**Tool-RAG / dynamic tool loadout** — retrieving only the tools relevant to the current query and loading
just those, instead of shipping the whole catalog on every request; RAG over the tool menu. Cuts token cost
and tool-selection errors on large tool sets.

**Argument validation** — checking a tool call's arguments before executing, at two levels: schema-level
(types, enums, formats) and semantic (values wrong in context — an unknown id, an out-of-range amount).

**Retry budget** — a hard ceiling on retry attempts, per call and per run; without it a deterministically
failing call becomes a non-terminating retry loop. Mirrors the step budget and token budget.

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

**Plan search (tree / graph search over plans)** — searching a space of candidate plans and reasoning paths
instead of committing to one: generate several next-steps, score each with a value function, expand the
promising branches with lookahead, and backtrack out of dead ends.

**Tree of Thoughts (ToT)** — deliberate search over intermediate reasoning steps ("thoughts"): the model
proposes candidate thoughts, self-evaluates each state, and searches the tree breadth- or depth-first with
lookahead and backtracking, unlike the single linear path of chain-of-thought.
↗ [arXiv](https://arxiv.org/abs/2305.10601)

**Graph of Thoughts (GoT)** — generalizes ToT from a tree to an arbitrary graph, so thoughts can be
aggregated and merged, not only branched. ↗ [arXiv](https://arxiv.org/abs/2308.09687)

**LATS (Language Agent Tree Search)** — Monte Carlo Tree Search over an agent's actions rather than just its
reasoning, with a language-model value function, self-reflection, and environment feedback; unifies
reasoning, acting, and planning. ↗ [arXiv](https://arxiv.org/abs/2310.04406)

**Self-Refine** — single-model iterative refinement: the same model generates an output, critiques it, and
revises in a loop, with no training. ↗ [arXiv](https://arxiv.org/abs/2303.17651)

**Reflexion** — verbal reinforcement: after a failed attempt the agent writes a natural-language reflection,
stores it in an episodic memory buffer, and reads it back on the next attempt — learning across trials with
no weight update. The framework (capital R), distinct from reflection the concept.
↗ [arXiv](https://arxiv.org/abs/2303.11366)

**Episodic memory** — a store of the agent's past experiences (what happened, when, the outcome) that
outlives the current context and is retrieved when relevant; distinct from working memory, the current
task's in-context scratchpad.

**Semantic memory** — durable facts the agent knows or has learned, typically in a knowledge base / vector
store; long-term, unlike the ephemeral scratchpad.

**Virtual context management (MemGPT)** — an OS-inspired memory hierarchy: the model treats the context
window as "main context" (like RAM) and an external store as "external context" (like disk), paging data in
and out with tool calls to work beyond the window. ↗ [arXiv](https://arxiv.org/abs/2310.08560)

**Trajectory evaluation** — grading the whole path the agent took, not just its final answer: outcome (task
success) versus process (was each step and tool call sound), plus step efficiency and termination.

**pass^k** — the fraction of tasks an agent solves on all k independent attempts; a reliability metric that
exposes the run-to-run variance a single pass@1 hides. ↗ [arXiv](https://arxiv.org/abs/2406.12045)

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

**FIPA ACL** — the Agent Communication Language standardized by FIPA (2002): a message is a *performative*
(a speech-act — inform, request, propose, cfp…) wrapping fields (sender, receiver, content, ontology,
protocol, conversation-id). The decades-old ancestor of today's inter-agent message schemas.
↗ [Wikipedia](https://en.wikipedia.org/wiki/Foundation_for_Intelligent_Physical_Agents)

**Contract net protocol** — task allocation by negotiation: a manager announces a task, idle contractors
bid, the manager awards the best bid, the contractor returns the result (Reid G. Smith, 1980). Dynamic role
assignment expressed as a message exchange. ↗ [Wikipedia](https://en.wikipedia.org/wiki/Contract_Net_Protocol)

**Blackboard** — a shared-memory coordination architecture: independent specialists (knowledge sources)
read and write one global data structure while a control component schedules who writes next; agents
coordinate through the board rather than by addressing each other. The alternative to point-to-point
handoff. ↗ [Wikipedia](https://en.wikipedia.org/wiki/Blackboard_system)

**Multi-agent debate** — several model instances independently propose an answer, then critique and revise
across a few rounds, converging on a more accurate and consistent result than a single pass; a protocol
form of the critic/debate topology. ↗ [arXiv](https://arxiv.org/abs/2305.14325)

**Trajectory stitching** — threading a shared correlation (conversation/task) id through every inter-agent
message so the per-agent traces reassemble into one parent–child trace you can grade end-to-end; the
precondition for evaluating a team.

## Agents — orchestration frameworks

**Orchestration framework** — a library that packages the agent loop, tool-calling glue, state, control
flow, and multi-agent orchestration so you don't hand-roll them: LangChain, LangGraph, LlamaIndex,
Microsoft Agent Framework (the successor to Semantic Kernel and AutoGen), CrewAI.

**Agent as a graph / state machine** — modeling an agent as nodes (call model / call tool / decide) and
edges (control flow, including loops) so the loop becomes inspectable, resumable, and controllable.

**Node / edge** — graph elements: a node is a step (call model / call tool / decide); an edge is control
flow.

**Checkpointing** — persisting agent state so a run can be paused, resumed, and inspected.

**State graph (StateGraph)** — an agent modeled as a shared typed state object plus nodes and edges;
LangGraph's concrete form of the agent-as-a-graph idea.

**Conditional edge** — a graph edge that routes to the next node based on the current state; it is what
encodes the loop's branch (tool call → tools node; done → END).

**Checkpointer** — the component that saves graph state at every super-step, keyed by a thread, so a run can
be resumed or rewound (time-travel).

**Checkpoint backend** — the swappable storage behind a checkpointer (in-memory / SQLite / Postgres /
Redis); a dev-versus-prod choice.

**Thread (thread_id)** — the id that isolates one conversation's checkpoint history from another's.

**Durable execution** — a run that resumes from the last successful step after a crash, restart, or long
pause, built on the checkpointer; `durability` modes (exit / async / sync) trade write-timing for speed.

**Framework long-term memory / store** — cross-thread persistent memory keyed by namespace, distinct from
the thread-scoped checkpoint state (short-term memory).

**Declarative vs imperative agent definition** — describing agents in configuration (YAML/JSONC, declarative
workflows) versus building the graph in code (add_node / add_edge).

**Human-in-the-loop (HITL)** — a pause point where a human approves or intervenes before the loop continues;
in a framework, a first-class interrupt node.

## Agents — MCP and agent protocols

**MCP (Model Context Protocol)** — an open client–server standard (created by Anthropic in late 2024, a
project of the Agentic AI Foundation under the Linux Foundation since December 2025) for connecting
agents to tools and data; standardizes tools, resources, and prompts. Turns M×N bespoke integrations into
N+M. ↗ [modelcontextprotocol.io](https://modelcontextprotocol.io)

**MCP server** — wraps a tool or data source and exposes its capabilities uniformly.

**MCP client** — the agent or app that connects to MCP servers and consumes their capabilities.

**MCP resources** — data and context an MCP server exposes (no OpenAPI/CLI equivalent).

**MCP prompts** — reusable templates an MCP server offers.

**M×N integration problem** — M apps × N tools = M×N bespoke connectors; a standard collapses it to N+M.

**A2A (Agent2Agent)** — an open standard (created by Google, announced April 2025, a Linux Foundation
project since mid-2025) for agent-to-agent communication: agents publish an Agent Card for discovery and
exchange work as Tasks carrying Messages and Artifacts over JSON-RPC. MCP is agent-to-tools, A2A is
agent-to-agent. ↗ [a2a-protocol.org](https://a2a-protocol.org)

## Agents — real agents (capstone)

**Extended thinking** — the visible reasoning blocks a model emits before answering; in Claude they surface
as `thinking` blocks.

**Interleaved thinking** — reasoning *between* tool calls, not only before the first one; in Claude it is
automatic on adaptive-thinking models.

**Reasoning effort** — controlling reasoning depth with a discrete dial (OpenAI's `reasoning.effort`:
`none`/`minimal`/`low`/`medium`/`high`/`xhigh`); the reasoning tokens themselves stay opaque and are billed
as output.

**Thinking budget** — a numeric cap on how much a model reasons per request (Gemini's `thinkingBudget`),
shifting in Gemini 3 to discrete `thinking_level` tiers.

**Claude Code hooks** — runtime lifecycle events you can shell out from (`PreToolUse` can block a call,
plus `PostToolUse`, `Stop`, and more).

**ADK callbacks** — a fixed matrix of interception points in ADK (`before`/`after` for agent, model, and
tool); returning an object from a callback short-circuits the call.

**Permission modes** — modes that decide what an agent may do without confirmation
(`default`/`acceptEdits`/`plan`/`bypassPermissions`…), evaluated in a fixed order where a `deny` rule blocks
even under `bypassPermissions`.

## Production — serving

**Serving** — running a model or a pipeline as a network service. Two distinct senses: serving the
application (your RAG/agent pipeline behind an API) and serving the model (running LLM inference itself).

**Inference** — the model computing outputs from inputs in production — the forward pass as a service, as
opposed to training. What you buy from a provider API or run on your own GPUs.

**Inference server** — a specialized server for LLM inference on GPUs: continuous batching, KV-cache
management, an OpenAI-compatible API (vLLM, SGLang, Ollama).

**SSE (Server-Sent Events)** — a one-way event stream over plain HTTP; the standard transport for token
streaming from LLM APIs. ↗ [Wikipedia](https://en.wikipedia.org/wiki/Server-sent_events)

**Time-to-first-token (TTFT)** — the latency until the first streamed token reaches the user; the
perceived-latency metric that streaming optimizes.

**Streaming** — sending tokens to the user as they are generated instead of waiting for the complete
answer; the main perceived-latency lever (TTFT).

**Continuous batching** — inference-server scheduling where requests join and leave the running batch at
token granularity instead of waiting for the whole batch to finish; the main throughput lever.

**PagedAttention** — vLLM's KV-cache memory management: the cache is paged the way an OS pages virtual
memory, cutting fragmentation and raising throughput. ↗ [arXiv](https://arxiv.org/abs/2309.06180)

**Cold start** — the delay before a model container can actually serve: weights take tens of seconds to
minutes to load into GPU memory. Why readiness is not "process up," and the price scale-to-zero pays on the
next request.

**OpenAI-compatible API** — the de facto wire standard for LLM endpoints; one client dialect talks to
provider APIs and self-hosted inference servers alike, so switching backends is close to a URL change.

## Production — cloud platforms

**Managed endpoint** — a model served by a cloud AI platform behind your IAM, billing, and network
perimeter: you call it, the platform runs it.

**Model catalog** — the set of first- and third-party models a platform can serve as managed endpoints
(Foundry Models, the Bedrock catalog, Model Garden).

**Data residency** — the guarantee about where requests are processed (region or geography); together with
no-training commitments and private networking it forms the compliance triad.

**Provisioned throughput** — reserved, dedicated model capacity with predictable latency, bought instead of
shared on-demand tokens (Azure PTU, Vertex Provisioned Throughput, the Bedrock Reserved tier).

**Batch mode** — a discounted asynchronous processing tier for non-interactive workloads.

**Managed RAG** — a platform's packaged ingestion-to-retrieval pipeline (Bedrock Knowledge Bases, Azure
Foundry IQ on AI Search, Vertex RAG Engine); it trades knobs for speed.

**Vendor lock-in** — dependence created by platform-specific batteries (managed RAG, SDKs) rather than by
the endpoint itself, which is often OpenAI-compatible.

## Production — the tooling ecosystem

**Instrumentation** — adding the code or SDK hooks that emit traces, spans, and metrics from the pipeline;
the precondition for observability.

**OpenTelemetry GenAI conventions** — the emerging vendor-neutral standard for naming LLM spans and
attributes (model, tokens, tool calls): instrument once, export anywhere. Still experimental as of
mid-2026. ↗ [GitHub](https://github.com/open-telemetry/semantic-conventions-genai)

**Safety classifier** — a compact specialized model that scores text for risk categories on input or output
(Llama Guard, Granite Guardian); composes with guardrails frameworks, which orchestrate the checks.

**Red-teaming** — deliberately attacking your own system to measure its defenses (attack success rate);
productized in eval tools and platform red-team features.

## Production — LLMOps

**LLMOps** — the operations discipline for LLM applications: deploying, monitoring, and cost-managing
systems whose behavior lives in prompts, model versions, indexes, and configs rather than only in code.
MLOps specialized for foundation-model applications.

**Canary release** — routing a small share of live traffic to the new variant (prompt, model, index)
while watching quality and cost metrics; a regression surfaces on a fraction of users and rolls back
cheaply.
↗ [Martin Fowler](https://martinfowler.com/bliki/CanaryRelease.html)

**Shadow deployment** — the new variant runs on mirrored production traffic and its answers are never
shown to users; a safe quality comparison on real queries.

**Prompt registry** — a versioned store of prompts decoupled from code deploys; product teams iterate on
prompts without shipping code, and every production answer stays attributable to an exact prompt version.

**Model pinning** — pinning production to exact model snapshot ids instead of a floating alias; a
provider's model update then becomes an explicit, eval-gated deploy rather than a silent behavior change.

**Model routing** — sending each request to the cheapest model that can handle it; the router can be a
rule, a classifier, or a model. Distinct from query routing (which index, Part I) and tool selection
(which tool, Part II): this picks which model answers.

**Fallback** — the pre-configured alternative — another region, another provider, a cheaper model — that
the system switches to when the primary model errors or rate-limits.

**LLM gateway** — the layer that centralizes model access behind one API: routing, fallbacks, keys,
budgets, and rate limits per team (LiteLLM, OpenRouter).

**Prompt caching** — provider-side caching of the repeated prompt prefix (system prompt, examples, static
context); cached input tokens are billed at a large discount, so prompts are designed static-prefix-first.

**Semantic caching** — returning a stored answer for a near-duplicate question, matched by embedding
similarity; saves the whole request's cost at the risk of a false hit on a subtly different question.

**Drift** — the world shifting under a fixed configuration: input drift (traffic asks new kinds of
questions), corpus drift (documents age), upstream model drift (the provider changes an unpinned model).
