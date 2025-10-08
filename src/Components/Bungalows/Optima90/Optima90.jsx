import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Optima90.css";
import Banner from "./Banner140";
import Details from "./PropertyDetail140";
import Amenities from "./Amenities140";
import FloorPlans from "./FloorPlans140";
import Form from "../../Reusable/formwizard";
import Style1 from "./Optima901.jpg";
import Style2 from "./Optima902.jpg";
import Style3 from "./Optima903.jpg";
import Style4 from "./Optima904.jpg";

export default function Optima90() {
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
              Das OPTIMA 90 Haus überzeugt mit einem klassischen Satteldach, klarer Architektur und einer optimalen Raumaufteilung auf knapp 95 m² Wohnfläche. Es kombiniert Funktionalität, Behaglichkeit und modernes Wohnen – ideal für Familien und Paare.
            </p>
          </div>

          <div className="s130t7details" aria-labelledby="s130t7details__heading">
            <h2 id="s130t7details__heading" className="s130t7details__heading">
              Detaillierte Produktbeschreibung
            </h2>
            <p className="s130t7details__p">
              Das OPTIMA 90 ist ein kompaktes und gleichzeitig großzügiges Einfamilienhaus mit einer Bruttogrundfläche von 113,40 m² und einer Nettowohnfläche von 94,22 m². Durch das zeitlose Design mit Satteldach fügt es sich harmonisch in jede Umgebung ein und bietet zugleich höchste Wohnqualität.
            </p>
            <p className="s130t7details__p">
              Der offene Wohn- und Essbereich (25,19 m²) bildet das Herzstück des Hauses. Große Fensterflächen sorgen für viel Tageslicht und schaffen ein freundliches, helles Ambiente. Die angrenzende Küche (10,57 m²) ist modern gestaltet und funktional angeordnet – perfekt für gemeinsames Kochen und Genießen.
            </p>
            <p className="s130t7details__p">
              Das Haus verfügt über ein Schlafzimmer (13,78 m²), ein Gästezimmer (14,89 m²) sowie ein zusätzliches WC (2,08 m²) neben dem modernen Bad (5,88 m²). Ein Hauswirtschaftsraum (6,24 m²) sorgt für zusätzlichen Stauraum und Funktionalität im Alltag.
            </p>
            <p className="s130t7details__p">
              Besonders hervorzuheben ist die überdachte Terrasse (20,01 m²), die den Wohnraum elegant nach draußen erweitert und einen idealen Ort zum Entspannen im Freien bietet.
            </p>
            <p>
              Mit seiner intelligenten Raumaufteilung, hochwertigen Materialien und energieeffizienten Bauweise steht das OPTIMA 90 für modernes, nachhaltiges Wohnen mit höchstem Komfort.
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
