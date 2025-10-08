import React, { useState, useEffect, useRef, useMemo } from "react";
import "./NewHome.css";

// Media
import hero from "../Hutspace/hutspace3.webp";

import Wood from "./Background.mp4";
import BackgroundMobile from "./Background.mp4"; // konverto në mp4 për mobile nëse e ke .mov

// Imazhet në overlay
import Image1 from "./Image3.webp";
import Image2 from "./Image11.webp";
import Image3 from "./Image5.webp";
import Image4 from "./Image9.webp";
import Image5 from "./Image6.webp";
import Image6 from "./Image4.webp";
import Image7 from "./Image7.webp";
import Image8 from "./Image8.webp";
import Image9 from "./Image10.webp";
// import SplashCursor from './SplashCursor'

// Komponentët
import Card from "../Reusable/SectionFeatures";
import Partners from "../Reusable/Partners";
import Bauweise from "../Reusable/Bauweisen";
import Form from "../Reusable/formwizard";

// ---- Images (Leistungen) ----
import Planung from "./Planung.webp";
import Privatbau from "./Privatbau.webp";
import Gewerbebau from "./Gewerbebau.webp";
import GewerblicherHolzbau from "./Gewerblischerholzbau.webp"; // emri i file-it sipas diskutimit
import Landwirtschaft from "./Landwirschaft.webp";             // emri i file-it sipas diskutimit
// import Haustechnik from "./Haustechnik.webp";
// import Immobilien from "./Immobilien.webp";

// Cozy image
import Couple from "./couple.webp";

const items = [
  { title: "Planung", img: Planung, span: "third", href: "/planung" },
  { title: "Privatbau", img: Privatbau, span: "third", href: "/privatbau" },
  { title: "Gewerbebau", img: Gewerbebau, span: "third" },
  { title: "Gewerblicher Holzbau", img: GewerblicherHolzbau, span: "half" },
  { title: "Landwirtschaft", img: Landwirtschaft, span: "half" },
  // { title: "Haustechnik", img: Haustechnik, span: "half" },
  // { title: "Immobilien", img: Immobilien, span: "half" },
];

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9];

export default function Page() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("slides"); // "slides" | "final"
  const stepRef = useRef(0);

  const GROUP_MS = 3000; // kohëzgjatja e një grupi
  const groupsTotal = Math.ceil(images.length / 3);

  // SLIDES -> FINAL
  useEffect(() => {
    if (phase !== "slides") return;
    stepRef.current = 0;
    setIndex(0);

    const id = setInterval(() => {
      if (stepRef.current >= groupsTotal - 1) {
        clearInterval(id);
        setPhase("final");
        return;
      }
      setIndex((i) => (i + 3) % images.length);
      stepRef.current += 1;
    }, GROUP_MS);

    return () => clearInterval(id);
  }, [phase, groupsTotal]);

  // FINAL -> rikthim te SLIDES pas 4 sekondash
  useEffect(() => {
    if (phase !== "final") return;
    const t = setTimeout(() => {
      // rifillo nga krejt fillimi
      stepRef.current = 0;
      setIndex(0);
      setPhase("slides");
    }, 4000);
    return () => clearTimeout(t);
  }, [phase]);

  // Tripleta aktuale
  const currentTriplet = useMemo(() => {
    const len = images.length;
    return [images[index % len], images[(index + 1) % len], images[(index + 2) % len]];
  }, [index]);

  return (
    <>
      <section className="newhero" aria-label="Hero mit Video und Slideshow">
        <video
          className="newhero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          poster="/poster.jpg" // vendos një poster real për LCP më të mirë
        >
          {/* MOBILE */}
          <source src={BackgroundMobile} type="video/mp4" media="(max-width: 640px)" />
          {/* DESKTOP */}
          <source src={Wood} type="video/mp4" />
        </video>

        <div className="newhero__overlay">
          {/* Vetëm mobile */}
          <div className="mobile-hero-text" aria-live="polite">
            <h2>
              Nachhaltiges Wohnen in
              <br />
              modularen Holzhäusern
            </h2>
          </div>

          {phase === "final" ? (
            // === ERRËSIM + REVEAL NGA POSHTË I "Natural Wohnbau" ===
            <div className="brand-splash" aria-live="polite">
              <h2 className="brand-word" aria-label="Natural Wohnbau">
                <span>Natural</span>
                <br />
                <span>Wohnbau</span>
              </h2>
            </div>
          ) : (
            <div key={index} className="newhero__images newhero__images--fade">
              {currentTriplet.map((src, idx) => (
                <div
                  key={idx}
                  className={`image-container ${
                    idx === 0 ? "image-left" : idx === 1 ? "image-center" : "image-right"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Modernes Holzhaus – Motiv ${((index + idx) % images.length) + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="newhero__img"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <main>
        {/* --- Hero / Home --- */}
        <section className="home" aria-labelledby="home-title">
          <div className="home__bgGlow" aria-hidden="true" />
          <div className="home__container">
            {/* Copy (majtas) */}
            <div className="home__copy">
              <p className="home__eyebrow">
                NATURAL WOHNBAU | Bauunternehmen für nachhaltige Wohnlösungen
              </p>

              {/* H1 unike e faqes */}
              <h1 className="home__title" id="home-title">
                Leistbares Bauen mit <span>Expertise</span>, Transparenz und Hausverstand.
              </h1>

              <p className="home__lead">
                Jedes Bauprojekt ist einzigartig. Es braucht besonderes Gespür, individuelle
                Lösungsansätze und ein tiefes Verständnis für die Wünsche unserer Kundinnen und
                Kunden – sowie einen verantwortungsvollen Umgang mit Ressourcen. Bei Natural
                Wohnbau gehen wir jedes Projekt mit Hausverstand an und behalten Ästhetik,
                Funktionalität und Kosten stets im Blick. Denn Bauen ist leistbar. Man muss nur
                wissen, wie. Genau hier kommen wir ins Spiel.
              </p>

              <div className="home__cta">
                <a href="/kontakt" className="btn btn--ghost">
                  Jetzt Kontaktieren
                </a>
              </div>
            </div>

            {/* Media (djathtas) */}
            <div className="home__media" aria-hidden="true">
              <div className="home__mediaFrame">
                <img
                  src={hero}
                  alt="Moderne Architektur – Natural Wohnbau"
                  className="home__image"
                  loading="eager"
                  decoding="async"
                  width={960}
                  height={720}
                />
                <span className="home__ring" />
              </div>
            </div>
          </div>
        </section>

        {/* --- Unsere Leistungen --- */}
        <section className="services" id="leistungen" aria-labelledby="services-title">
          <div className="services__container">
            <div className="services__header">
              <span className="services__eyebrow">Qualität und Innovation aus einer Hand</span>
              <h2 className="services__title" id="services-title">
                Unsere Leistungen
              </h2>
              <p className="services__lead">
                Wir realisieren Ihr Bauvorhaben – vom schlüsselfertigen Eigenheim und modernen
                Bürogebäude, bis hin zu Sanierungen und Stallbauten.
              </p>
            </div>

            <div className="services__grid" role="list">
              {items.map((it, idx) => {
                const inViewOnLoad = idx < 3; // rreshti i parë (shfaqet pa scroll)
                const height = it.span === "third" ? 180 : 200;

                return (
                  <article
                    key={`${it.title}-${idx}`}
                    className={`services__card ${it.span === "third" ? "is-third" : "is-half"}`}
                    role="listitem"
                  >
                    <div className="services__media">
                      <img
                        src={it.img}
                        alt={it.title}
                        className="services__image"
                        loading={inViewOnLoad ? "eager" : "lazy"}
                        fetchpriority={inViewOnLoad ? "high" : "auto"}
                        decoding="async"
                        width={420}
                        height={height}
                      />
                    </div>
                    <h3 className="services__cardTitle">{it.title}</h3>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Warum Holzrahmenhaus --- */}
        <section className="why" id="warum-holzrahmenhaus" aria-labelledby="why-title">
          <div className="why__container">
            <div className="why__header">
              <span className="why__eyebrow">Warum ein</span>
              <h2 className="why__title" id="why-title">
                Holzrahmenhaus wählen?
              </h2>
            </div>

            <div className="why__grid">
              <article className="why__card">
                <div className="why__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="why__svg" role="img" aria-label="Haus">
                    <path d="M4 12l8-8 8 8v8a2 2 0 0 1-2 2h-4v-6H10v6H6a2 2 0 0 1-2-2v-8z" />
                  </svg>
                </div>
                <h3 className="why__cardTitle">Kurze Bauzeit &amp; Kosteneffizienz</h3>
                <p className="why__text">
                  Einer der größten Vorteile eines Holzrahmenhauses ist die schnelle Bauzeit. Die
                  gesamte Konstruktion benötigt deutlich weniger Zeit als herkömmliche Massivhäuser,
                  was wiederum zu geringeren Arbeits- und Materialkosten führt.
                </p>
              </article>

              <article className="why__card">
                <div className="why__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="why__svg" role="img" aria-label="Flexibilität">
                    <path d="M12 3l9 6-9 6-9-6 9-6zm0 14l9-6v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8l9 6z" />
                  </svg>
                </div>
                <h3 className="why__cardTitle">Flexible Gestaltungsmöglichkeiten</h3>
                <p className="why__text">
                  Nachhaltige Holzhäuser in Holzrahmenbauweise bieten maximale Flexibilität – sowohl
                  bei der Raumaufteilung als auch beim Design von Innen- und Außenbereichen. Ob
                  modern oder klassisch – alles ist möglich!
                </p>
              </article>

              <article className="why__card">
                <div className="why__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="why__svg" role="img" aria-label="Nachhaltigkeit">
                    <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zm0 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  </svg>
                </div>
                <h3 className="why__cardTitle">Umweltfreundlich &amp; Gesund</h3>
                <p className="why__text">
                  Unsere nachhaltigen Holzhäuser bestehen aus ökologischen, schadstofffreien
                  Materialien. Sie schaffen ein gesundes Wohnklima und lassen sich noch individueller
                  planen als klassische Blockhäuser.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* --- Cozy --- */}
        <section className="cozy" id="wohlfuehlen" aria-labelledby="cozy-title">
          <div className="cozy__container">
            <div className="cozy__grid">
              {/* Teksti */}
              <div className="cozy__copy">
                <h2 className="cozy__title" id="cozy-title">
                  Ein Zuhause zum Wohlfühlen!
                </h2>

                <p className="cozy__lead">
                  Ein Haus ist mehr als nur vier Wände – es ist ein Ort, an dem Erinnerungen
                  entstehen, an dem Kinder aufwachsen und Familien Geborgenheit finden.
                </p>

                <p className="cozy__lead">
                  Bei Natural Wohnbau sorgen wir dafür, dass Ihr Zuhause nicht nur nachhaltig,
                  sondern auch warm, sicher und einladend ist – ein Ort zum Wohlfühlen.
                </p>

                <ul className="cozy__list">
                  <li>Gesundes Wohnklima für die ganze Familie</li>
                  <li>Nachhaltige Materialien für eine bessere Zukunft</li>
                  <li>Individuelles Design für maximalen Komfort</li>
                  <li>Weil Ihr Zuhause ein Ort der Liebe und Geborgenheit sein soll!</li>
                </ul>
              </div>

              {/* Foto */}
              <div className="cozy__media" aria-hidden="true">
                <div className="cozy__frame">
                  <img
                    src={Couple}
                    alt="Paar im gemütlichen Zuhause – Ort zum Wohlfühlen"
                    className="cozy__image"
                    loading="lazy"
                    decoding="async"
                    width={960}
                    height={640}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seksionet e tjera */}
        <Card />
        <Partners />
        <Bauweise />

        {/* Kontakt */}
        <section id="kontakt" aria-label="Kontaktformular">
          <Form />
        </section>
      </main>
    </>
  );
}
