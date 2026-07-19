---
title: "Príprava je dôležitejšia než model"
sidebar_position: 4
---

# Príprava je dôležitejšia než model

V debatách o programovacích agentoch dominujú dve otázky: ktorý model použiť a ako sformulovať prompt. Ani jedna však nie je tým správnym miestom, kde hľadať najväčšie zlepšenie. Najpresvedčivejšie dôkazy v tejto lekcii ukazujú na niečo menej očividné: na *rozsah úlohy*, ktorú agentovi zveríš, a na *prostredie*, ktoré mu pripravíš ešte predtým, než napíše prvý riadok kódu. Ak toto urobíš správne, aj bežný model prekoná najvyspelejší model, ktorý bez potrebných podmienok tápe.

S tým súvisí ešte jedna dôležitá zručnosť: vedieť správne čítať údaje o úspešnosti, ktoré zverejnil priamo autor nástroja alebo jeho používateľ. Práve najpovzbudivejší údaj v celej oblasti sa totiž dá veľmi ľahko nesprávne preniesť do vlastného projektu. Pri všetkých číslach nižšie preto používame hodnotenia z 2. lekcie — `MEASURED`, `REPORTED`, `ASSERTED` (namerané / hlásené / tvrdené).

## Príprava prostredia takmer zdvojnásobila úspešnosť agenta

Najpresvedčivejší praktický dôkaz zo všetkých použitých zdrojov nepochádza z laboratórnej štúdie. Je z blogového článku jediného vývojára. Stephen Toub z Microsoftu opísal desať mesiacov používania agenta GitHub Copilot Coding Agent v `dotnet/runtime` — veľkom, reálnom a kriticky dôležitom open-source repozitári. Článok zahŕňa **878 pull requestov vytvorených agentom** vrátane podielu zlúčených a vrátených zmien, náročnosti kontroly aj neúspešných pokusov (`MEASURED`, marec 2026). Uprostred týchto údajov sa skrýva asi najprenosnejšie ponaučenie celého kurzu. Toub ho vyslovil priamo: *„Ak si z tejto skúsenosti máš odniesť jediné ponaučenie, je to toto: príprava je dôležitejšia než model.“*

Čísla, o ktoré sa toto tvrdenie opiera, sú pozoruhodné. Kým Toub agentovi nepripravil pracovné prostredie, jeho úspešnosť bola **38,1%**. Po nakonfigurovaní firewallu, napísaní súboru s pokynmi a sprístupnení zostavenia projektu, testov aj sťahovania potrebných nástrojov vzrástla na **69%**. Sám situáciu výstižne prirovnal k tomu, že *„sme do tímu pridali nového vývojára, prikázali mu opravovať problémy, ale neumožnili sme mu zostaviť ani otestovať projekt či stiahnuť potrebné nástroje.“* Jediná zmena takmer zdvojnásobila úspešnosť. Rozdiel je väčší než zlepšenie po výmene modelu alebo účinok zistený v ktorejkoľvek randomizovanej štúdii, z ktorej tento kurz čerpá — vyžaduje iba čas a pozornosť. Aj dvojčlenný tím môže mať takto pripravené prostredie hneď od prvého dňa.

## Číslo, ktoré nesmieš jednoducho prevziať

Ten istý článok uvádza ešte lákavejší výsledok. Tentoraz však nejde o ponaučenie týkajúce sa prípravy prostredia, ale správneho čítania údajov. Zo zlúčených pull requestov od agenta bolo vrátených iba **0,6% — 3 z 535**. Pri ľudských pull requestoch to za rovnaké obdobie bolo **0,8%**. Je lákavé toto číslo prevziať a očakávať rovnaký výsledok od vlastných agentov. Práve tomu nebezpečnému omylu má táto lekcia zabrániť.

Hodnota `0,6%` nevypovedá o vlastnostiach agenta. Vypovedá o tom, ako dôsledne sa v `dotnet/runtime` kontrolujú zmeny pred zlúčením — a cenu tejto kontroly vidno v tom istom článku. K pull requestom od agenta pribudlo priemerne **16,5 pripomienky, kým ľudské 12,4**, teda približne o tretinu menej. Kontrolóri priamo upravovali kód až v **52,3% pull requestov od agenta, oproti 10,3%** pri ľudských — päťkrát častejšie. A ešte pred zlúčením bolo zamietnutých **32% pull requestov od agenta**: zlúčilo sa ich 67,9%, kým pri ľuďoch 87,1%. Nízky podiel vrátených zmien dokazuje, že kontrolná brána funguje, nie že agent odovzdával kvalitné výsledky. Kvalitu zabezpečila pozornosť ľudí a autor článku je natoľko otvorený, že ukazuje aj jej cenu.

Toub zároveň odmieta porovnanie, ku ktorému by väčšina ľudí automaticky dospela. Pull requesty od agenta a od ľudí podľa neho predstavujú *„zásadne odlišné skupiny vystavené odlišným výberovým tlakom… ľudia si sami vyberajú zložité úlohy náročné na úsudok, zatiaľ čo [agent] dostáva presnejšie ohraničené úlohy.“* Hodnoty `67,9%` a `87,1%` preto neinterpretuj ako priame porovnanie výkonu. Úlohy pre agenta boli vybrané zámerne. Toub otvorene uvádza aj ďalšie obmedzenia: agent pracoval **iba v Linuxe**, článok sa okrem vrátených zmien *„nepokúša komplexne kvantifikovať všetky následné ukazovatele kvality“* a *„neanalyzuje výpočtové náklady“*. Prevezmi jeho dôslednosť pri príprave prostredia. Nepreberaj však podiel vrátených zmien ako očakávaný výsledok — prevzal by si číslo bez kontrolnej brány, ktorá ho umožnila dosiahnuť. Ide o zásadu z 2. lekcie — dôsledne čítať pôvodné zdroje — uplatnenú na údaj z prvej ruky.

## Začni tam, kde sa dá rozsah úlohy presne určiť

Ak je príprava najúčinnejšou pákou, začni rozsahom úlohy. Predtým, než agentovi niečo zverím, odmietnem mu dať otvorený cieľ. Začnem problémom, ktorý má jasné hranice a pri ktorom už viem, čo presne znamená „hotovo“. Táto myšlienka vznikla dávno pred agentmi. Andrey Beloborodov, ktorý verejne píše sériu o vývoji postavenom na AI, ju opisuje ako princíp *„s viac než dvadsaťročnou históriou“*: bez špecifikácie dostaneš nezmyselný výsledok (`ASSERTED` — ide o jeho pohľad založený na skúsenostiach, nie o meranie). Jednorazovo môžeš agentovi bez prípravy zveriť napríklad jednoduchý tracker alebo finančný nástroj. Pri softvéri, ktorý sa má ďalej rozvíjať a udržiavať, to nestačí.

K rovnakému záveru vedú aj primárne dôkazy. Toub uvádza, že agent *„má problémy s úlohami, ktoré si vyžadujú architektonický úsudok… napríklad pri výbere vhodného návrhu API podľa reálneho spôsobu používania či pri predvídaní následkov na rôznych platformách“* a *„dokáže byť lenivý… urobí iba minimum potrebné na splnenie požiadavky“* (`REPORTED`). Keď to porovnáš s tým, čomu malé tímy venujú väčšinu času — architektonickým zásahom do existujúceho kódu — varovanie je ešte vážnejšie: agenti majú problémy práve s tou najťažšou prácou.

Preto musíš úlohu pred zadaním jasne ohraničiť. Zvládnuteľný rozsah úlohy v praxi znamená, že sú určené vstupy a výstupy, presne pomenovaný výsledný artefakt aj kontrola, ktorá rozhodne, či úloha prešla. Predovšetkým však potrebuješ kontrolnú bránu, pri ktorej človek schváli *požiadavky* ešte predtým, než sa začne čokoľvek nákladné vytvárať. V odvetví sa používa označenie requirements sign-off alebo stage-gate. Túto bránu nikdy neprenášaj na agenta, pretože od schválených požiadaviek sa odvíjajú všetky ďalšie výstupy.

## Najprv architektúra — a úprimný príbeh o potrebných iteráciách

Druhou pákou je návrh. Ešte pred programovaním architektúru spíšem a potom ju nechám dôkladne spochybniť. Tento postup má dávno známe a dobre podložené pomenovanie: návrh pred kódom, zachytený ako **záznam architektonického rozhodnutia (ADR)**. Tento vzor (Michael Nygard, 2011) zaznamenáva každé rozhodnutie spolu s jeho kontextom a dôsledkami. Neskorší čitateľ — alebo agent — tak vidí, *prečo* dané obmedzenie existuje, a pri optimalizácii ho nenápadne neodstráni.

Najotvorenejší opis tohto postupu opäť ponúka Beloborodov. Je cenný práve preto, že ako jediný praktik ukazuje aj prípad, keď jeho vlastná metóda *zlyhala*. Postupoval takto: náročné otázky návrhu najprv zodpovedal sám, výsledok odovzdal AI s pokynom, aby ho nekompromisne kritizovala, opravil nájdené problémy, dal návrh posúdiť *druhému* modelu a cyklus opakoval dovtedy, kým nemal pocit, že celému riešeniu skutočne rozumie.

Potom sa pustil do pomerne klasického projektu — jednoduchého chatbota nad API s časťou biznisovej logiky a vyhľadávaním v znalostnej databáze — ku ktorému pridal jeden ambiciózny, takmer nepreskúmaný problém modelovania. Podľa jeho opisu bol výsledok takýto: **kým vzniklo niečo ucelené, potreboval 3 iterácie, hoci každý model tvrdil, že architektúra je v poriadku**. Namiesto jednej plánovanej vrstvy pamäte ich napokon vzniklo sedem. Na otázku, prečo to jednoducho neurobil jediným promptom, odpovedal odzbrojujúco: *„Neviem, ale mne to nefungovalo a pochybujem, že je to možné.“*

Tento dôkaz treba hodnotiť opatrne. Ide o jedinú neoveriteľnú osobnú výpoveď. Jeho všeobecnejšie tvrdenia — dvoj- až desaťnásobné zrýchlenie či údajná podobnosť siedmich vrstiev s mozgom — sú `ASSERTED` bez merania, takže ich nepovažujeme za fakty. Príbeh však prináša dôležité ponaučenie, ktoré nenájdeš v žiadnej architektonickej norme: ani zdanlivo správna architektúra nezaručuje úspech na prvý pokus. Hoci návrh schválili všetky modely, aj tak potreboval tri iterácie. Nie je to argument proti návrhu vopred. Je to dôvod, prečo potrebuješ *iteračnú slučku*.

Rovnaký prístup nájdeš aj v disciplinovanej produkčnej praxi: pre každý návrhový vzor urč jednu referenčnú implementáciu, pretože N agentov vytvorí z rovnakého slovného opisu N odlišných štruktúr. Každý zamietnutý návrh navyše zaznamenaj *spolu s chybou, pre ktorú bol zamietnutý*, aby ho agent znova nenavrhol.

:::tip[▶ Video]

<YouTube id="CdBtNQZH8a4" title="What are Microservices? — IBM Technology" />

Krátke vysvetlenie od IBM ukazuje, ako rozdeliť systém na služby. Je to konkrétny príklad rozhodnutí, ktoré máš podľa tejto lekcie urobiť a zaznamenať ešte predtým, než agent začne systém vytvárať.

(Video je v angličtine.)

:::

## Prečo „príprava“, a nie „model“

Výber modelu nie je najdôležitejšou pákou z hlbšieho dôvodu. Harness (lešenie/podporný rámec agenta) — teda pravidlá, nástroje a ochranné mechanizmy okolo agenta — je postavený na predpokladoch, ktoré časom prestávajú platiť. Inžinieri z Anthropic to pomenovali priamo: *„harnessy obsahujú predpoklady, ktoré so zlepšovaním modelov zastarávajú“* a *„každá súčasť… obsahuje určitý predpoklad o tom, čo model nedokáže urobiť sám“* (`REPORTED`).

Uvádzajú aj konkrétny príklad. Starší model pri zapĺňaní kontextu predčasne vyhlásil prácu za dokončenú, preto sa do harnessu pridala oprava. V nasledujúcom modeli už toto správanie zmizlo a oprava sa zmenila na zbytočnú záťaž, ktorá výkonnejší model iba brzdila.

Nejde iba o skúsenosť jedného dodávateľa. Nezávislá štúdia ponechala model nezmenený a medzi 35 po sebe nasledujúcimi vydaniami programovacieho CLI menila iba podporný rámec. Napriek rovnakému modelu sa menila aj kvalita (`MEASURED`, *"Don't Blame the Large Language Model"*, arXiv:2607.03691, júl 2026). Používatelia po aktualizácii podporného rámca hlásia zhoršenia a pravidelne ich pripisujú modelu namiesto rámca.

Pre teba z toho vyplýva, že príprava nikdy nie je jednorazová. Každé pravidlo aj každá súčasť harnessu má obmedzenú životnosť. Pravidelne preto kontroluj, či ešte plnia svoj účel. Na túto tému nadväzuje 4. lekcia o pamäti projektu a 5. lekcia o pravidlách, ktoré sa skutočne dodržiavajú.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Na každej úrovni platí rovnaká zásada: **agent s neobmedzeným rozsahom práce prináša neobmedzené riziko a rozhodujúcou pákou je prostredie, ktoré mu pripravíš.** S veľkosťou organizácie sa mení iba to, kto za prípravu zodpovedá a ako sa overuje jej kvalita.

- **Soloista.** Potrebuješ návyk presne vymedzovať úlohy, písomný opis architektúry, ktorý agenti skutočne čítajú, a zostavenie s testmi, ktoré agent dokáže spustiť sám. *Čomu tým predídeš:* situácii „nový vývojár bez nástrojov“, keď agent tápe, pretože nedokáže zostaviť ani overiť vlastnú prácu — presne tomu nedostatku, ktorý oddeľoval Toubových `38,1%` od `69%`.

- **Malý tím.** Pred zadaním úlohy pridaj spoločnú kontrolu návrhu a jednu referenčnú implementáciu, z ktorej budú všetci vychádzať. *Čomu tým predídeš:* tomu, že si niekoľko agentov prečíta rovnaké slovné zadanie, vytvorí niekoľko odlišných architektúr a ľudia ich potom musia ručne zjednotiť.

- **Enterprise.** Návrhy posudzuje výbor pre riadenie zmien a z dokumentov s rozhodnutiami vzniká knižnica ADR. Za rozhodnutia ovplyvňujúce viacero častí systému zodpovedá architektonický tím, kým jednotlivé tímy zodpovedajú za svoje presne vymedzené kontexty. *Čomu tým predídeš:* nekontrolovanému blast radius (rozsah škôd), ktorý môže spôsobiť nedostatočne vymedzená práca agentov na spoločných systémoch. Platí tu opakujúca sa zásada kurzu: knižnica ADR slúži čiastočne ako *dôkaz* — poskytuje kontrolovateľný záznam, ktorý možno overiť aj dlho po prijatí rozhodnutia. Soloistov návyk vymedzovať rozsah je naproti tomu čistá *schopnosť*: priamo mení, čo môže agent bezpečne urobiť už dnes.

## Čo si odniesť

- Príprava prostredia a rozsah úlohy ovplyvňujú úspešnosť agenta viac než použitý model. Po Toubovej príprave prostredia vzrástla úspešnosť agenta z `38,1%` na `69%`. Ide o väčšie zlepšenie než pri ktorejkoľvek výmene modelu v dostupných dôkazoch a malý tím ho môže dosiahnuť zadarmo už v prvý deň.
- Čísla z prvej ruky čítaj rovnako dôsledne ako čísla od dodávateľov. Podiel vrátených zmien `0,6%` v `dotnet/runtime` je zásluha brány, nie agenta. Cena tejto kontroly je uvedená hneď vedľa: o 33% viac pripomienok, ľudia priamo upravovali viac než polovicu pull requestov od agenta a tretinu z nich pred zlúčením zamietli.
- Začni tam, kde sa dá rozsah úlohy presne určiť. Agenti majú problémy práve tam, kde treba architektonický úsudok. Vymedz preto úlohu, stanov jej vstupy a výstupy a pri schvaľovaní požiadaviek ponechaj kontrolu človeku.
- Navrhuj pred programovaním a aj tak počítaj s iteráciami. Dokonca aj architektúra, ktorú každý model označí za správnu, môže potrebovať viacero pokusov — práve *preto* existuje slučka, nie preto, aby si návrh preskočil.
- Príprava nie je jednorazová. Harnessy obsahujú predpoklady o obmedzeniach modelu, ktoré so zlepšovaním modelov prestávajú platiť. Každé pravidlo a každý ochranný mechanizmus preto treba pravidelne posúdiť.

**Nové pojmy:** príprava je dôležitejšia než model (príprava prostredia a vymedzenie úlohy ovplyvňujú úspešnosť viac než výber modelu), zásluha brány, nie agenta (nízky počet zlyhaní zabezpečila kontrolná brána, nie samotný agent), zvládnuteľný rozsah (úlohy) (začínaš presne ohraničeným problémom a človek schvaľuje požiadavky), najprv architektúra (so slučkou) (pred programovaním pripravíš návrh, no počítaš s tým, že aj zdanlivo správna architektúra bude potrebovať ďalšie iterácie), zastarávanie harnessu (súčasti podporného rámca obsahujú predpoklady o obmedzeniach modelu, ktoré časom prestávajú platiť).
