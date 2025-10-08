import React from "react";
import "./Hero.css";
import heroImg from "../../../../images/Sanitarycontainer.JPG"; // ndrysho path sipas projektit

export default function Hero() {
  return (
    <section className="ocmh" aria-labelledby="ocmh-title">
      {/* Hero image si element për prioritet/lcp */}
      <img
        src={heroImg}
        alt="Bürocontainer OC-M600-1"
        className="ocmh__img"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />

      {/* Overlay gradient #082C38 -> #082C3852 */}
      <div className="ocmh__overlay" aria-hidden="true" />

      {/* Copy */}
      <div className="ocmh__container">
        <h1 id="ocmh-title" className="ocmh__title">
          TYP: SC-M300-3
        </h1>
        <p className="ocmh__text">
          Abmessungen: 3000X2438&nbsp;mm / 7.31&nbsp;m²
        </p>
      </div>
    </section>
  );
}
