---
id: overview
title: Časť III — Production a LLMOps
sidebar_label: Prehľad časti
---

# Časť III — Production a LLMOps

V Častiach I a II sme poskladali samotný systém: statický RAG pipeline a agentov nad ním. Časť III je o tom,
**ako to naozaj dostaneš do produkcie**: serving, cloudové platformy, ekosystém nástrojov a prevádzka. Je to
aplikačná vrstva, ktorú trh práce pomenúva podľa nástrojov — presne tá, čo oddeľuje „u mňa na notebooku to
funguje“ od „funguje pod záťažou, s observability a v rámci rozpočtu“.

## Čo je vnútri

- **[Serving — FastAPI + Docker](./serving/index.md)** — ako zabaliť model alebo agenta do služby: API,
  streaming, kontajner, inferenčné servery.
- **[Cloudové AI platformy](./cloud-platforms/index.md)** — [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-services/openai-service),
  [Amazon Bedrock](https://aws.amazon.com/bedrock/), Google Cloud Gemini Enterprise Agent Platform (predtým
  [Vertex AI](https://cloud.google.com/vertex-ai)): čo ponúkajú a čím sa líšia.
- **[Ekosystém nástrojov](./tooling-ecosystem/index.md)** — eval, guardrails, observability v produkcii: čo
  merať, čo strážiť, čo vidieť.
- **[LLMOps — nasadenie, monitoring, náklady](./llmops/index.md)** — život LLM-systému po vydaní.

## Predpoklady

Potrebuješ celé Časti I a II: serving a prevádzka predpokladajú, že samotného RAG-agenta už máš zostaveného
a rozumieš, ako je postavený.

:::note[Stav]

Časť III je hotová — publikované sú všetky lekcie a každá teraz má svoju prehĺbenú druhú časť: serving,
cloudové AI platformy, ekosystém nástrojov a LLMOps. K prehĺbeniu sa dostaneš cez poznámku „Ďalej — druhá
časť lekcie“ na stránke ktorejkoľvek lekcie.

:::
