import React from 'react';
import '../Reusable/default-banner.css'
import houseImage from '../../images/modernprefabmodulh.webp';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';


const datenschutzbanner = () => {
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
            <h1 className="nb-home-title">
              Datenschutz
            </h1>
          </div>
        </div>
      </section>

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

export default datenschutzbanner;
