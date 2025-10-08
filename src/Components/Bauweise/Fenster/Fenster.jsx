import React from "react";
import "./Fenster.css";
import Banner from './FensterHero'

/* Kontrollo emrat/rrugët sipas projektit tënd */
import HeroFenster from "./Fenser.webp";               // nëse është "Fenster.webp", ndrysho emrin
import CardKunstoff from "./Kunststofffensterr.webp";  // nëse e ke pa 'rr', ndrysho path-in
import CardHolz from "./Holzfenster.webp";
import CardHolzAlu from "./Holzalufenster.webp";       // nëse është "Holzalu.webp", ndrysho path-in
import MechKunststoff from "./Kunststofffenster.webp";
import Rollos from "./Rollos.webp";

export default function Fenster() {
  const cards = [
    {
      eyebrow: "Kunststofffenster",
      title: "Die inneren Werte zählen",
      text:
        "Das Kunststoff-Fenster ist wegen seiner variantenreichen Ausführung, soliden Verarbeitung und Robustheit höchst begehrt – mit hervorragenden Dämmwerten.",
      stats: [
        { label: "U-Wert", value: "0,83 W/m²K" },
        { label: "Bautiefe", value: "82 mm" },
        { label: "Dichtungsebenen", value: "3" },
      ],
      img: CardKunstoff,
      alt: "Kunststofffenster",
      tag: "Effizient",
    },
    {
      eyebrow: "Holzfenster",
      title: "Atmosphäre kommt von Atmen",
      text:
        "Holzfenster schaffen ein besonderes Ambiente und sind ein Bekenntnis zur Natur – hocheffizient dank 3-fach-Verglasung und starken Dämmwerten.",
      stats: [
        { label: "U-Wert", value: "0,87 W/m²K" },
        { label: "Bautiefe", value: "80 mm" },
        { label: "Dichtungsebenen", value: "3" },
      ],
      img: CardHolz,
      alt: "Holzfenster",
      tag: "Natürlich",
    },
    {
      eyebrow: "Holz-Alu-Fenster",
      title: "Nachhaltiges Bauen im Trend",
      text:
        "Holz-Alufenster bieten flexible Farbgestaltung, exzellente Schalldämmung und 3-fache Wärmeschutzverglasung.",
      stats: [
        { label: "U-Wert", value: "–" }, // s’ka vlerë të dhënë – e lëmë bosh
        { label: "Bautiefe", value: "87 mm" },
        { label: "Dichtungsebenen", value: "3" },
      ],
      img: CardHolzAlu,
      alt: "Holz-Alu-Fenster",
      tag: "Hybrid",
    },
  ];

  return (
    <>
    <Banner/>
    <section className="fenster">
      {/* ===== Hero ===== */}
      <div className="fn-section fn-hero">
        <div className="fn-hero__grid">
          <article className="fn-hero__content">
            <span className="fn-eyebrow">Die perfekte Fenster</span>
            <h1 className="fn-title">
              Komfort, Design <span>und Effizienz</span>
            </h1>
            <p className="fn-intro">
              Fenster sind mehr als nur eine Lichtquelle – sie sind ein
              Schlüsselelement für Komfort, Design und Energieeffizienz. Unsere
              hochwertigen Fenster vereinen erstklassige Materialien, zeitlose
              Eleganz und maximale Stabilität.
            </p>

            <ul className="fn-list" role="list">
              <li>Höchste Qualität & Sicherheit</li>
              <li>Elegantes Design – harmonische Atmosphäre</li>
              <li>Optimale Wärmedämmung zur Energieeinsparung</li>
              <li>Robuste Materialien – langlebig & wetterfest</li>
            </ul>

            <p className="fn-note">
              Klassisch oder modern – die perfekte Wahl für stilvolle,
              nachhaltige und funktionale Wohnlösungen.
            </p>
          </article>

          <figure className="fn-hero__media">
            <img
              src={HeroFenster}
              alt="Modernes Fenster mit viel Licht – Ästhetik und Effizienz"
              loading="lazy"
            />
            <span className="fn-hero__ribbon">Premium</span>
          </figure>
        </div>
      </div>

      {/* ===== Karten ===== */}
      <div className="fn-section fn-cards">
        <div className="fn-cards__grid">
          {cards.map((c, i) => (
            <article className="fcard" key={i}>
              <div className="fcard__media">
                <img src={c.img} alt={c.alt} loading="lazy" />
                <span className="fcard__tag">{c.tag}</span>
              </div>
              <div className="fcard__body">
                <span className="fcard__eyebrow">{c.eyebrow}</span>
                <h3 className="fcard__title">{c.title}</h3>
                <p className="fcard__text">{c.text}</p>

                <div className="fcard__stats" role="group" aria-label="Technische Daten">
                  {c.stats.map((s, idx) => (
                    <div className="fstat" key={idx}>
                      <div className="fstat__value">{s.value}</div>
                      <div className="fstat__label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ===== Mechanismus / GU-Gruppe ===== */}
      <div className="fn-section fn-mech">
        <div className="fn-split fn-split--alt">
          <figure className="fn-split__media fn-media--frame">
            <img
              src={MechKunststoff}
              alt="Kunststofffenster – Beschlag- und Schließtechnik"
              loading="lazy"
            />
          </figure>

          <article className="fn-split__content">
            <span className="fn-eyebrow">Kunststofffenster</span>
            <h3 className="fn-subtitle">Mechanismen, die Jahrzehnte halten</h3>
            <p>
              Da der Mechanismus der empfindlichste Teil für die Funktionalität
              und Langlebigkeit ist, setzen wir auf die deutsche
              Gretsch-Unitas-Gruppe. Marken wie <strong>BKS</strong> (Schließtechnik),
              <strong> FERCO</strong> (Beschlagtechnik) und <strong>GU Automatic</strong> (automatische
              Türsysteme) stehen seit über 100 Jahren für innovative,
              zuverlässige Lösungen.
            </p>
          </article>
        </div>
      </div>

      {/* ===== Rollos ROLA PLUS ===== */}
      <div className="fn-section fn-rollos">
        <div className="fn-split">
          <article className="fn-split__content">
            <span className="fn-eyebrow">Rollos ROLA PLUS</span>
            <h3 className="fn-subtitle">Licht steuern. Komfort erhöhen.</h3>
            <p>
              Rollos regulieren die Lichtmenge, schützen vor Kälte, Hitze,
              Lärm, Wind, Regen und Sonne – manuell oder per Fernbedienung.
            </p>

            <ul className="fn-adv" role="list">
              <li>Kompaktes Design – sicherer Wasserabfluss</li>
              <li>Viele Farben – passend zu jeder Fassade</li>
              <li>Einfache Montage & Wartung</li>
              <li>Insektenschutz optional integrierbar</li>
              <li>Energieeffizient – EnEV-konform</li>
              <li>Verschiedene Kastengrößen (G1–G4)</li>
            </ul>
          </article>

          <figure className="fn-split__media">
            <img src={Rollos} alt="Rollo-System ROLA PLUS am Fenster" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
    </>
  );
}
