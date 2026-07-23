---
title: "Secrets"
sidebar_position: 1
---

# Čo agent nikdy nedrží, nemôže uniknúť

Prvé tri časti sa odohrávali vnútri slučky — plánovanie, rozklad na úlohy, generovanie, brány. IV. časť je pôda, na ktorej tá slučka stojí: **platforma**, teda produkčná vrstva, ktorá rozhoduje o tom, koľko škody dokáže napáchať jedna chyba. Otvára ju najstaršie pravidlo v obore, lebo agenti mu potichu zväčšili platnosť. Znie takto: **secret sa nikdy nedostane k agentovi ani do repozitára** — teda tajný prístupový údaj: kľúč, token, heslo, certifikát. Ľudský vývojár, ktorý by produkčný kľúč nikdy nevložil do zdrojového súboru, je jeden úzky a dôveryhodný kanál. Programovací agent je kanál široký a množiaci: prečíta celý strom, čokoľvek prečíta, nesie so sebou do volania cudzieho modelu, zapisuje vlastné uvažovanie — a potom koná. Každé z toho je nové miesto, odkiaľ môžu prihlasovacie údaje uniknúť. Stará rada „nekomituj secrety“ má dnes druhú plochu, väčšiu než tá prvá: kontextové okno agenta.

## Invariant a dve plochy, ktoré chráni

Invariant je jedna veta a s rozsahom sa nemení: **hodnota secretu sa nedostane ani do repozitára, ani do kontextu agenta.** Dve plochy, dva odlišné dôvody.

**Repozitár je trvalý.** História gitu sa iba dopĺňa; secret komitnutý v pondelok a zmazaný v utorok je aj v utorkovej histórii, v každom clone, v každom forku. Zmazanie nie je náprava — súbor vyzerá čisto, ale prihlasovacie údaje v histórii ďalej platia. Nie je to otázka pravdepodobnosti, ale stavby systému: komitnutý secret uzavrie jediná vec, a to zrušenie jeho platnosti.

**Kontext agenta** je kanál, ktorý nemáš celý pod kontrolou. Všetko, čo agent pri práci prečíta, odchádza poskytovateľovi modelu, môže sa tam uchovať alebo zapísať do logu a môže sa vrátiť aj späť von — do vygenerovaného súboru, do opisu pull requestu, do riadka logu, do komentára. Človek si secret prečíta a zabudne ho; agent si ho prečíta a môže ho *zopakovať* tam, kam si sa nikdy nepozrel. Secret teda nesmie ležať nikde, kam agenta smeruješ — a v praxi to znamená, že v kóde nemá byť vôbec.

## Za behu odkazuj, nikdy nevkladaj

Invariant drží v každom rozsahu jediný mechanizmus: secrety žijú *mimo* kódu ako *odkazy* a do bežiaceho procesu sa rozbaľujú až za behu. Kód číta názov — `DATABASE_URL`, `STRIPE_KEY` — nikdy nie doslovnú hodnotu. Hodnotu vloží do prostredia procesu niečo, čo agent ani repozitár nikdy nevidia. Presne to je princíp konfigurácie, ktorý [manifest twelve-factor](https://12factor.net/config) formuluje ako prísne oddelenie konfigurácie od kódu (`ASSERTED`, a takmer všeobecná prax): agent dostane konfiguračnú plochu, ktorú na svoju prácu potrebuje — *názvy* vecí, ktoré prepája — a nedostane tú tajnú, ktorú nepotrebuje.

To „niečo iné“ sa škáluje čisto:

- **Lokálne** súbor `.env`, ktorý má git nastavený tak, aby ho ignoroval, a agent tak, aby ho nečítal; do prostredia sa načíta pri štarte procesu.
- **V CI** premenné prostredia, ktoré úlohe podá úložisko secretov danej platformy — a ktoré sa cez `echo` nikdy neocitnú v logu.
- **V produkcii** broker alebo trezor, ktorý procesu podá prihlasovacie údaje pri štarte a po jeho skončení mu ich vezme.

Vo všetkých troch prípadoch agent manipuluje s *odkazom* a nikdy s *hodnotou*. V tom je celý trik: čo si nikdy nedržal, to nemôžeš prezradiť, komitnúť ani vložiť do promptu.

:::tip[▶ Video]

<YouTube id="BqekRTA6VCs" title="Secrets Management: Secure Credentials & Avoid Data Leaks — IBM Technology" />

IBM prechádza správu secretov ako samostatnú disciplínu — uloženie, vkladanie, rotácia. Pozri sa naň optikou tejto lekcie: každý mechanizmus, ktorý ukazuje, existuje preto, aby *hodnota* nepadla na dve plochy, ktoré flotila programovacích agentov robí nebezpečnými — do repozitára a do kontextu agenta.

:::

## Keď secret aj tak unikne: skenuj, blokuj, rotuj

Prevencia nie je plán, a tak platforma skladá tie isté dva mechanizmy, aké III. časť použila pri [návrhu brán](../part-3-verification/layered-gates.md). **Deterministický** skener secretov — grep podľa vzorov a entropie, napríklad gitleaks alebo natívne skenovanie poskytovateľa — je lacná brána, ktorá doslovný kľúč zachytí ešte pred zápisom do histórie. Voči prihlasovacím údajom v nezvyčajnom tvare je slepý presne tak, ako je grep slepý voči parafráze, takže sa skladá s revíziou; na bežný prípad je však rýchla doslovná brána presne to pravé.

Poctivým ho držia dve pravidlá. Po prvé, **blokovať musí server, nielen pre-commit hook.** Lokálny hook je odporúčanie — agent, ktorý spustí `git commit --no-verify` alebo hook jednoducho nemá zapojený, prejde okolo neho bez zaváhania. Ochrana vynútená na strane vzdialeného repozitára (push protection) je brána, ktorú agent preskočiť nedokáže. Po druhé, **uniknutý secret sa rotuje, nemaže.** História je trvalá, takže úprava súboru nenapraví nič; expozíciu uzavrie jedine to, že pôvodné prihlasovacie údaje pri zdroji zrušíš a vydáš nové. Prepis histórie je upratovanie, nie náprava — počítaj s tým, že hodnotu niekto zachytil vo chvíli, keď odišla na push.

Rozsah problému je skutočný a stojí za presné pomenovanie. Správa *State of Secrets Sprawl* od GitGuardian uvádza, že sa vo verejných commitoch každý rok nájdu milióny nových uniknutých prihlasovacích údajov a že toto číslo rastie spolu s objemom commitov písaných s pomocou AI (`REPORTED`). Čítaj to cez pravidlo kurzu o dodávateľoch: GitGuardian skenovanie secretov predáva, takže to číslo je tvrdenie o *rozsahu problému, ktorý jeho vlastný produkt rieši* — smerom vierohodné, no nie nezávislé meranie. A práve o ten smer ide: strojová rýchlosť commitovania tlačí šírenie secretov nesprávnym smerom, a preto musí blokovanie bežať automaticky.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Invariant platí v každom rozsahu — **hodnota secretu sa nedostane ani do repozitára, ani k agentovi** — a ako predpovedá pravidlo blast radius (rozsah škôd) z úvodu, čím bližšie sedia prihlasovacie údaje k skutočnej škode, tým kratšie musia žiť. Medzi úrovňami sa mení mechanizmus, ktorý invariant vynucuje.

- **Soloista.** Súbor `.env`, ktorý git ignoruje a ktorý sa načíta do prostredia, plus pre-commit skener secretov, ktorý si naozaj nainštaluješ. *Akému zlyhaniu to predchádza:* kľúč vložený do konfiguračného súboru, ktorý agent následne komitne do verejného repozitára — najčastejší spôsob, akým zo samostatného projektu odíde platný prístup.
- **Malý tím.** Secrety vkladané z úložiska CI alebo platformy, push protection vynútená na strane repozitára a spísaný postup rotácie. *Akému zlyhaniu to predchádza:* jeden zdieľaný kľúč s dlhou platnosťou koluje v súbore `.env` cez chat a platí ešte mesiace po odchode človeka, ktorý ho vydal.
- **Enterprise.** Spravovaný trezor vydáva krátkodobé, dynamicky generované prihlasovacie údaje pre jednotlivé workloady, s auditom a automatickou rotáciou — údaje stratia platnosť skôr, než odcudzená kópia stihne byť na niečo dobrá. *Akému zlyhaniu to predchádza:* statické, široko vymedzené prihlasovacie údaje, ktorých blast radius po úniku pokrýva každý systém, kam dosiahnu, a organizácia sa o tom dozvie až pri spätnej analýze incidentu.

## Čo si odniesť

- Invariant je v každom rozsahu tá istá jedna veta: **hodnota secretu sa nedostane ani do repozitára, ani do kontextu agenta.** Agenti druhú plochu zväčšujú — čítajú, prenášajú, logujú, reprodukujú — takže staré „nekomituj secrety“ je dnes menšia polovica pravidla.
- Hodnotu udržíš mimo tak, že v ruke držíš iba **odkaz**: kód číta názov a hodnotu vloží do procesu až za behu niečo, čo agent ani repozitár nevidia. Uniknúť nemôže to, čo si nikdy nedržal.
- Zlož deterministický skener s revíziou, blokovanie vynúť **na serveri** — lokálny hook je odporúčanie a agent ho preskočí — a každý únik rieš pravidlom **rotovať, nie mazať**, lebo história gitu je trvalá.
- Škáluj mechanizmus, nie invariant: `.env` v `.gitignore` → secrety vkladané z CI spolu s push protection → trezor s krátkodobými prihlasovacími údajmi pre jednotlivé workloady. Čím bližšie secret sedí k blast radius, tým kratšie musí žiť.

**[Nové pojmy](../glossary.md#secrets)**: invariant secretov, oddelenie konfigurácie od kódu, odkaz namiesto vloženej hodnoty, vkladanie za behu, skenovanie secretov, push protection, rotácia namiesto mazania, krátkodobé prihlasovacie údaje.
