---
title: "Kontrola driftu a zastarávanie pravidiel"
sidebar_position: 2
---

# Zastarané pravidlo je horšie než žiadne, pretože agent sa ním riadi

I. časť postavila dve veci, o ktoré sa práca flotily opiera:
[pamäť projektu](../part-1-foundation/project-memory-and-tiering.md) a
[pravidlá, ktoré vynucuje stroj](../part-1-foundation/rules-that-hold.md). Táto lekcia je o tom, čo sa s nimi
deje potom — keď sa kód, ktorý opisujú, hýbe ďalej a ony nie. Pravidlo v sebe nesie predpoklad o kódovej
základni. Základňa sa mení každý týždeň, pravidlo vzniklo raz. Keď sa rozídu, pravidlo sa nestane zdvorilo
nepodstatným — začne **aktívne škodiť**. Človek si zastaranú konvenciu prečíta a potichu ju obíde; agent si ju
prečíta a poslúchne.

## Korpus pravidiel chátra troma spôsobmi

Zlyhanie má tri odlišné tvary a každý si žiada inú nápravu.

**Zastaranosť.** Pravidlo opisuje štruktúru, ktorá už neexistuje — presunutý adresár, nahradený wrapper, vzor,
ktorý tím opustil pred dvoma refaktoringmi. Agent verne postaví starý svet vnútri toho nového.

**Rozpor.** Dve pravidlá, ktoré s odstupom mesiacov pridali ľudia riešiaci odlišné problémy, si dnes
protirečia. Nič to nezachytí, pretože v čase vzniku bolo každé z nich rozumné. Agent konflikt vyrieši tak, že
si jedno vyberie — a nie vždy to isté, čo je horšie než vybrať si zle: správanie prestalo byť deterministické
a hlásený problém nikto nezopakuje.

**Nafúknutosť.** Korpus rastie, pretože pridať pravidlo je najlacnejšia možná reakcia na akýkoľvek incident.
Za istou hranicou sa podstatné obmedzenia rozriedia v nánose maličkostí — a potom prichádza časť, ktorú
väčšina ľudí prehliadne: korpus, ktorý sa už nezmestí do pracovného kontextu, sa *skráti*, pričom ani ty, ani
agent nerozhodujete o tom, ktoré pravidlá ten rez prežijú.

## Vykonateľné pravidlá zastarávajú nahlas, textové potichu

Najužitočnejšia vlastnosť pravidla je, či jeho chátranie *vidno*. Pravidlo zapísané ako kontrola — test,
lintovacie pravidlo, brána v CI — zlyhá vo chvíli, keď sa mu realita vyšmykne spod nôh. Také zlyhanie
obťažuje a presne o to ide: korpus ti hlási, že prestal platiť. Pravidlo zapísané iba v próze takú vlastnosť
nemá. Zastaráva v dokonalom tichu a stále sa podľa neho koná.

Z toho vyplýva praktické poradie pre všetko, čo má zostať pravdivé: ak sa dá, urob z toho kontrolu; ak
kontrola neunesie aj dôvody, pridaj k nej vetu; a čisto textovú podobu prijmi len pri usmerneniach, ktoré
naozaj stoja na úsudku — s vedomím, že si tým zvolil tiché zastarávanie a musíš naň nasadiť človeka.

:::tip[▶ Video]

<YouTube id="DgXV8QSlI4U" title="What is AI Technical Debt? Key Risks for Machine Learning Projects — IBM Technology" />

Jeff Crume z IBM o technickom dlhu v AI — o úrokoch, ktoré neskôr zaplatíš za dnešné skratky. Korpus pravidiel
patrí k miestam, kde sa tento dlh skrýva najtichšie: pridať pravidlo nestojí nič, zostatok narastá neviditeľne
a účet príde v podobe agentov, ktorí sebavedomo stavajú pre svet, ktorý už neexistuje.

:::

## Vlastník a platnosť: zodpovednosť, ktorú nikto nepridelí

Pri každom pravidle majú byť napísané dve veci, ktoré tam takmer nikdy nie sú: **kto zaň zodpovedá** a **kedy
sa naň najbližšie niekto pozrie**. Bez vlastníka patrí pravidlo všetkým, čiže nikomu, a nikdy sa nezmaže —
mazať sa zdá riskantnejšie než nechať tak, takže korpusy vedia iba rásť.

Údržbu menia z dobrého úmyslu na skutočnosť dva mechanizmy.

- **Každé pravidlo označ dátumom** a preveruj najstaršie ako prvé. Vek je slabý signál, ale máš ho zadarmo a
  je lepší než alternatíva, čiže nepreverovať nič.
- **Pravidlo, ktoré sa nikdy neaktivovalo, ber ako podozrivé.** Je to
  [argument o mutačnom testovaní](../part-3-verification/layered-gates/index.md) z III. časti aplikovaný na korpus:
  kontrola, ktorá za rok nič nezachytila, buď stráži triedu chýb, ktorá sa už nevyskytuje, alebo je pokazená a
  ty si celý čas dôveroval jej tichu. Vedieť sa oplatí oboje a zistíš to rovnako — zámerne vlož porušenie a
  pozri sa, či sa pravidlo ozve.

Hranicu pre mazanie treba povedať priamo: **odstrániť pravidlo, ktoré už nezodpovedá realite, je údržba, nie
strata.** Iba korpus, ktorý si ochotný zmenšovať, si agent ešte prečíta celý.

## Pamäť sa rozchádza s realitou rovnako

Pamäť projektu chátra tými istými troma spôsobmi, no jej drift je zákernejší než pri pravidlách: pamäť sa
číta ako *opis*, nie ako *pokyn*, a preto ju nikto nekontroluje. Záznam „zvolili sme X, pretože Y“ zostáva
v súbore dlho po tom, čo Y prestalo platiť, a agent ho berie ako aktuálny fakt. Disciplína je tá istá: záznamy
nesú dátum, rozpory sa urovnávajú namiesto hromadenia a prekonané rozhodnutia sa označia ako nahradené,
nenechajú sa potichu stáť vedľa toho, ktoré ich nahradilo.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Invariant sa so škálou nemení: **pravidlo má takú hodnotu, aké bolo jeho posledné overenie voči realite, a
jeho chátranie musí niečo zviditeľniť.** Mení sa to, kto zaň zodpovedá a čo revíziu spustí.

- **Soloista.** Uprednostni kontroly pred prózou, to, čo zostane prózou, označ dátumom, a maž bez váhania —
  si jediný čitateľ a nafúknutý korpus ti berie kontext, ktorý potrebuješ. *Akému zlyhaniu to predchádza:*
  agent sebavedomo znovu postaví štruktúru, ktorú si pred mesiacmi opustil, pretože ju tvoje vlastné poznámky
  ďalej opisujú.
- **Malý tím.** Vlastník na každú oblasť pravidiel, revízia pravidiel vtedy, keď sa mení kód, ktorý opisujú
  (nie podľa samostatného kalendára, ktorý nikto nedodržiava), a rozpory vyriešené pri revízii namiesto toho,
  aby ich rozhodoval agent. *Akému zlyhaniu to predchádza:* dve protirečivé pravidlá vyrobia nedeterministické
  správanie agenta, ktoré nikto nedokáže zopakovať ani vysvetliť.
- **Enterprise.** Korpus je spravovaný artefakt: verzovaný, s vlastníkmi, s platnosťou a s auditným záznamom,
  z ktorého vidno, kedy sa každé pravidlo naposledy potvrdilo voči kódu. *Akému zlyhaniu to predchádza:*
  kontrola existuje na papieri, dva roky nezodpovedá systému a odhalí sa počas auditu, ktorý predpokladal, že
  funguje.

## Čo si odniesť

- **Zastarané pravidlo je horšie než žiadne.** Človek prekonanú konvenciu obíde, agent ju poslúchne.
- Chátranie má tri tvary — **zastaranosť, rozpor, nafúknutosť** — a každý si žiada inú nápravu. Najhorší je
  rozpor, pretože správanie nerobí iba nesprávnym, ale nedeterministickým.
- **Vykonateľné pravidlá zastarávajú nahlas, textové potichu.** Kde sa dá, urob z pravidla kontrolu; kde sa
  nedá, priznaj si, že si zvolil tiché zastarávanie, a nasaď naň človeka.
- **Prideľ vlastníka a spúšťač revízie, zvyšok označ dátumom.** Korpusy bez vlastníka iba rastú, lebo mazať sa
  vždy zdá riskantnejšie než nechať tak.
- Pravidlo, ktoré sa nikdy neaktivovalo, nedokazuje čistú kódovú základňu — je to neoverené pravidlo. Zámerne
  vlož porušenie a zisti, ktorý z tých dvoch prípadov to je.

**[Nové pojmy](../glossary.md#drift-control-and-rule-rot)**: zastarávanie pravidiel, zastaranosť / rozpor / nafúknutosť, vykonateľné verzus textové pravidlo, tiché zastarávanie, vlastník pravidla, platnosť pravidla, nikdy neaktivované pravidlo, drift pamäti, nahradené rozhodnutie.
