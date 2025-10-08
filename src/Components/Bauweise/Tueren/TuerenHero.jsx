import React from 'react';
import './TuerenHero.css';
import houseImage from './Materiale.webp';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Banner = () => {
  return (
    <div className="tur-wrapper">
      <section
        className="tur-banner"
        style={{ backgroundImage: `url(${houseImage})` }}
      >
        <div className="tur-overlay">
          <div className="tur-content">
            <h1 className="tur-title">
              Türen <br /> Design, Qualität & Sicherheit
            </h1>
            <p className="tur-short">Hochwertige Türen für Stil, Schutz und Komfort in Ihrem Zuhause.</p>
          </div>
        </div>
      </section>

      <div className="tur-infobox">
        <div className="tur-info-item">
          <span className="tur-icon"><MdLocationOn /></span>
          <span>Österreich, Deutschland, Schweiz</span>
        </div>
        <div className="tur-info-item">
          <span className="tur-icon"><MdEmail /></span>
          <a href="mailto:info@natural-wohnbau.com">info@natural-wohnbau.com</a>
        </div>
        <div className="tur-info-item">
          <span className="tur-icon"><MdPhone /></span>
          <a href="tel:+38348188572">+383 48 188 572</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
