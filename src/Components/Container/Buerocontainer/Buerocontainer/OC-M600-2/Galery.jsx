import React, { useState } from "react";
import "./Galery.css";

// Ndrysho path-et / extension-et sipas strukturës tënde
import Image1 from "./OC_M600-2-9-scaled.webp";
import Image2 from "./OC_M600-2-10-scaled.webp";
import Image3 from "./OC_M600-2-11-scaled.webp";
import Image4 from "./OC_M600-2-12-scaled.webp";


export default function Galery({
  images = [Image1, Image2, Image4, Image3],
  alts = [
    "Ansicht 1", "Ansicht 2", "Ansicht 3", "Ansicht 4", "Ansicht 5"
  ],
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="gal" aria-label="Bildgalerie">
      <div className="gal__container">
        {/* 1) Foto kryesore */}
        <figure className="gal__main">
          <img
            src={images[active]}
            alt={alts[active] || "Bild"}
            className="gal__mainImg"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </figure>

        {/* 2 & 3) Thumbnails – 3 në rreshtin e parë, 2 në të dytin */}
        <ul className="gal__thumbs" role="listbox" aria-label="Wähle ein Bild">
          {images.map((src, idx) => (
            <li key={idx} className="gal__thumbItem" role="option" aria-selected={active === idx}>
              <button
                type="button"
                className={`gal__thumbBtn ${active === idx ? "is-active" : ""}`}
                onClick={() => setActive(idx)}
                aria-label={`Bild ${idx + 1} anzeigen`}
              >
                <img
                  src={src}
                  alt={alts[idx] || `Bild ${idx + 1}`}
                  className="gal__thumbImg"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}