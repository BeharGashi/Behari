import React, { useEffect } from "react";
import "./Glasdach.css";

/* Assets (replace with your real files) */
import heroImg from "./sa-hero.webp";
import s1 from "./gd-1.webp";
import s2 from "./gd-2.webp";
import s3 from "./Background.webp";
import s4 from "./gd-4.webp";
import s5 from "./gd-5.webp";
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

/* Minimal glass-roof icons (inherit color from CSS via .i) */
const IconGlass = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path d="M3 10l9-6 9 6v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 10h18M8 21l8-11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);
const IconDrain = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path d="M4 6h16v6c0 3.5-3 6.5-8 6.5S4 15.5 4 12V6Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 8h12M9 18s1.5 2 3 2 3-2 3-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);
const IconSnow = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path d="M12 2v20M4 6l16 12M4 18L20 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
);
const IconShade = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect x="3" y="5" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 16h12M8 19h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

export default function Glasdach() {
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
                                Glasdach <em><br />Transparenter Wetterschutz</em>
                            </h1>
                            <p className="lead">
                                VSG/ESG-Glas, schlanke Aluminiumprofile und integrierte Entwässerung –
                                lichtdurchflutet, wetterfest und auf Statik & Schneelast ausgelegt.
                                Optional mit Unterglas-Markise, LED und Sensorik.
                            </p>

                            <div className="chips" role="list">
                                <span role="listitem" className="chip">Verdeckte Entwässerung</span>
                                <span role="listitem" className="chip">Schneelast & Statik</span>
                                <span role="listitem" className="chip">Unterglas-Beschattung</span>
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
                        <IconGlass />
                        <h3>Glas & Profile</h3>
                        <p>VSG/ESG, UV-beständige Dichtungen und schlanke Profile – klar und robust.</p>
                    </article>
                    <article className="line-card">
                        <IconDrain />
                        <h3>Entwässerung</h3>
                        <p>Integrierte Rinnen & Pfostenabfluss – trockene Terrasse bei jedem Regen.</p>
                    </article>
                    <article className="line-card">
                        <IconSnow />
                        <h3>Statik & Schneelast</h3>
                        <p>Nachweis für Schneelastzonen, Wandanschluss & Lastabtrag – sicher geplant.</p>
                    </article>
                    <article className="line-card">
                        <IconShade />
                        <h3>Beschattung & Licht</h3>
                        <p>Unterglas-Markisen, ZIP-Screens & LED-Linien – Klima & Stimmung nach Wunsch.</p>
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
                        <img src={asSrc(s1)} alt="Modern glass roof attached to a facade with slim aluminium profiles" loading="lazy" />
                        <figcaption>Glas & Profile</figcaption>
                    </figure>
                    <figure className="shot span5 photo-reveal ripple">
                        <img src={asSrc(s2)} alt="Hidden gutter and downpipe integrated into the post of a glass roof" loading="lazy" />
                        <figcaption>Entwässerung</figcaption>
                    </figure>
                    <figure className="shot span12 photo-reveal ripple">
                        <img src={asSrc(s3)} alt="Glass roof at night with integrated LED lines and reflections" loading="lazy" />
                        <figcaption>Night Ambience</figcaption>
                    </figure>
                    <figure className="shot span6 photo-reveal ripple">
                        <img src={asSrc(s4)} alt="Wall flashing and sealed connection detail of a glass roof" loading="lazy" />
                        <figcaption>Anschluss & Abdichtung</figcaption>
                    </figure>
                    <figure className="shot span6 photo-reveal ripple">
                        <img src={asSrc(s5)} alt="Under-glass awning and screen options for shading a glass roof" loading="lazy" />
                        <figcaption>Beschattung</figcaption>
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
                            <p>Aufmaß, Statik, Wandanschluss, Entwässerung – alles sauber geklärt.</p>
                        </div>
                    </li>
                    <li>
                        <span className="dot">2</span>
                        <div>
                            <h4>Fertigung & Montage</h4>
                            <p>Profile, Glasfelder & Abdichtungen – präzise montiert und dokumentiert.</p>
                        </div>
                    </li>
                    <li>
                        <span className="dot">3</span>
                        <div>
                            <h4>Technik & Inbetriebnahme</h4>
                            <p>LED, Markise, Sensorik – Test, Feineinstellung & Einweisung.</p>
                        </div>
                    </li>
                    <li>
                        <span className="dot">4</span>
                        <div>
                            <h4>Übergabe & Service</h4>
                            <p>Pflege & Wartung, Garantie – langfristig klare Sicht.</p>
                        </div>
                    </li>
                </ol>
            </section>
        </div>
    );
}
