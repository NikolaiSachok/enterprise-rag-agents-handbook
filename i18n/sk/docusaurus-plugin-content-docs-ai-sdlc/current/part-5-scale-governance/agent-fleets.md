---
title: "Flotily agentov: izolácia a paralelizmus"
sidebar_position: 1
---

# Agenti bežia paralelne len tam, kde nič nezdieľajú

Predchádzajúce tri časti — II., III. a IV. — poskladali jeden pracovný tok: slučku, reťaz brán a platformu
pod nimi. V. časť sa pýta, čo sa zmení, keď ich beží naraz viac, a začína otázkou, ktorá sa v zhone za
vyšším počtom agentov preskakuje. *Čo vlastne môže bežať paralelne?* S tým, koľkých agentov si môžeš
dovoliť, to súvisí len málo. Rozhoduje o tom, čo medzi sebou zdieľajú.

## Zo zdieľania vzniká sériové poradie

Dvaja agenti sú nezávislí práve vtedy, keď ich práca siaha na navzájom oddelené množiny — iné súbory, iné
vetvy, iné prostriedky. Len čo začnú zdieľať niečo meniteľné, prestane to byť detail a stane sa z toho
plánovač: rozhoduje, kto bude čakať.

Pri programovaní býva tým zdieľaným najčastejšie **pracovný strom (working tree)**. V jednom git checkoute
je v danom okamihu aktívna práve jedna vetva, takže dvaja agenti, z ktorých každý stavia vlastnú vetvu v tom
istom strome, sa zrazia už zo svojej podstaty — nie občas a nie až pod záťažou, ale z definície. Zlyhanie je
skôr mätúce než hlučné: nekomitované úpravy jedného agenta sa vynoria v `git status` toho druhého, commit
zoberie so sebou súbory, ktoré tam nikto nechcel, a prepnutie vetvy potichu odnesie cudziu rozrobenú prácu.

Rovnaký tvar sa opakuje aj inde. Jedna databáza, ktorú migrujú všetci. Jedna kvóta API, z ktorej všetci
uberajú. A ten tichý prípad: **zdieľaný korpus, do ktorého každá úloha niečo dopisuje** — súbor pravidiel,
denník rozhodnutí, kánon. Dva paralelné zápisy sa nezlúčia; druhý vyhrá, prvý zmizne a nič to neohlási.

## Izolácia vyjde lacnejšie než koordinácia

Prvý inštinkt býva koordinovať: zámky, front, „nech sa agenti proste striedajú“. Lacnejšia odpoveď je
zdieľanie odstrániť. Daj každému agentovi vlastný checkout — `git worktree add` vytvorí samostatný pracovný
adresár nad tým istým úložiskom objektov, takže v `git status` vidí každý agent iba svoje vlastné zmeny a
žiadne prepnutie vetvy nemôže rozhádzať suseda.

Cena je skutočná, no malá a stále rovnaká: chvíľa prípravy a kúsok disku na agenta. Získaš to, že celá trieda
vzájomného rušenia prestane existovať namiesto toho, aby sa riadila. Je to ten istý kompromis, aký urobila
IV. časť pri [sandboxe](../part-4-platform/least-privilege-sandboxing.md) — hranica vynútená platformou je
spoľahlivejšia než spolupráca založená na dôvere — a ten istý dôvod, prečo náprava patrí do mechanizmu, nie
do pokynu, aby si agenti dávali pozor.

## Čo musí zostať sériové a prečo

Izolácia neurobí paralelným všetko. Tri veci zostávajú sériové a tváriť sa opačne je presne ten spôsob, akým
flotila vyrobí prácu na prerobenie.

- **Postupne dopĺňaný zdieľaný stav.** Všetko, do čoho úlohy *dopisujú* ako do jedného artefaktu — korpus
  pravidiel, glosár, changelog. Spúšťaj ich za sebou, alebo nech každá úloha vytvorí vlastný fragment a
  zlúč ich potom zámerne.
- **Zmeny schémy a ďalšie jednosmerné zmeny.** Dve súbežné migrácie nad jednou databázou sú race condition
  (súbehová chyba), ktorú nechceš objaviť až v produkcii; postup
  [rozšíriť → migrovať → zúžiť](../part-4-platform/environments-migrations-data.md) zo IV. časti počíta s
  jednou rukou naraz.
- **Integrácia.** Generovanie sa paralelizuje, zlučovanie nie. Reťaz brán a front na zlúčenie sú zámerne
  jednoprúdové — prechádza sa nimi po jednom, pretože práve tam sa protichodná práca uvádza do súladu.

Ľahko sa prehliadne štvrtý prípad: **revízia, ktorá číta živú vetvu, kým iný agent hýbe stromom**, sleduje
pohyblivý cieľ. Čítaj zo vzdialeného repozitára alebo čítaj v izolácii.

:::tip[▶ Video]

<YouTube id="X3XJeTApVMM" title="What Are Orchestrator Agents? AI Tools Working Smarter Together — IBM Technology" />

IBM o orchestrátorových agentoch — jeden agent koordinuje ostatných namiesto toho, aby prácu robil sám.
Pozri si to cez obmedzenie z tejto lekcie: orchestrácia rozhoduje, *kto čo urobí*, ale nedokáže urobiť
nezávislými dve úlohy, ktoré siahajú na ten istý meniteľný prostriedok. Orchestruj prideľovanie, izoluj
pracovný priestor.

:::

## Flotilu ohraničuje revízia, nie výpočtový výkon

V najpraktickejšej podobe sa tu vracia téza I. časti:
[úzkym miestom je overovanie](../part-1-foundation/verification-bottleneck.md). Dvojnásobok agentov znamená
dvojnásobok výstupu *aj* dvojnásobne dlhý front na revíziu. Reťaz brán ani človek-smerovač sa s nimi
nezdvojnásobia, takže veľkosť flotily nie je daná počtom procesov, ktoré vieš spustiť, ale kapacitou na
kontrolu.

Z toho vyplýva poctivý spôsob, ako flotilu dimenzovať: zmeraj **sériovú časť (serial fraction)** — integráciu,
revíziu a všetko ostatné, čo nemôže bežať súčasne — pretože strop celku určuje práve ona, nie počet agentov.
Za ňou prinesú ďalší agenti už len **súperenie o prostriedky (contention)**, prerábanie a dlhší front namiesto
väčšieho množstva hotovej práce. Užitočná otázka nikdy neznie „koľkých agentov viem spustiť“, ale „koľko toho
táto reťaz vstrebe“ — a poctivá odpoveď býva menšia než počet agentov, na ktorý máš peniaze.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Invariant platí všade: **paralelizuj iba prácu nad oddeleným stavom, pracovný priestor radšej izoluj, než by
si koordinoval prístup k nemu, a veľkosť flotily prispôsob tomu, čo reťaz overovania vstrebe.**

- **Soloista.** Jeden worktree na každú súbežnú úlohu a nie viac súbežných úloh, než koľko ich naozaj zvládneš
  zrevidovať na jedno posedenie. *Akému zlyhaniu to predchádza:* dvaja agenti v jednom checkoute vyrobia
  commit, ktorý mieša ich prácu, a upratovanie stojí viac, než koľko paralelný beh ušetril.
- **Malý tím.** Izolácia zabudovaná do nástrojov namiesto spoliehania sa na to, že si na ňu niekto spomenie,
  sériový front na zlučovanie a výslovný zoznam artefaktov, na ktoré smie v danom okamihu siahať iba jedna
  úloha. *Akému zlyhaniu to predchádza:* dve paralelné úlohy dopisujú do toho istého zdieľaného korpusu a
  druhý zápis potichu zmaže prvý.
- **Enterprise.** Kapacita flotily plánovaná podľa nameranej priepustnosti overovania, izolácia vynútená
  platformou a súperenie o prostriedky sledované ako plnohodnotná metrika popri nákladoch. *Akému zlyhaniu to
  predchádza:* flotila sa škáluje podľa rozpočtu namiesto úzkeho miesta a jej strop sa ohlási až rastúcim
  zoznamom nezrevidovaných zmien.

## Čo si odniesť

- **O tom, čo môže bežať paralelne, rozhoduje zdieľanie,** nie počet agentov, ktorých vieš spustiť. Meniteľný
  zdieľaný stav je skutočný plánovač.
- Jediný pracovný strom je klasická kolízia: keď je aktívna práve jedna vetva, súbežná práca na vetvách
  zlyháva už z definície — a zlyháva mätúco, nie hlučne.
- **Namiesto koordinácie izoluj.** Vlastný worktree pre každého agenta stojí trochu prípravy a odstráni celú
  triedu vzájomného rušenia; zámky a striedanie ju vedia iba spravovať.
- Sériové nechaj to, čo sériové naozaj je: **postupne dopĺňané artefakty**, zmeny schémy a integráciu.
  Generovanie sa paralelizuje, zlučovanie nie.
- **Flotilu ohraničuje kapacita revízie.** Zmeraj sériovú časť — strop určuje ona, nie počet agentov. Za ňou
  prinesú ďalší agenti súperenie o prostriedky, nie priepustnosť.

**[Nové pojmy](../glossary.md#running-agent-fleets-isolation-and-parallelism)**: flotila agentov, serializátor zdieľaného stavu, izolácia pomocou worktree, postupne dopĺňaný artefakt, paralelné generovanie / sériová integrácia, sériová časť, súperenie o prostriedky.
