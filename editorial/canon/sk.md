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

- Lekcie sú v **neformálnom jednotnom čísle „ty“**: „drž v hlave“, „keď nasadíš“, „dostaneš“, „zaembeduješ —
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
instruction hierarchy, PII, red-teaming, defence-in-depth, least privilege, ASR, tool poisoning, rug pull,
confused deputy, roots, sampling (MCP), elicitation, stdio, streamable HTTP, JSON Schema, structured output,
strict mode / Structured Outputs, constrained decoding, idempotency, tool-RAG, dynamic tool loadout,
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

**Termíny s povinným slovenským glosom pri prvom výskyte** (termín ostáva anglický, glos ho dekóduje): fine-tuning
„(doladenie modelu)“, guardrails „(bezpečnostné mantinely)“, grounding „(opretie odpovede o kontext)“, store
„(dlhodobá pamäť frameworku)“, OCR „(optické rozpoznávanie znakov)“, scale-to-zero „(škálovanie na nulu)“,
on-demand „(platba za tokeny)“, zero-shot „(bez trénovacích príkladov)“, backpressure „(ochrana pred
zahltením)“, load shedding „(zhadzovanie záťaže)“. V glosári smie kept-EN heslo niesť aj ustálený domáci
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
| dynamicky vybraná sada nástrojov | dynamic tool loadout | „loadout“ (herné) ✗; „dynamický súbor nástrojov“ ✗ („súbor“ = file). Termín ostáva kept-EN „dynamic tool loadout“ (§1.1) ako most; telo ide natívne |
| limit opakovaní; maximálny počet pokusov | retry budget | (zrkadlí „rozpočet krokov“; most `(retry budget)` raz; kept-EN len pre presne pomenovaný koncept) |
| vedľajší účinok | side effect | „sajd-efekt“ ✗ |
| viacvrstvová ochrana | defence-in-depth | (most; termín ostáva kept-EN, §1.1; „obrana do hĺbky“ v opisnej próze, §Fáza 2) |
| chyba počas behu; runtime chyba | runtime error | **„defekt v behu“ ✗; „chyba behu“ ✗** |
| kľúč idempotencie | idempotency key | (idempotency ostáva kept-EN, §1.1; „kľúč“ je natívny) |
| súbehová chyba | race condition | bare **„súbeh“ = concurrency, NIE chyba** (§1.3, blocklist). *(navrhované, čaká na kontrolu rodeným Slovákom — pozri poznámku pod tabuľkou)* |

Ustálené prijaté prevzatia, ktoré ostávajú (dev-úzus, ako „chunking“): **dashboard** (nie „nástenka“ ako
termín), **alert / alerting** (nie „upozornenie“ ako termín), **framework** (skloňovaný: frameworku,
frameworky). **Enterprise** ostáva latinkou iba vo vlastných menách a v ustálenom nálepkovom „enterprise
RAG“; v próze „podnikový, podnikové prostredie“. **zdieľať / zdieľaný / zdieľanie** — prísni normativisti ho
vedú ako bohemizmus (české *sdílet*), no v **ustálených technických spojeniach** je v slovenskom IT-úze
štandardné a **ponecháva sa**: „zdieľaná pamäť“, „zdieľaný objekt stavu“, „zdieľanie GPU“. Ako holé sloveso
mimo takého spojenia mu radšej vyhni („mať spoločnú verziu“, nie „zdieľať verziu“).

**Konvencie a zosúladenie s kept-EN (pilot „tool use“, #64 — reconciliácia so §1.1).** Kde sa pilotné
odporúčanie prekrýva s ustáleným kept-EN termínom, drží sa **kept-EN termín, natívny tvar je most/glos**:

- **strict mode** — projekt drží **jeden** tvar: **kept-EN „strict mode“** (už v §1.1 kept-EN; je to aj názov
  fičúry OpenAI „Structured Outputs“). „prísny režim“ smie stáť iba ako **jednorazový glos** pri prvom výskyte;
  **nemiešaj** „prísny/striktný/striktné“ ako názov termínu.
- **constrained decoding** — kept-EN (§1.1), glos prvého výskytu „(obmedzené dekódovanie)“; „obmedzené
  dekódovanie“ nie je samostatný názov termínu.
- **retry budget** — kept-EN len ako presne pomenovaný koncept; v tele natívne „limit opakovaní / maximálny
  počet pokusov“ (§1.2).
- **backoff** — kept-EN termín; glos „(postupné predlžovanie intervalu medzi pokusmi)“.
- **dry run** — pre zhodu s UI/dokumentáciou drž `dry-run`; v próze „skúšobné spustenie / režim nanečisto“
  (obe overené ako slovenské).
- **human-in-the-loop / HITL** — kept-EN (§1.1); v próze „schválenie človekom / človek v rozhodovacom procese“.
  **Nepoužívaj mechanické „človek v slučke“** ako predvolený preklad (§1.3, blocklist).
- **router** — most „router **(smerovač)**“ pri prvom výskyte, potom projektový termín; pozor, „smerovač“ môže
  evokovať sieťový hardvér — v rámci, kde hrozí zámena, uprednostni „router“ / projektový termín.

> **Navrhované, čaká na kontrolu rodeným Slovákom (nie ešte usadený kánon).** Tieto tvary sú **re-derivované
> z AI-recenzií s poškodeným kódovaním**, preto ich vedieme s výslovnou výhradou, kým ich neschváli rodený
> Slovák (rodená naturálnosť je ground truth):
> - **„súbehová chyba“** (race condition) — kolokačné overenie nevrátilo jasné slovenské doklady (dominuje
>   české „souběh“), takže je to **coinage na skúšobnej dobe**. Kým ho rodený Slovák nepotvrdí, ostáva ako
>   **usadený záložný tvar** už potvrdená figúra **„súbeh (race condition)“ s rozvíjajúcim glosom** („dve
>   súbežné volania siahnu na to isté a výsledok závisí od náhodného časovania“, §Fáza 2 — Figúry). Cieľ oboch
>   je rovnaký: bare „súbeh“ (= concurrency) sa **nesmie** použiť ako názov chyby.
> - **„postupné predlžovanie intervalu (medzi pokusmi)“** (backoff) je opisný glos, prirodzený, ale dlhý —
>   znenie tiež overí rodený Slovák. Všetky ostatné tvary vyššie (definícia/volanie/výsledok/výber nástroja,
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
- bare **„súbeh“** pre race condition → **„súbehová chyba“** / „súbeh (race condition)“ s rozvíjajúcim glosom
  (§1.2, §Fáza 2)
- **„striktný / neštriktný nástroj“** → drž kept-EN „strict mode“ (§1.2 konvencie)
- **„tool definition stojí tokeny“** — kalk „costs tokens“ + cudzia fráza ako podmet → „každá definícia nástroja
  zaberá tokeny“
- **„modelom čitateľný“** (kalk *model-readable*) → „formulované tak, aby to model pochopil“
- **„časovo ohraničený fakt“** (umelá nominalizácia) → „fakt, ktorý sa môže časom zmeniť“
- **„defekt v behu“** → „chyba počas behu / runtime chyba“ (§1.2)
- **„dynamický loadout“** → „dynamicky vybraná sada nástrojov“ (§1.2)
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
- POTVRDENÉ (dekódované pri prvom kontakte): **chyba ako prompt**; **fan-out / fan-in** v tvare „jeden ťah sa
  rozvetví na N … N výsledkov sa zloží späť“; **stála daň**; **cena kompilácie / kompilačná daň**;
  **bezpečnostná hranica**; **kruh sa uzatvára**; **súbeh (race condition)** — pod podmienkou, že glos v tele
  význam **rozvinie** („dve súbežné volania siahnu na to isté a výsledok závisí od náhodného časovania“), nie
  holé „(race)“.
- ODMIETNUTÉ (→ odmietnuté varianty): **„zápisy, ktoré zanechajú stopu“** (naivný čitateľ číta „stopu“ ako
  log/trace, nie nevratnosť) → nahradené **„zápisy s trvalým následkom“**; **„AI-delta“** ako holá menovka
  (nedekódovateľná bez angličtiny; „delta“ nie je slovenské slovo pre „rozdiel“) → v tele píš **„rozdiel,
  ktorý vnáša AI“**; obraz **fan-outu „pukne na N“** → nahradený „rozvetví sa na N“ (kontrolované vetvenie, nie
  prasknutie pod tlakom).

**Kept-EN doplnky.** **rate limit** vstupuje ako kept-EN termín s glosom pri prvom výskyte. **defence-in-depth**
(§1.1 kept-EN) smie v **opisnej próze** vystupovať aj natívne ako „obrana do hĺbky“, keď nie je pomenovaným
termínom stránky. Sloveso **„vydať“** (vydá text/zámer/volanie/výstup) je ustálený autorský tvar korpusu pre
„emit/issue“ — ponecháva sa; ak sa niekedy zjednocuje, náhrada je „urobiť/vygenerovať volanie“.

**Anglická veta v tele (systémový prompt) dostáva slovenský preklad v zátvorke.** Literálny reťazec, ktorý
čitateľ vkladá do promptu, ostáva doslovne po anglicky, ale hneď za ním nasleduje „(v preklade: …)“, aby ho
jednojazyčný slovenský čitateľ vedel prečítať.
