import React, { useEffect, useRef } from "react";
import elektroImg from "./Elektroinstallation.webp";

export default function Elektroinstallation() {
  const figRef = useRef(null);

  useEffect(() => {
    const el = figRef.current;
    if (!el) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) { el.classList.add("in-view"); return; }

    const io = new IntersectionObserver((ents) => {
      ents.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
      });
    }, { threshold: 0.18 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="elektroinstallation" className="ht-section container">
      {/* dy-kolonësh: majtas tekst, djathtas foto */}
      <div
        className="ei-split"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1.1fr) minmax(0,0.9fr)", // Fallback inline
          alignItems: "center",
          gap: "clamp(18px, 3vw, 36px)"
        }}
      >
        <div className="ei-col ei-col--text">
          <div className="wipe">
            <h2 className="title-grad wipe-target">Elektroinstallation</h2>
          </div>
          <p className="lead" style={{ marginTop: ".4rem" }}>
            Wir planen und realisieren elektrische Anlagen für Neu- und Bestandsgebäude –
            von der Energieverteilung über Beleuchtung bis hin zu Sicherheits- und Datentechnik.
            Sauber ausgeführt, normkonform dokumentiert und zukunftssicher vorbereitet.
          </p>
        </div>

        <div className="ei-col ei-col--media">
          <figure ref={figRef} className="gold-corner photo-wipe ei-figure" style={{ margin: 0 }}>
            <img
              src={elektroImg}
              alt="Sorgfältig installierte Elektroverteilung mit klarer Kabelführung"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
