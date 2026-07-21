---
slug: building-a-course-by-doing-it
title: "I built a course about AI-assisted development by doing it"
authors: [nikolai]
tags: [making-of, ai-sdlc, verification]
date: 2026-07-20
---

The most instructive mistake in this project so far was a wrong citation — and I didn't write it.

I don't do much of the line-level work on this handbook anymore. I direct a set of agents: I ask one to build
a skill, another to draft a lesson, another to add the right IBM video, another to translate. Somewhere in that
pipeline, an agent writing a brief for the others put down the wrong paper as the source for a claim. A
different agent, whose whole job at that step was to check each source against the claim it supported, caught
the mismatch and swapped in the correct one. I found out by reading the report afterward.

{/* truncate */}

That's a small thing, but it's the whole project in miniature. I'm building a course about doing software
development with AI agents, and I'm building it the way it describes. What that actually feels like, day to day,
is not what I expected.

## Generating is the cheap part

I can get a lot of plausible output, fast. Ask for a lesson draft, a translation, a set of citations, a patch —
it arrives in minutes, and running agents in parallel multiplies it. None of that volume tells me whether any of
it is right.

That's the part that costs. Every generated thing still has to be checked by someone, and for most of it that
someone is me. Does this source actually support this exact sentence? Is it a primary source or a summary of
one? Did the translation keep the claim as strong as the original, or quietly soften it? Did fixing one language
break another? More output just means more of these questions waiting in line.

I spend most of my time in that queue, not in generation. It's also the argument the course opens with:
[the real bottleneck in agent-built software is verification, not generation](/ai-sdlc/part-1-foundation/verification-bottleneck).
I didn't set out to prove it on myself. The project did that on its own.

Some of the judgment calls have been genuinely interesting. I spent real time working out which model to trust
for translation, and the most fluent one wasn't the most faithful — the smoothest Russian sometimes drifted
furthest from the meaning. I found that authoring a lesson natively in each language beat translating one
version into the others. I check every video before I embed it, because an ID recalled from memory points at the
wrong thing often enough to matter. None of that is generation. It's deciding what's good enough to carry my
name.

## What the agents don't do

The agent that caught my pipeline's bad citation is not a magic reviewer. It makes its own mistakes. Another
agent might have missed the same mismatch; a person skimming an abstract might have waved it through. Checking
layers help for a boring reason: their blind spots don't line up with the generator's, or with each other's.
Stack a few and more gets caught. Nobody in the stack is infallible, me included.

And someone still makes the last call. A build can confirm that a link resolves; it can't decide whether a
source really supports the reading I gave it. An agent can compare a sentence to a paper; it can't decide
whether the claim belongs in the course at all. That part doesn't delegate. It's the job.

So the honest version of "I built this with the process it teaches" isn't a clean demo where everything works.
It's this: inside a pipeline I designed and direct, something persuasive and wrong got made, and it stayed out
of the course only because checking was a separate step with
[the standing to stop it](/ai-sdlc/part-1-foundation/rules-that-hold). That's not a footnote to the thesis. It's
the thesis.
