---
title: "Enterprise úroveň: audit, pôvod a čo je povinné"
sidebar_position: 4
---

# Na tejto úrovni sa kontrola bez dôkazu považuje za nevykonanú

Každá lekcia tohto kurzu sa končila tromi úrovňami a tá enterprise prichádzala zakaždým v rovnakom tvare:
mechanizmus nie je v skutočnosti silnejší, je *preukázateľný*. Táto záverečná lekcia je o tom rozdiele.
[Úvod](../intro.md) to postavil ako pravidlo — čím ďalej kontrola sedí od blast radius (rozsah škôd), tým viac
ide o dôkaz; čím bližšie sedí, tým viac ide o to, čomu dokáže zabrániť. Tu sme od blast radius tak ďaleko, ako
kurz siaha, takže ide o dôkaz vo všetkom.

Povedzme si to bez cynizmu. „Compliance theatre“ — divadlo zohraté pre audítora — naozaj existuje, ale
požiadavka pod ním hlúpa nie je: vo veľkom nie je človek, ktorý sa za zmenu zodpovedá, tým, kto ju urobil,
často pri nej ani nebol a nemôže si prejsť každý artefakt. Cez túto medzeru prenesie odpoveď jedine dôkaz,
ktorý vznikol v čase práce. Kontrola, ktorú nikto nedokáže spätne predviesť, je z jeho miesta nerozoznateľná
od kontroly, ktorá nikdy nebežala.

## Audit: čo sa stalo a kto sa za to zodpovedá

**Auditný záznam (audit trail)** odpovedá na otázku, *kto čo urobil, kedy a z čieho poverenia* — a agenti
pridávajú ďalší stĺpec. Záznam už musí menovať nielen zodpovedného človeka, ale aj **agenta, model a zadanie**,
z ktorých zmena vzišla, pretože „napísala to AI“ nie je aktér a nedá sa jej nič opýtať.

Záznam robí hodnotným vlastnosť, ktorá sa volá **nepopierateľnosť (non-repudiation)**: vytvára ho systém ako
vedľajší produkt práce, nepíše ho dodatočne ten, o kom vypovedá. Log, ktorý si operátor môže upraviť, je
rozprávanie. Podpísané commity, nemenné logy CI a záznamy na strane platformy sú dôkazom preto, že ich aktér
nemal ako prispôsobiť.

:::tip[▶ Video]

<YouTube id="yh-3WU1FKrk" title="What is Responsible AI? A Guide to AI Governance — IBM Technology" />

Prehľad IBM o správe AI — zodpovednosť, transparentnosť a dohľad ako organizačná mašinéria, nie ako dobrý
pocit. Pozri si ho optikou tejto lekcie: každý princíp, ktorý tam zaznie, musí dosadnúť ako artefakt, ktorý
niekto na požiadanie predloží. Inak zostane vyhlásením o hodnotách.

:::

## Pôvod: odkiaľ artefakt pochádza

Audit zaznamenáva úkon; **pôvod (provenance)** zaznamenáva rodokmeň vytvorenej veci — z ktorého zdroja, buildu,
závislostí a agenta vznikla. V praxi ho nesú dva mechanizmy. **Súpis softvérových súčastí (software bill of
materials, SBOM)** vymenúva, čo do artefaktu vstúpilo, takže z novo zverejnenej zraniteľnosti sa stane
vyhľadávanie namiesto archeologického výskumu. **Podpísané potvrdenia (signed attestations)** viažu artefakt na
proces, ktorý ho postavil, takže veta „tento binárny súbor vznikol z toho commitu cez tú pipeline“ sa dá
overiť, nielen tvrdiť; I. časť už spojila nezávislosť dvoch strán so
[SLSA a DORA](../part-1-foundation/verification-bottleneck.md) a toto je druhá polovica toho istého rámca.

Kód od agenta pridáva otázku, pre ktorú tieto rámce stavané neboli, no zvládajú ju bez problémov: *ktorý agent
a ktorý model ho vytvorili a podľa akých pokynov?* Zapíš to už pri generovaní. Neskoršia rekonštrukcia zo správ
pri commitoch je hádanie a chvíľa, keď to budeš potrebovať — trieda chýb vystopovaná k zvyku jedného modelu,
licenčná otázka nad generovaným obsahom — je presne tá chvíľa, keď hádanie nestačí.

## Oddelenie právomocí, keď sú obe strany agentmi

III. časť z toho urobila inžiniersky argument: agent, ktorý zmenu napíše,
[ju nemôže zároveň certifikovať](../part-3-verification/detection-vs-mutation.md), pretože čokoľvek, čo
optimalizuje na prejdenie kontroly, si nájde najlacnejší spôsob, ako ňou prejsť. Na tejto úrovni prichádza to
isté pravidlo od požiadaviek na súlad a obe odôvodnenia sa navzájom posilňujú, namiesto aby sa opakovali —
jedno hovorí, že oddelenie prináša lepšie overovanie, druhé, že prináša *obhájiteľné* overovanie.

Pri flotile to znamená, že generujúci a revidujúci agent sú dvaja, bežia pod odlišnými identitami a zo záznamu
vidno, kto bol kto. A znamená to, že schválenie človekom musí byť skutočné:
[kontrola pri veľkom objeme](../part-3-verification/review-at-volume.md) z III. časti varovala, že meno na
dokumente, ktorý ten človek nemal ako prečítať, je artefakt súladu, nie dohľad. Na enterprise úrovni znie to
varovanie ostrejšie, pretože podpis má právne dôsledky — schvaľovať tempom, ktoré by žiadny človek reálne
neudržal, je presne to zlyhanie, ktorému má kontrola predchádzať, oblečené do jej vlastných šiat.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Invariant, poslednýkrát: **kontrola sa počíta vtedy, keď niekto iný než ten, kto ju vykonal, dokáže spätne
ukázať, že prebehla.**

- **Soloista.** Auditný záznam si ty sám, tak nech ho robia nástroje: skutočné commity, logy CI, ktoré si
  necháš, a poznámka, ktorý model vytvoril netriviálnu prácu. *Akému zlyhaniu to predchádza:* o pol roka
  neodpovieš na otázku, prečo daný kus kódu existuje a čo ho vygenerovalo.
- **Malý tím.** Chránené vetvy, revízie zapísané namiesto vyrozprávaných, generovanie a schválenie od dvoch
  rôznych aktérov a zoznam závislostí. *Akému zlyhaniu to predchádza:* kultúra schvaľovania, v ktorej záznam
  ukazuje podpis a všetci si to pamätajú ako „niekto sa na to letmo pozrel“.
- **Enterprise.** Nepopierateľné záznamy, podpísaný pôvod každého artefaktu, vynútené oddelenie právomocí aj
  medzi agentmi a dôkazy vznikajúce automaticky namiesto skladania na objednávku auditu. *Akému zlyhaniu to
  predchádza:* kontroly, ktoré v praxi fungujú, no ich fungovanie sa nedá ukázať — a v tejto vzdialenosti od
  blast radius sa to počíta rovnako, ako keby ich nebolo.

## Čo si odniesť

- Na tejto úrovni nie je mechanizmus silnejší, ale **preukázateľný**. Kontrola, ktorú nikto nevie spätne
  doložiť, je pre človeka, ktorý sa za ňu zodpovedá, nerozoznateľná od kontroly, ktorá nikdy nebežala.
- Auditný záznam musí popri zodpovednom človeku menovať **agenta, model a zadanie** — „napísala to AI“ nie je
  aktér a nedá sa jej nič opýtať.
- **Rozhodujúca vlastnosť je nepopierateľnosť:** záznam vzniká ako vedľajší produkt práce, nie ako niečo, čo si
  zaznamenaná strana mohla dodatočne prispôsobiť.
- **Pôvod je rodokmeň** — SBOM na to, čo dnu vstúpilo, podpísané potvrdenia na to, čo to vyrobilo. Model a
  pokyny zachyť pri generovaní; poctivo sa to neskôr už nedá zrekonštruovať.
- **Oddelenie právomocí stojí na dvoch nezávislých odôvodneniach** — lepšie overovanie a obhájiteľné
  overovanie — a vo veľkom platí medzi agentmi, nielen medzi ľuďmi.
- Tempo schvaľovania, ktoré by žiadny človek neudržal, nie je dohľad. Je to zlyhanie, ktorému má kontrola
  predchádzať, oblečené do jej vlastných šiat.

**[Nové pojmy](../glossary.md#the-enterprise-tier-audit-provenance-and-whats-required)**: preukázateľná kontrola, auditný záznam, nepopierateľnosť, priradenie agenta a modelu, pôvod, SBOM, podpísané potvrdenie, oddelenie právomocí medzi agentmi, obhájiteľné overovanie.
