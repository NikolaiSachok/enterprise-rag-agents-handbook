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
„posuvné okno“; „poruke“ (kodifikovaná príslovka); „a kol.“ (citačná skratka „et al.“ — flip z „a spol.“, Fáza 10 STEP-0 / Fáza 11; „a spol.“ číta ako „& Co.“); „popretkávané“; „zosypať sa“; „hotový model“
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

### Fáza 10 — vlna 1, lekcia Observability: rozhodnutia kánonu

Šiesta a POSLEDNÁ lekcia vlny 1 (Observability index + prehĺbenie „Vzorkovanie, SLO a rozpočty"),
plný redakčný tím + studený prechod ×2. Tretia **vnorená** lekcia (pod prierezovou kategóriou), odkazy
+1 hĺbka. Prezentačná lokalita bez ľudskej poistky — brány niesli plnú váhu (naivný jednojazyčný čitateľ,
anti-bohemizmus, web-overenie kolokácií, Gate 2a). Zapisuje sa ako uzávierka slovenskej vlny 1.

**STEP-0: tri korpusové flipy nahlásené Guardrails (Fáza 9) — ROZHODNUTÉ a web-overené; retrofit už
publikovaných stránok je ODLOŽENÝ na milestone-prechod vlny (nemení sa touto lekciou):**

1. **«a spol.» → «a kol.» pre „et al." — FLIP, celý korpus.** Web-overené: slovenská citačná norma
   (STN ISO 690:2012) vedie **„a kol."** (a kolektív) pri viac ako troch autoroch domáceho diela, resp.
   „et al." pri zahraničnom; **„a spol."** sa číta ako „a spoločnosť / & Co." (obchodná entita) — presne
   ako to hlásil studený prechod Guardrails. Ruší usadenie Fázy 5 („a spol."). **Observability sa flipu
   nezúčastňuje** (žiadna „et al." citácia na stránke). **Retrofit (odložený na milestone-prechod):**
   Evaluation prehĺbenie („Es a spol." → „Es a kol.", „Zheng a spol." → „Zheng a kol."), Ingestion
   prehĺbenie („a spol."), Guardrails prehĺbenie („Hines a spol.", „Wallace a spol.") — a §1.2 „Prijaté
   obraty" riadok „a spol." prepísať na „a kol.".
2. **«kvalita úlohy» → «kvalita výstupu» — FLIP, celý korpus.** Web-overené ako doložený slovenský AI-úzus
   („kvalita výstupu", „kvalitnejšie odpovede od modelu"); „kvalita úlohy" pripisuje kvalitu úlohe, nie
   výsledku (mierna translationese, hlásil literárny čitateľ Guardrails). **Observability vedie „prepad
   kvality / regresia kvality / kvalita" — „kvalita úlohy" sa nevyskytla, adoptované automaticky.**
   **Retrofit (odložený):** Guardrails prehĺbenie (spotlighting — „za cenu nižšej kvality úlohy",
   „takmer nulová strata na kvalite úlohy", „kvalitu úlohy si vymenil za bezpečnosť", Mermaid „cena za
   kvalitu úlohy ↑") → „kvalita výstupu".
3. **«najnižšie / najnižších oprávnení» (least privilege) — POTVRDENÉ (resolve = žiadny flip).** Fáza 4/6/9
   už rozhodli „princíp **najnižších** oprávnení" web-dokladmi (sk.wikipedia „princíp najnižšieho
   privilégia", smernice NBÚ/SAAVS); návrhy „najmenších / najmenšie" zamietnuté. Held-stav uzavretý:
   ostáva „najnižších". Observability termín nepoužíva.

**Smer termínu podľa glosára / §1.1 (potvrdené, celý korpus).** Observability = kept-EN názov; v próze
**KAŽDEJ stránky** glos „(pozorovateľnosť)" pri prvom výkladovom výskyte (nie v rekapitulácii), v see-also
zoznamoch holé vlastné meno (zrkadlí Evaluation/Guardrails, Fáza 9). Kept-EN s glosom raz na stránku:
**SLI „(service level indicator — čo meriaš)", SLO „(service level objective — cieľ na SLI)", error budget
„(rozpočet chýb)", golden signals „(zlaté signály SRE)", burn-rate „(rýchlosť míňania rozpočtu chýb)",
alert fatigue „(únava z upozornení)", cost attribution „(priradenie nákladov)", token accounting „(účtovanie
tokenov)", TTFT „(time-to-first-token — čas do prvého tokenu)", retention „(uchovávanie)", model pinning
„(pripnutie verzie modelu)", re-ingest „(opätovné načítanie do indexu)".** Rozpis akronymu v angličtine +
slovenský glos (SLI/SLO/TTFT) je prijatý vzor dekódovania, nie hybridný glos.

**Trieda 2 / natívne rendery (potvrdené):** **úrovne uchovávania (retention tiers)** (SK-vedené),
**rozpočet latencie (latency budget)** (most raz, aby ladil s rodinou „rozpočet chýb"), **mäkký strop
(soft cap) / tvrdý strop (hard cap)** (Karta 9), **posun rozloženia vstupov (input distribution shift)**,
**triáž regresie (regression triage)** (SK-vedené), **regresia kvality** (quality drop/regression).
`head-based sampling (vzorkovanie na začiatku tracu)`, `tail-based sampling (vzorkovanie na konci tracu)`,
`priority/hybrid sampling (prioritné/hybridné vzorkovanie)`; generický akt nesie natívne „vzorkovanie".

**„trace" — jeden slovenský tvar, „trasa" ZAMIETNUTÁ ako glosové slovo.** Kept-EN „trace" sa skloňuje
slovensky **tracu/tracov/tracy/tracoch** (§1.1/§3). Glosy prvej verzie stránky použili **„trasa"** (na
začiatku/konci **trasy**, jeden krok **trasy**, úložisko/UI/zberač **tras**) — „trasa" = cesta/route je iné
slovo a v korpuse sa nevyskytuje inde; studený prechod ×2 hlásil zámenu trace/tracy/trasa. **Zjednotené na
trace-rodinu:** „na začiatku/konci **tracu**", „jeden krok **tracu**" (span), „úložisko/UI/zberač **tracov**".

**Súkromie a maskovanie (naväzuje na Guardrails, Fáza 9).** Vrstva odstránenia PII pred úložiskom =
**„de-identifikácia"** (Fáza 9 term); **„redakcia" pre *redaction* ZAMIETNUTÁ** — je to falošný priateľ
(slovenská „redakcia" = redakčná miestnosť / znenie textu), hlásili ju literárny redaktor aj **obaja** studení
čitatelia prehĺbenia. Operátory maskovania ostávajú kept-EN identifikátory s ľahkým slovenským glosom (Fáza 9):
**hash (odtlačok), redact (začiernenie), replace (náhrada), encrypt (šifrovanie).** Os **vratné verzus nevratné
(reversible vs irreversible)**; **pseudonymizácia/anonymizácia** natívne (Fáza 9), most = čistá angličtina.
**PII** kept-EN-vedené „PII (osobné údaje)" (Fáza 9, celý korpus).

**Karty (potvrdené na tejto lekcii).**
- **Karta 1:** „zlyhanie vyhľadávania / zlyhanie generovania" = kategória-etapa; jednotlivá zlá odpoveď /
  halucinácia so stavom 200 OK = **„chyba"**, nie „zlyhanie". „failure mode" = **„spôsob zlyhania"** (Fáza 8),
  „chybový režim" ✗. **„zlyhávajúce tracy / dopyty" PONECHANÉ** — prítomné činné príčastie opisuje *správanie*
  („ktoré zlyhávajú"), nie rezervované podstatné meno kategórie; naivný čitateľ, konzistenčný aj literárny
  redaktor sa zhodli, že sa nečíta ako kategória „zlyhanie".
- **Karta 2:** číslo (skóre evaluácie, pass-rate) = **„skóre"**; proces/disciplína = **„online evaluácia /
  hodnotenie"**. „hodnotenie" pre číslo ✗.
- **Karta 4:** trace/observability store = natívne **„úložisko tracov / úložisko"**, NIE kept-EN „store"
  (ten je rezervovaný pre pamäť frameworku).
- **Karta 9:** rozpočtová politika = pár **„mäkký strop / tvrdý strop"**; sloveso **„zastropovať"** je prijaté
  (webom overené — „zastropovať ceny/sumy"; naivný čitateľ dekódoval ×3), rovnako H2 „Zastropovať, koľko
  požiadavka minie". „pevný strop" ✗ (rozbíja pár).

**Verb-by-object (§1.5) potvrdené:** „model **vráti** výstup", „meranie **vráti** skóre"; **„vyprodukovať
odpoveď" ✗ → „z dopytu **vyšla** odpoveď"**; **„robiť rozhodnutia" ✗ → „**rozhodovať**"**.

**Figúry — výsledok skúšobnej doby (studený prechod ×2, naivný čitateľ dekódoval pri prvom kontakte):**
- **POTVRDENÉ:** **„divadlo dostupnosti"** (uptime theatre — „robiť divadlo" = predstierať), **„stena zelených
  dashboardov"** (wall of green dashboards), **„účet ti ujde"** (bill escapes you — idióm „niečo ti ujde"),
  **„anonymizér"** (produktívna prípona -ér; podporené susedným Analyzer → Anonymizer), **„zastropovať"**
  (viď Karta 9). **„kruh sa uzatvára"** znovupoužité (Fáza 2).
- **ZAMIETNUTÉ:** **„rúra beží oboma smermi"** (pipe runs both ways) → **„tá väzba funguje oboma smermi"**;
  „rúra" = rúra na pečenie / potrubie (falošný priateľ) a odtŕha sa od kept-EN „pipeline" použitého inde.

**Nové kalkové pasce a slabé kolokácie (žatva Observability — do grep-zoznamov §1.3/§1.4):**
- „prevaliť verziu / prevalil model / prevaliť pod rukami" ✗ (roll out a version — NULOVÉ slovenské webové
  doklady; „prevaliť" = prevrátiť/pretlačiť; „pod rukami" ≠ idióm „pod rukou") → **„potichu vymeniť verziu /
  vymenil model"**
- „zodpovednosť" pre *liability* ✗ (= responsibility/accountability) → **„riziko / príťaž / záväzok"**
- „kvalitatívny prepad" ✗ (= qualitative, významový posun) → **„prepad kvality"** (drž jednotne s „regresia
  kvality")
- „ovisne / metrika ovisne" ✗ (fyzické ovisnutie) → **„prepadne sa / klesne"**
- „redakcia" pre *redaction* ✗ (falošný priateľ) → **„de-identifikácia"** (§ vyššie)
- „dátové telá" ✗ (data bodies/payloads) → **„telá správ / samotné dáta"**
- „idú prvé" ✗ (come first) → **„sú prvoradé"**
- „dostáva to isté zaobchádzanie" ✗ (gets the same treatment) → **„to isté urobíš s…"**
- „má rovnaký tvar ako" ✗ (§1.4 zakázaná šablóna „X má tvar, s ktorým si sa už stretol") → **„funguje rovnako
  ako"**
- „hlásenie po fakte" ✗ (report after the fact) → **„dodatočné hlásenie"**
- „proti ktorým agent beží" ✗ (budgets an agent runs against) → **„ktoré agent nesmie prekročiť"**
- „ovládací prvok" ✗ (control — číta sa ako GUI widget) → **„páka"** (usadená figúra) / „nástroj riadenia"
- „zníži na (lacnejší model)" ✗ → **„prepne na (lacnejší model)"**
- „sa obracia k tomu" ✗ (turns to) → **„sa venuje tomu"**
- „predvídateľný na bajt" ✗ (predictable to the byte) → **„predvídateľný do posledného bajtu"**
- „príde pochovaná v šume" ✗ (arrives buried) → **„zapadne v šume"**
- „musí prežiť rozsah" ✗ (survive scale) → **„obstáť pri veľkom rozsahu/objeme"**
- „vyzreté tímy" ✗ (mature = zrelé/o víne) → **„skúsené tímy"**
- „skončil na niečom" (came to grief — dvojznačné) → **„popálil sa na niečom"**
- „incident, ktorý čaká na svoj dátum" ✗ (waiting for its date) → **„incident, ktorý raz určite príde"**
- „vzory" pre opakujúce sa vzorce správania → **„vzorce"** (vzor = návrhový vzor; recurring behaviour = vzorce)
- „držať X merateľným" ✗ (keep measurable) → **„udržiavať X merateľným"**
- šípka „→" ako „teda/vedie k" v súvislej PRÓZE ✗ → spojky („takže… a"); „→" ostáva v Mermaid, v diagnostických
  odrážkach a v pomenovaných reťazcoch (Analyzer → Anonymizer)

**Em-dash metronóm + AI-tells (potvrdenie Fázy 2/6/9).** Em-dash je naďalej vsuvková značka locale (Fáza 2),
ale studené čítania hlásili **prehustenie** — stíšené v najhustejšom bloku prevodom na dvojbodku / bodku /
zátvorku / čiarku. Vedome striedať aj: sentence-final „— twist" a opakovaný opener **„Časť 1 / Prvá časť /
Táto stránka + sloveso** v susedných odsekoch (obidva znova hlásené ako AI-tell).

**Štruktúra / Gate 4 (overené).** Frontmatter (index slug, deep-dive `sidebar_label`/`sidebar_position`),
§4 reťazce, pätičky „Nové pojmy", text odkazu na prehĺbenie == `sidebar_label` „Vzorkovanie, SLO a rozpočty"
(byte-for-byte), odkazy +1 hĺbky (glosár „../../../glossary.md"; SK súrodenci „../../{ingestion,retrieval,
generation}/", „../evaluation/", „../guardrails/"; prehĺbenia súrodencov „../guardrails/deep-dive",
„../evaluation/deep-dive" bez .md/lomky; EN-fallback folder-slash pre part-3 + „../../../part-2-agents/
overview" bez .md/lomky), dva Mermaidy (IDs zachované, `gen_ai.response.model` ako kód). Žiadne video
(čestné „nie"). `_category_.json` + `current.json` (label „Observability", kept-EN) nerekreované.

**Odovzdanie milestone-prechodu vlny (čo musí zosúladiť korpusový prechod):** oba flipy STEP-0 vyššie
(„a spol." → „a kol." a „kvalita úlohy" → „kvalita výstupu" na už publikovaných stránkach) plus všetky
skoršie odložené flipy Fáz 5–9 (glosárové flipy hesiel: HITL „(človek v slučke)" v glosári porušuje §1.2/§1.3;
„least privilege / najmenších" doklady; rozmernosť/dimenzionalita; kosínusová podobnosť; viacjazyčné
embeddingy; pätičky „Nové pojmy" ↔ trojtriedne flipy glosára) a všetky figúry na skúšobnej dobe čakajúce na
potvrdenie / kontrolu rodeným Slovákom (Skórer, allowlisty, preskórovať, signatúra funkcie, ansámbel behov,
meradlo, „prehĺbenie vrstvy X" ako nedekódovateľný obraz).

### Fáza 11 — milestone-prechod vlny 1 (uzávierka #95): reconciliácia a rozhodnutia

Delta-driven milestone-prechod nad všetkými 12 SK stránkami + glosárom + kánonom (nie re-preklad). Aplikoval
usadené korpusové flipy, dal každej figúre na skúšobnej dobe čerstvý naivný decode, prebehol konzistenčný a
managing-editor prechod, studený spätný prechod 4 strán, a zosúladil kánon s korpusom (bidirekčne).

**Usadené korpusové flipy — APLIKOVANÉ (retrofit z Fázy 10 STEP-0 hotový).**
- **«a spol.» → «a kol.»** (STN ISO 690 „et al.") — 8 citačných výskytov: Hines, Wallace (Guardrails); Es,
  Zheng (Evaluation); Wang, Dhuliawala, Liu (Generation); Gao (Retrieval). Grep SK: „a spol." 9→0; „a kol."
  teraz 9 (8 flipnutých + skôr existujúci „Kusupati a kol."). **Výnimka — Ingestion „pypdf a spol.":** NIE je
  citácia „et al.", ale „a jemu podobné" (zoznam nástrojov) — „a kol." (= a kolektív/spoluautori) by bol
  sémanticky nesprávny → prepísané na **„pypdf a podobné"**, nie „a kol.". §1.2 „Prijaté obraty" riadok
  zosúladený.
- **«kvalita úlohy» → «kvalita výstupu»** (doložený SK AI-úzus) — 6 výskytov, všetky Guardrails prehĺbenie
  (telo + Mermaid). Grep SK: „kvalita úlohy" 6→0; „kvalita výstupu" 6.
- **«najnižších» (least privilege)** — POTVRDENÉ, žiadny flip; „najmenších" v SK = 0.
- **«spôsob zlyhania» (failure mode)** — flip Generation z Fázy 8 drží; „chybový režim" v SK = 0.
- **Zákaz „— ,"** — grep „— ," = 0; navyše 3 výskyty „—," (dash-inset tesne pred čiarkou) v Ingestion
  prehĺbení prepísané na zátvorku / „a" (§Fáza 6). Glosár flipy nepotreboval (grep «a spol.»/«kvalita úlohy» = 0).

**Figúry na skúšobnej dobe — čerstvý naivný decode (jednojazyčný SK čitateľ, zdroj skrytý, bez čítania dopredu).**
- **POTVRDENÉ → usadené (marker „na skúšobnej dobe" retirovaný):** „naplno udrie dôsledok" (Ingestion);
  „vrchol lievika", „rovnaká choroba, dve miesta zásahu", „stratové úzke hrdlo" (Retrieval); „meradlo" (Evaluation).
- **POTVRDENÉ s podmienkou glosu:** „pracovný bod" (Ingestion/MRL) — dekóduje IBA vďaka inline dekódu „—
  rôznymi pomermi rýchlosti a presnosti" pri prvom výskyte; usadené s pravidlom, že inline dekód pri prvom
  výskyte ostáva (bez neho je to kalk *operating point*).
- **POTVRDENÉ (naive-decode) + native-check pending:** „ansámbel behov" (Generation) — najtenší margin sady
  (naivný čitateľ dorozumel z okolitého výkladu; „ansámbel" ťahá mierne k hudobnému telesu); decode PASS, ale
  ostáva na native-check track (webové doklady, §1.1).
- **STRUCK (už nie je v texte):** „odhalucinovať (ťa mimo cieľa)" (Retrieval, Fáza 6) — v merged texte sa
  nevyskytuje, nahradené prostou prózou („kde si model vymyslí dokument mieriaci preč od tvojho korpusu");
  medzi odmietnuté coinage — prostá próza vyhrala.

**Konzistenčný prechod (12 strán) — 1 defekt, opravený.** Observability prehĺbenie, error-budget gloss:
znel „koľko **zlyhania**… množstvo **zlyhania**" pri kanonickom „rozpočet **chýb**" — rozpočet míňajú
JEDNOTLIVÉ chyby (Karta 1: incident = „chyba", nie kategória „zlyhanie") → opravené na „koľko **chýb**…
množstvo **chýb**". Inak korpus čistý: PII smer „PII (osobné údaje)" jednotný, Karta 1/2 dodržané všade, §4
reťazce byte-identické, žiadne ř/ě/ů.

**Managing editor — 4 linky zosúladené na SK `.md`.** Súrodenecké prehĺbenia part-1 (SK existuje) linkované
bare-slug bez `.md` na 4 miestach (Ingestion prehĺbenie → „../retrieval/deep-dive" ×2; Observability prehĺbenie
→ „../guardrails/deep-dive", „../evaluation/deep-dive"). **EN (`docs/`) aj RU (`i18n/ru/`) tie isté linky vedú
s `.md`** — SK bola jediná odchýlka → zosúladené na „…/deep-dive.md". **Korekcia kánonu:** poznámka Fázy 9/10
„súrodenecké prehĺbenia bez .md/lomky" platí IBA pre genuinely nepreložené ciele (part-2/part-3 EN-fallback);
part-1 súrodenci, ktorí v SK existujú, idú s `.md` (validované `onBrokenLinks:'throw'`, konvencia zvyšných 75
linkov). Hĺbky ciest inak správne, žiadne stale 🚧, index-pätičky „druhá časť lekcie" živé, frontmatter jednotný.

**Studený spätný prechod (4 strany, naivný + literárny, nahlas).** Ingestion prehĺbenie — em-dash metronóm
(„klauza — a/však") ostal najsilnejší prežívajúci tell; stíšený 5 cielenými prepismi (bodka/dvojbodka/„a") na
L11/L13/L19/L47 (em-dash 84→79). Ostatné 3 strany publikačne čisté; 2 nízkosignálové kalky opravené:
„Faithfulness je to číslo" → „je práve to číslo" (mierny cleft, §1.4); „mal oboje zadarmo" → „mal oboje bez
kompromisu" (free-lunch kalk, §Fáza 2/5).

**Residual — NERIEŠENÉ touto vlnou.**
- **Human-friend naturalness packet** (`editorial/sk-pilot-naturalness-check.md`) je paralelne u slovenských
  priateľov autora; nálezy pri wave-close NEDORAZILI. Vlnu na nich nedržíme — poskladajú sa neskôr malým
  follow-up PR do kánonu + dotknutých strán.
- **Native-check track (rodený Slovák):** preskórovať/preskórovanie, ansámbel behov, Skórer, allowlisty,
  signatúra funkcie, inštrumentál „chunkami" vs „chunkmi", rozmernosť vs dimenzia.
- **Glossary-flip backlog (samostatná neskoršia vlna):** HITL „(človek v slučke)" v glosári porušuje
  §1.2/§1.3; kosínusová podobnosť / viacjazyčné embeddingy / rozmernosť heslá; pätičky „Nové pojmy" ↔
  trojtriedne flipy glosára.
- **EN/RU zdrojová chyba (mimo vlny):** takeaway „contrastive learning on query–passage pairs" vs telo
  „triples" (Fáza 5 #7) — SK zosúladený na „trojice"; EN/RU zdroj čaká na samostatný `docs:` commit.

**Stav locale:** SK ostáva **gated** (mimo plain buildu; launch až podľa roadmapy). Táto vlna uzatvára **#95**
(Part I SK). Ďalej: Wave 2 — Part II (#96).

### Fáza 12 — vlna 2, lekcia Agentic RAG: rozhodnutia kánonu

Prvá lekcia vlny 2 (Part II), stránky `index` + prehĺbenie „Iteratívne vyhľadávanie a hodnotenie". Plný
redakčný tím (literárny, naivný jednojazyčný čitateľ, technický/fakt, korektor, konzistenčný), adjudikácia,
oprava, čerstvý korektorský prechod a **studený prechod ×2** (literárny + naivný na KAŽDEJ stránke, zdroj
skrytý). Prezentačná lokalita bez ľudskej poistky — brány niesli plnú váhu. Fakt-integrita proti SKELETON.md
(C1–C69): **nula pohybu tvrdenia** (technický redaktor prešiel všetkých 69 claimov, žiadny dropped/added/
weakened). Zapisuje termíny, ktoré táto lekcia usadzuje.

**Typografia — systémový nález a náprava (kritické).** Prvá verzia oboch stránok zatvárala PROZAICKÉ úvodzovky
**rovným ASCII `"` (U+0022)** namiesto slovenského horného `"` (U+201C) — presne zakázaný „anglický rovný"
tvar (§Typografia). Otváracie `„` (U+201E) boli správne. Opravené programovo (párovanie s `„`): index 11
párov, prehĺbenie 9 párov na `„…"`; ASCII `"` PONECHANÉ v markupe (YouTube `title="…"`, Mermaid `["…"]`,
frontmatter `sidebar_label`). **Kontrolný bod pre ďalšie stránky:** grep prozaických `"` (U+0022) = 0 mimo
markupu; každé `„` má pár `"` (U+201C).

**Pomenované architektúry — kept-EN-vedené (§1.1), slovenský glos raz pri prvom výskyte.**
- **Self-RAG (sebareflexívny RAG)** — kept-EN názov + glos; sentence-initial „Self-RAG" je už veľké (bez
  pasce). **Sloveso §1.5:** model reflexné tokeny **vkladá / produkuje** (výstup generovania), **NIE „vydáva"**
  (univerzálne „vydať" je prekladový signál) — opravené na L17. *Flag (glossary-flip backlog): heslo glosára
  Self-RAG stále znie „vydával špeciálne reflexné tokeny" — do vlny glosárových flipov.*
- **Corrective RAG (CRAG, korektívny RAG)** — kept-EN názov + glos v jednej zátvorke (zdvojená zátvorka
  „(CRAG) (korektívny RAG)" zúžená). **Casing (§3/§Typografia): na začiatku vety „Corrective RAG", inak malé
  „corrective RAG"** (zrkadlí glosárové heslo „Corrective RAG, CRAG") — L19 opravené z malého na začiatku vety.
- **Adaptive RAG (adaptívny RAG)** — kept-EN názov + glos. **Casing: na začiatku vety „Adaptive RAG"** (L41
  opravené), inak malé „adaptive RAG"; slovenský render „adaptívny RAG" žije v tele po moste.

**Trieda 2 / SK-vedené termíny (most raz `(anglický originál)`, ďalej slovensky):**
- **hodnotiteľ vyhľadávania (retrieval evaluator)** — SK-vedené; aktor, ktorý ohodnotí nájdené a **vráti skóre**
  (§1.5, výsledok → vrátiť). Zrkadlí glosár.
- **skóre dôvery (confidence score)** — SK-vedené; je to **číslo**, ktoré hodnotiteľ vydá → **skóre** (Karta 2),
  nikdy „hodnotenie".
- **reflexné tokeny (reflection tokens)** — SK-vedené (glos = čistá angličtina).
- **slučka opakovaného vyhľadávania (re-retrieval loop)** — SK-vedené. **Karta 1: nezastavujúca sa slučka =
  „chyba" (nezastavenie cyklu), NIKDY „odmietnutie".** Explicitný rámec „je to **chyba** v behu, nie
  „odmietnutie"" je kánonický vzor — dedia ho ďalšie lekcie so slučkami. (POZOR: „chyba v behu" tu = bug za
  behu; je odlíšené od kept-EN termínu „chyba počas behu / runtime error", §1.2 — ponechané podľa skeletonu.)
- **nadmerné vyhľadávanie (over-retrieval)** — SK-vedené; pár k „nedostatočné vyhľadanie (under-retrieve)".
- **rozklad dopytu na podotázky (query decomposition)** — SK-vedené.
- **metriky vyhľadávania** — natívna hlava pre „retrieval metrics"; **hybrid „retrievalové metriky" ✗**
  (EN koreň + SK koncovka) → opravené na „metriky vyhľadávania" (L96/L100), ladí so „zlyhanie vyhľadávania".
- **Agentne zamerané metriky (Ragas) — SK-vedené, most raz:** **presnosť dosiahnutia cieľa (agent goal
  accuracy)**, **dodržanie témy (topic adherence)**, **správnosť volaní nástrojov (tool call accuracy)**.

**retrieval budget + sufficient context — kept-EN-vedené (per glosár), rodina retrievalu (Fáza 6 vzor).**
Obidva glosár vedie ANGLICKY: **retrieval budget (rozpočet vyhľadávania)**, **sufficient context (dostatočnosť
kontextu)** — most raz pri prvom výskyte, ďalej **holé EN meno ALEBO čisto opisná slovenská fráza**
(„dostatočnosť kontextu", „kontroly dostatočnosti") podľa Fázy 6; opisná fráza NIE je kolísanie smeru (§1.0),
kým sa nepoužije súperiace slovenské termín-meno. `retrieval budget` ostáva EN aj v tele („tvrdý retrieval
budget", Karta 9). **Hand-off (nie defekt tejto stránky):** rodina rozpočtov je rozštiepená — `retrieval
budget` je EN-vedený, sesterské `step budget / token budget` sú SK-vedené („rozpočet krokov / rozpočet
tokenov", glosár + táto stránka L61). Smer rodiny rozhodni pri lekcii **Plánovanie a slučky**.

**Karty (potvrdené na tejto lekcii).**
- **Karta 1:** „zlyhanie vyhľadávania / zlyhanie generovania" = kategória-etapa; jednotlivá zlá odpoveď /
  nezastavujúca sa slučka / lokalizovaný incident = **„chyba"** (L55, L96 „lokalizuje chybu na krok"). L98
  „najzahmlenejšie **zlyhania**" → „najzahmlenejšie **chyby**" (pripichnuté jednotlivé incidenty, nie kategória).
- **Karta 2:** skóre dôvery = číslo (hodnotiteľ **vráti**); „hodnotenie/evaluácia" iba disciplína/akt — dodržané.
- **Karta 8:** adaptívny RAG „nasmeruje dopyt na stratégiu" = úroveň 1 (per-dopyt query router), legitímne;
  výber akcie v cykle sa NIKDE nevolá „smerovanie".
- **Karta 9:** `retrieval budget` = **tvrdý strop** (pár „mäkký/tvrdý"); „pevný strop" = 0.

**Figúra — GRADUOVANÁ zo skúšobnej doby (studený prechod ×2, obaja naivní čitatelia dekódovali pri prvom
kontakte).** **„vydestilovaný nález" / „vydestilovať" (distilled finding)** — nesené medzi krokmi namiesto
surových chunkov. Oba korene sú natívne (destilovaná voda; lekársky nález) a rámec dekóduje inline pri prvom
výskyte („nie surové chunky, ale to, čo z kroku vyšlo: odpoveď na podotázku, vytiahnutý fakt"). **POTVRDENÁ →
usadená.** Poznámka: prenesená kolokácia „vydestilovať fakt" je autorská razba (webové doklady iba literálne,
väčšinou české) — dekóduje, ale ostáva na voliteľnom native-check tracku.

**Naivný čitateľ (jump-in dekódovateľnosť) — nové per-page glosy doplnené.** Kept-EN termíny bez glosu na
skok-do stránky (§1.1 „glos raz na stránku"): **retriever „(vyhľadávač)"** (inak číta ako plemeno psa),
**LLM-as-a-judge „(LLM ako sudca)"** (na jump-in odrážke), **multi-hop agent „(viackrokový)"** (prehĺbenie,
prvý výskyt na stránke), **chunky „(kúsky)"** (raz na KAŽDEJ stránke — index aj prehĺbenie). **KB v tabuľke →
„znalostná báza"** (holé „KB" číta ako kilobajty; ladí s telom, kde je „znalostná báza"; SQL/web/API ostávajú).
`retrieve → generate` ostáva kódový literál (skeleton). ReAct „(Reasoning + Acting)" ostáva (§3, povinný rozpis).

**Em-dash metronóm — stíšený (Fáza 2/6/9/10).** Studené čítania hlásili prehustený intro prehĺbenia
(„klauza — spresnenie"). Stíšené prevodom na dvojbodku / bodku / zátvorku / „a·no": prehĺbenie **72 → 55**
em-dash (2,19/100 slov, pod sesterskou lekciou tool-use 2,37); index 26 (2,18/100 slov, v rozpočte). Zákaz
**„— ,"** = 0. Vedome stíšený aj opakovaný opener „prvá časť / Časť 1 + sloveso" a sentence-final „— twist".

**Trace — Fáza 10 dodržaná:** „nad zaznamenaným **tracom**" (nie „trace"); „trasa" = 0.

**Nové kalkové pasce a slabé kolokácie (žatva Agentic RAG — do grep-zoznamov §1.3/§1.4):**
- „nedlhovať (z toho nič)" ✗ (owe none of it; `dlhovať` = mať dlh/záväzok voči niekomu) → **„nič z toho
  nepotrebuješ / nepotrebuje"**
- „na ôsmich krokoch" ✗ (in N steps — nesprávny pád) → **„za osem krokov"**
- „siahnuť po X **pre** čerstvý zdroj" ✗ (účelové „pre") → **„…, aby získal čerstvý zdroj"**
- „výška pohľadu" ✗ (altitude; kalk) → **„rovina pohľadu"**
- „vynesie von (do…)" ✗ (surface/externalize) → **„prenáša (do…)"**
- „triviálne odlišné" ✗ (trivially different) → **„nepatrne odlišné"**
- „na plnej čiare" ✗ (kolokvializmus) → **„na celej čiare"** (zvíťaziť/poraziť)
- „poraziť **na** nákladoch/latencii" ✗ → **„prekonať **v** nákladoch/latencii"**
- „držať obraz" ✗ (held a picture) → **„mať pred očami obraz"**
- „ľahko sa to zmýli" ✗ (impersonálne od `zmýliť sa` = osoba) → **„ľahko sa to popletie"**
- headless podmet „Pružné oproti štruktúrovanému je…" ✗ (gramatická kotva) → **„Voľba medzi pružným
  a štruktúrovaným prístupom je…"**
- verb-final poradie „aký zložitý prichádzajúci dopyt je" ✗ → **„aký zložitý je prichádzajúci dopyt"**
- stranded object „obsahoval kontext…, odpoveď" ✗ → **„obsahoval odpoveď ten kontext, ktorý…"**

**Odkazy (Part II, nevnorená lekcia).** Glosár **„../../glossary.md"**; v rámci lekcie „./index.md",
„./deep-dive.md"; nepreložené susedné (EN-fallback, folder-slash) **„../planning-loops/", „../real-agents/"**;
Ragas externý „https://www.ragas.io". Text odkazu na prehĺbenie == `sidebar_label` „Iteratívne vyhľadávanie
a hodnotenie" (byte-for-byte). Frontmatter/H1/H2/Mermaid (IDs zachované) nedotknuté; tri Mermaidy verbatim.

**Backlog flagy (hand-off, neprepisujem):**
1. **Glossary-flip:** heslo glosára **„Agent loop (cyklus agenta)"** (def. „opakujúci sa **cyklus**") koliduje
   s korpusovým telom **„slučka" / „slučka agenta"** (index L33/L35, SK-vedené) — smer aj glosové slovo
   (cyklus vs slučka). Do glossary-flip backlogu spolu s HITL/kosínus (Fáza 11 Residual) + Self-RAG heslo
   „vydával … tokeny" (§1.5).
2. **Budget-family smer** (retrieval budget EN-led vs step/token budget SK-led) — rozhodnúť pri **Plánovanie
   a slučky**.

**Stav:** Wave 2 lekcia 1 (Agentic RAG) redakčne uzavretá; SK ostáva **gated**.

### Fáza 13 — vlna 2, lekcia Plánovanie a slučky: rozhodnutia kánonu

Druhá lekcia vlny 2 (Part II), stránky `index` + prehĺbenie „Prehľadávanie plánov a pamäť". Plný redakčný
tím (literárny, naivný jednojazyčný čitateľ, technický/fakt, korektor, konzistenčný), adjudikácia, oprava a
**studený prechod ×2** (naivný + literárny na KAŽDEJ stránke, zdroj skrytý). Prezentačná lokalita bez ľudskej
poistky — brány niesli plnú váhu. Fakt-integrita proti SKELETONU (C1–C44): **nula pohybu tvrdenia**. Zapisuje
termíny, ktoré táto lekcia usadzuje, a rieši oba hand-offy Fázy 12.

**STEP-0 — vyriešené oba hand-offy Agentic RAG (Fáza 12 backlog), web-overené, aplikované korpusovo v tomto PR:**

1. **Rodina rozpočtov — SMER ROZHODNUTÝ: slovensky vedená „rozpočet <čoho>".** Fáza 12 rozpočtovú rodinu
   nechala rozštiepenú (`retrieval budget` EN-vedený, `step/token budget` SK-vedené) a smer delegovala tejto
   lekcii. **Rozhodnutie: celá rodina generických slučkových rozpočtov je slovensky vedená v tele** — „rozpočet
   krokov (step budget)", „rozpočet tokenov (token budget)", „rozpočet vyhľadávania (retrieval budget)". Dôvod:
   zrkadlí už publikované SK-vedené tvary „rozpočet chýb" (error budget, Fáza 10/11) a „rozpočet latencie"
   (latency budget, Fáza 10); „rozpočet" je čistá slovenská hlava a „vyhľadávania" je korpusový modifikátor pre
   retrieval (Karta 3; presne vzor „metriky vyhľadávania" z Fázy 12, ktorý zamietol hybrid „retrievalové
   metriky"). **Retrofit v tomto PR:** Agentic RAG prehĺbenie L61 „retrieval budget (rozpočet vyhľadávania)" →
   **„rozpočet vyhľadávania (retrieval budget)"** (obrátený most, teraz SK-vedený) a L110 takeaway „tvrdý
   retrieval budget" → „tvrdý rozpočet vyhľadávania". **Glosár sa nemení:** rozpočtová rodina je v glosári
   jednotne katalogizovaná pod anglickou lemmou „English budget (rozpočet X)" (nájditeľnosť; celá rodina —
   error/latency/step/retry/thinking/retrieval — má rovnaký tvar hesla), pričom **telo vedie slovensky** —
   presne ako to Fáza 12 klasifikovala pre step/token budget. Toto NIE je kolísanie smeru (§1.0): celá rodina
   zdieľa vzor „glosár katalogizuje pod EN lemmou, telo vedie SK". **Výnimka — `thinking budget` ostáva kept-EN
   (§1.1, rodina extended-thinking):** „thinking budget (rozpočet uvažovania)", výslovne oddelený od generických
   slučkových rozpočtov krokov/tokenov (skeleton D24). „pevný strop" = 0; pár „tvrdý strop / mäkký strop"
   (Karta 9) drží.

2. **Glosárové flipy (Fáza 12 backlog #1) — hotové.**
   - **„Agent loop (cyklus agenta)" → „Slučka agenta (agent loop)"**, def. „opakujúci sa cyklus" → „opakujúca
     sa slučka" (rod: slučka = ž., „ktorá beží"). Zjednocuje heslo s korpusovým telom (loop = **slučka**,
     Fáza 3; „cyklus" iba vo viazanom „nezastavenie cyklu"). Heslo bolo EN-vedené, teraz SK-vedené (telo je
     SK-vedené: „slučka agenta (agent loop)"); slug sa mení, no žiadna stránka naň neodkazuje kotvou (pätičky
     mieria na `../../glossary.md` bez kotvy), flip je bezpečný.
   - **Self-RAG heslo: „vydával špeciálne reflexné tokeny" → „vkladal …"** (§1.5 sloveso podľa predmetu —
     tokeny sú výstup generovania → model ich vkladá/produkuje, NIE univerzálne „vydával"). Zosúlaďuje heslo
     s telom Agentic RAG (Fáza 12 L17 „vkladá").

**reflexia vs sebaoprava — rezervácia potvrdená a rozšírená.** **reflexia (reflection)** = posúdenie CELEJ
trajektórie/plánu (táto lekcia, SK-vedené, naturalizované ako „evaluácia"); **sebaoprava (self-correction)** =
posúdenie JEDNÉHO úryvku/kvality vyhľadávania (Agentic RAG). Obidve žijú v tele tejto lekcie vedome odlíšené
(„príbuzná sebaopravy … mierená o úroveň vyššie"). **Reflexion** (framework, veľké R) ostáva kept-EN a je
výslovne odlíšený od „reflexie ako pojmu" (skeleton, glosár).

**Nové SK-vedené termíny (most raz `(anglický originál)`, ďalej slovensky) — dopĺňajú §1.2/§1.1 pre vrstvu
Plánovanie:** dekompozícia úlohy (task decomposition), preplánovanie (re-planning), kritérium zastavenia
(termination criterion), detekcia zacyklenia (loop detection), sledovanie postupu (progress tracking),
**prehľadávanie stromu / grafu plánov (plan search)** (Karta 3 — SEARCH nad plánmi = „prehľadávanie", NIKDY
„vyhľadávanie"; sloveso „prehľadávať/prechádzať strom"), rozpočet krokov / rozpočet tokenov (step/token
budget), pracovná pamäť (working memory/scratchpad), epizodická / sémantická / procedurálna pamäť (Karta 4),
virtuálna správa kontextu (virtual context management), hodnotenie trajektórie (trajectory evaluation),
výsledok verzus proces (outcome vs process), úspešnosť pri úlohe (task success rate), efektívnosť po krokoch
(step efficiency), správnosť volaní nástrojov (tool-call accuracy).

**Kept-EN v tejto lekcii (§1.1; holé mená bez zátvorkového glosu, význam rozvádza próza):** ReAct (rozpis
Reasoning + Acting), **plan-and-execute (plánovanie a vykonanie)**, Tree of Thoughts (ToT), Graph of Thoughts
(GoT), LATS, **Monte Carlo Tree Search (MCTS)** (glos „(prehľadávanie stromu metódou Monte Carlo)"),
Self-Refine, Reflexion, MemGPT, chain-of-thought (reťazec úvah), **thinking budget (rozpočet uvažovania)**,
lost-in-the-middle (strata uprostred), LLM-as-a-judge (LLM ako sudca), **human-in-the-loop (schválenie
človekom)** — NIKDY „človek v slučke" (§1.2/§1.3), pass@1 / pass^k, τ-bench, Game of 24, Generative Agents,
Observability (pozorovateľnosť). extended thinking / reasoning effort — ľahký EN glos-klaster vnútri vety o
thinking budgete, bez coinovania SK.

**Karty (potvrdené na tejto lekcii).**
- **Karta 1:** nezastavujúca sa slučka / jednotlivý incident / lokalizovaný bod zlyhania = **„chyba"**, NIE
  „zlyhanie" (kategória-etapa). Studený prechod + konzistenčný redaktor opravili 3 miesta: index „to zlyhanie
  si už videl" → „tú chybu"; prehĺbenie „pripichnú zlyhanie ku kroku" → „chybu" (ladí s „lokalizuje chybu na
  krok"). H2 „Základná chyba: slučka, ktorá sa nezastaví" drží rámec.
- **Karta 2:** číslo (skóre, 74 %, pass-rate) = **skóre / číslo**; disciplína/akt = **evaluácia/hodnotenie**;
  hodnotiteľ/funkcia **VRÁTI** skóre (§1.5). „hodnotenie" pre číslo = 0.
- **Karta 3 (rozšírená):** **prehľadávanie** = prechod stromom/grafom plánov (ToT/GoT/LATS/plan search);
  **vyhľadávanie** = retrieval. Na tejto stránke drží: „prehľadávanie plánov", „prehľadať niekoľko ciest",
  „strom, ktorý agent prechádza" — nikde „vyhľadávanie" pre plán search.
- **Karta 9:** „tvrdý strop / mäkký strop" (hard/soft cap); „pevný strop" = 0.

**Figúry — studený prechod ×2 (naivný čitateľ dekódoval pri prvom kontakte):** žiadna vyradená.
Dekódované a ponechané: „hodnotiteľ stavu" (zrkadlí usadené „hodnotiteľ vyhľadávania", Fáza 12), „hodnotová
funkcia" (štandardný RL termín, glosár LATS), „kĺb medzi nimi", „držať mešec", „utrhne z reťaze", „zliať dve
polovičné odpovede", „páka" (usadená figúra). „iný rád schopnosti" (kalk „a different order of X",
nedekódovateľný) → **„úplne iná úroveň schopností"** (2×, do §1.4).

**Nové kalkové pasce a slabé kolokácie (žatva Plánovanie — do grep-zoznamov §1.3/§1.4):**
- „iný rád schopnosti" ✗ (a different order of capability) → **„úplne iná úroveň schopností"**
- „silnejší ťah / Ťah, ktorý…" ✗ (move; „ťah" blocklist §1.3) → **„silnejšia možnosť" / „dvojúrovňové rozdelenie"**
- „známkovanie procesu je to, čo spraví…" ✗ (cleft §1.4) → priama väzba
- „Ako cestu oznámkuješ, je LLM-as-a-judge" ✗ (wh-cleft) → **„Cestu oznámkuješ cez LLM-as-a-judge"**
- „je to práve to, čo … umožňuje" ✗ (pseudo-cleft) → **„práve ona … umožňuje"**
- „rolujú sa mu jeho reťaz" ✗ (rolovať; dvojité privlastnenie) → **„odvíjajú sa … reťaz"**
- „čo si vopred tipla" ✗ (register — hovorové) → **„čo vopred odhadla"**

**Em-dash metronóm + straight-quote (Fáza 2/6/9/10/12).** Studené čítania hlásili prehustené bloky a opakovaný
opener „Prvá časť + sloveso" (4 zo 6 H2 v prehĺbení) — variované (opener cez bold-kotvu / „V prvej časti…").
Em-dash: index ~40 prozaických, prehĺbenie ~59 (1,9/100 slov, pod sesterskými tool-use 2,37 / agentic-rag
2,19); MemGPT-veta so 4 pomlčkami stíšená na zátvorky. Zákaz „— ," = 0. **Straight-quote checkpoint:** grep
prozaických rovných `"` (U+0022) mimo markupu = 0 na oboch stránkach (párovanie „…"); ASCII `"` len v YouTube
`title`, Mermaid `["…"]`, frontmatter.

**Odkazy (Part II, nevnorená lekcia — zrkadlí agentic-rag).** Glosár **„../../glossary.md"**; v rámci lekcie
„./index.md", „./deep-dive.md"; SK súrodenci s `.md`: **agentic-rag „../agentic-rag/index.md" a
„../agentic-rag/deep-dive.md", tool-use „../tool-use/index.md"**; nepreložený kapstoun real-agents = EN-fallback
holou cestou: **z indexu „../real-agents/", z prehĺbenia „../real-agents/"** (Docusaurus s predvoleným `trailingSlash` dáva prehĺbeniu `.../planning-loops/deep-dive` rovnaký
základný adresár `.../planning-loops/` ako indexu, takže obe stránky mieria rovnako; `.md` na nepreložený
cieľ by z preloženej stránky rozbil i18n-link-check — preto holá URL-cesta. Overené buildom: „../../real-agents/“
mierilo mylne na /sk/real-agents/). Text odkazu na prehĺbenie == `sidebar_label` „Prehľadávanie plánov
a pamäť" (byte-for-byte). Tri Mermaidy (IDs zachované, desatinná čiarka 0,8; ✗). Video: index D37Ijn2o5U0,
prehĺbenie BacJ6sEhqMo — obe „(Video je v angličtine.)".

**Sibling-link retrofit (Fáza 11 konvencia — SK-existujúci súrodenci idú s `.md`).** Keď táto lekcia vznikla,
Agentic RAG na ňu mieril holým EN-fallback `../planning-loops/` (Fáza 12, vtedy nepreložená). Teraz SK existuje
→ **9 odkazov flipnutých na „../planning-loops/index.md"** (index ×1, prehĺbenie ×8), validované
`onBrokenLinks:'throw'`, zhodné s EN/RU. `_category_.json` (label „Plánovanie a slučky") už existoval — nemení
sa; `current.json` netreba (kategória existuje z bootstrapu Part II).

**Backlog — stav.** Fáza 12 backlog VYRIEŠENÝ (oba: budget-family smer + Agent-loop/Self-RAG glosárové flipy).
Ostáva glossary-flip backlog z Fázy 11 (HITL „(človek v slučke)" v glosári porušuje §1.2/§1.3; kosínus /
viacjazyčné embeddingy / rozmernosť heslá; pätičky „Nové pojmy" ↔ trojtriedne flipy) + native-check track
(ansámbel behov, Skórer, chunkami vs chunkmi …) — samostatná neskoršia vlna.

**Pre lekciu Multiagentové systémy (odovzdanie):**
- **Rozpočet prideľuje a získava späť supervízor/orchestrátor** („supervízor drží mešec", táto lekcia D20) —
  Multi-agent to rozvádza; rodina rozpočtov je **SK-vedená „rozpočet <čoho>"** (Fáza 13). agent chain = **reťaz
  agentov**, handoff = **odovzdanie riadenia** (§1.2, glosár).
- **reflexia (celá trajektória) vs sebaoprava (jeden úryvok)** — drž oddelené; **Reflexion** (framework) ≠
  reflexia (pojem).
- Karta 1 (chyba vs zlyhanie), Karta 2 (skóre), Karta 3 (prehľadávanie ≠ vyhľadávanie), Karta 9 (tvrdý/mäkký
  strop) platia ďalej. Verb-by-object §1.5 (žiadne univerzálne „vydať").
- **Em-dash metronóm + zákaz „— ,"** + **straight-quote checkpoint** (grep prozaických `"` = 0) platia ďalej.
- Odkazy: SK teraz existuje pre agentic-rag, tool-use, **planning-loops** (index aj prehĺbenie) → mieri naň
  cez „../planning-loops/index.md", „../planning-loops/deep-dive.md"; na nepreložené (multi-agent susedia,
  real-agents, mcp, orchestration-frameworks) holou EN-fallback cestou; glosár „../../glossary.md".

**Stav:** Wave 2 lekcia 2 (Plánovanie a slučky) redakčne uzavretá; SK ostáva **gated** (mimo plain buildu).


### Fáza 14 — vlna 2, lekcia Multiagentové systémy: rozhodnutia kánonu

Tretia lekcia vlny 2 (Part II), stránky `index` + prehĺbenie „Protokoly a koordinácia". Plný redakčný tím
(literárny, naivný jednojazyčný čitateľ, technický/fakt, korektor, konzistenčný, riadiaci), adjudikácia,
oprava a **studený prechod ×2** na KAŽDEJ stránke (zdroj skrytý, čítané nahlas). Prezentačná lokalita bez
ľudskej poistky — brány niesli plnú váhu. Oba hand-offy Fázy 13 dodržané bez odchýlky (rozpočet-rodina
SK-vedená „rozpočet <čoho>"; agent chain = reťaz agentov; handoff = odovzdanie riadenia). Fakty nehýbané —
faktová brána proti EN-skeletu čistá (FIPA 1996/2002/2005, Smith IEEE Trans. Computers C-29 č. 12 dec. 1980,
KQML zač. 90. rokov, A2A 9. apr. 2025 / vyše 50 / Apache 2.0, Hearsay-II CMU 1971–1976, Nii AI Magazine roč. 7
1986, arXiv:2305.14325, MAST arXiv:2503.13657 κ = 0,88 / 14 spôsobov / 3 kategórie, Anthropic 13. jún 2025
4×/15×/~80 %).

**Nové kept-EN termíny — doplniť do §1.1 ako vedomé výnimky (latinkou, slovenský glos raz pri prvom výskyte):**
- **contract net protocol** — glos „(protokol kontraktných sietí)"; **KQML**; **MAST** (Multi-Agent System
  failure Taxonomy, glos „(taxonómia zlyhaní multiagentových systémov)"); **performatív (performative)** —
  naturalizovaná koncovka, dekóduje sa inline („komunikačný akt, ktorý správa vykonáva"); **BDI
  (belief–desire–intention)** s rozpisom „presvedčenie–túžba–zámer". FIPA ACL, blackboard, A2A, Agent Card už
  boli v §1.1 — teraz použité a potvrdené.
- **deadlock — NOVÉ do §1.1:** kept-EN, glos „(vzájomné uviaznutie)". Index dekóduje SK-vedene („uviaznuť
  jeden na druhom (deadlock)"), prehĺbenie pri prvom výskyte dostáva glos „deadlock (vzájomné uviaznutie)"
  (studený naivný čitateľ ho bez glosu NEDEKÓDOVAL — §7 viaže každú stránku, gloss doplnený).

**Nové Trieda-2 / SK-vedené termíny (most raz „(anglický originál)", ďalej slovensky):**
- **spôsob zlyhania (failure mode)** — POZOR Karta 1: názov KATEGÓRIE (MAST taxonómia), nie jednotlivý incident.
- **šírenie chýb (error propagation)** — jednotlivý incident = „chyba" (Karta 1), nie „zlyhanie".
- **chyba pri súbežnom zápise (concurrent-write error)** — Karta 1 incident = „chyba"; „súbežný zápis" je
  čistá SK (NIE kept-EN „race condition" — iný jav, §1.2).
- **korelačné ID (correlation id)**; **distribuované trasovanie (distributed tracing)** — ALE „trace" a „span"
  ostávajú kept-EN (§1.1, Fáza 10): „tracu/tracov", „spany (úseky trace)", „span orchestrátora"; sloveso
  „trasovať/trasovanie" je SK. Trace na prehĺbení RE-glosovaný „trace (záznam behu)" (per-page samostatnosť).
- **nepriehľadní agenti (opaque agents)** — dekódované inline „ani jeden neodhalí svoj vnútorný stav ani sadu
  nástrojov" (rámec A2A).
- **súperivý tlak (adversarial/competitive pressure)** — autorský obrat, dekódoval pri prvom kontakte —
  **usadený**.
- **znalostné zdroje (knowledge sources)**, **riadiaca zložka (control)** — blackboard-rámec.
- **statické roly (static roles)**, **dynamické prideľovanie (dynamic assignment)**, **multiagentová debata
  (multi-agent debate)**.
- Rozpočtová vrstva (zrkadlí Fázu 13, celá SK-vedená): **rozpočet celej úlohy (whole-task budget)**, **strop
  rozvetvenia (fan-out cap)**, **strop hĺbky (depth cap)**, **odstupňovanie modelov (model tiering)**, pár
  **mäkký strop / tvrdý strop (soft cap / hard cap)**. „pevný strop" = 0 (Karta 9).

**Smer termínu — dva nálezy z prechodu (§1.0, kolísanie smeru = defekt):**
- **contract net gloss ZLADENÝ S GLOSÁROM.** Telo prehĺbenia razilo „(protokol dohodovacej siete)" (podľa
  skeletonu), ale heslo glosára znie „**protokol kontraktných sietí**". Glosár je jednotný zdroj termínu →
  telo opravené na „(protokol kontraktných sietí)". (Ak neskorší native-check uprednostní „dohodovacej", flip
  ide cez glosár, nie cez lekciu.)
- **LLM-as-a-judge — kept-EN-vedené (§1.1).** Telo malo SK-vedený tvar „LLM ako sudca (LLM-as-a-judge)" →
  obrátené na kept-EN-vedené „**LLM-as-a-judge (LLM ako sudca)**" (§1.1 uvádza „LLM-as-a-judge", most = SK glos).

**Karty (potvrdené na tejto lekcii).**
- **Karta 1:** incident (worker zle prečíta odovzdanie, deadlock, chyba pri súbežnom zápise, „ktorý agent to
  pokazil") = **„chyba" / „šírenie chýb"**; kategória (MAST „spôsoby zlyhania", „taxonómia zlyhaní",
  „zlyhanie medziagentovej nezladenosti" ako názov triedy) = **„zlyhanie"**. Kánonický vzor „incident je chyba,
  klasifikuje sa DO kategórie zlyhania" dodržaný.
- **Karta 2:** disciplína/akt = „hodnotenie" / „známkovanie" / „oznámkovať tím"; žiadne číslo nenazvané
  „hodnotenie". „známkovanie" (vivid rámec sekcie) a „hodnotenie" (disciplína) koexistujú vedome — pomenúvajú
  AKT, nie číslo; bidy contract netu = „ponuka", nie mis-skóre. „skóre" sa nevyskytuje, lebo žiadny sudca/bid
  na týchto stránkach nevydá holé číslo — správne, nie medzera.
- **Karta 3:** „vyhľadávač" (deep-research retriever) = retrieval; žiadne plán-„prehľadávanie" na stránke.
- **Karta 9:** „mäkký/tvrdý strop", „strop rozvetvenia", „strop hĺbky"; „pevný strop" = 0.

**Verb-by-object (§1.5):** žiadne univerzálne „vydať" pre model/sudcu/agenta. Jediné „vydala" = „FIPA vydala
sadu na komunikáciu" (organizácia publikuje normu) — mimo zákazu §1.5, ponechané. Vykonávateľ/hodnotiteľ
**VRÁTI**, orchestrátor **rozloží/nasmeruje/spojí (syntetizuje)**, agent **odošle/vytvorí** správu.

**Figúry — studený prechod ×2 (naivný čitateľ dekódoval pri prvom kontakte):**
- POTVRDENÉ → usadené: **„súperivý tlak"** (na kvalitu); **„odovzdávacia správa je prompt"** (z prvej časti,
  zrkadlí „definícia nástroja je prompt"); **„spoločná tabuľa"** ako glos blackboardu (dekóduje inline
  „predstav si tím okolo skutočnej tabule"); **„držať na uzde"** (rodený idióm); **„utrhnutý vykonávateľ /
  nespáli celý mešec"** (zrkadlí „utrhne z reťaze", Fáza 13); **„Schéma je iba potrubie; disciplína pri náklade
  je zručnosť."** a **„Tabuľa priťahuje napúchanie kontextu"** (obe dekódované, ponechané).
- **REVIDOVANÉ na studenom prechode: „čestná brzda" → „úprimná brzda".** Literárny studený prechod: „čestný"
  = *honorable/fair* (čestná hra, čestné slovo), NIE *candid/honest-admission*; „úprimná brzda" nesie správny
  význam a drží zavedené opakujúce sa zariadenie (index aj prehĺbenie). „čestná brzda" → medzi odmietnuté.
- **„zdieľaný" vs „spoločný" — vedomá koexistencia, nie defekt.** Blackboard-metafora = „spoločná tabuľa /
  spoločný stav"; moderné framework-primitívum = „zdieľaný stav / zdieľaná pamäť / zdieľaný scratchpad"
  (§1.2 výslovne PONECHÁVA „zdieľaná pamäť / zdieľaný objekt stavu" ako ustálený SK IT-úzus — prebíja
  bohemizmovú výhradu slepého recenzenta). Rámce sa nezamieňajú.

**§8 polotučné — nález a náprava.** index: 20 → **16** po odtučnení štyroch CELOVETNÝCH zvýraznení v sekcii
„Cena — a kedy to nerobiť" (L62–65 „Cena aj latencia sa násobia." atď. — rečnícke celé vety; §8 zakazuje
„celé vety a viacčlenné klauzy"); po náprave 16/48 = 0,33 (v rozpočte). prehĺbenie: 27 úsekov, všetky kotvy
termínu pri prvom výskyte + „Nové pojmy" — per-slovo 1/106 slov, žiadne zakázané zvýraznenie.

**Em-dash metronóm + straight-quote (Fáza 2/6/9/10/12/13).** Po dampingu: index ~2,50/100 slov (33 pomlčiek),
prehĺbenie **1,96/100 slov** (59) — obe v sesterskom pásme (planning-loops 2,02 / agentic-rag 2,19 / tool-use
index 2,70), prehĺbenie stíšené pod sestru. Konvertované na zátvorky/bodky/čiarky: A2A spec (gRPC/HTTP/REST),
BDI apozícia, „15× — a v hodnotení" (bodka), „Málo — priveľa" varírované na čiarky (odlíšené od indexu).
Zákaz „— ," = **0**. **Straight-quote checkpoint:** prozaických rovných `"` (U+0022) mimo markupu = **0** na
oboch stránkach (párovanie „…"); ASCII `"` len v YouTube `title`, Mermaid `["…"]`, frontmatter.

**Nové kalkové pasce a slabé kolokácie (žatva Multiagent — studený prechod ×2 — do grep-zoznamov §1.3/§1.4):**
- „tvrdo smerovať / tvrdo smeruje" ✗ (hard-route; „tvrdo" = harshly) → **„napevno smerovať / smeruj napevno"**
- „postaviť dôvody za aj proti" ✗ (build/lay out the case) → **„zvážiť dôvody za aj proti"**
- „orámovať X ako Y" / „rámcovať podľa Y" ✗ (frame as / frame after) → **„predstaviť X ako Y" / „modelovať
  podľa Y"**
- „prispievať príležitostne" ✗ (opportunistically — falošný priateľ, znamená *occasionally*) → **„prispieť
  vždy, keď…"**
- „niesť to, na čom má agent konať" ✗ (act on) → **„niesť to, čo má agent urobiť"**
- „páka návrhu" ✗ (the design's lever) → **„kľúčové rozhodnutie pri návrhu"** („páky" v pluráli = knobs OK)
- „existuje X rokov staršej práce" ✗ (partitívny genitív po *existuje*) → **„jestvuje X rokov stará práca"**
- „nad neho/niečo pridať" ✗ (add on top of) → **„k nemu/tomu pridať"**
- „čisto sa premietať NA" ✗ (map cleanly onto; rekcia) → **„priamo sa premietať DO"**
- „tu spravená konkrétnou" ✗ (here made concrete — participiálny kalk) → **„tu už celkom konkrétna"**
- „stretnúť incident" ✗ (meet an incident) → **„naraziť na incident"**
- „pozývať napúchanie/problém" ✗ (invite bloat) → **„priťahovať napúchanie"** (zladené s L66)
- „bohatší koniec (bez „spektra")" ✗ (dangling „the richer end") → **„bohatší koniec spektra"**
- „predpokladáme celý čas" ✗ (the whole time) → **„predpokladáme po celý čas"**
- „brať orchestrátor" ✗ (neživotný akuz.) → **„brať orchestrátora"** (životné maskulínum); „Zvádza to brať" →
  „Je lákavé brať"
- register: „vyrábať príručku" ✗ (manufacture) → **„tvoriť príručku"**; „faktový redaktor" (kalk) →
  **„overovateľ faktov"**; „na kúsok, čo…" (hovorové) → „…, ktorý…"

**Back-reference fidelity (prehĺbenie ↔ index).** „odovzdávacia správa je prompt" (prehĺbenie L21) ⇒ index
verbatim ✓; „observability musí jednotlivé kúsky pozošívať" (L88) doplnené „jednotlivé" na zhodu s indexom;
„~N×" (L102) = notačná skratka indexového „približne N×", OK.

**Odkazy (Part II, nevnorená lekcia — zrkadlí planning-loops).** Glosár „../../glossary.md"; v rámci lekcie
„./index.md" / „./deep-dive.md"; SK súrodenci s `.md`: planning-loops (index+prehĺbenie), agentic-rag
(index+prehĺbenie), tool-use (index); nepreložené holou EN-fallback cestou: „../real-agents/", „../mcp/",
„../orchestration-frameworks/". Pätička „Nové pojmy" zrkadlí anglické heslá glosára (bez SK glosu).

**Backlog — stav.** Žiadny nový hand-off. Doplniť do §1.1 pri najbližšej úprave kánonu: **contract net
protocol, KQML, MAST, deadlock (glos „vzájomné uviaznutie"), performatív, BDI** ako vedomé kept-EN výnimky.
Ostáva glossary-flip backlog z Fázy 11 (HITL, kosínus, viacjazyčné embeddingy, rozmernosť; pätičky ↔
trojtriedne flipy) + native-check track — samostatná neskoršia vlna.

**Stav:** Wave 2 lekcia 3 (Multiagentové systémy) redakčne uzavretá; SK ostáva **gated** (mimo plain buildu).

### Fáza 15 — vlna 2, lekcia Orchestračné frameworky: rozhodnutia kánonu

Štvrtá lekcia vlny 2 (Part II), stránky `index` + prehĺbenie „Grafy a odolné vykonávanie". Plný redakčný
tím (literárny, naivný jednojazyčný čitateľ, technický/fakt, korektor, konzistenčný, riadiaci) rozdelený po
stránkach, adjudikácia, oprava a **studený prechod ×2** na KAŽDEJ stránke (zdroj skrytý, čítané nahlas).
Prezentačná lokalita bez ľudskej poistky — brány niesli plnú váhu. **Fakty nehýbané** — faktová brána proti
EN-skeletu (C1–C73) čistá: Microsoft Agent Framework 1.0 GA apríl 2026 (vstrebal Semantic Kernel + AutoGen,
oba v režime údržby), `langgraph-checkpoint-sqlite`/`-postgres` v3.1.0 (máj 2026), `-redis`, saver-triedy
`InMemorySaver`/`SqliteSaver`/`PostgresSaver`/`RedisSaver`, `durability` „exit"/„async"/„sync", k júlu 2026,
tridsaťkrokový agent / krok 28 / 27 volaní, OTel GenAI konvencie v stave „Development", CrewAI `Memory` (júl
2026). Jediný faktový nález (naivný C9 „three turns ago" → „pred tromi krokmi") **ponechaný**: EN-skelet mieša
„across steps" a „three turns ago", *turn* a *krok* sú tu zameniteľné, číslo tri zachované; „ťah"/„otočka"
zakázané/neprirodzené.

**Smer termínu — dve rozhodnutia (§1.0):**
- **durable execution → Trieda 2 / SK-vedené „odolné vykonávanie (durable execution)".** Zrkadlí vzor
  „orchestračný framework" (§1.2, riadok 35 skeletonu): glosár **katalogizuje anglickú lemmu**
  („Durable execution (odolné vykonávanie)"), ale **telo vedie slovensky**. SK tvar je priehľadný kompaund a
  sidebar_label lekcie („Grafy a odolné vykonávanie") ho aj tak fixuje — telo je s ním konzistentné. **Presunúť
  v §1.1/§1.2:** vyňať „durable execution" zo zoznamu kept-EN §1.1 a viesť ako Trieda 2 (most raz, ďalej SK).
- **vendor lock-in — kept-EN (§1.1) drží; ALE v próze ponechaný SK-vedený most „viazanosť na framework
  (vendor lock-in)"** (per skeleton) — ide o opisnú prózu, nie o razenie súperiaceho SK **názvu** termínu, a
  termín je glosovaný. Nie je to kotva pri prvej definícii (nie polotučné), preto smerová výnimka §8 neplatí.
  Poznámka, nie defekt.

**Termíny — glos/dekódovanie (§1.0 čistota + prvý výskyt na stránke):**
- **„hooks" (§1.1 kept-EN) v priebežnom zozname → opisne „napojenia na trasovanie"**, NIE „háčiky"
  (falošný obraz rybárskeho háčika + odklon od ledgeru §1.1) a NIE razenie súperiaceho SK názvu. Kept-EN
  „hooky" ostáva vyhradené tam, kde je *hooks* skutočným predmetom (lekcia Observability). Back-ref
  v prehĺbení zladený („napojení na trasovanie").
- **checkpointing** — telový glos rozvitý na „(priebežné ukladanie stavu)" (index) namiesto kruhového
  „(ukladanie checkpointov)"; glosár drží krátku lemmu. V prehĺbení SK-vedené „ukladanie checkpointov
  (checkpointing)".
- **streaming** (kept-EN, Karta 7) — doplnený glos pri prvom výskyte na stránke „(priebežné odosielanie
  výstupu)".
- **GA** — ostáva ako faktová nálepka, raz glosovaná „(GA — všeobecná dostupnosť)".
- **trace / span / tracer** (kept-EN, §1.1/Fáza 10) — per-page glosy: „trace (záznam trasovania)",
  „span — úsek trasovania —", „tracer (nástroj na trasovanie)". „pairwise" (kept-EN §1.1) glos „(párové)".
- **primitíva** — glos pri prvom výskyte „(základné stavebné bloky)" (falošný priateľ *primitív* = hrubý
  človek).

**Verb-by-object (§1.5):** žiadne univerzálne „vydať". Graf → **„framework vie trace vytvoriť"** / „z grafu
vznikne trace" (nie „vydá"); framework **trace zachytí**; model **vytvorí volanie**. „vydáme sa na prechádzku"
/ „vydal sa cestou" = idiomatické zvratné sloveso pohybu (iný lexém), mimo zákazu §1.5 — ponechané.

**Karty (potvrdené na tejto lekcii).**
- **Karta 1:** jednotlivý pád / nezastavená slučka = „pád" / „chyba" / „slučka, ktorá sa nezastaví"; „chyba
  návrhu" (siahnuť po supervízorovi „pre pamäť"). Žiadne „zlyhanie" ako názov jednotlivého incidentu.
- **Karta 2:** CrewAI „**skóruje** vybavovanie z pamäte podľa relevancie, čerstvosti a dôležitosti" — *recall*
  = vybavovanie z pamäte (verb), NIE retrieval; číslo = skóre, nie „hodnotenie".
- **Karta 4:** pamäť frameworku = **jedna os** (checkpoint viazaný na thread vs store); multiagentové
  konštrukcie = „úplne INÁ os" (rozdelenie práce vs perzistencia stavu).
- **Karta 7 — náprava (bare „tok"):** štyri výskyty holého „tok/toky/riadiaci tok" pre *control flow*
  opravené na plný kompaund **„tok riadenia"** (index L81/L85/L99, prehĺbenie L88). „streaming" nikdy „tok".
- **Karta 9:** deklaratívny „ceiling" = **„hranica"** („musíš siahnuť po kóde"), NIE „strop" — bez kolízie
  s rozpočtovým rámcom.

**Figúry — studený prechod ×2 (naivný čitateľ rozhodol pri prvom kontakte):**
- **ZAMIETNUTÉ (naivný decode zlyhal) → prostá próza:**
  - **„šev" (seam)** — obaja naivní čitatelia + literárny: *šev* spája dva kusy, ale graf je **bod, na ktorý
    sa všetko napája** (hub), nie šev; v samostatnej odrážke záveru stál bez dekódu. Nahradené **„jediné
    miesto, na ktoré sa napája každá produkčná starosť"**. Zapísané ako zamietnutá figúra (nezrkadlí sa z EN).
  - **„produkčný chvost" / „chvost" (production tail)** — bafľujúce na prvý kontakt (*chvost* = zvierací
    chvost, žiadna slovenská opora). Nahradené **„produkčná výbava"** (potvrdené: dekóduje ako „kit/výbava").
- **POTVRDENÉ → usadené:** **„produkčná výbava"** (production kit); **„cestovanie v čase"** (time-travel —
  mechanika rozpísaná pred nálepkou, glosárom už krytá); **„momentka filozofií"**, **„odlúpneš značky"**,
  **„so všetkým v balení"**, **„nakupuješ v tejto vrstve"** (kúp/nákup vrstvy — zrkadlí sesterské „kupujú
  kvalitu", Fáza 14), **„zrkadlový obraz výhod"**, **„legacy — zastaraná príťaž"** (kept-EN nesený SK glosom).
- **„vlastní" (stránka/vrstva vlastní X)** — NIE kalk, **usadený korpusový obrat** (zrkadlí „stránka vlastní
  vrstvu", Fáza 14). Ponechané na oboch stránkach.

**Nové kalkové pasce a rekčné/aktorové chyby (žatva Orchestrácia — studený prechod ×2 — do §1.4/§1.3):**
- „X je (presne) to, čo…" (cleft) → povedz priamo („presne ten graf … budeš trasovať")
- „Čím platí, je X" (what it pays with) → „Háčik je X"
- „Prečo X záleží, je Y" (why X matters is Y) → „Prečo na tom záleží? Opäť Y."
- „robí možným X" (makes X possible) → „vďaka X je možné…"
- „s kľúčom podľa" (keyed by) → „jeho kľúčom je / kľúčuje sa podľa"
- „padáš späť do kódu" (fall back into code) → „musíš siahnuť po kóde"
- „lacný NA PRIDANIE" (cheap to add) → „pridať … je lacné" (peňažný rámec cena/zadarmo OK; kalk je väzba „na pridanie")
- „stojí abstrakciu" (echoes „stojí tokeny", §1.4) → „tou cenou je abstrakcia"
- „pristáť na myšlienke / zísť sa na myšlienke" (land on an idea) → „zhodnúť sa na (myšlienke)"
- „API má vyhranené názory" (opinionated API) → „nakoľko API diktuje spôsob použitia"
- „reže na obe strany" (cuts both ways) → „má dve strany"
- „byť o niečom" (kód je o správaní) → „v kóde riešiš správanie"
- „servírovanie" (serving — falošný priateľ, jedlo) → „obsluha modelov"
- „Čo sa pekne uzatvára:" (fragment „which nicely closes") → „A tým sa kruh uzatvára:"
- „Voľba je rozhodnutie" (tautológia) → „Je to rozhodnutie…"
- „majstrovstvo, ktoré si zapneš" (zmiešaná metafora) → „schopnosti, ktoré si zapneš"
- **rekcia/aktér:** *záležať* žiada **na** („na tom záleží", nie „to záleží"); *zaplatiť* žiada **za**
  („zaplatiť za 27 volaní"); *požiadať* žiada **o** („čo si model vyžiadal"); „**Pýtal si** model nástroj?"
  (garden-path so zvratným „pýtal si sa") → „**Žiada** model nástroj?"; explicitný predmet „aby **to**
  schválil / kým **to** schváli"; „**zbiehať sa**" (zvratné); zhoda „jedno sedenie nevidí stav druhého".

**§8 polotučné + em-dash + straight-quote.** Polotučné v rozpočte; jediné emfázové polotučné („Microsoft
Agent Framework" v prehĺbení) **prevedené na odkaz** (zrkadlí EN, odstraňuje zvýraznenie). Em-dash v
sesterskom pásme, zákaz „— ," = **0**. **Straight-quote checkpoint:** prozaických rovných `"` mimo markupu =
**0** (párovanie „…"); ASCII `"` len v Mermaid `["…"]` / edge-label „hotovo", YouTube `title`, frontmatter,
kódových literáloch (`"exit"`/`"async"`/`"sync"`).

**Odkazy + retrofit.** SK súrodenci s `.md` (agentic-rag, tool-use, planning-loops, multi-agent — index aj
prehĺbenia; glosár); nepreložené holou zložkovou cestou bez `.md`: „../mcp/", „../real-agents/",
„../../part-3-production/overview/". **Doplnené vypadnuté externé odkazy z EN zdroja** (over. proti `docs/`):
Microsoft Agent Framework `learn.microsoft.com/en-us/agent-framework/`, AutoGen `github.com/microsoft/autogen`,
Semantic Kernel `learn.microsoft.com/en-us/semantic-kernel/`. **Retrofit (Fáza 11 konvencia):**
`multi-agent/deep-dive.md` L11 `../orchestration-frameworks/` → `../orchestration-frameworks/index.md` (SK
teraz existuje). Pätičky „Nové pojmy" zrkadlia anglické heslá glosára (bez SK glosu); index-note text „Grafy a
odolné vykonávanie" == deep-dive `sidebar_label` byte-for-byte; frontmatter nedotknutý.

**Backlog — stav.** (1) Pri najbližšej úprave §1.1/§1.2: **presunúť „durable execution" z kept-EN §1.1 do
Triedy 2 §1.2** (SK-vedené „odolné vykonávanie"). (2) Glossary-flip backlog z Fázy 11 stále otvorený: heslo
glosára **HITL** nesie „(človek v slučke)" — telo lekcie ho **nikdy nepoužíva** („schválenie človekom"),
pätička zrkadlí len anglické heslo. Žiadny nový hand-off.

**Stav:** Wave 2 lekcia 4 (Orchestračné frameworky) redakčne uzavretá; SK ostáva **gated** (mimo plain buildu).

### Fáza 16 — vlna 2, lekcia MCP a protokoly agentov: rozhodnutia kánonu

Piata lekcia vlny 2 (Part II), stránky `index` („Štandard, ktorý prepája agentov so svetom“) + prehĺbenie
„Servery, prenos a dôvera“. Plný redakčný tím (literárny, naivný jednojazyčný čitateľ, technický/fakt,
korektor, konzistenčný, riadiaci) v synchrónnych paralelných dávkach, adjudikácia (fidelita > štýl; kánon >
novinka jednej stránky), oprava, čerstvý korektorský prechod a **studený prechod ×2** na KAŽDEJ stránke
(zdroj skrytý, čítané nahlas, literárny + naivný čitateľ na stránku). Prezentačná lokalita bez ľudskej
poistky — brány niesli plnú váhu. **Fakty nehýbané** — faktová brána proti EN-skeletu (C1–C21, D1–D42, T/TD)
čistá na oboch stránkach: MCP koncom 2024 / dar dec. 2025 Agentic AI Foundation pod Linux Foundation; revízie
2025-03-26 (streamable HTTP nahradil HTTP+SSE, autorizačný rámec na báze OAuth 2.1) / 8. sept. 2025 (náhľad
registra) / 25. nov. 2025 (elicitation URL-režim, sampling `tools`/`toolChoice`, stderr, OpenID Connect /
`WWW-Authenticate` / OAuth Client-ID Metadata Documents / RFC 9728, experimentálne `tasks`); SDK Tier 1
TS/Python/C#/Go, Tier 2 Java/Rust, pod nimi Swift/Ruby/PHP/Kotlin (k nov. 2025); A2A ohlásený 9. apr. 2025,
dar Linux Foundation 23. jún 2025, v1.0, TSC AWS/Cisco/Google/IBM/Microsoft/Salesforce/SAP/ServiceNow;
register podopretý Anthropic/GitHub/PulseMCP/Microsoft; trieda CVE 2025 na podvrhnutých metadátach OAuth;
momentka k júlu 2026. Dvestoendpointový Swagger, JSON-RPC 2.0, tri primitíva/tri roly/dve osi — všetko
sedí, žiadny atóm pridaný ani vypustený.

**Nové Trieda-2 / SK-vedené termíny (most raz „(anglický originál)“ na stránku, ďalej slovensky):**
- **hostiteľ (host)** — MCP host rola (tretia rola nad rámec klient/server z prvej časti); „MCP“ kept-EN,
  hlava natívna; glos raz (prehĺbenie L15).
- **relácia (session)** — stavová = „stavová relácia“. Most na index (L57) aj prehĺbenie (L19 doplnené v tejto fáze).
- **prenos (transport)** — natívna hlava, most raz (index L38; prehĺbenie L73 doplnené).
- **zdroje (resources)**, **prompty (prompts)** — MCP primitíva („prompt“ v kept-EN rodine §1.1).
- **register (MCP registry)** — SK-vedená hlava „register“ (čistá SK = katalóg); „register MCP (MCP registry)“
  raz, ďalej „register“. **§2 bez kolízie — „register“ tu = katalóg, nie CPU/audit register.**
- **objavovanie serverov (server discovery)** — **Karta 3 rozšírená** (nižšie). OAuth „discovery“ tiež
  „objavovanie“.
- **vyjednanie schopností (capability negotiation)** — lemma glosára EN, akt natívny (prehĺbenie L23).
- **inicializačné podanie rúk (initialize handshake)** — handshake = „podanie rúk“ (prehĺbenie L19).
- **vynesenie dát (data exfiltration)** (Fáza 9 glos), **prekročenie oprávnení (permission over-reach)**,
  **plocha útoku (new attack surface)**, **metaregister**, **preverený / preverenie (vetting)**,
  **pripnúť / zafixovať verziu (pinning)** — natívne.

**Kept-EN glosy potvrdené a použité (§1.1, latinkou, slovenský glos raz pri prvom výskyte):**
- **sampling (MCP)** → „(server si požičia model klienta na generovanie)“; **elicitation** → „(server si cez
  klienta vyžiada údaj od človeka)“; **roots** → „(hranice, v ktorých server smie pracovať)“; **sandbox** →
  „(izolované prostredie s obmedzenými právami)“, sloveso „izolovať v sandboxe“; **tasks** (MCP experimentálne)
  → „(trvácne, dopytovateľné požiadavky)“ — **odlíšené od A2A „Tasks“**. tool poisoning / rug pull /
  confused deputy / prompt injection / spotlighting / instruction hierarchy — Fáza 9 glosy dodržané.
- **elicitation na index — doplnený glos v teaseri „Ďalej“.** Studený naivný čitateľ ho v zozname deep-dive
  tém (index L92) NEDEKÓDOVAL (jediný výskyt na index bol holý); doplnené „elicitation (vyžiadanie vstupu od
  používateľa)“ — §1.0 most pri prvom výskyte na stránke (zrkadlí deadlock-glos doplnok, Fáza 14).

**Smer termínu — dve rozhodnutia (§1.0, kolísanie smeru = defekt):**
- **primitíva — glos LEN funkčný „(základné stavebné bloky)“ (Fáza 15 drží; skeletonov dvojglos zrušený).**
  Skelet navrhoval „primitíva (primitives)“ + funkčný glos; index tak aj razil („primitíva (primitives), teda
  základné stavebné bloky“) — dvojglos. Kánon Fázy 15 (L2059) fixuje **iba** „(základné stavebné bloky)“
  (falošný priateľ *primitív* = hrubý človek). Index zladený s prehĺbením: **„primitíva (základné stavebné
  bloky)“** na oboch stránkach; „(primitives)“ vypustené. Kánon > novinka jednej stránky.
- **A2A gloss — vedomé ZRKADLENIE EN, nie zjednotené (flag, nie tichý prepis).** index (aj pätička/lemma
  glosára) razí „A2A (Agent-to-Agent)“, prehĺbenie „A2A (Agent2Agent)“. Toto **zrkadlí anglický zdroj**
  (docs/index „Agent-to-Agent“, docs/deep-dive „Agent2Agent“ = oficiálny produktový názov Google) a pätička
  je **byte-fixná** na „Agent-to-Agent“ (lemma glosára). Literárny + korektor to flagli ako medzistránkovú
  nezhodu; adjudikované **ponechať** (fidelita k EN + fixná pätička). Zaznamenané ako vedomá výnimka, nie defekt.

**Karty (potvrdené na tejto lekcii).**
- **Karta 1:** jediný výskyt „zlyhanie“ = „katalóg spôsobov zlyhania“ (prehĺbenie L101, *failure modes* =
  názov kategórie, povolené). Bezpečnostné udalosti = „útok“ / „prienik“ / „nepriama prompt injection“ /
  „úspešný útok server ľahko zapojí“ — **nikdy „zlyhanie“** pre jednotlivý incident/úspešný útok. Grep oboch
  stránok: ZERO mis-use.
- **Karta 2:** žiadny sudca/bid nevydá holé číslo — „skóre“ ani „hodnotenie“ (číslo) sa nevyskytuje; správne,
  nie medzera. Krížový odkaz „ako sa tím **hodnotí**“ (prehĺbenie L11) = akt hodnotenia tímu (Karta 2 disciplína),
  **nahradil** pôvodné vivid „oznámkuje“ (Fáza 14 term) — studený prechod ×2 ho v tomto stručnom krížovom
  odkaze NEDEKÓDOVAL (bez evaluačného rámca multiagentovej lekcie). Karta 2 povoľuje koexistenciu
  „hodnotenie“/„známkovanie“; tu jasnosť > vivid.
- **Karta 3 — ROZŠÍRENÁ o discovery.** „server discovery“ = **„objavovanie serverov“**, „objavovanie v malom /
  vo veľkom“, OAuth „objavovanie metadát“; **NIE „vyhľadávanie“** (rezervované pre retrieval). Jediné
  „vyhľadávanie“ (index L75) = agentic-RAG retrieval recap — správne rezervované.
- **Karta 9:** „strop“ = 0× na oboch stránkach; žiadny rozpočtový strop na téme. „plocha útoku / plocha súhlasu“
  nie sú „strop“.

**Verb-by-object (§1.5):** žiadne univerzálne „vydať“ (grep 0). Server **vráti** výsledok nástroja / **pošle**
notifikáciu / **ohlási/deklaruje** schopnosti; model **generuje/vytvorí** text; klient **zavolá/vyvolá**
nástroj; schopnosť si **vyžiada/požičia** generovanie. „vydavateľ“ / „vydaním GA“ / „FIPA vydala“ mimo zákazu.
Aktér-oprava: „injection vchádza kanálom“ → „**tento útok** vchádza kanálom“ (holý sklonený EN podmet, §1.3
blocklist); „(schopnosť) obracia spojenie“ potvrdené.

**Figúry — studený prechod ×2 (naivný čitateľ na oboch stránkach).**
- **„plocha súhlasu“ (consent surface) — PROBATION (potvrdené oboma naivnými čitateľmi, Batch 1 aj studený).**
  Holé dve slová nedekódujú cold (plocha = plochý fyzický útvar; súhlas = akt). Nesú ju DVE opory: (1) rým s
  **„plocha útoku“** (na tej istej stránke, L9/L101) a (2) definícia hneď vedľa (L69). **Náprava zo studeného
  prechodu:** glos „bod“ → **„miesto“** (L69) — „plocha … bod“ bol sebaprotirečivý (plocha definovaná ako bod);
  „miesto“ rieši rozpor aj lepšie zrkadlí EN „a place“. Slabina, ktorá drží probáciu: v takeaway (L152) sa
  vracia holá („Obe sú plochy súhlasu“) bez definície — jump-in čitateľ obraz nedostane. Ponechané pre rým
  s „plocha útoku“; skúšobná doba trvá.
- **„výmena“ (the trade M×N→N+M) — usadená figúra korpusu, drží; kolokácia opravená.** Recap prehĺbenia
  „výmena, ktorú MCP zhŕňa obrazom USB-C portu“ + index. Studený prechod flagol nejasný referent „tá výmena“;
  index-kolokácia „protokol, ktorý ju **uzaviera**“ → „ktorý ju **umožňuje**“ (uzavrieť sa viaže na dohodu/obchod,
  nie výmenu) + „tá“ → „táto“ (pevnejšia deixa). Figúra ostáva (deep-dive ju nesie); reziduál — sledovať.
- **„USB-C port pre AI aplikácie“** — vlastný obraz štandardu, ponechaný verbatim (≤1 metafora/odsek). „Vlastný
  obraz štandardu to hovorí“ (personifikácia obrazu) → „**Najstručnejšie to vystihuje obraz, ktorý si volí sám
  štandard**“ (index L14).
- **POTVRDENÉ → usadené (dekódovali cold):** „obal / obaliť“ (wrapper), „mantinely (guardrails)“, „zásuvka“,
  „otrávený opis nástroja“, „zmätený zástupca“, „vizitka agenta“ (Agent Card), „metaregister“, „Klient postaví
  plot, server pracuje vnútri neho — hranica je deklarovaná, nie vyprosená“, „Kým sampling si požičiava model,
  elicitation si požičiava pozornosť používateľa“, „Pohodlie a vystavenie sú tá istá vec z dvoch strán“,
  „najbezpečnejší server je ten, ktorý si nikdy nepripojil“, „objavovanie v malom / vo veľkom“.
- **„vlastní os“ (stránka/protokol vlastní os)** — NIE kalk, usadený korpusový obrat (Fáza 14/15). Ponechané.
- **Ponechané s výhradou (dev-register, kept):** „fičúra“ (nie feature; ustálený neformálny SK IT-register,
  zrkadlí hlas „ty“), „lepiaci kód“ (glue — ústredná figúra knihy), „réžia“ (overhead, §1.2), „viacnájomný“
  (multi-tenant, priehľadný novotvar), „posvätená šablóna“ (zrkadlí EN „blessed“).

**Nové kalkové pasce a slabé kolokácie (žatva MCP — studený prechod ×2 — do grep-zoznamov §1.3/§1.4):**
- „rastie zle“ ✗ (scales badly) → **„rastie neúnosne“** (nie „škáluje sa zle“ — anglicizmus)
- „obaliť raz za server“ ✗ (wrap behind a server; rekcia) → **„obaliť raz do servera / ako server“**
- „obraz to hovorí“ ✗ (the image says it; personifikácia) → **„obraz vystihuje / obraz, ktorý si volí štandard“**
- „uzavrieť výmenu“ ✗ (uzavrieť sa viaže na dohodu/obchod) → **„umožniť výmenu“**
- „spotrebúvať (API / to, čo server ponúka)“ ✗ (consume — jedlo/palivo) → **„využívať“**
- „naozaj zastať“ ✗ (dvojznačné: stop vs stand-in-for) → **„naozaj sa zastaviť“**
- „odbor“ (the field/discipline) ✗ (číta sa ako oddelenie/odbory) → **„(táto) oblasť“** (zladené s „oblasť sa
  mení/formuje“ na oboch stránkach; „odbor“ = 0)
- „ťažisko venovať (čomu)“ ✗ (devote the centre of gravity) → **„ťažisko klásť na (čo) / sústrediť sa na“**
- „držať pôdu vedľa“ ✗ (hold the ground next door; idiómový kalk) → **„pokrývať územie hneď vedľa“**
- „oznámkovať sa“ (ako sa tím oznámkuje) ✗ v stručnom krížovom odkaze bez evaluačného rámca → **„ako sa tím
  hodnotí“** (Karta 2)
- „prevádzkový uhol“ ✗ (operations angle; „uhol“ = geometrický) → **„prevádzkové hľadisko“**
- „Pracovný detail (pridáva…)“ ✗ (the working detail; abstraktný podmet-kalk) → **„V praxi (však) pribúda…“**
- „napevno naviazaný na pevný zoznam“ ✗ (počuteľná redundancia napevno+pevný) → **„naviazaný na pevný zoznam“**
- „rozsahovať / rozsahuj tokeny“ ✗ (novotvorené sloveso zo „scope“) → **„vymedzovať rozsah / úzko vymedzuj
  rozsah tokenov“**
- „si nemá čo požičať“ ✗ (zvratné „si“ mätie podmet) → **„sa nedá požičať“**
- „detaily sa budú priťahovať“ ✗ (keep tightening; „priťahovať“ = magnet) → **„sa budú spresňovať“**
- „SDK obslúži drôt“ ✗ (the wire; „drôt“ = kovový drôt) → **„SDK obslúži prenos“** (zladené s telom)
- „obaja (server a klient) hovoria“ ✗ (životné maskulínum pre neživotné) → **„oba hovoria“** (animácia je
  lexikálna, personifikačné sloveso ju nemení)
- „priveľa oprávnený“ ✗ (priveľa kvantifikuje meno/sloveso, nie prídavné meno) → **„má priveľa oprávnení“**
- „Prekročenie = server, ktorý…“ ✗ (rovnítko v próze) → **„Prekročenie znamená server, ktorý…“**
- „Prečo (X) obrátenie záleží“ ✗ (rekcia: záležať žiada **na**) → **„Prečo na obrátení záleží“**; „Najviac
  záleží pri…“ → „**Najviac na ňom záleží** pri…“ (zrkadlí Fázu 15 rekciu *záležať na*)

**§8 polotučné + em-dash + straight-quote.** Polotučné bez inflácie: index 1,25 párov/100 slov (7 jump-in),
prehĺbenie 1,05/100 slov (1 jump-in) — na/pod mediánom sesterského pásma (0,87–2,07), žiadne celovetné
zvýraznenie. **Em-dash metronóm po oprave:** index **1,98/100 slov** (38 pomlčiek), prehĺbenie **1,96/100 slov**
(67) — obe v sesterskom pásme (~2,0–2,5), prehĺbenie mierne stíšené. Zákaz „— ,“ = **0** na oboch. **Straight-quote
checkpoint:** prozaických rovných `"` (U+0022) mimo markupu = **0** (párovanie „…“ 8/8 index, 12/12 prehĺbenie);
ASCII `"` len vo frontmatteri, YouTube `title`, Mermaid `["…"]`. **ř / ě / ů = 0** na oboch stránkach.

**Mermaid — náprava (per-page konzistencia).** Prvý diagram prehĺbenia mal anglické „tools/resources/prompts“
(SL/SR node labely), kým druhý diagram razil SK „zdroje / výsledky nástrojov / opisy nástrojov“ — studený
naivný čitateľ nezladenie flagol. Labely SL/SR preložené na **„nástroje/zdroje/prompty“** (node IDs nedotknuté).
Oba diagramy teraz SK-konzistentné s telom.

**Odkazy + retrofit.** Všetky odkaze prešli i18n-link-check konvenciou bez opravy: SK súrodenci s `.md`
(tool-use, multi-agent, orchestration-frameworks — index aj prehĺbenia; agentic-rag, planning-loops, guardrails;
glosár; `./index.md` / `./deep-dive.md`); nepreložené holou zložkovou cestou bez `.md`: **`../real-agents/`**,
**`../../part-3-production/tooling-ecosystem/`** (EN používal `../real-agents.md` a `.../tooling-ecosystem/index.md`
— SK vedome diverguje na holú zložku, keďže ciele ešte nie sú preložené). Externé absolútne EN: modelcontextprotocol.io,
a2a-protocol.org, registry.modelcontextprotocol.io, modelcontextprotocol.io/docs/sdk. **Pätičky „Nové pojmy“
byte-exaktné** (index: MCP (Model Context Protocol), MCP server, MCP client, MCP resources, MCP prompts, M×N
integration problem, A2A (Agent-to-Agent); prehĺbenie: MCP host, capability negotiation, roots, sampling,
elicitation, streamable HTTP, MCP registry, server discovery, tool poisoning, rug pull, confused deputy).
**Index-note text „Servery, prenos a dôvera“ == prehĺbenie `sidebar_label` byte-for-byte.** Žiadny nový retrofit
susedných stránok (mcp bol dosiaľ cieľom holých EN-fallback ciest zo sesterských lekcií; keď sa spustí SK build,
retrofit `../mcp/` → `../mcp/index.md` v tool-use/multi-agent/orchestration-frameworks patrí do ich milestone-passu).

**Backlog — stav a hand-off.**
- **Do §1.1/§1.2 pri najbližšej úprave kánonu:** zaznamenať per-page glosy sampling/elicitation/roots/sandbox/tasks;
  Trieda-2 hlavy hostiteľ/relácia/prenos/register/objavovanie serverov/vyjednanie schopností/inicializačné
  podanie rúk sú SK-vedené (most raz na stránku).
- **Sesterský retrofit `../mcp/` → `../mcp/index.md`** v tool-use/multi-agent/orchestration-frameworks — čaká na
  spustenie SK buildu (Fáza 11 konvencia), mimo tejto lekcie.
- **Otvorený glossary-flip backlog z Fázy 11** (HITL „(človek v slučke)“ vs telové „schválenie človekom“;
  kosínus; viacjazyčné embeddingy) — nezmenený, samostatná neskoršia vlna.
- **Hand-off pre záverečnú lekciu „real-agents“ (capstone):** MCP je pojmový základ, o ktorý sa capstone opiera —
  (1) tri roly hostiteľ/klient/server + väzba 1:1, (2) tri primitíva „nástroje/zdroje/prompty“ (glos „(základné
  stavebné bloky)“), (3) dve osi „os agent↔nástroj“ (MCP) / „os agent↔agent“ (A2A) so symbolom ↔, (4) bezpečnostný
  slovník po mene (nepriama prompt injection, tool poisoning, vynesenie dát, prekročenie oprávnení / confused
  deputy, rug pull; obrany: princíp najnižších oprávnení, preverené a pripnuté servery, schválenie človekom,
  spotlighting, sandbox; „plocha súhlasu“ ako spojka na bezpečnosť — PROBATION, capstone ju nech nesie so
  scaffoldom, nie holú). Capstone „MCP naživo na Claude/OpenAI/Gemini“ zdedí kept-EN termíny a Karta-3 „objavovanie“.

**Stav:** Wave 2 lekcia 5 (MCP a protokoly agentov) redakčne uzavretá; SK ostáva **gated** (mimo plain buildu).

### Fáza 17 — vlna 2, záverečná lekcia „real-agents" (capstone): rozhodnutia kánonu

Šiesta, záverečná lekcia vlny 2 (Part II) — **plochá stránka** (bez zložky, bez prehĺbenia):
`part-2-agents/real-agents.md` („Claude, OpenAI a Gemini nosia tie isté techniky pod inými menami").
Berie celú výbavu Časti II (nástroje, získavanie dát, plánovanie a slučky, sebazotavenie, hooky/guardrails,
multiagentové systémy, MCP) k trom reálnym dodávateľom. Plný redakčný tím (literárny, naivný jednojazyčný
čitateľ, korektor, technický/fakt, konzistenčný) v synchrónnych paralelných dávkach, adjudikácia (fidelita >
štýl; kánon > novinka jednej stránky), oprava, čerstvý korektorský prechod a **studený prechod ×2** (dve
čerstvé dvojice literárny + naivný čitateľ, zdroj skrytý, čítané nahlas, slepé voči skeletonu aj sebe).
Prezentačná lokalita bez ľudskej poistky — brány niesli plnú váhu.

**Fakty nehýbané** — faktová brána proti EN-skeletu (C1–C69, súhrnná tabuľka, war-stories, závery, pätičky,
video-why-line, teaser) **ZERO pohyb**: ceny/verzie `web_search_20260318`, ~$10/1 000 vyhľadávaní; dátumy
2026-07-07 / 2026-06-01 / 2026-07-10, MCP 25. nov. 2024 / dar 9. dec. 2025 Agentic AI Foundation (Block +
OpenAI) pod Linux Foundation, revízie špecifikácie 2025-03-26 / 2025-11-25; `max_retries = 3`, 48 h, 20 URL,
13 kategórií, bez 30-dňového TTL; `reasoning.effort` none/minimal/low/medium/high/xhigh (GPT-5.x),
`thinking_level` minimal/low/medium/high; poradie oprávnení Hooks → Deny → Ask → režim → Allow → `canUseTool`;
A2A v1.0. Priradenia Claude/OpenAI/Gemini a citované „…nevykoná" / „…záverečná správa subagenta" /
„…bez konzultácie s modelom AI" / „…vzdialené MCP čoskoro" nezoslabené. **Žiadny atóm pridaný ani vypustený.**

**Figúry — studený prechod ×2 (naivný čitateľ dekódoval pri prvom kontakte = podmienka „confirmed"):**
- **„spiatočná cesta" (round-trip) — CONFIRMED, usadená.** Oba studené naivní čitatelia dekódovali okamžite
  (rodené `spiatočný lístok`); L23 slučku pred pomenovaním rozpíše. Prijatá do korpusu.
- **„historka z praxe" (war-story) — CONFIRMED, usadená.** Priehľadné rodené spojenie; de-militarizovaný
  ekvivalent „war-story". Prijatá.
- **„tvar prenosu" (wire shape) — CONFIRMED s podmienkou in-line glosu.** Studený naivný čitateľ ju **v H1
  NEDEKÓDOVAL** (opaque pri prvom kontakte, sebaglosovala až o sekciu ďalej). **Náprava:** vyňatá z H1 (titul
  nemusí niesť wire-shape — skeleton to dovoľuje) a **glosovaná pri prvom výskyte v tele** (L9:
  „…v inom tvare prenosu (v inej podobe, v akej volanie cestuje cez API)"). Po glose **oba** studené naivní
  čitatelia dekódovali pri prvom kontakte. Motív ostáva v tele (nadpis L21, recap L164, tabuľka). Skúšobná
  doba uzavretá — confirmed **výhradne s glosom pri prvom výskyte**.
- **„zásuvka pre nástroje" (MCP plug) — CONFIRMED marginálne.** Cold dekóduje len cez USB-C priming (L125,
  „USB-C port pre AI aplikácie"). Holá „zásuvka" (zásuvka vs zásuvka-šuplík) je v izolácii dvojznačná →
  **kotvené** „zásuvku" → **„zásuvku pre nástroje"** (viaže na rolu agent↔nástroj). Nesie so scaffoldom, nie
  holá — rovnaká politika ako „plocha súhlasu" (Fáza 16).
- **„os agent↔nástroj" / „os agent↔agent" — CONFIRMED.** Notácia Fázy 16 drží; ↔ + kontrast robia zmysel
  transparentný. Kánon > jednorazový návrh „prepojenie".
- **„nosný princíp" (L113, „Nosným princípom je silná izolácia kontextu") — CONFIRMED.** `nosný múr/pilier`
  → prenesene „ústredný/nesúci"; číta sa čisto. Nahradil dvojznačný inštrumentál „Modelom je…".
- **STRUCK → plná próza / iný tvar (nedekódovali cold alebo štýlový defekt potvrdený ≥2 ušami):**
  - **„zhynúť" (agent zhynul / „Zotav sa, nezhyň") → „spadnúť" („aby spadol" / „Zotav sa, nespadni").**
    3 zo 4 studených agentov flagli „zhynúť" ako patetické (perish — o živých tvoroch). Rodená softvérová
    smrť je **„pád" (crash, Karta 1)** — sloveso „spadnúť". Prijaté.
  - **„šošovka" (analytická optika, kalk *lens*) → „optika".** Obaja literárni studení čitatelia nezávisle
    navrhli „optika"; „šošovka" = fyzická/očná šošovka, nie rámec. V korpuse nezavedená (grep siblings = 0),
    preto bez kolízie.

**Smer termínu — dve rozhodnutia (§1.0) + jeden override skeletonu:**
- **permission modes → SK-vedené „režimy oprávnení (permission modes)"** (skeletonom predpísané, čistá SK,
  logika Triedy 2). **Zmiešaný smer v sekcii je PRINCIPIÁLNY, nie defekt:** súrodenci v tej istej vete
  **„Claude Code hooks (hooky)"** a **„ADK callbacks (callbacky)"** sú EN-vedené, lebo *hooky/callbacky*
  nemajú čistý domáci tvar; *režimy oprávnení* ho má. Pätička §4 „Nové pojmy" nesie všetky tri ako kept-EN
  **lemmy glosára** — **žiadny rozpor** (pätička = lemma; telo = §1.0 smer). *Konzistenčný redaktor flagol
  narušenú paralelu; adjudikované PONECHAŤ.* (Ak korpus neskôr chce jednotu, oprava patrí do §1.1/glosára,
  nie na túto stránku.)
- **Mermaid labely `tool call` / `tool result` → PONECHANÉ ANGLICKÉ (§3 + precedens súrodenca tool-use).**
  Redakčný prechod ich najprv preložil na „volanie nástroja" / „výsledok volania" (argument: medzerová fráza
  nie je kódový artefakt `tool_use`), no **producent to vrátil na EN** pri zosúladení s korpusom: §3 menuje
  práve „tool call: …" / „tool result: …" ako protokolové artefakty, ktoré v Mermaid ostávajú anglické, a
  **tá istá spiatočná-cesta schéma v `tool-use/index.md` ich drží EN** (`TC["tool call: …"]`,
  `TR["tool result: …"]`); RU paralela tiež. Precedens Fázy 16 (preklad „nástroje/zdroje/prompty") sa týkal
  **MCP primitív**, nie artefaktu round-tripu — nekoliduje. Ostatné labely (Definície nástrojov, Model, Tvoj
  kód ho vykoná, Odpoveď) sú SK (§3 plné slová). **Node IDs TC/TR frozen.**
- **prompt injection — poradie prvého výskytu opravené.** Prvý (holý) výskyt bol na L95 (Model Armor) pred
  glosom na L99. Glos presunutý na L95 („prompt injection (útok, ktorý modelu podstrčí cudzie inštrukcie)"),
  L99 odglosovaný. §1.0 poradie prvého výskytu.

**Ponechané (vedomé, aby budúca fáza nezvrátila):**
- **„účelový fond" (L127) — NIE kalk, fakt-verné.** EN skeleton hovorí **„a directed fund"**, nie foundation
  → „nadácia" by bola faktová chyba. Literárny flag odmietnutý fidelitou.
- **„fičúra" — kept (dev-register, Fáza 16 precedens).**
- **„ruky" (agent „dostáva ruky" = nástroje) — kept.** Korpusová figúra („uvoľniť modelu ruky", §Hlas);
  naivní čitatelia dekódovali. Literárny flag o abruptnom otvorení sekcie zaznamenaný, obraz ponechaný.
- **„minúť výpočet" (spend compute) — PONECHANÉ, sledovať.** Jeden literárny cold flag („výpočet" sg. =
  „calculation"), navrhol „výpočtový výkon"; jednorazový signál, zrozumiteľné, opakuje sa v nadpise +
  tabuľke → nechané, na skúšobnej dobe.

**Nové kalkové pasce a slabé kolokácie (žatva capstone → grep-zoznamy §1.3/§1.4):**
- **„stáť latenciu / zložitosť"** ✗ (costs latency — rodina „costs X", §1.4) → **„prinášať latenciu a
  zložitosť navyše"**
- **„agencia"** ✗ (falošný priateľ: *agency* = samostatnosť/autonómia, NIE *agentúra*) → **„samostatnosť
  (autonómia)"**
- **„functionCally"** ✗ (ad-hoc skloňovanie kódového id; §1.3 blocklist, ako `tool cally`) → **„prvky
  `functionCall`"** (EN nesklonený v kóde)
- **„stavať na (file search)"** ✗ (build on, §1.4) → **„opierať sa o / spoliehať sa na"**
- **„tok, ktorý beží framework"** ✗ (transitívne *bežať* + dvojznačný podmet) → **„tok riadenia, ktorý
  neurčuje model, ale framework"**
- **„ten bod, ktorý spravili (orchestračné frameworky)"** ✗ (make the point) → **„to, na čo poukázali"**
- **„kresliť ostrú čiaru medzi X a Y"** ✗ (draw a sharp line, §1.4 sharp-boundary) → **„ostro oddeliť X od Y"**
- **„po fakte"** ✗ (after the fact) → **„dodatočne"**
- **„prichádza v balíku s tým"** ✗ (comes bundled with) → **„k tomu neodmysliteľne patrí"**
- **„prevlečené správou"** ✗ (inštrumentál číta „obliekol správu"; threaded *through* a message) →
  **„prevlečené cez správu"**
- **„má väčšiu cenu"** ✗ (worth = hodnota; „cena" číta ako *price*) → **„má väčšiu hodnotu"**
- **„kadencia (kontroly faktov)"** ✗ (review cadence; SK *kadencia* = hudobná/paľby) → **„rytmus / frekvencia"**
- **„prakticky v rukách"** ✗ (hands-on, doslovný kalk) → **„prakticky vyskúšané / s SDK v ruke"**
- **„zhynúť"** ✗ (agent perishes) → **„spadnúť"** (pád = crash, Karta 1)
- **„šošovka"** ✗ (analytická *lens*) → **„optika"**
- Aktér-oprava: **„lekcia, ktorá tú chybu učila"** ✗ (*učiť čo* = učiť páchať) → **„ktorá o tej chybe učila"**;
  **„príkaz … môže potichu odmietnuť"** (visiaci predmet) → **„môže vykonanie potichu odmietnuť"**.
- Register/homograf: **„Nedeľ" (imperatív *deliť*, koliduje s *nedeľa*)** → **„Nerozdeľuj"**;
  **„Modelom je X"** (dvojznačný inštrumentál) → **„Nosným princípom je X"**.

**Verb-by-object (§1.5):** univerzálne „vydať" **grep = 0**. Model **vyjadrí** zámer / **vytvorí** volanie
(`function_call`) / **vráti**/**poskytne** výsledok; „evals" → **„evaluácie"** (Karta 2, číslo/disciplína).

**Karty (potvrdené na tejto lekcii).**
- **Karta 1:** „zlyhanie" iba ako kategória („zlyhanie vyhľadávania/generovania", „Spôsoby zlyhania",
  „Trvácne zlyhanie"); jednotlivý incident = „chyba"; crash-sloveso „spadnúť" (§ vyššie). **Mäkká poznámka:**
  L11/L71 „(tá) chyba, ktorú lekcia učila / pred ktorou varovala" = pedagogická „chyba/nástraha", nie názov
  etapy — vnútrostránkovo konzistentné, adjudikované defensible (vlastník Karty OK).
- **Karta 3:** „vyhľadávanie" = retrieval / webové vyhľadávanie; žiadne „objavovanie/discovery" ako
  „vyhľadávanie". Bez mis-use.
- **Karta 9:** step-budget = „strop na počet krokov" / „rozpočet krokov"; žiadny holý rozpočtový „strop"
  inak; „ťah" **nepoužité** (krok), §1.3.

**§8 polotučné + em-dash + straight-quote + typografia.** Em-dash metronóm **61 pomlčiek / 3683 slov =
1,66/100 slov — POD sesterským pásmom (~2,0–2,5; Fáza 16 index 1,98)**: dampované, **nie defekt** (pravidlo
stráži nadmernosť nad 2,5). Zákaz **„— ," = 0**. **Straight-quote checkpoint:** prozaických rovných `"`
(U+0022) mimo markupu = **0** (34 celkovo — všetky v kóde / `<YouTube title>` / Mermaid `["…"]`); „…"
párovanie **16/16**. **ř / ě / ů = 0.** **nbsp U+00A0 = 0** (korpus plain spaces — nezavádzať). Desatinná
čiarka N/A; dátumy „25. novembra 2024" / „9. decembra 2025" OK.

**Odkazy (plochý capstone).** Súrodenci `./tool-use/index.md` … `./mcp/index.md` (s `.md`, zhoda s EN),
glosár `../glossary.md`, MCP/A2A externé absolútne (modelcontextprotocol.io, a2a-protocol.org). i18n-link-check
konvencia bez zmeny; **frontmatter (id/title/sidebar_position), kódové fence, Mermaid node IDs, `<YouTube>`,
protokolové artefakty a §4 reťazce nedotknuté.**

**Konflikty flagnuté (na reconciliáciu neskôr, mimo tejto stránky):**
1. **permission modes** — zmiešaný smer voči súrodencom (adjudikované ponechať SK-led ako principiálne); ak
   sa zjednocuje, oprava do §1.1/glosára.
2. **Mermaid label** — round-trip artefakty `tool call`/`tool result` ponechané EN (§3 + precedens tool-use);
   redakčný návrh na preklad zamietnutý producentom kvôli korpusovej konzistencii.
3. **guardrails smer:** táto stránka EN-vedené „guardrails (bezpečnostné mantinely)" = kánonicky správne
   (§1.1); **sesterská `mcp/index.md` L71 to obracia** („Bezpečnostné mantinely … (guardrails)") — **mcp je
   strana na opravu**, nie táto lekcia.
4. Karta 1 „chyba" pre učenú nástrahu (L11/L71) — defensible register, zaznamenané.

**Backlog (nezmenený z Fázy 16):** sesterský retrofit `../mcp/` → `../mcp/index.md` (čaká na SK build);
guardrails-smer reconciliácia v `mcp/`; glossary-flip backlog z Fázy 11.

**Stav:** Wave 2 capstone (real-agents) redakčne uzavretá; SK ostáva **gated** (mimo plain buildu). Part II
(vlna 2) kompletná.

### Fáza 18 — milestone-prechod vlny 2 (uzávierka #96): reconciliácia a rozhodnutia

Delta-driven milestone-prechod nad všetkými 13 SK stránkami Časti II (nie re-preklad). Dokončil odložené
súrodenecké retrofity, opravil krížostránkový smer termínu, dal probačným figúram čerstvý naivný decode,
prebehol konzistenčný sense-card prechod (Karta 1/2/3/9), studený spätný prechod 4 strán, zosúladil kánon s
korpusom a zaznamenal odložené a doriešené položky. Sub-agenti (naivný jednojazyčný slovenský čitateľ +
studený literárny čitateľ) bežali synchrónne, zdroj skrytý. Táto vlna uzatvára **#96** (Part II SK).

**A. Súrodenecké retrofity — HOTOVÉ (SK ciele existujú → holá EN-fallback cesta nahradená plnou).**
- **`../mcp/` → `../mcp/index.md`** (mcp je zložka s indexom): **4 výskyty** — tool-use/index, orchestration-
  frameworks/index + deep-dive, multi-agent/deep-dive. Grep bare `](../mcp/)` 4→0; `](../mcp/index.md)` 0→4.
- **`../real-agents/` → `../real-agents.md`** (real-agents je **plochá stránka**, nie zložka): **10 výskytov**
  — tool-use/index, orchestration-frameworks/index, multi-agent/index + deep-dive, agentic-rag/index,
  mcp/index (×2), planning-loops/index + deep-dive, mcp/deep-dive. Grep bare `](../real-agents/)` 10→0;
  `](../real-agents.md)` 0→10.
- **`../multi-agent/` → `../multi-agent/index.md`** (nájdené greppom zvyšných holých ciest): **1 výskyt** —
  tool-use/deep-dive L107. multi-agent je preložený súrodenec, EN vedie `../multi-agent/index.md`.
- **Zvyšné holé zložkové cesty PONECHANÉ (správne):** `../../part-3-production/overview/` (4×),
  `../../part-3-production/tooling-ecosystem/` (2×) — Časť III nie je preložená → EN-fallback holou zložkou
  (Fáza 16 konvencia). Grep po retrofite: žiadna relatívna cesta na preložený cieľ bez `.md`. i18n-link-check
  ostáva PASS; korpus teraz bajtovo zrkadlí EN tvary odkazov (zatvára Fáza 11 zásadu „SK-existujúci súrodenci
  idú s `.md`" pre celú Časť II).

**D. Krížostránkový smer termínu — guardrails opravený.**
- **`mcp/index.md` L71** razil SK-vedené „Bezpečnostné mantinely … (guardrails)", čo obracia kánonický smer
  §1.1 (guardrails je kept-EN so slovenským glosom). Opravené na **„Guardrails (bezpečnostné mantinely) z
  Časti I príručky"** (veta začína termínom → veľké G, §Typografia). Zhoda s capstone (Fáza 17 flag #3
  „mcp je strana na opravu") aj s EN „the guardrails from Part I". Jediný výskyt na stránke → most správne raz.
- **Konzistenčný sense-card prechod (13 strán) — 0 defektov.** Karta 1: každý „zlyhani*" = názov kategórie /
  „spôsob zlyhania" (grep + klasifikácia, žiadny incident mis-labeled). Karta 2: každé „hodnotenie" = akt/
  disciplína (hodnotenie trajektórie/výsledku/tímu), žiadne „hodnotenie" ako číslo (to je „skóre"). Karta 3:
  „objavovanie" = discovery, „vyhľadávanie" = retrieval/webové — bez zámeny. Karta 9: každý „strop" v
  rozpočtovom/loop-cap rámci (strop krokov/tokenov, tvrdý/mäkký strop, „strop na počet …"); žiadny holý
  generický strop. §4 opakujúce sa bloky bajtovo zhodné (12× „Ďalej — druhá časť lekcie"; „Nové pojmy →
  Glosár"; video-blok).

**E. Probačné figúry — čerstvý naivný decode (jednojazyčný SK, zdroj skrytý, bez čítania dopredu).**
- **„plocha súhlasu" (consent surface) — PROBATION POKRAČUJE, teraz so scaffoldom v KAŽDOM výskyte.** Naivný
  čitateľ potvrdil Fázu 16: pri definícii (deep-dive L69) dekóduje (nesie ju rým s „plocha útoku" + apozícia),
  ale v takeaway (L152) **holá takmer padá** — jump-in čitateľ ju uchytí iba z priľahlého „povinné schválenie
  používateľom". **Náprava (brief E „confirm WITH scaffold"):** takeaway L152 dostal echo-glos hneď za termín —
  „Obe sú plochy súhlasu (miesta, kde ti server siaha späť a ty udeľuješ alebo odopieraš súhlas) — …" (zrkadlí
  definíciu L69). Fakty nehýbané (sampling = povinné schválenie; obe rástli k 25. 11. 2025). Figúra ostáva na
  skúšobnej dobe; pravidlo: nesie sa **len so scaffoldom, nikdy holá** (rovnako ako „zásuvka pre nástroje",
  Fáza 17).
- **„prehĺbenie vrstvy X" — STRUCK (tretí naivný čitateľ ju nedekódoval; Fáza 5 #8 = dvaja predtým).** Číta sa
  ako *fyzické prehlbovanie vrstvy* (geológia/výkop), nie „druhá časť lekcie / hĺbkový rozbor". **Rozdelené na
  dva konštrukty:**
  1. **§4 poznámkový štítok** `:::note[Ďalej — prehĺbenie vrstvy]` — jediný živý výskyt v korpuse:
     **real-agents.md L180** (plochá stránka bez prehĺbenia, 🚧 plánovaná forma; ostatných 12 lekcií nesie
     publikovanú formu „Ďalej — druhá časť lekcie"). EN je **„Next — going deeper"** (bez „vrstvy" — SK navyše
     pridala „layer"). Opravené na **`:::note[Ďalej — do hĺbky]`** (verné EN „going deeper", dekóduje triviálne,
     ladí s telom „hĺbkové sondy"). §4 plánovaná forma sa týmto aktualizuje: pre plochú stránku s budúcim
     prehĺbením je štítok **„Ďalej — do hĺbky"**; „prehĺbenie vrstvy" vyškrtnuté medzi odmietnuté coinage.
  2. **Telové krížové odkazy „prehĺbenie vrstvy X"** (= deep-dive vrstvy X) — **4 výskyty, VŠETKY v Časti I
     (#95, uzavreté):** ingestion/index L12, ingestion/deep-dive L77, retrieval/deep-dive L11, generation/
     deep-dive L11 (+ Karta 5 / §4 znenie „mostík na vrstvu X" rodina). **Rozhodnutie: rewrite (drop „vrstvy" /
     zjednotiť s reader-facing „druhá časť lekcie / prehĺbenie <lekcie>"), ale MIMO tohto PR** — siaha do
     uzavretej Časti I a do Karty 5 (§2). Zaradené do **odloženého Part-I / pre-launch prechodu spolu s B**
     (oba sú korpusové term-passy dotýkajúce sa Časti I). Bez slug/anchor ripple (iba próza a text odkazu).
- **Native-check track — doriešené a ponechané.**
  - **inštrumentál plurál „chunkami" — POTVRDENÉ správne** (spojovacie -a- po zhluku -nk, ako „stromami";
    „chunkmi" ťažko vysloviteľné, neštandardné pre prevzatia). Korpus už jednotne „chunkami" (Fáza 5 #5) →
    residual UZAVRETÝ, žiaden flip.
  - **„signatúra funkcie" — PROMOVANÉ (clean).** Štandardný, prirodzený SK programátorský termín. Z native-
    check tracku von.
  - **„rozmernosť" vs „dimenzia":** naivný čitateľ vedie „dimenzia" ako prirodzenejší matematický/ML tvar;
    „rozmernosť" číta ako kalk *dimensionality*. **Flip sa NEROBÍ tu** — je to glosárové heslo (§1.2 riadok,
    slug) → patrí do B (glossary-flip pass). Lean zaznamenaný.
  - **Ponechané na human-friend tracku (marginálne, so scaffoldom v texte):** preskórovať/preskórovanie
    (pre- dvojznačné), ansámbel behov (ťah k hudobnému telesu), Skórer (coinage, OK ako názov komponentu),
    allowlisty (glosované „(zoznamy povoleného)" v mcp/deep-dive L11 — v kontexte dekóduje; naivný flag „allow"
    zaznamenaný), vydestilovať fakt (kalk, zrozumiteľný), minúť výpočet (Fáza 17 „sledovať" — „výpočet" sg.
    ťahá ku *calculation*), zásuvka pre nástroje (Fáza 17 marginálne, nesie so scaffoldom). Human-friend
    packet ich rozhodne (paralelne, nedorazil — nedržíme naň vlnu).

**Studený spätný prechod (4 strany: agentic-rag/index, planning-loops/deep-dive, multi-agent/deep-dive,
orchestration-frameworks/index; naivný + literárny, nahlas).** agentic-rag/index a orchestration-frameworks/
index publikačne čisté. Tri cielené prepisy (nízkosignálové kalky, fidelita zachovaná):
- planning-loops/deep-dive L49: „je **tesná** verzia" (kalk *tight* = fyzická tesnosť) → „je **kompaktná**
  verzia" (EN „the tight version" = kompaktná, lokálna forma; Self-Refine žije v jednom behu).
- planning-loops/deep-dive L19: „stojí **alebo** padá s ňou" (kalk *stands or falls*) → „stojí **či** padá s
  ňou" (zhoda s vnútrostránkovým L146 „stojí či padá").
- multi-agent/deep-dive L82: „Háčik **je** aritmetika" (menný kalk *the catch is arithmetic*) → „**Háčikom je**
  aritmetika" (inštrumentálový prísudok). → do §1.4 grep-zoznamu.
- Ponechané (dekódujú z kontextu / dôsledná domáca stavba): „Zhoršuj sa dôstojne" (degrade gracefully, glos
  vetou), verbless fragmenty multi-agentu (house style); dativ „daroval ho Linux Foundation" (proper-name
  dativ nemarkovaný — zhoda s „prešiel pod Linux Foundation", ponechané).

**C. Kánon-housekeeping (záznam, prózu nehýbeme).**
- **§1.1 kept-EN — vedomé výnimky (multiagentová/orchestračná lekcia, glos raz pri prvom výskyte):**
  **contract net protocol** (glos „(dražobný protokol prideľovania úloh)" v próze), **KQML** (holé meno,
  predchodca FIPA ACL), **MAST** (rozvedené „Multi-Agent System failure Taxonomy"), **deadlock** (glos
  „(vzájomné uviaznutie)"), **performatív** (glos „(performative)" — komunikačný akt FIPA ACL), **BDI** (glos
  „(belief–desire–intention, BDI)"). Všetky = Trieda 3, vedomé kept-EN dev-/výskumné termíny bez ustáleného
  domáceho tvaru.
- **`durable execution` §1.1 → §1.2 Trieda-2 „odolné vykonávanie (durable execution)".** Korpus už tak **aj
  razí** (nadpisy „Grafy a odolné vykonávanie", „Prežiť pád: odolné vykonávanie"; telo „odolné vykonávanie
  (durable execution): beh sa obnoví…") — kánon sa zosúlaďuje s korpusom, nie naopak. Glosárová lemma ostáva
  kept-EN „durable execution" (pätička = lemma; telo = §1.0 SK-vedený smer — rovnaký vzor ako permission
  modes, Fáza 17).
- **Fáza 16 per-page glosy zaznamenané:** sampling (MCP) „(server si požičia model klienta na generovanie)",
  elicitation „(server si cez klienta vyžiada údaj od človeka)" / na indexe „(vyžiadanie vstupu od
  používateľa)", roots „(hranice, v ktorých server smie pracovať)", sandbox „(izolované prostredie s
  obmedzenými právami)", tasks (MCP) „(trvácne, dopytovateľné požiadavky)".
- **Fáza 16 Trieda-2 hlavy (SK-vedené, most raz na stránku):** hostiteľ (host), relácia (session), prenos
  (transport), register (MCP registry), objavovanie serverov (server discovery), vyjednanie schopností
  (capability negotiation), inicializačné podanie rúk (initialize handshake).

**F. Mechanické brány (spot-check 13 strán) — PASS.** `— ,` = **0**; `—,` = **0**; prozaická rovná úvodzovka
`"` (U+0022) mimo kódu/frontmatteru/Mermaid/YouTube = **0** (všetky výskyty v inline `code`/JSON); **ř/ě/ů =
0**; verb-by-object §1.5 bez univerzálneho emit-„vydať" (jediný „vydal sa graf cestou" = zvratné *vydať sa* =
vyraziť, mimo zákazu). Em-dash metronóm 1,66–2,70/100 slov — v sesterskom pásme, kotvený pilotom
tool-use/index (2,70); dampovaný, žiadny beh nad kritický prah. Polotučné bez inflácie.

**G. EN/RU zdrojová chyba (Fáza 5 #7 / Fáza 11 residual) — UŽ DORIEŠENÁ, žiaden `docs:` commit netreba.**
Kontrola korpusu ukázala: **EN takeaway** ingestion/deep-dive L110 už znie „contrastive learning on **triples**
from your domain (a query, a right passage, a wrong one)" — opravené commitom **f404ea73** (pribalené k SK
Wave 1 Ingestion, 2026-07-14; parent mal ešte „query–passage pairs"). **RU takeaway** L266 „контрастным
обучением **на тройках** с трудными негативами" bola správna od vzniku (9ed5ea6). Telá EN L84 / RU L181 / SK L94
učia trojice; zvyšné „pairs"/„пары" sú buď mechanizmus (priťahovanie správnej dvojice dopyt–úryvok v rámci
trojice) alebo iný, správny nárok (retrieval-optimised embeddingy trénované na pároch). **Residual Fázy 11
„EN/RU zdroj čaká na `docs:` commit" sa týmto ZATVÁRA ako vyriešený.** Live-verify po deploi potvrdí „triples".

**B. ODLOŽENÉ — glossary-headword slug flipy (NIE v tomto PR; samostatný pre-launch prechod).** Menia SLUG
glosárového hesla → ripple na každú „Nové pojmy" pätičku a anchor v celom korpuse; riskantné mid-projekt a
Časť III ešte nie je preložená. **Plný zoznam na jeden vedomý prechod (Fáza 6-adjacent):**
- HITL heslo „(človek v slučke)" → zosúladiť s telovým „schválenie človekom / človek v rozhodovacom procese"
  (porušuje §1.2/§1.3).
- „kosínusová podobnosť", „viacjazyčné embeddingy", **„rozmernosť" → „dimenzia"** (native lean, Fáza 18 E).
- Trojtriedne terms-footer flipy: prísny režim, obmedzené dekódovanie, idempotencia, kľúč idempotencie,
  validácia argumentov (glosár EN-vedené heslá vs telo SK-vedené — §1.0 smer).
- **+ pridané v tejto vlne:** telové krížové odkazy „prehĺbenie vrstvy X" (4× Časť I) + Karta 5 znenie —
  drop „vrstvy" / zjednotiť na „druhá časť lekcie" (Fáza 18 E; próza, bez slug ripple, ale dotýka sa Časti I,
  tak s B v jednom Part-I prechode).

**Human-friend naturalness packet** (`editorial/sk-pilot-naturalness-check.md`) — stále paralelne u
slovenských priateľov autora; nálezy pri uzávierke #96 NEDORAZILI. Vlnu nedržíme — poskladajú sa neskôr malým
follow-up PR do kánonu + dotknutých strán (spolu s native-check tracku a odloženým B/Part-I prechodom).

**Stav locale:** SK ostáva **gated** (mimo plain buildu; launch podľa roadmapy). Táto vlna uzatvára **#96**
(Part II SK — 13 strán). Ďalej: Wave 3 — Part III (#97).

### Fáza 19 — vlna 3, lekcia Serving (FastAPI + Docker): rozhodnutia kánonu

Prvá lekcia vlny 3 (Časť III — Produkcia a LLMOps), stránky `index` + prehĺbenie „Priepustnosť a
škálovanie". Plný redakčný tím (literárny, naivný jednojazyčný čitateľ, technický/fakt, korektor,
konzistenčný, riadiaci) v synchrónnych dávkach, adjudikácia (fidelita > štýl; glosár/kánon > novinka jednej
stránky), oprava a **studený prechod ×2** (čerstvá dvojica literárny + naivný čitateľ NA KAŽDEJ stránke,
zdroj skrytý). Prezentačná lokalita bez ľudskej poistky — brány niesli plnú váhu. **Termíny Časti III už
usadené v glosári** (sekcia „Production — serving", heslá serving … serverless GPU) — telo lekcie sa
zosúlaďuje s glosárom, ktorý je pre smer termínu autoritatívny.

**Fakty nehýbané — jeden defekt nájdený a opravený proti skeletonu.** EN-skeleton D2: uvicornov vlastný
prepínač `--workers` obaľuje `fastapi run` (nie naopak). Prvá SK verzia mala vzťah obrátený („prepínač, ktorý
obaľuje fastapi run") → opravené na „prepínač `--workers` priamo v uvicorne; príkaz `fastapi run` **ho
obaľuje**". Ostatné čísla/mená intaktné (Orca Yu a kol. OSDI 2022; engine V1 alfa jan. 2025, predvolený
k 2026; TGI režim údržby dec. 2025, repozitár archivovaný marec 2026; INT4 cez AWQ/GPTQ ~¾ VRAM, 70B na jedno
GPU; Littleov zákon 10 × 20 s = 200; 30–60 s → pod 5 s za ~18 mes.; ~40 vlákien threadpoolu; `(2 × jadrá) + 1`;
tri prepínače max_num_seqs / max_num_batched_tokens / gpu_memory_utilization; DCGM; `nvidia.com/gpu`).

**Smer termínu — glosár katalogizuje EN lemmu, telo vedie SK (zrkadlí vzor `durable execution` / rodina
rozpočtov, Fáza 13/15/18).** Kde má termín Časti III čistý priehľadný slovenský tvar, telo ho vedie a most
`(anglický originál)` dáva raz; glosárová lemma aj pätička „Nové pojmy" ostávajú v tvare hesla glosára (§4:
pätička opakuje heslo glosára, slovenský funkčný glos v zátvorke sa vypúšťa, anglická zátvorka hesla ostáva).
Konkrétne:
- **priepustnosť (throughput)**, **latencia (latency)**, **inferencia (inference)**, **dopredný prechod
  (forward pass)** — SK-vedené (naturalizované / priehľadné), pätička zrkadlí lemmu.
- **kvantizácia (quantisation)**, **kvantizácia KV-cache (KV-cache quantisation)** — SK-vedené; glosár vedie
  SK lemmu → pätička „kvantizácia (quantisation)" (anglická zátvorka ostáva).
- **tenzorový / zreťazený / dátový paralelizmus** (tensor / pipeline / data parallelism) — telo SK-vedené,
  most raz; **glosár vedie ANGLICKÚ lemmu** → pätička „tensor parallelism" atď. (slovenský glos vypustený).
  Zmiešaný smer pätička-vs-telo je principiálny (vzor durable execution), NIE kolísanie §1.0.
- **protitlak (backpressure)** — SK-vedené v tele (glos „(ochrana pred zahltením)"); glosár vedie EN lemmu
  „Backpressure" → pätička „backpressure". Rovnaký vzor.
- **kept-EN, EN-vedené (glos raz na stránku):** serving „(prevádzka modelu alebo pipeline ako sieťovej
  služby)", inference server „(inferenčný server)", cold start „(studený štart)", time-to-first-token
  „(čas do prvého tokenu)", streaming „(priebežné odosielanie výstupu)", scale-to-zero „(škálovanie na
  nulu)", on-demand „(na požiadanie)", load shedding „(zhadzovanie záťaže)", admission control „(kontrola
  prijatia)", iteration-level scheduling „(plánovanie na úrovni iterácie)", chunked prefill „(prefill po
  častiach)", prefix caching „(cachovanie prefixu)", GPU time-slicing „(delenie GPU v čase)", MIG
  „(Multi-Instance GPU)", Littleov zákon „(Little's Law)". Holé kept-EN mená (§1.1) použité a potvrdené:
  continuous batching, PagedAttention, KV-cache, prefill, decode/dekódovanie, uvloop, ASGI worker, KEDA,
  KServe, Knative, Ray, serverless GPU, SSE, OpenAI-compatible API, SGLang, vLLM, Ollama, TGI.
- **SK-vedené hlavy (most raz):** slučka udalostí (event loop), worker/pracovný proces (serving-worker,
  NIE subagent — §1.2), fronta / ohraničená fronta / hĺbka fronty (queue), semafor (semaphore),
  autoškálovanie / autoscaler, škálovanie (NIE „škála"), rate limit (strop na počet požiadaviek) — kept-EN
  s glosom, sondy pripravenosti a životnosti (readiness / liveness probes), obslužná funkcia cesty (path
  operation), teplá rezerva / teplé fondy inštancií (warm pool), snímka pamäte (memory snapshot), vrstvy
  modelového servingu (model-serving layers).

**Nové kept-EN výnimky (§1.1, glos raz):** **secrets** (Docker) „(secrets)" — nie holé „tajomstvá";
**GIL** „(globálny zámok interpretera Pythonu)"; **graceful timeout** „(čas na doznenie)"; **rolling deploy**
„(priebežné nasadenie)"; **image / CUDA image** (Docker) — kept-EN, skloňuj „image" (nie „obraz"); **pod**
„(nasadzovacia jednotka Kubernetes)"; **interconnect** „(prepojenie)"; **load balancer** „(rozdeľovač
záťaže)"; **DCGM** „(exportér GPU-telemetrie od NVIDIA)"; **node taints / tolerations / affinity / node
pools** — kept-EN infra Kubernetes, ľahko opísané v próze. `max_num_seqs`, `max_num_batched_tokens`,
`gpu_memory_utilization`, `tensor_parallel_size`, `pipeline_parallel_size`, `--gpus`, `HF_HOME` — kódové
identifikátory, neprekladajú sa.

**Karty (potvrdené / doplnené).**
- **Karta 1:** „zlyhanie" iba ako kategória / „spôsob zlyhania"; jednotlivý incident = „chyba" / „pád". Vedomé
  odmietnutie 429/503 pod záťažou = **„odmietni / odmietnutie / zhodenie"**, NIE „zlyhaj/zlyhanie" (load
  shedding je zámerná ochrana, nie zlyhanie). „keď sa generovanie v polovici pokazí" (jeden beh) — nie
  „zlyhá". „služba sa roztaví" (melts down) = expresívny obraz stavu, glosár ho nesie.
- **Karta 5 — piaty viazaný význam „vrstva":** **Docker image layer** („malé vrstvy" v rámci Docker image) —
  popri (a) krok pipeline/knihy, (b) obranná vrstva, (c) vrstva modelu (neurónovej siete, rozdeľovaná
  tenzorovým paralelizmom), (d) textová vrstva. Každá veta drží svoj rámec; „vrstvy modelového servingu"
  (KServe/Knative) je architektonická vrstva, nie vrstva modelu.
- **Karta 6 (batch):** plánovač inferenčného servera = kept-EN „batch", „continuous batching", „statický
  batching", „bežiaci batch" (glos „(dávka)" raz); NIKDY „dávkový režim" pre tento význam (ten je vyhradený
  pre async API vrstvu Časti III — lekcia cloud-platforms). Potvrdené.
- **Karta 9 (strop):** „strop" iba v rámci ohraničenia — „strop súbežnosti", „strop max_num_seqs", sloveso
  „stropovať" (webom overené, Fáza 10); „skutočným stropom nie je hrubý výpočet, ale KV-cache" (KV-cache ako
  strop kapacity — rámec je ohraničenie zdroja). Žiadny holý generický „strop".

**Verb-by-object (§1.5):** univerzálne „vydať" **grep = 0** na oboch stránkach. plánovač **priberá / vyraďuje**
požiadavky; model **generuje / počíta / vráti**; server **vystaví / vráti**; meranie **odčíta**; semafor
**stropuje**; vLLM požiadavku **preempuje (vyvlastní)**. Glosárové heslo Prefill/decode „dekódovanie vydáva…"
je v tele obídené (§1.5) → „dekódovanie generuje po jednom tokene za krok" — *flag na glosárový flip* (heslo
nesie „vydáva", do glossary-flip backlogu k Self-RAG/HITL/kosínus).

**Figúry — studený prechod ×2 (naivný čitateľ dekódoval pri prvom kontakte = confirmed):**
- **POTVRDENÉ → usadené:** „dvojitá poistka" (belt and braces — dekódovalo cold), „bublina v zreťazení"
  (pipeline bubble — mechanika rozpísaná pred nálepkou), „služba sa roztaví" (melts down), „inference server
  je tá škatuľa / tú druhú škatuľu si prenajal" (the box you need / rented the second box), „spáli vlákno"
  (burns a thread), „zmrazí slučku" (freezes the loop), „dvestovka" (200 status — hovorový, ale rodený a
  jednoznačný v kontexte), „zohriaty / stále teplé GPU" (warm), „daň za studený štart" (cold-start tax —
  glosárom posvätené, drží).
- **ZAMIETNUTÉ (naivný cold-read zlyhal) → prostá próza:** **„p99 spadne z útesu"** (falls off a cliff) —
  naivný čitateľ dekódoval nesprávny smer (útes evokuje pád nadol, no p99 latencia *rastie*) → nahradené
  **„p99 prudko vystrelí"** (správny smer — hore = horšie), cold-read potvrdil. Medzi odmietnuté coinage.

**Nové kalkové pasce a falošní priatelia (žatva Serving — do grep-zoznamov §1.3/§1.4):**
- **„akonáhle"** ✗ (bohemizmus / nespisovné) → **„len čo / hneď ako"** (do §1.3 lexikálneho zoznamu).
- **„prekladá / prekladanie"** pre *interleave* ✗ (falošný priateľ: *prekladač* = compiler, *prekladať* =
  compile/translate) → **„strieda / striedanie"**.
- **„vnútornosti"** pre *internals* ✗ (= vnútornosti/droby) → **„vnútorné mechanizmy"**.
- **„notebook"** v H1/próze pre Jupyter-notebook ✗ (v SK = laptop) → **„prototyp / experiment"**; H1 „Z
  prototypu do produkčnej služby".
- **„proti"** pre násobenie / „× (krát)" ✗ (= versus; ticho rozbil aritmetiku 10 × 20 = 200) → **„pri"**
  („desať za sekundu **pri** dvadsaťsekundovej generácii").
- **„prvotriedny"** pre *first-class* (programátorské) ✗ (= najvyššej kvality) → **„zabudovaný / natívny"**.
- **„čestná výhrada"** pre *honest caveat* ✗ (*čestný* = honourable) → **„poctivá výhrada"** (zrkadlí
  „úprimná brzda", Fáza 14 — *čestný* je opakovaný falošný priateľ pre honest/candid).
- **„pre každý povrch"** (per surface) ✗ → **„pre každý typ výstupu"**.
- **„rozdiel od AI"** (the AI delta) ✗ (parsuje sa ako rozdiel *voči* AI) → **„v čom je to s AI iné /
  špecifikum AI / rozdiel, ktorý vnáša AI"** (rodina AI-delta, Fáza 2).
- **„ťažký používateľ"** (heavy user) ✗ → **„nenásytný / mimoriadne náročný používateľ"**.
- **„menovka verzie"** / **„pohyblivý cieľ"** (version label / moving target) ✗ → **„označenie verzie" /
  „sa mení / pohyblivá méta"**.
- **„AWS má príbeh (X) slabý"** (story) ✗ → **„ponuka (X) je … slabá"**.
- **„X sa rodí"** (are born) ✗ → **„o X rozhoduje"**; **„na granularite X"** ✗ → **„na úrovni jednotlivých
  X"**; **„buildí / pushuje / pulluje"** ako próza ✗ → **„zostavuje / nahráva / sťahuje"** (EN len pre
  literálne `docker build/push/pull`).
- **„premávka"** (request/workload traffic) — **ponechané / sankcionované** (vedome namiesto „prevádzka",
  ktorá na týchto stránkach = *serving/prevádzka*; rámce sa nezamieňajú).

**§8 polotučné + em-dash + straight-quote (potvrdenie Fázy 2/6/10/12–18).** Celovetné/celoklauzové
zvýraznenia (all-caps `worker JE` / `Čo ti NEDÁ`) prevedené na kurzívu (`*je*` / `*nedá*`) — tlačový register,
nie krik. Em-dash metronóm: index ~2,4/100 slov, prehĺbenie ~2,1/100 slov (v sesterskom pásme). Zákaz
**„— ," = 0** na oboch. **Straight-quote checkpoint:** prozaická rovná `"` (U+0022) mimo kódu/frontmatteru/
Mermaid/YouTube = **0** (párovanie „…"). **ř/ě/ů = 0.** nbsp pred „%" a jednotkami (100 %, 30–60 s, 8 GPU).

**Odkazy (PRVÁ lekcia Časti III).** Časť I + II sú SK → plná SK cesta s `.md`: guardrails
„../../part-1-rag/cross-cutting/guardrails/index.md", observability index/prehĺbenie
„../../part-1-rag/cross-cutting/observability/index.md" a „…/deep-dive.md", tool-use
„../../part-2-agents/tool-use/index.md". Nepreložení **súrodenci Časti III** (cloud-platforms,
tooling-ecosystem, llmops) → **holá EN-fallback zložková cesta bez `.md`** („../cloud-platforms/" atď.) až do
ich landingu. Glosár „../../glossary.md"; v rámci lekcie „./index.md" / „./deep-dive.md". Index nesie
poznámku prehĺbenia s textom odkazu **„Priepustnosť a škálovanie" == deep-dive `sidebar_label` bajt-za-bajt**;
prehĺbenie NEMÁ video (EN ho nemá — čestné „nie") ani poznámku prehĺbenia. Frontmatter: index drží
`slug` + `title:"Serving — FastAPI + Docker"`; prehĺbenie `sidebar_position:2` + `sidebar_label:"Priepustnosť
a škálovanie"` + `title:"Serving — prehĺbenie"`. Mermaid: node IDs zachované, labely preložené a **quotované
`["…"]`/`{"…"}`** kvôli špeciálnym znakom (—, +, /, `<br/>`), edge-labely quotované; kódové identifikátory
v labeloch nedotknuté (`max_num_seqs`, `nvidia.com/gpu`, NVLink, 429/503, Retry-After). `_category_.json`
+ `current.json` (label „Serving — FastAPI a Docker") existovali z bootstrapu Časti III — nerekreované.

**Backlog — stav.** Glossary-flip backlog (Fáza 11/18) nezmenený + **pridané:** heslo Prefill/decode
„dekódovanie **vydáva**…" → „**generuje**…" (§1.5). Časť III nie je preložená → sesterský retrofit
„../cloud-platforms/" atď. na „…/index.md" príde, keď cieľ pristane (Fáza 11 konvencia).

**Pre lekciu Cloud AI platformy (odovzdanie):**
- Glosár už nesie sekciu „Production — cloudové platformy" (managed endpoint, model catalogue, data
  residency, provisioned throughput, **batch mode = „dávkový režim"** — Karta 6 význam (2), vendor lock-in,
  fine-tuning/SFT/DPO/RFT/LoRA/PEFT, model distillation, continued pre-training, managed agent runtime) —
  drž jeho smer termínu (väčšina kept-EN s glosom; „doladenie modelu", „dávkový režim", „rezervovaná
  priepustnosť").
- **Karta 6 význam (2) v cloud-platforms:** async API vrstva = **„dávkový režim"** (nie „batch"); serving
  scheduler „batch" ostal v Serving. Nezamieňať.
- „prenajať-či-vlastniť" (rent-vs-own) je most zo Serving do cloud-platforms — Serving ho otvára, cloud
  rozvádza; „on-demand (na požiadanie)" vs „provisioned throughput (rezervovaná priepustnosť)".
- Karta 1 (chyba vs zlyhanie), Karta 9 (strop), verb-by-object §1.5, em-dash metronóm + zákaz „— ,"
  + straight-quote checkpoint platia ďalej.
- Odkazy: SK existuje pre Serving (index + prehĺbenie) → mieri naň „../serving/index.md" / „…/deep-dive.md";
  na nepreložené llmops/tooling-ecosystem holou cestou; Časť I/II SK plnou cestou s `.md`.

**Stav:** Wave 3 lekcia 1 (Serving) redakčne uzavretá; SK ostáva **gated** (mimo plain buildu). Ďalej:
Wave 3 lekcia 2 — Cloud AI platformy.
