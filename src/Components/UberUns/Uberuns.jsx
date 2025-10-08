import React from "react";
import "./Uberuns.css";
import Hero from "./Hero"
import Hand from "./Hand.webp"
import Cooperation from "./Cooperation.webp"
import Innovation from "./Innovation.webp"
import Plans from "./Plans.webp"
import Slider from "../Slider/Slider"
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
import Form from "../Reusable/formwizard"

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

const checks = [
  "FAIR",
  "FLEXIBEL",
  "ZUVERLÄSSIG",
  "LEISTUNGSSTARK",
  "LÖSUNGSORIENTIERT",
  "INNOVATIV",
];

export default function Uberuns() {
  return (
    <>
    <Hero/>
    <section className="uberuns">
      <div className="uberuns__container">
        <header className="uberuns__header">
          <span className="uberuns__kicker">STARKE HÄUSER</span>
          <h2 className="uberuns__title">
            Damit Sie sich wirklich zu Hause fühlen
          </h2>
          <div className="uberuns__divider"></div>
        </header>

        <div className="uberuns__grid">
          <div className="uberuns__text">
            <p>
              Damit Sie sich in Ihrem neuen Haus auch wirklich ganz zu Hause
              fühlen, brauchen Sie von Anfang an jemanden, der Sie fair und
              ehrlich berät und dem Sie voll und ganz vertrauen können. Denn
              schon lange vor Baubeginn gibt es viel zu bedenken. Wir sind als
              Ihr kompetenter Bau-Partner an Ihrer Seite und in allen Punkten
              rund um Ihr Traumhaus für Sie da.
            </p>
          </div>

          <ul className="uberuns__features">
            {checks.map((label) => (
              <li key={label} className="uberuns__feature">
                <span className="uberuns__icon">✔</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
        <section className="fullimage">
      <img src={Hand} alt="Hand" className="fullimage__img" />
    </section>
        <section className="traumhaus">
      <div className="traumhaus__container">
        <header className="traumhaus__header">
          <h2 className="traumhaus__title">
            Ihr Traumhaus mit <span>Natural Wohnbau</span> – Einfach,
            Hochwertig & Zukunftssicher
          </h2>
        </header>

        <div className="traumhaus__content">
          <p>
            Wir wollen Ihnen den Bau Ihres Traumhauses so einfach wie möglich
            machen. Wer mit Natural Wohnbau baut, profitiert von kurzen
            Bauzeiten, optimal geplanten Abläufen, ehrlichen und verbindlichen
            Zusagen, innovativer Haustechnik, hochwertigen Materialien sowie
            einem wohngesunden Wohnkonzept.
          </p>
          <p>
            Kurz gesagt: Wer mit uns baut, erhält höchste Manufaktur-Qualität,
            kombiniert mit erstklassiger Ausstattung und exzellentem Service.
            Das ist unser Versprechen.
          </p>
          <p>
            Und weil das Bauen mit Natural Wohnbau so einfach, ehrlich und
            transparent ist, können Sie sich darauf verlassen, dass in unseren
            Häusern von Anfang an alle wichtigen Leistungen enthalten sind, die
            Sie für Ihr Traumhaus benötigen – ohne Wenn und Aber.
          </p>
          <p>
            Wir sind sicher, dass dieses starke Konzept auch Sie überzeugt und
            freuen uns darauf, Ihren individuellen Haustraum für Sie zu
            realisieren.
          </p>
        </div>

        <div className="traumhaus__closing">
          <p className="traumhaus__statement">
            Deshalb sagen wir ganz einfach:
            <br />
            <strong>Herzlich willkommen bei Natural Wohnbau</strong>
          </p>

          <div className="traumhaus__signature">
            <p>Behar Gashi & Benjamin Höfler</p>
            <span>Geschäftsführung der Natural Wohnbau</span>
          </div>
        </div>
      </div>
    </section>
        <section className="cooperation">
      <div className="cooperation__container">
        <div className="cooperation__text">
          <h2 className="cooperation__title">
            Ehrlich, <span>Fair</span> und Transparent!
          </h2>
          <p>
            Gemeinsam mit Ihnen entwickeln wir von der ersten Idee bis zum
            fertigen Projekt-Konzept das perfekt auf Ihre Bedürfnisse
            abgestimmte Traumhaus. Sie erzählen uns, was Ihnen wichtig ist – wir
            beraten Sie, geben wertvolle Tipps und entwickeln dann ein
            maßgeschneidertes Haus-Konzept für Sie.
          </p>
          <p>
            Ihr neues Natural Wohnbau wird genau das Haus, das Sie sich wünschen
            – ohne Kompromisse. Eine unserer größten Stärken ist es, Ihnen
            bereits im Standard ein Leistungspaket ohne versteckte Lücken zu
            bieten. Und das von Anfang an.
          </p>
          <p>
            Wir setzen auf eine transparente und realistische Planung, um Ihnen
            unangenehme Überraschungen zu ersparen. Unser All-Inclusive-Konzept
            beinhaltet alle relevanten Hausbau-Details und alle wichtigen
            Leistungen rund um Ihr neues Natural Wohnbau.
          </p>
          <p>
            Mit diesem Konzept begleiten wir Sie von Anfang an ehrlich, fair und
            bedarfsgerecht – für ein individuelles, budgetfreundliches und
            hochwertiges Traumhaus made by Natural Wohnbau.
          </p>
        </div>

        <div className="cooperation__image">
          <img src={Cooperation} alt="Cooperation" />
        </div>
      </div>
    </section>
        <section className="innovation">
      <div className="innovation__container">
        <div className="innovation__image">
          <img src={Innovation} alt="Innovation" />
        </div>

        <div className="innovation__text">
          <h2 className="innovation__title">
            Innovativ, <span>Wertbeständig</span>, Gesund!!
          </h2>
          <p>
            Im Mittelpunkt unserer Arbeit stehen Sie als Bauherrinnen und
            Bauherren. Unser Versprechen ist es, Ihnen ein Haus zu bauen, das
            nicht nur durch ein stilvolles Design und eine durchdachte
            Raumaufteilung überzeugt, sondern auch höchsten Wohnkomfort und
            Wohngesundheit bietet.
          </p>
          <p>
            Mit Natural Wohnbau entscheiden Sie sich für ein Zuhause, das durch
            außergewöhnliche Qualität und langfristigen Werterhalt überzeugt – 
            ein Ort, an dem Sie sich ein Leben lang wohlfühlen können.
          </p>
          <p>
            Unser innovatives Hauskonzept macht uns zu Vorreitern im
            wohngesunden, energieeffizienten und nachhaltigen Bauen. Durch die
            Kombination aus modernster Haus- und Heiztechnik, den Einsatz
            nachhaltiger Baustoffe und wohngesunder Materialien wird jedes
            Natural Wohnbau zu einem besonderen Klima-Komfort-Haus – für ein
            gesundes und umweltfreundliches Wohnen.
          </p>
        </div>
      </div>
    </section>
        <section className="mass-section">
      <div className="mass__container">
        <div className="mass__text">
          <h2 className="mass__title">
            Maßgeschneidert <span>in allen Bereichen!</span>
          </h2>

          <p>
            Der Bau eines Hauses ist eine Lebensentscheidung – und wir wissen,
            wie wichtig es ist, dass alles genau zu Ihnen passt. Deshalb setzen
            wir alles daran, mit Ihnen gemeinsam das ideale Zuhause zu
            gestalten: ein Haus für Ihr Leben!
          </p>
          <p>
            Unsere Mission ist klar definiert: Wir bauen ein Haus, das perfekt
            auf Ihre Wünsche und Anforderungen zugeschnitten ist – in Architektur,
            Design und Wohnkonzept. Ein Haus, das Ihre Persönlichkeit
            widerspiegelt und mit seiner Größe, Raumaufteilung und
            Funktionalität genau zu Ihrer Lebenssituation passt.
          </p>
          <p>
            Dabei behalten wir stets wichtige Faktoren wie Ihr Bau-Budget und
            Bebauungsvorschriften im Blick, damit Ihr Traumhaus nicht nur
            ästhetisch und funktional, sondern auch realistisch und nachhaltig
            umgesetzt wird.
          </p>
          <p>
            So entsteht ein maßgeschneidertes Zuhause – individuell für Sie
            entwickelt, mit Liebe zum Detail und höchster Qualität.
          </p>
        </div>

        <div className="mass__image">
          <img src={Plans} alt="Plans" />
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
<Form/>
    </>
  );
}
