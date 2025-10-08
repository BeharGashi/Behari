import React, { useEffect, useMemo } from "react";
import "./Gewerbebau.css";

/**
 * ================== Photography recommendations (EN) ==================
 * Mood: quiet luxury, corporate elegance, natural light, minimal styling.
 * Color mood: stone, oak, warm whites; avoid saturated brand colors in photos.
 *
 * HERO (right image):
 *   - Contemporary office or commercial facade at golden hour; premium materials,
 *     clean lines, slight vignette acceptable, no people.
 *
 * PILLARS (optional detail images):
 *   - Macro of brushed brass handle, textured concrete, timber slat wall.
 *
 * CASE STUDIES / REFERENCES (cards):
 *   - Office: warm interior glow at dusk; no clutter; reflections controlled.
 *   - Retail: daylight shot with clear circulation and material richness.
 *   - Hospitality: soft ambient light, layered textures, calm composition.
 *   - Produktion/Logistik: precise industrial detail, crisp light, no heavy HDR.
 *
 * SERVICES split image (optional):
 *   - Flat lay of drawings, material samples, timeline on tablet (tidy).
 * Timeline divider (optional):
 *   - Abstract material texture (concrete/stone/wood) with soft light/bokeh.
 * ======================================================================
 */

// Replace these with your real assets; fallbacks are provided
import heroImg from "./gewerbebau-hero.webp";
import officeImg from "./gewerbe-office.webp";
import retailImg from "./gewerbe-retail.webp";
import hospitalityImg from "./gewerbe-hotel.webp";
import industrialImg from "./gewerbe-industrial.webp";

const src = (i) => (typeof i === "string" ? i : i?.src);

export default function Gewerbebau() {
  const hero = useMemo(() => src(heroImg) || "/images/gewerbebau/hero.jpg", []);
  const c1 = src(officeImg) || "/images/gewerbebau/office.jpg";
  const c2 = src(retailImg) || "/images/gewerbebau/retail.jpg";
  const c3 = src(hospitalityImg) || "/images/gewerbebau/hospitality.jpg";
  const c4 = src(industrialImg) || "/images/gewerbebau/industrial.jpg";

  // Reveal-on-scroll animations for texts & images
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".gw-reveal"));
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="gw-page">
      {/* HERO */}
      <section className="gw-hero" aria-label="Gewerbebau – Natural Wohnbau">
        <div className="gw-container gw-hero-grid">
          <div className="gw-hero-copy gw-reveal fade-left">
            <div className="gw-eyebrow">Funktional · Elegant · Effizient</div>
            <h1 className="gw-underline">Gewerbebau mit Anspruch</h1>
            <p>
              Architektur für Unternehmen: klare Prozesse, wirtschaftliche Lösungen und
              eine Ästhetik, die Marke und Funktion verbindet. Von der Konzeptstudie bis
              zur Übergabe – strukturiert, transparent, verlässlich.
            </p>
            <a className="gw-btn gw-btn--primary" href="/kontakt">
              Projekt besprechen
            </a>
          </div>
          <div
            className="gw-hero-visual gw-reveal img-zoom"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.18), rgba(21,34,43,.55)), url(${hero})`,
            }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* KOMPETENZEN */}
      <section className="gw-section gw-pillars" aria-label="Kompetenzen">
        <div className="gw-container">
          <div className="gw-pillars-grid">
            <article className="gw-pillar gw-reveal fade-up">
              <h3>Architektur & Corporate Identity</h3>
              <p>
                Räume, die Ihre Marke transportieren: repräsentativ im Empfang, effizient
                im Alltag, klar in der Sprache – wertig und zurückhaltend.
              </p>
            </article>
            <article className="gw-pillar gw-reveal fade-up">
              <h3>Effiziente Planung</h3>
              <p>
                Präzise Grundrisse, saubere Details und koordiniert mit allen Gewerken –
                für Qualität auf der Baustelle.
              </p>
            </article>
            <article className="gw-pillar gw-reveal fade-up">
              <h3>Wirtschaftlichkeit & Nachhaltigkeit</h3>
              <p>
                Investitionssicherheit durch transparente Kosten, Terminsteuerung und
                energieeffiziente Lösungen.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* REFERENZEN */}
      <section className="gw-section gw-showcase" aria-label="Referenzen">
        <div className="gw-container gw-grid">
          <article className="gw-card gw-reveal img-zoom">
            <div
              className="gw-card-media"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.2), rgba(21,34,43,.55)), url(${c1})`,
              }}
            >
              <span className="gw-badge">Office</span>
            </div>
            <div className="gw-card-body">
              <h4>Arbeitswelten mit Fokus</h4>
              <p>
                Klare Zonierung, Akustik und Licht – für Konzentration, Austausch und
                Identität.
              </p>
            </div>
          </article>

          <article className="gw-card gw-reveal img-zoom">
            <div
              className="gw-card-media"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.2), rgba(21,34,43,.55)), url(${c2})`,
              }}
            >
              <span className="gw-badge">Retail</span>
            </div>
            <div className="gw-card-body">
              <h4>Verkauf mit Haltung</h4>
              <p>
                Gezielte Wegeführung, Materialtiefe und stimmiges Licht – für starke
                Markenauftritte.
              </p>
            </div>
          </article>

          <article className="gw-card gw-reveal img-zoom">
            <div
              className="gw-card-media"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.2), rgba(21,34,43,.55)), url(${c3})`,
              }}
            >
              <span className="gw-badge">Hospitality</span>
            </div>
            <div className="gw-card-body">
              <h4>Atmosphäre mit Tiefe</h4>
              <p>
                Zurückhaltende Eleganz und haptische Oberflächen für bleibende Erlebnisse.
              </p>
            </div>
          </article>

          <article className="gw-card gw-reveal img-zoom">
            <div
              className="gw-card-media"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.2), rgba(21,34,43,.55)), url(${c4})`,
              }}
            >
              <span className="gw-badge">Produktion</span>
            </div>
            <div className="gw-card-body">
              <h4>Präzision & Prozess</h4>
              <p>
                Funktionale Klarheit, kurze Wege und robuste Details – effizient geplant.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* LEISTUNGEN / SPLIT */}
      <section className="gw-section gw-split" aria-label="Leistungen im Gewerbebau">
        <div className="gw-container gw-split-grid">
          <div className="gw-slab gw-reveal fade-right">
            <h3>Leistungen</h3>
            <ul className="gw-list">
              <li>Bedarfsanalyse & Standort</li>
              <li>Vorentwurf, Entwurf & 3D-Visualisierung</li>
              <li>Einreichung & behördliche Koordination</li>
              <li>Ausführungsplanung & Ausschreibung</li>
              <li>Kosten- & Terminsteuerung</li>
              <li>Bauleitung & Qualitätssicherung</li>
            </ul>
          </div>
          <div className="gw-slab gw-reveal fade-left">
            <h3>Ihr Vorteil</h3>
            <p>
              Ein Team, ein Prozess: Wir führen Ihr Projekt mit hoher Präzision – von der
              ersten Idee bis zum laufenden Betrieb.
            </p>
            <div className="gw-kpis" role="list">
              <div className="gw-kpi" role="listitem"><b>Präzise</b><span>Saubere Details</span></div>
              <div className="gw-kpi" role="listitem"><b>Transparent</b><span>Klarer Prozess</span></div>
              <div className="gw-kpi" role="listitem"><b>Verlässlich</b><span>Fixe Termine</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="gw-section gw-timeline-wrap" aria-label="Ablauf">
        <div className="gw-container">
          <h2 className="gw-reveal fade-up">Ablauf im Gewerbebau</h2>
          <ol className="gw-timeline">
            {[
              ["Kick-off", "Ziele, Budget und Rahmenbedingungen werden definiert."],
              ["Vorentwurf", "Varianten, Raumprogramm, Materialkonzept & Budgetabgleich."],
              ["Entwurf", "Proportionen, 3D, Detailtiefe – Entscheidungssicherheit."],
              ["Einreichung", "Behördlicher Prozess bis zur Genehmigung."],
              ["Ausführung", "Detailpläne, Vergabe, Bauleitung & Qualitätssicherung."],
            ].map(([t, d]) => (
              <li key={t} className="gw-reveal fade-up">
                <span className="gw-dot" />
                <div>
                  <h4>{t}</h4>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
    </main>
  );
}
