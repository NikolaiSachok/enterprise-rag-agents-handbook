# Language canon (SK) — course-independent language rules

Shared Slovak language rules that hold across every course in this language — voice & register, typography,
the anti-bohemism gate, the EN→SK calque templates, verb-by-object, spelling & register, the bridge-direction
rule, the bold budget, and the figure-probation rule. They are **course-independent**: load this file
whichever course you are authoring, alongside that course's term ledger.
Extracted **verbatim** from the RAG canon (`rag.md`) — the proven, native-verified rules — so no decision is
re-derived. The RAG-specific semantic reservations (sense cards), glossary decisions, repeated exact strings,
and the phase-by-phase decision appendix stay only in `rag.md`.

---

### Hlas a register

- Lekcie sú v **neformálnom jednotnom čísle „ty“**: „drž v hlave“, „keď nasadíš“, „dostaneš“, „zaembedduješ —
  dostaneš“. Nikdy „vy“. Zrkadlí to ruské «ты» a slovenský register vývojárskych tutoriálov (pozri `intro.md`).
- Autorské **„my“** iba dávkovane a iba pre rámec spoločnej cesty („postupne uvoľňujeme modelu ruky“, „už
  neraz sme narazili“) a pre výhrady o rozsahu materiálu; **nikdy v pokynoch čitateľovi**.
- Register je odborný, ale hovoriaci k čitateľovi priamo — próza, akú by senior slovenský inžinier prijal ako
  napísanú kolegom Slovákom (tlačová latka): slovenská odborná učebnica informatiky alebo kvalitná technická
  publicistika, nie preložený marketingový text.

### Typografia

- **Slovenské úvodzovky „…“** (dolné otváracie, horné zatváracie). Nikdy nie «…» (ruské) ani "…" (anglické
  rovné). Vnorená úroveň: ‚…'.
- **Desatinná čiarka**: 0,5; 0,36; nie „0.5“. Rozsahy pomlčkou (en-dash), bez medzier: 10–20 %.
- **Nedeliteľná medzera** pred percentom (10–20 %) a medzi číslom a jeho jednotkou (128 GB, 8 GPU, 24 h),
  aby sa hodnota neodtrhla na koniec riadka.
- **Veľké začiatočné písmeno pre termín inak štylizovaný malým**, keď stojí na začiatku vety: „top-K“ v tele
  vety, ale „Top-K je počet fragmentov, ktoré vyhľadávanie vráti.“ na začiatku vety. To isté pre „vLLM“,
  „promptfoo“ — vetu radšej preformuluj, aby sa nezačínala tvarom s povinným malým písmenom.
- **Slovenské písmená sú správne a povinné**: ľ ĺ ŕ ô ä dž (ľudský, dĺžka, vŕtať, kôň, mäkký, džbán). **České
  písmená ř ě ů v slovenčine neexistujú** a sú okamžitým signálom bohemizmu (§1.3) — „ř“ nikdy, „ě“ nikdy,
  „ů“ nikdy.

### §1.3 Anti-bohemizmus — pravidlo a pasce (CZ→SK)

Toto je **najnosnejší nový artefakt slovenského kánonu** a jeho náprotivok k ruskému pravidlu proti
anglicizmom. Je to **pomenovaná, stále zapnutá kontrola**: pri každej stránke prechádza literárny redaktor
text s otázkou „nepresiakla sem čeština?“ — český tvar, česká kolokácia alebo česko-slovenský falošný
priateľ. Bohemizmus je defekt aj vtedy, keď je veta sama osebe zrozumiteľná, presne ako je defektom porušená
sémantická rezervácia (§2). Každú novú pascu, na ktorú pisateľ narazí, **zasieva sem** — zoznam rastie s
korpusom, rovnako ako ruský zoznam falošných priateľov.

**Štruktúrne signály (okamžitý bohemizmus podľa tvaru, netreba slovník):**

- **Písmená ř, ě, ů v slovenčine NIKDY neexistujú.** Akýkoľvek ich výskyt je český tvar: řešení ✗, přístup ✗,
  několik ✗, můžeš ✗.
- **České neutrum na -í → slovenské -ie.** rozhraní ✗ → **rozhranie**, prostředí ✗ → **prostredie**, řešení ✗
  → **riešenie**, zpracování ✗ → **spracovanie**, vyhledávání ✗ → **vyhľadávanie**, nastavení ✗ →
  **nastavenie**, úložiště ✗ → **úložisko**.
- **Český 3. pl. na -ují/-ají → slovenské -ujú/-ajú.** generují ✗ → **generujú**, pracují ✗ → **pracujú**,
  volají ✗ → **volajú**.
- **Český infinitív na -t → slovenské -ť.** spustit ✗ → **spustiť**, uložit ✗ → **uložiť**, získat ✗ →
  **získať**, spracovat ✗ → **spracovať**.
- **České z- tam, kde slovenčina má s-.** zpracování ✗ → **spracovanie**, zpráva ✗ → **správa**.

**Lexikálni falošní priatelia a nesprávne tvary:**

- dotaz ✗ → **dopyt / otázka** (query)
- zpráva ✗ → **správa** (message)
- selhání / selhanie ✗ → **zlyhanie** (failure)
- úkol ✗ → **úloha** (task)
- paměť ✗ → **pamäť** (memory)
- jsou ✗ → **sú**; jsem ✗ → **som**; být ✗ → **byť**
- nebo ✗ → **alebo** (or) — pozor, slovenské „nebo“ znamená oblohu!
- jako ✗ → **ako** (as / like)
- když ✗ → **keď** (when)
- protože ✗ → **pretože** (because)
- další ✗ → **ďalší** (next / further)
- více ✗ → **viac** (more)
- pouze ✗ → **iba / len** (only)
- také (vo význame „aj“) ✗ → **tiež / aj**
- podle ✗ → **podľa** (according to)
- se / si (zvratné) ✗ → **sa / si**
- může ✗ → **môže** (can); musí = musí (rovnaké)
- jejich ✗ → **ich** (their)
- díky ✗ → **vďaka** (thanks to)
- který ✗ → **ktorý** (which)
- příklad ✗ → **príklad**; před ✗ → **pred**; při ✗ → **pri**
- odpověď ✗ → **odpoveď**; spojení ✗ → **spojenie**
- vytvořit ✗ → **vytvoriť**; současně ✗ → **súčasne** (concurrently)
- výběr ✗ → **výber** (selection)
- rychlost ✗ → **rýchlosť** (speed); rychlý ✗ → **rýchly**
- velký ✗ → **veľký**; malý = malý (rovnaké)
- zpracování ✗ → **spracovanie** (processing)

**Overovanie kolokácií.** Pri každej dvojici sloveso + podstatné meno, ktorou si nie si istý, over úzus cez
živý slovenský web. **Dvojica, ktorá vracia iba české zásahy, je bohemizmus** — nahraď ju slovenským tvarom
a zasej ju sem. Toto overovanie čiastočne nahrádza rodenú intuíciu, ktorú tím nemá.

**Blocklist — tvary, ktoré negeneruj (pilot „tool use“, #64).** Nie sú to bohemizmy, ale **herné, nedefinované
alebo skalkované** tvary, ktoré recenzie pilotu opakovane vytiahli. Odmietni ich, kým ich redaktor v kontexte
výslovne neschváli:

- **„ťah“** pre odpoveď modelu / krok agenta — herné, nedefinované → „krok“, „volanie“, „odpoveď modelu“
- bare **„súbeh“** pre race condition → **„race condition (súbehová chyba)“** — kept-EN primárny tvar (§1.0,
  §1.2); „súbeh“ = concurrency, nie chyba; aj tvar „súbeh (race condition)“ je zrušený (v3)
- **„striktný / neštriktný nástroj“** → drž kept-EN „strict mode“ (§1.2 konvencie)
- **„tool definition stojí tokeny“** — kalk „costs tokens“ + cudzia fráza ako podmet → „každá definícia nástroja
  zaberá tokeny“
- **„modelom čitateľný“** (kalk *model-readable*) → „formulované tak, aby to model pochopil“
- **„časovo ohraničený fakt“** (umelá nominalizácia) → „fakt, ktorý sa môže časom zmeniť“
- **„defekt v behu“** → „chyba počas behu / runtime chyba“ (§1.2)
- **„dynamický loadout“** → „dynamický výber nástrojov“ (§1.2, v4)
- **„človek v slučke“** ako **predvolený** preklad *human-in-the-loop* → „schválenie človekom“ (§1.2 konvencie)
- **„menu nástrojov“** ako opakovaná vysvetľujúca metafora → „sada nástrojov“ / „zoznam nástrojov“
- ad-hoc skloňovanie EN termínov: **`tool callu`, `tool cally`, „úspešná injection“** → skloňuj natívny tvar
  („volania nástroja“), alebo drž EN termín nesklonený v kóde

### §1.4 Kalkové šablóny EN→SK (na čo grepuje kalkový prechod)

Náprotivok anti-bohemizmu (§1.3), lenže zdrojom je **angličtina EN-skeletu**. Toto sú **gramaticky správne
slovenské vety, ktoré sú anglickou stavbou v prestrojení** — reverzný preklad ich 1:1 mapuje späť na anglickú
vetu (back-translation test, `sk-locale-playbook.md`). Sú to **vzory, na ktoré grepuje kalkový prechod**;
oprava nie je náhrada slova, ale **prepísanie z významu**. Zoznam rastie s korpusom, ako §1.3 aj ruský §1.3.

> Tieto vzory sú re-derivované z pilotných recenzií (#64) s poškodeným kódovaním — beri ich ako **pasce na
> flagovanie**, nie ako usadené preklady. Cieľová slovenská veta sa skladá z významu podľa kontextu.

| Anglická stavba | Kalk v slovenčine (✗ — flaguj) | Smer opravy (prepíš z významu) |
|---|---|---|
| „X is where…“ | „X je miesto, kde…“ | povedz priamo, čím X je / čo robí |
| „the key word is…“ | „slovo, na ktorom všetko stojí…“ | „kľúčové je…“, „rozhodujúce slovo je…“ |
| „has a contract“ | „má svoj kontrakt“ | „dodržiava dohodnutý tvar/rozhranie“ |
| „build on…“ | „stavať na…“ | „vychádzať z…“, „nadväzovať na…“ |
| „surface an error“ | „vyniesť chybu na povrch“ | „ohlásiť/zobraziť/vrátiť chybu“ |
| „hit the cache“ | „trafiť cache“ | „nájsť v cache“, „cache zabrala“ |
| „pay in latency“ | „zaplatiť latenciou“ | „za cenu vyššej latencie“ |
| „outgrow a single agent“ | „prerásť jedného agenta“ | „jeden agent už nestačí“ |
| „along the line / boundary“ | „po línii“ | „pozdĺž hranice“, „na hranici medzi…“ |
| „earn its complexity“ | „zaslúžiť si svoju zložitosť“ | „zložitosť sa oplatí len vtedy, keď…“ |
| „the two sections meet here“ | „sekcie sa tu stretávajú“ | „tu sa dve témy prepájajú“ |
| „fold results back“ | „výsledky sa zložia späť“ | „výsledky sa spoja/zlúčia späť do…“ |
| „the property you want is…“ | „vlastnosť, ktorú chceš, je…“ | „ide o to, aby…“, „potrebná vlastnosť je…“ |
| „sharp boundary“ | „deliaca čiara je ostrá“ | „ostrá hranica“, „jasné rozhranie“ |
| „costs tokens“ | „stojí tokeny“ | „zaberá/spotrebuje tokeny“ (§1.3 blocklist) |
| „the big picture“ | „veľký obraz“ (kalk *big = veľký*) | „celkový obraz“, „globálny pohľad“ (rodený hovorca, Retrieval caption 2026-07) |

**Zakázané vetné šablóny (v2 recenzia — write-filter + grep-zoznam).** Kalkové KOSTRY viet, ktoré prežili
v2 substitučný prechod; pred publikovaním sa finálny text greppe proti tomuto zoznamu a **žiadny výskyt
neprejde**. Oprava nikdy nie je náhrada slov vo vnútri šablóny — veta sa **prestavia z propozície**
(kto — čo robí — za akej podmienky — s akým výsledkom):

- `X je to, čo…` (EN cleft „X is what…“) — povedz priamo: „X mení / X vyberá…“
- `miesto, kde X, je medzi…`
- `za istou hranicou odpoveď nie je…`
- `Náprava vo veľkom je…`
- `A nasaď (tomu/mu) strop.`
- `Toto poradie sa neobracia.`
- `X sa stretáva s Y.` (aj „téma X sa prepája s Y“ ako vetná os)
- `pravidlo, ktoré viaže X späť k Y`
- `X má tvar, s ktorým si sa už stretol`
- `zdržanlivosť/opatrnosť platí aj opačne` (aj „rovnaká opatrnosť platí aj v opačnom smere“)
- `držať sadu malú a pri téme`
- `minúť cieľ a skryť nástroj`

**Slabé kolokácie a nesprávny sémantický aktor (v4 — grep-zoznam).** Podmet vety musí byť prirodzeným
vykonávateľom deja (slučka sa neopravuje sama — volanie opravuje model; volanie sa nezotavuje — zotavuje sa
slučka po ňom; validácia „neodmieta“ — argument validáciou neprejde). Tieto dvojice sa flagujú:

- dostať nezmysel ✗ → dostať neplatné/nezmyselné argumenty
- opraviť predpoklad ✗; **predpoklad výslovne obmedziť/usmerniť ✗ (ZVRAT Fáza 26 — predpoklad je abstraktum: neobmedzuje sa a neusmerňuje, iba sa vysloví, prevalcuje alebo opraví; Gate 2a menuje presne tento prípad)** → **predpoklad nahradiť výslovným pravidlom** (v systémovom prompte)
- zdvojiť vedľajší účinok ✗ → vykonať tú istú operáciu dvakrát
- zlyhané volanie sa zotaví ✗ → slučka sa po zlyhanom volaní zotaví
- validácia odmietne argument ✗ → argument neprejde validáciou
- požiadavka nájde výsledok v cache ✗ → pri ďalších požiadavkách sa použije výsledok z cache
- slučka sa opraví sama ✗ → model volanie opraví a zopakuje
- (volania) siahnu na to isté ✗ → pristupujú k rovnakému zdieľanému prostriedku
- stála daň ✗ → stála réžia / priebežné náklady — figúra „daň“ vyradená (ruší potvrdenie Fázy 2)

### §1.5 Sloveso podľa predmetu (verb-by-object — koniec univerzálneho „vydať“)

Univerzálne **„vydať“** (model vydá text / zámer / volanie / výstup) bolo najsilnejším prežívajúcim
signálom prekladu — jedno EN sloveso *emit/issue* natreté na všetky predmety. **Sloveso sa vyberá podľa
PREDMETU**, nie podľa anglického originálu; opakované `model vydá…` sa flaguje automaticky:

| Predmet | Slovesá |
|---|---|
| text | generovať, vytvoriť, (vrátiť) |
| štruktúrovaný výstup | vygenerovať, vrátiť |
| volanie nástroja | vytvoriť, vygenerovať, odoslať |
| požiadavka | odoslať, vytvoriť |
| zámer / rozhodnutie | vyjadriť, určiť, zvoliť |
| výsledok | vrátiť, poskytnúť |

*(Ruší ustanovenie Fázy 2 „«vydať» je ustálený autorský tvar korpusu — ponecháva sa“.)*

### §3 Písanie a register

- **top-K** — latinkou, malé „t“ v tele vety aj v schémach („topové-K“ ✗). Na začiatku vety **„Top-K“**
  (veľké začiatočné, §Typografia). Heslo v glosári — **„Top-K“**.
- **Recall@K / Precision@K** — s veľkým začiatočným, ako v glosári; líšia sa od context recall / context
  precision (iné veličiny).
- **AI** — latinkou vo všetkých pozíciách („AI-delta“, „AI-nástroje“, „AI-platformy“), **nikdy „UI“** ako
  omyl a nikdy nie domáca skratka. Norma korpusu (intro.md, popisy videí).
- **LLM-as-a-judge** — iba plný tvar (nie „LLM-as-judge“).
- **lost-in-the-middle** — so spojovníkmi vo všetkých pozíciách.
- **nDCG, MRR, RRF, BM25, ACL, HyDE, ReAct, TTFT, SSE, SLA, IAM, OTel, LLMOps, FinOps** — pevné písanie, ako
  tu.
- **vLLM** — malé „v“ vo všetkých pozíciách; **promptfoo** — malé „p“, vetou sa nezačína (preformuluj);
  **Ragas** — iba prvé písmeno veľké (nie „RAGAS“); **SGLang, PagedAttention** — ako tu.
- **KV-cache** — latinské „KV“, spojovník, „cache“ (kept-EN, §1.1).
- **p50 / p95 / p99** — malé latinské „p“.
- **ReAct** sa rozvádza ako **Reasoning + Acting** (pozorovanie je spätná väzba cyklu, nie časť skratky).
- **Skloňovanie kept-EN termínov slovenskými koncovkami** tam, kde to znie prirodzene: chunk → chunku,
  chunkov; embedding → embeddingy, embeddingov; framework → frameworku, frameworky; trace → tracov; span →
  spanov; token → tokenov, tokenmi. Latinský koreň, slovenská koncovka; bez apostrofu (na rozdiel od ruského
  „bi-encoder'а“ — v slovenčine sa píše „bi-encoderu“ priamo).
- **Popisy v Mermaid-schémach:** názvy protokolových artefaktov ostávajú anglické („tool call: …“, „tool
  result: …“); obyčajné slová-popisy sledujú jazyk stránky a majú veľké začiatočné písmeno („Rozhodnutie“,
  „Model“, „Odpoveď“).
- **Kontrola registra — jeden hlas (pilot „tool use“, #64).** Cieľový hlas je **priateľský, priamy,
  technicky presný**. Vyhýbaj sa **prudkým výkyvom** medzi tromi polohami: hovorovou (napr. „vlečie“,
  „mašinéria“, „bije do závislosti“, „tvrdošijne“), preloženo-akademickou (napr. „časovo ohraničený fakt“,
  „zdržanlivosť platí aj opačne“) a formálne technickou. Hovorový obrat smie niesť dôraz, ale **nosnú
  technickú distinkciu treba vždy povedať aj doslovne** — dôraz nikdy nenahrádza vecné vysvetlenie.

### §7 Smer mostov (bridge rule)

- **Glosár (heslo):** kept-EN termín → latinské tučné heslo + slovenský glos v zátvorke tam, kde pridáva
  hodnotu („**Dense retrieval (husté vyhľadávanie)**“); holé názvy bez glosu (BM25, ColBERT…). Natívne slovenský
  termín → anglický originál v zátvorke („**Riadenie prístupu (access control, ACL)**“).
- **Lekcie (telo):** kanonický tvar podľa registra §1; most v zátvorke pri **prvom výskyte na stránke** (na
  dlhej stránke osvieženie pri prvom výskyte v novej veľkej sekcii). Kept-EN termín dostane **slovenský glos**,
  natívne slovenský termín dostane **anglický originál**.
- **Hustota mostov:** nikdy nie dva mosty toho istého termínu v rámci jednej obrazovky; krátkej stránke stačí
  jeden most na termín. Slovenský termín, ktorý doslova zrkadlí originál (riadenie prístupu ↔ access control),
  potrebuje nanajvýš jeden most.
- Popis pod videom (`:::tip[▶ Video]`) sa za prvý výskyt **nepočíta** — most sa stavia pri prvom definujúcom
  výskyte v tele lekcie. Rovnako sa nepočíta **zoznam-anons kategórií** (prehľadové vymenovanie tém stránky
  pred ich rozborom).

### §8 Polotučné (rozpočet zvýraznenia)

- **Rozpočet:** nie viac než ~0,36 polotučných úsekov na riadok prózy (rovnaký ako ruský/anglický). Polotučné
  je **nástroj navigácie, nie intonácie**.
- **Čo zvýrazňujeme:** kotvu termínu pri prvom definujúcom výskyte (zvyčajne spolu s mostom), úvodnú položku
  definičného zoznamu, zriedkavú osamotenú tézu-maximu stránky (vedomý prostriedok).
- **Čo nezvýrazňujeme:** rečnícky dôraz uprostred vety, celé vety a viacčlenné klauzy, opakovania už
  zavedených termínov — vrátane sekcie „Čo si odniesť z lekcie“ (zhrnutie neprezvýrazňuje to, čo je už
  zvýraznené v tele). Maxima dlhá ako klauza sa dáva do úvodzoviek alebo kurzívy, nie do polotučného.

### Figúry (§6)

**Ruské autorské figúry sa neprenášajú.** Chránené ruské figúry (§6 ruského kánonu — `ru.md`) sú ruské novotvary
viazané na jazyk — sú to ruské slová v ruskom rámci, nie významy, ktoré by šlo preložiť. Slovenčina ich
**neprekladá**; skladá vlastnú **prostú prózu**. V Prvej fáze uprednostni holé slová pred razenými figúrami.

**Akákoľvek razená slovenská figúra vstupuje do kánonu NA SKÚŠOBNEJ DOBE.** Kým ju studený prechod pri prvom
kontakte nepotvrdí, je vedená s poznámkou „(na skúšobnej dobe)“ a recenzenti ju kontrolujú **rovnako ako
obyčajný text** — presne ako razenú kalku. Až najbližší studený prechod alebo milestone-prechod figúru
potvrdí (naivný jednojazyčný slovenský čitateľ ju dekóduje pri prvom kontakte bez anglickej stránky) alebo
vyškrtne (vtedy sa zapisuje medzi odmietnuté varianty, ako sa v ruštine vyškrtli „batériky“). Slovenská
figúra sa **nepotvrdzuje** tým, že funguje v ruštine — každý jazyk sa overuje sám.

