---
title: "Náklady a ekonomika práce agentov"
sidebar_position: 3
---

# Jednotkou sú náklady na prijatú zmenu, nie náklady na token

Ceny tokenov cituje každý a užitočné sú zo všetkých čísel najmenej. Hovoria, koľko stojí jeden pokus — lenže
pokusy si nekupuješ. Kupuješ si **zmeny, ktoré prežili reťaz brán**. Zvoľ nesprávny menovateľ a pomýliš sa aj
vo všetkom, čo z neho vyvodíš: lacný model, ktorý potrebuje tri pokusy a záchranu od človeka, lacný nie je, a
drahý model, ktorému to vyjde na prvýkrát, môže byť tá výhodná kúpa.

## Najprv oprav menovateľ

Tri menovatele, zoradené od najmenej po najviac poctivý:

- **Náklady na token.** Cenník, nie meranie. Hodia sa jedine na porovnanie dvoch modelov na tej istej práci.
- **Náklady na jeden pokus o úlohu.** Lepšie — zahŕňajú kontext, výstup aj volania nástrojov — ale neúspechy
  stále počítajú, akoby to boli výrobky.
- **Náklady na *prijatú* zmenu.** Ten poctivý. Do čitateľa patrí všetko, čo sa minulo cestou k nej: opakované
  pokusy, opustené vetvy, beh, ktorý sa vybral bokom a musel sa zastaviť, aj čas revízie, ktorý zmena zjedla.

Pri treťom menovateli sa závery z toho prvého často obrátia. Miera opakovaných pokusov váži viac než
cenníková cena, pretože model, ktorému to vyjde až na druhýkrát, si práve zdvojnásobil vlastné náklady, hoci
cenník ostal nezmenený. A neúspešné pokusy nie sú zadarmo ani nenápadnejším spôsobom: každý z nich zaberie
miesto v sériovej časti z [lekcie o flotilách](./agent-fleets.md) — a to je práve tá kapacita, ktorú si
naozaj nemáš kde dokúpiť.

:::tip[▶ Video]

<YouTube id="7gMg98Hf3uM" title="What Makes Large Language Models Expensive? — IBM Technology" />

IBM rozoberá, kam pri prevádzke veľkého modelu odchádzajú peniaze — parametre, kontext a výpočtový výkon za
každým z nich. Ber to ako *inferenčnú* polovicu účtu; táto lekcia tvrdí, že pri práci agentov býva o
ekonomike málokedy rozhodujúca práve tá polovica.

:::

## Kam peniaze naozaj odchádzajú

Štyri položky, zhruba v poradí, v akom ich tímy podceňujú.

**Kontext.** Agenti čítajú stále dokola. Ten istý repozitár, ten istý korpus pravidiel, to isté zadanie sa
posielajú znova pri každom pokuse a za každého agenta. Pri práci agentov býva kontext najväčšou samostatnou
položkou účtu a zároveň tou, na ktorú sa pri odhade z cenníka zabúda úplne — aj preto má
[nafúknutý korpus pravidiel](./drift-and-rot.md) z predchádzajúcej lekcie priamu cenovku, nielen následky na
kvalite.

**Opakované pokusy a prerábanie.** Za každý neúspešný pokus platíš celú cenu a zmena, ktorá dosadne až na
tretí raz, stála trojnásobok toho, čo sa navonok zdalo.

**Overovanie.** Sémantické brány z III. časti — LLM, ktorý reviduje, LLM, ktorý posudzuje — sú samy volaniami
modelu a rastú s objemom výstupu, nie s veľkosťou tímu. Flotila, ktorá vygeneruje dvakrát toľko, zaplatí
dvakrát toľko aj za kontrolu.

**Čas ľudskej revízie.** Najdrahší vstup v celom systéme a jediný, ktorý sa výdavkami nedá zväčšiť.
[Úzke miesto overovania](../part-1-foundation/verification-bottleneck.md) z I. časti je ekonomické tvrdenie
rovnako ako inžinierske: rozhodujúce obmedzenie je ocenené v mzdách, nie v tokenoch.

## Ako dostať náklady pod kontrolu

Prvé je priradenie, lebo účet, ktorý nevieš nikomu pripísať, sa nedá riadiť — dá sa nad ním len znepokojovať.
Mechanizmus už máš zo IV. časti: ak sa prihlasovacie údaje vydávajú
[na úlohu a na workload](../part-4-platform/least-privilege-sandboxing.md), rovnako sa dajú priradiť aj
výdavky. Označuj podľa úlohy, nie podľa tímu, a otázka „koľko stála táto funkcia“ prestane byť rečnícka.

Potom to ohranič. Rozpočet na úlohu, ktorý zastaví utekajúcu slučku, je viac než mesačný report, ktorý ju
vysvetlí: agenti zlyhávajú opakovaním a opakovanie je presne ten spôsob zlyhania, ktorý pevný strop zachytí
včas. Lacné deterministické kontroly patria pred drahé sémantické z rovnakého dôvodu, pre ktorý v III. časti
patrili pred človeka — reťaz usporiadaj tak, aby drahý posudzovateľ dostal pod ruku vždy len to, čo už prešlo
všetkým lacnejším.

A poctivo drž aj druhú stranu, teda prínos. [Metóda](../intro.md) z úvodu kurzu tu platí naplno: objem výstupu
merateľne stúpa, no či stúpa aj *hodnota*, doložené nie je — aj výskumníci Microsoftu, ktorí majú v rukách
jedny z najväčších nameraných nárastov priepustnosti v odbore, píšu, že zlúčený pull request nie je to isté
ako hodnota, ktorú prinesie (`REPORTED`). Metrika nákladov na zlúčenú zmenu, ktorá sa zlepšuje, kým sa ďalej
po prúde nezlepšuje nič, optimalizovala menovateľ, nie firmu. K nákladovej metrike preto pridaj jednu metriku
výsledku, pri ktorej by ti bolo trápne vidieť rovnú čiaru.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Invariant: **náklady meraj voči prijatej práci, priraď ich úlohe, ktorá ich spôsobila, a ohranič ich skôr, než
sa vymknú.**

- **Soloista.** Sleduj mieru opakovaných pokusov viac než cenu za token, korpus pravidiel drž dosť malý na to,
  aby si neplatil za jeho opakované posielanie, a na reláciu nastav pevný strop výdavkov. *Akému zlyhaniu to
  predchádza:* trojciferný účet, ktorý cez noc vyrobil agent zacyklený na úlohe, ktorú si už dávno odložil.
- **Malý tím.** Priradenie na úlohu, lacné brány zoradené pred drahé a náklady na zlúčenú zmenu sledované ako
  trend, nie ako číslo. *Akému zlyhaniu to predchádza:* zmena modelu alebo postupu, ktorá vyzerá lacnejšie na
  jedno volanie, no potichu zvýši počet volaní potrebných na to, aby čokoľvek dosadlo.
- **Enterprise.** Rozpočty vynútené platformou, výdavky priradené identite workloadu a jednotková ekonomika
  vykazovaná vedľa metriky výsledku, nie osamote. *Akému zlyhaniu to predchádza:* program hlási klesajúce
  náklady na zmenu a rastúcu priepustnosť, pričom hodnotu toho, čo sa dodalo, nemeria vôbec nikto.

## Čo si odniesť

- **Náklady na prijatú zmenu sú jediná poctivá jednotka.** Do čitateľa patria opakované pokusy, opustené behy,
  volania na overovanie aj čas revízie.
- Pri tejto jednotke **preváži miera opakovaných pokusov nad cenníkovou cenou** a lacnejší model, ktorý
  potrebuje viac pokusov, býva ten drahší.
- **Na kontext sa pri odhade zabúda** — agenti čítajú stále dokola, takže nafúknutý korpus pravidiel má
  cenovku, nielen následky na kvalite.
- **Ľudská revízia je vstup, ktorý sa výdavkami nezväčší.** Úzke miesto overovania je ekonomické obmedzenie
  ocenené v mzdách.
- **Priraďuj na úlohu, ohraničuj na úlohu.** Agenti zlyhávajú opakovaním; pevná hranica zachytí utekajúci beh,
  ktorý mesačný report vie iba dodatočne vysvetliť.
- Jednotkové náklady vykazuj **vedľa metriky výsledku**, inak budeš optimalizovať menovateľ, kým hodnota
  zostane nezmeraná.

**[Nové pojmy](../glossary.md#cost-and-the-economics-of-agent-work)**: náklady na prijatú zmenu, miera opakovaných pokusov, náklady na kontext, náklady na overovanie, priradenie nákladov k úlohe, limit výdavkov, jednotková ekonomika, metrika výsledku.
