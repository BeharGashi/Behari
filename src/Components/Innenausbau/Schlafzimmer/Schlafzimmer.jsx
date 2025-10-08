import React, { useEffect } from "react";
import "./Schlafzimmer.css";

/* --- ASSETS (zëvendëso me skedarët e tu realë) --- */
import heroImg from "./sl-hero.webp";
import s1 from "./sl-1.webp";
import s2 from "./sl-2.webp";
import s3 from "./sl-3.webp";
import s4 from "./sl-4.webp";
import s5 from "./sl-5.webp";
import s6 from "./sl-6.webp";

/* Helpers */
const asSrc = (v, fb = "") => (typeof v === "string" ? v : v?.src || fb);

/* On-scroll animations */
function useInView() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const els = Array.from(
      document.querySelectorAll(".sl .reveal, .sl .stagger > *, .sl .img-reveal, .sl .wipe")
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
const IconSound = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 10h4l5-4v12l-5-4H3zM17 8c2 2 2 6 0 8M20 6c3 3 3 9 0 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconCloset = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 3v18M8 8v6M16 10v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconLight = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconFabric = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 6c2 2 6 2 8 0s6-2 8 0v12c-2-2-6-2-8 0s-6 2-8 0V6Z" stroke="currentColor" strokeWidth="1.8"/>
  </svg>
);

export default function Schlafzimmer() {
  useInView();

  return (
    <div className="sl">
      {/* ===== HERO ===== */}
      <section
        className="sl-hero"
        style={{ "--hero": `url(${asSrc(heroImg, "/sl-hero.webp")})` }}
      >
        <div className="sl-hero__overlay" />
        <div className="container sl-hero__inner">
          <h1 className="headline wipe">
            Schlafzimmer <em><br/>Luxus-Niveau</em>
          </h1>
          <p className="lead reveal">
            Ruhige Materialien, akustisch ausgeglichene Flächen und warme Lichtschichten.
            Maßgefertigte Schränke, gepolsterte Kopfteile und smarte Funktionen für erholsamen Schlaf.
          </p>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="benefits container">
        <div className="cards stagger">
          <article className="card reveal">
            <IconSound />
            <h3>Ruhe & Akustik</h3>
            <p>Wandpaneele, Textilien dhe Teppiche që ulin zhurmën dhe krijojnë një atmosferë të qetë.</p>
          </article>
          <article className="card reveal">
            <IconCloset />
            <h3>Stauraum & Ankleide</h3>
            <p>Schrankanlagen nach Maß me organizim të brendshëm, dritë lineare dhe mbyllje të butë.</p>
          </article>
          <article className="card reveal">
            <IconLight />
            <h3>Licht & Szenen</h3>
            <p>Ambient, Leselicht dhe Nischen-LED – dimmbar, CCT për mbrëmje më të ngrohta.</p>
          </article>
          <article className="card reveal">
            <IconFabric />
            <h3>Material & Komfort</h3>
            <p>Krevat me krye të butë, perde blackout, tapete natyrale – lux i qetë në prekje.</p>
          </article>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="gallery container">
        <h2 className="section-title reveal">Einblicke & Referenzen</h2>
        <div className="grid">
          <figure className="shot img-reveal"><img src={asSrc(s1)} alt="Schlafzimmer mit gepolstertem Kopfteil dhe LED" /><figcaption>Kopfteil & LED</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(s2)} alt="Ankleide mit linearer Beleuchtung" /><figcaption>Ankleide</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(s3)} alt="Minimalistisches Schlafzimmer me dritë të ngrohtë" /><figcaption>Minimal & Warm</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(s4)} alt="Schrankwand flächenbündig, grifflos" /><figcaption>Schrankwand</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(s5)} alt="Blackout gardinen dhe tekstile të pasura" /><figcaption>Blackout & Textil</figcaption></figure>
          <figure className="shot img-reveal"><img src={asSrc(s6)} alt="Schwebender Nachttisch me USB/Steckdose" /><figcaption>Nacht & Technik</figcaption></figure>
        </div>
      </section>

      {/* ===== FEATURE SPLIT ===== */}
      <section className="feature container">
        <div className="feature-media img-reveal" style={{ "--bg": `url(${asSrc(s2)})` }} />
        <div className="feature-copy">
          <h2 className="section-title reveal">Schlafsystem & Ankleide im Zusammenspiel</h2>
          <ul className="points stagger">
            <li className="reveal">Gepolsterte Kopfteile, Akustikpaneele dhe mbrojtje nga zëri për qetësi maksimale.</li>
            <li className="reveal">Ankleide me LED (CRI 90+), profile alumini dhe sensorë të ndezjes.</li>
            <li className="reveal">Perde blackout/ZIP-screens me udhëzues të fshehtë dhe shina tavani.</li>
            <li className="reveal">Nachttische të varur me prizë/USB të integruar dhe menaxhim kabllosh.</li>
            <li className="reveal">Ndriçim skenik: mbrëmje e ngrohtë, natë orientuese, pastrim neutral.</li>
          </ul>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="process container">
        <h2 className="section-title reveal">Ablauf & Qualitätssicherung</h2>
        <ol className="steps">
          <li className="reveal"><span className="dot">1</span><div><h4>Beratung</h4><p>Stil, komoditet, akustikë – përzgjedhje materialesh dhe plan drite.</p></div></li>
          <li className="reveal"><span className="dot">2</span><div><h4>Planung</h4><p>Aufmaß, skica 3D, organizim i brendshëm i gardërobës, perde & blackout.</p></div></li>
          <li className="reveal"><span className="dot">3</span><div><h4>Fertigung</h4><p>Furniere, tapiceri, profile drite – para-montim dhe kontroll cilësie.</p></div></li>
          <li className="reveal"><span className="dot">4</span><div><h4>Montage & Übergabe</h4><p>Montim i pastër, rregullime, skenarë drite, udhëzim & garanci.</p></div></li>
        </ol>
      </section>
    </div>
  );
}
