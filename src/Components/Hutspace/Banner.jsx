import React from "react";
import './Banner.css'

// ⚠️ Rekomandohet të shmangësh hapësirat në emra të dosjeve/skedarëve.
// Nëse mundesh, riemërto në "Style_130/Style_3.jpg" etj.
import styleBg from './hutspace1.webp'
import styleCircle from './hutspace3.webp'

export default function Banner150_2() {
  // Disa bundler-a mund të kthejnë { default: "url" }, ndaj ky fallback e mbulon të dy rastet
  const bgUrl = typeof styleBg === "string" ? styleBg : (styleBg?.default ?? "");

  return (
    <section
      className="hsba-hero"
      style={{
        backgroundImage: `url("${bgUrl}")`, // përdor string-un e importuar
      }}
    >
      <div className="hsba-hero__inner">
        <div className="hsba-hero__text">
          <h1>
            HUT SPACE
          </h1>
          <p>
             Wo andere scheitern, setzen wir um
          </p>
          <button className="hsba-btn">Aus unserer Galerie</button>
        </div>

        <div className="hsba-hero__visual">
          {/* Foto rrethore */}
          <div className="hsba-circle">
            <img src={typeof styleCircle === "string" ? styleCircle : (styleCircle?.default ?? "")} alt="Plant" />
          </div>

          {/* Harku i gjelbër me animim */}
          <svg className="hsba-arc" viewBox="-50 -50 100 100" aria-hidden="true">
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
