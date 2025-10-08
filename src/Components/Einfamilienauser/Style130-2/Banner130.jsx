import React from "react";
import "./Banner130.css";

import styleBg from './Style_5.jpg'
import styleCircle from './Style_3.jpg'
export default function Banner130() {
  const bgUrl = typeof styleBg === "string" ? styleBg : (styleBg?.default ?? "");

  return (
    <section
      className="b130a1-hero"
      style={{ backgroundImage: `url("${bgUrl}")` }}
    >
      <div className="b130a1-hero__inner">
        <div className="b130a1-hero__text">
          <h1>
            ROANI 130 <br />
            Einfamilienhaus
          </h1>
          <p>
            Nachhaltig, komfortabel und ganz nach Ihren Wünschen geplant
            für ein Zuhause, das perfekt zu Ihnen passt!
          </p>
          <button className="b130a1-btn">Angebot anfordern</button>
        </div>

        <div className="b130a1-hero__visual">
          {/* Foto rrethore */}
          <div className="b130a1-circle">
            <img
              src={typeof styleCircle === "string" ? styleCircle : (styleCircle?.default ?? "")}
              alt="Plant"
            />
          </div>

          {/* Harku i gjelbër me animim */}
          <svg className="b130a1-arc" viewBox="-50 -50 100 100" aria-hidden="true">
            <path
              d="M -46.5 0 A 46.5 46.5 0 1 1 46.5 0"
              fill="none"
              stroke="#D6B349"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
