import React from 'react';
import './FensterHero.css';
import houseImage from './Fensterhero.webp';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Banner = () => {
  return (
    <div className="mat-wrapper">
      <section
        className="mat-banner"
        style={{ backgroundImage: `url(${houseImage})` }}
      >
        <div className="mat-overlay">
          <div className="mat-content">
            <h1 className="mat-title">
              Fenster <br />Licht, Energieeffizienz & Wohnkomfort
            </h1>
            <p className="mat-short">Moderne Fenster für maximale Helligkeit, Wärmedämmung und Stil.</p>
          </div>
        </div>
      </section>

      <div className="mat-infobox">
        <div className="mat-info-item">
          <span className="mat-icon"><MdLocationOn /></span>
          <span>Österreich, Deutschland, Schweiz</span>
        </div>
        <div className="mat-info-item">
          <span className="mat-icon"><MdEmail /></span>
          <a href="mailto:info@natural-wohnbau.com">info@natural-wohnbau.com</a>
        </div>
        <div className="mat-info-item">
          <span className="mat-icon"><MdPhone /></span>
          <a href="tel:+38348188572">+383 48 188 572</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
