import React from "react";
import "./Banner130.css";

// ⚠️ Rekomandohet të shmangësh hapësirat në emra të dosjeve/skedarëve.
// Nëse mundesh, riemërto në "Style_130/Style_3.jpg" etj.
import styleBg from "../../../images/Style 130/Style 3.jpg";
import styleCircle from "../../../images/Style 130/Style 2.jpg";

export default function Banner130() {
  // Disa bundler-a mund të kthejnë { default: "url" }, ndaj ky fallback e mbulon të dy rastet
  const bgUrl = typeof styleBg === "string" ? styleBg : (styleBg?.default ?? "");

  return (
    <section
      className="h9a2-hero"
      style={{
        backgroundImage: `url("${bgUrl}")`, // përdor string-un e importuar
      }}
    >
      <div className="h9a2-hero__inner">
        <div className="h9a2-hero__text">
          <h1>
            ROANI 130 <br />
            Einfamilienhaus
          </h1>
          <p>
            Nachhaltig, komfortabel und ganz nach Ihren Wünschen geplant
            für ein Zuhause, das perfekt zu Ihnen passt!
          </p>
          <button className="h9a2-btn">Angebot anfordern</button>
        </div>

        <div className="h9a2-hero__visual">
          {/* Foto rrethore */}
          <div className="h9a2-circle">
            <img src={typeof styleCircle === "string" ? styleCircle : (styleCircle?.default ?? "")} alt="Plant" />
          </div>

          {/* Harku i gjelbër me animim */}
          <svg className="h9a2-arc" viewBox="-50 -50 100 100" aria-hidden="true">
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
