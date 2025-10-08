import React, { useEffect, useRef } from "react";
import { href, Link } from "react-router-dom";   // ✅ përdor React Router
import "./HouseModelsSection.css";

import Hut1 from "./hutspace1.webp";
import Marigona1 from "./Modular7.jpg";
import Mami1 from "./Modul1.jpg";

const DEFAULT_MODELS = [
  { title: "HUT SPACE", img: Hut1, alt: "HUT SPACE – Modulhaus auf Stelzen", href: "/hutspace" },
  { title: "MARIGONA",  img: Marigona1, alt: "Marigona – modernes Modulhaus", href: "/marigona" },
  { title: "MAMI",      img: Mami1, alt: "Mami – kompaktes, gemütliches Modulhaus", href: "/mama" },
];

export default function HouseModelsSection({
  eyebrow = "Modelle",
  heading = "Unsere Modulmodelle",
  models = DEFAULT_MODELS,
}) {
  const sectionRef = useRef(null);

  // Reveal on scroll
  useEffect(() => {
    const root = sectionRef.current;
    const items = root?.querySelectorAll(".hm-reveal");
    if (!items?.length) return;

    const supported = typeof window !== "undefined" && "IntersectionObserver" in window;
    if (!supported) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="models-section" aria-labelledby="models-heading">
      <div className="models-glow" aria-hidden="true" />
      <div className="models-container">
        <div className="models-head hm-reveal" style={{ "--d": "0ms" }}>
          <span className="models-eyebrow">{eyebrow}</span>
          <h2 id="models-heading" className="models-title">{heading}</h2>
        </div>

        <div className="models-grid">
          {models.map((m, i) => {
            const CardInner = (
              <figure className="model-media">
                <img className="model-img" src={m.img} alt={m.alt || m.title} loading="lazy" />
                <div className="model-overlay" />
                <figcaption className="model-caption">
                  <h3 className="model-name">{m.title}</h3>
                </figcaption>
              </figure>
            );

            return (
              <article
                key={`${m.title}-${i}`}
                className="model-card hm-reveal"
                style={{ "--d": `${i * 120}ms` }}
              >
                {m.href ? (
                  <Link to={m.href} className="model-card-link" aria-label={`${m.title} – mehr erfahren`}>
                    {CardInner}
                  </Link>
                ) : (
                  <div className="model-card-link" aria-label={m.title}>
                    {CardInner}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
