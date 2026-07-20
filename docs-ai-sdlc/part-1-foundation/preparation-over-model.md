---
title: "Preparation over model"
sidebar_position: 4
---

# The setup beats the model

Two questions dominate most conversations about coding agents: which model, and how to word the prompt.
Both are the wrong lever. The strongest evidence in this lesson points somewhere less obvious: the *scope* you
hand the agent and the *environment* you set up before it writes a line. Get those right and an ordinary model
outperforms a frontier one flailing without them. And there is a second skill
folded inside the first: reading a first-party success number correctly is itself part of preparation, because
the single most encouraging number in this field is also the easiest to copy the wrong way. The grades from
Lesson 2 — `MEASURED`, `REPORTED`, `ASSERTED` — ride along with every number below.

## Setup nearly doubled the agent's success

The best piece of first-party evidence in the whole corpus is not a lab study. It is a blog post by one
engineer. [Stephen Toub of Microsoft](https://devblogs.microsoft.com/dotnet/ten-months-with-cca-in-dotnet-runtime/) published ten months of running an agent — GitHub's Copilot Coding Agent —
against `dotnet/runtime`, a real, large, mission-critical open-source repository: **878 agent pull requests**,
with the merge rates, the revert rates, the review burden, and the failures all included (`MEASURED`,
March 2026). Buried in it is the most portable lesson in this course, and he states it flatly: *"if there's one
lesson from this experience, it's this: preparation matters more than the model."*

The number behind that sentence is startling. Before he set up the agent's environment, its success rate was
**38.1%**. After — a firewall configured, an instructions file written, and the ability to build, run tests,
and download the tools it needed — it was **69%**. His own diagnosis is the whole lesson in one image: *"we'd
added a new dev to the team and told them to fix issues without giving them the ability to build or test or
download any tools they needed."* That single change nearly doubled the success rate. That delta is larger than any
model upgrade or any randomised-trial effect anywhere in the research behind this course — and it costs nothing
but attention. A two-person team can have all of it on day one.

## The number you must not copy

The same post reports something even more inviting, and here it becomes a lesson in reading rather than a lesson
in setup. Of the merged agent PRs, only **0.6% were reverted** — three out of 535 — against **0.8%** for human
PRs over the same period. It is tempting to lift that figure and expect it for your own agents. Doing so is the
dangerous error this lesson exists to prevent.

That `0.6%` is not a property of the agent. It is a property of `dotnet/runtime`'s review gate — and the price
of that gate is visible in the same post. Agent PRs drew **16.5 review comments on average against 12.4** for
human ones, about a third more. Human reviewers committed code *directly into* **52.3% of the agent PRs, versus
10.3%** of human-authored ones — five times the rate. And **32% of agent PRs were killed before they ever
merged** (67.9% merged, against 87.1% for humans). The low revert rate is evidence that the review gate works,
not that the agent's output was good. The quality was purchased with human attention, and this post is honest
enough to let you see the bill.

Toub also refuses the comparison most people would draw. Agent and human PRs, he writes, are *"fundamentally
different populations facing different selection pressures… humans self-select complex, judgment-heavy work
while [the agent] is assigned more bounded tasks."* So do not read `67.9%` against `87.1%` as a like-for-like
scoreboard; the tasks were chosen for the agent. He is candid about the rest of the scope, too: the agent ran
**Linux only**, the post *"does not attempt to comprehensively quantify all downstream quality outcomes"*
beyond reverts, and it *"does not analyze the compute cost."* Copy his setup discipline. Do not copy his revert
rate as an expectation — you would be importing the number without the gate that produced it. This is Lesson 2's
primary-reading discipline turned on a first-party number.

## Start where the scope is knowable

If setup is the biggest lever, the first place to pull it is scope. What I do before handing an agent anything
is refuse to hand it an open-ended goal — I start where the problem is bounded and I already know what "done"
looks like. The idea long predates agents. One practitioner writing a public series on AI-first
development, [Andrey Beloborodov](https://www.threads.com/@andreybwhite), restates it as a principle *"with more than twenty years of history"*: without
a spec, you get nonsense out (`ASSERTED` — his framing, offered as experience, not measurement). A tracker or a
finance tool you can hand over cold; something you have to grow and maintain, you cannot.

The primary evidence points the same way, and independently. Toub reports that the agent *"struggles with
problems that require architectural judgment… choosing the right API shape based on real-world usage patterns,
anticipating ripple effects across platforms"* and *"can be lazy… doing the minimum to satisfy a request"*
(`REPORTED`). Read that against where small teams actually spend their days — architectural work on brownfield
code — and the warning sharpens: agents struggle exactly where the hard work lives. So you bound the work
before you dispatch it. In practice a controllable task is one with declared inputs and outputs, a named
artifact it must produce, and a check that decides whether it passed — and, above all, a human approval gate at
the *requirements* boundary, before anything expensive gets built. The industry name for that last gate is a
requirements sign-off or a stage-gate; it is the one gate you never delegate, because every later artifact
derives from it.

## Architecture first — and an honest story about the loop

The second lever is design. Before code, I write the architecture down and then have it torn apart. The named
form of this is old and well-supported: design-before-code, captured in an **Architecture Decision Record** —
Michael Nygard's 2011 pattern of writing down each decision with its context and consequences so a later reader
(or a later agent) sees *why* a constraint exists and does not quietly optimise it away.

The most honest account of doing this comes, again, from Beloborodov — and it is valuable precisely because it
is the one place a practitioner shows his own method *failing*. His practice: answer the hard design questions
yourself, hand the result to an AI in harsh-critic mode, fix what it finds, hand that to a *second* model to
critique, and loop until you genuinely feel you understand the whole thing. He then set out to build what he
called a classic (a thin chatbot over an API, with some business logic and retrieval over a knowledge base),
plus one ambitious, barely-charted modelling problem layered on top. The outcome, in his telling: **three
iterations before anything coherent came out, even though every model told him the architecture was sound**,
ending at seven layers of memory where he had hoped for one. Asked why not just do it in a single prompt, his
answer is disarming: *"I don't know, but it didn't work for me and I doubt it's possible."*

Grade that carefully. It is a single self-report, unverifiable, and his broader claims — a two-to-tenfold
speedup, the seven layers being "close to the brain" — are `ASSERTED` with no measurement, so we do not carry
them as fact. What the story *does* earn is a teaching point no architecture standard states: even sound-looking
architecture does not guarantee a first try. Every model signing off on the design did not stop it needing three
passes. That is not an argument against designing first — it is the argument for the *loop*. The same shape
shows up in disciplined production practice: name one canonical reference implementation per pattern, because N
agents reading the same prose will produce N divergent structures, and record each rejected design *with the
failure that killed it* so it does not get proposed again.

:::tip[▶ Video]

<YouTube id="CdBtNQZH8a4" title="What are Microservices? — IBM Technology" />

IBM's short explainer on how you decompose a system into services — a concrete example of the design-before-code
decisions this lesson says to make, and write down, before an agent starts building.

:::

## Why "preparation," not "the model"

There is a deeper reason the lever is preparation and not model choice. The scaffolding around an agent — its
rules, its tools, its guardrails — encodes assumptions that go stale. [Anthropic's engineers](https://www.anthropic.com/engineering/harness-design-long-running-apps) put it directly:
*"harnesses encode assumptions that go stale as models improve,"* and *"every component… encodes an assumption
about what the model can't do on its own"* (`REPORTED`). Their worked example: an older model concluded work
prematurely as its context filled, so harnesses added a fix for it; on the next model that behaviour was gone,
and the fix became dead weight — a tax on the stronger model.

That is not just a vendor's anecdote. An independent study held the model constant and varied only the
scaffolding across 35 sequential releases of a coding CLI, and quality still moved (`MEASURED`,
*["Don't Blame the Large Language Model,"](https://arxiv.org/abs/2607.03691)* July 2026): practitioners report regressions after a scaffolding
update and reliably blame the model instead of the scaffold. The consequence for you is that preparation is
never one-time. Every rule and every harness component carries an expiry date and needs a review that asks
whether it still earns its place — which is where Lesson 4 (project memory) and Lesson 5 (rules that hold) pick
up.

## The three tiers — soloist · small-team · enterprise

The invariant holds at every scale: **an agent given unbounded scope produces unbounded risk, and the setup you
hand it is the lever.** What changes with scale is how the setup is owned and proven.

- **Soloist.** The mechanism is a scoping habit, a written architecture doc the agents actually read, and a
  build-and-test the agent can run itself. *The failure it prevents:* the "new dev with no tools" failure — an
  agent flailing because it cannot build or verify its own work, the exact gap between Toub's `38.1%` and his
  `69%`.

- **Small-team.** Add a shared design review before anything is dispatched, and one canonical reference
  implementation to fork from. *The failure it prevents:* several agents reading the same prose brief and
  producing several divergent architectures that then have to be reconciled by hand.

- **Enterprise.** The design review becomes a change-control board and the decision docs become an ADR library;
  architecture owns the cross-cutting decisions while teams own their bounded contexts. *The failure it
  prevents:* unbounded blast radius from unscoped agent work on shared systems. Here the course's recurring lens
  applies: the ADR library is partly about *proof* — an auditable record someone can test long after the
  decision — while the soloist's scoping habit is pure *capability*, changing what the agent can safely do
  today.

## What to take away

- Setup and scope move agent success more than the model does. Toub's environment work moved
  agent success from `38.1%` to `69%`, a bigger delta than any model upgrade in the evidence, and free to a
  small team on day one.
- Read first-party numbers as carefully as vendor ones. `dotnet/runtime`'s `0.6%` revert rate is a property of
  its review gate, not its agent; the price of that gate — 33% more review comments, humans committing into over
  half the agent PRs, a third killed before merge — is printed right beside it.
- Start where the scope is knowable. Agents struggle exactly where architectural judgment is required, so bound
  the task, declare its inputs and outputs, and keep a human approval gate at the requirements boundary.
- Design before code, and expect to loop anyway. Even architecture that every model calls sound can need several
  passes — which is *why* the loop exists, not a reason to skip the design.
- Preparation is not one-time. Harnesses encode assumptions that expire as models improve, so every rule and
  guardrail needs an expiry review.

**[New terms](../glossary.md#preparation-over-model)**: preparation over model, the gate-not-the-agent misread, controllable scope, architecture-first with a loop, harness staleness.
