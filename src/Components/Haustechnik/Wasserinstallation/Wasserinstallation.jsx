import React, { useEffect } from "react";
import "./Wasserinstallation.css";

/* Zëvendëso me asetet reale */
import heroImg from "./wi-hero.webp";
import f1 from "./wi-feature-1.webp";
import f2 from "./wi-feature-2.webp";
import f3 from "./wi-feature-3.webp";

function useInView() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const els = Array.from(document.querySelectorAll(".reveal, .stagger, .gold-wipe, .photo-glide"));
    if (!els.length) return;
    if (reduced) { els.forEach(el => el.classList.add("in-view")); return; }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
      });
    }, { threshold: 0.18 });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* Ikona minimale */
const IconTap = () => (
  <svg className="wx-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 12h8a3 3 0 0 0 3-3V6h3v3a6 6 0 0 1-6 6H7v3H4v-6Z" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const IconLoop = () => (
  <svg className="wx-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 7h7a4 4 0 1 1-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M17 17H10a4 4 0 1 1 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconShield = () => (
  <svg className="wx-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 4l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V7l8-3Z" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconPump = () => (
  <svg className="wx-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="8" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M12 12h6l3-3v6l-3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export default function Wasserinstallation(){
  useInView();

  return (
    <div className="wx">
      {/* HERO — tekst majtas / imazh djathtas */}
      <section className="wx-hero">
        <div className="container wx-hero__grid">
          <header className="wx-head gold-wipe">
            <div className="wipe-target">
              <span className="kicker"><i aria-hidden="true" /> Sanitär • Trinkwasser • Zirkulation</span>
              <h1 className="wx-title">
                Wasserinstallation<br />
                <span className="wx-title--accent">präzise. hygienisch. effizient.</span>
              </h1>
              <span className="wx-underline" aria-hidden="true" />
              <p className="lead">
                Planung und Ausführung von Trinkwasser- und Abwasseranlagen – klare Verteilung, Zirkulation,
                Temperaturhaltung und Dokumentation. Langlebig, normgerecht und wartungsfreundlich.
              </p>

              <div className="wx-badges" role="list">
                <span role="listitem" className="badge">Ringleitung & Zirkulation</span>
                <span role="listitem" className="badge">Trinkwasserhygiene</span>
                <span role="listitem" className="badge">Druckhaltung & Dämmung</span>
              </div>

              {/* <div className="wx-actions" role="group" aria-label="Aktionen">
                <a href="#leistungen" className="btn btn--gold">Leistungen</a>
                <a href="#prozess" className="btn">Ablauf</a>
              </div> */}
            </div>
          </header>

          <div className="wx-hero__media photo-glide" aria-hidden="true">
            <figure className="orb">
              <img src={heroImg} alt="" />
            </figure>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="wx-feats container">
        <div className="stagger feats-grid">
          <article className="feat"><div className="spine" /><IconTap /><h3>Sanitär & Armaturen</h3><p>Korrosionsarme Materialien, hochwertige Armaturen, klare Leitungswege – sauber dokumentiert.</p></article>
          <article className="feat"><div className="spine" /><IconLoop /><h3>Verteilung & Zirkulation</h3><p>Hydraulisch saubere Ringleitungen, Zirkulation & Dämmung für kurze Wartezeiten und geringe Verluste.</p></article>
          <article className="feat"><div className="spine" /><IconShield /><h3>Trinkwasserhygiene</h3><p>Legionellenprävention, Spülkonzepte, Temperaturhaltung – mit Prüf- und Übergabeprotokollen.</p></article>
          <article className="feat"><div className="spine" /><IconPump /><h3>Druck & Förderung</h3><p>Druckerhöhungsanlagen, Speicher und Regelung – leise, effizient, sicher.</p></article>
        </div>
      </section>

      {/* PROZESS */}
      <section id="prozess" className="wx-steps container">
        <div className="gold-wipe"><h2 className="wx-h2 wipe-target">Ablauf & Qualität</h2></div>
        <div className="steps-grid">
          <figure className="step photo-glide">
            <img src={f1} alt="Planung & Auslegung mit sauberer Verteilstruktur" />
            <figcaption><h4>Planung</h4><p>Bestandsaufnahme, Auslegung, Materialwahl & Terminplan – transparent & belastbar.</p></figcaption>
          </figure>
          <figure className="step photo-glide">
            <img src={f2} alt="Montage mit Zirkulation, Dämmung und Temperaturführung" />
            <figcaption><h4>Installation</h4><p>Saubere Trassen, Zirkulation & Dämmung – dokumentiert mit Fotos und Messwerten.</p></figcaption>
          </figure>
          <figure className="step photo-glide">
            <img src={f3} alt="Prüfung, Spülkonzepte und Hygieneprotokolle" />
            <figcaption><h4>Prüfung & Übergabe</h4><p>Druckprobe, Spülkonzepte, Hygiene- & Übergabeprotokolle – startklar und nachvollziehbar.</p></figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="wx-cta container">
        <div className="cta-box reveal">
          <div>
            <span className="kicker"><i aria-hidden="true" /> Nächster Schritt</span>
            <h2 className="wx-h2" style={{marginTop: ".35rem"}}>Planen wir Ihre Wasserinstallation</h2>
            <p className="lead">Konzept, Termine, Kostenrahmen und technische Strategie – präzise und transparent.</p>
          </div>
          <a href="#leistungen" className="btn btn--gold">Projekt starten</a>
        </div>
      </section> */}
    </div>
  );
}
