import React, { useEffect } from "react";
import "./Mobel.css";

/* --- ASSETS (zëvendëso me skedarët e tu realë) --- */
import heroImg from "./mo-hero.webp";
import m1 from "./mo-1.webp";
import m2 from "./mo-2.webp";
import m3 from "./mo-3.webp";
import m4 from "./mo-4.webp";
import m5 from "./mo-5.webp";
import m6 from "./mo-6.webp";

/* --- Helpers --- */
const asSrc = (v, fb = "") => (typeof v === "string" ? v : v?.src || fb);

function useInView() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const els = Array.from(
      document.querySelectorAll(".mo .reveal, .mo .stagger > *, .mo .img-reveal, .mo .wipe")
    );
    if (!els.length) return;
    if (reduced) { els.forEach((el) => el.classList.add("in-view")); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
      }),
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* --- Ikona minimale --- */
const IconBox = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 7l9 5 9-5M3 7l9-5 9 5M3 7v10l9 5 9-5V7" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);
const IconRuler = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 14l8-8 10 10-8 8L3 14Z" stroke="currentColor" strokeWidth="1.7"/>
    <path d="M7 13l1 1M9 11l1 1M11 9l1 1M13 7l1 1M15 5l1 1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
);
const IconHinge = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="8" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <rect x="13" y="5" width="8" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="7" cy="12" r="1" fill="currentColor"/><circle cx="17" cy="12" r="1" fill="currentColor"/>
  </svg>
);
const IconLight = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export default function Mobel() {
  useInView();

  return (
    <div className="mo">
      {/* ===== HERO ===== */}
      <section
        className="mo-hero"
        style={{ "--hero": `url(${asSrc(heroImg, "/mo-hero.webp")})` }}
      >
        <div className="mo-hero__overlay" />
        <div className="container mo-hero__inner">
          <h1 className="headline wipe">
            Möbel <em><br/> Luxus-Niveau</em>
          </h1>
          <p className="lead reveal">
            Maßgefertigte Einbauten, grifflos, flächenbündig und millimetergenau ausgerichtet.
            Edle Furniere, matte Lacke und unsichtbare Beleuchtung – bis ins Detail perfektioniert.
          </p>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="benefits container">
        <div className="cards stagger">
          <article className="card reveal">
            <IconRuler />
            <h3>Passform & Stauraum</h3>
            <p>Millimetergenaue Planung, maximale Kapazität, flächenbündige Fronten und saubere Schattenfugen.</p>
          </article>
          <article className="card reveal">
            <IconBox />
            <h3>Material & Oberfläche</h3>
            <p>Echtholzfurniere, lackierte Fronten, HPL – robust, pflegeleicht und haptisch edel.</p>
          </article>
          <article className="card reveal">
            <IconHinge />
            <h3>Beschläge & Mechanik</h3>
            <p>Push-to-open, Soft-Close, verdeckte Auszüge – leise, langlebig und präzise.</p>
          </article>
          <article className="card reveal">
            <IconLight />
            <h3>Beleuchtung & Technik</h3>
            <p>LED-Linien in Fachböden/Nischen, dimmbar; integriertes Kabelmanagement und Belüftung.</p>
          </article>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="gallery container">
        <h2 className="section-title reveal">Einblicke & Referenzen</h2>
        <div className="grid">
          <figure className="shot img-reveal"><img src={asSrc(m1)} alt="Einbauschrank flächenbündig, Wohnraum"/><figcaption>Wohn-Einbauten</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(m2)} alt="Vitrinenmöbel mit Glas und LED"/><figcaption>Vitrine & LED</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(m3)} alt="Medienmöbel mit verdeckter Technik"/><figcaption>Medienmöbel</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(m4)} alt="Garderobe mit Bank und Hakenleiste"/><figcaption>Garderobe</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(m5)} alt="Schlafzimmer-Schrank mit Beleuchtung"/><figcaption>Schlafzimmer</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(m6)} alt="Sideboard grifflos, Hochglanz/Matt Mix"/><figcaption>Sideboards</figcaption></figure>
        </div>
      </section>

      {/* ===== FEATURE SPLIT ===== */}
      <section className="feature container">
        <div className="feature-media img-reveal" style={{ "--bg": `url(${asSrc(m3)})` }} />
        <div className="feature-copy">
          <h2 className="section-title reveal">Details, die wirken</h2>
          <ul className="points stagger">
            <li className="reveal">Furnierbilder über Eck durchlaufend, präzise Kanten & Fugenbild.</li>
            <li className="reveal">Grifflose Systeme: Tip-On/Servo-Drive, sanfte Dämpfung, Feineinstellung.</li>
            <li className="reveal">LED-Linien in Nischen/Regalen (CRI 90+), warm bis neutralweiß.</li>
            <li className="reveal">Unsichtbares Kabelmanagement, aktive Belüftung für Geräte.</li>
            <li className="reveal">Innenorganisation: Schubfacheinsätze, Kleiderlifte, Steckdosenleisten.</li>
          </ul>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="process container">
        <h2 className="section-title reveal">Ablauf & Qualitätssicherung</h2>
        <ol className="steps">
          <li className="reveal"><span className="dot">1</span><div><h4>Beratung</h4><p>Nutzung, Stil, Budget – Bemusterung von Furnieren & Lacken.</p></div></li>
          <li className="reveal"><span className="dot">2</span><div><h4>Planung</h4><p>Aufmaß, 3D-Entwurf, Stauraum-Konzept, Lichtplanung.</p></div></li>
          <li className="reveal"><span className="dot">3</span><div><h4>Fertigung</h4><p>Zuschnitt, Kanten, Oberflächen, Vor-Montage, Qualitätscheck.</p></div></li>
          <li className="reveal"><span className="dot">4</span><div><h4>Montage & Übergabe</h4><p>Saubere Montage, Justage, Pflegehinweise, Garantie.</p></div></li>
        </ol>
      </section>
    </div>
  );
}
