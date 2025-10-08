import React, { useEffect, useMemo, useRef, useState } from "react";
import "./pvshowcase.css";
import Einfamilienhaus from '../../images/EinfamilenHause.webp'
import Wohnraum from '../../images/Wohnraum.jpg'
import Barri from '../../images/Barri.jpg'

/* Ikona */
const IconHome = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <path d="M3 11.5 12 4l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z" fill="currentColor"/>
  </svg>
);
const IconExpand = (props) => (
<svg enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_x37_6_Menu"><g><path d="m352.672 217.032h95.472c31.789 0 57.648-25.859 57.648-57.648v-24.673c0-6.369-5.164-11.53-11.53-11.53s-11.53 5.161-11.53 11.53v24.673c0 19.073-15.515 34.589-34.589 34.589h-95.472c-19.073 0-34.589-15.515-34.589-34.589v-95.539c0-19.073 15.515-34.589 34.589-34.589h95.472c19.073 0 34.589 15.515 34.589 34.589v15.294c0 6.369 5.164 11.53 11.53 11.53s11.53-5.161 11.53-11.53v-15.294c0-31.789-25.859-57.648-57.648-57.648h-95.472c-31.789 0-57.648 25.859-57.648 57.648v95.539c.001 31.789 25.86 57.648 57.648 57.648z"/><path d="m63.841 217.005h95.517c31.789 0 57.648-25.859 57.648-57.648v-95.516c0-31.789-25.859-57.648-57.648-57.648h-95.517c-31.789 0-57.648 25.859-57.648 57.648v95.517c0 31.788 25.859 57.647 57.648 57.647zm-34.589-153.164c0-19.073 15.515-34.589 34.589-34.589h95.517c19.073 0 34.589 15.515 34.589 34.589v95.517c0 19.073-15.515 34.589-34.589 34.589h-95.517c-19.073 0-34.589-15.515-34.589-34.589z"/><path d="m63.841 505.807h95.517c31.789 0 57.648-25.859 57.648-57.648v-95.513c0-31.789-25.859-57.648-57.648-57.648h-95.517c-31.789 0-57.648 25.859-57.648 57.648v95.513c0 31.789 25.859 57.648 57.648 57.648zm-34.589-153.161c0-19.073 15.515-34.589 34.589-34.589h95.517c19.073 0 34.589 15.515 34.589 34.589v95.513c0 19.073-15.515 34.589-34.589 34.589h-95.517c-19.073 0-34.589-15.515-34.589-34.589z"/><path d="m494.277 388.871h-82.343v-82.343c0-6.369-5.164-11.53-11.53-11.53-6.365 0-11.53 5.16-11.53 11.53v82.343h-82.351c-6.365 0-11.53 5.161-11.53 11.53s5.164 11.53 11.53 11.53h82.351v82.347c0 6.369 5.164 11.53 11.53 11.53 6.365 0 11.53-5.161 11.53-11.53v-82.348h82.343c6.365 0 11.53-5.161 11.53-11.53s-5.165-11.529-11.53-11.529z"/></g></g></svg>
);
const IconAccess = (props) => (
<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g id="Page-1_60_"><g id="_x30_61---Accessibility"><path id="Shape_230_" d="m256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256c-.16-141.319-114.681-255.84-256-256zm0 494.933c-131.959 0-238.933-106.974-238.933-238.933s106.974-238.933 238.933-238.933 238.933 106.974 238.933 238.933c-.15 131.897-107.036 238.783-238.933 238.933z"/><path id="Shape_229_" d="m256 42.667c-117.821 0-213.333 95.512-213.333 213.333s95.512 213.333 213.333 213.333 213.333-95.512 213.333-213.333c-.131-117.766-95.567-213.202-213.333-213.333zm0 409.6c-108.395 0-196.267-87.872-196.267-196.267s87.872-196.267 196.267-196.267 196.267 87.872 196.267 196.267c-.123 108.344-87.923 196.144-196.267 196.267z"/><path id="Shape_228_" d="m297.719 179.2c17.386-16.967 22.765-42.772 13.605-65.272-9.159-22.5-31.032-37.211-55.325-37.211s-46.165 14.712-55.325 37.211c-9.159 22.5-3.78 48.305 13.605 65.272h-86.279c-6.757-.054-13.248 2.634-17.988 7.45-5.442 5.321-8.202 12.806-7.518 20.386 1.488 13.44 12.941 23.552 26.462 23.364h75.844v68.352c.007 4.647-.766 9.262-2.287 13.653l-27.307 81.067c-4.483 13.378 2.703 27.862 16.068 32.384l8.132 2.748c13.373 4.466 27.84-2.722 32.358-16.077l24.236-70.562 24.243 70.502c2.156 6.443 6.785 11.765 12.867 14.794 6.082 3.028 13.119 3.514 19.56 1.352l8.107-2.739c13.365-4.522 20.552-19.006 16.068-32.384l-27.383-81.169c-1.5-4.366-2.265-8.951-2.261-13.568v-68.353h76.799c6.757.054 13.248-2.634 17.988-7.45 5.44-5.318 8.201-12.801 7.518-20.378-1.484-13.443-12.938-23.56-26.462-23.373h-85.325zm-84.386-42.667c0-23.564 19.103-42.667 42.667-42.667s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667c-23.552-.028-42.638-19.114-42.667-42.667zm179.2 67.482c.238 2.548-.705 5.064-2.56 6.827-1.568 1.611-3.726 2.511-5.973 2.492h-76.8c-9.426 0-17.067 7.641-17.067 17.067v68.352c-.008 6.501 1.065 12.957 3.174 19.106l27.307 81.067c1.48 4.445-.901 9.252-5.333 10.769l-8.081 2.731c-2.155.722-4.51.554-6.541-.466s-3.572-2.809-4.279-4.97l-32.341-94.029c-1.182-3.45-4.426-5.767-8.073-5.767s-6.89 2.317-8.073 5.767l-32.333 94.08c-1.499 4.445-6.306 6.846-10.761 5.376l-8.115-2.731c-4.433-1.517-6.813-6.324-5.333-10.769l27.307-81.024c2.125-6.158 3.21-12.626 3.209-19.14v-68.353c0-9.426-7.641-17.067-17.067-17.067h-75.844c-4.665.19-8.738-3.132-9.489-7.74-.252-2.565.693-5.102 2.56-6.878 1.575-1.595 3.732-2.48 5.973-2.449h255.044c4.668-.189 8.742 3.138 9.489 7.749z"/></g></g></g></svg>
);

/* Slidet */
const slides = [
  {
    image: Einfamilienhaus,
    subtitle: "Ihr Einfamilienhaus",
    body:
      "Ob als Single, Paar oder Familie – mit oder ohne Haustier – Ihr Zuhause sollte perfekt zu Ihrem Leben passen. Wir planen Ihr Einfamilienhaus individuell nach Ihren Bedürfnissen und schaffen eine Wohnlösung, die sich jederzeit an Ihre Lebenssituation anpassen lässt.",
    icon: IconHome,
  },
  {
    image: Wohnraum,
    subtitle: "Mehr Wohnraum gewünscht?",
    body:
      "Sie benötigen zusätzliche Räume oder möchten ein Kinderzimmer in ein Büro umwandeln? Kein Problem! Dank unserer modularen Bauweise lassen sich Dach- oder Kellerräume problemlos ausbauen und neue Wohnbereiche schaffen.",
    icon: IconExpand,
  },
  {
    image: Barri,
    subtitle: "Barrierefrei & Zukunftssicher",
    body:
      "Planen Sie ein ebenerdiges Haus für den Ruhestand oder benötigen eine barrierefreie Lösung? Wir realisieren Ihr Zuhause so, dass Komfort, Funktionalität und uneingeschränkte Bewegungsfreiheit gewährleistet sind.",
    icon: IconAccess,
  },
];

export default function PVShowcase() {
  const [idx, setIdx] = useState(0);
  const timeoutRef = useRef(null);

  // auto-rotate çdo 6s
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [idx]);

  const { image, subtitle, body } = useMemo(() => slides[idx], [idx]);

  // >>> orbit logic: këndet bazë + rrotullimi që badge aktiv të vijë djathtas
  const baseAngles = [0, 120, 240];          // 3 pozicione rreth rrethit
  const orbitRotation = -baseAngles[idx];    // rrotullo gjithë orbitën

  return (
    <section className="pv">
      <div className="pv__inner">
        {/* Majtas: rrethi + orbit i badge-ve */}
        <div className="pv__visual">
          <div className="pv__ring" aria-hidden="true" />
          <div className="pv__circle">
            <img key={image} src={image} alt="" />
          </div>

          {/* Orbit që rrotullohet – badge aktiv del në të djathtë */}
          <div className="pv__orbit" style={{ "--rot": `${orbitRotation}deg` }}>
            {slides.map((s, i) => {
              const Ico = s.icon;
              return (
                <button
                  key={s.subtitle}
                  className={`pv__badge ${i === idx ? "is-active" : ""}`}
                  style={{ "--theta": `${baseAngles[i]}deg` }}
                  onClick={() => setIdx(i)}
                  aria-label={s.subtitle}
                >
                  <Ico />
                </button>
              );
            })}
          </div>
        </div>

        {/* Djathtas: titulli statik + teksti që ndryshon */}
        <div className="pv__copy">
          <h2 className="pv__eyebrow">Natur Wohnbau <br/>Ein Zuhause, das sich anpasst</h2>

          <h3 className="pv__subtitle">{subtitle}</h3>
          <p className="pv__lead">{body}</p>

          <div className="pv__nav">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`pv__navdot ${i === idx ? "is-active" : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
