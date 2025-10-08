import React, { useEffect, useState, useMemo } from "react";
import "./Mami.css";
import Banner from "./Mamibanner";
import Details from "./Mamipropertydetail";
import Amenities from "./MamiAmenities";
import Form from "../Reusable/formwizard";
import Style1 from "./Modul1.jpg";
import Style2 from "./Modul2.jpg";
import Style3 from "./Modul3.jpg";


export default function Mami() {
  // fotot e galerisë
  const items = useMemo(
    () => [
      { src: Style1, alt: "Style 152 – 1", tall: true  },
      { src: Style2, alt: "Style 152 – 2" },
      { src: Style3, alt: "Style 152 – 3" },
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
    <div className="mastwrap">
      <Banner />

      {/* Teksti i produktit */}
      <section className="mast">
        <div className="mast__inner">
          <header className="masthero">
            <h1>
              MAMA <br />
              Ein Ort zum Ankommen, Wohlfühlen und Genießen – modern, nachhaltig und funktional
            </h1>
          </header>

          <div className="mastsummary" aria-labelledby="mastsummary__heading">
            <h2 id="mastsummary__heading" className="mastsummary__heading">
              Kurze Beschreibung
            </h2>
            <p className="mastsummary__p">
              MAMA ist ein modernes Modulhaus mit klarer Linienführung und zeitlosem Design. Es vereint Funktionalität, Komfort und Nachhaltigkeit in einem kompakten Wohnkonzept, das sowohl für den Alltag als auch für die Freizeit geeignet ist.
            </p>
          </div>

          <div className="mastdetails" aria-labelledby="mastdetails__heading">
            <h2 id="mastdetails__heading" className="mastdetails__heading">
              Detaillierte Produktbeschreibung
            </h2>
            <p className="mastdetails__p">
              Das Modell MAMA steht für ein elegantes, minimalistisches Wohnerlebnis inmitten der Natur. Mit seiner Kombination aus natürlicher Holzfassade und modernen architektonischen Elementen schafft es eine einzigartige Balance zwischen Wärme, Klarheit und Stil.
            </p>
            <p className="mastdetails__p">
              Die großzügigen Fensterfronten öffnen den Raum nach außen und lassen viel Tageslicht hinein. Dadurch entsteht ein helles, freundliches Ambiente, das das Wohngefühl auf natürliche Weise erweitert. Dank der durchdachten Raumaufteilung bietet MAMA maximale Funktionalität auf kompakter Fläche – ideal für Paare, kleine Familien oder als Ferienhaus.
            </p>
            <p className="mastdetails__p">
              Das modulare Konzept erlaubt zudem eine flexible Anpassung: Ob als Single-Unit, als Ferienhaus oder als erweiterbares Wohnkonzept – MAMA passt sich perfekt an individuelle Bedürfnisse an. Hochwertige Materialien und energieeffiziente Bauweise sorgen für Langlebigkeit und ein gesundes Raumklima.
            </p>
            <p className="mastdetails__p">
              MAMA ist mehr als ein Haus – es ist ein Lebensstil, der Einfachheit, Design und Natur in Einklang bringt.
            </p>
            <p className="mastdetails__p">
              Jetzt Besichtigung anfragen oder persönliches Angebot sichern!
            </p>
          </div>
        </div>
      </section>

      {/* Detajet / features */}
      <Details />

      {/* Galeria me lightbox */}
      <section className="magal">
        <div className="magal__inner">
          <h2 className="magal__title">Aus unserer Galerie</h2>

          <div className="magal__grid">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`magal__item ${it.tall ? "magal__item--tall" : ""}`}
                onClick={() => openAt(i)}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="magal__img"
                />
              </figure>
            ))}
          </div>
        </div>

        {open && (
          <div
            className="magal__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={close}
          >
            <div
              className="magal__lbInner"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="magal__lbClose"
                onClick={close}
                aria-label="Close"
              >
                ×
              </button>
              <button
                type="button"
                className="magal__lbNav magal__lbNav--prev"
                onClick={prev}
                aria-label="Previous"
              >
                ‹
              </button>
              <img
                className="magal__lbImg"
                src={items[idx].src}
                alt={items[idx].alt}
              />
              <button
                type="button"
                className="magal__lbNav magal__lbNav--next"
                onClick={next}
                aria-label="Next"
              >
                ›
              </button>
              <div className="magal__lbCaption">{items[idx].alt}</div>
            </div>
          </div>
        )}
      </section>
      <Amenities />
      <Form />
    </div>
  );
}
