# Kontrola prirodzenosti slovenčiny — pilotná lekcia „Používanie nástrojov“

> **Pre slovenského vývojára.** Prečítaj si, prosím, tieto dve stránky zo slovenskej verzie
> príručky o AI a **označ všetko, čo znie cudzo** — poangličtene, počeštene, strojovo preložené alebo
> jednoducho „nie po našom“. **Netreba nič opravovať** — stačí to označiť (napríklad komentárom „toto by
> Slovák nepovedal“ alebo podčiarknutím). Ide o to, či to znie ako text napísaný slovenským kolegom, nie
> preložený. Na konci je dvanásť rýchlych otázok (väčšinou áno/nie) k pasážam, pri ktorých máme
> najväčšie pochybnosti.
> Zaberie to zhruba dvadsať minút.

Kontext, ktorý pomôže: kniha zámerne **ponecháva časť anglických odborných termínov** (tak, ako ich
vývojári bežne hovoria). Pri prvom výskyte sa pri každom takom termíne uvedie slovenské vysvetlenie
v zátvorke; ďalej sa termín píše už samostatne, bez vysvetlivky. Pri slovenských pojmoch sa pri prvom
výskyte uvádza aj anglický originál v zátvorke. Otázka nie je, či rozumieš jednotlivým slovám — otázka je,
či to celé **plynie ako slovenčina**.

*(Obe stránky sú už verejne dostupné v slovenskej verzii príručky; celý text je uvedený nižšie, aby sa dal
čítať aj offline a rovno doň písať poznámky. Je to znenie, ktoré je práve nasadené — a práve preto nás
zaujíma, či obstojí.)*

---

## Stránka 1 — „Ako model koná vo vonkajšom svete“

V lekcii o agentickom RAG si si všimol kľúčovú zmenu: vyhľadávanie prestalo byť *krokom* a stalo sa
*akciou*, ktorú si model volí v slučke. Lenže vyhľadávanie je len jedna z akcií.

**Tool use** (používanie nástrojov) — hovorí sa mu aj **function calling** (volanie funkcií) — je
všeobecný mechanizmus: model dokáže zavolať ľubovoľnú vonkajšiu funkciu. Vyhľadať dokument v znalostnej
báze, spustiť SQL dopyt nad tabuľkou, zavolať HTTP API, použiť kalkulačku, spustiť kód, odoslať e-mail.
Vyhľadávanie je teda len špeciálny prípad — jeden nástroj spomedzi mnohých.

Práve vďaka tool use prestáva byť model iba „generátorom textu“: dokáže *konať* — čítať živé dáta,
presne počítať, meniť stav vonkajších systémov.

> ▶ Ten istý mechanizmus vo výklade IBM: ako volanie nástroja prepojí model s tvojimi dátami a systémami.
> (Video je v angličtine.)

### Prečo model potrebuje prostredníka — sám generuje iba text

Model sám nevykoná nič — iba generuje text. Nesiahne do databázy ani nezavolá API; nijaký kód nespúšťa.
Tool use je protokol, ktorý túto medzeru prekleňuje.

Prebieha v štyroch krokoch. Po prvé, model vyjadrí **štruktúrovaný zámer** (structured intent): „zavolaj
funkciu X s argumentmi Y“. Po druhé, tvoj kód volanie vykoná a dostane výsledok. Po tretie, výsledok sa
vráti modelu ako kontext. Po štvrté, model pokračuje — teraz už s výsledkom pred sebou.

Deľba práce je jasná: model rozhoduje, *čo* zavolať; tvoja aplikácia volanie vykoná. Model sa reálnych
systémov nikdy nedotkne — a práve toto rozdelenie sa napokon ukáže ako **bezpečnostná hranica** (security
boundary), k čomu sa ešte vrátime.

### Mechanizmus: volanie nástroja

Mechanizmus sa skladá z niekoľkých častí a beží v tej istej slučke ako agentický RAG — len akciou už
môže byť čokoľvek.

- **Definícia nástroja (tool definition)** — názov, slovný opis a schéma parametrov (zvyčajne JSON Schema,
  jazyk na opis štruktúry a typov dát). Z definícií sa model dozvie, aké nástroje má k dispozícii, čo
  robia a aké argumenty prijímajú. Odovzdáš ich modelu spolu s otázkou.
- **Volanie nástroja (tool call)** — namiesto bežného textu (alebo popri ňom) model vygeneruje
  **štruktúrovaný výstup** (structured output): JSON s názvom nástroja a argumentmi.
- **Výsledok nástroja (tool result)** — tvoja aplikácia nástroj spustí a výsledok pridá do rozhovoru ako
  samostatnú správu.
- Model **pokračuje**: keď vidí výsledok, buď zavolá ďalší nástroj, alebo odpovie.

*(Nasleduje diagram s popismi: „Definície nástrojov“ → „Model“ → „tool call: sql_query(...)“ → „Tvoj kód
spustí dopyt“ → „tool result: 42 riadkov“ → „Model“ → „Odpoveď“.)*

### Definícia nástroja je prompt, nie iba signatúra funkcie

Práve v tomto sa návrh nástrojov pre model líši od bežného návrhu API: model si nástroj vyberá a jeho
argumenty vypĺňa tak, že *číta slovný opis* — do tvojej implementácie nedovidí. Pravdepodobnostný model
usudzuje z názvu, z textu opisu a z opisov jednotlivých parametrov, *kedy* a *ako* funkciu zavolať.

Keď je opis vágny, model zavolá nástroj v nesprávnej chvíli, vyberie nesprávny nástroj alebo vygeneruje
nezmyselné argumenty. Opisy nástrojov sú preto súčasťou prompt engineeringu (práca s promptom); „volajúci“
tu nie je deterministický kód — je to model, ktorý číta prirodzený jazyk.

### Čo robí nástroj dobrým

- **Jasný, jednoznačný opis** — model rozlišuje nástroje podľa opisu, nie podľa kódu za nimi.
- **Prísne typované, obmedzené parametre** (JSON Schema, `enum`, formáty) zúžia, čo model smie
  vygenerovať, a znížia počet chybných volaní.
- **Málo nástrojov, bez prekryvov.** Tucet funkcií s blízkym významom model mätie a chýb pri výbere
  nástroja (tool selection) pribúda. Sadu nástrojov starostlivo zostavuj, nenafukuj ju.
- **Zrozumiteľné chyby.** Keď nástroj zlyhá, vráť správu, vďaka ktorej sa slučka dokáže z chyby zotaviť
  („dátum musí byť vo formáte `YYYY-MM-DD`“). Model potom môže volanie opraviť a skúsiť ho znova: chybné
  volanie → zrozumiteľná chyba → oprava volania → opakovanie.
- **Správna granularita** — nie príliš jemná (desať volaní na jednu úlohu), ani príliš hrubá (jeden
  nástroj na všetko).

### Kde sa to láme

- **Nesprávny nástroj — alebo žiadny.** Model siahol po nesprávnej funkcii alebo odpovedal z pamäte
  namiesto použitia nástroja. Rieši to jasnejší opis a menšia sada nástrojov.
- **Neplatné argumenty** — vymyslené alebo nesprávne parametre. Rieši to prísna schéma, validácia a
  zrozumiteľné chyby, podľa ktorých model dokáže chybné volanie opraviť.
- **Domýšľanie si toho, čo vo výsledku nie je.** Model si k výsledku môže domyslieť fakty, ktoré v ňom
  nie sú — najmä pri nejasnom alebo prázdnom výsledku. Vráť výsledok ako samostatnú správu, výslovne
  označenú ako výstup nástroja; riziko to zníži, no neodstráni.
- **Bezpečnosť — nové a vážne riziko.** O tom, či sa nástroj, ktorý *koná* — zapisuje, odosiela, spúšťa
  kód — naozaj zavolá a s akými argumentmi, rozhoduje teraz výstup modelu. A ten výstup sa dá cez **prompt
  injection** (podvrhnutie inštrukcií do promptu) zmanipulovať — aj nepriamo, inštrukciami ukrytými v
  nájdenom obsahu. Obranou je **princíp najnižších oprávnení** (least privilege): obmedz sadu nástrojov,
  oddeľ čítacie nástroje od zapisovacích a pri nebezpečných akciách vyžaduj potvrdenie. Aj úspešný útok
  cez prompt injection má potom iba obmedzené následky.

### Späť k RAG

Kruh sa uzatvára: *vyhľadávanie je nástroj.* Agentický RAG je špeciálny prípad tool use, kde je hlavným
nástrojom vyhľadávanie.

Keď má agent viac nástrojov, rieši situáciu, v ktorej rôzne otázky potrebujú rôzne zdroje: vyhľadávanie
v znalostnej báze, SQL nad tabuľkami, webové vyhľadávanie na aktuálne informácie, kalkulačka na presný
výpočet. Vhodný nástroj vyberá práve **router (smerovač)** z predchádzajúcej lekcie.

### Čo si odniesť z lekcie

- Tool use (function calling) je všeobecný mechanizmus: model zavolá ľubovoľnú vonkajšiu funkciu a
  vyhľadávanie je jeho špeciálny prípad.
- Model zámer iba vyjadrí — samotné volanie vykoná tvoj kód: model rozhoduje „čo“, tvoja aplikácia rieši
  „ako“. To je zároveň bezpečnostná hranica.
- Mechanizmus je „definícia nástroja → volanie nástroja → výsledok nástroja → pokračuj“; tá istá slučka
  ako pri agentickom RAG, len s ľubovoľnou akciou.
- Definícia nástroja je prompt: model vyberá podľa slov, nie podľa kódu. Dobrý nástroj má jasný opis a
  prísnu schému, patrí do malej sady bez prekryvov a vracia zrozumiteľné chyby.
- Nové spôsoby zlyhania: nesprávny nástroj, neplatné argumenty, domýšľanie si toho, čo vo výsledku nie
  je. K tomu pribúda nové bezpečnostné riziko: zapisovací nástroj sa dá zneužiť cez prompt injection —
  obranou je princíp najnižších oprávnení.

**Nové pojmy** → **Glosár**: tool use / function calling, tool definition, tool call, tool result, tool
selection, JSON Schema, structured output.

---

## Stránka 2 — „Spoľahlivosť a škálovanie“ (druhá, hlbšia časť lekcie)

Časť 1 vysvetlila samotný mechanizmus: definícia nástroja (tool definition) → volanie nástroja (tool
call) → výsledok nástroja (tool result) → pokračuj. Táto stránka ho rozoberá podrobnejšie: čo sa deje,
keď model vytvorí viac volaní naraz; ako sa schéma vynucuje token po tokene; ako sa slučka po chybnom
volaní zotaví namiesto toho, aby sa zrútila; a čo sa pokazí, keď sada nástrojov narastie na desiatky.
Predpokladáme, že obsah prvej časti poznáš. Slučku, bezpečnostnú hranicu, zásadu „definícia nástroja je
prompt“ ani zoznam znakov dobrého nástroja nevysvetľujeme znova — iba na ne nadväzujeme.

### Keď model vytvorí viac volaní naraz

Jeden krok neznamená jedno volanie. Model dokáže v jednej odpovedi vytvoriť niekoľko *nezávislých*
volaní — **paralelné volania nástrojov** (parallel tool calls): tri čítania z databázy, dva dopyty cez
API — namiesto toho, aby ich posielal po jednom v samostatných krokoch.

Tvoja aplikácia volania rozdelí a spustí súbežne (fan-out); potom všetky výsledky pozbiera (fan-in) a
odovzdá ich modelu naraz — až potom slučka pokračuje. Tomu sa hovorí **fan-out / fan-in**: jeden krok sa
rozvetví na N paralelných volaní a N výsledkov sa spojí do jednej správy.

Rozhodujúce je slovo *nezávislé*. Volania má zmysel púšťať paralelne iba vtedy, keď žiadne nepotrebuje
výsledok iného a vedľajší účinok (side effect) žiadneho z nich nemení to, čo vidia ostatné. Model túto
nezávislosť predpokladá už vo chvíli, keď sa rozhodne volania zoskupiť — a tvoja aplikácia ju nijako
neoveruje. Nič nekontroluje, či si volania naozaj neprekážajú; ak si prekážajú, nedostaneš chybovú
správu, ale **race condition** (súbehovú chybu): dve súbežné volania pristupujú k rovnakému zdieľanému
prostriedku a výsledok závisí od náhodného časovania.

Prepínače tohto správania sa líšia podľa poskytovateľa a na presných názvoch záleží.

**Anthropic Claude** volania zoskupuje už v predvolenom nastavení — modely Claude 4 vytvoria paralelné
volania vždy, keď sa to pri požiadavke oplatí. Vypneš to príznakom `disable_parallel_tool_use: true` — a
všimni si, kam patrí: dovnútra objektu `tool_choice`, nie medzi parametre požiadavky na najvyššej úrovni.
Pri `tool_choice` typu `auto` potom model zavolá v jednej odpovedi nanajvýš jeden nástroj; pri type `any`
alebo `tool` práve jeden.

**OpenAI** ponúka parameter `parallel_tool_calls`; v predvolenom stave dovoľuje viac volaní v jednom
kroku, hodnotou `false` obmedzíš model na najviac jedno volanie.

**Gemini** podporuje **parallel function calling** — viac nezávislých funkcií v jednom kroku — a popri
ňom zámerne odlišuje **compositional function calling**: zreťazené, závislé volania, ktoré nasledujú za
sebou, pričom výstup jedného je vstupom pre ďalšie: `get_current_location()`, potom
`get_weather(location)`. V prvom prípade ide o skupinu nezávislých volaní, v druhom o reťaz závislých
volaní — a práve toto rozlíšenie rozhoduje o tom, čo vôbec smieš púšťať paralelne.

Zbieranie výsledkov sa riadi pevnými pravidlami. V prípade Anthropicu vrátiš za každý blok `tool_use`
jeden `tool_result`. Všetky výsledky posielaš spolu v nasledujúcej používateľskej správe a každý páruješ
s príslušným volaním cez `tool_use_id`; v tej správe sa musia nachádzať pred akýmkoľvek textom. Ak si sa
rozhodol volanie nespustiť — povedzme, že si skupinu vykonal postupne a niektoré skoršie volanie skončilo
chybou — aj tak zaň vrátiš `tool_result` s `is_error: true` a krátkym dôvodom, namiesto toho, aby si ho
bez ohlásenia vynechal. Gemini používa podobný princíp párovania: každá odpoveď sa priradí k svojmu
volaniu cez `id` a vrátiť musíš všetky.

Neparalelizuj **závislé volania** — také, kde jedno potrebuje výsledok predchádzajúceho. To je
compositional function calling — reťaz postupných volaní: spúšťaj ich jedno po druhom. Zoskupiť ich je
jednoducho chyba, lebo druhé volanie potrebuje argument, ktorý ešte neexistuje.

Neparalelizuj naslepo ani **zápisy s vedľajším účinkom** (side-effectful writes). Súbežné zápisy do
zdieľaného stavu si navzájom prekážajú a poradie v rámci skupiny nie je definované — nevieš povedať,
ktorý zápis sa vykonal prvý. Pri zapisovacích nástrojoch buď vypni paralelné volania
(`disable_parallel_tool_use` / `parallel_tool_calls: false`), alebo ich vykonávaj postupne vo vlastnom
kóde. K tomu sa vrátime pri idempotencii (idempotency).

Keď model opakovane zoskupuje volania, ktoré by zoskupovať nemal, oprav to priamo v systémovom prompte —
presne tento postup uvádza aj dokumentácia: „Only batch tool calls that are independent of each other.“
(v preklade: zoskupuj len volania, ktoré sú navzájom nezávislé). Model volania zoskupuje na základe
vlastného predpokladu o ich nezávislosti; v systémovom prompte tento predpoklad nahradíš výslovným
pravidlom.

*(Nasleduje diagram: „Model“ → tri paralelné „tool call: read_orders / read_inventory / read_pricing“ →
„Tvoja aplikácia ich spustí súbežne“ → „Zber všetkých výsledkov“ → „Model pokračuje“.)*

### Ako sa schéma naozaj vynucuje

Argumenty nástroja opisuje **schéma** (schema) — zvyčajne JSON Schema (Gemini používa schému z podmnožiny
OpenAPI). Zatiaľ sme s ňou zaobchádzali ako s typovaným formulárom, ktorý model vypĺňa. Je to však viac
než dokumentácia: v **prísnom režime** (strict mode) sa schéma *vynucuje* a model nedokáže vygenerovať
argumenty, ktoré ju porušujú.

Mechanizmom je **obmedzené dekódovanie** (constrained decoding). Poskytovateľ tvoju schému skompiluje na
**gramatiku** — formálnu gramatiku, vo všeobecnom prípade bezkontextovú. Na každom kroku dekódovania
potom vzorkovač zamaskuje každý token, ktorý by pri doterajšom výstupe gramatiku porušil, a vyberá už len
spomedzi tokenov, ktoré ostali povolené. Zatváracia zložená zátvorka tam, kde gramatika žiada číslicu, sa
medzi ďalšími možnými tokenmi vôbec neobjaví. Výstup zodpovedá schéme *už svojou konštrukciou* — nie
preto, že sa model snažil a mal šťastie, ani preto, že si ho dodatočne overil a neplatné výstupy zahodil.

V praxi to vyzerá takto:

- **OpenAI**: `strict: true` vnútri definície funkcie prinúti volania schému spoľahlivo dodržiavať —
  namiesto toho, aby sa model o to iba pokúšal. Interne to zabezpečujú **Structured Outputs**, ktoré
  používajú obmedzené dekódovanie. Podmienky sú dve: `additionalProperties: false` na každom objekte a
  každá vlastnosť uvedená v `required`.
- **Anthropic Claude**: nástroje v prísnom režime zapneš cez `tool_choice` so `strict: true`.
- **Gemini**: argumenty musia zodpovedať schéme z podmnožiny OpenAPI uvedenej v deklarácii funkcie.

Obmedzené dekódovanie nie je zadarmo. Má svoju cenu aj obmedzenia — a niekedy je lepšie ho vynechať:

- **Cena kompilácie pri prvom volaní.** Prvá požiadavka s *novou* schémou je pomalšia: poskytovateľ z nej
  najprv zostaví gramatiku a pripraví ju na vzorkovanie. Ďalšie požiadavky s tou istou schémou už bežia
  rýchlo: použije sa gramatika uložená v cache (vyrovnávacej pamäti). Presne toto dokumentuje aj OpenAI:
  schéma sa na gramatiku skompiluje pri prvom výskyte a ďalej sa už berie z cache. Praktický
  dôsledok: ak schému pri každom volaní generuješ nanovo, cache ti nikdy nepomôže a úvodná latencia
  kompilácie sa opakuje pri každej požiadavke.
- **Nepodporované konštrukcie schémy.** Prísny režim pokrýva len podmnožinu JSON Schema a povinné
  `additionalProperties: false` spolu s pravidlom „všetko `required`“ znamenajú, že niektoré konštrukcie
  schémy nepoužiješ vôbec a iné musíš preformulovať, aby zodpovedali podporovanej podmnožine.
- **Paralelizmus — fakt, ktorý sa môže časom zmeniť.** Paralelné volania funkcií s prísnym režimom na
  OpenAI pôvodne nefungovali — kto chcel prísny režim, musel nastaviť `parallel_tool_calls: false`.
  Neskôr to OpenAI opravilo a paralelné volania dnes s prísnym režimom fungujú.

Ujasni si, čo presne ti obmedzené dekódovanie zaručuje: dostaneš *správne sformované, podľa schémy
platné* argumenty — JSON sa naparsuje, typy sedia, enumy sú dodržané. Nezaručí ti, že argumenty sú
*správne*, ani že model siahol po *správnom* nástroji. Štruktúra nie je sémantika — a práve tejto medzere
sa venuje celá sekcia o validácii nižšie.

*(Nasleduje diagram: „JSON Schema“ → „Kompilácia na gramatiku“ → „Na každom kroku dekódovania“ →
„Kandidáti na ďalší token“ → „Maskovanie neplatných tokenov“ → „Výber platného tokenu“ a späť.)*

### Keď volanie zlyhá — a ako sa slučka zotaví

Volanie nástroja môže zlyhať viacerými spôsobmi a hádzať ich do jedného vreca je prvá chyba: postup,
ktorý vyrieši jeden druh chyby, môže iný druh zhoršiť. Taxonómia:

- **Chybne sformované argumenty** — argumenty sa nenaparsujú alebo porušujú schému. Obmedzené dekódovanie
  im z veľkej časti zabráni, ale len pri nástrojoch v prísnom režime; nástroj bez prísneho režimu môže
  stále dostať neplatné alebo nezmyselné argumenty.
- **Chyba validácie** — argumenty sú správne sformované, no neprejdú tvojimi kontrolami: hodnota mimo
  rozsahu, neznáme id (viac v sekcii o validácii nižšie).
- **Výnimka nástroja** — nástroj sa spustil a spadol: `500` z nadväzujúcej služby, zlý dopyt.
- **Vypršanie časového limitu (timeout)** — nástroj neodpovedal v stanovenom čase.
- **Prázdny alebo nejednoznačný výsledok** — nástroj nevrátil nič užitočné, alebo vrátil niečo, čo si
  model môže zle vyložiť. To je práve riziko domýšľania, ktoré pomenovala prvá časť — model sebavedomo
  nadväzuje na nejasný alebo prázdny výsledok. Patrí do zoznamu, hoci technicky nič nezlyhalo.

Najdôležitejší postup pri zlyhanom volaní už poznáš. Prvá časť nazvala definíciu nástroja promptom; o
chybe platí to isté. **Chyba ako prompt**: modelu vrátiš **zotaviteľnú chybu** (recoverable error) —
správu, ktorú vie prečítať a podľa ktorej vie konať, formulovanú ako návod („dátum musí byť
`YYYY-MM-DD`“; „neznáme `user_id`, najprv zavolaj `list_users`“), nie nečitateľný výpis zásobníka volaní
a nie holý nenulový návratový kód. Model potom môže volanie opraviť a zopakovať: chybné volanie →
zrozumiteľná chyba → oprava volania → opakovanie. V API Anthropicu je to `tool_result` s `is_error:
true` a správou, ktorá modelu povie, čo opraviť; model v ďalšom kroku odošle opravené volanie.

Nie každú chybu spôsobí model; tie ostatné sa riešia inak. Pri **prechodných chybách** — timeout, rate
limit (strop na počet požiadaviek), `5xx` z nadväzujúcej služby — opakuj volanie, ale s **backoffom**
(postupné predlžovanie intervalu medzi pokusmi): pokusy rozlož v čase, zvyčajne exponenciálne. Okamžité
opakovanie bez odstupu iba zvyšuje zaťaženie služby, ktorá má už aj tak problémy — a krátkodobý výkyv tak
môže prerásť do výpadku.

Počet pokusov zároveň zhora obmedz. **Limit opakovaní** (retry budget) — tvrdý strop na počet pokusov,
na jedno volanie aj na celý beh — je obdobou rozpočtu krokov a rozpočtu tokenov z lekcie o plánovaní.
Bez stropu sa opakovanie volania, ktoré zlyháva deterministicky, zvrhne na **nezastaviteľnú slučku**:
agent donekonečna odosiela to isté volanie odsúdené na neúspech a nikdy neskončí.

Opakovať sa oplatí len vtedy, keď sa medzitým niečo zmenilo — model opravil argument alebo prechodná
porucha pominula. Ak identické volanie zopakuješ po deterministickej chybe, zlyhá presne rovnako;
spotreboval si pokusy aj peniaze a nedozvedel si sa nič nové. Keď opakovanie nič nemení, zastav sa: chybu
ohlás, odovzdaj ju človeku alebo skús iný nástroj. A pomenuj to správne — slučka, ktorá sa nezastaví, je
**chyba počas behu** (runtime error), nikdy nie „odmietnutie“ zo strany modelu.

V dvoch prípadoch volanie neopakuj: po deterministickej chybe bez zmeny vstupu — nič sa nezmenilo, takže
sa nezmení ani výsledok; a pri zápise s vedľajším účinkom, ktorý mohol čiastočne prebehnúť a nemá záruku
idempotencie — opakovanie by tú istú operáciu mohlo vykonať druhý raz. Opakovania sú na prechodné poruchy
a na argumenty, ktoré model opravil; nie sú náhradou za opravu volania. Ako to vyzerá pri zápisoch,
rozoberá sekcia o idempotencii nižšie.

### Kontextová cena desiatok nástrojov

Každá definícia nástroja zaberá tokeny v každej požiadavke: názov, opis a celá schéma parametrov sa do
promptu serializujú pri každom volaní, či sa použijú, alebo nie. Tucet nástrojov je
**stála réžia** — tokeny, latencia, peniaze — a platíš ju bez ohľadu na to, či model niektorý z nástrojov
vôbec použije. Presne túto cenu mala prvá časť na mysli, keď odporúčala „málo nástrojov, bez prekryvov“.

Réžia nie je len finančná. **Výber nástroja** (tool selection) sa s rastúcou sadou zhoršuje: pri mnohých
významovo blízkych nástrojoch model častejšie siahne po nesprávnom alebo nepoužije nijaký, hoci by mal —
presne zlyhania typu „nesprávny nástroj — alebo žiadny“, na ktoré upozornila prvá časť. Čím väčšia a
plochšia (neštruktúrovaná) sada, tým horšie agent vyberá.

Pri veľkej sade pomáha neposielať všetky nástroje pri každej požiadavke. **Dynamický výber nástrojov**
(dynamic tool loadout) — hovorí sa mu aj **tool-RAG** — vyhľadá k aktuálnemu dopytu len relevantné
nástroje a do požiadavky načíta práve tie. Je to RAG uplatnený na nástroje namiesto dokumentov: nad
katalógom nástrojov beží krok vyhľadávania, ktorý pred každým krokom slučky vyberie malú sadu
zodpovedajúcu aktuálnej úlohe.

**Menné priestory (namespacing)** riešia ten istý problém z druhej strany. Daj nástrojom štruktúrované
názvy a zoskup ich — podľa domény, podľa servera, z ktorého nástroje pochádzajú — aby ich model aj
vyhľadávací krok dokázali spoľahlivo rozlíšiť; pri veľkom katalógu tak ubudne kolízií názvov aj prekryvov.

Od určitého počtu nástrojov už dlhší zoznam nepomôže. Keď jeden agent pracuje s desiatkami nástrojov,
rozdeľ prácu medzi **špecializovaných agentov**, každého s malou, ortogonálnou sadou nástrojov — to
zodpovedá princípu špecializácie z lekcie o multiagentových systémoch. Zoznam nástrojov, ktorý stále
rastie, je sám osebe signál, že jeden agent už nestačí.

Pozor však aj na opačný extrém: po tool-RAG nesiahaj predčasne. Pri hrstke nástrojov je to zbytočná
zložitosť s vlastným rizikom zlyhania — pribudne krok vyhľadávania, ktorý sa môže pomýliť, a nástroj,
ktorý model potreboval, sa do požiadavky vôbec nedostane. Kým katalóg nie je naozaj veľký, úplne stačí
plná statická sada; dynamický výber sa oplatí až potom. Aj tu platí rovnaká zásada ako v celej Časti II
príručky: zvoľ najjednoduchšie riešenie, ktoré na úlohu stačí.

### Idempotencia a zápisy s trvalým následkom

To, či je bezpečné volanie zopakovať, neurčuje tvoja politika opakovaní — určuje to sám *nástroj*.
Čítacie a zapisovacie nástroje sa pri opakovaní správajú rozdielne: zopakovať čítanie ťa nestojí nič
okrem latencie; zopakovať zápis — vytvoriť objednávku, odoslať e-mail, strhnúť peniaze z karty — môže tú
istú operáciu vykonať dvakrát. O bezpečnosti opakovania rozhoduje to, čo nástroj robí, nie spôsob, akým
volanie opakuješ.

Potrebná vlastnosť je **idempotencia** (idempotency): zápis spustený dvakrát s rovnakým vstupom má
rovnaký účinok, ako keby bežal raz. Štandardný mechanizmus je **kľúč idempotencie** (idempotency key):
volajúci pripojí ku každej zamýšľanej operácii jedinečný kľúč; operáciu s kľúčom, ktorý už videl, server
druhý raz nevykoná. S kľúčom je bezpečné zopakovať volanie aj po vypršaní časového limitu, keď nevieš, či
prvý pokus prešiel: ak naozaj prešiel, druhý pokus nič nespraví.

Zápisy, ktoré sú nebezpečné alebo nevratné, rozdeľ na dva kroky. **Skúšobné spustenie** (dry-run)
vypočíta a ukáže, čo *by sa* stalo, bez akéhokoľvek účinku; **krok potvrdenia** (confirm) to potom naozaj
vykoná — a práve pri potvrdení zvyčajne akciu schvaľuje človek (human-in-the-loop). Je to princíp
najnižších oprávnení (least privilege) z prvej časti aj jej pravidlo „pri nebezpečných akciách vyžaduj
potvrdenie“ — len zapísané ako dve volania namiesto jedného.

Toto oddelenie zabuduj priamo do sady nástrojov, ako sme vysvetlili v prvej časti: čítacie a zapisovacie
nástroje drž oddelené, aby si agentovi mohol dať široký prístup na čítanie, zatiaľ čo každý zápis
prechádza samostatnou kontrolou. Princíp najnižších oprávnení prestane byť iba frázou vo chvíli, keď
nástroje rozdelíš presne na hranici, ktorú chceš strážiť.

Tu sa vraciame k paralelizmu zo začiatku stránky. Skupina fan-out nemá definované poradie: medzi dvoma
zápismi v tej istej skupine môže vzniknúť race condition, alebo sa zápisy vykonajú v inom poradí, než
čakáš. Zápisy, ktoré závisia od poradia alebo si navzájom prekážajú, nikdy nedávaj do jednej paralelnej
skupiny — vykonávaj ich postupne, alebo pri zapisovacích nástrojoch paralelné volania vypni. Pri
čítaniach bol paralelizmus výhodou; pri zápisoch je pascou.

Pre zápisy platí ešte jedno pravidlo: nespoliehaj sa na opakovania pri zapisovacom nástroji, ktorý nie
je idempotentný a nemá kľúč. Ak volanie v skutočnosti prešlo a iba vypršal časový limit, opakovanie
vykoná operáciu druhý raz — druhé strhnutie z karty, druhý e-mail. Najprv vyrieš idempotenciu, až potom
povoľ opakovania; naopak to nefunguje.

### Validácia argumentov predtým, než konáš

Obmedzené dekódovanie ti dá správne sformované argumenty — nie *prijateľné*. **Validácia argumentov**
(argument validation) má preto svoje miesto medzi okamihom, keď model argumenty vygeneruje, a okamihom,
keď nástroj spustíš: argumenty skontroluj skôr, než nastane akýkoľvek vedľajší účinok. Kontrola má dve
úrovne a každá zachytáva iné chyby.

- **Validácia na úrovni schémy** — typy, povinné polia, enumy, formáty. Obmedzené dekódovanie to pri
  generovaní z veľkej časti pokryje, no argumenty validuj aj tak: kvôli nástrojom bez prísneho režimu a
  ako ďalšiu vrstvu ochrany.
- **Sémantická validácia** — argumenty sú správne typované a v danom kontexte aj tak nesprávne: id,
  ktoré neexistuje, dátum v minulosti, suma nad limitom, cesta mimo povoleného koreňového adresára.
  Väčšinu z toho schéma vyjadriť nevie; musí to spraviť tvoj kód. Presne na túto medzeru upozornila
  sekcia o schéme — štruktúra prejde, sémantika nie.

Ak argument neprejde validáciou, vráť modelu zrozumiteľnú správu, podľa ktorej vie konať — opäť chyba
ako prompt, rovnako ako keby zlyhalo samotné vykonanie. Model argument opraví a volanie zopakuje. Je to
tá istá slučka zotavenia, len chybu zachytíš ešte pred spustením nástroja, nie až po ňom.

Hranica medzi oboma úrovňami je teda jasná. Netlač sémantické kontroly do schémy — väčšina sa v nej
vyjadriť nedá. A validáciu nevynechávaj len preto, že beží obmedzené dekódovanie: to zaručí správne
sformované argumenty, nikdy nie vecne správne. Obe úrovne sa dopĺňajú a ani jedna nezastúpi druhú.

### Čo si odniesť z lekcie

- V jednom kroku model vytvorí viac nezávislých volaní; tvoja aplikácia ich spustí súbežne a výsledky
  pozbiera naraz. Platí to len vtedy, keď volania jedno od druhého naozaj nezávisia a navzájom si
  neprekážajú — túto nezávislosť nič automaticky nekontroluje; overiť ju je úloha tvojej aplikácie.
- Prísny režim (strict mode) vynucuje schému cez obmedzené dekódovanie: schéma sa skompiluje na gramatiku
  a vzorkovač zamaskuje každý token, ktorý by ju porušil. Zaručuje správne sformované argumenty, nie ich
  vecnú správnosť — a prvé volanie s novou schémou je pomalšie, kým sa hotová gramatika neuloží do cache.
- Slučka sa po zlyhanom volaní zotaví, keď chybu vrátiš ako prompt — čitateľnú správu, podľa ktorej
  model dokáže volanie opraviť. Pri prechodných poruchách opakuj volanie s backoffom a s tvrdým limitom
  opakovaní; opakovať volanie po deterministickej chybe bez zmeny vstupu je nekonečná slučka, nie
  zotavenie.
- Každá definícia nástroja zaberá tokeny v každej požiadavke a presnosť výberu s rastúcou sadou klesá.
  Na dynamický výber nástrojov (tool-RAG) prejdi, až keď je katalóg naozaj veľký — a keď ani to nestačí,
  rozdeľ prácu medzi špecializovaných agentov namiesto toho, aby si jedného stále rozširoval.
- Čítanie je bezpečné opakovať; zápis iba vtedy, keď je idempotentný — daj zapisovacím nástrojom kľúč
  idempotencie, nebezpečné zápisy rozdeľ na skúšobné spustenie a potvrdenie a dva zápisy nikdy nedávaj do
  tej istej paralelnej skupiny.
- Validuj argumenty pred vykonaním, na dvoch úrovniach: schémou skontroluj tvar, sémantickou kontrolou
  význam. Obmedzené dekódovanie pokryje prvú, druhú musí pokryť tvoj kód; a chybu validácie vráť modelu
  rovnako ako chybu pri vykonaní.

**Nové pojmy** → **Glosár**: parallel tool calls, constrained decoding, strict mode / Structured Outputs,
idempotency / idempotency key, tool-RAG / dynamic tool loadout, argument validation, retry budget.

---

## Rýchle otázky (áno / nie + prípadná poznámka)

1. **Prirodzené slovenské podoby termínov.** Podoby „definícia nástroja“, „volanie nástroja“, „výber
   nástroja“, „výsledok nástroja“ (angličtina je v zátvorke pri prvom výskyte) — znejú prirodzene,
   alebo by si radšej nechal celý termín po anglicky („tool definition“, „tool call“)? **áno (prirodzené) /
   nie**

2. **Odborné pojmy uvádzané po slovensky.** V texte sa používajú podoby „**prísny režim** (strict mode)“,
   „**obmedzené dekódovanie** (constrained decoding)“, „**idempotencia** (idempotency)“, „**kľúč
   idempotencie** (idempotency key)“ — po slovensky, s angličtinou v zátvorke pri prvom výskyte.
   Povedal by si to takto, alebo by si v reči nechal anglický termín („strict mode“, „constrained
   decoding“)? **áno (slovensky sedí) / nie**

3. **Podoba princípu „least privilege“.** Po slovensky sa v bezpečnosti pre tento princíp používa
   viacero podôb:

   - princíp najmenších oprávnení
   - princíp minimálnych oprávnení
   - zásada najnižších privilégií
   - princíp najnižších oprávnení

   Jeden fakt, ktorý sa oplatí mať pri ruke: podobu **zásada najnižších privilégií** používa záväzný
   právny text (vyhláška NBÚ) aj názov článku na slovenskej Wikipédii. Ostatné podoby sa bežne vyskytujú
   v odbornej praxi.

   a) Ktorú z nich by si **povedal** nahlas kolegovi? ______________________
   b) Ktorú by si **napísal** do odborného textu (dokumentácia, príručka)? ______________________
   c) Znie ti niektorá z nich cudzo, kostrbato alebo úradnícky — ktorá a prečo? ______________________

4. **Race condition.** Kniha ponecháva anglický termín „**race condition** (súbehová chyba)“. V texte:
   „nedostaneš chybovú správu, ale race condition (súbehovú chybu): dve súbežné volania pristupujú
   k rovnakému zdieľanému prostriedku a výsledok závisí od náhodného časovania“. Sedí ti to slovenské
   vysvetlenie v zátvorke — povedal by to tak slovenský vývojár? **áno / nie**

5. **„Tvoja aplikácia“ / „tvoj kód“** pre časť systému, ktorá volania vykonáva: „model rozhoduje, čo
   zavolať; tvoja aplikácia volanie vykoná“. Znie to prirodzene? **áno / nie**

6. **Fan-out.** Text píše: „Tvoja aplikácia volania rozdelí a spustí súbežne (fan-out); potom všetky
   výsledky pozbiera (fan-in)“. Povedal by si to tak? **áno / nie**

7. **Slovesá opisujúce činnosť modelu.** „model **vyjadrí** štruktúrovaný zámer“, „model **vygeneruje**
   štruktúrovaný výstup“, „model v ďalšom kroku **odošle** opravené volanie“. Sedia tie slovesá, alebo by
   si niekde povedal iné? **áno / nie**

8. **Slová pre zlyhania.** Text rozlišuje „**chybu validácie**“ a „**chybu počas behu** (runtime error)“;
   inde použije aj slovo „**výpadok**“ („krátkodobý výkyv tak môže prerásť do výpadku“). O kategóriách
   hovorí súhrnne („**nové spôsoby zlyhania**“, „**nesprávny nástroj — alebo žiadny**“). Je ten rozdiel
   zrozumiteľný a prirodzený? **áno / nie**

9. **Slovné obrazy.** Sedia tieto výrazy po slovensky, alebo znejú preložene?
   Pri každom výraze označ áno / nie a prípadne dopíš poznámku.

   a) **chyba ako prompt** — **áno / nie** ______________________
   b) **stála réžia** — **áno / nie** ______________________
   c) **bezpečnostná hranica** — **áno / nie** ______________________
   d) **rozvetvenie a spojenie výsledkov (fan-out/fan-in)** — v texte: „jeden krok sa rozvetví na N
      paralelných volaní a N výsledkov sa spojí do jednej správy“ — **áno / nie** ______________________
   e) **signatúra funkcie** — **áno / nie** ______________________

10. **Nadpisy a opakujúce sa bloky.** Znejú tieto opakujúce sa prvky prirodzene?
    Pri každom výraze označ áno / nie a prípadne dopíš poznámku.

    a) nadpis **Čo si odniesť z lekcie** — **áno / nie** ______________________
    b) pätka **Nové pojmy → Glosár** — **áno / nie** ______________________
    c) poznámka pri videu **(Video je v angličtine.)** — **áno / nie** ______________________
    d) názov druhej stránky **Spoľahlivosť a škálovanie** — **áno / nie** ______________________

11. **Typografia.** Slovenské úvodzovky „…“ a dlhá pomlčka „—“ vo vsuvkách. Vyzerá to správne? **áno /
    nie**

12. **Celkový dojem.** Prijal by si tieto dve stránky ako napísané slovenským kolegom (nie strojovo
    preložené)? Kde si sa **potkol** alebo zaváhal? **áno / nie + kde**

*Ďakujem! Stačia odpovede a čokoľvek, čo ti udrelo do očí — netreba návrhy opráv.*
