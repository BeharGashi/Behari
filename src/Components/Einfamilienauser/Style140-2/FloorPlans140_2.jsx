import React, { useState } from "react";
import "./FloorPlans140_2.css";

// (Opsionale) shmang hapësirat në emrat e skedarëve
import Plan1 from './Plan_1.jpg';
import Plan2 from './Plan_2.jpg';

export default function FloorPlans140_2() {
  const floors = [
    { key: "first",  label: "Erdgeschoss",  img: Plan1 },
    { key: "second", label: "Erste Etage",  img: Plan2 },
  ];

  const [active, setActive] = useState(1); // 0=First, 1=Second

  return (
    <section className="fp142">
      <div className="fp142__inner">
        {/* Tabs */}
        <div className="fp142__tabs" role="tablist" aria-label="Floor selector">
          {floors.map((f, i) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={active === i}
              className={`fp142__tab ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Foto e planit */}
        <div className="fp142__stage">
          <img
            className="fp142__img"
            src={floors[active].img}
            alt={floors[active].label}
          />
        </div>
      </div>
    </section>
  );
}
