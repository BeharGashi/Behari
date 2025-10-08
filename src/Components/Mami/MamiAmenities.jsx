import React from "react";
import './MamiAmenities.css'

export default function MamiAmenities() {
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
    <div className="maamv">
      <div className="maamv__inner">
        <h3 className="maamv__title">Es ist möglich.</h3>

        <div className="maamv__grid" role="list">
          {amenities.map((a) => (
            <div className="maamv__item" role="listitem" aria-checked="true" key={a}>
              <span className="maamv__check" aria-hidden="true">
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
              <span className="maamv__label">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
