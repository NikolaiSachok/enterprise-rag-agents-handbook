# Slovak naturalness check — pilot lekcia „Používanie nástrojov“ (~15 min)

> **Pre čitateľa (kamarát vývojár, ktorý hovorí po slovensky).** Prečítaj si, prosím, tieto dve stránky
> z pripravovanej slovenskej verzie príručky o AI a **označ všetko, čo znie cudzo** — poangličtene,
> počeštene, strojovo preložené alebo jednoducho „nie po našom“. **Netreba nič opravovať** — stačí to
> označiť (napríklad komentárom „toto by Slovák nepovedal“ alebo podčiarknutím). Ide o to, či to znie ako
> text napísaný slovenským kolegom, nie preložený. Na konci je pár rýchlych áno/nie otázok mierených na
> miesta, pri ktorých máš najväčšie pochybnosti. Zaberie to zhruba pätnásť minút.

Kontext, ktorý pomôže: kniha zámerne **ponecháva veľa anglických odborných termínov** (tak, ako ich vývojári
bežne hovoria). Každý taký termín **raz vysvetlí po slovensky v zátvorke** pri prvom výskyte a ďalej ho už
uvádza samostatne, bez vysvetlivky. Slovenské pojmy zasa pri prvom výskyte nesú anglický originál v zátvorke.
Otázka nie je, či rozumieš jednotlivým slovám — otázka je, či to celé **plynie ako slovenčina**.

*(Stránky ešte nie sú verejne nasadené — slovenská verzia sa spustí neskôr. Preto je celá próza vložená
nižšie, aby sa dala čítať aj offline. Text zodpovedá finálnej redigovanej verzii.)*

---

## Stránka 1 — „Ako model koná vo vonkajšom svete“

V lekcii o agentickom RAG si zachytil kľúčový posun: vyhľadávanie prestalo byť *krokom* a stalo sa
*akciou*, ktorú si model volí v slučke. Lenže vyhľadávanie je len jedna z akcií.

**Tool use** (používanie nástrojov / volanie funkcií) — hovorí sa mu aj **function calling** — je všeobecný
mechanizmus: model dokáže zavolať ľubovoľnú vonkajšiu funkciu. Vyhľadať v znalostnej báze, spustiť SQL dopyt
nad tabuľkou, zavolať HTTP API, použiť kalkulačku, spustiť kód, odoslať e-mail. Vyhľadávanie sa tak ukáže ako
špeciálny prípad — jeden nástroj spomedzi mnohých.

Práve tool use je to, čo mení model z „generátora textu“ na niečo, čo dokáže *konať*: čítať živé dáta,
presne počítať, meniť stav vonkajších systémov.

> ▶ **Video (v angličtine):** Rovnaký mechanizmus z dielne IBM — ako tool call prepojí model s tvojimi
> dátami a systémami.

### Prečo model potrebuje prostredníka — vydáva iba text

Model sám nevykoná nič — iba vydá text. Nesiahne do databázy ani nezavolá API; kód fyzicky nespúšťa. Tool
use je práve ten protokol, ktorý túto medzeru preklenie.

Prebieha v štyroch krokoch. Po prvé, model vydá **štruktúrovaný zámer** (structured intent): „zavolaj
funkciu X s argumentmi Y“. Po druhé, tvoj kód volanie spustí a dostane výsledok. Po tretie, výsledok sa
vráti modelu ako kontext. Po štvrté, model pokračuje — teraz už s výsledkom pred sebou.

Deľba je jasná: model rozhoduje, *čo* zavolať; tvoje behové prostredie volanie vykoná. Model sa reálnych
systémov nikdy nedotkne — a práve toto rozdelenie sa napokon ukáže ako **bezpečnostná hranica** (security
boundary), k čomu sa ešte vrátime.

### Mechanizmus: volanie nástroja

Skladá sa z niekoľkých častí a beží v tej istej slučke ako agentický RAG — len akciou už môže byť čokoľvek.

- **Definícia nástroja (tool definition)** — názov, slovný opis a schéma parametrov (zvyčajne JSON Schema,
  jazyk na opis štruktúry a typov dát): zoznam toho, ktoré nástroje existujú, čo robia a aké argumenty
  prijímajú. Odovzdáš ju modelu spolu s otázkou.
- **Volanie nástroja (tool call)** — namiesto bežného textu (alebo popri ňom) model vydá **structured
  output** (štruktúrovaný výstup): JSON s názvom nástroja a argumentmi.
- **Výsledok nástroja (tool result)** — tvoje behové prostredie nástroj spustí a výsledok pridá do
  rozhovoru ako samostatnú správu.
- Model **pokračuje**: keď vidí výsledok, buď zavolá ďalší nástroj, alebo odpovie.

*(Nasleduje diagram s popismi: „Definície nástrojov“ → „Model“ → „tool call: sql_query(...)“ → „Tvoj kód
spustí dopyt“ → „tool result: 42 riadkov“ → „Model“ → „Odpoveď“.)*

### Definícia nástroja je prompt, nie iba podpis funkcie

Práve v tomto sa AI líši od bežného návrhu API: model si nástroj vyberá a jeho argumenty vypĺňa tak, že
*číta slovný opis* — do tvojej implementácie nedovidí. Názov, text opisu a opisy jednotlivých parametrov sú
presne to, z čoho pravdepodobnostný model usudzuje, *kedy* a *ako* funkciu vyvolať.

Vágny opis znamená, že model zavolá nástroj v nesprávnej chvíli, vyberie nesprávny nástroj alebo vyplní
argumenty nezmyslom. Opisy nástrojov sú preto súčasťou prompt engineeringu (práca s promptom); „volajúci“
tu nie je deterministický kód — je to model, ktorý číta prirodzený jazyk.

### Čo robí nástroj dobrým

- **Jasný, jednoznačný opis** — model rozlišuje nástroje podľa opisu, nie podľa kódu za nimi.
- **Prísne typované, obmedzené parametre** (JSON Schema, `enum`, formáty) zúžia, čo model smie vydať, a
  znížia počet chybných volaní.
- **Málo nástrojov, bez prekryvov.** Tucet funkcií s blízkym významom model mätie a chýb pri výbere
  nástroja (tool selection) pribúda. Sadu nástrojov starostlivo zostavuj, nenafukuj ju.
- **Zrozumiteľné chyby.** Keď nástroj zlyhá, vráť správu, z ktorej sa model dokáže zotaviť („dátum musí byť
  vo formáte `YYYY-MM-DD`“). Slučka sa potom opraví sama: chybné volanie → zrozumiteľná chyba →
  preformulovanie → opakovanie.
- **Správna granularita** — nie príliš jemná (desať volaní na jednu úlohu), ani príliš hrubá (jeden nástroj
  na všetko).

### Kde sa to láme

- **Nesprávny nástroj — alebo žiadny.** Model siahol po nesprávnej funkcii, alebo odpovedal z pamäte
  namiesto použitia nástroja. Rieši to opis a menšia sada nástrojov.
- **Neplatné argumenty** — vymyslené alebo nesprávne parametre. Rieši to prísna schéma, validácia a
  zrozumiteľné chyby na sebaopravu.
- **Dopĺňanie toho, čo vo výsledku nie je.** Model si môže vymyslieť fakty, ktoré vo výsledku nie sú — najmä
  pri nejasnom alebo prázdnom výsledku. Vráť výsledok ako samostatnú správu, výslovne označenú ako výstup
  nástroja; riziko to zníži, no neodstráni.
- **Bezpečnosť — nové a vážne riziko.** Nástroj, ktorý *koná* — zapisuje, odosiela, spúšťa kód — je teraz
  riadený výstupom modelu. A ten výstup sa dá cez **prompt injection** (podvrhnutie inštrukcií do promptu)
  zneužiť, vrátane nepriamej, ukrytej v nájdenom obsahu. Odtiaľ pramení obrana: **least privilege** (princíp
  najmenších oprávnení) — obmedz sadu nástrojov, oddeľ čítacie nástroje od zapisovacích a pri nebezpečných
  akciách vyžaduj potvrdenie. Aj úspešný útok cez prompt injection potom zmôže málo.

### Späť k RAG

Kruh sa uzatvára: *vyhľadávanie je nástroj.* Agentický RAG je špeciálny prípad tool use, kde je hlavným
nástrojom vyhľadávanie.

Keď má agent viac nástrojov, rieši situáciu, v ktorej rôzne otázky potrebujú rôzne zdroje: vyhľadávanie v
znalostnej báze, SQL nad tabuľkami, webové vyhľadávanie na aktuálne informácie, kalkulačka na presný
výpočet. **Router (smerovač)** z predchádzajúcej lekcie je presne to, čo vyberie, ktorý nástroj použiť.

### Čo si odniesť z lekcie

- Tool use (function calling) je všeobecný mechanizmus: model zavolá ľubovoľnú vonkajšiu funkciu a
  vyhľadávanie je jeho špeciálny prípad.
- Model vydá iba zámer — vykoná ho tvoj kód: model rozhoduje „čo“, tvoje behové prostredie rieši „ako“. To
  je zároveň bezpečnostná hranica.
- Mechanizmus je „definícia nástroja → volanie nástroja → výsledok nástroja → pokračuj“; tá istá slučka ako
  pri agentickom RAG, len s ľubovoľnou akciou.
- Definícia nástroja je prompt: model vyberá podľa slov, nie podľa kódu. Dobrý nástroj má jasný opis, prísnu
  schému, je jedným z malého počtu neprekrývajúcich sa nástrojov a vracia zrozumiteľné chyby.
- Nové spôsoby zlyhania: nesprávny nástroj, neplatné argumenty, dopĺňanie toho, čo vo výsledku nie je, a
  bezpečnosť — zapisovací nástroj plus prompt injection, a teda least privilege.

---

## Stránka 2 — „Spoľahlivosť a škálovanie“ (druhá, hlbšia časť lekcie)

Prvá časť rozložila mechanizmus — definícia nástroja (tool definition) → volanie nástroja (tool call) →
výsledok nástroja (tool result) → pokračuj. Táto stránka ten istý okruh rozoberie do posledného detailu: čo
sa deje, keď model vydá viac volaní naraz, ako sa schéma vynucuje token po tokene, ako sa slučka po chybnom
volaní zotaví namiesto toho, aby sa zrútila, a čo sa pokazí, keď sada nástrojov narastie na desiatky. Prvú
časť predpokladáme celý čas — okruh, bezpečnostnú hranicu, „definícia nástroja je prompt“, zoznam znakov
dobrého nástroja — neopakujeme ju, len z nej vychádzame.

### Keď model vydá viac volaní naraz

Jeden krok nie je jedno volanie. Model dokáže v jednej odpovedi vydať niekoľko *nezávislých* volaní —
**paralelné volania nástrojov** (parallel tool calls): tri čítania z databázy, dva dopyty cez API — namiesto
toho, aby ich vydával po jednom vo viacerých krokoch.

Tvoje behové prostredie urobí dve veci v poradí: rozdelí ich (fan-out) — spustí súbežne — a pozbiera ich
späť (fan-in) — zhromaždí každý výsledok a odovzdá ich modelu spolu, skôr než pokračuje. To je tvar
**fan-out / fan-in**: jeden krok sa rozvetví na N paralelných volaní, N výsledkov sa zloží späť do jednej
správy a slučka ide ďalej.

Rozhodujúce je slovo *nezávislé*. Paralelizmus je platný iba vtedy, keď žiadne volanie nepotrebuje výsledok
iného a vedľajší účinok žiadneho z nich nemení to, čo vidí druhé. Túto nezávislosť model predpokladá, keď sa
rozhodne volania zoskupiť — a tvoje behové prostredie ju neoveruje. Nič nekontroluje, či si volania naozaj
neprekážajú; ak áno, nedostaneš chybovú správu, ale **súbeh** (race condition): dve súbežné volania siahnu na
to isté a výsledok začne závisieť od náhodného časovania.

Prepínače tohto správania sa líšia podľa poskytovateľa a na presných názvoch záleží.

**Anthropic Claude** zoskupuje volania štandardne — modely Claude 4 vydajú paralelné volania vždy, keď z
toho požiadavka ťaží. Vypneš to príznakom `disable_parallel_tool_use: true` — a všimni si, kam patrí:
dovnútra objektu `tool_choice`, nie medzi parametre požiadavky na najvyššej úrovni. Pri type `auto` potom
model zavolá nanajvýš jeden nástroj na odpoveď; pri type `any` alebo `tool` práve jeden.

**OpenAI** vystavuje `parallel_tool_calls`, ktorý štandardne dovolí viac volaní na krok; nastavením na
`false` povolíš najviac jedno volanie.

**Gemini** podporuje **parallel function calling** (viac nezávislých funkcií v jednom kroku) a — zámerne
odlíšené — **compositional function calling** (zreťazené, závislé volania), kde sa volania viažu do
postupnosti a výstup jedného je vstupom pre ďalšie: `get_current_location()`, potom `get_weather(location)`.
Prvé je skupina, druhé reťazec závislostí — a práve ich rozlíšenie je jadrom tejto sekcie.

Zbieranie výsledkov sa riadi pevnými pravidlami. U Anthropicu: za každý blok `tool_use` vrátiš jeden
`tool_result`, všetky spolu v nasledujúcej používateľskej správe, každý spárovaný so svojím volaním cez
`tool_use_id`, a každý `tool_result` predchádza akémukoľvek textu v tej správe. Ak si sa rozhodol volanie
nespustiť — povedzme, že si skupinu vykonal postupne a skoršie volanie zlyhalo — aj tak zaň vrátiš
`tool_result` s `is_error: true` a krátkym dôvodom, namiesto toho, aby si ho ticho zahodil. Gemini funguje
v duchu rovnako: každá odpoveď sa priradí k svojmu volaniu cez `id` a vrátiť musíš všetky.

Neparalelizuj **závislé volania** — také, kde jedno potrebuje výsledok predchádzajúceho. To je compositional,
postupné volanie; spusti ho v poradí. Zoskupiť ho je jednoducho chyba, lebo druhé volanie potrebuje argument,
ktorý ešte neexistuje.

Neparalelizuj naslepo ani **zápisy s vedľajším účinkom** (side-effectful writes). Súbežné zápisy do
zdieľaného stavu na seba narazia a poradie naprieč skupinou je nedefinované — nevieš povedať, ktorý dopadol
prvý. Pri zapisovacích nástrojoch buď vypni paralelné volania (`disable_parallel_tool_use` /
`parallel_tool_calls: false`), alebo vykonanie serializuj vo vlastnom behovom prostredí. K tomu sa vrátime
pri idempotencii.

Keď model opakovane zoskupuje volania, ktoré by nemal, dokumentovaná náprava je samotný prompt: pouč ho v
systémovom prompte — „Only batch tool calls that are independent of each other.“ (v preklade: zoskupuj len
volania, ktoré sú navzájom nezávislé). Model zoskupuje na základe predpokladu; ten predpoklad opravíš práve
v systémovom prompte.

*(Nasleduje diagram: „Model“ → tri paralelné „tool call: read_orders / read_inventory / read_pricing“ →
„Tvoje behové prostredie ich spustí súbežne“ → „Pozbieraj každý výsledok“ → „Model pokračuje“.)*

### Ako sa schéma naozaj vynucuje

Argumenty nástroja opisuje **schéma** (schema) — zvyčajne JSON Schema (Gemini používa schému z podmnožiny
OpenAPI). Prvá časť brala túto schému ako typovaný formulár, ktorý model vypĺňa. Je to však viac než
dokumentácia: v **strict mode** (prísny režim) sa schéma *vynucuje* a model nedokáže vydať argumenty, ktoré
ju porušujú.

Mechanizmom je **constrained decoding** (obmedzené dekódovanie). Poskytovateľ tvoju schému skompiluje na
**gramatiku** — formálnu gramatiku, vo všeobecnom prípade bezkontextovú. Na každom kroku dekódovania
vzorkovač zamaskuje každý token, ktorý by pri doterajšom výstupe gramatiku porušil, a vzorkuje len z toho,
čo prežije. Zatváracia zložená zátvorka tam, kde gramatika žiada číslicu, sa medzi ďalšími možnými tokenmi
vôbec neobjaví. Výstup zodpovedá schéme *už svojou konštrukciou* — nie preto, že sa model snažil a mal
šťastie, ani preto, že si ho dodatočne overil a neplatné výstupy si zahodil.

V praxi to vyzerá takto:

- **OpenAI**: `strict: true` vnútri definície funkcie prinúti volania spoľahlivo dodržať schému namiesto
  „ako sa dá“, a to cez **Structured Outputs**, ktoré interne používajú constrained decoding. Dve
  požiadavky: `additionalProperties: false` na každom objekte a každá vlastnosť uvedená ako `required`.
- **Anthropic Claude**: volanie nástrojov v strict mode cez `tool_choice` s `strict: true`.
- **Gemini**: argumenty sú pripnuté na schému z podmnožiny OpenAPI v deklarácii funkcie.

Constrained decoding nie je zadarmo. Čo stojí a kedy ho vynechať:

- **Cena kompilácie pri prvom volaní.** Prvá požiadavka, ktorá nesie *novú* schému, je pomalšia — za cenu
  vyššej latencie sa najprv vypočíta artefakt gramatiky a predspracuje na vzorkovanie; neskoršie požiadavky
  s tou istou schémou nájdu hotový artefakt v cache (vyrovnávacia pamäť) a bežia rýchlo. OpenAI dokumentuje
  presne toto — schéma sa na gramatiku skompiluje, keď ju systém uvidí prvýkrát, potom sa berie z cache.
  Dôsledok je praktický: ak pri každom volaní vytváraš čerstvo vygenerovanú schému, cache si zneplatníš a
  kompilačnú daň platíš zakaždým — cenu, ktorú by inak zaplatila len prvá požiadavka.
- **Nepodporované črty schémy.** Strict mode pokrýva len podmnožinu JSON Schema, a povinné
  `additionalProperties: false` spolu s pravidlom „všetko `required`“ znamenajú, že niektoré konštrukcie
  schémy buď nie sú dostupné, alebo sa musia upraviť, aby sa zmestili.
- **Paralelizmus — fakt, ktorý sa môže časom zmeniť.** Paralelné volania funkcií na OpenAI so strict mode
  pôvodne nefungovali spolu — aby si udržal strict mode, nastavil si `parallel_tool_calls: false`. Neskôr to
  opravili a paralelné volania dnes so strict mode fungujú.

Buď presný v tom, čo ti constrained decoding zaručuje: dá ti *správne sformované, podľa schémy platné*
argumenty (JSON sa naparsuje, typy sedia, enumy sú dodržané). Nezaručí, že argumenty sú *správne*, ani že
model siahol po *správnom* nástroji. Štruktúra nie je sémantika — a tejto medzere sa venuje celá sekcia o
validácii nižšie.

*(Nasleduje diagram: „JSON Schema“ → „Skompiluj na gramatiku“ → „Na každom kroku dekódovania“ → „Kandidátske
ďalšie tokeny“ → „Zamaskuj neplatné tokeny“ → „Vyber platný token“ a späť.)*

### Keď volanie zlyhá — a ako sa cyklus zotaví

Volanie nástroja zlyhá viacerými spôsobmi a hádzať ich do jedného vreca je prvá chyba, lebo zotavenie, ktoré
napraví jeden, iný zhorší. Taxonómia:

- **Chybne sformované argumenty** — argumenty sa nenaparsujú alebo porušujú schému. Constrained decoding im
  z veľkej časti zabráni, ale len pri nástrojoch v strict mode; nástroj bez strict mode môže stále dostať
  nezmysel.
- **Chyba validácie** — argumenty sú správne sformované, no neprejdú tvojimi kontrolami: hodnota mimo
  rozsahu, neznáme id.
- **Výnimka nástroja** — nástroj sa spustil a spadol: `500` z nadväzujúcej služby, zlý dopyt.
- **Vypršanie časového limitu (timeout)** — nástroj neodpovedal v rámci svojho rozpočtu.
- **Prázdny alebo nejednoznačný výsledok** — nástroj nevrátil nič užitočné, alebo niečo, čo si model môže
  zle vyložiť. To je práve riziko domýšľania, ktoré pomenovala prvá časť — model sebavedomo nadväzuje na
  nejasný alebo prázdny výsledok. Patrí do zoznamu, hoci technicky nič nezlyhalo.

Najdôležitejší krok, keď volanie zlyhá, má tvar, s ktorým si sa už stretol. Prvá časť nazvala definíciu
nástroja promptom; o chybe platí to isté. **Chyba ako prompt**: chybu vrátiš modelu ako správu, ktorú vie
prečítať a konať podľa nej — **zotaviteľnú chybu** (recoverable error) formulovanú ako návod („dátum musí
byť `YYYY-MM-DD`“; „neznáme `user_id`, najprv zavolaj `list_users`“), nie nečitateľný výpis zásobníka volaní
a nie holý nenulový návratový kód. Slučka sa potom opraví sama: chybné volanie → zrozumiteľná chyba → model
preformuluje → opakovanie. V podobe od Anthropicu je to `tool_result` s `is_error: true` a poučnou správou;
model v ďalšom kroku vydá opravené volanie.

Nie všetky zlyhania spôsobí model; ostatné treba riešiť inak. Pri **prechodných chybách** — timeout, rate
limit (strop na počet požiadaviek), `5xx` z nadväzujúcej služby — opakuj, ale opakuj s **backoffom**
(postupné predlžovanie intervalu medzi pokusmi): pokusy rozlož v čase, obvykle exponenciálne. Okamžité
opakovanie bez odstupu len zvyšuje záťaž na službu, ktorá už aj tak zápasí, a z krátkeho výkyvu spraví
výpadok.

A nasaď mu strop. **Limit opakovaní** (retry budget) — tvrdý strop na počet pokusov, na jedno volanie aj na
celý beh — zrkadlí rozpočet krokov a rozpočet tokenov z lekcie o plánovaní. Bez stropu sa volanie, ktoré
padá deterministicky, zvrhne na **nezastaviteľnú slučku opakovaní**: agent donekonečna vydáva to isté
volanie odsúdené na neúspech a nikdy neskončí.

Opakovanie sa oplatí len vtedy, keď je vstup doň *iný* — opravený argument alebo prechodná porucha, ktorá
medzičasom pominula. Zopakuj identické volanie po deterministickej chybe a zlyhá rovnako; minul si rozpočet
aj peniaze, aby si sa znova naučil, čo si už vedel. Rozpoznaj prípad bez posunu a zastav sa: chybu ohlás,
odovzdaj ju človeku alebo skús iný nástroj. A pomenuj ju správne — slučka, ktorá sa nezastaví, je **chyba
počas behu** (runtime chyba), nikdy nie „odmietnutie“.

Dve veci, ktoré neopakovať: po prvé, neopakuj deterministickú chybu nezmenenú — nič sa nezmenilo, takže ani
výsledok nie; po druhé, neopakuj zápis s vedľajším účinkom, ktorý mohol čiastočne prejsť, bez záruky
idempotencie — opakovanie môže dvojnásobne uplatniť to, čo prvý pokus už spravil. Opakovania sú na prechodné
poruchy a na argumenty opravené modelom; nie sú spôsob, ako sa vyhnúť oprave volania.

### Kontextová cena desiatok nástrojov

Každá definícia nástroja zaberá tokeny v každej požiadavke: názov, opis a celá schéma parametrov každého
nástroja sa do promptu serializujú pri každom volaní, či sa použijú alebo nie. Tucet nástrojov je **stála
daň** — tokeny, latencia, peniaze — platená bez ohľadu na to, či sa modelu čo i len dotkne. To je konkrétna
cena za „málo neprekrývajúcich sa nástrojov“ z prvej časti.

Daň nie je len finančná. **Výber nástroja** (tool selection) sa s rastúcou sadou zhoršuje: pri mnohých
nástrojoch s blízkym významom model častejšie siahne po nesprávnom a nezavolá nástroj, keď mal — presne tie
zlyhania „nesprávny nástroj“ a „žiadne volanie“, na ktoré upozornila prvá časť. Veľká plochá sada nástrojov
aktívne zhoršuje agentovu schopnosť vyberať.

Náprava vo veľkom je prestať posielať každý nástroj zakaždým. **Dynamic tool loadout** (dynamický výber
nástrojov) — hovorí sa mu aj **tool-RAG** — vyhľadá len nástroje relevantné pre aktuálny dopyt a načíta do
požiadavky práve tie. Je to RAG uplatnený na sadu nástrojov namiesto dokumentov: krok vyhľadávania nad
tvojím katalógom nástrojov, ktorý pri každom kroku drží aktívnu sadu malú a zameranú na aktuálnu úlohu.

**Menné priestory (namespacing)** riešia ten istý problém z druhej strany. Daj nástrojom štruktúrované názvy
a zoskup ich — podľa domény, podľa servera — aby s nimi vedeli pracovať aj model, aj tvoj krok vyhľadávania;
keď je katalóg veľký, oreže to kolízie názvov a prekryvy.

Za istou hranicou odpoveď nie je dlhší zoznam. Keď jeden agent obsluhuje desiatky nástrojov, rozdeľ ho na
**špecializovaných agentov**, každý s malou, ortogonálnou sadou nástrojov — argument špecializácie z lekcie
o multiagentových systémoch. Zoznam nástrojov, ktorý stále rastie, je sám signálom, že jeden agent už
nestačí.

Rovnaká opatrnosť platí aj v opačnom smere. Nesiahaj po tool-RAG predčasne. Pri hrstke nástrojov je to
zbytočná zložitosť s vlastným rizikom zlyhania — krok vyhľadávania, ktorý teraz môže minúť cieľ a skryť
nástroj, ktorý model potreboval. Najjednoduchšie, čo funguje, je plná statická sada nástrojov; dynamický
výber sa oplatí až vtedy, keď je katalóg naozaj veľký. Tá istá disciplína ako všade v druhej časti: vezmi
najjednoduchšiu úroveň, ktorá úlohu vyrieši.

### Idempotencia a zápisy s trvalým následkom

Bezpečnosť opakovania nie je vlastnosťou tvojej politiky opakovaní. Je vlastnosťou *nástroja*. Čítacie a
zapisovacie nástroje sa v opakovaní líšia: znova spustiť čítanie ťa nestojí nič okrem latencie, kým znova
spustiť zápis — vytvoriť objednávku, odoslať e-mail, strhnúť z karty — môže vedľajší účinok zdvojiť. Či je
opakovanie bezpečné, rozhoduje to, čo nástroj robí, nie to, ako ho opakuješ.

Potrebná vlastnosť je **idempotency** (idempotencia): spustiť zápis dvakrát s rovnakým vstupom má rovnaký
účinok ako spustiť ho raz. Štandardným mechanizmom je **idempotency key** (kľúč idempotencie) — volajúci
pripojí ku každej zamýšľanej operácii jedinečný kľúč a server opakovania toho istého kľúča odfiltruje. S
kľúčom je opakovanie po nejednoznačnom vypršaní časového limitu bezpečné: ak prvý pokus naozaj prešiel,
druhý neurobí nič.

Pri zápisoch, ktoré sú nebezpečné alebo nevratné, rozdeľ operáciu na dve. **Dry-run** (nanečisto) vypočíta a
ukáže, čo *by sa* stalo, bez akéhokoľvek účinku; **krok potvrdenia** (confirm) to potom vykoná — a práve
tento krok potvrdenia býva bodom, kde akciu schvaľuje človek (human-in-the-loop). Je to least privilege
(princíp najmenších oprávnení) z prvej časti a jej „pri nebezpečných akciách vyžaduj potvrdenie“, pretavené
do tvaru dvoch volaní.

Toto oddelenie drž štruktúrne, ako argumentovala prvá časť: čítacie a zapisovacie nástroje udržuj oddelené,
aby si agentovi mohol dať široký prístup na čítanie a zápisy pustil cez bránu. Least privilege prestane byť
heslom vo chvíli, keď sú samotné nástroje rozdelené presne pozdĺž hranice, ktorú chceš strážiť.

Tu sa téma paralelizmu prepája s touto sekciou. Skupina fan-out má nedefinované poradie, takže dva zápisy
vhodené do jednej skupiny sa môžu dostať do súbehu (race condition) alebo dopadnúť mimo poradia. Nikdy
nedávaj zápisy závislé od poradia či konfliktné do tej istej paralelnej skupiny — serializuj ich, alebo pri
zapisovacích nástrojoch vypni paralelné volania. Paralelizmus bol predtým výhrou; pri zápisoch je to pasca.

A pravidlo, ktoré viaže opakovania späť k zápisom: nespoliehaj sa na opakovania pri zapisovacom nástroji,
ktorý nie je idempotentný a nemá kľúč. Opakovanie po vypršaní časového limitu, ktoré v skutočnosti prešlo,
uplatní účinok dvakrát — druhé strhnutie, druhý e-mail. Najprv vyrieš idempotenciu, až potom dovoľ
opakovania. Toto poradie sa neobracia.

### Validácia argumentov predtým, než konáš

Constrained decoding ti dá správne sformované argumenty. Nedá ti *prijateľné* — a ten rozdiel rozoznáš medzi
tým, keď „model vydal argumenty“, a tým, keď „ty spustíš nástroj“. **Argumenty validuj pred vykonaním
volania** (argument validation, validácia argumentov): vlož bránu, ktorá argumenty preskúma predtým, než sa
spustí akýkoľvek vedľajší účinok. Brána má dve úrovne a každá chytá niečo iné.

- **Validácia na úrovni schémy** — typy, povinné polia, enumy, formáty. Constrained decoding to pri
  generovaní z veľkej časti pokryje, no validuj aj tak: pre nástroje bez strict mode a ako obranu do hĺbky.
- **Sémantická validácia** — argumenty sú správne typované a v danom kontexte aj tak nesprávne: id, ktoré
  neexistuje, dátum v minulosti, suma nad limitom, cesta mimo dovoleného koreňa. Väčšinu z toho schéma
  vyjadriť nevie; musí to spraviť tvoj kód.

Keď validácia argument odmietne, vracia sa späť rovnako ako chyba pri vykonaní. Neúspešná kontrola vráti
zotaviteľnú správu, ktorú model prečíta — opäť chyba ako prompt — takže model opraví argument a volanie
zopakuje. Tá istá samoopravná slučka, len teraz stráži hranicu pred vykonaním namiesto toho, aby chybu
chytala až po ňom.

---

## Rýchle otázky (áno / nie + prípadná poznámka)

1. **Natívne slovenské tvary termínov.** „**Definícia nástroja**“, „**volanie nástroja**“, „**výber
   nástroja**“, „**výsledok nástroja**“ (angličtina je v zátvorke pri prvom výskyte). Znejú prirodzene,
   alebo by si radšej nechal celý termín po anglicky („tool definition“, „tool call“)? **áno (prirodzené) /
   nie**

2. **Ponechané anglické termíny v tele.** „strict mode“, „constrained decoding“, „tool-RAG“, „idempotency
   key“, „parallel function calling“ — čítajú sa ako bežná reč slovenského vývojára, alebo je toho priveľa?
   **áno / nie**

3. **„Behové prostredie“ (runtime).** Sedí ti to slovo pre *runtime*, alebo by si povedal skôr „runtime“?
   **áno (sedí) / nie**

4. **Sloveso „vydať“.** „Model **vydá** volanie“, „**vydá** zámer“, „**vydá** výstup“. Znie prirodzene, alebo
   by si volil iné sloveso? **áno / nie**

5. **Vymyslené obrazy.** „**Chyba ako prompt**“, „**stála daň**“, „**bezpečnostná hranica**“, „**súbeh**
   (race condition)“, „jeden krok sa **rozvetví** na N volaní … N výsledkov sa **zloží späť**“. Sedia po
   slovensky, alebo znejú preložene? **áno (sedia) / nie**

6. **Slová pre zlyhania.** Text rozlišuje „**chyba validácie**“, „**chyba počas behu**“, „**výpadok**“ a
   slovo „**zlyhanie**“ používa len ako názov kategórie. Je ten rozdiel zrozumiteľný a prirodzený? **áno /
   nie**

7. **Nadpisy a opakujúce sa bloky.** „**Čo si odniesť z lekcie**“, „**Nové pojmy → Glosár**“, „**(Video je
   v angličtine.)**“, bočný štítok „**Spoľahlivosť a škálovanie**“. Čítajú sa prirodzene? **áno / nie**

8. **Typografia a celkový dojem.** Slovenské úvodzovky „…“ a dlhá pomlčka „—“ vo vsuvkách vyzerajú správne?
   A prijal by si tieto dve stránky ako napísané slovenským kolegom (nie strojovo preložené)? Kde si sa
   **potkol** alebo zaváhal? **áno / nie + kde**

*Ďakujem! Stačia odpovede a čokoľvek, čo ti udrelo do očí — netreba návrhy opráv.*
