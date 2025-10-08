import React, { useEffect } from "react";
import "./Pergola.css";

/* Assets (replace with your real files) */
import heroImg from "./sa-hero.webp";
import s1 from "./sa-1.webp";
import s2 from "./sa-2.webp";
import s3 from "./sa-3.webp";
import s4 from "./sa-4.webp";
import s5 from "./sa-5.webp";
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

/* Minimal pergola-themed icons (inherit color from CSS via .i) */
const IconSun = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.8 4.8l2.1 2.1M17.1 17.1l2.1 2.1M4.8 19.2l2.1-2.1M17.1 6.9l2.1-2.1"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);
const IconScreen = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 8h12M6 11h12M6 14h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);
const IconWeather = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path d="M7 15a5 5 0 1 1 8.2-5.9A4 4 0 1 1 19 15H7Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 20l2-2M11 20l2-2M15 20l2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);
const IconLight = () => (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect x="4" y="6" width="16" height="4" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 18h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

export default function Pergola() {
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
                                Pergola <em><br />Stilvoller Sonnenschutz</em>
                            </h1>
                            <p className="lead">
                                Bioklimatische Lamellen, ZIP-Screens und integrierte LED — eleganter
                                Schutz vor Sonne, Regen & Blicken. Maßgefertigt für Terrasse, Garten
                                oder Dachterrasse – ganzjähriger Komfort im Freien.
                            </p>

                            <div className="chips" role="list">
                                <span role="listitem" className="chip">Bioklimatische Lamellen</span>
                                <span role="listitem" className="chip">ZIP-Screens & Glas</span>
                                <span role="listitem" className="chip">LED, Heizung & Sensoren</span>
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
                        <IconSun />
                        <h3>Lamellen & Klima</h3>
                        <p>Neigungs- & Drehwinkel für Licht, Schatten und Luftzirkulation — auf Knopfdruck.</p>
                    </article>
                    <article className="line-card">
                        <IconScreen />
                        <h3>Screens & Privatsphäre</h3>
                        <p>Windfeste ZIP-Screens, Schiebe-Glas & Sichtschutz – transparent, wenn duhet, i fshehtë kur doni.</p>
                    </article>
                    <article className="line-card">
                        <IconWeather />
                        <h3>Regen & Entwässerung</h3>
                        <p>Integrierte Rinnen dhe kolona me dalje të fshehur – terasa mbetet e thatë.</p>
                    </article>
                    <article className="line-card">
                        <IconLight />
                        <h3>LED & Steuerung</h3>
                        <p>Skena drite, ngrohje rrezatuese, sensorë ere/shiu & app-control – komoditet i plotë.</p>
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
                        <img src={asSrc(s1)} alt="Bioclimatic pergola with adjustable louvre roof on a modern terrace" loading="lazy" />
                        <figcaption>Lamellen & Geometrie</figcaption>
                    </figure>
                    <figure className="shot span5 photo-reveal ripple">
                        <img src={asSrc(s2)} alt="Wind-resistant ZIP screens lowered on a pergola" loading="lazy" />
                        <figcaption>ZIP-Screens</figcaption>
                    </figure>
                    <figure className="shot span12 photo-reveal ripple">
                        <img src={asSrc(s3)} alt="Pergola at night with integrated LED lines and cozy dining setup" loading="lazy" />
                        <figcaption>Night Ambience</figcaption>
                    </figure>
                    <figure className="shot span6 photo-reveal ripple">
                        <img src={asSrc(s4)} alt="Hidden gutter and downpipe detail inside the pergola post" loading="lazy" />
                        <figcaption>Entwässerung</figcaption>
                    </figure>
                    <figure className="shot span6 photo-reveal ripple">
                        <img src={asSrc(s5)} alt="Powder-coated aluminium profiles and hardware close-up" loading="lazy" />
                        <figcaption>Material & Finish</figcaption>
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
                            <p>Arkitekturë, diell/erë, pikë fikse — projekt i personalizuar.</p>
                        </div>
                    </li>
                    <li>
                        <span className="dot">2</span>
                        <div>
                            <h4>Prodhim & Montim</h4>
                            <p>Profile alumini, lamela, screens & xham — montim i pastër.</p>
                        </div>
                    </li>
                    <li>
                        <span className="dot">3</span>
                        <div>
                            <h4>Teknikë & Inbetriebnahme</h4>
                            <p>Motorë, sensore, dritë & kontroll — testim dhe rregullim.</p>
                        </div>
                    </li>
                    <li>
                        <span className="dot">4</span>
                        <div>
                            <h4>Übergabe & Service</h4>
                            <p>Udhëzim, mirëmbajtje, garanci — përdorim gjatë gjithë vitit.</p>
                        </div>
                    </li>
                </ol>
            </section>
        </div>
    );
}
