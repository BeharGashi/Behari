import React from 'react';
import './WandaufbauHero.css';
import houseImage from '../Materiale/Materiale.webp';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Banner = () => {
  return (
    <div className="wan-wrapper">
      <section
        className="wan-banner"
        style={{ backgroundImage: `url(${houseImage})` }}
      >
        <div className="wan-overlay">
          <div className="wan-content">
            <h1 className="wan-title">
              Wandaufbau
            </h1>
            <p className="wan-short">Hochwertige Materialien für optimale
Dämmung, Langlebigkeit und Wohnkomfort.</p>
          </div>
        </div>
      </section>

      <div className="wan-infobox">
        <div className="wan-info-item">
          <span className="wan-icon"><MdLocationOn /></span>
          <span>Österreich, Deutschland, Schweiz</span>
        </div>
        <div className="wan-info-item">
          <span className="wan-icon"><MdEmail /></span>
          <a href="mailto:info@natural-wohnbau.com">info@natural-wohnbau.com</a>
        </div>
        <div className="wan-info-item">
          <span className="wan-icon"><MdPhone /></span>
          <a href="tel:+38348188572">+383 48 188 572</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
