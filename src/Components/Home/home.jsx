import React, { useState } from 'react';
import './home.css';
import houseImage from '../../images/Edited.webp';
import Bungalows from '../../images/Bungalows.webp';
import Einfamilienhauser from '../../images/Einfamilienhause.webp';
import Dopplehause from '../../images/Dopplehause.webp';
import Mehrfamilienhaus from '../../images/Mehrfamilienhaus.webp';
import Garagen from '../../images/Garagen.webp';
import Modulhause from '../../images/Modulhause.webp';
import transparenzImg from '../../images/Transparenz.webp';
import bemusterungImg from '../../images/Bemusterung.webp';
import individuelleImg from '../../images/IndividuelleGestaltung.webp';
import kostenermittlungImg from '../../images/Kostenermittlung.webp';
import kompetenzImg from '../../images/Kompetenz.webp';
import beratungImg from '../../images/Beratung.webp';
import coupleImage from '../../images/couple.webp';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img from '../../images/Austrotherm.png';
import img1 from '../../images/Knauf.png';
import img2 from '../../images/Prebena.png';
import img3 from '../../images/Rubner.png';
import img4 from '../../images/SaintGobain.png';
import img5 from '../../images/Sopro.png';
import img6 from '../../images/Steico.png';
import img7 from '../../images/Wuerth.png';
import img8 from '../../images/farmacell.png';
import SchlusselfertigImage from '../../images/Schlusselfertig.webp';
import RohbauImage from '../../images/Rohbau.webp';
import InnenwandImage from '../../images/innenwand.jpg';
import AussenwandImage from '../../images/aussenwand.jpg';
import KompaktmodulImage from '../../images/kompaktmodul.jpg';
import DaemmdeckeImage from '../../images/daemmdecke.jpg';
import SichtdeckeImage from '../../images/sichtdecke.jpg';
import DaemmdeckeBegehbarImage from '../../images/daemmdecke-begehbar.jpg';
import AbbunddachstuhlImage from '../../images/abbunddachstuhl.jpg';
import FlachdachImage from '../../images/flachdach.jpg';
import SichtdachstuhlImage from '../../images/sichtdachstuhl.jpg';
import HouseRequestWizard from '../Reusable/formwizard'


const partnerLogos = [
  {
    src: img,
    alt: "Austrotherm",
    link: "https://www.austrotherm.at/",
  },
  {
    src: img1,
    alt: "Knauf",
    link: "https://knauf.com/de-DE/knauf-gips",
  },
  {
    src: img2,
    alt: "Prebena",
    link: "https://prebena.de/",
  },
  {
    src: img3,
    alt: "Rubner",
    link: "https://www.rubner.com/de/",
  },
  {
    src: img4,
    alt: "Saint Gobain",
    link: "https://www.saint-gobain.com/en",
  },
  {
    src: img5,
    alt: "Sopro",
    link: "https://www.sopro.com/de/",
  },
  {
    src: img6,
    alt: "Steico",
    link: "https://www.steico.com/de/",
  },
  {
    src: img7,
    alt: "Würth",
    link: "https://www.wuerth.de/",
  },
  {
    src: img8,
    alt: "Farmacell",
    link: "https://www.fermacell.de/de",
  },
];

const Home = () => {
  const [activeWandType, setActiveWandType] = useState('wand');
  
  const wandDescriptions = {
    wand: {
      title: "Wandaufbau Konstruktionen",
      description: "Unsere Wandaufbau-Lösungen bieten höchste Qualität und Flexibilität für Ihr Zuhause.",
      images: [
        { src: InnenwandImage, alt: "Innenwand Konstruktion" },
        { src: AussenwandImage, alt: "Außenwand Konstruktion" },
        { src: KompaktmodulImage, alt: "Kompaktmodul Wand" }
      ]
    },
    decke: {
      title: "Deckenaufbau Varianten",
      description: "Moderne Deckenkonstruktionen für optimalen Wohnkomfort und Energieeffizienz.",
      images: [
        { src: DaemmdeckeImage, alt: "Gedämmte Decke" },
        { src: SichtdeckeImage, alt: "Sichtdecke" },
        { src: DaemmdeckeBegehbarImage, alt: "Begehbare Dämmdecke" }
      ]
    },
    dach: {
      title: "Dachaufbau Systeme",
      description: "Hochwertige Dachkonstruktionen für jeden Gebäudetyp und jede Anforderung.",
      images: [
        { src: AbbunddachstuhlImage, alt: "Abbunddachstuhl" },
        { src: FlachdachImage, alt: "Flachdach Konstruktion" },
        { src: SichtdachstuhlImage, alt: "Sichtdachstuhl" }
      ]
    }
  };

  const handleWandClick = (type) => {
    setActiveWandType(type);
  };

  return (
    <>
<section className="nwh-hero">
  <div className="nwh-hero-container">
    <div className="nwh-hero-text">
      <h2>Warum ein <br />Holzrahmenhaus wählen?</h2>

      <h4>Kurze Bauzeit & Kosteneffizienz</h4>
      <p>
        Einer der größten Vorteile eines Holzrahmenhauses ist die schnelle Bauzeit.
        Die gesamte Konstruktion benötigt deutlich weniger Zeit als herkömmliche
        Massivhäuser, was wiederum zu geringeren Arbeits- und Materialkosten führt.
      </p>

      <h4>Flexible Gestaltungsmöglichkeiten</h4>
      <p>
        Nachhaltige Holzhäuser in Holzrahmenbauweise bieten maximale Flexibilität –
        sowohl bei der Raumaufteilung als auch beim Design von Innen- und Außenbereichen.
        Ob modern oder klassisch – alles ist möglich!
      </p>

      <h4>Umweltfreundlich & Gesund</h4>
      <p>
        Unsere nachhaltigen Holzhäuser bestehen aus ökologischen, schadstofffreien Materialien.
        Sie schaffen ein gesundes Wohnklima und lassen sich noch individueller planen
        als klassische Blockhäuser.
      </p>
    </div>
    <div className="nwh-hero-image">
      <img src={houseImage} alt="Holzrahmenhaus" />
    </div>
  </div>
</section>

<section className="nwh-cards">
  <div className="nwh-cards-grid">
    <div className="nwh-card">
      <img src={Bungalows} alt="Bungalows" />
      <h3>Bungalows</h3>
    </div>
    <div className="nwh-card">
      <img src={Einfamilienhauser} alt="Einfamilienhäuser" />
      <h3>Einfamilienhäuser</h3>
    </div>
    <div className="nwh-card">
      <img src={Dopplehause} alt="Doppelhäuser" />
      <h3>Doppelhäuser</h3>
    </div>
    <div className="nwh-card">
      <img src={Mehrfamilienhaus} alt="Mehrfamilienhaus" />
      <h3>Mehrfamilienhaus</h3>
    </div>
    <div className="nwh-card">
      <img src={Garagen} alt="Garagen & Carport" />
      <h3>Garagen & Carport</h3>
    </div>
    <div className="nwh-card">
      <img src={Modulhause} alt="Modulhäuser" />
      <h3>Modulhäuser</h3>
    </div>
  </div>
</section>

<section className="nwh-comfort">
  <div className="nwh-comfort-container">
    <div className="nwh-comfort-image">
      <img src={coupleImage} alt="Ein Zuhause zum Wohlfühlen" />
    </div>
    <div className="nwh-comfort-text">
      <h2>Ein Zuhause zum Wohlfühlen!</h2>
      <p>
        Ein Haus ist mehr als nur vier Wände – es ist ein Ort, an dem Erinnerungen entstehen,
        an dem Kinder aufwachsen und Familien Geborgenheit finden.
      </p>
      <p>
        Bei Natural Wohnbau sorgen wir dafür, dass Ihr Zuhause nicht nur nachhaltig,
        sondern auch warm, sicher und einladend ist – ein Ort zum Wohlfühlen.
      </p>
      <ul>
        <li>Gesundes Wohnklima für die ganze Familie</li>
        <li>Nachhaltige Materialien für eine bessere Zukunft</li>
        <li>Individuelles Design für maximalen Komfort</li>
        <li>Weil Ihr Zuhause ein Ort der Liebe und Geborgenheit sein soll!</li>
      </ul>
    </div>
  </div>
</section>

<section className="nwh-features">
  <div className="nwh-container">
    <h2 className="nwh-title">Individuelle Konzeption gemäß Ihren Wünschen</h2>
    <p className="nwh-subtitle">
      Unsere Kunden haben die Möglichkeit, ihr Holzhaus nach individuellen Vorstellungen zu gestalten.
      Neben verschiedenen Hausmodellen können Sie Ihr persönliches Traumhaus genau nach Ihren Wünschen planen.
    </p>

    <div className="nwh-features-grid">
      <div className="nwh-feature-box">
        <img src={transparenzImg} alt="Transparenz" />
        <h3>Transparenz</h3>
        <p>
          Von der Grundsteinlegung bis zur Schlüsselübergabe werden Sie von uns perfekt betreut und
          informiert. Lehnen Sie sich zurück, entspannen Sie sich und genießen Sie die Vorfreude
        </p>
      </div>

      <div className="nwh-feature-box">
        <img src={bemusterungImg} alt="Bemusterung" />
        <h3>Bemusterung</h3>
        <p>
          Bei der Bemusterung werden Sie von uns und unserem regionalen Partner umfassend unterstützt.
          Ihnen steht eine große Auswahl an Produkten zur Verfügung.
        </p>
      </div>

      <div className="nwh-feature-box">
        <img src={individuelleImg} alt="Individuelle Gestaltung" />
        <h3>Individuelle Gestaltung</h3>
        <p>
          Unser Planungsteam unterstützt Sie dabei, Ihre Wünsche und Vorstellungen bis ins kleinste Detail
          umzusetzen.
        </p>
      </div>

      <div className="nwh-feature-box">
        <img src={kostenermittlungImg} alt="Kostenermittlung" />
        <h3>Kostenermittlung</h3>
        <p>
          Nach den ersten Gesprächen führen wir gemeinsam die detaillierte Kostenermittlung für Sie und
          Ihre Finanzierungspartner durch. Wir legen großen Wert auf Kostentransparenz von Anfang an.
        </p>
      </div>

      <div className="nwh-feature-box">
        <img src={kompetenzImg} alt="Kompetenz" />
        <h3>Kompetenz</h3>
        <p>
          Unser Expertenteam berät Sie gerne unverbindlich über die Möglichkeit, Ihr Traumhaus nach Ihren
          persönlichen Vorstellungen und Wünschen zu gestalten.
        </p>
      </div>

      <div className="nwh-feature-box">
        <img src={beratungImg} alt="Beratung" />
        <h3>Beratung</h3>
        <p>
          Wenn Sie an einem unverbindlichen Beratungsgespräch interessiert sind, zögern Sie nicht,
          uns telefonisch oder per E-Mail zu kontaktieren, um einen Termin zu vereinbaren.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="nwh-partners">
  <div className="nwh-container">
    <h2>Wir sind Partner von</h2>
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      className="nwh-partner-swiper"
    >
      {partnerLogos.map((logo, index) => (
        <SwiperSlide key={index}>
          <a href={logo.link} target="_blank" rel="noopener noreferrer">
            <img src={logo.src} alt={logo.alt} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

<section className="nwh-bauweisen">
  <div className="nwh-bauweisen-container">
    <h2 className="nwh-bauweisen-heading">Unsere Bauweisen</h2>
    <div className="nwh-bauweisen-grid">
      
      <div className="nwh-bauweisen-card">
        <img src={RohbauImage} alt="Holzrahmenbau" className="nwh-bauweisen-image" />
        <div className="nwh-bauweisen-content">
          <h3 className="nwh-bauweisen-title">Rohbau</h3>
          <p className="nwh-bauweisen-description">
            Ein Rohbau-Haus bildet das stabile Fundament für Ihr zukünftiges Zuhause. Von den tragenden Außenwänden bis zur Dachkonstruktion schaffen wir eine robuste und langlebige Basis, die nach höchsten Bau- und Energiestandards errichtet wird. Diese Bauweise gibt Ihnen die volle Gestaltungsfreiheit, da Sie den gesamten Innenausbau nach Ihren persönlichen Vorstellungen planen und umsetzen können.
Ob Sie sich für eine moderne, minimalistische Architektur oder eine traditionelle Bauweise entscheiden – mit einem Rohbau haben Sie die Möglichkeit, jedes Detail individuell anzupassen. Sie können Materialien, Raumaufteilung und technische Installationen frei wählen, sodass Ihr Zuhause genau Ihren Bedürfnissen entspricht.
          </p>
        </div>
      </div>  

      <div className="nwh-bauweisen-card">
        <img src={SchlusselfertigImage} alt="Schlüsselfertig" className="nwh-bauweisen-image" />
        <div className="nwh-bauweisen-content">
          <h3 className="nwh-bauweisen-title">Schlüsselfertig</h3>
          <p className="nwh-bauweisen-description">
            Mit unserer schlüsselfertigen Bauweise erhalten Sie ein perfekt vorbereitetes Zuhause, in dem Sie nur noch die Tür öffnen und einziehen müssen. Sämtliche Arbeiten am Haus sind im Vorfeld abgeschlossen – von der Planung über den Rohbau bis hin zu den letzten Innenausbau-Details.
Unsere erfahrenen Fachkräfte kümmern sich um jeden Schritt des Bauprozesses mit höchster Präzision, sodass Sie sich entspannt auf Ihr neues Zuhause freuen können. Genießen Sie den Komfort und die Sicherheit eines Rundum-Sorglos-Pakets und überlassen Sie uns die Arbeit.
Entdecken Sie mit Natural Haus die Leichtigkeit des schlüsselfertigen Bauens – ein sorgenfreier Weg zum Eigenheim, ganz nach Ihren Wünschen!
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="nwh-qualitaet">
  <div className="nwh-container">
    <h2 className="nwh-title">Höchste Qualität für Ihr Zuhause</h2>
    <p className="nwh-text">
      Damit Ihr Zuhause den höchsten Normen und Standards entspricht, verwenden wir ausschließlich hochwertige
      Materialien und erstklassige Wandkonstruktionen...
    </p>
  </div>
</section>

<section id="nwh-wand">
  <div className="nwh-wand-menu">
    <ul className="nwh-wand-nav">
      <li 
        className={`nwh-wand-item ${activeWandType === 'wand' ? 'active' : ''}`}
        onClick={() => handleWandClick('wand')}
      >
        <a href="#!" className="wand-nav-link" data-type="wand">
          Wandaufbau
        </a>
      </li>
      <li 
        className={`nwh-wand-item ${activeWandType === 'decke' ? 'active' : ''}`}
        onClick={() => handleWandClick('decke')}
      >
        <a href="#!" className="wand-nav-link" data-type="decke">
          Deckenaufbau
        </a>
      </li>
      <li 
        className={`nwh-wand-item ${activeWandType === 'dach' ? 'active' : ''}`}
        onClick={() => handleWandClick('dach')}
      >
        <a href="#!" className="wand-nav-link" data-type="dach">
          Dachaufbau
        </a>
      </li>
    </ul>

    <div className="nwh-wand-description">
      <h3>{wandDescriptions[activeWandType].title}</h3>
      <p>{wandDescriptions[activeWandType].description}</p>
      <div className="nwh-wand-images-grid">
        {wandDescriptions[activeWandType].images.map((image, index) => (
          <div key={index} className="nwh-wand-image-container">
            <img 
              src={image.src} 
              alt={image.alt}
              className="nwh-wand-image"
            />
            <p className="nwh-wand-caption">{image.alt}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      <section>
        <HouseRequestWizard />
      </section>
    </>
  );
};

export default Home;