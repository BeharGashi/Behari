import React from "react";
import './Amenities140_2.css'

export default function Amenities140_2() {
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
    <div className="am142">
      <div className="am142__inner">
        <h3 className="am142__title">Es ist möglich.</h3>

        <div className="am142__grid" role="list">
          {amenities.map((a) => (
            <div className="am142__item" role="listitem" aria-checked="true" key={a}>
              <span className="am142__check" aria-hidden="true">
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
              <span className="am142__label">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
