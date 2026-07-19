---
title: Overovanie je úzke miesto
sidebar_position: 1
---

# Overovanie je úzke miesto

Generovať kód zlacnelo; overiť ho nie. A zo všetkých spoľahlivých meraní vyplýva to isté. Výstupu pribúda, no stále nemáme zmerané, či je dobrý. Práve overovanie je **úzke miesto (verification bottleneck)** celého procesu. Neoverené generovanie preto nie je priepustnosť — je to záväzok, ktorý raz budeš musieť splatiť. Táto lekcia sa neopiera o presvedčenie, ale o dôkazy. Pri každom čísle sa dozvieš, čo presne sa meralo.

## Priepustnosť naozaj stúpa

Prvá polovica príbehu je skutočná a viackrát potvrdená: agenti zvyšujú počet dodaných zmien.

Microsoft nameral, že vývojári, ktorí začali používať kódovacích agentov v príkazovom riadku, zlučovali približne o **24% viac pull requestov** — a efekt sa počas štyroch mesiacov nevytratil. Efekt závisel aj od intenzity používania: 5 a viac dní v týždni znamenalo +50%, štyri dni +22%, tri dni +15%. `MEASURED` (namerané / hlásené / tvrdené — stupne dôkazu podrobne predstavuje lekcia 2; tu ide o *meranie*). Čo presne sa meralo: počet zlúčených pull requestov na inžiniera za deň u **dobrovoľných** používateľov. Bola to pozorovacia štúdia s fixnými efektmi na úrovni jednotlivcov; výsledok obstál aj v placebo teste (−1,1% [−10,6%, +8,6%]). Jedna výhrada patrí priamo do textu: autori sú zamestnanci Microsoftu a Microsoft vlastní GitHub aj Copilot CLI. Kto nástroj predáva, ten ho nevie nezaujato zmerať — posudzuj toto číslo s prihliadnutím na tento konflikt záujmov. A druhá: zlúčený pull request je **proxy metrika** (proxy metric) — merateľná náhrada za hodnotu, nie hodnota sama.

Rovnaký trend zistil Google: **+17,5% CLT** [15,9%, 19,0%] na používateľa za mesiac u tých, ktorí si osvojili nástroj „Transform Code“. CLT sú odoslané zoznamy zmien (change lists) na vývojára za mesiac — opäť proxy priepustnosti. Metóda: pozorovacia analýza DiD (difference-in-differences — porovnanie vývoja dvoch skupín), 36 000 používateľov v skupine používajúcej nástroj, 18 000 v kontrolnej. A nástroj si zvolili sami. Do tretice jedna firma s interným nariadením „dvojnásobok“ dosiahla **2,09×** zlúčených pull requestov na osobu — lenže merala presne to číslo, ktoré si nariadila zvýšiť. To je učebnicový príklad Goodhartovho zákona: keď sa z miery stane cieľ, prestane byť dobrou mierou.

Poučenie je preto striedme: nárast priznaj, ale vždy pomenuj použitú proxy metriku. „O 24% viac zlúčených pull requestov u Microsoftu“ — nikdy nie „o 24% produktívnejší“.

## Kvalita klesá — a dlh zostáva

Ak by výstup pribúdal bez následkov, nebolo by o čom písať. Lenže z druhej polovice merania vyplýva opak.

Univerzita Carnegie Mellon pomocou párovania porovnala repozitáre, kde sa začalo pracovať s agentmi, s porovnateľnou kontrolnou skupinou. Kognitívna zložitosť tam narástla o **34,85%** (SE 0,059, p&lt;0,001) a upozornenia statickej analýzy o **17,73%** (SE 0,048, p&lt;0,001). Duplicita stúpla o 7,92%, ale tento rozdiel **nebol štatisticky významný** — nič z neho nevyvodzuj. `MEASURED`; N = 401 repozitárov v skúmanej skupine a 606 spárovaných kontrolných repozitárov, dáta siahajú do novembra 2025. A maj na pamäti, čo to znamená: upozornenie statickej analýzy nie je to isté ako chyba.

Druhé meranie tej istej skupiny ukazuje, že tieto riziká pre kvalitu **pretrvávajú aj vtedy, keď náskok v rýchlosti vyprchá** — a že práve nahromadený dlh spôsobuje neskoršie spomalenie. Náskok slabol v druhom mesiaci a v treťom bol preč. Čo z toho plynie: rýchlosť nedostaneš zadarmo — dostaneš ju na úver. Toto je **technický dlh na úver**: splatíš ho neskôr, keď zložitosť a upozornenia začnú brzdiť ďalšiu prácu.

Jednu vec o tomto dôkaze zamlčať nesmieš: tie štúdie napísala do veľkej miery tá istá výskumná skupina a vychádzajú prevažne z jedného datasetu pull requestov, pri ktorých autori sami uviedli použitie agentov. Nejde teda o navzájom nezávislé replikácie. Povedz to nahlas — presne to od tejto lekcie čitateľ čaká.

## Porozumenie klesá, a rýchlosť si tým nekúpiš

Randomizovaný experiment Anthropicu so Stanfordom meral porozumenie: skupina s AI dosiahla **50%**, skupina bez nej **67%** — rozdiel **17 percentuálnych bodov** (relatívne teda o štvrtinu menej, nie „o 17% menej“ — tento rozdiel si nepomýľ, inak strácaš právo o téme hovoriť). Dokončenie úlohy bolo s AI rýchlejšie asi o dve minúty, no tento rozdiel **nebol významný**. N = 52, prevažne mladší inžinieri, ktorí sa učili neznámu asynchrónnu knižnicu (Trio).

Najzaujímavejšie je rozdelenie výsledkov **vnútri** skupiny s AI. Tí, ktorí prácu úplne delegovali, skončili pod 40%; tí, ktorí AI použili na pojmové otázky („prečo to takto funguje“), na 65% a viac. Výskum rozlíšil šesť vzorcov interakcie a pri troch z nich sa porozumenie zachovalo. Rozhodujúci teda bol vzorec interakcie, nie samotný nástroj.

Dve výhrady k rozsahu. Išlo o učenie sa **neznámej** knižnice, nie o ustálenú prácu na známom kóde. A čo tomu dodáva váhu: Výsledok ide proti záujmom samotného zdroja: Anthropic AI predáva, no autor štúdie z tejto firmy zároveň zverejnil jej obmedzenia. Práve preto, že výsledok išiel proti ich obchodnému záujmu, možno meraniu veriť viac. Či sa „dlh na porozumení“ kumuluje počas celej kariéry, je zatiaľ `UNKNOWN` (neznáme).

## Sebahodnotenie je rozbité

Ak si teraz myslíš, že rozdiel medzi rýchlosťou a hodnotou jednoducho vycítiš, ďalšie meranie je práve o tebe.

V randomizovanom experimente METR vývojári pred experimentom odhadovali zrýchlenie o 24%; po ňom mali pocit, že boli o 20% rýchlejší — v skutočnosti boli **pomalší**. Podľa vlastného zhrnutia METR sa mýlili v priemere o **40 percentuálnych bodov**. A netrafili ani znamienko: ekonómovia čakali skrátenie o 39%, výskumníci strojového učenia o 38%. `MEASURED`, ale s dvomi závažnými výhradami. Po prvé, N = 16 a 246 úloh — skúsení správcovia repozitárov, ktoré vlastnia približne päť rokov. Teda presne ten režim, kde AI pomáha najmenej. Celé zistenie o sebahodnotení stojí na tejto jednej štúdii. Po druhé — a toto je dôležité — konkrétne číslo „o 19% pomalší“ samo METR od februára 2026 označuje za neaktuálne. Neber ho preto ako platný fakt.

Poučenie, ktoré prežije aj bez toho čísla, je toto: vplyv AI na tvoju rýchlosť **necítiš** — musíš ho odmerať. Práve túto medzeru voláme **skreslenie sebahodnotenia**.

## Benchmarky nepredpovedajú produkciu

Zostáva otázka, ktorá vyzerá ako záchrana: veď máme benchmarky, čísla úspešnosti modelov. Lenže benchmarky nepredpovedajú výsledky v produkcii.

Meta zverejnila, že jej nástroj mal **68% presnej zhody** v offline teste, no v produkcii sa reálne uplatnilo len **19,7%** — offline výsledok bol teda približne 3,5-násobkom produkčného. Merala pritom, ako často inžinier naozaj **použil** opravu, ktorú AI navrhla k skutočnej revíznej pripomienke — približne jednu z piatich. Zvyšných asi 80% zostalo nepoužitých. Je to najlepšie doložené produkčné číslo v celom korpuse — a zverejnil ho ten, kto nástroj vytvoril. Tejto medzere medzi testom a nasadením hovoríme **priepasť medzi benchmarkom a produkciou** (benchmark-to-production gap).

A pozor aj na samotné „percento kódu od AI“. Google z tej istej telemetrie vedľa seba uvádza **28,7%** aj **70,6%** — rozdiel je len v tom, či sa do menovateľa započíta kopírovanie. Každý titulok typu „X% kódu píše AI“ preto stojí na **voľbe menovateľa**, nie na jedinom nespornom fakte. Odtiaľ všeobecné pravidlo: každé mediálne číslo produktivity je proxy — zlúčené pull requesty, commity, riadky kódu, znaky, čas nad úlohou. Ani jedno z nich nie je hodnota.

:::tip[▶ Video]

<YouTube id="kDY4TodQwbg" title="What are Large Language Model (LLM) Benchmarks? — IBM Technology" />

Skôr než uveríš ďalšiemu skóre z benchmarku, oplatí sa vedieť, čo benchmark vlastne meria — a čo nie. (Video je v angličtine.)

:::

## Samotný merací prístroj sa zrútil

Dá sa aspoň veriť benchmarkom ako meradlám? V čase písania nie — a to je asi najostrejšie zistenie lekcie.

OpenAI prestalo odporúčať **SWE-bench Verified** (23. 2. 2026): **aspoň 59,4%** z auditovaných najťažších úloh malo testy, ktoré **odmietajú aj funkčne správne riešenie**. Skóre podľa OpenAI navyše odráža najmä to, koľko z benchmarku model videl počas tréningu. O päť mesiacov nato OpenAI **prestalo odporúčať aj náhradu, ktorú predtým samo navrhlo** — SWE-bench Pro (8. 7. 2026), s odhadom, že asi **30%** jej úloh je pokazených. `MEASURED`. Výsledok: v čase písania neexistuje žiadny špičkový benchmark na kódovanie, ktorý by uznávala odborná komunita.

Podstatný však nie je titulok, ale príčina — mechanizmus v pozadí. Audit Cursoru ukázal, že pri **63%** úspešných riešení sa oprava skôr **vyhľadala**, než odvodila. A pri 29,6% prijateľných záplat testy prešli, hoci oprava bola nesprávna. Nejde teda o chybu jediného datasetu. Keď sa úlohy ťažia zo zlúčených pull requestov, znovu a znovu sa opakuje rovnaký typ chyby — *pretože zlúčený pull request nikdy nebol špecifikáciou.* (Tento problém ďalej rozoberá lekcia 3 pri nesprávnom čítaní toho, čo zlúčený PR dokazuje, a lekcia 5 pri obchádzaní kontrolných brán.)

## Prečo tá istá AI raz zrýchli a raz spomalí

Dva randomizované experimenty, opačné znamienka. Inžinieri Googlu na **neznámej** podnikovej úlohe boli o 21% rýchlejší; správcovia repozitárov, ktoré vlastnili päť rokov, o 19% pomalší. Rozdiel nespôsobuje samotná AI — rozhoduje znalosť úlohy: čím známejší je terén, tým menej má AI kde pomôcť. (Obe čísla sú dnes zastarané a berieme ich len ako kontrast, nie ako platné hodnoty.) Rovnaké rozdelenie výsledkov si videl vyššie: skupina s AI sa učila **neznámu** knižnicu — a tam porozumenie kleslo. Nie je to náhoda; znalosť terénu je vierohodné spoločné vysvetlenie oboch výsledkov.

## Jeden čestný titulok

Ak sa má celá lekcia zmestiť do jednej vety, znie takto: výstupu je viac, no nie je doložené, či je viac aj hodnoty — a odboru chýbajú dohodnuté miery, podľa ktorých by sa to dalo posúdiť. Nie je to skepsa voči AI: k rovnakému záveru dospeli aj autori najsilnejšieho čísla v prospech AI (Microsoft). Povedz to bez okolkov — priznávajú to práve tí, ktorí priniesli najlepší údaj o priepustnosti.

A zo všetkých štúdií vyplýva rovnaký záver: *neoverené generovanie je záväzok, nie priepustnosť* — a rozhodujú o tom **revízia a overovanie.** Znamienko tohto efektu neurčuje AI, ale tím. Preto je revízia kontrolným bodom, od ktorého závisí celý zvyšok kurzu.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Nemenná zásada je pre všetkých rovnaká: **neoverené generovanie je záväzok, nie priepustnosť.** Úzke miesto je univerzálne; mení sa len rozpočet na overovanie a to, čomu na danej úrovni bráni.

- **Soloista.** Mechanizmus: vlastné oči plus jedna automatická brána (build alebo testy), ktorú agent nemôže upraviť. Čomu bráni: aby si nedodal kód, pri ktorom máš pocit, že vznikol rýchlejšie, no ktorý je merateľne zaťažený dlhom — veď sám seba v tomto ohodnotiť nevieš (pozri sebahodnotenie vyššie).
- **Malý tím.** Mechanizmus: nezávislá revízia druhého človeka a spoločné CI ako dôkaz. Čomu bráni: riziku, že autor posudzuje vlastnú prácu, a tichému rastu technického dlhu zo zložitosti.
- **Enterprise.** Mechanizmus: nezávislá revízia plus produkčná telemetria, ktorá dodáva údaje do opravnej slučky. Čomu bráni: nekontrolovanému rastu objemu zmien, ktorý kontrolný systém nestíha absorbovať — teda nestabilite ďalej v procese (DORA). Tu nezávislosť recenzenta prestáva byť len dobrým zvykom. V odbornej terminológii sa tento princíp nazýva **oddelenie právomocí** (separation of duties) a priamo ho predpisujú **SLSA Source L4 „Two-Party Review“** (OpenSSF) aj **DORA RTS, čl. 17** (nezávislosť schvaľujúcej a vykonávajúcej funkcie). Tvrdenie má dve opory: prax nezávislého schvaľovania zmien bola predmetom merania (`MEASURED`) a DORA z nej navyše robí regulačnú požiadavku — nie je to rada, ale požiadavka, ktorej dodržanie vie overiť tretia strana.

Všimni si posun medzi jednotlivými úrovňami. Čím bližšie je revízia k miestu možnej škody (blast radius, teda rozsah škôd), tým viac záleží na **schopnosti** chybu zachytiť; s rastúcim odstupom čoraz viac záleží aj na **dôkaze** pre audítora, že kontrola naozaj prebehla. Mechanizmus je jeden, no s odstupom od škody sa mení jeho hlavný účel.

## Čo si odniesť z lekcie

- Generovať je lacné, overovať nie: rozhodujúcim obmedzením softvéru vytváraného pomocou agentov je kapacita overovania, nie schopnosť modelu.
- Priepustnosť s agentmi naozaj stúpa a je to viackrát potvrdené — ale merané čísla sú proxy (zlúčené pull requesty, CLT, riadky), nie hodnota. Nárast priznaj, vždy pomenuj použitú proxy metriku.
- Za rýchlosť sa platí: zložitosť a upozornenia rastú a dlh pretrváva aj po tom, čo náskok vyprchá. Rýchlosť dostávaš na úver.
- Vplyv AI na tvoju rýchlosť necítiš — musíš ho odmerať. Číslo „o 19% pomalší“ je neaktuálne; poučenie o sebahodnotení platí ďalej.
- Benchmarky sa do produkcie neprenášajú (Meta 68% → 19,7%) a v čase písania neexistuje dôveryhodný špičkový benchmark na kódovanie — pri ťažení úloh zo zlúčených pull requestov sa opakuje rovnaký typ chyby, lebo zlúčený PR nebol špecifikáciou.
- Znalosť terénu vysvetľuje, prečo tá istá AI raz zrýchli a raz spomalí — nie „AI je dobrá/zlá“.
- Rozhodujúce sú vždy revízia a overovanie. Znamienko tohto efektu určuje tím, nie model.

**Nové termíny:** úzke miesto overovania (verification bottleneck), proxy metrika (proxy metric), voľba menovateľa (denominator choice), priepasť medzi benchmarkom a produkciou (benchmark-to-production gap), skreslenie sebahodnotenia (self-assessment gap), technický dlh na úver (tech debt on credit).

---

Slovník stupňov dôkazu — `MEASURED` / `REPORTED` / `ASSERTED` — podrobne vysvetľuje lekcia 2. Zistenie z tejto lekcie („revízia je kontrolný bod“) je téza, na ktorej stojí celý kurz aj slučka predstavená v úvode.
