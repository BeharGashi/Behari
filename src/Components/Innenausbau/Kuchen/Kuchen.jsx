import React, { useEffect } from "react";
import "./Kuchen.css";

/* ASSETS (zëvendëso me skedarët e tu realë) */
import heroImg from "./ku-hero.webp";
import k1 from "./ku-1.webp";
import k2 from "./ku-2.webp";
import k3 from "./ku-3.webp";
import k4 from "./ku-4.webp";
import k5 from "./ku-5.webp";
import k6 from "./ku-6.webp";

/* Helpers */
const asSrc = (v, fb = "") => (typeof v === "string" ? v : v?.src || fb);

/* On-scroll animations */
function useInView() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const els = Array.from(
      document.querySelectorAll(".ku .reveal, .ku .stagger > *, .ku .img-reveal, .ku .wipe")
    );
    if (!els.length) return;
    if (reduced) { els.forEach((el) => el.classList.add("in-view")); return; }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* Ikona minimale */
const IconIsland = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M8 7v10M16 7v10" stroke="currentColor" strokeWidth="1.8"/>
  </svg>
);
const IconHob = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="8" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="16" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="8" cy="16" r="2.4" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="16" cy="16" r="2.4" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const IconLight = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconFridge = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M6 10h12M9 7v2M9 13v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export default function Kuchen() {
  useInView();

  return (
    <div className="ku">
      {/* ===== HERO ===== */}
      <section
        className="ku-hero"
        style={{ "--hero": `url(${asSrc(heroImg, "/ku-hero.webp")})` }}
      >
        <div className="ku-hero__overlay" />
        <div className="container ku-hero__inner">
          <h1 className="headline wipe">
            Küchen <em><br/> Luxus-Niveau</em>
          </h1>
          <p className="lead reveal">
            Monolithische Inseln, fugenarme Arbeitsflächen und vollintegrierte Geräte.
            Präzise Auszüge, leise Mechanik und Lichtszenen für Kochen, Arbeiten und Genuss.
          </p>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="benefits container">
        <div className="cards stagger">
          <article className="card reveal">
            <IconIsland />
            <h3>Design & Ergonomie</h3>
            <p>Arbeitsdreieck optimiert, Stauraum maximal, bündige Linien und komfortable Arbeitshöhen.</p>
          </article>
          <article className="card reveal">
            <IconHob />
            <h3>Geräte & Integration</h3>
            <p>Induktionskochfelder, Backöfen, Dampfgarer und leise Hauben – bündig und unsichtbar verkabelt.</p>
          </article>
          <article className="card reveal">
            <IconLight />
            <h3>Licht & Atmosphäre</h3>
            <p>LED-Linien unter Hängern/Insel, CRI 90+, dimm- & farbtemperatursteuerbar für jede Szene.</p>
          </article>
          <article className="card reveal">
            <IconFridge />
            <h3>Material & Oberfläche</h3>
            <p>Stein/Komposit, Keramik, Massivholz & matte Lacke – widerstandsfähig, hygienisch, edel.</p>
          </article>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="gallery container">
        <h2 className="section-title reveal">Einblicke & Referenzen</h2>
        <div className="grid">
          <figure className="shot img-reveal"><img src={asSrc(k1)} alt="Inselküche, Steinplatte fugenarm"/><figcaption>Insel & Stein</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(k2)} alt="Grifflose Fronten, matte Lacke"/><figcaption>Grifflos & Matt</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(k3)} alt="Vollintegrierte Geräte, bündig"/><figcaption>Geräte bündig</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(k4)} alt="Lichtlinien unter Hängeschränken"/><figcaption>Lichtlinien</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(k5)} alt="Spülzentrum, armatur & Zubehör"/><figcaption>Spülzentrum</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(k6)} alt="Stauraum-Organisation, Auszüge"/><figcaption>Stauraum</figcaption></figure>
        </div>
      </section>

      {/* ===== FEATURE SPLIT ===== */}
      <section className="feature container">
        <div className="feature-media img-reveal" style={{ "--bg": `url(${asSrc(k3)})` }} />
        <div className="feature-copy">
          <h2 className="section-title reveal">Präzision, die Sie täglich spüren</h2>
          <ul className="points stagger">
            <li className="reveal">Flächenbündige Einbauten, verdeckte Fugen, auf Gehrung gearbeitete Kanten.</li>
            <li className="reveal">Arbeitsplatten aus Stein/Komposit/Keramik – hitze- & schnittfest, pflegeleicht.</li>
            <li className="reveal">Belüftung und Kabelmanagement unsichtbar integriert (Backofen, Kühler, Server).</li>
            <li className="reveal">Wasserstelle mit Quooker/Filter, versenkte Steckdosen, durchdachte Nischen.</li>
            <li className="reveal">Lichtszenen für Kochen, Dinner & Cleaning – per Touch oder App steuerbar.</li>
          </ul>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="process container">
        <h2 className="section-title reveal">Ablauf & Qualitätssicherung</h2>
        <ol className="steps">
          <li className="reveal"><span className="dot">1</span><div><h4>Beratung</h4><p>Bedarf, Stil, Geräteauswahl – Bemusterung von Materialien & Griffsystemen.</p></div></li>
          <li className="reveal"><span className="dot">2</span><div><h4>Planung</h4><p>Aufmaß, 3D-Entwurf, Licht-/Elektroplan, Wasser/Abzug-Koordinierung.</p></div></li>
          <li className="reveal"><span className="dot">3</span><div><h4>Fertigung</h4><p>Zuschnitt, Kanten, Montagevorbereitung, Qualitätscheck.</p></div></li>
          <li className="reveal"><span className="dot">4</span><div><h4>Montage & Übergabe</h4><p>Staubarm, präzise Justage, Geräteeinweisung, Pflegehinweise.</p></div></li>
        </ol>
      </section>
    </div>
  );
}
