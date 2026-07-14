---
title: "Observability"
slug: /part-1-rag/cross-cutting/observability/
---

# Vidieť, čo systém v produkcii naozaj robí

Evaluácia ti povie, či je systém dobrý — offline, na dátovej sade; guardrails (bezpečnostné mantinely) ho držia v bezpečí. **Observability** (pozorovateľnosť) je tretia vec: vidieť, čo systém v produkcii naozaj robí, na živej prevádzke.

Bez nej sú problémy v produkcii neviditeľné. Nevieš, prečo odpoveď vyšla zle, čo sa vytiahlo z úložiska, koľko to stálo ani aké to bolo pomalé.

## Čo je spoločné a čo prináša AI

Tri piliere observability — traces, metrics, logs — ako inžinier už poznáš. Táto lekcia je o rozdiele, ktorý vnáša AI: čo sa mení, keď namiesto obyčajnej služby pozoruješ LLM/RAG systém.

## Prečo sa LLM systém pozoruje ťažšie

Nedeterminizmus plus čierna skrinka. Zlú produkčnú odpoveď nezreprodukuješ bez úplného záznamu: dopyt (už po transformácii), ktoré chunky (úseky textu) sa vrátili a s akým skóre, aký prompt šiel do modelu, čo model vrátil, ktoré nástroje agent zavolal. Obyčajný softvér je deterministický — má stack trace. LLM aplikácia potrebuje záznam celého reťazca úvah.

## Trace celej pipeline — základný stavebný prvok

**Trace** (úplný záznam jednej požiadavky) sleduje jednu požiadavku krok za krokom, ako prešla celou pipeline: dopyt → transformovaný dopyt → chunky (+ skóre) → rerank (preusporiadanie) → prompt, ktorý sa odoslal → výstup modelu → (pri agentovi) každý krok a volanie nástroja. Každý krok je span (jeden krok tracu). Trace odpovedá na hlavnú otázku ladenia: „prečo z tohto dopytu vyšla práve táto odpoveď?“

## Čo logovať: špecifiká RAG

- **Nájdené chunky a ich skóre** — ukázal sa medzi nimi ten správny? Priama väzba na hodnotenie vyhľadávania.
- Finálny prompt — čo model naozaj videl.
- Surový výstup modelu plus jeho následné spracovanie.
- Pri agentoch celý trace krokov a volaní nástrojov.
- Na každý krok: latencia, počet tokenov, náklad, verzia modelu.

## Náklad a latencia sú prvoradé

Na rozdiel od bežnej aplikácie každá požiadavka stojí peniaze (tokeny) a volania LLM sú pomalé. Observability musí počítať náklad na požiadavku a latenciu na každý krok — najmä pri generovaní a reranku — aby zachytila drahé a pomalé vzorce a otvorila cestu k optimalizácii: cache, lacnejší model, menej chunkov v prompte.

## Spätná väzba: observability dáva evaluácii nové prípady

Produkčné tracy a spätná väzba používateľov sa stávajú novými prípadmi pre evaluáciu — presne tie ťažké, zlyhávajúce dopyty z reálneho sveta. Zachytíš zlú odpoveď v produkcii → pridáš ju do golden setu (etalónová sada) → poistíš sa proti tomu, aby sa tá regresia vrátila.

Kruh sa uzatvára: evaluácia meria, guardrails chránia, observability vidí a to, čo nájde, posúva späť do evaluácie. Celá prierezová vrstva je jeden kruh.

(Nástroje — [LangSmith](https://www.langchain.com/langsmith), [Langfuse](https://langfuse.com), [Arize Phoenix](https://arize.com/phoenix), [OpenTelemetry](https://opentelemetry.io) — sú samostatná vrstva: pozri lekciu o [ekosystéme nástrojov](../../../part-3-production/tooling-ecosystem/); tu nám ide o princíp.)

## Čím sa uzatvára Časť I

Týmto sa uzatvára viac než lekcia — uzatvára sa Časť I. V rukách máš jej kostru: zlá odpoveď sa rozkladá na zlyhanie vyhľadávania alebo zlyhanie generovania, pipeline sa stavia vrstvu po vrstve — Ingestion (príjem obsahu do indexu), Retrieval (vyhľadávanie), Generation (generovanie) — a prierezové postupy ju udržiavajú merateľnou, bezpečnou a viditeľnou.

V [Časti II](../../../part-2-agents/overview) táto statická pipeline ožíva: model začína rozhodovať o toku riadenia — a všetka disciplína, ktorú si si tu vybudoval, putuje s tebou.

## Čo si odniesť z lekcie

- Observability je vidieť, čo živý LLM systém naozaj robí; potrebuješ ju preto, že systém je nedeterministický a bez úplného záznamu sa zlá odpoveď nedá odladiť.
- Základný stavebný prvok je trace (spany) jednej požiadavky od začiatku do konca: dopyt → vyhľadávanie + skóre → prompt → výstup → kroky agenta.
- Loguj špecifiká RAG: chunky so skóre, finálny prompt, surový výstup, latenciu, tokeny a náklad na každý krok.
- Tri piliere: traces (pre LLM ten kľúčový), metrics (latencia, náklad, kvalita), logs.
- Náklad a latencia sú prvoradé — tokeny sú peniaze a volania sú pomalé.
- Observability dáva evaluácii nové prípady: zlé odpovede z produkcie → nové prípady v golden sete → vývoj riadený evaluáciou.

**Nové pojmy** → [Glosár](../../../glossary.md): observability, trace / span, RAG tracing, cost per request / token accounting, latency (p50 / p95), three pillars (metrics / logs / traces), feedback loop (observability → eval).

---

:::note[Ďalej — druhá časť lekcie]

**[Vzorkovanie, SLO a rozpočty](./deep-dive.md)** — stratégie vzorkovania tracov (na začiatku, na konci či podľa priority) a súkromie v logoch (PII, uchovávanie); dashboardy kvality, prahy alertov a SLO pre LLM systém; priradenie regresie k jej príčine z tracov; účtovanie tokenov na požiadavku s p50/p95 latenciou a rozpočtami nákladov.

Pozri aj: susedné prierezové aspekty [Evaluation](../evaluation/) (tracy z observability sa stávajú novými prípadmi pre evaluáciu) a [Guardrails](../guardrails/); a pre observability bežiacu nepretržite v produkcii [LLMOps](../../../part-3-production/llmops/).

:::
