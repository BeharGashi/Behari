import React, { useEffect } from "react";
import "./Kassettenmarkise.css";

/* Assets (replace with your real files) */
import heroImg from "./Background.webp";
import s1 from "./km-1.webp";
import s2 from "./km-2.webp";
import s3 from "./km-3.webp";
import s4 from "./km-4.webp";
import s5 from "./km-5.webp";
import background from './km-hr.webp'

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

/* Pointer ripple for .ripple tiles (optional nice hover) */
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

/* Minimal cassette-awning icons */
const IconCassette = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect x="2" y="5" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
);
const IconFabric = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path d="M4 6h16v8c-2 1.5-4 1.5-6 0s-4-1.5-6 0-4 1.5-4 0V6Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
);
const IconSensor = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5 12a7 7 0 0 1 7-7m7 7a7 7 0 0 1-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M2 12a10 10 0 0 1 10-10m10 10a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);
const IconLight = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect x="4" y="7" width="16" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 16h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

export default function Kassettenmarkise() {
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
                                Signature Outdoor
                            </span>
                            <h1 className="headline">
                                Kassettenmarkise <em><br />Stilvoller Sonnenschutz</em>
                            </h1>
                            <p className="lead">
                                Vollkassette für Tuch & Technik, leiser Motorantrieb und optionale
                                LED-Lichtlinien – eleganter Schatten für Terrasse & Balkon, langlebig
                                und windfest mit smarter Sensorik.
                            </p>

                            <div className="chips" role="list">
                                <span role="listitem" className="chip">Vollkassette</span>
                                <span role="listitem" className="chip">Funksteuerung & App</span>
                                <span role="listitem" className="chip">Wind-/Sonnen-Sensor</span>
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
                        <IconCassette />
                        <h3>Kassette & Mechanik</h3>
                        <p>Vollgeschützte Technik, stabile Arme, präzise Laufkultur – sauber integriert.</p>
                    </article>
                    <article className="line-card">
                        <IconFabric />
                        <h3>Tuch & Farben</h3>
                        <p>Hochwertige Gewebe, UV-Schutz & wasserabweisend – Farbtöne passend zur Fassade.</p>
                    </article>
                    <article className="line-card">
                        <IconSensor />
                        <h3>Sensorik & Wind</h3>
                        <p>Wind-/Sonnen-/Regen-Sensoren für automatische Ein-/Ausfahrt – sorglos im Alltag.</p>
                    </article>
                    <article className="line-card">
                        <IconLight />
                        <h3>Licht & Komfort</h3>
                        <p>LED-Linien, Heizelemente & Funksteuerung – Atmosphäre bis në mbrëmje.</p>
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
                        <img src={asSrc(s1)} alt="Cassette awning extended over a modern terrace" loading="lazy" />
                        <figcaption>Architektur & Schatten</figcaption>
                    </figure>
                    <figure className="shot span5 photo-reveal ripple">
                        <img src={asSrc(s2)} alt="Close-up of the closed cassette box and arm joints" loading="lazy" />
                        <figcaption>Kassette & Arme</figcaption>
                    </figure>
                    <figure className="shot span12 photo-reveal ripple">
                        <img src={asSrc(s3)} alt="Awning fabric texture and color swatches in daylight" loading="lazy" />
                        <figcaption>Tuch & Farben</figcaption>
                    </figure>
                    <figure className="shot span6 photo-reveal ripple">
                        <img src={asSrc(s4)} alt="Wind and sun sensor mounted near the awning with controller" loading="lazy" />
                        <figcaption>Sensorik</figcaption>
                    </figure>
                    <figure className="shot span6 photo-reveal ripple">
                        <img src={asSrc(s5)} alt="Integrated LED light strip beneath the awning in the evening" loading="lazy" />
                        <figcaption>LED & Komfort</figcaption>
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
                            <h4>Beratung & Aufmaß</h4>
                            <p>Fassade, Befestigungspunkte, Ausladung & Breite – exakt geplant.</p>
                        </div>
                    </li>
                    <li>
                        <span className="dot">2</span>
                        <div>
                            <h4>Fertigung & Montage</h4>
                            <p>Kassette, Arme, Tuch & Elektro – fachgerecht montiert dhe testuar.</p>
                        </div>
                    </li>
                    <li>
                        <span className="dot">3</span>
                        <div>
                            <h4>Elektrik & Sensorik</h4>
                            <p>Motor, Funk, Sensorë – programim & integrim me shtëpinë smart.</p>
                        </div>
                    </li>
                    <li>
                        <span className="dot">4</span>
                        <div>
                            <h4>Übergabe & Service</h4>
                            <p>Udhëzim, mirëmbajtje, pastrim i Tuch-it – jetëgjatësi dhe garanci.</p>
                        </div>
                    </li>
                </ol>
            </section>
        </div>
    );
}
