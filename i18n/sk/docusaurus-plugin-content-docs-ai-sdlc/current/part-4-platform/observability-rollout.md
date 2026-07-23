---
title: "Pozorovateľnosť, nasadzovanie a núdzový vypínač"
sidebar_position: 4
---

# Produkcia je posledná brána a musí vedieť odpovedať

Kurz sa začal [slučkou, nie pipeline](../intro.md) — a slučku z nej robí práve tá hrana, ktorá vedie z ostrej prevádzky späť k plánovaniu. Táto lekcia stavia tú hranu. Berie tri mechanizmy a každý odpovedá na inú otázku: **telemetria** rozhoduje, či vôbec *spoznáš*, že zmena je zlá, **postupné nasadzovanie** rozhoduje, *koľko ľudí* sa to dozvie skôr než ty, a **núdzový vypínač** rozhoduje, *ako rýchlo* sa to zastaví. Vynechaj ktorýkoľvek z nich a zo slučky zostane pipeline s optimistickým názvom.

## Niektoré triedy chýb existujú iba v produkcii

III. časť postavila [reťaz brán](../part-3-verification/layered-gates.md), ktorou musí zmena prejsť skôr, než niekam dopadne. Úplná byť nemôže, a nie preto, že by vznikla nedbalo: celá trieda chýb existuje iba pod skutočnou prevádzkou, skutočným rozdelením dát, na skutočných zariadeniach a pri skutočnej súbežnosti. Žiadna brána pred zlúčením ich nevníma, presne z toho mechanizmového dôvodu, ktorý tamtá lekcia pomenovala. Produkcia teda nie je „to po overení“ — produkcia je **koncová brána reťaze** a telemetria je jej mechanizmus. Nasadenie, ktoré nevieš pozorovať, je brána bez snímača.

Minimálna užitočná sada snímačov je malá a oplatí sa ju vymenovať, lebo tímy často merajú všetko a nesledujú nič:

- **Miera chýb**, podľa možnosti rozdelená podľa cesty novým kódom, aby sa regresia nestratila v priemere so zdravým menovateľom.
- **Latencia vo vysokom percentile**, nie priemer — priemer skryje práve ten chvost, kde používatelia naozaj trpia.
- **Saturácia** toho, čoho je málo: pripojení, hĺbky frontu, pamäte.
- **Jeden obchodný signál (business signal)**, ktorý by sa pohol, keby bola funkcia pokazená spôsobom, aký žiadna technická metrika nevidí — začaté platby, odoslané správy, obnovené relácie. Práve tento signál sa vynecháva najčastejšie a práve on zachytí zmenu, ktorá je technicky zdravá a funkčne na nič.

A uzavri okruh späť k III. časti: chyba, ktorá sa dostane do produkcie, *je* únik, takže patrí do [registra únikov](../part-3-verification/escape-ledger.md) spolu s menom brány, ktorá ju mala zachytiť. To je spätná hrana v najkonkrétnejšej podobe — prevádzka učí reťaz brán, voči čomu je slepá.

## Postupné nasadzovanie ohraničí blast radius v počte ľudí aj v čase

Ak sa zlá zmena aj tak stane, užitočná otázka znie, koľko používateľov na ňu narazí ako prvých. Postupné nasadzovanie — canary, potom zvyšovanie podielu, potom všetci — mení jednorazovú udalosť na riadenú. Väčšinu úžitku nesú dve zásady.

**Oddeľ nasadenie od sprístupnenia.** Dostať kód von a zapnúť správanie majú byť dva rôzne úkony, a presne to ti kúpi **feature flag (prepínač funkcie)**. Kód ide von vypnutý; správanie sa zapne pre 1 %, potom pre 10 %, potom pre všetkých. Keď je niečo zle, meníš okruh používateľov, nie nasadenie.

**Vrátenie zmeny musí spúšťať automat, nie človek.** Zvyšovanie podielu, ktoré postupuje podľa harmonogramu a cúva až vtedy, keď si to niekto všimne, je pomalá brána prezlečená za rýchlu. Naviaž ho na signály vyššie: prekročenie miery chýb alebo latencie ho zastaví a obráti bez čakania na niečí úsudok. Ľudský úsudok je tá vzácna vec, ktorú ti III. časť kázala [míňať zámerne](../part-3-verification/review-at-volume.md); všimnúť si pohyb metriky nie je miesto, kde ho minúť.

Existuje aj nameraný náznak, že si táto hrana pozornosť zaslúži. Správa DORA z roku 2025 zistila negatívny vzťah medzi používaním AI a stabilitou dodávania — a ako trval úvod, stupeň `MEASURED` má len v tom slabom zmysle rozsiahleho sebahodnotiaceho prieskumu, teda ide o vnímanie, nie o telemetriu. Neoprávňuje to na „AI zhoršuje tímy“. Oprávňuje presne na jedno: keď sa generovanie zrýchli, náraz pohltí cesta sprístupnenia a obnovy, takže tú cestu stavaj zámerne.

:::tip[▶ Video]

<YouTube id="ztIIcXNzMN4" title="What is Site Reliability Engineering (SRE)? — IBM Technology" />

Úvod IBM do SRE — ciele úrovne služby, rozpočty chýb a spoľahlivosť ako inžiniersky cieľ namiesto zbožného priania. Čítaj ho ako slovník k automatizácii z tejto lekcie: SLO je hranica, na ktorú sa zvyšovanie podielu dá naviazať, a práve to mení „niekto si to všimne“ na mechanizmus.

:::

## Núdzový vypínač nesmie potrebovať pipeline, ktorá sa práve pokazila

Vrátenie zmeny, ktoré si žiada zelené CI, nové zostavenie a nasadenie, nie je núdzový vypínač. Je to nádej s dodacou lehotou — a zlyhá presne v situácii, pre ktorú existuje, teda keď je časťou problému sama pipeline. Vypnutie musí byť *zmena stavu*, nie *zostavenie*: prepni flag, presuň váhu prevádzky, vráť smerovanie. Nech je mechanizmus akýkoľvek, skúška je jediná otázka — dokáže ho jeden človek použiť za pár sekúnd bez toho, aby vznikol nový artefakt?

Flotily majú na tom vypínači ešte druhú polohu, ktorú samostatný vývojár nepozná. Zastaviť *zmenu* je vrátenie; zastaviť jej *zdroj* znamená pozastaviť agentov. Flotila, ktorá ďalej generuje nad základom, ktorý si práve vrátil, ti ten problém s chuťou postaví znova alebo naskladá ďalšiu prácu na základ, ktorému už neveríš. Runbook preto potrebuje oboje: vrátiť artefakt a zastaviť slučku, ktorá ho vyrobila — [človek-smerovač](../part-2-loop/roles-and-the-human.md) tu vykonáva jediný zásah, ktorý sa nedá delegovať na to, čo sa práve zastavuje.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Invariant sa nehýbe: **zmena je v produkcii pozorovateľná, k svojmu publiku sa dostáva postupne a jeden človek ju vie za pár sekúnd zastaviť bez nového zostavenia.** Škáluje sa to, koľko z toho beží bez človeka v ceste.

- **Soloista.** Sledovanie chýb, ktoré ťa naozaj zobudí, flag prepínateľný z telefónu a predchádzajúca verzia pripravená obslúžiť prevádzku. *Akému zlyhaniu to predchádza:* o niekoľko dní sa od používateľa dozvieš, že nové vydanie pokazilo registráciu — a potom ti hodinu trvá, kým to vrátiš.
- **Malý tím.** Dashboardy naviazané na hŕstku dohodnutých signálov, canary alebo percentuálne nasadzovanie ako predvolený postup, automatické vrátenie zmeny pri prekročení hranice a spísaný runbook, ktorý menuje, kto čo prepína. *Akému zlyhaniu to predchádza:* počas zvyšovania podielu každý predpokladá, že ten graf sleduje niekto iný.
- **Enterprise.** SLO s rozpočtami chýb, ktoré riadia tempo sprístupňovania, progresívne dodávanie s automatizovanou analýzou, auditované postupy núdzového vypnutia nacvičované ako požiarny poplach a vyhodnotenie incidentov, ktoré plní register únikov. *Akému zlyhaniu to predchádza:* schopnosť vrátiť zmenu, ktorá sa mimo prezentácie nikdy neskúšala a odhalí sa počas incidentu, pre ktorý bola napísaná.

## Čo si odniesť

- **Produkcia je koncová brána.** Niektoré triedy chýb vznikajú iba pod skutočnou prevádzkou a na skutočných zariadeniach; žiadna brána pred zlúčením ich nevníma. Telemetria je snímač tejto brány — nasadenie, ktoré nevieš pozorovať, je brána bez pripojeného snímača.
- Meraj málo vecí, ale poriadne: mieru chýb na novej ceste, latenciu vo vysokom percentile, saturáciu a **jeden obchodný signál**, ktorý zachytí zmenu technicky zdravú a funkčne pokazenú.
- **Oddeľ nasadenie od sprístupnenia**, aby bolo publikum ovládač a nie ďalšie nasadenie — a zvyšovanie podielu naviaž na automatické vrátenie zmeny pri prekročení hranice, lebo „niekto si to všimne“ nie je mechanizmus.
- **Núdzový vypínač je zmena stavu, nie zostavenie.** Ak vrátenie potrebuje pipeline, zlyhá práve vtedy, keď je problémom pipeline. Pri flotilách má dve polohy: vrátiť zmenu *a* pozastaviť agentov.
- Produkčná chyba je **únik**: pošli ju späť do reťaze brán s pomenovaným slepým miestom, inak je slučka iba pipeline, ktorá sa končí kdesi pri produkcii.

**[Nové pojmy](../glossary.md#observability-rollout-and-the-kill-switch)**: produkcia ako koncová brána, sada telemetrických signálov, obchodný signál, oddelenie nasadenia od sprístupnenia, feature flag, postupné nasadzovanie (canary · zvyšovanie podielu), automatické vrátenie zmeny, núdzový vypínač, pozastavenie flotily.
