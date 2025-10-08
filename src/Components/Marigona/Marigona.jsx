import React, { useEffect, useState, useMemo } from "react";
import "./Marigona.css";
import Banner from "./MarigonaBanner";
import Details from "./MarigonaPrpertydetail";
import Amenities from "./MarigonaAmenities";
import Form from "../Reusable/formwizard";
import Style1 from "./Modular4.jpg";
import Style2 from "./Modular5.jpg";
import Style3 from "./Modular6.jpg";
import Style4 from "./Modular7.jpg";
import Style5 from "./modular1.jpg";
import Style6 from "./modular2.jpg";
import Style7 from "./modular3.jpg";
import Style8 from "./modular8.jpg";
import Style9 from "./modular9.jpg";

export default function Marigona() {
  // fotot e galerisë
  const items = useMemo(
    () => [
      { src: Style1, alt: "Style 152 – 1", tall: true },
      { src: Style2, alt: "Style 152 – 2" },
      { src: Style3, alt: "Style 152 – 3", tall: true },
      { src: Style4, alt: "Style 152 – 4" },
      { src: Style5, alt: "Style 152 – 5", tall: true },
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
    <div className="mgstwrap">
      <Banner />

      {/* Teksti i produktit */}
      <section className="mgst">
        <div className="mgst__inner">
          <header className="mgsthero">
            <h1>
              MARA <br />
              Ein modulares Holzhaus, das Natürlichkeit, Komfort und modernes Design in perfekter Harmonie vereint.
            </h1>
          </header>

          <div className="mgstsummary" aria-labelledby="mgstsummary__heading">
            <h2 id="mgstsummary__heading" className="mgstsummary__heading">
              Kurze Beschreibung
            </h2>
            <p className="mgstsummary__p">
              MARA ist ein modernes, modulares Holzhaus, das Komfort, Energieeffizienz und Harmonie mit der Natur vereint. Mit seiner eleganten Architektur und den natürlichen Materialien ist es die ideale Wahl für alle, die einen warmen und funktionalen Raum zum Leben oder Entspannen suchen.
            </p>
          </div>

          <div className="mgstdetails" aria-labelledby="mgstdetails__heading">
            <h2 id="mgstdetails__heading" className="mgstdetails__heading">
              Detaillierte Produktbeschreibung
            </h2>
            <p className="mgstdetails__p">
              MARA verbindet nachhaltige Bauweise mit modernem, alpinem Design. Die Fassade aus vertikalen Massivholzpanelen strahlt natürliche Wärme aus und sorgt gleichzeitig für eine hervorragende Isolierung in jeder Jahreszeit. Das steile Satteldach mit robuster Metalldeckung gewährleistet höchste Widerstandsfähigkeit gegenüber Witterungseinflüssen und macht das Haus langlebig für viele Jahrzehnte.
            </p>
            <p className="mgstdetails__p">
              Großzügige Panoramafenster lassen viel Tageslicht ins Innere und schaffen eine offene, helle Atmosphäre. Die umliegende Natur wird so Teil des Wohngefühls – ideal, um Ausblicke und Ruhe in vollen Zügen zu genießen.
            </p>
            <p className="mgstdetails__p">
              Dank des modularen Konzepts kann MARA flexibel an individuelle Bedürfnisse angepasst werden – sei es als kompaktes Familienhaus, gemütliches Ferienchalet oder kreativer Arbeitsraum. Die klare, durchdachte Architektur bietet nicht nur ästhetische Eleganz, sondern auch hohen funktionalen Nutzen.
            </p>
            <p className="mgstdetails__p">
              MARA ist mehr als ein Haus – es ist ein nachhaltiger und stilvoller Lebensraum, in dem modernes Design und Natur perfekt miteinander verschmelzen.
            </p>
            <p className="mgstdetails__p">
              Jetzt Besichtigung anfragen oder persönliches Angebot sichern!
            </p>
          </div>
        </div>
      </section>

      {/* Detajet / features */}
      <Details />

      {/* Galeria me lightbox */}
      <section className="mggal">
        <div className="mggal__inner">
          <h2 className="mggal__title">Aus unserer Galerie</h2>

          <div className="mggal__grid">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`mggal__item ${it.tall ? "mggal__item--tall" : ""}`}
                onClick={() => openAt(i)}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="mggal__img"
                />
              </figure>
            ))}
          </div>
        </div>

        {open && (
          <div
            className="mggal__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={close}
          >
            <div
              className="mggal__lbInner"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="mggal__lbClose"
                onClick={close}
                aria-label="Close"
              >
                ×
              </button>
              <button
                type="button"
                className="mggal__lbNav mggal__lbNav--prev"
                onClick={prev}
                aria-label="Previous"
              >
                ‹
              </button>
              <img
                className="mggal__lbImg"
                src={items[idx].src}
                alt={items[idx].alt}
              />
              <button
                type="button"
                className="mggal__lbNav mggal__lbNav--next"
                onClick={next}
                aria-label="Next"
              >
                ›
              </button>
              <div className="mggal__lbCaption">{items[idx].alt}</div>
            </div>
          </div>
        )}
      </section>
      <Amenities />
      <Form />
    </div>
  );
}
