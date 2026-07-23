---
title: "Cost and the economics of agent work"
sidebar_position: 3
---

# The unit is cost per accepted change, not cost per token

Token prices are the number everyone quotes and the least useful one available. They describe what one attempt
costs, and attempts are not what you are buying — you are buying **changes that survived the gate chain**. Get
the denominator wrong and every conclusion downstream is wrong too: the cheap model that needs three attempts
and a human rescue is not cheap, and the expensive one that lands first time may be the bargain.

## Fix the denominator first

Three denominators, in increasing order of honesty:

- **Cost per token.** A price list, not a measurement. Useful only for comparing two models on identical work.
- **Cost per task attempt.** Better — it includes context, output, and tool calls — but it still counts the
  failures as if they were products.
- **Cost per *accepted* change.** The honest one. Everything spent getting there belongs in the numerator:
  the retries, the abandoned branches, the run that went sideways and was killed, and the review time the
  change consumed.

Under that third denominator, the intuitions from the first one often invert. Retry rate matters more than
sticker price, because a model that succeeds on the second attempt has doubled its own cost while the price
list stayed the same. And the failed attempts are not free in a subtler way: each one occupies a slot in the
serial fraction from [the fleet lesson](./agent-fleets.md), which is the resource you actually cannot buy more
of.

:::tip[▶ Video]

<YouTube id="7gMg98Hf3uM" title="What Makes Large Language Models Expensive? — IBM Technology" />

IBM breaks down where the money goes in running a large model — parameters, context, and the compute behind
each. Read it as the *inference* half of the bill; this lesson's argument is that for agent work the inference
half is rarely the half that decides whether the economics work.

:::

## Where the money actually goes

Four buckets, roughly in the order teams underestimate them.

**Context.** Agents re-read. The same repository, the same rules corpus, the same task brief get re-sent
across attempts and across agents. Context is usually the largest single line item in an agentic workload and
the one people forget entirely when estimating from a price list — which is also why the
[bloated rule corpus](./drift-and-rot.md) from the previous lesson has a direct bill attached, not just a
quality cost.

**Retries and rework.** Every failed attempt is paid for in full, and the change that lands after three tries
cost three times its apparent price.

**Verification.** The semantic gates from Part III — an LLM reviewing, an LLM judging — are themselves model
calls, and they scale with output rather than with team size. A fleet that generates twice as much pays twice
as much to check it.

**Human review time.** The most expensive input in the system and the only one that does not scale with
spend. Part I's [verification bottleneck](../part-1-foundation/verification-bottleneck.md) is an economic claim
as much as an engineering one: the binding constraint is priced in salary, not in tokens.

## Making cost accountable

Attribution comes first, because an unattributable bill cannot be managed — only worried about. The mechanism
is already in place from Part IV: if credentials are issued
[per task and per workload](../part-4-platform/least-privilege-sandboxing.md), spend can be attributed the same
way. Tag by task, not by team, and the question "what did this feature cost" becomes answerable instead of
rhetorical.

Then bound it. A per-task budget that stops a runaway loop is worth more than a monthly report that explains
one: agents fail by repeating, and repetition is exactly the failure mode a hard cap catches early. Cheap
deterministic checks belong ahead of expensive semantic ones for the same reason they belonged ahead of the
human in Part III — order the chain so the expensive judge only ever sees what already passed everything
cheaper.

And keep the value side honest. The course's opening
[method](../intro.md) applies with full force here: output is measurably up, and whether *value* is up is not
established — Microsoft's own researchers, holding some of the largest measured throughput gains in the field,
still write that a merged pull request is not the same as the value it delivers (`REPORTED`). A cost-per-merged
-change metric that improves while nothing downstream improves has optimised the denominator, not the business.
Pair the cost metric with one outcome metric you would be embarrassed to see flat.

## The three tiers — soloist · small-team · enterprise

The invariant: **measure cost against accepted work, attribute it to the task that caused it, and bound it
before it runs away.**

- **Soloist.** Watch retry rate more than price per token, keep the rules corpus small enough that you are not
  paying to re-send it, and set a hard spend cap per session. *The failure it prevents:* discovering a
  three-figure bill produced by an agent that looped overnight on a task you had already abandoned.
- **Small-team.** Per-task attribution, cheap gates ordered ahead of expensive ones, and cost-per-merged-change
  tracked as a trend rather than a number. *The failure it prevents:* a model or workflow change that looks
  cheaper per call while quietly raising the number of calls it takes to land anything.
- **Enterprise.** Budgets enforced at the platform, spend attributed to workload identity, and unit economics
  reported next to an outcome metric rather than alone. *The failure it prevents:* a program that reports
  falling cost per change and rising throughput while the value of what ships is never measured at all.

## What to take away

- **Cost per accepted change is the only honest unit.** Retries, abandoned runs, verification calls, and review
  time all belong in the numerator.
- Under that unit, **retry rate outweighs sticker price**, and a cheaper model that needs more attempts is
  usually the more expensive one.
- **Context is the line item people forget** — agents re-read constantly, so a bloated rules corpus has a bill
  attached, not just a quality cost.
- **Human review is the input that does not scale with spend.** The verification bottleneck is an economic
  constraint priced in salary.
- **Attribute per task, cap per task.** Agents fail by repeating; a hard bound catches the runaway that a
  monthly report only explains afterwards.
- Report unit cost **next to an outcome metric**, or you will optimise a denominator while the value stays
  unmeasured.

**[New terms](../glossary.md#cost-and-the-economics-of-agent-work)**: cost per accepted change, retry rate, context cost, verification cost, per-task attribution, spend cap, unit economics, outcome metric.
