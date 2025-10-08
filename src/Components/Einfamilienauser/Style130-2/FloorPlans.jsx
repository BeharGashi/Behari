import React, { useState } from "react";
import "./FloorPlans.css";

// (Opsionale) shmang hapësirat në emrat e skedarëve
import Plan1 from './Plan_1.jpg';
import Plan2 from './Plan_2.jpg';

export default function FloorPlans() {
  const floors = [
    { key: "first",  label: "Erdgeschoss",  img: Plan1 },
    { key: "second", label: "Erste Etage",  img: Plan2 },
  ];

  const [active, setActive] = useState(1); // 0=First, 1=Second

  return (
    <section className="fp91z">
      <div className="fp91z__inner">
        {/* Tabs */}
        <div className="fp91z__tabs" role="tablist" aria-label="Floor selector">
          {floors.map((f, i) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={active === i}
              className={`fp91z__tab ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Foto e planit */}
        <div className="fp91z__stage">
          <img
            className="fp91z__img"
            src={floors[active].img}
            alt={floors[active].label}
          />
        </div>
      </div>
    </section>
  );
}
