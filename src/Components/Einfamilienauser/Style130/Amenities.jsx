import React from "react";
import "./Amenities.css";

export default function Amenities() {
  const amenities = [
    "Küche",
    "Badezimmer",
    "Wohnzimmer",
    "Swimming Pool",
    "Treppe",
    "Schlafzimmer",
    "Türen",
    "Fenster",
    "Bodenbeläge",
    "Möbel",
    "Elektroinstallation",
    "Solarsysteme",
    "Wasserinstallation",
    "Sauna",
    "Pergola",
    "Whirlpool",
    "Glas Cover",
    "Kassettenmarkise",
    "Pools – Luxus",
    "Poolabdeckung",
    "Schiebesystem aus Glas",
  ];

  return (
    <section className="am" aria-labelledby="am-title">
      <div className="am__inner">
        <h3 className="am__title" id="am-title">Es ist möglich.</h3>

        <ul className="am__grid">
          {amenities.map((a) => (
            <li className="am__item" key={a} tabIndex={0}>
              <span className="am__check" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
                  <polyline
                    points="20 6 9 17 4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="am__label">{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
