---
slug: building-a-course-by-doing-it
title: "I built a course about AI-assisted development by doing it"
authors: [nikolai]
tags: [making-of, ai-sdlc, verification]
date: 2026-07-20
---

I gave a background agent a bad citation. More precisely, the bad citation came from my own briefing
document: I had listed an arXiv paper as a candidate source for a claim, but it was the wrong paper. The agent
checked the source against the claim and rejected it. This is mildly embarrassing, given that I wrote a course
arguing that verification is the binding constraint in AI-assisted development. It is also a useful scar. I
generated the error, and it stayed out of the release only because checking existed as a separate step that could
not be quietly skipped.

{/* truncate */}

The mistake happened during a citation pass over Part I of the AI-SDLC course. The pass covered five lessons in
three languages: English, Russian, and Slovak (`REPORTED`). Its purpose was to replace weak or indirect support
with links to real primary sources.

I delegated the work to background agents, each briefed and reviewed, isolated in its own git worktree, gated by
CI. I started with one pilot agent, adjusted the approach based on that result, and then ran four more agents in
parallel (`REPORTED`). One of those agents received the bad citation candidate from my brief and caught it
during verification (`REPORTED`).

That sequence matters more than the fact that an agent found a mistake. I had already done the supposedly
careful part. I knew the subject, understood the claim, and was explicitly preparing instructions for source
verification. I still placed an unsuitable paper in the brief. Knowing the material did not make my own
output reliable.

## Cheap output, expensive confidence

Generating work that looks right has become cheap. I can ask an agent to draft a lesson, translate it, propose
citations, edit links, or prepare a patch, and receive useful output quickly. Running agents in parallel pushes that
volume higher. None of this tells me whether the resulting work deserves to merge.

Unchecked generation creates a backlog, not throughput. Every generated change still has to be checked by
someone. Does the source actually support that exact sentence? Is it a primary source? Did the translation keep the
claim as strong as the original? Did fixing one locale quietly break another? And does the site still build? More output simply means
more material waiting to be checked.

This is the argument developed in [the verification
bottleneck](/ai-sdlc/part-1-foundation/verification-bottleneck). The evidence reviewed there has an
uncomfortable shape: adoption of coding agents increases merged-PR throughput, while measured code quality and
comprehension decline, and developers do not reliably assess the effect on their own work (`MEASURED`). The
lesson holds the studies and the citations; I am not going to reproduce their numbers here.

The practical bottleneck is verification and review capacity. Model capability matters, but raw output is
already easy to obtain. The slow part is establishing that the output is actually good enough to use. That
work is less visible than generation. It means reading sources, examining diffs, running checks, and deciding
what a passing result actually proves.

My citation error is a small example, but it shows exactly where the boundary is. The agent did not save the work
because it generated better prose. It helped because the process required a different operation after
generation: compare the proposed citation against the actual paper, and reject the match if the claim was
unsupported. Had verification stayed an instruction buried inside the drafting task, the citation that looked fine
might have survived. A rule that can be bypassed is only a request; [rules that
hold](/ai-sdlc/part-1-foundation/rules-that-hold) have to be carried by the workflow, not by good intentions.

## What I am not claiming

This does not make AI agents magical reviewers. The agent that caught my mistake can produce mistakes of its
own. Another agent might miss the same mismatch, and a human reviewer might accept a source after reading only
the abstract. Verification layers help because their failure modes differ from the generator's and from each
other's. They do not hand you infallibility.

A human still has to make the final call. A build can verify syntax and links, but it cannot settle whether a
citation supports the intended reading. An agent can compare a sentence against a paper, but I still have to
decide whether the claim belongs in the course and whether the evidence is strong enough. Some of this can be
automated. The rest needs judgment, and someone accountable for the result.

So the useful lesson from this session is structural. I should assume that any generator, myself included, will
occasionally produce something persuasive and wrong. The workflow has to reserve enough capacity to inspect that
output, and the checking step has to have the standing to stop it.

This handbook is being built with the lifecycle it teaches. That does not mean the process runs cleanly or
proves itself by succeeding. In this case the most faithful demonstration was my own bad citation reaching a
verification boundary and going no further.
