import React from "react";
import Slider from "react-slick";

// Ikonat/komponentët e ndryshëm
import { CiSettings } from "react-icons/ci";
import { FaLeaf } from "react-icons/fa6";       // shembull ikonë tjetër
import { SlEnergy } from "react-icons/sl";
import { MdOutlineAccountBalance } from "react-icons/md";
import { FcDataProtection } from "react-icons/fc";
import { GiSoundWaves } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { BsMoisture } from "react-icons/bs";
import { LuConstruction } from "react-icons/lu";
import { MdOutlineCo2 } from "react-icons/md";
// Kartë e ripërdorshme që pranon një Icon component
function FeatureCard({ title, items, Icon, iconColor = "#F5F5F5" }) {
  return (
    <div className="standard-card">
      {/* Icon mund të jetë çdo komponent React */}
      {Icon && <Icon className="standard-icon" style={{ color: iconColor }} />}
      <h3 className="standard-title">{title}</h3>
      <ul className="standard-list">
        {items.map((item, i) => (
          <li key={i} className="standard-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function StandardsSlider() {
  // Konfigurimi i secilës kartë me ikonë të ndryshme
  const cards = [
    { title: "Stabilität", Icon: MdOutlineAccountBalance, items: ["EN 1995-1-1","DIN 1052","Zertifiziertes Holz","Hochwertige Verbindungselemente"], iconColor:"#CA9263" },
    { title: "Energieeffizienz", Icon: SlEnergy, items: ["KfW 40 / KfW 55","DIN 4108-2","(λ) ≤ 0,035 W/(mK)","Dreifachverglasung"] },
    { title: "Brandschutz", Icon: FcDataProtection, items: ["DIN 4102-2","Klasse B1","EN 13501-1","REI 30 / REI 60"] },
    { title: "Schalldämmung", Icon: GiSoundWaves, items: ["DIN 4109","≥ 45 dB","Holzfaserdämmung","Schwimmender Estrich"] },
    { title: "Feuchtigkeitsschutz", Icon: BsMoisture, items: ["Dampfsperre & Dampfbremse","DIN 1052","Hygrothermische Berechnung","Wohnraumlüftung"] },
    { title: "Konstruktion & Montage", Icon: LuConstruction, items: ["ISO 9001","EN 14732","Zertifiziertes Holz","Präzise Verbindungstechnik"] },
    { title: "Ökologische & Nachhaltige Standards", Icon: MdOutlineCo2, items: ["FSC/PEFC-zertifiziertes Holz","Baubiologisch unbedenkliche Materialien","CO₂-neutrale Bauweise","Recyclingfähigkeit der Materialien"] },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    cssEase: "ease-in-out",
    swipeToSlide: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="standards-section">
      <div className="standards-container">
        <Slider {...settings}>
          {cards.map((c, idx) => (
            <div key={idx}>
              <FeatureCard
                title={c.title}
                items={c.items}
                Icon={c.Icon}
                iconColor={c.iconColor}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
