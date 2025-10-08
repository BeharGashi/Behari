import React from "react";
import './Amenities150-2.css'

export default function Amenities150_2() {
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
    <div className="amv152">
      <div className="amv152__inner">
        <h3 className="amv152__title">Es ist möglich.</h3>

        <div className="amv152__grid" role="list">
          {amenities.map((a) => (
            <div className="amv152__item" role="listitem" aria-checked="true" key={a}>
              <span className="amv152__check" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16">
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
              <span className="amv152__label">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
