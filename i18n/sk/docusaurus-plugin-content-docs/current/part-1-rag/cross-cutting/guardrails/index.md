---
title: "Guardrails"
slug: /part-1-rag/cross-cutting/guardrails/
---

# Ochranná vrstva na vstupe aj na výstupe

Postaviť presný systém už vieš — vyhľadávanie prinesie správne chunky, generovanie z nich zostaví odpoveď — a s evaluáciou ho vieš aj zmerať. V produkcii musí zvládať ešte tretiu vec: byť bezpečný. Odolať útoku, ochrániť citlivé dáta a odmietnuť to, čo je škodlivé.

Túto úlohu nesú **guardrails** (bezpečnostné mantinely): ochranná vrstva na vstupe aj na výstupe. Pre podnikovú AI to nie je nadštandard, po ktorom siahneš, ak ostane čas — patrí k systému rovnako neoddeliteľne ako samotná odpoveď.

## Základný problém: LLM verí svojmu vstupu priveľmi

Model nerozlišuje, odkiaľ text prišiel. Všetko, čo sa ocitne v kontexte — otázka používateľa, nájdené chunky, výstupy nástrojov — je preň len text, ktorý môže poslúchnuť. A práve v tom je jadro: model nedokáže spoľahlivo rozlíšiť inštrukcie od dát. Odtiaľ pramení väčšina bezpečnostných problémov LLM.

## Prompt injection — hrozba č. 1

Útočník prepašuje inštrukcie do textu, ktorý model číta, a prebije nimi tvoj systémový prompt. Tomuto útoku sa hovorí **prompt injection** (útok, ktorý modelu podstrčí cudzie inštrukcie) a má dve podoby:

- **Priama (direct).** Používateľ sám napíše „ignoruj predchádzajúce inštrukcie a…“.
- **Nepriama (indirect).** Škodlivé inštrukcie sa skryjú do dokumentu, webovej stránky alebo chunku, ktorý sa dostane medzi výsledky. Pre RAG obzvlášť nebezpečné, lebo nájdený obsah tvoria cudzí autori. Stačí jediný otrávený dokument v korpuse — model prečíta chunk a vykoná príkaz, ktorý je v ňom ukrytý.

Následky siahajú od úniku dát cez neoprávnené akcie (keď model vystupuje ako agent s nástrojmi) až po škodlivý výstup.

Blízky príbuzný je **jailbreak** (obídenie vlastných bezpečnostných pravidiel modelu). Kým injection zneužíva to, že inštrukcie a dáta sú pre model nerozoznateľné, jailbreak mieri na zabudované ochrany samotného modelu.

:::tip[▶ Video]

<YouTube id="jrHRe9lSqqA" title="What Is a Prompt Injection Attack? — IBM Technology" />

Ako útok cez prompt injection funguje v praxi. (Video je v angličtine.)

:::

## Obrana — základná sada

Obrana proti injection nie je jeden trik, ale sada opatrení, ktoré útok postupne zdražujú:

- **Oddelenie a spotlighting** (označkovanie nedôveryhodného textu). Jasne vyznač, kde sú dáta a kde inštrukcie: nájdený obsah obaľ do oddeľovačov, alebo naň nasaď spotlighting (náhodné značky či zakódovanie), aby sa vložená inštrukcia čítala „len ako dáta“. Modelu tým povieš: všetko medzi značkami sú nedôveryhodné dáta, nie inštrukcie.
- **Instruction hierarchy** (hierarchia inštrukcií podľa oprávnení): systém > vývojár > používateľ > nástroj/nájdený obsah. Model uprednostní vyššie úrovne; nájdenému obsahu dôveruje najmenej.
- **Kontrola vstupu.** Zachyť pokusy o injection a známe vzory útokov skôr, než sa dostanú k modelu.
- **Validácia výstupu.** Skontroluj odpoveď, než sa odošle: žiadne vynesené tajomstvá, žiadne PII (osobné údaje), žiadne porušenie pravidiel.
- **Princíp najnižších oprávnení (least privilege) pre agentov.** Ak model siaha po nástrojoch, obmedz, ktoré nástroje a akcie smie použiť (tool allow-listing). Potom aj úspešný útok zmôže málo.

## Osobné údaje a ochrana dát

Osobné údaje — mená, e-maily, čísla — treba rozpoznať a zamaskovať na dvoch miestach: na vstupe (skôr, než sa čokoľvek zaloguje a než to odíde k poskytovateľovi API) aj na výstupe (skôr, než odpoveď uvidí používateľ).

Kritické je to najmä pri externých LLM API, kde dáta opúšťajú tvoj bezpečnostný perimeter. Je to tá istá úvaha ako voľba medzi modelom prevádzkovaným u seba a modelom za API, ktorú si zvažoval pri embeddingoch.

## Bezpečnosť obsahu — na oboch stranách

Bezpečnosť obsahu (content safety) stráži obe strany naraz: na vstupe odmietne škodlivú či zakázanú požiadavku (aj tú mimo témy), na výstupe odfiltruje toxický alebo pravidlám odporujúci text.

RAG pridáva tretí bod, ingestion (príjem obsahu do indexu): otrávený dokument je lepšie zachytiť pri indexovaní než až pri dopyte.

Samotné nástroje na to — [Guardrails AI](https://www.guardrailsai.com), [NeMo Guardrails](https://developer.nvidia.com/nemo-guardrails), [Llama Guard](https://www.llama.com/llama-protections/), Granite Guardian — tvoria samostatnú vrstvu, ktorej sa venuje [lekcia o ekosystéme nástrojov](../../../part-3-production/tooling-ecosystem/); tu nám ide o princíp.

## Guardrails nie sú všeliek

Úplná ochrana neexistuje — guardrails fungujú ako **defence-in-depth** (viacvrstvová ochrana), teda obrana poskladaná do vrstiev, kde každá zachytí to, čo predchádzajúca prepustí.

Zároveň musíš vyvažovať prísnosť a použiteľnosť: priveľmi prísne nastavenie odmietne aj legitímne požiadavky.

Preto sa aj guardrails merajú — cez **attack success rate** (miera úspešnosti útokov), teda podiel útokov z vopred pripravenej sady, ktoré prejdú. Je to skóre, na ktoré sa pozeráš rovnako ako na ktorúkoľvek metriku z lekcie o [evaluácii](../evaluation/); po zavedení ho píšeme už len skratkou ASR.

## Čo si odniesť z lekcie

- Koreň zraniteľnosti: LLM nedokáže spoľahlivo oddeliť inštrukcie od dát.
- Prompt injection (priama aj nepriama) je hrozba č. 1; nepriama je v RAG obzvlášť nebezpečná, lebo otrávený nájdený obsah vojde do kontextu spolu s dátami.
- Obrana: oddelenie a spotlighting, instruction hierarchy, kontrola vstupu, validácia výstupu, najnižšie oprávnenia pre nástroje.
- Maskovanie osobných údajov na vstupe aj výstupe (kritické pri externých API).
- Bezpečnosť obsahu na oboch stranách plus ingestion v RAG.
- Defence-in-depth, nie všeliek; meraj attack success rate a udrž rovnováhu voči prílišnej prísnosti.

**Nové pojmy** → [Glosár](../../../glossary.md): guardrails, prompt injection, spotlighting, instruction hierarchy, PII redaction, input / output validation, content safety / moderation, jailbreak, least privilege / tool allow-listing, attack success rate (ASR), defence-in-depth.

---

:::note[Ďalej — druhá časť lekcie]

**[Obrana proti injection a red-teaming](./deep-dive.md)** — druhý prechod vrstvy guardrails: ako spotlighting naozaj označkuje nedôveryhodný text (delimiting, datamarking, encoding) a čo každá technika stojí a čo za ňu dostaneš, katalóg útokov cez prompt injection (priama verzus nepriama) a triedy jailbreakov. Ďalej red-teaming ako systematické útočné testovanie merané cez attack success rate a napokon rozpoznávanie a maskovanie osobných údajov: kam v pipeline patrí, aký je kompromis medzi presnosťou a úplnosťou a rozdiel medzi vratným a nevratným maskovaním.

Pozri aj: susedný prierezový aspekt [Evaluation](../evaluation/) (guardrails sa tiež merajú — attack success rate) a [Observability](../observability/); a pre disciplínu nedôveryhodného vstupu na strane agentov [prehĺbenie o MCP](../../../part-2-agents/mcp/deep-dive).

:::
