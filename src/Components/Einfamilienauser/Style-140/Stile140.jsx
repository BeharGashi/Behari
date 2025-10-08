import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Stile140.css";
import Banner from "./Banner140";
import Details from "./PropertyDetail140";
import Amenities from "./Amenities140";
import FloorPlans from "./FloorPlans140";
import Form from "../../Reusable/formwizard";
import Style1 from "./Style_1.jpg";
import Style2 from "./Style_2.jpg";
import Style3 from "./Style_3.jpg";
import Style4 from "./Style_4.jpg";

export default function Style130Text() {
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
              Das Haus „Roani 140 wurde entworfen, um Ihnen eine perfekte
              Kombination aus Funktionalität, moderner Ästhetik und täglichem
              Wohnkomfort zu bieten. Mit einer eleganten Architektur,
              lichtdurchfluteten Räumen und einer intelligenten Raumaufteilung
              ist dieses Projekt ideal für Familien, die Wert auf Qualität und
              Behaglichkeit in jedem Detail legen.
            </p>
          </div>

          <div className="s130t7details" aria-labelledby="s130t7details__heading">
            <h2 id="s130t7details__heading" className="s130t7details__heading">
              Detaillierte Produktbeschreibung
            </h2>
            <p className="s130t7details__p">
              Das markante Walmdach verleiht diesem Haus nicht nur einen modernen
              und dennoch zeitlosen Charakter, sondern bietet auch praktische
              Vorzüge wie optimalen Schutz vor Witterungseinflüssen und eine
              solide Bauweise. Die durchdachte Aufteilung auf zwei Ebenen nutzt
              den vorhandenen Raum effizient und schafft eine harmonische
              Verbindung zwischen Wohn-, Arbeits- und Ruhezonen.
            </p>
            <p className="s130t7details__p">
              Dank der Fertighausbauweise erfolgt die Umsetzung zügig und präzise,
              mit höchster Verarbeitungsqualität und ausgezeichneter
              Energieeffizienz. Moderne Dämmmaterialien, innovative Haustechnik
              und sorgfältig geplante Grundrisse tragen dazu bei, Betriebskosten
              zu minimieren und ein angenehmes Raumklima zu jeder Jahreszeit zu
              gewährleisten.
            </p>
            <p className="s130t7details__p">
              Dieses Haus lässt sich flexibel an Ihre Wünsche anpassen – von der
              Raumaufteilung bis hin zu individuellen Ausstattungsvarianten. Ob
              Sie eine großzügige Terrasse, ein zusätzliches Gästezimmer oder eine
              offene Wohnküche bevorzugen, der Gestaltungsspielraum ist nahezu
              unbegrenzt.
            </p>
            <p className="s130t7details__p">
              Die Bauweise als Fertighaus ermöglicht eine schnelle Errichtung,
              präzise Verarbeitung und beste Energieeffizienz. Hochwertige
              Materialien, moderne Dämmtechnik und eine durchdachte Planung sorgen
              für niedrige Betriebskosten und hohen Wohnkomfort das ganze Jahr
              über.
            </p>
            <p className="s130t7details__p">
              Dieses Haus ist in hohem Maße individualisierbar – vom Grundriss bis
              zur Ausstattung – und kann genau an Ihre Bedürfnisse und Ihren
              Lebensstil angepasst werden. Ob mit größerer Terrasse, zusätzlichem
              Büro oder einer erweiterten Küche, der Gestaltung sind kaum Grenzen
              gesetzt.
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
