import React, { useEffect } from "react";
import "./Wohnzimmer.css";

/* ASSETS — zëvendëso me skedarët realë në projektin tënd */
import heroImg from "./wo-hero.webp";
import w1 from "./wo-1.webp";
import w2 from "./wo-2.webp";
import w3 from "./wo-3.webp";
import w4 from "./wo-4.webp";
import w5 from "./wo-5.webp";
import w6 from "./wo-6.webp";

/* Helpers */
const asSrc = (v, fb = "") => (typeof v === "string" ? v : v?.src || fb);

/* On-scroll animations */
function useInView() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const els = Array.from(
      document.querySelectorAll(".wo .reveal, .wo .stagger > *, .wo .img-reveal, .wo .wipe")
    );
    if (!els.length) return;
    if (reduced) { els.forEach((el) => el.classList.add("in-view")); return; }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
        }),
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* Ikona minimale */
const IconSofa = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="10" width="20" height="7" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M4 10V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M6 17v3M18 17v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconLight = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconSound = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 10h4l5-4v12l-5-4H3zM17 8c2 2 2 6 0 8M20 6c3 3 3 9 0 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconCabinet = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 4v16M8 9v2M16 13v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export default function Wohnzimmer() {
  useInView();

  return (
    <div className="wo">
      {/* ===== HERO ===== */}
      <section
        className="wo-hero"
        style={{ "--hero": `url(${asSrc(heroImg, "/wo-hero.webp")})` }}
      >
        <div className="wo-hero__overlay" />
        <div className="container wo-hero__inner">
          <h1 className="headline wipe">
            Wohnzimmer <em><br/>Luxus-Niveau</em>
          </h1>
          <p className="lead reveal">
            Ruhige Materialien, akustisch angenehme Oberflächen und Lichtszenen für jeden Moment.
            Maßgefertigte Möbel, unsichtbare Technik und klare Linien – für Wohnen mit Charakter.
          </p>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="benefits container">
        <div className="cards stagger">
          <article className="card reveal">
            <IconSofa />
            <h3>Komfort & Komposition</h3>
            <p>Sitzinseln, modulare Sofas und harmonische Materialmischungen – bequem und repräsentativ.</p>
          </article>
          <article className="card reveal">
            <IconLight />
            <h3>Licht & Atmosphäre</h3>
            <p>Mehrstufige Lichtszenen: indirekt, Akzent und Lesen – dimmbar, warm bis neutralweiß.</p>
          </article>
          <article className="card reveal">
            <IconSound />
            <h3>Akustik & Medien</h3>
            <p>Schallabsorbierende Flächen, verdeckte Lautsprecher und aufgeräumtes Kabelmanagement.</p>
          </article>
          <article className="card reveal">
            <IconCabinet />
            <h3>Einbauten & Ordnung</h3>
            <p>Wandbündige Regale, Lowboards und Vitrinen – millimetergenau und pflegeleicht.</p>
          </article>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="gallery container">
        <h2 className="section-title reveal">Einblicke & Referenzen</h2>
        <div className="grid">
          <figure className="shot img-reveal"><img src={asSrc(w1)} alt="Wohnzimmer mit großer Sofa-Insel und Teppich"/><figcaption>Sofainsel</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(w2)} alt="TV-Wand mit flächenbündigem Lowboard"/><figcaption>TV-Wand</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(w3)} alt="Wandverkleidung aus Holzleisten, Akustik"/><figcaption>Akustikleisten</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(w4)} alt="Vitrine mit Glas und LED-Beleuchtung"/><figcaption>Vitrine & LED</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(w5)} alt="Leseecke mit Stehleuchte, warmes Licht"/><figcaption>Leseecke</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(w6)} alt="Panoramafenster, Vorhänge und Lowboard"/><figcaption>Panorama & Stoffe</figcaption></figure>
        </div>
      </section>

      {/* ===== FEATURE SPLIT ===== */}
      <section className="feature container">
        <div className="feature-media img-reveal" style={{ "--bg": `url(${asSrc(w2)})` }} />
        <div className="feature-copy">
          <h2 className="section-title reveal">Unsichtbare Technik. Sichtbare Ruhe.</h2>
          <ul className="points stagger">
            <li className="reveal">Medienmöbel mit verdeckten Kabeln, Belüftung und Servicezugang.</li>
            <li className="reveal">Akustikpaneele & Teppiche: weniger Nachhall, mehr Wohlgefühl.</li>
            <li className="reveal">Dimmbare Lichtszenen (CRI 90+), Wand-Washer dhe LED-Nischen.</li>
            <li className="reveal">Einbauten wandbündig: Regale, Lowboards, Vitrinen, Kaminverkleidung.</li>
            <li className="reveal">Materialmix: Holzfurnier, Stein/Komposit, Stoffe me teksturë të butë.</li>
          </ul>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="process container">
        <h2 className="section-title reveal">Ablauf & Qualitätssicherung</h2>
        <ol className="steps">
          <li className="reveal"><span className="dot">1</span><div><h4>Beratung</h4><p>Nutzungsprofil, Sitzordnung, Medien & Licht – Moodboard & Budget.</p></div></li>
          <li className="reveal"><span className="dot">2</span><div><h4>Planung</h4><p>Aufmaß, 3D-Layout, Licht-/Akustik-Konzept, Möbel & Stoffe.</p></div></li>
          <li className="reveal"><span className="dot">3</span><div><h4>Fertigung & Einkauf</h4><p>Einbauten, Beleuchtung, Textilien – Koordination & Qualitätscheck.</p></div></li>
          <li className="reveal"><span className="dot">4</span><div><h4>Montage & Styling</h4><p>Saubere Montage, Justage, Kabelmanagement, finales Styling.</p></div></li>
        </ol>
      </section>
    </div>
  );
}
