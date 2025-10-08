import React from "react";
import './MarigonaBanner.css'

// ⚠️ Rekomandohet të shmangësh hapësirat në emra të dosjeve/skedarëve.
// Nëse mundesh, riemërto në "Style_130/Style_3.jpg" etj.
import styleBg from './Modular7.jpg'
import styleCircle from './Modular6.jpg'

export default function MarigonaBanner() {
  // Disa bundler-a mund të kthejnë { default: "url" }, ndaj ky fallback e mbulon të dy rastet
  const bgUrl = typeof styleBg === "string" ? styleBg : (styleBg?.default ?? "");

  return (
    <section
      className="mgba-hero"
      style={{
        backgroundImage: `url("${bgUrl}")`, // përdor string-un e importuar
      }}
    >
      <div className="mgba-hero__inner">
        <div className="mgba-hero__text">
          <h1>
            MARA
          </h1>
          <p>
             Wohnen im Einklang mit der Natur.
          </p>
          <button className="mgba-btn">Aus unserer Galerie</button>
        </div>

        <div className="mgba-hero__visual">
          {/* Foto rrethore */}
          <div className="mgba-circle">
            <img src={typeof styleCircle === "string" ? styleCircle : (styleCircle?.default ?? "")} alt="Plant" />
          </div>

          {/* Harku i gjelbër me animim */}
          <svg className="mgba-arc" viewBox="-50 -50 100 100" aria-hidden="true">
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
