import React, { useEffect, useState, useMemo } from "react";
import "./Stile130.css";
import Banner from "./Banner130";
import Details from './PropertyDetail'
import Amenities140 from './Amenities'
import FloorPlans from './FloorPlans'
import Form from '../../Reusable/formwizard'
import Style1 from './Style_1.jpg';
import Style2 from './Style_2.jpg';
import Style3 from './Style_3.jpg';
import Style4 from './Style_4.jpg';
import Style5 from './Style_5.jpg';

export default function Style130_2() {
  // fotot e galerisë
  const items = useMemo(
    () => [
      { src: Style1, alt: "Style 130 – 1", tall: true },
      { src: Style2, alt: "Style 130 – 2" },
      { src: Style3, alt: "Style 130 – 3"},
      { src: Style4, alt: "Style 130 – 4"  },
      { src: Style5, alt: "Style 130 – 5"},
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
    <div className="s130t7wrap">
      <Banner />

      {/* Teksti i produktit */}
      <section className="s130t7">
        <div className="s130t7__inner">
          <header className="s130t7hero">
            <h1 className="s130t7hero__title">
              Das Walmdach-Fertighaus mit Stil, <br></br>Komfort und Effizienz
            </h1>
          </header>

          <div
            className="s130t7summary"
            aria-labelledby="st130summary__heading"
          >
            <h2 id="st130summary__heading" className="s130t7summary__heading">
              Kurze Beschreibung
            </h2>
            <p className="s130t7summary__p">
              Das ROAN 130-2 ist die perfekte Kombination aus zeitloser Architektur und moderner Funktionalität. Mit seinem markanten Walmdach, großzügigen Fensterfronten und einer intelligenten Raumaufteilung bietet dieses Fertighaus ein behagliches Zuhause für Familien, die Wert auf Design, Komfort und Energieeffizienz legen.
            </p>
          </div>

          <div
            className="s130t7details"
            aria-labelledby="st130details__heading"
          >
            <h2 id="st130details__heading" className="s130t7details__heading">
              Detaillierte Produktbeschreibung
            </h2>
            <p className="s130t7details__p">
              Das Walmdach verleiht dem Haus nicht nur ein elegantes Erscheinungsbild, sondern schützt zusätzlich vor Witterungseinflüssen und sorgt für Stabilität über Jahrzehnte hinweg. Die clevere Grundrissgestaltung schafft eine klare Trennung zwischen Wohn- und Schlafbereichen und sorgt für helle, offene Räume mit viel Tageslicht.

              Dank moderner Fertighaustechnik wird das Style 130 in kurzer Zeit und mit höchster Präzision errichtet. Die energieeffiziente Bauweise und hochwertige Dämmung reduzieren Heizkosten und schonen die Umwelt. Zudem lässt sich das Haus individuell anpassen – ob zusätzliche Terrasse, vergrößerte Küche oder erweiterte Wohnbereiche.
            </p>
            <p className="s130t7details__p">
              Die Bauweise als Fertighaus ermöglicht eine schnelle Errichtung,
              präzise Verarbeitung und beste Energieeffizienz. Hochwertige
              Materialien, moderne Dämmtechnik und eine durchdachte Planung
              sorgen für niedrige Betriebskosten und hohen Wohnkomfort das ganze
              Jahr über.
            </p>
            <p className="s130t7details__p">
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
      <section className="g130t7">
        <div className="g130t7__inner">
          <h2 className="g130t7__title">Aus unserer Galerie</h2>

          <div className="g130t7__grid">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`g130t7__item ${it.tall ? "g130t7__item--tall" : ""}`}
                onClick={() => openAt(i)}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="g130t7__img"
                />
              </figure>
            ))}
          </div>
        </div>

        {open && (
          <div
            className="g130t7lb__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={close}
          >
            <div
              className="g130t7lb__lbInner"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="g130t7lb__lbClose"
                onClick={close}
                aria-label="Close"
              >
                ×
              </button>
              <button
                className="g130t7lb__lbNav g130t7lb__lbNav--prev"
                onClick={prev}
                aria-label="Previous"
              >
                ‹
              </button>
              <img
                className="g130t7lb__lbImg"
                src={items[idx].src}
                alt={items[idx].alt}
              />
              <button
                className="g130t7lb__lbNav g130t7lb__lbNav--next"
                onClick={next}
                aria-label="Next"
              >
                ›
              </button>
              <div className="g130t7lb__lbCaption">{items[idx].alt}</div>
            </div>
          </div>
        )}
      </section>

      <FloorPlans />
      <Amenities140 />
      <Form />
    </div>
  );
}
