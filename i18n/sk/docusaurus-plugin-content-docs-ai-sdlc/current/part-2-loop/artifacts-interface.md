---
title: "Artefakty ako jediné rozhranie"
sidebar_position: 3
---

# Ak hranicu neprekročil artefakt, neprekročilo ju nič

[Prvá lekcia](./vision-to-stages.md) určila pre každú etapu podmienku dokončenia a [Druhá lekcia](./atomic-tasks.md) stanovila primeranú veľkosť etáp. Táto lekcia je o tom, čo sa odovzdáva *medzi* nimi. Etapy si odovzdávajú prácu prostredníctvom **písomných artefaktov, nie rozhovoru** — a artefakt na každej hranici je jediná vec, ktorú môže posudzovateľ alebo nasledujúci agent skutočne preskúmať. Rozhodnutie, špecifikácia či výsledok, ktoré zostali iba v chate a nikdy sa nestali artefaktom, v skutočnosti hranicu neprekročili: nie je čo posúdiť, s čím porovnať zmeny ani voči čomu kontrolovať nasledujúcu etapu.

## Rozhovor nie je odovzdanie práce

Rozhovor sa nedá riadne skontrolovať. Nemôžeš si pozrieť jeho diff, porovnať ho s podmienkou dokončenia ani ho odovzdať novému agentovi bez opätovného zhrnutia — a pri sumarizácii sa informácie strácajú. Len čo na výstupe etapy skutočne záleží, musí opustiť rozhovor a stať sa niečím na disku: plánom, špecifikáciou, patchom alebo výsledkom testu. Skontrolovať sa dá iba konkrétna vec. „Je to vo vlákne“ je pri odovzdávaní práce obdobou tvrdenia „vyzerá to hotové“ — je to stav, ktorý sa tvári vierohodne, no nedá sa overiť.

## Artefakt je zmluva

To, čo prekročí hranicu, je zmluvou medzi etapami. Určuje, čo môže nasledujúca etapa oprávnene predpokladať a voči čomu sa bude kontrolovať. Podmienka dokončenia z Prvej lekcie tak dostáva konkrétnu a prenosnú podobu — artefakt *je* overiteľný fakt, zapísaný tam, kde si ho môže nasledujúca etapa prečítať. Dobrý hraničný artefakt je dostatočne malý, aby sa dal prečítať, a dostatočne konkrétny, aby sa podľa neho dalo overovať. Ide o rovnakú spodnú a hornú hranicu, akú Druhá lekcia stanovila pre pracovné jednotky, ibaže teraz sa vzťahuje na to, čo zapisuješ, a nie na to, čo vytváraš.

## Resetuj kontext, nesumarizuj ho

Pri prenášaní stavu naprieč dlhou úlohou sa často objavuje jeden chybný postup: **zhutňovanie kontextu** — keď sa okno zapĺňa, rozhovor sa sumarizuje priamo v ňom. Informácie sa pritom strácajú a význam sa postupne posúva, pretože každé zhrnutie je prekladom toho predchádzajúceho. Spoľahlivejší je opačný postup: [reset namiesto zhutňovania kontextu](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) — odovzdať nasledujúcemu kroku trvalý artefakt a začať s čistým kontextom namiesto ďalšieho vlečenia zhrnutého prepisu (`REPORTED`, údaj dodávateľa). Reset kontextu prežije práve artefakt; prepis rozhovoru na to nikdy nebol určený. To je hlbší dôvod, prečo musí byť rozhranie zapísané: ako jediné pretrvá dlhšie než kontextové okno.

## Artefakty však spôsobujú aj zahltenie

Tu vzniká napätie, ku ktorému sa táto časť opakovane vracia. Tie isté artefakty, vďaka ktorým možno odovzdanie práce kontrolovať, bez riadenia spôsobujú **zahltenie artefaktmi** — namerané zlyhanie, pri ktorom väčšie množstvo generovaného kontextu na úlohu v skutočnosti [znižuje úspešnosť a zvyšuje náklady](https://arxiv.org/abs/2602.11988) (`MEASURED`). Rozhranie sa preto nemôže jednoducho neobmedzene hromadiť. Musí byť **vymedzené rozsahom úlohy a po dokončení vyčistené**: hranicu prekročí iba to, čo potrebuje nasledujúca etapa, a dokončené veci sa odstránia namiesto toho, aby sa zo zvyku prenášali ďalej. Vymedzovanie rozsahu a odstraňovanie si vyžadujú disciplínu; systematický prístup pomocou úrovní opisuje [lekcia z Prvej časti o pamäti projektu](../part-1-foundation/project-memory-and-tiering.md).

## Ako vyzerá tento prístup v plnej podobe

Takto vyzerá plne realizované rozhranie založené na artefaktoch v praxi: repozitár Kenton Varda [`cloudflare/workers-oauth-provider`](https://github.com/cloudflare/workers-oauth-provider) obsahuje prompty, pomocou ktorých vznikol, *priamo v histórii git*, a bezpečnostní inžinieri skontrolovali kód riadok po riadku voči RFC (`REPORTED`). Prompt je artefakt; kontrola prebieha voči špecifikácii — RFC — a nie podľa pocitu; celú reťaz možno spätne auditovať. Každú hranicu prekročilo niečo, čo mohol niekto preskúmať. To je latka, ktorú treba dosiahnuť, a práve preto, že si vyžaduje prácu, sa to darí iba zriedka.

:::tip[▶ Video]

<YouTube id="UC4vDpSJCkM" title="How to Pass Context in an Agentic AI Flow — IBM Technology" />

IBM vysvetľuje presun kontextu medzi krokmi agentného procesu — praktickú stránku tejto lekcie — a upozorňuje na to isté: odovzdaj artefakt, ktorý potrebuje nasledujúci krok, nie celý rozhovor.

:::

## Tri úrovne — jednotlivec · malý tím · podnik

Princíp platí pri každej mierke: **hranicu musí prekročiť artefakt, ktorý môže niekto preskúmať.** Mení sa iba to, kto ho kontroluje a ako dlho musí pretrvať.

- **Jednotlivec.** Odovzdanie práce si zapíš — do súboru s plánom, diffu alebo uloženého výstupu testov — namiesto toho, aby si ho držal v hlave či v chate. *Akému zlyhaniu to zabráni:* rozhodnutie zostalo iba v rozhovore a o týždeň ho už nemožno zrekonštruovať.
- **Malý tím.** Spoločné, verzované artefakty sú zmluvou medzi ľuďmi a etapami: pull request je artefakt a návrhový dokument je artefakt. *Akému zlyhaniu to zabráni:* dvaja ľudia majú odlišné predstavy o tom, „na čom sme sa dohodli“, pričom ani jedna nie je zapísaná.
- **Podnik.** Artefakty tvoria auditnú stopu — každé prekročenie hranice zanechá trvalý, kontrolovateľný záznam, ktorého rozsah aj uchovávanie sú zámerne nastavené. *Akému zlyhaniu to zabráni:* rozhranie buď nemožno auditovať (nič nie je zapísané), alebo sa topí v údajoch (zapísané je všetko a nič sa neodstraňuje).

## Čo si odniesť

- Etapy si odovzdávajú prácu prostredníctvom písomných artefaktov, nie rozhovoru. Ak hranicu neprekročil artefakt, neprekročilo ju nič — nie je čo posúdiť ani s čím porovnať zmeny.
- Artefakt je zmluva: určuje, čo môže nasledujúca etapa predpokladať a voči čomu sa bude kontrolovať. Je to podmienka dokončenia z Prvej lekcie v prenosnej podobe.
- Reset namiesto zhutňovania kontextu: naprieč dlhou úlohou prenášaj trvalý artefakt, nie zhrnutý prepis. Artefakt pretrvá dlhšie než kontextové okno; prepis nie.
- Vymedz rozsah a odstraňuj. Tie isté artefakty, vďaka ktorým možno odovzdanie práce kontrolovať, pri hromadení spôsobujú zahltenie artefaktmi — odovzdaj iba to, čo potrebuje nasledujúca etapa, a dokončené veci odstráň.

**[Nové pojmy](../glossary.md#artifacts-as-interface)**: artefakt ako rozhranie, reset kontextu a zhutňovanie kontextu, trvalé odovzdanie práce, vymedzenie rozsahu a odstraňovanie.
