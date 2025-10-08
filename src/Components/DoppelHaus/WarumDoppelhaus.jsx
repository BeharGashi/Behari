import React from "react";
import "./warum-dh.css";

/* ==== Ikona inline (SVG) ==== */
const IconEconomy = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <polyline points="3 7 9 13 13 9 21 17" />
    <circle cx="18.5" cy="6.5" r="2.2" />
  </svg>
);

const IconCommunity = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="8" cy="9" r="3" />
    <circle cx="16" cy="9" r="3" />
    <path d="M4.5 17c0-2.1 2.7-3.3 5.5-3.3s5.5 1.2 5.5 3.3" />
  </svg>
);

const IconSpace = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <rect x="8" y="8" width="8" height="8" rx="1" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3l7 4v5c0 5-3.6 8.2-7 9.4C8.6 20.2 5 17 5 12V7l7-4z" />
    <polyline points="8.8 12.8 11 15 16 10" />
  </svg>
);

export default function WarumDoppelhaus() {
  const cards = [
    {
      title: "Kosteneffizienz",
      text:
        "Ein Doppelhaus teilt sich eine gemeinsame Wand, was Bau- und Heizkosten reduziert. Dadurch ist es oft günstiger als ein freistehendes Einfamilienhaus.",
      icon: <IconEconomy />,
    },
    {
      title: "Gemeinschaft",
      text:
        "Ein Doppelhaus bietet die Möglichkeit, nahe bei Familie oder Freunden zu wohnen, während jeder Haushalt trotzdem seinen eigenen separaten Bereich hat.",
      icon: <IconCommunity />,
    },
    {
      title: "Platzersparnis",
      text:
        "Durch die gemeinsame Wand wird weniger Grundstücksfläche benötigt, was besonders in städtischen Gebieten mit begrenztem Platz von Vorteil ist.",
      icon: <IconSpace />,
    },
    {
      title: "Sicherheit",
      text:
        "Die Nähe zu den Nachbarn kann ein Gefühl von Sicherheit schaffen, da man sich gegenseitig im Blick hat und im Notfall schneller Hilfe leisten kann.",
      icon: <IconShield />,
    },
  ];

  return (
    <section className="why-dh" aria-labelledby="why-dh-title">
      <div className="why-dh__container">
        <h2 id="why-dh-title" className="why-dh__title">
          Warum ein Doppelhaus ?
        </h2>

        <div className="why-dh__grid" role="list">
          {cards.map((c) => (
            <article className="why-dh__card" key={c.title} role="listitem" tabIndex={0}>
              <span className="why-dh__icon" aria-hidden="true">
                {c.icon}
              </span>
              <h3 className="why-dh__card-title">{c.title}</h3>
              <p className="why-dh__card-text">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
