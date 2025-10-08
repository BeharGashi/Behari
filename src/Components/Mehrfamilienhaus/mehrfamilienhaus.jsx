// HeroMehrfamilienhaus.jsx
import React from "react";
import "./mehrfamilienhaus.css";
import bgImage from "./HeroMehrfamilienhaus.webp";
import introImg from "./IntroMehrfamilienhaus.webp";
import systemImg from "./SystemMehrfamilienhaus.webp";

import ModTextSlider from "./ModTextSlider";
import Bauweise from "../Reusable/Bauweisen";
import Form from "../Reusable/formwizard";

const ITEMS = [
  { title: "Warum mit Natural Wohnbau als Baupartner?", text: "Umfangreiche Erfahrung mit einem breiten Kunden" },
  { title: "Warum mit Natural Wohnbau als Baupartner?", text: "Haus und Keller aus eigener Fertigung" },
  { title: "Warum mit Natural Wohnbau als Baupartner?", text: "Ökologische Holzbauweise auch beim Mehrfamilienhaus" },
  { title: "Warum mit Natural Wohnbau als Baupartner?", text: "Wohngesundheit durch geprüfte Materialien – auf Wunsch mit Zertifikat" },
  { title: "Warum mit Natural Wohnbau als Baupartner?", text: "Alle Erdgeschosswohnungen der Häuser Gebäudeklasse 3 (M-Entwurfsnummer) sind rollstuhlgerecht" },
  { title: "Warum mit Natural Wohnbau als Baupartner?", text: "3 große Ausstattungszentren mit Markenprodukten und Fachberatung" },
  { title: "Warum mit Natural Wohnbau als Baupartner?", text: "Gütegeprüfte, überwachte, witterungsunabhängige Fertigung" },
  { title: "Warum mit Natural Wohnbau als Baupartner?", text: "Bauleitung, Montage, Innenausbau mit eingespielten Teams" },
  { title: "Warum mit Natural Wohnbau als Baupartner?", text: "Wirtschaftliche Konzepte für Heizung, Lüftung, Sanitär" },
  { title: "Warum mit Natural Wohnbau als Baupartner?", text: "Fassadengestaltung in Putz, Holz, Klinker, Fassadenplatten etc." },
  { title: "Warum mit Natural Wohnbau als Baupartner?", text: "Detaillierte Bau- und Ausstattungsbeschreibung" },
  { title: "Warum mit Natural Wohnbau als Baupartner?", text: "Modern-Design-Schreinerei për individuelle Einbaumöbel" },
  { title: "Warum mit Natural Wohnbau als Baupartner?", text: "Einbauküchen aus dem Natural Wohnbau-Küchenstudio" },
  { title: "Warum mit Natural Wohnbau als Baupartner?", text: "Eigener Kundendienst und Modernisierungsservice" },
];

export default function HeroMehrfamilienhaus() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero-mfh" aria-label="Mehrfamilienhaus Fertighaus aus Holz">
        <div
          className="hero-mfh__bg"
          aria-hidden="true"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="hero-mfh__overlay" />
        <div className="hero-mfh__ribbon" aria-hidden="true" />

        <div className="hero-mfh__wrap">
          <div className="hero-mfh__content">
            <p className="hero-mfh__kicker" data-anim="fade-up">
              Effizient wohnen, modular gedacht
            </p>

            <h1 className="hero-mfh__title" data-anim="fade-up">
              Mehrfamilienhaus Fertighaus aus Holz{" "}
              <span className="hero-mfh__title-accent">Flexibel &amp; Nachhaltig</span>
            </h1>

            <p className="hero-mfh__subtitle" data-anim="fade-up">
              Unsere Mehrfamilienhaus Fertighäuser bieten moderne Wohnlösungen für mehrere Parteien –
              ökologisch, schnell gebaut und individuell planbar.
            </p>
          </div>
        </div>
      </section>

      {/* ===== INTRO (fixed) ===== */}
      <section
        className="mfh-intro"
        aria-label="Fertighaus Mehrfamilienhaus – schnell, nachhaltig & individuell"
      >
        <div className="mfh-intro__wrap">
          {/* Teksti */}
          <div className="mfh-intro__text">
            <h2 className="mfh-intro__title" data-anim="fade-up">
              Fertighaus Mehrfamilienhaus{" "}
              <span className="mfh-intro__accent">schnell, nachhaltig &amp; individuell</span>
            </h2>

            <p className="mfh-intro__p" data-anim="fade-up">
              Ein Fertighaus Mehrfamilienhaus bietet die ideale Lösung për modernes und nachhaltiges
              Wohnen mit mehreren Wohneinheiten. Durch die modulare Bauweise in Holz können
              verschiedene Grundrisse flexibel umgesetzt werden – ganz nach Bedarf, ob për Familien,
              Generationenwohnen oder als Investitionsobjekt.
            </p>

            <p className="mfh-intro__p" data-anim="fade-up">
              Dank der kurzen Bauzeit und präzisen Vorfertigung profitieren Bauherren von einer hohen
              Planbarkeit, reduzierten Kosten und einer energieeffizienten Ausführung. Unsere Konzepte
              vereinen architektonische Freiheit, moderne Gestaltung und ökologisches Bauen auf
              höchstem Niveau.
            </p>

            <p className="mfh-intro__p" data-anim="fade-up">
              Mit Natural Wohnbau entsteht Ihr Mehrfamilienhaus als Fertighaus – zukunftssicher,
              individuell und mit einem klaren Fokus auf Qualität und Nachhaltigkeit.
            </p>
          </div>

          {/* Media */}
          <figure className="mfh-intro__media" aria-label="Moderne Holz-Mehrfamilienhaus Architektur">
            <div
              className="mfh-intro__photo"
              style={{ backgroundImage: `url(${introImg})` }}
              aria-hidden="true"
            />
            <div className="mfh-intro__frame" aria-hidden="true" />
            <div className="mfh-intro__shine" aria-hidden="true" />
          </figure>
        </div>
      </section>

      {/* ===== SYSTEM ===== */}
      <section className="mfh-system" aria-labelledby="mfh-system__title">
        <div className="mfh-system__wrap">
          <header className="mfh-system__header mfh-system__header--center">
            <span className="mfh-system__kicker" data-anim="fade-up">
              Fertighaus Mehrfamilien
            </span>
            <h2 id="mfh-system__title" className="mfh-system__title" data-anim="fade-up">
              Moderne Wohnlösungen mit System
            </h2>
            <i className="mfh-system__underline" aria-hidden="true" />
          </header>

          <div className="mfh-system__grid">
            <div className="mfh-system__content">
              <p className="mfh-system__p" data-anim="fade-up">
                Mit einem Fertighaus Mehrfamilien entscheiden Sie sich për eine moderne, nachhaltige
                und wirtschaftliche Wohnlösung mit mehreren Einheiten.
              </p>
              <p className="mfh-system__p" data-anim="fade-up">
                Ob për Familien, Investoren oder generationenübergreifendes Wohnen – unsere
                vorgefertigten Mehrfamilienhäuser aus Holz überzeugen durch kurze Bauzeit, flexible
                Grundrisse und energieeffiziente Bauweise.
              </p>
              <p className="mfh-system__p" data-anim="fade-up">
                Durch die modulare Planung können Größe, Ausstattung dhe Architektur individuell
                angepasst werden.
              </p>
              <p className="mfh-system__p" data-anim="fade-up">
                Natural Wohnbau begleitet Sie von der ersten Idee bis zum schlüsselfertigen Objekt –
                zuverlässig, transparent und zukunftsorientiert.
              </p>
            </div>

            <figure className="mfh-system__media" aria-label="Modulare Holz-Mehrfamilienhaus Architektur">
              <div className="mfh-system__photo" style={{ backgroundImage: `url(${systemImg})` }} />
              <div className="mfh-system__frame" aria-hidden="true" />
              <div className="mfh-system__shine" aria-hidden="true" />
              <figcaption className="mfh-system__cap">Modulares Holz – flexibel &amp; effizient</figcaption>
            </figure>
          </div>
        </div>

        <div className="mfh-system__glow" aria-hidden="true" />
        <div className="mfh-system__bar" aria-hidden="true" />
      </section>

      {/* Slider (full-width) */}
      <ModTextSlider items={ITEMS} interval={5000} />

      {/* Reusable sections */}
      <Bauweise />
      <Form />
    </>
  );
}
