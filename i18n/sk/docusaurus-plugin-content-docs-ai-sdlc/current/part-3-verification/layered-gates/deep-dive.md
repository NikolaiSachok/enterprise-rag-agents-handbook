---
title: "Vrstvené brány — prehĺbenie"
sidebar_label: "Mutačné testovanie a poradie reťazca"
sidebar_position: 2
---

# Ako zmerať bránu a zoradiť reťazec

[Prvá časť](./index.md) ukázala, že slepé miesto brány vyplýva z jej mechanizmu a pokrytie vzniká vrstvením brán, ktoré zlyhávajú odlišne. Dve tvrdenia však zostali bez praktického dôkazu. Po prvé, dá sa *zistiť*, či brána vôbec niečo odhaľuje — odtiaľ pochádza téza: „Ak si nikdy nevidel, ako brána zlyhá pri zámerne vloženej chybe, vieš iba to, že mlčí.“ Po druhé, reťazec má správne *poradie* — mechanická, potom sémantická a napokon estetická kontrola. Táto časť obe tvrdenia konkretizuje: predstaví spôsob merania detekčnej sily a výpočet, z ktorého vyplýva poradie. Vo všetkom nadväzuje na prvú časť; rámec slepých miest ani rozmanitosť mechanizmov už neobhajuje, iba ich ďalej rozvíja.

## Pokrytie meria vykonanie; mutačné testovanie meria detekciu

Pasca pomenovaná v prvej časti — súbor so 100% pokrytím príkazov a bez jediného tvrdenia — nie je anomália. Presne tak totiž *pokrytie funguje*. Odpovedá na otázku „vykonal sa tento riadok počas testov?“, teda meria dosah testov. Nehovorí nič o tom, či test *overil správanie* daného riadka, hoci práve na tom záleží. Tieto dve veci môžu byť úplne oddelené: test, ktorý vykoná každý riadok a nič netvrdí, dosiahne 100% pokrytie a neodhalí nič.

Mutačné testovanie meria to, čo pokrytie zmerať nedokáže. Postup je mechanický: do testovaného kódu zámerne vlož malú chybu — **mutanta** — a spusti bránu. Ak brána zlyhá, mutant bol *zabitý*. Ak prejde, mutant *prežil*. Preživší mutant predstavuje triedu chýb, voči ktorej je brána preukázateľne slepá; nejde už o podozrenie, ale o praktickú ukážku. **Mutation score** — podiel zabitých mutantov zo všetkých — je poctivejšia metrika než pokrytie: nemeria, akej časti kódu sa brána dotkla, ale akú časť dokáže skutočne chrániť.

Mutačné operátory tvoria slovník malých chýb. Niekoľko príkladov ukáže princíp v praxi:

- **Odstránenie príkazu** — vymaž riadok. Ak si test nevšimne, že príkaz chýba, nič o ňom netvrdí.
- **Mutácia hranice** — zmeň `<` na `<=` alebo `>` na `>=`. Ide o chyby posunu o jedna, ktoré sa opakovane objavujú v registri únikov z prvej časti, tentoraz však vložené zámerne.
- **Mutácia návratovej hodnoty a konštanty** — vráť pevnú hodnotu, obráť boolean alebo zmeň konštantu. Takto odhalíš tvrdenia, ktoré kontrolujú tvar, ale nie hodnotu.

Keď tieto operátory spustíš nad testovacou sadou, preživší mutanti vytvoria jednoznačný zoznam práce: každý z nich je konkrétna úprava, ktorú brána nezachytila. Disciplína z prvej časti — pomenuj slepé miesto a vytvor preň ďalšiu bránu — tak dostáva vstup generovaný nástrojom, nie odkázaný na pamäť tímu.

## Register únikov spustený smerom dopredu

[Register únikov](../escape-ledger.md) z prvej časti čerpá z chýb, ktoré sa dostali do produkcie. Zo svojej podstaty reaguje až spätne, pretože únik nemožno zaznamenať skôr, než nastane. Mutačné testovanie používa rovnakú disciplínu opačným smerom. Namiesto čakania, kým ti určitá trieda chýb spôsobí problém a až potom pre ňu pridáš bránu, chybu *vyrobíš*, overíš, či ju niektorá brána zachytí, a potrebnú bránu doplníš ešte pred nasadením. Záznam minulých problémov sa tým mení na zdroj ďalších detektorov.

Tento pohľad zároveň odhaľuje strop samotnej metódy — ten istý, aký má register únikov. Mutačné operátory tvoria **zoznam detektorov** — presne ten zdroj skreslenia, pred ktorým varovala prvá časť, iba posunutý o úroveň vyššie. Nástroj vkladá triedy chýb, ktoré jeho autori dokázali vyjadriť: zmeny hraníc, odstraňovanie príkazov či zámeny operátorov. Ak určitú triedu chyby nevyjadruje žiadny operátor — napríklad úplne chýbajúcu obrazovku alebo sémantický kontrakt, ktorý nikto nezapísal ako pravidlo — nevznikne mutant. Brána sa na takú chybu netestuje a jej slepé miesto zostane neviditeľné. Vysoké mutation score dokazuje iba to, že brány zachytia mutácie, pre ktoré *niekto napísal operátor*. O triedach mimo dosahu operátorov nevypovedá nič; práve tie má odhaľovať [hľadanie hrubým detektorom](../escape-ledger.md). Mutačné testovanie sprísňuje existujúce brány proti chybám, ktoré si vieš predstaviť. Neodhalí, na čo si vôbec nepomyslel.

## Ekvivalentné mutanty a skutočné náklady

Mutačné testovanie nie je zadarmo, a to z dvoch dôvodov; kto ich prehliada, metódu zvyčajne raz vyskúša a potom ju opustí.

**Ekvivalentný mutant** je teoretický problém. Niektoré mutácie zmenia kód, ale nezmenia jeho správanie. Taký mutant sa od pôvodného programu nedá rozlíšiť, takže ho nemôže zabiť žiadny test — niet čo odhaliť. Mutation score sa tým znižuje bez toho, aby bola chyba v testovacej sade. Navyše sa vo všeobecnosti nedá automaticky rozhodnúť, či preživší mutant predstavuje skutočnú medzeru alebo je ekvivalentný; problém je nerozhodnuteľný a v praxi musí každý taký prípad posúdiť človek. Preto sa neusiluj o 100%. Sleduj smer vývoja skóre v čase a jednotlivých preživších mutantov posudzuj iba tam, kde sa daný kód oplatí chrániť.

**Výpočtové náklady** sú praktický problém. Naivná implementácia spustí celú testovaciu sadu raz pre každého mutanta, takže tisíc mutantov znamená tisíc behov testovacej sady. Mutačné testovanie preto patrí tam, kam predchádzajúce lekcie zaradili každú drahú kontrolu: nie ku každému stlačeniu klávesu, ale k podstatnému kódu a do zámerne spúšťaného auditu. Rovnaká [logika vrstvenia](./index.md), ktorá drží sémantickú bránu mimo najčastejšie používanej cesty, tam nepustí ani mutačné testovanie. Je to pravidelný audit detekčnej sily brán, nie samostatná brána pri každom commite.

## Poradie reťazca vyplýva z nákladov

Prvá časť určila poradie mechanická → sémantická → estetická kontrola a označila ho za súčasť návrhu. Dôvodom tohto konkrétneho poradia nie je vkus, ale náklady.

Reťazec zoraď podľa **nákladov na znehodnotenie nadväzujúcej práce**, od najlacnejšie znehodnotiteľnej kontroly. Ide o závislosť, nie o preferenciu: oprava správania mení činnosť obrazovky a môže ovplyvniť aj jej výslednú podobu. Estetické posúdenie vykonané pred ustálením správania preto možno bude treba zopakovať. Ak najprv hodnotíš vzhľad a až potom funkciu, riskuješ, že estetickú kontrolu zaplatíš dvakrát. Ako prvú spusti kontrolu, ktorej opravy najvýraznejšie zasiahnu do všetkých nasledujúcich. Drahšie posudzovanie potom prebehne až nad výsledkom, ktorý sa už prestal meniť.

Aj druhé kritérium vedie rovnakým smerom, preto medzi nimi nevzniká rozpor. Brány zoraď tiež podľa **nákladov na jeden beh**, od najlacnejšej, aby drahá brána skúmala iba to, čo prešlo všetkými lacnejšími kontrolami. Deterministický grep je okamžitý a stojí zlomok centa; sémantická kontrola vyžaduje volanie modelu; človek je vzácny zdroj z lekcie o [kontrole pri veľkom objeme](../review-at-volume.md). Ak grep spustíš prvý, model ani človek neminú svoj rozpočet na chybu, ktorú mohla bezplatná kontrola dávno zachytiť. Obe kritériá dávajú rovnaký výsledok: lacné a základné kontroly pred drahými a závislými.

Z výslovne pomenovaného princípu vyplývajú dva dôsledky. Ak drahá brána zachytáva základnú triedu chýb, vytvor pre ňu lacnejšiu bránu skôr v reťazci; drahú bránu neposúvaj dopredu. Najprv spusti lacnú náhradu a drahou kontrolou potvrď iba to, čo prežilo. Brána, ktorej opravy nikdy neznehodnotia nasledujúcu prácu — napríklad záverečná kontrola formátovania — patrí na koniec bez ohľadu na cenu jedného behu, pretože na jej výsledok už nič nenadväzuje.

## Čo si odniesť

- **Pokrytie meria vykonanie; mutačné testovanie meria detekciu.** Testovacia sada môže vykonať každý riadok a nič netvrdiť — 100% pokrytie, nulová detekcia. Poctivejšou metrikou je mutation score, teda podiel zabitých mutantov zo všetkých.
- **Preživší mutant je preukázané slepé miesto**, nie iba podozrenie: konkrétna chyba, ktorú brána prepustila, zámerne vygenerovaná namiesto spätne zapamätanej.
- Mutačné testovanie je **register únikov spustený smerom dopredu** — chybu vyrobíš a bránu pridáš ešte pred nasadením danej triedy chýb. Preberá však skreslenie zoznamu detektorov: testuje iba triedy, ktoré vyjadruje niektorý operátor, nikdy nie tie, na ktoré si nepomyslel.
- **Ekvivalentné mutanty aj výpočtové náklady sú skutočné.** Skóre používaj ako ukazovateľ smeru, nie ako cieľ, ktorý treba maximalizovať. Mutačné testovanie spúšťaj ako pravidelný audit brán, nie pri každom commite.
- **Poradie reťazca určujú náklady:** zoradenie podľa nákladov na znehodnotenie práce aj podľa nákladov na jeden beh vedie rovnakým smerom. Preto spúšťaj mechanickú kontrolu pred sémantickou a sémantickú pred estetickou; neskoršie a drahšie posudzovanie tak prebehne až nad výsledkom, ktorý sa prestal meniť.

**[Nové pojmy](../../glossary.md#layered-gates)**: mutačné testovanie, mutant (zabitý / preživší), mutation score, mutačný operátor, ekvivalentný mutant, pokrytie a detekcia, poradie podľa nákladov na znehodnotenie práce, poradie podľa nákladov na jeden beh.
