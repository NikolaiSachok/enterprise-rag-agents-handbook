---
title: "Kontrola výstupu agenta pri veľkom objeme"
sidebar_position: 4
---

# Všetko neprečítaš — rozhodni, čo dokážeš skontrolovať iba ty

V III. časti sme vytvorili reťaz rôznorodých brán, evidenciu, ktorá sa učí z chýb, čo cez ne preniknú, a pravidlá, ktoré agentovi bránia obchádzať ich. Táto posledná lekcia je o jedinej bráne, ktorej kapacitu nemožno zvýšiť pridaním výpočtového výkonu: o človeku. Keď agenti generujú výstupy rýchlejšie, než ich ktokoľvek dokáže čítať, požiadavka „skontrolovať všetko“ prestáva byť dohľadom a mení sa na formálne odklepnutie. Záplava práce pritom ako prvého vyradí práve človeka — presne ako [varovala II. časť](../part-2-loop/roles-and-the-human.md). Riešením nie je čítať rýchlejšie ani sa viac snažiť. Kontrolu treba *navrhnúť* tak, aby sa obmedzená pozornosť človeka sústredila výlučne tam, kde je jeho úsudok skutočným kontrolným mechanizmom, a aby všetko, čo dokáže skontrolovať stroj, bolo overené ešte skôr, než sa na výstup pozrie človek.

## Objem nie je hypotetický problém

Čísla už poznáme a opisujú problém kontroly, nie generovania. Pri nasadení v praxi, ktoré zahŕňalo 802 vývojárov a 196 212 PR, dosiahla priepustnosť na osobu **2,09×** hodnoty pred zavedením povinného používania — išlo o [jeden z najväčších zaznamenaných nárastov](https://arxiv.org/abs/2607.01904). Tá istá štúdia však zachytáva aj následky: zaťaženie jedného kontrolóra sa **približne zdvojnásobilo** a **automatizovaná kontrola predbehla ľudskú kontrolu** (`MEASURED`). Takto vyzerá problém vyjadrený dátami. Generovanie zlacnelo, čítanie nie, a úzke miesto sa presunulo do radu na kontrolu. Požiadavka „skontrolovať všetko“ bola odjakživa reflexom, no pri hodnote 2,09× sa z nej stáva [pasca formálneho odklepnutia](../part-2-loop/roles-and-the-human.md). Ak človek za deň schváli viac rozdielov, než by vôbec dokázal prečítať, nevykonáva dohľad — iba vytvára jeho zdanie. Veľký objem kontrolu nielen zaťažuje. Po prekročení určitej hranice ju nenápadne mení na divadlo, hoci všetky ukazovatele naďalej svietia nazeleno.

## Najprv automatizuj, aby si sústredil pozornosť, potom presne vymenuj, čo zostáva

Návrh, ktorý zvládne veľký objem, má dve časti a na ich poradí záleží. Najprv umiestni lacné automatizované brány *pred* človeka, aby sa nákladný ľudský krok vykonal iba pri výstupoch, ktoré nimi už prešli. V reťazi, ktorú používam v produkcii, je krok zachytenia a vizuálnej kontroly človekom zámerne posledný. Jeho náklady majú zmysel len preto, že automatizované brány už zaručili, že systém zvládne studený štart a že v ňom funguje navigácia. Venovať mu čas človeka skôr by znamenalo míňať ho na chyby, ktoré by stroj odhalil bez ďalších nákladov. Potom nasleduje krok, ktorý väčšina tímov vynecháva: **presne vymenuj konkrétne vlastnosti, ktoré dokáže posúdiť iba človek, a človeka vyhraď výlučne na kontrolu tohto zoznamu nedelegovateľného.** V spomínanej produkčnej reťazi je zoznam výslovný: vykresľovanie so skutočnými písmami namiesto náhradných písiem používaných pri testovaní, prirodzenosť animácií, natívne správanie, kvalita dekódovania obrázkov, veľkosť dotykových plôch na skutočnom zariadení a kontrast prvkov na obrázkoch. Ide o vlastnosti skutočného hardvéru a ľudského vnímania, ktoré žiadny ovládač spustený na hostiteľskom systéme nedokáže pozorovať. Zapísaný zoznam bráni tomu, aby ľudská brána potichu znovu prebrala mechanickú prácu, ktorú mala odstrániť automatizácia. Človek, ktorý kontroluje všetko, sa topí v práci. Človek, ktorý kontroluje *iba položky zo zoznamu nedelegovateľného*, vykonáva jedinú úlohu, ktorá sa so zrýchľovaním generovania nespomaľuje.

:::tip[▶ Video]

<YouTube id="cmEJ-5zYKHA" title="Why AI Agents Need A Human in the Loop Now — IBM Technology" />

IBM vysvetľuje, prečo agentské systémy stále potrebujú human-in-the-loop — a z pohľadu tejto lekcie aj *kde* ho potrebujú. Nejde o to, aby človek schvaľoval každý krok; vznikol by tak rad, ktorého kapacitu nemožno dostatočne zvýšiť. Človek má byť zapojený pri niekoľkých rozhodnutiach, ktoré môže urobiť iba on, pričom všetko ostatné musí prejsť strojovými bránami ešte predtým, než sa k nemu dostane.

:::

## Určuj prioritu v rade podľa rizika: dosiahnuteľnosť a pasca formátu výstupu

Aj zmenšený rad treba triediť podľa priority. Poctivý prístup zabezpečujú dve pravidlá. Prvým je **kalibrácia podľa dosiahnuteľnosti**: závažnosť nálezu nemá výpovednú hodnotu, kým nevieš, či sa používateľ môže skutočne dostať ku kódu, v ktorom sa chyba nachádza. „Kritická“ chyba na obrazovke, ku ktorej nevedie žiadna navigačná cesta, je latentná (skrytá) chyba, nie núdzová situácia. Zníž jej závažnosť, označ ju ako latentnú a výslovne to uveď. Závažnosť bez dosiahnuteľnosti je len šum a ten nie je neškodný: učí kontrolóra nedôverovať bráne. Brána, ktorej výstrahy sa kontrolór naučil bez rozmýšľania púšťať ďalej, už zlyhala. Obmedzenú pozornosť treba venovať najprv nálezom dosiahnuteľným pre používateľa.

Druhé pravidlo je nenápadnejšie a môže oklamať aj dobrých kontrolórov: **formát výstupu nástroja skresľuje určovanie priorít.** Brána na vizuálne porovnanie informuje o *vzhľade*, takže jej nálezy pôsobia ako kozmetické a dostávajú nižšiu prioritu. Skutočnou chybou za hlásením „na jednej strane chýba tento widget“ však často nie je chýbajúci vizuálny prvok, ale chýbajúce *správanie*. Keď je výstupný kanál brány užší než chyba, ktorú odhaľuje, jej nálezom sa systematicky pripisuje menšia váha práve tam, kde sú najdôležitejšie. Nápravou je pravidlo, nie zvýšená ostražitosť: ak štrukturálna brána hlási, že niečo „chýba“, považuj to za možný nedostatok funkčnosti, kým sa nepreukáže, že ide iba o kozmetickú chybu — nikdy nie naopak. Agentovi zároveň umožni odovzdať nejednoznačný prípad *vyššie*: môže priamo vo výstupe zanechať strojovo čitateľnú značku „potrebný človek“ — napríklad označený komentár pri skutočnom rozhodnutí vyžadujúcom úsudok — ktorú neskoršia ľudská brána použije ako svoj pracovný zoznam. Agent, ktorý dokáže povedať „nebol som si istý“, je užitočnejší než agent, ktorý si tipne a pokračuje ďalej, pretože tvoju pozornosť správne nasmeruje namiesto toho, aby ju spotreboval.

## Tri úrovne zrelosti: soloista · malý tím · enterprise

Na každej úrovni platí to isté: **automatizuj, aby si sústredil pozornosť človeka, vymenuj, čo dokáže skontrolovať iba človek, a túto pozornosť venuj dosiahnuteľným a nejednoznačným prípadom.** Mení sa len to, koho treba chrániť pred záplavou práce a akým spôsobom.

- **Soloista.** Na kontrolu máš iba vlastné oči, preto buď *prísnejší* pri rozhodovaní, čo si zaslúži miesto v zozname nedelegovateľného. Všetky mechanické kontroly zaraď pred seba, aby si vlastnú pozornosť nikdy nemíňal na niečo, čo by odhalil grep. *Akému zlyhaniu to predchádza:* tomu, že sa pre seba staneš iba formálnym schvaľovateľom a začneš povrchne prechádzať množstvo vlastných výstupov, pretože opätovne ich čítať je už náročnejšie než im dôverovať.
- **Malý tím.** Zaveď spoločné pravidlá určovania priorít — poznámky o dosiahnuteľnosti, pravidlo pre formát výstupu a jasne určený zoznam nedelegovateľného. Kontrola tak bude pre všetkých znamenať to isté a ľudská brána bude mať konkrétne určeného vlastníka, nie neurčitý „tím“. *Akému zlyhaniu to predchádza:* rozptýlenej zodpovednosti, pri ktorej každý predpokladá, že výstup dôkladne prečítal niekto iný, no v skutočnosti ho neprečítal nikto.
- **Enterprise.** Namiesto predstierania, že sa kontroluje všetko, používaj vzorkovanie s prihliadnutím na riziko a zabezpeč preukázateľne nezávislé schválenie — podľa [pravidla dvoch strán, ktoré I. časť prepojila so SLSA a DORA](../part-1-foundation/verification-bottleneck.md). *Akému zlyhaniu to predchádza:* tomu, aby sa z human-in-the-loop stalo políčko vo formulári na preukázanie súladu — meno človeka, ktorý pri skutočnom objeme práce nemohol reálne skontrolovať to, čo podpísal.

## Čo si z toho odniesť

- Generovanie zlacnelo, no čítanie nie, takže úzke miesto sa presunulo do radu na kontrolu — pri nameranej priepustnosti **2,09×** sa zaťaženie jedného kontrolóra približne zdvojnásobilo. Pri takomto objeme je požiadavka „skontrolovať všetko“ iba formálnym odklepnutím.
- Premyslený návrh je účinnejší než mimoriadne nasadenie jednotlivcov: lacné automatizované brány zaraď pred človeka, aby svoju pozornosť venoval iba tomu, čo nimi už prešlo, a **presne vymenuj konkrétne vlastnosti, ktoré dokáže vnímať iba človek**. Človeka vyhraď výlučne na kontrolu tohto zoznamu.
- Zvyšné položky zoraď podľa rizika: závažnosť kalibruj podľa dosiahnuteľnosti — nedosiahnuteľná „kritická“ chyba je latentná — a dávaj si pozor na pascu formátu výstupu. Ak štrukturálna brána hlási, že niečo „chýba“, považuj to za nedostatok funkčnosti, kým sa nepreukáže, že ide iba o kozmetickú chybu.
- Umožni agentovi nasmerovať tvoju pozornosť: strojovo čitateľná značka „potrebný človek“ pri skutočných rozhodnutiach vyžadujúcich úsudok má väčšiu hodnotu než sebavedomý odhad.
- Človek je brána, ktorej kapacita sa nezvyšuje s výpočtovým výkonom. Chráň ju premysleným návrhom, inak veľký objem nenápadne zmení tvoj dohľad na divadlo, hoci všetky ukazovatele zostanú zelené.

**[Nové pojmy](../glossary.md#review-at-volume)**: kontrola pri veľkom objeme, sústrediť pozornosť človeka, zoznam nedelegovateľného, kalibrácia podľa dosiahnuteľnosti, skreslenie spôsobené formátom výstupu nástroja, strojovo čitateľná značka „potrebný človek“.
