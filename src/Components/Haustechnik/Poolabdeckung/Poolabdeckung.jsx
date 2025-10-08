import React, { useEffect } from "react";
import "./Poolabdeckung.css";

/* Assets (replace with your real files) */
import heroImg from "./pa-hero.webp";
import s1 from "./pa-1.webp";
import s2 from "./pa-2.webp";
import s3 from "./pa-3.webp";
import s4 from "./pa-4.webp";
import s5 from "./pa-5.webp";
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

/* Minimal icons for pool covers (inherit color via .i) */
const IconSlats = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path d="M3 7h18M3 11h18M3 15h18M3 19h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);
const IconUnderfloor = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect x="3" y="5" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="7" cy="17" r="1.2" fill="currentColor" />
        <circle cx="12" cy="17" r="1.2" fill="currentColor" />
        <circle cx="17" cy="17" r="1.2" fill="currentColor" />
    </svg>
);
const IconSafety = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path d="M12 3l7 3v6c0 4.4-3 8.4-7 9-4-0.6-7-4.6-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconEnergy = () => (
  <svg
    className="i"
    viewBox="0 0 512 512"
    aria-hidden="true"
    fill="currentColor"
    focusable="false"
  >
    <path d="M201.208,442.942c1.158,0.533,2.379,0.792,3.588,0.792c2.675,0,5.283-1.258,6.929-3.546l153.6-213.333
      c1.871-2.6,2.129-6.029,0.671-8.879c-1.462-2.85-4.392-4.642-7.596-4.642h-76.458l33.537-134.467
      c0.992-3.971-0.975-8.087-4.688-9.808c-3.733-1.717-8.133-0.571-10.517,2.754l-153.6,213.333c-1.871,2.6-2.129,6.029-0.671,8.879
      c1.462,2.85,4.392,4.642,7.596,4.642h76.458l-33.538,134.467C195.529,437.104,197.496,441.221,201.208,442.942z M249.263,292.2
      c0.638-2.55,0.062-5.25-1.554-7.321s-4.1-3.279-6.725-3.279h-70.725l117.912-163.767L262.737,219.8
      c-0.638,2.55-0.062,5.25,1.554,7.321s4.1,3.279,6.725,3.279h70.725L223.829,394.167L249.263,292.2z"/>
    <path d="M503.467,247.467c-4.713,0-8.533,3.821-8.533,8.533c0,131.75-107.183,238.933-238.933,238.933
      c-70.547,0-137.665-31.642-182.867-85.333h46.333c4.713,0,8.533-3.821,8.533-8.533c0-4.713-3.821-8.533-8.533-8.533H51.2
      c-4.713,0-8.533,3.821-8.533,8.533v68.267c0,4.713,3.821,8.533,8.533,8.533s8.533-3.821,8.533-8.533v-49.146
      C108.161,477.95,180.235,512,256,512c141.158,0,256-114.842,256-256C512,251.287,508.179,247.467,503.467,247.467z"/>
    <path d="M256,17.067c70.547,0,137.665,31.642,182.867,85.333h-46.333c-4.713,0-8.533,3.821-8.533,8.533s3.821,8.533,8.533,8.533
      H460.8c4.713,0,8.533-3.821,8.533-8.533V42.667c0-4.713-3.821-8.533-8.533-8.533c-4.713,0-8.533,3.821-8.533,8.533v49.146
      C403.839,34.05,331.765,0,256,0C114.842,0,0,114.842,0,256c0,4.713,3.821,8.533,8.533,8.533s8.533-3.821,8.533-8.533
      C17.067,124.25,124.25,17.067,256,17.067z"/>
  </svg>
);

export default function Poolabdeckung() {
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
                                Signature Pools
                            </span>
                            <h1 className="headline">
                                Poolabdeckung <em><br />Eleganz, Sicherheit & Effizienz</em>
                            </h1>
                            <p className="lead">
                                Unterflur- oder Oberflur-Rollo, Sicherheitsplanen dhe Solar-Lamellen – për ujë të pastër,
                                humbje minimale nxehtësie dhe siguri maksimale. Zgjidhje diskrete, të integruara me estetikën e pishinës.
                            </p>

                            <div className="chips" role="list">
                                <span role="listitem" className="chip">Oberflur-Rollo</span>
                                <span role="listitem" className="chip">Sicherheitsabdeckung</span>
                                <span role="listitem" className="chip">Solar-Lamellen</span>
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
                        <IconSlats />
                        <h3>Lamellen & Optik</h3>
                        <p>PVC/Polycarbonat lamella me finish transparent, opak ose solar – e zbut pamjen, rrit sigurinë.</p>
                    </article>
                    <article className="line-card">
                        <IconUnderfloor />
                        <h3>Unterflur-Integration</h3>
                        <p>Kuti e fshehur nën skaj me kapak të ecur – linja të pastra pa elemente të dukshme.</p>
                    </article>
                    <article className="line-card">
                        <IconSafety />
                        <h3>Sicherheit</h3>
                        <p>Standarde sigurie, profile mbajtëse & mbyllje – për fëmijë & kafshë shtëpiake.</p>
                    </article>
                    <article className="line-card">
                        <IconEnergy />
                        <h3>Energie & Solar</h3>
                        <p>Solar-lamellen për fitim termik, më pak avullim & kosto më të ulëta operative.</p>
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
                        <img src={asSrc(s1)} alt="Underwater roller housing with discrete slot at pool edge" loading="lazy" />
                        <figcaption>Unterflur-Rollo</figcaption>
                    </figure>
                    <figure className="shot span5 photo-reveal ripple">
                        <img src={asSrc(s2)} alt="Above-ground roller bench matching the pool deck finish" loading="lazy" />
                        <figcaption>Oberflur-Bank</figcaption>
                    </figure>
                    <figure className="shot span12 photo-reveal ripple">
                        <img src={asSrc(s3)} alt="Solar slats cover on a luxury pool at sunset" loading="lazy" />
                        <figcaption>Solar-Lamellen</figcaption>
                    </figure>
                    <figure className="shot span6 photo-reveal ripple">
                        <img src={asSrc(s4)} alt="Safety cover across the pool with anti-slip surface" loading="lazy" />
                        <figcaption>Sicherheitsabdeckung</figcaption>
                    </figure>
                    <figure className="shot span6 photo-reveal ripple">
                        <img src={asSrc(s5)} alt="Detail of end caps, drive shaft and clean cable management" loading="lazy" />
                        <figcaption>Technik & Finish</figcaption>
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
                            <p>Tipi i mbulesës, integrimi, dimensionet & energjia – të përcaktuara qartë.</p>
                        </div>
                    </li>
                    <li>
                        <span className="dot">2</span>
                        <div>
                            <h4>Struktur & Kuti</h4>
                            <p>Niche/banak, kapakët, kullimi – montim i pastër dhe i dokumentuar.</p>
                        </div>
                    </li>
                    <li>
                        <span className="dot">3</span>
                        <div>
                            <h4>Teknikë & Inbetriebnahme</h4>
                            <p>Boshti, motori, telekomanda – test, siguri & rregullim i forcës.</p>
                        </div>
                    </li>
                    <li>
                        <span className="dot">4</span>
                        <div>
                            <h4>Übergabe & Service</h4>
                            <p>Udhëzim, mirëmbajtje, garanci – jetëgjatësi & ujë gjithnjë i pastër.</p>
                        </div>
                    </li>
                </ol>
            </section>

            {/* ===== CTA ===== */}
            <section className="cta container">
                <div className="cta-box reveal">
                    <div>
                        <span className="kicker"><i aria-hidden="true" /> Nächster Schritt</span>
                        <h2 className="section-title" style={{ marginTop: ".35rem" }}>Planen wir Ihre Poolabdeckung</h2>
                        <p className="lead">Estetikë, siguri & kursim energjie – të integruara në mënyrë perfekte.</p>
                    </div>
                    <a href="#leistungen" className="btn btn--gold">Projekt starten</a>
                </div>
            </section>
        </div>
    );
}
