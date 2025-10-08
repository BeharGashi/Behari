import React from "react";
import "./Smart.css";
import Hero from './SMHero'

/* Rregullo rrugët sipas projektit tënd */
import FunktionenImg from "./Funktionen.webp";
import WlanImg from "./Wlan.webp";

export default function Smart() {
  return (
    <>
    <Hero/>
    <section className="smart">
      {/* ===== HERO ===== */}
      <div className="sm-section sm-hero">
        <div className="sm-hero__grid">
          <article className="sm-hero__content">
            <span className="sm-eyebrow">Smart Home: Das vernetzte Zuhause</span>
            <h1 className="sm-title">
              Mehr Komfort, Sicherheit <span>und Effizienz</span>
            </h1>
            <p className="sm-lead">
              Ein klug vernetztes Zuhause automatisiert Alltagsabläufe, spart
              Energie und erhöht die Sicherheit – vom automatisch dimmenden Licht
              bis te zu Rollläden, die bei Dunkelheit oder Unwetter reagieren.
              Steuern Sie alles bequem per App – vom Sofa oder unterwegs.
            </p>

<ul className="sm-chips" role="list">
  <li className="sm-chip">
    {/* Shield – Sicherheit */}
    <svg className="sm-ico" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z"
            fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
    Sicherheit
  </li>

  <li className="sm-chip">
    {/* Sofa – Komfort */}
    <svg className="sm-ico" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 13v-1a3 3 0 016 0v1M13 13v-1a3 3 0 016 0v1"
            fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <rect x="3" y="13" width="18" height="4" rx="2" ry="2"
            fill="none" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M6 17v2M18 17v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
    Komfort
  </li>

  <li className="sm-chip">
    {/* Leaf – Energieeffizienz */}
    <svg className="sm-ico" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c-4.5 2-8 6-8 10s3.5 8 8 8 8-4 8-8-3.5-8-8-10z"
            fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M12 7v10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
    Energieeffizienz
  </li>

  <li className="sm-chip">
    {/* Smartphone – App-Steuerung */}
    <svg className="sm-ico" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="7" y="3" width="10" height="18" rx="2" ry="2"
            fill="none" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M10 5h4M11.5 18h1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
    App-Steuerung
  </li>
</ul>
          </article>
        </div>
      </div>

      {/* ===== Was ist ein Smart Home? ===== */}
      <div className="sm-section">
        <article className="sm-card sm-card--stripe">
          <h2 className="sm-subtitle">
            Was ist ein Smart Home? – Intelligente Hausautomation für Ihr Fertighaus
          </h2>
          <p>
            Unter Smart Home versteht man die intelligente Vernetzung einzelner
            Komponenten, die zentral über verschiedene Endgeräte gesteuert und
            überwacht werden. Der wahre Mehrwert liegt im Zusammenspiel der Systeme,
            die alltägliche Abläufe automatisieren und für mehr Sicherheit,
            Energieeffizienz und Komfort sorgen.
          </p>
          <p className="sm-note">
            Dank der intelligenten Steuerung passt sich Ihr Zuhause Ihren
            Bedürfnissen an – für eine angenehme Wohnatmosphäre, die den Alltag
            erleichtert.
          </p>
        </article>
      </div>

      {/* ===== Funktionen einer Hausautomation ===== */}
      <div className="sm-section">
        <div className="sm-split">
          <figure className="sm-media sm-media--frame">
            <img
              src={FunktionenImg}
              alt="Smart Home Funktionen – Visualisierung"
              loading="lazy"
            />
          </figure>

          <article className="sm-content">
            <h3 className="sm-subtitle">Funktionen einer Hausautomation</h3>
            <ol className="sm-olist">
              <li>
                Rollladen & Jalousien mit Sonnenwächter und Regen-/Windsensor –
                z.&nbsp;B. Wärmeschutz oder Schutz bei Unwettern.
              </li>
              <li>
                Heizung – intelligentes, energiesparendes System mit Fenster-/
                Türsensoren sowie An-/Abwesenheitsmodus.
              </li>
              <li>
                Einbruchschutz – Bewegungsmelder, Videosprechanlage,
                Anwesenheitssimulation.
              </li>
              <li>
                Schnelle Hilfe im Notfall – Unfall-Sender/Sensoren, Panikschalter,
                vernetzte Rauchmelder.
              </li>
              <li>
                Licht – von zentralem Schalten bis zu Lichtszenarien (z.&nbsp;B. für
                Candle-Light-Dinner).
              </li>
              <li>
                Musik/Entertainment – Szenarien für Heimkino, Lieblingsmusik in
                mehreren Räumen.
              </li>
              <li>Sonstiges – Markise, Waschmaschine, TV u. v. m.</li>
            </ol>
          </article>
        </div>
      </div>

      {/* ===== Wie wird gesteuert? ===== */}
      <div className="sm-section">
        <div className="sm-split sm-split--alt">
          <article className="sm-content">
            <h3 className="sm-subtitle">Wie wird ein Smart Home gesteuert?</h3>
            <p>
              Die einfachste Variante sind Taster, die Szenarien auslösen. Bei mehreren
              Komponenten werden diese vernetzt und gezielt ferngesteuert – über
              Wanddisplays an zentralen Stellen oder per Tablet/Smartphone via Internet.
            </p>
            <p className="sm-note">
              So steuern Sie Ihr Natural Wohnbau Smart Home bequem mit einer App –
              Licht, Rollladen oder Markise – zu Hause oder unterwegs.
            </p>
          </article>

          <figure className="sm-media">
            <img
              src={WlanImg}
              alt="App-Steuerung und WLAN-Konnektivität"
              loading="lazy"
            />
          </figure>
        </div>
      </div>

      {/* ===== Smart Home Ready ===== */}
      <div className="sm-section">
        <article className="sm-card">
          <h3 className="sm-subtitle">Smart Home Ready mit Natural Wohnbau</h3>
          <p>
            Teile der Elektroinstallation werden durch smarte Komponenten ergänzt.
            Schalter funktionieren wie gewohnt – zusätzliche Funktionen steuern Sie
            über eine zentrale App.
          </p>
          <ul className="sm-list" role="list">
            <li>
              Steuerung über einen Smart Home Controller – verbunden mit dem
              Internetrouter, einfach per App konfigurierbar.
            </li>
            <li>
              Optimiert Komfort, Sicherheit und Energieeffizienz in Ihrem Zuhause.
            </li>
          </ul>
        </article>
      </div>

      {/* ===== Installation – Timeline ===== */}
      <div className="sm-section">
        <div className="sm-timeline">
          <div className="sm-step">
            <div className="sm-step__dot" />
            <div className="sm-step__body">
              <h4 className="sm-step__title">Installation durch Elektrofachkraft</h4>
              <p>
                Planung & Einbau der gewählten smarten Komponenten (230 V). Bei der
                Hausabnahme erhalten die Bauherren ein System mit Grundfunktionen.
              </p>
            </div>
          </div>

          <div className="sm-step">
            <div className="sm-step__dot" />
            <div className="sm-step__body">
              <h4 className="sm-step__title">Inbetriebnahme nach Hausübergabe</h4>
              <p>
                Die Bauherren nehmen den Smart Home Controller in Betrieb und binden die
                Komponenten in die zentrale App ein – für einen nahtlosen Start.
              </p>
            </div>
          </div>

          <div className="sm-step">
            <div className="sm-step__dot" />
            <div className="sm-step__body">
              <h4 className="sm-step__title">Gut zu wissen</h4>
              <p className="sm-callout">
                Das System kann später mit Komponenten aus dem <strong>Bosch Smart Home</strong>{" "}
                Onlineshop erweitert werden (Bewegungsmelder, Rauchwarnmelder,
                schaltbare Steckdosen, Wassermelder u. a.).
              </p>
              <ul className="sm-compat" role="list" aria-label="Kompatibilität">
                <li className="sm-compat__chip">Amazon Alexa</li>
                <li className="sm-compat__chip">Google Assistant</li>
                <li className="sm-compat__chip">Apple HomeKit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Konnektivität ===== */}
      <div className="sm-section">
        <div className="sm-card sm-card--soft">
          <div className="sm-connect">
            <figure className="sm-media sm-media--small">
              <img
                src={WlanImg}
                alt="WLAN / Mobile Daten für App-Steuerung"
                loading="lazy"
              />
            </figure>
            <div>
              <h3 className="sm-subtitle">Konnektivität & Updates</h3>
              <p>
                Für Steuerung und Updates über die <strong>Bosch Smart Home App</strong>
                &nbsp;benötigt Ihr Mobilgerät eine Internetverbindung – über mobile
                Daten oder WLAN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
