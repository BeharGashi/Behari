import React, { useEffect } from "react";
import "./Schiebesystem.css";

/* Assets (replace with your real files) */
import heroImg from "./sg-hero.webp";
import s1 from "./sg-1.webp";
import s2 from "./sg-2.webp";
import s3 from "./sg-3.webp";
import s4 from "./sg-4.webp";
import s5 from "./sg-5.webp";
import background from './Background.webp'

/* Safe src helper */
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
    if (prefersReduced) { els.forEach((el) => el.classList.add("in-view")); return; }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.18 });

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

/* Minimal glass sliding system icons */
const IconPanels = () => (
  <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
    <rect x="3" y="4" width="6" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="9.5" y="4" width="6" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="16" y="4" width="5" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const IconTrack = () => (
  <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
    <path d="M3 18h18M6 6v9m6-9v9m6-9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconLock = () => (
  <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
    <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconWeather = () => (
  <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
    <path d="M7 16a5 5 0 1 1 8.2-5.9A4 4 0 1 1 19 16H7Z" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M8 20l2-2M12 20l2-2M16 20l2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export default function SchiebesystemGlas() {
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
                Signature Architektur
              </span>
              <h1 className="headline">
                Schiebesystem aus Glas <em>Grenzenloser Ausblick</em>
              </h1>
              <p className="lead">
                Ganzglas-Schiebeelemente mit bodengleicher Schwelle, leiser Laufkultur
                und sicherer Verriegelung. Transparenter Wind- & Regenschutz für Terrasse,
                Balkon oder Wintergarten – minimalistisch, hochwertig, langlebig.
              </p>

              <div className="chips" role="list">
                <span role="listitem" className="chip">Ganzglas-Paneele</span>
                <span role="listitem" className="chip">Bodengleiche Schwelle</span>
                <span role="listitem" className="chip">Soft-Close & Verriegelung</span>
              </div>
            </div>
          </header>

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
            <IconPanels />
            <h3>Panorama & Transparenz</h3>
            <p>Großformatige Ganzglasflügel – maximale Sicht & Licht, minimaler Rahmen.</p>
          </article>
          <article className="line-card">
            <IconTrack />
            <h3>Schiene & Schwelle</h3>
            <p>Bodengleiche Führung, sauberes Ablaufprofil – barrierearm & pflegeleicht.</p>
          </article>
          <article className="line-card">
            <IconLock />
            <h3>Sicherheit & Komfort</h3>
            <p>Soft-Close, Mehrpunkt-Verriegelung, kindersicher – leiser & sicherer Betrieb.</p>
          </article>
          <article className="line-card">
            <IconWeather />
            <h3>Wetter & Dichtung</h3>
            <p>Wind-/Regen­schutz, Bürsten- & Dichtprofile – verlängerte Outdoor-Saison.</p>
          </article>
        </div>
      </section>

      {/* ===== SHOWCASE — diagonal mosaic + ripple hover ===== */}
      <section id="galerie" className="showcase container">
        <div className="reveal"><h2 className="section-title">Einblicke & Referenzen</h2></div>

        <div className="dia-grid">
          <figure className="shot span7 photo-reveal ripple">
            <img src={asSrc(s1)} alt="Frameless sliding glass wall opening a terrace to the garden" loading="lazy" />
            <figcaption>Panorama</figcaption>
          </figure>
          <figure className="shot span5 photo-reveal ripple">
            <img src={asSrc(s2)} alt="Flush floor track and threshold detail for glass sliding system" loading="lazy" />
            <figcaption>Schwelle & Schiene</figcaption>
          </figure>
          <figure className="shot span12 photo-reveal ripple">
            <img src={asSrc(s3)} alt="Sliding glass system at night with subtle reflections and warm lighting" loading="lazy" />
            <figcaption>Night Ambience</figcaption>
          </figure>
          <figure className="shot span6 photo-reveal ripple">
            <img src={asSrc(s4)} alt="Handle and multi-point lock detail on a glass sliding panel" loading="lazy" />
            <figcaption>Griff & Verriegelung</figcaption>
          </figure>
          <figure className="shot span6 photo-reveal ripple">
            <img src={asSrc(s5)} alt="Sliding glass integrated with pergola and outdoor living area" loading="lazy" />
            <figcaption>Integration</figcaption>
          </figure>
        </div>
      </section>

      {/* ===== PROCESS — compact stepper ===== */}
      <section className="process container">
        <div className="reveal"><h2 className="section-title">Ablauf & Qualität</h2></div>
        <ol className="steps">
          <li><span className="dot">1</span><div><h4>Beratung & Aufmaß</h4><p>Öffnungsbreiten, Achsen, Entwässerung, Tragfähigkeiten – sauber geplant.</p></div></li>
          <li><span className="dot">2</span><div><h4>Fertigung & Montage</h4><p>Profile, Laufwagen, Glas – präzise eingebaut, justiert & dokumentiert.</p></div></li>
          <li><span className="dot">3</span><div><h4>Technik & Sicherheit</h4><p>Soft-Close, Verriegelung, Anschläge – geprüft und eingeregelt.</p></div></li>
          <li><span className="dot">4</span><div><h4>Übergabe & Service</h4><p>Pflege, Nachstellservice, Garantie – langfristig leichtgängig & klar.</p></div></li>
        </ol>
      </section>
    </div>
  );
}
