import React from "react";
import "./fenster-karten.css";

// Zëvendëso këto me rrugët e tua reale të imazheve
import imgKunststoff from "./Kunstof.webp";
import imgHolz from "./Holz.webp";
import imgHolzAlu from "./HolzAlu.webp";

export default function FensterKarten() {
  const items = [
    {
      img: imgKunststoff,
      alt: "Kunststofffenster Profil",
      title: "Kunststofffenster",
      subtitle: "Die inneren Werte zählen",
      desc:
        "Das Kunststoff-Fenster ist wegen seiner variantenreichen Ausführung, seiner soliden Verarbeitung und Robustheit sehr begehrt – und glänzt mit hervorragenden Dämmwerten.",
      specs: [
        { value: "0,83 W/m²K", label: "U-Wert" },
        { value: "82 mm", label: "Bautiefe" },
        { value: "3", label: "Dichtungsebenen" },
      ],
    },
    {
      img: imgHolz,
      alt: "Holzfenster Profil",
      title: "Holzfenster",
      subtitle: "Atmosphäre kommt von Atmen",
      desc:
        "Holzfenster schaffen ein besonderes Ambiente – ein Bekenntnis zur Natur. Hoch effizient durch 3-fach-Verglasung mit sehr guten Dämmwerten. \n ",
      specs: [
        { value: "0,87 W/m²K", label: "U-Wert" },
        { value: "80 mm", label: "Bautiefe" },
        { value: "3", label: "Dichtungsebenen" },
      ],
    },
    {
      img: imgHolzAlu,
      alt: "Holz-Alu-Fenster Profil",
      title: "Holz-Alu-Fenster",
      subtitle: "Nachhaltiges Bauen im Trend",
      desc:
        "Holz-Alufenster bieten flexible Farbgestaltung, exzellente Schall­dämmung und 3-fache Wärmeschutzverglasung – innen warm, außen extrem langlebig.",
      specs: [
        { value: "0,80 W/m²K", label: "U-Wert" },
        { value: "87 mm", label: "Bautiefe" },
        { value: "3", label: "Dichtungsebenen" },
      ],
    },
  ];

  return (
    <section className="fen" aria-labelledby="fen-title">
      <div className="fen__container">
        <h2 id="fen-title" className="fen__title">Fenster­varianten</h2>

        <div className="fen__grid">
          {items.map((it) => (
            <article className="fen__card" key={it.title} tabIndex={0}>
              <div className="fen__media">
                <img src={it.img} alt={it.alt} loading="lazy" />
              </div>

              <h3 className="fen__card-title">{it.title}</h3>
              <p className="fen__card-sub">{it.subtitle}</p>

              <p className="fen__card-desc">{it.desc}</p>

              <hr className="fen__divider" />

              {it.specs.map((s, i) => (
                <div className="fen__spec" key={i}>
                  <div className="fen__spec-val">{s.value}</div>
                  <div className="fen__spec-label">{s.label}</div>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
