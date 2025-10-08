import React from "react";
import "./Bungalows.css";
import Hero from "./BungalowsHero";
import Bungalows1 from "./Bungalows1.webp";
import bungalows2 from "./Bungalows2.webp";
import Slider from "../Reusable/StandardsSlider";
import bungalows3 from "./Bungalows3.webp";
import BungalowsL from "./BungalowsL.webp";
import BungalowsA from "./BungalowsA.webp";
import BungalowsC from "./BungalowsClassic.webp";
import BungalowsBarr from "./BungalowsBarr.webp";
import Solar from "./Solar.webp";
import kitchen from "./Kitchen.webp";
import Optim80 from "./Optima801.jpg";
import Optima90 from "./Optima901.jpg";
import Optima902 from "./Optima9021.jpg";
import Form from "../Reusable/formwizard";
import Bauweisen from "../Reusable/Bauweisen"

const options = [
  {
    title: "Optima 80",
    slug: "/optima-80",
    image: Optim80,
    desc:
      "Optima 80 bietet eine Nettofläche von über 80  m², die mit zwei Schlafzimmern und einem großen Wohn- und Essbereich ausgestattet ist. Die überdachte Terrasse bietet bei Wind und Wetter lauschige Grillabende.",
    infos: {
      hint: "Angaben von Raumgrössen, siehe Grundriss",
      netto: "Nettofläche 82,3 m²",
      brutto: "Bruttofläche 100,46 m²",
    },
  },
  {
    title: "Optima 90",
    slug: "/optima-90",
    image: Optima90,
    desc:
      "Für die gesamte Familie ist das geräumige Wohnzimmer ein Treffpunkt. Die großen Fenster ermöglichen es Ihnen, direkt in Ihren Garten zu blicken und das einfallende Tageslicht zu genießen. Das Schlafzimmer und die Kinderzimmer haben die richtigen Wohlfühlmaße und bieten jedem Familienmitglied seinen persönlichen Rückzugsort.",
    infos: {
      hint: "Angaben von Raumgrössen, siehe Grundriss",
      netto: "Nettofläche 91,8 m²",
      brutto: "Bruttofläche 111,20 m²",
    },
  },
  {
    title: "Optima 90/2",
    slug: "/optima-90-2",
    image: Optima902,
    desc:
      "Für die gesamte Familie ist das geräumige Wohnzimmer ein Treffpunkt. Die großen Fenster ermöglichen es Ihnen, direkt in Ihren Garten zu blicken und das einfallende Tageslicht zu genießen. Das Schlafzimmer und die Kinderzimmer haben die richtigen Wohlfühlmaße und bieten jedem Familienmitglied seinen persönlichen Rückzugsort.",
    infos: {
      hint: "Angaben von Raumgrössen, siehe Grundriss",
      netto: "Nettofläche 92,07 m²",
      brutto: "Bruttofläche 114,58 m²",
    },
  },
];

const Bungalows = () => {
  return (
    <>
      <Hero />

      {/* Seksioni kryesor: Çfarë është një Bungalow */}
      <section className="bungalow-section">
        <div className="bungalow-container">
          <h2 className="bungalow-title">Was ist ein Bungalow?</h2>
          <p className="bungalow-text">
            Ein Bungalow ist ein freistehendes Einfamilienhaus, das alle Wohnräume
            auf einer Ebene vereint. Diese Bauweise ist nicht nur besonders
            praktisch, sondern auch äußerst beliebt bei Familien, Senioren und
            Menschen mit eingeschränkter Mobilität. Die offene Raumgestaltung und
            der direkte Zugang zum Garten bieten einen Wohnkomfort, den
            mehrstöckige Häuser oft nicht bieten können.
          </p>
        </div>
      </section>

      {/* Galeria me 2 foto */}
      <section className="bungalow-gallery-section">
        <div className="bungalow-gallery">
          <img src={Bungalows1} alt="Bungalow Ansicht 1" />
          <img src={bungalows2} alt="Bungalow Ansicht 2" />
        </div>
      </section>

      <Slider />

      {/* Seksioni tekst + foto */}
      <section className="bungalow-extra-section">
        <div className="bungalow-extra-container">
          <div className="bungalow-extra-text">
            <h2>Warum ein Natural Wohnbau Bungalow die richtige Wahl ist?</h2>
            <p>
              Unsere Natural Wohnbau Bungalows bieten Ihnen ein komfortables,
              treppenfreies Wohnen. Zusätzlich erhöhen sie die Sicherheit im
              Alltag, was besonders für Senioren und Familien von Vorteil ist.
              Dank der offenen Grundrisse können Sie Ihr Zuhause flexibel
              gestalten und individuell an Ihre persönlichen Wünsche anpassen.
            </p>

            <h3>Mehr Platz gewünscht?</h3>
            <p>
              Falls Sie später mehr Raum benötigen, lässt sich Ihr Bungalow
              problemlos erweitern. Dank unserer modularen Bauweise können Sie
              Anbauten oder zusätzliche Zimmer einfach und effizient realisieren,
              ohne großen Aufwand.
            </p>
          </div>

          <div className="bungalow-extra-image">
            <img src={bungalows3} alt="Bungalow Beispiel" />
          </div>
        </div>
      </section>

      {/* Seksioni hyrës për formatet */}
      <section className="bungalow-forms-section">
        <div className="bungalow-forms-container">
          <h2>Welche Bungalow-Bauformen gibt es?</h2>
          <h3>Vielfalt trifft auf Funktionalität</h3>
          <p>
            Bungalows sind so vielseitig wie die Wünsche ihrer Bewohner. Je nach
            Lebensstil, Grundstücksgröße und Design-Vorlieben gibt es verschiedene
            Grundrissformen, die individuelle Vorteile bieten.
          </p>
        </div>
      </section>

      {/* 3 formatet */}
      <section className="bungalow-types-section">
        <div className="types-container">
          <article className="type-card">
            <div className="type-image">
              <img src={BungalowsL} alt="Winkelbungalow im L-Format" />
            </div>
            <div className="type-content">
              <h3 className="type-title">Der Winkelbungalow – Mehr Privatsphäre im L-Format</h3>
              <p className="type-text">
                Diese Bauform nutzt das Grundstück clever aus und schafft einen geschützten
                Gartenbereich, der nicht direkt einsehbar ist. Der L-förmige Grundriss trennt Wohn-
                und Schlafbereiche auf natürliche Weise und bietet Platz für eine Terrasse im Innenwinkel.
              </p>
              <p className="type-ideal">
                <span className="tag-label">Ideal für:</span> Familien mit Kindern, Menschen mit Wunsch nach Rückzugsmöglichkeiten
              </p>
            </div>
          </article>

          <article className="type-card">
            <div className="type-image">
              <img src={BungalowsA} alt="Atrium-Bungalow mit Innenhof (U-Form)" />
            </div>
            <div className="type-content">
              <h3 className="type-title">Der Atrium-Bungalow – Lichtdurchfluteter Wohntraum</h3>
              <p className="type-text">
                Auch als U-förmiger Bungalow bekannt, schafft diese Bauweise einen privaten Innenhof,
                der als ruhige Oase dient – perfekt für Gartenliebhaber, Wellnessbereiche oder einen
                kleinen Pool. Dank großer Glasflächen strömt viel Tageslicht ins Innere.
              </p>
              <p className="type-ideal">
                <span className="tag-label">Ideal für:</span> Ästheten, Ruhesuchende, Designliebhaber
              </p>
            </div>
          </article>

          <article className="type-card">
            <div className="type-image">
              <img src={BungalowsC} alt="Klassischer Bungalow rechteckig" />
            </div>
            <div className="type-content">
              <h3 className="type-title">Der klassische Bungalow – Zeitlos und funktional</h3>
              <p className="type-text">
                Der Klassiker unter den Bungalows besticht durch seine rechteckige Form und klare
                Struktur. Er eignet sich besonders für schmale oder kleinere Grundstücke und bietet
                dennoch ausreichend Platz für ein komfortables Familienleben. Durch kurze Wege zwischen
                den Räumen ist er äußerst praktisch im Alltag.
              </p>
              <p className="type-ideal">
                <span className="tag-label">Ideal für:</span> Paare, kleine Familien, minimalistische Lebensstile
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Vorteile */}
      <section className="bungalow-vorteile-section">
        <div className="vorteile-container">
          <h2 className="vorteile-title">Vorteile eines Bungalows</h2>

          <div className="vorteile-grid">
            <article className="vorteile-card">
              <div className="vorteile-image">
                <img src={BungalowsBarr} alt="Barrierefreies Wohnen" />
              </div>
              <h3>Barrierefreies Wohnen</h3>
              <p>
                Ein wesentlicher Vorteil von Bungalows ist die Barrierefreiheit.
                Ohne Treppen oder enge Durchgänge ist diese Wohnform ideal für jedes Alter
                und jede Lebenssituation – von jungen Familien bis hin zu älteren Menschen.
              </p>
            </article>

            <article className="vorteile-card">
              <div className="vorteile-image">
                <img src={Solar} alt="Energieeffizienz und Nachhaltigkeit" />
              </div>
              <h3>Energieeffizienz und Nachhaltigkeit</h3>
              <p>
                Durch die kompakte Bauweise lassen sich Bungalows besonders
                energieeffizient planen und umsetzen. In Kombination mit einer
                Photovoltaikanlage oder Wärmepumpe wird der Bungalow schnell
                zum nachhaltigen Traumhaus.
              </p>
            </article>

            <article className="vorteile-card">
              <div className="vorteile-image">
                <img src={kitchen} alt="Offenes Wohnkonzept" />
              </div>
              <h3>Offenes Wohnkonzept</h3>
              <p>
                Ein weiterer Pluspunkt: Die offene Raumaufteilung ermöglicht ein
                modernes Wohngefühl mit viel Tageslicht. Große Fensterfronten
                und fließende Übergänge zwischen Küche, Wohn- und Essbereich
                sind typisch für diese Hausform.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Opsionet me kartat “split” dhe chips identike */}
      <section className="bo-section">
        <div className="bo-wrap">
          <h2 className="bo-title">Weitere Bungalow-Optionen</h2>

          <div className="bo-list">
            {options.map((o, i) => (
              <article className={`bo-item ${i % 2 === 1 ? "is-alt" : ""}`} key={o.slug}>
                <div className="bo-media">
                  <img src={o.image} alt={`${o.title} Außenansicht`} />
                </div>

                <div className="bo-content">
                  <header className="bo-header">
                    <h3 className="bo-heading">{o.title}</h3>
                  </header>

                  <p className="bo-desc">{o.desc}</p>

                  <div className="bo-infos">
                    <div className="bo-info">
                      <span className="bo-icon" aria-hidden="true" />
                      <span>{o.infos.hint}</span>
                    </div>
                    <div className="bo-info">
                      <span className="bo-icon" aria-hidden="true" />
                      <span>{o.infos.netto}</span>
                    </div>
                    <div className="bo-info">
                      <span className="bo-icon" aria-hidden="true" />
                      <span>{o.infos.brutto}</span>
                    </div>
                  </div>

                  <div className="bo-cta">
                    <a className="bo-btn" href={o.slug} aria-label={`Mehr erfahren über ${o.title}`}>
                      Mehr erfahren
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Bauweisen/>      
      <Form />
    </>
  );
};

export default Bungalows;
