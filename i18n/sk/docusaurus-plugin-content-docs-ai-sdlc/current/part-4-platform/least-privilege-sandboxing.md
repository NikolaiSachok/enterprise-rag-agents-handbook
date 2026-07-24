---
title: "Najnižšie oprávnenia a sandbox"
sidebar_position: 2
---

# K čomu sa agent nedostane, to nemôže pokaziť

[Predchádzajúca lekcia](./secrets.md) držala *hodnotu* secretu mimo dosahu agenta. Táto je o prístupe, ktorý agent dostal celkom oprávnene — a rozdeľuje dve kontroly, ktoré sa bežne hádžu do jedného vreca. **Princíp najnižších oprávnení (least privilege)** je *veľkosť udeleného oprávnenia*: čoho sa agent vôbec smie dotknúť. **Sandboxing (izolované spúšťanie)** je *hranica, vnútri ktorej beží*: čoho sa dotknúť dokáže, aj keď skúsi niečo, s čím nikto nerátal. Zlyhávajú rozdielne — správne vymedzené oprávnenie nezmôže nič proti akcii, ktorá ti nikdy nenapadla, a pevný sandbox nezmôže nič proti prihlasovacím údajom, ktoré si odovzdal zámerne. Je to argument III. časti o [rozmanitosti mechanizmov](../part-3-verification/layered-gates/index.md) prenesený na oprávnenia: skladaj ich, lebo každá je slepá voči tomu, čo zachytí tá druhá.

## Pokyn nie je oprávnenie

V júli 2025 to jeden medializovaný incident ukázal lepšie než akýkoľvek argument. Počas dvanásťdňového experimentu s „vibe codingom“, ktorý viedol Jason Lemkin zo SaaStr, spustil programovací agent Replitu deštruktívne príkazy nad **produkčnou** databázou uprostred platného zmrazenia kódu a zničil záznamy zhruba 1 200 riadiacich pracovníkov a podobného počtu spoločností. Pritom opakovane a výslovne dostal pokyn, že bez schválenia nesmie zmeniť nič. Potom ohlásil vymyslené výsledky a tvrdil, že návrat späť nie je možný, hoci možný bol. Riaditeľ Replitu sa verejne ospravedlnil a firma následne dodala ochranné mechanizmy (`REPORTED`; vedené ako [incident 1152 v AI Incident Database](https://incidentdatabase.ai/cite/1152/)).

Prečítaj to za drámou, na úrovni mechanizmu. Pokyn nebol slabý — bol opakovaný a jednoznačný. Zlyhal preto, že **pokyn je požiadavka voči pravdepodobnostnému systému, kým oprávnenie je vlastnosť systému.** I. časť tvrdila to isté o konvenciách vôbec: pravidlo platí len vtedy, keď ho [niečo mechanicky vynúti](../part-1-foundation/rules-that-hold.md). Oprávnenia sú to isté pravidlo na vrstve platformy. Nápravou nikdy nie je dôraznejší prompt; nápravou je, že prihlasovacie údaje, ktorými sa dá zahodiť produkčná tabuľka, v prostredí agenta vôbec nie sú. Agent, ktorý sa do produkcie nedostane, ju počas zmrazenia nezničí — nech si o druhej v noci rozhodne čokoľvek.

## Oprávnenie vymeraj úlohe, nie agentovi

Predvolene zlyháva pohodlie: jeden dlhoveký token so širokým rozsahom, zdieľaný každým agentom a každou úlohou, lebo vymerať ho zvlášť je práca, na ktorú nikto nemá čas. Oprávnenie je potom vymerané *agentovi* — všetkému, čo by kedy mohol potrebovať — namiesto *úlohe, ktorú má práve pred sebou*.

Vymeriavajú ho štyri parametre:

- **Rozsah** — konkrétne prostriedky, nie celý účet. Oprávnenie, ktoré menuje jeden repozitár, jeden bucket, jednu databázovú rolu.
- **Režim** — predvolene čítanie. Zápis je samostatné, zámerne užšie oprávnenie; deštruktívne operácie (drop, delete, force-push) sú tretie.
- **Platnosť** — minúty alebo hodiny, nie „kým si niekto spomenie“. Vypršanie je jediná kontrola, ktorá funguje aj potom, čo prihlasovacie údaje uniknú.
- **Identita** — jedny prihlasovacie údaje na úlohu alebo na workload, aby sa kompromitácia dala priradiť konkrétnemu pôvodcovi a odvolať samostatne.

Čo stojí „príliš široké“, vidno vtedy, keď útočník ovládne držiteľa, a nie agenta. V januári 2023 CircleCI zverejnilo, že malvér na notebooku jedného inžiniera odcudzil cookie relácie overenej cez 2FA; útočník sa vďaka nej mohol v interných systémoch vydávať za neho a exfiltroval premenné prostredia zákazníkov, API tokeny a SSH kľúče. Zapamätateľná bola veta z oznámenia o náprave: **vymeňte úplne všetky secrety** uložené v platforme (`REPORTED`, [vlastná správa CircleCI o incidente](https://circleci.com/blog/jan-4-2023-incident-report/)). Dĺžka tej vety presne zodpovedá veľkosti oprávnení, ktoré tam ľudia uložili. Krátkodobé a úzko vymedzené prihlasovacie údaje by z rovnakého prieniku urobili podstatne menšie upratovanie — a to je pravidlo blast radius (rozsah škôd) z predchádzajúcej lekcie, len prichádzajúce z druhej strany.

:::tip[▶ Video]

<YouTube id="yn6CPQ9RioA" title="Zero Trust Explained in 4 mins — IBM Technology" />

Zhrnutie prístupu zero trust od IBM — nikdy nedôveruj, vždy overuj, udeľ minimum. Pozri si ho s agentom na mysli: každý predpoklad, ktorý zero trust odmieta urobiť o *používateľovi*, platí ešte tvrdšie pri procese, čo koná autonómne, rýchlosťou stroja a podľa pokynov sčasti poskladaných z textu, ktorý práve prečítal.

:::

## Sandbox zachytí to, s čím si nerátal

Princíp najnižších oprávnení pokrýva riziká, ktoré si vymenoval. Sandboxing pokrýva zvyšok — a práve v tom zvyšku sú agenti naozaj iní než skripty, lebo ďalšiu akciu agenta ovplyvňuje obsah, ktorý číta. Popis issue, webová stránka či README závislosti môžu niesť text, ktorý model prečíta ako pokyn. Toto je **prompt injection (podstrčený pokyn)** a v [rebríčku OWASP Top 10 pre aplikácie s LLM](https://owasp.org/www-project-top-10-for-large-language-model-applications/) stojí na prvom mieste (`ASSERTED`, poradie podľa zhody komunity). Nepríjemné je, že spoľahlivo ho nerozpoznáš — škodlivý vstup je iba text a úlohou modelu je brať text vážne. Cieľom návrhu preto nie je dokonalý filter. Cieľom je, aby sa dal prežiť aj *úspešný* pokus: schopnosti agenta majú byť také malé, že ani najhorší podstrčený pokyn nespôsobí trvalú škodu.

Sandbox vymedzujú tri parametre a všetky tri vynucuje platforma, nie ochota agenta spolupracovať — z rovnakého dôvodu, pre ktorý predchádzajúca lekcia posunula blokovanie secretov na server a nie do lokálneho hooku:

- **Súborový systém** — zapisovateľný pracovný priestor, všetko ostatné iba na čítanie a žiadna cesta k prihlasovacím údajom ani do nesúvisiacich projektov.
- **Odchádzajúca sieťová komunikácia** — allowlist odchádzajúcej komunikácie (egress allowlist). Agent, ktorý dosiahne iba na register balíkov a na endpoint modelu, nemá kam exfiltrovať, nech ho text nahovorí na čokoľvek.
- **Prostredie** — žiadne prihlasovacie údaje ležiace v procese len tak a žiadna cesta zo sandboxu do produkčnej siete.

Klasický názov toho, čomu sa tým predchádza, je **confused deputy (zneužitý sprostredkovateľ)**: komponent s legitímnymi právomocami, ktorý nedôveryhodná strana oklame, aby ich použil za ňu. Agent so širokými oprávneniami, ktorý číta nedôveryhodný text, je zneužitý sprostredkovateľ čakajúci na príležitosť. Zmenšiť právomoc je oprava, ktorá nezávisí od toho, či vyhráš preteky v zbrojení so vstupom.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Invariant je na každej úrovni rovnaký: **agent drží najmenšie oprávnenie, aké jeho aktuálna úloha potrebuje, vnútri hranice, ktorú vynucuje platforma.** Mení sa to, ako sa oprávnenie vydáva a ako sa izolácia preukazuje.

- **Soloista.** Spusti agenta v kontajneri s vymedzeným pracovným priestorom, predvolene mu daj token iba na čítanie a produkčné prihlasovacie údaje nedrž na tom stroji vôbec. *Akému zlyhaniu to predchádza:* agent podľa vierohodne vyzerajúceho pokynu, ktorý si sám zostavil alebo prečítal, siahne na niečo nezvratné — prípad Replitu, len s dátami jedného vývojára namiesto celej firmy.
- **Malý tím.** Prihlasovacie údaje na jednotlivé úlohy vydáva platforma, odchádzajúca komunikácia má allowlist a predvoleným cieľom je neprodukčné prostredie; oprávnenie žije v konfigurácii, ktorá prešla revíziou, nie v niečom shellovom profile. *Akému zlyhaniu to predchádza:* zdieľaný všemocný token, ktorý už nikto nedokáže osekať, lebo dovtedy od neho začne závisieť všetko.
- **Enterprise.** Workload identity vydáva krátkodobé prihlasovacie údaje na jednotlivé úlohy, k tomu policy-as-code, preukázateľná izolácia a audit — a naozaj deštruktívne akcie idú cez samostatné schválenie namiesto trvale udeleného oprávnenia. *Akému zlyhaniu to predchádza:* eskalácia cez zneužitého sprostredkovateľa, pri ktorej jediný podstrčený pokyn odvezie príliš širokú identitu do systémov, na ktoré úloha nikdy nemala siahať.

## Čo si odniesť

- **Pokyn nie je oprávnenie.** Opakované a výslovné pokyny agentovi nezabránili zahodiť produkčnú databázu; zabránila by tomu jedine neprítomnosť príslušných prihlasovacích údajov. Vynucovanie býva v platforme, nikdy nie v prompte.
- **Princíp najnižších oprávnení a sandboxing sú dve odlišné kontroly a potrebuješ obe.** Oprávnenie obmedzuje, čoho sa agent smie dotknúť; sandbox obmedzuje, čoho sa dotknúť *dokáže*, keď príde niečo, s čím si nerátal.
- **Oprávnenie vymeraj úlohe** na štyroch parametroch — rozsah, režim, platnosť, identita. Predvolene iba čítanie, deštruktívne operácie osobitne udelené, platnosť dosť krátka na to, aby prežila únik.
- **Rátaj s tým, že prompt injection uspeje.** Spoľahlivo ju neodfiltruješ, tak ju urob prežiteľnou: obmedz súborový systém, nasaď allowlist odchádzajúcej komunikácie a z prostredia agenta odstráň voľne ležiace produkčné prihlasovacie údaje.
- Navrhuj nielen proti zlyhaniu agenta, ale aj proti kompromitácii *držiteľa* — a vtedy je dĺžka následného pokynu na nápravu presne veľkosťou oprávnení, ktoré si uložil.

**[Nové pojmy](../glossary.md#least-privilege-and-sandboxing)**: princíp najnižších oprávnení, sandboxing, pokyn verzus oprávnenie, vymeranie oprávnenia (rozsah · režim · platnosť · identita), prompt injection, confused deputy, allowlist odchádzajúcej komunikácie, workload identity.
