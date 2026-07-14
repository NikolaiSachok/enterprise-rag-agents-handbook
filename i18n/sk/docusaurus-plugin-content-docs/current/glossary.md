---
id: glossary
title: Glosár
sidebar_position: 5
---

# Glosár

Jednotné definície pojmov, na ktoré stránky príručky odkazujú. Každý pojem je tu vymedzený práve raz. Zoznam
rastie, ako postupujeme vrstvu po vrstve. Ak za vzorcami a históriou pojmu stojí kanonický zdroj, za
definíciou nasleduje odkaz (↗ Wikipedia pre klasiku, ↗ arXiv pre postupy zo štúdií).

## Ingestion — chunking

**Chunk (kúsok)** — fragment dokumentu, jednotka indexácie. Je to naraz jednotka vyhľadávania aj jednotka
toho, čo napokon uvidí model.

**Chunk overlap (prekryv)** — spoločný úsek textu medzi susednými chunkami. Zachráni fakt, ktorý padol na líniu
rezu: ten celý prežije aspoň v jednom zo susedov (ak je samotný fakt kratší ako prekryv). Zvyčajne 10–20 %
veľkosti chunku.

**Recursive / structural chunking (rekurzívne / štruktúrne delenie)** — delenie po prirodzených hraniciach,
hierarchicky (sekcie → odseky → vety), tak aby sa hranice chunkov zhodovali s hranicami myšlienok. Predvolená
voľba.

**Semantic chunking (sémantické delenie)** — hranica chunku sa kladie tam, kde prudko klesne významová
blízkosť susedných viet (zmena témy). Drahšie, ale každý chunk sa potom týka jednej veci.

**Chunk metadata (metadáta chunku)** — dáta pripojené k chunku: zdroj, názov, cesta po sekciách, dátum,
prístupové práva. Napájajú filtrovanie, citovanie a riadenie prístupu.

**Parent-document (small-to-big) retrieval** — vyhľadávať v malých presných chunkoch, ale modelu podať väčší
rodičovský fragment okolo nájdeného. Rozdeľuje dve úlohy chunku: vyhľadávanie a kontext.

**Document parsing / layout-aware extraction (parsovanie dokumentov, extrakcia s ohľadom na rozloženie)** —
premena surového dokumentu (PDF, sken, HTML) na štruktúrovaný text, ktorý zachová poradie čítania, tabuľky a
hierarchiu nadpisov. Parser s ohľadom na rozloženie najprv rozpozná oblasti strany a poradie čítania, až
potom vyťahuje text — na rozdiel od plochého výpisu `extract_text`.

**OCR (optické rozpoznávanie znakov)** — obnova strojovo čitateľného textu z obrázka alebo skenu, ktorý nemá
textovú vrstvu. ↗ [Wikipedia](https://en.wikipedia.org/wiki/Optical_character_recognition)

**Late chunking (neskoré delenie)** — najprv prehnať celý dlhý dokument cez embeddingový model a až potom
vyznačiť hranice chunkov a spriemerovať vektory tokenov v každom z nich — tak vektor chunku nesie kontext
celého dokumentu. Potrebuje embeddingový model s dlhým kontextom. ↗ [arXiv](https://arxiv.org/abs/2409.04701)

## Ingestion — embeddingy

**Embedding (vektorová reprezentácia textu)** — vektor reprezentujúci text v priestore, kde geometrická
blízkosť znamená blízkosť významu.

**Embedding space (priestor embeddingov)** — vektorový priestor, do ktorého model zobrazuje texty;
vyhľadávanie sa zredukuje na hľadanie bodov najbližších k vektoru dopytu.

**Bi-encoder** — zakóduje dopyt a chunk samostatne do dvoch vektorov a porovná ich podľa vzdialenosti. Rýchly
— vektory chunkov sa počítajú raz, pri indexácii. Chrbtica vektorového vyhľadávania.

**Cross-encoder** — podá pár „dopyt + chunk“ do modelu spolu a vráti jedno číslo relevantnosti. Presnejší ako
bi-encoder, ale pomalší (skóre sa nedá predpočítať). Používa sa v rerankingu.

**Dimensionality (rozmernosť)** — dĺžka vektora embeddingu (napríklad 384 / 768 / 1536). Vyššia je
výraznejšia, ale náročnejšia na pamäť, pomalšia na vyhľadávanie a drahšia.

**Cosine similarity (kosínusová podobnosť)** — blízkosť meraná uhlom medzi vektormi; číta smer a ignoruje
dĺžku. Predvolená metrika; pri normalizovaných vektoroch splýva so skalárnym súčinom (dot product).
↗ [Wikipedia](https://en.wikipedia.org/wiki/Cosine_similarity)

**Retrieval-optimised (asymmetric) embeddings** — modely trénované na pároch „dopyt ↔ úryvok (passage)“
namiesto všeobecnej podobnosti viet. Často očakávajú prefix `query:` / `passage:`.

**Multilingual embeddings (viacjazyčné embeddingy)** — embeddingové modely fungujúce vo viacerých jazykoch;
nevyhnutné pre viacjazyčný podnikový obsah.

**Self-hosted vs. API embeddings** — voľba medzi otvoreným modelom na vlastnej infraštruktúre (dáta zostávajú
v perimetri) a proprietárnym API (jednoduchšie, ale dáta odchádzajú von a každé volanie sa platí).

**Embedding fine-tuning (doladenie embeddingov)** — prispôsobenie predtrénovaného embeddingového modelu doméne
pomocou contrastive learning (kontrastné učenie) na trojiciach (dopyt, správny úryvok, nesprávny úryvok)
s hard negatives (tvrdými negatívmi). Vynúti si úplnú preindexáciu korpusu, keďže dopyt aj dokument musia mať spoločnú verziu modelu.

**Matryoshka Representation Learning (MRL)** — trénovanie embeddingov tak, že informácia je zabalená od
hrubého k jemnému do vnorených prefixov, takže vektor sa dá skrátiť na menej rozmerov a zostane použiteľný —
regulátor „veľkosť/presnosť“ bez opätovného embeddovania. ↗ [arXiv](https://arxiv.org/abs/2205.13147)

## Retrieval

**Dense retrieval (husté vyhľadávanie)** — vyhľadávanie nad vektormi embeddingov; zachytáva význam a synonymá,
slepé voči presným tokenom.

**Top-K** — počet najbližších kandidátov, ktoré vráti prvá fáza vyhľadávania (zvyčajne 50–100 pred
rerankingom).

**Query transformation (transformácia dopytu)** — pretvorenie dopytu pred vyhľadávaním: prepísanie,
multi-query, HyDE.

**Multi-query (viac dopytov)** — generovanie viacerých parafráz dopytu, vyhľadanie podľa každej a zlúčenie
výsledkov.

**HyDE (Hypothetical Document Embeddings)** — vygenerovať hypotetickú odpoveď, zaembeddovať ju a vyhľadávať
ňou: často sedí bližšie k potrebnému chunku ako krátka otázka. ↗ [arXiv](https://arxiv.org/abs/2212.10496)

**BM25 / sparse retrieval (riedke lexikálne vyhľadávanie)** — klasické lexikálne vyhľadávanie podľa zhody slov
(frekvencie termov). Zachytáva presné tokeny, slepé voči synonymám. ↗ [Wikipedia](https://en.wikipedia.org/wiki/Okapi_BM25)

**Hybrid search (hybridné vyhľadávanie)** — súbežné spustenie hustého a lexikálneho vyhľadávania a zlúčenie
ich skóre. Prekrýva slepé miesto každého z nich.

**Reciprocal Rank Fusion (RRF)** — spôsob, ako skombinovať výsledky viacerých vyhľadávaní podľa ich pozícií v
jednotlivých rebríčkoch, bez zosúlaďovania ich rôznych škál skóre.
↗ [SIGIR'09](https://cormack.uwaterloo.ca/cormacksigir09-rrf.pdf)

**Score fusion / score normalisation (fúzia skóre / normalizácia skóre)** — zlučovanie retrieverov podľa
surových skóre: každé priviesť na spoločnú škálu (min-max, z-skóre) a potom vážene sčítať. Zachováva veľkosť
skóre, ale je krehké voči odľahlým hodnotám a posunom rozdelenia medzi dopytmi — je to alternatíva založená
na skóre, na rozdiel od RRF, ktorý stavia na poradí.

**Reranking (preusporiadanie)** — preskórovanie top-K kandidátov cross-encoderom a ich preradenie tak, aby
najlepšie vyplávalo nahor. Druhá fáza; pracuje na presnosti.

**LLM reranker** — reranking cez prompt k všeobecnému LLM, ktorý posúdi relevantnosť — pointwise, pairwise
alebo listwise. Zero-shot (bez trénovacích príkladov) a riaditeľný inštrukciou, ale drahý, pomalý a nedeterministický — na rozdiel od
cielene trénovaného cross-encodera.

**Two-stage retrieval (dvojfázové vyhľadávanie)** — lacno a široko na úplnosť (bi-encoder / hybrid), potom
draho a presne na presnosť (cross-encoder). Kanonická schéma retrievalu.

**Late interaction / ColBERT (neskorá interakcia)** — zakódovať dopyt a dokument do vektorov na každý token,
dokumentovú stranu predpočítať a na dopyte skórovať cez MaxSim: pre každý token dopytu maximálny kosínus k
ľubovoľnému tokenu dokumentu, sčítané cez tokeny dopytu. Zachováva potokenové porovnávanie na úrovni
cross-encodera, no zostáva predpočítateľné a prehľadávateľné po korpuse; cena je úložisko — vektor na každý
token. ↗ [arXiv](https://arxiv.org/abs/2004.12832)

**Multi-vector retrieval (multivektorové vyhľadávanie)** — reprezentovanie chunku mnohými vektormi (jedným na
token) namiesto jedného; reprezentácia, nad ktorou vyhľadáva neskorá interakcia.

**Contextual retrieval (kontextové vyhľadávanie)** — pred embeddovaním a BM25-indexáciou pripojiť pred každý
chunk krátku, modelom vygenerovanú vsuvku, ktorá ho zasadí do celého dokumentu, aby chunk niesol kontext,
ktorý holý chunk stráca; prompt caching robí jej generovanie lacným.
↗ [Anthropic](https://www.anthropic.com/news/contextual-retrieval)

**Smerovanie dopytov (query routing)** — vopred urobený výber, kde a ako dopyt vyhľadávať: v ktorom indexe či
kolekcii, či vôbec ísť do vyhľadávania, husté alebo hybridné, v akom reze metadát. Vrchol lievika — nesprávna
cesta navždy vyhodí odpoveď z množiny kandidátov.

**Filtrovanie podľa metadát (metadata filtering)** — zúženie vyhľadávania podľa polí chunku: dátum, oddelenie,
typ, jazyk.

**Pre-filter / post-filter (filter pred / po vyhľadávaní)** — kedy sa predikát nad metadátami alebo ACL
uplatní: pred vektorovým vyhľadávaním (do kandidátov idú len prejdené vektory — korektné a povinné pre ACL,
no výberový filter sa môže dostať do sporu s ANN-indexom (index približných najbližších susedov)) alebo po ňom (rýchle, ale výberový filter môže
nechať menej ako K výsledkov, dokonca nulu).

**Riadenie prístupu (access control, ACL)** — odrezanie chunkov podľa prístupových práv ešte pred výdajom
výsledkov, aby používateľ nikdy nedostal to, na čo nemá právo. Bezpečnostná požiadavka, nie voľba.

**Recall@K / Precision@K** — metriky vyhľadávania: podiel potrebných dokumentov, ktoré sa dostali do top-K
(úplnosť, recall), a podiel relevantných spomedzi vrátených (presnosť, precision).
↗ [Wikipedia](https://en.wikipedia.org/wiki/Precision_and_recall)

**nDCG (normalized discounted cumulative gain)** — metrika radenia: neráta len to, či sa relevantné dokumenty
našli, ale aj ich pozície (vyššie je cennejšie).
↗ [Wikipedia](https://en.wikipedia.org/wiki/Discounted_cumulative_gain)

**MRR (mean reciprocal rank)** — prevrátená pozícia prvého relevantného výsledku, spriemerovaná cez dopyty.
↗ [Wikipedia](https://en.wikipedia.org/wiki/Mean_reciprocal_rank)

## Generation

**Grounding (opretie odpovede o kontext)** — priviazanie odpovede na dodaný kontext namiesto parametrickej
pamäte modelu.

**Grounding instructions (inštrukcie na opretie o kontext)** — explicitný pokyn modelu odpovedať iba z
kontextu a priznať, keď odpoveď v ňom nie je. Hlavná páka proti halucináciám.

**Context packing (skladanie kontextu)** — ako sa vyhľadané chunky poskladajú do promptu: oddeľovanie zdrojov,
poradie, výber niekoľkých najlepších.

**Lost-in-the-middle (strata uprostred)** — model využíva informáciu skrytú v strede dlhého kontextu horšie
ako to, čo sedí na začiatku a na konci. ↗ [arXiv](https://arxiv.org/abs/2307.03172)

**Citations / attribution (citácie / pripísanie zdroja)** — ukazovanie na zdroj každého tvrdenia v odpovedi;
dáva overiteľnosť a brzdí vymýšľanie.

**Refusal / abstention (odmietnutie / zdržanie sa)** — poriadne „neviem“, keď je kontext nedostatočný; lepšie
ako sebavedomá chyba.

**Faithfulness / groundedness (vernosť zdrojom)** — metrika toho, nakoľko sa odpoveď naozaj opiera o dodané
zdroje, a nie o pamäť modelu.

**Parametric knowledge (parametrické znalosti)** — to, čo sa model naučil pri tréningu a drží vo svojich
váhach; RAG to zámerne potláča v prospech kontextu.

**Hallucination (halucinácia)** — sebavedomo vyslovený fakt, ktorý v zdrojoch nie je, alebo je nesprávny.

**Self-consistency (sebakonzistencia)** — namiesto jediného hladného (greedy) dekódovania reťazca úvah (chain-of-thought)
navzorkovať viacero úvahových ciest a spraviť väčšinové hlasovanie o konečnej odpovedi; platí len tam, kde je
odpoveď diskrétna, hlasovateľná hodnota. ↗ [arXiv](https://arxiv.org/abs/2203.11171)

**Chain-of-verification (CoVe)** — slučka sebakontroly: navrhnúť odpoveď, naplánovať overovacie otázky,
odpovedať na ne *nezávisle* od návrhu (aby model nemohol len prikývnuť na vlastnú chybu), potom návrh podľa
kontrol prepracovať. ↗ [arXiv](https://arxiv.org/abs/2309.11495)

**Knowledge conflict (konflikt znalostí: kontext verzus pamäť)** — keď vyhľadaný kontext protirečí
parametrickému predpokladu modelu; model sa nie vždy podvolí kontextu, najmä keď je predpoklad zakorenený
alebo kontext vyzerá nepravdepodobne. Faithfulness je práve to, čo meria, či sa podvolil.

**Answer-shaping (tvarovanie odpovede)** — riadenie formátu, tónu a dĺžky odpovede. Reálna páka kvality, ale
podriadená opretiu o kontext: tvarovanie nesmie nikdy zahodiť citáciu, výhradu ani úprimné odmietnutie.

## Evaluation

**Evaluation (evaluácia)** — meranie kvality pipeline metrikami namiesto „od oka“. Vďaka tomu sa pipeline dá ladiť.

**Retrieval failure / generation failure (rozlíšenie zlyhaní)** — diagnostická kostra RAG: zlá odpoveď je
dvojaká — *zlyhanie vyhľadávania* (potrebný chunk sa vôbec nedostal do výsledkov) a *zlyhanie generovania*
(chunk v kontexte bol, ale model ho ignoroval alebo skomolil). Prvý krok pri ladení je určiť, ktoré z nich
máš pred sebou.

**Golden set / golden dataset / ground truth (etalónová sada)** — príklady „otázka + relevantné chunky /
správna odpoveď“, voči ktorým sa počítajú metriky. Kvalita je dôležitejšia ako objem.

**Answer relevance (relevancia odpovede)** — reference-free generation metrika (bez etalónu): vzťahuje sa odpoveď
na položenú otázku? LLM z odpovede vygeneruje N otázok a metrika berie priemernú kosínusovú podobnosť ich
embeddingov s pôvodnou otázkou — *(1/N) Σ cos(E_gen_i, E_orig)*. Meria zhodu v zámere, nie faktickú správnosť.
↗ [arXiv](https://arxiv.org/abs/2309.15217)

**Correctness (správnosť)** — či sa odpoveď zhoduje s referenčnou odpoveďou vo vecnej podstate.

**LLM-as-a-judge** — skórovanie voľného textového výstupu inou LLM podľa hodnotiacich kritérií alebo etalónu;
škáluje úsudok podobný ľudskému na tisíce príkladov.

**Judge bias (zaujatosť sudcu)** — systematické (nie náhodné) skreslenia LLM-sudcu, ktoré sa preto s rastúcim
počtom príkladov nevyrušia: position bias (uprednostňuje prvú možnosť — rieši sa prehodením poradia
a požiadavkou na konzistentnosť), verbosity bias (dlhšie = lepšie), self-preference / self-enhancement
(vlastný štýl). ↗ [arXiv](https://arxiv.org/abs/2306.05685)

**Offline vs online eval** — hodnotenie na golden sete pred nasadením (regresie v CI) verzus meranie
v produkcii (spätná väzba od používateľov, A/B).

**Regression eval** — spúšťanie golden setu v CI, aby zlepšenie na jednom mieste nepokazilo iné.

**A/B testing** — porovnanie dvoch verzií systému na živej prevádzke podľa ich metrík.

**Faithfulness (vernosť zdrojom)** — reference-free generation metrika (bez etalónu): odpoveď rozložíš na
atomické tvrdenia, každé overíš voči nájdenému kontextu a oskóruješ podiel podložených — *faithfulness =
supported claims / total claims* (0–1). Meria oprenie o kontext, nie správnosť — tvrdenie oprené o nesprávny
kontext dostane aj tak 1,0. ↗ [arXiv](https://arxiv.org/abs/2309.15217)

**Context precision (presnosť kontextu)** — retrieval metrika citlivá na poradie: sú relevantné chunky
navrchu výsledkov? Priemer Precision@k vážený podľa poradia — presun jedného nerelevantného chunku z pozície
2 na 1 ho môže zhodiť z ~1,0 na ~0,5. ↗ [arXiv](https://arxiv.org/abs/2309.15217)

**Context recall (úplnosť kontextu)** — reference-based retrieval metrika (s etalónom): vrátilo vyhľadávanie
všetko, čo referenčná odpoveď potrebuje? Referenčnú odpoveď rozložíš na tvrdenia a oskóruješ podiel podložený
nájdeným kontextom. Najpriamejší ukazovateľ zlyhania vyhľadávania. ↗ [arXiv](https://arxiv.org/abs/2309.15217)

**Reference-free vs reference-based (bez etalónu / s etalónom)** — či metrika potrebuje ľuďmi napísanú správnu
odpoveď. Reference-free (faithfulness, answer relevance) sa počíta iba z otázky, kontextu a odpovede —
použiteľná na živej prevádzke; reference-based (context recall, correctness) potrebuje etalónovú odpoveď.

**LLM-judge calibration (kalibrácia sudcu)** — meranie zhody sudcu s ľudskými značkami na odloženej vzorke,
skôr než mu začneš dôverovať vo veľkom; silní sudcovia dosahujú zhruba ľudskú úroveň zhody (nad 80 %), nie
úroveň orákula. Prekalibruj pri drifte modelu, korpusu alebo rozdelenia otázok.
↗ [arXiv](https://arxiv.org/abs/2306.05685)

**Pointwise vs pairwise (po jednej odpovedi / párové porovnanie)** — dva protokoly sudcu: pointwise hodnotí
jednu odpoveď podľa hodnotiacich kritérií na absolútnej škále (lacné, škáluje, medzi behmi pláva); pairwise
vyberá lepšiu z dvoch (spoľahlivejšie pre zoraďovanie, ale O(n²) a najviac vystavené position biasu).
Reference-guided pointwise vkladá etalónovú odpoveď do promptu sudcu. ↗ [arXiv](https://arxiv.org/abs/2306.05685)

**Inter-annotator agreement (zhoda medzi anotátormi, IAA)** — miera, do akej nezávislí anotátori priradia
rovnaké značky; nízka zhoda je signál zostriť hodnotiace kritériá, nie prehlasovať nesúhlasiaceho.

**Cohen's kappa (Cohenova kappa)** — zhoda medzi dvoma anotátormi opravená o náhodu:
*κ = (p_o − p_e) / (1 − p_e)*, kde p_o je pozorovaná a p_e náhodou očakávaná zhoda.
↗ [Wikipedia](https://en.wikipedia.org/wiki/Cohen%27s_kappa)

**Fleiss' kappa (Fleissova kappa)** — zovšeobecnenie Cohenovej kappy na zhodu medzi viac ako dvoma anotátormi.
↗ [Wikipedia](https://en.wikipedia.org/wiki/Fleiss%27_kappa)

**Active sampling / active learning (aktívne vzorkovanie / aktívne učenie)** — míňať vzácny rozpočet na ľudské
značkovanie tam, kde je najinformatívnejší (kde je sudca najmenej istý, kde sa sudcovia rozchádzajú alebo kde
produkcia odhalila chybu), namiesto značkovania naslepo.

## Guardrails

**Guardrails (bezpečnostné mantinely)** — bezpečnostná vrstva na vstupe a výstupe LLM systému: proti útokom,
únikom a škodlivému výstupu.

**Prompt injection** — podsunutie inštrukcií do textu, ktorý model číta, aby prebilo systémový prompt. Priama
(od používateľa) a nepriama (skrytá v nájdenom obsahu — nebezpečná pre RAG).

**Spotlighting** — označenie nedôveryhodného obsahu tak, aby ho model videl ako dáta, nie inštrukcie. Rodina
troch techník na úrovni promptu, stúpajúcich silou aj cenou: **delimiting** (hraničné tokeny okolo
nedôveryhodného textu), **datamarking** (znak-marker vložený do každej medzery), **encoding** (base64 / ROT13
— text sa už nečíta ako inštrukcie). ↗ [arXiv](https://arxiv.org/abs/2403.14720)

**Instruction hierarchy (hierarchia inštrukcií)** — priorita zdroja, ktorú je model *natrénovaný* poslúchať:
system / developer > user > nástroj / nájdený obsah. Inštrukcia z nižšej úrovne oprávnení sa vykoná len vtedy,
keď je v súlade s vyšším cieľom, a ignoruje sa, keď je v konflikte. ↗ [arXiv](https://arxiv.org/abs/2404.13208)

**PII redaction (maskovanie PII)** — detekcia a skrytie osobných údajov na vstupe a výstupe; kritické pri
externých API.

**Vratné verzus nevratné maskovanie (reversible vs irreversible masking)** — ako sa nájdená PII pretvorí.
Nevratné (odstránenie, náhrada, prekrytie znakmi, hašovanie) originál zničí; vratné (šifrovanie) sa dá obnoviť
kľúčom. Vratné maskovanie dáva pseudonymizáciu, nie anonymizáciu — a kľúč sa stáva bremenom.

**Input / output validation** — kontrola vstupu (útoky, mimo témy) a výstupu (úniky, PII, porušenia politiky).

**Content safety / moderation** — filtrovanie škodlivého alebo neprípustného obsahu na vstupe a výstupe.

**Jailbreak** — obídenie vstavaných poistiek modelu (na rozdiel od injection, ktoré využíva nerozlíšiteľnosť
inštrukcií a dát).

**Least privilege / tool allow-listing (princíp najnižších oprávnení)** — obmedzenie množiny nástrojov
a akcií dostupných agentovi, aby úspešná injection zmohla málo.

**Attack success rate (ASR)** — podiel úspešných útokov na množine; metrika kvality guardrails.

**Defence-in-depth (obrana do hĺbky)** — vrstvená obrana: žiadna jednotlivá vrstva nie je úplná; fungujú
spolu.

## Observability

**Observability (pozorovateľnosť)** — schopnosť vidieť, čo živý systém skutočne robí: odladiť zlú odpoveď,
zmerať cenu a latenciu.

**Trace / span** — úplný záznam jednej požiadavky cez pipeline (trace) po krokoch (spany): dopyt →
retrieval + skóre → prompt → výstup → kroky agenta.

**RAG tracing** — tracing špecifík RAG: ktoré chunky sa našli a s akým skóre, finálny prompt, surový výstup.

**Cost per request / token accounting** — sledovanie ceny a tokenov na požiadavku; v LLM každé volanie stojí
peniaze.

**Latency (p50 / p95)** — oneskorenie po percentiloch; najdôležitejšie sú kroky generovania a rerankingu.

**Three pillars (metrics / logs / traces)** — tri piliere observability; pre LLM sú kľúčové trace.

**Feedback loop (observability → eval)** — produkčné chyby a spätná väzba od používateľov sa stávajú novými
prípadmi golden setu.

**Head-based sampling** — rozhodnutie ponechať alebo zahodiť trace hneď na začiatku, na koreňovom spane, podľa
podielu z identifikátora trace; lacné a bezstavové, ale slepé voči tomu, ako sa požiadavka skončila, takže nevie
prednostne ponechať chyby.

**Tail-based sampling** — bufferovanie všetkých spanov trace až do jeho dokončenia a rozhodnutie o celom trace
(latencia, chyby, atribúty); zachytí zaujímavé trace za cenu stavovej pamäte a vyvažovania záťaže podľa
trace-id. OpenTelemetry Collector Contrib ho dodáva ako procesor `tail_sampling`.
↗ [OpenTelemetry](https://opentelemetry.io/docs/concepts/sampling/)

**Priority / hybrid sampling (prioritné vzorkovanie)** — ponechať 100 % trace, ktoré sa nesmú stratiť (chyby,
prekročenia latencie, označené zlé odpovede), a rutinné úspešné vzorkovať na nízkej základnej sadzbe; často
najprv head-sampler, potom tail.

**Message-content capture (zachytenie obsahu správ, opt-in)** — zachytenie textu promptu a výstupu do trace;
v konvenciách OpenTelemetry GenAI je štandardne vypnuté kvôli súkromiu a veľkosti payloadu, kým metadáta
(model, počty tokenov, trvanie) zostávajú zapnuté.

**Retention tiers (úrovne uchovávania)** — krátke TTL na spanoch nesúcich obsah (surový text rýchlo expiruje)
a dlhšie na lacných metadátach; jedna páka na obmedzenie toho, ako dlho žijú citlivé dáta trace.

**Golden signals (zlaté signály)** — štyri signály z tradície Google SRE — latencia, prevádzka, chyby,
nasýtenie —, ktoré dashboard LLM systému zobrazuje popri plnohodnotnom pilieri kvality.
↗ [Google SRE](https://sre.google/sre-book/monitoring-distributed-systems/)

**SLI / SLO** — SLI (indikátor úrovne služby) je meraná veličina (dostupnosť, p95 latencia, miera úspešnosti
podľa kvality); SLO (cieľ úrovne služby) je cieľová hranica na ňu v rámci časového okna. Pre LLM systém by
aspoň jeden SLI mal byť kvalitatívny SLI počítaný online evaluáciou, nie iba dostupnosť.
↗ [Google SRE](https://sre.google/sre-book/service-level-objectives/)

**Error budget (rozpočet chýb)** — medzera medzi SLO a dokonalými 100 %: koľko zlyhania si smieš minúť, kým
sa cieľ poruší.

**Burn-rate alerting (alerting podľa rýchlosti míňania)** — paging podľa toho, ako rýchlo sa míňa rozpočet
chýb (rýchle míňanie volá pohotovosť hneď, pomalý drift varuje), symptómová alternatíva k prahu na každej
metrike.

**Alert fatigue (únava z alertov)** — režim zlyhania, keď alerting na každú metriku pochová skutočnú regresiu
v šume, takže ozajstný incident zostane neprečítaný.

**Rozbor regresií (regression triage)** — zistenie štatisticky reálneho poklesu v časovom rade kvality,
latencie alebo ceny a jeho následné pripísanie naprieč spanmi trace ku konkrétnej fáze a udalosti zmeny
(nasadenie, presun verzie modelu, re-ingest, drift vstupu).

**Cost attribution (pripísanie nákladov)** — označkovanie spanov atribútmi funkcia / nájomník / trasa / model,
aby účet ukázal, ktorý z nich páli rozpočet, nie iba súhrnný výdavok.

**Token accounting** — počítanie vstupných plus výstupných tokenov na požiadavku, každý ocenený podľa svojho
modelu, cez usage-atribúty a metriky OpenTelemetry GenAI; základ rozpočtu na náklady.

**Latency budget (rozpočet latencie)** — cieľ na p50 / p95 s rozkladom latencie po spanoch (retrieval, rerank,
generovanie; TTFT verzus celkový čas), aby prekročenie ukázalo na pomalú fázu.

**Soft cap / hard cap (mäkký strop / tvrdý strop)** — politika rozpočtu: mäkký strop varuje (alert, červený
dashboard) a požiadavku pustí; tvrdý strop vynucuje za behu (odmietne, prepne na lacnejší model, oreže
kontext).

## Agents — agentický RAG

**Agentic RAG** — RAG, v ktorom sa vyhľadávanie stáva akciou, ktorú si model volí vnútri slučky, namiesto pevne daného kroku v reťazci spracovania. Tok riadenia patrí modelu, nie kódu.

**Agent loop (cyklus agenta)** — opakujúci sa cyklus „úvaha → rozhodnutie → akcia → pozorovanie“, ktorý beží, kým model neusúdi, že má dosť na odpoveď.

**ReAct (Reasoning + Acting)** — vzor „úvaha → akcia → pozorovanie“: model strieda kroky uvažovania s akciami (volaniami nástrojov) a výsledok každej akcie vracia späť do kontextu.
↗ [arXiv](https://arxiv.org/abs/2210.03629)

**Smerovanie (routing / query router)** — najľahšia úroveň agentnosti: model urobí jediné rozhodnutie — kam poslať dopyt (do ktorého indexu/nástroja, alebo „vyhľadávanie netreba“) — a ďalej je tok statický. Nezamieňať s model routing — voľbou, ktorý model odpovedá (Časť III).

**Multi-hop retrieval (viackrokové vyhľadávanie)** — odpoveď, ktorá si vyžaduje niekoľko závislých vyhľadávaní, kde sa ďalší dopyt zostavuje z predchádzajúceho výsledku.

**Query planning (plánovanie dopytu)** — rozloženie zložitej otázky na čiastkové dopyty ešte pred vyhľadávaním.

**Self-correction / self-reflection (sebaoprava)** — agent hodnotí priebežné výsledky, všimne si, že sú mimo, a preformuluje dopyt alebo vyhľadáva znova.

**Iterative retrieval (iteratívne vyhľadávanie)** — vyhľadávanie v slučke so spresňovaním namiesto jedného pevného volania.

**Self-RAG (sebareflexívny RAG)** — model je dotrénovaný tak, aby počas generovania vydával špeciálne reflexné tokeny, ktoré na požiadanie rozhodujú, či pre daný úsek vyhľadávať, či je každý nájdený úryvok relevantný a či oň odpoveď opiera (a nakoľko je užitočný). Rozhodnutia o „vyhľadaní / relevantnosti / podložení“ sú zabudované priamo do generovania, nie prilepené zvonku ako oddelená nadstavba. ↗ [arXiv](https://arxiv.org/abs/2310.11511)

**Corrective RAG, CRAG (korektívny RAG)** — nadstavba nad ľubovoľným RAG: ľahký hodnotiteľ vyhľadávania (retrieval evaluator) ohodnotí nájdené dokumenty a zaradí svoje skóre dôvery do troch priehradok: Correct → spresniť (ponechať iba relevantné fragmenty), Incorrect → zahodiť a prejsť na webové vyhľadávanie, Ambiguous → skombinovať oboje. Funguje nad hociktorým RAG bez úprav. ↗ [arXiv](https://arxiv.org/abs/2401.15884)

**Adaptive RAG (adaptívny RAG)** — natrénovaný klasifikátor predpovie zložitosť dopytu a nasmeruje ho na najlacnejšiu z dostačujúcich stratégií: bez vyhľadávania (odpoveď z parametrickej pamäte), jednokrokové vyhľadávanie, alebo viackrokové iteratívne vyhľadávanie. ↗ [arXiv](https://arxiv.org/abs/2403.14403)

**Retrieval budget (rozpočet vyhľadávania)** — tvrdý strop na slučku vyhľadávania — najviac preskokov, vyhľadávaní alebo vytiahnutých tokenov — ktorý zaručí zastavenie bez ohľadu na úsudok modelu; obdoba rozpočtu krokov / tokenov špecifická pre vyhľadávanie.

**Sufficient context (dostatočnosť kontextu)** — kritérium zastavenia slučky vyhľadávania: „mám dosť na odpoveď?“ Priskoré zastavenie znamená nedostatočné vyhľadanie (odpovede bez opory); nikdy sa nezastaviť znamená nadmerné vyhľadávanie (náklady + lost-in-the-middle). Tokeny podloženia / užitočnosti zo Self-RAG sú jedna z implementácií.

## Agents — nástroje

**Tool use / function calling (používanie nástrojov / volanie funkcií)** — všeobecný mechanizmus, ktorým model volá vonkajšiu funkciu: model vydá štruktúrovaný zámer a tvoj kód ho vykoná. Vyhľadávanie je špeciálny prípad.

**Tool definition (opis nástroja)** — názov, slovný opis a schéma parametrov (JSON Schema) odovzdané modelu: „menu“ dostupných nástrojov. Opis pôsobí ako prompt — model podľa neho vyberá nástroj.

**Tool call (volanie nástroja)** — štruktúrovaný JSON (názov nástroja a argumenty), ktorý model vydá namiesto bežného textu alebo popri ňom.

**Tool result (výsledok nástroja)** — výsledok spustenia nástroja vrátený modelu do kontextu ako samostatná správa.

**Tool selection (výber nástroja)** — rozhodnutie modelu, ktorý nástroj zavolať; častý zdroj chýb pri veľkom alebo prekrývajúcom sa súbore nástrojov.

**JSON Schema** — jazyk na opis štruktúry a typov údajov; vymedzuje dovolené parametre nástroja a zužuje to, čo model smie vydať.

**Structured output (štruktúrovaný výstup)** — výstup modelu v predpísanej strojovo čitateľnej podobe (JSON podľa schémy) namiesto voľného textu; základ spoľahlivého volania nástrojov.

**Parallel tool calls (paralelné volania nástrojov)** — niekoľko nezávislých volaní nástrojov, ktoré model vydá v jednom ťahu; behové prostredie ich rozdelí (fan-out — spustí naraz) a pozbiera výsledky (fan-in). Sú platné iba vtedy, keď volania na sebe nezávisia a navzájom si neprekážajú; riadi sa to príznakom podľa poskytovateľa (`disable_parallel_tool_use`, `parallel_tool_calls`).

**Constrained decoding (obmedzené dekódovanie)** — vynucovanie schémy priamo pri generovaní: schéma sa skompiluje na gramatiku a na každom kroku sa zamaskuje každý token, ktorý by gramatiku porušil, takže výstup je platný podľa schémy už z konštrukcie, nie overený až dodatočne.

**Strict mode / Structured Outputs (striktný režim)** — produktový prepínač (`strict: true`), ktorý zapne obmedzené dekódovanie pre argumenty nástroja; zaručuje správne sformované, podľa schémy platné argumenty (nie vecne správne). Vyžaduje `additionalProperties: false` a každú vlastnosť označenú ako povinnú.

**Idempotency / idempotency key (idempotencia / kľúč idempotencie)** — zápis je idempotentný, keď jeho dvojnásobné vykonanie s rovnakým vstupom má rovnaký účinok ako jednorazové; kľúč idempotencie umožní serveru zahodiť opakované zápisy, takže opakovanie po vypršaní časového limitu je bezpečné. ↗ [Wikipedia](https://en.wikipedia.org/wiki/Idempotence)

**Tool-RAG / dynamic tool loadout (dynamický výber nástrojov)** — vyhľadanie iba tých nástrojov, ktoré sa týkajú aktuálneho dopytu, a načítanie len ich, namiesto vozenia celého katalógu v každej požiadavke; RAG nad menu nástrojov. Znižuje tokenové náklady a chyby výberu nástroja pri veľkých súboroch nástrojov.

**Argument validation (validácia argumentov)** — kontrola argumentov volania nástroja pred vykonaním, na dvoch úrovniach: na úrovni schémy (typy, enumy, formáty) a sémantickej (hodnoty nesprávne v kontexte — neznáme id, suma mimo rozsahu).

**Retry budget (rozpočet opakovaní)** — tvrdý strop na počet opakovaní, na jedno volanie aj na celý beh; bez neho sa deterministicky padajúce volanie zvrhne na nezastaviteľnú slučku opakovaní. Obdoba rozpočtu krokov a rozpočtu tokenov.

## Agents — plánovanie a slučky

**Planning (plánovanie)** — ako agent usporadúva postupnosť krokov k cieľu; plán môže byť pevne daný vopred alebo vznikať počas behu slučky.

**Task decomposition (dekompozícia úlohy)** — rozklad cieľa na čiastkové úlohy, ktoré agent rieši po jednej, buď explicitne (zapísaný plán / zoznam úloh), alebo implicitne (vzniká, ako uvažuje v slučke).

**Plan-and-execute (plánovanie a vykonanie)** — stratégia, ktorá naplánuje celú postupnosť krokov vopred a potom ju vykoná, pričom keď krok zlyhá, preplánuje; štruktúrovanejšia a lacnejšia než ReAct, no menej pružná.

**Re-planning (preplánovanie)** — prepracovanie plánu, keď krok zlyhá alebo pozorovanie plán naruší; mechanizmus, bez ktorého plan-and-execute nemôže fungovať.

**Reflection / self-critique (reflexia)** — vyhradený krok, na ktorom agent posudzuje vlastnú trajektóriu („napredujem?“) a rozhodne sa zastaviť, preplánovať alebo pokračovať; hlavná páka proti odklonu od cieľa a tichému zacykleniu.

**Termination criterion (kritérium zastavenia)** — vymedzená podmienka „hotovo“, ktorá ukončí slučku; často sa realizuje ako nástroj „finish“, ktorý model zavolá.

**Step budget / iteration limit (rozpočet krokov / limit iterácií)** — tvrdý strop na počet krokov, volaní, tokenov, náklady alebo čas; poistka, ktorá zaručí, že sa slučka v produkcii zastaví.

**Loop detection (detekcia zacyklenia)** — sledovanie rovnakej opakovanej akcie (to isté volanie, tie isté argumenty, ten istý výsledok) a zásah, keď sa agent točí na mieste.

**Scratchpad / working memory (pracovná pamäť)** — pracovný priestor, kde si agent drží iba to, čo je relevantné pre aktuálnu trajektóriu (priebežné poznámky, zoznam hotového), aby sa kontext nenafukoval.

**Nezastavenie cyklu (non-termination)** — príznačné zlyhanie agentnej slučky: nikdy sa nezastaví, zasekne sa na opakovanej akcii alebo sa odkloní od cieľa.

**Plan search (tree / graph search over plans) (prehľadávanie stromu / grafu plánov)** — prehľadávanie priestoru kandidátnych plánov a myšlienkových postupov namiesto toho, aby sa agent pridŕžal jediného: vygenerovať niekoľko ďalších krokov, každý ohodnotiť hodnotovou funkciou, rozvíjať sľubné vetvy s výhľadom dopredu a vracať sa zo slepých uličiek.

**Tree of Thoughts (ToT)** — cieľavedomé prehľadávanie medzikrokov uvažovania („myšlienok“): model navrhuje kandidátne myšlienky, sám ohodnotí každý stav a prehľadáva strom do šírky alebo do hĺbky s výhľadom dopredu a návratmi, na rozdiel od jedinej lineárnej cesty pri chain-of-thought.
↗ [arXiv](https://arxiv.org/abs/2305.10601)

**Graph of Thoughts (GoT)** — zovšeobecňuje ToT zo stromu na ľubovoľný graf, takže myšlienky možno nielen vetviť, ale aj agregovať a spájať. ↗ [arXiv](https://arxiv.org/abs/2308.09687)

**LATS (Language Agent Tree Search)** — prehľadávanie stromu metódou Monte Carlo nad akciami agenta, nie iba nad jeho uvažovaním, s jazykovým modelom v úlohe hodnotovej funkcie, so sebareflexiou a spätnou väzbou z prostredia; zjednocuje uvažovanie, konanie a plánovanie. ↗ [arXiv](https://arxiv.org/abs/2310.04406)

**Self-Refine** — iteratívne dolaďovanie jedným modelom bez tréningu: ten istý model vygeneruje výstup, skritizuje ho a v slučke ho reviduje. ↗ [arXiv](https://arxiv.org/abs/2303.17651)

**Reflexion** — verbálne posilňované učenie: po neúspešnom pokuse agent napíše reflexiu v prirodzenom jazyku, uloží ju do zásobníka epizodickej pamäte a pri ďalšom pokuse si ju prečíta — učí sa naprieč pokusmi bez aktualizácie váh. Názov frameworku (s veľkým R), odlišný od reflexie ako pojmu.
↗ [arXiv](https://arxiv.org/abs/2303.11366)

**Episodic memory (epizodická pamäť)** — úložisko minulých skúseností agenta (čo sa stalo, kedy, s akým výsledkom), ktoré prežije aktuálny kontext a vyberá sa podľa relevantnosti; odlišné od pracovnej pamäte — scratchpadu aktuálnej úlohy v kontexte.

**Semantic memory (sémantická pamäť)** — trvácne fakty, ktoré agent pozná alebo sa naučil, zvyčajne v znalostnej báze / vektorovom úložisku; dlhodobá, na rozdiel od pominuteľného scratchpadu.

**Virtual context management (MemGPT)** — pamäťová hierarchia inšpirovaná operačnými systémami: model zaobchádza s kontextovým oknom ako s „hlavným kontextom“ (ako RAM) a s vonkajším úložiskom ako s „vonkajším kontextom“ (ako disk), pričom stránkuje údaje dnu a von volaniami nástrojov, aby pracoval za hranicami okna. ↗ [arXiv](https://arxiv.org/abs/2310.08560)

**Trajectory evaluation (hodnotenie trajektórie)** — hodnotenie celej cesty, ktorou agent prešiel, nie iba záverečnej odpovede: výsledok (splnenie úlohy) oproti procesu (bol každý krok a volanie nástroja rozumný), plus efektívnosť po krokoch a zastavenie.

**pass^k** — podiel úloh, ktoré agent vyrieši vo všetkých k nezávislých pokusoch; metrika spoľahlivosti, ktorá odhalí rozptyl medzi behmi, aký jediné pass@1 skryje. ↗ [arXiv](https://arxiv.org/abs/2406.12045)

## Agents — multiagentové systémy

**Multi-agent system (multiagentový systém)** — niekoľko špecializovaných agentov, ktorí spolupracujú
namiesto jedného agenta; motivuje to špecializácia, izolácia kontextu, modularita a paralelizmus.

**Orchestrátor / supervízor (orchestrator / supervisor)** — vedúci agent, ktorý rozloží úlohu, rozdelí
podúlohy medzi agentov-vykonávateľov a poskladá ich výsledky; jeho „nástrojmi“ sú samotné subagenty.

**Agent-vykonávateľ / subagent (worker / sub-agent)** — špecializovaný agent, ktorý spracuje pridelenú
podúlohu a vráti výsledok.

**Odovzdanie riadenia (handoff)** — odovzdanie riadenia spolu s relevantným kontextom od jedného agenta
druhému; správa o odovzdaní pôsobí ako prompt pre prijímajúceho agenta.

**Reťaz agentov (agent chain)** — sekvenčná topológia, v ktorej každý agent pretvára výstup predchádzajúceho
(napríklad autor → redaktor → overovateľ faktov).

**Critic / debate (kritik / debata)** — topológia, kde agent-kritik (alebo niekoľko nezávislých agentov)
spochybňuje alebo porovnáva navrhnuté riešenia úlohy a dvíha kvalitu vďaka nezávislým pohľadom.

**FIPA ACL** — jazyk komunikácie agentov štandardizovaný organizáciou FIPA (2002): správa je *performatív*
(rečový akt — inform, request, propose, cfp…), ktorý obaľuje polia (sender, receiver, content, ontology,
protocol, conversation-id). Desaťročia starý predok dnešných schém správ medzi agentmi.
↗ [Wikipedia](https://en.wikipedia.org/wiki/Foundation_for_Intelligent_Physical_Agents)

**Contract net protocol (protokol kontraktných sietí)** — prideľovanie úloh cez vyjednávanie: manažér ohlási
úlohu, voľní dodávatelia pošlú ponuky, manažér pridelí prácu najlepšej z nich, dodávateľ vráti výsledok
(Reid G. Smith, 1980). Dynamické priradenie roly vyjadrené ako výmena správ.
↗ [Wikipedia](https://en.wikipedia.org/wiki/Contract_Net_Protocol)

**Blackboard (spoločná tabuľa)** — koordinačná architektúra cez zdieľanú pamäť: nezávislí špecialisti
(zdroje znalostí) čítajú a zapisujú jednu globálnu dátovú štruktúru, kým riadiaci komponent rozvrhuje, kto
zapisuje ako ďalší; agenti sa koordinujú cez tabuľu, nie tým, že sa navzájom oslovujú. Alternatíva
k odovzdaniu riadenia medzi dvoma bodmi. ↗ [Wikipedia](https://en.wikipedia.org/wiki/Blackboard_system)

**Multi-agent debate (multiagentová debata)** — niekoľko inštancií modelu nezávisle navrhne odpoveď, potom
v pár kolách kritizuje cudzie návrhy a upravuje vlastnú odpoveď a zbieha sa k presnejšiemu a konzistentnejšiemu výsledku než
jeden prechod; protokolová forma topológie kritik / debata. ↗ [arXiv](https://arxiv.org/abs/2305.14325)

**Trajectory stitching (zošívanie trajektórie)** — spoločný korelačný identifikátor (rozhovoru/úlohy) sa
preťahuje cez každú medziagentnú správu, takže lokálne tracy jednotlivých agentov sa poskladajú do jedného
stromu „rodič – potomok“, ktorý možno ohodnotiť ako celok; predpoklad evaluácie tímu.

## Agents — orchestračné frameworky

**Orchestration framework (orchestračný framework)** — knižnica, ktorá zabalí slučku agenta, obslužný kód na
volanie nástrojov, stav, tok riadenia a multiagentovú orchestráciu, aby si to nemusel skladať ručne:
LangChain, LangGraph, LlamaIndex, Microsoft Agent Framework (nástupca Semantic Kernel a AutoGen), CrewAI.

**Agent as a graph / state machine (agent ako graf / konečný automat)** — modelovanie agenta ako uzlov
(volanie modelu / volanie nástroja / rozhodnutie) a hrán (tok riadenia vrátane slučiek), aby sa slučka stala
preskúmateľnou, obnoviteľnou a riaditeľnou.

**Node / edge (uzol / hrana)** — prvky grafu: uzol je krok (volanie modelu / volanie nástroja / rozhodnutie),
hrana je tok riadenia.

**Checkpointing (ukladanie checkpointov)** — trvalé ukladanie stavu agenta, aby sa beh dal pozastaviť,
obnoviť a preskúmať.

**State graph (graf stavu, StateGraph)** — agent modelovaný ako zdieľaný typovaný objekt stavu plus uzly
a hrany; konkrétna podoba myšlienky „agent ako graf“ v LangGraphe.

**Conditional edge (podmienená hrana)** — hrana grafu, ktorá smeruje na ďalší uzol podľa aktuálneho stavu;
práve ona kóduje vetvu slučky (volanie nástroja → uzol `tools`; hotovo → END).

**Checkpointer** — komponent, ktorý ukladá stav grafu na každom super-stepe s väzbou na thread, aby sa beh
dal obnoviť alebo pretočiť späť (cestovanie v čase).

**Checkpoint backend (backend pre checkpointy)** — vymeniteľné úložisko za checkpointerom (in-memory /
SQLite / Postgres / Redis); voľba medzi vývojom a produkciou.

**Thread (vlákno — rozhovor/beh, thread_id)** — identifikátor, ktorý oddeľuje históriu checkpointov jedného
rozhovoru od druhého.

**Durable execution (odolné vykonávanie)** — beh, ktorý sa po páde, reštarte alebo dlhej pauze obnoví od
posledného úspešného kroku; stavia na checkpointeri, režimy `durability` (exit / async / sync) menia okamih
zápisu za rýchlosť.

**Framework long-term memory / store (dlhodobá pamäť frameworku)** — cez thready pretrvávajúca pamäť
s kľúčom podľa menného priestoru, na rozdiel od stavu checkpointu obmedzeného na jeden thread (krátkodobá
pamäť).

**Declarative vs imperative agent definition (deklaratívne vs imperatívne definovanie agenta)** — opis
agentov v konfigurácii (YAML/JSONC, deklaratívne pracovné postupy) oproti stavbe grafu v kóde
(add_node / add_edge).

**Human-in-the-loop (HITL) (človek v slučke)** — bod pauzy, kde človek schváli alebo zasiahne skôr, než
slučka pokračuje; vo frameworku plnohodnotný uzol-prerušenie.

## Agents — MCP a protokoly agentov

**MCP (Model Context Protocol)** — otvorený štandard klient – server (vytvorený firmou Anthropic koncom roka
2024, od decembra 2025 projekt Agentic AI Foundation pod Linux Foundation) na prepojenie agentov s nástrojmi
a dátami; štandardizuje nástroje, zdroje a prompty. M×N integrácií šitých na mieru mení na N+M.
↗ [modelcontextprotocol.io](https://modelcontextprotocol.io)

**MCP server (MCP-server)** — obaľuje nástroj alebo zdroj dát a jednotne sprístupňuje jeho schopnosti.

**MCP client (MCP-klient)** — agent alebo aplikácia, ktorá sa pripája na MCP-servery a konzumuje ich
schopnosti.

**MCP resources (zdroje MCP)** — dáta a kontext, ktoré MCP-server sprístupňuje (bez ekvivalentu v OpenAPI/CLI).

**MCP prompts (prompty MCP)** — opakovane použiteľné šablóny, ktoré MCP-server ponúka.

**M×N integration problem (problém M×N integrácií)** — M aplikácií × N nástrojov = M×N konektorov šitých na
mieru; štandard to zbalí na N+M.

**A2A (Agent2Agent)** — otvorený štandard (vytvorený firmou Google, ohlásený v apríli 2025, od polovice 2025
projekt Linux Foundation) na komunikáciu agenta s agentom: agenti zverejňujú Agent Card na objavovanie
a prácu si vymieňajú ako úlohy Task nesúce Messages a Artifacts cez JSON-RPC. MCP je agent ↔ nástroje, A2A je
agent ↔ agent. ↗ [a2a-protocol.org](https://a2a-protocol.org)

**MCP host (MCP-host)** — LLM-aplikácia (IDE, chatovacia aplikácia alebo runtime agenta), ktorá iniciuje
MCP-spojenia a hostí jedného či viacerých klientov; každý klient drží spojenie 1:1 so serverom. Host, klienti
a servery sú tri roly, nie dve.

**Capability negotiation (dohodnutie schopností)** — úvodný handshake `initialize`, v ktorom si klient
a server vymenia verziu protokolu a deklarujú, ktoré funkcie každý podporuje, ešte pred akoukoľvek prácou.

**Roots** — schopnosť klienta, ktorá serveru vymedzí hranice (súborový systém a URI), v ktorých smie pôsobiť;
rozsah podľa najnižších oprávnení určený klientom, nie ponechaný na dohodu.

**Sampling** — schopnosť klienta, cez ktorú server požiada model klienta o vygenerovanie textu (server vlastný
model nemá); vyžaduje výslovný súhlas používateľa a obmedzuje, čo zo promptu server vidí.

**Elicitation** — schopnosť klienta, cez ktorú server počas operácie vyžiada od používateľa chýbajúce dáta
alebo potvrdenie, a to štruktúrovanou schémou, ktorú vykreslí klient.

**Streamable HTTP** — vzdialený transport MCP (v revízii 2025-03-26 nahradil HTTP+SSE); podporuje viacero
klientov a serverom tlačený streaming a núti premyslieť autentifikáciu aj to, čo sa otvára do siete.
↗ [modelcontextprotocol.io](https://modelcontextprotocol.io)

**MCP registry (register MCP-serverov)** — metaregister uchovávajúci metadáta serverov (nie kód ani binárky),
aby klienti vedeli objaviť existujúce servery; oficiálny sa spustil v ukážke 8. septembra 2025. Zápis
v registri nie je previerka. ↗ [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io)

**Server discovery (objavovanie serverov)** — ako klient nájde servery na pripojenie: na úrovni ekosystému
cez register (ktoré servery existujú) a pri pripájaní cez handshake schopností (čo konkrétny server ponúka).

**Tool poisoning** — nepriama prompt injection ukrytá v popise nástroja, ktorý model číta ako prompt;
najzávažnejšia trieda klientskych zraniteľností MCP.

**Rug pull (podmena nástroja po schválení)** — server, ktorý po tom, čo si nástroj schválil, predefinuje jeho
správanie alebo popis, takže dôvera daná pri pripojení už nezodpovedá tomu, čo nástroj robí. Protiliekom je
fixovať verzie serverov a pri zmene ich znova preveriť.

**Confused deputy (zmätený zástupca — privilegovaný komponent zneužitý útočníkom)** — privilegovaný komponent,
ktorý útočník úskokom prinúti zneužiť svoje právomoci vo svoj prospech; klasické riziko pri práci
s OAuth-tokenmi vzdialeného MCP. Protiliekom sú najmenšie oprávnenia a úzke vymedzenie práv tokenov.

## Agents — reálni agenti (záverečná lekcia)

**Extended thinking (rozšírené uvažovanie)** — viditeľné bloky uvažovania, ktoré model vydá pred odpoveďou;
u Clauda sa objavujú ako bloky `thinking`.

**Interleaved thinking (prekladané uvažovanie)** — uvažovanie *medzi* volaniami nástrojov, nielen pred prvým;
u Clauda je automatické na modeloch s adaptívnym uvažovaním.

**Reasoning effort (miera uvažovania)** — riadenie hĺbky uvažovania diskrétnym ovládačom (`reasoning.effort`
od OpenAI: `none`/`minimal`/`low`/`medium`/`high`/`xhigh`); samotné tokeny uvažovania zostávajú nepriehľadné
a účtujú sa ako výstup.

**Thinking budget (rozpočet uvažovania)** — číselný strop na to, koľko model uvažuje na jednu požiadavku
(`thinkingBudget` u Gemini); v Gemini 3 sa mení na diskrétne úrovne `thinking_level`.

**Claude Code hooks (hooky)** — udalosti životného cyklu behu, z ktorých môžeš spustiť externý skript
(`PreToolUse` vie zablokovať volanie, ďalej `PostToolUse`, `Stop` a iné).

**ADK callbacks (callbacky)** — pevná matica bodov na zachytenie v ADK (`before`/`after` pre agenta, model
a nástroj); objekt vrátený z callbacku skratuje volanie.

**Permission modes (režimy oprávnení)** — režimy, ktoré určujú, čo smie agent urobiť bez potvrdenia
(`default`/`acceptEdits`/`plan`/`bypassPermissions`…); prechádzajú sa v pevnom poradí, kde pravidlo `deny`
blokuje aj pod `bypassPermissions`.

## Production — serving

**Serving** — prevádzka modelu alebo pipeline ako sieťovej služby. Dva odlišné významy, ktoré nemožno
zamieňať: serving aplikácie (tvoj RAG/agentový pipeline za API) a serving modelu (samotný beh LLM-inferencie).

**Inferencia (inference)** — model počíta výstupy zo vstupov v produkcii — dopredný prechod ako služba, na
rozdiel od trénovania. To, čo si buď kupuješ cez API poskytovateľa, alebo prevádzkuješ na vlastných GPU.

**Inference server (inferenčný server)** — špecializovaný server na LLM-inferenciu na GPU: continuous
batching, správa KV-cache (vyrovnávacia pamäť kľúč–hodnota), OpenAI-kompatibilné API (vLLM, SGLang, Ollama).

**SSE (Server-Sent Events)** — jednosmerný prúd udalostí cez obyčajné HTTP; štandardný transport pre
streaming tokenov z LLM-API. ↗ [Wikipedia](https://en.wikipedia.org/wiki/Server-sent_events)

**Time-to-first-token (TTFT)** — latencia po prvý streamovaný token, ktorý sa dostane k používateľovi;
metrika vnímanej latencie, ktorú streaming optimalizuje.

**Streaming** — odosielanie tokenov používateľovi tak, ako sa generujú, namiesto čakania na celú odpoveď;
hlavná páka vnímanej latencie (TTFT).

**Continuous batching** — plánovanie inferenčného servera, pri ktorom požiadavky vstupujú do bežiaceho
batchu (dávky) a opúšťajú ho na granularite tokenu namiesto čakania na dokončenie celého batchu; hlavná páka
priepustnosti.

**PagedAttention** — správa pamäte KV-cache vo vLLM: cache je stránkovaná tak, ako operačný systém stránkuje
virtuálnu pamäť, čím sa znižuje fragmentácia a rastie priepustnosť. ↗ [arXiv](https://arxiv.org/abs/2309.06180)

**Cold start (studený štart)** — oneskorenie, kým kontajner s modelom vôbec dokáže obsluhovať: váhy sa
načítavajú do pamäte GPU desiatky sekúnd až minúty. Preto pripravenosť nie je „proces beží“ a preto
scale-to-zero (škálovanie na nulu) zaplatí daň pri ďalšej požiadavke.

**OpenAI-compatible API (OpenAI-kompatibilné API)** — de facto spoločný štandard rozhrania pre
LLM-endpointy; jeden klientský dialekt hovorí s API poskytovateľov aj s inferenčnými servermi
prevádzkovanými u seba, takže výmena backendu je takmer len zmena URL.

**ASGI workers (ASGI workery, pracovné procesy)** — samostatné procesy operačného systému, každý s vlastnou
kópiou ASGI-servera (uvicorn) a vlastnou slučkou udalostí, spúšťané na využitie viac než jedného jadra CPU.
Súbežnosť pochádza zo slučky udalostí, nie z počtu workerov; workery pridávajú jadrá a pokrývajú úseky práce viazané
na CPU (serializácia, tokenizácia, JSON).

**uvloop** — rýchla implementácia slučky udalostí založená na libuv, súčasť `uvicorn[standard]`; nahrádza
štandardnú slučku asyncio a prináša zrýchlenie bez jedinej zmeny v kóde.

**Threadpool offloading (presun práce do fondu vlákien)** — vykonávanie nevyhnutnej synchrónnej práce mimo
slučky udalostí, na pracovnom vlákne (`run_in_threadpool`, `asyncio.to_thread`), aby blokujúce volanie
nezmrazilo slučku a s ňou každú súbežnú požiadavku v procese.

**Backpressure (protitlak — ochrana pred zahltením)** — zámerné ohraničenie práce v behu: semafor obmedzuje počet súbežných
generovaní a ohraničená fronta obmedzuje, koľko ich čaká, takže služba odmietne nadbytočnú záťaž namiesto
toho, aby prijala prácu, ktorú nedokáže dokončiť.

**Load shedding (zhadzovanie záťaže)** — rýchle odmietanie nadbytočných požiadaviek, keď je fronta plná
(`429`/`503` s `Retry-After`), namiesto ich prijatia; požiadavka, ktorú klient môže zopakovať, je lepšia ako
služba, ktorá sa roztaví pre všetkých.

**Admission control (kontrola prijatia)** — odmietnutie práce vopred, ak už v čase svojho vykonania beztak
prekročí časový limit klienta, namiesto míňania GPU-slotu na odpoveď, na ktorú už nikto nečaká.

**Little's Law (Littleov zákon)** — identita z teórie frontov L = λW: priemerná súbežnosť sa rovná miere
príchodu krát čas v systéme. Keďže W jednej LLM-generácie beží v desiatkach sekúnd, aj nízka miera
požiadaviek znamená veľkú súbežnosť. ↗ [Wikipedia](https://en.wikipedia.org/wiki/Little%27s_law)

**Iteration-level scheduling (plánovanie na úrovni iterácie)** — plánovanie inferenčného servera (continuous
batching), pri ktorom sa nové požiadavky priberajú a dokončené vyraďujú v každom kroku dekódovania namiesto
čakania na dokončenie celého statického batchu; predstavené v článku Orca (OSDI 2022).

**Prefill / decode (prefill / dekódovanie)** — dve fázy generovania s opačnými úzkymi miestami: prefill
spracuje celý prompt v jednom prechode viazanom na výpočet; dekódovanie vydáva jeden token za krok, znovu
načítava váhy a KV-cache a je viazané na priepustnosť pamäte.

**Chunked prefill (prefill po častiach)** — vpletenie prefillu dlhého promptu do prebiehajúcich dekódovaní v
tom istom kroku, aby jeden veľký prompt nezastavil generovanie tokenov ostatných; mierne zvyšuje p50 TTFT
výmenou za výrazne lepšie p95.

**Prefix caching (cachovanie prefixu)** — opätovné použitie KV-cache spoločného prefixu promptu (napríklad
spoločného systémového promptu) naprieč požiadavkami, čím sa preskočí jeho opätovný výpočet.

**Kvantizácia (quantisation)** — ukladanie váh (a voliteľne aktivácií) v nižšej presnosti — FP8, INT8 alebo
INT4 cez AWQ/GPTQ, pod základnou úrovňou FP16/BF16 — na zníženie pamäte a zvýšenie priepustnosti, za cenu
istej straty kvality.

**Kvantizácia KV-cache (KV-cache quantisation)** — ukladanie samotnej KV-cache v nižšej presnosti (napríklad
FP8), čo zhruba zdvojnásobí počet tokenov, ktoré daný KV-pool udrží — dlhšie kontexty alebo väčšiu
súbežnosť.

**Tensor parallelism (tenzorový paralelizmus)** — rozdelenie váhových matíc každej vrstvy medzi viacero GPU;
každá vrstva potrebuje all-reduce na spätné zloženie čiastkových výsledkov, takže je náročná na komunikáciu
a žiada rýchly interconnect (NVLink) v rámci jedného uzla.

**Pipeline parallelism (zreťazený paralelizmus)** — rozdelenie vrstiev na stupne na rôznych GPU alebo
uzloch, s mikrodávkami tečúcimi zo stupňa na stupeň; oveľa menej komunikácie ako tenzorový paralelizmus,
takže znesie pomalší interconnect medzi uzlami, za cenu „bubliny“ v zreťazení, kým sa stupne napĺňajú a
vyprázdňujú.

**Data parallelism (dátový paralelizmus)** — celé repliky modelu za load balancerom pre čistú priepustnosť;
používa sa, keď sa model už zmestí na jedno GPU, na rozdiel od tenzorového a zreťazeného paralelizmu, ktoré
existujú pre modely, čo sa nezmestia.

**MIG (Multi-Instance GPU)** — hardvérové rozdelenie A100/H100 na izolované inštancie, každá s vlastnou
pamäťou a izoláciou porúch.

**GPU time-slicing (delenie GPU v čase)** — zdieľanie jedného GPU prekladaním práce naň, bez izolácie pamäte
alebo porúch; vhodné pre vývojový klaster, rizikové v produkcii, kde porucha alebo špička pamäte jedného
nájomcu zasiahne aj ostatných.

**KEDA** — udalosťami riadený autoscaler Kubernetes, ktorý škáluje záťaže podľa externých/vlastných metrík
(hĺbka fronty, tokeny za sekundu, využitie GPU), na rozdiel od štandardného HPA, ktorý vidí len CPU a pamäť.

**KServe** — vrstva modelového servingu na Kubernetes (spolu s Knative), ktorá dáva autoškálovanie riadené
požiadavkami vrátane scale-to-zero a škálovania podľa súbežnosti.

**Serverless GPU** — kapacita GPU účtovaná po sekundách, so scale-to-zero a bez klastra na prevádzku (Modal,
RunPod, Replicate, Baseten, Cloud Run s GPU); jej ústredným problémom je daň za studený štart, ktorú
zmierňujú snímky pamäte a teplé fondy inštancií.

## Production — cloudové platformy

**Managed endpoint (spravovaný endpoint)** — model, ktorý cloudová AI-platforma obsluhuje za tvojím IAM,
fakturáciou a sieťovým perimetrom: ty ho voláš, platforma ho prevádzkuje.

**Model catalogue (katalóg modelov)** — množina vlastných modelov a modelov tretích strán, ktoré platforma
dokáže obsluhovať ako spravované endpointy (Foundry Models, katalóg Bedrock, Model Garden).

**Data residency (rezidencia dát)** — záruka toho, kde sa požiadavky spracúvajú (región alebo geografia);
spolu so záväzkami netrénovať na tvojich dátach a súkromným sieťovým pripojením tvorí triádu súladu.

**Provisioned throughput (rezervovaná priepustnosť)** — vyhradená, rezervovaná kapacita modelu s
predvídateľnou latenciou, kúpená namiesto zdieľaných on-demand tokenov (Azure PTU, Vertex Provisioned
Throughput, úroveň Reserved v Bedrock).

**Batch mode (dávkový režim)** — zľavnený asynchrónny spôsob spracovania pre neinteraktívne záťaže.

**Managed RAG (spravovaný RAG)** — platformou zabalený pipeline od ingestion po retrieval (Bedrock Knowledge
Bases, Azure Foundry IQ nad AI Search, Vertex RAG Engine); vymieňa jemné ladenie za rýchlosť.

**Vendor lock-in (uviaznutie u dodávateľa)** — závislosť, ktorú vytvárajú platformovo špecifické nadstavby
(spravovaný RAG, SDK), a nie samotný endpoint, ktorý je často OpenAI-kompatibilný.

**Fine-tuning (doladenie modelu)** — pokračovanie v trénovaní základného modelu na tvojich dátach s cieľom
zmeniť jeho správanie; na platformách zahŕňa supervised fine-tuning (SFT), preferenčné a reinforcement
metódy (DPO, RFT), destiláciu a pokračujúce predtrénovanie. Dolaďuj na formu — štýl, schému, formát — nie na
fakty, ktoré sa menia, čo je úlohou RAG.

**LoRA / PEFT** — parametricky efektívne doladenie: trénuješ malý adaptér nad zamrznutými váhami základného
modelu namiesto všetkých, za zlomok výpočtov a úložiska.

**DPO (Direct Preference Optimization)** — doladenie na pároch preferovaných a odmietnutých odpovedí na
zarovnanie výstupov modelu, bez samostatného modelu odmeny.

**Reinforcement fine-tuning (RFT)** — doladenie proti funkcii odmeny alebo modelu-hodnotiteľovi, ktorý
každej odpovedi priradí skóre, s odmenou za želané správanie.

**Model distillation (destilácia modelu)** — trénovanie menšieho modelu-žiaka, aby napodobňoval výstupy
väčšieho modelu-učiteľa, výmenou trochy kvality za výrazne nižšie náklady na serving.

**Continued pre-training (pokračujúce predtrénovanie)** — rozšírenie predtrénovania základného modelu na
veľkých neoznačených doménových dátach, pred akýmkoľvek ladením na konkrétnu úlohu.

**Managed agent runtime (spravované agentové prostredie)** — služba platformy, ktorá hostuje samotnú
agentovú slučku a pridáva perzistenciu relácií a pamäte, bránu pre nástroje a identitu, observability a
scale-to-zero (Bedrock AgentCore, Foundry Agent Service, Vertex Agent Engine) — rozdiel oproti prevádzke
vlastného agentového kontajnera.

**FinOps** — disciplína, ktorá viaže inžinierske rozhodnutia na cloudové náklady a ženie výdavky k
obhájiteľnému číslu jednotkovej ekonomiky.

**Cost modelling (modelovanie nákladov)** — odhad výdavkov záťaže z jej tokenového tvaru a cenových pák
platformy ešte pred tým, než sa k nej zaviažeš.

**Unit economics (jednotková ekonomika)** — náklad na jednu jednotku hodnoty — požiadavku, aktívneho
používateľa, funkciu — číslo, ktoré FinOps optimalizuje.

**Committed-use discount (zľava za záväzok využitia)** — nižšia efektívna cena výmenou za rezerváciu
vyhradenej kapacity alebo záväzok na dobu využívania (rezervácie Azure PTU, Bedrock Reserved).

**Context caching (cachovanie kontextu)** — cachovanie veľkého opakovane používaného kontextu promptu na
strane poskytovateľa (náprotivok cachovania promptu), účtované ako zlomok čerstvého vstupu plus poplatok za
úložisko.

**Cross-region egress (medziregionálny egress)** — poplatok za presun dát medzi regiónmi alebo cloudmi;
nákladová os na páčke medzi rezidenciou a kapacitou.

**Multi-cloud gateway (multi-cloud brána)** — smerovač pred viacerými poskytovateľmi alebo cloudmi, ktorý
hovorí jedným OpenAI-kompatibilným protokolom, pre prenositeľnosť, failover, smerovanie podľa ceny a
centrálne riadenie (LiteLLM, Portkey).

**Digital sovereignty (digitálna suverenita)** — kontrola nad tým, kto môže pristupovať k tvojim dátam a
záťažiam, prevádzkovať ich a právne si ich vynútiť, a pod čou jurisdikciou — prevádzková, dátová a softvérová
suverenita. Odlišná od rezidencie, ktorá sa týka len toho, kde dáta ležia.

**Sovereign cloud (suverénny cloud)** — cloud postavený tak, aby zaručil digitálnu suverenitu, cez regióny
prevádzkované EÚ alebo národne, partnerské „dôveryhodné cloudy“ alebo air-gapped nasadenie (AWS European
Sovereign Cloud, Microsoft Sovereign Cloud, Google Distributed Cloud).

**Air-gapped (izolované od siete)** — prostredie úplne odpojené od verejného internetu, pre regulované alebo
obranné záťaže; hraničné modely tam často zaostávajú alebo chýbajú.

## Production — ekosystém nástrojov

**Instrumentation (inštrumentácia)** — pridanie kódu alebo SDK-hookov, ktoré vysielajú trace, spany a metriky
z pipeline; predpoklad pre observability.

**OpenTelemetry GenAI conventions** — vznikajúci vendor-neutrálny štandard pre pomenovanie LLM-spanov a
atribútov (model, tokeny, volania nástrojov): inštrumentuj raz, exportuj kamkoľvek. K polovici roka 2026
stále experimentálny. ↗ [GitHub](https://github.com/open-telemetry/semantic-conventions-genai)

**Safety classifier (bezpečnostný klasifikátor)** — kompaktný špecializovaný model, ktorý oskóruje text na
rizikové kategórie na vstupe alebo výstupe (Llama Guard, Granite Guardian); skladá sa s
guardrails-frameworkami, ktoré tie kontroly orchestrujú.

**Red-teaming** — zámerné útočenie na vlastný systém na zmeranie jeho obrany (attack success rate, ASR);
zabudované v eval-nástrojoch a platformových red-team funkciách.

## Production — LLMOps

**LLMOps** — operačná disciplína pre LLM-aplikácie: nasadzovanie, monitorovanie a riadenie nákladov
systémov, ktorých správanie žije v promptoch, verziách modelov, indexoch a konfiguráciách, a nie len v kóde.
MLOps špecializovaný na aplikácie nad základovými modelmi.

**Canary release (kanárikové nasadenie)** — smerovanie malého podielu živej prevádzky na nový variant
(prompt, model, index) so sledovaním metrík kvality a nákladov; regresia sa prejaví na zlomku používateľov a
dá sa lacno vrátiť späť. ↗ [Martin Fowler](https://martinfowler.com/bliki/CanaryRelease.html)

**Shadow deployment (tieňové nasadenie)** — nový variant beží na zrkadlenej produkčnej prevádzke a jeho
odpovede sa používateľom nikdy neukazujú; bezpečné porovnanie kvality na reálnych požiadavkách.

**Prompt registry (register promptov)** — verziované úložisko promptov oddelené od nasadení kódu; produktové
tímy iterujú prompty bez nasadzovania kódu a každá produkčná odpoveď zostáva priradená k presnej verzii
promptu.

**Model pinning (pripnutie modelu)** — pripnutie produkcie na presné ID snímky modelu namiesto plávajúceho
aliasu; aktualizácia modelu u poskytovateľa sa tak stáva explicitným nasadením, ktoré stráži eval, a nie
tichou zmenou správania.

**Model routing (smerovanie medzi modelmi)** — poslanie každej požiadavky najlacnejšiemu modelu, ktorý ju
zvládne; smerovač môže byť pravidlo, klasifikátor alebo model. Odlišné od smerovania dopytov (ktorý index,
Časť I) a výberu nástroja (ktorý nástroj, Časť II): toto vyberá, ktorý model odpovedá.

**Fallback (záložná cesta)** — vopred nakonfigurovaná alternatíva — iný región, iný poskytovateľ, lacnejší
model — na ktorú systém prepne, keď primárny model chybuje alebo naráža na limity.

**LLM gateway (LLM-brána)** — vrstva, ktorá centralizuje prístup k modelom za jedným API: smerovanie,
fallbacky, kľúče, rozpočty a limity počtu požiadaviek na tím (LiteLLM, OpenRouter).

**Prompt caching (cachovanie promptu)** — cachovanie opakovaného prefixu promptu na strane poskytovateľa
(systémový prompt, príklady, statický kontext); cachované vstupné tokeny sa účtujú s veľkou zľavou, takže
prompty sa navrhujú s dôrazom na statický prefix.

**Semantic caching (sémantické cachovanie)** — vrátenie uloženej odpovede na takmer duplicitnú otázku,
spárovanú podľa podobnosti embeddingov; ušetrí náklad celej požiadavky za cenu rizika falošného zásahu pri
jemne odlišnej otázke.

**Drift** — svet sa posúva pod nemennou konfiguráciou: drift vstupu (prevádzka sa pýta nové druhy otázok),
drift korpusu (dokumenty starnú), drift modelu zhora (poskytovateľ zmení nepripnutý model).

**Grader (hodnotiteľ)** — pri reinforcement fine-tuningu skórovač, ktorý si zadefinuješ a ktorý hodnotí
každú kandidátsku odpoveď; jeho skóre je signál odmeny, proti ktorému sa trénovanie optimalizuje.

**Showback (zobrazenie nákladov)** — vykazovanie každému tímu, funkcii alebo produktu jeho vlastných
LLM-výdavkov pre viditeľnosť, pričom náklad zostáva na centrálnom rozpočte; základ FinOps, ktorý je vždy
potrebný ako prvý.

**Chargeback (preúčtovanie nákladov)** — fakturovanie LLM-výdavkov späť do P&L spotrebúvajúceho tímu alebo
produktu; silnejšia zodpovednosť ako showback, ale dôveryhodná až vtedy, keď je priradenie nákladov presné.

**Release gate (releasová brána)** — kontrola kvality, ktorá stojí medzi zmenou a produkciou: eval-in-CI z
pohľadu vydania, blokujúca zlúčenie alebo nasadenie, ktorého metriky na golden sete klesnú pod prah.

**Error budget policy (politika rozpočtu chýb)** — dohoda podpísaná pred incidentom, ktorá stanovuje, čo sa
stane pri vyčerpaní rozpočtu chýb — typicky release freeze — a menuje, kto akú akciu vykoná.

**Release freeze (zmrazenie vydávania)** — zastavenie všetkých nekritických vydaní (okrem P0 a bezpečnostných
opráv), kým sa služba nevráti do rámca svojho SLO; posledná záchranná páka, ktorú spúšťa politika rozpočtu
chýb.

**Job queue (fronta úloh)** — infraštruktúra, ktorá oddeľuje tempo príchodu práce od tempa jej spracovania:
producent zaradí úlohu a okamžite dostane ID, a fond workerov asynchrónne vyprázdňuje frontu.

**Dead-letter queue (DLQ) (fronta nedoručených úloh)** — bočná fronta pre úlohy, ktoré vyčerpali svoje
opakovania; bráni otrávenej úlohe zaseknúť hlavnú frontu a jej rast je signál hodný upozornenia.
