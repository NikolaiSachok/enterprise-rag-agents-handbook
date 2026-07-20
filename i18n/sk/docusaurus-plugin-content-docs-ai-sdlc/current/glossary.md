---
id: glossary
title: Slovník pojmov
sidebar_position: 7
---

# Slovník pojmov

Každý pojem, ktorý lekcie zavádzajú, je tu vymedzený raz. Každá lekcia sa končí riadkom **Nové pojmy** s odkazom na príslušnú sekciu. Zoznam rastie spolu s kurzom.

<a id="verification-bottleneck"></a>

## Úzke miesto overovania

**úzke miesto overovania** — rozhodujúce obmedzenie pri vývoji softvéru agentmi: generovanie je lacné, kontrola nie; priepustnosť závisí od kapacity na revíziu a overovanie, nie od schopností modelu.

**proxy metrika** — akýkoľvek merateľný ukazovateľ používaný ako náhrada za hodnotu: zlúčené PR, commity, riadky kódu či čas strávený na úlohe. Priepustnosť sa dá merať, hodnota nie.

**voľba menovateľa** — údaje o „podiele kódu napísaného AI“ závisia výlučne od menovateľa: rovnaká telemetria môže ukazovať 28,7% aj 70,6%.

**priepasť medzi benchmarkom a produkciou** — prepad zo skóre v offline benchmarku na mieru reálneho využitia v SDLC (Meta: 68% → 19,7%, približne 3,5×).

**skreslenie sebahodnotenia** — vývojári nedokážu správne posúdiť, ako AI ovplyvňuje rýchlosť ich vlastnej práce; nameraná chyba je približne 40 percentuálnych bodov — mýlia sa dokonca aj v tom, či sa zrýchlili, alebo spomalili.

**technický dlh na úver** — počiatočný nárast rýchlosti, ktorý treba splatiť neskôr: zložitosť a počet upozornení dlhodobo rastú a napokon vývoj spomaľujú.

<a id="reading-the-evidence"></a>

## Ako posudzovať dôkazy

**stupeň dôkazu** — klasifikácia tvrdenia ako `MEASURED` / `REPORTED` / `ASSERTED`. Stupeň sa dedí a nikdy sa nezvyšuje.

**konflikt záujmov, uvedený priamo** — uvedenie konfliktu záujmov — teda kto platí — priamo vo formulácii zistenia, nie v poznámke pod čiarou.

**overovanie v prvotnom zdroji** — prečítanie prvotného zdroja s prihliadnutím na dátum jeho zverejnenia namiesto spoliehania sa na sprostredkované zhrnutie.

<a id="preparation-over-model"></a>

## Príprava je dôležitejšia než model

**príprava je dôležitejšia než model** — príprava prostredia a vymedzenie úlohy ovplyvňujú úspešnosť viac než výber modelu.

**zásluha kontroly, nie agenta** — nízky počet zlyhaní zabezpečila prísna kontrola pri revízii, nie samotný agent.

**zvládnuteľný rozsah (úlohy)** — začínaš presne ohraničeným problémom a človek schvaľuje požiadavky.

**najprv architektúra (so slučkou)** — pred programovaním pripravíš návrh, no počítaš s tým, že aj zdanlivo správna architektúra bude potrebovať ďalšie iterácie.

**zastarávanie harnessu** — súčasti podporného rámca obsahujú predpoklady o obmedzeniach modelu, ktoré časom prestávajú platiť.

<a id="project-memory-and-tiering"></a>

## Pamäť projektu a vrstvenie znalostí

**pamäť projektu** — trvalé znalosti čitateľné agentom, ktoré prežijú jednotlivé spustenia.

**amnézia** — medzi reláciami si agenti nepamätajú nič okrem súborov na disku.

**priebežné náklady kontextu** — nameraná réžia &gt;20% na krok pri trvalom kontexte — každý riadok sa modelu posiela znova a účtuje sa v každom kroku.

**nadmerná poslušnosť** — nameraný spôsob, akým nadbytočné artefakty škodia — agenti dodržiavajú pokyny dôsledne, ale zbytočne.

**archív jaziev** — dôvody každého uzamknutého rozhodnutia, doplnené po oprave každej triedy chýb — blameless postmortem uložený tam, kde ho agent prečíta.

**vrstvenie znalostí** — usporiadanie pamäte podľa rýchlosti zmien alebo vzdialenosti od aktuálnej úlohy, aby sa načítala iba relevantná vrstva.

**úrovne detailu** — mapa / kontrakt / nákres — trojstupňové rozvrstvenie artefaktu podľa jeho vzťahu k úlohe, ktorému zodpovedajú úrovne Agent Skills od Anthropic: aktivácia / referenčné informácie / hĺbkový rozbor.

**hot set / cold set** — nevyjednateľné pravidlá na jednu obrazovku, načítané vždy, oproti detailom načítavaným na požiadanie.

**načítanie detailu na požiadanie** — kým nie je potrebný úplný obsah, načíta sa iba názov a opis.

**zahltenie artefaktmi** — ústredný nevyriešený problém vývoja riadeného špecifikáciami — artefakty vznikajú rýchlejšie, než ich možno skontrolovať alebo pojať do kontextu, pričom neexistujú pravidlá ich životného cyklu.

<a id="rules-that-hold"></a>

## Pravidlá, ktoré platia

**vykonateľné pravidlo / pravidlá ako kód** — obmedzenie vynucované harnessom alebo CI — hookom, linterom, grepom či bránou — ktoré model nedokáže obísť.

**„pokyn nie je kontrola"** — pravidlo uvedené v prirodzenom jazyku je odporúčanie, nie vynútená hranica.

**hook verzus skill** — hook je deterministické vynútenie harnessom; skill závisí od úsudku modelu a ten ho môže ignorovať — ochrana bezpečnosti a správnosti musí byť hook.

**brána určuje výsledok** — agent optimalizuje to, čo kontroluješ, takže všetko nekontrolované preňho neexistuje — ak si agent „známkuje vlastnú domácu úlohu", nejde o overovanie.

**reward hacking / hranie na bránu** — splnenie kontrolovanej metriky bez vykonania požadovanej práce — napríklad vyhľadanie odpovede namiesto jej odvodenia alebo potlačenie príznaku, aby prešiel test.

**blast radius** — rozsah škôd, ktoré môže zmätený alebo napadnutý agent spôsobiť; ochrany sa rozmiestňujú podľa vzdialenosti od neho.

**policy-as-code** — politiky ako kód, ktoré sa vynucujú v pipeline a podliehajú auditu — podniková podoba vykonateľných pravidiel.

**princíp najnižších oprávnení (least privilege)** — agent má prístup presne k tým prostriedkom, ktoré potrebuje na aktuálnu úlohu, a k ničomu navyše.

**zastarávanie pravidiel** — rozpad súboru pravidiel bez mechanizmu na odhaľovanie neaktuálnosti — konštanty sa rozídu, skopírovaný kód zostarne, nahradené pravidlá prežívajú a súbory si na styčných miestach protirečia; odlišným javom je drift pravidiel spôsobený `context rot`, pri ktorom sa nemenia pravidlá, ale ich výklad.

**vlastník konzistencie** — rola zodpovedná za zosúlaďovanie súboru pravidiel tak, aby dva záväzné súbory nemohli predpisovať protichodné riešenia.
