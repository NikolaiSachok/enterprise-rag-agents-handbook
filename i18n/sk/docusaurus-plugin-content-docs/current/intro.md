---
id: intro
title: Úvod
sidebar_position: 1
slug: /
---

# Enterprise RAG & Agents Handbook

Praktický sprievodca produkčnými systémami RAG (retrieval-augmented generation) a agentmi, postavený na
prvých princípoch: nie „aké nástroje existujú“, ale **prečo** je systém postavený tak, ako je, a kde sa láme.
Materiál je živý — rastie vrstvu po vrstve, ako kurz postupuje.

## Pre koho je táto príručka

Spája naraz tri roly:

- **Učebnica** — pre každého inžiniera, ktorý chce RAG a agentom porozumieť naozaj: s rozborom „prečo“ a
  režimov zlyhania namiesto zoznamu funkcií.
- **Referencia autora** — dlhodobý záznam princípov návrhu a prijatých rozhodnutí.
- **Portfólio** — ukážka zrelej inžinierskej praxe: evaluácia, guardrails, observability, disciplína návrhu.

Predpokladáme skúseného čitateľa: bežné hotové nástroje (vektorové databázy, orchestrátory) nevysvetľujeme od
základov — namiesto toho ukazujeme **AI-deltu**, teda čo sa v skutočnosti zmení, keď ich nasadíš na systém
s LLM.

## Štruktúra

- **Časť I — RAG:** ingestion, retrieval, generation a prierezové aspekty (eval, guardrails, observability)
  statického pipeline.
- **Časť II — Agenti:** agentic RAG, používanie nástrojov, plánovanie a slučky, multiagentové systémy,
  orchestračné frameworky, [MCP](https://modelcontextprotocol.io).
- **Časť III — Production a LLMOps:** serving na [FastAPI](https://fastapi.tiangolo.com) + Docker, cloudové AI
  platformy ([Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-services/openai-service), [Amazon Bedrock](https://aws.amazon.com/bedrock/), Google Cloud Gemini Enterprise Agent Platform —
  predtým [Vertex AI](https://cloud.google.com/vertex-ai)), ekosystém nástrojov (eval, guardrails, observability) a LLMOps — nasadenie,
  monitoring, náklady. Aplikačná vrstva, ktorú trh práce pomenúva podľa nástrojov.
- **Glosár:** jednotné definície pojmov, na ktoré stránky odkazujú.

Každá časť sa otvára prehľadovou stránkou: kde začína, čo je vnútri a čo treba vedieť vopred. K jednotlivým
častiam sa dostaneš cez bočný panel a pätičku.
