import React from 'react';
import './SolarSystemeHero.css';
import houseImage from './SolarHero.webp';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Banner = () => {
  return (
    <div className="sol-wrapper">
      <section
        className="sol-banner"
        style={{ backgroundImage: `url(${houseImage})` }}
      >
        <div className="sol-overlay">
          <div className="sol-content">
            <h1 className="sol-title">
              Erneuerbare Energie <br /> Nachhaltige Lösungen für die Zukunft
            </h1>
            <p className="sol-short">Nutzen Sie die Kraft der Natur mit innovativen Technologien für Solar.
Effizient, umweltfreundlich und unabhängig – für eine grünere Zukunft.</p>
          </div>
        </div>
      </section>

      <div className="sol-infobox">
        <div className="sol-info-item">
          <span className="sol-icon"><MdLocationOn /></span>
          <span>Österreich, Deutschland, Schweiz</span>
        </div>
        <div className="sol-info-item">
          <span className="sol-icon"><MdEmail /></span>
          <a href="mailto:info@nasolal-wohnbau.com">info@nasolal-wohnbau.com</a>
        </div>
        <div className="sol-info-item">
          <span className="sol-icon"><MdPhone /></span>
          <a href="tel:+38348188572">+383 48 188 572</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
