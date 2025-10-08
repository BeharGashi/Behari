import React from "react";
import "./Banner140.css";
import styleBg from "./Optima801.jpg";
import styleCircle from "./Optima802.jpg";

export default function Banner140() {
  // fallback për bundler-a të ndryshëm
  const bgUrl = typeof styleBg === "string" ? styleBg : (styleBg?.default ?? "");
  const circleUrl = typeof styleCircle === "string" ? styleCircle : (styleCircle?.default ?? "");

  return (
    <section
      className="ba140-hero"
      style={{ backgroundImage: `url("${bgUrl}")` }}
      aria-label="OPTIMA 80 – Ihr Zuhause, perfekt durchdacht."
    >
      <div className="ba140-hero__inner">
        <div className="ba140-hero__text">
          <h1>OPTIMA 80</h1>
          <p>Ihr Zuhause, perfekt durchdacht.</p>
          <button className="ba140-btn" type="button" aria-label="Aus unserer Galerie ansehen">
            Aus unserer Galerie
          </button>
        </div>

        <div className="ba140-hero__visual" aria-hidden="true">
          {/* Foto rrethore */}
          <div className="ba140-circle">
            <img src={circleUrl} alt="" loading="lazy" />
          </div>

          {/* Harku i artë me animim */}
          <svg className="ba140-arc" viewBox="-50 -50 100 100">
            <path
              d="M -46.5 0 A 46.5 46.5 0 1 1 46.5 0"
              fill="none"
              stroke="#D6B349"
              strokeWidth="7"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
