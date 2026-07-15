---
title: Planning & loops
slug: /part-2-agents/planning-loops/
---

# Ako viesť slučku k cieľu a prinútiť ju zastaviť

Lekcia o agentickom RAG ti dala do rúk slučku agenta (agent loop): úvaha → rozhodnutie → akcia → pozorovanie, ktorá sa točí dovtedy, kým model neusúdi, že má na odpoveď dosť. Lekcia o používaní nástrojov k tomu doplnila, že každá akcia v tej slučke je volaním nástroja (tool call) — model iba vyjadrí zámer, samotné volanie vykoná tvoj kód. Agent tak má voľnosť pohybu a sadu akcií, ktorými sa hýbe.

Na čo sme sa doteraz nespýtali: keď úloha nemá jeden krok, ale mnoho, ako sa agent rozhodne, v akom poradí ich spraviť — a čo slučku napokon zastaví? Presne táto riadiaca vrstva je náplňou lekcie.

Celú ju zhrnie jediná veta: agentický RAG dal agentovi slučku; táto lekcia ju vedie k cieľu a ohraničuje ju tak, aby sa naozaj zastavila.

:::tip[▶ Video]

<YouTube id="D37Ijn2o5U0" title="Why Agentic AI Fails: Infinite Loops, Planning Errors, and More — IBM Technology" />

Odvrátená strana celej lekcie: konkrétne spôsoby, ako sa slučka pokazí (nekonečné slučky, chyby v plánovaní), a prečo ich umožňuje práve voľnosť nad poradím krokov. (Video je v angličtine.)

:::

## Dekompozícia úlohy: z cieľa postupnosť krokov

**Dekompozícia úlohy (task decomposition)** je rozklad cieľa na čiastkové úlohy, ktoré agent rieši po jednej.

Vezmi si reálnu požiadavku: „zosúlaď tieto dva výkazy a označ nezrovnalosti“. To nie je jedno volanie nástroja. Je to postupnosť: načítaj prvý výkaz, načítaj druhý, priraď riadky k sebe, porovnaj ich pole po poli a pozbieraj to, čo si nesadne. Agent sa od cieľa k tejto postupnosti musí nejako dopracovať.

Deje sa to dvoma spôsobmi. **Explicitne**: agent si plán vopred zapíše — zoznam úloh — a odpracúva ho položku po položke. **Implicitne**: nezapíše sa nič a plán vzniká krok za krokom, ako agent v slučke uvažuje. Implicitná podoba je len predvolená slučka z agentického RAG, ktorá beží bez plánu na papieri.

Keď plán spravíš výslovným, získaš dve konkrétne veci. Po prvé, dáš modelu oporu, o ktorú sa pri uvažovaní opiera — zapísaný plán ho drží na trati oveľa lepšie než snaha udržať celú úlohu v hlave. Po druhé, dáš sebe niečo, oproti čomu meriaš postup: pozrieš na zoznam a vidíš, ktoré čiastkové úlohy sú uzavreté a ktoré ešte nie. Ten druhý bod znie menej, než koľko váži — podrž si ho, ešte sa vráti ako sledovanie postupu a pracovná pamäť.

## Dve stratégie, ako kroky zoradiť

Keď už úlohu rozkladáš, ostáva otázka, ako z nej vypadnuté kroky usporiadať. Odpovede sú dve a ťahajú opačným smerom.

**ReAct (Reasoning + Acting)** obe činnosti prepletá: rozmysli jeden krok, vykonaj ho, pozoruj výsledok, rozmysli ďalší. Plán nie je nikdy pevne daný vopred — vzniká krok za krokom a prispôsobuje sa každému pozorovaniu. Je to presne tá predvolená slučka z agentického RAG. Jej silou je pružnosť: reaguje na to, čo naozaj vidí, nie na to, čo vopred odhadla. Slabina pri dlhých úlohách: bez pevného plánu môže blúdiť, zacykliť sa alebo stratiť cieľ — každý krok je čerstvé lokálne rozhodnutie a globálnu niť nič nedrží.

**plan-and-execute (plánovanie a vykonanie)** ide opačne: naplánuje celú postupnosť krokov vopred a potom ju vykoná. Je štruktúrovanejší a lacnejší — o pláne uvažuješ raz, namiesto toho, aby si na každom kroku rozmýšľal nanovo, čo sa pri dlhých a štruktúrovaných úlohách vyplatí. Cenou je nepružnosť: plán zafixovaný vopred môže byť zlý v okamihu, keď sa realita od neho odchýli.

Preto je plan-and-execute použiteľný iba s mechanizmom preplánovania: keď krok zlyhá alebo pozorovanie plán naruší, agent musí vedieť plán prepracovať, nie slepo tlačiť ďalej. Ten mechanizmus má meno — **preplánovanie (re-planning)** — a bez neho je plan-and-execute pasca.

Kompromis v jednej vete: ReAct ti dáva pružnosť, plan-and-execute ti dáva štruktúru a hospodárnosť.

V praxi si čistú jednu z nich zvolíš málokedy. Skombinuješ ich: vysokoúrovňové kroky naplánuj vopred, každý z nich vykonaj lokálnou slučkou v štýle ReAct a keď krok zlyhá, preplánuj. Plán dáva globálnu niť, vnútorná slučka dáva lokálnu pružnosť a preplánovanie je kĺb medzi nimi.

## Základná chyba: slučka, ktorá sa nezastaví správne

Príznačná chyba celej tejto vrstvy znie jednoducho: slučka sa nezastaví správne. Keď agentovi dáš voľnosť nad poradím krokov, dokáže sa nezastaviť tam, kde statická pipeline nikdy nemala problém — pevná cesta „vyhľadaj → vygeneruj“ vždy dobehne do konca, lebo nemá kam inam ísť. Slučka sa musí rozhodnúť, že skončí. A práve toto rozhodnutie je tá nová vec, ktorá sa môže pokaziť.

Pokazí sa v troch podobách:

- **Nikdy sa nezastaví.** Agent volá nástroje donekonečna a nikdy neusúdi, že je hotový.
- **Zasekne sa na tej istej chybnej akcii.** Ten istý dopyt, to isté padajúce volanie, tá istá chyba — znova a znova, bez akéhokoľvek pohybu vpred.
- **Odkloní sa od cieľa.** Každý krok je sám osebe rozumný, no agent sa pomaly vzďaľuje od toho, o čo ho v skutočnosti požiadali.

Tieto tri podoby dohromady sú **nezastavenie cyklu (non-termination)**. Nič z toho nie je exotické. Všetky tri sú cenou za voľnosť, ktorú zaviedol agentický RAG — tá istá voľnosť, vďaka ktorej slučka zvládne viackrokové otázky, ju dokáže aj roztočiť naprázdno.

## Obrana vo vrstvách

Na nezastavenie cyklu neexistuje jediný vypínač, ktorý by ho vyriešil. Obranu skladáš do vrstiev — dole tie najhlúpejšie, ale najtvrdšie, hore tie najmúdrejšie.

**Rozpočty a limity.** Tvrdý strop (hard cap) na počet krokov, volaní nástrojov, tokenov, na náklady alebo na reálny čas. Keď sa strop dosiahne, slučka sa zastaví bez ohľadu na to, čo model „chce“. V produkcii je to nespochybniteľné. Je to poistka, ktorá zaručí zastavenie aj vtedy, keď každá múdrejšia obrana zlyhá, a je to dôvod, prečo agent, ktorý sa utrhne z reťaze, minie ohraničenú sumu peňazí namiesto neohraničenej.

**Detekcia zacyklenia (loop detection).** Sleduj, či agent neopakuje tú istú akciu — to isté volanie, tie isté argumenty, ten istý výsledok — a keď áno, zasiahni, namiesto toho, aby si ho nechal točiť sa. Zachytí to druhú z troch podôb skôr, než ju musí zastaviť rozpočet.

**Kritérium zastavenia (termination criterion).** Vymedz, čo „hotovo“ vlastne znamená, a povedz to výslovne. Bežné riešenie je nástroj „finish“, ktorý model zavolá, aby vyhlásil, že skončil — namiesto toho, aby otázka „som už hotový?“ ostala hmlistým úsudkom, ktorý model prehodnocuje na každom kroku a na každom kroku sa v ňom môže pomýliť.

**Sledovanie postupu.** Drž v kontexte cieľ a už uzavreté čiastkové úlohy, aby agent videl, kde stojí oproti plánu. Tu sa výslovný plán vypláca druhýkrát. Je to priama obrana proti odklonu: agent, ktorý má cieľ na očiach, sa od neho odkloní ťažšie.

**Reflexia.** Najmúdrejšia vrstva — a zaslúži si vlastnú sekciu.

## Reflexia: hlavná páka proti odklonu a tichému zacykleniu

**Reflexia (reflection)** je vyhradený krok, na ktorom agent posúdi vlastnú trajektóriu. Napredujem? Funguje to naozaj? Nemám zmeniť smer? — a podľa odpovede sa rozhodne zastaviť, preplánovať alebo pokračovať.

Je to príbuzná sebaopravy (self-correction) z agentického RAG, len mierená o úroveň vyššie. Sebaoprava tam posudzovala kvalitu vyhľadávania: tieto úryvky sú mimo, hľadaj znova. Reflexia tu posudzuje plán a celú slučku ako celok — nie jedno vyhľadanie, ale celú trajektóriu. Tá istá slovná rodina, iná rovina pohľadu.

Prečo reflexia váži viac, než sa na prvý pohľad zdá. Rozpočet zlú slučku iba zastaví — vzniknúť jej nezabráni. Odklon a tiché zacyklenie sú pritom presne tie dve chyby, ktoré čistý rozpočet ochotne nechá bežať až po strop a až tam ich ukončí. Reflexia je vrstva, ktorá dokáže spozorovať, že sa slučka pokazila, a napraviť to ešte pred stropom — nasmerovať ju späť, nie ju len tvrdo useknúť. Rozpočet je tvoja záruka, že sa agent zastaví; reflexia je tvoja najlepšia šanca, že sa zastaví zo správneho dôvodu.

## Kódovací agent: táto vrstva zblízka

Ak chceš celú túto riadiacu vrstvu vidieť na vlastné oči, sadni si ku kódovaciemu agentovi. Zadaj mu programátorskú úlohu a sleduj, ako sa mu v priebežnom výstupe odvíjajú jeho reťaz v štýle ReAct „úvaha → akcia → pozorovanie“ aj sebaoprava — slučka, ktorá bola v agentickom RAG abstraktná, je zrazu priamo na obrazovke, krok za krokom.

Slabšie alebo staršie modely spravia spôsoby zlyhania názornými. Pri ťažkej úlohe sa občas zacyklia — skúšajú tú istú rozbitú opravu znova a znova, zakaždým s tou istou chybou — alebo sa odklonia od toho, o čo si naozaj žiadal. A čo urobíš, keď sa to stane? Prerušíš ich ručne.

Práve tento každodenný reflex je pointa. Ručné prerušenie je **human-in-the-loop (schválenie človekom)** ako rozpočet poslednej záchrany — ty sám si tým stropom, ktorý agent sám od seba nedosiahol. Je to najkonkrétnejší argument, aký existuje, prečo majú zmysel rozpočty, reflexia aj možnosť, aby človek prevzal riadenie: tú chybu si už videl na vlastné oči a siahol si po tlačidle stop.

## Dlhé trajektórie stoja kontext

Ešte jeden náklad, tichší než nezastavenie cyklu, no vždy prítomný. Slučka si krok za krokom plní kontext volaniami nástrojov a ich výsledkami. Na dlhej trajektórii to znamená, že kontext napuchne, cena za každé volanie rastie a udrie **lost-in-the-middle (strata uprostred)** — model si zo stredu dlhého kontextu všíma najmenej, takže prvé kroky trajektórie mu môžu fakticky vypadnúť z dohľadu presne vtedy, keď ich agent potrebuje.

Ako to zmierniť, patrí do druhej časti lekcie, ale pomenujme to už teraz: zhŕňaj históriu, ako rastie, drž v **pracovnej pamäti (scratchpad)** len to, čo je ešte relevantné, a udržiavaj štruktúrovaný zoznam toho, čo je už hotové. To posledné je opäť tvoj výslovný plán, ktorý sa vypláca.

## Kam to patrí a čo to stojí ďalej

Najprv umiestnenie. Toto je riadiaca vrstva nad slučkou z agentického RAG a nad nástrojmi z lekcie o ich používaní: dekompozícia a zastavenie sedia na vrchu slučky „úvaha → rozhodnutie → akcia → pozorovanie“, ktorá volá nástroje. Nič z tejto lekcie tie predchádzajúce nenahrádza — iba riadi to, čo postavili.

Dva dôsledky ďalej v reťazci zaostrujú body, na ktoré si už narazil. **Observability (pozorovateľnosť)** prestáva byť iba užitočná a stáva sa nevyhnutnou. Aby si odladil nezastavenie cyklu, musíš prejsť celú trajektóriu — celú reťaz krokov — lebo chyba môže byť kdekoľvek v nej: zlá dekompozícia, jeden nesprávny krok, chýbajúce preplánovanie. Bez úplného záznamu iba hádaš.

A evaluácia teraz meria kvalitu trajektórie, nie len „odpovedal správne?“. Došiel k cieľu, a za koľko krokov? Efektívnosť a zastavenie sú teraz súčasťou kvality — agent, ktorý dá správnu odpoveď za štyridsať krokov tam, kde by stačilo šesť, nie je dobrý agent.

## Čo si odniesť z lekcie

- Táto lekcia je riadiaca vrstva nad slučkou a nad nástrojmi — dekompozícia a zastavenie sediace na vrchu slučky „úvaha → rozhodnutie → akcia → pozorovanie“. Riadi voľnosť, ktorú model dostal v predchádzajúcich lekciách.
- Dekompozícia úlohy mení cieľ na postupnosť čiastkových úloh, buď výslovne (zapísaný plán, ktorý vieš sledovať), alebo implicitne (plán, ktorý jednoducho vznikne v slučke). Zapísať ho pomáha modelu aj tebe.
- ReAct prepletá uvažovanie a konanie a prispôsobuje sa krok za krokom; plan-and-execute plánuje vopred a je lacnejší pri dlhých štruktúrovaných úlohách, ale potrebuje preplánovanie, aby prežil stret s realitou. Reálne systémy ich kombinujú — plánuj vysokoúrovňovo, lokálne bež v štýle ReAct, po zlyhaní preplánuj.
- Príznačná chyba je slučka, ktorá sa nezastaví správne, v troch podobách: nikdy sa nezastaví, zasekne sa na opakovanej chybnej akcii alebo sa odkloní od cieľa.
- Bráň sa vo vrstvách — rozpočty (nespochybniteľná poistka), detekcia zacyklenia, výslovné kritérium zastavenia, sledovanie postupu a navrchu reflexia, vrstva, ktorá zlej slučke zabráni, nielen ju odsekne. Pri kódovacom agentovi vidíš celé toto na vlastné oči, ako to funguje aj zlyháva.
- Ďalej v reťazci sa Observability stáva povinnou (na odladenie prejdeš celú trajektóriu) a evaluácia meria trajektóriu — či došla k cieľu a za koľko krokov.

**Nové pojmy** → [Glosár](../../glossary.md): planning, task decomposition, plan-and-execute, re-planning, reflection / self-critique, termination criterion, step budget / iteration limit, loop detection, scratchpad / working memory, non-termination.

---

:::note[Ďalej — druhá časť lekcie]

**[Prehľadávanie plánov a pamäť](./deep-dive.md)** — hlbší prechod vedením a ohraničením slučky: prehľadávanie stromu a grafu plánov, pomenované frameworky reflexie, rozpočtové a nákladové politiky v produkcii, pamäťové architektúry pre dlhé trajektórie (epizodická oproti pracovnej pamäti) a metriky hodnotenia na úrovni trajektórie.

Pozri aj: špecificky vyhľadávací variant tej istej slučky — [Agentic RAG](../agentic-rag/index.md); ako slučka, jej stropy a zotavenie vyzerajú v Claude, OpenAI a Gemini — [záverečná stránka časti](../real-agents.md).

:::
