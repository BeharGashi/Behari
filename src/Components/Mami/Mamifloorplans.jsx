import React, { useState } from "react";
import './Mamifloorplans.css'

// Importet e fotove (nëse s’ke Plan3 ende, mund ta rikthesh te Plan2)
import Plan1 from './Plan_1.jpg'
import Plan2 from './Plan_2.jpg'


export default function Mamifloorplans() {
  const floors = [
    { key: "first",  label: "Erdgeschoss",  img: Plan1 },
    { key: "second", label: "Erste Etage", img: Plan2 },
  ];

  const [active, setActive] = useState(1); // 0=First, 1=Second, 2=Third

  return (
    <section className="mafp">
      <div className="mafp__inner">
        {/* Tabs */}
        <div className="mafp__tabs" role="tablist" aria-label="Floor selector">
          {floors.map((f, i) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={active === i}
              className={`mafp__tab ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Foto e planit */}
        <div className="mafp__stage">
          <img
            className="mafp__img"
            src={floors[active].img}
            alt={floors[active].label}
          />
        </div>
      </div>
    </section>
  );
}
