---
title: "Príprava je dôležitejšia než model"
sidebar_position: 4
---

# Príprava je dôležitejšia než model

Väčšina rozhovorov o kódovacích agentoch sa točí okolo dvoch otázok: ktorý model zvoliť a ako naformulovať prompt. Oboje je nesprávna páka. Najsilnejší dôkaz v tejto lekcii ukazuje inam — na *rozsah*, ktorý agentovi zveríš, a na *prostredie*, ktoré mu pripravíš skôr, než napíše prvý riadok. Keď toto nastavíš dobre, obyčajný model prekoná ten najlepší, čo sa bez prípravy zmieta naprázdno. A v tej prvej zručnosti je skrytá druhá: správne prečítať číslo o vlastnom úspechu je samo osebe súčasťou prípravy, lebo najpovzbudivejšie číslo v odbore sa zároveň najľahšie skopíruje nesprávne. Stupne z Lekcie 2 — `MEASURED`, `REPORTED`, `ASSERTED` (namerané / hlásené / tvrdené) — idú s každým číslom nižšie.

## Príprava takmer zdvojnásobila úspešnosť agenta

Dôkaz z prvej ruky, ktorý v tomto kurze váži najviac, nie je laboratórna štúdia — je to blog jedného inžiniera. Stephen Toub z Microsoftu zverejnil desať mesiacov behu agenta — GitHubovho Copilot Coding Agent — proti repozitáru `dotnet/runtime`, reálnemu, veľkému a kriticky dôležitému open-source projektu: **878 pull requestov od agenta**, aj s mierami zlúčenia, mierami vrátenia, záťažou revízie i zlyhaniami (`MEASURED`, marec 2026). Ukrytá je v ňom najprenosnejšia lekcia celého kurzu a Toub ju hovorí bez okolkov: *„ak si mám z tejto skúsenosti odniesť jednu vec, je to táto: príprava je dôležitejšia než model."*

Číslo za tou vetou je prekvapivé. Skôr než agentovi nastavil prostredie, jeho úspešnosť bola **38,1 %**. Potom — s nastaveným firewallom, napísaným súborom pokynov a schopnosťou zostaviť projekt, spustiť testy a stiahnuť si potrebné nástroje — to bolo **69 %**. Jeho vlastná diagnóza je celá lekcia v jednom obraze: *„pridali sme do tímu nového vývojára a povedali mu, nech opravuje chyby, no nedali sme mu, ako zostaviť projekt, ako ho otestovať či stiahnuť si nástroje, ktoré potrebuje."* Príprava takmer zdvojnásobila úspešnosť agenta. Ten rozdiel je väčší než akékoľvek vylepšenie modelu a než účinok ktoréhokoľvek randomizovaného experimentu v celej dôkazovej báze tohto kurzu — a nestojí nič okrem pozornosti. Dvojčlenný tím ho môže mať celý hneď v prvý deň.

## Číslo, ktoré nesmieš skopírovať

Ten istý článok uvádza aj čosi ešte lákavejšie — a tu sa z lekcie o nastavení stáva lekcia o čítaní. Zo zlúčených pull requestov od agenta bolo vrátených iba **0,6 %** — tri z 535 — oproti **0,8 %** u pull requestov od ľudí za to isté obdobie. Je lákavé to číslo prevziať a čakať ho aj od vlastných agentov. Presne to je tá nebezpečná chyba, kvôli ktorej táto lekcia existuje.

To `0,6 %` nie je vlastnosť agenta. Je to vlastnosť revíznej brány repozitára `dotnet/runtime` — a cena tej brány je vidieť v tom istom článku. Pull requesty od agenta pritiahli v priemere **16,5 revíznych pripomienok oproti 12,4** u ľudských, teda asi o tretinu viac. Ľudskí recenzenti dopisovali kód priamo do **52,3 % agentových pull requestov oproti 10,3 %** tých, čo napísali ľudia — päťnásobne častejšie. A **32 % agentových pull requestov padlo skôr, než sa vôbec zlúčilo** (zlúčilo sa 67,9 % oproti 87,1 % u ľudí). Nízka miera vrátenia je dôkaz, že revízna brána funguje, nie že výstup agenta bol dobrý. Kvalita bola zaplatená ľudskou pozornosťou a tento článok je dosť čestný na to, aby ti ten účet ukázal.

Toub zároveň odmieta porovnanie, ktoré by väčšina ľudí spravila. Agentove a ľudské pull requesty sú podľa neho *„zásadne odlišné populácie pod odlišným selekčným tlakom… ľudia si sami vyberajú zložitú prácu náročnú na úsudok, kým [agent] dostáva ohraničenejšie úlohy."* Nečítaj teda `67,9 %` proti `87,1 %` ako porovnanie za rovnakých podmienok; úlohy boli pre agenta vybrané. Toub je úprimný aj o zvyšku rozsahu: agent bežal **iba na Linuxe**, článok *„sa nepokúša vyčerpávajúco kvantifikovať všetky následné dôsledky na kvalitu"* nad rámec vrátení a *„neanalyzuje výpočtové náklady."* Skopíruj jeho disciplínu v príprave. Neskopíruj jeho mieru vrátenia ako očakávanie — priniesol by si si číslo bez brány, ktorá ho vytvorila. Toto je disciplína čítania pôvodných zdrojov z Lekcie 2, obrátená na číslo z prvej ruky.

## Začni tam, kde je rozsah známy

Ak je príprava najväčšia páka, prvé miesto, kde za ňu potiahnuť, je rozsah. Čo robím skôr, než agentovi čokoľvek zverím: odmietam mu dať otvorený cieľ — začínam tam, kde je problém ohraničený a kde už viem, ako vyzerá „hotovo". Je to stará múdrosť v novom kabáte. Jeden praktik, ktorý píše verejnú sériu o vývoji s AI na prvom mieste, Andrey Beloborodov, ju formuluje ako zásadu *„s vyše dvadsaťročnou históriou"*: bez špecifikácie dostaneš na výstupe nezmysel (`ASSERTED` — jeho rámovanie, podané ako skúsenosť, nie ako meranie). Tracker alebo nástroj na financie vieš odovzdať za studena; niečo, čo musíš pestovať a udržiavať, nie.

Pôvodný dôkaz ukazuje tým istým smerom, a to nezávisle. Toub hlási, že agent *„zápasí s problémami, ktoré si vyžadujú architektonický úsudok… voľbu správneho tvaru API podľa reálnych vzorcov používania, predvídanie reťazových dôsledkov naprieč platformami"* a *„vie byť lenivý… robí minimum, len aby požiadavke vyhovel"* (`REPORTED`). Prečítaj to oproti tomu, kde malé tímy reálne trávia dni — architektonická práca na existujúcom kóde (brownfield) — a výstraha zostrie: agenti zápasia presne tam, kde leží tá ťažká práca. Preto prácu ohranič skôr, než ju zadáš. V praxi je zvládnuteľný rozsah (úlohy) taký, ktorý má deklarované vstupy a výstupy, pomenovaný artefakt, čo musí vzniknúť, a kontrolu, ktorá rozhodne, či prešla — a predovšetkým bránu na schválenie človekom na hranici *požiadaviek*, skôr než sa postaví čokoľvek drahé. Odvetvie tú poslednú bránu volá schválenie požiadaviek alebo stage-gate; je to tá jediná brána, ktorú nikdy nedeleguješ, lebo z nej sa odvíja každý neskorší artefakt.

## Najprv architektúra — a čestný príbeh o slučke

Druhá páka je návrh. Pred kódom si architektúru zapíšem a potom ju nechám roztrhať na kúsky. Pomenovaná podoba tohto postupu je stará a dobre podložená: najprv návrh, potom kód, zachytené v **ADR (Architecture Decision Record)** — vzore Michaela Nygarda z roku 2011, keď sa každé rozhodnutie zapíše aj s jeho kontextom a dôsledkami, aby neskorší čitateľ (alebo neskorší agent) videl, *prečo* nejaké obmedzenie platí, a potichu ho pri optimalizácii nezahodil.

Najčestnejší opis toho, ako sa to robí, prichádza opäť od Beloborodova — a je cenný práve preto, že je to jediné miesto, kde praktik ukazuje vlastnú metódu, ako *zlyháva*. Jeho postup: ťažké otázky návrhu si zodpovedz sám, výsledok podaj AI v režime tvrdého kritika, oprav, čo nájde, podaj to *druhému* modelu na kritiku a opakuj slučku, kým naozaj necítiš, že celku rozumieš. Potom sa pustil do toho, čo nazval klasikou — tenký chatbot nad API, s trochou biznis logiky a s vyhľadávaním nad databázou znalostí — plus jeden ambiciózny, sotva zmapovaný problém modelovania navrch. Výsledok, ako ho podáva on: **tri iterácie**, kým z toho vyšlo niečo súvislé, hoci každý model mu tvrdil, že architektúra je zdravá, a skončil pri siedmich vrstvách pamäte tam, kde dúfal v jednu. Na otázku, prečo to neurobil jediným promptom, odpovedá odzbrojujúco: *„neviem, ale mne to nefungovalo a pochybujem, že sa to dá."*

Ohodnoť to opatrne. Je to jediný sebahlásený opis, neoveriteľný, a jeho širšie tvrdenia — dvoj- až desaťnásobné zrýchlenie, sedem vrstiev „blízko mozgu" — sú `ASSERTED` bez merania, takže ich neberieme ako fakt. Príbeh si však *zaslúži* jedno poučenie, ktoré nevysloví žiaden štandard architektúry: ani zdravo vyzerajúca architektúra nezaručí úspech na prvý pokus. To, že jej každý model dal zelenú, ju neuchránilo od troch prechodov. Nie je to argument proti tomu, aby si navrhoval najprv — je to argument pre *slučku*. Ten istý tvar sa objavuje aj v disciplinovanej produkčnej praxi: pomenuj jednu kanonickú referenčnú implementáciu na každý vzor, lebo N agentov, čo číta ten istý text, vyrobí N rozbiehavých štruktúr, a každý zamietnutý návrh si zapíš *aj so zlyhaním, ktoré ho zabilo*, aby ho už nikto znova nenavrhol.

:::tip[▶ Video]

<YouTube id="CdBtNQZH8a4" title="What are Microservices? — IBM Technology" />

Krátke vysvetlenie od IBM o tom, ako sa systém rozloží na služby — konkrétny príklad práve tých rozhodnutí „najprv návrh, potom kód", ktoré táto lekcia káže spraviť a zapísať skôr, než agent začne stavať. (Video je v angličtine.)

:::

## Prečo „príprava", a nie „model"

Existuje hlbší dôvod, prečo je páka príprava, a nie voľba modelu. Harness (obväzba/lešenie agenta) okolo neho — jeho pravidlá, nástroje a zábrany — v sebe nesie predpoklady, ktoré zastarávajú. Inžinieri Anthropicu to hovoria priamo: *„harnessy v sebe nesú predpoklady, ktoré zastarávajú, ako sa modely zlepšujú,"* a *„každý komponent… v sebe nesie predpoklad o tom, čo model sám nezvládne"* (`REPORTED`). Ich konkrétny príklad: starší model uzatváral prácu predčasne, ako sa mu plnil kontext, tak harness na to dostal opravu; pri ďalšom modeli to správanie zmizlo a z opravy sa stala mŕtva záťaž, ktorá silnejší model už len brzdila.

To nie je len historka od dodávateľa. Nezávislá štúdia držala model konštantný a menila iba harness naprieč 35 po sebe idúcimi vydaniami jedného kódovacieho nástroja v príkazovom riadku, a kvalita sa aj tak hýbala (`MEASURED`, *„Don't Blame the Large Language Model,"* arXiv:2607.03691, júl 2026): praktici hlásia regresie po aktualizácii obväzby a spoľahlivo z nich obviňujú model namiesto obväzby. Toto je zastarávanie harnessu — komponenty harnessu v sebe kódujú predpoklady o hraniciach modelu, ktoré časom vypršia. Dôsledok pre teba je, že príprava nie je nikdy jednorazová. Každé pravidlo a každý komponent harnessu má dátum spotreby a potrebuje revíziu, ktorá sa spýta, či si svoje miesto ešte zaslúži — a práve tam nadväzuje Lekcia 4 (pamäť projektu) a Lekcia 5 (pravidlá, ktoré vydržia).

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Nemenná zásada platí na každej škále: **agent s neohraničeným rozsahom úlohy vytvára neohraničené riziko a nastavenie, ktoré mu dáš do rúk, je tá páka.** So škálou sa mení len to, kto nastavenie vlastní a ako sa dokazuje.

- **Soloista.** Mechanizmus je návyk ohraničovať rozsah, zapísaný dokument o architektúre, ktorý agenti naozaj čítajú, a build a testy, čo si agent vie spustiť sám. Čomu bráni: zlyhaniu „nový vývojár bez nástrojov" — agent sa zmieta, lebo si nevie zostaviť ani overiť vlastnú prácu, presne tej medzere medzi Toubovými `38,1 %` a `69 %`.

- **Malý tím.** Pridaj spoločnú revíziu návrhu skôr, než sa čokoľvek zadá, a jednu kanonickú referenčnú implementáciu na forkovanie. Čomu bráni: tomu, že viacero agentov číta ten istý textový zámer a vyrobí viacero rozbiehavých architektúr, ktoré treba potom ručne zosúladiť.

- **Enterprise.** Z revízie návrhu sa stáva rada pre riadenie zmien a z rozhodovacích dokumentov knižnica ADR; architektúra vlastní prierezové rozhodnutia, tímy vlastnia svoje ohraničené kontexty. Čomu bráni: neohraničenému blast radius (rozsahu škôd) z neohraničenej agentovej práce na zdieľaných systémoch. Tu platí to, čo kurz stavia znova a znova: knižnica ADR je čiastočne o *dôkaze* — auditovateľnom zázname, ktorý vie niekto preveriť dávno po rozhodnutí — kým soloistov návyk ohraničovať rozsah je čistá *schopnosť*, ktorá mení to, čo agent dnes smie bezpečne spraviť.

## Čo si odniesť z lekcie

- Najväčšia páka na úspech agenta nie je model — je to nastavenie a rozsah. Toubova práca na prostredí posunula úspešnosť agenta z `38,1 %` na `69 %`, väčší skok než akékoľvek vylepšenie modelu v dôkazoch, a pre malý tím zadarmo hneď v prvý deň.
- Čísla z prvej ruky čítaj rovnako opatrne ako čísla od dodávateľov. Miera vrátenia `0,6 %` v repozitári `dotnet/runtime` je vlastnosťou jeho revíznej brány, nie jeho agenta; cena tej brány — o tretinu viac revíznych pripomienok, ľudia dopisujúci do viac než polovice agentových pull requestov, tretina zabitá pred zlúčením — je vytlačená rovno vedľa nej.
- Začni tam, kde je rozsah známy. Agenti zápasia presne tam, kde treba architektonický úsudok, tak úlohu ohranič, deklaruj jej vstupy a výstupy a drž bránu na schválenie človekom na hranici požiadaviek.
- Navrhuj pred kódom a aj tak počítaj so slučkou. Aj architektúra, ktorú každý model nazve zdravou, môže potrebovať viacero prechodov — a práve *preto* slučka existuje, nie je to dôvod návrh preskočiť.
- Príprava nie je jednorazová. Harnessy v sebe nesú predpoklady, ktoré vypršia, ako sa modely zlepšujú, takže každé pravidlo a každá zábrana potrebuje pravidelnú revíziu, či ešte platí.

**Nové termíny:** príprava je dôležitejšia než model (nastavenie a rozsah hýbu úspechom viac než voľba modelu), zásluha brány, nie agenta (nízke číslo o zlyhaní, ktoré patrí revíznej bráne, nie agentovi), zvládnuteľný rozsah (úlohy) (začať tam, kde je problém ohraničený, s bránou na požiadavky), najprv architektúra (so slučkou) (navrhovať pred kódom, no prijať, že aj zdravo vyzerajúci návrh potrebuje iteráciu), zastarávanie harnessu (komponenty obväzby kódujú predpoklady o hraniciach modelu, ktoré vypršia).
