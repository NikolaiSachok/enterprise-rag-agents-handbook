---
id: overview
title: Časť I — RAG
sidebar_label: Prehľad časti
---

# Časť I — RAG

RAG (retrieval-augmented generation) je spôsob, ako prinútiť LLM odpovedať podľa **tvojich** dokumentov, a nie
podľa toho, čo má zapamätané z tréningu. Pred generovaním systém nájde relevantné kúsky tvojich dát a vloží ich
modelu do kontextu. Časť I rozoberá túto cestu ako **statický pipeline**: pevnú postupnosť krokov, rovnakú pre
každý dopyt.

Celou časťou prechádza jedno diagnostické pravidlo: rozdeliť zlyhanie podľa toho, kde vzniklo. Zlá odpoveď býva
dvoch druhov — **zlyhanie vyhľadávania** (potrebný kúsok sa vôbec nedostal do výsledkov) alebo **zlyhanie
generovania** (kúsok sa našiel, no model ho obišiel alebo prekrútil). Takmer každé rozhodnutie v pipeline
rieši jednu z týchto dvoch porúch a prvým krokom je vždy zistiť, ktorá z nich stojí pred tebou.

## Čo je vnútri

- **[Ingestion](./ingestion/index.md)** — offline príprava dokumentov: chunking a embeddingy, metadáta. Práve
  tu sa určuje strop kvality celého vyhľadávania.
- **[Retrieval](./retrieval/index.md)** — ako z „najbližších vektorov“ spraviť naozaj relevantnú výsledkovú
  množinu: transformácia dopytu, hybridné vyhľadávanie, reranking, filtre a riadenie prístupu.
- **[Generation](./generation/index.md)** — ako oprieť odpoveď o nájdený kontext: grounding, citácie, čestné
  odmietnutie namiesto vymýšľania.
- **Prierezové aspekty** — to, čo sa nedá zúžiť na jediný krok: [eval](./cross-cutting/evaluation/index.md)
  (vedieť, že systém funguje), [guardrails](./cross-cutting/guardrails/index.md) (udržať ho v bezpečných
  medziach), [observability](./cross-cutting/observability/index.md) (vidieť, čo robí v produkcii).

## Predpoklady

Základné oboznámenie s LLM: čo je prompt, kontext a embedding na úrovni myšlienky. Hlbšiu matematiku netreba —
vysvetľujeme od prvých princípov.

:::note[Stav]

Základ Časti I je hotový — publikované sú všetky lekcie: Ingestion, Retrieval, Generation a prierezové aspekty
(eval, guardrails, observability). 🚧 Ešte je pred nami druhý prechod — prehĺbenie každej vrstvy; témy žijú
v poznámkach „Ďalej — druhá časť lekcie“ na stránkach lekcií.

:::
