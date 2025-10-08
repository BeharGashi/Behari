import React from "react";
import "./BungalowsHero.css";
import Einfam from "./Bungalows.webp";
import Twofam from "./BungalowsA.webp";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${Einfam})` }}
      aria-label="Bungalows aus Holz – moderner Wohntraum"
    >
      <div className="hero__inner">
        <div className="hero__text">
          <p className="eyebrow">Moderne Bungalows aus Holz</p>
          <h1>
            Bungalows <br />
            Der perfekte Wohntraum auf einer Ebene
          </h1>
          <p className="lead">
            Moderne, barrierefreie Bungalows mit durchdachtem Design, hoher
            Energieeffizienz und maximalem Wohnkomfort.
          </p>
          <button className="btn" type="button" aria-label="Request a Quote">
            Request a Quote
          </button>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="circle">
            <img src={Twofam} alt="" loading="lazy" />
          </div>
          <svg className="arc" viewBox="-50 -50 100 100">
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
