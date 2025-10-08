import React, { useEffect, useState, useMemo } from "react";
import "./Stile130.css";
import Banner from './Banner130'
import Details from "./PropertyDetail";
import Amenities from './Amenities'
import FloorPlans from './FloorPlans'
import Form from '../../Reusable/formwizard'
import Style1 from '../../../images/Style 130/Style 1.jpg';
import Style2 from "../../../images/Style 130/Style 2.jpg";
import Style3 from '../../../images/Style 130/Style 3.jpg'
import Style4 from "../../../images/Style 130/Style 4.jpg";
import Style5 from "../../../images/Style 130/Style 5.jpg";
import Style6 from "../../../images/Style 130/Style 6.jpg";

export default function Style130Text() {
  // fotot e galerisë
  const items = useMemo(
    () => [
      { src: Style1, alt: "Style 130 – 1" },
      { src: Style2, alt: "Style 130 – 2" },
      { src: Style3, alt: "Style 130 – 3", tall: true },
      { src: Style4, alt: "Style 130 – 4" },
      { src: Style5, alt: "Style 130 – 5", tall: true },
      { src: Style6, alt: "Style 130 – 6" },
    ],
    []
  );

  // Lightbox
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };
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
    <div className="st130wraper">
      <Banner />

      {/* Teksti i produktit */}
      <section className="st130text">
        <div className="st130text__inner">
          <header className="st130hero">
            <h1 className="st130hero__title">
              Das moderne Walmdachhaus für höchste Ansprüche
            </h1>
          </header>

          <div
            className="st130summary"
            aria-labelledby="st130summary__heading"
          >
            <h2 id="st130summary__heading" className="st130summary__heading">
              Kurze Beschreibung
            </h2>
            <p className="st130summary__p">
              Das Style 130 von MADERA Wohnbau ist ein elegantes und
              energieeffizientes Fertighaus, das moderne Architektur mit
              optimaler Raumnutzung verbindet. Mit seinem stilvollen Walmdach,
              großzügigen Fensterflächen und einer klaren Raumaufteilung bietet
              es höchsten Wohnkomfort für Familien, die Wert auf Qualität,
              Design und Nachhaltigkeit legen.
            </p>
          </div>

          <div
            className="st130details"
            aria-labelledby="st130details__heading"
          >
            <h2 id="st130details__heading" className="st130details__heading">
              Detaillierte Produktbeschreibung
            </h2>
            <p className="st130details__p">
              Das Walmdach verleiht dem Haus nicht nur eine zeitlose, elegante
              Optik, sondern bietet auch funktionale Vorteile wie zusätzlichen
              Wetterschutz und hervorragende Stabilität. Durch die intelligente
              Aufteilung auf zwei Etagen wird der verfügbare Raum optimal
              genutzt, sodass sich Wohn-, Arbeits- und Rückzugsbereiche perfekt
              kombinieren lassen.
            </p>
            <p className="st130details__p">
              Die Bauweise als Fertighaus ermöglicht eine schnelle Errichtung,
              präzise Verarbeitung und beste Energieeffizienz. Hochwertige
              Materialien, moderne Dämmtechnik und eine durchdachte Planung
              sorgen für niedrige Betriebskosten und hohen Wohnkomfort das ganze
              Jahr über.
            </p>
            <p className="st130details__p">
              Dieses Haus ist in hohem Maße individualisierbar – vom Grundriss
              bis zur Ausstattung – und kann genau an Ihre Bedürfnisse und Ihren
              Lebensstil angepasst werden. Ob mit größerer Terrasse,
              zusätzlichem Büro oder einer erweiterten Küche, der Gestaltung
              sind kaum Grenzen gesetzt.
            </p>
          </div>
        </div>
      </section>

      {/* Detajet / features */}
      <Details />

      {/* Galeria me lightbox */}
      <section className="gal130">
        <div className="gal130__inner">
          <h2 className="gal130__title">From Our Gallery</h2>

          <div className="gal130__grid">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`gal130__item ${
                  it.tall ? "gal130__item--tall" : ""
                }`}
                onClick={() => openAt(i)}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="gal130__img"
                />
              </figure>
            ))}
          </div>
        </div>

        {open && (
          <div
            className="gal130__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={close}
          >
            <div
              className="gal130__lbInner"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="gal130__lbClose"
                onClick={close}
                aria-label="Close"
              >
                ×
              </button>
              <button
                className="gal130__lbNav gal130__lbNav--prev"
                onClick={prev}
                aria-label="Previous"
              >
                ‹
              </button>
              <img
                className="gal130__lbImg"
                src={items[idx].src}
                alt={items[idx].alt}
              />
              <button
                className="gal130__lbNav gal130__lbNav--next"
                onClick={next}
                aria-label="Next"
              >
                ›
              </button>
              <div className="gal130__lbCaption">{items[idx].alt}</div>
            </div>
          </div>
        )}
      </section>
      <FloorPlans />
      <Amenities />
      <Form />
    </div>
  );
}
