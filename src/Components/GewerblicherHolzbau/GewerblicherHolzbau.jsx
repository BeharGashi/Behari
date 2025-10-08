import React, { useEffect } from "react";
import "./GewerblicherHolzbau.css";

import heroImg from "./holzbau-hero.webp";
import p1 from "./holzbau-prozess-1.webp";
import p2 from "./holzbau-prozess-2.webp";
import p3 from "./holzbau-prozess-3.webp";
import p4 from "./holzbau-prozess-4.webp";

import r1 from "./holzbau-ref-1.webp";
import r2 from "./holzbau-ref-2.webp";
import r3 from "./holzbau-ref-3.webp";
import r4 from "./holzbau-ref-4.webp";

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 11l2.6 2.6L16.5 7.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 12c8 0 12-6 18-6 0 10-6 15-12 15C6 21 3 18 3 12Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 21c0-6 4-10 12-15" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconTime = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 7v5l4 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
);

const IconCompass = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 15l2-6 6-2-2 6-6 2Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

function useRevealOnScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const items = Array.from(document.querySelectorAll(".reveal, .stagger"));
    if (!items.length) return;

    if (prefersReduced) {
      items.forEach(el => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.18 });

    items.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function GewerblicherHolzbau(){
  useRevealOnScroll();

  return (
    <div className="ghb">
      {/* HERO */}
      <section className="ghb-hero">
        <div className="ghb-hero__bg" aria-hidden="true">
          <img src={heroImg} alt="" />
          <div className="ghb-hero__overlay" />
        </div>

        <div className="container">
          <span className="ghb-badge reveal">
            <i aria-hidden="true" />
            <strong>Premium & Präzision</strong> im gewerblichen Holzbau
          </span>

          <h1 className="reveal">
            Gewerblicher Holzbau – Architektur mit Anspruch
          </h1>

          <p className="reveal" style={{maxWidth: "60ch"}}>
            Wir planen und realisieren maßgeschneiderte Holzbau-Lösungen für Unternehmen –
            schnell, präzise und ästhetisch. Von der ersten Idee über Statik und Vorfertigung bis
            zur schlüsselfertigen Übergabe: Höchste Qualität, kurze Bauzeiten und nachhaltige Performance.
          </p>

          <div className="ghb-actions reveal" role="group" aria-label="Aktionen">
            <a href="#kontakt" className="btn btn--gold">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
              Projekt anfragen
            </a>
            <a href="#prozess" className="btn btn--ghost">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
              Unser Prozess
            </a>
          </div>
        </div>
      </section>

      {/* USP / FEATURES */}
      <section className="ghb-section" id="leistungen">
        <div className="container">
          <span className="eyebrow reveal">Unsere Stärken</span>
          <h2 className="reveal">Leistung, die wirtschaftlich überzeugt</h2>
          <p className="lead reveal">
            Effiziente Planung, industrielle Vorfertigung und präzise Montage sorgen für maximale
            Planbarkeit und geringste Ausfallzeiten im Betrieb.
          </p>

          <div className="features stagger">
            <article className="feature-card">
              <IconShield />
              <h3>Qualität mit Garantie</h3>
              <p>Premium-Materialien, kontrollierte Prozesse und dokumentierte Ausführung nach modernsten Standards.</p>
            </article>

            <article className="feature-card">
              <IconTime />
              <h3>Kurze Bauzeiten</h3>
              <p>Hoher Vorfertigungsgrad reduziert Bauzeit vor Ort – sicher, sauber und termintreu.</p>
            </article>

            <article className="feature-card">
              <IconLeaf />
              <h3>Nachhaltige Performance</h3>
              <p>Holz als CO₂-Speicher, energieeffiziente Hüllen und langlebige Konstruktionen für Ihren Betrieb.</p>
            </article>

            <article className="feature-card">
              <IconCompass />
              <h3>Maßgeschneidertes Design</h3>
              <p>Architektonische Individualität mit einer klaren, repräsentativen Formsprache für Markenwirkung.</p>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="ghb-section" id="prozess">
        <div className="container">
          <span className="eyebrow reveal">Ablauf</span>
          <h2 className="reveal">Unser Prozess – transparent & präzise</h2>
          <p className="lead reveal">
            Von der Machbarkeitsanalyse bis zur Übergabe: klar definiert, kalkulierbar und auf Effizienz optimiert.
          </p>

          <div className="process-grid stagger">
            <article className="process-item">
              <img src={p1} alt="Beratung & Konzept – Grundlagenermittlung im gewerblichen Holzbau" />
              <div className="step">
                <div className="kicker"><span>1</span> Beratung & Konzept</div>
                <h3>Analyse & Zielbild</h3>
                <p>Bedarfsanalyse, Standortbewertung, Kostenrahmen – die Basis für ein effizientes Projekt.</p>
              </div>
            </article>

            <article className="process-item">
              <img src={p2} alt="Planung & Statik – Detaillierte Vorplanung und Tragwerksplanung" />
              <div className="step">
                <div className="kicker"><span>2</span> Planung & Statik</div>
                <h3>Detail & Freigaben</h3>
                <p>Entwurfs-, Genehmigungs- und Ausführungsplanung inkl. Tragwerk, Brandschutz und Hülle.</p>
              </div>
            </article>

            <article className="process-item">
              <img src={p3} alt="Vorfertigung – Industrielle Präzision und Qualitätssicherung" />
              <div className="step">
                <div className="kicker"><span>3</span> Vorfertigung</div>
                <h3>Industrie-Qualität</h3>
                <p>Elementfertigung unter idealen Bedingungen – konstant hohe Qualität, minimale Toleranzen.</p>
              </div>
            </article>

            <article className="process-item">
              <img src={p4} alt="Montage & Übergabe – Schnelle Montage auf der Baustelle" />
              <div className="step">
                <div className="kicker"><span>4</span> Montage & Übergabe</div>
                <h3>Präzise Realisierung</h3>
                <p>Terminsichere Montage, finale Qualitätskontrolle und dokumentierte Übergabe.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <section className="ghb-section" id="referenzen" aria-labelledby="refs-title">
        <div className="container">
          <span className="eyebrow reveal">Referenzen</span>
          <h2 className="reveal" id="refs-title">Ausgewählte Projekte</h2>
          <p className="lead reveal">Repräsentative Bauten, die Funktion, Effizienz und Markenwirkung vereinen.</p>

          <div className="refs stagger">
            <figure className="ref-card">
              <img src={r1} alt="Modulares Büro- & Schulungszentrum in Holzbauweise" />
              <figcaption className="ref-caption">
                <h3>Modulares Büro- &amp; Schulungszentrum</h3>
                <p>Flexible Grundrisse, hochwertige Fassade, exzellente Energiekennwerte.</p>
              </figcaption>
            </figure>

            <figure className="ref-card">
              <img src={r2} alt="Produktionshalle mit Holztragwerk und Tageslichtführung" />
              <figcaption className="ref-caption">
                <h3>Produktionshalle mit Holztragwerk</h3>
                <p>Optimierte Spannweiten, Tageslichtzonen, angenehmes Raumklima.</p>
              </figcaption>
            </figure>

            <figure className="ref-card">
              <img src={r3} alt="Gewerbe-Campus – Mix aus Office, Showroom und Lager" />
              <figcaption className="ref-caption">
                <h3>Gewerbe-Campus</h3>
                <p>Office, Showroom und Lager in einem architektonisch klaren Ensemble.</p>
              </figcaption>
            </figure>

            <figure className="ref-card">
              <img src={r4} alt="Mehrgeschossiger Holzbau für moderne Arbeitswelten" />
              <figcaption className="ref-caption">
                <h3>Mehrgeschossiger Holzbau</h3>
                <p>Effiziente Grundrisse, hohe Aufenthaltsqualität, überzeugende Erscheinung.</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta" id="kontakt">
        <div className="container">
          <div className="cta-box reveal">
            <div>
              <span className="eyebrow">Nächster Schritt</span>
              <h2 style={{marginTop: ".35rem"}}>Lassen Sie uns Ihr Vorhaben präzise planen</h2>
              <p className="lead" style={{marginTop: ".4rem"}}>
                Wir erstellen ein klares, belastbares Konzept – inklusive Terminen, Kostenrahmen und technischer Strategie.
              </p>
            </div>
            <a href="#kontakt" className="btn btn--gold" aria-label="Projekt jetzt anfragen">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
              Jetzt anfragen
            </a>
          </div>
        </div>
      </section>

      <footer className="footer-mini">
        <div className="container">
          © {new Date().getFullYear()} Gewerblicher Holzbau – Premiumlösungen aus Holz für Unternehmen.
        </div>
      </footer>
    </div>
  );
}
