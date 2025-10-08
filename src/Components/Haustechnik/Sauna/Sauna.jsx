import React, { useEffect } from "react";
import "./Sauna.css"; // reuses the same bright luxury styles (.sb2)

/* Assets (replace with your real files) */
import heroImg from "./Background.webp";
import s1 from "./sa-1.webp";
import s2 from "./sa-2.webp";
import s3 from "./sa-3.webp";
import s4 from "./sa-4.webp";
import s5 from "./sa-5.webp";
import background from "./sa-hero.webp"

/* Safe src helper (for different bundlers) */
const asSrc = (img) => (typeof img === "string" ? img : img?.src || "");

/* Scroll-in animations */
function useInView() {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = Array.from(
      document.querySelectorAll(
        ".sb2 .reveal, .sb2 .stagger, .sb2 .wipe, .sb2 .photo-reveal, .sb2 .float-in"
      )
    );
    if (!els.length) return;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* Pointer ripple for .ripple tiles */
function useRipplePointer() {
  useEffect(() => {
    const root = document.querySelector(".sb2");
    if (!root) return;
    const onMove = (e) => {
      const t = e.target.closest(".ripple");
      if (!t) return;
      const r = t.getBoundingClientRect();
      t.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      t.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    root.addEventListener("pointermove", onMove);
    return () => root.removeEventListener("pointermove", onMove);
  }, []);
}

/* Minimal sauna-themed icons (inherit color from CSS via .i) */
const IconThermo = () => (
  <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
    <path d="M10 3a2 2 0 0 1 4 0v8.2a5 5 0 1 1-4 0V3Z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 12v-2m0-2V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const IconSteam = () => (
  <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
    <path d="M7 19c2-2 2-4 0-6s-2-4 0-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 19c2-2 2-4 0-6s-2-4 0-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M17 19c2-2 2-4 0-6s-2-4 0-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const IconLeaf = () => (
  <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
    <path d="M20 4S9 3 5 9c-3 5 1 9 6 9s9-4 9-14Z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7 13c2 .5 4 2 6 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const IconLight = () => (
  <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2m-14 0 2-2m10-10 2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export default function Sauna() {
  useInView();
  useRipplePointer();

  return (
    <div className="sb2">
      {/* ===== HERO — text left | image right ===== */}
      <section
  className="hero"
  style={{
    backgroundImage: `url(${asSrc(background)})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
  <div className="container hero-row">
    <header className="hero-copy wipe">
      <div className="wipe-target">
        <span className="kicker">
          <i aria-hidden="true" />
          Signature Wellness
        </span>
        <h1 className="headline">
          Sauna <em><br/>Luxus-Niveau</em>
        </h1>
        <p className="lead">
          Maßgefertigt aus edlen Hölzern, perfekt temperiert, sanft beleuchtet.
          Von finnischer Sauna bis Bio-Sauna & Infrarot – für Ruhe, Regeneration
          und ein zeitloses Spa-Ambiente.
        </p>

        <div className="chips" role="list">
          <span role="listitem" className="chip">Finnische Sauna</span>
          <span role="listitem" className="chip">Bio-Sauna & Dampfbad</span>
          <span role="listitem" className="chip">Infrarot & Lichttherapie</span>
        </div>
      </div>
    </header>

    {/* HERO MEDIA MBETET SIÇ ËSHTË */}
    <div className="hero-media float-in" aria-hidden="true">
      <figure className="halo-ring">
        <img src={asSrc(heroImg)} alt="" loading="eager" />
      </figure>
    </div>
  </div>
</section>

      {/* ===== BENEFITS — line cards ===== */}
      <section id="leistungen" className="benefits container">
        <div className="stagger line-grid">
          <article className="line-card">
            <IconThermo />
            <h3>Thermisches Design</h3>
            <p>Optimale Isolierung, Luftführung & Temperaturzonen für gleichmäßige Wärme.</p>
          </article>
          <article className="line-card">
            <IconSteam />
            <h3>Aufguss & Klima</h3>
            <p>Sanfter Dampf, ätherische Öle, richtige Luftfeuchte – wohltuend & gesund.</p>
          </article>
          <article className="line-card">
            <IconLeaf />
            <h3>Material & Finish</h3>
            <p>Thermo-Espe, Zeder, Hemlock – haptisch edel, splitterfrei, pflegeleicht.</p>
          </article>
          <article className="line-card">
            <IconLight />
            <h3>Licht & Steuerung</h3>
            <p>Dimmbare LED-Bänder, Szenen & App-Control – stimmungsvoll und smart.</p>
          </article>
        </div>
      </section>

      {/* ===== SHOWCASE — diagonal mosaic + ripple hover ===== */}
      <section id="galerie" className="showcase container">
        <div className="reveal">
          <h2 className="section-title">Einblicke & Referenzen</h2>
        </div>

        <div className="dia-grid">
          <figure className="shot span7 photo-reveal ripple">
            <img src={asSrc(s1)} alt="Sauna interior with wide benches in thermo aspen" loading="lazy" />
            <figcaption>Innenraum & Bänke</figcaption>
          </figure>
          <figure className="shot span5 photo-reveal ripple">
            <img src={asSrc(s2)} alt="Sauna heater with stones and glass front" loading="lazy" />
            <figcaption>Ofen & Steine</figcaption>
          </figure>
          <figure className="shot span12 photo-reveal ripple">
            <img src={asSrc(s3)} alt="Warm LED indirect lighting behind backrests" loading="lazy" />
            <figcaption>Indirektes Licht</figcaption>
          </figure>
          <figure className="shot span6 photo-reveal ripple">
            <img src={asSrc(s4)} alt="Detail of wood joinery and rounded edges" loading="lazy" />
            <figcaption>Details & Finish</figcaption>
          </figure>
          <figure className="shot span6 photo-reveal ripple">
            <img src={asSrc(s5)} alt="Sauna integrated in a spa bathroom with glass door" loading="lazy" />
            <figcaption>Integration im Bad</figcaption>
          </figure>
        </div>
      </section>

      {/* ===== PROCESS — compact stepper ===== */}
      <section className="process container">
        <div className="reveal">
          <h2 className="section-title">Ablauf & Qualität</h2>
        </div>
        <ol className="steps">
          <li>
            <span className="dot">1</span>
            <div>
              <h4>Beratung & Planung</h4>
              <p>Raumanalyse, Wärmekonzept, Oberflächen, Terminplan.</p>
            </div>
          </li>
          <li>
            <span className="dot">2</span>
            <div>
              <h4>Fertigung & Einbau</h4>
              <p>Passgenaue Elemente, Montage, Glas & Abdichtung.</p>
            </div>
          </li>
          <li>
            <span className="dot">3</span>
            <div>
              <h4>Technik & Inbetriebnahme</h4>
              <p>Ofen, Steuerung, Sicherheit – Messwerte & Einregelung.</p>
            </div>
          </li>
          <li>
            <span className="dot">4</span>
            <div>
              <h4>Übergabe & Service</h4>
              <p>Einweisung, Pflege, Wartung – dauerhaft entspannend.</p>
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
}
