import React, { useEffect, useState, useMemo } from "react";
import "./Stile150-2.css";
import Banner from "./Banner150-2";
import Details from "./PropertyDetail150-2";
import Amenities from "./Amenities150-2";
import FloorPlans from "./FloorPlans150-2";
import Form from "../../Reusable/formwizard";
import Style1 from "./Style_1.jpg";
import Style2 from "./Style_2.jpg";
import Style3 from "./Style_3.jpg";
import Style4 from "./Style_4.jpg";
import Style5 from './Style_5.jpg';
import Style6 from './Style_6.jpg'

export default function Stile150() {
  // fotot e galerisë
  const items = useMemo(
    () => [
      { src: Style1, alt: "Style 152 – 1", tall: true },
      { src: Style2, alt: "Style 152 – 2" },
      { src: Style3, alt: "Style 152 – 3", tall: true },
      { src: Style4, alt: "Style 152 – 4" },
      { src: Style5, alt: "Style 152 – 5" },
      { src: Style6, alt: "Style 152 – 6" },
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
            <h1 className="st152hero__title">
              Moderne Harmonie und zeitloser Komfort
            </h1>
          </header>

          <div className="st152summary" aria-labelledby="st152summary__heading">
            <h2 id="st152summary__heading" className="st152summary__heading">
              Kurze Beschreibung
            </h2>
            <p className="st152summary__p">
              Das Haus „Roani 140“ wurde entworfen, um Ihnen eine perfekte
              Kombination aus Funktionalität, moderner Ästhetik und täglichem
              Wohnkomfort zu bieten. Mit einer eleganten Architektur,
              lichtdurchfluteten Räumen und einer intelligenten Raumaufteilung
              ist dieses Projekt ideal für Familien, die Wert auf Qualität und
              Behaglichkeit in jedem Detail legen.
            </p>
          </div>

          <div className="st152details" aria-labelledby="st152details__heading">
            <h2 id="st152details__heading" className="st152details__heading">
              Detaillierte Produktbeschreibung
            </h2>
            <p className="st152details__p">
              Das markante Walmdach verleiht diesem Haus nicht nur einen modernen und
              dennoch zeitlosen Charakter, sondern bietet auch praktische Vorzüge wie
              optimalen Schutz vor Witterungseinflüssen und eine solide Bauweise. Die
              durchdachte Aufteilung auf zwei Ebenen nutzt den vorhandenen Raum
              effizient und schafft eine harmonische Verbindung zwischen Wohn-, Arbeits-
              und Ruhezonen.
            </p>
            <p className="st152details__p">
              Dank der Fertighausbauweise erfolgt die Umsetzung zügig und präzise, mit
              höchster Verarbeitungsqualität und ausgezeichneter Energieeffizienz.
              Moderne Dämmmaterialien, innovative Haustechnik und sorgfältig geplante
              Grundrisse tragen dazu bei, Betriebskosten zu minimieren und ein
              angenehmes Raumklima zu jeder Jahreszeit zu gewährleisten.
            </p>
            <p className="st152details__p">
              Dieses Haus lässt sich flexibel an Ihre Wünsche anpassen – von der
              Raumaufteilung bis hin zu individuellen Ausstattungsvarianten. Ob Sie
              eine großzügige Terrasse, ein zusätzliches Gästezimmer oder eine offene
              Wohnküche bevorzugen, der Gestaltungsspielraum ist nahezu unbegrenzt.
            </p>
            <p className="st152details__p">
              Die Bauweise als Fertighaus ermöglicht eine schnelle Errichtung, präzise
              Verarbeitung und beste Energieeffizienz. Hochwertige Materialien,
              moderne Dämmtechnik und eine durchdachte Planung sorgen für niedrige
              Betriebskosten und hohen Wohnkomfort das ganze Jahr über.
            </p>
            <p className="st152details__p">
              Dieses Haus ist in hohem Maße individualisierbar – vom Grundriss bis zur
              Ausstattung – und kann genau an Ihre Bedürfnisse und Ihren Lebensstil
              angepasst werden. Ob mit größerer Terrasse, zusätzlichem Büro oder einer
              erweiterten Küche, der Gestaltung sind kaum Grenzen gesetzt.
            </p>
          </div>
        </div>
      </section>

      {/* Detajet / features */}
      <Details />

      {/* Galeria me lightbox */}
      <section className="gal152">
        <div className="gal152__inner">
          <h2 className="gal152__title">Aus unserer Galerie</h2>

          <div className="gal152__grid">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`gal152__item ${it.tall ? "gal152__item--tall" : ""}`}
                onClick={() => openAt(i)}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="gal152__img"
                />
              </figure>
            ))}
          </div>
        </div>

        {open && (
          <div
            className="gal152__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={close}
          >
            <div
              className="gal152__lbInner"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="gal152__lbClose"
                onClick={close}
                aria-label="Close"
              >
                ×
              </button>
              <button
                type="button"
                className="gal152__lbNav gal152__lbNav--prev"
                onClick={prev}
                aria-label="Previous"
              >
                ‹
              </button>
              <img
                className="gal152__lbImg"
                src={items[idx].src}
                alt={items[idx].alt}
              />
              <button
                type="button"
                className="gal152__lbNav gal152__lbNav--next"
                onClick={next}
                aria-label="Next"
              >
                ›
              </button>
              <div className="gal152__lbCaption">{items[idx].alt}</div>
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
