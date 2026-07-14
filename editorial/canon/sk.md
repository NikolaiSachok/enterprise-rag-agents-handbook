# Style canon — slovenský kánon (sk)

> **Jazyk tohto súboru:** slovenčina (prezentačná sekundárna lokalita, skladaná natívne z anglického významu).
> Je to jedna z **pre-jazykových** vetiev kánonu. Kross-jazykový chrbát — princípy, ktoré dedia všetky lokality
> (čo je kánon; pravidlo mostov; rozpočty polotučného a metafor; skúšobná doba figúr; sense-card; jednotky knihy;
> „register viaže význam, nie reťazec") — žije v **routeri** `../style-canon.md`. Ruský/anglický kánon je v
> `./ru.md`. Slovenčina **zrkadlí jeho tvar**, nekopíruje jeho rozhodnutia. Slovenský kánon navyše **dedí
> štruktúrne kontroly Gate 2a** z redakčnej `editorial-team` skille (gramatická kotva, explicitný predmet,
> rozpočet metafor, delenie súvetí, kontrola zhody) a autorský postup „najprv význam" — tie žijú v skillach; tento
> kánon iba pomenúva slovenské pasce navyše.

Kánon slovenskej lokality príručky Enterprise RAG & Agents Handbook. Je to **normatívny** dokument rovnako
ako ruská a anglická časť vyššie: nové slovenské stránky sa píšu podľa neho a odchýlky nájdené v korpuse sa
opravujú podľa neho. Slovenský kánon žije spolu s textom — jeho aktualizácia ide **v tom istom PR** ako stránka,
kvôli ktorej vznikla. Procesné pravidlá (redakčné prechody, kontrolné zoznamy) žijú v `CLAUDE.md` a v
`editorial/sk-locale-playbook.md`; tu sú iba jazykové a štruktúrne normy.

Slovenská časť sa píše **natívne z anglického významu**, nikdy prekladom vety po vete. Anglická stránka je
kánonická (`docs/`), ruská je paralelná lokalita (`i18n/ru/`) a slovenská je ďalšia paralelná lokalita
(`i18n/sk/`). Slovenský kánon **zrkadlí tvar** ruského/anglického kánonu, nekopíruje jeho rozhodnutia:
slovenčina má vlastnú množinu kept-EN termínov (väčšiu než ruština), vlastnú sústavu falošných priateľov a
jeden problém navyše, ktorý ruština ani angličtina nemajú — **český interferenčný tlak**.

### Metóda: čo je v skillach a čo je tu

**Štruktúrne a metodické kontroly žijú v skillach, nie v kánone.** Slovenský text dedí z redakčnej
`editorial-team` skille **Gate 2a** — gramatická kotva, explicitný predmet (calls WHAT — nástroj),
rozpočet metafor, delenie anglických súvetí, kontrola zhody (číslo/rod/pád) — a z `authoring-team` skille
autorský postup **„najprv význam, potom próza natívne v jazyku“**. Tie sú **jazykovo neutrálne** a
nepatria sem. Tento kánon pomenúva iba **slovensko-špecifické pasce**: kept-EN doktrínu (§1.1), natívne
tvary a rezervácie (§1.2, §2), anti-bohemizmus (§1.3), EN→SK kalkové šablóny (§1.4), typografiu, register a
figúry. Kross-jazykové princípy (mosty, rozpočty, skúšobná doba figúr, sense-card, jednotky knihy) sú v
routeri `../style-canon.md`.

### Jazyková pára a rola locale

Slovenčina je **prezentačná sekundárna lokalita**, skladaná natívne z anglického významu. Čítať ju budú
rodení Slováci ako výkladnú skriňu knihy, preto je latka na text rovnaká ako pri ruštine — očividne strojový
preklad je horší než žiadna slovenská verzia.

Rozhodujúce obmedzenie: **autor slovenčinu nedokáže korigovať** tak, ako koriguje ruštinu. Za ruský text
ručili „brány plus autorovo posledné oko“; za slovenský text ručia **iba brány**. To dvíha latku na brány,
nikdy ju neznižuje na text. Každý mechanizmus kvality, ktorý mal pri ruštine ľudskú poistku, tu beží bez nej:
plný redakčný tím v slovenskej konfigurácii, povinný studený prechod **dvakrát** v oddelených sedeniach a
overovanie kolokácií cez živý slovenský web.

Slovenčina je pre modely jazyk s menším objemom zdrojov než ruština alebo angličtina a má jedno úskalie, ktoré ostatné dva
nemajú: **český interferenčný tlak** — české tvary slov, české kolokácie a česko-slovenskí falošní priatelia
presakujú do slovenskej prózy, lebo tie dva jazyky sú si dosť blízke na to, aby ich model zmiešal. Bohemizmus
je pre slovenčinu presne to, čím je pre ruštinu anglicizmus: **pomenovaná, stále zapnutá kontrola**. Ako
anglicizmus v ruštine ohlási kalk, tak bohemizmus v slovenčine ohlási, že text prešiel cez češtinu a nie cez
slovenský význam. Anti-bohemizmus preto v tomto kánone dostáva vlastnú sekciu (§1.3) a nesie ho literárny
redaktor pri každej stránke.

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

### §1.0 Trojtriedna politika termínov (smer termínu — jedno rozhodnutie, celý korpus)

Každý odborný termín patrí do jednej z troch tried a **smer** (anglicky vedený vs slovensky vedený) sa
rozhoduje raz a platí pre celý korpus. **Kolísanie smeru v rámci stránky je defekt** rovnako ako porušená
sémantická rezervácia (§2) — tá istá stránka nesmie raz písať „prísny režim“ a inokedy „strict mode“ ako
názov termínu.

- **Trieda 1 — presné identifikátory a branded fičúry:** anglicky, kódovým písmom alebo ako vlastné meno,
  nikdy sa neprekladajú: `parallel_tool_calls`, `tool_choice`, `strict: true`, `additionalProperties`,
  **Structured Outputs** (názov fičúry OpenAI), názvy produktov a modelov (§1.1 záver).
- **Trieda 2 — všeobecné koncepty s prirodzeným slovenským ekvivalentom:** **slovensky vedené**, anglický
  originál raz v zátvorke pri prvom výskyte, ďalej už len slovensky: **prísny režim (strict mode)**,
  **obmedzené dekódovanie (constrained decoding)**, **idempotencia (idempotency)**, **kľúč idempotencie
  (idempotency key)**, **validácia argumentov (argument validation)**; od v4 aj **štruktúrovaný výstup
  (structured output)**, **skúšobné spustenie (dry-run)**, **princíp najnižších oprávnení (least
  privilege)** a **dynamický výber nástrojov (dynamic tool loadout)** — pozri Fázu 4. *(Toto VRACIA skoršie rozhodnutie
  Fázy 2b, ktoré tieto termíny držalo kept-EN — recenzia v2 potvrdila, že vývojárska slovenčina tu domáci
  tvar má a kept-EN pôsobil ako nedôvera k vlastnému jazyku. Jedno rozhodnutie, celý korpus.)*
- **Trieda 3 — vedome ponechané anglické dev-termíny (kept-EN, §1.1):** neskloňovaný anglický tvar
  pripojený k slovenskej hlave („nástroj v strict mode“ ✗ → po novom Trieda 2; „krok fan-out“, „blok
  `tool_use`“ ✓), slovenský glos raz pri prvom výskyte. Trieda 3 je vždy **vedomá, v ledgeri zapísaná
  výnimka** — pri každom člene stojí poznámka, prečo ostáva anglicky vedený. K v4 sem patrí **race
  condition** (zaužívaný dev-termín; „súbehová chyba“ čaká na kontrolu rodeným Slovákom) — pozri poznámku
  pod §1.2.

**Čistota glosu (gloss purity).** Anglický originál v zátvorke pri slovensky vedenom termíne musí byť
**skutočná angličtina**, nikdy hybrid: „chyba počas behu **(runtime error)**“ ✓ — „(runtime chyba)“ ✗.
Rovnako slovenský glos pri kept-EN termíne je čistá slovenčina. **Poradie prvého výskytu:** most sa stavia
pri **prvom** výskyte termínu na stránke — termín nesmie stáť holý skôr, než ho stránka zavedie (video-popis
sa nepočíta za zavedenie, §7, ale ani v ňom nesmie stáť tvar, ktorý čitateľ ešte nevie dekódovať bez
anglickej stránky).

### §1.1 Termíny, ktoré ostávajú anglické (kept-EN)

Bez ustáleného slovenského ekvivalentu; píšu sa latinkou, pri **prvom výskyte na stránke** dostanú krátky
slovenský vysvetľujúci glos v zátvorke, ďalej už bez neho. Skloňujú sa slovenskými koncovkami tam, kde to
znie prirodzene (chunku, chunkov, embeddingy, frameworky, tracov, spanov, tokenov).

**Doktrína, ktorá odlišuje slovenčinu od ruštiny: slovenčina si necháva VIAC angličtiny.** Slovenská
vývojárska reč berie anglický termín tam, kde ruština razí domáci — netlač slovenský novotvar, keď komunita
hovorí anglické slovo. Predtým, než niekto vyrazí slovenský tvar pre termín z tohto zoznamu, **over
kolokáciu cez živý web**: ak dvojica sloveso + podstatné meno alebo samotný tvar vracia **iba české zásahy**,
je to bohemizmus, nie slovenčina (§1.3). Pravidlo glosu pri prvom výskyte platí aj tu: kept-EN termín dostane
slovenský glos v zátvorke raz na stránku (na dlhej stránke osvieženie pri prvom výskyte v novej veľkej
sekcii), ďalej holá latinka.

Nasledujúce termíny ostávajú v slovenčine anglické (latinkou):

*RAG, ingestion, retrieval, generation, guardrails, observability, serving, pipeline, MCP, LLM, LLMOps, Docker,
embedding, chunk, chunking, chunk overlap, bi-encoder, cross-encoder, reranking, reranker, LLM reranker,
trace, tracing, span, grounding, prompt, token, top-K, HyDE, BM25, RRF, nDCG, MRR, ColBERT, MaxSim,
late interaction, multi-vector, contextual retrieval, hybrid search (ako názov; glos „hybridné
vyhľadávanie“), zero-shot, few-shot, faithfulness, golden set, LLM-as-a-judge, ReAct, Self-RAG, corrective
RAG (CRAG), adaptive RAG, plan-and-execute, Tree of Thoughts (ToT), Graph of Thoughts (GoT), LATS,
Self-Refine, Reflexion, MemGPT, chain-of-thought, chain-of-verification (CoVe), self-consistency, scratchpad,
context precision, context recall, reference-free, reference-based, pointwise, pairwise, IAA, kappa, active
sampling, prompt injection, jailbreak, spotlighting, delimiting, datamarking, encoding (technika spotlightingu),
instruction hierarchy, PII, red-teaming, defence-in-depth, ASR, tool poisoning, rug pull,
confused deputy, roots, sampling (MCP), elicitation, stdio, streamable HTTP, JSON Schema,
Structured Outputs (branded fičúra OpenAI — Trieda 1), race condition (Trieda 3 — vedomá výnimka, §1.0/§1.2), tool-RAG,
lost-in-the-middle, HITL (human-in-the-loop), checkpointing, checkpointer, checkpoint, StateGraph, store,
durable execution, super-step, thread (thread_id), A2A, FIPA ACL, blackboard, Agent Card, TTFT, SSE,
PagedAttention, continuous batching, prefill, decode, chunked prefill, prefix caching, KV-cache, FP8/INT8/INT4,
AWQ/GPTQ, tensor/pipeline/data parallelism, MIG, GPU time-slicing, KEDA, KServe, Knative, Ray, serverless GPU,
ASGI workers, uvloop, threadpool, backpressure, load shedding, admission control, Little's Law,
iteration-level scheduling, cold start, scale-to-zero, on-demand, OpenAI-compatible API, managed endpoint,
provisioned throughput, batch mode, managed RAG, vendor lock-in, fine-tuning, SFT, DPO, RFT, LoRA, PEFT,
model distillation, continued pre-training, managed agent runtime, FinOps, unit economics, committed-use
discount, context caching, egress, multi-cloud gateway, digital sovereignty, sovereign cloud, air-gapped,
source-available, instrumentation, OpenTelemetry (OTel), safety classifier, canary release, shadow
deployment, prompt registry, model pinning, model routing, fallback, LLM gateway, prompt caching, semantic
caching, drift, grader, showback, chargeback, release gate, error budget, error budget policy, release
freeze, burn-rate, job queue, dead-letter queue (DLQ), SLI, SLO, SLA, IAM, golden signals, head-based /
tail-based sampling, priority sampling, retention, cost attribution, token accounting, latency budget, soft
cap / hard cap, alert (alerting), dashboard, Matryoshka (MRL), OCR, layout-aware, vision-language, MTEB,
contrastive learning, hard negatives, extended thinking, interleaved thinking, reasoning effort, thinking
budget, hooks, callbacks, permission modes.*

*(Vo v4 preklasifikované do Triedy 2 a presunuté do §1.2: structured output, dry-run, least privilege,
dynamic tool loadout — pozri Fázu 4.)*

**Termíny s povinným slovenským glosom pri prvom výskyte** (termín ostáva anglický, glos ho dekóduje): fine-tuning
„(doladenie modelu)“, guardrails „(bezpečnostné mantinely)“, grounding „(opretie odpovede o kontext)“, store
„(dlhodobá pamäť frameworku)“, OCR „(optické rozpoznávanie znakov)“, scale-to-zero „(škálovanie na nulu)“,
on-demand „(platba za tokeny)“, zero-shot „(bez trénovacích príkladov)“, backpressure „(ochrana pred
zahltením)“, load shedding „(zhadzovanie záťaže)“, race condition „(súbehová chyba)“ — glos smie byť aj
rozvitý vetou („dve súbežné volania pristupujú k rovnakému zdieľanému prostriedku a výsledok závisí od
náhodného časovania“ — kolokácia „siahnu na to isté“ vyradená vo v4, §1.4), nikdy však
holé „(súbeh)“. V glosári smie kept-EN heslo niesť aj ustálený domáci
ekvivalent pred funkčným glosom: „**Backpressure (protitlak — ochrana pred zahltením)**“. Kvantizácia (quantisation) má ustálený **slovenský** tvar
**kvantizácia** — píše sa slovensky, nie kept-EN.

**Holé názvy prijímajú NULOVÝ glos** — rovnako, ako ich necháva ruský glosár: BM25, HyDE, ColBERT, ReAct, MRL,
RRF, nDCG, MRR, LATS, MemGPT, MaxSim, kódové identifikátory a názvy produktov. Vysvetľuje sa až definícia v
glosári, nie samotné meno.

**Názvy produktov, frameworkov a modelov** sú vlastné mená a ostávajú latinkou v každej lokalite, nikdy sa
netransliterujú: LangChain, LangGraph, LlamaIndex, Microsoft Agent Framework, Semantic Kernel, AutoGen,
CrewAI, LangSmith, FastAPI, Pydantic, uvicorn, gunicorn, Kubernetes, Helm, vLLM, SGLang, Ollama, Hugging
Face, Bedrock, Vertex AI, Azure OpenAI, Ragas, DeepEval, promptfoo, Langfuse, Arize Phoenix, NeMo Guardrails,
Llama Guard, Granite Guardian, Model Armor, Presidio, PyRIT, LiteLLM, OpenRouter, ClickHouse, PostgreSQL,
Redis, Celery, RabbitMQ, Claude, GPT, Gemini.

**Kódové skratky** — ako sú, veľkými: ACL, PII, ASR, MCP, KB, RRF, MRR, nDCG, HITL, A2A. **Názvy vrstiev** —
s veľkým začiatočným písmenom: Ingestion, Retrieval, Generation, Agentic RAG.

### §1.2 Natívne slovenské formy (tabuľka)

Tieto termíny sa v tele lekcie píšu **slovensky**; pri prvom výskyte na stránke dostanú **anglický originál
v zátvorke** (opačný smer mosta než kept-EN, §7): `**Riadenie prístupu (access control, ACL)** — …`.
Stĺpec „Odmietnuté“ drží konkrétne varianty, ktoré sa razili a zamietli — vrátane bohemizmov (✗).

| Kánon | Originál | Odmietnuté |
|---|---|---|
| vyhľadávanie | retrieval (ako činnosť v tele) | české „vyhledávání“ ✗; „retrív“, „retrívy“ |
| prehľadávanie | search over a tree/graph (algoritmický prechod) | „vyhľadávanie“ (= retrieval, §2) pre prehľadávanie stromu/grafu |
| generovanie | generation (ako činnosť) | české „generování“ ✗ |
| dopyt | query (SQL / vyhľadávanie) | české „dotaz“ ✗ |
| otázka | query (otázka používateľa) / question | „dotaz“ ✗ |
| odpoveď | answer | české „odpověď“ ✗ |
| zlyhanie | failure (názov taxonomickej kategórie) | české „selhání / selhanie“ ✗; „výpadok“ ako názov kategórie (§2) |
| chyba | error / jednotlivý incident / bug | „zlyhanie“ pre jednotlivý incident (§2) |
| výpadok | outage | „zlyhanie“ (§2); „výpadek“ ✗ |
| pád; zlyhanie behu | crash / crashed call | „pád“ pre kategóriu (§2) |
| evaluácia; hodnotenie | evaluation (disciplína/proces) | „evaluace“ ✗; kalk vetnej stavby |
| skóre | the number a judge/model emits | „hodnotenie“ pre číslo ✗ (§2) |
| zaujatosť (sudcu) | (judge) bias | „predpojatosť“ ako ustálený termín ✗; „skreslenie“ na vstupných bodoch |
| hodnotiace kritériá | rubric | „rubrika“ ✗ (falošný priateľ — novinová rubrika) |
| úryvok | passage | „pasáž“ ✗ (falošný priateľ) |
| odkaz | reference (citácia) | „referencia“ ako termín ✗ |
| referenčná odpoveď; etalón | reference answer / ground-truth answer | „referenčná“ mimo tejto dvojice; „etalón pravdy“ (kalk) |
| spätná väzba | feedback | „fídbek“ ✗; česká „zpětná vazba“ ✗ |
| riadenie prístupu | access control (v zoznamoch: access control (ACL)) | „kontrola prístupu“ (kalk control = kontrola) |
| smerovanie; smerovač | routing; router | „router“ ✗ v tele; „routovanie“ |
| rozhodnutie | decision | (slovenčina má dve čisté slová — pozri riešenie) |
| riešenie | solution | „rozhodnutie“ pre solution (dvojica je čistá, §2) |
| poskytovateľ | provider | „dodávateľ“ pre prevádzkovú rolu (§2) |
| dodávateľ | vendor | „poskytovateľ“ pre obchodnú stranu (§2) |
| výstup | output | „výstup“ pre inferenciu; holý „výstup“ bez majiteľa pri modeli (§2) |
| inferencia | inference | „vývod“ / „výstup“ pre inference ✗ |
| vrstva | layer (vrstva knihy aj vrstva obrany) | holá „vrstva“ tam, kde súperia obidve čítania (§2) |
| pamäť | memory | česká „paměť“ ✗; holá „pamäť“ mimo rámca (§2) |
| tok riadenia | control flow | holý „tok“ tam, kde je možné čítanie stream (§2) |
| prúd tokenov | stream of tokens | „tok tokenov“ tam, kde sa pletie s tokom riadenia |
| nasadenie; nasadiť | deployment; deploy | „deploy“ v tele po moste; „deployment“ ✗ |
| prierezové aspekty | cross-cutting | „prierezové“ bez podstatného mena |
| nezastavenie (cyklu); cyklus sa nezastaví | non-termination | „odmietnutie“ / „režim odmietnutia“ (rezervácia §2) |
| prevádzkovaný u seba; prevádzka u seba | self-hosted; self-hosting | „self-hostovaný“ ✗ |
| orchestrátor | orchestrator | „orchestrátor“ ostáva; „koordinátor“ ako názov konštrukcie |
| supervízor | supervisor | „dozorca“ ako termín |
| subagent; agent-vykonávateľ | worker / sub-agent | „worker“ (agenta) ✗ v tele; „pracovník“ |
| worker; pracovný proces | worker process (serving) | (worker agenta → subagent; toto je serving-worker) |
| odovzdanie riadenia | handoff | „handoff“ ✗ v tele; „predanie“ bez „riadenia“ |
| reťaz agentov | agent chain | „pipeline agentov“ ✗ (pipeline je statická, §2); česká „řetěz…“ ✗ |
| kvantizácia | quantisation | „kvantovanie“ ✗ (v SK ML-úze je „kvantizácia“) |
| definícia nástroja | tool definition | „tool definition“ latinkou v tele; skloňovaný EN tvar (`tool definition-u`) ✗; „opis nástroja“ iba pre pole *description* |
| volanie nástroja | tool call | „tool call“ latinkou v tele (v schéme/kóde OK); skloňovaný EN tvar `tool callu`/`tool cally` ✗ |
| výsledok volania; výsledok nástroja | tool result | „tool result“ latinkou v tele |
| výber nástroja | tool selection | „smerovanie“ ako synonymum (iná úroveň — výber trasy/indexu, nie výber nástroja modelom v cykle; §Karta 8) |
| paralelné volania nástrojov | parallel tool calls | flagy ako kód (`parallel_tool_calls`, `disable_parallel_tool_use`) |
| sada nástrojov; zoznam nástrojov | tool set | **„súbor nástrojov“ ✗** — „súbor“ = file; rezervuj „súbor“ pre súbor |
| dynamický výber nástrojov | dynamic tool loadout | Trieda 2 (v4): slovensky vedené, most raz. „loadout“ (herné) ✗; „dynamický súbor nástrojov“ ✗ („súbor“ = file); „dynamicky vybraná sada nástrojov“ (v3) nahradená kratším tvarom |
| limit opakovaní; maximálny počet pokusov | retry budget | (zrkadlí „rozpočet krokov“; most `(retry budget)` raz; kept-EN len pre presne pomenovaný koncept) |
| vedľajší účinok | side effect | „sajd-efekt“ ✗ |
| viacvrstvová ochrana | defence-in-depth | (most; termín ostáva kept-EN, §1.1; „obrana do hĺbky“ v opisnej próze, §Fáza 2) |
| chyba počas behu | runtime error | **„defekt v behu“ ✗; „chyba behu“ ✗**; glos vždy čistá angličtina „(runtime error)“, hybrid „(runtime chyba)“ ✗ (§1.0) |
| prísny režim | strict mode | „striktný režim“ ✗; „striktný / neštriktný nástroj“ ✗ → „nástroj v prísnom režime / bez prísneho režimu“; branded **Structured Outputs** ostáva EN (Trieda 1) |
| obmedzené dekódovanie | constrained decoding | „striktné dekódovanie“ ✗ (mieša fičúru a mechanizmus) |
| idempotencia | idempotency | (Trieda 2, §1.0 — predtým kept-EN, zvrátené) |
| kľúč idempotencie | idempotency key | („kľúč“ aj „idempotencia“ natívne) |
| validácia argumentov | argument validation | |
| štruktúrovaný výstup | structured output | Trieda 2 (v4) — „structured output“ ako vedený tvar v tele ✗; branded **Structured Outputs** ostáva EN (Trieda 1) |
| skúšobné spustenie | dry-run | Trieda 2 (v4) — predtým kept-EN s glosom; presný tvar `dry-run` ostáva v kóde/UI a v moste |
| princíp najnižších oprávnení | least privilege | Trieda 2 (v4) — predtým kept-EN §1.1; webom overené (sk.wikipedia „princíp najnižšieho privilégia“, smernice NBÚ/SAAVS); „princíp najmenších oprávnení“ ✗ (slabé slovenské doklady) |
| race condition (súbehová chyba) | race condition | **kept-EN primárny tvar** (Trieda 3, §1.0); bare **„súbeh“ = concurrency, NIE chyba** — sémanticky nesprávny názov chyby (§1.3, blocklist); v1 záložný tvar „súbeh (race condition)“ **zrušený** — pozri poznámku pod tabuľkou |

Ustálené prijaté prevzatia, ktoré ostávajú (dev-úzus, ako „chunking“): **dashboard** (nie „nástenka“ ako
termín), **alert / alerting** (nie „upozornenie“ ako termín), **framework** (skloňovaný: frameworku,
frameworky). **Enterprise** ostáva latinkou iba vo vlastných menách a v ustálenom nálepkovom „enterprise
RAG“; v próze „podnikový, podnikové prostredie“. **zdieľať / zdieľaný / zdieľanie** — prísni normativisti ho
vedú ako bohemizmus (české *sdílet*), no v **ustálených technických spojeniach** je v slovenskom IT-úze
štandardné a **ponecháva sa**: „zdieľaná pamäť“, „zdieľaný objekt stavu“, „zdieľanie GPU“. Ako holé sloveso
mimo takého spojenia mu radšej vyhni („mať spoločnú verziu“, nie „zdieľať verziu“).

**Konvencie a zosúladenie s kept-EN (pilot „tool use“, #64 — reconciliácia so §1.1).** Kde sa pilotné
odporúčanie prekrýva s ustáleným kept-EN termínom, drží sa **kept-EN termín, natívny tvar je most/glos**:

- **strict mode → ZVRÁTENÉ v3 (trojtriedna politika, §1.0): slovensky vedený „prísny režim (strict mode)“.**
  Most raz pri prvom výskyte, ďalej „prísny režim“; presné API-tvary (`strict: true`) a branded **Structured
  Outputs** ostávajú anglické (Trieda 1). Stále platí: **nemiešaj** „striktný/striktné“ ako názov termínu.
- **constrained decoding → ZVRÁTENÉ v3 (§1.0): slovensky vedený „obmedzené dekódovanie (constrained
  decoding)“.** Most raz, ďalej „obmedzené dekódovanie“; „striktné dekódovanie“ ostáva ✗ (mieša fičúru a
  mechanizmus).
- **retry budget** — kept-EN len ako presne pomenovaný koncept; v tele natívne „limit opakovaní / maximálny
  počet pokusov“ (§1.2).
- **backoff** — kept-EN termín; glos „(postupné predlžovanie intervalu medzi pokusmi)“.
- **dry-run → Trieda 2 (v4): slovensky vedené „skúšobné spustenie (dry-run)“** — most raz pri prvom
  výskyte, ďalej slovensky; presný tvar `dry-run` ostáva v kóde a UI. „Režim nanečisto“ žije v bežnej
  vete, nie ako názov termínu (obe podoby overené ako slovenské).
- **human-in-the-loop / HITL** — kept-EN (§1.1); v próze „schválenie človekom / človek v rozhodovacom procese“.
  **Nepoužívaj mechanické „človek v slučke“** ako predvolený preklad (§1.3, blocklist).
- **router** — most „router **(smerovač)**“ pri prvom výskyte, potom projektový termín; pozor, „smerovač“ môže
  evokovať sieťový hardvér — v rámci, kde hrozí zámena, uprednostni „router“ / projektový termín.

> **Navrhované, čaká na kontrolu rodeným Slovákom (nie ešte usadený kánon).** Tieto tvary sú **re-derivované
> z AI-recenzií s poškodeným kódovaním**, preto ich vedieme s výslovnou výhradou, kým ich neschváli rodený
> Slovák (rodená naturálnosť je ground truth):
> - **race condition — rozhodnuté (v3): kept-EN primárny tvar „race condition (súbehová chyba)“.** Recenzia
>   v2 potvrdila, že bare „súbeh“ je **sémanticky nesprávny** — *súbeh* znamená súbežné vykonávanie
>   (concurrency), nie chybu z časovania; v1 záložný tvar „súbeh (race condition)“ preto **prestáva platiť**
>   (žiadny glos nezachráni nesprávne slovo ako názov chyby). Slovenskí vývojári hovoria anglický termín,
>   preto je primárny tvar kept-EN; „súbehová chyba“ žije ako slovenský glos. Ako **samostatný** názov termínu
>   je „súbehová chyba“ stále novotvar bez jasných webových dokladov (dominuje české „souběh“) — **čaká na
>   kontrolu rodeným Slovákom**; dovtedy sa nepíše samostatne, iba ako glos pri kept-EN termíne.
> - **„postupné predlžovanie intervalu (medzi pokusmi)“** (backoff) je opisný glos, prirodzený, ale dlhý —
>   znenie tiež overí rodený Slovák.
> - **„zotaviteľná chyba (recoverable error)“** — prípona -teľný sa tvorí od prechodných slovies, „zotaviť
>   sa“ je zvratné; tvar je zaužívaný v CS/SK učebniciach, ale morfologicky sporný — čaká na kontrolu
>   rodeným Slovákom (studený prechod v4 ho spochybnil, v texte zatiaľ ostáva s glosom). Všetky ostatné tvary vyššie (definícia/volanie/výsledok/výber nástroja,
>   sada nástrojov, vedľajší účinok, chyba počas behu, skúšobné spustenie, schválenie človekom, viacvrstvová
>   ochrana) sú morfologicky čisto slovenské alebo webom overené a vedú sa ako **usadené**.

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
- opraviť predpoklad ✗ → predpoklad výslovne obmedziť/usmerniť (v systémovom prompte)
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

### §2 Sémantické rezervácie (sense cards)

Jedno slovo — jeden význam na celý korpus. Porušenie rezervácie je defekt, aj keď je veta sama osebe správna.
Slovenčina má na štyroch miestach **čisté páry**, kde ruština trpela mnohoznačnosťou — tam kartu netreba, ale
rozdelenie sa drží (nižšie).

**Karta 1 — zlyhanie vs chyba vs výpadok (zrkadlí ruské провал/сбой).** „Zlyhanie“ je **názov taxonomickej
kategórie** — ktorá etapa pipeline je na vine: „zlyhanie vyhľadávania“, „zlyhanie generovania“, nezastavenie
cyklu. Jednotlivý incident, neúspešná validácia či spadnuté volanie **nie sú „zlyhanie“**: „chyba“ (error),
„výpadok“ (outage), „pád“ (crash). Rozhodujúca otázka pred napísaním slova: **je to NÁZOV triedy (ktorá etapa je
na vine), alebo JEDNOTLIVÝ incident?** → kategória-etapa → „zlyhanie“; jednotlivé zlyhanie → „chyba“ /
„výpadok“. Preto: „zlyhanie validácie“ ✗ → **„chyba validácie“** (jednotlivá udalosť kontroly). Úspešný útok
v guardrails je „úspešný útok“ / „prienik“, **nikdy „zlyhanie“** (§ guardrails).

**Karta 2 — evaluácia/hodnotenie vs skóre (zrkadlí ruské оценка/балл).** Disciplína, proces a akt merania =
**evaluácia / hodnotenie** („evaluácia pipeline“, „hodnotenie vyhľadávania“, „sudca hodnotí odpoveď“).
**Číslo**, ktoré model alebo sudca vydá, = **skóre**, nikdy „hodnotenie“: „skóre závisí od páru“ ✓ —
„hodnotenie závisí od páru“ ✗ (inak sa číslo číta ako známka/mienka). Hodnota, ktorú vydáva `value function`
či CRAG-evaluátor, je tiež **skóre**, nie „hodnotenie“.

**Karta 3 — vyhľadávanie = retrieval podľa predvoleného významu (zrkadlí ruské поиск).** Holé
„vyhľadávanie“ v tele lekcie je vždy retrieval. Ostatné významy vyhľadávania žijú iba vo viazaných názvoch:
„webové vyhľadávanie“ (nástroj agenta), „vyhľadávanie nástrojov“ (tool-RAG). **Prehľadávanie stromu/grafu**
plánov (algoritmický prechod, ToT/GoT) je **„prehľadávanie“, nie „vyhľadávanie“** — iné slovo, aby sa
neplietlo s retrievalom.

**Karta 4 — pamäť: štyri významy, každý v rámci.** (1) Parametrická: „z pamäte“, „parametrická pamäť“ (čo
model vie bez podaného kontextu). (2) Pamäť agenta: „pracovná pamäť (scratchpad)“; v prehĺbeniach typy
dlhodobej — „epizodická / sémantická / procedurálna pamäť“. (3) Pamäť frameworku: delí sa na **jednej osi** —
stav viazaný na thread (krátky, checkpoint) vs **store** (dlhý, presahujúci hranice threadov). (4) Hardvér
v zoznamoch nákladov. Holá „pamäť“ iba vnútri rámca.

**Karta 5 — vrstva: tri významy.** (1) Krok pipeline/knihy: „vrstva Retrieval“,
„prehĺbenie vrstvy“, „mostík na vrstvu X“. (2) Architektonická/obranná: „obranná vrstva“, „obranu staviame do
vrstiev“, „defence-in-depth“. (3) Vrstva modelu (neurónovej siete): „váhové matice každej vrstvy“, ktoré
tenzorový a zreťazený paralelizmus rozdeľuje medzi GPU. Všetky môžu žiť na jednej stránke, ale každá veta drží
svoj rámec; holá „vrstva“ tam, kde súperia čítania, sa nepíše.

**Karta 6 — batch: tri významy (zrkadlí ruské батч).** (1) Plánovač inference-servera: kept-EN „batch“,
„continuous batching“. (2) Asynchrónna vrstva API: **„dávkový režim“**, nikdy „batch režim“. (3) Skupina
paralelných volaní nástrojov: **„skupina“**, nikdy „batch“ — „batch“ je rezervovaný pre (1) a (2).

**Karta 7 — thread / streaming / tok riadenia.** **thread** = kept-EN „thread“ (most „vlákno — rozhovor/beh“,
ďalej `thread_id` ako kód). **streaming** = „streaming“, nikdy „tok“. **control flow** = vždy plný kompaund
**„tok riadenia“**, nikdy holý „tok“ tam, kde je možné čítanie prúdu (napr. „potrebuješ tok, ktorý konfig
nevyjadrí“ ✗ → „tok riadenia“).

**Karta 8 — smerovanie: tri úrovne, rámec povinný.** (1) Časť I — predkontúrny výber indexu/nástroja (query
router). (2) Časť III — „model routing“ (smerovanie dopytov medzi modelmi). (3) Výber nástroja v cykle **NIE
je smerovanie** — je to „výber nástroja“. Holé „smerovanie“ iba vnútri rámca, ktorý jednoznačne fixuje úroveň.

**Čisté páry, kde je slovenčina LEPŠIA než ruština** (karta netreba, ale rozdelenie sa drží): decision
**rozhodnutie** / solution **riešenie**; provider **poskytovateľ** / vendor **dodávateľ**; output **výstup**
/ inference **inferencia**; failure-outage **výpadok** / failure-category **zlyhanie**. Ruština tu razí jedno
slovo pre dva významy (решение, поставщик, вывод) a musí ich rozvádzať rámcom; slovenčina má dve čisté slová,
tak ich drž oddelene a nezamieňaj.

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

### §4 Opakujúce sa bloky (presné reťazce)

Rozhodnuté raz, opätovne použité každou lekciou — presné znenie:

- **Uzatvárajúci nadpis lekcie (H2):** `## Čo si odniesť z lekcie` (EN „What to take away“). Na stránke z
  viacerých samostatných sekcií (ako Ingestion) sa na konci každej sekcie použije variant
  `### Čo si odniesť z tejto sekcie`.
- **Pätička s pojmami** — posledný riadok obsahu: `**Nové pojmy** → [Glosár](…): …` (EN „New terms“). Každá
  položka opakuje heslo glosára **bez slovenského glosu v zátvorke**; anglické zátvorky hesla sa zachovávajú
  („Riadenie prístupu (access control, ACL)“ → „access control (ACL)“; „Latency (p50 / p95)“ → „latency (p50
  / p95)“). Prvé písmeno malé, kanonické názvy vrstiev a vlastné mená si veľké písmeno držia.
- **Poznámka o prehĺbení** — na úplnom konci stránky, po `---`, kým je prehĺbenie ešte len naplánované:
  `:::note[Ďalej — prehĺbenie vrstvy]` + riadok `🚧 Druhý prechod: …`. Znak 🚧 vždy znamená „naplánované
  ďalším prechodom“, nikdy „základ nie je dopísaný“.
- **Keď je prehlbujúca stránka publikovaná**, 🚧-poznámka sa nahradí živým ukazovateľom (jednoduchým, bez
  marketingu): `:::note[Ďalej — druhá časť lekcie]` + riadok `**[<popisný štítok>](./deep-dive.md)** — <téma>`
  pomenúvajúci prehĺbenie jeho **popisným sidebar-štítkom** (nie „Časť 2 — Hlbšie“), potom `Pozri aj:` s
  faktickými odkazmi na susedné lekcie (zoznam-anons — mosty sa nestavajú, §7).
- **Video:** `:::tip[▶ Video]` + komponent `<YouTube id="…" title="…" />` + jeden riadok „prečo pozerať“.
  Keďže videá ostávajú anglické, riadok sa ukončí vetou `„(Video je v angličtine.)“` — rovnaká konvencia ako
  v ruštine. Ak sa žiadne video téme čestne nehodí, píše sa čestné „nie“ (žiadne video), presne ako pri
  ruských prehĺbeniach.
- **Statusová poznámka prehľadu časti:** `:::note[Stav]` s čestným 🚧, kým časť rastie.
- **Poznámka „Predpoklady“:** `:::note[Predpoklady]` — keď lekcia stojí na znalosti cudzieho nástroja, ktorý
  kniha neučí; vnútri je dovolený odkaz na oficiálnu dokumentáciu nástroja (jediná výnimka z pravidla
  „externé odkazy iba v glosári“, §5 ruského kánonu — `ru.md`).
- **Pravidlo H1:** frontmatter `title:` sa **nedotýka** (drží navigáciu, omrvinky aj kartu prehliadača); H1
  nesie **popisnú** formuláciu významu, prvé písmeno veľké (termín štylizovaný malým dostáva na začiatku H1
  veľké písmeno, §Typografia). Výnimka — glosár a intro: H1 = meno („Glosár“).

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

### §7.1 Rozhodnutia glosára (Fáza 1)

Zavedené pri bootstrape glosára; nové stránky ich dedia.

- **Smer hesla pre natívne slovenské termíny je jednotný: slovensky vedené, anglický originál v zátvorke**
  (§7). Platí pre všetky termíny z §1.2, nielen pre „Riadenie prístupu (access control, ACL)“ a „Smerovanie
  dopytov (query routing)“: „**Odovzdanie riadenia (handoff)**“, „**Reťaz agentov (agent chain)**“,
  „**Agent-vykonávateľ / subagent (worker / sub-agent)**“, „**Orchestrátor / supervízor (orchestrator /
  supervisor)**“, „**Inferencia (inference)**“, „**Nezastavenie cyklu (non-termination)**“, „**Smerovanie
  (routing / query router)**“, „**Kvantizácia (quantisation)**“. Zmena hesla mení slug — v Prvej fáze naň
  ešte žiadna lekcia neodkazuje, takže flip je bezpečný; neskoršie vlny musia cieliť na tieto slovenské slugy.
- **Glosár glosuje iba vlastné heslá.** Základné kept-EN primitíva (token, prompt, pipeline), keď sa objavia
  vnútri cudzej definície, sa na stránke glosára **neglosujú znova** — pravidlo prvého výskytu (§1.1/§7)
  viaže telo lekcií, nie krížové odkazy v rámci glosára.
- **tvrdý strop / mäkký strop** = hard cap / soft cap (rozpočtová politika). „tvrdý strop“ sa drží aj
  v rozpočtových heslách (retrieval / retry / step budget) kvôli páru s „mäkký strop“; nezamieňať za „pevný
  strop“, ktorý pár rozbíja.
- **Rozsahy: tesná pomlčka bez medzier** (10–20 %), nedeliteľná medzera pred percentom aj pred jednotkou.

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

### Fáza 2 — pilot „tool use“ (#64): rozhodnutia kánonu

Studený prechod **dvakrát** (bez ľudskej poistky) potvrdil nasledovné. Zapisuje sa sem, aby ďalšie vlny
dedili už rozhodnuté.

**Typografia — pomlčka vsuvky.** Locale používa **dlhú pomlčku (em-dash „—“) pre vsuvky**, nie krátku (en-dash
„–“); en-dash ostáva vyhradený iba pre číselné rozsahy (§Typografia). Rozhodnuté konzistenciou s existujúcim
slovenským korpusom (glosár, intro) a s ruskou paralelou; slovenský typografický zvyk uprednostňuje en-dash,
ale jednota locale má prednosť. (Studený literárny prechod to označil ako otvorenú otázku — týmto je zavretá.)

**Kalky z angličtiny — nové pasce (over kolokáciu, ✗ = kalk → ✓ = slovensky).** Náprotivok bohemizmov (§1.3),
lenže zdrojom je angličtina EN-skeletu:

- brať argumenty ✗ → **prijímať argumenty** („take arguments“)
- prísna deliaca čiara ✗ → **ostrá deliaca čiara** („strict line“ — „prísny“ patrí pravidlu/režimu, nie čiare)
- čo ti X kupuje / X kupuje argumenty ✗ → **čo X zaručuje / X dáva** („what X buys you“ — sloveso „kúpiť“ nenesie prenesený význam „získať“)
- doviesť okruh do majstrovstva ✗ → **rozobrať do posledného detailu / dotiahnuť do hĺbky** („bring to mastery“; „majstrovstvo“ číta ako šampionát)
- výstup jedného kŕmi ďalšie ✗ → **výstup jedného je vstupom pre ďalšie** („feeds“ — „kŕmiť“ je o zvierati)
- plocha zlyhania ✗ → **riziko zlyhania** (natívne je „plocha útoku“; „bod zlyhania“; „plocha zlyhania“ nie je úzus)
- vyhľadávanie **do** znalostnej báze ✗ → **vyhľadávanie v znalostnej báze** (predložka „do“ je kalk „into“)
- Ovládače (konfiguračné) ✗ → **Prepínače / ovládacie prvky** („controls/knobs“; „ovládač“ = driver/diaľkové)
- limit rýchlosti ✗ → **rate limit (strop na počet požiadaviek)** alebo „obmedzenie počtu požiadaviek“ („rate limit“; „limit rýchlosti“ = dopravný)
- škála (vo význame „scale = škálovanie“) ✗ → **škálovanie / škálovateľnosť** (falošný priateľ; „škála“ = stupnica/spektrum)
- odsúdené volanie (holé) ✗ → **volanie odsúdené na neúspech** („odsúdený“ vyžaduje doplnenie „na …“)
- domýšľať si **nad** výsledkom ✗ → **domyslieť si, čo vo výsledku nie je** (sporná väzba „nad + inštr.“; preformuluj)

**Figúry — výsledok skúšobnej doby (studený prechod ×2, naivný čitateľ dekódoval bez angličtiny).**
- POTVRDENÉ (dekódované pri prvom kontakte): **chyba ako prompt**; **fan-out / fan-in** *(pôvodný tvar
  „jeden ťah sa rozvetví na N … N výsledkov sa zloží späť“ preformulovaný vo Fáze 3: „jeden krok sa
  rozvetví na N paralelných volaní … N výsledkov sa spojí do jednej správy“ — „ťah“ je v §1.3 blockliste,
  „zloží späť“ je kalk fold back)*; ~~**stála daň**~~ — *ZRUŠENÉ v4: figúra „daň“ pre priebežnú
  réžiu vyradená → „stála réžia“ / „priebežné náklady“ (§1.4, Fáza 4)*; **cena kompilácie** *(variant
  „kompilačná daň“ vyradený spolu s figúrou „daň“, v4)*;
  **bezpečnostná hranica**; **kruh sa uzatvára**; ~~**súbeh (race condition)**~~ — *ZRUŠENÉ v3: „súbeh“ je
  sémanticky nesprávny názov chyby (= concurrency); platí kept-EN „race condition (súbehová chyba)“, §1.0/§1.2.*
- ODMIETNUTÉ (→ odmietnuté varianty): **„zápisy, ktoré zanechajú stopu“** (naivný čitateľ číta „stopu“ ako
  log/trace, nie nevratnosť) → nahradené **„zápisy s trvalým následkom“**; **„AI-delta“** ako holá menovka
  (nedekódovateľná bez angličtiny; „delta“ nie je slovenské slovo pre „rozdiel“) → v tele píš **„rozdiel,
  ktorý vnáša AI“**; obraz **fan-outu „pukne na N“** → nahradený „rozvetví sa na N“ (kontrolované vetvenie, nie
  prasknutie pod tlakom).

**Kept-EN doplnky.** **rate limit** vstupuje ako kept-EN termín s glosom pri prvom výskyte. **defence-in-depth**
(§1.1 kept-EN) smie v **opisnej próze** vystupovať aj natívne ako „obrana do hĺbky“, keď nie je pomenovaným
termínom stránky. ~~Sloveso **„vydať“** (vydá text/zámer/volanie/výstup) je ustálený autorský tvar korpusu pre
„emit/issue“ — ponecháva sa.~~ *ZRUŠENÉ v3: univerzálne „vydať“ je prekladový signál — sloveso sa vyberá
podľa predmetu (§1.5).*

**Anglická veta v tele (systémový prompt) dostáva slovenský preklad v zátvorke.** Literálny reťazec, ktorý
čitateľ vkladá do promptu, ostáva doslovne po anglicky, ale hneď za ním nasleduje „(v preklade: …)“, aby ho
jednojazyčný slovenský čitateľ vedel prečítať.

### Fáza 2b — re-edit pilotu „tool use“ (#64): usadené rozhodnutia

Publikačný re-edit oboch stránok (plný redakčný tím + studený prechod ×2) potvrdil a **usadil** nasledovné.
Ďalšie vlny to dedia; kde to spresňuje §1.2, má prednosť táto novšia formulácia.

- **Rodina `tool_*` termínov ide v tele NATÍVNE (potvrdenie §1.2).** V próze sa píše **definícia nástroja**,
  **volanie nástroja**, **výsledok nástroja / výsledok volania**, **výber nástroja** a **paralelné volania
  nástrojov**; anglický originál je most v zátvorke pri prvom výskyte na stránke (§7). Anglické tvary ostávajú
  **iba** v kóde a v Mermaid-artefaktoch protokolu (`tool call: …`, `tool_result`, `tool_use_id`), v heslách
  pätičky „Nové pojmy“ (opakujú heslá glosára) a v moste. Bare anglická fráza v tele ako podmet/predmet
  („Tool definition stojí tokeny“) je **gramatická kotva** — prepíš ju na natívnu hlavu („každá definícia
  nástroja zaberá tokeny“). Ad-hoc skloňovanie (`tool callu`, `tool cally`, „úspešná injection“) ostáva ✗ (§1.3).
- ~~**strict mode / constrained decoding — jeden tvar každý,** kept-EN.~~ *ZVRÁTENÉ v3 trojtriednou
  politikou (§1.0): obidva sú Trieda 2 — slovensky vedené **„prísny režim (strict mode)“** a **„obmedzené
  dekódovanie (constrained decoding)“**, most raz, ďalej slovensky. Naďalej platí: „striktné dekódovanie“ ✗,
  „striktný / neštriktný nástroj“ ✗ → „nástroj v prísnom režime / bez prísneho režimu“; `strict: true` a
  branded **Structured Outputs** ostávajú anglické (Trieda 1).*
- **router → most „router (smerovač)“ pri prvom výskyte** (Konvencie §1.2 majú prednosť pred riadkom tabuľky
  „router ✗ v tele“; „smerovač“ môže evokovať sieťový hardvér). V cykle ide o **výber nástroja**, nie
  smerovanie (Karta 8).
- **retry budget → v tele natívne „limit opakovaní (retry budget)“** (most raz), nie kept-EN ako názov v tele.
- **backoff — glos usadený:** „(postupné predlžovanie intervalu medzi pokusmi)“ (predtým na kontrolu; studený
  prechod ×2 ho potvrdil). Ruší predchádzajúce „(odstup medzi pokusmi; exponenciálny odstup)“.
- **runtime error:** v tele „**chyba počas behu** (runtime error)“ — glos je čistá angličtina, hybrid
  „(runtime chyba)“ ✗ (§1.0 čistota glosu; spresňuje staršie znenie tejto odrážky); „defekt v behu“ aj „chyba
  behu“ ostávajú ✗ (§1.2/§1.3).
- **„behové prostredie“ — kontroluj REFERENT, nie len termín (v3).** „Behové prostredie (runtime
  environment)“ je legitímny slovenský termín, ale iba pre **samotné prostredie behu**. To, čo v lekcii
  volania **prijíma, spúšťa a vracia výsledky**, je zvyčajne hostiteľská aplikácia či koordinačná vrstva —
  vtedy píš **„orchestrátor“ / „riadiaca vrstva“**, a kde netreba žiadne osobitné podstatné meno, jednoducho
  **„tvoja aplikácia“ / „tvoj kód“**. Rozhoduje sa **podľa významu v konkrétnej vete**, nie plošne.
- ~~**súbehová chyba ostáva PENDING** — drží sa záložný tvar „súbeh (race condition)“.~~ *ZRUŠENÉ v3: bare
  „súbeh“ je sémanticky nesprávny (= concurrency, nie chyba) — žiadny záložný tvar; platí kept-EN primárny
  **„race condition (súbehová chyba)“** (§1.0/§1.2). Samostatná „súbehová chyba“ ako názov termínu naďalej
  čaká na kontrolu rodeným Slovákom.*

**Nové kalkové pasce (do §1.4 / Fáza 2 — over kolokáciu, ✗ = kalk → ✓ = slovensky).** Vytiahol ich studený
prechod ×2:

- pokrýva prípad „…“ ✗ → **rieši situáciu, v ktorej…** („covers the case of“; „pokryť prípad“ je testovacia väzba)
- výrazové črty ✗ → **konštrukcie / možnosti schémy** („expressive features“)
- (črty) sa musia pretvarovať ✗ → **sa musia upraviť / preformulovať** („pretvarovať sa“ = predstierať)
- zamedziť + akuz./gen. ✗ → **zabrániť + datív** („zamedzí ich“ ✗ → „zabráni im“; rekcia)
- pokusy rozostri ✗ → **pokusy rozlož v čase** („rozostrieť“ je dvojznačné — rozmazať/roztiahnuť)
- vnášať rozdiel oproti ✗ → **líšiť sa od / rozdiel, ktorý vnáša AI** („vnáša … oproti“ je švíkovité)
- uniesť výstup (hijack) ✗ → **zneužiť / prevziať výstup** („uniesť“ evokuje únos osoby)
- zaplatiť (vyššou) latenciou ✗ → **za cenu vyššej latencie** (§1.4 „pay in latency“; potvrdené aj v tele)

### Fáza 3 — v3 rekonštrukčný prechod pilotu „tool use“: rozhodnutia kánonu

Druhá externá recenzia re-editovaného pilotu ukázala, že substitučný prechod (výmena slov) mení kalky na
**zmäkčené kalky** — anglická kostra vety prežije. Metóda opravy preto už nie je náhrada slov, ale
**rekonštrukcia vety z propozície** (kto — čo robí — za akej podmienky — s akým výsledkom, prostou
slovenčinou; presný EN termín sa vracia iba tam, kde slúži identifikácii/API-presnosti). Samotná metóda
(pravidlo dvoch previnení, kontrola slovesa podľa predmetu, poradie prvého výskytu a čistota glosu, zoznam
zakázaných šablón ako write-filter) žije v `editorial-team` skille; tento kánon nesie jej slovenský obsah:

- **trojtriedna politika termínov + čistota glosu** → §1.0 (zvracia kept-EN rozhodnutia Fázy 2b pre
  „prísny režim“, „obmedzené dekódovanie“, „idempotenciu“);
- **race condition (súbehová chyba)** — kept-EN primárny tvar; v1 záložný tvar „súbeh (race condition)“
  zrušený ako sémanticky nesprávny → §1.0/§1.2 poznámka, §1.3 blocklist;
- **sloveso podľa predmetu** → §1.5 (ruší „vydať je ustálený autorský tvar“ z Fázy 2);
- **zakázané vetné šablóny** → §1.4 (grep-brána: finálny text = nula výskytov);
- **„behové prostredie“ — referent podľa vety** → Fáza 2b odrážka vyššie (environment vs orchestrátor /
  riadiaca vrstva vs „tvoja aplikácia“).

**Rozhodnutia rekonštrukčného prechodu (v3, pilot „tool use“ — obe stránky prepísané z propozícií):**

- **Slučka agenta = „slučka“** v celom korpuse. **„okruh“ ✗ zamietnuté** (číta sa ako elektrický obvod /
  pretekárske kolo); **„cyklus“** iba vo viazanom termíne „nezastavenie cyklu“ (§1.2). Nadpis prehĺbenia
  znie „…ako sa slučka zotaví“.
- **Domýšľanie (si)** = korpusový názov pre konfabuláciu nad výsledkom nástroja: „domýšľanie si toho, čo
  vo výsledku nie je“ (P1 odrážka aj P2 spätný odkaz zosúladené). **„dopĺňanie“ ✗ zamietnuté** (číta sa ako
  vedomé doplnenie).
- **Figúra fan-out/fan-in preformulovaná:** „jeden krok sa rozvetví na N paralelných volaní“ ostáva;
  „N výsledkov **sa zloží späť**“ **ZRUŠENÉ** (kalk *fold back*, §1.4) → „N výsledkov sa spojí do jednej
  správy“; aplikácia volania „rozdelí a spustí súbežne (fan-out)… pozbiera (fan-in)“ *(v4; tvar „rozošle“
  zo skúšobnej doby VYRADENÝ — „rozoslať“ číta ako sieťové odoslanie správ, nie súbežné spustenie)*.
- **Figúra „vzorkuje len z toho, čo prežije“ ZRUŠENÁ** (importovaná metafora prežitia) → „vyberá už len
  spomedzi tokenov, ktoré ostali povolené“.
- ~~**dry-run — glos v próze usadený: „(skúšobné spustenie)“** (ruší ad-hoc „(nanečisto)“).~~ *Smer
  OBRÁTENÝ vo v4: termín je Trieda 2, slovensky vedené „skúšobné spustenie (dry-run)“ (§1.0/§1.2, Fáza 4).*
- ~~**dynamic tool loadout — glos = natívny tvar §1.2:** „**Dynamic tool loadout** (dynamicky vybraná sada
  nástrojov)“; opisné „dynamický výber nástrojov“ smie žiť v bežnej vete, nie ako glos termínu.~~
  *ZVRÁTENÉ v4 (Trieda 2): slovensky vedené **„dynamický výber nástrojov (dynamic tool loadout)“** —
  kratšie než „dynamicky vybraná sada nástrojov“ a zodpovedá významu v próze. Pätička „Nové pojmy“ ostáva
  zrkadlom glosára („tool-RAG / dynamic tool loadout“) až do vlny flipov glosára.*
- **signatúra funkcie** (function signature) — namiesto „podpis funkcie“ ✗ (číta sa ako podpisovanie /
  code signing); webom doložené v slovenských VŠ-materiáloch (TUKE FP, UK FMFI) *(na skúšobnej dobe do
  kontroly rodeným Slovákom)*.
- **prompt engineering** — kept-EN (§1.1), glos „(práca s promptom)“. **tool use** — kept-EN, glos
  „(používanie nástrojov)“; **function calling** — kept-EN, glos „(volanie funkcií)“ — dvojica sa glosuje
  oddelene, nie spoločnou zátvorkou.
- **„Časť II príručky“** — odkaz na časť KNIHY vždy rozpísať („v celej Časti II príručky“), nikdy holé
  „druhá časť“ — koliduje s „prvá/druhá časť“ tejto lekcie (index vs prehĺbenie).
- **Vernosť spätných odkazov:** citát z prvej časti v úvodzovkách musí na prvej časti existovať doslovne
  (zosúladené: „málo nástrojov, bez prekryvov“, „nesprávny nástroj — alebo žiadny“); spätný odkaz na obraz,
  ktorý prvá časť nepoužila, sa prepisuje na autorské „my“ („Zatiaľ sme so schémou zaobchádzali ako…“).
- **Pätička „Nové pojmy“ ↔ glosár:** trojtriedne flipy (prísny režim, obmedzené dekódovanie, idempotencia,
  kľúč idempotencie, validácia argumentov) sa premietnu do hesiel glosára a AŽ POTOM do pätičiek — v jednej
  neskoršej vlne; dovtedy pätičky ostávajú zrkadlom anglických hesiel glosára.

### Fáza 4 — v4 finálny polish pilotu „tool use“: rozhodnutia kánonu

Cielená záverečná úprava, nie prepis — štruktúra v3 sa zachovala; menili sa iba konkrétne nálezy a ich
súrodenci (slabá kolokácia / nejasný referent / nesprávny sémantický aktor / kolísanie smeru termínu).

- **Smer termínu je EXPLICITNÝ per termín (§1.0) — už nikdy ad hoc po vetách.** Rozhodnutia v4:
  **štruktúrovaný výstup (structured output)** — Trieda 2; **skúšobné spustenie (dry-run)** — Trieda 2;
  **princíp najnižších oprávnení (least privilege)** — Trieda 2 (podoba „najnižších“ podľa slovenských
  dokladov — sk.wikipedia „princíp najnižšieho privilégia“, smernice NBÚ/SAAVS; „princíp najmenších
  oprávnení“ zamietnuté ako slabo doložené); **dynamický výber nástrojov (dynamic tool loadout)** —
  Trieda 2; **race condition** — Trieda 3, vedomá zapísaná výnimka.
- **Figúra „daň“ vyradená:** „stála daň“ → **„stála réžia“** (variant „priebežné náklady“); nadväzná veta
  „Daň nie je len finančná“ → „Réžia nie je len finančná“. Ruší potvrdenie Fázy 2; „réžia“ pre overhead je
  bežný slovenský IT-úzus.
- **„rozošle (fan-out)“ vyradené** → „volania rozdelí a spustí súbežne (fan-out)“ (Fáza 3 poznámka
  aktualizovaná).
- **Slabé kolokácie a nesprávni sémantickí aktori** → grep-zoznam v §1.4.
- **Meta-text (sprievodné listy, dotazníky) prechádza tými istými bránami ako lekcie:** „pilotná lekcia“
  (nie „pilot lekcia“); „prirodzené podoby“ (nie „natívne tvary“); „názov v bočnom paneli“ (nie „bočný
  štítok“); „pre slovenského vývojára“ (nie apozícia „kamarát vývojár“). Dotazník: jedna otázka = jeden
  jav; citované termíny v nominatíve slovníkovej podoby.
- **„pasáž“ v meta-texte je prípustná** pre súvislú časť textu (bežný význam — „otázky k pasážam“); riadok
  §1.2 „úryvok | passage“ viaže TERMÍN *passage* ako jednotku retrievalu — register viaže význam, nie
  reťazec.
- **Spätné odkazy:** verbatim citát „málo nástrojov, bez prekryvov“ sa drží (Fáza 3); opravilo sa iba
  sloveso — časť knihy „odporúča“, nie „žiada“ (sémantika aktora). Návrh recenzie „v celej druhej časti
  príručky“ zamietnutý — koliduje s „prvá/druhá časť“ tejto lekcie; ostáva „v celej Časti II príručky“
  (Fáza 3).
- **Žatva studeného prechodu v4 (nové pasce — over kolokáciu):** konsekutívne „je tak“ po slovese ✗ →
  „je teda“ (bohemizmus podľa stavby); „spustiť volanie“ ✗ → „vykonať volanie“ (volanie sa vykonáva,
  spúšťa sa nástroj/kód/dopyt); „ticho zahodiť“ ✗ (kalk *silently drop*) → „zahodiť bez ohlásenia“;
  „volanie sa zvrhne na slučku“ ✗ → „opakovanie volania sa zvrhne na slučku“ (aktor); adjektívny tvar
  „samoopravná slučka“ ✗ (súrodenec „slučka sa opraví sama“) → „slučka zotavenia“; „patrí medzi okamih X
  a okamih Y“ ✗ (číta sa ako členstvo) → „má svoje miesto medzi okamihom X a okamihom Y“; „X môže zhoršiť
  až na výpadok“ ✗ → „X môže prerásť do výpadku“ (natívna eskalácia). Takeaway nesmie protirečiť telu:
  „nezávislosť musí overiť tvoja aplikácia“ sa píše spolu s faktom „nič to automaticky nekontroluje“.

### Fáza 5 — vlna 1, lekcia Ingestion: rozhodnutia kánonu

Prvá lekcia vlny 1 (Ingestion index + prehĺbenie), plný redakčný tím + studený prechod ×2. Zapisuje sa,
aby ďalšie lekcie vlny (Retrieval a ďalej) dedili už rozhodnuté.

**Nové riadky Triedy 2 (slovensky vedené, anglický originál raz v zátvorke) → dopĺňajú §1.2:**

| Kánon | Originál | Poznámka |
|---|---|---|
| delenie na pevnú veľkosť | fixed-size (chunking) | |
| delenie s ohľadom na štruktúru dokumentu | document-structure-aware | dlhý, ale presný tvar; neskracovať na „štruktúrne delenie“ (to je recursive/structural) |
| posuvné okno | sliding window | webom overené (UPJŠ: „metóda sliding window – posuvné okno“) |
| vektorová databáza | vector database | heslo glosára zatiaľ neexistuje (kandidát na doplnenie) |
| karta modelu | model card | |
| syntetické dopyty | synthetic queries | drží riadok „dopyt \| query“ |
| spoločný medzijazykový vektorový priestor | shared cross-lingual space | |
| rozmernosť | dimensionality | heslo glosára → vlna flipov; pätičky dovtedy zrkadlia EN heslo |
| kosínusová podobnosť | cosine similarity | heslo glosára → vlna flipov |
| skalárny súčin | dot product | |
| viacjazyčné embeddingy | multilingual embeddings | heslo glosára → vlna flipov |
| parsovanie dokumentov | document parsing | |
| cesta po sekciách | heading path | |
| metadáta chunku | chunk metadata | |

**Potvrdenie:** „prevádzka u seba (self-hosted)“ sa používa presne podľa riadku §1.2 — bez zmeny.

**Kept-EN doplnky (→ §1.1):** **late chunking** — glos „(neskoré delenie)“; **adaptive retrieval** — glos
„(adaptívne vyhľadávanie)“ („vyhľadávanie“ = retrieval, Karta 3 drží); **parent-document / small-to-big
retrieval** — názov rodiny postupov, nulový zátvorkový glos, význam sa rozvádza v próze; **makro-chunk**
(macro-chunks) — skloňuje sa ako chunk, bez glosu (priehľadný kompaund); **self-attention** — kept-EN BEZ
zátvorkového glosu, význam sa pri prvom výskyte rozvedie v próze („self-attention prebehne nad celým
textom, takže…“); **mean-pooling** — natívne sloveso „spriemerovať (vektory tokenov)“ nesie vetu, most
„(mean-pooling)“ raz. **BM25** ostáva holé meno bez glosu (§1.1), ale pri prvom výskyte na stránke smie
dostať opisnú hlavu „fulltextové vyhľadávanie BM25“ (vzor „krok fan-out“ — hlava dekóduje, meno identifikuje).
**top-K** pri prvom výskyte v bunke tabuľky (bunky sa čitateľovi renderujú!) dostáva inline dekód
„top-K (K najlepších kandidátov)“ — tabuľková bunka sa počíta za prvý výskyt, na rozdiel od video-popisu.

**GIGO — ustálené znenie:** „zo smetí na vstupe nevznikne nič iné než smeti na výstupe (garbage in,
garbage out)“ — slovenská veta vedie, EN originál raz v zátvorke; nikdy holá skratka „GIGO“ v tele.

**Karta 9 — strop: dva významy (dopĺňa §2, viaže §7.1).** (1) **Rozpočtová politika** — VÝHRADNE pár
„tvrdý strop / mäkký strop“ (hard cap / soft cap, §7.1). (2) **Obyčajná horná hranica** — „strop kvality“:
prostý jazyk, nie razená figúra; smie žiť IBA s prívlastkom („strop kvality“) alebo slovesne („zhora
ohraničuje“); holý „strop“ sa nepíše tam, kde je v okolí rozpočtový rámec. Na stránke drž JEDEN nominálny
rámec: keď H2 razí „strop kvality“, takeaway ho opakuje („strop kvality“, nie „horná hranica“). Sloveso
„zhora ohraničuje“ neopakovať viac než ~2× na stránku — tretí výskyt preformuluj („je stropom kvality“).

**fine-tuning / doladenie — usporiadanie (spresňuje §1.1):** termín-podstatné meno v próze je VŽDY kept-EN
**fine-tuning** (glos „(doladenie modelu)“ raz na stránku); natívne **sloveso „doladiť / dolaďovať“** nesie
bežné deje („model dolaďuj až vtedy…“); natívne podstatné meno **„doladenie“ smie stáť iba v nadpisoch**
(opisná formulácia, duch pravidla H1) a v glose. Kolísanie smeru v próze je defekt (§1.0).

**Karta 5 — doplnok:** štvrtý viazaný význam „textová vrstva“ (text layer PDF/skenu) — iba v tomto
kompaunde, rámec skenovaných dokumentov; nikdy holá „vrstva“ pre text layer.

**Prijaté obraty a slová (webom/kodifikáciou overené, nechávajú sa):** „prehnať X cez Y“ (varianty cez
evaluáciu, dokument cez transformer — idiomatický rámec „pustiť cez stroj“, nie univerzálne sloveso §1.5);
„posuvné okno“; „poruke“ (kodifikovaná príslovka); „a spol.“; „popretkávané“; „zosypať sa“; „hotový model“
(off-the-shelf; pri prvom výskyte opísať „taký, aký ponúka výrobca“); „bezpečnostný perimeter“ (prvý
výskyt ukotviť prívlastkom, potom „v perimetri“); „nanič“ (predikatívne, expresívne); „väčšmi“ (KSSJ, ale
nie v konštrukcii miery pri mennom prísudku); „napokon“; „úzke hrdlo“; „páka“ (tri páky na embeddingu);
„rebríček náročnosti“ ✗ — pozri nižšie („rebríček“ má jeden význam).

**Nové kalkové pasce a slabé kolokácie (žatva Ingestion — do grep-zoznamov §1.3/§1.4):**

- „X je (presne) to, čo…“ / „je zároveň to, nad čím…, aj to, čo…“ — cleft-rodina aj v takeawayoch ✗
- „Práve tu sa A mení na B“ ✗ (rodina „X is where“) → „Práve cez A sa B premieta do C“ / povedz priamo
- „stráži úplnosť“ / „dodá presnosť“ ✗ (guards recall / adds precision) → účel vetou („aby sa nič
  podstatné nestratilo — úplnosť (recall)“) alebo „zodpovedá za úplnosť“
- „konflikt X proti Y“ ✗ → „konflikt medzi X a Y“
- „navrch + genitív“ v abstraktnom zmysle (on top of any strategy) ✗ → „v kombinácii s…“
- „línia rezu“ ✗ (len krovinorezy/CNC) → „hranica medzi dvoma chunkami“
- „klásť/položiť metadáta“ ✗ → „pripájať/pripojiť metadáta“; „položia sa hranice“ ✗ → „hranice sa
  vyznačia“ (zosúladené s heslom glosára Late chunking)
- „metadáta napájajú filtrovanie“ ✗ → „umožňujú filtrovanie“
- „odkaz cestuje s chunkom“ ✗ → „chunk nesie odkaz“
- „hodí sa zle“ ✗ → „poriadne sa nehodí / takmer nesedí“
- „podnikové súkromie“ ✗ → „dôvernosť firemných dát“
- „maximálne ‚o jednej veci‘“ ✗ (dvojznačné „nanajvýš“) → „čo najviac ‚o jednej veci‘“
- „metrika číta smer“ ✗ → „zohľadňuje smer“
- „kľúčové rozlíšenie“ ✗ (rozlíšenie = displej) → „kľúčový rozdiel“
- „a tým sa končí“ (bez podmetu) ✗ → „a viac X nepovie“
- „krajina nástrojov“ / „mená vyznačujú krajinu“ ✗ (tooling landscape) → „v nástrojoch sa zorientuješ
  podľa mien“
- „meno stojí za myšlienku“ (stands for, s akuzatívom) ✗ — falošná väzba („stáť za niečo“ = byť hodný)
  → „reprezentuje / za menom stojí (inštr. rámec)“
- „voľba stojí takto“ ✗ → „Strategická voľba: …“ (dvojbodka)
- „fakt nakláňa rozhodnutie“ ✗ → „okolnosť hovorí v prospech…“
- „techniky útočia na stratu“ ✗ → „riešia stratu“
- „preradenie krokov“ ✗ → „obrátené poradie krokov“
- „zoškrabávanie glyfov“ ✗ (scraping; „zoškrabávať“ len fyzicky) → opísať („pozbierať glyfy v poradí…“)
- „ukazovacie spojenia“ ✗ (vymyslený termín) → „spojenia s ukazovacím zámenom“; „ukazovacie zámená“ je
  lingvistický termín
- „výpočtový účet“ ✗ (compute bill) → „výpočtové náklady“
- „za cenu peňazí“ ✗ → „za cenu vyšších nákladov“
- „pamäťovo lacno“ ✗ → „pamäťovo úsporne“; „tokenizovať neúsporne“ ✗ (CZ doklady) → „v tokenizácii
  dopadnúť zle“
- „pristane na vektoroch / pristane ďaleko“ ✗ (lands; koliduje s „pristane ti“) → „skončí na blízkych
  vektoroch / skončí ďaleko od seba“
- „skóre priemeruje jazyky“ ✗ → „do skóre sa spriemerujú aj jazyky“; „priemeruje cez jazyky“ →
  „naprieč jazykmi“
- „model poklesne“ ✗ (aktor) → „model stratí na kvalite“
- „úprimný zoznam“ ✗ (zoznam nemôže byť úprimný) a „poradie víťazov“ ✗ (len šport) → „zoznam, nie rebríček“
- „štartovací bod“ ✗ → „východisko / na začiatok“
- „výhoda zadarmo“ ✗ (free lunch) → „nie je zadarmo / má svoju cenu“
- „po poradí“ ✗ → „po poriadku“ (a signposty „Pôjdeme…“ / „Rozoberieme…“ radšej škrtať — výpočet je mapa
  sám osebe)
- „stránka si berie na starosť“ ✗ → „stránke sa venuje / stránka rieši“
- „hotový výrobok“ (o modeli) ✗ → jednotne „hotový (model)“
- „etapa sa dotkne textu“ ✗ → „text spracuje ďalší krok pipeline“
- „prúd sa láme (spôsobmi)“ ✗ (breaks in ways; pletie sa so zalamovaním riadkov) → „rozpadá sa potichu
  a predvídateľne“
- „predvolené riešenie“ (o nástroji) ✗ → „univerzálna prvá voľba“
- „celé pole vyrástlo“ ✗ (field) → „celý odbor“
- „spočítať vektory“ (compute) ✗ → „vypočítať/predpočítať“ („spočítať“ = sčítať/zrátať)

**„rebríček“ má v korpuse JEDEN význam:** zverejnený rebríček výsledkov (leaderboard). „rebríček
náročnosti“ (ladder) ✗ → „odstupňovaný rad / zoraď podľa stúpajúcej náročnosti“.

**Figúry — skúšobná doba (potvrdí najbližší studený prechod):** „ostrý vektor / rozmazaný priemer“ (holé
prídavné mená, index) — usadené; „pracovný bod“ (MRL) — s inline dekódom „rôzne pomery rýchlosti
a presnosti“; „naplno udrie dôsledok“ — na skúšobnej dobe.

**Mostíky a štruktúra:** úvodný rekapitulačný odsek prehĺbenia („Časť 1 postavila…“) je legitímna
kontinuita — mostíky rodiny termínov z prvej časti sa v prehĺbení osviežujú pri prvom VÝKLADOVOM výskyte,
nie v rekapitulácii. Prehĺbenie bez videa: keď EN prehĺbenie video nemá, absencia JE čestné „nie“ —
poznámka na stránku sa nepíše (precedens pilot + Ingestion).

**Žatva studeného prechodu ×2 (Ingestion) — ďalšie pasce do grep-zoznamov:**

- „bodový fakt“ ✗ (pinpoint fact) → „otázka na jeden konkrétny údaj“
- „chunk je jednotka vyhľadávania aj jednotka toho, čo model uvidí“ ✗ (unit-of-what kostra) → „chunk hrá
  dve roly naraz“ + rozviesť
- „X stojí na jednom kľúčovom rozdiele“ ✗ (builds on) → „za X stojí jeden kľúčový rozdiel“
- „rež po hraniciach“ ✗ → „rež na hraniciach“; „mostík na vrstvu“ ✗ → **„mostík k vrstve“** (aktualizuje
  znenie z Karty 5; stránky zjednotené na „k“)
- „principiálny mechanizmus“ ✗ (bookish/rusizmus) → „základný mechanizmus“
- „ústredné napätie“ ✗ (central tension — zrkadlí ruský zákaz) → „základný problém“
- „vyhradený model“ ✗ (dedicated) → „špecializovaný model“
- „popisy obrázkov“ ✗ (v rozložení strany) → „popisky obrázkov“ (caption = popisok)
- „prikladať metadáta“ ✗ → „priradiť / pridať metadáta“
- „zložiť premenu do jediného modelu“ ✗ (folded into) → „premenu zvládol jediný model sám“
- „konštrukčná myšlienka“ ✗ (design idea, bez úzu) → „konštrukčný prístup“
- kompaund „MRL-tréning“ ✗ (nemecko-česká stavba) → „tréning pre MRL“
- „vnorená ruská bábika“ ✗ → „matrioška — bábika, v ktorej sú menšie vložené do väčších“
- „zaväzujú ťa menej“ ✗ (commit you less) → „záväzok je menší“
- „na tomto predpoklade sa stráca kvalita“ ✗ → „tento predpoklad neplatí — a kvalita sa stráca“
- „Presne to robí X použiteľným“ ✗ (cleft-rodina) → „Vďaka tomu je X použiteľný“
- „zásada, ktorá celú sekciu spája“ ✗ (§1.4 rodina „pravidlo, ktoré viaže“) → „pre celú sekciu platí
  jedna zásada“
- „vlastnosť, ktorá sa najľahšie predpokladá a najzriedkavejšie overuje“ ✗ (aforizmus 1:1) → „vlastnosť,
  ktorú každý predpokladá a málokto overí“
- „(278M)“ holé ✗ → „(278 mil. parametrov)“ — pri veľkosti modelu vždy jednotka
- „v OpenAI“ (o parametri) ✗ → „v modeloch OpenAI“
- „správa/veta pristane“ (potvrdené aj druhým prechodom) → „skončí na…“
- Na skúšobnej dobe: **„preskórovať / preskórovanie“** — priehľadná odvodenina od kanonického „skóre“
  (naivní čitatelia dekódovali ×2), webové doklady nulové — čaká na kontrolu rodeným Slovákom.

**Konflikty s usadenými riadkami — FLAGNUTÉ, čakajú na rozhodnutie autora (nerozhodnuté týmto prechodom):**
1. Pravopis slovesnej rodiny „(za)embeddovať“: korpus 14× dvojité d (obe lekcie, glosár) vs jediné
   „zaembeduješ“ v príklade hlasu tohto kánonu — zosúladiť (dôkazy favorizujú dvojité d).
2. „contrastive learning / hard negatives“: §1.1 kept-EN (lekcia zosúladená na kept-EN) vs glosár vedie
   slovensky („kontrastným učením… tvrdými negatívmi“) — jedno rozhodnutie, celý korpus.
3. Glos §1.1 „fine-tuning (doladenie modelu)“ vs heslo glosára „Embedding fine-tuning (doladenie
   embeddingov)“ — zosúladiť alebo rozdiel zapísať do §1.1.
4. Heslo glosára „Least privilege … (princíp najmenších oprávnení)“ vs rozhodnutie Fázy 4 „princíp
   najnižších oprávnení“ — do vlny flipov glosára.
5. Inštrumentál plurálu „chunkami“ (glosár + obe lekcie) vs pravidelná paradigma mužských neživotných
   („vlakmi“ → „chunkmi“) — jeden flip pre celý korpus vrátane glosára; čaká na kontrolu rodeným Slovákom.
6. „rozmernosť | dimensionality“ (riadok Fázy 5) spochybnil studený čitateľ („dimenzia/rozmer“ je bežnejší
   matematický úzus) — riadok zatiaľ platí, zaradiť do kontroly rodeným Slovákom.
7. EN zdroj: takeaway „contrastive learning on query–passage pairs“ protirečí vlastnému telu („triples“);
   SK takeaway zosúladený s telom na „trojice“ — opraviť aj v EN/RU zdroji (mimo rozsah tejto vlny).
8. „prehĺbenie vrstvy X“ — obaja naivní jednojazyční čitatelia hlásia nedekódovateľný obraz („vrstvu niekto
   prehlbuje?“); korpusový termín (Karta 5, §4) sa touto vlnou nemení, ale kandidát na korpusové
   prehodnotenie (napr. „druhá časť lekcie / kapitola X — do hĺbky“).

**Backlog glosára (nie defekt stránok):** heslá pre vektorovú databázu a adaptive retrieval (na stránke
je tučná kotva bez hesla — doplniť heslo, alebo kotvu odtučniť vo vlne flipov).

### Fáza 6 — vlna 1, lekcia Retrieval: rozhodnutia kánonu

Druhá lekcia vlny 1 (Retrieval index + prehĺbenie „Fúzia, radenie a metriky“), plný redakčný tím + studený
prechod ×2. Zapisuje sa, aby ďalšie lekcie vlny (Generation a ďalej) dedili už rozhodnuté.

**Vyriešených 5 konfliktov, ktoré Ingestion flagol (Fáza 5, „Konflikty s usadenými riadkami“) — rozhodnuté,
odôvodnené, aplikované na celý korpus vrátane už publikovaných stránok:**

1. **Slovesná rodina „(za)embeddovať“ — dvojité d, celý korpus.** Korpus 14× dvojité d (obe lekcie, glosár)
   proti jedinému „zaembeduješ“ v príklade hlasu tohto kánonu; dôkazy jasne favorizujú **dd** (odvodené od
   „embedding“). Príklad hlasu v §Hlas a register opravený na **„zaembedduješ“**. Kanonické tvary:
   **zaembedduj / zaembedduješ / zaembeddovať / zaembeddovaný**.
2. **contrastive learning / hard negatives — kept-EN (Trieda 3), EN vedie, slovenský glos raz.** Lekcia
   Ingestion (prehĺbenie) už tak píše: „contrastive learning (kontrastné učenie)“, „hard negatives (tvrdé
   negatívy)“ — zosúladené so §1.1. Glosár (heslo „Embedding fine-tuning“) viedol slovensky
   („kontrastným učením… tvrdými negatívmi“); **zosúladený na EN-vedený tvar** („pomocou contrastive
   learning (kontrastné učenie)… s hard negatives (tvrdými negatívmi)“). Jedno rozhodnutie, celý korpus.
3. **fine-tuning glos — dva tvary sú ZÁMERNE odlíšené podľa predmetu, nie konflikt.** Všeobecný
   termín-podstatné meno = **fine-tuning (doladenie modelu)** (§1.1, Fáza 5); **embedding-špecifický** =
   heslo glosára **„Embedding fine-tuning (doladenie embeddingov)“** — predmetom doladenia je embeddingový
   model, preto „embeddingov“. Rozdiel je vecný (predmet doladenia), zapisuje sa sem; žiadna oprava textu.
4. **least privilege — „princíp najnižších oprávnení“, celý korpus.** Fáza 4 už rozhodla „najnižších“
   (webom overené: sk.wikipedia „princíp najnižšieho privilégia“, smernice NBÚ/SAAVS; „najmenších“ slabo
   doložené). Glosár mal na dvoch miestach „najmenších“ — **zosúladený na „najnižších“** (heslo „Least
   privilege / tool allow-listing“ + definícia hesla „Roots“).
5. **Inštrumentál plurálu chunku — „chunkami“ ostáva, celý korpus.** Pravidelná paradigma mužských
   neživotných dáva „-mi“ („vlakmi“ → teoreticky „chunkmi“), no pri prevzatom slove so spoluhláskovým
   zhlukom volí slovenčina eufonické **„-ami“**; korpus je 14× konzistentný na „chunkami“ (glosár + obe
   lekcie). Riskantný flip na „chunkmi“ pri neistej morfológii sa **zamieta**; „chunkami“ potvrdené ako
   kanonický tvar (paradigmatická poznámka „-mi“ ponechaná pre úplnosť, tvar sa nemení).

**Smer termínu podľa glosára (spresňuje §1.0 pre vrstvu Retrieval).** Retrievalové technické termíny, ktoré
glosár VEDIE ANGLICKY, sú kept-EN mená (§1.1): v tele sa zavedú raz s **slovenským glosom v zátvorke** pri
prvom výskyte a ďalej sa na ne odkazuje buď holým EN menom, alebo čisto opisnou slovenskou frázou — **nikdy
súperiacim slovenským termín-menom** (inak kolísanie smeru, §1.0). Sem patria: **dense retrieval (husté
vyhľadávanie), query transformation (transformácia dopytu), multi-query (viac dopytov), hybrid search
(hybridné vyhľadávanie), BM25 / sparse retrieval (riedke lexikálne vyhľadávanie), reranking (preusporiadanie),
two-stage retrieval (dvojfázové vyhľadávanie), score fusion / score normalisation (fúzia skóre / normalizácia
skóre), LLM reranker, late interaction / ColBERT (neskorá interakcia), multi-vector retrieval (multivektorová
reprezentácia), contextual retrieval (kontextové vyhľadávanie), pre-filter / post-filter (filter pred /
po vyhľadávaní).** Slovensky VEDENÉ (slovenský tvar + EN originál v zátvorke, zrkadlí glosár): **smerovanie
dopytov (query routing), filtrovanie podľa metadát (metadata filtering), riadenie prístupu (access control,
ACL).** Holé mená bez glosu: **HyDE, BM25, RRF, ColBERT, MaxSim, nDCG, MRR, top-K, Recall@K, Precision@K.**

**Nové rozhodnutia a rendery (Retrieval):**

- **„vyhľadávať v korpuse“, NIE „prehľadať korpus“ (rozširuje Kartu 3 na sloveso).** Prehľadanie celého
  korpusu JE retrieval → sloveso „vyhľadávať (v korpuse)“; „prehľadať / prehľadávať“ ostáva vyhradené pre
  algoritmický prechod stromom/grafom (ToT/GoT). Flagované studeným prechodom.
- **„encoder“ samostatne → slovenské „enkodér“**; zložené mená **bi-encoder / cross-encoder** ostávajú EN
  (§1.1). Kept-EN modifikátor + slovenská hlava: **„dense enkodér“, „contrastive enkodér“** (dense/contrastive
  sú §1.1 kept-EN).
- **úplnosť (recall) / presnosť (precision)** — dvojica zdedená z Ingestion, drží sa; v prehĺbení sa
  neosviežuje mostom (rekapitulácia, Fáza 5), plný most žije na index-stránke.
- **dot product → „skalárny súčin (dot product)“** (potvrdenie riadku Fázy 5).
- **Metriky:** vzorce v inline kóde / textovom fence (nepreklad): `1 / rank`, `DCG = Σ rel_i / log2(i + 1)`,
  RRF `score(d) = Σ_i 1 / (k + rank_i(d))`. **IDCG, MRR, nDCG, Recall@K, Precision@K** — pevné písanie (§3).
  „mean reciprocal rank“, „normalized discounted cumulative gain“ sa raz rozpíšu v zátvorke pri skratke.
- **„known-item“ / navigačný dopyt** — „vyhľadanie konkrétnej známej položky (known-item)“; kept-EN v moste.
- **Verb-by-object (§1.5) potvrdený:** „model **vráti** deterministické skóre“ (nie „vydá skóre“ — skóre je
  výsledok/číslo).
- **Anglická pomlčka (em-dash) — vedomé stíšenie metronómu.** Studené čítania celého korpusu označili
  „klauza — spresnenie“ za najsilnejší prežívajúci signál; konštrukcia **„— , “ (pomlčka tesne pred čiarkou)
  je zakázaná** (prekladový tvar) → prepíš na zátvorku, dvojbodku alebo samostatnú vetu. Rozpočet: vsuvkové
  páry pomlčiek drž riedko, striedaj rytmus (zátvorka / dvojbodka / „a/no/lenže“).

**Figúry — skúšobná doba (potvrdí najbližší studený prechod / milestone-prechod):**
- **„vrchol lievika“** (top of the funnel — smerovanie a filtre ako vrchol) — na skúšobnej dobe.
- **„rovnaká choroba, dve miesta zásahu“** (same disease, two treatment points — parent-document vs
  contextual retrieval) — obraz „choroba/liek“; ≤1×/odsek dodržané; na skúšobnej dobe.
- **„odhalucinovať (ťa mimo cieľa)“** (HyDE hallucinates off-target) — priehľadná odvodenina od „halucinácia“;
  na skúšobnej dobe.
- **„stratové úzke hrdlo“** (lossy bottleneck) — „úzke hrdlo“ je usadené (Ingestion); prívlastok „stratové“
  na skúšobnej dobe.

**Contextual-retrieval čísla dodané (sľub Ingestion splnený).** Prehĺbenie Retrieval nesie čísla, na ktoré
Ingestion odkazovala: zlyhanie vyhľadávania pri top-20 oproti východiskovým 5,7 % → kontextové embeddingy
−35 % (5,7 % → 3,7 %), + kontextové BM25 −49 % (→ 2,9 %), + reranking −67 % (→ 1,9 %); náklad ~1,02 USD za
milión tokenov dokumentu. Desatinná čiarka + nedeliteľná medzera pred „%“ (zrkadlí Ingestion).

**Pre lekciu Generation (odovzdanie):**
- Zdedený rámec zlyhaní: **zlyhanie generovania** je názov kategórie (Karta 1); jednotlivá zlá odpoveď je
  „chyba“, nie „zlyhanie“. **faithfulness, grounding** sú §1.1 kept-EN (grounding glos „(opretie odpovede
  o kontext)“). **skóre vs hodnotenie** (Karta 2) bude v Generation biť často (self-check, sudca) — číslo je
  vždy **skóre**.
- Smer termínu podľa glosára platí aj pre Generation: over heslo v glosári a drž jeho smer (EN-vedené vs
  slovensky vedené) — nekolíš v rámci stránky.
- Em-dash metronóm a zákaz „— ,“ platia ďalej; striedaj rytmus vedome.
- Odkazy: SK existuje pre Ingestion a Retrieval (index aj prehĺbenie) → mieri na SK cez „../retrieval/“,
  „../ingestion/“; na zatiaľ nepreloženú Generation/Evaluation mieri holou cestou (EN-fallback route), glosár
  „../../glossary.md“.

### Fáza 7 — vlna 1, lekcia Generation: rozhodnutia kánonu

Tretia lekcia vlny 1 (Generation index + prehĺbenie „Sebakontrola a štruktúrovaný výstup“), plný redakčný
tím + studený prechod ×2. Zapisuje sa, aby ďalšie lekcie vlny (Evaluation a ďalej) dedili už rozhodnuté.

**Smer termínu podľa glosára (spresňuje §1.0 pre vrstvu Generation).** Overené proti heslám glosára; v tele
sa smer nemieša (§1.0):

- **kept-EN, EN-vedené** (anglické meno, slovenský glos v zátvorke raz na stránke, ďalej holé EN alebo čisto
  opisná slovenská fráza — nikdy súperiaci slovenský termín-meno): **grounding (opretie odpovede o kontext)**,
  **grounding instructions (inštrukcie na opretie o kontext)**, **context packing (skladanie kontextu)**,
  **lost-in-the-middle (strata uprostred)** (vždy so spojovníkmi, §3), **faithfulness (vernosť zdrojom)**,
  **self-consistency** (krátky slovenský glos „(navzorkuj viac ciest a hlasuj)“), **chain-of-verification
  (CoVe)**, **chain-of-thought (reťazec úvah)**, **zero-shot (bez trénovacích príkladov)**.
- **Trieda 2, slovensky vedené** (slovenský tvar + EN originál v zátvorke raz): **štruktúrovaný výstup
  (structured output)**, **obmedzené dekódovanie (constrained decoding)**, **prísny režim (strict mode)** —
  branded **Structured Outputs** (OpenAI) a **Citations API** (Anthropic) ostávajú EN (Trieda 1), rovnako
  `strict: true`, `claims`, `source_id`, `max_tokens`, JSON, JSON Schema.
- **Prirodzene naturalizované slová latinského pôvodu — píšu sa slovenským pravopisom a vedú sa slovensky,
  hoci ich heslo v glosári uvádza najprv anglický tvar (len kvôli krížovému odkazu).** Sem patria:
  **halucinácia** (bez EN mosta — ako „evaluácia“), **citácie (citations)** (most raz), **odmietnutie
  (refusal)** (most raz; „odmietnutie“ ako termín-meno je zamietnuté LEN pre non-termination, §1.2 — význam
  refusal je v poriadku), **parametrické znalosti / parametrická pamäť (parametric knowledge)** (korpus ich
  už používa natívne — retrieval-prehĺbenie), **konflikt znalostí (knowledge conflict)** / v próze „konflikt
  medzi kontextom a pamäťou“ (podľa Fázy 5: „konflikt X proti Y ✗ → medzi X a Y“; pätička drží EN heslo
  s en-dashom „context–memory conflict“), **tvarovanie odpovede (answer-shaping)**.

**Karta 1 — potvrdenie referentu (spresňuje §2).** V prehĺbení „To je presne to **zlyhanie generovania**,
ktorého by sa podnik mal báť…“ je „zlyhanie“ správne v **kategoriálnom** čítaní (etapa na vine = Generation;
konflikt znalostí je chybový *režim vnútri* kategórie, nie jednotlivý incident). Zosilnené na plný tvar
**„zlyhanie generovania“**, aby sa vylúčilo jednotkové čítanie — index tú istú stránku drží na dvojici
„(chyba, nie zlyhanie)“ pre jednu sebavedomú nesprávnu odpoveď.

**Nové kalkové pasce a slabé kolokácie (žatva Generation — do grep-zoznamov §1.3/§1.4):**

- „výpočet“ (compute ako zdroj) ✗ → **„výpočtový výkon“** („spočítať/výpočet“ = arithmetic; compute-ako-zdroj
  je „výpočtový výkon“; zrkadlí zákaz „spočítať vektory“ z Fázy 5)
- „najlepšia snaha“ (best-effort) ✗ → **„v lepšom prípade iba pokus“** / opíš vetou
- „pole/tvrdenie vlastní svoje X“ (owns) ✗ → **„nesie svoje X“**
- „zamaskovať/odmaskovať“ pri obmedzenom dekódovaní — pozor na SMER: model **zamaskuje (vylúči)** tokeny,
  ktoré porušia schému; „odmaskuje“ je sémantické prevrátenie faktu (odhalil by ich) ✗
- „zaplatiť latenciu / latenciou“ (pay in latency) ✗ → **„za cenu vyššej latencie / si vyžiada oneskorenie“**
  (potvrdzuje §1.4)
- zisk metriky recall: **„úplnosť (recall)“**, nikdy „presnosť úplnosti“ (mieša rezervovaný pár
  presnosť/úplnosť, Karta 2)
- register: klaster „majstrovský / na majstrovskej úrovni“ ✗ (marketing) → **„pokročilý / na pokročilej
  úrovni“** (zhoduje sa so zákazom marketingu v prehĺbeniach, CLAUDE.md)
- verb-by-object (§1.5) potvrdené: reranker **zostaví** poradie (nie „vyrobí“); chunky **skončia** na okrajoch
  (nie „pristanú“ — Fáza 5); náklad **spotrebúva** tokeny (nie „stoja tokeny“, §1.3)

**Termínové rozhodnutia (do ledgera / na skúšobnú dobu):**

- **sebakontrola** (self-verification) — USADENÉ; zjednotené naprieč oboma stránkami vrátane `sidebar_label`
  a mosta v index-poznámke. „samokontrola“ ✗ → **„sebakontrola“** (zrkadlí glosárové „slučka sebakontroly“ a
  koreňovú rodinu „seba-“, ktorá už v korpuse beží).
- **hladné dekódovanie (greedy)** — USADENÉ; „hladný“ je štandardný slovenský CS-termín pre greedy, glos
  „(greedy)“ raz (zrkadlí glosár „hladného (greedy) dekódovania“).
- **ansámbel behov** (small ensemble) — na skúšobnej dobe; „ansámbel“ je doložený v SK ML-úze, „súbor behov“
  ✗ („súbor“ = file, §1.2). Čaká na kontrolu rodeným Slovákom.
- **orientačné pravidlo** (rule of thumb) — USADENÉ; vyhýba sa kalku „pravidlo palca“.
- **výsluch návrhu** (CoVe — nadpis H3) — **figúra POTVRDENÁ** studeným prechodom ×2 (naivný čitateľ ju
  dekódoval pri prvom kontakte); vstupuje do kánonu ako potvrdená figúra vrstvy Generation.
- **ozvena** (echo — sebavedomá formulácia návrhu sa modelu vráti pri jeho vlastnej kontrole) — figúra
  POTVRDENÁ (po zavedení referenta „…vráti sa mu ako ozvena.“); ≤1 metafora/odsek dodržané.
- **stena prózy** (wall of prose — próza tam, kde otázka chcela tabuľku) — figúra POTVRDENÁ.
- **leštidlo** (tvarovanie ako leštidlo na už pravdivú odpoveď) — figúra POTVRDENÁ.

**Konflikt s usadeným riadkom — FLAGNUTÉ, čaká na rozhodnutie autora (nerozhodnuté touto vlnou):**
1. **„failure mode“**: Generation renderuje **„chybový režim“** (podľa logiky Karty 1 — je to *režim* vnútri
   kategórie zlyhania, nie samo zlyhanie), Ingestion však má **„spôsob zlyhania“**. Jedno rozhodnutie, celý
   korpus — kandidát na retrofit Ingestion (mimo rozsah tejto vlny). Generation stránky sa nemenia.

**Pre lekciu Evaluation (odovzdanie):**
- **faithfulness** je §1.1 kept-EN (glos „(vernosť zdrojom)“); glosár nesie aj presný vzorec
  (*supported claims / total claims*, 0–1) a rozlíšenie reference-free vs reference-based — Evaluation ich
  rozvádza, drž smer glosára.
- **Karta 2 bije v Evaluation ešte tvrdšie** (sudca, kalibrácia, judge bias): číslo = **skóre**, proces/
  disciplína = **evaluácia/hodnotenie**; „hodnotenie“ pre číslo ✗. **zaujatosť sudcu** (judge bias), nie
  „predpojatosť“; **hodnotiace kritériá** (rubric), nie „rubrika“ (§1.2 falošní priatelia).
- **golden set** = „etalónová sada“; **reference answer** = „referenčná odpoveď / etalón“ (§1.2).
- Em-dash metronóm + zákaz „— ,“ platia ďalej; „chybový režim“ vs „spôsob zlyhania“ je otvorený (viď vyššie).
- Odkazy: SK existuje pre Ingestion, Retrieval, Generation (index aj prehĺbenie) → mieri naň cez „../ingestion/“,
  „../retrieval/“, „../generation/“; na zatiaľ nepreloženú Evaluation/Guardrails mieri holou slug-cestou
  (napr. „../cross-cutting/evaluation/“, „../../part-2-agents/agentic-rag/deep-dive“), glosár „../../glossary.md“.

### Fáza 8 — vlna 1, lekcia Evaluation: rozhodnutia kánonu

Štvrtá lekcia vlny 1 (Evaluation index + prehĺbenie „Vnútro metrík a kalibrácia sudcu“), plný redakčný tím
+ studený prechod ×2. Prvá **vnorená** lekcia (pod prierezovou kategóriou), takže odkazy majú +1 hĺbku.
Zapisuje sa, aby ďalšie lekcie vlny (Guardrails, Observability) dedili už rozhodnuté.

**Vyriešený konflikt Fázy 7 č. 1 — „failure mode“ = „spôsob zlyhania“, celý korpus.** Generation renderoval
„chybový režim“, Ingestion (a tool-use) „spôsob zlyhania“. **Rozhodnuté pre „spôsob zlyhania“** a aplikované
na celý korpus. Dôvody: (1) „spôsob zlyhania“ je **ustálený slovenský spoľahlivostno-inžiniersky termín** pre
FMEA „failure mode“ (webom overené: sixsigma.sk, cems.sk, TUKE, kaizentracker vedú „spôsob/režim zlyhania“);
(2) drží súdržnú rodinu „zlyhanie“ (Karta 1) — kategória je *zlyhanie*, jej konkrétne prejavy sú *spôsoby
zlyhania*; (3) „chybový režim“ v živom slovenskom úze znamená **debug/prevádzkový režim softvéru** — mylne
rámcuje spôsob zlyhania ako *prevádzkový stav*, navyše vnáša „chyba“ (Karta 1 ju rezervuje pre jednotlivý
incident) aj „režim“ (číta sa ako operačný mód). **Retrofit v tomto PR:** Generation `index.md` (H2 „Zlyhanie
generovania po jednotlivých spôsoboch“, úvodná veta, hlavička tabuľky „Spôsob zlyhania“) a `deep-dive.md`
(„najhorší spôsob zlyhania“). „chybový režim“ → **odmietnuté** (kalk/mylný referent).

**Karta 2 potvrdená ako nosná (skóre vs hodnotenie).** Cez celú lekciu drží: číslo, ktoré vydá model/sudca/
metrika, je vždy **skóre** (verb-by-object: „model **vráti** skóre“); disciplína, proces a akt = **evaluácia/
hodnotenie**. „hodnotenie“ pre číslo ✗. Studený prechod overil, že každý výskyt „hodnotenie“ je disciplína/akt.

**Ragasova štvorica metrík — kept-EN mená (EN-vedené), slovenský glos raz pri prvom výskyte na stránke, ďalej
holé EN meno alebo čisto opisná fráza (nikdy súperiaci slovenský termín-meno, §1.0):** **faithfulness (vernosť
zdrojom)**, **answer relevance (relevancia odpovede)**, **context precision (presnosť kontextu)**, **context
recall (úplnosť kontextu)**. Context precision/recall sú **iné veličiny** než Recall@K/Precision@K (§3) —
glos dekóduje, výpočet rozvádza próza. Vzorce ostávajú v EN kódovom/textovom fence (nepreklad); glosár nesie
`faithfulness = supported claims / total claims` (0–1) a `κ = (p_o − p_e) / (1 − p_e)`.

**Nové rozhodnutia termínov (→ dopĺňajú §1.1/§1.2):**

| Kánon | Originál | Trieda / poznámka |
|---|---|---|
| golden set (etalónová sada) | golden set | kept-EN (§1.1), glos raz; „etalónová sada“ ako opisná fráza |
| referenčná odpoveď; etalón | reference / ground-truth answer | §1.2; „etalón pravdy“ ✗ (kalk); „referenčná“ len v tejto dvojici |
| reference-free (bez etalónu) | reference-free | kept-EN, glos raz; zrkadlí glosár |
| reference-based (s etalónom) | reference-based | kept-EN, glos raz |
| správnosť | correctness | slovensky vedené (§1.2) |
| zaujatosť sudcu | judge bias | „predpojatosť“ ✗ (§1.2) |
| zaujatosť podľa poradia | position bias | slovensky vedené; EN originál v zátvorke raz |
| zaujatosť voči dĺžke | verbosity bias | slovensky vedené; EN originál v zátvorke raz |
| self-preference (uprednostňovanie vlastného štýlu) | self-preference / self-enhancement bias | kept-EN; formálny názov self-enhancement bias |
| hodnotiace kritériá | rubric | „rubrika“ ✗ (falošný priateľ, §1.2) |
| pointwise (hodnotenie jednej odpovede) | pointwise | kept-EN (§1.1) |
| pairwise (párové porovnanie) | pairwise | kept-EN (§1.1) |
| inter-annotator agreement (IAA) | IAA | kept-EN, glos „(zhoda medzi anotátormi)“ |
| Cohenova / Fleissova kappa | Cohen's / Fleiss' kappa | privlastňovacie príd. meno + „kappa“ kept |
| active sampling (aktívne vzorkovanie) | active sampling | kept-EN (§1.1); active learning „(aktívne učenie)“ |
| značka; značkovanie; anotátor | label; labelling; annotator | „značky/značkovanie“ zosúladené s glosárom (heslá IAA/kalibrácia/active sampling); „označenie“ (skeleton) ustúpilo glosáru |
| regresné hodnotenie | regression eval | slovensky vedené; A/B testovanie; offline „(pred nasadením, v CI)“ / online „(v produkcii)“ |
| kalibrácia (sudcu) | judge calibration | slovensky; „kalibrovať“ |

**HITL** ostáva kept-EN so schváleným glosom **„(schválenie človekom / človek v rozhodovacom procese)“** —
**nikdy „človek v slučke“** (§1.2/§1.3). *Flag (nie defekt tejto stránky):* heslo glosára „Human-in-the-loop
(HITL) (človek v slučke)“ porušuje tento zákaz — **do vlny flipov glosára**, nemení sa v tomto PR.

**Figúry — skúšobná doba (potvrdené studeným prechodom ×2, naivný čitateľ dekódoval pri prvom kontakte):**
- **meradlo** (golden set ako „meradlo, o ktoré sa opiera každé ostatné číslo“, D50) — na skúšobnej dobe.
- **čierne skrinky** (metric black boxes) — priehľadné, usadené.
- **slepé miesto** (documented blind spot) — natívny idióm, usadené (odtučnené na prostú prózu).
- **metrika je sudca** (the metric IS a judge) — vecná, nie figúra; drží.
- **jeho prácu rozprestrieš** (amortise the human) — „človeka nikdy neautomatizuješ preč — jeho prácu
  rozprestrieš cez tisíce príkladov“; POTVRDENÉ. Skeletonov obraz „automatizuješ preč“ ako **samostatná**
  figúra ZAMIETNUTÝ (studený prechod zlyhal) → prepísané na prózu.
- **kalibrácia hnije** (calibration rots) — POTVRDENÉ.
- ~~**má zuby**~~ (the split has teeth) — ZAMIETNUTÉ (naivný čitateľ nedekódoval) → „to rozdelenie má reálne
  dôsledky“.

**Nové kalkové pasce a slabé kolokácie (žatva Evaluation — do grep-zoznamov §1.3/§1.4):**
- „X je to, ako meriaš“ / „X je to, čo Y skóruje“ ✗ (cleft-rodina) → povedz priamo („X je spôsob merania…“)
- „zaslúži si svoju škálu“ ✗ (earn its scale) → „škála sa oplatí, až keď…“
- „voľba ide za otázkou“ ✗ (choice follows the question) → „voľba závisí od otázky“
- „cez pozície“ ✗ (across ranks/positions) → „naprieč pozíciami“ / „po poradiach“
- „metriky žijú vo vrstvách“ ✗ (levers live in the layer pages) → „páky nájdeš na stránkach vrstiev“
- „zhoda prejde latkou“ ✗ → „zhoda prekročí tvoju latku“
- „ukotvené o / podložené o“ ✗ (anchored/grounded on) → **„opreté o“** (zrkadlí glos grounding „opretie o kontext“)
- „poslepy“ ✗ → **„naslepo“** (anti-bohemizmus; ladenie naslepo)
- wrong-actor „zlyhanie, ktoré golden set nevidel prichádzať“ ✗ → „zlyhanie, na ktoré golden set nemyslel“

**EN/RU vecná chyba nájdená a opravená (sankcionovaná výnimka — samostatný `docs:` commit).** EN aj RU
prehĺbenie Evaluation uvádzalo Einsteinov dátum narodenia „20 March 1879 / 20 марта 1879“; správne je
**14. marca 1879** (a presne tak znie aj príklad v dokumentácii Ragas). Opravené v `docs/…/evaluation/deep-dive.md`
a `i18n/ru/…/evaluation/deep-dive.md`; matematika faithfulness 1/2 = 0,5 ostáva. SK nesie správny dátum.

**Odkazy (vnorená lekcia, +1 hĺbka):** glosár **„../../../glossary.md“**; SK existuje pre Ingestion, Retrieval,
Generation → **„../../ingestion/“, „../../retrieval/“, „../../generation/“**; súrodenecké nepreložené prierezové
aspekty holou slug-cestou **„../guardrails/“, „../observability/“**; v rámci lekcie **„./index.md“, „./deep-dive.md“**.

**Pre lekciu Guardrails (odovzdanie):**
- „failure mode“ = **„spôsob zlyhania“** (celý korpus, Fáza 8). Karta 1 drží: úspešný útok/prienik je
  **„úspešný útok“ / „prienik“**, nikdy „zlyhanie“ — jednotlivý incident je „chyba“.
- Karta 2 (skóre vs hodnotenie) a zaujatosť sudcu/hodnotiace kritériá platia ďalej; „zaujatosť“ je slovenský
  koreň pre „bias“ (position/verbosity vedené slovensky, self-preference kept-EN).
- Em-dash metronóm + zákaz „— ,“ platia ďalej; striedaj rytmus vedome.
- Guardrails je tiež **vnorená** pod cross-cutting → +1 hĺbka odkazov ako pri Evaluation. SK existuje pre
  Ingestion/Retrieval/Generation/**Evaluation** → mieri naň cez „../../{ingestion,retrieval,generation}/“ a
  „../evaluation/“; na nepreloženú Observability holou „../observability/“, glosár „../../../glossary.md“.

### Fáza 9 — vlna 1, lekcia Guardrails: rozhodnutia kánonu

Piata lekcia vlny 1 (Guardrails index + prehĺbenie „Obrana proti injection a red-teaming"), plný redakčný
tím + studený prechod ×2. Druhá **vnorená** lekcia (pod prierezovou kategóriou), odkazy +1 hĺbka ako pri
Evaluation. Zapisuje sa, aby posledná lekcia vlny (Observability) dedila už rozhodnuté.

**Bezpečnostné termíny — smer a glosy (potvrdenie §1.1 kept-EN; smer jednotný celý korpus, §1.0).** kept-EN,
EN-vedené, slovenský glos raz pri prvom výskyte NA STRÁNKE (obe stránky glosujú samostatne, §7):

- **prompt injection** „(útok, ktorý modelu podstrčí cudzie inštrukcie)"
- **jailbreak** „(obídenie vlastných bezpečnostných pravidiel modelu)"
- **spotlighting** „(označkovanie nedôveryhodného textu)" — pomenúva RODINU troch techník
- **delimiting** „(ohraničenie značkami)", **datamarking** „(značka v každej medzere)", **encoding**
  „(zakódovanie)" — techniky spotlightingu, každá glosovaná raz
- **instruction hierarchy** „(hierarchia inštrukcií podľa oprávnení)"
- **PII** „(osobné údaje)" — kód. akronym; **SMER kept-EN-vedený celý korpus** („PII (osobné údaje)"),
  NIE „osobné údaje (PII)". Flip na prehĺbení opravený (§1.0 — kolísanie smeru v rámci stránky/korpusu je defekt).
- **red-teaming** „(útočné testovanie)" — presný glos podľa odovzdania Fázy 8
- **defence-in-depth** „(viacvrstvová ochrana)" — kept-EN termín; v opisnej próze smie „obrana do hĺbky" (§1.2 riadok)
- **attack success rate (ASR)** „(miera úspešnosti útokov)"; ASR holé po zavedení. **ASR je skóre/miera
  (Karta 2)** — „číslo, ktoré ti meranie vráti" (verb-by-object §1.5: meranie/model VRÁTI skóre).
- **data exfiltration** „(vynesenie dát)"
- **tool poisoning** „(otrávený opis nástroja)", **confused deputy** „(zmätený zástupca)", **rug pull**
  „(podvrhnutie po schválení)" — agent-side (§1.1); menované iba v odkaze na prehĺbenie o MCP, glosy ľahké.
- **guardrails** „(bezpečnostné mantinely)" — glos NA KAŽDEJ STRÁNKE pri prvom výskyte (prehĺbenie ho
  pôvodne vynechalo — doplnené; §7 viaže telo každej stránky, nie len index).
- **golden set** „(etalónová sada)" — kept-EN (Fáza 8), glos raz aj pri krížovom odkaze z inej lekcie.

**Trieda 2 (slovensky vedené, EN originál raz v zátvorke) — potvrdené / doplnené §1.2:**

- **princíp najnižších oprávnení (least privilege)** — potvrdenie Fázy 4/6 („najnižších", nie „najmenších").
  Studený čitateľ navrhol „najmenšie oprávnenia" — **zamietnuté**, rozhodnuté web-dokladmi vo Fáze 4
  (sk.wikipedia, NBÚ/SAAVS). Konflikt s usadeným riadkom → neprepisuje sa.
- **kontrola vstupu (input scanning/validation) / validácia výstupu (output validation)** — slovensky
  vedené; „validácia" prijaté.
- **bezpečnosť obsahu (content safety)** — slovensky vedené, EN raz v zátvorke; „moderovanie obsahu" v próze.
- **vzorové rozpoznávače (pattern recognizers) / modelové (NER) rozpoznávače** — slovensky vedené hlavy;
  „rozpoznávanie pomenovaných entít (NER)" rozvedené v próze.
- **de-identifikácia (de-identification)** — prirodzene naturalizované latinské slovo, slovenský pravopis
  (ako „evaluácia"); „Presidio je SDK na rozpoznávanie a de-identifikáciu".
- **vratné verzus nevratné (reversible vs irreversible)** — slovensky vedená os maskovania.
- **jednokolové / viackolové útoky (single-turn / multi-turn)** — slovensky vedené.
- **pseudonymizácia / anonymizácia (pseudonymization vs anonymization)** — prirodzene naturalizované,
  slovenský pravopis, slovensky vedené; most = **čistá angličtina** „(pseudonymization vs anonymization)",
  NIE opakovanie slovenských slov v zátvorke (§1.0 čistota glosu; oprava studeného prechodu). Pätička drží EN heslo.

**Presidio komponenty a operátory (Trieda 1, kept-EN):** **Analyzer / Anonymizer** (branded komponenty,
veľké začiatočné). Operátory **redact, replace, mask, hash, encrypt** — kept-EN identifikátory, ľahký opisný
glos v próze. Entity typy **PERSON, PHONE_NUMBER, EMAIL_ADDRESS** — kódové identifikátory, neprekladajú sa.

**Ďalšie rendery a glosy:**

- **allowlisty** — kept-EN, glos „(zoznamy povoleného)" raz pri prvom výskyte na prehĺbení; index má opisné
  „obmedz, ktoré nástroje a akcie smie použiť (tool allow-listing)".
- **Luhnova kontrola (Luhn check)** — privlastňovacie príd. meno + „kontrola"; „Luhn" je vlastné meno.
- **ingestion** — kanonický názov etapy (§1.1); na tejto lekcii dostal pri prvom výskyte na KAŽDEJ stránke
  ľahký glos **„(príjem obsahu do indexu)"**. Studený prechod ×2 (naivní čitatelia) ho opakovane hlásil ako
  nedekódovateľný na jump-in povrchoch (takeaway, tučná odrážka). Kanonické názvy etáp síce ostávajú anglické,
  ale glos pri prvom výskyte je v súlade so §1.1 a slúži audience-primary cieľu.
- **Observability** — kept-EN názov vrstvy/lekcie; v **see-also zoznamoch** ostáva holé vlastné meno
  (precedens Evaluation), v **próze** (prehĺbenie „prístrojom je Observability") dostáva glos „(pozorovateľnosť)".
- **verzus** — prijaté ako spojka v pároch termínov („priama verzus nepriama", „vratné verzus nevratné");
  studený prechod navrhol „oproti/a", ponechané ako register korpusu.

**Karta 1 potvrdená (kritická pre túto lekciu).** Grep oboch stránok: **žiadny výskyt „zlyhanie"** — úspešný
útok je „úspešný útok" / „obrana povolí" / „útok prejde", NIKDY „zlyhanie"; jednotlivá chyba (odkódovania,
voľby operátora) = „chyba". „spôsob zlyhania" (failure mode, Fáza 8) sa v tejto lekcii nevyskytol, rodina drží.

**Karta 2 potvrdená.** ASR aj každé číslo = **skóre/miera**; sudca = **sudca**, jeho zaujatosti =
**zaujatosti sudcu** (nie „predpojatosť"); disciplína/akt = **evaluácia/hodnotenie**. Zosúladené s Evaluation
(krížový odkaz „kalibrácia sudcu, pozor na zaujatosti").

**Modálna vernosť negácie (nová pasca do §1.4) — „nedokáže spoľahlivo VERB", NIE „spoľahlivo neVERB".** Nosná
téza lekcie („an LLM can't reliably tell instructions from data") sa renderuje **„model nedokáže spoľahlivo
rozlíšiť / oddeliť inštrukcie od dát"**. Tvar „model spoľahlivo neoddelí/nerozlíši" ✗ — slovenské „spoľahlivo
ne-VERB" číta ako „spoľahlivo zlyháva / vždy zlyhá", čo je vecný posun oproti „je nespoľahlivý pri". Studený
prechod ×2 odhalil; opravené na oboch stránkach aj v takeawayi. Pravidlo: „X spoľahlivo neVERB" ✗ pre „X can't
reliably VERB" → **„X nedokáže spoľahlivo VERB"**.

**Figúry — výsledok skúšobnej doby (studený prechod ×2; obaja naivní čitatelia dekódovali pri PRVOM kontakte
v oboch pasážach, plus naivný čitateľ v autorskej dávke — 3× nezávisle):**

- **„plot drží presne dovtedy, dokým je token, čo ho drží, tajný"** (delimiting — oddeľovač ako plot, ktorý
  drží len dokým je token tajný) — **POTVRDENÁ**. „plot" = slovenské slovo pre ohradu, viazané na
  „ohraničenie / hranica" vyššie.
- **„kľúč je odteraz klenot, po ktorom ide útočník aj súdny príkaz"** (encrypt-pasca — dešifrovací kľúč ako
  klenot/terč pre útočníka aj súdny príkaz) — **POTVRDENÁ**. „klenot" + idióm „ísť po niečom" + „súdny príkaz"
  čisto slovenské.
- **„zapečený / zapečené"** (baked-in — príkaz/PII „zapečené") — **ZAMIETNUTÁ** (studený prechod ×3 hlásil
  kalk „baked into" + kulinárske čítanie) → index „príkaz **ukrytý**", prehĺbenie „PII **zabudované** v korpuse".
  Do §1.4 ako kalková pasca.

**Nové kalkové pasce a slabé kolokácie (žatva Guardrails — do grep-zoznamov §1.3/§1.4):**

- „X je to, ako…" ✗ (cleft-rodina „X je to, čo…", §1.4) → povedz priamo („X je postup, ktorým…")
- „Čo … , je …" ✗ (inverzný pseudo-cleft „what X does is Y") → „funguje to vďaka…"
- „Ako maskuješ, je …" ✗ (wh-cleft „how you X is Y") → „spôsob maskovania je…"
- „žiť / žije" pre umiestnenie („obrana žije na strane tréningu", „podoba žije v prehĺbení") ✗ → „pracuje s
  tréningom", „rozoberá / nájdeš" (zrkadlí Fáza 8 „metriky žijú vo vrstvách")
- „sedieť na + akuz." ako mapovacie sloveso ✗ („which defence fits which class") → „zodpovedá + datív",
  „mieri na"; nadužité „sedí / sadá na" = metronóm, striedaj
- „zapečený / zapečené" ✗ (baked into) → „ukrytý / zabudovaný / vložený"
- „odvádzať … nanovo" ✗ (re-derive; odvádzať = odviesť / platiť) → „rozvádzať / odvodzovať nanovo"
- „sledovať [stránku / prehĺbenie]" ✗ pre „see / refer" (sledovať = monitorovať) → „pozri [stránku]"
- „šumnejšie" ✗ (šumný = pekný, dial.) → „vnášať viac šumu / zašumenejší"
- „koreňová príčina" ✗ (root cause) → „základná / hlavná príčina"
- „v mierke celej organizácie" ✗ (at the scale of) → „v rozsahu celej organizácie"
- „nakresliť hranicu" ✗ (draw a boundary) → „vytýčiť / vymedziť hranicu"
- „drž (rozdiel) ostrý" ✗ (keep sharp) → „drž jasne / maj jasný"
- „je v prestrojení rozhodnutie" ✗ (is in disguise) → „je v skutočnosti zamaskované rozhodnutie"
- „ticho" pre silently ✗ → „nenápadne / potichu" (zrkadlí Fáza 4 „ticho zahodiť")
- „Menovaný … príklad" ✗ (the named example) → „konkrétny … príklad"
- „zdieľať jeden kanál" (holé sloveso) ✗ → „ísť jedným kanálom" (§1.2 — „zdieľať" len v ustálených spojeniach)
- „útočná plocha" → natívne **„plocha útoku"** (potvrdenie Fázy 2)
- „nasadená do obsahu" ✗ (payload deployed into) → „vložená do obsahu"
- „drží dve strany" ✗ (holds two sides) → „stráži obe strany / pôsobí na oboch stranách"
- „než to odíde do API poskytovateľa" ✗ (leaves into) → „odíde k poskytovateľovi API"
- „vyvažovať X oproti Y" ✗ (balance against) → „vyvažovať X a Y"
- „nájdený korpus" ✗ (retrieved corpus — korpus sa neretrievuje, vyhľadávaš V ňom) → „korpus, z ktorého vyhľadávaš"
- „keď má model agenta" ✗ (model JE agent, nemá ho) → „keď model vystupuje ako agent s nástrojmi"
- „robiť rozdiel medzi (jedným)" ✗ (make a difference; visí bez druhého člena) → „nerozlišovať, odkiaľ…"
- gramatika: „text medzi značkami **sú**" (zhoda podmet–prísudok) → „všetko medzi značkami sú"; imperatív
  „obal" (podst. meno) → „obaľ"; run-on jump-in teaser rozdeliť na dve vety

**Termíny na skúšobnej dobe (čakajú na kontrolu rodeným Slovákom / najbližší studený prechod):**

- **Skórer** (agent-noun od „skóre" — „Skórer býva sudca") — dekódované ×3, webové doklady nulové; drží ako
  priehľadná odvodenina (rodina „skórovať / preskórovať"), pending.
- **allowlisty** (skloňovaný kept-EN) — úzus dev-komunity, glos raz; pending kontrola.

**§8 rozpočet polotučného — nápravy:** odtučnené rečnícke zvýraznenia (index „nerozlíši inštrukcie od dát";
prehĺbenie „priebežne", „žiadny stupeň zraniteľnosť neodstráni", „trénuje") — polotučné je navigácia (kotva
termínu), nie intonácia (§8). Kotva termínu „zladené a nezladené (aligned vs misaligned)" ponechaná tučná
(prvý definujúci výskyt).

**Konflikty s usadenými riadkami — FLAGNUTÉ, NEPREPÍSANÉ (čakajú na rozhodnutie autora):**

1. **„a spol." vs „a kol." pri „et al."** — studený prechod ×2 nezávisle hlásil, že „a spol." číta ako
   „a spoločnosť / & Co." (obchodná entita) a citačná norma je **„a kol."** (a kolektív). Fáza 5 však
   „a spol." **usadila** ako webom overený tvar a používa ho celý korpus (Evaluation: „Es a spol.",
   „Zheng a spol."). Guardrails drží „a spol." kvôli konzistencii; **kandidát na korpusový flip na „a kol."
   vo vlne opráv** — nemení sa touto vlnou (canon > lone-page novelty; flag, neprepisuj).
2. **„kvalita úlohy" (task quality)** — literárny čitateľ hlási miernu translationese (kvalita sa pripisuje
   úlohe, nie výsledku); tvar je konzistentný celý text (index / prehĺbenie / Mermaid) a naivní čitatelia ho
   nehlásili. Kandidát na „kvalita riešenia úlohy / kvalita výstupu" — jedno rozhodnutie celý korpus, mimo
   rozsah tejto vlny.

**Odkazy (vnorená lekcia, +1 hĺbka) — overené managing editorom:** glosár **„../../../glossary.md"**;
súrodenec **„../evaluation/"**; nepreložené súrodenecké **„../observability/"**,
**„../../../part-3-production/tooling-ecosystem/"** (folder-slash); MCP prehĺbenie
**„../../../part-2-agents/mcp/deep-dive"** (bez .md, bez lomky); v rámci lekcie „./index.md", „./deep-dive.md".
Zhoda `sidebar_label` ↔ text odkazu v index-poznámke overená byte-for-byte („Obrana proti injection a
red-teaming"); existujúce `_category_.json` + `current.json` (label „Guardrails", kept-EN) overené, nerekreované.

**Pre lekciu Observability (odovzdanie):**

- **failure mode = „spôsob zlyhania"** (celý korpus, Fáza 8). Karta 1 drží: jednotlivý incident = „chyba",
  kategória-etapa = „zlyhanie"; „chybový režim" ✗.
- Karta 2 (skóre vs hodnotenie), zaujatosť sudcu / hodnotiace kritériá platia ďalej.
- **Em-dash metronóm + zákaz „— ,"** platia ďalej; sentence-final „— twist" a opener „Časť 1 + sloveso"
  striedaj vedome (obidva hlásené ako AI-tell aj v Guardrails).
- **Modálna vernosť negácie (§1.4):** „can't reliably VERB" → „nedokáže spoľahlivo VERB", nie „spoľahlivo neVERB".
- **Observability je POSLEDNÁ vnorená prierezová lekcia** → glosár **„../../../glossary.md"**; SK súrodenci
  **„../../{ingestion,retrieval,generation}/"** + **„../evaluation/"** + **„../guardrails/"** (SK teraz existuje);
  v rámci lekcie „./index.md", „./deep-dive.md". „Observability" ako názov lekcie ostáva kept-EN; v próze glos
  „(pozorovateľnosť)".
