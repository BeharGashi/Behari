import React from 'react';
import './homebanner.css';
import houseImage from './images/beutiful-house.webp';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import Loader from '../Home/Loader'

const Banner = () => {
  return (
    <div className="nb-banner-wrapper">
      <section
        className="nb-home-banner"
        style={{
          backgroundImage: `url(${houseImage})`
        }}
      >
        <div className="nb-home-banner-overlay">
          <div className="nb-home-banner-content">
            <p className="nb-home-prefix">Holzhäuser, neu gedacht</p>
            <h1 className="nb-home-title">
              Nachhaltiges Wohnen in <br /> modularen Holzhäusern
            </h1>
            <p className="nb-home-short-text">Natürlich Wohnen & Gesund Leben</p>
          </div>
        </div>
      </section>
      <Loader />

      <div className="nb-banner-info-box">
        <div className="nb-info-item">
          <span className="nb-icon"><MdLocationOn /></span>
          <span>Österreich, Deutschland, Schweiz</span>
        </div>
        <div className="nb-info-item">
          <span className="nb-icon"><MdEmail /></span>
          <a href="mailto:info@natural-wohnbau.com">info@natural-wohnbau.com</a>
        </div>
        <div className="nb-info-item">
          <span className="nb-icon"><MdPhone /></span>
          <a href="tel:+38348188572">+383 48 188 572</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
