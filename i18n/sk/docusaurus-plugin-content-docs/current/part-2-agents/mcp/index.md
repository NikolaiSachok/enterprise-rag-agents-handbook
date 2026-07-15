---
title: MCP a protokoly agentov
slug: /part-2-agents/mcp/
---

# Štandard, ktorý prepája agentov so svetom

V lekcii o [používaní nástrojov](../tool-use/index.md) sa model naučil volať nástroje. Jednu vec sme však nechali bokom: každé napojenie na nástroj si dosiaľ písal ručne. Jeden agent, tri nástroje — napíšeš tri kusy lepiaceho kódu a je to zvládnuteľné. Lenže agentov aj nástrojov pribúda a ten prístup sa rozpadá.

Predstav si M aplikácií, z ktorých každá potrebuje N nástrojov. Ak ich spájaš po jednom, skončíš pri M × N vlastných konektoroch: ten istý obal okolo databázy staviaš znova pre každého agenta, toho istého agenta znova učíš to isté API. Toto je **problém integrácie M × N** a rastie neúnosne — každý nový nástroj aj každý nový agent násobí robotu, ktorú už niekto raz spravil.

Odpoveď je stará ako softvér sám: dohodni si štandard. Každý nástroj obalíš raz, do jedného servera; klienta napíšeš raz, pre každú aplikáciu; a odvtedy sa ktorákoľvek aplikácia rozpráva s ktorýmkoľvek nástrojom bez ďalšieho lepiaceho kódu. Z M × N párových konektorov sa stane **N + M**: N serverov plus M klientov namiesto M × N spojení každého s každým.

Najstručnejšie to vystihuje obraz, ktorý si volí sám štandard: **USB-C port pre AI aplikácie**. Jeden konektor namiesto iného kábla ku každému zariadeniu.

Témou tejto lekcie je práve táto výmena: protokol, ktorý ju umožňuje; to, v čom sa naozaj líši od dokumentácie API, ktorú už poznáš; a nová plocha útoku, ktorú otvára.

:::tip[▶ Video]

<YouTube id="g9JIUM0MHgQ" title="CLI vs MCP: How AI Agents Choose the Right Tool for the Job — IBM Technology" />

Pozri si ho ešte pred sekciou o Swaggeri — kladie tú istú otázku: keď nástroj už opisuje CLI aj špecifikácia API, čo k tomu MCP pridáva? (Video je v angličtine.)

:::

## Čo je MCP

**MCP (Model Context Protocol)** je otvorený štandard. Predstavil ho Anthropic koncom roka 2024 a v decembri 2025 ho daroval nadácii Agentic AI Foundation pod Linux Foundation — jeho správa je odvtedy neutrálna a komunitná. Stojí na architektúre klient–server.

Roly sú dve. **MCP server** obalí jediný nástroj alebo zdroj dát — databázu, súborový systém, SaaS API, repozitár kódu — a jeho schopnosti sprístupní jednotne. **MCP klient** je agent či aplikácia na druhom konci: pripája sa na servery a využíva to, čo ponúkajú. Jeden server obslúži mnoho klientov, jeden klient sa napojí na mnoho serverov.

MCP neštandardizuje jednu vec, ale tri — tri **primitíva (základné stavebné bloky)**:

- **nástroje** — volateľné funkcie, presne ten pojem z používania nástrojov, teraz s dohodnutým tvarom;
- **zdroje (resources)** — dáta a kontext, ktoré server sprístupní klientovi na čítanie: obsah súboru, záznam, stránku dokumentácie, čokoľvek, čo si má model prečítať;
- **prompty (prompts)** — opakovane použiteľné šablóny, ktoré server ponúka, takže spolu s akciami dodáva aj overený spôsob, ako ich vyvolať.

Prenos (transport) je zámerne nudný. Lokálny server beží cez **stdio** (spojenie cez štandardný vstup a výstup), vzdialený cez **streamable HTTP** (prenos cez HTTP so streamovaním). Primitíva sú v oboch prípadoch tie isté; kde server beží, je detail nasadenia, nie zmena toho, čo klient vidí.

## Rozdiel, ktorý vnáša AI — oddelenie nástrojov od agentov

Nejde o poriadok pre poriadok. MCP oddelí tvorbu nástrojov od tvorby agentov. Napíšeš MCP server raz a použije ho každý MCP klient — naprieč aplikáciami, frameworkami, modelmi — bez lepiaceho kódu na každé napojenie. Obal okolo tvojho ticketovacieho systému dodá jeden tím raz a pripája sa naň každý.

Je to efekt ekosystému, nie fičúra. Výhra N + M v ľudskej reči: nástroj postavený pre jednu aplikáciu použije ktorákoľvek iná, tak ako USB-C periféria funguje s ľubovoľným hostiteľom. Hodnota sa ukáže až v druhom, treťom, desiatom projekte, ktorý server znova použije namiesto toho, aby ho staval nanovo.

## Ako sa MCP líši od Swaggeru/OpenAPI a CLI --help

Vážna námietka znie takto: *„MCP je len Swagger pre LLM — nalepí opisy na endpointy, aby si ich model prečítal. OpenAPI máme desať rokov.“* Férové. A odpovedať naň úprimne je najrýchlejšia cesta k tomu, čo MCP je a čo nie je.

Priznajme pravdivú časť. OpenAPI aj Swagger už nesú sémantické opisy — každý endpoint (koncový bod) má `summary` a `description`, každý parameter poznámku. CLI `--help` robí to isté. LLM naozaj vieš poháňať priamo z OpenAPI špecifikácie: každý endpoint namapuješ na definíciu nástroja a pravidlo z používania nástrojov, že opis je prompt, platí doslova. Rozdiel teda nie je v tom, že „MCP má sémantiku a ostatní nie“. Kto tvrdí, že Swagger neunesie význam, mýli sa.

Skutočné rozdiely sú štyri a ani jeden sa netýka toho, či opisy máš:

1. **Protokol na spotrebu za behu, nie vývojárska dokumentácia pri návrhu.** MCP klient si schopnosti servera zistí až za behu a zavolá ich cez jednotný protokol — spýta sa servera, čo ponúka, a potom ich rovno vyvolá, naživo. OpenAPI aj `--help` opisujú API pre vývojára, ktorý si ich prečíta a vopred proti nim napíše klientský kód. Rozdiel je v tom, kto to číta a kedy.
2. **Primitíva šité pre LLM, nielen akcie.** OpenAPI a CLI opisujú iba volateľné akcie. Pre zdroje MCP (kontext na čítanie) a prompty (šablóny na opakované použitie) nemá OpenAPI obdobu — nijaká konštrukcia nepovie „toto je dokument, ktorý má mať model v kontexte“ ani „toto je posvätená šablóna pre túto operáciu“. MCP dáva kontextu a šablónam rovnaké postavenie ako akciám.
3. **Jeden jednotný klient.** Ktorýkoľvek MCP klient sa rozpráva s ktorýmkoľvek MCP serverom. Žiadny klient šitý na mieru pre každé API, žiadny adaptér pre každý framework. Výhra N + M celkom konkrétne: lepiaci kód na strane klienta sa scvrkne na jednu implementáciu protokolu.
4. **Relácia, a to obojsmerná.** MCP je stavová **relácia (session)**, nie kopa nezávislých volaní požiadavka–odpoveď. Server vie klientovi poslať aktualizáciu a cez **sampling** (server si požičia model klienta na generovanie) si vie vyžiadať, aby mu model na strane klienta niečo vygeneroval — teda oba smery, čo statická špecifikácia API nevyjadrí.

A ešte úprimný dodatok. V praxi bývajú MCP servery pre model naozaj čitateľnejšie než surový výpis z OpenAPI, ale z remesla, nie zo schopnosti protokolu. MCP servery sa píšu s agentom na prvom mieste: opisy formulované ako prompty, starostlivo vybraná a zúžená sada nástrojov namiesto všetkých endpointov — „málo nástrojov, bez prekryvov“ z používania nástrojov. Ručne napísaný MCP server býva pre model prívetivejší než automaticky vygenerovaný dvestoendpointový Swagger. To je však rozdiel v spôsobe návrhu, nie v sémantickej sile, ktorá by OpenAPI chýbala. Swagger unesie presne toľko významu ako MCP; MCP servery sú len z konvencie písané tak, aby ich spotreboval model. „Vybrané pre agenta“ je zvyk autora, nie vlastnosť protokolu.

## MCP verzus A2A — os agent↔nástroj oproti osi agent↔agent

MCP štandardizuje jednu os: agent k nástroju, agent k dátam. O druhej osi mlčí — agent k agentovi. Presne tú komunikáciu si potreboval vo chvíli, keď si postavil prvý multiagentový systém. Keď jeden agent odovzdáva prácu druhému, MCP je nesprávny nástroj: spája agenta s jeho nástrojmi, nie s rovnocenným partnerom.

**[A2A (Agent-to-Agent)](https://a2a-protocol.org)** je nastupujúca odpoveď — navrhol ho Google a odvtedy prešiel pod Linux Foundation — a nie je jediný uchádzač. Rozlíšenie, ktoré si zapamätaj, je jednou vetou: MCP spája agenta s nástrojmi a kontextom, A2A spája agenta s agentom. Táto oblasť sa mení rýchlo a zoznam uchádzačov bude v čase, keď toto čítaš, iný — nauč sa rozlíšenie, nie mená. Dve osi sú reálne a trvácne; ktorýkoľvek konkrétny protokol je len momentka.

## Bezpečnosť — nová plocha útoku

Napojiť agenta na server, ktorý neriadiš, znamená napojiť ho na vstup, ktorý neriadiš. MCP server je **nová plocha útoku**. Nepriateľský alebo kompromitovaný server dokáže do zdrojov a výsledkov nástrojov, ktoré vráti, prepašovať nepriamu **prompt injection** (útok, ktorý modelu podstrčí cudzie inštrukcie) — text, ktorý si tvoj model prečíta ako pokyny. Útočným vektorom je aj samotný opis nástroja (tzv. tool poisoning, otrávený opis nástroja), lebo opis je prompt. Server dokáže vyniesť dáta, na ktoré agent dosiahne (data exfiltration). Dokáže prekročiť udelené oprávnenia a robiť viac než tú jednu úlohu, kvôli ktorej si ho pripojil. Ten istý jednotný protokol, vďaka ktorému server ľahko zapojíš, rovnako ľahko zapojí aj server nepriateľský.

Obrana je disciplína, ktorú už máš, roztiahnutá o vrstvu ďalej. Uplatňuj **princíp najnižších oprávnení (least privilege)** — každému serveru daj len obmedzenú sadu nástrojov, nič, čo úloha nevyžaduje. Pripájaj sa len na servery, ktoré si preveril a ktorým dôveruješ; „je v registri“ nie je preverenie. Pri citlivých akciách vyžaduj schválenie človekom, aby kompromitovaný server nemohol potichu konať v tvojom mene. Guardrails (bezpečnostné mantinely) z Časti I príručky — instruction hierarchy (hierarchia inštrukcií podľa oprávnení) a spotlighting (označkovanie nedôveryhodného textu) — platia priamo: ku všetkému, čo server pošle, k zdrojom aj výsledkom nástrojov, sa správaj ako k nedôveryhodným dátam na uváženie, nikdy ako k dôveryhodným pokynom na vykonanie. Zdroj je obsah, nie príkaz, aj keď je sformulovaný ako príkaz.

---

Tým sa lekcia uzatvára — a s ňou aj základná výbava Časti II príručky. Časť II sa začala jedinou agentickou slučkou v [agentickom RAG](../agentic-rag/index.md), kde sa vyhľadávanie stalo akciou, ktorú si model volí. Dali sme mu nástroje, ktorými koná ([používanie nástrojov](../tool-use/index.md)), spôsob, ako plánovať cez mnoho krokov a naozaj sa zastaviť ([plánovanie a slučky](../planning-loops/index.md)), spoluhráčov na rozdelenie práce ([multiagentové systémy](../multi-agent/index.md)) a frameworky, ktoré to celé zabalia ([orchestračné frameworky](../orchestration-frameworks/index.md)). Táto lekcia dodala poslednú časť: štandardné protokoly, ktoré agentov v produkcii prepoja s nástrojmi aj navzájom. Jedna slučka, ktorá dorástla na systém napojený na svet cez spoločnú zásuvku. Ako to celé vyzerá naživo na Claude, OpenAI a Gemini, ukáže [záverečná stránka o skutočných agentoch](../real-agents.md).

## Čo si odniesť z lekcie

- Problém integrácie M × N (M aplikácií × N nástrojov = M × N konektorov šitých na mieru) je dôvod, prečo štandardy vôbec vznikajú. MCP ho scvrkne na N + M: každý nástroj obalíš raz ako server, klienta napíšeš raz pre každú aplikáciu. Predstav si USB-C port pre AI aplikácie.
- MCP (Model Context Protocol) je otvorený štandard klient–server (Anthropic ho vytvoril koncom roka 2024, od decembra 2025 je projektom Agentic AI Foundation pod Linux Foundation). MCP server obalí nástroj alebo zdroj dát, MCP klient je agent, ktorý ho využíva. Štandardizuje tri primitíva — nástroje, zdroje, prompty — cez stdio (lokálne) alebo streamable HTTP (vzdialene).
- Rozdiel, ktorý vnáša AI: MCP oddelí tvorbu nástrojov od tvorby agentov. Server napíšeš raz, použije ho každý klient — efekt ekosystému, nie fičúra.
- MCP nie je „Swagger s opismi“. Swagger aj CLI --help sémantiku už nesú a LLM vieš poháňať z OpenAPI špecifikácie. Skutočné rozdiely: spotreba za behu oproti dokumentácii pri návrhu, primitíva šité pre LLM nad rámec akcií (zdroje, prompty), jeden jednotný klient a obojsmerná relácia (sampling). MCP servery bývajú pre model čitateľnejšie z konvencie písania, nie preto, že by OpenAPI význam neuniesol.
- MCP je agent↔nástroj; A2A (Agent-to-Agent) je agent↔agent. Dve osi. Táto oblasť sa ešte len formuje — nauč sa rozlíšenie, nie práve platné mená.
- MCP server je nová plocha útoku: nepriama prompt injection, vynesenie dát, prekročenie oprávnení. Bráň sa princípom najnižších oprávnení, len preverenými servermi a schválením človekom pri citlivých akciách; ku všetkému, čo server pošle, sa správaj ako k nedôveryhodnému vstupu, nikdy ako k pokynom.

**Nové pojmy** → [Glosár](../../glossary.md): MCP (Model Context Protocol), MCP server, MCP client, MCP resources, MCP prompts, M×N integration problem, A2A (Agent-to-Agent).

---

:::note[Ďalej — druhá časť lekcie]

**[Servery, prenos a dôvera](./deep-dive.md)** — stavba servera MCP v praxi, sampling a elicitation (vyžiadanie vstupu od používateľa) do hĺbky, registre MCP a objavovanie serverov, kompromis prenosu (stdio oproti streamable HTTP), ako sa vyvíjajú protokoly medzi agentmi (A2A a jeho súrodenci) a ako spevniť nasadenie proti serverom, ktoré neriadiš.

Pozri aj: [záverečnú stránku o skutočných agentoch](../real-agents.md) — MCP naživo na Claude, OpenAI a Gemini; [multiagentové systémy](../multi-agent/index.md) pre os agent↔agent, ktorú MCP necháva otvorenú; a [orchestračné frameworky](../orchestration-frameworks/index.md), ktoré tieto napojenia zabalia do knižnice.

:::
