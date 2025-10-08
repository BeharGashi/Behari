import React, { Suspense } from "react";
import "./homebanner.css";
import houseImage from "../../images/beutiful-house.webp";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

// Lazy-load i Loader që të mos ndikojë në LCP
const Loader = React.lazy(() => import("./Loader"));

const Banner = () => {
  return (
    <div className="beh-wrapper">
      <section className="beh-banner" aria-labelledby="beh-title">
        {/* Hero image si element, me prioritet të lartë */}
        <img
          src={houseImage}
          alt="Natürlich wohnen in modularen Holzhäusern"
          className="beh-banner__img"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />

        <div className="beh-overlay">
          <div className="beh-content">
            <p className="beh-prefix">Holzhäuser, neu gedacht</p>
            <h1 className="beh-title" id="beh-title">
              Nachhaltiges Wohnen in <br /> modularen Holzhäusern
            </h1>
            <p className="beh-short">Natürlich Wohnen &amp; Gesund Leben</p>
          </div>
        </div>
      </section>

      {/* Loader dekorativ bëhet lazy që të mos bllokojë pikturimin e parë */}
      <Suspense fallback={null}>
        <Loader />
      </Suspense>

      <div className="beh-infobox" aria-label="Kontaktinformationen">
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
