import React, { useMemo } from "react";
import "./Hausemodelle.css";
import Hausemodelle from "./hausemodelle.webp";
import Bungalows from "../../images/Bungalows.webp";
import Einfamilienhaus from '../../images/EinfamilenHause.webp'
import Doppelhaus from '../../images/Dopplehause.webp'
import Mehrfamilienhaus from '../../images/Mehrfamilienhaus.webp'
import Modulhauser from '../../images/Modulhause.webp'
import Garagen from '../../images/Garagen.webp'

export default function HauseModelle() {
  const heroBg = useMemo(
    () => (typeof Hausemodelle === "string" ? Hausemodelle : Hausemodelle?.src),
    []
  );

  const bungalowsBg = useMemo(
    () => (typeof Bungalows === "string" ? Bungalows : Bungalows?.src),
    []
  );
    const einfamilienhausBg = useMemo(
    () => (typeof Einfamilienhaus === "string" ? Einfamilienhaus : Einfamilienhaus?.src),
    []
  );
    const doppelhausBg = useMemo(
    () => (typeof Doppelhaus === "string" ? Doppelhaus : Doppelhaus?.src),
    []
  );
    const mehrfamilienhaussBg = useMemo(
    () => (typeof Mehrfamilienhaus === "string" ? Mehrfamilienhaus : Mehrfamilienhaus?.src),
    []
  );
    const modulhauserBg = useMemo(
    () => (typeof Modulhauser === "string" ? Modulhauser : Modulhauser?.src),
    []
  );
    const garagenBg = useMemo(
    () => (typeof Garagen === "string" ? Garagen : Garagen?.src),
    []
  );

  return (
    <main>
      {/* HERO */}
      <section
        className="nw-hero"
        aria-label="Hausmodelle – Natural Wohnbau"
        style={{
          backgroundImage: `linear-gradient(160deg, rgba(21,34,43,0.55) 0%, rgba(15,23,28,0.65) 60%, rgba(11,17,22,0.75) 100%), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="nw-container nw-hero-inner">
          <div className="nw-eyebrow">Natürlich · Modern · Wertbeständig</div>
          <h1>Hausmodelle von Natural Wohnbau</h1>
          <p>
            Ob kompaktes Modulhaus, eleganter Bungalow oder großzügiges Mehrfamilienhaus:
            Unsere Modelle verbinden zeitloses Design, energieeffiziente Bauweise und
            hochwertige Materialien. Wir planen individuell – passend zu Ihrem Grundstück,
            Ihrem Stil und Ihrem Budget.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="nw-intro">
        <div className="nw-container">
          <h2>Architektur, die sich Ihrem Leben anpasst</h2>
          <p>
            Jede Lebensphase verdient die passende Architektur. Deshalb sind unsere Hausmodelle
            flexibel planbar – von smarten Grundrissen über barrierearmes Wohnen bis hin zu
            Mehrgenerationen-Konzepten. Dank energieeffizienter Gebäudehülle und hochwertiger
            Technik genießen Sie ein gesundes Raumklima und niedrige Betriebskosten.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="nw-container nw-grid" aria-label="Alle Hausmodelle">
        {/* Einfamilienhäuser */}
        <article 
        id="einfamilienhauser" 
        className="nw-card"
        onClick={() => window.location.href = '/einfamilienhauser'}
        style={{ cursor: 'pointer' }} // Shto stil për të treguar që është i klikueshëm
        >
          <div
            className="nw-card-media"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.2), rgba(21,34,43,.6)), url(${einfamilienhausBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <span className="nw-badge">Einfamilienhäuser</span>
          </div>
          <div className="nw-card-body">
            <h3>Freiraum für Familie &amp; Alltag</h3>
            <p>
              Klare Linien, warme Materialien dhe Grundrisse, die mitwachsen: Unsere
              Einfamilienhäuser verbinden Geborgenheit mit modernem Wohnkomfort – für heute
              und morgen.
            </p>
            <div className="nw-meta">
              <span>Individuelle Grundrisse</span>
              <span>Energieeffiziente Bauweise</span>
              <span>Offene Wohnküche möglich</span>
            </div>
            <ul className="nw-list">
              <li>Flexible Zimmeraufteilung für Homeoffice, Gäste oder Hobby</li>
              <li>Große Fensterflächen für viel Tageslicht &amp; Naturbezug</li>
              <li>Option für nachhaltige Materialien und smarte Haustechnik</li>
            </ul>
          </div>
        </article>

        {/* Doppelhäuser */}
      <article 
        id="doppelhaeuser" 
        className="nw-card"
        onClick={() => window.location.href = '/doppelhaus'}
        style={{ cursor: 'pointer' }} // Shto stil për të treguar që është i klikueshëm
      >
        <div
          className="nw-card-media"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.2), rgba(21,34,43,.6)), url(${doppelhausBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <span className="nw-badge">Doppelhäuser</span>
        </div>
        <div className="nw-card-body">
          <h3>Mehr Effizienz – volle Privatsphäre</h3>
          <p>
            Clevere Zwillingslösungen mit getrennten Eingängen dhe durchdachter Schalldämmung:
            Ideal für befreundete Familien oder Generationenwohnen.
          </p>
          <div className="nw-meta">
            <span>Attraktive Baukosten</span>
            <span>Getrennte Gärten möglich</span>
            <span>Spiegel- oder Versatzbau</span>
          </div>
          <ul className="nw-list">
            <li>Optimierte Grundstücksnutzung &amp; kurze Leitungswege</li>
            <li>Privatsphäre durch versetzte Fensterachsen</li>
            <li>Optionale gemeinsame Technikzone für mehr Effizienz</li>
          </ul>
        </div>
      </article>
        {/* Mehrfamilienhäuser */}
        <article 
        id="mehrfamilienhaus" 
        className="nw-card"
        onClick={() => window.location.href = '/mehrfamilienhaus'}
        style={{ cursor: 'pointer' }} // Shto stil për të treguar që është i klikueshëm
        >
          <div
            className="nw-card-media"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.2), rgba(21,34,43,.6)), url(${mehrfamilienhaussBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <span className="nw-badge">Mehrfamilienhäuser</span>
          </div>
          <div className="nw-card-body">
            <h3>Wertanlage mit Weitblick</h3>
            <p>
              Flexible Wohnungszuschnitte, barrierearme Konzepte dhe nachhaltige Technik
              machen unsere Mehrfamilienhäuser zu langfristig stabilen Investitionen.
            </p>
            <div className="nw-meta">
              <span>Skalierbare Einheiten</span>
              <span>Barrierearm planbar</span>
              <span>Energieeffizienz</span>
            </div>
            <ul className="nw-list">
              <li>Effiziente Tragstruktur für kurze Bauzeit</li>
              <li>Gemeinschaftsbereiche (Fahrradraum, Waschraum, Technik)</li>
              <li>Attraktive Fassaden mit langlebigen Materialien</li>
            </ul>
          </div>
        </article>

        {/* Modulhäuser */}
        <article 
        id="modulhauser" 
        className="nw-card"
        onClick={() => window.location.href = '/modulhauser'}
        style={{ cursor: 'pointer' }} // Shto stil për të treguar që është i klikueshëm
        >
          <div
            className="nw-card-media"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.2), rgba(21,34,43,.6)), url(${modulhauserBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <span className="nw-badge">Modulhäuser</span>
          </div>
          <div className="nw-card-body">
            <h3>Schnell, flexibel, erweiterbar</h3>
            <p>
              Vorfertigung im Werk, minimale Baustellenzeit dhe höchste Präzision:
              Modulhäuser sind die smarte Antwort auf moderne Wohnbedürfnisse.
            </p>
            <div className="nw-meta">
              <span>Kürzere Bauzeit</span>
              <span>Erweiterbar</span>
              <span>Nachhaltige Systeme</span>
            </div>
            <ul className="nw-list">
              <li>Module kombinierbar – vom Tiny Home bis zur Familienlösung</li>
              <li>Trockenbau &amp; präzise Fugen für perfekte Oberflächen</li>
              <li>Ideal për Hanglagen &amp; kleine Grundstücke</li>
            </ul>
          </div>
        </article>

        {/* Bungalows */}
        <article 
        id="bungalows" 
        className="nw-card"
        onClick={() => window.location.href = '/bungalows'}
        style={{ cursor: 'pointer' }} // Shto stil për të treguar që është i klikueshëm
        >
          <div
            className="nw-card-media"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.2), rgba(21,34,43,.6)), url(${bungalowsBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <span className="nw-badge">Bungalows</span>
          </div>

          <div className="nw-card-body">
            <h3>Alles auf einer Ebene</h3>
            <p>
              Barrierearmes Wohnen mit Weite: Bodentiefe Fenster, überdachte Terrassen und
              fließende Raumfolgen sorgen për entspannte Eleganz.
            </p>
            <div className="nw-meta">
              <span>Stufenlos</span>
              <span>Große Terrassen</span>
              <span>Pflegeleicht</span>
            </div>
            <ul className="nw-list">
              <li>Großzügige Wohn- &amp; Essbereiche mit Gartenbezug</li>
              <li>Optionale Suite mit Ankleide &amp; Ensuite-Bad</li>
              <li>Schattenspendende Vordächer &amp; sommerlicher Wärmeschutz</li>
            </ul>
          </div>
        </article>

        {/* Garagen & Carports */}
        <article 
        id="garagenundcarport" 
        className="nw-card"
        onClick={() => window.location.href = '/garagenundcarport'}
        style={{ cursor: 'pointer' }} // Shto stil për të treguar që është i klikueshëm
        >
          <div
            className="nw-card-media"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.2), rgba(21,34,43,.6)), url(${garagenBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <span className="nw-badge">Garagen &amp; Carports</span>
          </div>
          <div className="nw-card-body">
            <h3>Schutz &amp; Stil  perfekt integriert</h3>
            <p>
              Architektonisch abgestimmt auf Ihr Haus: Garagen dhe Carports mit Stauraum,
              Ladevorbereitung und hochwertigen Oberflächen.
            </p>
            <div className="nw-meta">
              <span>Design passend zum Haus</span>
              <span>Stauraum &amp; Technik</span>
              <span>Auf Wunsch PV-ready</span>
            </div>
            <ul className="nw-list">
              <li>Materialmix (Holz, Putz, Metall) për langlebige Anmutung</li>
              <li>Integrierte Abstellnischen &amp; Fahrradbereiche</li>
              <li>Vorausschauende Elektroplanung (Wallbox, Beleuchtung)</li>
            </ul>
          </div>
        </article>
      </section>

      {/* USP / Mehrwerte */}
      <section className="nw-container nw-split" aria-label="Ihre Vorteile">
        <div className="nw-slab">
          <h4>Warum Natural Wohnbau?</h4>
          <p>
            Wir kombinieren präzise Planung, hochwertige Materialien dhe klare Kommunikation.
            So entsteht Architektur mit Beständigkeit – ästhetisch, effizient dhe wertvoll.
          </p>
          <div className="nw-kpis" role="list">
            <div className="nw-kpi" role="listitem"><b>Individuell</b><span>Planung nach Maß</span></div>
            <div className="nw-kpi" role="listitem"><b>Effizient</b><span>Energie &amp; Betrieb</span></div>
            <div className="nw-kpi" role="listitem"><b>Zuverlässig</b><span>Fixe Abläufe</span></div>
          </div>
        </div>
        <div className="nw-slab">
          <h4>Material &amp; Technik</h4>
          <p>
            Von der Fassade bis zur Haustechnik stimmen wir alle Komponenten aufeinander ab,
            damit Optik, Komfort und Nachhaltigkeit im Einklang sind.
          </p>
          <ul className="nw-list">
            <li>Nachhaltige Baustoffe &amp; präzise Ausführung</li>
            <li>Gesundes Raumklima durch durchdachte Hülle</li>
            <li>Optional: Smart-Home, Lüftung, Verschattung</li>
          </ul>
        </div>
      </section>
    </main>
  );
}