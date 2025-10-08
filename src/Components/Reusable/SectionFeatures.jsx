import React from "react";
import "./SectionFeatures.css";

/* Ndrysho path/ekstensionet sipas strukturës së projektit tënd */
import transparenzImg from '../../images/Transparenz.webp';
import bemusterungImg from '../../images/Bemusterung.webp';
import individuelleImg from '../../images/IndividuelleGestaltung.webp';
import kostenermittlungImg from '../../images/Kostenermittlung.webp';
import kompetenzImg from '../../images/Kompetenz.webp';
import beratungImg from '../../images/Beratung.webp';

export default function SectionFeatures() {
  return (
    <section className="nwh-features">
      <div className="nwh-container">
        <div className="nwh-header">
          <h2 className="nwh-title">Individuelle Konzeption gemäß Ihren Wünschen</h2>
          <p className="nwh-subtitle">
            Unsere Kunden haben die Möglichkeit, ihr Holzhaus nach individuellen Vorstellungen zu gestalten.
            Neben verschiedenen Hausmodellen können Sie Ihr persönliches Traumhaus genau nach Ihren Wünschen planen.
          </p>
        </div>

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
  );
}
