import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Optima80.css";
import Banner from "./Banner140";
import Details from "./PropertyDetail140";
import Amenities from "./Amenities140";
import FloorPlans from "./FloorPlans140";
import Form from "../../Reusable/formwizard";
import Style1 from "./Optima801.jpg";
import Style2 from "./Optima802.jpg";
import Style3 from "./Optima803.jpg";
import Style4 from "./Optima804.jpg";
import Style5 from "./Optima805.jpg";
import Style6 from "./Optima806.jpg";

export default function Optima80() {
  // Galeria
  const items = useMemo(
    () => [
      { src: Style1, alt: "Style 130 – 1", tall: true },
      { src: Style2, alt: "Style 130 – 2" },
      { src: Style3, alt: "Style 130 – 3", tall: true },
      { src: Style4, alt: "Style 130 – 4" },
      { src: Style5, alt: "Style 130 – 5" },
      { src: Style6, alt: "Style 130 – 6" },
    ],
    []
  );

  // Lightbox
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const closeBtnRef = useRef(null);

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };
  const close = () => setOpen(false);
  const next = () => setIdx((i) => (i + 1) % items.length);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);

  // tastiera + lock scroll + fokus te "Close"
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
    // fokus te butoni mbyll
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div className="s130t7wrap">
      <Banner />

      {/* Teksti i produktit */}
      <section className="s130t7" aria-labelledby="s130t7-hero-title">
        <div className="s130t7__inner">
          <header className="s130t7hero">
            <h1 className="s130t7hero__title" id="s130t7-hero-title">
              Moderne Harmonie und zeitloser Komfort
            </h1>
          </header>

          <div className="s130t7summary" aria-labelledby="s130t7summary__heading">
            <h2 id="s130t7summary__heading" className="s130t7summary__heading">
              Kurze Beschreibung
            </h2>
            <p className="s130t7summary__p">
              Das OPTIMA Haus besticht durch seine moderne Architektur, eine durchdachte Raumaufteilung und energieeffiziente Bauweise. Mit über 100 m² Bruttogrundfläche bietet es genügend Platz für die ganze Familie und schafft ein behagliches Wohngefühl.
            </p>
          </div>

          <div className="s130t7details" aria-labelledby="s130t7details__heading">
            <h2 id="s130t7details__heading" className="s130t7details__heading">
              Detaillierte Produktbeschreibung
            </h2>
            <p className="s130t7details__p">
              Das OPTIMA Haus ist die ideale Wahl für alle, die ein modernes, funktionales und zugleich gemütliches Zuhause suchen. Mit einer Bruttogrundfläche von 100,46 m² und einer Nettowohnfläche von 82,3 m² bietet es ausreichend Raum für komfortables Wohnen.
            </p>
            <p className="s130t7details__p">
              Die großzügig gestalteten Wohn- und Essbereiche (25,01 m²) sind das Herzstück des Hauses und laden zu gemeinsamen Momenten mit Familie und Freunden ein. Die helle Küche (11,72 m²) überzeugt mit praktischer Anordnung und direkter Anbindung an den Wohnbereich. Zwei Schlafzimmer (11,69 m² und 9,80 m²) bieten Rückzugsmöglichkeiten, während ein zusätzliches Gästezimmer oder Arbeitszimmer flexible Nutzung erlaubt.
            </p>
            <p className="s130t7details__p">
              Besonders praktisch ist die durchdachte Raumaufteilung mit Speis (2,27 m²), Technikraum (5,38 m²) und einem Bad mit 6,50 m², das modernen Wohnkomfort garantiert. Eine gemütliche Terrasse (9,91 m²) erweitert den Wohnraum ins Freie und lädt zum Entspannen ein.
            </p>
            <p className="s130t7details__p">
              Dank hochwertiger Bauweise, klarer Linien und energieeffizienter Materialien vereint das OPTIMA Haus Funktionalität, Nachhaltigkeit und zeitloses Design – perfekt für Familien und Paare, die Wert auf Qualität und Wohlbefinden legen.
            </p>
          </div>
        </div>
      </section>

      {/* Detajet / features */}
      <Details />

      {/* Galeria me lightbox */}
      <section className="g130t7" aria-labelledby="g130t7-title">
        <div className="g130t7__inner">
          <h2 className="g130t7__title" id="g130t7-title">Aus unserer Galerie</h2>

          <div className="g130t7__grid">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`g130t7__item ${it.tall ? "g130t7__item--tall" : ""}`}
              >
                <button
                  className="g130t7__itemBtn"
                  type="button"
                  onClick={() => openAt(i)}
                  aria-label={`Bild öffnen: ${it.alt}`}
                >
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className="g130t7__img"
                  />
                </button>
              </figure>
            ))}
          </div>
        </div>

        {open && (
          <div
            className="g130t7__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Bildanzeige"
            onClick={close}
          >
            <div
              className="g130t7__lbInner"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="g130t7__lbClose"
                onClick={close}
                aria-label="Close"
                ref={closeBtnRef}
                type="button"
              >
                ×
              </button>
              <button
                className="g130t7__lbNav g130t7__lbNav--prev"
                onClick={prev}
                aria-label="Previous"
                type="button"
              >
                ‹
              </button>
              <img
                className="g130t7__lbImg"
                src={items[idx].src}
                alt={items[idx].alt}
              />
              <button
                className="g130t7__lbNav g130t7__lbNav--next"
                onClick={next}
                aria-label="Next"
                type="button"
              >
                ›
              </button>
              <div
                className="g130t7__lbCaption"
                id="g130t7__caption"
                aria-live="polite"
              >
                {items[idx].alt}
              </div>
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
