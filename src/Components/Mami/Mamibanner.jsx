import React from "react";
import './Mamibanner.css'

// ⚠️ Rekomandohet të shmangësh hapësirat në emra të dosjeve/skedarëve.
// Nëse mundesh, riemërto në "Style_130/Style_3.jpg" etj.
import styleBg from './Modul1.jpg'
import styleCircle from './Modul2.jpg'

export default function Mamibanner() {
  // Disa bundler-a mund të kthejnë { default: "url" }, ndaj ky fallback e mbulon të dy rastet
  const bgUrl = typeof styleBg === "string" ? styleBg : (styleBg?.default ?? "");

  return (
    <section
      className="maba-hero"
      style={{
        backgroundImage: `url("${bgUrl}")`, // përdor string-un e importuar
      }}
    >
      <div className="maba-hero__inner">
        <div className="maba-hero__text">
          <h1>
            MAMA
          </h1>
          <p>
             Einfach wohnen, natürlich leben.
          </p>
          <button className="maba-btn">Aus unserer Galerie</button>
        </div>

        <div className="maba-hero__visual">
          {/* Foto rrethore */}
          <div className="maba-circle">
            <img src={typeof styleCircle === "string" ? styleCircle : (styleCircle?.default ?? "")} alt="Plant" />
          </div>

          {/* Harku i gjelbër me animim */}
          <svg className="maba-arc" viewBox="-50 -50 100 100" aria-hidden="true">
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
