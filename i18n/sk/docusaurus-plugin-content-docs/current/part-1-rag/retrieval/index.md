---
title: Retrieval
slug: /part-1-rag/retrieval/
---

# Ako nájsť správny kontext pre dopyt

Po ingestion sú chunky (kúsky dokumentu) už uložené vo vektorovej databáze. Naivná podoba vyhľadávania vyzerá takto: zaembedduj dopyt a vráť K najbližších vektorov podľa kosínusu. To je východisko, nie hotové riešenie. Vrstve Retrieval ide o to, ako z „najbližších vektorov“ spraviť výsledky, ktoré sú naozaj relevantné, správne zoradené a držia sa toho, čo daný používateľ vôbec smie vidieť.

Drž v hlave rámec z prehľadu časti: zlyhanie vyhľadávania (retrieval failure) nastane vtedy, keď chunk, ktorý si potreboval, nie je medzi tým, čo vyhľadávanie vrátilo. Celej vrstve ide v jadre o jedno: aby potrebný chunk vo výsledku chýbal čo najzriedkavejšie.

:::tip[▶ Video]

<YouTube id="T-D1OfcDW1M" title="What is Retrieval-Augmented Generation (RAG)? — IBM Technology" />

Veľký obraz: ako vyhľadávanie dodáva kontext do generovania. (Video je v angličtine.)

:::

## Prečo naivné vektorové top-K nestačí

Na živých dopytoch naivná schéma „K najbližších vektorov“ prehráva hneď z niekoľkých dôvodov naraz.

Dense retrieval (husté vyhľadávanie) zachytí význam, ale prehliadne presné tokeny — chybové kódy, čísla dielov, mená, skratky. Pri dopyte „chyba X-42“ sa potrebný chunk nemusí vôbec dostať medzi výsledky, kým vyhľadávanie podľa presného slova ho nájde okamžite. K tomu pridaj priepasť medzi slovníkom používateľa a dokumentu — pýta sa inými slovami, než aké sú v dokumente — a úplnú absenciu akejkoľvek predstavy o prístupových právach. Nad naivné vyhľadávanie preto treba postaviť niekoľko vrstiev.

Sú štyri a každej patrí jedna z ďalších sekcií: opraviť samotný dopyt, zaceliť slepé miesta vyhľadávania, opraviť poradie výsledkov a napokon obmedziť rozsah aj prístupové práva.

## Transformácia dopytu — dopyt oprav ešte pred vyhľadávaním

Dopyt, ktorý používateľ napíše, je málokedy ten najlepší dopyt na vyhľadávanie. Zopár lacných volaní LLM *pred* vyhľadávaním citeľne zdvihne úspešnosť. Tejto úprave sa hovorí query transformation (transformácia dopytu).

- **Prepísanie (rewriting).** Rozviaž zámená a skratky. V chate je to nutnosť: „a koľko to stojí?“ bez histórie dialógu neznamená nič — prepíšeš ho na samostatné „koľko stojí produkt X?“.
- **Multi-query (viac dopytov).** Vygeneruj niekoľko parafráz dopytu, vyhľadaj podľa každej a výsledky spoj.
- **HyDE.** Nechaj model načrtnúť hypotetickú odpoveď, tú zaembedduj a vyhľadávaj ňou. Hrubý koncept odpovede často sedí v priestore embeddingov bližšie k potrebnému chunku než krátka otázka.

## Hybrid search — husté aj lexikálne vyhľadávanie

Najväčší jediný krok vpred oproti naivnému vyhľadávaniu. Pracujú tu dva mechanizmy s opačnými silnými stránkami:

| | Husté vyhľadávanie | Riedke / lexikálne vyhľadávanie (BM25) |
|---|---|---|
| Čo zachytí | význam, synonymá, parafrázy | presné slová: kódy, mená, čísla dielov, zriedkavé termíny |
| Kde je slepé | presné tokeny, ktorým model dáva malú váhu | synonymá a význam — počíta sa len doslovná zhoda |

Hybrid search (hybridné vyhľadávanie) spustí oba naraz a ich skóre spojí — vážene, alebo cez Reciprocal Rank Fusion. Každý kryje slepé miesto toho druhého, čím je zodpovedané aj to, prečo jeden vektor nestačí.

Vezmi dopyt „ako obnoviť heslo“. Husté vyhľadávanie nájde podľa významu dokument „obnovenie prístupu k účtu“; BM25 nájde ten, čo sa slovo za slovom volá „reset hesla“. Spolu vrátia to, čo by každý z nich sám minul.

## Reranking — oprav poradie

Prvá fáza — dense retrieval alebo hybrid search — je vyladená na úplnosť (recall): dostať potrebný chunk niekam do top-K, kde K býva 50–100. Lenže poradie vnútri tej stovky je hrubé a do kontextu modelu sa zmestí len zopár chunkov. Druhá fáza preto pracuje na presnosti (precision): cross-encoder z [predošlej lekcie](../ingestion/) preskóruje každého kandidáta voči dopytu, zoznam preusporiada a najlepšie vytiahne navrch. Do generovania sa dostane len pár najlepších.

Toto je kanonická schéma dvoch fáz, v literatúre two-stage retrieval (dvojfázové vyhľadávanie): lacno a široko (bi-encoder alebo hybrid — úplnosť), potom draho a presne (cross-encoder — presnosť). Práve tu bi-encoder a cross-encoder z lekcie o ingestion zapadnú do jedného obrazu.

## Filtre a riadenie prístupu — relevantnosť aj oprávnenia

V podnikovom prostredí vyhľadávanie odpovedá na viac než „je toto významovo podobné“. Odpovedá aj na „čo tento človek vôbec smie vidieť“.

- **Filtrovanie podľa metadát (metadata filtering)** nad poliami pripojenými pri delení na chunky: dátum, oddelenie, typ dokumentu, jazyk. „Len HR dokumenty po roku 2024.“
- **Riadenie prístupu (access control).** Oprávnenia sa uplatnia *skôr*, než sa výsledky vrátia, takže používateľ fyzicky nedostane chunk, ku ktorému nemá prístup (príklad mzdovej evidencie z lekcie o ingestion). Je to tvrdá požiadavka: systém, ktorý vráti obmedzený dokument len na základe významovej podobnosti, nespôsobil pokles kvality, ale bezpečnostný incident. Zvyčajné usporiadanie je pre-filter (filter pred vyhľadávaním) — najprv preosej podľa oprávnení, až potom vyhľadávaj.

## Celá pipeline

```text
dopyt → [transformácia] → [hybrid: dense + BM25, filter metadát + ACL]
      → kandidáti (top-K) → [reranking: cross-encoder] → pár najlepších → do generovania
```

Každá fáza tlačí zlyhanie vyhľadávania nadol. O koľko presne, to už **meriaš**: Recall@K, Precision@K, MRR, nDCG. Metriky sformalizuje vrstva [Evaluation](../cross-cutting/evaluation/).

## Čo si odniesť z lekcie

- Naivné vektorové top-K je začiatok, nie cieľ.
- Transformácia dopytu opravuje samotný dopyt: prepísanie, multi-query, HyDE.
- Hybrid search (dense + BM25) preklenie priepasť medzi významom a presným slovom — najväčší jediný krok vpred.
- Reranking (cross-encoder) opravuje poradie: najprv fáza úplnosti, potom fáza presnosti.
- Filtre a riadenie prístupu dávajú relevantnosť spolu s oprávneniami; ACL je bezpečnostná požiadavka.

**Nové pojmy** → [Glosár](../../glossary.md): retrieval failure / generation failure, dense retrieval, top-K, query transformation, multi-query, HyDE, hybrid search, BM25 / sparse retrieval, Reciprocal Rank Fusion (RRF), reranking, two-stage retrieval, metadata filtering, access control (ACL), Recall@K, Precision@K, nDCG, MRR.

---

:::note[Ďalej — druhá časť lekcie]

**[Fúzia, radenie a metriky](./deep-dive.md)** — druhý prechod vrstvy Retrieval: mechanika HyDE a kedy sa obráti proti tebe, vnútro fúzie hybridu (váženie RRF a normalizácia skóre), voľba rerankera (cross-encoder vs. LLM), parent-document a neskorá interakcia (ColBERT), smerovanie dopytov, pre- vs. post-filter a metriky radenia (nDCG, MRR) do detailu.

Pozri aj: odkiaľ chunky pochádzajú — [Ingestion](../ingestion/); čo sa deje s tým, čo vyhľadáš — [Generation](../generation/); a ako sa celá vrstva meria — [Evaluation](../cross-cutting/evaluation/).

:::
