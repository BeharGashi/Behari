import React from "react";
import "./Partners.css";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* --- Importet e logos (rregullo path/ekstensionet sipas dosjeve të tua) --- */
import img from '../../images/Austrotherm.png';
import img1 from '../../images/Knauf.png';
import img2 from '../../images/Prebena.png';
import img3 from '../../images/Rubner.png';
import img4 from '../../images/SaintGobain.png';
import img5 from '../../images/Sopro.png';
import img6 from '../../images/Steico.png';
import img7 from '../../images/Wuerth.png';
import img8 from '../../images/farmacell.png';

/* Tabela e partnerëve – siç e kërkove */
const partnerLogos = [
  { src: img,  alt: "Austrotherm",       link: "https://www.austrotherm.at/" },
  { src: img1, alt: "Knauf",             link: "https://knauf.com/de-DE/knauf-gips" },
  { src: img2, alt: "Prebena",           link: "https://prebena.de/" },
  { src: img3, alt: "Rubner",            link: "https://www.rubner.com/de/" },
  { src: img4, alt: "Saint Gobain",      link: "https://www.saint-gobain.com/en" },
  { src: img5, alt: "Sopro",             link: "https://www.sopro.com/de/" },
  { src: img6, alt: "Steico",            link: "https://www.steico.com/de/" },
  { src: img7, alt: "Würth",             link: "https://www.wuerth.de/" },
  { src: img8, alt: "Farmacell",         link: "https://www.fermacell.de/de" },
];

export default function Partners() {
  return (
    <section className="nwh-partners">
      <div className="nwh-container">
        <h2>Wir sind Partner von</h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0:    { slidesPerView: 2 },
            640:  { slidesPerView: 3 },
            768:  { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="nwh-partner-swiper"
          aria-label="Partner Logos Carousel"
        >
          {partnerLogos.map((logo, index) => (
            <SwiperSlide key={index} className="nwh-partner-slide">
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.alt}
              >
                <img src={logo.src} alt={logo.alt} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
