import React from "react";
import "./Banner140_2.css";

import st142 from './Style_1.jpg'
import st1420 from './Style_3.jpg'


export default function Banner140_2() {
  const bgUrl = typeof st142 === "string" ? st142 : (st142?.default ?? "");

  return (
    <section
      className="be142-hero"
      style={{ backgroundImage: `url("${bgUrl}")` }}
    >
      <div className="be142-hero__inner">
        <div className="be142-hero__text">
          <h1>
            ROANI 140 <br />
            Einfamilienhaus
          </h1>
          <p>
            Nachhaltig, komfortabel und ganz nach Ihren Wünschen geplant
            für ein Zuhause, das perfekt zu Ihnen passt!
          </p>
          <button className="be142-btn">Angebot anfordern</button>
        </div>

        <div className="be142-hero__visual">
          {/* Foto rrethore */}
          <div className="be142-circle">
            <img
              src={typeof st1420 === "string" ? st1420 : (st1420?.default ?? "")}
              alt="Plant"
            />
          </div>

          {/* Harku i gjelbër me animim */}
          <svg className="be142-arc" viewBox="-50 -50 100 100" aria-hidden="true">
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
