import React, { useState } from "react";
import './FloorPlans140.css';
import Plan1 from './Plan1.jpg';

export default function FloorPlans() {
  const floors = [
    { key: "first", label: "Erdgeschoss", img: Plan1 },
  ];

  const [active, setActive] = useState(0); // fillo me indeksin 0

  const activeFloor = floors[active] ?? floors[0]; // fallback i sigurt
  if (!activeFloor) return null; // nëse s’ka fare të dhëna

  return (
    <section className="opt80">
      <div className="opt80__inner">
        {/* Shfaq tabat vetëm nëse ka >1 kat */}
        {floors.length > 1 && (
          <div className="opt80__tabs" role="tablist" aria-label="Floor selector">
            {floors.map((f, i) => (
              <button
                key={f.key}
                role="tab"
                aria-selected={active === i}
                className={`opt80__tab ${active === i ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        {/* Foto e planit */}
        <div className="opt80__stage">
          <img
            className="opt80__img"
            src={activeFloor.img}
            alt={activeFloor.label}
          />
        </div>
      </div>
    </section>
  );
}
