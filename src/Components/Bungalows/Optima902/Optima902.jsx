import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Optima902.css";
import Banner from "./Banner140";
import Details from "./PropertyDetail140";
import Amenities from "./Amenities140";
import FloorPlans from "./FloorPlans140";
import Form from "../../Reusable/formwizard";
import Style1 from "./Optima9021.jpg";
import Style2 from "./Optima9022.jpg";
import Style3 from "./Optima9023.jpg";
import Style4 from "./Optima9024.jpg";

export default function Optima902() {
  // Galeria
  const items = useMemo(
    () => [
      { src: Style1, alt: "Style 130 – 1", tall: true },
      { src: Style2, alt: "Style 130 – 2" },
      { src: Style3, alt: "Style 130 – 3", tall: true },
      { src: Style4, alt: "Style 130 – 4" },
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
              Das Modell Optima 90-2 ist ein modernes Bungalow-Haus mit einer kompakten, durchdachten Raumaufteilung auf einer Ebene. Mit einer Nettowohnfläche von ca. 92 m² und einer Bruttogrundfläche von 114,58 m² bietet es ausreichend Platz für Familien und Paare, die Wert auf Funktionalität und Komfort legen. Der klare Baukörper mit Walmdach verleiht dem Haus eine zeitlose Eleganz, während die großen Fensterflächen für viel Tageslicht sorgen.
            </p>
          </div>

          <div className="s130t7details" aria-labelledby="s130t7details__heading">
            <h2 id="s130t7details__heading" className="s130t7details__heading">
              Detaillierte Produktbeschreibung
            </h2>
            <p className="s130t7details__p">
              Das Haus Optima 90-2 vereint modernes Wohnen mit einem effizienten Grundriss. Auf einer Ebene finden Sie alle wichtigen Wohnbereiche übersichtlich angeordnet. Der offene Wohn- und Essbereich mit 24,99 m² bildet das Herzstück des Hauses und öffnet sich zu einer großzügigen Terrasse, die den Wohnraum perfekt nach außen erweitert.
            </p>
            <p className="s130t7details__p">
              Die Küche (8,51 m²) ist kompakt, aber funktional geschnitten und grenzt ideal an den Essbereich. Drei Schlafzimmer (Schlafen 14,50 m², Zimmer 2: 10,57 m², Zimmer 3: 10,35 m²) bieten genügend Rückzugsorte für Eltern, Kinder oder Gäste. Das Badezimmer mit 6,93 m² ist optimal dimensioniert, während ein separater Hauswirtschaftsraum (4,27 m²) zusätzliche Funktionalität sicherstellt.
            </p>
            <p className="s130t7details__p">
              Besonders praktisch ist der klare, rechteckige Grundriss, der kurze Wege garantiert und den Wohnkomfort erhöht. Durch die geradlinige Architektur und das elegante Walmdach fügt sich das Haus harmonisch in jede Umgebung ein.
            </p>
            <p className="s130t7details__p">
              Das Optima 902 eignet sich perfekt für Familien mit bis zu drei Kindern oder Paare, die einen kompakten, modernen Bungalow suchen. Dank seiner klaren Architektur, der durchdachten Raumaufteilung und der hohen Energieeffizienz ist es eine Investition in die Zukunft – komfortabel, funktional und stilvoll.
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
