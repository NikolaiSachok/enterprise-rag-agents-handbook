---
title: Generation
slug: /part-1-rag/generation/
---

# Ako z kontextu poskladať odpoveď

Vrstva Retrieval odovzdala dobrý a povolený kontext. Teraz je na rade to „G“ z RAG — model musí z toho kontextu sformulovať odpoveď.

Drž v hlave rámec z prehľadu časti: zlyhanie generovania nastane vtedy, keď chunk (kúsok dokumentu), ktorý si potreboval, v kontexte síce bol, no odpoveď aj tak vyšla zle — model ho prehliadol, pokrivil alebo doň primiešal vlastný odhad. Táto vrstva je o tom, ako tomu zabrániť. Je to súrodenec zlyhania vyhľadávania z vrstvy [Retrieval](../retrieval/): tam potrebný chunk vo výsledku chýbal, tu bol po ruke a odpoveď ho aj tak minula.

## Jadro veci: odpovedať z kontextu, nie z pamäte

Každý LLM v sebe nesie **parametrické znalosti** (parametric knowledge) — všetko, čo do seba nasal počas trénovania. Keď mu nedáš mantinely, ochotne odpovie z tejto vnútornej pamäte: možno zastaranej, možno nesprávnej a určite nie z tvojich dokumentov.

RAG chce pravý opak — udržať model pri kontexte, ktorý mu podáš: čerstvom, povolenom, overiteľnom. Generovanie tu preto neznamená „pustiť modelu uzdu“, ale „udržať ho vnútri zdrojov“.

:::tip[▶ Video]

<YouTube id="cfqtFvWOfg0" title="Why Large Language Models Hallucinate — IBM Technology" />

Prečo model vôbec začne vymýšľať. (Video je v angličtine.)

:::

## Zostavenie promptu a skladanie kontextu

Polovica úspechu je v tom, ako prompt zostavíš a ako doň poskladáš kontext — teda **context packing** (skladanie kontextu). Základná stavba je jednoduchá: systémová inštrukcia, potom nájdené chunky (zreteľne oddelené) a nakoniec otázka používateľa. Najčastejšie sa lámu tri veci:

- **Zreteľne oddeliť kontext.** Vyznač, kde zdroje začínajú a kde končia, aby model rozoznal „dáta, z ktorých má odpovedať“ od „pokynov“. Zároveň je to prvá obranná línia proti prompt injection (podvrhnutým pokynom skrytým v dátach) — viac vo vrstve Guardrails (bezpečnostné mantinely).
- **Poradie: efekt lost-in-the-middle (strata uprostred).** Model „vidí“ začiatok a koniec dlhého kontextu lepšie a stráca to, čo je zahrabané uprostred. Odtiaľ pravidlo: nesyp doň 50 chunkov — podaj hŕstku tých najlepších (vďaka rerankingu, čiže preusporiadaniu poradia) a najrelevantnejšie umiestni na okraje.
- **Metadáta pre citácie (citations).** Zdroj a sekcia, pripojené ešte pri chunkingu, idú spolu s chunkom do promptu — inak odpoveď nemá čo citovať.

:::tip[▶ Video]

<YouTube id="1c9iyoVIwDs" title="4 Methods of Prompt Engineering — IBM Technology" />

Spôsoby, ako prompt poskladať. (Video je v angličtine.)

:::

## Grounding instructions — hlavná páka proti halucináciám

Najsilnejší nástroj je zároveň ten najjednoduchší: daj modelu jasné mantinely. „Answer only from the provided context. If the answer isn't there, say so — don't make it up.“ (v preklade: „Odpovedaj iba z poskytnutého kontextu. Ak tam odpoveď nie je, povedz to — nevymýšľaj si.“) Sú to **grounding instructions** (inštrukcie na opretie o kontext).

Jediný takýto pokyn citeľne zníži podiel halucinácií, lebo modelu vezme „licenciu“ čerpať odpoveď z pamäte.

## Citácie

Nechaj model pri každom tvrdení uviesť, z ktorého chunku alebo zdroja pochádza. Zisk je dvojaký: používateľ si odpoveď vie overiť (to je dôvera) a samotný model si menej vymýšľa — ťažšie sfalšuješ fakt, keď k nemu musíš pripísať zdroj. Celé to beží z metadát, ktoré si pripojil ešte pri chunkingu.

## Odmietnutie je funkcia, nie chyba

Systém musí smieť povedať „neviem“ — a treba mu to výslovne prikázať. Sebavedomá nesprávna odpoveď (chyba, nie zlyhanie) je horšia než úprimné „toto v dokumentoch nie je“.

Keď vyhľadávanie nič nevrátilo, odpoveďou má byť **odmietnutie** (refusal), nie odhad. V podnikovom prostredí je to zásadné: ľudia sa o sebavedomú odpoveď oprú ako o fakt a jediná chyba sa dostane ďalej — do reportu, do niečieho rozhodnutia.

## Faithfulness: kde sa generovanie meria

Aj s inštrukciami model občas prebije kontext vlastnou znalosťou alebo zaváha, keď kontext protirečí tomu, čo „si myslí“.

Nakoľko sa odpoveď naozaj opiera o zdroje, to **meriaš** — metrikou **faithfulness** (vernosť zdrojom), tiež groundedness. Sformalizuje ju vrstva [Evaluation](../cross-cutting/evaluation/); zatiaľ si drž myšlienku, že „model sa správa dobre“ nie je pocit, ale číslo (skóre).

## Zlyhanie generovania po jednotlivých spôsoboch

Ľavý stĺpec vymenúva konkrétne spôsoby zlyhania v rámci tejto kategórie; každý má svoju nápravu.

| Spôsob zlyhania | Náprava |
|---|---|
| Ignoroval chunk, ktorý potreboval | menej šumu (reranking → málo chunkov) + grounding instruction |
| Vymyslel si fakt | grounding + citácie + dovolené odmietnutie |
| Stratil to, čo bolo uprostred | poradie chunkov, menej chunkov |
| Odpovedal zo zastaranej pamäte | tvrdé priviazanie na kontext, „iba zo zdrojov“ |

## Čo si odniesť z lekcie

- Generovanie v RAG = odpoveď z kontextu, nie z parametrickej pamäte.
- Zostavenie promptu: zdroje zreteľne oddeľ, počítaj s efektom lost-in-the-middle a podaj hŕstku najlepších chunkov.
- Grounding instructions („iba z kontextu, inak — neviem“) sú hlavná páka proti halucináciám.
- Citácie dávajú overiteľnosť a samy osebe znižujú mieru vymýšľania.
- Odmietnutie je normálne správanie, nie porucha.
- Faithfulness ku kontextu sa meria — a to je mostík k vrstve Evaluation.

**[Nové pojmy](../../glossary.md)**: grounding, grounding instructions, context packing, lost-in-the-middle, citations / attribution, refusal / abstention, faithfulness / groundedness, parametric knowledge, hallucination.

---

:::note[Ďalej — druhá časť lekcie]

**[Sebakontrola a štruktúrovaný výstup](./deep-dive.md)** — druhý prechod vrstvy Generation: slučky sebakontroly (chain-of-verification, self-consistency), štruktúrovaný výstup a vynútené citácie cez obmedzené dekódovanie, konflikt kontextu a parametrickej pamäte, skladanie dlhého kontextu za hranicou lost-in-the-middle a tvarovanie odpovede (formát, tón, dĺžka).

Pozri aj: čo do tejto vrstvy vstupuje — [Retrieval](../retrieval/); odkiaľ chunky pochádzajú — [Ingestion](../ingestion/); a ako sa faithfulness naozaj meria — [Evaluation](../cross-cutting/evaluation/).

:::
