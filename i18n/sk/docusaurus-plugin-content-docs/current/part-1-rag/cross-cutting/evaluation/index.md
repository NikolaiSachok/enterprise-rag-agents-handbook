---
title: Evaluation
slug: /part-1-rag/cross-cutting/evaluation/
---

# Meraj kvalitu namiesto hádania

Už neraz sme v tejto knihe narazili na tú istú stenu: „to sa meria metrikami“. Tú vetu sme počuli pri chunkingu, pri vyhľadávaní, pri rerankingu aj pri faithfulness (vernosť zdrojom). Zakaždým sme meranie odsunuli ďalej — a teraz je na rade.

Evaluácia je *spôsob merania* — a nie okrajová téma. Práve ňou vôbec zistíš, či niečo funguje. Bez nej ladíš pipeline naslepo: zmeníš veľkosť chunku, prepíšeš prompt, vymeníš reranker — a ideš ďalej s pocitom, že „takto je to lepšie“. Ten pocit sa nedá porovnať s minulým týždňom a nedá sa obhájiť pred kolegom.

Práve to evaluácia zmení: z „takto je to lepšie“ spraví číslo (skóre). Tým sa produkčný systém odlišuje od dema — a práve na toto sa ťa na pohovoroch najčastejšie pýtajú.

## Základný princíp: vyhľadávanie a generovanie hodnoť oddelene

Rozklad zlyhania, ktorý sme si ukázali v prehľade časti — zlyhanie vyhľadávania verzus zlyhanie generovania — sa tu z pojmu stáva pracovným nástrojom. Tie dve etapy sa kazia inak a naprávaš ich inými pákami, takže ich aj meraj každú zvlášť. Jedno súhrnné „skóre kvality“ ti nepovie, kde chyba väzí.

| Metriky vyhľadávania — našli sme správne chunky? | Metriky generovania — je odpoveď dobrá vzhľadom na kontext? |
|---|---|
| **Čo merajú.** Dostal sa potrebný chunk (kúsok dokumentu) do výsledkov a na akej pozícii v poradí. | **Čo merajú.** Opiera sa odpoveď o kontext a naozaj odpovedá na otázku. |
| **Tie hlavné.** Recall@K (dostal sa potrebný chunk medzi K najlepších? — hlavná metrika pre RAG), Precision@K, MRR, nDCG. | **Tie hlavné.** faithfulness, answer relevance (relevancia odpovede), správnosť (correctness). |

Prečo je Recall@K tá hlavná: keď sa potrebný chunk vôbec nedostane do výsledkov, generovanie fyzicky nemá z čoho zostaviť správnu odpoveď. V prvej fáze záleží na úplnosti (recall) viac než na presnosti (precision) — čo tu prepadne, to už žiadny neskorší krok nezachráni.

## Bez dát niet čo hodnotiť

Aby si vôbec mal čo merať, potrebuješ príklady s referenciou: otázky a k nim buď relevantné chunky, alebo správnu odpoveď. Táto zbierka príkladov je **golden set** (etalónová sada).

Postavíš ho dvoma spôsobmi: ručne, alebo synteticky — LLM vygeneruje dvojice otázka–odpoveď nad tvojím korpusom a človek ich prejde a opraví. Malý, ale čistý golden set porazí veľký a zašumený; pár stoviek dôveryhodných príkladov ti povie viac než desaťtisíc, ktorým neveríš.

Práve tu si tímy najčastejšie skracujú cestu — a je to najhoršie možné miesto na šetrenie. Bez referencie sa celá evaluácia rozsype: nemáš totiž s čím porovnávať, takže každé „skóre“ je len číslo bez ukotvenia.

## LLM-as-a-judge — ako hodnotiť voľný text

Odpoveď z RAG je voľný text, nie hodnota z číselníka. Nezmeriaš ju presnou zhodou reťazcov — dve správne odpovede môžu byť naformulované úplne inak a obe sú dobré.

Preto na kvalitu generovania (faithfulness, answer relevance) nasadíš ďalší LLM v úlohe sudcu: dostane odpoveď, porovná ju s hodnotiacimi kritériami (rubric) alebo s referenčnou odpoveďou a priradí jej skóre. Tento postup — **LLM-as-a-judge** — škáluje ľudský úsudok na tisíce príkladov, na ktoré by ľudský tím nikdy nemal čas. Je to jedna z nosných techník hodnotenia generovania a na pohovoroch častá otázka.

:::tip[▶ Video]

<YouTube id="trfUBIDeI1Y" title="LLM as a Judge: Scaling AI Evaluation Strategies — IBM Technology" />

Ako hodnotenie cez LLM-sudcu funguje v praxi. (Video je v angličtine.)

:::

Sudca má však zaujatosti, ktoré musíš poznať, inak mu uveríš viac, než si zaslúži:

- **zaujatosť podľa poradia** (position bias) — uprednostní prvú z dvoch odpovedí bez ohľadu na to, ktorá je naozaj lepšia;
- **zaujatosť voči dĺžke** (verbosity bias) — dlhšiu a rozvláčnejšiu odpoveď vníma ako lepšiu;
- **self-preference** (uprednostňovanie vlastného štýlu) — vlastnému štýlu dá vyššie skóre než cudziemu.

Odtiaľ dve pravidlá: daj sudcovi jasné hodnotiace kritériá a over ho voči tomu, ako tie isté odpovede hodnotia ľudia, skôr než mu začneš veriť. Nekalibrovaný sudca vracia čísla, ktoré pôsobia presne, ale nemusia nič znamenať.

:::tip[▶ Video]

<YouTube id="dAE7OFm9oek" title="Can You Trust an AI to Judge Fairly? Exploring LLM Biases — IBM Technology" />

Zaujatosti sudcu a či sa na jeho rozhodnutie dá spoľahnúť. (Video je v angličtine.)

:::

## Offline a online — dve slučky

Hodnotenie beží v dvoch slučkách naraz a každá chytá iné veci:

- **Offline (pred nasadením, v CI).** Golden set preženieš cez pipeline ešte pred nasadením, automaticky v CI. Sú to jednotkové testy pre RAG: zachytia regresiu, keď zlepšenie na jednom mieste potichu pokazí iné („zlepšil som X, nevedomky rozbil Y“).
- **Online (v produkcii).** Meriaš na živej prevádzke — spätná väzba od používateľov (palec hore/dole), nepriame signály a A/B testovanie. Skutočné dopyty odhalia to, čo golden set nepokryl.

## Vývoj riadený hodnotením

Odtiaľto vychádza slučka, vďaka ktorej sa pipeline vôbec dá ladiť: niečo zmeníš → spustíš evaluáciu → porovnáš skóre → zmenu si necháš, alebo ju vrátiš späť. Nič viac za tým nie je, a predsa práve toto oddeľuje systematické ladenie od hádania.

Táto slučka uzatvára všetky skoršie „a tu sa to meria“ do jedného postupu. Regresné hodnotenie (regression eval) v CI pritom dáva pozor, aby zlepšenie jednej veci nezhoršilo druhú — tú istú poistku poznáš z jednotkových testov v bežnom softvéri.

## Metriky ti povedia, čo opraviť

Najväčšia praktická sila hodnotenia: ukáže ti, v ktorej etape zlyhanie väzí. Zlá odpoveď nie je jeden problém — sú to dva rôzne druhy zlyhania, každý s inou nápravou, a metriky ich od seba odlíšia.

| Príznak | Diagnóza | Kde opraviť |
|---|---|---|
| Odpoveď je zlá a potrebný chunk NEBOL vo výsledkoch | zlyhanie vyhľadávania → nízky Recall@K | chunking / hybridné vyhľadávanie / reranking |
| Odpoveď je zlá, hoci potrebný chunk v kontexte BOL | zlyhanie generovania → nízka faithfulness | grounding (opretie odpovede o kontext) / prompt |

## Čo si odniesť z lekcie

- Evaluácia zmení „takto je to lepšie“ na číslo (skóre); vďaka nej sa pipeline dá ladiť a práve ona delí produkčný systém od dema.
- Vyhľadávanie a generovanie hodnoť oddelene — kazia sa inak a naprávaš ich inými pákami.
- Vyhľadávanie: Recall@K (hlavná), Precision@K, MRR, nDCG. Generovanie: faithfulness, answer relevance, správnosť.
- Potrebuješ golden set (otázka + relevantné chunky / správna odpoveď); čistý porazí veľký.
- LLM-as-a-judge skóruje voľný text podľa hodnotiacich kritérií; počítaj so zaujatosťami a over sudcu voči ľuďom.
- Offline (regresie v CI) plus online (spätná väzba, A/B).
- Metriky ti povedia, ktorú etapu opraviť.

**[Nové pojmy](../../../glossary.md)**: evaluation, golden set / golden dataset / ground truth, answer relevance, correctness, LLM-as-a-judge, judge bias, offline vs online eval, regression eval, A/B testing.

---

:::note[Ďalej — druhá časť lekcie]

**[Vnútro metrík a kalibrácia sudcu](./deep-dive.md)** — druhý prechod vrstvy Evaluation: ako sa metriky rodiny Ragas naozaj počítajú (faithfulness, answer relevance, context precision a context recall), ako sa LLM-sudca kalibruje voči ľudským značkám a odkiaľ sa berú jeho zaujatosti (position, verbosity, self-preference; pairwise verzus pointwise), a ako sa golden set stavia ručne — zhoda medzi anotátormi a aktívne vzorkovanie.

Pozri aj: vrstvy, ktoré hodnotenie meria — [Retrieval](../../retrieval/) a [Generation](../../generation/); a súrodenecké prierezové aspekty — [Guardrails](../guardrails/) a [Observability](../observability/).

:::
