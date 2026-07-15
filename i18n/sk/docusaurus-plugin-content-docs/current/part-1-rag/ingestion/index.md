---
title: Ingestion
slug: /part-1-rag/ingestion/
---

# Od surových dokumentov k indexu pripravenému na vyhľadávanie

**Ingestion** (offline príprava dokumentov) je tá polovica RAG, ktorá prebehne celá ešte predtým, než sa systému niekto vôbec niečo opýta. Práve tu pripravuješ všetko, nad čím neskôr pobeží **vyhľadávanie** (retrieval).

Celá táto vrstva RAG beží ako pipeline — reťaz štyroch krokov. Dokumenty sa najprv parsujú, potom sa delia na **chunky** (kúsky dokumentu) — tomuto kroku sa hovorí **chunking**. Ku každému chunku sa pripoja metadáta a napokon sa chunky prevedú na **embeddingy** (vektorové reprezentácie textu) a uložia do vektorovej databázy (vector database).

Táto stránka sa venuje chunkingu a embeddingovým modelom — dvom pilierom celej vrstvy. Parsovanie dokumentov (document parsing) rozoberá až druhá časť lekcie; pozri poznámku na konci stránky.

:::info[Ako čítať túto stránku]

Každú tému preberáme najprv tak, ako funguje naprieč odvetvím. Všetko, čo sa viaže na konkrétny projekt (Strata-RAG), je vyčlenené do samostatných prípadových štúdií — teória sa tak nemieša s detailmi implementácie.

:::

---

## Chunking

### Prečo dokumenty vôbec deliť

Naivný recept znie „rozdeľ dokument na chunky“ — a viac ten recept nepovie. Lenže prečo dokumenty vôbec deliť? A prečo väčšina problémov s kvalitou vzniká práve v tomto kroku? K deleniu ťa nútia dve navzájom nezávislé obmedzenia.

Prvé obmedzenie: embeddingový model stláča celý kus textu do jediného vektora. Čím väčší a rôznorodejší kus, tým viac sa výsledný vektor blíži priemeru všetkého, čo sa v texte spomína. Vektor odseku o jednej myšlienke je ostrý; vektor celého 40-stranového manuálu je rozmazaný priemer, ktorý sa k žiadnej konkrétnej otázke poriadne nehodí.

Druhé obmedzenie: chunk hrá dve roly naraz. Vyhľadáva sa nad chunkami — a nájdené chunky sa potom bez zmeny podajú modelu do kontextu. Drž to v hlave počas celej sekcie: jedna rola tlačí veľkosť chunku nadol, druhá nahor.

### Kľúčový kompromis: priveľký vs. primalý chunk

Všetko podstatné z tejto sekcie sa zmestí do jednej tabuľky:

| | Priveľký chunk | Primalý chunk |
|---|---|---|
| Vplyv na embedding | vektor je rozmazaný — ku konkrétnemu dopytu takmer nesedí | vektor je ostrý |
| Vplyv na kontext modelu | veľa šumu, relevantná časť v ňom zapadne (efekt **lost-in-the-middle** — model prehliada informácie uprostred dlhého kontextu); navyše spotrebuje veľa tokenov | stráca sa význam — chunk sám osebe nedáva zmysel |
| Typický spôsob zlyhania | vyhľadávanie vráti niečo „zhruba o téme“, ale fakt, ktorý potrebuješ, je v tom rozriedený | vyhľadávanie vráti fragment, ktorý sám osebe nič neznamená |

Klasická ukážka primalého chunku: chunk stratí kontext, na ktorý sa jeho slová odvolávajú. Predstav si, že sa samostatným chunkom stane táto veta z výročnej správy:

> „V treťom kvartáli vzrástla o 20 %.“

Ako samostatný chunk je tá veta nanič. Čo vzrástlo? Tretí kvartál ktorého roka? Embedding takejto vety sa zmysluplne nepriblíži k žiadnemu dopytu — a aj keby ju vyhľadávanie predsa len vrátilo, model z nej nič nevyčíta. Kontext — že „vzrástla“ tržba divízie X za rok 2025 — ostal vo vedľajšom odseku. A ten sa do chunku nedostal.

Presne preto zlyháva prístup „strihaj každých N znakov“ — a presne preto vznikli múdrejšie stratégie.

### Stratégie delenia: od najjednoduchšej po najdômyselnejšiu

1. **Delenie na pevnú veľkosť (fixed-size)** — strihaj každých N tokenov alebo znakov. Jednoduché, rýchle, reprodukovateľné. Nevýhoda: strihá naslepo — uprostred vety, uprostred tabuľky. Je to základ, z ktorého vychádza všetko ostatné.
2. **Chunk overlap (prekryv)** — susedné chunky sa čiastočne prekrývajú: delenie beží ako posuvné okno (sliding window). Fakt, ktorý padne presne na hranicu medzi dvoma chunkami, prežije celý aspoň v jednom z nich — ak je kratší než prekryv. Lacná záchrana faktov rozstrihnutých napoly; cenou je zduplikovaný text. Nasadzuje sa takmer vždy, v kombinácii s ktoroukoľvek stratégiou; prekryv býva zvyčajne 10–20 % veľkosti chunku.
3. **Rekurzívne / štruktúrne delenie (recursive / structural chunking)** — namiesto slepého strihu rež na prirodzených hraniciach, hierarchicky: najprv po sekciách, potom — keď je kus stále priveľký — po odsekoch, potom po vetách. Hranice chunkov sa tak kryjú s hranicami myšlienok. V odvetví je to predvolená voľba: kompromis „jednoduché a takmer vždy slušné“.
4. **Sémantické delenie (semantic chunking)** — prechádzaj vety a sleduj ich embeddingy: kým sú susedné vety významovo blízko, patria do jedného chunku; prudký pokles podobnosti signalizuje zmenu témy — hranicu. Každý chunk potom drží pokope jednu tému. Nevýhoda: je to drahšie (vety musíš embeddovať už pri delení) a nie vždy sa to oplatí.
5. **Delenie s ohľadom na štruktúru dokumentu (document-structure-aware)** — rešpektuj značkovanie zdroja: nadpisy, tabuľky, bloky kódu. Tabuľku nestrihaj riadok po riadku, kód netrhaj uprostred funkcie a k chunku pripoj cestu po sekciách (heading path) ako metadáta: „Kapitola 3 › Sekcia 2 › Podmienky výplat“. Pri podnikových dokumentoch — smernice, zmluvy, tabuľky — je práve toto často rozhodujúci faktor kvality.

:::tip[Univerzálna veľkosť chunku neexistuje]

Správna veľkosť závisí od typu dokumentov (hustý právny text nie je to isté čo neformálne správy z chatu) aj od typu otázok (otázka na jeden konkrétny údaj nie je to isté čo „vysvetli mi celú smernicu“). Veľkosť chunku preto nehádaš — meriaš ju: prežeň varianty cez evaluáciu vyhľadávania a pozri sa na metriky. Toto je mostík k vrstve [Evaluation](../cross-cutting/evaluation/): chunking nie je jednorazové nastavenie, ale parameter, ktorý ladíš podľa metrík.

:::

### Metadáta chunku

Práve cez metadáta sa podnikové špecifiká premietajú do kvality vyhľadávania. Chunk nie je len text: pripájaš k nemu **metadáta chunku** (chunk metadata) — zdroj (súbor alebo URL), názov, cestu po sekciách, dátum a verziu. Pre podnikové prostredie je rozhodujúce ešte jedno pole: riadenie prístupu (access control) — kto chunk smie vidieť. Dôvody, prečo metadáta pripojiť hneď tu, sú tri:

- **Filtrovanie.** „Hľadaj len v dokumentoch po roku 2024“ či „len v sekcii HR“ — vektorové vyhľadávanie doplníš filtrom podľa metadát (metadata filtering).
- **Citácie.** Aby odpoveď mohla citovať „Smernicu o dovolenkách, sekciu 2“, musí chunk niesť odkaz na zdroj od samého začiatku.
- **Riadenie prístupu.** V podnikovom systéme nesmie zamestnanec marketingu dostať v odpovedi kus mzdovej evidencie. Oprávnenia sa kontrolujú na úrovni chunkov — a nesú ich práve metadáta.

*Metadáta sa k chunku pripájajú vo fáze delenia* — ak si ich nepripojil vtedy, neskôr ich už nemáš odkiaľ vziať.

### Pohľad dopredu: dve roly chunku sa dajú rozdeliť

Vráťme sa k faktu, že nad chunkom sa vyhľadáva a ten istý chunk sa podáva modelu. Pokročilá myšlienka — podrobne ju rozoberá vrstva [Retrieval](../retrieval/) — znie: nemusí ísť o ten istý kus textu. Vyhľadávať môžeš nad malými, ostrými chunkami, ktoré dávajú dobrý embedding, a modelu podať väčší rodičovský fragment okolo nájdeného miesta, ktorý nesie plný kontext. Tejto rodine postupov sa hovorí **parent-document / small-to-big retrieval**. Nateraz si stačí zapamätať, že tie dve roly sa od seba oddeliť dajú.

### Čo si odniesť z tejto sekcie

- Nad chunkom sa vyhľadáva a ten istý chunk číta model — dve roly s protichodnými požiadavkami na veľkosť.
- Priveľký chunk → rozmazaný embedding a šum v kontexte; primalý → stratený kontext: z chunku sa nedá zistiť, o čom jeho slová hovoria.
- Stratégie: pevná veľkosť (+ prekryv) → rekurzívne delenie (predvolená voľba) → sémantické → s ohľadom na štruktúru dokumentu.
- Metadáta — zdroj, sekcia, dátum, oprávnenia — sa pripájajú už pri delení na chunky; umožňujú filtrovanie, citácie a riadenie prístupu.
- Veľkosť chunku sa nemá hádať, ale merať metrikami.

**Nové pojmy** → [Glosár](../../glossary.md): chunk, chunk overlap, recursive / structural chunking, semantic chunking, chunk metadata, parent-document (small-to-big) retrieval.

---

## Embeddingové modely

Všeobecnú mechaniku už poznáš: chunk → vektor → vektorová databáza. Táto sekcia je o nuansách — o tých, ktoré odlišujú „pozrel som si o tom video“ od „rozumiem, prečo je to navrhnuté práve takto“.

### Čo embedding vlastne je

**Embedding** je vektor v priestore, kde geometrická blízkosť znamená blízkosť významu. Model je natrénovaná funkcia „text → vektor“: texty o tom istom skončia blízko seba, nesúvisiace texty ďaleko od seba. Vyhľadávanie potom znamená nájsť k vektoru dopytu najbližšie vektory.

Hlavný dôsledok: kvalita vyhľadávania je zhora ohraničená kvalitou embeddingov. Keď vektor potrebného chunku neskončí blízko vektora dopytu, žiadny neskorší krok pipeline to už takmer nedokáže napraviť — hybrid search (hybridné vyhľadávanie) škodu iba zmierni; viac o ňom vo vrstve Retrieval. Preto práve voľba embeddingového modelu kladie základ celého vyhľadávania.

:::tip[▶ Video]

<YouTube id="wgfSDrqYMJ4" title="What are Word Embeddings? — IBM Technology" />

Video rozoberá embeddingy jednotlivých slov — historický koreň celej myšlienky; v RAG embeddujeme celé chunky — je to ten istý princíp, len prenesený zo slova na kus textu. (Video je v angličtine.)

:::

### Bi-encoder vs. cross-encoder

Za vektorovým vyhľadávaním aj **rerankingom** (preusporiadaním) stojí jedna kľúčová dvojica modelov — **bi-encoder** a **cross-encoder**.

| | Bi-encoder | Cross-encoder |
|---|---|---|
| Ako počíta | dopyt a chunk zakóduje samostatne → dva vektory → porovná ich podľa vzdialenosti | dostane pár „dopyt + chunk“ naraz → vráti jedno skóre relevantnosti |
| Presnosť | nižšia (texty vidí oddelene) | vyššia (vidí interakciu slov) |
| Rýchlosť | rýchly | pomalý |
| Predpočítanie | áno — vektory chunkov sa vypočítajú raz, pri indexácii | nie — skóre závisí od konkrétneho páru |
| Kde sa používa | vektorové vyhľadávanie nad celou databázou | reranking top-K (K najlepších kandidátov) |

Konflikt medzi „presný, ale pomalý“ a „rýchly, ale hrubší“ rieši ich kombinácia: bi-encoder z miliónov chunkov rýchlo vytiahne top-K, aby sa nič podstatné nestratilo — úplnosť (recall); cross-encoder potom tých K preskóruje, aby navrch vyšlo to najrelevantnejšie — presnosť (precision). Presne tento krok preskórovania je reranking. Viac vo vrstve [Retrieval](../retrieval/).

### Podľa čoho vyberáš embeddingový model

Osi výberu:

- **Retrieval-optimised** (optimalizované na vyhľadávanie). Nie každý embeddingový model je stavaný na vyhľadávanie: chceš modely trénované na pároch „dopyt ↔ úryvok (passage)“, nie na všeobecnej podobnosti viet.
- **Rozmernosť (dimensionality) vektora.** 384, 768, 1536 a viac: vyšší rozmer zachytí viac odtieňov významu, ale je drahší — pamäť, rýchlosť vyhľadávania, cena. Väčšie nie je automaticky lepšie.
- **Jazyk a doména.** Model silný v angličtine môže citeľne zaostať, len čo dostane ruštinu, právny text alebo kód. Pri viacjazyčnom podnikovom obsahu je to kritické.
- **Maximálna dĺžka vstupu.** Určuje, akú veľkosť chunku model vôbec prijme — priama väzba na chunking.
- **API vs. prevádzka u seba (self-hosted).** Proprietárne API — OpenAI, Cohere, Voyage — je jednoduché a výkonné, ale dáta opúšťajú bezpečnostný perimeter firmy a každé volanie sa platí. Otvorené modely prevádzkované u seba — E5, BGE, gte — držia dáta v perimetri (pre dôvernosť firemných dát často rozhodujúci argument) a za jednotlivé volania neplatíš; infraštruktúru si však prevádzkuješ sám.

### Metrika podobnosti, v skratke

Predvolenou voľbou je **kosínusová podobnosť** (cosine similarity): uhol medzi vektormi — zohľadňuje smer, dĺžku ignoruje. Mnohé modely vracajú normalizované vektory; vtedy kosínus prakticky splýva so **skalárnym súčinom** (dot product). Pravidlo znie: použi metriku, na ktorú bol model trénovaný — nájdeš ju na karte modelu (model card); nesúlad kvalite škodí.

### Dve časté pasce

- **Iný model na dopyty, iný na dokumenty.** Dokumenty si zaembeddoval jedným modelom a dopyty embedduješ druhým: vektory žijú v dvoch rôznych priestoroch a vyhľadávanie vracia nepoužiteľné výsledky. Dôsledok: výmena embeddingového modelu znamená preindexáciu celého korpusu.
- **Asymetria query/passage.** Retrieval-optimised modely často očakávajú prefixy (`query:` pre dopyt, `passage:` pre úryvok); keď ich zameníš, kvalita klesne bez jediného chybového hlásenia.

### Čo si odniesť z tejto sekcie

- Bi-encoder je rýchly a jeho vektory sa predpočítajú — to je vektorové vyhľadávanie; cross-encoder je presnejší, ale počíta každý pár — to je reranking.
- Kvalita vyhľadávania je zhora ohraničená kvalitou embeddingov.
- Model vyberaj podľa osí: retrieval-optimised · dimenzia · jazyk a doména · dĺžka vstupu · API vs. prevádzka u seba (dôvernosť dát).
- Na dopyty aj dokumenty jeden a ten istý model; stráž si metriku a prefixy.

**Nové pojmy** → [Glosár](../../glossary.md): embedding, embedding space, bi-encoder, cross-encoder, dimensionality, cosine similarity, retrieval-optimised (asymmetric) embeddings, multilingual embeddings, self-hosted vs. API embeddings.

:::tip[▶ Video]

<YouTube id="t9IDoenf-lo" title="What is a Vector Database? — IBM Technology" />

Mostík k ďalšej vrstve: kam sa vektory chunkov ukladajú a ako sa medzi nimi rýchlo hľadajú najbližší susedia. (Video je v angličtine.)

:::

---

:::note[Ďalej — druhá časť lekcie]

**[Parsovanie a pokročilé embeddingy](./deep-dive.md)** — parsovanie dokumentov (PDF, tabuľky, HTML, OCR, extrakcia s ohľadom na rozloženie); pokročilé delenie (late chunking, kontextové embeddingy chunkov); embeddingy do hĺbky (fine-tuning, skracovanie vektorov metódou Matryoshka, viacjazyčné modely).

Pozri aj: čo sa s chunkami deje ďalej — [Retrieval](../retrieval/); ako sa z nájdených chunkov skladá odpoveď — [Generation](../generation/); ako sa celá vrstva meria — [Evaluation](../cross-cutting/evaluation/).

:::
