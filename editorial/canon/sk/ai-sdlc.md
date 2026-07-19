# AI SDLC term ledger (SK)

The **living** term ledger for the AI SDLC course in Slovak. It records this course's term decisions —
kept-EN vs native form, casing, bridge glosses, rejected variants — the way `rag.md` does for RAG. It grows
with the course: every new lesson seeds its new terms here and settles them during native authoring.

**Load with `_language.md`.** When authoring this course, load `_language.md` (the shared Slovak language
rules — anti-bohemism, calque templates, verb-by-object, typography, register, bridge, bold, figure
probation) **plus this ledger** as your standing context. The language rules are course-independent; the term
decisions below are this course's own.

## Governance + cross-course peek protocol

> **Cross-course term consistency — peek, don't load.** When authoring this course, load ONLY `_language.md` + this ledger as standing context. For a term that plausibly overlaps a sibling course (shared AI-engineering vocabulary — agent, prompt, token, context, eval, guardrail, retrieval…), do a TARGETED, read-only lookup in the sibling ledger(s): if a decision exists and the sense matches, REUSE it verbatim and cite it — do not re-coin. If the sense genuinely differs, FLAG for a human — do not silently fork. Never edit a frozen sibling ledger (`rag.md`). Loading a whole sibling ledger as priming context is prohibited — that is the pollution this split prevents.

## Settled terms — Part I

Settled during the Part I canon bootstrap from the **de-jargoned** EN labels (the six academic coinages were
simplified per PART-1-BRIEF's Register ruling; community terms-of-art kept as-is). Slovak developer speech
**keeps more English than Russian** — kept-EN wins wherever the community says the English word; native forms
are decided from the EN meaning, never by literal translation, and pass the anti-bohemism gate (§1.3). Suspect
collocations were **web-verified** (a pair returning only Czech hits is a bohemism → rejected). The grade
tokens `MEASURED` / `REPORTED` / `ASSERTED` stay kept-EN, code-styled, with a one-time gloss
„(namerané / hlásené / tvrdené)".

### Intro

| EN term | EN gloss | SK decision |
|---|---|---|
| Verification bottleneck | the binding constraint: generation is cheap, checking is not; throughput is gated by verification capacity. | **native — „úzke miesto overovania"** (most *(verification bottleneck)* pri prvom výskyte). `overovanie` = verification (potvrdené SK, SDLC fáza). **Web-overené / BOHEMIZMUS ZACHYTENÝ:** „úzke hrdlo" vracia prevažne české zásahy (cs.wikipedia, anycoders.cz) — **odmietnuté** ako CZ-ťahnúce; „úzke miesto" je doložene slovenské (SK slovník vývoja softvéru). Malým v tele vety. |
| The loop closes on production | the feedback edge must return from live operation to planning; ending at internal QA is a pipeline, not a loop. | **native — veta „slučka sa uzatvára na produkcii"** (nie jednoslovný termín). `slučka` = loop (REUSE `rag.md`: slučka agenta = „slučka"; „okruh" ✗ zamietnuté). „produkcia". |
| Human router | the human's role above the loop: guardrail and judgment at named checkpoints, not a stage inside it. | **figúra „človek-smerovač" — ADOPT (owner), NA SKÚŠOBNEJ DOBE.** **Vždy sa uvádza pri prvom výskyte cez natívny HITL-termín** — kept-EN „human-in-the-loop" s glosom „(schválenie človekom / človek v rozhodovacom procese)" (REUSE `rag.md`; **NIKDY „človek v slučke"**), potom figúra **„človek-smerovač"** nesie obraz (zrkadlí RU «человек-маршрутизатор»; `smerovač` = router — repurpose siete na človeka je zámerná metafora). Na skúšobnej dobe — kontroluje sa studeným prechodom. **Odmietnuté:** „človek-rozcestník" (rozcestník = pasívna smerová tabuľa, nesmeruje). |
| Substrate → **Foundation** | Part I's subject: project memory, rules-as-code, artifacts-as-the-only-interface. | **native — „základ"** (de-jargón: substrate → foundation). **Odmietnuté:** „substrát" (nepriehľadná kalka); „základňa" ako alternatíva prípustná. |
| Tier lens | the SOLOIST/SMALL-TEAM/ENTERPRISE reading applied to every mechanism. | **native — „tri úrovne zrelosti"** (soloista · malý tím · enterprise); krátka forma „tri úrovne"; `úroveň` = tier. Most *(three maturity tiers)*. **Web-overené:** „úroveň/model zrelosti" je doložene slovenské (CMM „model zrelosti", Power Platform „model zrelosti prijatia") → „tri úrovne zrelosti" znie prirodzene po slovensky, nie česky. EN-label: "the three tiers" / "the three maturity tiers" (coinage „tier lens" zrušený, zmysel zachovaný). **Odmietnuté (owner):** „optika troch úrovní" (v RU un-Russian; SK zrkadlí plain); „šošovka úrovní" (mechanický prenos). |
| Proof-vs-capability | close to production a control is about what it *prevents*; far from it, about what you can *prove*. | **NIE termín — plain phrasing** (de-jargón; „gradient" zrušený). Poviem vetou: „bližšie k produkcii je kontrola o tom, čomu zabráni; ďalej o tom, čo vieš dokázať". Nezavádzať ako pomenovaný termín. |

### The verification bottleneck

| EN term | EN gloss | SK decision |
|---|---|---|
| Proxy metric | any measured stand-in for value (merged PRs, commits, LOC, time-on-task). | **hybrid — „proxy metrika"** (kept-EN `proxy` + „metrika"). **Odmietnuté:** „náhradná metrika" (dobré ako jednorazový glos, nie termín). |
| Denominator choice | "% of code written by AI" depends entirely on the denominator; same telemetry → 28.7% vs 70.6%. | **native — „voľba menovateľa"** (`menovateľ` = denominator, SK). Most netreba. |
| Benchmark-to-production gap | the collapse from offline benchmark score to real-SDLC applied rate (Meta 68%→19.7%). | **hybrid — „priepasť medzi benchmarkom a produkciou"**; `benchmark` kept-EN + SK skloňovanie (benchmarkom). |
| Self-assessment gap | developers cannot judge AI's effect on their own speed; error ~40pp, wrong even about the sign. | **native — „skreslenie sebahodnotenia"** (`sebahodnotenie` — SK). **Odmietnuté / BOHEMIZMUS:** „sebehodnocení" (CZ tvar). |
| Tech debt on credit | velocity gained early, paid back later as sustained complexity that drives the slowdown. | **native — „technický dlh na úver"** (de-jargón: complexity debt → tech debt on credit). „technický dlh" — štandard SK; „na úver" — doložene SK. |

### Reading the evidence

| EN term | EN gloss | SK decision |
|---|---|---|
| Evidence grade / the ladder | the `MEASURED` / `REPORTED` / `ASSERTED` classification; grades inherited, never upgraded. | **native — „stupeň dôkazu" / „rebrík dôkazov"** (`rebrík` = ladder, SK). Tokeny `MEASURED` / `REPORTED` / `ASSERTED` — **kept-EN, code-styled, invariant**; jednorazový glos „(namerané / hlásené / tvrdené)". |
| Can't-be-checked | a claim whose weakness is that nobody can check it, distinct from tested-and-failed. | **NIE termín — plain „nedá sa overiť"** (de-jargón; „nefalzifikovateľné, nie vyvrátené" zrušené). **Odmietnuté:** „nefalzifikovateľné tvrdenie" (akademizmus). |
| Citation laundering | a distorted claim passed along until it looks sourced. | **Razená figúra sa NEMANDÁTUJE (owner: DROP).** Význam sa vyjadruje **priamo**: „skreslené tvrdenie, ktoré sa opakuje, kým nevyzerá ako odkaz na štúdiu". Rodený pisateľ smie použiť idióm, iba ak je naozaj prirodzený. **Odmietnuté ako mandát:** „vypranie pôvodu". |
| Evidence that cuts against whoever published it | a result that cuts against its publisher's incentive; the strongest evidence class in a COI-heavy field. | **NIE termín — vyjadriť PRIAMO (owner: právna kalka, un-Russian; bol to aj de-jargon miss v EN — rovnaké liečenie ako citation-laundering).** Myšlienka: výsledok je nevýhodný pre samotný zdroj, a práve to mu dodáva váhu — Anthropic AI predáva, no jeho autor zverejňuje jej hranicu, takže to bolo proti ich obchodnému záujmu. Hodnotí DÔKAZ, NIE je to chvála Anthropicu — vendor-neutral (žiadne „pripísať k dobru"). Príklad: „výsledok je nevýhodný pre samotný zdroj … bolo to proti ich obchodnému záujmu, a práve preto možno meraniu veriť viac". **Odmietnuté ako termín:** „zistenie proti vlastnému záujmu", „nález proti záujmu" (kalky finding). |
| Conflict of interest, stated inline | naming the conflict of interest (who's paying) as part of the finding, not a footnote. | **native — „konflikt záujmov, uvedený priamo"** (de-jargón z positionality); `konflikt záujmov` — štandard SK. **Odmietnuté:** „pozicionalita" (nepriehľadné). |

### Preparation over model

| EN term | EN gloss | SK decision |
|---|---|---|
| Preparation-over-model | setup/scope moves agent success more than model choice (dotnet/runtime 38.1%→69%). | **native — maxima „príprava je dôležitejšia než model"**. |
| The gate-not-the-agent misread | reading a low revert/failure number as agent quality when it's a property of the review gate. | **native — „zásluha brány, nie agenta"**; `brána` = gate (natívne SK; kánon ho používa v meta-próze „faktová brána", „grep-brána"). |
| Controllable scope | starting agent work where the problem is bounded, with a human approval gate at the requirements boundary. | **native — „zvládnuteľný rozsah (úlohy)"**. **Odmietnuté:** „kontrolovateľný skoup" (žargón-kalka). |
| Architecture-first (with a loop) | investing in design before code, while accepting even sound architecture needs iteration. | **native — „najprv architektúra (so slučkou)"**. |
| Harness staleness | every scaffold component encodes an assumption about model limits that expires as models improve. | **kept-EN — „zastarávanie harnessu"**; `harness` kept-EN + SK skloňovanie (harnessu; §3 kept-EN termíny berú SK koncovky). Glos „harness (obväzba/lešenie agenta)" pri prvom výskyte. **Odmietnuté:** holé „lešenie" ako termín. |

### Project memory & tiering

| EN term | EN gloss | SK decision |
|---|---|---|
| Project memory | durable, agent-readable knowledge that persists across runs; the fix for agent amnesia. | **native — „pamäť projektu"** (`pamäť` — SK; **BOHEMIZMUS-strážca:** nie „paměť"). |
| Amnesia | agents retain nothing between sessions except artifacts on disk. | **native — „amnézia"** (figúra „múdry priateľ s amnéziou"). |
| Context tax / "length is a subscription" | the MEASURED >20%-per-turn cost of standing context; every line is re-sent and billed. | **native — „priebežné náklady kontextu" / „stála réžia kontextu"** — **KRITICKÝ REUSE ZÁKAZU:** SK **NESMIE** použiť figúru „daň" (`rag.md` §1.4 blocklist: „stála daň ✗ → stála réžia / priebežné náklady — figúra „daň" vyradená"). Povinná plain-dvojica „každý riadok sa účtuje v každom kroku"; „dĺžka je predplatné". `context rot` — **kept-EN**. |
| Over-compliance | agents follow instructions "thoroughly but unnecessarily," burning cost without improving outcomes. | **native — „nadmerná poslušnosť"**. **Odmietnuté:** „nad-compliance" (žargón). |
| Scar archive | the reasoning behind each locked decision, appended after every fixed bug class. | **figúra „archív jaziev" — NA SKÚŠOBNEJ DOBE**, glos pri prvom výskyte + most k odvetviu „blameless postmortem". `jazva` = scar (SK). Potvrdí/vyškrtne najbližší studený prechod. |
| Knowledge tiering | organizing memory by rate-of-change / distance-from-focus so only the relevant tier loads. | **native — „vrstvenie znalostí"** (`vrstvenie` = layering); „rozvrstvenie znalostí" alternatíva. |
| Detail tiers (map / contract / blueprint) | the three-level tiering of an artifact by its relation to the current task. | **native — „úrovne detailu (mapa / kontrakt / nákres)"** (de-jargón: „LOD" zrušený). Vlastné značky DefinitiveSpec (LOD_0/1/2) sa citujú ako názov toho nástroja, nie ako termín kurzu. **Odmietnuté:** „LOD rebrík". |
| Hot set / cold set | the always-loaded one-screen non-negotiables vs the on-demand retrieved detail. | **kept-EN, term-of-art KEEP — „hot set / cold set"** + glos „(horúca/studená sada)" pri prvom výskyte (SK drží EN pre komunitný termín). |
| Load detail on demand | loading only name+description until the body is needed, then paging it in. | **native — „načítať detail na požiadanie"** (de-jargón z progressive disclosure). **Odmietnuté:** „progresívne odhaľovanie" (okrem jedného glosovaného výskytu). |
| Artifact overload | artifacts generated faster than human review or model context can absorb, with no lifecycle discipline. | **native — „zahltenie artefaktmi"**; `artefakt` — SK. |

### Rules that hold

| EN term | EN gloss | SK decision |
|---|---|---|
| Executable rule / rules-as-code | a constraint enforced by the harness or CI which the model cannot bypass. | **native — „vykonateľné pravidlo" / „pravidlá ako kód"**. **BOHEMIZMUS-strážca:** „vykonatelné" (CZ) ✗. |
| "An instruction is not a control" | a rule stated in natural language is a suggestion, not an enforced boundary. | **native — maxima „pokyn nie je kontrola" / „pokyn nie je zábrana"** (úvodzovky/kurzíva podľa §8). |
| Hook vs skill | a hook is deterministic harness enforcement; a skill is model judgment it may ignore. | **kept-EN — „hook verzus skill"** (REUSE `rag.md`: hooks/callbacks v kept-EN registri). Glos „hook (deterministický zásah harnessu) verzus skill (rada, ktorú model môže ignorovať)". |
| The gate defines the artifact | an agent optimises exactly what you check; anything unchecked does not exist. | **native — maxima „brána určuje výsledok" / „čo kontroluješ, to dostaneš"**; `brána` — REUSE. |
| Reward hacking / gaming the gate | satisfying the checked metric without doing the requested work. | **kept-EN — „reward hacking"** (community term-of-art, KEEP) + glos „(hranie na metriku odmeny: prejsť kontrolou bez vykonania práce)". **Odmietnuté:** „hackovanie odmeny" (doslovná kalka). |
| Blast radius | the scope of damage a confused or compromised agent can reach. | **kept-EN — „blast radius"** (term-of-art, KEEP) + glos „(rozsah škôd)". **Web-overené:** natívne „polomer zásahu" v SK IT nemá doklad (vracia len bleskozvody/fyziku) → kept-EN je správne. |
| Policy-as-code | enforced-in-the-pipeline, audited rules (the enterprise form of executable rules). | **kept-EN — „policy-as-code"** (term-of-art, KEEP) + glos „(politiky ako kód)". |
| Least privilege | the agent can reach exactly the resources its task needs and no more. | **REUSE — „princíp najnižších oprávnení (least privilege)"** (`rag.md` §1.2/Fáza 4/6 — vlastnícke rozhodnutie „najnižších", nie „najmenších"; **NEOTVÁRAŤ**). |
| Drift / rule rot | the decay of a rule corpus without a staleness mechanism. | **Tri RÔZNE významy — pozri „Kartu významov: drift pravidiel" nižšie (owner).** Skrátene: „drift kontextu" (context drift) · „drift pravidiel" (pravidlá sú tie isté, drift má ich VÝKLAD kvôli context rot) · „zastarávanie pravidiel" (pravidlá ZASTARALI a treba ich zmeniť kvôli novým faktom/prístupom). Pisateľ volí podľa významu. REUSE kept-EN „drift" — `rag.md` (SK register drží „drift" kept-EN); RAG-význam (drift vstupu/modelu) je samostatný, štvrtý. |
| Consistency owner | the role accountable for reconciling a rule corpus so two files can't prescribe opposite things. | **native — „vlastník konzistencie" / „zodpovedný za konzistenciu"** (`vlastník` — SK, používa `rag.md`). |

## Karta významov: drift pravidiel (owner ruling — tri rôzne významy)

Formulácia vlastníka **doslovne** (owner ruling je v RU; SK zrkadlí významy natívne), aby pisateľ volil termín
podľa významu, nie podľa slova:

> - **„drift kontextu"** — context drift (OK as-is).
> - **„drift pravidiel"** — the rules stay the SAME but their INTERPRETATION drifts due to context rot.
> - **„zastarávanie pravidiel"** — the rules become OBSOLETE and should be CHANGED due to new facts / approaches / practices.
> These are DIFFERENT senses (interpretation-drift vs obsolescence).

Použitie v kurze:
- Lekcia 5, „hnitie pravidiel kvôli context rot" (pravidlá sa nemenili, ale model ich vykladá inak) → **„drift pravidiel"**.
- Lekcia 5, „pravidlá treba aktualizovať pre nové fakty/prístupy" → **„zastarávanie pravidiel"**.
- „drift kontextu" — samostatný význam (okno/história driftuje), nemiešať s dvoma vyššie.
- Štvrtý, RAG-význam „drift" (drift vstupu/korpusu/modelu, `rag.md`) — tiež samostatný; nezlievať s korpusom pravidiel.
- **Web-overené:** „zastarávanie" je slovenský tvar (doklad „Zastarávanie kódu"); CZ „zastarávání" ✗ odmietnuté.

## Vlastníkom rozhodnuté sporné termíny (denník)

- **Human router — ADOPT.** Figúra „človek-smerovač" prijatá (na skúšobnej dobe), s povinným uvedením cez
  human-in-the-loop pri prvom výskyte. Pozri riadok Intro.
- **Citation laundering — DROP.** Razená figúra zrušená; význam sa vyjadruje priamo. Pozri riadok „Reading the evidence".
- **Tier lens → „tri úrovne zrelosti" (owner).** „optika troch úrovní" zrušená; krátka forma „tri úrovne". Web-overené ako prirodzené SK (model/úroveň zrelosti). EN vyrovnaný na "the three tiers / three maturity tiers"; RU — «три уровня зрелости». Riadky Intro aj nadpis úrovní v Lekcii 1 aktualizované.
- **Against-interest finding — DROP termínu (owner).** Právna kalka zrušená vo všetkých troch jazykoch; význam sa vyjadruje priamo a vendor-neutral (hodnotí dôkaz, nie chvála Anthropicu). Pozri riadok „Reading the evidence".


## Pilot Intro+L1 — rozhodnutia tohto behu (2026-07-16)

- **Separation of duties — „oddelenie právomocí"** (native; most *(separation of duties)* pri prvom výskyte). Podnikový princíp nezávislej revízie „kritik nie je autor" na enterprise úrovni Lekcie 1. Zrkadlí RU «разделение обязанностей». (Alternatíva „oddelenie zodpovedností" prípustná; „segregácia povinností" odmietnutá ako kalka.)
- **Priemyselné štandardy (enterprise):** pevné názvy/veľké písmená — „SLSA Source L4 „Two-Party Review"" (OpenSSF), „DORA RTS, čl. 17" (EU 2024/1774, nezávislosť schvaľujúcej a vykonávajúcej funkcie). Stupeň: `MEASURED` pre výskum schvaľovania zmien + nariadené regulátorom.
- **Figúry — verdikt:** „chrbtica práce" (spine) — POTVRDENÁ (natívny idióm, dekóduje pri prvom kontakte). „niť, nie etapa" — PONECHANÁ NA SKÚŠOBNEJ DOBE (dekóduje, ale opiera sa o následný obraz tkania; najbližší milestone potvrdí/vyškrtne). „technický dlh na úver" — POTVRDENÁ.
- **blast radius:** stránky používajú natívne „miesto škody (blast radius)"; ledger drží kept-EN „blast radius (rozsah škôd)" ako kotvu — SPORNÉ, ponechané na rozhodnutie vlastníka (naivný čitateľ „miesto škody" dekóduje bezchybne).
