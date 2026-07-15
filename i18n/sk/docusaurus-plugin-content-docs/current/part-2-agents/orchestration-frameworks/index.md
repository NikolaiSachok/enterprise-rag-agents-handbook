---
title: Orchestration frameworks
slug: /part-2-agents/orchestration-frameworks/
---

# Čo pridáva framework nad holú slučku

Doterajšie lekcie druhej časti skladali agenta z primitív (základných stavebných blokov): [agentický RAG](../agentic-rag/index.md) mu dal slučku, [používanie nástrojov](../tool-use/index.md) to, čo v nej volať, [plánovanie a slučky](../planning-loops/index.md) spôsob, ako rozložiť úlohu na kroky, viesť ich k cieľu a napokon zastaviť, a [multiagentové systémy](../multi-agent/index.md) tímy agentov, ktorí si prácu delia. Zakaždým si tie časti písal sám, kus po kuse.

V praxi to celé ručne neskladáš. Siahneš po **orchestračnom frameworku** (orchestration framework) — [LangChain](https://www.langchain.com), [LangGraph](https://www.langchain.com/langgraph), [LlamaIndex](https://www.llamaindex.ai) a ich susedia.

Táto lekcia je o tom, čo taký framework nad holú slučku naozaj pridáva — aby si si jeden vybral a používal ho dobre: neprepisoval to, čo ti dáva, a neschovával sa zaň, keď sa niečo pokazí.

Povedzme rovno, o čom lekcia je: o rozdiele, ktorý vnáša AI, pre inžinierov, čo primitíva už poznajú — nie o tutoriále frameworku od nuly ani o prechádzke po API. Po filozofiách a hraniciach príde to podstatné: načo tieto knižnice sú, kde sa vyplatia a kde stoja viac, než ušetria. Žiadne kódové návody.

:::tip[▶ Video]

<YouTube id="ZVPlLaehjLk" title="Agentic AI Frameworks Explained: Workflows, Multi-Agent, & Production — IBM Technology" />

Tá istá krajina v podaní IBM: ako sa frameworky delia do troch okruhov — pracovný postup, multiagentová koordinácia a produkcia — dobrá orientácia skôr, než si rozoberieme, čo ti ktorá vrstva prináša. (Video je v angličtine.)

:::

## Čo by si inak písal ručne

Úprimná otázka: ak framework vynecháš, čo napíšeš sám? Keď si zopár agentov postavil od nuly, odpoveď je známa kopa obslužného kódu.

Najprv slučka — samotné kolo úvaha → rozhodnutie → akcia → pozorovanie, ktoré sa točí, kým agent neusúdi, že skončil.

Okolo nej obslužný kód na volanie nástrojov: schémy, ktoré model číta, dispečing, čo podľa mena nástroja nájde správnu funkciu, a formátovanie, ktoré každý výsledok vloží späť do rozhovoru. Ani jedno nie je hlboké, oboje je puntičkárske a píšeš to zakaždým odznova.

Nad tým sa vrství to, čo rastie spolu s agentom:

- **Stav a pamäť** prenášané cez kroky, aby si agent pamätal, čo urobil pred tromi krokmi.
- **Tok riadenia** (control flow), ktorý má reálnu silu — vetvenie, opakovania, slučky a pauzy, kde zasiahne človek.
- **Multiagentová orchestrácia**: odovzdania riadenia (handoff) a smerovanie (routing) medzi agentmi, topológie z lekcie o multiagentových systémoch.
- **Produkčná výbava** — napojenia na trasovanie, streaming (priebežné odosielanie výstupu), perzistencia (trvalé ukladanie) a checkpointing (priebežné ukladanie stavu).

Nič z toho nie je tá zaujímavá časť tvojho agenta — je to obslužný kód pod ňou. Jadro ponuky frameworku: túto kopu ti napíše raz a jednotne, takže v kóde riešiš správanie, nie prepájanie.

## Hlavná abstrakcia — agent ako graf / konečný automat

Keď odlúpneš značky, väčšina frameworkov sa zhodne na tej istej myšlienke — a LangGraph ju vyslovuje najjasnejšie: modeluj agenta ako **graf** (graph), ako konečný automat (state machine).

Kroky sa stanú **uzlami** (node) — zavolaj model, zavolaj nástroj, rozhodni sa — a tok riadenia sa stane **hranami** (edge) medzi nimi, vrátane hrán, ktoré sa vracajú späť, aby slučka bežala ďalej, kým sa nesplní podmienka.

A práve v tom je celý zmysel: holá slučka je blok `while` — nepriehľadná, kým beží, a všetko-alebo-nič, keď spadne. Keď z nej spravíš konečný automat, stane sa niečím, čo vieš skúmať, pozastaviť a obnoviť. Dostaneš checkpointy, ku ktorým sa vieš vrátiť, a uzly, kde človek schváli krok skôr, než tok riadenia pokračuje. Opakovania sa dajú ohraničiť na jediný krok a vetvenie je deterministické — už nie pochované vnútri voľne bežiacej slučky modelu.

V jednej vete: graf mení nepriehľadnú slučku na stroj, ktorý vieš riadiť, skúmať a obnoviť.

## Hráči, po vrstvách

Krajina pôsobí preplnene, kým si ju neroztriediš podľa toho, čím sa každý nástroj snaží byť. Zhruba tri vrstvy.

**Integračná vrstva** (integrations layer) — široké knižnice konektorov (modely, nástroje, dátové zdroje), aby si adaptéry nepísal ručne. Býva tu LangChain a [LlamaIndex](https://www.llamaindex.ai), ktorý je vychýlený najmä k dátam a RAG. Ak je tvoj problém „prepoj agenta s pätnástimi rôznymi službami“, nakupuješ práve v tejto vrstve.

**Vrstva toku riadenia a stavu** (control-flow-and-state layer) — tu žije myšlienka grafu: LangGraph a Microsoft Agent Framework (podnikovo ladený príspevok Microsoftu). Táto vrstva vlastní konečný automat z predošlej sekcie.

**Multiagentová vrstva** (multi-agent layer) — zabaľuje topológie z lekcie o multiagentových systémoch. [CrewAI](https://www.crewai.com) organizuje prácu do „crew“ (tím rolových agentov) s pridelenými úlohami; [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/) prináša predpripravené multiagentové orchestrácie zdedené po [AutoGene](https://github.com/microsoft/autogen) — agentov, ktorí sa medzi sebou zhovárajú. Keď to, čo chceš modelovať, JE tím, začínaš tu.

Jedna výhrada váži viac než celé triedenie: tie hranice sa rozmazávajú. LangChain robí aj tok riadenia, frameworky si navzájom opíšu dobré nápady v priebehu vydania či dvoch a ekosystém sa mení prekotne — Microsoft Agent Framework 1.0 (GA — všeobecná dostupnosť — apríl 2026) vstrebal [Semantic Kernel](https://learn.microsoft.com/en-us/semantic-kernel/) aj AutoGen, oba sú teraz v režime údržby. Ber tie tri vrstvy ako momentku filozofií, nie ako trvalý rebríček. Nauč sa kategórie; kým sa dostaneš k nasadeniu, čísla verzií sa aj tak pohnú.

## Typické vzory, ktoré naozaj používaš

V každodennej práci sa opakuje malá množina tvarov; poznať ich po mene je väčšina toho, čo od dokumentácie frameworku potrebuješ.

Základný tvar je graf **uzlov-nástrojov s podmienenými hranami** (tool-nodes with conditional edges) — agent zavolá nástroj a hrana podľa výsledku rozhodne, kam ďalej. Pre bežný prípad väčšina frameworkov prináša **predpripraveného ReAct agenta** (Reasoning + Acting) — hotový volač nástrojov „so všetkým v balení“, ktorého vytvoríš namiesto toho, aby si graf skladal sám.

Perzistencia sa objaví ako **checkpointer** — pamäťový komponent, ktorý ukladá stav, aby sa beh dal pozastaviť a neskôr obnoviť, a jednotlivé thready (vlákno — rozhovor/beh) drží oddelene, aby sa dva rozhovory nezliali do seba.

Nad tým sedí prerušenie **human-in-the-loop (HITL)** (schválenie človekom): uzol, kde sa slučka zastaví, aby to človek schválil, a potom pokračuje presne odtiaľ, kde zastala. To je human-in-the-loop z [plánovania a slučiek](../planning-loops/index.md), teraz povýšený na plnohodnotný uzol v grafe namiesto ručného tlačidla stop.

Pre tímy ti framework podá **supervízora alebo konštrukciu „crew“** (supervisor / crew construct) — orchestrátora z lekcie o multiagentových systémoch, predpripraveného, takže topológiu konfiguruješ namiesto toho, aby si ju kódil.

Všetkým tým preteká **napojenie na trasovanie** (tracing integration), učebnicovým príkladom je [LangSmith](https://www.langchain.com/langsmith): vrstva pozorovateľnosti, vďaka ktorej vidíš, čo graf naozaj urobil. To je [téma tretej časti](../../part-3-production/overview/) a zapája sa práve sem.

## Kedy NIE — kompromisy

Framework nie je zadarmo a jeho náklady sú zrkadlovým obrazom jeho výhod.

Najostrejší z nich je **cena abstrakcie** (abstraction cost). Framework skryje prompt aj tok riadenia — presne to, čo si chcel, až do chvíle, keď sa niečo pokazí a ty ladíš cez vrstvy kódu, ktorý si nenapísal. Pre jednoduchého agenta je holá slučka plus natívne volanie nástrojov od poskytovateľa prehľadnejšia, kratšia a oveľa ľahšie sa ladí než to isté správanie prevlečené cez grafový framework. Abstrakcia sa oplatí len vtedy, keď má na starosti naozaj zložitý tok riadenia.

Vedľa nej stoja dve ďalšie. **Prekotný vývoj ekosystému** — API aj posvätené vzory sa menia z vydania na vydanie; idiomatický kód, ktorý napíšeš dnes, je o rok legacy — zastaraná príťaž, z ktorej sa sťahuješ. A prijať abstrakcie frameworku znamená kompromis medzi prenosnosťou a viazanosťou na framework (vendor lock-in) — čím viac sa opieraš o jeho konštrukcie, tým viac si s ním zviazaný.

Pravidlo je teda pravidlo poradia. Najprv pochop primitíva zo skorších lekcií; po frameworku siahni preto, aby si zmazal obslužný kód, nikdy nie preto, aby si sa vyhol pochopeniu toho, čo ten kód robí. Grafový framework vytiahni vtedy, keď naozaj potrebuješ ovládateľné zložité toky riadenia — checkpointy, HITL, vetvenie, multiagentovú koordináciu. Pre jednoduchého agenta použi SDK poskytovateľa priamo a vrstvu vynechaj.

## Kam sa to napája

Nič v tejto lekcii nie je nový KONCEPT. Frameworky nemenia myšlienky zo skorších lekcií — slučku, nástroje, plánovanie, multiagentové topológie. Zabalia ich a podajú späť, len bez obslužného kódu.

A práve preto, že balia tie isté primitíva, zapadajú rovno do vrstvy pozorovateľnosti a hodnotenia, ktorú preberá [tretia časť](../../part-3-production/overview/): presne ten graf, ktorý si tu postavil, budeš tam trasovať a merať.

## Čo si odniesť z lekcie

- Orchestračný framework zmaže obslužný kód, ktorý by si inak písal okolo holej slučky: obslužný kód slučky, kód na volanie nástrojov, stav a pamäť, tok riadenia, multiagentové odovzdania riadenia a produkčnú výbavu s trasovaním, streamingom a checkpointmi.
- Hlavná abstrakcia, na ktorej sa väčšina frameworkov zíde, je agent ako graf / konečný automat: uzly (zavolaj model, zavolaj nástroj, rozhodni sa) a hrany (tok riadenia vrátane slučiek). Rozdiel, ktorý vnáša AI, je práve to, že holú slučku `while` mení na stroj, ktorý vieš riadiť, skúmať a obnoviť.
- Hráčov si roztrieď po vrstvách — integračná (LangChain, LlamaIndex), tok riadenia a stav (LangGraph, Microsoft Agent Framework), multiagentová (CrewAI a orchestrácie Microsoft Agent Frameworku) — ale ber to ako momentku: hranice sa rozmazávajú a ekosystém sa mení prekotne. Uč sa kategórie, nie čísla verzií.
- Cenou je abstrakcia: framework skryje prompt aj tok riadenia, takže ladíš cez vrstvy kódu, ktorý si nenapísal. Pre jednoduchého agenta je holá slučka plus natívne volanie nástrojov prehľadnejšia.
- Pravidlo: najprv primitíva. Framework používaj na mazanie obslužného kódu, nie na vyhýbanie sa pochopeniu — grafový framework pre ovládateľné zložité toky riadenia, SDK poskytovateľa priamo pre jednoduchého agenta.

**Nové pojmy** → [Glosár](../../glossary.md): orchestration framework, agent as a graph / state machine, node / edge, checkpointing, human-in-the-loop (HITL).

---

:::note[Ďalej — druhá časť lekcie]

**[Grafy a odolné vykonávanie](./deep-dive.md)** — prechádzka jedným konkrétnym grafom v LangGraphe, odolné vykonávanie a checkpoint backendy za ním, pamäť samotného frameworku postavená proti jeho multiagentovým konštrukciám, deklaratívne verzus imperatívne definovanie agenta a trasovanie s hodnotením na úrovni frameworku.

Pozri aj: ako sa tieto konštrukcie stavajú naprieč Claude, OpenAI a Gemini — [záverečná stránka časti](../real-agents.md); všeobecná vrstva riadenia slučky a rozpočtu, ktorú framework zabaľuje — [plánovanie a slučky](../planning-loops/index.md); štandardné protokoly pod prenosom — [MCP](../mcp/index.md).

:::
