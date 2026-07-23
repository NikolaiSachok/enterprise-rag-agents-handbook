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

<a id="artifacts-as-interface"></a>

## Artefakty ako rozhranie

**Artefakt ako rozhranie** — pravidlo, podľa ktorého si etapy odovzdávajú prácu prostredníctvom písomných artefaktov, nie rozhovoru: hranicu musí prekročiť vec, ktorú môže niekto preskúmať, porovnať s predchádzajúcou verziou a skontrolovať voči podmienke dokončenia.

**Reset kontextu a zhutňovanie kontextu** — dva spôsoby prenášania stavu naprieč dlhou úlohou: pri zhutňovaní sa rozhovor sumarizuje priamo v aktuálnom kontexte, čím sa strácajú informácie a postupne posúva význam; pri resete dostane nasledujúci krok trvalý artefakt a začne s čistým kontextom. Artefakt prežije reset kontextu; prepis rozhovoru na to nie je určený.

**Trvalé odovzdanie práce** — prekročenie hranice zaznamenané ako trvalý artefakt — plán, špecifikácia, patch alebo výstup testov — namiesto toho, aby zostalo iba v chate. Takýto záznam pretrvá dlhšie než kontextové okno a možno ho neskôr skontrolovať.

**Vymedzenie rozsahu a odstraňovanie** — disciplína, ktorá bráni tomu, aby sa rozhranie založené na artefaktoch zmenilo na zahltenie artefaktmi: odovzdaj iba to, čo potrebuje nasledujúca etapa, a dokončené veci odstráň namiesto ich ďalšieho prenášania.

<a id="plan-review-implement-critic"></a>

## Plán, kontrola, implementácia, kritik

**Cyklus „plán — kontrola — implementácia — kritik“** — základný cyklus Časti II: skontrolovať plán pred napísaním kódu, implementovať podľa skontrolovaného plánu a potom kriticky posúdiť výsledok pred jeho začlenením. Lacné generovanie prebieha medzi dvoma bránami; odstráň ktorúkoľvek z nich a cyklus sa zmení na nekontrolované generovanie.

**Kontrola plánu pred implementáciou** — kontrola plánu ešte pred implementáciou, ktorá prináša najväčší úžitok, pretože chybu v pláne opravíš jednou vetou, no rovnaká chyba v kóde znamená prepisovanie.

**Brána kritika** — povinná kontrola, cez ktorú práca neprejde bez úspešného splnenia: je to hook, nie odporúčanie. Spravuje ju nezávislá strana, ktorá nemôže upravovať posudzovaný výsledok; ak agent hodnotí vlastný výstup, namiesto vykonania úlohy ho optimalizuje na kontrolu.

<a id="roles-and-the-human"></a>

## Roly a miesto človeka

**Človek ako smerovač (nad cyklom a vnútri cyklu)** — miesto človeka je nad cyklom: dohliada naň, zodpovedá za podmienky dokončenia a brány a rozhoduje o začlenení zmien. Nie je fázou vnútri cyklu, ktorá sa dostane na rad medzi agentmi. Nad cyklom zostáva táto rola účinná aj pri zrýchľovaní generovania; vnútri cyklu sa človek stáva úzkym miestom a napokon obeťou preťaženia.

**Nedelegovateľný kontrolný bod** — jedno z mála miest, ktoré nemožno prenechať cyklu bez toho, aby stratil svoj zmysel: nastavenie podmienok dokončenia, zodpovednosť za bránu kritika pri zlyhaniach bezpečnosti alebo správnosti a rozhodnutie o začlenení zmeny s veľkým blast radius.

**Dohľad verzus formálne odklepnutie** — skutočný dohľad tvorí niekoľko vynucovaných kontrolných bodov, kde je úsudok človeka samotným kontrolným mechanizmom. „Kontrolovať všetko“ nie je dohľad, ale formálne odklepnutie, pri ktorom človek prepustí viac výstupov, než ktokoľvek dokáže skutočne skontrolovať.

<a id="layered-gates"></a>

## Vrstvené brány

**Vrstvené brány** — overovací reťazec pozostávajúci z niekoľkých po sebe nasledujúcich kontrol. Každá brána pokrýva triedu chýb, ktorú predchádzajúca brána zo svojej podstaty nedokáže odhaliť. Pokrytie je vlastnosťou celého reťazca, nikdy nie jedinej brány.

**Štrukturálne slepé miesto** — trieda chýb, ktorú brána nedokáže zachytiť pre svoj *mechanizmus*, nie pre nedostatočnú dôkladnosť. Statický analyzátor číta zdrojový kód, a preto nevidí stav aplikácie počas behu. Vizuálne porovnanie pracuje so statickým obrazom, a preto nevidí animáciu. Slepé miesto sa odstraňuje pridaním brány s odlišným mechanizmom, nikdy sprísňovaním brány, ktorá je voči nemu slepá.

**Rozmanitosť mechanizmov** — princíp návrhu, podľa ktorého pokrytie vzniká vrstvením brán, ktorých mechanizmy zlyhávajú odlišne (statické a dynamické, deterministické a sémantické, strojové a ľudské). To, voči čomu je jedna brána slepá, tak dokáže vnímať iná.

**Dôkladnosť a pokrytie** — dôkladnosť vyjadruje, ako intenzívne jedna brána hľadá chyby v triedach, ktoré dokáže vnímať. Pokrytie vyjadruje, koľko tried dokáže celý reťazec vôbec vnímať. Zvýšením dôkladnosti brány sa nikdy nedosiahne pokrytie triedy, ktorú jej mechanizmus nedokáže vidieť.

**Deterministická a sémantická brána** — deterministická brána (test, typová kontrola, doslovný grep) poskytuje opakovateľné výsledky a jej nález nemožno spochybniť argumentáciou, zachytí však iba to, čo možno vyjadriť mechanickým pravidlom. Sémantická brána (LLM posudzujúci význam) zachytí triedy chýb, ktoré takýmto pravidlom vyjadriť nemožno, je však drahá a funguje iba s určitou pravdepodobnosťou. Obe sú slepé voči opačným veciam, preto sa kombinujú a nález ktorejkoľvek z nich sa považuje za skutočný problém.

**Hĺbková ochrana** — označenie rovnakého princípu vo svete bezpečnosti: niekoľko nezávislých kontrol usporiadaných vo vrstvách, pričom žiadnej sa nedôveruje samostatne a každá počíta s tým, že kontrola pred ňou niekedy zlyhá.

<a id="escape-ledger"></a>

## Register únikov

**Register únikov** — evidencia všetkých chýb, ktoré sa dostali do produkcie napriek tomu, že prešli reťazcom brán. Uplatňuje na brány princípy analýzy bez hľadania vinníka: každý únik má vlastný riadok s triedou chýb, bránou, ktorá ho mala zachytiť, slepým miestom a premenou na kontrolu, ktorá už danú triedu pokrýva.

**Únik triedy chýb** — únik zaznamenaný podľa *triedy*, do ktorej patrí, napríklad „vstupy s hraničnými hodnotami sa nikdy netestujú“, nie ako jedna konkrétna chyba. Trieda je totiž jednotkou, na ktorej zachytenie možno vytvoriť bránu.

**Premena slepého miesta na kontrolu** — premena úniku na trvalé zlepšenie reťazca: nový detektor, test alebo pravidlo pridané do brány, ktorá ho nezachytila. Únik sa uzatvára až po zlepšení brány, nie po oprave konkrétnej chyby.

**Skreslenie zoznamu detektorov** — tendencia detektora alebo testovacej sady pokrývať iba triedy, ktoré už v minulosti spôsobili problém, pretože zoznamy detektorov vznikajú z incidentov, ktoré si pamätáme. Triedy, ktoré sa ešte nikdy nevyskytli, preto zostávajú zo svojej podstaty mimo reťazca.

**Hľadanie hrubým detektorom** — proaktívny doplnok registra: použitie zámerne hrubého detektora, ktorý sa spúšťa príliš často a ktorého nálezy sa následne posudzujú a filtrujú. Jeho cieľom je odhaliť triedu chýb, ktorú žiadny presný detektor zo svojej podstaty nedokáže identifikovať.

<a id="detection-vs-mutation"></a>

## Detekcia a oprava

**Detekcia a oprava** — pravidlo, podľa ktorého musí byť krok, ktorý chybu *nájde*, oddelený od kroku, ktorý kód *opraví* či upraví. Audítor, ktorý môže upravovať aj to, čo kontroluje, môže nález odstrániť namiesto jeho nahlásenia, takže zoznam nálezov prestane opisovať skutočnosť.

**Oddelenie zodpovedností (pri agentoch)** — klasický riadiaci mechanizmus — kto vykonáva zmenu, nesmie ju zároveň schvaľovať — prispôsobený agentom: ten, kto chyby nájde, ich neopravuje; posudzovateľ nie je autorom a nikto si nemôže udeliť schválenie sám. Ide o rovnakú nezávislosť dvoch strán, ktorú I. časť spojila so SLSA a DORA.

**Vyradený trik** — skratka, ktorá dostane bránu do zeleného stavu bez vykonania skutočnej práce (potlačenie upozornenia, orezanie namiesto zmeny rozloženia) a ktorej použitie vopred znemožníš tým, že ju v zadaní na opravu pomenuješ a zakážeš. Obchádzanie brány je predvolené správanie agenta, preto treba trik vyradiť, nie iba od neho agenta odrádzať.

**Usporiadaný súbor povolených postupov a zoznam zákazov** — dve časti zadania na opravu: usporiadaný rebrík legitímnych riešení (najvhodnejšie ako prvé, skratka potláčajúca príznak ako posledná možnosť alebo zakázaná) a výslovný zoznam konkrétnych trikov, ktoré sa pri tejto triede opráv nesmú použiť.

**Potlačenie príznaku** — vypnutie signálu namiesto odstránenia príčiny: test, ktorý prejde aj cez mŕtvy kód, čistý výsledok lint dosiahnutý potlačením upozornenia alebo diff, ktorý skryje príznak z posudzovanej časti.

**Goodhartov zákon** — „keď sa z meradla stane cieľ, prestane byť dobrým meradlom“; proxy-metrika, ktorú optimalizuješ dostatočne tvrdo (počet zlúčených PR či uzavretých ticketov), prestane sledovať hodnotu, ktorú pôvodne zastupovala.

<a id="review-at-volume"></a>

## Kontrola pri veľkom objeme

**Kontrola pri veľkom objeme** — problém, ako zachovať zmysluplnosť ľudskej kontroly, keď agenti generujú výstupy rýchlejšie, než ich ktokoľvek dokáže čítať. Po prekročení určitej hranice prestáva „kontrola všetkého“ plniť funkciu dohľadu a mení sa na formálne odklepnutie.

**Sústrediť pozornosť človeka** — princíp návrhu, podľa ktorého má automatizácia spustiť všetky mechanické brány *pred* zapojením človeka. Obmedzená pozornosť človeka, ktorej kapacitu nemožno zvyšovať, sa tak sústredí iba na výstupy, ktoré už bránami prešli, a iba na prípady, kde je ľudský úsudok skutočným kontrolným mechanizmom.

**Zoznam nedelegovateľného** — výslovný, zapísaný zoznam konkrétnych vlastností, ktoré dokáže vnímať iba človek, napríklad vykresľovanie so skutočnými písmami, prirodzenosť animácií, správanie na skutočnom zariadení či kontrast prvkov na obrázkoch. Zapísanie zoznamu bráni tomu, aby ľudská brána potichu znovu prebrala mechanickú prácu.

**Kalibrácia podľa dosiahnuteľnosti** — určenie váhy nálezu podľa toho, či sa používateľ môže skutočne dostať k zasiahnutému kódu. Nedosiahnuteľná „kritická“ chyba je latentná (skrytá) chyba, nie núdzová situácia. Závažnosť bez dosiahnuteľnosti je iba šum, ktorý učí kontrolóra nedôverovať bráne.

**Skreslenie spôsobené formátom výstupu nástroja** — systematické pripisovanie menšej váhy nálezu, keď je výstupný kanál brány užší než chyba, ktorú odhaľuje. Vizuálne porovnanie napríklad informuje o *vzhľade*, takže „chýbajúci widget“ pôsobí ako kozmetický problém, hoci skutočnou chybou je chýbajúce *správanie*. Platí pravidlo: ak štrukturálna brána hlási, že niečo „chýba“, považuj to za nedostatok funkčnosti, kým sa nepreukáže, že ide iba o kozmetickú chybu.

**Strojovo čitateľná značka „potrebný človek“** — značka, ktorú agent vloží priamo do výstupu pri skutočnom rozhodnutí vyžadujúcom úsudok („tu potrebujem človeka“) a ktorú neskoršia ľudská brána použije ako svoj pracovný zoznam. Namiesto spotrebúvania pozornosti človeka ju nasmeruje na správne miesto.

<a id="secrets"></a>

## Secrets

**Invariant secretov (secrets invariant)** — pravidlo, podľa ktorého sa hodnota secretu nedostane ani do repozitára, ani do kontextu agenta.

**Oddelenie konfigurácie od kódu (config/code separation)** — usporiadanie, pri ktorom kód nesie iba názvy konfiguračných položiek, zatiaľ čo ich hodnoty zostávajú mimo zdrojových súborov.

**Odkaz namiesto vloženej hodnoty (reference-not-embed)** — postup, pri ktorom kód pracuje iba s názvom alebo odkazom na secret a jeho doslovnú hodnotu neobsahuje nikdy.

**Vkladanie za behu (runtime injection)** — sprístupnenie secretu procesu až pri jeho štarte, cez premenné prostredia, brokera alebo trezor.

**Skenovanie secretov (secret scanning)** — automatická kontrola súborov a commitov, ktorá podľa vzorov a entropie hľadá omylom vložené kľúče, tokeny a ďalšie prihlasovacie údaje.

**Push protection** — kontrola na strane servera, ktorá zablokuje push s rozpoznaným secretom ešte pred jeho zápisom do vzdialeného repozitára.

**Rotácia namiesto mazania (rotation-not-deletion)** — pravidlo nápravy úniku: pôvodné prihlasovacie údaje treba zneplatniť a vydať nové, pretože zmazanie zo súboru ich z histórie neodstráni.

**Krátkodobé prihlasovacie údaje (short-lived credential)** — kľúč, token alebo iné prihlasovacie údaje, ktoré po krátkom čase automaticky stratia platnosť, a tým obmedzia použiteľnosť uniknutej kópie.

<a id="least-privilege-and-sandboxing"></a>

## Najnižšie oprávnenia a sandbox

**Princíp najnižších oprávnení (least privilege)** — zásada, podľa ktorej agent dostane prístup iba ku konkrétnym prostriedkom a operáciám, ktoré jeho aktuálna úloha potrebuje.

**Sandboxing (izolované spúšťanie)** — vynútené oddelenie procesu od zvyšku systému hranicami súborového systému, siete a prostredia, ktoré agent nedokáže sám prekročiť.

**Pokyn verzus oprávnenie (instruction vs permission)** — rozdiel medzi požiadavkou v prirodzenom jazyku, ktorú agent dodržať nemusí, a technicky vynúteným právom, ktoré určuje, čo mu systém vôbec dovolí vykonať.

**Vymeranie oprávnenia (grant sizing: scope · mode · lifetime · identity)** — prispôsobenie udelených práv úlohe na štyroch parametroch: dostupné prostriedky, povolený režim operácií, čas platnosti a samostatná identita.

**Prompt injection (podstrčený pokyn)** — útok, pri ktorom nedôveryhodný obsah nesie text zostavený tak, aby ho model prečítal ako pokyn a konal podľa neho.

**Confused deputy (zneužitý sprostredkovateľ)** — komponent s legitímnymi právomocami, ktorý nedôveryhodná strana oklame, aby ich použil za ňu.

**Allowlist odchádzajúcej komunikácie (egress allowlist)** — zoznam jediných sieťových cieľov, ku ktorým smie proces nadviazať odchádzajúce spojenie.

**Workload identity (identita workloadu)** — identita pridelená konkrétnej úlohe alebo procesu, na základe ktorej platforma vydáva krátkodobé a úzko vymedzené prihlasovacie údaje.

<a id="environments-migrations-and-real-data"></a>

## Prostredia, migrácie a reálne dáta

**Vierohodné, nie reálne dáta (realistic-not-real data)** — dátová množina, ktorá zachováva štruktúru, väzby a rozdelenie produkčných dát bez toho, aby obsahovala skutočné údaje zákazníkov alebo iné citlivé záznamy.

**Maskovanie dát verzus anonymizácia (data masking vs anonymisation)** — maskovanie nahradí alebo zakryje identifikátory a riziko zníži, samo osebe však anonymitu nezaručí; prepojením s ďalšími zdrojmi sa identita osoby môže dať určiť aj naďalej.

**Referenčná integrita (referential integrity)** — vlastnosť dátovej množiny, pri ktorej väzby medzi súvisiacimi záznamami zostávajú platné, napríklad každý cudzí kľúč odkazuje na existujúci riadok.

**Chvost rozdelenia (distribution tail)** — zriedkavé, hraničné a nepohodlné hodnoty v dátach: nezvyčajne dlhé reťazce, prázdne polia či záznamy vytvorené podľa staršej schémy.

**Rozšíriť–migrovať–zúžiť (expand–migrate–contract, parallel change)** — postup bezpečnej zmeny schémy: najprv pridáš spätne kompatibilnú štruktúru, potom na ňu presunieš dáta aj prevádzku a starú odstrániš až nakoniec.

**Brána na deštruktívne príkazy (destructive-statement gate)** — deterministická kontrola, ktorá zastaví migráciu obsahujúcu príkaz schopný odstrániť alebo nenávratne zmeniť dáta, pokiaľ zmena nenesie výslovné povolenie.

**Nacvičená obnova (rehearsed restore)** — obnova zálohy vykonaná v skúšobnom prostredí spolu s kontrolou, že obnovené dáta sú prítomné, úplné a konzistentné.

**Obnova k bodu v čase (point-in-time recovery)** — schopnosť obnoviť databázu do zvoleného okamihu pred chybnou zmenou, poškodením dát alebo incidentom.

<a id="observability-rollout-and-the-kill-switch"></a>

## Pozorovateľnosť, nasadzovanie a núdzový vypínač

**Produkcia ako koncová brána** — produkcia je posledný kontrolný bod overovacej reťaze. Zachytáva triedy chýb, ktoré vznikajú až pod skutočnou prevádzkou, skutočnými dátami, zariadeniami a súbežnosťou.

**Sada telemetrických signálov** — malá skupina prevádzkových údajov, podľa ktorých sa dá posúdiť správanie zmeny: miera chýb, latencia vo vysokom percentile, saturácia a aspoň jeden obchodný signál.

**Obchodný signál (business signal)** — údaj o správaní používateľov alebo o fungovaní produktu, ktorý odhalí funkčne pokazenú zmenu aj vtedy, keď technické metriky vyzerajú zdravo.

**Oddelenie nasadenia od sprístupnenia** — postup, pri ktorom sa kód dostane do produkcie nezávisle od toho, kedy sa nové správanie zapne používateľom.

**Feature flag (prepínač funkcie)** — prepínateľná konfigurácia, ktorá správanie zapne alebo vypne bez nového zostavenia či nasadenia kódu.

**Postupné nasadzovanie (canary · zvyšovanie podielu)** — sprístupňovanie zmeny najprv malej skupine a potom čoraz väčšiemu podielu používateľov, kým sa jej bezpečnosť nepotvrdí alebo sa proces nezastaví.

**Automatické vrátenie zmeny** — automatické zastavenie a obrátenie sprístupňovania po prekročení stanovenej hranice, napríklad miery chýb alebo latencie.

**Núdzový vypínač** — mechanizmus, ktorým jeden človek za pár sekúnd zastaví chybné správanie zmenou stavu, bez nového zostavenia a bez závislosti od pipeline.

**Pozastavenie flotily** — zastavenie agentov, ktoré po vrátení artefaktu zabráni tomu, aby ďalej generovali nad nedôveryhodným základom alebo aby ten istý problém postavili znova.
