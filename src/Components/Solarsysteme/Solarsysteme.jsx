import React, { useEffect } from "react";
import "./Solarsysteme.css";

/* Zëvendëso me asetet reale */
import heroImg from "./solar-hero.webp";
import c1 from "./solar-card-1.webp";
import c2 from "./solar-card-2.webp";
import c3 from "./solar-card-3.webp";

function useInView() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const els = Array.from(document.querySelectorAll(".reveal, .stagger, .wipe-vert, .photo-wipe"));
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

/* Ikona inline */
const IconSun = () => (
  <svg className="ss-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2.1 2.1M17.4 17.4l2.1 2.1M4.5 19.5l2.1-2.1M17.4 6.6l2.1-2.1" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const IconBattery = () => (
  <svg className="ss-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="19" y="10" width="2" height="4" rx="1" fill="currentColor"/>
    <path d="M7 12h8" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
const IconWallbox = () => (
  <svg className="ss-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="3" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M8 7h4M8 11h4M17 8v6l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export default function Solarsysteme(){
  useInView();

  return (
    <div className="ss">
      {/* HERO — dark, imazh rrethor me unazë ari */}
      <section className="ss-hero">
        <div className="container ss-hero__grid">
          <div className="wipe-vert">
            <div className="wipe-target">
              <span className="kicker"><i aria-hidden="true" /> Solar­systeme & Energiespeicher</span>
              <h1 className="title-grad" style={{margin: ".45rem 0 .55rem"}}>
                Eigenstrom, der sich rechnet – heute und morgen
              </h1>
              <p className="lead">
                Wir planen und installieren Photovoltaik mit Speicher und Wallbox – technisch sauber,
                ästhetisch in die Architektur integriert und mit Fokus auf maximale Eigenverbrauchsquote.
              </p>
              <div className="ss-actions" role="group" aria-label="Aktionen">
                <a href="#module" className="btn btn--gold">Module</a>
                <a href="#systeme" className="btn">Speicher & Wallbox</a>
              </div>
            </div>
          </div>

          <div className="ss-hero__media photo-wipe" aria-hidden="true">
            <div className="ring">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* USP STRIP – ndryshe: underline e artë, jo “gold-corner” */}
      <section className="ss-strip container">
        <div className="stagger">
          <article className="u-card">
            <IconSun />
            <h3 className="u-title">Hocheffiziente PV</h3>
            <p>Premium-Module, optimierte Auslegung, saubere Kabelführung und Monitoring ab Werk.</p>
            <span className="gold-underline" />
          </article>

          <article className="u-card">
            <IconBattery />
            <h3 className="u-title">Intelligenter Speicher</h3>
            <p>Dynamisches Lastmanagement, Notstromoptionen und klare Visualisierung im Alltag.</p>
            <span className="gold-underline" />
          </article>

          <article className="u-card">
            <IconWallbox />
            <h3 className="u-title">E-Mobilität</h3>
            <p>Wallboxen mit PV-Überschussladung, Nutzerverwaltung und Abrechnung – brillant einfach.</p>
            <span className="gold-underline" />
          </article>
        </div>
      </section>

      {/* SYSTEM-KARTEN – design tjetër me imazh sipër, badge dhe listë */}
      <section id="systeme" className="ss-systems container">
        <div className="wipe-vert"><h2 className="title-grad wipe-target">System­pakete</h2></div>

        <div className="sys-grid">
          <article className="sys-card">
            <div className="badge">PV</div>
            <figure className="sys-media photo-wipe"><img src={c1} alt="PV-Module auf Flachdach/Schrägdach" /></figure>
            <h3>Photovoltaik</h3>
            <ul>
              <li>Auslegung nach Dach & Verbrauch</li>
              <li>String-Design, Verschattung, Statik</li>
              <li>Saubere Montage & Dokumentation</li>
            </ul>
          </article>

          <article className="sys-card">
            <div className="badge">Speicher</div>
            <figure className="sys-media photo-wipe"><img src={c2} alt="Batteriespeicher im Technikraum" /></figure>
            <h3>Stromspeicher</h3>
            <ul>
              <li>Modular erweiterbar</li>
              <li>Notstrom / Ersatzstrom Optionen</li>
              <li>App & Web-Monitoring</li>
            </ul>
          </article>

          <article className="sys-card">
            <div className="badge">Wallbox</div>
            <figure className="sys-media photo-wipe"><img src={c3} alt="Wallbox in Garage/Carport" /></figure>
            <h3>Wallbox</h3>
            <ul>
              <li>PV-Überschussladen</li>
              <li>Lastmanagement & Nutzerprofile</li>
              <li>RFID/Backend-Abrechnung</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
