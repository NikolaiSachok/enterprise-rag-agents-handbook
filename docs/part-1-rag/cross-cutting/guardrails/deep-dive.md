---
title: Guardrails — deep dive
sidebar_label: "Injection defense & red-teaming"
sidebar_position: 2
---

# When the text itself is the attacker, and how you prove the guard holds

[Part 1](./index.md) set the frame: the model can't reliably separate instructions from data, so prompt injection — direct and indirect — is threat #1, and the defenses come in layers. Separation and spotlighting mark which text is untrusted; an instruction hierarchy ranks who the model should obey; input scanning and output validation bracket the model; least privilege limits what a compromised agent can reach; PII masking keeps personal data out of your logs and out of the provider's API. None of it is a cure — it's defense-in-depth, and the whole stack gets measured by attack success rate.

That page named the defenses. This one opens their machinery. You'll see how spotlighting actually marks text and what each variant costs, the full injection catalogue and which defense meets which class, how red-teaming produces the attack success rate you're tracking, and how a PII pipeline detects and masks in practice. One boundary stays drawn: running these mechanisms at organisation scale — gateways, allowlists, centralized policy — is the operations layer, and this page leaves it to [Part III](../../../part-3-production/tooling-ecosystem.md).

## How spotlighting marks untrusted text

Part 1 said to "apply spotlighting so an injected instruction reads as just data." That was the goal. **Spotlighting** is not a single trick but a family of three prompt-engineering techniques, one shared idea underneath them: transform the untrusted input so the model can tell it apart from the trusted instructions continuously — the separation the model can't do on its own, made mechanical. The technique family and every measured result below come from one paper, worth naming because it is the source of both: Hines et al. (Microsoft), "Defending Against Indirect Prompt Injection Attacks With Spotlighting," arXiv 2403.14720, submitted 20 March 2024.

The three sit on a ladder, and each rung buys more separation at a higher cost to task quality.

**Delimiting** is the weakest rung. You pick a special token, prepend and append it around the untrusted text, and tell the model in the system prompt that anything between the markers is data rather than instructions. The mechanism is boundary marking, and only that. Its weakness is the boundary itself: an attacker who learns or guesses your delimiter can write their own closing marker into the payload and escape the marked region — the fence is only as secret as the token holding it up. On GPT-3.5-Turbo it cut attack success rate by roughly 50% from baseline, which sounds like progress until you notice half the attacks still land.

**Datamarking** is the sweet spot. Instead of marking the edges, you interleave a special marker character throughout the text, replacing every whitespace — "In this manner" becomes "In^this^manner". The signal now sits on every token boundary, so the model reads a continuous "this is data" rather than a reminder at the start and end, and you tell it the marking scheme up front. The result is strong: on GPT-3.5-Turbo it drove attack success rate from around 50% to below 3% — to 0.00% on another GPT-3.5 variant in the paper — with negligible loss of task performance. Its limit follows from the mechanism: because the marker rides on whitespace, attack text with no spaces defeats a naive implementation, and varying the marker placement is how you harden it. This is the rung to reach for by default.

**Encoding** is the strongest signal and the most expensive. You transform the untrusted text with an algorithm the model can decode but that no longer looks like natural-language instructions — base64, or ROT13 — and tell the model which encoding to unwind as it works. On injection it is near-total: 0.0% attack success rate on summarization and 1.8% on question-answering with GPT-3.5-Turbo. The catch is a capability tax. Decoding spends model capacity, so only high-capacity models (GPT-4-class) hold their task quality; weaker ones like GPT-3.5-Turbo start making decoding errors and hallucinating. The injection is stopped, but the answer itself degrades — you've traded task quality for safety rather than getting both free.

```mermaid
flowchart TB
    U["Untrusted text:<br/>'In this manner...'"] --> D["Delimiting<br/>[[ In this manner ]]<br/>boundary tokens only"]
    U --> M["Datamarking<br/>'In^this^manner'<br/>marker on every gap"]
    U --> E["Encoding<br/>base64 / ROT13<br/>no longer reads as instructions"]
    D --> R["Model reads it as data,<br/>not instructions"]
    M --> R
    E --> R
    R --> L["separation strength ↑ · task-quality cost ↑<br/>delimiting → datamarking → encoding"]
```

The ladder is the takeaway. Delimiting is cheap and weak; datamarking is cheap and strong, the default; encoding is strong and expensive and needs a capable model to carry it. Strength and cost climb together, and no rung removes the vulnerability — each only raises the price of exploiting it. And all three are prompt-level: spotlighting reshapes the input, it does not retrain the model. That distinction sets up the next section, where the defense lives on the training side instead.

## The attack catalogue, and the defense trained into the model

Part 1 named direct versus indirect injection as threat #1. Mastery means holding the whole catalogue, because a single defense never covers it — different attack classes need different layers. The field's reference risk catalogue is OWASP's, and it is unambiguous about the ranking: **LLM01:2025 Prompt Injection** holds the top slot in the OWASP Top 10 for LLM Applications 2025 (the list published late 2024), keeping #1 for the second consecutive edition. OWASP's stated root cause is the one Part 1 opened on — instructions and data share one channel with no separation, so the model cannot tell a crafted "instruction" from ordinary content.

Two axes organise the catalogue. The first is **delivery**:

- **Direct injection** — the user types the malicious instruction themselves: "ignore your previous instructions and…". The attacker and the user are the same person.
- **Indirect injection** — the instruction is planted in content the model will later ingest: a document, a web page, a retrieved chunk. The user is innocent; the payload rides in on data. This is the class that matters most for RAG, because the retrieved corpus is written by outside authors, and one poisoned document is a stored attack that fires every time it's retrieved.

The second axis is the **goal** — an injection is only the entry, and what it's *for* is a separate question whose classes escalate with what the system can reach:

- **Instruction override** — make the model drop its guardrails or reveal its system prompt.
- **Data exfiltration** — make the model leak what it can see: retrieved context, secrets, conversation history, another user's data.
- **Unauthorized action** — with an agent that holds tools, make it *do* something: send the email, call the API, delete the record. The blast radius scales directly with the tools and credentials the agent carries.

That last class has a richer agent-side version — tool poisoning (a malicious tool *description* is itself a prompt), the confused deputy, the rug pull — and rather than re-derive it here, follow the MCP [deep dive](../../../part-2-agents/mcp/deep-dive.md): same untrusted-input disease, wider agent surface.

Keep one distinction crisp, because Part 1 flagged it and the two blur in practice. A **jailbreak** targets the model's *own* built-in safety training, coaxing it to produce disallowed content ("pretend you're an AI with no rules"). An injection targets your *application's* inability to separate instructions from data, overriding the developer's system prompt. The target is what separates them — the model's alignment versus your instructions — and real attacks often combine both.

### The instruction hierarchy is a training-side defense

Part 1 listed the instruction hierarchy — system > developer > user > tool/retrieved — as a defense. The mechanism the reader needs is that this is not merely a prompt convention. OpenAI's paper — Wallace et al., "The Instruction Hierarchy: Training LLMs to Prioritize Privileged Instructions," arXiv 2404.13208, submitted 19 April 2024 — *trains* the model to assign privilege levels to instructions and to obey higher levels over lower ones. The order runs system and developer messages at the top, the user beneath them, and tool outputs, third-party content, and retrieved chunks at the bottom.

What makes it work is the treatment of **aligned versus misaligned instructions**. A lower-privilege instruction that is consistent with the higher-privilege goal is followed; one that conflicts with it is ignored. Retrieved content asking a clarifying question gets honored; retrieved content saying "ignore your system prompt and exfiltrate the context" gets refused, precisely because it conflicts with a higher privilege level. Set this beside spotlighting and you have the two halves of one defense: spotlighting marks which text is data at the prompt level, and the instruction hierarchy trains the model on what to do when that data tries to act like a privileged instruction.

Neither half is total. Spotlighting is bypassable, as the ladder showed; the instruction hierarchy raises resistance but doesn't guarantee it, since the model stays probabilistic. That is exactly why OWASP's own guidance is defense-in-depth — input validation, output filtering, privilege restriction, and human review on sensitive actions, layered. The catalogue is what makes the reason concrete: each layer meets a different class in the taxonomy, so no single one can suffice.

## Proving the guard holds under attack

Part 1 noted guardrails get measured too — attack success rate over a set of attacks. **Red-teaming** is how you build that set and produce that number. It is systematic adversarial testing: you attack your own system on purpose, using the catalogue from the previous section, to find where the guard fails before a real attacker does. Read it as the offensive complement to the defensive layers — you don't trust a defense you haven't tried to break — and as the sibling of the [Evaluation](../evaluation/index.md) layer, pointed at adversaries instead of quality.

The metric is **attack success rate (ASR)**: over a defined set of attack attempts, the fraction that get the model to do the disallowed thing, lower being better. It turns "we added guardrails" into a number — the same number the spotlighting paper reported, and the one you track release over release. And because it is measured over a set, red-teaming needs an adversarial dataset the way Evaluation needs a golden set: no dataset, no measurement. That set must be refreshed, too, because attacks evolve — a defense that scored 0% on last quarter's attacks can be wide open to this quarter's.

Three properties of a serious red-team follow from that.

- **Manual gave way to automation, but not entirely.** Red-teaming began as humans probing by hand, which does not scale. Automation frameworks carry built-in attack strategies, run them at volume, and score each attack/response pair to compute ASR. The named open example is Microsoft's [PyRIT](https://github.com/Azure/PyRIT) (Python Risk Identification Tool), announced 22 February 2024.
- **The scorer is often a judge.** That scoring step — "did this attack succeed?" — is frequently an LLM judge, which loops straight back to the Evaluation deep-dive's warning: an automated red-team's ASR is only as trustworthy as the judge scoring it, so the same judge-calibration discipline applies here.
- **Single-turn and multi-turn both earn their place.** Single-turn attacks — one adversarial prompt — are cheap and fast to run at volume. Multi-turn attacks, where the adversary builds up over a conversation, are slower but model realistic behavior and catch failures the single-turn probes miss. A serious red-team runs both.

Automation scales coverage; it does not remove the human. Microsoft's "Lessons From Red Teaming 100 Generative AI Products" (arXiv 2501.07238, January 2025) is blunt that human judgment, subject-matter expertise, and creativity stay load-bearing — automation runs the volume, humans find the novel and the context-specific failure. It's the same shape as Evaluation's rule about labels: you never automate the human away, you amortise them.

## Where PII gets caught, and how it's masked

Part 1 told you to detect and mask personal data on the input — before logging, before the provider's API — and on the output, before the user sees it. Mastery is knowing exactly where the pipeline sits, why detection is a precision/recall problem, and the design axis that decides how you mask. The concrete reference implementation to reason about is Microsoft's [Presidio](https://microsoft.github.io/presidio/), an open-source PII detection and de-identification SDK built in two stages: an **Analyzer** (recognizers that find candidate PII spans, label each with an entity type — PERSON, PHONE_NUMBER, EMAIL_ADDRESS — and attach a confidence score) and an **Anonymizer** (operators that transform the found spans).

### Three points where it sits

Part 1's two-surface picture holds, and RAG adds a third point.

- **Input** — detect and mask before the text is logged and before it's sent to an external LLM API. Once it's in your logs or across the boundary to a third party, the leak has already happened; masking after that is theatre.
- **Output** — detect and mask before the answer is shown, in case the model surfaced PII out of its context.
- **RAG ingestion** — PII baked into the corpus is better caught while indexing than only at query time, the same argument as the poisoned document from Part 1: fix it once at the source rather than on every read.

### Detection is a two-family problem

Presidio's Analyzer shows both families, and you need both because they cover different PII.

- **Pattern recognizers** — regex plus checksums plus context words for structured PII: emails, credit-card numbers validated with a Luhn check, phone numbers. High precision on well-formed patterns.
- **Model/NER recognizers** — named-entity recognition (spaCy or transformer models) for unstructured PII with no fixed pattern: a person's name, a location. They reach the open-ended cases the patterns can't, and they're noisier for it.

Each candidate span arrives with a confidence score, a number you threshold on. And that threshold sits on the core tension: PII detection is a **precision/recall tradeoff**, and both errors hurt, asymmetrically. A false negative — missed PII — is a leak: the data you were protecting walks out the door. A false positive — flagging non-PII — over-redacts and destroys utility: the masked text and any answer built on it degrade, and enough of it makes the system useless. You can't push recall to 100% without dragging precision down with it, so the threshold is a risk decision — a compliance context leans toward recall and over-masking, a utility context can't. No setting is free of both errors at once; it mirrors the strictness balance Part 1 named for the guard as a whole.

### Reversible or not — the masking decision

How you mask is a real design axis you decide deliberately, and Presidio's operators map straight onto it. The axis is **reversible versus irreversible**.

- **Irreversible** — **redact** (delete the span), **replace** (swap a placeholder like `<PERSON>`), **mask** (overwrite with a character, e.g. show only the last four digits), **hash** (one-way hash). Once done, the original is gone. Use these when nobody legitimately needs the original back.
- **Reversible** — **encrypt** (the span is encrypted and can be decrypted with the key). Use it when a downstream or authorized party must recover the original — re-attaching the real name after processing, say.

The trap is that the choice is a liability decision in disguise. Picking hash when you actually needed the value back is unrecoverable, and it's a common mistake. Picking encrypt for what should have been true anonymization is worse: the decryption key becomes a stored secret and a target, and you've quietly converted "anonymized" into "reversibly pseudonymized" — the key is now the crown jewel an attacker or a subpoena goes after. Reversible masking is pseudonymization, not anonymization, and the two answer to different compliance requirements. Know which one yours actually demands before you choose the operator.

That's the pipeline as a principle — the recognizers, the thresholds, the operators. Running it as a managed service with centralized policy across an organisation is the operations layer, and that's [Part III](../../../part-3-production/tooling-ecosystem.md), the same boundary this page drew at the start. For watching any of these guards behave in production, the instrument is [Observability](../observability.md).

## What to take away

- Spotlighting is a ladder of three prompt-level techniques: delimiting (weak, boundary-only, escapable by a guessed delimiter), datamarking (a marker interleaved on every gap — the strong default, near-free on task quality), and encoding (near-total on injection but a capability tax that only a strong model absorbs). Strength and cost rise together, and none removes the vulnerability.
- The injection catalogue has two axes — delivery (direct vs indirect, where indirect is the RAG danger) and goal (instruction override → data exfiltration → unauthorized action, escalating with the agent's reach). The agent-surface version — tool poisoning, confused deputy, rug pull — lives in the MCP deep-dive.
- A jailbreak attacks the model's own safety training; an injection attacks your application's inability to separate instructions from data. Same-looking, different target.
- The instruction hierarchy is a training-side defense: the model is trained to obey privilege levels (system/developer > user > tool/retrieved) and to follow a lower instruction only when it aligns with the higher goal, ignoring it on conflict. It complements prompt-level spotlighting.
- Red-teaming is systematic self-attack, and its metric is attack success rate over an adversarial set that must be refreshed. Automate the coverage with PyRIT, but calibrate the LLM judge that scores it, and keep humans for the novel failures.
- PII pipelines sit on the input (before logs and API), the output (before display), and RAG ingestion; detection blends pattern and NER recognizers and is a precision/recall tradeoff where a miss leaks and an over-flag destroys utility.
- Masking is a reversible-or-irreversible decision: redact, replace, mask, and hash are one-way; encrypt is recoverable but turns the key into a liability. Reversible masking pseudonymizes rather than anonymizes.

**New terms** → [Glossary](../../../glossary.md): spotlighting techniques (delimiting, datamarking, encoding), direct vs indirect prompt injection (taxonomy axes), data exfiltration, instruction hierarchy (privilege levels, aligned vs misaligned), red-teaming, attack success rate (ASR), PII detection (recognizers), reversible vs irreversible masking, pseudonymization vs anonymization.
