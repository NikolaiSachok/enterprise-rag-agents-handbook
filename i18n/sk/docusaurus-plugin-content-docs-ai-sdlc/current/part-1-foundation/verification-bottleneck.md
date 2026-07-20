---
title: "Úzke miesto overovania"
sidebar_position: 1
---

# Generovanie zlacnelo, kontrola nie

Na tejto jedinej nerovnováhe stojí celý kurz. A dôkazy sú v tomto prípade nezvyčajne presvedčivé — presvedčivejšie než pri takmer všetkom ostatnom, čo sa tvrdí o AI a softvéri. Keď sa pozrieš na pôvodné štúdie, jedna polovica príbehu je dobre zmeraná, druhá takmer vôbec. Nezávislé merania spoľahlivo ukazujú, že objem odovzdanej práce rastie. Či je však výsledok aj *dobrý*, sa nemeria. Keď tieto dve zistenia spojíš, dostaneš hlavnú tézu tejto lekcie: nekontrolované generovanie je riziko, nie skutočný pracovný výkon.

Najprv krátko k hodnoteniu tvrdení, pretože táto lekcia sa oň výrazne opiera. `MEASURED` (namerané) znamená, že účinok preukázala kontrolovaná štúdia alebo randomizovaný experiment; `REPORTED` (uvádzané) znamená, že ho opisujú ľudia z praxe, ale nikto ho samostatne neoddelil od ostatných vplyvov; `ASSERTED` (tvrdené) znamená, že ho niekto obhajuje bez merania. Pri každom čísle nižšie uvádzame aj tento stupeň dôkazu. Celú hierarchiu dôkazov vysvetľuje 2. lekcia.

## Objem odovzdanej práce rastie — táto polovica príbehu je skutočná a výsledky sa opakujú

Začnime tým, o čom niet pochýb. Ľudia, ktorí začali používať programovacích agentov ovládaných z príkazového riadka, zlučujú viac pull requestov. Účinok je veľký, trvalý a objavil sa vo viacerých firmách.

[Najdôkladnejšie ho zmeral Microsoft](https://arxiv.org/abs/2607.01418) (`MEASURED`): vývojári, ktorí začali používať CLI agenta na programovanie, zlučovali približne o **24% viac pull requestov**. Nárast vydržal celé štyri mesiace a nezoslabol. Závisel aj od intenzity používania — používanie nástroja počas piatich alebo viacerých dní v týždni súviselo s nárastom približne o 50%, používanie počas štyroch dní s nárastom o 22% a počas troch dní o 15%. Išlo o pozorovaciu štúdiu s fixnými efektmi (*fixed effects*) na úrovni jednotlivcov a výsledok obstál aj v placebo teste (*placebo test*): −1,1%, pričom interval spoľahlivosti zahŕňal nulu. Treba však uviesť dve výhrady. Autori sú zamestnancami Microsoftu a Microsoft vlastní GitHub aj Copilot CLI — firma teda merala účinok produktu, ktorý sama predáva. Autori na tento konflikt záujmov sami priamo upozorňujú. Výsledkom navyše nie je hodnota vytvorená pre používateľa, ale *počet PR zlúčených na jedného vývojára za deň v skupine ľudí, ktorí začali nástroj používať dobrovoľne*. Je to **proxy metrika** — merateľná náhrada hodnoty, nie hodnota samotná.

[Google zaznamenal rovnaký obraz](https://arxiv.org/abs/2601.19964) (`MEASURED`): používatelia jeho nástroja „Transform Code“ vytvorili v priemere na jedného vývojára za mesiac **+17,5% viac zoznamov zmien** (*change-lists*) a interval odhadu bol úzky. Platia rovnaké výhrady: ide o proxy metriku objemu práce a pozorovaciu štúdiu využívajúcu metódu rozdielu rozdielov (*difference-in-differences*). Porovnávala 36 000 vývojárov používajúcich nástroj s 18 000 vývojármi v kontrolnej skupine, pričom ľudia sa sami rozhodovali, či nástroj začnú používať.

V obehu je aj tretie číslo, ktoré má zmysel citovať iba spolu s výhradou (`MEASURED`): jedna firma zaviedla povinný cieľ „2×“ a dosiahla [**2,09×**](https://arxiv.org/abs/2607.01904) viac zlúčených PR na osobu. Je to učebnicový príklad Goodhartovho zákona (*Goodhart’s law*): tá istá firma si teda stanovila povinný cieľ priamo v metrike, ktorú potom merala. Keď sa metrika stane cieľom, prestane čokoľvek spoľahlivo merať.

Pravidlo pre výklad je jednoduché a prísne: nárast uveď presne a vždy pomenuj proxy metriku. Hovor „Microsoft zaznamenal o 24% viac zlúčených PR“, nikdy nie „produktivita stúpla o 24%“.

## Kvalita klesá — a technický dlh berieš na úver

Teraz druhá polovica príbehu. Kód vytvorený tou istou vlnou agentov má merateľne horšiu vnútornú kvalitu a toto zhoršenie pretrváva aj po tom, čo počiatočné zrýchlenie zmizne.

[Štúdia Carnegie Mellon s párovanými skupinami a metódou rozdielu rozdielov](https://arxiv.org/abs/2601.13597) (`MEASURED`) porovnala repozitáre, v ktorých sa pri práci vychádzalo predovšetkým z výstupov agentov, so zodpovedajúcimi kontrolnými repozitármi. Kognitívna **zložitosť vzrástla o 34,85%** (štandardná chyba 0,059, p&lt;0,001) a **počet upozornení zo statickej analýzy vzrástol o 17,73%** (štandardná chyba 0,048, p&lt;0,001). Duplicitného kódu pribudlo **7,92%**, tento výsledok však nebol štatisticky významný. Tento detail si treba zapamätať: tvrdenie „AI zvyšuje množstvo kopírovaného kódu“ po zohľadnení kontrolných premenných neobstojí. Porovnanie zahŕňalo 401 sledovaných repozitárov a 606 zodpovedajúcich kontrolných repozitárov; údaje sa končili v novembri 2025. Treba priznať aj jedno obmedzenie: upozornenie nie je chyba. A pri citovaní použi hodnoty **17,73% a 34,85%** spolu s informáciou o skúmanej vzorke, nie zaokrúhlené hodnoty „18% a 39%“ z nadpisu abstraktu. Hodnota 39% sa totiž týka skôr skupiny, ktorá pracovala primárne v IDE — teda inej vzorky.

[Sprievodná štúdia](https://arxiv.org/abs/2511.04427) (`MEASURED`) presne zachytáva aj priebeh v čase: riziká pre kvalitu pretrvávajú „aj keď sa výhoda v rýchlosti vytratí“ a práve nahromadený dlh spôsobí neskoršie spomalenie. Zrýchlenie začalo miznúť približne v druhom mesiaci a v treťom už nebolo viditeľné, no zvýšená zložitosť pretrvala. Presne tak vyzerá technický dlh na úver. Zrýchlenie dostaneš teraz a zaplatíš zaň neskôr aj s úrokmi — neporiadok, ktorý si vytvoril, spomalí ďalšiu zmenu.

Netreba zamlčať, že obe štúdie kvality uskutočnila tá istá výskumná skupina. Ich výsledky sa teda navzájom podporujú, ale nejde o nezávislé zopakovanie výskumu. Dostupná literatúra sa navyše výrazne opiera o jediný súbor údajov, v ktorom autori pull requestov sami označili, že použili agenta. Zistenie je skutočné, ale zatiaľ nejde o ustálený vedecký konsenzus, aký by prinieslo viacero nezávislých opakovaní.

Poučenie je jednoduché: zrýchlenie nedostaneš zadarmo. Berieš si ho na úver.

## Porozumenie klesá — a nezískaš zaň ani vyššiu rýchlosť

[Randomizovaný kontrolovaný experiment tímov z Anthropic a Stanfordovej univerzity](https://www.anthropic.com/research/AI-assistance-coding-skills) (`MEASURED`) ukázal nepríjemnejšiu cenu než len horšiu kvalitu kódu: slabšie porozumenie. Vývojári, ktorí sa učili pracovať s neznámou asynchrónnou knižnicou, dosiahli s AI v teste porozumenia **50%**, kým pri práci bez AI **67%**. Rozdiel je **17 percentuálnych bodov** (relatívny pokles o 25%). AI im pritom nepriniesla ani merateľné zrýchlenie: úlohu dokončili približne o dve minúty skôr, no rozdiel nebol štatisticky významný. Štúdie sa zúčastnilo 52 prevažne začínajúcich vývojárov, ktorí pracovali s neznámou knižnicou.

Ak chceš túto tému vyučovať poctivo, musíš rozdiel pomenovať správne: pokles zo 67 na 50 predstavuje **17 percentuálnych bodov**, nie „o 17% menej“. Percentuálne body a percentá sú rozdielne veličiny. Ich zamieňanie je presne ten druh nepresnosti, ktorý má tento kurz napraviť.

Skutočne zaujímavé zistenie sa skrýva vo výsledkoch skupiny používajúcej AI. Ľudia, ktorí modelu odovzdali celú úlohu, dosiahli menej než 40%. Tí, ktorí sa pomocou AI snažili pochopiť princípy a žiadali ju o vysvetlenie namiesto hotového riešenia, dosiahli aspoň 65% — takmer rovnako ako skupina pracujúca ručne so 67%. Výskumníci rozlíšili šesť spôsobov práce s AI; pri troch z nich si účastníci zachovali schopnosť učiť sa. O výsledku teda nerozhodol samotný nástroj, ale spôsob, akým s ním ľudia pracovali.

Poctivý výklad si vyžaduje dve výhrady. Štúdia skúmala *učenie sa pracovať s neznámou knižnicou*, nie bežnú prácu v kódovej základni, ktorú dobre poznáš. Podmienky boli zámerne zvolené tak, aby preverili porozumenie. Výsledok navyše odporuje obchodným záujmom organizácie, z ktorej autor pochádza: výskumník z Anthropic zverejnil zistenie poukazujúce na obmedzenie AI. Práve preto si toto meranie zaslúži väčšiu dôveru. Či sa dlh v porozumení hromadí počas celej kariéry, zostáva `UNKNOWN` (neznáme) — nikto to nezmeral.

## Sebahodnotenie je nespoľahlivé — účinok nedokážeš vycítiť, musíš ho merať

Keby utrpela iba kvalita a porozumenie, mohol by si dúfať, že si škodu počas práce všimneš. Nevšimneš — a práve toto zistenie mení celý spôsob uvažovania o probléme.

[Randomizovaný experiment METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) (`MEASURED`) ukázal podstatu problému: skúsení vývojári **odhadovali, že s AI pracovali o 20% rýchlejšie** vo vlastných repozitároch, no merania ukázali, že boli **o 19% pomalší**. Pred experimentom očakávali zrýchlenie o 24% a aj po dokončení úloh naďalej verili, že ich AI zrýchlila. METR výsledok zhrnul tak, že účastníci svoj výkon nadhodnotili **približne o 40 percentuálnych bodov**. Aj odborníci oslovení pred experimentom nesprávne predpovedali *smer* účinku: ekonómovia očakávali skrátenie času o 39% a výskumníci v oblasti strojového učenia o 38%.

Pri tejto štúdii treba vedieť dve veci. Bola malá — zahŕňala 16 vývojárov a 246 úloh — a skúmala skúsených správcov repozitárov, o ktoré sa starali približne päť rokov. Ide presne o podmienky, v ktorých AI pomáha najmenej. Celý záver o skreslení sebahodnotenia stojí na tomto jedinom experimente. Aj METR upozorňuje, že je to jediná štúdia, ktorá pri rovnakej vzorke ľudí a rovnakej metrike spojila dotazník s experimentom v reálnych pracovných podmienkach. Opieraj sa iba o to, čo štúdia spoľahlivo ukazuje, a nič viac.

A teraz zásadná výhrada k aktuálnosti, pretože toto číslo patrí medzi najčastejšie nesprávne citované údaje v odbore: výsledok „o 19% pomalší“ [označil samotný METR za zastaraný](https://metr.org/blog/2026-02-24-uplift-update/). Neopakuj preto „AI spomaľuje vývojárov o 19%“ ako aktuálny fakt. Platné poučenie nespočíva v tomto čísle, ale v mechanizme: účinok AI na vlastnú rýchlosť nedokážeš spoľahlivo vycítiť. Musíš ho zmerať.

## Benchmarky nepredpovedajú produkciu — pasca voľby menovateľa

Keď prejdeš od pocitov vývojárov k výsledkom nástrojov, medzi číslom a skutočnosťou, ktorú má číslo zastupovať, sa opäť otvorí priepasť.

[Meta zverejnila najpresvedčivejší produkčný údaj v celom súbore štúdií](https://arxiv.org/abs/2507.13499) (`MEASURED`) a výsledok je triezvy: asistent na kontrolu kódu dosiahol **68% v offline benchmarku založenom na presnej zhode**, no v produkcii vývojári skutočne použili iba **19,7% jeho návrhov** — rozdiel približne 3,5×. „Použili“ tu znamená presne to, na čom záleží: vývojár *naozaj prijal a zapracoval* opravu, ktorú AI navrhla k skutočnej pripomienke z kontroly kódu. Použitý bol približne jeden návrh z piatich. Nepoužilo sa asi 80% návrhov. Meta nástroj vytvorila a napriek tomu zverejnila toto nízke číslo. Práve preto si meranie zaslúži väčšiu dôveru.

[Rovnaké telemetrické údaje od Googlu](https://arxiv.org/abs/2601.19964) odhaľujú aj pascu voľby menovateľa (`MEASURED`): z *tých istých* údajov vyjde, že AI napísala buď **28,7%, alebo 70,6%** kódu — podľa toho, či sa do menovateľa započíta kopírovanie a vkladanie. Google obe hodnoty z jedného súboru údajov uvádza vedľa seba. Poučenie platí všeobecne: každý titulok typu „X% nášho kódu napísala AI“ je výsledkom **voľby menovateľa**, nie jednoznačným faktom. Všetky takéto ukazovatele produktivity — zlúčené PR, commity, riadky kódu, znaky či čas potrebný na úlohu — sú proxy metriky. Ani jedna nemeria vytvorenú hodnotu.

## Zlyhal aj samotný benchmark

Pre každého, kto dúfa, že spor rozhodne benchmark, je situácia ešte horšia: momentálne neexistuje dôveryhodný benchmark, o ktorý by sa dalo oprieť.

[Spoločnosť OpenAI vo februári 2026 vyradila SWE-bench Verified](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/) (`MEASURED`). Kontrola odhalila, že **najmenej 59,4% náročných úloh malo testy, ktoré odmietali funkčne správne riešenia** — benchmark teda vyhodnocoval správne odpovede ako nesprávne. Spoločnosť OpenAI zároveň uviedla, že výsledné skóre už „odrážalo, do akej miery sa model počas tréningu stretol s obsahom benchmarku“. O päť mesiacov neskôr, v júli 2026, spoločnosť OpenAI [**stiahla aj svoje odporúčanie náhrady**](https://openai.com/index/separating-signal-from-noise-coding-evaluations/) SWE-bench Pro, pretože aj v tomto benchmarku je podľa odhadu chybných **približne 30% úloh**. V čase písania neexistuje benchmark všeobecne uznávaný v odvetví na hodnotenie programovania pri najvyspelejších modeloch.

:::tip[▶ Video]

<YouTube id="kDY4TodQwbg" title="What are Large Language Model (LLM) Benchmarks? — IBM Technology" />

Úvod od IBM vysvetľuje, čo benchmark pre LLM v skutočnosti meria. Je to užitočný základ na pochopenie, prečo uvedené programovacie benchmarky prestali merať to, čo od nich všetci očakávali.

:::

Dve ďalšie zistenia vysvetľujú mechanizmus problému, nielen jeho viditeľný dôsledok. [Kontrola zistila](https://cursor.com/blog/reward-hacking-coding-benchmarks), že v **63% úspešných riešení model hotovú opravu vyhľadal, namiesto toho, aby ju sám odvodil**. [Z opráv, ktoré vyzerali hodnoverne](https://arxiv.org/abs/2503.15223), **29,6% prešlo testami, hoci problém opravovali nesprávne**. Nejde teda o jediný chybný súbor údajov, ktorý by stačilo nahradiť lepším. Keď sa úlohy do benchmarkov získavajú zo zlúčených pull requestov, stále vzniká rovnaký druh chyby. Dôvod je systémový a treba ho povedať priamo: **zlúčený PR nikdy nebol špecifikáciou.** Dokazuje, že sa niečo nasadilo, nie čo sa malo vytvoriť. A riešenie nemôžeš hodnotiť podľa špecifikácie, ktorú si nikdy nemal. (K tejto téme sa vrátime v 3. lekcii pri nesprávnom výklade toho, čo dokazuje zlúčenie, a v 5. lekcii pri kontrolách, ktoré sa dajú obísť.)

## Jediný poctivý titulok

Keď obe polovice spojíš, poctivý záver je zrejmý — a vyslovili ho ľudia, ktorí namerali najsilnejší výsledok v prospech AI. Objem odovzdanej práce rastie. Či rastie aj vytvorená *hodnota*, nebolo preukázané. Odbor sa navyše nezhodol na metrikách, ktorými by sa to dalo zistiť. Presne k tomuto záveru dospel tím Microsoftu, ktorý zaznamenal 24% nárast objemu práce. Výskumníci, ktorí mali najväčší dôvod vyhlásiť víťazstvo, to odmietli urobiť.

Každá štúdia, bez ohľadu na smer výsledku, pritom poukazuje na rovnaké úzke miesto: **nedostatočnú kapacitu na kontrolu a overovanie.** Autori jednej zo štúdií kvality to vyjadrujú priamo: [kontrola kódu je miesto, kde možno kvalitu ovplyvniť](https://arxiv.org/abs/2607.07980). AI sama nedokáže zabezpečiť, aby jej vplyv na kvalitu bol kladný. Musí to zabezpečiť tím. Preto sa tento kurz venuje overovaniu, nie promptom.

:::note[Rovnaký nástroj, opačné výsledky — rozhoduje znalosť úlohy]

[Vývojári v Googli boli pri *neznámej* úlohe z podnikového prostredia](https://arxiv.org/abs/2410.12944) s AI o **21% rýchlejší**. Skúsení správcovia repozitárov, o ktoré sa starali *päť rokov*, boli o **19% pomalší**. Rozdiel takmer určite nespôsobila samotná AI, ale **znalosť úlohy** — skrytá premenná, ktorá vysvetľuje rozpor medzi oboma výsledkami. Vysvetľuj kontrast medzi nimi; ani jedno číslo neuvádzaj osamotene a upozorni, že oba výsledky sú už neaktuálne.

:::

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Na každej úrovni platí to isté: **nekontrolované generovanie je riziko, nie skutočný pracovný výkon.** Úzke miesto overovania *(verification bottleneck)* je všade rovnaké. S veľkosťou organizácie sa menia iba prostriedky, ktoré môžeš vyčleniť na overovanie. Platí pritom pravidlo, ku ktorému sa kurz opakovane vracia: čím bližšie je kontrola k produkcii, tým väčšmi záleží na tom, čomu zabráni; čím je od produkcie ďalej, tým väčšmi záleží na tom, čo ňou vieš dokázať.

- **Soloista.** Kontroluješ vlastnými očami a pridáš jednu automatizovanú bránu — zostavenie projektu alebo súbor testov, ktoré agent nemôže upravovať. Z vlastnej skúsenosti samostatného vývojára považujem druhú podmienku za nevyhnutnú: generátor nesmie mať možnosť potichu zmierniť kontrolu, ktorá ho má strážiť. *Čomu táto kontrola zabráni:* aby si nasadil vygenerovaný kód, pri ktorom máš *pocit*, že ťa zrýchľuje, hoci merateľne zvyšuje technický dlh. Zistenie o skreslení sebahodnotenia ukazuje, že pocit ti správnu odpoveď nedá.

- **Malý tím.** Pridaj nezávislú kontrolu druhým človekom a spoločné CI, ktorého výsledkom obaja dôverujete ako dôkazu. *Čomu táto kontrola zabráni:* slepým miestam vznikajúcim pri kontrole vlastnej práce a technickému dlhu spôsobenému rastúcou zložitosťou, ktorý by sa inak nepozorovane hromadil, až kým by v treťom mesiaci nespôsobil spomalenie.

- **Enterprise.** Nezávislá kontrola sa stáva systémovou požiadavkou — musí byť preukázateľné, že kontrolór nie je autorom. Údaje z produkčnej telemetrie sa potom premietajú späť do ďalších opráv a spätnoväzbová slučka sa uzatvára v produkcii. *Čomu táto kontrola zabráni:* aby rastúca rýchlosť zvyšovala počet zmien bez kontrolného systému, ktorý ich dokáže zvládnuť. Práve takúto následnú nestabilitu sleduje [DORA](https://dora.dev/dora-report-2025/). Na tejto úrovni prax takmer presne zodpovedá uvedeným normám. Oddelenie roly kontrolóra od roly človeka, ktorý zmenu implementuje, sa nazýva **oddelenie právomocí (separation of duties)** — dlhoročný princíp auditu a bezpečnosti. Nejde iba o odporúčanie, ale o kodifikovanú požiadavku. OpenSSF [**SLSA Source Level 4**](https://slsa.dev/spec/v1.2/) vyžaduje „Two-Party Review“ a európske nariadenie [**DORA (RTS, článok 17)**](https://eur-lex.europa.eu/eli/reg_del/2024/1774/oj/eng) prikazuje oddeliť funkcie schvaľujúce zmenu od funkcií, ktoré ju implementujú. Dôkazová opora tejto požiadavky je silná: výskum schvaľovania zmien, z ktorého vychádza, má stupeň `MEASURED` a ustanovenie DORA je záväznou regulačnou požiadavkou. Na úrovni enterprise už kontrola neslúži iba na zachytenie chyby, ale aj ako dôkaz, ktorý môže preveriť tretia strana alebo audítor. Na úrovni samostatného vývojára ide čisto o schopnosť chybu zachytiť. Treba pomenovať aj medzeru, ktorú normy nechávajú otvorenú: vyžadujú nezávislého kontrolóra, ale neprikazujú, aby každá vrstva kontroly uviedla, čo zo svojej podstaty *nedokáže* odhaliť. Práve dôsledné pomenúvanie slepého miesta každej kontroly je vlastným prínosom tohto kurzu a vrátime sa k nemu v 5. lekcii.

## Čo si z toho odniesť

- Generovanie je lacné, kontrola nie. Pri softvéri vytváranom agentmi je rozhodujúcim obmedzením kapacita overovania, nie schopnosti modelu.
- Objem odovzdanej práce skutočne rastie a výsledok sa opakuje — každý takýto údaj (zlúčené PR, zoznamy zmien, riadky či znaky) je však iba proxy metrika. Ani jeden nemeria hodnotu.
- Kontrolované merania ukazujú pokles kvality aj porozumenia a náklady na horšiu kvalitu pretrvávajú aj po odznení počiatočného zrýchlenia. Rýchlosť berieš na úver a splácaš ju ako technický dlh.
- Vplyv AI na vlastnú rýchlosť nedokážeš spoľahlivo odhadnúť — nameraná chyba bola približne 40 percentuálnych bodov a vývojári nesprávne odhadli dokonca aj smer účinku. Meraj, nespoliehaj sa na pocit.
- Skóre benchmarkov neprežije stret so skutočným životným cyklom vývoja softvéru (Meta: 68% → 19,7%), údaj „% kódu napísaného AI“ závisí od voľby menovateľa a momentálne neexistuje žiadny dôveryhodný benchmark pre programovanie pri najvyspelejších modeloch — pretože zlúčený PR nikdy nebol špecifikáciou.
- Poctivý titulok od autorov najsilnejšieho výsledku v prospech AI znie: objem odovzdanej práce rastie, rast hodnoty nie je preukázaný a o výsledku rozhoduje kontrola.

**[Nové pojmy](../glossary.md#verification-bottleneck)**: úzke miesto overovania, proxy metrika, voľba menovateľa, priepasť medzi benchmarkom a produkciou, skreslenie sebahodnotenia, technický dlh na úver.
