import React, { useEffect } from "react";
import "./Elektroinstallation.css";
// import Lightning from './Lightning';

/* Zëvendëso me asetet reale në projekt */
import heroImg from "./ei-hero.webp";
import f1 from "./ei-feature-1.webp";
import f2 from "./ei-feature-2.webp";
import f3 from "./ei-feature-3.webp";

function useInView() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const els = Array.from(document.querySelectorAll(".reveal, .stagger, .wipe, .photo-wipe"));
    if (!els.length) return;
    if (reduced) { els.forEach(el => el.classList.add("in-view")); return; }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.18 });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* Ikona inline (pa libra të jashtëm) */
const IconPower = () => (
  <svg className="s-icon ei-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
);
const IconLight = () => (
  <svg className="s-icon ei-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3a7 7 0 0 0-5 11l1.5 1.7V18h7v-2.3L17 14a7 7 0 0 0-5-11Z" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M9 21h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconSmart = () => (
  <svg className="s-icon ei-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M6 10h12M8 14h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconSecurity = () => (
  <svg className="s-icon ei-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 4l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V7l8-3Z" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M9 12l2.2 2.2L15.5 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconData = () => (
  <svg className="s-icon ei-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M7 10v4M12 10v4M17 10v4" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const IconEV = () => (
  <svg className="s-icon ei-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 16h12a3 3 0 0 0 3-3V9l-3-5H7L4 9v7Z" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M16 6h-7M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5-5-2-2v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export default function Elektroinstallation(){
  useInView();

  return (
    <>
    <div className="ei">
      {/* HERO */}
      <section className="ei-hero container">
        <div className="ei-hero__content wipe">
          <div className="wipe-target">
            <span className="kicker"><i aria-hidden="true" /> Stark- & Schwachstrom</span>
            <h1 className="title-grad" style={{margin: ".45rem 0 .55rem"}}>
              Elektroinstallation – präzise, sicher, zukunftsfähig
            </h1>
            <p>
              Wir planen und installieren elektrische Anlagen für Neubau, Umbau und Sanierung:
              Energieverteilung, Beleuchtung, Smart Home/KNX, Sicherheitstechnik, Datennetzwerke
              und E-Mobilität. Sauber dokumentiert, normenkonform und effizient im Betrieb.
            </p>
            <div className="ei-actions" role="group" aria-label="Aktionen">
              <a href="#leistungen" className="btn">Leistungen</a>
              <a href="#kontakt" className="btn btn--gold">Projekt anfragen</a>
            </div>
          </div>
        </div>

        <div className="ei-hero__media gold-corner photo-wipe" aria-hidden="true">
          <img src={heroImg} alt="" />
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="ei-section container">
        <div className="wipe"><h2 className="title-grad wipe-target">Unsere Leistungsfelder</h2></div>

        <div className="services stagger">
          <article className="s-card gold-corner">
            <IconPower />
            <h3>Energie & Verteilung</h3>
            <p>Haupt- und Unterverteilungen, Überspannungsschutz, Messkonzepte und saubere Leitungsführung.</p>
          </article>

          <article className="s-card gold-corner">
            <IconLight />
            <h3>Beleuchtung</h3>
            <p>LED-Konzepte, Human Centric Lighting und Notlicht – effizient geplant, sauber installiert.</p>
          </article>

          <article className="s-card gold-corner">
            <IconSmart />
            <h3>Smart Home / KNX</h3>
            <p>Automatisierung für Licht, Beschattung, Heizung & Zutritt – komfortabel und skalierbar.</p>
          </article>

          <article className="s-card gold-corner">
            <IconSecurity />
            <h3>Sicherheitstechnik</h3>
            <p>Brandmelde-, Einbruchmelde- und Zutrittssysteme inkl. Visualisierung und Wartung.</p>
          </article>

          <article className="s-card gold-corner">
            <IconData />
            <h3>Daten & Netzwerk</h3>
            <p>Strukturierte Verkabelung, Patchfelder, aktive Komponenten – geprüft & dokumentiert.</p>
          </article>

          <article className="s-card gold-corner">
            <IconEV />
            <h3>E-Mobilität</h3>
            <p>Wallboxen, Lastmanagement und Abrechnung – sicher, skalierbar und zukunftssicher.</p>
          </article>
        </div>
      </section>

      {/* MERKMALE / VORTEILE */}
      <section className="ei-section container">
        <div className="wipe"><h2 className="title-grad wipe-target">Mehrwert durch Präzision</h2></div>

        <div className="feature-grid">
          <figure className="f-card gold-corner photo-wipe">
            <img src={f1} alt="Sauber montierte Verteilungen mit beschrifteten Adern" />
            <figcaption>
              <h4>Saubere Ausführung</h4>
              <p>Beschriftete Leitungen, strukturierte Trassen und normkonforme Anschlussdetails.</p>
            </figcaption>
          </figure>

          <figure className="f-card gold-corner photo-wipe">
            <img src={f2} alt="Energieeffiziente LED-Beleuchtung mit Steuerung" />
            <figcaption>
              <h4>Effizienz & Steuerung</h4>
              <p>LED-Systeme, Präsenz- und Tageslichtregelung, Visualisierung – minimaler Verbrauch.</p>
            </figcaption>
          </figure>

          <figure className="f-card gold-corner photo-wipe">
            <img src={f3} alt="Monitoring und Wartung über ein zentrales Dashboard" />
            <figcaption>
              <h4>Monitoring & Service</h4>
              <p>Fernwartung, Alarmierung und Reports – transparente Anlagen und schnelle Reaktion.</p>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
    </>
  );
}
