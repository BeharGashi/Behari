import React, { useEffect, useState, useMemo } from "react";
import "./Hutspace.css";
import Banner from "./Banner";
import Details from "./Prpertydetail";
import Amenities from "./HSAmenities";
import Form from "../Reusable/formwizard";
import Style1 from "./hutspace0.webp";
import Style2 from "./hutspace1.webp";
import Style3 from "./hutspace2.webp";
import Style4 from "./hutspace3.webp";
import Style5 from "./hutspace4.webp";
import Style6 from "./hutspace5.webp";
import Style7 from "./hutspace6.webp";
import Style8 from "./hutspace7.webp";
import Style9 from "./hutspace8.webp";

export default function Hutspace() {
  // fotot e galerisë
  const items = useMemo(
    () => [
      { src: Style1, alt: "Style 152 – 1", tall: true },
      { src: Style2, alt: "Style 152 – 2" },
      { src: Style3, alt: "Style 152 – 3", tall: true },
      { src: Style4, alt: "Style 152 – 4" },
      { src: Style5, alt: "Style 152 – 5",tall: true },
      { src: Style6, alt: "Style 152 – 6" },
      { src: Style7, alt: "Style 152 – 6" },
      { src: Style8, alt: "Style 152 – 6" },
      { src: Style9, alt: "Style 152 – 6" },
      
    ],
    []
  );

  // Lightbox
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i) => { setIdx(i); setOpen(true); };
  const close = () => setOpen(false);
  const next = () => setIdx((i) => (i + 1) % items.length);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);

  // tastiera + lock scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div className="st152wrap">
      <Banner />

      {/* Teksti i produktit */}
      <section className="st152">
        <div className="st152__inner">
          <header className="st152hero">
          <h1>
            HUT SPACE <br />
            Zwischen Vergangenheit und Zukunft
          </h1>
          </header>

          <div className="st152summary" aria-labelledby="st152summary__heading">
            <h2 id="st152summary__heading" className="st152summary__heading">
              Kurze Beschreibung
            </h2>
            <p className="st152summary__p">
              Hoch oben auf dem Berg, wo Natur und Stille dominieren, schwebt HUT SPACE – eine modulare Hütte mit 70 m², gebaut aus Stahlrahmen und warmem SWP-Holz im Inneren.
Die Konstruktion steht auf Stelzen und berührt den Boden kaum. Kein Graben, kein Fundament – nur Leichtigkeit, Naturverbundenheit und maximale Rücksicht auf die Umgebung.
Innen gemütlich, außen robust, mit Panoramablick und zeitlosem Design – HUT SPACE ist nicht nur ein Rückzugsort, sondern ein Erlebnis für alle Sinne.
            </p>
          </div>

          <div className="st152details" aria-labelledby="st152details__heading">
            <h2 id="st152details__heading" className="st152details__heading">
              Detaillierte Produktbeschreibung
            </h2>
            <p className="st152details__p">
              Was HUT SPACE so besonders macht? Es ist nicht nur ein Haus – es ist ein Statement.
            </p>
            <p className="st152details__p">
              Ein Statement für architektonische Freiheit, nachhaltiges Bauen und respektvollen Umgang mit der Natur.
            </p>
            <p className="st152details__p">
              Dank seiner Stelzenkonstruktion schwebt HUT SPACE über dem Boden, ohne ihn zu berühren. Kein anderes Wohnkonzept verbindet Design, Natur und Funktionalität auf so elegante Weise. Während andere graben, betonieren und zerstören, setzt HUT SPACE auf Leichtigkeit, Ästhetik und Umweltbewusstsein.
            </p>
            <p className="st152details__p">
              Von außen futuristisch, von innen warm und gemütlich – mit hochwertigen Naturmaterialien und einem Panorama, das man nie vergisst. Diese Kombination macht HUT SPACE zu einem Ort, den es so nur einmal gibt.
            </p>
            <p className="st152details__p">
              Jetzt Besichtigung anfragen oder persönliches Angebot sichern!
            </p>
          </div>
        </div>
      </section>

      {/* Detajet / features */}
      <Details />

      {/* Galeria me lightbox */}
      <section className="hsgal">
        <div className="hsgal__inner">
          <h2 className="hsgal__title">Aus unserer Galerie</h2>

          <div className="hsgal__grid">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`hsgal__item ${it.tall ? "hsgal__item--tall" : ""}`}
                onClick={() => openAt(i)}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="hsgal__img"
                />
              </figure>
            ))}
          </div>
        </div>

        {open && (
          <div
            className="hsgal__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={close}
          >
            <div
              className="hsgal__lbInner"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="hsgal__lbClose"
                onClick={close}
                aria-label="Close"
              >
                ×
              </button>
              <button
                type="button"
                className="hsgal__lbNav hsgal__lbNav--prev"
                onClick={prev}
                aria-label="Previous"
              >
                ‹
              </button>
              <img
                className="hsgal__lbImg"
                src={items[idx].src}
                alt={items[idx].alt}
              />
              <button
                type="button"
                className="hsgal__lbNav hsgal__lbNav--next"
                onClick={next}
                aria-label="Next"
              >
                ›
              </button>
              <div className="hsgal__lbCaption">{items[idx].alt}</div>
            </div>
          </div>
        )}
      </section>
      <Amenities />
      <Form />
    </div>
  );
}
