---
title: "Od vízie k overiteľným etapám"
sidebar_position: 1
---

# Cieľ, ktorý nevieš overiť, nie je plán

Prvá časť sa skončila pri jedinom obmedzení: [úzkym miestom pri softvéri vytváranom agentmi je kapacita overovania, nie generovanie](../part-1-foundation/verification-bottleneck.md). Druhá časť je odpoveďou na toto obmedzenie — predstavuje **cyklus**, ktorý naplno využíva lacné generovanie a vzácny zdroj, ľudskú kontrolu, sústreďuje presne tam, kde môže zmeniť výsledok. V tejto prvej lekcii sa cyklus začína, a to ešte pred prvým riadkom kódu: pri delení vízie na etapy. Nenápadný krok, ktorý rozhoduje o všetkom ďalšom, sa dá ľahko preskočiť: **každej etape daj podmienku dokončenia, ktorú vieš overiť bez toho, aby si agentovi musel veriť, že je hotová.** Etapa bez takejto podmienky nie je malou etapou. Nie je etapou vôbec.

## Etapu určuje podmienka dokončenia, nie krok

Prirodzeným impulzom je rozdeliť cieľ na *veci, ktoré treba urobiť*: vytvoriť kostru API, pridať autentifikáciu, pripojiť klienta. To je zoznam krokov, nie však plán, podľa ktorého už môžeš nechať pracovať agenta. Nič v ňom totiž nehovorí, kedy je krok naozaj *dokončený* a kedy agent iba oznámil, že ho dokončil. Agent ti povie, že pridal autentifikáciu. Plán musí vopred odpovedať na otázku: **ako to zistím bez toho, aby som sa ho pýtal?**

Jednotkou plánu preto nie je krok, ale **podmienka dokončenia** — konkrétna, kontrolovateľná skutočnosť, ktorá začne platiť, keď je etapa naozaj dokončená. „Autentifikácia je hotová“ je nádej. „Požiadavka bez platného tokenu dostane `401` a tu je test, ktorý to overuje“ je podmienka dokončenia. Rozdiel je v tom, či vieš dokončenie *potvrdiť*, alebo mu musíš *uveriť*. V cykle, kde je generovanie lacné a dôvera drahá, je podmienka dokončenia jednotkou dôvery — a etapy sú iba úseky medzi dvoma kontrolami, ktoré môžeš skutočne vykonať.

## Overiteľné má prednosť pred úsudkom

Nie všetky podmienky dokončenia majú rovnakú hodnotu. Piata lekcia prvej časti vymedzila rozdiel, ku ktorému sa tento kurz neustále vracia: [kontrolný mechanizmus je buď **výpočtový** — deterministický, rýchly a dôveryhodný (test, linter, kontrola typov, diff) — alebo **založený na úsudku**](../part-1-foundation/rules-that-hold.md), keď LLM posudzuje význam „nákladne a pravdepodobnostne“. Rovnaké rozdelenie platí aj pre podmienky dokončenia. „Všetky testy prejdú“ je výpočtová podmienka: neúspešný výsledok nemožno zmeniť presviedčaním. „Kontrolný model tvrdí, že kód vyzerá správne“ je podmienka založená na úsudku: model sa presvedčiť dá a pod správnym tlakom k tomu aj dôjde.

Uprednostni to, čo sa dá overiť. Ak má etapa k dispozícii iba podmienku dokončenia založenú na úsudku, považuj to za signál o samotnej *etape*, nielen o kontrole. Ak môžeš dokončenie etapy potvrdiť len tak, že požiadaš model, aby sa zaň zaručil, ešte si ju nerozdelil na dosť malú alebo konkrétnu časť. Najlepšia plánovacia otázka nie je „čo má agent vytvoriť ďalej?“, ale „čo je ďalšia vec, ktorej dokončenie dokážem za pár minút overiť niečím, čo mi nemôže klamať?“. Veľkosť etapy prispôsob *tomuto*.

## Antivzor: veľkosť etáp podľa sebaistoty modelu

Bežnou chybou je deliť prácu podľa toho, čo model zdanlivo zvládne na jeden sebaistý pokus — celú funkcionalitu, celý modul. Model sa na to sám *ponúkne* a jeho ponuka znie presvedčivo. Tým sa kontrola obracia naruby. Veľkosť etáp začne zodpovedať dosahu generátora namiesto tvojej schopnosti ich overiť a rozdiel medzi „vyzerá to hotové“ a „je to hotové“ rastie práve so závažnosťou dôsledkov. Birgitta Böckeler tú istú pascu opisuje priamo: ak agent dostane veľký, voľne ohraničený kus práce, premení [malú chybu na „4 používateľské príbehy s celkovo 16 akceptačnými kritériami“](https://martinfowler.com/articles/harness-engineering.html). Vzniknú formality, ktoré vyzerajú dôsledne, no jediná dôležitá vec — kontrola, ktorú môžeš skutočne vykonať — sa nikdy neobjaví (`REPORTED`, jej vlastná prax).

Potrebná disciplína je presne opačná: veľkosť kontroly nech určuje veľkosť etapy. Generovanie je také lacné, že rozdelenie funkcionality na šesť overiteľných etáp ťa na výstupe nestojí takmer nič a dá ti šesť príležitostí zachytiť problém, kým je ešte malý.

## Úzke miesto overovania vzniká už pri plánovaní

Pre druhú časť to nie je nič nové; ide o tézu prvej časti posunutú o krok skôr. „Overovanie je úzke miesto“ znie ako tvrdenie o *kontrole* — o niečom, čo robíš až po vzniku kódu. Najväčší vplyv však máš ešte predtým: **plán, ktorého etapy majú overiteľné podmienky dokončenia, vopred určuje, kde sa bude overovať a či môže overovanie uspieť.** Ak podmienky dokončenia vynecháš, úzke miesto neodstrániš, iba ho odložíš. Neskôr sa s ním stretneš celé a naraz v podobe hromady vygenerovaného kódu, pri ktorom nikto vopred neurčil spôsob kontroly. Najlacnejšie je vložiť overovanie priamo do štruktúry plánu.

## Dôkazy, poctivo ohodnotené

Táto oblasť je ešte len na začiatku a väčšina dôkazov si poctivo zaslúži hodnotenie `REPORTED`, nie `MEASURED`: praktici dochádzajú k podobným záverom, nejde však o kontrolovanú štúdiu. Túto zhodu sa napriek tomu oplatí pomenovať, pretože všetko ukazuje jedným smerom. Každá zverejnená skúsenosť s vývojom podľa špecifikácií a etáp, ktorá *uspela*, je **príbehom tvorby** — novej aplikácie alebo novej funkcionality. Takmer každá skúsenosť, ktorá *zlyhala*, je **príbehom údržby**, v ktorom sa plán stretol s existujúcou kódovou základňou, ktorá sa už od neho odchýlila. Praktický pokus Colina Eberhardta dospel zvnútra k rovnakému nepríjemnému záveru: všetky tieto formality pomáhajú najviac práve pri novej a ohraničenej práci, no v opačnom prípade [pôsobia ako „znovuobjavený vodopádový model“](https://blog.scottlogic.com/2025/11/26/putting-spec-kit-through-its-paces-radical-idea-or-reinvented-waterfall.html) (`REPORTED`).

Vyvrátiteľná predpoveď, podľa ktorej je tento kurz ochotný nechať sa posudzovať: **plánovanie podľa etáp obstojí ako technika pre jasne ohraničené prírastky, ale nie ako metodika rozvoja celých systémov.** Nie je to dôvod vynechať overiteľné etapy. Je to dôvod prispôsobiť ich veľkosť skutočnému prírastku, ktorý vieš overiť, a nedôverovať plánom, ktoré sľubujú, že vopred opíšu celý systém a tým ho privedú na svet.

:::tip[▶ Video]

<YouTube id="2ihEirLXeas" title="AI Agents + LLM Reasoning: Transforming Autonomous Workflows — IBM Technology" />

IBM ukazuje, ako agent rozloží cieľ na pracovný postup — teda plánovací krok, ktorému táto lekcia dáva disciplínu. Tu je podstatný rozdiel: postupnosť navrhnutá modelom ešte nie je postupnosťou etáp, ktoré vieš overiť.

:::

## Tri úrovne — jednotlivec · malý tím · podnik

Na každej úrovni platí rovnaký princíp: **etapu určuje podmienka dokončenia, ktorú vieš overiť, nie krok, ktorý vieš opísať.** Mení sa iba požadovaná nezávislosť kontroly a dôslednosť jej vynucovania.

- **Jednotlivec.** Podmienku dokončenia vieš za minútu skontrolovať pohľadom alebo spustiť — test, diff, stránku, ktorá sa načíta. Celá disciplína spočíva v tom, že etapu neoznačíš za dokončenú iba na základe tvrdenia agenta. *Čomu to zabraňuje:* premárnenému víkendu, počas ktorého si staval na etape, ktorá len „vyzerala“ hotová.
- **Malý tím.** Podmienky dokončenia sú zapísané v pláne a zdieľané, takže sa dvaja ľudia vopred zhodnú, čo pri každej etape znamená „hotovo“. *Čomu to zabraňuje:* etapa je podľa autora hotová, podľa kontrolóra nie — a zistí sa to až pri zlúčení, nie pri plánovaní.
- **Podnik.** Podmienka dokončenia je vynucovaná brána, ktorú vyhodnocuje preukázateľne nezávislá kontrola, nie riadok v dokumente, nad ktorým môže implementátor mávnuť rukou. *Čomu to zabraňuje:* etapám, ktoré sa vo veľkom samy osvedčujú, takže „hotovo“ potichu začne znamenať „človek, ktorý to vytvoril, tvrdí, že je to hotové“.

## Čo si odniesť

- Krok je niečo, čo treba urobiť; etapa je niečo, pri čom vieš potvrdiť dokončenie. Plánuj v etapách a každej daj **podmienku dokončenia** — kontrolovateľnú skutočnosť, ktorá začne platiť, keď je etapa naozaj hotová.
- Uprednostni **overiteľné** (výpočtové) podmienky dokončenia pred podmienkami **založenými na úsudku**. Ak môže dokončenie etapy potvrdiť iba model, ktorý sa zaň zaručí, zmenši alebo spresni etapu.
- Veľkosť etapy prispôsob kontrole, nie sebaistote modelu. Generovanie je lacné; šesť overiteľných etáp nestojí takmer nič a dáva ti šesť včasných príležitostí zachytiť problém.
- Toto je úzke miesto overovania presunuté do plánovania: plán s overiteľnými etapami vopred určuje, kde sa bude overovať a či môže overovanie uspieť.
- Poctivé hodnotenie: prevažne `REPORTED`. Spoločný signál — úspech sprevádza tvorbu, zlyhanie údržbu — je dôvodom ohraničiť etapy na skutočné prírastky, nie vopred špecifikovať celý systém.

**[Nové pojmy](../glossary.md#vision-to-stages)**: overiteľná etapa, podmienka dokončenia, overiteľný verzus na úsudku založený kontrolný mechanizmus, určovanie veľkosti etapy.
