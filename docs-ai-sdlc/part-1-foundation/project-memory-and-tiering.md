---
title: "Project memory and tiering"
sidebar_position: 5
---

# Project memory and tiering

Agents keep nothing between runs. End a session and everything the model worked out — the constraints you
agreed, the dead ends you ruled out, why a function is shaped the way it is — evaporates, leaving only the files
on disk. Durable project memory is what makes a fleet of forgetful agents usable at all. But memory has a running
price: a rule file isn't written once and consulted when needed — it is re-sent to the model on every turn, and
the field's one rigorous measurement of that cost puts it above 20% per turn. So the obvious fix, write more of it
down, is also the failure mode. This lesson is the escape: tier the knowledge by how often the task actually needs
it, rather than producing more of it. The grades from Lesson 2 — `MEASURED`, `REPORTED`, `ASSERTED` — ride along,
and the lesson turns them on its own central claim, which is ours, single-sourced, and would be a lie to hide.

## The smart friend with amnesia

One practitioner writing a public series on AI-first development,
[Andrey Beloborodov](https://www.threads.com/@andreybwhite), passes on the model's own account of itself: a "very
smart friend with amnesia" (`ASSERTED` — his framing). Once the dialogue ends nothing survives but the code; when
a conversation runs past the context window and auto-compaction summarises it, that helps, he says, "but not by
much."

The intuition now has a measurement under it, sharper than the metaphor. A "governance decay" study
(arXiv:2606.22528, June 2026; `MEASURED`) ran 1,323 episodes with a policy the agent was told to obey. With the
full policy visible, the violation rate was **0%**. After compaction summarised the history, it rose to **30%
overall, and up to 59% for some models**. The decomposition is the teachable part: when the constraint survived
summarisation, violations stayed at **0%**; when the summariser dropped it, they jumped to **38%**. The model was
never disobeying — the harness had deleted the rule. The point generalises past compaction: anything that must
survive has to be pinned or re-injected, never stated once and trusted to persist.

## Write more down, and you drown

Beloborodov's next admission reads better as corroboration than as a stumble. Having told you to build project
memory, he grants that you "drown in generated documents within a couple of days" — the AI writes specs "in tens
of kilobytes," the store "turns into a dump" — then promises a fix that never lands in the series (`REPORTED`). He
kept using the method anyway, which is the tell: overload is a tax to engineer against, not a disqualifier.

It is the best-attested finding in the field. Eight parties reached it independently, none citing another: Adzic,
author of *Specification by Example*; Spec Kit discussion #1784, where "thousands of lines of instructions" drown
the model's own context until it loses the requirement; Böckeler at Thoughtworks, who would "rather review code
than all these markdown files"; Yegge, who calls markdown plans "write-only memory for agents"; Eberhardt, who
counted the lines; the Thoughtworks Radar; ETH Zurich, the one measured arrival; and Grabowski — plus the primary
corpus above. Eight walls hit from eight directions, one of them with instruments: teach it at high confidence.

The cost is where the metaphor turns into a number. A standing context file isn't a document you consult; it's a
subscription you pay every turn, because every line is re-sent to the model each time it acts. ETH Zurich measured
the bill (Gloaguen et al., arXiv:2602.11988; `MEASURED`): context files raised inference cost **over 20% per turn
on average** — **+20% on SWE-bench Lite, +23% on AGENTbench** for LLM-generated files, up to **+19%** for
human-written ones. And the mechanism isn't the one you'd guess: agents "followed instructions thoroughly but
unnecessarily" — over-compliance — burning the extra budget obeying the file too well, with no gain. More memory
here isn't merely wasteful. It's directionally wrong.

## Don't let the agent write its own rules

The same study turns up a result you wouldn't predict. Of its three conditions — no context file, an LLM-generated
one, a human-written one — **the LLM-generated file is the only one measured net-negative**: **−0.5%** task
success on SWE-bench Lite, **−2%** on AGENTbench. Human-written files came out mildly positive, **+4%** on average
(every agent improved except one), for the reason that is the whole point: a person writes down what the agent
can't infer from the repo, while an agent writing its own rules mostly restates what it could already read.

Don't over-read that into "AGENTS.md doesn't work." A second paper points the other way, and both are honest.
Lulla et al. (arXiv:2601.20404; `MEASURED`) found an AGENTS.md file *associated with* **28.64% lower median
runtime** and **16.58% fewer output tokens**. They don't collide — they weigh different ledgers on different
populations. Gloaguen measures task success and input cost, where the file is re-sent every turn; Lulla measures
runtime and output tokens, where a file that stops the agent flailing shortens the whole trajectory, and its
finding is observational, not a clean causal contrast. A file can raise your input bill while lowering your output
tokens and wall-clock. Map both; crown no winner. What survives either reading is practical: don't let an LLM
bootstrap your rules file, cut anything the agent could learn by reading the code (a hand-written "Architecture"
section is usually exactly this), and keep only commands, constraints, and genuinely non-standard patterns.

## The scar archive

If most of a rule file should be cut, what earns its place? In my own production practice the highest-value part
of any project memory is what I'd call the scar archive: the reasoning behind each locked decision, appended every
time a batch-wide pass finds and fixes a class of bug (`REPORTED`). The industry has a name for the same
instinct — the blameless postmortem — but the soloist version lives where the enterprise one usually doesn't: in
the file the agent is required to read, not a wiki nobody opens. That's why it costs less and lands more often than
an ADR library.

Why it matters is specific to how agents fail. A spec records *what* was decided; strip the *why* and the next
agent — or you, six months later — reads the constraint as arbitrary and optimises it away, reintroducing a bug
already paid for. One deliberately generic example from that corpus: a resource-lifecycle bug got a first fix at
what looked like the right boundary; it came back; the second fix found the *actual* boundary — the resource had
to be created exactly once in wall-clock time, not merely handled consistently — and both layers were kept, with a
note that read, in effect, "if the first fix didn't hold, this is why." Two commits, one scar, and the next agent
to touch that path inherits the reasoning instead of re-deriving it. Around it sit the cheap habits: a "what NOT to
revisit without a hard reason" list, and a per-iteration record of the failure that forced each change.

:::tip[▶ Video]

<YouTube id="vD0E3EUb8-8" title="Context Engineering vs. Prompt Engineering: Smarter AI with RAG & Agents" />

IBM's framing of context engineering — deciding what the model should and shouldn't see, not just how to word the
prompt — is the discipline this lesson turns on a spec corpus: the memory's problem is not what it holds but how
much of it is loaded at once.

:::

## Tier the knowledge, don't produce more of it

The problem underneath all of this has no name. Amnesia, the per-turn tax, over-compliance, drowning in documents
— twenty months into the spec-driven era, the failure they add up to still has no agreed term. "Context rot"
earned a name and a literature inside a year; artifact overload gets called agent "dementia" and "write-only
memory" (Yegge), or too many markdown files (Böckeler), or just a line count (Eberhardt). An unnamed problem is
unclaimed territory.

The answer isn't more memory; it's memory organised by how close the knowledge sits to the task in hand. That
discipline has a name — **context engineering** — and Anthropic's engineers have written it up (`REPORTED`,
vendor): give the model exactly the context it needs and no more, because attention degrades as the window fills.
The machinery ships already — load an artifact's name and description up front, page in its full body only when
triggered: progressive disclosure, or plainly, detail on demand. The field's single hard measurement points the
same way: ETH's prescription from those cost numbers is parsimony — omit LLM-generated context files, keep only
the non-inferable human notes. Reading parsimony and tiering as the same instinct — spend context only where the
model can't infer it, with "name and ID only" as the limit case of leaving it out — is our argument, not ETH's
finding, and it deserves the label: ETH measured that trimming the corpus helps; it never prescribed a ladder.

The ladder got built many times over, by parties who didn't know about each other. In my own orchestration corpus,
project knowledge splits into tiers by rate of change — a reusable type spec, a batch roster, the item — because
"keeping the DNA [in the type] and the roster in the batch is what lets this scale to hundreds without forking a
thousand-line spec" (`REPORTED`). A short prefix of about a dozen non-negotiables — the hot set — is the part you
can always afford in context; the rest is a cold set pulled on demand. Anthropic's Agent Skills tier the same way
for capabilities: activation, reference, deep dive. And an unimplemented manifesto, DefinitiveSpec, describes a
level-of-detail ladder — map (name and ID only), contract (signatures), blueprint (full logic) — with a token
budget that demotes everything off-focus once a session gets expensive. Cite that last one only as a specimen,
never as evidence: four GitHub stars, no implementation, self-promoted by its own author. But note the coincidence
worth teaching: Anthropic's activation-reference-deep-dive and DefinitiveSpec's map-contract-blueprint are the
same three-level ladder, invented independently — one for capabilities, one for specs, neither aware of the other.
When two unconnected parties derive the same three tiers, the tiers are probably real.

And here is the gap the course names. Context engineering solved the *retrieval* half — for an agent's working
memory. Spec-driven development built the *production* half — and never asked what happens to the output as it
piles up. Nobody has carried the first across to the second: no tiered, budgeted, lifecycle-managed discipline for
a spec or rule corpus has been specified, shipped, and shown to work. Anthropic's canonical context-engineering
writeup doesn't mention specs once. Filling the gap needs four things the mainstream tools don't supply: a way to
tier a corpus (which spec is architectural, which is detail), a budget (how much spec per unit of code), a
retirement policy (when a spec stops being authoritative), and staleness detection (something that actually fails
when a spec goes wrong). Naming those four is the shape of the contribution; the rest of Part I is about filling
them.

## Why we might be wrong

The honest move is to admit how thin the ground under "tiering saved it" is. It is `REPORTED`, single-source, and
mine. The convergence of several parties on the same lever raises confidence that the *lever* is right, not that
the *mechanism* is validated — nobody, us included, has better than a self-report that it works. And that
self-report comes from exactly the population METR caught misjudging its own AI-era productivity by around forty
points, in the wrong direction, with high confidence (Lesson 1). Our "it works" carries that bias, and a course
that spent Lesson 2 teaching you to grade claims would be a fraud if it exempted its own. There's also a reading of
ETH that cuts against us: if generated artifacts hurt, maybe the corpus shouldn't exist, and tiering is just
tidying a mess we made — which is why the parsimony framing matters, and why we don't claim tiering is *proven*.
Last, the oldest warning here isn't about AI. The one large empirical study of model-driven engineering
(Hutchinson et al., 2014) found success turned on *organisational* factors, not technical ones, and DORA later
rediscovered the same law for AI: it amplifies what a team already is; it doesn't fix it. Tiering is a technical
answer. It works exactly to the extent that someone owns it — and no tool can supply that owner.

## The three tiers — soloist · small-team · enterprise

The invariant holds at every scale: **memory must be tiered by relevance, or it taxes every turn.** What changes is
who owns the boundary and how it's proven.

- **Soloist.** A lean CLAUDE.md — a one-screen hot set of non-negotiables — plus a scar archive kept as a plain
  markdown file for the cold set. *The failure it prevents:* the over-20%-per-turn tax and the "drown within days"
  overload, and the quieter one where the agent loses the actual requirement inside your own instructions.

- **Small-team.** Shared, reviewed rules with an explicit tier boundary — what belongs in the reusable type spec
  versus the per-batch roster — and one owner for the hot set. *The failure it prevents:* every batch forking the
  whole spec and the forks quietly diverging.

- **Enterprise.** An ADR library plus an owned, versioned knowledge base carrying retrieval metadata — per-file
  scope, a "load when" trigger, a hot/cold tier. *The failure it prevents:* an unowned, self-contradicting corpus
  with no staleness mechanism — the drift Lesson 5 takes up. The recurring lens applies: the ADR library is mostly
  *proof*, an auditable record for later, while the soloist's hot set is *capability*, because it changes what the
  agent can afford to load right now.

## What to take away

- Agents keep nothing between runs but the files on disk, so anything that must survive has to be pinned or
  re-injected. Compaction will silently drop a rule and the model will look like it disobeyed — `0%` violations
  with the policy visible, up to `59%` once it's summarised away.
- A standing context file is billed every turn, not stored: ETH measured over `20%` more cost per turn, driven by
  over-compliance. Length is a subscription; the file has to earn it.
- Don't let an agent write its own rules. LLM-generated context files were the one condition measured net-negative
  (`−0.5%` / `−2%`); human-written ones helped (`+4%`) because they carry what the agent can't infer.
- The scar archive — the reasoning behind each locked decision — is the highest-value memory you keep: it stops the
  next agent re-litigating a tradeoff you already paid for.
- The fix for overload is tiering, not more documents: a hot set that's always loaded, a cold set pulled on demand.
  The mechanism is borrowed openly from context engineering; carrying it to a spec or rule corpus is the gap this
  course names, and our own evidence for it is a single graded self-report, not proof.

**New terms:** project memory (durable, agent-readable knowledge that persists across runs); amnesia (agents keep
nothing between sessions but the files on disk); context tax (the measured &gt;20%-per-turn cost of standing
context — every line re-sent and billed each turn); over-compliance (the measured way extra artifacts hurt —
agents follow instructions thoroughly but unnecessarily); scar archive (the reasoning behind each locked decision,
appended after every fixed bug class — a blameless postmortem kept where the agent will read it); knowledge tiering
(organising memory by rate-of-change or distance-from-focus so only the relevant tier loads); LOD ladder
(three-level map / contract / blueprint tiering by an artifact's relation to the task, mirrored by Anthropic
Skills' activation / reference / deep dive); hot set / cold set (the always-loaded one-screen non-negotiables
versus the on-demand detail); progressive disclosure (loading only a name and description until the body is
needed); artifact overload (spec-driven work's central unsolved failure — artifacts generated faster than review
or context can absorb, with no lifecycle discipline).
