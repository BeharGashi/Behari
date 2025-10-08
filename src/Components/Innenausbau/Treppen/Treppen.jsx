import React, { useEffect } from "react";
import "./Treppen.css";

/* Assets (zëvendëso me skedarët e tu) */
import heroImg from "./tr-hero.webp";
import t1 from "./tr-1.webp";
import t2 from "./tr-2.webp";
import t3 from "./tr-3.webp";
import t4 from "./tr-4.webp";
import t5 from "./tr-5.webp";
import t6 from "./tr-6.webp";

/* Helper */
const asSrc = (v, fb = "") => (typeof v === "string" ? v : v?.src || fb);

/* On-scroll animations */
function useInView() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const els = Array.from(
      document.querySelectorAll(".tr .reveal, .tr .stagger > *, .tr .img-reveal, .tr .wipe")
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

/* Minimal icons */
const IconCheck = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 12l5 5 11-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCube = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2l9 5-9 5-9-5 9-5Z" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M21 7v10l-9 5-9-5V7" stroke="currentColor" strokeWidth="1.8"/>
  </svg>
);
const IconSpark = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
);
const IconShield = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2l8 4v6c0 5.5-3.5 8.5-8 10-4.5-1.5-8-4.5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="1.8"/>
  </svg>
);

export default function Treppen() {
  useInView();

  return (
    <div className="tr">
      {/* ===== HERO ===== */}
      <section
        className="tr-hero"
        style={{ "--hero": `url(${asSrc(heroImg, "/tr-hero.webp")})` }}
      >
        <div className="tr-hero__overlay" />
        <div className="container tr-hero__inner">
          <h1 className="headline wipe">
            Treppen <em><br/> Luxus Niveau</em>
          </h1>
          <p className="lead reveal">
            Freitragend, schwebend oder aufgesattelt – präzise Statik, edle Materialien,
            unsichtbare Befestigungen und stimmige Beleuchtung. Maßgefertigt für Ihr Zuhause.
          </p>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="benefits container">
        <div className="cards stagger">
          <article className="card reveal">
            <IconCheck />
            <h3>Design & Statik</h3>
            <p>Freitragende Konstruktionen mit nachgewiesener Sicherheit, absolut ruhiger Lauf und präzise Fugen.</p>
          </article>
          <article className="card reveal">
            <IconCube />
            <h3>Material & Oberfläche</h3>
            <p>Massivholz, Stahl, Glas oder Beton – geölte Eiche, Räuchereiche, Feinstein: robust und edel.</p>
          </article>
          <article className="card reveal">
            <IconShield />
            <h3>Geländer & Sicherheit</h3>
            <p>Glas, Edelstahl oder Holzhandlauf – schwellenlos, kindersicher, normgerecht.</p>
          </article>
          <article className="card reveal">
            <IconSpark />
            <h3>Beleuchtung</h3>
            <p>LED-Linien in Handlauf/Stufen, dimmbar und farbtemperatur-steuerbar für Abendstimmung.</p>
          </article>
        </div>
      </section>

      {/* ===== SHOWCASE / GALLERY ===== */}
      <section className="gallery container">
        <h2 className="section-title reveal">Einblicke & Referenzen</h2>
        <div className="grid">
          <figure className="shot img-reveal"><img src={asSrc(t1)} alt="Schwebende Treppe mit Glasgeländer"/><figcaption>Schwebende Stufen</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(t2)} alt="Massivholztreppe minimalistisch"/><figcaption>Massivholz</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(t3)} alt="Stahlwangentreppe, industriell"/><figcaption>Stahlwange</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(t4)} alt="Betontreppe mit Holzauflagen"/><figcaption>Beton + Holz</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(t5)} alt="LED Handlauf beleuchtet"/><figcaption>LED-Handlauf</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(t6)} alt="Galerie mit Glasbrüstung"/><figcaption>Glasbrüstung</figcaption></figure>
        </div>
      </section>

      {/* ===== FEATURES (image + bullets) ===== */}
      <section className="feature container">
        <div className="feature-media img-reveal" style={{ "--bg": `url(${asSrc(t4)})` }} />
        <div className="feature-copy">
          <h2 className="section-title reveal">Details, die den Unterschied machen</h2>
          <ul className="points stagger">
            <li className="reveal">Verdeckte Befestigungen, bündige Abdeckungen, exakte Schattenfugen.</li>
            <li className="reveal">Spezielle Antirutsch-Profile oder eingelassene Trittleisten.</li>
            <li className="reveal">Handläufe in Holz/Metall mit integrierter Beleuchtung und Touch-Dimmer.</li>
            <li className="reveal">Glasgeländer ESG/VSG mit minimalen Klemmen – kristallklare Optik.</li>
            <li className="reveal">Saubere Anschlüsse an Boden/Wand, akkurate Spachtel- und Lackarbeiten.</li>
          </ul>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="process container">
        <h2 className="section-title reveal">Ablauf & Qualitätssicherung</h2>
        <ol className="steps">
          <li className="reveal"><span className="dot">1</span><div><h4>Planung</h4><p>Aufmaß, Statik, Materialmuster, Terminplan.</p></div></li>
          <li className="reveal"><span className="dot">2</span><div><h4>Fertigung</h4><p>Präzisionszuschnitt, Oberflächen, Vor-Montage.</p></div></li>
          <li className="reveal"><span className="dot">3</span><div><h4>Montage</h4><p>Staubarm, passgenau, dokumentiert – inkl. Beleuchtung.</p></div></li>
          <li className="reveal"><span className="dot">4</span><div><h4>Übergabe</h4><p>Pflegehinweise, Prüfprotokolle, Garantie.</p></div></li>
        </ol>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta container">
        <div className="cta-box reveal">
          <div>
            <span className="badge">Nächster Schritt</span>
            <h2 className="section-title" style={{marginTop:".35rem"}}>Planen wir Ihre Treppe</h2>
            <p className="lead">Schwebend, freitragend oder klassisch – präzise, sicher und zeitlos.</p>
          </div>
          <a href="#kontakt" className="btn btn--gold">Beratung anfragen</a>
        </div>
      </section>
    </div>
  );
}
