---
title: "Ako čítať dôkazy v odbore"
sidebar_position: 3
---

# Ako čítať dôkazy v odbore

Lekcia 1 pri každom čísle uviedla stupeň dôkazu — `MEASURED`, `REPORTED`, `ASSERTED` — bez toho, aby vysvetlila, z čoho toto hodnotenie vychádza. Táto lekcia ti dá do rúk konkrétny nástroj: rebrík dôkazov, ktorý budeš používať v každej ďalšej lekcii. Stretávaš sa so skreslenými tvrdeniami — nie preto, že by ti niekto klamal, ale preto, že sekundárne zdroje pri každom ďalšom preberaní skresľujú čísla oboma smermi. Nadšenci ich zveličujú, skeptici zasa podhodnocujú. A číslo po desiatich prerozprávaniach stráca presne to, čo ho robilo užitočným. Obrana proti tomu je jednoduchá a nijako oslnivá: nájsť pôvodný zdroj, posúdiť, čo pôvodný zdroj skutočne dokladá, a stupeň dôkazu výslovne pomenovať.

## Dôkaz má tri stupne a známosť autora medzi nimi nerozhoduje

Celá disciplína stojí na dôslednom odlišovaní týchto troch stupňov.

- **`MEASURED`** (namerané) — efekt bol skutočne zmeraný v kontrolovanej štúdii, pomocou telemetrie, na datasete alebo reprodukovateľným benchmarkom.
- **`REPORTED`** (uvádzané) — menovaný praktik alebo firma dôveryhodne opisuje vlastnú skúsenosť. Sem patrí väčšina tvrdení v odbore.
- **`ASSERTED`** (tvrdené) — názor, marketingová veta alebo argument bez akéhokoľvek podloženia.

Spoľahlivosť tohto rebríka zabezpečujú dve pravidlá. Prvé: známe meno stupeň dôkazu nezvyšuje. Známosť nie je dôkaz — „Karpathy povedal“ je `ASSERTED`, kým nenájdeš, čo naozaj odmeral. Druhé: stupeň sa pri prerozprávaní nesmie zvyšovať. Tvrdenie, ktoré desaťkrát zopakoval účet s veľkým dosahom, je stále len tvrdenie. Stupeň vyjadríš voľbou slov: „randomizovaný experiment zistil“, „praktici uvádzajú“, „jeden vplyvný príspevok tvrdí“. Tie tri formulácie nie sú ozdoba. Takto stupeň dôkazu pomenuješ priamo.

## Skôr než tomu uveríš, spýtaj sa na menovateľa, konflikt záujmov a dátum

Keď tvrdeniu priradíš stupeň, štyri kontroly ukážu, či číslo obstojí pri porovnaní so zdrojom.

Najprv menovateľ. Z tej istej telemetrie Googlu vychádza **28,7%** alebo **70,6%** pre podiel kódu napísaného AI — líšia sa len v tom, či sa kopírovanie započítava do menovateľa (`MEASURED`; Google uvádza obe čísla vedľa seba, na tých istých dátach). Každý titulok typu „X% kódu píše AI“ závisí od voľby menovateľa; nejde o jednoznačný fakt. Skôr než číslo zopakuješ, over si jeho menovateľ aj čitateľ.

Potom konflikt záujmov — a povedz ho v texte, nie v poznámke pod čiarou. „Výskumníci GitHubu merajú produkt GitHubu“ je súčasť zistenia, nie okrajová poznámka. Platí tu všeobecné pravidlo: kto nástroj predáva, nedokáže jeho účinok zmerať úplne nezaujato. Firma, ktorá nemá čo predať, má väčšiu motiváciu zverejniť aj menej lichotivý, no užitočný výsledok — Meta zverejnila aj nelichotivý výsledok **19,7%**; dodávateľ zdôrazňuje lichotivý výsledok.

Potom aktuálnosť. Číslo, ktoré stále koluje, už môže byť zastarané alebo stiahnuté. Google potichu odvolal tvrdenie o výhode pri prepínaní kontextu z roku 2022 — pre chýbajúcu štatistickú významnosť — vo výsledkoch webového vyhľadávania sa však ešte v roku 2026 objavovalo ako fakt. Samotný METR už svoj výsledok „o 19% pomalší“ nahradil novším. Ľudia neprestanú číslo šíriť iba preto, že prestalo byť pravdivé.

A predovšetkým: choď k pôvodnému zdroju. Vo výskume pre tento kurz úryvky vo výsledkoch vyhľadávania znova a znova obsahovali chyby — vymýšľali desatinné miesta, menili percentá na počty, pripisovali reálne čísla nesprávnej štúdii. Nestačilo hľadať presnejší úryvok; bolo potrebné otvoriť samotnú štúdiu.

## Percentuálny bod nie je percento

Jedna kontrola je predpokladom dôveryhodnosti celého kurzu — a je to práve tá, ktorú väčšina médií pokazí. Keď porozumenie klesne zo **67%** na **50%** (`MEASURED`), je to pokles o **17 percentuálnych bodov** — relatívne o štvrtinu — nie „o 17% menej“. Chyba sebahodnotenia v štúdii METR je **40 percentuálnych bodov**, nie „40%“. A relatívny nárast nie je podiel: údaj **+31,3%** znamená, že počet pull requestov zlúčených bez revízie vzrastie o 31,3%; neznamená, že 31% pull requestov ostáva bez revízie. Sú to dve rôzne veličiny. Pomýliť si ich je presne tá nedbalosť, proti ktorej táto lekcia stojí — ak si ich raz pomýliš, stratíš právo túto tému učiť.

## Najcitovanejšie číslo o vplyve AI na kvalitu kódu sa nedá overiť

Uplatni tieto štyri kontroly na najcitovanejšie číslo v debate „AI škodí kvalite kódu“: duplicita blokov vraj vzrástla o **81%** od roku 2023, kopírovanie z **9,4%** na **15,7%**. Číslo pochádza od GitClearu, dodávateľa, ktorý predáva analýzu kvality kódu. Keď tvrdenie preveríš podľa všetkých štyroch kritérií, neobstojí. Autor nie je uvedený. Stránka nemá dátum. Korpus je súkromný, takže ho nikto zvonka nezreprodukuje. Metóda nie je opísaná a chýba kontrolná skupina — a čo je najzásadnejšie, nikde nie je uvedené, ktoré riadky naozaj napísala AI. Je to časový rad za obdobie, keď sa rozširovalo používanie AI, nie porovnanie AI-kódu s kódom bez AI. Dokonca aj údaj o rozsahu sa medzi vydaniami mení — 153 miliónov riadkov, potom 211 miliónov zmenených riadkov, potom 623 miliónov analyzovaných zmien, zakaždým iná jednotka. Nespájaj ich do jedného trendu.

Práve tento jemný rozdiel je podstatou celej lekcie. Slabina GitClearu nie je, že ho niekto vyvrátil. Pri piatich cielených vyhľadávaniach sa nenašla ani jedna vierohodná metodologická námietka — žiaden rozbor, žiadna neúspešná replikácia, nič. Jeho slabinou je, že tvrdenie nemožno overiť. Nie je čo reprodukovať. Je to iné a tichšie zlyhanie než omyl a je bežnejšie.

Obhájiteľná verzia podobného tvrdenia však existuje. V repozitároch, kde sa primárne používajú agenti, jediný nezávislý kauzálny test — párovaná difference-in-differences štúdia z Carnegie Mellon (porovnanie vývoja skúmanej a kontrolnej skupiny), 401 repozitárov v skúmanej skupine oproti 606 repozitárom v kontrolnej skupine — zistil pri duplicite zmenu **+7,92%**, ktorá nebola štatisticky významná; v repozitároch, kde sa primárne používa IDE, zistil zmenu **−0,94%**, takisto bez štatistickej významnosti. Silne významné sú naopak zložitosť (**+34,85%**) a upozornenia statickej analýzy (**+17,73%**). Takže „AI zhoršuje udržiavateľnosť“ platí — ale v podobe vyššej zložitosti, nie väčšieho množstva klonov. Najcitovanejšie číslo v tejto debate nemožno nezávisle replikovať; skutočné zistenie zostáva popri ňom takmer nepovšimnuté. Pokiaľ ide o stupeň dôkazu, napriek všetkým tým desatinným miestam je GitClear `REPORTED`, nie `MEASURED` — časový rad za obdobie, keď sa rozširovalo používanie AI, nie je meranie účinku AI.

## Sekundárna vrstva skresľuje na obe strany

GitClear nie je výnimkou, ale typickým príkladom. Vo výskume pre tento kurz sa podobne rozpadlo šesť ďalších tvrdení — a záver nikdy neznie „títo ľudia klamú“. Je to dôsledok výberu tvrdení, nie vedeckého overovania. Presne preto sa v kurze vraciame k pôvodným zdrojom.

- Pipeline sa pri rozbore ukázal byť len diagramom — procesom nakresleným ako slučka so spätnou väzbou, ktorá v skutočnosti nemala žiadnu spätnú hranu.
- „Kompilátor špecifikácií“ je v skutočnosti systémovým promptom s veľkosťou 70 KB. Za produktom stojí repozitár bez kódu — štyri textové súbory — a „kompilátor“ je len prompt, ktorý káže chatbotu tvrdiť, že je kompilátor. Ide o vynucovanie založené iba na zdvorilej požiadavke.
- Vlna CVE bola pripísaná jednému AI-nástroju — „27 pripísaných Claude Code“ — pri rozbore sa však ukáže, že toto číslo meria iba to, ktorý nástroj podpisuje svoje commity. Claude Code podpisuje predvolene, väčšina nástrojov nie. Číslo počíta odtlačky prstov, nie chyby.
- Najcitovanejšia poučka odboru — „myslenie môžeš outsourcovať, porozumenie nie“ — sa pripisuje Karpathymu, ktorý sa výslovne odvoláva na tweet, čo sa mu páčil, a autorstvo si nikdy nenárokuje. Pripísať mu ju je presne to skreslenie vzniknuté opakovaným preberaním, ktorému táto lekcia bráni.
- Odvolané číslo Googlu — stiahnuté v roku 2022 pre chýbajúcu štatistickú významnosť — sa vo výsledkoch aktuálneho webového vyhľadávania ešte v roku 2026 objavovalo ako platný fakt.
- Údaj „97,9%“ od OpenAI sa nenachádza ani v štúdii, ani v blogu, na ktoré sa odvoláva. V uvedených zdrojoch sa nenachádza ani veta, ktorá by toto číslo podopierala, a menovateľ sa cestou zmenil z „aktívnych pracovníkov“ na „zamestnancov“.

Každý z týchto bodov by pri sebavedomom podaní pôsobil presvedčivo. Ani jedno neobstálo po prečítaní pôvodného zdroja. To je celá metóda — šesť zlyhaní namiesto jedného pravidla.

:::tip[▶ Video]

<YouTube id="-dAmqHFWzyg" title="Top 5 AI Myths — IBM Technology" />

IBM v krátkom videu rozoberá päť „všeobecne známych“ tvrdení o AI, ktoré neobstoja pri bližšom skúmaní — presne ten istý reflex, aký táto lekcia cvičí, len v susednej oblasti. (Video je v angličtine.)

:::

## Niekoľko čísel, ktoré už možno nosíš v hlave

Zopár skreslených tvrdení je natoľko bežných, že sa ich oplatí uviesť na pravú mieru.

Číslo „**441,5%** viac času na revíziu“ je od Faros AI, nie od DORA — a údaj „**+31,3%**“ uvedený vedľa neho je relatívny nárast podielu pull requestov bez revízie, nie 31-percentný podiel.

„Stanfordská štúdia 100 000 vývojárov“ nemá publikovaný článok. Čísla kolujú cez prednášky a slajdy, metóda nie je zverejnená. Cituj ju, ak vôbec, ako „stanfordská skupina uvádza — v prednáškach, nie v publikovanom článku“.

„Copilot zrýchli vývojárov o 55%“ — tento výsledok pochádza od výskumníkov GitHubu, z experimentu pri hodnotení produktu GitHubu, na jednej jednoduchej modelovej úlohe o HTTP serveri, z roku 2023. Je to marketingový artefakt, nie zistenie o tvojej práci.

„Schopnosti AI sa zdvojnásobia každých 7 mesiacov“ je zaokrúhlená hodnota z fitu, ktorý vytvoril METR — **207 dní** — a revízia METR z roku 2026 uvádza pre novšie obdobie tempo **131 dní**. Je to regresia založená na dvanástich modeloch na úlohách, pri ktorých má zlyhanie podľa samotného METR malé dôsledky a ktoré sú „statické“. Cituj výsledok regresie; necituj ho ako zákon.

## Zistenie povieš čestne, len keď mu pridáš populáciu a proxy

Nadšenci aj skeptici robia tú istú chybu: reálne číslo vytrhnú z kontextu populácie a použitého proxy ukazovateľa. Pomôže správne sformulovaná veta. Povedz číslo a potom pridaj to, čo prerozprávanie zvyčajne zahodí — na akej populácii sa meralo, aký proxy ukazovateľ nahrádzal priame meranie hodnoty, kto výskum financoval a či je výsledok ešte aktuálny. Napríklad: „V skupine desiatok tisíc inžinierov Microsoftu, pričom sa výsledky každého z nich porovnávali s jeho vlastnými výsledkami, sa po zavedení CLI agenta za štyri mesiace zlúčilo približne o 24% viac pull requestov — počet zlúčených pull requestov však nie je priamym meradlom vytvorenej hodnoty.“ Jediná veta tak obsahuje číslo, populáciu, proxy ukazovateľ aj konflikt záujmov.

Z tohto tvaru vyplýva päť pravidiel. Nikdy neuvádzaj číslo produktivity bez jeho proxy a populácie. Percentuálne body drž oddelene od percent. Konflikt záujmov pomenuj priamo v texte. Keď autori sami odvolajú svoj výsledok, začni práve tým. A uprednostni zistenie, ktoré je v rozpore so záujmami toho, kto ho zverejnil — Anthropic zverejňuje náklad vlastného nástroja, OpenAI sťahuje vlastný benchmark. Výsledok, ktorý je v rozpore so záujmami svojho autora, je najsilnejším dôkazom, aký môže odbor plný konfliktov záujmov ponúknuť.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Hodnotenie dôkazov je univerzálna zručnosť; mení sa len závažnosť dôsledkov.

- **Soloista.** Ako soloista si osvoj návyk: skôr než začneš konať podľa čísla, nájdi jeho pôvodný zdroj. Tak nepremárniš víkend prácou založenou na čísle, ktoré sa po otvorení zdroja ukáže ako nepodložené.
- **Malý tím.** V malom tíme pravidelne klaď otázku „odkiaľ to vieme?“ pri revízii návrhu — a do rozhodovacieho dokumentu vkladaj odkazy na pôvodné zdroje, nie na blogy dodávateľov. Tak zabrániš tomu, aby tímový štandard, voľba frameworku alebo politika testovania stáli na čísle, ktoré nikto nepreveril.
- **Enterprise.** V enterprise prostredí stanov požadovanú úroveň dôkazov pre rozhodnutia o nástrojoch — ľudia zodpovední za obstarávanie čítajú pôvodné zdroje, nie prezentácie dodávateľov. Tak zabrániš nastaveniu politiky pre tisíce ľudí podľa zle prečítanej štúdie. Tu platí pravidlo, ktoré si kurz opakuje najčastejšie: čím väčší odstup majú ľudia prijímajúci rozhodnutie od samotnej práce, tým ľahšie sa nesprávny výklad začne považovať za dôkaz, na ktorý sa spoliehajú ostatní. Len čo sa tvrdenie „zo štúdie vyplýva X“ dostane do štandardu, chybu potom prevezme každý ďalší človek v procese bez toho, aby niekedy videl zdroj.

## Čo si odniesť z lekcie

- Ohodnoť každé tvrdenie — `MEASURED`, `REPORTED`, `ASSERTED` — a pri prerozprávaní stupeň nezvyšuj. Známosť nie je dôkaz.
- Pri čítaní si všímaj menovateľ, konflikt záujmov a aktuálnosť čísla; a keď máš pochybnosti, otvor pôvodný zdroj. Úryvky vo výsledkoch vyhľadávania znova a znova obsahovali chyby. V samotných štúdiách sa tieto chyby nenachádzali.
- Percentuálne body nie sú percentá a relatívny nárast nie je podiel. Ak si ich pomýliš, strácaš právo túto tému učiť.
- Najcitovanejšie číslo tejto debaty býva to, ktoré sa nedá overiť, nie to, ktoré je dokázané. Tvrdenie GitClearu o duplicite sa nedá replikovať; obhájiteľné zistenie — udržiavateľnosť klesá v dôsledku vyššej zložitosti, nie väčšieho množstva klonov — zostáva v úzadí.
- Zistenie formuluj s jeho populáciou, proxy, konfliktom záujmov a aktuálnosťou. Uprednostni výsledok, ktorý je v rozpore so záujmami toho, kto ho zverejnil.

**Nové termíny:** stupeň dôkazu (rebrík `MEASURED` / `REPORTED` / `ASSERTED`), konflikt záujmov uvedený priamo, vyhľadanie pôvodného zdroja.
