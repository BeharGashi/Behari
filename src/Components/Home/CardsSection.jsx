import React from "react";
import "./CardsSection.css";

const cardData = [
  { title: "Bungalows", image: "/images/Bungalows.webp" },
  { title: "Einfamilienhäuser", image: "/images/Einfamilienhause.webp" },
  { title: "Doppelhäuser", image: "/images/Dopplehause.webp" },
  { title: "Mehrfamilienhaus", image: "/images/Mehrfamilienhaus.webp" },
  { title: "Garagen & Carport", image: "/images/Garagen.webp" },
  { title: "Modulhäuser", image: "/images/Modulhause.webp" },
];

const CardsSection = () => {
  return (
    <section className="cards-section">
      <div className="cards-grid">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img 
              src={card.image} 
              alt={card.title}
              loading="lazy" // Add lazy loading
            />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;