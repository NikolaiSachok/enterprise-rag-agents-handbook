---
title: "Ako posudzovať dôkazy v odbore"
sidebar_position: 3
---

# Ako posudzovať dôkazy v odbore

V 1. lekcii mal každý údaj priradený stupeň dôkazu — `MEASURED` / `REPORTED` / `ASSERTED` (namerané / hlásené / tvrdené). V tejto lekcii sa dozvieš, ako tento stupeň určiť. Je to jediný nástroj, ktorý dostaneš v tomto kurze a budeš ho používať vo všetkých ďalších lekciách. Do kurzu si možno prinášaš aj tvrdenia, ktoré nie sú pravdivé — nie preto, že by niekto klamal, ale preto, že druhotné zdroje skresľujú údaje oboma smermi, keď ich preberajú jeden od druhého. Nadšenci ich zveličujú jedným smerom, skeptici druhým. A keď si ľudia údaj posúvajú z ruky do ruky, stratí sa práve kontext, ktorý mu dával výpovednú hodnotu. Postup je preto jednoduchý a nijako zvlášť pôsobivý: nájdi prvotný zdroj, urči stupeň toho, čo si našiel, a otvorene ho uveď.

## Každé tvrdenie dostane stupeň

Máme tri stupne. Celý poctivý prístup stojí na tom, že ich nebudeš zamieňať.

- **`MEASURED`** — účinok preukázala kontrolovaná štúdia, telemetria, súbor údajov alebo reprodukovateľný benchmark.
- **`REPORTED`** — konkrétny odborník alebo firma dôveryhodne opisuje vlastnú skúsenosť. Sem patrí väčšina poznatkov v tomto odbore.
- **`ASSERTED`** — názor, marketingová formulácia alebo argument bez podkladov.

Aby tento rebrík dôkazov zostal poctivý, treba dodržať dve pravidlá. Po prvé, známe meno nezvyšuje stupeň tvrdenia. Sláva nie je dôkaz. Aj formulácia „Karpathy hovorí“ zostáva na stupni `ASSERTED`, kým nezistíš, čo v skutočnosti nameral. Po druhé, pri ďalšom šírení nesmieš stupeň zvýšiť. Tvrdenie, ktoré zopakuje populárny účet, zostáva tvrdením. Stupeň vyjadri priamo slovami: „randomizovaný experiment zistil“, „odborníci uvádzajú“, „jeden vplyvný príspevok tvrdí“. Tieto tri úvody nie sú iba štylistická ozdoba. Výslovne pomenúvajú stupeň dôkazu.

## Štyri veci, ktoré si treba všímať

Keď tvrdeniu priradíš stupeň, štyri kontroly rozhodnú, či údaj obstojí.

**Najprv menovateľ.** Z tej istej telemetrie Google môžeš odvodiť, že „podiel kódu napísaného AI“ je buď `28,7%`, alebo `70,6%`. Rozdiel spôsobuje iba to, či sa do menovateľa započíta aj kopírovanie a vkladanie (`MEASURED`; Google uvádza obe hodnoty vedľa seba a z toho istého súboru údajov). Každý titulok typu „X% nášho kódu napísala AI“ vyjadruje voľbu menovateľa, nie samostatný fakt. Skôr než zopakuješ údaj z čitateľa zlomku, zisti, čo je v menovateli.

**Potom konflikt záujmov, uvedený priamo — nie schovaný v poznámke pod čiarou.** Informácia, že „výskumníci z GitHubu merajú produkt GitHubu“, patrí priamo k výsledku. Platí tu základné pravidlo: účinnosť nástroja by nemal merať ten, kto ho predáva. Užitočnejšie údaje zvyčajne zverejní organizácia, ktorá nemá čo predať. Meta uviedla vlastný nelichotivý výsledok `19,7%`; dodávateľ zvyčajne zverejní lichotivejší výsledok.

**Potom aktuálnosť.** Údaj môže byť zastaraný alebo stiahnutý, no napriek tomu ďalej kolovať. Google v tichosti stiahol výsledok z roku 2022 o prínose pri prepínaní kontextu, pretože nebol štatisticky významný. Vyhľadávanie na webe ho však ešte v roku 2026 opakovalo ako fakt. Samotný METR označil svoj výsledok „o 19% pomalšie“ za zastaraný. Keď údaj prestane platiť, neznamená to, že sa prestane šíriť.

**A predovšetkým choď k prvotnému zdroju.** Pri výskume pre tento kurz boli úryvky vo výsledkoch vyhľadávania opakovane nesprávne: vymýšľali desatinné miesta, menili percentá na počty a pripájali skutočné údaje k nesprávnym štúdiám. Riešením nikdy nebol lepší úryvok. Bolo ním otvorenie samotnej štúdie.

## Percentuálne body nie sú percentá

Jedna kontrola rozhoduje, či má tento kurz vôbec právo učiť všetko ostatné — a práve v nej sa väčšina médií mýli. Ak porozumenie klesne zo `67%` na `50%` (`MEASURED`), ide o pokles o **17 percentuálnych bodov**, teda relatívny pokles o 25% — nie o „pokles o 17%“. Chyba v sebahodnotení v štúdii METR dosahuje **40 percentuálnych bodov**, nie 40%. Ani relatívny nárast nie je podiel: „bez kontroly sa zlúči o +31,3% viac PR“ neznamená, že bez kontroly zostáva 31% PR. Sú to rozdielne veličiny. Táto lekcia vznikla práve preto, aby napravila takéto nepresnosti. Stačí si ich raz pomýliť a strácaš právo túto tému vyučovať.

## Najčastejšie opakovaný údaj v tejto oblasti — a prečo ho nemôžeš použiť

Vyskúšaj tieto kontroly na údaji, ktorý sa najčastejšie cituje na podporu tvrdenia, že „AI zhoršuje kvalitu kódu“: duplikácia blokov sa od roku 2023 údajne zvýšila o `81%` a podiel kopírovaného kódu vzrástol z `9,4%` na `15,7%`. Údaj pochádza od GitClear, dodávateľa analýzy kvality kódu. Keď ho preveríš všetkými štyrmi kontrolami, rozpadne sa ti v rukách. Nie je uvedený autor. Stránka nemá dátum. Zdrojové údaje sú súkromné, takže výsledok nemôže nikto zvonka reprodukovať. Chýbajú opis metódy aj kontrolné skupiny. A najvážnejší nedostatok: jednotlivé riadky kódu vôbec nie sú priradené k AI. Ide o časový rad z obdobia, keď sa používanie AI rozšírilo, nie o porovnanie kódu vytvoreného AI s kódom bez AI. Dokonca aj uvádzaný rozsah údajov sa medzi vydaniami mení: najprv 153 miliónov riadkov, potom 211 miliónov zmenených riadkov a napokon 623 miliónov analyzovaných zmien. Zakaždým ide o inú jednotku. Nespájaj tieto údaje do jedného trendu.

A teraz jemný, no zásadný rozdiel, na ktorom stojí celá lekcia. Slabinou GitClear nie je to, že jeho výsledok niekto vyvrátil. Ani päť cielených vyhľadávaní neodhalilo dôveryhodnú metodickú kritiku — žiadny podrobný rozbor, neúspešný pokus o reprodukciu, nič. Slabina spočíva v tom, že **ho nemôžeš overiť.** Nie je čo reprodukovať. Je to iný, menej nápadný druh zlyhania než nesprávny výsledok — a zároveň oveľa bežnejší.

Poctivejšia verzia tvrdenia však obstojí. Jediným nezávislým testom príčinnej súvislosti je párovaná štúdia Carnegie Mellon. Použila metódu difference-in-differences, teda porovnanie vývoja rozdielov, na 401 repozitároch so zavedeným nástrojom a 606 kontrolných repozitároch. V repozitároch, v ktorých sa ako hlavný nástroj používal agent, zistila nárast duplikácie o `7,92%`. Výsledok nebol štatisticky významný. V repozitároch, v ktorých sa AI používala najmä v IDE, išlo o `−0,94%`, opäť bez štatistickej významnosti. Štatisticky významný bol naopak nárast zložitosti (`+34,85%`) a upozornení zo statickej analýzy (`+17,73%`). Tvrdenie „AI zhoršuje udržiavateľnosť“ teda platí — príčinou je však zložitosť, nie duplikáty. Najčastejšie opakovaný údaj z tejto oblasti sa nedá reprodukovať; skutočné zistenie stojí nenápadne vedľa neho. A všimni si stupeň dôkazu: napriek všetkým desatinným miestam patrí údaj GitClear na stupeň `REPORTED`, nie `MEASURED`. Časový rad z obdobia zavádzania AI nie je meraním účinku AI.

## Druhotné zdroje skresľujú oboma smermi

GitClear nie je výnimka, ale typický príklad. Počas výskumu pre tento kurz sa rovnakým spôsobom rozpadlo šesť tvrdení. Neznamená to, že ľudia klamú. Prežíva to, čo sa dobre šíri, nie to, čo je vedecky poctivé. Preto tento kurz siaha po prvotných zdrojoch.

- **Pipeline, z ktorej sa vykľul iba diagram** — pracovný postup bol nakreslený ako spätnoväzbová slučka, ale pri kontrole sa ukázalo, že v ňom neexistuje nijaké spätné prepojenie.
- **„Kompilátor špecifikácií“, ktorý je v skutočnosti prompt s veľkosťou 70 KB.** Repozitár produktu neobsahuje nijaký kód, iba štyri textové súbory. „Kompilátor“ je systémový prompt, ktorý prikazuje chatbotu tvrdiť, že je kompilátorom. Celé „vynucovanie“ teda spočíva v zdvorilej žiadosti.
- **Nárast CVE pripísaný jedinému nástroju AI** — „27 pripísaných nástroju Claude Code“ — v skutočnosti meria, ktorý nástroj podpisuje svoje commity. Claude Code ich podpisuje predvolene, väčšina ostatných nástrojov nie. Údaj počíta stopy nástrojov, nie chyby.
- **Najcitovanejší aforizmus v odbore** — „môžeš zveriť svoje premýšľanie niekomu inému, ale nie svoje porozumenie“ — sa pripisuje Karpathymu. Ten však výslovne odkazuje na tweet, ktorý sa mu páčil, a nikdy netvrdil, že je jeho autorom. Pripísať výrok jemu je presne ten druh skreslenia pri preberaní z tretej ruky, ktorému má táto lekcia zabrániť.
- **Stiahnutý údaj Google**, ktorý bol v roku 2022 stiahnutý pre nedostatočnú štatistickú významnosť, no vyhľadávanie na webe ho v roku 2026 opäť ponúkalo ako aktuálny fakt.
- **Údaj OpenAI „97,9%“**, ktorý sa nenachádza ani v štúdii, ani v blogovom článku uvádzanom ako zdroj. Je to osamotený údaj, ktorý nepodopiera nijaká veta, a jeho menovateľ sa nenápadne zmenil z „aktívnych pracovníkov“ na „zamestnancov“.

Každé z týchto tvrdení by obstálo v sebavedomo napísanom texte. Ani jedno neobstálo po otvorení prvotného zdroja. Toto je celá metóda, vysvetlená na šiestich zlyhaniach namiesto jedného pravidla.

:::tip[▶ Video]

<YouTube id="-dAmqHFWzyg" title="Top 5 AI Myths — IBM Technology" />

IBM stručne predstavuje päť tvrdení, ktoré o AI „každý pozná“, no pri dôkladnej kontrole neobstoja. Ide o rovnaký návyk, aký si pestuješ v tejto lekcii, iba použitý v susednej oblasti.

:::

## Niekoľko údajov, ktoré už možno poznáš

Niektoré skreslené tvrdenia sa opakujú tak často, že ich treba pomenovať a odložiť bokom.

- Údaj o **„441% náraste času kontroly“** pochádza od Faros AI, nie od DORA. Presná hodnota je +441,5% a údaj „+31,3%“ vedľa nej označuje relatívny nárast počtu PR zlúčených bez kontroly, nie 31-percentný podiel.
- K údaju označovanému ako **„Stanfordská štúdia 100 000 vývojárov“** nebola publikovaná nijaká štúdia. Údaje sa šíria prostredníctvom prednášok a prezentácií, metodika však nebola zverejnená. Ak tento údaj vôbec cituješ, napíš: „Skupina zo Stanfordu uvádza v prednáškach, nie v publikovanej štúdii.“
- **„Copilot zrýchľuje vývojárov o 55%“** pochádza od výskumníkov z GitHubu, ktorí skúmali produkt GitHubu. V roku 2023 merali čas potrebný na jednu umelo vytvorenú úlohu — vytvorenie jednoduchého HTTP servera. Je to marketingový materiál, nie zistenie o tvojej práci.
- **„Schopnosti AI sa zdvojnásobujú každých 7 mesiacov“** je zaokrúhlený výsledok modelu METR — 207 dní. Revízia METR z roku 2026 odhaduje novšie tempo na 131 dní. Ide o regresiu založenú na dvanástich modeloch a úlohách, ktoré samotný METR označuje za „nenáročné“ a „statické“. Cituj tento odhad, nie údajnú zákonitosť.

## Ako poctivo uviesť zistenie

Nadšenci aj skeptici robia rovnakú chybu: preberú skutočný údaj, ale stratia vzorku, na ktorej vznikol, aj proxy metriku, ktorá mala zastupovať skutočnú hodnotu. Náprava má podobu jednej vety. Uveď údaj a pridaj to, čo sa pri ďalšom šírení najčastejšie vytratí: na kom sa meralo, aká proxy metrika zastupovala skutočnú hodnotu, kto výskum financoval a či výsledok ešte platí. „Pri časovom porovnaní desiatok tisíc inžinierov Microsoftu s ich vlastnými predchádzajúcimi výsledkami súviselo zavedenie agenta v príkazovom riadku s približne 24% vyšším počtom zlúčených pull requestov za štyri mesiace — zlúčený PR však nevyjadruje hodnotu, ktorú priniesol.“ Jediná veta obsahuje údaj, vzorku, proxy metriku aj konflikt záujmov. Napriek tomu sa číta dobre.

Z tejto podoby vyplýva päť pravidiel. Nikdy neuvádzaj údaj o produktivite bez proxy metriky a vzorky. Nezamieňaj percentuálne body s percentami. Uveď konflikt záujmov priamo v texte. Ak zdroj prestane uznávať vlastný výsledok, povedz to ako prvé. A uprednostni výsledok, ktorý je v rozpore s obchodným záujmom samotného zdroja — napríklad keď Anthropic zverejní náklady svojho nástroja alebo OpenAI vyradí vlastný benchmark. Práve preto si takéto meranie zaslúži väčšiu dôveru. V odbore plnom konfliktov záujmov je to najsilnejší dostupný dôkaz.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Hodnotenie dôkazov potrebuje každý; mení sa iba závažnosť následkov.

- **Soloista.** Stačí osobný návyk: skôr než sa podľa nejakého údaja zariadiš, nájdi jeho prvotný zdroj. To je celá disciplína. *Zlyhanie, ktorému tým predídeš:* stráviš víkend budovaním niečoho na základe skresleného tvrdenia, ktoré sa opakovalo, kým nezačalo vyzerať ako odkaz na štúdiu — a rozpadne sa hneď, ako otvoríš zdroj.
- **Malý tím.** Pri každom posudzovaní návrhu sa pýtajte: „Ako to vieme?“ V dokumente so zdôvodnením rozhodnutia citujte prvotné zdroje, nie blogy dodávateľov. *Zlyhanie, ktorému tým predídeš:* tímová norma, výber frameworku alebo pravidlá testovania sa oprú o údaj, ktorého pôvod nikto neoveril.
- **Enterprise.** Stanov minimálnu požadovanú úroveň dôkazov pre rozhodovanie o nástrojoch. Aj nákupné oddelenie nech číta prvotné zdroje, nie prezentácie dodávateľov. *Zlyhanie, ktorému tým predídeš:* pravidlá pre tisíce ľudí budú vychádzať z nesprávne pochopenej štúdie. Práve tu sa naplno prejaví myšlienka, ktorá sa vinie celým kurzom: čím ďalej od samotnej práce sa rozhoduje, tým ľahšie sa nesprávne prečítaný výsledok zmení na *dôkaz*, o ktorý sa opierajú ďalší. Keď sa veta „štúdia hovorí X“ dostane do normy, všetci ďalší preberú chybu bez toho, aby niekedy videli zdroj.

## Čo si odniesť

- Každému tvrdeniu priraď stupeň — `MEASURED`, `REPORTED` alebo `ASSERTED` — a pri ďalšom šírení ho nikdy nezvyšuj. Sláva nie je dôkaz.
- Kontroluj menovateľ, konflikt záujmov a aktuálnosť údaja. Ak máš pochybnosti, otvor prvotný zdroj. Úryvky vo vyhľadávaní boli opakovane nesprávne; samotné štúdie nie.
- Percentuálne body nie sú percentá a relatívny nárast nie je podiel. Ak si ich pomýliš, strácaš právo túto tému vyučovať.
- Najčastejšie opakovaným údajom v určitej oblasti býva práve ten, ktorý sa nedá overiť — nie ten, ktorý sa podarilo dokázať. Tvrdenie GitClear o duplikácii sa nedá reprodukovať. Poctivé zistenie je nenápadnejšie: udržiavateľnosť zhoršuje zložitosť, nie duplikáty.
- Zistenie uvádzaj spolu so vzorkou, proxy metrikou, konfliktom záujmov a informáciou, či je ešte aktuálne. Uprednostni výsledok, ktorý je v rozpore s obchodným záujmom samotného zdroja.

**Nové pojmy:** stupeň dôkazu (rebrík `MEASURED` / `REPORTED` / `ASSERTED`), konflikt záujmov, uvedený priamo, overovanie v prvotnom zdroji.
