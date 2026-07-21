---
title: "Plán, kontrola, implementácia, kritik"
sidebar_position: 4
---

# Plán skontroluj pred začatím práce, výsledok kriticky posúď pred začlenením

Posledné tri lekcie zaviedli základné pojmy: [overiteľné fázy](./vision-to-stages.md), [atomické jednotky](./atomic-tasks.md), [artefakty ako rozhranie](./artifacts-interface.md). Táto lekcia opisuje cyklus, v ktorom tieto prvky fungujú, a tvorí základný kameň Časti II. Cyklus má presne dve rozhodujúce brány: **kontrolu pred napísaním akéhokoľvek kódu** a **kontrolu kritikom pred začlenením výsledku**. Medzi nimi prebieha lacné generovanie. Odstráň ktorúkoľvek bránu a cyklus sa znova zmení na nekontrolované generovanie, pred ktorým varovala Časť I.

## Najprv plán: tu je omyl najlacnejší

Kontrola plánu sa ti oplatí viac než ktorákoľvek iná kontrola: chybu v pláne opravíš jednou vetou, no rovnaká chyba v kóde znamená prepisovanie. Plán je artefakt zložený z overiteľných fáz, takže ho možno riadne skontrolovať — na rozdiel od napoly hotovej funkcionality. Prečítaj si ho ešte pred vznikom prvého riadka kódu: je práca rozdelená správne, dajú sa podmienky dokončenia naozaj overiť, nechýba niečo zásadné, od čoho závisí zvyšok? Každá chyba, ktorú zachytíš tu, je chyba, za ktorú neskôr nezaplatíš oveľa vyššiu cenu.

## Implementuj podľa skontrolovaného plánu

Potom sa spustí generovanie — lacno a bez zbytočných obmedzení, ale podľa plánu, ktorý si už skontroloval, nie podľa nového výkladu vymysleného za pochodu. Plán je zmluva; úlohou implementácie je plniť ho fázu po fáze, pričom každá fáza obsahuje podmienku dokončenia, ktorá určuje, kedy je hotová. Práve v tejto časti sú agenti skutočne dobrí a práve táto časť zlacnela. Sama osebe však znamená najmenej: implementácia, ktorú nikto nenaplánoval ani neskontroloval, je iba sebavedomo podaný výstup.

## Kritik je brána, nie odporúčanie

Pred začlenením výsledku prácu skontroluje kritik — a práve tu sa zbieha celý kurz. Kritik, ktorý iba radí, je skill, nie hook: model môže jeho radu prijať alebo ignorovať. Cyklus potrebuje bránu, cez ktorú práca neprejde, kým ju úspešne nezdolá. A nemôže ju spravovať ten istý agent, ktorý prácu vytvoril, pretože keď [agent si známkuje vlastnú domácu úlohu, nejde o overenie](../part-1-foundation/rules-that-hold.md): namiesto vykonania úlohy optimalizuje výsledok na kontrolu a nájde si skratku. Kritik preto musí byť nezávislý a nesmie môcť upravovať to, čo posudzuje: oddelenie právomocí (separation of duties) prenesené do cyklu. Simon Willison formuluje ľudskú verziu ako jednoznačné pravidlo: [neodosielaj pull request s kódom, ktorý si sám neskontroloval](https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/) (`REPORTED`). Pri bráne kritika prestáva byť tvrdenie z Časti I „kontrola je riadiaci bod“ heslom a mení sa na krok, ktorý nemožno preskočiť.

## Keď je celý cyklus priveľa

Rozsah cyklu sa riadi rizikom zmeny a nie každá úloha nesie rovnaké riziko. Použi celý obrad „plán — kontrola — implementácia — kritik“ na opravu jediného riadka a dostaneš [kladivo, o ktorom píše Böckeler](https://martinfowler.com/articles/harness-engineering.html): šestnásť akceptačných kritérií pre preklep (`REPORTED`). Platí tu rovnaký úsudok ako v Lekcii 2: prispôsob proces tomu, o čo ide. Jednorazový skript nepotrebuje bránu kritika; zmena autentifikácie v produkcii potrebuje obe brány a pri druhej človeka. Cyklus je riadiaci systém — prispôsobuj ho blast radius, nie každému stlačeniu klávesu.

:::tip[▶ Video]

<YouTube id="trfUBIDeI1Y" title="LLM as a Judge: Scaling AI Evaluation Strategies — IBM Technology" />

IBM vysvetľuje, ako používať model v úlohe automatizovaného kritika. Je to užitočný a praktický prístup, no platí upozornenie z tejto lekcie: model v úlohe hodnotiteľa vyvodzuje závery a dá sa oklamať, preto musí zostať nezávislý od posudzovanej práce a samotnú prácu nikdy neoptimalizuj na mieru hodnotiteľovi.

:::

## Tri úrovne — jednotlivec · malý tím · veľká organizácia

Pri každom rozsahu platí rovnaký princíp: **cyklus zahŕňa kontrolu pred začatím práce a bránu pred začlenením výsledku; túto bránu nespravuje ten istý aktér, ktorý vytvoril kontrolovaný výstup.** Mení sa iba to, kto bránu spravuje.

- **Jednotlivec.** Si autor aj kritik, preto ich oddeľ naozaj: pred implementáciou samostatne skontroluj svoj plán a pred začlenením samostatne skontroluj svoj diff; medzi týmito dvoma úkonmi musí byť výstup generátora. *Čomu tým zabrániš:* písaniu a „kontrole“ v jednom kroku, čo v skutočnosti nie je kontrola.
- **Malý tím.** Plán skontroluje druhý človek a zlúčenie stráži ďalší človek alebo spoločné CI, ktoré autor nemôže upravovať. Kritik nie je autor. *Čomu tým zabrániš:* formálnej kontrole na potvrdenie, keď brána síce existuje, ale vždy všetko prepustí.
- **Veľká organizácia.** Kontrola plánu aj brána pred zlúčením sú vynútené a preukázateľne nezávislé od implementátora; implementátor nemôže rozhodnutie kritika obísť. *Čomu tým zabrániš:* bráne ovládanej implementačným tímom, ktorá je bránou iba podľa názvu.

## Čo si odniesť

- Cyklus má dve brány: skontroluj plán pred začatím práce a výsledok kriticky posúď pred začlenením. Medzi nimi prebieha lacné generovanie, ktoré samo osebe znamená len málo.
- Prístup „najprv plán“ prináša najväčší úžitok z kontroly: chyba v pláne stojí jednu vetu, rovnaká chyba v kóde si vyžiada prepisovanie.
- Kritik je brána, nie odporúčanie, a nikdy ním nesmie byť agent, ktorý vykonal prácu. Keď si agent známkuje vlastnú domácu úlohu, namiesto vykonania úlohy optimalizuje výsledok na kontrolu.
- Rozsah procesu prispôsob riziku. Celý cyklus pri oprave jediného riadka je kladivo; autentifikácia v produkcii potrebuje obe brány a pri druhej človeka.

**[Nové pojmy](../glossary.md#plan-review-implement-critic)**: cyklus „plán — kontrola — implementácia — kritik“, kontrola plánu pred implementáciou, brána kritika.
