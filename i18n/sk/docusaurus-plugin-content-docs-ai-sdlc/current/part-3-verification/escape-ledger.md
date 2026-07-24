---
title: "Register únikov"
sidebar_position: 2
---

# Únik je údaj o bráne, nielen o chybe

V [Lekcii 1](./layered-gates/index.md) sme zostavili reťazec brán, ktorých mechanizmy majú rôzne slepé miesta. Táto lekcia je o chybách, ktoré napriek tomu prejdú celým reťazcom — pretože sa to nevyhnutne stane. Žiadny reťazec nepokrýva všetko. Každý má medzeru, na ktorú jeho mechanizmy nedosiahnu, a poctivá otázka neznie, či niečo unikne, ale čo *urobíš* s chybou, ktorá unikla. Stačí malý krok, ktorý nerobí takmer nikto: keď sa chyba dostane do produkcie, zaznamenaj, **ktorá brána ju mala zachytiť, ale nezachytila** — a potom túto bránu oprav tak, aby už rovnaká trieda chýb nemohla uniknúť rovnakým spôsobom. Únik je meradlom tvojej detekčnej vrstvy. Ak ho zahodíš, zostane z neho len chyba, ktorú si opravil. Ak ho zaznamenáš, získaš jediný dôkaz, ktorý ti ukáže, kde má reťazec slepé miesto.

## Záznam v registri

Analýza bez hľadania vinníka skúma, čo v systéme umožnilo zlyhaniu prejsť, nie kto urobil chybu. Register únikov uplatňuje rovnaký prístup na *brány*, nie na riešenie incidentov. Jeho základom je jeden riadok:

- **Trieda chýb** — nie konkrétna chyba, ale trieda, do ktorej patrí. „Posun o jedna v parseri dátumov“ je konkrétna chyba; „vstupy s hraničnými hodnotami sa nikdy netestujú“ je trieda chýb. A práve triedu dokáže brána zachytiť.
- **Ktorá brána ju mala zachytiť** — uveď konkrétnu bránu v reťazci, ktorá má túto triedu na starosti. Ak ju nemá na starosti žiadna brána, práve to je zistenie: táto trieda je mimo celého reťazca.
- **Prečo ju nezachytila** — jednou vetou pomenuj slepé miesto. Takmer vždy ide o vlastnosť *mechanizmu*, presne ako sme opísali v [Lekcii 1](./layered-gates/index.md): brána, ktorá mala chybu zachytiť, to zo svojej podstaty nedokáže alebo pre danú triedu nemá nijaký detektor.
- **Premena na kontrolu** — nový detektor, test alebo pravidlo, ktoré už danú triedu pokrýva, spolu s bránou, do ktorej pribudlo. Ak únik iba opravíš, nič ťa nenaučí. Ak ho *premeníš na kontrolu*, zmeníš celý reťazec.

To je celý artefakt. Soloistovi stačí jeden riadok v tabuľke; v enterprise prostredí môže ísť o evidovanú chybu s určeným vlastníkom. Náklady sú zanedbateľné a prínos sa postupne násobí: každý únik natrvalo odstráni jeden spôsob, akým môžu chyby prejsť cez brány.

## Ako úniky vyzerajú v praxi

Takto vyzerali úniky vo verifikačnom reťazci, ktorý som prevádzkoval v produkcii — išlo o automatizovaný reťazec šiestich brán, po ktorom nasledovala ľudská vizuálna kontrola, teda ten istý reťazec, ktorý sme znázornili v [Lekcii 1](./layered-gates/index.md). Počas jeho životnosti sa približne **sedem rôznych tried chýb dostalo až k človeku alebo používateľovi, hoci prešli všetkými automatizovanými bránami.** Každý zaznamenaný únik odhalil skutočné slepé miesto:

- Triedu **porušení pravidiel interakcie**, ktoré dokázal postrehnúť iba človek pri používaní UI — zachytila ju až vizuálna kontrola, automatizovaný reťazec nikdy. Následne sme ju *premenili na pravidlo* a pridali do súboru pravidiel ako explicitne kontrolovanú podmienku.
- Triedu chýb súvisiacich s **pomerom strán a orezaním**, ktorú nenapadlo vyhodnocovať v žiadnom priechode — pomery vykresleného výstupu voči zdroju sa jednoducho nikdy nemerali, takže chyba **prechádzala počas celého životného cyklu artefaktu, až kým ju nenahlásil používateľ.**
- Triedu chýb pri **prechodoch rozloženia**, ktorú „nenapadlo hľadať v žiadnom priechode“ — nebola na nijakom zozname detektorov, pretože tieto zoznamy vznikajú z incidentov, ktoré si pamätáme, a takýto problém sa dovtedy nikdy nevyskytol.

Keď sa na tieto prípady pozrieš spolu, ukáže sa vzorec užitočnejší než ktorákoľvek jednotlivá oprava: úniky sa sústreďujú v triedach, ktoré **chýbali vo všetkých zoznamoch detektorov**. Nešlo o triedy, ktoré brána hľadala a prehliadla, ale o triedy, na ktoré nebola zameraná žiadna brána. Takéto slepé miesto je najdrahšie, pretože reťazec hlási „všetko v poriadku“ v oblasti, ktorú vôbec nekontroloval. Kým niečo neunikne, hlásenie „všetko v poriadku“ sa nedá odlíšiť od stavu „vôbec sme to nekontrolovali“.

:::tip[▶ Video]

<YouTube id="VNp35Uw_bSM" title="Cybersecurity Threat Hunting Explained — IBM Technology" />

Jeff Crume z IBM vysvetľuje threat hunting — disciplínu, pri ktorej aktívne hľadáš to, čo automatizovaná detekcia *prehliadla*, namiesto čakania na upozornenie. Pozri sa na ňu cez optiku tejto lekcie: threat hunting je bezpečnostným ekvivalentom hľadania triedy, ktorá chýba vo všetkých zoznamoch detektorov. Každý úspešný nález sa zmení na nový spôsob detekcie — rovnaký cyklus premeny na kontrolu, aký register únikov uplatňuje na brány.

:::

## Hľadaj triedu, ktorá chýba vo všetkých zoznamoch

Register únikov je zo svojej podstaty reaktívny — učí sa z toho, čo už uniklo. Dopĺňa ho zámerný proaktívny postup zameraný presne na slepé miesto, ktoré register opakovane odhaľuje: pravidelne sa zastav a spýtaj sa, **„ktorá trieda chýb je zo svojej podstaty *mimo* všetkých detektorov, ktoré spúšťame?“** Odpoveď nezískaš intenzívnejším spúšťaním existujúcich detektorov. Zoznam detektorov je totiž pamäťou minulých incidentov, a preto sa sústreďuje na miesta, kde už problémy nastali. Funguje zdanlivo nelogický trik: vytvor **hrubý detektor, ktorý sa spúšťa príliš často**, a jeho nálezy potom posúď a prefiltruj. V spomínanom produkčnom reťazci takýto zámerne hrubý detektor našiel **približne desaťkrát viac potenciálnych prípadov** než presný detektor, ktorý dopĺňal. V tomto šume sa skrývala celá trieda chýb, ktorú presný detektor zo svojej podstaty nedokázal identifikovať. Detektor vyladený na presnosť hľadá triedy, ktoré už poznáš; detektor so zámerne *širokým* záberom ti pomôže nájsť triedu, ktorú ešte nepoznáš.

Oba postupy rozvíjajú ten istý systém. Reaktívny register pomenuje slepé miesto po úniku; proaktívny hrubý detektor hľadá slepé miesta skôr, než k úniku dôjde. Každá nová trieda, ktorú odhalia, sa premení na kontrolu — a to neznamená poznámku v dokumente, ale novú bránu alebo pravidlo v reťazci, ideálne vykonateľné. Tu vzniká priame prepojenie s [vynútiteľnými pravidlami](../part-1-foundation/rules-that-hold.md): únik zaznamenaný iba v texte je ústne podanie, ktoré si ďalší agent môže, ale nemusí prečítať. Únik premenený na lint pravidlo, test alebo hook je hranica, cez ktorú ďalší beh *nemôže* prejsť. Vďaka registru sa verifikácia časom zlepšuje, namiesto toho, aby zostávala na rovnakej úrovni.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Princíp platí pri každej veľkosti: **každý únik ukáže na slepé miesto niektorej brány; zaznamenaj ho a premeň na kontrolu v reťazci.** Mení sa iba formálnosť registra a to, kto zodpovedá za premenu na kontrolu.

- **Soloista.** Jeden riadok na každý únik, uložený tam, kde ho naozaj uvidíš — trieda chýb, brána, ktorá ju nezachytila, a pridaný detektor. *Akému zlyhaniu to predchádza:* tomu, že tú istú triedu chýb opravuješ tretíkrát, pretože prvé dve opravy reťazec nič nenaučili.
- **Malý tím.** Spoločný register, z ktorého vzniká backlog detektorov. Únik sa neuzatvára opravou konkrétnej chyby, ale až zlepšením brány tak, aby sa daná trieda nemohla zopakovať. *Akému zlyhaniu to predchádza:* znalostiam uzavretým v hlavách jednotlivcov — jeden človek „pozná“ krehkú časť systému, no jeho poznatok sa nikdy nezmení na kontrolu, ktorou musí prejsť aj práca ostatných.
- **Enterprise.** Úniky sa evidujú ako chyby s určenými vlastníkmi a pravidelnými revíziami. Určujú plán rozvoja brán podobne, ako backlog z analýz bez hľadania vinníka určuje prácu na spoľahlivosti. *Akému zlyhaniu to predchádza:* dlhému, nemennému verifikačnému reťazcu, ktorý sa nikdy neučí — na papieri pôsobí impozantne, ale zostáva slepý voči tým istým triedam ako pred rokom.

## Čo si odniesť

- Únik je údaj o bráne, nielen o chybe. Opravou konkrétnej chyby vyriešiš jeden problém; *zaznamenaný* únik ti ukáže, kde má reťazec slepé miesto.
- Zapíš do registra triedu **chýb**, bránu, ktorá ju mala zachytiť, slepé miesto opísané jednou vetou a premenu na kontrolu, ktorá už danú triedu pokrýva. Únik označ za uzavretý až po zlepšení *brány*, nie po oprave konkrétnej chyby.
- Najdrahšie úniky pochádzajú z tried, ktoré chýbajú vo všetkých zoznamoch detektorov — reťazec hlási „všetko v poriadku“ v oblasti, ktorú nikdy nekontroloval. Kým niečo neunikne, stav „všetko v poriadku“ sa nedá odlíšiť od stavu „vôbec sme sa na to nepozreli“.
- Hľadaj ich proaktívne pomocou hrubého detektora, ktorý sa spúšťa príliš často, a jeho nálezy potom posúď a prefiltruj — detektor vyladený na presnosť nájde iba triedy, ktoré už poznáš.
- Každý únik podľa možností premeň na vykonateľné pravidlo. Únik zaznamenaný iba v texte je ústne podanie; únik zapojený do reťazca je hranica, cez ktorú ďalší beh nemôže prejsť.

**[Nové pojmy](../glossary.md#escape-ledger)**: register únikov, únik triedy chýb, premena slepého miesta na kontrolu, skreslenie zoznamu detektorov, hľadanie hrubým detektorom.
