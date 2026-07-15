---
id: overview
title: Časť II — Agenti
sidebar_label: Prehľad časti
---

# Časť II — Agenti

V Časti I si poskladal **statický pipeline**: dopyt beží pevnou cestou, `retrieve → generate`, a tú cestu
riadi kód. Časť II odovzdáva riadenie modelu. Z pipeline sa stáva **slučka, ktorú vedie sám model (LLM)**:
rozhoduje, či vôbec vyhľadávať, čo hľadať, ktorý nástroj použiť a kedy skončiť. To je agent.

Celou časťou prechádza jedna línia: modelu postupne uvoľňujeme ruky — od jediného rozhodnutia o smerovaní až po
plnú slučku s plánovaním a viacerými agentmi — a každý krok k väčšej voľnosti má svoju cenu: vyššiu latenciu,
vyššie náklady a náročnejšie ladenie. Inžinierska úloha nie je „spraviť systém čo najsamostatnejším“, ale zvoliť
**minimálne potrebnú mieru samostatnosti** — presne toľko voľnosti, koľko si úloha naozaj vyžaduje.

## Čo je vnútri

- **[Agentic RAG](./agentic-rag/index.md)** — z vyhľadávania sa stáva akcia vnútri slučky; spektrum od routera
  (smerovača) po plnú slučku.
- **[Používanie nástrojov (tool use)](./tool-use/index.md)** — ako model volá vonkajšie funkcie: vyhľadávanie,
  SQL, API, kalkulačka.
- **[Plánovanie a slučky (planning & loops)](./planning-loops/index.md)** — ReAct a plan-and-execute, rozklad
  úlohy, kritérium zastavenia, únik zo zacyklenia.
- **[Multiagentové systémy (multi-agent)](./multi-agent/index.md)** — viac špecializovaných agentov, roly,
  odovzdanie riadenia; topológie a kedy jedného agenta NEdeliť.
- **[Orchestračné frameworky](./orchestration-frameworks/index.md)** — [LangGraph](https://www.langchain.com/langgraph),
  [LangChain](https://www.langchain.com), Microsoft Agent Framework, [CrewAI](https://www.crewai.com): čo
  pridávajú nad holú slučku a kedy sa bez nich zaobísť.
- **[MCP a protokoly agentov](./mcp/index.md)** — štandardizovaný spôsob, akým agent siahne po nástrojoch
  a dátach; [MCP](https://modelcontextprotocol.io) verzus [A2A](https://a2a-protocol.org).
- **[Reálni agenti — Claude, OpenAI, Gemini](./real-agents.md)** — záver časti: každá technika Časti II
  prehnaná cez všetkých troch poskytovateľov; ten istý trvácny postup pod desiatkou nekompatibilných API.

## Predpoklady

Celá Časť I, najmä vrstva **Retrieval** (agent ju volá ako nástroj) a **prierezové aspekty** — tu sa eval
a observability menia zo želateľných na povinné.

:::note[Stav]

Základ Časti II je hotový — publikované sú všetky lekcie: Agentic RAG, používanie nástrojov, plánovanie
a slučky, multiagentové systémy, orchestračné frameworky, MCP a záverečná lekcia o reálnych agentoch (Claude,
OpenAI, Gemini). 🚧 Ešte je pred nami druhý prechod — prehĺbenie každej vrstvy; témy sú v poznámkach „Ďalej —
druhá časť lekcie“ na stránkach lekcií.

:::
