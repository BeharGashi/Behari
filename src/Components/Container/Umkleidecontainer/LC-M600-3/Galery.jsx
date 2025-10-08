import React, { useState } from "react";
import "./Galery.css";

// Ndrysho path-et / extension-et sipas strukturës tënde
import Image1 from "./LC_M600-3-31-1-scaled.jpg";
import Image2 from "./LC_M600-3-32-scaled.jpg";
import Image3 from "./LC_M600-3-33-scaled.jpg";
import Image4 from "./LC_M600-3-34-scaled.jpg";
import Image5 from "./LC_M600-3-35-scaled.jpg";


export default function Galery({
  images = [Image2, Image1, Image3, Image4, Image5],
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