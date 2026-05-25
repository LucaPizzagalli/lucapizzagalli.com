import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Math from "../../components/Math";

export default function InvestingPage() {
  return (
    <>
      <SEO title="Investing: The one weird trick gli hedge fund manager ti vogliono nascondere" />
      <Layout class="words">
        <h1>The one weird trick gli hedge fund manager ti vogliono nascondere</h1>

        <h2>Investire in borsa</h2>
        <p>
          <em>Investire in borsa è tattico.</em>
        </p>
        <p>
          Altre forme di investimento sono problematiche da gestire. Ad esempio comprare un locale ed affittarlo: Mi lega ad un luogo fisico, comporta scazzi da gestire periodicamente, l’ammontare dell’investimento è fisso e non scala, la durata dell’investimento non è facilmente regolabile. Prima i soldi vengono investiti, meglio è, la non possibilità di investire periodicamente le nuove entrate ha un costo in missing returns. In borsa posso invece: investire la quantità che preferisco, aumentare l’investimento gradualmente, ritirare quando voglio, fare tutto ciò da un qualsiasi posto nel mondo. Inoltre le commissioni sono 0 e le tasse sono solo sui profitti, Questo rende cambiare idea praticamente gratis. Esistono indubbiamente investimenti migliori, ma non ne sono a conoscenza, se un giorno lo sarò, potrò pivotare.
        </p>
        <p>
          Day trading, market timing, stock picking, technical trading, sono l’equivalente di “enlarge your penis”, tutta fuffa<a href="#day-trading-video">[#day-trading-video]</a><a href="#picking-stock-video">[#picking-stock-video]</a><a href="#market-timing-video">[#market-timing-video]</a><a href="#no-technical-trading">[#no-technical-trading]</a><a href="#enlarge-penis">[#enlarge-penis]</a>. L’"efficient-market hypothesis"<a href="#EMH">[#EMH]</a> sembra essere approssimativamente vera, ciò implica che non c’è spazio per questi giochetti, almeno non a un basso livello amatoriale.
        </p>
        <p>
          E allora perché investire in borsa dovrebbe farmi guadagnare? Storicamente l’umanità ha continuato a progredire (almeno degli ultimi boh, 2 millenni) e così il valore dei mercati da quando esistono. La borsa non è un zero-sum game e in media tutti ci guadagnano (tolte commissioni e andare short).
        </p>

        <h2>Scegliere come investire</h2>
        <p>
          <em>Ok, allora diciamo che il mercato è efficiente nella determinazione sia del valore attuale sia delle prospettive di crescita, tutta l'informazione disponibile è "priced in" nel prezzo di ogni stock, e le fluttuazioni nei prezzi sono esclusivamente dovute ad acquisizione di nuova informazione non precedentemente disponibile. Questo quindi significa che tutte le strategie sono equivalenti? Prendere uno stock random è una strategia ottimale, come tutte le altre possibili, giusto?</em>
        </p>
        
        <hr />

        <p>
          <strong>No.</strong> Il valore da massimizzare non è l’expected return, ma qualcosa di simile al “Risk-adjusted return on capital”<a href="#risk-adjusted-return">[#risk-adjusted-return]</a><a href="#value-at-risk">[#value-at-risk]</a> (che non mi pare un concetto ben definito).
          In parole povere: essendoci incertezze, preso uno stock <Math eq="i" />, rappresentiamo il suo return (<Math eq="r_i" />) come un evento stocastico, con una certa distribuzione di probabilità, di media (<Math eq="\mu_i" />) e deviazione standard (<Math eq="\sigma_i" />). L'obiettivo non è semplicemente cercare un investimento che massimizzi la media, ma bensì uno che offra un compromesso fra massimizzare la media e minimizzare la deviazione standard. Cioè vogliamo sì massimizzare i guadagni ma anche ridurre i rischi.
        </p>
        <p>
          Qui usiamo la varianza come indicatore di quanto uno stock è volatile e quindi del rischio.
        </p>

        <details>
          <summary>Visto dal mio punto di vista</summary>
          <div>
            <p>
              Questo è perchè la mia objective function è sublineare rispetto al numero di € sul mio conto in banca.
              A parità di € regalati, un me povero che possiede 100€ avrà un incremento di felicità maggiore di un me ricco che possiede 1000€.
            </p>
            <p>Tra:</p>
            <ul>
              <li>A: 100€ sicuri</li>
              <li>B: 50% di probabilità di ricevere 50€ e 50% di probabilità di ricevere 150€</li>
            </ul>
            <p>
              L'opzione A è più allettante di B perchè l'aumento di felicità tra gli extra 50€ e gli extra 100€ è maggiore di quello tra gli extra 100€ e gli extra 150€. Ciò significa che la media di felicità nei due sub-casi dell'opzione B è minore della felicità nell'opzione A. La preferenza dell'opzione A mi sembra quindi perfettamente razionale<a href="#loss-aversion">[#loss-aversion]</a>.
            </p>
            <p>
              Quello che io desidero è massimizzare la media della mia objective function (diciamo felicità) calcolata su tutte le mie possibili vite future (e non la media dei soldi sulle mie possibili vite future). Questo si traduce nel compromesso tra massimizzazione di guadagni e riduzione rischi di cui sopra. Quantificare questo compromesso riciederebbe quantificare la object function in funzione del denaro disponibile (esercizio lasciato al lettore).
            </p>
          </div>
        </details>

        <h2>The only free lunch is diversification<a href="#diversification">[#diversification]</a></h2>
        <p>
          <em>Mh, ok. Quindi più uno stock è volatile maggiore è il rischio e maggiori saranno i returns medi, giusto?</em>
        </p>

        <hr />

        <p>
          <strong>Naah, non proprio.</strong> Facciamo un piccolo detour.
        </p>
        <p>
          Definiamo il retrun del mercato (<Math eq="r_m" />) come la media dei return di tutti gli stock (stock weighted). Il return medio del mercato è uguale alla media su tutti gli stock dei return medi, ma se guardiamo alla varianza del return del mercato, questa è minore della media su tutti gli stock delle varianze dei returns. Forse in formule viene meglio:
        </p>

        <div style={{ "text-align": "center", margin: "1.5rem 0" }}>
          <Math block eq="\mu(r_m) := \mu(\overline{r_i}) = \overline{\mu(r_i)} \\ \sigma(r_m) := \sigma(\overline{r_i}) < \overline{\sigma(r_i)}" />
        </div>

        <p>
          Questo intuitivamente perchè, quando guardiamo al mercato nel complesso, le oscillazioni dei singoli stock parzialmente si compensano, e il return del mercato è più stabile rispetto a quello dei singoli stock (è un po' il discorso della media campionaria<a href="#error-of-the-mean">[#error-of-the-mean]</a><a href="#law-of-total-variance">[#law-of-total-variance]</a>).
          Quindi il risk-adjusted return dell’intero mercato è migliore.
        </p>

        <figure>
            <div style={{display: "grid", "grid-template-columns": "repeat(2, 1fr)", gap: "2rem"}}>
          <img
            src="/words/investing/diversification-a.png"
            alt="a sinusoid function"
            style={{filter: "var(--green-filter) var(--distortion-filter) var(--noise-filter)"}}
          />
          <img
            src="/words/investing/diversification-b.png"
            alt="a sinusoid function with a different phase"
            style={{filter: "var(--green-filter) var(--distortion-filter) var(--noise-filter)"}}
          />
          <img
            src="/words/investing/diversification-c.png"
            alt="a sinusoid function with yet a different phase"
            style={{filter: "var(--green-filter) var(--distortion-filter) var(--noise-filter)"}}
          />
          <img
            src="/words/investing/diversification-d.png"
            alt="The sum of the three sinusoids"
            style={{filter: "var(--green-filter) var(--distortion-filter) var(--noise-filter)"}}
          />
          </div>
          <figcaption>Il return della media degli stock ha oscillazioni meno estreme dei return di ciascuno dei tre stock.</figcaption>
        </figure>

        <p>
          Ma non finisce qua. Se un anno ho un return -20% l’anno successivo mi serve un +25% per pareggiare: quando guardo agli interessi su più anni ciò che è importante è la media geometrica, non aritmetica. Una varianza maggiore significa un ritorno complessivo minore, questo effetto è chiamato "volatility tax"<a href="#volatility-tax">[#volatility-tax]</a> e comporta che non solo in un portfolio diversificato i rischi sono minori, ma i ritorni maggiori. Wait, com’è possibile? Mantenere un portfolio diversificato significa periodicamente ribilanciare le proprie azioni. I.e. devo vendere un po’ di azioni degli stock che nell’ultimo mese sono andati bene e comprare quelle di quelli che sono andate male, in modo da mantenere un investimento uniforme sugli stock; questo processo di bilanciamento è quello che mi alza i guadagni<a href="#modern-portfolio-theory">[#modern-portfolio-theory]</a> (?? this link).
        </p>

        <figure>
            <div style={{display: "grid", "grid-template-columns": "repeat(2, 1fr)", gap: "2rem"}}>
          <img
            src="/words/investing/diversification2-a.png"
            alt="a sinusoid function"
            style={{filter: "var(--green-filter) var(--distortion-filter) var(--noise-filter)"}}
          />
          <img
            src="/words/investing/diversification2-b.png"
            alt="a sinusoid function with a different phase and amplitude"
            style={{filter: "var(--green-filter) var(--distortion-filter) var(--noise-filter)"}}
          />
          <img
            src="/words/investing/diversification2-c.png"
            alt="a sinusoid function with yet a different phase and amplitude"
            style={{filter: "var(--green-filter) var(--distortion-filter) var(--noise-filter)"}}
          />
          <img
            src="/words/investing/diversification2-d.png"
            alt="The periodically rebalanced sum of the three sinusoids"
            style={{filter: "var(--green-filter) var(--distortion-filter) var(--noise-filter)"}}
          />
          </div>
          <figcaption>Questi sono i tre stock con i return del plot precedente. Il quarto è un portfolio composto dai tre stock, periodicamente ribilanciato. Il portfolio riesce a crescere nonostante gli stock sottostanti oscillino senza crescita.</figcaption>
        </figure>

        <p>
          Per vedere quanto il processo di bilanciamento sia importante pensiamola così. Tutte le aziende prima o poi falliscono. Comprando azioni di tutti gli stock esistenti ad un certo punto e semplicemnte tenendoli, prima o poi il valore di tutte andrà a 0. Anche se durante quel periodo il mercato sarà salito, l'unica salvezza è ribilanciare, vendendo parte delle vecchie azioni per comprare stock nascenti.
        </p>

        <blockquote>
          <p>The only free lunch is diversification<a href="#diversification">[#diversification]</a></p>
        </blockquote>

        <p>
          Il trucco di diversificare il mio portfolio funziona però soltanto fintatno che gli stock che aggiungo non sono correlati tra loro: supponiamo un bel giorno ci sia una crisi economica o una catastrofe, tutto il mercato andrà giù in maniera correlata, e la mia diversificazione non mi aiuta.
        </p>
        <p>
          Possiamo definire due tipi di rischio: quello dovuto all’imprevedibilità del mercato in toto (systematic risk)<a href="#systematic-risk">[#systematic-risk]</a> e quello dovuto all’imprevedibilità del singolo stock (specific risk)<a href="#specific-risk">[#specific-risk]</a> che si aggiunge al systematic risk. Il primo non è eliminabile diversificando e riflette le imprevedibilità del mercato finanziario nel suo complesso. Il secondo è la variabilità legata al singolo stock e può invece essere eliminato diversificando.
        </p>

        <h2>Non tutti gli stock nascono uguali</h2>
        <p>
          <em>Allora update della strategia: tutti gli stock sono equivalenti tra di loro, ma invece di puntare su uno stock a caso conviene diversificare comprando tutti gli stock disponibili sul mercato, in proporzione al loro market cap, in modo da minimizzare i rischi (specifici).</em>
        </p>

        <hr />

        <p>
          Meglio di prima, ma <strong>nope</strong>. Altro detour.
        </p>
        <p>
          Noi siamo devoti fedeli dell’efficient market hypothesis, non ci mettiamo a disegnare figurine geometriche sui market chart<a href="#technical-trading-patterns">[#technical-trading-patterns]</a> e crediamo che gli investitori siano enti razionali. Ciò comporta che, ad un rischio maggiore corrisponderanno ritorni maggiori. Abbiamo tuttavia visto come lo specific risk sia eliminabile diversificando, e quindi un rischio che non si riflette sugli investitori razionali che diversificano, quindi una componente di rischio che non aumenta gli expecterd returns. E' solo il non eliminabile systematic risk a cui corrispondono expected returns maggiori.
        </p>

        <h3>Beta Factor</h3>
        <p>
          Ci sono stock le cui performances dipendono fortemente dall'andamento dell'economia in generale, altri che sono invece più robusti. Un settore che produce beni di prima necessità non sarà toccato molto da una crisi, al contraro di un settore che si occupa di beni di lusso. Ogni stock ha quindi un suo proprio systematic risk, proprio come .?? ..bambino bello a mamma sua - speciale a modo suo...
        </p>
        <p>
          Qui entra in gioco il famoso "beta factor"<a href="#beta">[#beta]</a> che indica quanto un investimento amplifica l'andamento del mercato. Ad esempio se investo i miei soldi in un "value-weighted stock-market index" avrò <Math eq="\beta = 1" /> (per definizione), se tengo tutto in cash ho <Math eq="\beta = 0" />, se faccio metà e metà ho <Math eq="\beta = 0.5" />.
        </p>
        <p>
          Cash per <Math eq="\beta = 0" /> non è in realtà un buon esempio. Esistono prodotti finaziari considerati riskless nella pratica<a href="#risk-free-interest-rate">[#risk-free-interest-rate]</a><a href="#risk-free-bond">[#risk-free-bond]</a>, come i bonds emessi dagli Stati Uniti, approssimando la probabilità di bancarotta degli USA a 0. Essendo il rischio e la volatilità 0 (i returns dei bond sono definiti a priori ?? è vero?) anche <Math eq="\beta" /> vale 0. Stesso rischio del cash ma ritorni positivi. Questo rende il cash un investimento irrazionale per il nostro modello. Però il cash offre vantaggi differenti, tipo la possibilità di spenderli, i soldi. (Viene un etto e due, lascio? Sì, sì, accettate un duecentoventiseiesimo di bond USA a 30 anni?)
        </p>
        <p>
          Qui arriva il punto chiave: gli expected returns sono funzione dell rischio, ma solo quello sistematico. Il rischio sistematico è quello dovuto alle fluttuazioni del mercato nel suo complesso, se l'andamento di uno stock è completamente un-correlato con lo stock market, non importa quanto le fluttuazioni sono grandi, il rischio è completamente diversificabile, quindi nullo. Gli investitori compreranno lo stock qualora il prezzo dovesse essere sufficientemente basso da creare l'aspettativa di expected returns leggermente superiori al risk-free-interest-rate, questo induce un aumento del prezzo e quindi riduzione dei returns per capital, riportando i returns al risk-free-interest-rate. Immaginiamo invece ora uno stock che ha lo stesso systematic risk del mercato, il suo prezzo convergerà a un valore tale da rendere i returns uguali a quelli della media del mercato. 
        </p>
        <p>Beta è definita come:</p>

        <div style={{ "text-align": "center", margin: "1.5rem 0", "overflow-x": "auto" }}>
          <Math block eq="\beta_i = \frac{Cov(r_i, r_m)}{\sigma^2(r_m)} = Corr(r_i, r_m) \cdot \frac{\sigma(r_i)}{\sigma(r_m)}" />
        </div>

        <p>
          dove <Math eq="r_i" /> è il ritorno per un investimento i, <Math eq="r_m" /> è il ritorno del mercato, <Math eq="\beta_i" /> è la nostra beta che meglio fitta i dati minimizzando l'errore <Math eq="\epsilon" /> ed è il fattore di proporzionalità rispetto all'andamento del mercato di cui parlavamo. E <Math eq="\alpha_i" />? Eh, mmh, facciamo finta sia 0.
        </p>

        <div style={{ "text-align": "center", margin: "1.5rem 0" }}>
          <Math eq="\mu(r_i) - r_f = \beta_i \cdot \big(\mu(r_m) - r_f \big)" />
        </div>

        <p>
          dove <Math eq="r_f" /> è il ritorno per un investimento risk-free, quindi in pratica i bond USA. Quindi in media il ritorno per un investimento e' il ritorno base risk-free, piu' il ritorno aggiuntivo dovuto al rischio del mercato, moltiplicato per il fattore i, <Math eq="\beta_i" />.
        </p>

        <ol>
          <li>Non conosciamo la distribuzione di probabilità dei returns, o la sua <Math eq="\sigma" />. Quello che possiamo fare è solo guardare il passato storico e usare i precedenti returns come un campione estratto da questa distribuzione, per stimarne la <Math eq="\sigma" /> e quindi beta.</li>
          <li value="3">Tre. Il modello non funziona per un cazzo di niente.</li>
        </ol>


        <figure>
            <div style={{display: "grid", "grid-template-columns": "repeat(2, 1fr)", gap: "2rem"}}>
          <img
            src="/words/investing/capm-a.png"
            alt="CAPM plot"
            style={{filter: "var(--green-filter) var(--distortion-filter) var(--noise-filter)"}}
          />
          <img
            src="/words/investing/capm-b.png"
            alt="CAPM plot with a beautifully drawn butterfly on top of it."
            style={{filter: "var(--green-filter) var(--distortion-filter) var(--noise-filter)"}}
          />
          </div>
          <figcaption>Direttamente da wiki: returns vs beta per i 30 stock dell'indice Dow Jones. A sinistra la retta predetta dal CAMP, a destra il mio personale modello finanziario alternativo. Al lettore il giudizio su quale dei due abbia maggior potere predittivo</figcaption>
        </figure>

        <p>
          <a href="https://www.aeaweb.org/articles?id=10.1257/0895330042162430" target="_blank" rel="noopener">https://www.aeaweb.org/articles?id=10.1257/0895330042162430</a>
        </p>

        <p>
          Hedge funds, actively managed funds: aka anche i ricchi vogliono il loro “enlarge your penis”. Nonostante l’ efficient-market hypothesis non sia perfettamente soddisfatta, e quindi ci sia teoricamente spazio per fund manager skillati, si vede che i fund manager non sono poi così skillati<a href="#actively-managed-funds-video">[#actively-managed-funds-video]</a><a href="#active-managers-video">[#active-managers-video]</a><a href="#hedge-funds-video">[#hedge-funds-video]</a>. Poi le fees sono alte e non giustificano eventuali marginali guadagni.
        </p>
        <p>
          Considerazioni etiche: sì ma di fatto, alla fine dei conti, in cosa sto investendo? Lobby di armi che fomenta guerre? Lobby del tabacco che propaganda pubblicazioni biasate? Lobby del pertolio? Vale la pena prestare attenzione alla cosa e scegliere fondi socialmente responsabili o conviene compensare facendo beneficenza?
        </p>

        <figure>
          <img
            src="/words/investing/harry-markowitz.jpg"
            alt="Harry Markowitz"
            title="bla bla vla"
            style={{
              filter: "var(--green-filter) var(--distortion-filter) var(--noise-filter)",
              "max-width": "100%",
              height: "auto",
            }}
          />
          <figcaption>Eugene Fama sa di non aver bisogno delle tue lodi.</figcaption>
        </figure>

        <p>4 factors</p>

        <p>quello che dico sopra non e' proprio corretto. il rischio scorrelato dal rischio medio del mercato non e' ininfluente, perche' si puo' si ridurre diversificando, ma non lo si porta a zero. non ci sono infiniti stock. la sigma scorrelata la possiamo portare a sigma diviso radice di n_stocks. quando lo stock e' correlato con tutto il mercato non possiamo ridurre il rischio, quando e' completamente scorrelato da tutti gli altri stock possiamo ridurlo piu' stock compriamo. essendo il mercato grande con n molto grande possiamo forse addirittura trascurare il rischio specifico. ma in teoria no. il bonus return si applica anche per i rischi specifici, ma non direttameten per il rischio specifico, bensi' per qualcosa come rischio_specifico/sqrt(n_stoks)

questi pero' sono solo i due casi limite. what if uno stock e' correlato con una frazione del mercato? cosa succede se il mercato e' diviso in n macroblocchi correlati internamente ma non tra loro?
dipendera' da n. piu' n e' grande piu' possiamo ammortizzare il rischio. piu' n e' piccolo piu' il sottoblocco con maggior rischio specifico avra' ritorni elevati.</p>



Prendiamo la astrazione: il mercato è composto da $n$ macroblocchi.
Ogni blocco $i$ ha:
*   Una dimensione rispetto al mercato totale: $f_i$ (tale che $\sum f_i = 1$)
*   Una sua varianza intrinseca (il suo rischio): $\sigma_i^2$
*   Zero correlazione con gli altri blocchi.

Poiché i blocchi sono scorrelati, la varianza del mercato globale ($\sigma_M^2$) è la somma delle varianze dei singoli blocchi, pesate per il *quadrato* della loro dimensione:

$$ \sigma_M^2 = f_1^2 \sigma_1^2 + f_2^2 \sigma_2^2 + ... + f_n^2 \sigma_n^2 = \sum_{i=1}^{n} f_i^2 \sigma_i^2 $$

### Come si calcola il "Bonus Return" (Premio Atteso) di un blocco?

In un mercato in equilibrio, il rendimento in eccesso (sopra il risk-free rate $r_f$) che il mercato *deve* pagare per indurre gli investitori a detenere il blocco $i$ è proporzionale a quanto quel blocco contribuisce al rischio totale del portafoglio globale.

La formula matematica (derivata dai modelli di equilibrio generale) per il rendimento atteso del blocco $i$ (chiamiamolo $\mu_i$) è:

$$ \mu_i - r_f = A \cdot (f_i \cdot \sigma_i^2) $$

Dove:
*   $A$ è l'avversione al rischio media di tutti gli investitori (un numero costante > 0).
*   $\sigma_i^2$ è la volatilità del blocco.
*   $f_i$ è la frazione del mercato occupata dal blocco.


        <figure>
          <img
            src="/words/investing/eugene-fama2.jpg"
            alt="Eugene Fama"
            title="bla bla vla"
            style={{
              filter: "var(--green-filter) var(--distortion-filter) var(--noise-filter)",
              "max-width": "100%",
              height: "auto",
            }}
          />
          <figcaption>Eugene Fama sa di non aver bisogno delle tue lodi.</figcaption>
        </figure>

        <h2>Questa Efficient Market Hypothesis non mi convince fino in fondo</h2>
        <h3>Proprio così, e vorrei farti alcune domande al proposito</h3>
        <p>Prego.</p>

        <h3>Se ipotizziamo che il mercato sia razionale, e che gli enti razionali investano in passive index funds, allora non esisterebbero trader attivi razionali, non immetterebbero quindi informazione nei prezzi degli stock e il mercato diventerebbe irrazionale</h3>
        <p>
          Cosa c'è di più bello di un'ipotesi autoinconsistente per basarci tutti i propri risparmi, vero? Questo ha un nome, sdfsdf, 
        </p>

        <h3>Un mucchio di esaltati si sono messi d'accordo e hanno investito in massa in Game Stop stock che è salito 1000x, mi spieghi cosa c'è di razionale in ciò?</h3>
        <p>
          Io credo: l'investimento iniziale è stato irrazionale e quindi i ricavi fortuiti. O possiamo anche pensare che l'investimetno iniziale è stato fatto dal più intelligente di tutti (l'ipotesi è di efficienza quasi perfetta, Quelli al top con informazizoni più accurate / aggiornate o con capacità di elaborazione / intelligenza / razionalità superiore riscono a fare profitti a scapito degli altri, e sono questi a definire il grazo di razionalità del mercato). Dopodichè si è formato un fenomeno sociologico che non era prima prevedibile (a.k.a. non era previsto dal mercato, se non da questi ipotetici pochi investitori super-razionali) e la nuova informazione sull'esistenza di questo fenomeno, dell'esistenza di investitori disposti ad immolarsi per la "causa", è stata inglobata dal mercato e ha fatto variare il prezzo.
        </p>

        <h3>Ci credi veramente in quanto hai appena detto?</h3>
        <p>Insomma.</p>

        <hr />
        
        <div id="references" style={{ "font-size": "0.9em", "word-break": "break-word" }}>
          <h2>References & Links</h2>
          <ul>
            <li id="day-trading-video">
              <code>[#day-trading-video]</code>: <a href="https://www.youtube.com/watch?v=qhHOmZVAqBE" target="_blank" rel="noopener">https://www.youtube.com/watch?v=qhHOmZVAqBE</a>
            </li>
            <li id="picking-stock-video">
              <code>[#picking-stock-video]</code>: <a href="https://www.youtube.com/watch?v=AecvTErBQY8" target="_blank" rel="noopener">https://www.youtube.com/watch?v=AecvTErBQY8</a>
            </li>
            <li id="market-timing-video">
              <code>[#market-timing-video]</code>: <a href="https://www.youtube.com/watch?v=w_aOERmUWdA" target="_blank" rel="noopener">https://www.youtube.com/watch?v=w_aOERmUWdA</a>
            </li>
            <li id="no-technical-trading">
              <code>[#no-technical-trading]</code>: Questa reference sta a rappresentare l’assenza di evidenza a favore della tesi opposta. Non ho un link che mandi al mio tempo perso a cercarne, ma questo tempo è stato speso, e l’assenza di evidenza è evidenza al contrario
            </li>
            <li id="technical-trading-patterns">
              <code>[#technical-trading-patterns]</code>: <a href="https://www.thebalance.com/triangle-chart-patterns-and-day-trading-strategies-4111224" target="_blank" rel="noopener">https://www.thebalance.com/triangle-chart-patterns-and-day-trading-strategies-4111224</a>
            </li>
            <li id="enlarge-penis">
              <code>[#enlarge-penis]</code>: <a href="http://inara.sg/Over-The-Counter-Male-Enhancement-Reviews/Ebea62_Weird-Trick/To-Increase-Penis-Size.htm" target="_blank" rel="noopener">http://inara.sg/Over-The-Counter-Male-Enhancement-Reviews/Ebea62_Weird-Trick/To-Increase-Penis-Size.htm</a>
            </li>
            <li id="EMH">
              <code>[#EMH]</code>: <a href="https://en.wikipedia.org/wiki/Efficient-market_hypothesis" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Efficient-market_hypothesis</a>
            </li>
            <li id="risk-adjusted-return">
              <code>[#risk-adjusted-return]</code>: <a href="https://en.wikipedia.org/wiki/Risk-adjusted_return_on_capital" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Risk-adjusted_return_on_capital</a>
            </li>
            <li id="value-at-risk">
              <code>[#value-at-risk]</code>: <a href="https://en.wikipedia.org/wiki/Value_at_risk" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Value_at_risk</a>
            </li>
            <li id="loss-aversion">
              <code>[#loss-aversion]</code>: <a href="https://en.wikipedia.org/wiki/Loss_aversion" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Loss_aversion</a>
            </li>
            <li id="diversification">
              <code>[#diversification]</code>: <a href="https://en.wikipedia.org/wiki/Diversification_(finance)" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Diversification_(finance)</a>
            </li>
            <li id="volatility-tax">
              <code>[#volatility-tax]</code>: <a href="https://en.wikipedia.org/wiki/Volatility_tax" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Volatility_tax</a>
            </li>
            <li id="systematic-risk">
              <code>[#systematic-risk]</code>: <a href="https://en.wikipedia.org/wiki/Systematic_risk" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Systematic_risk</a>
            </li>
            <li id="specific-risk">
              <code>[#specific-risk]</code>: <a href="https://en.wikipedia.org/wiki/Modern_portfolio_theory#Systematic_risk_and_specific_risk" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Modern_portfolio_theory#Systematic_risk_and_specific_risk</a>
            </li>
            <li id="beta">
              <code>[#beta]</code>: <a href="https://en.wikipedia.org/wiki/Beta_(finance)" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Beta_(finance)</a>
            </li>
            <li id="actively-managed-funds-video">
              <code>[#actively-managed-funds-video]</code>: <a href="https://www.youtube.com/watch?v=slH1yygvGTY" target="_blank" rel="noopener">https://www.youtube.com/watch?v=slH1yygvGTY</a>
            </li>
            <li id="active-managers-video">
              <code>[#active-managers-video]</code>: <a href="https://www.youtube.com/watch?v=KmXOvj_kRLA" target="_blank" rel="noopener">https://www.youtube.com/watch?v=KmXOvj_kRLA</a>
            </li>
            <li id="hedge-funds-video">
              <code>[#hedge-funds-video]</code>: <a href="https://www.youtube.com/watch?v=EvjJ6y10WEg" target="_blank" rel="noopener">https://www.youtube.com/watch?v=EvjJ6y10WEg</a>
            </li>
            <li id="modern-portfolio-theory">
              <code>[#modern-portfolio-theory]</code>: <a href="https://en.wikipedia.org/wiki/Modern_portfolio_theory" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Modern_portfolio_theory</a>
            </li>
            <li id="error-of-the-mean">
              <code>[#error-of-the-mean]</code>: <a href="https://en.wikipedia.org/wiki/Standard_error#Standard_error_of_the_mean" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Standard_error#Standard_error_of_the_mean</a>
            </li>
            <li id="law-of-total-variance">
              <code>[#law-of-total-variance]</code>: <a href="https://en.wikipedia.org/wiki/Law_of_total_variance" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Law_of_total_variance</a>
            </li>
            <li id="risk-free-interest-rate">
              <code>[#risk-free-interest-rate]</code>: <a href="https://en.wikipedia.org/wiki/Risk-free_interest_rate" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Risk-free_interest_rate</a>
            </li>
            <li id="risk-free-bond">
              <code>[#risk-free-bond]</code>: <a href="https://en.wikipedia.org/wiki/Risk-free_bond" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Risk-free_bond</a>
            </li>
          </ul>

          <h4>Altre Risorse e Note</h4>
          <p>
            <a href="https://investor.vanguard.com/investing/how-to-invest/model-portfolio-allocation" target="_blank" rel="noopener">https://investor.vanguard.com/investing/how-to-invest/model-portfolio-allocation</a><br />
            <a href="https://en.wikipedia.org/wiki/Fama%E2%80%93French_three-factor_model" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Fama%E2%80%93French_three-factor_model</a><br />
            <a href="https://en.wikipedia.org/wiki/Efficient-market_hypothesis" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Efficient-market_hypothesis</a><br />
            <a href="https://en.wikipedia.org/wiki/Leverage_(finance)" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Leverage_(finance)</a><br />
            William Sharpe<br />
            Jack Treynor
          </p>
          <p>Systematic risk is the co-variance of an individual risky security with the market portfolio.</p>
          <p>a Robert J. Shiller non piace l'emh</p>
          <p>
            kundenservice@vanguard.com<br />
            +49 (0)30 31196465
          </p>
        </div>

      </Layout>
    </>
  );
}