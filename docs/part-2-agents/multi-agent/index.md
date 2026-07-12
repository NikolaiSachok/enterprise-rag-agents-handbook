---
title: Multi-agent systems
slug: /part-2-agents/multi-agent/
---

# Several specialized agents instead of one

Every lesson so far built *one* agent. [agentic-rag](../agentic-rag/index.md) gave you the loop; [tool-use](../tool-use/index.md)
gave it tools to call; [planning-loops](../planning-loops/index.md) taught it to plan over that loop and to stop.
This lesson asks a different question: what if, instead of one agent, you use several specialized agents
that collaborate?

Two questions run through the whole lesson, and they matter equally. First, *why* would you split one agent
into several. Second, *when not to*. The discipline from agentic-rag carries straight
over: take the simplest level that solves the task. Multi-agent is a higher-cost tier, not a prize you win
for building something impressive.

:::tip[▶ Video]

<YouTube id="kYkZI3oj2W4" title="Multi AI Agent Systems: When One AI Brain Isn't Enough — IBM Technology" />

The same case from IBM: when a single agent stops being enough and you split the work across a team.

:::

## Why split one agent into several

Four reasons, and they don't all pull equally hard.

**Specialization.** A focused agent — a narrow role, a tuned prompt, a handful of tools — beats one
mega-agent hauling fifty tools around. This is the multi-agent extension of tool-use's *few, non-overlapping
tools*: a smaller, orthogonal toolset per agent means fewer tool-selection errors and behavior you can
actually reason about.

**Context isolation** is the reason that scales. Each agent gets its own context window, and the
orchestrator sees only each worker's *result* — not all of its intermediate reasoning, not its raw tool
output. That is what lets a multi-agent system take on work whose full intermediate context would never fit
in one window. Instead of a single context filling up with everyone's noise, each agent keeps its own view
focused on the piece it owns.

**Modularity.** Independent agents can be built, tested, and reused separately — the same reason you split a
monolith into services.

**Parallelism.** Independent subtasks can run concurrently across agents instead of serially in one loop.

## Topologies — how agents are wired together

There are a few standard shapes. Most real systems are one of these, or a composite of them.

**Orchestrator–workers**, also called supervisor. A lead agent decomposes the task, routes each subtask to
the specialist worker that fits, and synthesizes the results into one answer. This is the most common
topology, and the rest of the lesson leans on it.

**Chain (sequential).** Agents in a chain each transform the previous one's output — writer → editor →
fact-checker, each stage handing its work to the next. The output of one is the input of the next, in a fixed
order.

**Hierarchical.** Orchestrators of orchestrators: a supervisor whose workers are themselves supervisors of
their own teams. It's the orchestrator pattern taken to depth, for tasks too large for a single flat team.

**Debate / critic.** A generator agent proposes, a **critic** agent challenges — or several agents
independently produce solutions and the best one is picked. Independent perspectives raise quality here for
the same reason blind reviewers do: an outside viewpoint catches what a single chain would happily
rationalize its way past.

## Communication — messages and handoff

Agents talk to each other through messages. The move that actually transfers work is a **handoff**:
passing control *plus* the relevant context from one agent to another.

The design lever that decides whether this works is *what context* travels on each handoff. Give the
receiving agent too little and it can't do the job. Give it too much and you get context bloat and a worker
that has lost the thread. This is the multi-agent version of tool-use's *a tool definition is a prompt* —
here, *the handoff message is a prompt*. It has to carry exactly what the next agent needs to act on, and
nothing more.

## The orchestrator is itself an agent

It's tempting to treat the orchestrator as some new kind of component. It isn't. An **orchestrator** is an
agent doing three familiar jobs at once:

- **Decomposition** — breaking the goal into subtasks, the planning lesson applied directly.
- **Routing** — sending each subtask to the right worker. This is agentic-rag's router, only now it routes a
  subtask to an *agent* rather than a query to a tool or an index.
- **Synthesis** — combining the workers' results into the final answer.

Its "tools" are the sub-agents. That's the whole trick: nothing conceptually new, just the earlier primitives
re-aimed at agents instead of functions.

## The cost, and when not to

Everything above is the case *for*. Here is the honest brake, because multi-agent is where teams overspend.

**Cost and latency multiply.** N agents means on the order of N× the model calls of a single agent. This is a
step up in both cost and latency, not a free lunch.

**Errors propagate.** One agent's mistake poisons everything downstream. There is no shared ground truth, so
a wrong intermediate result is simply taken as fact by the next agent in line.

**Coordination has overhead.** Agents can miscommunicate, duplicate each other's work, or deadlock waiting on
one another.

**It's harder to debug and to eval.** The trajectory is now spread across several agents, so observability has
to *stitch* the pieces into one coherent trace. This sharpens planning-loops' point that you have to trace the
whole trajectory — now the trajectory doesn't even live in one place.

So the rule. A single well-designed agent usually wins. Reach for multi-agent only for real
specialization, for context that will not fit in one window, or for genuinely parallelizable subtasks — the
same *take the simplest level that solves the task* discipline you met in agentic-rag.

## A concrete example — you've likely already used one

The editorial and authoring teams that produce a handbook like this one *are* orchestrator–worker
multi-agent systems. A lead — the chief editor or lead author — decomposes the work and routes it to
independent specialists: a literary editor, a naive reader, a fact editor, a translator. Then it synthesizes
their reports into a finished page. The specialists are kept blind to each other on purpose, for exactly the
debate/critic reason above: independent perspectives catch more than a single reviewer reading in sequence.

Deep-research systems have the same shape. A lead agent spawns several searchers that work in parallel, then a
synthesizer combines what they each found into one answer. Same topology, different task.

## What to take away

- Multi-agent is a higher-cost tier, not a reward — take the simplest level that solves the task, and be
  as ready to say *when not to* as *when to*.
- You split one agent into several for four reasons: specialization (focused role + small orthogonal
  toolset), context isolation (each agent its own window, the orchestrator sees only results — the reason
  that scales), modularity, and parallelism.
- Four standard topologies: orchestrator–workers (a lead decomposes, routes, synthesizes — the common
  one), chain (each agent transforms the previous output), hierarchical (orchestrators of
  orchestrators), and debate / critic (independent perspectives raise quality).
- Agents communicate by messages; a handoff passes control plus context, and *the handoff message is a
  prompt* — carry exactly what the receiver needs, no more.
- An orchestrator is just an agent: decompose + route + synthesize, with the sub-agents as its tools.
  Nothing new, the old primitives re-aimed.
- The brake: cost and latency multiply (~N×), errors propagate with no shared ground truth,
  coordination has overhead, and it's harder to debug and eval (stitch the trajectory across agents).
  A single well-designed agent usually wins.
- You've already seen one: the editorial/authoring team behind a handbook, and deep-research systems, are
  orchestrator–worker teams — a lead that decomposes, routes to blind specialists, and synthesizes.

**New terms** → [Glossary](../../glossary.md): multi-agent system, orchestrator / supervisor, worker / sub-agent, handoff, agent chain, critic / debate.

---

:::note[Next — part 2 of the lesson]

**[Protocols & coordination](./deep-dive.md)** — a deeper pass on how a team of agents actually coordinates
and how you keep it working and affordable: concrete inter-agent protocols and message schemas, shared-memory
(blackboard) architectures, role-assignment and negotiation patterns, multi-agent eval that stitches the
trajectory across agents, and cost-control policies for agent teams.

See also: how the orchestrator and isolated workers are built across Claude, OpenAI, and Gemini —
[the part's capstone](../real-agents.md); the general loop-control and budget layer these teams build on —
[planning & loops](../planning-loops/index.md).

:::
