import React from 'react';
import '../Home/homebanner.css';
import houseImage from '../../images/beutiful-house.webp';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Banner = () => {
  return (
    <div className="beh-wrapper">
      <section
        className="beh-banner"
        style={{ backgroundImage: `url(${houseImage})` }}
      >
        <div className="beh-overlay">
          <div className="beh-content">
            <p className="beh-prefix">Holzhäuser, neu gedacht</p>
            <h1 className="beh-title">
              Über Uns <br /> Qualität, Vertrauen & Innovation
            </h1>
            <p className="beh-short">Wir stehen für nachhaltiges Bauen, höchste Qualität
und individuelle Lösungen, um Ihre Wohnträume zu verwirklichen.</p>
          </div>
        </div>
      </section>

      <div className="beh-infobox">
        <div className="beh-info-item">
          <span className="beh-icon"><MdLocationOn /></span>
          <span>Österreich, Deutschland, Schweiz</span>
        </div>
        <div className="beh-info-item">
          <span className="beh-icon"><MdEmail /></span>
          <a href="mailto:info@natural-wohnbau.com">info@natural-wohnbau.com</a>
        </div>
        <div className="beh-info-item">
          <span className="beh-icon"><MdPhone /></span>
          <a href="tel:+38348188572">+383 48 188 572</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
