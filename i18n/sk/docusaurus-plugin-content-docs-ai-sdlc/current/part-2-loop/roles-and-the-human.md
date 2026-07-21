---
title: "Roly a miesto človeka"
sidebar_position: 5
---

# Človek je smerovač, nie fáza

[Lekcia 4](./plan-review-implement-critic.md) dala cyklu dve brány. Táto posledná lekcia určuje miesto človeka voči cyklu — a práve o toto miesto ide. Úlohou človeka nie je byť ďalšou fázou vnútri cyklu a dostať sa na rad medzi plánovačom a kritikom. Má stáť **nad** cyklom: vymedziť cieľ, nastaviť podmienky dokončenia, zodpovedať za brány a rozhodovať, čo kam smeruje a ktoré zmeny sa smú dostať do hlavnej vetvy. Keď sa cyklus zrýchli, človeka zapojeného ako jednu z jeho fáz vytlačí ako prvého. Cyklus sa však naďalej zodpovedá človeku, ktorý stojí nad ním.

## Roly a tá, ktorá nie je fázou

V cykle fungujú pracovné roly: niečo plánuje, niečo implementuje a niečo kritizuje. Agenti môžu zastávať všetky tri — a robia to čoraz častejšie. Človek má iný druh roly. Nie je krokom v poradí, ale smerovačom nad celým procesom: pretavil cieľ do [overiteľných etáp](./vision-to-stages.md), určil, čo znamená „dokončené“, zodpovedá za bránu kritika a prijíma konečné rozhodnutie o začlenení zmeny. Kief Morris túto pozíciu opisuje ako miesto „nad cyklom“, nie vnútri neho: [človek dohliada na cyklus namiesto toho, aby sa v ňom dostal na rad](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html) (`REPORTED`). Vnútri cyklu sa staneš úzkym miestom hneď, ako ťa agenti predbehnú. Nad cyklom si riadiacim bodom, ktorému sa celý systém zodpovedá — a táto rola sa so zrýchľovaním generovania nespomaľuje.

## Kde musí zostať človek

Nie všetko si vyžaduje človeka a predstierať opak je samo osebe zlyhaním. Niekoľko kontrolných bodov je však nedelegovateľných: ak ich prenecháš cyklu, stratí základ svojej dôveryhodnosti. Sú tri: **nastavenie podmienok dokončenia** — cyklus, ktorý si píše vlastné akceptačné kritériá, si sám známkuje domácu úlohu; **zodpovednosť za bránu kritika** všade, kde zlyhanie predstavuje problém bezpečnosti alebo správnosti — pravidlo z časti I naďalej platí: musí tam byť hook a za týmto hookom stojí človek; a **rozhodnutie o začlenení** zmeny s veľkým blast radius. Neznamená to „kontrolovať všetko“. Kontrolovať všetko je pasca formálneho odklepnutia: človek, ktorý denne prepustí dvesto výstupov agentov, nevykonáva dohľad, iba vytvára jeho zdanie. Nedelegovateľné kontrolné body sú konkrétne miesta, kde je úsudok človeka samotným kontrolným mechanizmom a nič iné ho nedokáže nahradiť.

## Preťaženie vytlačí človeka ako prvého

Poslednýkrát sa vracia opakujúce sa zlyhanie z časti II. Keď artefakty pribúdajú rýchlejšie, než ich ktokoľvek dokáže čítať, prvou obeťou je človek vnútri cyklu — nie preto, že sa ho niekto rozhodol odstrániť, ale preto, že kontrolu znemožnil samotný objem. Gojko Adzic to pomenúva zo sveta vývoja riadeného špecifikáciami: [objem artefaktov zlomil human-in-the-loop](https://www.linkedin.com/pulse/spec-driven-development-revenge-waterfall-bdd-taken-gojko-adzic-imquf) — rituál, ktorý mal dohľad *umožniť*, ho napokon zničil (`REPORTED`). Toto je najhlbší dôvod, prečo musí byť človek *nad* cyklom, nie vnútri neho: smerovač nad prúdom práce zostáva účinný aj pri rastúcej priepustnosti, zatiaľ čo fáza vnútri cyklu sa utopí. Navrhni preto cyklus tak, aby sa nedelegovateľné kontrolné body dali vykonať s malým úsilím: obmedz rozsah artefaktov, jasne stanov podmienky dokončenia a nechaj kritika výstupy vopred prefiltrovať. Preťaženie potom nebude môcť potichu vytlačiť človeka, ktorému mal cyklus slúžiť.

:::tip[▶ Video]

<YouTube id="5hK7pQsvpy0" title="Building an AI Agent Governance Framework: 5 Essential Pillars — IBM Technology" />

IBM vysvetľuje štruktúru vybudovanú okolo agenta. Pozri sa na ňu optikou tejto lekcie: fungujúce riadenie stavia človeka *nad* cyklus a dáva mu niekoľko vynucovaných kontrolných bodov. Nestavia ho *dovnútra cyklu*, aby kontroloval všetko — práve tak sa dohľad potichu mení na formálne odklepnutie.

:::

## Tri úrovne — jednotlivec · malý tím · podnik

Na každej úrovni platí rovnaký princíp: **človek je smerovač nad cyklom, nie fáza vnútri neho — a rola smerovača nesmie splynúť so samotnou prácou.** Mení sa iba to, kto ju zastáva a ako sa vynucuje.

- **Jednotlivec.** Zastávaš všetky roly: plánovača, implementátora, kritika aj smerovača. Dôležité je nenechať rolu smerovača rozpustiť sa v ostatných troch. Naďalej si stanovuj vlastné podmienky dokončenia a vedome rozhoduj o začlenení zmeny, aj keď pracuješ sám. *Akému zlyhaniu to bráni:* nestaneš sa fázou vo vlastnom cykle a neschváliš svoj výstup iba preto, že si ho sám vytvoril.
- **Malý tím.** Rozdeľ roly tak, aby smerovač — ten, kto zodpovedá za podmienky dokončenia a rozhodnutie o začlenení — nebol implementátorom. Za ľudskú bránu má zodpovedať konkrétny človek, nie „tím“. *Akému zlyhaniu to bráni:* rozptýlenej zodpovednosti, pri ktorej sú všetci vnútri cyklu a nikto nad ním.
- **Podnik.** Kontrolné body človeka sú vynucované a preukázateľne nezávislé: schválenie zmeny s veľkým dosahom je rola, ktorú tím implementujúci danú zmenu nesmie zastávať. Ide o rovnakú nezávislosť dvoch strán, akú [časť I spájala so SLSA a reguláciou DORA](../part-1-foundation/verification-bottleneck.md). *Akému zlyhaniu to bráni:* premene human-in-the-loop na políčko v kontrolnom zozname súladu — na meno vo formulári, ktorého nositeľ v skutočnosti nemohol skontrolovať to, čo podpísal.

## Čo si odniesť

- Človek je smerovač, nie fáza: stojí nad cyklom, nie vnútri neho. Vymedz cieľ, nastav podmienky dokončenia, zodpovedaj za brány a rozhoduj o začlenení — nedostávaj sa na rad medzi agentmi.
- Niektoré kontrolné body nemožno delegovať: určenie toho, čo znamená „dokončené“, zodpovednosť za bránu kritika pri otázkach bezpečnosti alebo správnosti a rozhodnutie o začlenení zmeny s veľkým blast radius. Zvyšok možno delegovať.
- Preťaženie vytlačí človeka ako prvého. Objem artefaktov v praxi zlomil human-in-the-loop — navrhni proces tak, aby nedelegovateľné kontrolné body zostali dostatočne nenáročné a rastúca priepustnosť nemohla človeka potichu odstrániť.
- „Kontrolovať všetko“ nie je dohľad, ale formálne odklepnutie. Dohľad tvorí niekoľko vynucovaných kontrolných bodov, kde je úsudok človeka samotným kontrolným mechanizmom a nič iné ho nedokáže nahradiť.

**[Nové pojmy](../glossary.md#roles-and-the-human)**: človek ako smerovač (nad cyklom a vnútri cyklu), nedelegovateľný kontrolný bod, dohľad verzus formálne odklepnutie.
