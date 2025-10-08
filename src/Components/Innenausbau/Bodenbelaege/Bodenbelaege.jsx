import React, { useEffect } from "react";
import "./Bodenbelaege.css";

/* Assets (zëvendëso me skedarët e tu) */
import heroImg from "./bo-hero.webp";
import b1 from "./bo-1.webp";
import b2 from "./bo-2.webp";
import b3 from "./bo-3.webp";
import b4 from "./bo-4.webp";
import b5 from "./bo-5.webp";
import b6 from "./bo-6.webp";

/* Helpers */
const asSrc = (v, fb = "") => (typeof v === "string" ? v : v?.src || fb);

function useInView() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const els = Array.from(
      document.querySelectorAll(".bo .reveal, .bo .stagger > *, .bo .img-reveal, .bo .wipe")
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

/* Ikona minimale */
const IconLeaf = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 4S8 5 5 12s3 9 6 8 6-5 9-16Z" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
const IconSound = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 10h4l5-4v12l-5-4H3zM17 8c2 2 2 6 0 8M20 6c3 3 3 9 0 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconShield = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2l8 4v6c0 5.5-3.5 8.5-8 10-4.5-1.5-8-4.5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="1.8"/>
  </svg>
);
const IconSpark = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
);

export default function Bodenbelaege() {
  useInView();

  return (
    <div className="bo">
      {/* ===== HERO ===== */}
      <section
        className="bo-hero"
        style={{ "--hero": `url(${asSrc(heroImg, "/bo-hero.webp")})` }}
      >
        <div className="bo-hero__overlay" />
        <div className="container bo-hero__inner">
          <h1 className="headline wipe">
            Bodenbeläge <em><br/>Luxus-Niveau</em>
          </h1>
          <p className="lead reveal">
            Parkett, Naturstein, Feinsteinzeug oder hochwertige Vinylböden – fugenarm verlegt,
            technisch korrekt aufgebaut, akustisch angenehm und pflegeleicht im Alltag.
          </p>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="benefits container">
        <div className="cards stagger">
          <article className="card reveal">
            <IconLeaf />
            <h3>Material & Oberfläche</h3>
            <p>Selektierte Eiche, Natursteine oder Feinsteinzeug – matt, geölt oder strukturiert.</p>
          </article>
          <article className="card reveal">
            <IconSound />
            <h3>Akustik & Wärme</h3>
            <p>Aufbau auf Fußbodenheizung, Trittschalldämmung und thermisch stabile Systeme.</p>
          </article>
          <article className="card reveal">
            <IconShield />
            <h3>Robust & Pflegeleicht</h3>
            <p>Kratzfest, wasserresistent, mit passenden Pflege- und Schutzsystemen.</p>
          </article>
          <article className="card reveal">
            <IconSpark />
            <h3>Details & Übergänge</h3>
            <p>Edle Sockelleisten, flächenbündige Profile und saubere Türanschlüsse.</p>
          </article>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="gallery container">
        <h2 className="section-title reveal">Einblicke & Referenzen</h2>
        <div className="grid">
          <figure className="shot img-reveal"><img src={asSrc(b1)} alt="Parkett Eiche, großformatig"/><figcaption>Parkett Eiche</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(b2)} alt="Natursteinboden, Wohnbereich"/><figcaption>Naturstein</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(b3)} alt="Feinsteinzeug großformatig, fugenarm"/><figcaption>Feinsteinzeug</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(b4)} alt="Design-Vinyl mit Holzoptik"/><figcaption>Design-Vinyl</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(b5)} alt="Sockelleiste flächenbündig, Detail"/><figcaption>Sockel & Profil</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(b6)} alt="Fußbodenheizung – Schichtenaufbau"/><figcaption>Aufbau & Dämmung</figcaption></figure>
        </div>
      </section>

      {/* ===== FEATURE SPLIT ===== */}
      <section className="feature container">
        <div className="feature-media img-reveal" style={{ "--bg": `url(${asSrc(b3)})` }} />
        <div className="feature-copy">
          <h2 className="section-title reveal">Fugenarm. Präzise. Widerstandsfähig.</h2>
          <ul className="points stagger">
            <li className="reveal">Großformate mit minimierten Fugen, exakt geschnittene Abschlüsse.</li>
            <li className="reveal">Feuchteschutz, Entkopplung und Ausgleich – systemkonformer Aufbau.</li>
            <li className="reveal">Untergrundprüfung mit CM-Messung und dokumentierter Ebenheit.</li>
            <li className="reveal">Naturstein mit Imprägnierung, Parkett mit Öl/Wachs nach Wunsch.</li>
            <li className="reveal">Übergänge zu Türen/Duschen schwellenlos und elegant gelöst.</li>
          </ul>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="process container">
        <h2 className="section-title reveal">Ablauf & Qualitätssicherung</h2>
        <ol className="steps">
          <li className="reveal"><span className="dot">1</span><div><h4>Beratung</h4><p>Bemusterung, Nutzung, Pflege – Materialempfehlung & Angebot.</p></div></li>
          <li className="reveal"><span className="dot">2</span><div><h4>Untergrund</h4><p>Estrichprüfung, Ausgleich, Dämmung, Heizestrich-Protokoll.</p></div></li>
          <li className="reveal"><span className="dot">3</span><div><h4>Verlegung</h4><p>Parkett/Stein/Feinsteinzeug fugenarm verlegt, saubere Schnitte.</p></div></li>
          <li className="reveal"><span className="dot">4</span><div><h4>Finish</h4><p>Öl/Versiegelung, Imprägnierung, Pflegeplan & Übergabe.</p></div></li>
        </ol>
      </section>
    </div>
  );
}
