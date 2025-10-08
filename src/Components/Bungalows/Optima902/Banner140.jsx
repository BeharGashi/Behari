import React from "react";
import './Banner140.css'
import styleBg from './Optima9022.jpg'
import styleCircle from './Optima9023.jpg'

export default function Banner130() {
  // Disa bundler-a mund të kthejnë { default: "url" }, ndaj ky fallback e mbulon të dy rastet
  const bgUrl = typeof styleBg === "string" ? styleBg : (styleBg?.default ?? "");

  return (
    <section
      className="ba140-hero"
      style={{
        backgroundImage: `url("${bgUrl}")`, // përdor string-un e importuar
      }}
    >
      <div className="ba140-hero__inner">
        <div className="ba140-hero__text">
          <h1>
            OPTIMA 90/2
          </h1>
          <p>
            Ihr Zuhause, perfekt durchdacht.
          </p>
          <button className="ba140-btn">Aus unserer Galerie</button>
        </div>

        <div className="ba140-hero__visual">
          {/* Foto rrethore */}
          <div className="ba140-circle">
            <img src={typeof styleCircle === "string" ? styleCircle : (styleCircle?.default ?? "")} alt="Plant" />
          </div>

          {/* Harku i gjelbër me animim */}
          <svg className="ba140-arc" viewBox="-50 -50 100 100" aria-hidden="true">
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
