# Slovak naturalness check — pilot lesson „Tool use" (~10 min)

> **For the reader (a Slovak-speaking developer friend).** Prečítaj si, prosím, tieto dve krátke stránky
> z pripravovanej slovenskej verzie príručky o AI a **označ všetko, čo znie cudzo** — poangličtene,
> počeštene, strojovo preložené alebo jednoducho „nie po našom". **Netreba nič opravovať** — stačí to
> označiť (stačí komentár typu „toto by Slovák nepovedal" alebo podčiarknutie). Ide o to, či to znie ako
> text napísaný slovenským kolegom, nie preložený. Na konci je 8 rýchlych áno/nie otázok na miesta, kde si
> najmenej istí. Zaberie to ~10 minút.

Kontext, ktorý pomôže: kniha zámerne **ponecháva veľa anglických odborných termínov** (tak, ako ich
vývojári bežne hovoria) a každý z nich **raz vysvetlí po slovensky v zátvorke** pri prvom výskyte, ďalej ho
už používa holý. Otázka nie je, či rozumieš anglickým slovám — otázka je, či to celé **plynie ako slovenčina**.

*(Stránky ešte nie sú verejne nasadené — slovenská verzia sa spustí neskôr. Preto je celá próza vložená
nižšie, aby sa dala čítať aj offline.)*

---

## Stránka 1 — „Ako model koná vo vonkajšom svete"

V lekcii o agentickom RAG si zachytil kľúčový posun: vyhľadávanie prestalo byť *krokom* a stalo sa
*akciou*, ktorú si model volí vnútri slučky. Lenže vyhľadávanie je len jedna z akcií.

**Tool use** (používanie nástrojov / volanie funkcií) — hovorí sa mu aj **function calling** — je ten
všeobecný mechanizmus: model dokáže zavolať ľubovoľnú vonkajšiu funkciu. Vyhľadať v znalostnej báze,
spustiť SQL dopyt nad tabuľkou, zavolať HTTP API, použiť kalkulačku, spustiť kód, odoslať e-mail.
Vyhľadávanie sa tak ukáže ako špeciálny prípad — jeden nástroj spomedzi mnohých.

Práve tool use je to, čo mení model z „generátora textu" na niečo, čo dokáže *konať*: čítať živé dáta,
presne počítať, meniť stav vonkajších systémov.

> ▶ **Video (v angličtine):** Rovnaký mechanizmus z dielne IBM — ako tool call prepojí model s tvojimi
> dátami a systémami.

### Prečo model potrebuje prostredníka — vydáva iba text

Model sám nevykoná nič — iba vydá text. Nesiahne do databázy ani nezavolá API; kód fyzicky nespúšťa. Tool
use je práve ten protokol, ktorý túto medzeru preklenie.

Priebeh má štyri kroky. Po prvé, model vydá **štruktúrovaný zámer** (structured intent): „zavolaj funkciu X
s argumentmi Y". Po druhé, tvoj kód volanie spustí a dostane výsledok. Po tretie, výsledok sa vráti modelu
ako kontext. Po štvrté, model pokračuje — teraz už s výsledkom pred sebou.

Deliaca čiara je ostrá: model rozhoduje, *čo* zavolať; tvoje behové prostredie volanie vykoná. Model sa
reálnych systémov nikdy nedotkne — a práve toto rozdelenie sa napokon ukáže ako **bezpečnostná hranica**
(security boundary), k čomu sa ešte vrátime.

### Mechanizmus: tool call

Skladá sa z niekoľkých častí a beží v tej istej slučke ako agentický RAG — len akciou už môže byť čokoľvek.

- **Tool definition** (opis nástroja) — názov, slovný opis a schéma parametrov (zvyčajne JSON Schema, jazyk
  na opis štruktúry a typov dát): „menu" toho, ktoré nástroje existujú, čo robia a aké argumenty prijímajú.
  Odovzdáš ho modelu spolu s otázkou.
- **Tool call** (volanie nástroja) — namiesto bežného textu (alebo popri ňom) model vydá **structured
  output** (štruktúrovaný výstup): JSON s názvom nástroja a argumentmi.
- **Tool result** (výsledok nástroja) — tvoje behové prostredie nástroj spustí a výsledok pridá do
  rozhovoru ako samostatnú správu.
- Model **pokračuje**: keď vidí výsledok, buď zavolá ďalší nástroj, alebo odpovie.

*(Nasleduje diagram s popismi: „Opisy nástrojov" → „Model" → „tool call: sql_query(...)" → „Tvoj kód spustí
dopyt" → „tool result: 42 riadkov" → „Model" → „Odpoveď".)*

### Tool definition je prompt, nie iba podpis funkcie

Práve tu AI vnáša hlavný rozdiel oproti bežnému návrhu API: model si nástroj vyberá a jeho argumenty vypĺňa
tak, že *číta slovný opis* — do tvojej implementácie nedovidí. Názov, text opisu a opisy jednotlivých
parametrov sú presne to, z čoho pravdepodobnostný model usudzuje, *kedy* a *ako* funkciu vyvolať.

Vágny opis znamená, že model zavolá v nesprávnej chvíli, siahne po nesprávnom nástroji alebo vyplní
argumenty nezmyslom. Opisy nástrojov sú preto súčasťou prompt engineeringu (práca s promptom); „volajúci"
tu nie je deterministický kód — je to model, ktorý číta prirodzený jazyk.

### Čo robí nástroj dobrým

- **Jasný, jednoznačný opis** — model rozlišuje nástroje podľa opisu, nie podľa kódu za nimi.
- **Prísne typované, obmedzené parametre** (JSON Schema, `enum`, formáty) zúžia, čo model smie vydať, a
  znížia počet chybných volaní.
- **Málo nástrojov, bez prekryvov.** Tucet funkcií s blízkym významom modelu zamotá hlavu a chyby tool
  selection (výber nástroja) rastú. Súbor starostlivo zostavuj, nenafukuj ho.
- **Zrozumiteľné chyby.** Keď nástroj zlyhá, vráť správu, z ktorej sa model dokáže zotaviť („dátum musí byť
  vo formáte `YYYY-MM-DD`"). Slučka sa potom opraví sama: chybné volanie → zrozumiteľná chyba →
  preformulovanie → opakovanie.
- **Správna granularita** — nie príliš jemná (desať volaní na jednu úlohu), ani príliš hrubá (jeden nástroj
  na všetko).

### Kde sa to láme

- **Nesprávny nástroj — alebo žiadny.** Model siahol po nesprávnej funkcii, alebo odpovedal z pamäte
  namiesto toho, aby zavolal. Rieši to opis a menší súbor.
- **Neplatné argumenty** — vymyslené alebo nesprávne parametre. Rieši to prísna schéma, validácia a
  zrozumiteľné chyby na sebaopravu.
- **Domýšľanie nad výsledkom.** Model si môže domyslieť, čo vo výsledku nie je — najmä pri nejasnom alebo
  prázdnom. Vráť výsledok ako samostatnú správu, výslovne označenú ako výstup nástroja; riziko to zníži, no
  neodstráni.
- **Bezpečnosť — nové a vážne riziko.** Nástroj, ktorý *koná* (zapisuje, odosiela, spúšťa kód), je teraz
  riadený výstupom modelu — a ten výstup sa dá uniesť cez **prompt injection** (podvrhnutie inštrukcií do
  promptu), vrátane nepriamej, ukrytej v nájdenom obsahu. Odtiaľ obrana: **least privilege** (princíp
  najmenších oprávnení) — obmedz súbor nástrojov, oddeľ čítacie nástroje od zapisovacích a pri nebezpečných
  akciách vyžaduj potvrdenie. Aj úspešná injection potom zmôže málo.

### Späť k RAG

Kruh sa uzatvára: **vyhľadávanie je nástroj.** Agentický RAG je špeciálny prípad tool use, kde je hlavným
nástrojom vyhľadávanie.

Keď má agent viac nástrojov, pokrýva prípad „iné zdroje pre iné otázky": vyhľadávanie v znalostnej báze,
SQL nad tabuľkami, webové vyhľadávanie na čerstvé veci, kalkulačka na presný výpočet. **Smerovač (router)**
z predchádzajúcej lekcie je presne to, čo vyberie, ktorý nástroj použiť.

### Čo si odniesť z lekcie

- Tool use (function calling) je všeobecný mechanizmus: model zavolá ľubovoľnú vonkajšiu funkciu a
  vyhľadávanie je jeho špeciálny prípad.
- Model vydá iba zámer — vykoná ho tvoj kód: model rozhoduje „čo", tvoje behové prostredie rieši „ako". To
  je zároveň bezpečnostná hranica.
- Mechanizmus je „tool definition → tool call → tool result → pokračuj"; tá istá slučka ako pri agentickom
  RAG, len s ľubovoľnou akciou.
- Tool definition je prompt: model vyberá podľa slov, nie podľa kódu. Dobrý nástroj má jasný opis, prísnu
  schému, je jedným z malého počtu neprekrývajúcich sa nástrojov a vracia zrozumiteľné chyby.
- Nové režimy zlyhania: nesprávny nástroj, neplatné argumenty, domýšľanie nad výsledkom a bezpečnosť —
  zapisovací nástroj plus prompt injection, a teda least privilege.

---

## Stránka 2 — „Spoľahlivosť a škálovanie" (druhá, hlbšia časť lekcie)

Táto stránka berie ten istý mechanizmus a rozoberá ho do posledného detailu: čo sa deje, keď model vydá
viac volaní naraz, ako sa schéma vynucuje token po tokene, ako sa slučka po chybnom volaní zotaví, a čo sa
pokazí, keď súbor nástrojov narastie na desiatky.

### Keď model vydá viac volaní naraz

Jeden ťah nie je jedno volanie. Model dokáže v jednej odpovedi vydať niekoľko *nezávislých* volaní —
**parallel tool calls** (paralelné volania nástrojov): tri čítania z databázy, dva dopyty cez API — namiesto
toho, aby ich vypúšťal po jednom na ťah.

Tvoje behové prostredie urobí dve veci v poradí: rozdelí ich (fan-out) — spustí súbežne — a pozbiera ich
späť (fan-in) — zhromaždí každý výsledok a odovzdá ich modelu spolu, skôr než pokračuje. To je tvar
**fan-out / fan-in**: jeden ťah sa rozvetví na N paralelných volaní, N výsledkov sa zloží späť do jednej
správy a slučka ide ďalej.

Slovo, na ktorom všetko stojí, je *nezávislé*. Paralelizmus je platný iba vtedy, keď žiadne volanie
nepotrebuje výsledok iného a vedľajší účinok žiadneho z nich nemení to, čo vidí druhé. Túto nezávislosť
model predpokladá, keď sa rozhodne volania zoskupiť — a tvoje behové prostredie ju neoveruje. Nič
nekontroluje, či si volania naozaj neprekážajú; ak áno, nedostaneš chybovú správu, ale **súbeh** (race
condition): dve súbežné volania siahnu na to isté a výsledok začne závisieť od náhodného časovania.

Prepínače tohto správania sa líšia podľa poskytovateľa a na presných názvoch záleží. **Anthropic Claude**
zoskupuje volania štandardne (vypína sa to príznakom vnútri objektu `tool_choice`). **OpenAI** má príznak
`parallel_tool_calls`, ktorý štandardne dovolí viac volaní na ťah. **Gemini** rozlišuje **parallel function
calling** (nezávislé funkcie naraz) a **compositional function calling** (zreťazené, závislé volania, kde
výstup jedného je vstupom pre ďalšie) — a práve ich rozlíšenie je jadrom tejto sekcie.

Neparalelizuj **závislé volania** — také, kde jedno potrebuje výsledok predchádzajúceho. A neparalelizuj
naslepo ani **zápisy s vedľajším účinkom** (side-effectful writes): súbežné zápisy do zdieľaného stavu sa
dostanú do súbehu a poradie naprieč skupinou je nedefinované.

### Ako sa schéma naozaj vynucuje

Argumenty nástroja opisuje **schéma** (schema) — zvyčajne JSON Schema. V **strict mode** (striktný režim)
sa schéma *vynucuje* a model nedokáže vydať argumenty, ktoré ju porušujú.

Mechanizmom je **constrained decoding** (obmedzené dekódovanie). Poskytovateľ tvoju schému skompiluje na
**gramatiku**. Na každom kroku dekódovania vzorkovač zamaskuje každý token, ktorý by pri doterajšom výstupe
gramatiku porušil, a vzorkuje len z toho, čo prežije. Výstup zodpovedá schéme *už z konštrukcie* — nie
preto, že sa model snažil a mal šťastie, ani preto, že si ho dodatočne overil a zlé si zahodil.

Constrained decoding nie je zadarmo. **Cena kompilácie pri prvom volaní:** prvá požiadavka s *novou* schémou
zaplatí latenciou, kým sa gramatika vypočíta; ďalšie požiadavky s tou istou schémou trafia cache
(vyrovnávacia pamäť) a bežia rýchlo. Ak pri každom volaní vytváraš čerstvo vygenerovanú schému, cache
znefunkčníš a **kompilačnú daň** platíš zakaždým.

Buď presný v tom, čo ti striktné dekódovanie zaručuje: dá ti *správne sformované, podľa schémy platné*
argumenty. Nezaručí, že argumenty sú *správne*, ani že model siahol po *správnom* nástroji. Štruktúra nie
je sémantika.

### Keď volanie zlyhá — a ako sa cyklus zotaví

Volanie nástroja zlyhá viacerými spôsobmi: **chybne sformované argumenty**, **chyba validácie** (argumenty
sú v poriadku, no neprejdú tvojimi kontrolami), **výnimka nástroja**, **vypršanie časového limitu
(timeout)** a **prázdny alebo nejednoznačný výsledok**.

Najdôležitejší ťah, keď volanie zlyhá: prvá časť nazvala tool definition promptom; o chybe platí to isté.
**Chyba ako prompt** — chybu vrátiš modelu ako správu, ktorú vie prečítať a konať podľa nej (**zotaviteľnú
chybu**, recoverable error, formulovanú ako návod: „dátum musí byť `YYYY-MM-DD`"), nie nečitateľný výpis
zásobníka. Slučka sa potom opraví sama.

Pri **prechodných chybách** (timeout, rate limit, `5xx`) opakuj, ale s **backoffom** — pokusy rozostri.
A zastropuj to: **retry budget** (rozpočet opakovaní) je tvrdý strop na počet pokusov. Bez stropu sa
volanie, ktoré padá deterministicky, zvrhne na **nezastaviteľnú slučku opakovaní**: agent donekonečna vydáva
to isté volanie odsúdené na neúspech a nikdy neskončí. A pomenuj to správne — slučka, ktorá sa nezastaví, je
**chyba behu**, defekt v behu, nikdy nie „odmietnutie".

### Kontextová cena desiatok nástrojov

Každý tool definition stojí tokeny v každej požiadavke. Tucet nástrojov je **stála daň** — tokeny,
latencia, peniaze — platená bez ohľadu na to, či sa modelu čo i len dotkne. Navyše **tool selection** (výber
nástroja) sa s rastúcim súborom zhoršuje.

Náprava vo veľkom: **dynamic tool loadout** (dynamický výber nástrojov), hovorí sa mu aj **tool-RAG** —
vyhľadá len nástroje relevantné pre aktuálny dopyt a načíta práve tie. Za istou hranicou už odpoveď nie je
dlhší zoznam, ale rozdelenie na **špecializovaných agentov**. Zdržanlivosť platí aj opačne: nesiahaj po
tool-RAG predčasne — pri hrstke nástrojov je najjednoduchšie, čo funguje, plný statický súbor.

### Idempotencia a zápisy s trvalým následkom

Čítacie a zapisovacie nástroje sa v opakovaní líšia: znova spustiť čítanie ťa nestojí nič okrem latencie,
kým znova spustiť zápis — vytvoriť objednávku, odoslať e-mail, strhnúť z karty — môže vedľajší účinok
zdvojiť. Vlastnosť, ktorú chceš, je **idempotency** (idempotencia): spustiť zápis dvakrát s rovnakým
vstupom má rovnaký účinok ako spustiť ho raz. Štandardný mechanizmus je **idempotency key** (kľúč
idempotencie). Pri nebezpečných alebo nevratných zápisoch rozdeľ operáciu na **dry-run** (nanečisto) a
**krok potvrdenia** (confirm).

### Validácia argumentov predtým, než konáš

Striktné dekódovanie ti dá správne sformované argumenty, ale nie *prijateľné*. **Validuj skôr, než
vykonáš** (argument validation): brána má dve úrovne — **validácia na úrovni schémy** (typy, enumy,
formáty) a **sémantická validácia** (id, ktoré neexistuje, dátum v minulosti, suma nad limitom).

---

## 8 rýchlych otázok (áno / nie + prípadná poznámka)

1. **Anglické termíny.** Kniha necháva veľa anglických pojmov (tool call, tool definition, strict mode,
   constrained decoding, idempotency key, tool-RAG…) a každý raz vysvetlí po slovensky v zátvorke. Číta sa
   to ako bežná reč slovenského vývojára — **áno / nie**? (Ak nie: je toho priveľa, alebo primálo?)

2. **Skloňovanie anglických slov.** Tvary ako „**tool cally** do produkcie", „výstup **tool callu**" —
   vyzerajú prirodzene, alebo rušia? **áno (prirodzené) / nie**

3. **Vymyslené obrazy.** „**Chyba ako prompt**", „**stála daň** / **kompilačná daň**" (za tokeny), „jeden
   ťah sa **rozvetví** na N volaní … N výsledkov sa **zloží späť**". Sedia po slovensky, alebo znejú
   preložene? **áno (sedia) / nie**

4. **Slová pre zlyhania.** Text rozlišuje „**chyba validácie**", „**chyba behu**", „**výpadok**" a slovo
   „**zlyhanie**" používa len ako názov kategórie. Je ten rozdiel zrozumiteľný a prirodzený? **áno / nie**

5. **Ďalšie termíny.** „**skupina**" (pre dávku paralelných volaní), „**výber nástroja**", „**smerovač
   (router)**". Znejú ako slová, ktoré by si aj ty použil? **áno / nie**

6. **Nadpisy a opakujúce sa bloky.** „**Čo si odniesť z lekcie**", „**Nové pojmy → Glosár**", „**(Video je
   v angličtine.)**", „**Ďalej — druhá časť lekcie**", bočný štítok „**Spoľahlivosť a škálovanie**". Čítajú
   sa prirodzene? **áno / nie**

7. **Typografia.** Slovenské úvodzovky „…" a dlhá pomlčka „—" vo vsuvkách — vyzerajú správne a domácky?
   **áno / nie**

8. **Celkovo.** Prijal by si tieto stránky ako napísané slovenským kolegom (nie strojovo preložené)? Kde si
   sa **potkol** alebo zaváhal? **áno / nie + kde**

*Ďakujem! Stačí odpovede a čokoľvek, čo ti udrelo do očí — netreba návrhy opráv.*
