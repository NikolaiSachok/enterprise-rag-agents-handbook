---
title: Multi-agent systems
slug: /part-2-agents/multi-agent/
---

# Namiesto jedného agenta niekoľko špecializovaných

Každá doterajšia lekcia druhej časti stavala jedného agenta. Agentický RAG mu dal slučku — úvaha, rozhodnutie, akcia, pozorovanie; [používanie nástrojov](../tool-use/index.md) mu dalo, čo v tej slučke volať; [plánovanie a slučky](../planning-loops/index.md) ho naučili rozložiť úlohu na kroky, viesť ich k cieľu a napokon zastaviť. Zakaždým to bol jeden agent, ktorý rástol do šírky.

Táto lekcia sa pýta inak: čo ak namiesto jedného agenta postavíš niekoľko špecializovaných, ktorí na úlohe spolupracujú? Dve otázky nesú celú lekciu a vážia rovnako — prečo jedného agenta rozdeliť na viacerých, a kedy to nerobiť.

Disciplína z agentického RAG platí ďalej: vezmi najjednoduchšiu úroveň, ktorá úlohu vyrieši. **Multiagentový systém** (multi-agent system) je drahšia úroveň, nie odmena za to, že si postavil niečo pôsobivé.

:::tip[▶ Video]

<YouTube id="kYkZI3oj2W4" title="Multi AI Agent Systems: When One AI Brain Isn't Enough — IBM Technology" />

Ten istý prípad vo výklade IBM: kedy jeden agent prestane stačiť a prácu rozdelíš medzi tím. (Video je v angličtine.)

:::

## Prečo jedného agenta rozdeliť na viacerých

Dôvody sú štyri a neťahajú rovnako silno.

- **Špecializácia (specialisation).** Agent so zúženou rolou, doladeným promptom a hŕstkou nástrojov porazí jedného mega-agenta, ktorý naraz nesie päťdesiat nástrojov. Je to multiagentové rozšírenie zásady z [používania nástrojov](../tool-use/index.md) — málo nástrojov, bez prekryvov: menšia, neprekrývajúca sa sada na jedného agenta znamená menej chýb pri výbere nástroja a predvídateľnejšie správanie.
- **Izolácia kontextu (context isolation)** — dôvod, ktorý škáluje. Každý agent dostane vlastné kontextové okno. Orchestrátor (orchestrator), teda vedúci agent, vidí iba výsledok, ktorý mu jednotlivý vykonávateľ (worker, sub-agent) vráti, nie však jeho priebežnú úvahu ani surový výstup nástrojov. Vďaka tomu multiagentový systém zvládne prácu, ktorej celý priebežný kontext by sa do jedného okna nikdy nezmestil. Namiesto jedného okna, ktoré sa plní šumom všetkých, si každý agent drží vlastný pohľad sústredený na kúsok, ktorý má na starosti.
- **Modularita (modularity).** Nezávislých agentov postavíš, otestuješ a znovu použiješ oddelene — z rovnakého dôvodu, z akého monolit rozdelíš na služby.
- **Paralelizmus (parallelism).** Nezávislé čiastkové úlohy bežia súbežne naprieč agentmi namiesto toho, aby sa radili za sebou v jednej slučke.

## Topológie — ako sú agenti prepojení

Ustálených tvarov je niekoľko a väčšina reálnych systémov je jeden z nich — alebo ich zloženina. Tomu, ako sú agenti prepojení, sa hovorí topológia (topology).

- **Orchestrátor–vykonávatelia (orchestrator–workers)**, tiež supervízor (supervisor). Vedúci agent rozloží úlohu, každú čiastkovú úlohu nasmeruje na špecializovaného vykonávateľa, ktorý sa naňu hodí, a výsledky spojí do jednej odpovede. Je to najčastejšia topológia a zvyšok lekcie sa o ňu opiera.
- **Reťaz agentov (agent chain)**, sekvenčná. Agenti v reťazi postupne pretvárajú výstup toho predošlého: autor → redaktor → overovateľ faktov, každý odovzdá svoju prácu ďalšiemu. Výstup jedného je vstupom nasledujúceho, v pevne danom poradí.
- **Hierarchická topológia (hierarchical).** Orchestrátori orchestrátorov — supervízor, ktorého vykonávatelia sú sami supervízormi vlastných tímov. Je to vzor orchestrátor–vykonávatelia dovedený do hĺbky, pre úlohy priveľké na jeden plochý tím.
- **Debata / kritik (debate / critic).** Generujúci agent navrhne riešenie, agent-kritik ho spochybní — alebo niekoľko agentov nezávisle vytvorí vlastné riešenia a vyberie sa najlepšie. Nezávislé pohľady tu dvíhajú kvalitu z rovnakého dôvodu ako slepí recenzenti: pohľad zvonka zachytí to, čo by si jedna reťaz cestou zdôvodnila a nechala prejsť.

## Komunikácia — správy a odovzdanie riadenia

Agenti sa medzi sebou dorozumievajú odovzdávaním správ (message passing). Krok, ktorý prácu naozaj presunie, je **odovzdanie riadenia (handoff)**: agent podá druhému riadenie spolu s kontextom, ktorý k tomu patrí.

Kľúčové rozhodnutie pri návrhu je, aký kontext na každom odovzdaní putuje. Málo — a príjemca prácu neurobí. Priveľa — a kontext napuchne a vykonávateľ stratí niť.

Je to multiagentová obdoba zásady z používania nástrojov, že *definícia nástroja je prompt* — tu platí, že *odovzdávacia správa je prompt*. Musí niesť presne to, čo má ďalší agent urobiť, a nič navyše.

## Orchestrátor je sám iba agent

Je lákavé brať orchestrátora ako akúsi novú súčiastku. Nie je. Orchestrátor je agent, ktorý naraz robí tri známe veci:

- **Dekompozícia** — rozloží cieľ na čiastkové úlohy; lekcia o [plánovaní a slučkách](../planning-loops/index.md) použitá priamo.
- **Smerovanie** — každú čiastkovú úlohu pošle správnemu vykonávateľovi. Je to **router (smerovač)** z [agentického RAG](../agentic-rag/index.md), len teraz smeruje čiastkovú úlohu na *agenta*, nie dopyt na nástroj či index.
- **Syntéza** — výsledky vykonávateľov spojí do konečnej odpovede.

Jeho „nástrojmi“ sú práve subagenti. To je celý trik: koncepčne nič nové, iba skoršie primitíva prevrátené na agentov namiesto funkcií.

## Cena — a kedy to nerobiť

Doteraz šla reč o dôvodoch za. Teraz úprimná brzda, lebo multiagentové systémy sú presne to miesto, kde tímy prestrelia rozpočet.

- Cena aj latencia sa násobia. N agentov znamená približne N× volaní modelu oproti jednému agentovi. Je to skok v cene aj v latencii, nie je to zadarmo.
- Chyby sa šíria. Chyba jedného agenta otrávi všetko, čo je za ním. Niet spoločnej pravdy, o ktorú by sa dalo oprieť, takže nesprávny priebežný výsledok jednoducho vezme ďalší agent v poradí ako fakt.
- Koordinácia niečo stojí. Agenti sa môžu zle dorozumieť, zdvojiť si prácu alebo uviaznuť jeden na druhom (deadlock).
- Ťažšie sa ladí a hodnotí. Trajektória je teraz rozprestretá cez viacerých agentov, takže observability (pozorovateľnosť) musí jednotlivé kúsky pozošívať do jedného súvislého trace (záznamu behu). Podčiarkuje to poznatok z [plánovania a slučiek](../planning-loops/index.md) — že musíš prejsť celú trajektóriu — len teraz už ani nesídli na jednom mieste.

Z toho plynie pravidlo. Jeden dobre navrhnutý agent zvyčajne vyhrá. Po multiagentovom systéme siahni len pre skutočnú špecializáciu, pre kontext, ktorý sa do jedného okna nezmestí, alebo pre naozaj paralelizovateľné čiastkové úlohy — tá istá disciplína *vezmi najjednoduchšiu úroveň, ktorá úlohu vyrieši* z [agentického RAG](../agentic-rag/index.md).

## Konkrétny príklad — jeden si už asi použil

Redakčné a autorské tímy, ktoré tvoria príručku, ako je táto, *sú* multiagentové systémy typu orchestrátor–vykonávatelia. Vedúci — šéfredaktor alebo vedúci autor — rozloží prácu a nasmeruje ju na nezávislých špecialistov: literárneho redaktora, naivného čitateľa, overovateľa faktov, prekladateľa. Potom ich správy spojí do hotovej stránky. Špecialisti sú zámerne držaní navzájom slepí, presne z toho dôvodu ako pri debate a kritikovi: nezávislé pohľady zachytia viac než jeden recenzent v poradí za sebou.

Deep-research systémy majú rovnaký tvar. Vedúci agent rozvetví prácu na niekoľko vyhľadávačov, ktorí bežia súbežne, a syntetizátor potom spojí, čo našli, do jednej odpovede. Tá istá topológia, iná úloha.

## Čo si odniesť z lekcie

- Multiagentový systém je drahšia úroveň, nie odmena — vezmi najjednoduchšiu úroveň, ktorá úlohu vyrieši, a buď pripravený povedať *kedy nie* rovnako pohotovo ako *kedy áno*.
- Štyri dôvody rozdeliť: špecializácia (zúžená rola plus malá, neprekrývajúca sa sada nástrojov), izolácia kontextu (každý agent vlastné okno, orchestrátor vidí iba výsledky — dôvod, ktorý škáluje), modularita, paralelizmus.
- Štyri topológie: orchestrátor–vykonávatelia (vedúci rozloží, nasmeruje, spojí — tá častá), reťaz (každý agent pretvorí výstup predošlého), hierarchia (orchestrátori orchestrátorov), debata/kritik (nezávislé pohľady dvíhajú kvalitu).
- Agenti komunikujú správami; odovzdanie riadenia posunie riadenie spolu s kontextom a *odovzdávacia správa je prompt* — nes presne to, čo príjemca potrebuje, nič viac.
- Orchestrátor je iba agent: dekompozícia, smerovanie a syntéza, so subagentmi v úlohe nástrojov. Nič nové, staré primitíva nanovo namierené.
- Brzda: cena aj latencia sa násobia (približne N×), chyby sa šíria bez spoločnej pravdy, koordinácia niečo stojí, ťažšie sa ladí a hodnotí (trajektóriu treba pozošívať cez agentov). Jeden dobre navrhnutý agent zvyčajne vyhrá.
- Jeden si už videl: redakčný a autorský tím za príručkou aj deep-research systémy sú tímy typu orchestrátor–vykonávatelia — vedúci, ktorý rozloží, nasmeruje na slepých špecialistov a spojí.

**Nové pojmy** → [Glosár](../../glossary.md): multi-agent system, orchestrator / supervisor, worker / sub-agent, handoff, agent chain, critic / debate.

---

:::note[Ďalej — druhá časť lekcie]

**[Protokoly a koordinácia](./deep-dive.md)** — konkrétne medziagentové protokoly a schémy správ, architektúry so zdieľanou pamäťou (blackboard), vzory prideľovania rolí a vyjednávania, hodnotenie tímu, ktoré pozošíva trajektóriu naprieč agentmi, a politiky na udržanie nákladov na uzde.

Pozri aj: ako sa orchestrátor a izolovaní vykonávatelia stavajú naprieč Claude, OpenAI a Gemini — [záverečná stránka časti](../real-agents/); všeobecná vrstva riadenia slučky a rozpočtu — [plánovanie a slučky](../planning-loops/index.md).

:::
