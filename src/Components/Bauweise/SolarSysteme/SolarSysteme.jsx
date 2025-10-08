import React from "react";
import "./SolarSysteme.css";

/* Rregullo emrat/rrugët sipas projektit tënd */
import PV from "./Photovoltaikanlage.webp";
import Speicher from "./Energiespeicher.webp";
import Lade from "./Ladestation.webp";
import Hero from './SolarSystemeHero'

export default function SolarSysteme() {
  return (
    <>
    <Hero/>
    <section className="solar">
      {/* ===== HERO ===== */}
      <div className="so-section so-hero">
        <div className="so-hero__grid">
          <article className="so-hero__content">
            <span className="so-eyebrow">Ihr Traumhaus mit Solarenergie</span>
            <h1 className="so-title">
              Unabhängig, nachhaltig <span>und effizient</span>
            </h1>
            <p className="so-lead">
              Stellen Sie sich vor: ein modernes, energieeffizientes Zuhause – mit
              hochwertigem Solarsystem für unabhängige, nachhaltige und
              kostensparende Energie. Unsere vorgefertigten Häuser vereinen
              höchsten Wohnkomfort, modernes Design und eine intelligent
              integrierte Photovoltaik.
            </p>

            <ul className="so-chips" role="list">
              <li className="so-chip">100% erneuerbare Energie</li>
              <li className="so-chip">Autarkie & Sicherheit</li>
              <li className="so-chip">Umweltfreundlich wohnen</li>
              <li className="so-chip">Perfekt integriert (Haushalt/Heizung/E-Mobilität)</li>
            </ul>

            <p className="so-note">
              Zukunftssicher, effizient und nachhaltig – für maximale
              Unabhängigkeit und langfristige Einsparungen.
            </p>
          </article>

          <figure className="so-hero__media so-media so-media--hero">
            <img
              src={PV}
              alt="Photovoltaikanlage – modernes Dach mit Solarmodulen"
              loading="lazy"
            />
            <span className="so-ribbon">Solar+</span>
          </figure>
        </div>
      </div>

      {/* ===== PHOTOVOLTAIK ===== */}
      <div className="so-section">
        <div className="so-split">
          <figure className="so-media so-media--cut">
            <img src={PV} alt="Photovoltaikanlage auf dem Dach" loading="lazy" />
          </figure>

          <article className="so-content">
            <span className="so-eyebrow">Photovoltaikanlage</span>
            <h2 className="so-subtitle">Sonnenenergie smart genutzt</h2>
            <p>
              Mit einer Photovoltaikanlage erzeugen Sie umweltfreundlichen
              Strom und senken Ihre Energiekosten drastisch – unabhängig von
              steigenden Preisen und mit aktivem Beitrag zum Klimaschutz.
            </p>
            <ul className="so-list" role="list">
              <li>Eigenstrom für den täglichen Bedarf</li>
              <li>Langfristige Kostenersparnis</li>
              <li>Nachhaltig – CO₂-Reduktion</li>
              <li>Unabhängiger Betrieb, erweiterbar</li>
              <li>Kombinierbar mit Speicher & Ladestation</li>
            </ul>
          </article>
        </div>
      </div>

      {/* ===== ENERGIESPEICHER ===== */}
      <div className="so-section">
        <div className="so-split so-split--alt">
          <article className="so-content">
            <span className="so-eyebrow">Energiespeicher</span>
            <h2 className="so-subtitle">Mehr Eigenverbrauch. Mehr Freiheit.</h2>
            <p>
              Der Speicher nimmt Ihren Solarstrom auf und stellt ihn bedarfsgerecht
              bereit. Überschüsse erhitzen über einen Pufferspeicher Warmwasser und
              Fußbodenheizung; der Rest wird vergütet ins Netz eingespeist.
              Die sichere LiFePO<sub>4</sub>-Technologie sorgt für Langlebigkeit.
            </p>
            <ul className="so-list" role="list">
              <li>Sichere Batterietechnologie</li>
              <li>Intelligentes Energiemanagement & Online-Zugriff</li>
              <li>Nachträgliche Installation möglich</li>
              <li>Batterie + Netzbetrieb bei Lastspitzen</li>
              <li>Wetterprognose, Smart Metering & Lademanagement</li>
            </ul>
          </article>

          <figure className="so-media so-media--cut">
            <img src={Speicher} alt="Moderner Heimspeicher im Technikraum" loading="lazy" />
          </figure>
        </div>
      </div>

      {/* ===== LADESTATION ===== */}
      <div className="so-section">
        <div className="so-split">
          <figure className="so-media so-media--cut">
            <img src={Lade} alt="Wallbox – Ladestation für E-Auto" loading="lazy" />
          </figure>

          <article className="so-content">
            <span className="so-eyebrow">Ladestation</span>
            <h2 className="so-subtitle">E-Mobilität. Einfach zu Hause.</h2>
            <p>
              Laden Sie Ihr E-Auto sicher, effizient und bequem – mit eigenem
              Solarstrom. Sparen Sie Zeit und Geld, behalten Sie per App volle
              Kontrolle und bleiben Sie unabhängig von öffentlichen Ladesäulen.
            </p>
            <ul className="so-list" role="list">
              <li>Schnelles & sicheres Laden</li>
              <li>100% Solarstrom – perfekt kombinierbar</li>
              <li>Dauerhaft günstige Mobilität</li>
              <li>Smartes Laden per App</li>
              <li>Kompatibel mit allen gängigen E-Autos</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
    </>
  );
}
