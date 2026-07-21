---
id: glossary
title: Slovník pojmov
sidebar_position: 7
---

# Slovník pojmov

Každý pojem, ktorý lekcie zavádzajú, je tu vymedzený raz. Každá lekcia sa končí riadkom **Nové pojmy** s odkazom na príslušnú sekciu. Zoznam rastie spolu s kurzom.

<a id="verification-bottleneck"></a>

## Úzke miesto overovania

**Úzke miesto overovania** — rozhodujúce obmedzenie pri vývoji softvéru agentmi: generovanie je lacné, kontrola nie; priepustnosť závisí od kapacity na revíziu a overovanie, nie od schopností modelu.

**Proxy metrika** — akýkoľvek merateľný ukazovateľ používaný ako náhrada za hodnotu: zlúčené PR, commity, riadky kódu či čas strávený na úlohe. Priepustnosť sa dá merať, hodnota nie.

**Voľba menovateľa** — údaje o „podiele kódu napísaného AI“ závisia výlučne od menovateľa: rovnaká telemetria môže ukazovať 28,7% aj 70,6%.

**Priepasť medzi benchmarkom a produkciou** — prepad zo skóre v offline benchmarku na mieru reálneho využitia v SDLC (Meta: 68% → 19,7%, približne 3,5×).

**Skreslenie sebahodnotenia** — vývojári nedokážu správne posúdiť, ako AI ovplyvňuje rýchlosť ich vlastnej práce; nameraná chyba je približne 40 percentuálnych bodov — mýlia sa dokonca aj v tom, či sa zrýchlili, alebo spomalili.

**Technický dlh na úver** — počiatočný nárast rýchlosti, ktorý treba splatiť neskôr: zložitosť a počet upozornení dlhodobo rastú a napokon vývoj spomaľujú.

<a id="reading-the-evidence"></a>

## Ako posudzovať dôkazy

**Stupeň dôkazu** — klasifikácia tvrdenia ako `MEASURED` / `REPORTED` / `ASSERTED`. Stupeň sa dedí a nikdy sa nezvyšuje.

**Konflikt záujmov, uvedený priamo** — uvedenie konfliktu záujmov — teda kto platí — priamo vo formulácii zistenia, nie v poznámke pod čiarou.

**Overovanie v prvotnom zdroji** — prečítanie prvotného zdroja s prihliadnutím na dátum jeho zverejnenia namiesto spoliehania sa na sprostredkované zhrnutie.

<a id="preparation-over-model"></a>

## Príprava je dôležitejšia než model

**Príprava je dôležitejšia než model** — príprava prostredia a vymedzenie úlohy ovplyvňujú úspešnosť viac než výber modelu.

**Zásluha kontroly, nie agenta** — nízky počet zlyhaní zabezpečila prísna kontrola pri revízii, nie samotný agent.

**Zvládnuteľný rozsah (úlohy)** — začínaš presne ohraničeným problémom a človek schvaľuje požiadavky.

**Najprv architektúra (so slučkou)** — pred programovaním pripravíš návrh, no počítaš s tým, že aj zdanlivo správna architektúra bude potrebovať ďalšie iterácie.

**Zastarávanie harnessu** — súčasti podporného rámca obsahujú predpoklady o obmedzeniach modelu, ktoré časom prestávajú platiť.

<a id="project-memory-and-tiering"></a>

## Pamäť projektu a vrstvenie znalostí

**Pamäť projektu** — trvalé znalosti čitateľné agentom, ktoré prežijú jednotlivé spustenia.

**Amnézia** — medzi reláciami si agenti nepamätajú nič okrem súborov na disku.

**Priebežné náklady kontextu** — nameraná réžia &gt;20% na krok pri trvalom kontexte — každý riadok sa modelu posiela znova a účtuje sa v každom kroku.

**Nadmerná poslušnosť** — nameraný spôsob, akým nadbytočné artefakty škodia — agenti dodržiavajú pokyny dôsledne, ale zbytočne.

**Archív jaziev** — dôvody každého uzamknutého rozhodnutia, doplnené po oprave každej triedy chýb — blameless postmortem uložený tam, kde ho agent prečíta.

**Vrstvenie znalostí** — usporiadanie pamäte podľa rýchlosti zmien alebo vzdialenosti od aktuálnej úlohy, aby sa načítala iba relevantná vrstva.

**Úrovne detailu** — mapa / kontrakt / nákres — trojstupňové rozvrstvenie artefaktu podľa jeho vzťahu k úlohe, ktorému zodpovedajú úrovne Agent Skills od Anthropic: aktivácia / referenčné informácie / hĺbkový rozbor.

**Hot set / cold set** — nevyjednateľné pravidlá na jednu obrazovku, načítané vždy, oproti detailom načítavaným na požiadanie.

**Načítanie detailu na požiadanie** — kým nie je potrebný úplný obsah, načíta sa iba názov a opis.

**Zahltenie artefaktmi** — ústredný nevyriešený problém vývoja riadeného špecifikáciami — artefakty vznikajú rýchlejšie, než ich možno skontrolovať alebo pojať do kontextu, pričom neexistujú pravidlá ich životného cyklu.

<a id="rules-that-hold"></a>

## Pravidlá, ktoré platia

**Vykonateľné pravidlo / pravidlá ako kód** — obmedzenie vynucované harnessom alebo CI — hookom, linterom, grepom či bránou — ktoré model nedokáže obísť.

**„Pokyn nie je kontrola"** — pravidlo uvedené v prirodzenom jazyku je odporúčanie, nie vynútená hranica.

**Hook verzus skill** — hook je deterministické vynútenie harnessom; skill závisí od úsudku modelu a ten ho môže ignorovať — ochrana bezpečnosti a správnosti musí byť hook.

**Brána určuje výsledok** — agent optimalizuje to, čo kontroluješ, takže všetko nekontrolované preňho neexistuje — ak si agent „známkuje vlastnú domácu úlohu", nejde o overovanie.

**Reward hacking / hranie na bránu** — splnenie kontrolovanej metriky bez vykonania požadovanej práce — napríklad vyhľadanie odpovede namiesto jej odvodenia alebo potlačenie príznaku, aby prešiel test.

**Blast radius** — rozsah škôd, ktoré môže zmätený alebo napadnutý agent spôsobiť; ochrany sa rozmiestňujú podľa vzdialenosti od neho.

**Policy-as-code** — politiky ako kód, ktoré sa vynucujú v pipeline a podliehajú auditu — podniková podoba vykonateľných pravidiel.

**Princíp najnižších oprávnení (least privilege)** — agent má prístup presne k tým prostriedkom, ktoré potrebuje na aktuálnu úlohu, a k ničomu navyše.

**Zastarávanie pravidiel** — rozpad súboru pravidiel bez mechanizmu na odhaľovanie neaktuálnosti — konštanty sa rozídu, skopírovaný kód zostarne, nahradené pravidlá prežívajú a súbory si na styčných miestach protirečia; odlišným javom je drift pravidiel spôsobený `context rot`, pri ktorom sa nemenia pravidlá, ale ich výklad.

**Vlastník konzistencie** — rola zodpovedná za zosúlaďovanie súboru pravidiel tak, aby dva záväzné súbory nemohli predpisovať protichodné riešenia.

<a id="vision-to-stages"></a>

## Od vízie k etapám

**Overiteľná etapa** — jednotka plánu, ktorú určuje podmienka dokončenia, ktorú vieš potvrdiť, nie krok, ktorý vieš opísať; úsek medzi dvoma kontrolami, ktoré môžeš skutočne vykonať.

**Podmienka dokončenia** — konkrétna, kontrolovateľná skutočnosť, ktorá začne platiť, keď je etapa naozaj dokončená (úspešný test, odpoveď `401` na požiadavku bez tokenu), na rozdiel od obyčajného oznámenia agenta, že je hotová.

**Overiteľný verzus na úsudku založený kontrolný mechanizmus** — podmienka dokončenia potvrdená buď deterministickou kontrolou, ktorej neúspešný výsledok nemožno zmeniť presviedčaním (overiteľný, čiže výpočtový mechanizmus), alebo úsudkom modelu (mechanizmus založený na úsudku). Uprednostni prvý a etapu, ktorá umožňuje iba druhý, považuj za zatiaľ nedostatočne malú alebo konkrétnu.

**Určovanie veľkosti etapy** — prispôsobenie veľkosti etapy tomu, čo vieš rýchlo overiť, nie tomu, čo model ponúka vykonať na jeden sebaistý pokus.

<a id="atomic-tasks"></a>

## Atomárne úlohy

**Atomárna úloha** — jednotka práce, ktorá je dostatočne malá na to, aby sa dala overiť na jedno prečítanie; práve s takou podrobnosťou si skutočne zachovávaš kontrolu nad tým, čo agent vytvorí.

**Dekompozícia ako nástroj kontroly** — princíp, podľa ktorého jemnosť rozdelenia práce určuje dôkladnosť jej kontroly: každá hranica je miestom, kde sa možno zastaviť a výsledok overiť, takže o miere kontroly sa rozhoduje pri dekompozícii a nemožno ju získať späť neskôr.

**Príliš jemná dekompozícia** — rozdelenie práce na také malé časti, že režijné náklady na koordináciu — viac zadaní, opakované posielanie kontextu pri každom kroku a viac artefaktov, ktorých súlad treba udržiavať — prevážia získanú overiteľnosť; pokus „jednoducho to rozdeľ ešte viac“ tak vedie k zahlteniu artefaktmi.

**Orchestrátor a dočasní vykonávatelia** — model, v ktorom dlhodobo fungujúci orchestrátor udržiava plán, kontext a podmienky dokončenia, zatiaľ čo dočasní vykonávatelia dostanú vždy jednu atomárnu úlohu a vrátia skrátený výsledok; úlohou orchestrátora je overovať, nie tvoriť.
