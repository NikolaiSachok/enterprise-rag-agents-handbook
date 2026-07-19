---
title: "Ako čítať dôkazy v odbore"
sidebar_position: 3
---

# Ako čítať dôkazy v odbore

Lekcia 1 pri každom čísle uviedla stupeň dôkazu — `MEASURED`, `REPORTED`, `ASSERTED` — bez toho, aby povedala, na čom je toto hodnotenie založené. Táto lekcia ti dá do rúk konkrétny nástroj: rebrík dôkazov, ktorý budeš používať v každej ďalšej lekcii. Stretávaš sa so skreslenými tvrdeniami — nie preto, že by ti niekto klamal, ale preto, že sekundárne zdroje v odbore čísla pri každom ďalšom preberaní skresľujú na obe strany. Nadšenci ich nadsadzujú, skeptici zasa podhodnocujú. A číslo, ktoré prejde cez desať prerozprávaní, stráca presne to, čo ho robilo užitočným. Obrana proti tomu je jednoduchá a nijako oslnivá: dohľadať pôvodný zdroj, ohodnotiť, čo tam skutočne je, a stupeň dôkazu výslovne pomenovať.

## Dôkaz má tri stupne a známosť autora medzi nimi nerozhoduje

Celá disciplína stojí na dôslednom odlišovaní týchto troch stupňov.

- **`MEASURED`** (namerané) — kontrolovaná štúdia, telemetria, dataset alebo reprodukovateľný benchmark efekt naozaj zmeral.
- **`REPORTED`** (hlásené) — menovaný praktik alebo firma dôveryhodne opisuje vlastnú skúsenosť. Sem patrí väčšina tvrdení v odbore.
- **`ASSERTED`** (tvrdené) — názor, marketingová veta alebo argument bez akéhokoľvek podloženia.

Spoľahlivosť tohto rebríka zabezpečujú dve pravidlá. Prvé: známe meno stupeň dôkazu nezvyšuje. Známosť nie je dôkaz — „Karpathy povedal“ je `ASSERTED`, kým nenájdeš, čo naozaj odmeral. Druhé: stupeň sa pri prerozprávaní nesmie zvyšovať. Tvrdenie, ktoré desaťkrát zopakoval účet s veľkým dosahom, je stále len tvrdenie. Stupeň vyjadríš voľbou slov: „randomizovaný experiment zistil“, „praktici hlásia“, „jeden vplyvný príspevok tvrdí“. Tie tri formulácie nie sú ozdoba. Sú to stupne, vyslovené nahlas.

## Skôr než tomu uveríš, spýtaj sa na menovateľa, konflikt záujmov a dátum

Keď tvrdeniu priradíš stupeň, štyri kontroly ukážu, či číslo obstojí pri porovnaní so zdrojom.

Najprv menovateľ. Tá istá telemetria Googlu dáva **28,7 %** alebo **70,6 %** pre podiel kódu napísaného AI — líšia sa len v tom, či je kopírovanie v menovateli (`MEASURED`; Google uvádza obe čísla vedľa seba, na tých istých dátach). Každý titulok „X % kódu píše AI“ je voľba menovateľa, nie fakt. Skôr než číslo zopakuješ, over si jeho menovateľ aj čitateľ.

Potom konflikt záujmov — a povedz ho v texte, nie v poznámke pod čiarou. „Výskumníci GitHubu merajú produkt GitHubu“ je súčasť zistenia, nie okrajová poznámka. Za tým stojí štrukturálne pravidlo: kto nástroj predáva, ten ho nevie nezaujato zmerať. Firma, ktorá nemá čo predať, zvykne zverejniť práve to užitočné číslo — Meta zverejnila aj nelichotivých **19,7 %**; dodávateľ zdôrazňuje lichotivý výsledok.

Potom aktuálnosť. Číslo, ktoré stále koluje, už môže byť zastarané alebo stiahnuté. Google potichu odvolal tvrdenie o výhode pri prepínaní kontextu z roku 2022 — pre chýbajúcu štatistickú významnosť — a webové vyhľadávanie ho v roku 2026 aj tak zopakovalo ako fakt. Samotný METR už svoj výsledok „o 19 % pomalší“ nahradil novším. Číslo neprestane putovať len preto, že prestalo byť pravdivé.

A predovšetkým: choď k pôvodnému zdroju. Vo výskume pre tento kurz úryvky vo výsledkoch vyhľadávania znova a znova obsahovali chyby — vymýšľali desatinné miesta, menili percentá na počty, pripisovali reálne čísla nesprávnej štúdii. Riešením nebol lepší úryvok, ale otvorenie samotnej štúdie.

## Percentuálny bod nie je percento

Jedna kontrola je predpokladom dôveryhodnosti celého kurzu — a je to práve tá, ktorú väčšina médií pokazí. Keď porozumenie klesne zo **67 %** na **50 %** (`MEASURED`), je to pokles o **17 percentuálnych bodov** — relatívne o štvrtinu — nie „o 17 % menej“. Chyba sebahodnotenia u METR je **40 percentuálnych bodov**, nie „40 %“. A relatívny nárast nie je podiel: „**+31,3 %** viac pull requestov sa zlúči bez revízie“ neznamená, že 31 % pull requestov ostáva bez revízie. Sú to dve rôzne veličiny. Pomýliť si ich je presne tá nedbalosť, proti ktorej táto lekcia stojí — pomýliš si to raz, a strácaš právo túto tému učiť.

## Najcitovanejšie číslo o vplyve AI na kvalitu kódu sa nedá overiť

Uplatni tieto štyri kontroly na najcitovanejšie číslo v debate „AI škodí kvalite kódu“: duplicita blokov vraj vzrástla o **81 %** od roku 2023, kopírovanie z **9,4 %** na **15,7 %**. Číslo pochádza od GitClearu, dodávateľa, ktorý predáva analýzu kvality kódu. Prever ho podľa všetkých štyroch kritérií a rozpadne sa ti v rukách. Autor nie je uvedený. Stránka nemá dátum. Korpus je súkromný, takže ho nikto zvonka nezreprodukuje. Metóda nie je opísaná a chýba kontrolná skupina — a nosná chyba: nikde nie je uvedené, ktoré riadky naozaj napísala AI. Je to časový rad za obdobie, keď sa rozširovalo používanie AI, nie porovnanie AI-kódu s kódom bez AI. Dokonca aj údaj o rozsahu sa medzi vydaniami mení — 153 miliónov riadkov, potom 211 miliónov zmenených riadkov, potom 623 miliónov analyzovaných zmien, zakaždým iná jednotka. Nespájaj ich do jedného trendu.

Podstatný je tu jemný rozdiel a je to celá lekcia. Slabina GitClearu nie je, že ho niekto vyvrátil. Pri piatich cielených vyhľadávaniach sa nenašla ani jedna vierohodná metodologická námietka — žiaden rozbor, žiadna neúspešná replikácia, nič. Slabina je, že sa to nedá overiť. Nie je čo reprodukovať. Je to iné a tichšie zlyhanie než mýliť sa, a je bežnejšie.

Čestná verzia toho istého tvrdenia pritom prežíva. Jediný nezávislý kauzálny test — párovaná difference-in-differences štúdia z Carnegie Mellon (porovnanie vývoja skúmanej a kontrolnej skupiny), 401 repozitárov v skúmanej skupine oproti 606 repozitárom v kontrolnej skupine — pri duplicite zistil **+7,92 %**, a nie je to štatisticky významné, v repozitároch, kde sa primárne používajú agenti; **−0,94 %**, tiež nevýznamné, v repozitároch, kde sa primárne používa IDE. Silne významné sú naopak zložitosť (**+34,85 %**) a upozornenia statickej analýzy (**+17,73 %**). Takže „AI zhoršuje udržiavateľnosť“ platí — ale v podobe vyššej zložitosti, nie väčšieho množstva klonov. Najcitovanejšie číslo v tejto debate nemožno nezávisle replikovať; skutočné zistenie je to tiché vedľa neho. A stupeň: napriek všetkým tým desatinným miestam je GitClear `REPORTED`, nie `MEASURED` — časový rad za obdobie, keď sa rozširovalo používanie AI, nie je meranie účinku AI.

## Sekundárna vrstva skresľuje na obe strany

GitClear nie je výnimka, je to typ. Vo výskume pre tento kurz sa podobne rozpadlo šesť ďalších tvrdení — a záver nikdy neznie „títo ľudia klamú“. Je to výsledok selekcie tvrdení, nie vedeckého overovania. Presne preto sa v kurze vraciame k pôvodným zdrojom.

- Pipeline, ktorý sa pri rozbore ukázal byť len diagramom — proces nakreslený ako slučka so spätnou väzbou, ktorá v skutočnosti nemala žiadnu spätnú hranu.
- „Kompilátor špecifikácií“, ktorý je v skutočnosti systémovým promptom s veľkosťou 70 KB. Za produktom stojí repozitár bez kódu — štyri textové súbory — a „kompilátor“ je len prompt, ktorý káže chatbotu tvrdiť, že je kompilátor. Vynucovanie založené iba na zdvorilej požiadavke.
- Vlna CVE pripísaná jednému AI-nástroju — „27 pripísaných Claude Code“ — čo pri rozbore meria iba to, ktorý nástroj podpisuje svoje commity. Claude Code podpisuje predvolene, väčšina nástrojov nie. Číslo počíta odtlačky prstov, nie chyby.
- Najcitovanejšia poučka odboru — „myslenie môžeš outsourcovať, porozumenie nie“ — pripísaná Karpathymu, ktorý sa výslovne odvoláva na tweet, čo sa mu páčil, a autorstvo si nikdy nenárokuje. Pripísať mu ju je presne to skreslenie vzniknuté opakovaným preberaním, ktorému táto lekcia bráni.
- Odvolané číslo Googlu — stiahnuté v roku 2022 pre chýbajúcu štatistickú významnosť — a v roku 2026 vrátené ako aktuálny fakt živým webovým vyhľadávaním.
- „97,9 %“ od OpenAI — reťazec, ktorý sa nenachádza ani v štúdii, ani v blogu, na ktoré sa odvoláva. V uvedených zdrojoch sa nenachádza ani veta, ktorá by toto číslo podopierala, a menovateľ sa cestou zmenil z „aktívnych pracovníkov“ na „zamestnancov“.

Každý z týchto bodov by pri sebavedomom podaní pôsobil presvedčivo. Ani jeden neprežil prečítanie pôvodného zdroja. To je celá metóda — šesť zlyhaní namiesto jedného pravidla.

:::tip[▶ Video]

<YouTube id="-dAmqHFWzyg" title="Top 5 AI Myths — IBM Technology" />

IBM v krátkom videu rozoberá päť „všeobecne známych“ tvrdení o AI, ktoré neprežijú pozorný pohľad — presne ten istý reflex, aký táto lekcia cvičí, len v susednej oblasti. (Video je v angličtine.)

:::

## Niekoľko čísel, ktoré už možno nosíš v hlave

Zopár skreslených tvrdení je bežných natoľko, že sa oplatí pomenovať ich a odložiť.

Číslo „**441,5 %** viac času na revíziu“ je od Faros AI, nie od DORA — a údaj „**+31,3 %**“ uvedený vedľa neho je relatívny nárast podielu pull requestov bez revízie, nie 31-percentný podiel.

„Stanfordská štúdia 100 000 vývojárov“ nemá publikovaný článok. Čísla kolujú cez prednášky a slajdy, metóda nie je zverejnená. Cituj ju, ak vôbec, ako „stanfordská skupina hlási — v prednáškach, nie v publikovanom článku“.

„Copilot zrýchli vývojárov o 55 %“ — to sú výskumníci GitHubu, na produkte GitHubu, na jednej jednoduchej modelovej úlohe o HTTP serveri, z roku 2023. Marketingový artefakt, nie zistenie o tvojej práci.

„Schopnosti AI sa zdvojnásobia každých 7 mesiacov“ je zaokrúhlenie vlastného fitu METR — **207 dní** — a revízia METR z roku 2026 uvádza pre novšie obdobie tempo **131 dní**. Je to regresia založená na dvanástich modeloch na úlohách, pri ktorých má zlyhanie podľa samotného METR malé dôsledky a ktoré sú „statické“. Cituj výsledok regresie; necituj ho ako zákon.

## Zistenie povieš čestne, len keď mu pridáš populáciu a proxy

Zlyhanie je na oboch stranách rovnaké: reálne číslo vytrhnuté z kontextu populácie a použitého proxy ukazovateľa. Pomôže správne sformulovaná veta. Povedz číslo, a potom pridaj to, čo prerozprávanie zvyčajne zahodí — na kom sa meralo, aké proxy zastupovalo hodnotu, kto platil, a či je to ešte aktuálne. Napríklad: „Naprieč desiatkami tisíc inžinierov Microsoftu, pričom sa výsledky každého z nich porovnávali s jeho vlastnými výsledkami, prinieslo osvojenie CLI agenta približne o 24 % viac zlúčených pull requestov za štyri mesiace — počet zlúčených pull requestov však nie je priamym meradlom vytvorenej hodnoty.“ Jediná veta tak obsahuje číslo, populáciu, proxy ukazovateľ aj konflikt záujmov.

Z tohto tvaru vyplýva päť pravidiel. Nikdy neuvádzaj číslo produktivity bez jeho proxy a populácie. Percentuálne body drž oddelene od percent. Konflikt záujmov pomenuj priamo v texte. Keď autori sami odvolajú svoj výsledok, začni práve tým. A uprednostni zistenie, ktoré je nevýhodné pre toho, kto ho zverejnil — Anthropic zverejňuje náklad vlastného nástroja, OpenAI sťahuje vlastný benchmark. Výsledok, ktorý je v neprospech záujmov jeho autora, je najsilnejší dôkaz, aký môže odbor plný konfliktov záujmov ponúknuť.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Hodnotenie dôkazov je univerzálna zručnosť; mení sa len závažnosť dôsledkov.

- **Soloista.** Mechanizmus je osobný návyk: skôr než začneš konať podľa čísla, dohľadáš jeho pôvodný zdroj. Čomu to bráni: tomu, že premárniš víkend prácou založenou na čísle, ktoré sa po otvorení zdroja rozsype.
- **Malý tím.** Mechanizmus je otázka „odkiaľ to vieme?“ ako pravidelná súčasť revízie návrhu — a odkazy na pôvodné zdroje v rozhodovacom dokumente, nie na blogy dodávateľov. Čomu to bráni: tímovému štandardu, voľbe frameworku alebo politike testovania, postavenej na čísle, ktoré nikto nepreveril.
- **Enterprise.** Mechanizmus je požadovaná úroveň dôkazov pre rozhodnutia o nástrojoch — obstarávanie číta pôvodné zdroje, nie prezentácie dodávateľov. Čomu to bráni: nastaveniu politiky pre tisíce ľudí podľa zle prečítanej štúdie. Tu platí to, čo si kurz opakuje najčastejšie: čím ďalej je rozhodnutie od samotnej práce, tým viac sa zlé prečítanie stáva dôkazom, na ktorý sa spoliehajú ostatní. Len čo sa „štúdia hovorí X“ dostane do štandardu, chybu potom prevezme každý, kto je v procese na nižšej úrovni, bez toho, aby zdroj kedy videl.

## Čo si odniesť z lekcie

- Ohodnoť každé tvrdenie — `MEASURED`, `REPORTED`, `ASSERTED` — a pri prerozprávaní stupeň nezvyšuj. Známosť nie je dôkaz.
- Pri čítaní si všímaj menovateľ, konflikt záujmov a aktuálnosť čísla; a keď máš pochybnosti, otvor pôvodný zdroj. Úryvky vo výsledkoch vyhľadávania znova a znova obsahovali chyby. Štúdie nie.
- Percentuálne body nie sú percentá a relatívny nárast nie je podiel. Pomýliš si to a strácaš právo túto tému učiť.
- Najcitovanejšie číslo tejto debaty býva to, ktoré sa nedá overiť, nie to, ktoré je dokázané. Tvrdenie GitClearu o duplicite sa nedá replikovať; čestné zistenie — udržiavateľnosť klesá v dôsledku vyššej zložitosti, nie väčšieho množstva klonov — stojí ticho vedľa.
- Zistenie formuluj s jeho populáciou, proxy, konfliktom záujmov a aktuálnosťou. Uprednostni výsledok, ktorý je nevýhodný pre toho, kto ho zverejnil.

**Nové termíny:** stupeň dôkazu (rebrík `MEASURED` / `REPORTED` / `ASSERTED`), konflikt záujmov uvedený priamo, cesta k pôvodnému zdroju.
