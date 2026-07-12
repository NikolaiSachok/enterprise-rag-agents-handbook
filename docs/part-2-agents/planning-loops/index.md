---
title: Planning & loops
slug: /part-2-agents/planning-loops/
---

# Steering the loop toward the goal, and making it stop

In [agentic-rag](../agentic-rag/index.md) you got the loop: `reason → decide → act → observe`, spinning until the
model decides it's ready. In [tool-use](../tool-use/index.md) you saw that every action in that loop is a tool call —
the model emits the intent, your code does the calling. So the agent has freedom of movement and a set of
actions. What we never asked: on a task that takes *many* steps, how does the agent decide the sequence of
steps — and what makes the loop **stop**? That control layer is this lesson.

One line for the whole lesson: agentic-rag gave the agent a loop; this lesson is about steering that loop
toward the goal and bounding it so it actually stops.

:::tip[▶ Video]

<YouTube id="D37Ijn2o5U0" title="Why Agentic AI Fails: Infinite Loops, Planning Errors, and More — IBM Technology" />

This is the failure side of the whole lesson: the concrete ways the loop goes wrong — infinite loops and
planning errors — and why freedom over the sequence is what makes them possible.

:::

## Task decomposition — turning a goal into steps

**Task decomposition** means breaking the goal into subtasks the agent can take one at a time. A real
request — "reconcile these two reports and flag the discrepancies" — isn't one tool call. It's a sequence:
load the first, load the second, line them up, compare field by field, collect what doesn't match. The agent
has to get from the goal to that sequence somehow.

It happens two ways. **Explicit**: the agent writes a plan — a todo list — up front and works down it.
**Implicit**: nothing gets written down; the plan *emerges* step by step as the agent reasons in the loop.
The implicit version is just the default loop from agentic-rag, running without a plan on paper.

Making the plan explicit buys you two concrete things. It gives the model a scaffold to reason against — a
written plan keeps it on track far better than holding the whole thing in its head. And it gives *you*
something to track progress against: you can look at the list and see which subtasks are closed and which
aren't. That second point matters more than it sounds; hold onto it.

## Two strategies for sequencing the steps

Once you're decomposing, there are two ways to sequence what comes out. They pull in opposite directions.

**ReAct (Reasoning + Acting)** interleaves the two: the agent reasons one step, acts, observes, reasons the
next step. The plan is never fixed up front — it emerges step by step and adapts to each observation. This is
exactly the default loop from agentic-rag. Its strength is flexibility: it reacts to what it actually sees,
not to what it guessed beforehand. Its weakness shows on long tasks. With no fixed plan, it can wander,
cycle, or lose the goal — every step is a fresh local decision, and nothing is holding the global thread.

**Plan-and-execute** goes the other way: plan the whole step sequence up front, then execute it. It's more
structured and cheaper — you reason about the plan *once* instead of re-reasoning from scratch on every step,
which pays off on long, structured tasks. The cost is rigidity. A plan fixed up front can be wrong the moment
reality diverges from it. So plan-and-execute is only usable *with* a re-planning mechanism: when a step
fails or an observation breaks the plan, the agent has to be able to revise the plan rather than blindly push
on. That mechanism has a name — **re-planning** — and without it, plan-and-execute is a trap.

The tradeoff in one line: ReAct buys adaptivity, plan-and-execute buys structure and economy.

In practice you rarely pick one purely. You combine them: plan the high-level steps up front, execute each
step with a local ReAct loop, and re-plan when a step fails. The plan gives you the global thread; the inner
loop gives you local adaptivity; re-planning is the joint between them.

## The core failure — a loop that won't terminate correctly

Here's the signature failure of this whole layer: **the loop doesn't terminate correctly.** Hand the agent
freedom over the sequence and it can fail to stop where a static pipeline never could — a
fixed `retrieve → generate` path always ends because there's nowhere else to go. A loop has to *decide* to
end. That decision is the new thing that can break.

It breaks in three shapes:

- **It never stops.** The agent keeps calling tools forever, never deciding it's done.
- **It gets stuck repeating the same failing action.** Same query, same failing call, same error — over and
  over, making no progress.
- **It drifts from the goal.** Each step is locally plausible, but the agent slowly wanders off what it was
  actually asked to do.

None of these are exotic. All three are the price of the freedom agentic-rag introduced — the same freedom
that made the loop able to handle multi-hop questions is what lets it spin.

## Defences — layered

There is no single switch that fixes non-termination. You layer defences, weakest-but-hardest at the bottom,
smartest at the top.

**Budgets and limits.** A hard cap — on steps, tool calls, tokens, cost, or wall-clock time. When the cap is
hit, the loop stops no matter what the model "wants." This one is non-negotiable in production. It's the
backstop that guarantees termination even when every smarter defence fails, and it's the reason a runaway
agent costs you a bounded amount of money instead of an unbounded one.

**Loop detection.** Watch for the agent repeating the same action — same call, same arguments, same result —
and break in when it does, instead of letting it spin. This catches shape two before the budget has to.

**A termination criterion.** Define what "done" actually means, and make it explicit. The common
implementation is a "finish" tool the model calls to declare it's finished — rather than leaving "am I
done?" as a fuzzy judgement the model re-makes every step and can get wrong every step.

**Progress tracking.** Keep the goal and the already-closed subtasks in context, so the agent can see where
it stands against the plan. (This is where that explicit plan pays off a second time.) It's the direct
defence against drift: an agent that can see the goal is less likely to wander off it.

**Reflection.** The smartest layer — and worth its own section.

## Reflection — the main lever against drift and silent looping

**Reflection (self-critique)** is a dedicated step where the agent judges its own trajectory. Am I making
progress? Is this actually working? Should I change course? — and on the answer, it decides to stop, re-plan,
or continue.

It's a relative of the self-correction from agentic-rag, but aimed one level up. Self-correction there
judged *retrieval quality*: these chunks are off, search again. Reflection here judges the *plan and the loop
as a whole* — not one retrieval, the whole trajectory.

And this is why reflection matters more than it first looks. A budget only *cuts off* a bad loop; it doesn't
*prevent* one. Drift and silent looping are exactly the two failures a raw budget will happily let run right
up to the cap and then guillotine. Reflection is the layer that can notice the loop has gone bad and fix it
before the cap — steer instead of chop. The budget is your guarantee that the agent stops; reflection is your
best shot at it stopping *for the right reason*.

## The coding agent — this layer made visible

If you want to watch this whole control layer with your own eyes, use a coding agent. Hand one a programming
task and watch its ReAct chain `reason → act → observe` and its self-correction stream past in the intermediate output —
the loop that was abstract in agentic-rag is right there on screen, step after step.

Weaker or older models make the failure modes vivid. On a hard task they sometimes loop — retry the same
broken fix again and again, same error each time — or drift off course from what you actually asked for. And
what do you do when that happens? You interrupt them by hand.

That everyday reflex *is* the lesson. Manual interruption is a **human-in-the-loop** budget of last resort —
you, being the cap the agent didn't hit on its own. It's the most concrete argument there is for why budgets,
reflection, and a human override all matter: you've already watched the failure happen and reached for the
stop button.

## Long trajectories cost context

One more cost, quieter than non-termination but always present. The loop fills the context with tool calls
and their results, step by step. Over a long trajectory that means context bloat, rising cost per call, and
**lost-in-the-middle** — the model attends worst to the middle of a long context, so the early steps of a
trajectory can effectively fall out of view right when the agent needs them.

The mitigations belong to the second pass, but name them now: summarise the history as it grows, keep only
what's still relevant in a **scratchpad / working memory**, and hold a structured list of what's already
done. That last one, again, is your explicit plan earning its keep.

## Where this sits — and what it costs downstream

Placement first. This is the control layer *over* the loop from agentic-rag and *over* the tools from
tool-use: decomposition and termination sit on top of the `reason → decide → act → observe` loop that calls tools.
Nothing here replaces those lessons — it steers what they built.

Two downstream consequences sharpen points you've already met. **Observability** stops being merely useful and
becomes essential. To debug non-termination you have to trace the *whole* trajectory — the entire chain of
steps — because the failure can be anywhere in it: a bad decomposition, one wrong step, a missing
re-plan. Without the full trace you're guessing. And eval now measures trajectory quality, not just "did
it answer." Did it reach the goal, and in how many steps? Efficiency and termination are part of quality now —
an agent that gets the right answer in forty steps when six would do is not a good agent.

## What to take away

- This lesson is the **control layer over the loop and the tools** — decomposition and termination sitting on
  top of `reason → decide → act → observe`. It steers the freedom the earlier lessons handed the model.
- **Task decomposition** turns a goal into a sequence of subtasks, either **explicitly** (a written plan you
  can track) or **implicitly** (a plan that just emerges in the loop). Writing it down helps the model *and*
  helps you.
- **ReAct** interleaves reasoning and acting and adapts step by step; **plan-and-execute** plans up front and
  is cheaper on long structured tasks but needs **re-planning** to survive contact with reality. Real systems
  combine them — plan high-level, ReAct locally, re-plan on failure.
- The signature failure is a **loop that won't terminate correctly**, in three shapes: never stops, gets
  stuck repeating a failing action, or drifts from the goal.
- Defend in layers — **budgets** (the non-negotiable backstop), **loop detection**, an explicit **termination
  criterion**, **progress tracking**, and at the top **reflection**, the layer that *prevents* a bad loop
  instead of just cutting it off. A coding agent is where you watch all of this succeed and fail.
- Downstream, **observability becomes mandatory** (trace the whole trajectory to debug it) and **eval measures
  the trajectory** — whether it reached the goal, and in how many steps.

**New terms** → [Glossary](../../glossary.md): planning, task decomposition, plan-and-execute, re-planning, reflection / self-critique, termination criterion, step budget / iteration limit, loop detection, scratchpad / working memory, non-termination.

---

:::note[Next — part 2 of the lesson]

**[Plan search & memory](./deep-dive.md)** — a deeper pass on steering and bounding the loop: tree/graph
search over plans, named reflection frameworks, budget and cost policies in production, memory architectures
for long trajectories (episodic vs working memory), and trajectory-level eval metrics.

See also: the retrieval-specific twist on the same loop — [Agentic RAG](../agentic-rag/index.md); how the
loop, its caps, and recovery look across Claude, OpenAI, and Gemini — [the part's capstone](../real-agents.md).

:::
