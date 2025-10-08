import React, { useEffect } from "react";
import "./Landwirtschaft.css";

/* Replace with your real assets (names are examples) */
import heroImg from "./and-hero.webp";

import g1 from "./land-spannweiten.webp";
import g2 from "./land-vorfertigung.webp";
import g3 from "./land-energiehuelle.webp";
import g4 from "./land-fassade-pv.webp";

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

/* Minimal inline icons (no external libs) */
const IconBarn = () => (
  <svg className="s-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 10l9-6 9 6v10H3V10Z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 20v-6h6v6M8 10h8M7 14h10" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
const IconLeaf = () => (
  <svg className="s-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 12c8 0 12-6 16-6 0 9-5 14-12 14-2 0-4-2-4-8Z" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M8 20c0-6 4-10 12-14" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const IconSilo = () => (
  <svg className="s-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M6 8h12M9 3v5M15 3v5M9 14h6" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const IconSun = () => (
  <svg className="s-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2.1 2.1M17.4 17.4l2.1 2.1M4.5 19.5l2.1-2.1M17.4 6.6l2.1-2.1" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);

export default function Landwirtschaft(){
  useInView();

  return (
    <div className="lws">
      <section className="lws-hero container">
        <div className="wipe">
          <div className="wipe-target">
            <span className="kicker"><i aria-hidden="true" /> Premium Agrarbau</span>
            <h1 className="title-grad" style={{margin: ".5rem 0 .6rem"}}>
              Landwirtschaftliche Bauten – effizient, robust, repräsentativ
            </h1>
            <p>
              Wir planen und realisieren Stallungen, Lager- und Produktionshallen aus Holz –
              mit schnellen Bauzeiten, hoher Energieeffizienz und einem Erscheinungsbild, das
              Wertigkeit und Funktion vereint.
            </p>
            <div className="lws-actions" role="group" aria-label="Aktionen">
              <a href="#leistungen" className="btn">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
                Leistungen
              </a>
              <a href="#kontakt" className="btn">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
                Projekt anfragen
              </a>
            </div>
          </div>
        </div>

        <div className="lws-hero__media gold-corner photo-wipe" aria-hidden="true">
          <img src={heroImg} alt="" />
        </div>
      </section>

      {/* Ribbon USP Cards */}
      <section className="lws-ribbon container">
        <div className="wipe"><h2 className="title-grad wipe-target">Warum Holz im Agrarbau?</h2></div>
        <div className="ribbon-grid stagger">
          <article className="ribbon gold-corner">
            <div className="r-media photo-wipe"><img src={g1} alt="Holztragwerk mit großem Raster – ideal für landwirtschaftliche Hallen" /></div>
            <div className="r-body">
              <h3>Große Spannweiten, gutes Klima</h3>
              <p>Angenehmes Stallklima, reduzierte Kondensatbildung und flexible Grundrisse für Fütterung & Technik.</p>
            </div>
          </article>

          <article className="ribbon gold-corner">
            <div className="r-media photo-wipe"><img src={g2} alt="Vorproduktion im Werk – kurze Montagezeiten" /></div>
            <div className="r-body">
              <h3>Vorfertigung & Tempo</h3>
              <p>Hoher Vorfertigungsgrad für minimale Baustellenzeiten – Ihr Betrieb läuft weiter.</p>
            </div>
          </article>

          <article className="ribbon gold-corner">
            <div className="r-media photo-wipe"><img src={g3} alt="Energieeffiziente Gebäudehülle mit Tageslichtführung" /></div>
            <div className="r-body">
              <h3>Energie & Wirtschaftlichkeit</h3>
              <p>Effiziente Hülle, PV-Integration und niedrige Betriebskosten – planbar und zukunftssicher.</p>
            </div>
          </article>

          <article className="ribbon gold-corner">
            <div className="r-media photo-wipe"><img src={g4} alt="Robuste, langlebige Materialität mit klarer Ästhetik" /></div>
            <div className="r-body">
              <h3>Robust & repräsentativ</h3>
              <p>Langlebige Materialien, saubere Details und eine klare Optik für Ihren Hofauftritt.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Clean Services */}
      <section className="lws-services" id="leistungen">
        <div className="container">
          <div className="wipe"><h2 className="title-grad wipe-target">Leistungen für die Landwirtschaft</h2></div>
          <div className="s-cols stagger">
            <div className="s-card gold-corner">
              <IconBarn />
              <h3>Stallbau</h3>
              <p>Milchvieh-, Jungvieh- und Laufställe – tiergerecht, wirtschaftlich und erweiterbar.</p>
            </div>
            <div className="s-card gold-corner">
              <IconSilo />
              <h3>Lager & Technik</h3>
              <p>Getreide-, Futter- und Maschinenlager mit optimierten Zufahrten und Höhen.</p>
            </div>
            <div className="s-card gold-corner">
              <IconLeaf />
              <h3>Holztragwerke</h3>
              <p>Leimholz- und Fachwerkkonstruktionen mit großen Spannweiten und wenig Stützen.</p>
            </div>
            <div className="s-card gold-corner">
              <IconSun />
              <h3>Energie & Hülle</h3>
              <p>Hüllen mit Tageslicht, Lüftungskonzepten und PV-Vorbereitung – effizient & langlebig.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mosaic Gallery */}
      <section className="lws-mosaic" id="projekte">
        <div className="container">
          <div className="wipe"><h2 className="title-grad wipe-target">Einblicke in Projekte</h2></div>

          <div className="mosaic-grid">
            <figure className="r-photo gold-corner photo-wipe" style={{gridColumn: "span 8"}}>
              <img src={g1} alt="Lichtdurchflutete Stallhalle mit Holzrahmen" />
              <figcaption className="cap"><h4>Stallhalle</h4><p>Helles Klima & klare Struktur.</p></figcaption>
            </figure>

            <figure className="r-photo gold-corner photo-wipe" style={{gridColumn: "span 4"}}>
              <img src={g2} alt="Maschinenlager mit großen Toren" />
              <figcaption className="cap"><h4>Maschinenlager</h4><p>Große Spannweiten, kurze Wege.</p></figcaption>
            </figure>

            <figure className="r-photo gold-corner photo-wipe" style={{gridColumn: "span 6"}}>
              <img src={g3} alt="Getreidelager mit effizienter Belichtung" />
              <figcaption className="cap"><h4>Getreidelager</h4><p>Trockene Lagerung & Belichtung.</p></figcaption>
            </figure>

            <figure className="r-photo gold-corner photo-wipe" style={{gridColumn: "span 6"}}>
              <img src={g4} alt="PV-vorbereitete Dachfläche" />
              <figcaption className="cap"><h4>Dach mit PV</h4><p>Vorbereitet für Eigenstrom.</p></figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
