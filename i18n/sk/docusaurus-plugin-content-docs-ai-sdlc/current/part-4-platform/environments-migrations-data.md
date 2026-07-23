---
title: "Prostredia, migrácie a reálne dáta"
sidebar_position: 3
---

# Agent dostane kópiu a každá zmena cestu späť

[Lekcia 1](./secrets.md) držala hodnotu secretu mimo dosahu agenta a [Lekcia 2](./least-privilege-sandboxing.md) vymerala oprávnenie a postavila okolo neho sandbox. Táto lekcia je o tom, *na čo* to oprávnenie mieri: na dáta a na schému. Dve polovice, a každá zlyháva opačným smerom. Agent má pracovať s dátami, ktoré sú vierohodné, ale nie skutočné — a každá štrukturálna zmena, ktorú urobí, musí mať cestu späť, ktorú si už naozaj prešiel.

## Vierohodné dáta, nie reálne dáta

Agentovi sa nad vierohodnými dátami uvažuje lepšie, a tak tu stále visí jedno lákadlo: skopírovať produkčný dump do vývojového prostredia a nechať agenta pracovať nad niečím pravdivým. Problém vierohodnosti to vyrieši a naraz vyrobí dva horšie.

Prvý je regulačný a tvrdý: kópia osobných údajov sú stále osobné údaje. Presunom do slabšie chráneného prostredia sa povinnosti, ktoré sa na ne viažu, nestratia — iba pribudnú miesta, ktoré ich musia spĺňať (`ASSERTED`, priame čítanie predpisov o ochrane údajov, ako je GDPR). Druhý je ten, okolo ktorého IV. časť stále krúži: čo leží vo vývojovom prostredí, to agent číta, a [Lekcia 1](./secrets.md) ukázala, že jeho kontext nie je kanál, ktorý máš celý pod kontrolou. Skutočné záznamy zákazníkov tak vojdú do požiadavky odoslanej poskytovateľovi modelu, možno aj do jeho logov a v horšom prípade do vygenerovaného súboru s testovacími dátami, ktorý niekto komitne.

Alternatívou je dátová množina, ktorá zachová *tvar* produkcie a nezachová *ľudí*: generované syntetické záznamy alebo maskovaná podmnožina. O použiteľnosti rozhodujú dve vlastnosti. Musí prežiť **referenčná integrita (referential integrity)** — ak si cudzie kľúče v maskovaných dátach prestanú sedieť, testy prejdú z dôvodov, ktoré s kódom nesúvisia. A musí prežiť **rozdelenie hodnôt (distribution)** vrátane toho škaredého chvosta: prázdny reťazec, meno s apostrofom, adresa so 400 znakmi, riadok starší než posledná zmena schémy. Syntetické dáta, v ktorých je iba bezproblémová cesta, nie sú korpus — je to testovacia vzorka, ktorá sa naň iba hrá.

Patrí sem jedno poctivé upozornenie, lebo táto technika sa často predáva lepšie, než aká je. Maskovanie nie je automaticky anonymizácia. Dátová množina zbavená priamych identifikátorov sa často dá spätne priradiť k osobám prepojením s iným zdrojom a generátor syntetických dát si môže zapamätať kusy skutočných dát a zopakovať ich (`REPORTED`, opakované zistenie vo výskume ochrany súkromia). Maskovanú aj syntetickú množinu preto ber ako *menej* rizikovú, nie ako *bezrizikovú*, a podľa toho ju do verejných repozitárov nedávaj.

:::tip[▶ Video]

<YouTube id="QQtSa9ngqQk" title="Can you trust synthetic data? — IBM Technology" />

IBM kladie otázku, na ktorej táto lekcia trvá, namiesto toho, aby si odpoveď domyslelo. Sleduj video pre spôsoby zlyhania: syntetické dáta dedia skreslenia a môžu vypustiť úlomky skutočných dát, z ktorých vznikli — a práve preto riziko znižujú, nie odstraňujú, a preto zostáva bezpečným predvoleným pravidlom „agent sa produkcie nikdy nedotkne“.

:::

## Migrácie: rozšíriť, migrovať, zúžiť

Pri zmene schémy sa rýchlosť agenta mení na nebezpečenstvo, lebo deštruktívna a bezpečná migrácia vyzerajú v diffe rovnako — pár riadkov SQL tak či tak. III. časť už v texte o [revízii pri veľkom objeme](../part-3-verification/review-at-volume.md) ukázala, že ľudská pozornosť sa negeneruje spolu s kódom, takže „niekto si to `DROP` všimne“ nie je kontrola.

Rýchle generovanie prežije postup **rozšíriť → migrovať → zúžiť (expand → migrate → contract)**, známy aj ako paralelná zmena:

1. **Rozšír.** Pridaj nový stĺpec, tabuľku alebo index. Aditívne, spätne kompatibilné, bezpečne nasaditeľné, kým ešte beží starý kód.
2. **Migruj.** Doplň dáta a potom presuň čítanie a zápis na nový tvar — po jednom kroku, pričom každý sa dá nasadiť aj vrátiť samostatne.
3. **Zúž.** Starý tvar odstráň až vtedy, keď sa v produkcii dosť dlho nepoužíval na to, aby si si bol istý — a urob to ako vlastnú, zámernú zmenu, nikdy pribalenú k funkcionalite.

Každý krok sa dá vrátiť samostatne, a práve táto vlastnosť rozhoduje, keď zmena vznikla za štyri sekundy. Vynucovať to má stroj, nie ostražitosť: deterministická brána, ktorá zhodí každú migráciu s deštruktívnym príkazom bez výslovnej značky, mení „dávaj pozor“ na [pravidlo, ktoré drží](../part-1-foundation/rules-that-hold.md). Je to celý argument I. časti, uplatnený na jediný typ súboru, kde sa chyba nedá napraviť úpravou kódu.

## Možnosť vrátiť sa musíš postaviť, nie v ňu dúfať

Záloha, ktorú si nikdy neobnovil, nie je záloha; je to neoverené tvrdenie o súbore. Presne to hovorila III. časť o bráne, ktorú si nikdy nevidel zlyhať — ticho nie je to isté čo funkčnosť — len prenesené na cestu obnovy. Obnovu preukáže jedine nacvičený postup: vezmi zálohu, postav z nej dočasné prostredie a over, že dáta tam naozaj sú a držia spolu.

[Incident v Replite](https://incidentdatabase.ai/cite/1152/) z predchádzajúcej lekcie v sebe ukrýva ešte druhé poučenie. Agent zničil produkčné dáta a potom tvrdil, že návrat späť nie je možný — a mýlil sa (`REPORTED`). Zaujímavé zlyhanie nie je to nepravdivé tvrdenie; je ním fakt, že mu nikto nedokázal okamžite odporovať. Keď je obnova známy a odskúšaný postup, názor agenta na to, či je vôbec možná, nikoho nezaujíma. Keď taký postup nie je, vyhrá najrýchlejší sebaistý hlas v miestnosti — a môže patriť jazykovému modelu.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Invariant sa nehýbe: **agent pracuje nad vierohodnou kópiou a každá štrukturálna zmena sa dá samostatne vrátiť postupom, ktorý už niekto naozaj vykonal.** Škáluje sa to, ako kópia vzniká a ako silno je vratnosť preukázaná.

- **Soloista.** Lokálna databáza naplnená počiatočnými dátami, ktorú smie agent beztrestne zničiť, produkčné prihlasovacie údaje nikde v blízkosti stroja a jedna nacvičená obnova, aby si vedel, že záloha funguje. *Akému zlyhaniu to predchádza:* až po prepísaní dát agentom zistíš, že to bola jediná kópia skutočných údajov.
- **Malý tím.** Neprodukčné prostredie ako predvolený cieľ, maskovaná alebo syntetická množina z opakovateľnej pipeline namiesto ručnej výroby, migrácie postupom rozšíriť/zúžiť s bránou v CI na deštruktívne príkazy a obnova k bodu v čase s pravidelným nácvikom. *Akému zlyhaniu to predchádza:* z „dočasného“ produkčného dumpu sa potichu stane spoločná testovacia vzorka celého tímu.
- **Enterprise.** Preukázateľne oddelené prostredia, klasifikácia dát, ktorá automaticky riadi politiku maskovania, samostatné schvaľovanie zužujúcich migrácií a obnova po havárii testovaná voči stanoveným cieľom RPO a RTO. *Akému zlyhaniu to predchádza:* schopnosť obnovy existuje na papieri, nepatrí nikomu a prvýkrát sa vyskúša počas incidentu, pre ktorý bola napísaná.

## Čo si odniesť

- **Vierohodné, nie reálne.** Produkčný dump vo vývojovom prostredí rozmnoží miesta, ktoré nesú povinnosti spojené s osobnými údajmi — a podá skutočné záznamy do kontextu agenta, ktorý nie je kanál pod tvojou kontrolou.
- Použiteľná syntetická alebo maskovaná množina zachová **referenčnú integritu** a **škaredý chvost rozdelenia**. Vzorky s jedinou bezproblémovou cestou vyrobia zelené testy bez výpovede.
- Maskovanie nie je anonymizácia. Spätné priradenie osôb prepojením zdrojov aj zapamätávanie v generátoroch sú skutočné; ber kópiu ako menej rizikovú, nikdy ako bezrizikovú.
- **Rozšíriť → migrovať → zúžiť.** Predvolene aditívne, každý krok samostatne vratný, zúženie ako vlastná zámerná zmena — a deterministická brána na deštruktívne príkazy, lebo pri rýchlosti generovania si ten jeden nebezpečný riadok nikto spoľahlivo nevšimne.
- **Záloha, ktorú si nikdy neobnovil, nie je záloha.** Nacvič obnovu, aby otázka, či sa dá vrátiť späť, bola fakt, ktorý vlastníš, a nie tvrdenie, ktoré vyslovil agent.

**[Nové pojmy](../glossary.md#environments-migrations-and-real-data)**: vierohodné, nie reálne dáta, maskovanie dát verzus anonymizácia, referenčná integrita, chvost rozdelenia, rozšíriť–migrovať–zúžiť (paralelná zmena), brána na deštruktívne príkazy, nacvičená obnova, obnova k bodu v čase.
