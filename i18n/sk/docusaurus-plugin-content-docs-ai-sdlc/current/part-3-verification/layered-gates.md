---
title: "Vrstvené brány a rozmanitosť mechanizmov"
sidebar_position: 1
---

# Každá brána je voči niečomu slepá

Prvá časť ukázala, že úzkym miestom nie je generovanie, ale overovanie. V druhej časti sme vytvorili cyklus, ktorý využíva lacné generovanie a nič nepustí ďalej bez brány kritika. Táto lekcia sa venuje samotnej bráne — a nepríjemnej skutočnosti, že každá jednotlivá brána predstavuje jediný bod zlyhania. Nie preto, že by bola nedbalo vytvorená, ale preto, že jej slepé miesto vyplýva z jej **mechanizmu**, nie z dôkladnosti. Statický analyzátor nemožno vyladiť tak, aby odhalil stav, v ktorom aplikácia uviazne počas behu. Vizuálne porovnanie zasa nedokáže zachytiť animáciu. Pokrytie sa nezlepší sprísňovaním jednej brány. Dosiahne sa vrstvením brán, ktorých mechanizmy sú slepé voči *rôznym* veciam. Aby to fungovalo aj v praxi, treba pri každej bráne presne zapísať, čo zo svojej podstaty nedokáže odhaliť, a podľa tohto slepého miesta zvoliť ďalšiu bránu.

## Dôkladnosť nie je pokrytie

Keď niečo prekĺzne, prvým impulzom býva sprísniť bránu, ktorá to nezachytila. Zvyčajne je to nesprávne riešenie. Brána prehliadne určitú triedu chýb z jedného z dvoch dôvodov: buď nebola dostatočne dôkladná, alebo jej mechanizmus *túto triedu vôbec nedokáže vnímať*. Prvý problém sa oplatí opraviť priamo v danej bráne. Druhý sa v nej nedá odstrániť bez ohľadu na vynaložené úsilie. Linter číta zdrojový kód, takže nikdy neuvidí ovládací prvok, ktorý nefunguje iba počas behu. Nástroj na vyhľadávanie vzorov zasa skúma štruktúru, takže nikdy nezistí, že obrazovka, ktorá vyzerá správne, zobrazuje nesprávnu hodnotu z aktuálneho stavu aplikácie. Ak sa sprísni brána, ktorá je voči určitej triede chýb zo svojej podstaty slepá, pribudne iba šum pri triedach chýb, ktoré dokáže zachytiť. Skutočná medzera v pokrytí zostane rovnako veľká.

Birgitta Böckeler pomenúva rovnaký problém z pohľadu tvorby testovacieho prostredia. Pri hodnotení kontrol používaných pri práci s programovacími agentmi kladie otázku, ktorú si väčšina tímov nikdy nepoloží: *„Ak senzory nikdy nezareagujú, svedčí to o vysokej kvalite alebo o nedostatočných detekčných mechanizmoch?“* (`REPORTED`, jej vlastná prax). Odpoveď hľadá pomocou mutačného testovania, pretože jediný spôsob, ako zistiť, či brána dokáže niečo zachytiť, je zámerne vložiť chybu a sledovať, či zareaguje. V jednom prípade našla súbor, ktorý vykazoval *100% pokrytie príkazov*, hoci preň **neexistovali žiadne jednotkové testy**. Údaj o pokrytí bol pravdivý, meral však iba to, či sa daný riadok *vykonal*, nie či niekto *overil jeho správanie*. Zelená brána vypovedá v prvom rade o mechanizme samotnej brány, až potom o kóde. Ak si nikdy nevidel, ako brána zlyhá pri chybe, ktorú si do systému zámerne vložil, nevieš, voči čomu je slepá — vieš iba to, že mlčí.

## Pomenuj, čo jednotlivé brány nedokážu odhaliť

Z toho vyplýva jednoduchý postup, ktorý takmer nikto nedodržiava: **pri každej bráne jednou vetou opíš triedu chýb, ktorú zo svojej podstaty nedokáže zachytiť, a ďalšiu bránu vyber tak, aby pokrývala práve túto triedu.** Slepé miesto nie je ospravedlnením nedostatkov brány, ale zadaním pre nasledujúcu bránu.

Takto vyzerá overovací reťazec, ktorý som navrhol pre production pipeline, v ktorej agenti generujú aplikačný kód podľa špecifikácie návrhu a ďalší agenti ho preverujú. Podstatný je posledný stĺpec každého riadka — práve ten vysvetľuje, prečo existuje nasledujúci riadok.

| Brána | Mechanizmus | Zachytí | Zo svojej podstaty nedokáže odhaliť |
|---|---|---|---|
| Audit správania | vyskúša každý ovládací prvok na každej trase | nefunkčné obslužné rutiny, pokazenú navigáciu, procesy uviaznuté v jednom stave | či funkčné ovládacie prvky robia to, čo *majú* |
| Audit logiky | porovná viditeľný stav so správaním a špecifikáciou | obídenie brán, nesúlad medzi stavom a označením, únik zakázaných hodnôt | či prijateľne *vyzerá* aj správne správanie |
| Statická analýza + testovacie prostredie | vyhľadáva vzory v matici variantov stavov | výnimky spôsobujúce pád, pretečenie, porušenie kontraktov | čokoľvek, čo ukáže iba *spustená* aplikácia — neoverí beh ani spustenie od nuly |
| Ovládač aplikácie počas behu | spustí zostavenú aplikáciu od nuly a prejde dostupné obrazovky | uviaznuté stavy, nefunkčné ovládacie prvky, pády pri spustení od nuly | nič vizuálne — obrazovka, ktorá je vnútorne konzistentná, ale *vyzerá* nesprávne, prejde bez výhrad |
| Porovnanie vizuálnej vernosti | štruktúrne porovná každú obrazovku so špecifikáciou | chýbajúce alebo posunuté prvky, odchýlky v rozložení a farbách | animácie a prechodné stavy — pracuje iba so statickým obrazom |
| Kontrola človekom | človek prejde každú obrazovku na skutočnom zariadení | vykresľovanie skutočných písiem, dojem z animácií, kontrast na obrazovom pozadí | — (posledná brána) |

Stačí čítať posledný stĺpec zhora nadol a logika architektúry sa vyjaví sama. Audit správania nedokáže posúdiť význam, preto po ňom nasleduje brána logiky. Brána logiky pracuje so špecifikáciou, nie so zostaveným výsledkom, preto nasleduje statická analýza s testovacím prostredím, ktorá skontroluje skutočné zostavenie. Táto brána nevidí spustenú aplikáciu, preto po nej prichádza ovládač aplikácie počas behu. Ovládač nevytvára snímky obrazovky, preto nasleduje vizuálne porovnanie. Vizuálne porovnanie je statické, takže reťazec uzatvára človek kontrolou vlastností, ktoré sa prejavia až na skutočnom hardvéri a pri použití skutočných písiem. Žiadna brána nie je nadbytočná. Každá pokrýva presne pomenované slepé miesto predchádzajúcej brány. To je *rozmanitosť mechanizmov*: brány sa nelíšia prísnosťou, ale tým, aký druh informácií dokážu vnímať.

Poradie je súčasťou návrhu a nemožno ho určovať až dodatočne. Jednotlivé kontroly spúšťaj v poradí **mechanická → sémantická → estetická** a toto poradie nemeň. Posudzovať, či obrazovka *vyzerá* správne, skôr než sa overí funkčnosť jej ovládacích prvkov, znamená mrhať časom na estetickú kontrolu obrazoviek, ktoré aj tak zmení oprava správania. Reťazec zoraď podľa toho, ako výrazne oprava v jednotlivých fázach mení výsledok pre nasledujúce kontroly. Ako prvé majú prísť kontroly, ktorých výsledky sa najľahšie stanú neaktuálnymi.

:::tip[▶ Video]

<YouTube id="nthEXs12nFE" title="Cybersecurity Architecture: Application Security — IBM Technology" />

Jeff Crume zo spoločnosti IBM vysvetľuje aplikačnú bezpečnosť ako sústavu vrstiev. Pozri sa na video optikou tejto lekcie: statická analýza a dynamické testovanie sú typickým príkladom *rozmanitosti mechanizmov*. Jedno číta kód a nevidí správanie počas behu, druhé kód spúšťa a nevidí jeho zdrojovú podobu. Spoľahlivosť vzniká vrstvením kontrol, ktoré zlyhávajú odlišne, takže to, voči čomu je jedna slepá, zachytí druhá.

:::

## Spoj deterministickú bránu so sémantickou

Najdôležitejší rozdiel medzi mechanizmami možno vyjadriť jednoducho. **Deterministická** brána (test, typová kontrola, doslovný grep) poskytuje opakovateľné výsledky a jej nález nemožno spochybniť argumentáciou. **Sémantická** brána (LLM, ktorý posudzuje, či kód znamená to, čo má) zachytí triedy chýb, ktoré nemožno vyjadriť žiadnym grepom, je však drahá a funguje iba s určitou pravdepodobnosťou. Obe sú slepé voči opačným veciam, preto ich spoj — a nikdy nedovoľ, aby jedna nahrádzala druhú. grep zakázanej konštrukcie zachytí každý jej doslovný výskyt, ale prehliadne parafrázu. Sémantický posudzovateľ parafrázu zachytí, no keďže funguje pravdepodobnostne, občas prepustí aj doslovný výskyt, ktorý mal nájsť. Vyspelý systém používa obe brány a každý nález *ktorejkoľvek* z nich považuje za skutočný problém. V uvedenom reťazci sa porušenie pravidla konkrétneho projektu hodnotí ako závažné *aj vtedy, keď všeobecný posudzovateľ mlčí*. Jeho mlčanie totiž nie je dôkazom, pretože danú triedu nepozná. Ak brána, ktorá je voči určitej triede slepá, nič neoznačí, neznamená to vôbec nič.

Rovnaké vrstvenie používa tento kurz aj na vlastnú ochranu pred únikom informácií: lacná deterministická kontrola (grep podľa zoznamu slov spúšťaný pri každom commite) sa kombinuje s drahým posúdením (sémantickým auditom podľa neverejných pravidiel pre danú doménu). Vrstvia sa práve preto, že každá brána je slepá voči tomu, čo vidí druhá. grep nedokáže zachytiť únik doménových informácií vyjadrený neutrálnymi slovami a sémantický audit je príliš nákladný na to, aby sa spúšťal po každom stlačení klávesu. Ani jedna z nich sama osebe neposkytuje dostatočné pokrytie. Úplnú ochranu dáva až ich kombinácia.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Základné pravidlo platí pri každej veľkosti: **jedna brána je jediným bodom zlyhania; pokrytie vzniká rozmanitosťou mechanizmov a slepé miesto každej brány musí byť pomenované.** Mení sa iba to, kto ho pomenuje a ako sa dodržiavanie pravidiel vynucuje.

- **Soloista.** Reťazec stojí na tvojej vlastnej disciplíne a slepé miesta sú zaznamenané v dokumente, ktorý skutočne udržiavaš. Skôr než reťazcu začneš dôverovať, pri každej bráne jednou vetou opíš jej slepé miesto a skombinuj aspoň jednu deterministickú bránu s jednou sémantickou. *Akému zlyhaniu to predchádza:* dôveruješ tichej bráne, ktorú si nikdy nevidel zlyhať, a vydáš produkt s celou triedou chýb, ktorú nedokáže odhaliť.
- **Malý tím.** Brány sú pomenované kontroly v CI a mapa slepých miest je spoločný dokument, ktorý tím posudzuje rovnako ako každý iný návrh. *Akému zlyhaniu to predchádza:* dvaja ľudia predpokladajú, že obľúbená brána toho druhého pokrýva triedu chýb, ktorú v skutočnosti nedokáže svojím mechanizmom vidieť ani jedna.
- **Enterprise.** Jednotlivé vrstvy sa povinne uplatňujú, ich nezávislosť sa dá preukázať a posudzovanie slepých miest je zámerná návrhová činnosť s určeným vlastníkom. Vo svete bezpečnosti sa tento prístup nazýva hĺbková ochrana: žiadna jednotlivá kontrola sa nepovažuje za neomylnú a každá počíta s tým, že kontrola pred ňou niekedy zlyhá. *Akému zlyhaniu to predchádza:* vznikne dlhý reťazec s jednotvárnymi mechanizmami, určený iba na splnenie formálnych požiadaviek — šesť brán rovnakého druhu, ktoré sú slepé voči rovnakej triede chýb, a preto proti nej neposkytujú lepšiu ochranu než jediná brána.

## Čo si odniesť

- Jedna brána je jediným bodom zlyhania. Jej slepé miesto vyplýva z jej **mechanizmu**, nie z dôkladnosti — statický analyzátor nemožno vyladiť tak, aby videl stav aplikácie počas behu.
- Pokrytie vzniká **rozmanitosťou mechanizmov**, nie sprísňovaním jednej brány. Vrstvi brány, ktoré sú slepé voči *rôznym* veciam.
- Urob to, čo väčšina tímov vynecháva: pri každej bráne jednou vetou pomenuj, čo zo svojej podstaty nedokáže odhaliť, a podľa tejto vety urči nasledujúcu bránu.
- Zelená brána vypovedá v prvom rade o samotnej bráne, až potom o kóde. Ak si ju nikdy nevidel zlyhať pri chybe, ktorú si zámerne vložil, vieš iba to, že mlčí — nie že funguje.
- Spoj deterministickú bránu so sémantickou a každý nález ktorejkoľvek z nich považuj za skutočný problém. Ak brána, ktorá je voči danej triede slepá, mlčí, neznamená to, že kontrola prešla.

**[Nové pojmy](../glossary.md#layered-gates)**: vrstvené brány, štrukturálne slepé miesto, rozmanitosť mechanizmov, dôkladnosť a pokrytie, deterministická a sémantická brána, hĺbková ochrana.
