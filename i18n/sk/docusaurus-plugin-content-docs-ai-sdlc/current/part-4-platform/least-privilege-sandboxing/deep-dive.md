---
title: "Najnižšie oprávnenia a sandbox — prehĺbenie"
sidebar_label: "Vnútro sandboxu: vrstvy izolácie"
sidebar_position: 2
---

# Sandbox zvnútra

[Prvá časť](./index.md) stanovila cieľ návrhu agenta, ktorý číta nedôveryhodný text: nie dokonalý filter podstrčených pokynov, ale natoľko malý priestor, aby ani *úspešný* podstrčený pokyn nespôsobil trvalú škodu. Vymenovala tri parametre — súborový systém, egress, prostredie — a uviedla, že ich vynucuje platforma. Teraz sa pozrieme dovnútra. Čo jednotlivé hranice v skutočnosti tvoria, čo útočník získa úspešným útokom na vyššiu vrstvu, čo ho zastaví na tejto vrstve a kadiaľ skutočné sandboxy nenápadne prepúšťajú. Celou stránkou sa nesie princíp z [prehĺbenia o viacúrovňových bránach](../../part-3-verification/layered-gates/index.md): žiadnej hranici nedôveruj samostatne a každú navrhni s predpokladom, že tá pred ňou občas zlyhá — [defense in depth (hĺbková ochrana)](./index.md), tentoraz použitá na schopnosti namiesto detekcie.

## Vrstvy izolácie, hranica po hranici

Štyri hranice zoradené od najslabšieho predpokladu. Čítaj ich ako vrstvy: každá existuje preto, lebo vrstvu nad ňou možno prekonať.

**Izolácia procesu a namespace (menného priestoru).** Agent dostane vlastný pohľad na systém — vlastné pripojenia súborových systémov, tabuľku procesov a sieťový stack — zvyčajne v podobe containera (kontajnera). To je vonkajší múr, no tímy často prehliadajú jeho zásadné obmedzenie: container zdieľa s hostiteľom **kernel**, takže oddeľuje procesy, ale sám osebe nepredstavuje pevnú bezpečnostnú hranicu proti zneužitiu chyby v kerneli. Bežný proces uzavrie spoľahlivo; útočníka, ktorý sa dostane ku kernelu, sám nezastaví. Práve preto je *prvou* vrstvou, nie jedinou.

**Filtrovanie systémových volaní.** Každá podstatná operácia procesu — otvorenie súboru, nadviazanie sieťového spojenia či spustenie ďalšieho procesu — prechádza volaním do kernelu. Filter syscallov (systémových volaní), na Linuxe **seccomp**, obmedzí, ktoré volania smie proces vôbec vykonať. Ani ľubovoľný kód spustený v sandboxe sa tak nedostane k operácii, ktorú filter zakazuje. O účinnosti filtra rozhoduje princíp **default-deny (predvolene zakázať)**: povoľ malú množinu volaní potrebnú na úlohu a všetky ostatné odmietni. Nespoliehaj sa na blocklist známych nebezpečných volaní ani na to, že si ich vymenoval všetky — ide o rovnaký princíp uzavretého sveta, aký prvá časť použila pri oprávneniach.

**Obmedzenie súborového systému.** Koreňový súborový systém iba na čítanie, jeden zapisovateľný dočasný adresár a — čo nesie najväčšiu časť ochrany — **žiadny mount (pripojenie), cez ktorý možno dosiahnuť na secrety hostiteľa, iné projekty alebo riadiaci socket container runtime**. Zapisovať sa dá presne do pracovného priestoru úlohy a nikam inam. Tu sa pravidlo z predchádzajúcej lekcie premieta do fyzického usporiadania: ak sandbox nedokáže prihlasovacie údaje prečítať, úspešný podstrčený pokyn ich nedokáže exfiltrovať.

**Riadenie egressu.** Sieťový allowlist vynucuje proxy, cez ktoré agent komunikuje; nespolieha sa na to, že agent poslúchne. Ak môže agent nadviazať spojenie iba s registrom balíkov a endpointom modelu, nedokáže odoslať tvoj repozitár ľubovoľnému hostiteľovi bez ohľadu na pokyn, ktorému uveril. Egress tvorí **hranicu exfiltrácie** — poslednú vrstvu, vďaka ktorej situácia „agent prečítal niečo, čo nemal“ nemusí mať následky, pretože dáta nemá kam odoslať.

## Model hrozieb kladie každej hranici jednu otázku

Hranica má význam iba voči konkrétnemu útoku. Preto model hrozieb pomenuj výslovne pre každú vrstvu. Pýtaj sa: *ak podstrčený pokyn úplne ovládne vrstvu vyššie, čo tým útočník získa a čo ho zastaví tu?*

- Podstrčený pokyn prinúti agenta **spustiť ľubovoľný kód** → izolácia procesu zabráni tomuto kódu vstúpiť do procesného priestoru hostiteľa.
- Kód sa pokúsi o **privilegovanú operáciu** → seccomp odmietne príslušný syscall.
- Pokúsi sa **prečítať secret alebo iný projekt** → v súborovom systéme neexistuje mount, cez ktorý by sa k nim dostal.
- Pokúsi sa **odoslať získané dáta** → egress neponúka cestu k cieľu.

Takto zapísané vrstvy predstavujú [rozmanitosť mechanizmov](../../part-3-verification/layered-gates/index.md) uplatnenú na schopnosti: každá vrstva nedokáže zachytiť iný druh útoku a ochranu poskytuje až ich skladba, nie ktorýkoľvek múr samostatne. Zároveň odhalia lacnú chybu — jednu zdanlivo pevnú vrstvu, za ktorou už nič nie je. Spevnený container s úplne otvoreným egress allowlistom síce zabráni úniku procesu, ale exfiltrácii nechá voľnú cestu.

## Kadiaľ sandboxy prepúšťajú

Príčiny zlyhaní nie sú nijako nezvyčajné. V každom prípade niekto nenápadne odstránil jednu hranicu, zvyčajne pre pohodlie a bez predstavy o možnom útoku.

- **Pripojený socket container runtime.** Keď do sandboxu cez bind-mount pripojíš riadiaci socket container runtime, všetko vnútri získa možnosť spustiť nový container bez obmedzení — úplný únik priamo cez hlavný vchod. Táto chybná konfigurácia je dobre známa práve preto, že veľmi láka nástroje, ktoré potrebujú spravovať containery (`REPORTED`, bežné zistenie v odporúčaniach pre bezpečnosť containerov).
- **Príliš široký egress allowlist.** Ak kvôli jednej službe povolíš celý rozsah cloudovej platformy alebo CDN, znova otvoríš cestu na exfiltráciu: rovnaký rozsah môže sprostredkovať požiadavku ďalej na ľubovoľný cieľ.
- **`--privileged` alebo priveľa capabilities (oprávnení kernelu).** Ak sandboxu udelíš široké oprávnenia kernelu len preto, aby fungovala jedna vec, naraz rozložíš hranice seccompu aj namespace. Je to obdoba zdieľaného všemocného tokenu z prvej časti, iba na úrovni sandboxu.
- **Voľne dostupné prihlasovacie údaje v sandboxe.** Secret v prostredí izolovaného procesu popiera zmysel celej ochrany: sandbox obmedzuje, kam agent *dosiahne*, no prihlasovacie údaje, ktoré si mu odovzdal, už má v rukách. Na hranici sandboxu platí [invariant z prvej časti](./index.md).
- **Cache zdieľaná medzi spusteniami.** Zapisovateľná cache alebo stavový adresár opakovane používaný rôznymi úlohami umožňuje jednému spusteniu ovplyvniť nasledujúce. Oproti sieti ide o pomalší a nenápadnejší kanál, na ktorý sa pri zabezpečení všetkého ostatného ľahko zabudne.

## Náklady a chyba, ktorá znehodnotí celú ochranu

Sandbox nie je zadarmo: predlžuje spúšťanie, vyžaduje údržbu obrazov a politík a sťažuje ladenie, pri ktorom budeš často hovoriť „mimo sandboxu to funguje“. Záver z prvej časti stále platí — hranica vynucovaná platformou odstráni celú triedu zásahov namiesto toho, aby ich iba usmerňovala — no dva druhy zlyhania zmenia sandbox na bezpečnostné divadlo.

Prvým je **drift**, teda [zastarávanie pravidiel](../../part-5-scale-governance/drift-and-rot.md) prenesené na politiky. Keď profil seccompu alebo egress allowlist prestane zodpovedať skutočným potrebám úlohy, ľudia ho začnú „len na odblokovanie práce“ rozširovať o jednu výnimku za druhou, až napokon neobmedzuje nič. Politika sandboxu potrebuje vlastníka a pravidelnú revíziu rovnako ako korpus pravidiel.

Druhým je **nereprodukovateľnosť**. Ručne zostavený a neverzionovaný sandbox, ktorý dokáže obnoviť iba jeden človek, nie je kontrola — je to stroj, ktorý je dnes zhodou okolností nakonfigurovaný bezpečne. Obmedzenia musia byť definované ako kód a zakaždým zostavené rovnakým spôsobom. Až potom bude tvrdenie „agent beží v izolácii“ vlastnosťou systému, nie opisom jedného notebooku. Rovnakú latku kurz používa pri všetkom, čo označuje za kontrolu.

## Čo si odniesť

- Sandbox tvorí **sústava hraníc**, pričom každá ráta so zlyhaním tej predchádzajúcej: izolácia procesu, filter syscallov, obmedzenie súborového systému a egress. Ochranu poskytuje ich skladba — rozmanitosť mechanizmov uplatnená na schopnosti.
- **Container sám osebe oddeľuje procesy, ale nie je pevnou bezpečnostnou hranicou** — s hostiteľom zdieľa kernel, preto patrí na začiatok skladby a nikdy nesmie zostať jedinou vrstvou.
- **Model hrozieb stanov osobitne pre každú hranicu:** pri každej vrstve pomenuj, čo útočník získa úspešným podstrčeným pokynom vo vrstve nad ňou a čo ho zastaví tu. Tak odhalíš lacnú chybu v podobe jediného pevného múru bez ďalšej ochrany.
- Sandboxy **prepúšťajú cez hranice odstránené pre pohodlie** — pripojený socket container runtime, široký egress allowlist, `--privileged`, voľne dostupné prihlasovacie údaje vnútri či cache zdieľaná medzi spusteniami.
- Sandbox je kontrolou iba vtedy, keď má **vlastníka, ktorý bráni driftu, a jeho obmedzenia sú definované ako kód**. Ručne zostavený, neverzionovaný a postupne rozširovaný sandbox je dnes bezpečný stroj, nie hranica, na ktorú sa môžeš spoľahnúť.

**[Nové pojmy](../../glossary.md#least-privilege-and-sandboxing)**: izolácia procesu a namespace, container ako hranica izolácie verzus bezpečnostná hranica, filtrovanie syscallov (seccomp), default-deny, obmedzenie súborového systému, egress proxy / hranica exfiltrácie, model hrozieb pre každú hranicu, únik z containera (pripojený socket container runtime), drift sandboxu, obmedzenia ako kód.
