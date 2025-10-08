import React from "react";
import "./Tueren.css";
import Banner from "./TuerenHero";

/* Kontrollo emrat / rrugët sipas projektit tënd */
import Eingangstuer from "./Eingangstüren.webp";
import Sicherheit from "./Sicherheit.webp";
import InnentuerenHero from "./Eingangstürenn.webp"; // nëse s’ke umlaut/“nn”, përshtate emrin
import White from "./White.webp";
import Pure from "./Pure.webp";
import Elegant from "./Elegant.webp";
import Natural from "./Natural.webp";
import Classic from "./Classic.webp"; // nëse skedari ka emër ndryshe, ndreqe këtu

export default function Tueren() {
  const models = [
    {
      img: White,
      alt: "White Gold Innentür",
      name: "White Gold",
      bullets: [
        "Hochwertige Materialien für Langlebigkeit & Stabilität",
        "Elegantes Weiß mit goldenen Details",
        "Optimale Schalldämmung",
        "Vielseitig kombinierbar, modern & klassisch",
      ],
      tag: "Luxus",
    },
    {
      img: Pure,
      alt: "Pure Wood Innentür",
      name: "Pure Wood",
      bullets: [
        "Massive Holzqualität & Langlebigkeit",
        "Natürliche Optik, warmes Wohngefühl",
        "Sehr gute Schalldämmung",
        "Zeitlos – passt in viele Interieurs",
      ],
      tag: "Natur",
    },
    {
      img: Elegant,
      alt: "Elegant Innentür",
      name: "Elegant",
      bullets: [
        "Schlichte, klare Linien – zeitlos",
        "Hochwertige Verarbeitung",
        "Exzellente Schalldämmung",
        "Ideal für minimalistische & moderne Räume",
      ],
      tag: "Modern",
    },
    {
      img: Natural,
      alt: "Natural Wood Innentür",
      name: "Natural Wood",
      bullets: [
        "Echtholz-Optik, authentische Maserung",
        "Robust & langlebig",
        "Sehr gute Schalldämmung",
        "Perfekt für rustikal & modern",
      ],
      tag: "Holz",
    },
    {
      img: Classic,
      alt: "Classic Door Doppeltür",
      name: "Classic Door",
      bullets: [
        "Zweiflügelig – großzügige Raumwirkung",
        "Verglaste Elemente mit Sprossen",
        "Hochwertige Materialien",
        "Ideal für Wohn-/Essbereich, verbindet Räume",
      ],
      tag: "Klassik",
    },
  ];

  return (
    <>
      <Banner />
      <section className="tueren">
        {/* ===== Eingangstüren – Intro ===== */}
        <div className="t-section t-intro">
          <div className="t-grid">
            <article className="t-content">
              <span className="t-eyebrow">Eingangstüren</span>
              <h2 className="t-title">
                Was dir lieb und teuer ist,<br /> verdient den besten Schutz.
              </h2>
              <p className="t-lead">
                Mit Hauseingangstüren von einem österreichischen Hersteller bieten
                wir dir ein hohes Maß an Sicherheit – gepaart mit bestechendem
                Design.
              </p>

              <ul className="t-badges" role="list">
                <li className="t-badge">Made in Austria</li>
                <li className="t-badge">Sicherheit</li>
                <li className="t-badge">Design</li>
              </ul>
            </article>

            {/* Hero image – pa crop, pa kornizë të trashë */}
            <figure className="t-media t-media--hero">
              <img
                src={Eingangstuer}
                alt="Moderne Hauseingangstür"
                loading="lazy"
              />
            </figure>
          </div>
        </div>

        {/* ===== Sicherheit & Design ===== */}
        <div className="t-section t-sicherheit">
          <div className="t-grid t-grid--alt">
            <figure className="t-media t-media--frame">
              <img
                src={Sicherheit}
                alt="Sichere Eingangstür – Detail"
                loading="lazy"
              />
            </figure>

            <article className="t-content">
              <span className="t-eyebrow">Sicherheit, Design & Qualität</span>
              <h3 className="t-subtitle">Mehr als nur ein Zugang</h3>
              <p>
                Eingangstüren sind ein Statement für Stil und Sicherheit. Mit
                einzigartigen Designs und hochwertigen Materialien bieten sie
                maximalen Schutz und eine elegante Optik für jedes Zuhause.
              </p>
              <ul className="t-list" role="list">
                <li>Höchste Sicherheit dank moderner Technologie</li>
                <li>Optimale Wärme- und Schalldämmung</li>
                <li>Individuelles Design für jeden Stil</li>
                <li>Premium-Materialien für langfristige Haltbarkeit</li>
              </ul>
              <p className="t-note">
                Erleben Sie die perfekte Verbindung von Ästhetik und
                Funktionalität – wählen Sie eine Eingangstür, die Qualität und
                Eleganz widerspiegelt!
              </p>
            </article>
          </div>
        </div>

        {/* ===== Innentüren – Story ===== */}
        <div className="t-section t-innen">
          <div className="t-grid">
            <article className="t-content">
              <span className="t-eyebrow">Innentüren</span>
              <h3 className="t-subtitle">Mehr als nur ein Eingang</h3>
              <p>
                Innentüren präsojnë stilin tuaj të jetesës – lidhin hapësirat,
                krijojnë atmosferë dhe i japin shtëpisë karakter. Modelet tona
                kombinojnë dizajn modern, materiale të qëndrueshme dhe
                funksionalitet. Ato ofrojnë privatësi, përmirësojnë akustikën
                dhe kontribuojnë në izolim termik.
              </p>
              <p className="t-note">
                Minimalist, klasik apo ekstravagant – zbuloni përzgjedhjen dhe
                gjeni modelin ideal për shtëpinë tuaj.
              </p>
            </article>

            <figure className="t-media">
              <img
                src={InnentuerenHero}
                alt="Stil i brendshëm me Innentüren"
                loading="lazy"
              />
            </figure>
          </div>
        </div>

        {/* ===== Modelet – Karta luksoze ===== */}
        <div className="t-section t-models">
          <header className="t-head">
            <h3 className="t-subtitle t-subtitle--center">Unsere Innentüren</h3>
            <p className="t-lead t-lead--center">
              Eleganz, materiale premium dhe zë i ulët – modele të kuruara që
              kombinojnë estetikë dhe funksion.
            </p>
          </header>

          <div className="t-cards">
            {models.map((m, i) => (
              <article className="doorcard" key={i}>
                <div className="doorcard__media">
                  <img src={m.img} alt={m.alt} loading="lazy" />
                  <span className="doorcard__tag">{m.tag}</span>
                </div>

                <div className="doorcard__body">
                  <h4 className="doorcard__title">{m.name}</h4>
                  <ul className="doorcard__list" role="list">
                    {m.bullets.map((b, idx) => (
                      <li key={idx} className="doorcard__item">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
