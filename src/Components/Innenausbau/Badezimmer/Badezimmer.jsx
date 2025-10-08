import React, { useEffect } from "react";
import "./Badezimmer.css";

/* === ASSETS (zëvendëso me skedarët e tu realë) === */
import heroImg from "./ba-hero.webp";
import b1 from "./ba-1.webp";
import b2 from "./ba-2.webp";
import b3 from "./ba-3.webp";
import b4 from "./ba-4.webp";
import b5 from "./ba-5.webp";
import b6 from "./ba-6.webp";

/* Helpers */
const asSrc = (v, fb = "") => (typeof v === "string" ? v : v?.src || fb);

/* On-scroll animations */
function useInView() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const els = Array.from(
      document.querySelectorAll(".ba .reveal, .ba .stagger > *, .ba .img-reveal, .ba .wipe")
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

/* Minimal icons */
const IconTile = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.7"/>
    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.7"/>
    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.7"/>
    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.7"/>
  </svg>
);
const IconDrain = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="10" width="18" height="4" rx="1.6" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M6 10v4M9 10v4M12 10v4M15 10v4M18 10v4" stroke="currentColor" strokeWidth="1.4"/>
  </svg>
);
const IconShower = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 7h10a5 5 0 0 1 5 5v0" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M8 7V3M6 15v2M9 16v2M12 15v2M15 16v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconVent = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 4v4M20 12h-4M12 20v-4M4 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export default function Badezimmer() {
  useInView();

  return (
    <div className="ba">
      {/* ===== HERO ===== */}
      <section
        className="ba-hero"
        style={{ "--hero": `url(${asSrc(heroImg, "/ba-hero.webp")})` }}
      >
        <div className="ba-hero__overlay" />
        <div className="container ba-hero__inner">
          <h1 className="headline wipe">
            Badezimmer <em><br/>Luxus-Niveau</em>
          </h1>
          <p className="lead reveal">
            Großformatige Fliesen, fugenarme Details und präzise Abdichtung.
            Walk-in-Duschen mit Linienablauf, edle Armaturen und stimmiges Licht – langlebig und pflegeleicht.
          </p>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="benefits container">
        <div className="cards stagger">
          <article className="card reveal">
            <IconTile />
            <h3>Material & Oberfläche</h3>
            <p>Feinsteinzeug, Naturstein oder gespachtelte Oberflächen – matt, rutschhemmend und edel.</p>
          </article>
          <article className="card reveal">
            <IconDrain />
            <h3>Gefälle & Ablauf</h3>
            <p>Linienabläufe, exakte Gefälleplanung, fugenarme Detaillösungen in Duschzonen.</p>
          </article>
          <article className="card reveal">
            <IconShower />
            <h3>Dusche & Armaturen</h3>
            <p>Rain/Handbrause, Thermostat, Unterputz – bündig integriert, leise und langlebig.</p>
          </article>
          <article className="card reveal">
            <IconVent />
            <h3>Licht & Klima</h3>
            <p>LED-Szenen (CRI 90+), Spiegelheizung, entfeuchtete Luft – klare Sicht & Wohlgefühl.</p>
          </article>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="gallery container">
        <h2 className="section-title reveal">Einblicke & Referenzen</h2>
        <div className="grid">
          <figure className="shot img-reveal"><img src={asSrc(b1)} alt="Walk-in-Dusche mit Linienablauf"/><figcaption>Walk-in</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(b2)} alt="Großformatige Feinsteinzeugplatten, fugenarm"/><figcaption>Großformat</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(b3)} alt="Waschtisch mit Steinplatte & Unterputz-Armatur"/><figcaption>Waschtisch</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(b4)} alt="Nische mit LED-Licht, Shampoo-Ablage"/><figcaption>Dusch-Nische</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(b5)} alt="Freistehende Badewanne, indirektes Licht"/><figcaption>Wanne</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(b6)} alt="Spiegel mit Heizung/Entfeuchter & Licht"/><figcaption>Spiegel & Licht</figcaption></figure>
        </div>
      </section>

      {/* ===== FEATURE SPLIT ===== */}
      <section className="feature container">
        <div className="feature-media img-reveal" style={{ "--bg": `url(${asSrc(b1)})` }} />
        <div className="feature-copy">
          <h2 className="section-title reveal">Fugenarm. Dicht. Zeitlos.</h2>
          <ul className="points stagger">
            <li className="reveal">Abdichtung nach System (DIN-konform), dokumentierte Schichtaufbauten.</li>
            <li className="reveal">Großformate mit minimalen Fugen, Gehrungsschnitte & bündige Profile.</li>
            <li className="reveal">Nischen/Bankelemente mit integrierter LED – warm bis neutralweiß.</li>
            <li className="reveal">Entwässerung über Linienablauf/Punktablauf – leicht zu reinigen.</li>
            <li className="reveal">Spiegelheizung & Belüftung für beschlagfreie, hygienische Oberflächen.</li>
          </ul>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="process container">
        <h2 className="section-title reveal">Ablauf & Qualitätssicherung</h2>
        <ol className="steps">
          <li className="reveal">
            <span className="dot">1</span>
            <div><h4>Beratung</h4><p>Material, Armaturen, Licht & Layout – Bemusterung und Budget.</p></div>
          </li>
          <li className="reveal">
            <span className="dot">2</span>
            <div><h4>Planung</h4><p>Aufmaß, Gefälle, Entwässerung, Elektro/Lüftung – Detailpläne.</p></div>
          </li>
          <li className="reveal">
            <span className="dot">3</span>
            <div><h4>Rohbau & Abdichtung</h4><p>Untergrund, Abdichtungssystem, Vorwand – protokolliert & geprüft.</p></div>
          </li>
          <li className="reveal">
            <span className="dot">4</span>
            <div><h4>Ausbau & Übergabe</h4><p>Fliesen/Möbel/Armaturen, Silikon, Einweisung, Pflegeplan & Garantie.</p></div>
          </li>
        </ol>
      </section>
    </div>
  );
}
