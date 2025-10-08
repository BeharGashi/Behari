import React, { useEffect, useRef } from "react";
import "./ein.css";
import Hero from "./Hero";
import Privat from "../SVG/privatesphere.svg";
import Individ from "../SVG/individuelle.svg";
import Nachhaltigkeit from "../SVG/nachhaltigkeit.svg";
import Wertsteigerung from "../SVG/wertsteigerung.svg";
import Einfamilienhause from "../../images/couple.webp";
import Einfam from "../../images/einfamilenhauus.jpg";
import PVShowcase from "./PVShowcase";
import Style1 from "../../images/Style 130/Style 2.jpg";
import Style2 from "./Style130-2/Style_3.jpg";
import Style3 from "./Style-140/Style_3.jpg";
import Style4 from "./Style140-2/Style_1.jpg";
import Style5 from "./Roani 150/Style_3.jpg";
import Style6 from "./Roani 150-2/Style_1.jpg";

export default function AboutUs() {
  const wrapRef = useRef(null);
  const topRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    // Ç’aktivizo parallax në Tablet & Mobile ose kur user-i ka reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTabletOrSmaller = window.innerWidth < 1024;
    if (prefersReduced || isTabletOrSmaller) return;

    let lastY = window.scrollY;
    let topOffset = 0;
    let backOffset = 0;
    const MAX_TOP = 40;
    const MAX_BACK = 30;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        if (!wrapRef.current) { ticking = false; return; }
        const r = wrapRef.current.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) { ticking = false; return; }

        const y = window.scrollY;
        const dir = y > lastY ? 1 : -1;
        lastY = y;

        topOffset += dir * -2.2;
        backOffset += dir * 1.2;

        topOffset = Math.max(-MAX_TOP, Math.min(MAX_TOP, topOffset));
        backOffset = Math.max(-MAX_BACK, Math.min(MAX_BACK, backOffset));

        if (topRef.current) topRef.current.style.transform = `translateY(${topOffset}px)`;
        if (backRef.current) backRef.current.style.transform = `translateY(${backOffset}px)`;

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Hero />

      <section className="about">
        <div className="about__inner">
          {/* Kolona e majtë */}
          <div className="about__copy">
            <h2 className="about__title">
              Einfamilienhäuser
              <br /> Ihr Zuhause nach Maß
            </h2>

            <p className="about__text">
              Ein Einfamilienhaus steht für Freiheit, Komfort und Individualität. Es bietet Ihnen und Ihrer
              Familie einen privaten Rückzugsort, der nach Ihren persönlichen Wünschen gestaltet wird. Ob
              klassisch, modern oder nachhaltig – mit unserer durchdachten Planung und hochwertigen
              Materialien schaffen wir ein Zuhause, das nicht nur ästhetisch überzeugt, sondern auch
              energieeffizient und zukunftssicher ist.
            </p>
          </div>

          {/* Kolona e djathtë: dy foto me parallax */}
          <div className="about__media" ref={wrapRef}>
            <div className="about__img about__img--back" ref={backRef}>
              <img src={Einfamilienhause} alt="Einfamilienhause" loading="lazy" />
            </div>
            <div className="about__img about__img--top" ref={topRef}>
              <img src={Einfam} alt="Einfamilienhause" loading="lazy" />
              <span className="about__overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Advantages ===== */}
      <section className="adv">
        <div className="adv__inner">
          <div className="adv__eyebrow">VORTEILE <span aria-hidden="true" /></div>

          <div className="adv__grid">
            <article className="adv__item">
              <div className="adv__icon">
                <img src={Individ} alt="Individuelle Gestaltung" width={28} height={28} className="adv__icon-img" loading="lazy" />
              </div>
              <h3>Individuelle Gestaltung</h3>
              <p>Architektur und Raumaufteilung nach Ihren Bedürfnissen</p>
            </article>

            <article className="adv__item">
              <div className="adv__icon">
                <img src={Privat} alt="Privatsphäre" width={28} height={28} className="adv__icon-img" loading="lazy" />
              </div>
              <h3>Maximale Privatsphäre</h3>
              <p>Ihr eigener Wohnraum ohne direkte Nachbarn</p>
            </article>

            <article className="adv__item">
              <div className="adv__icon">
                <img src={Nachhaltigkeit} alt="Nachhaltigkeit" width={28} height={28} className="adv__icon-img" loading="lazy" />
              </div>
              <h3>Nachhaltigkeit & Energieeffizienz</h3>
              <p>Umweltfreundliche Bauweise për niedrige Betriebskosten</p>
            </article>

            <article className="adv__item">
              <div className="adv__icon">
                <img src={Wertsteigerung} alt="Wertsteigerung" width={28} height={28} className="adv__icon-img" loading="lazy" />
              </div>
              <h3>Wertsteigerung</h3>
              <p>Eine Investition in Ihre Zukunft</p>
            </article>
          </div>
        </div>
      </section>

      <PVShowcase />

      {/* ROAN 130 */}
      <section className="stT">
        <div className="stT__inner">
          <figure className="stT__media">
            <img src={Style1} alt="Style 130 – Außenansicht" />
          </figure>

          <div className="stT__copy">
            <h2 className="stT__title">ROAN 130</h2>
            <p className="stT__p">Welche Vorzüge bietet das Walmdach? Die Dachform ist nicht nur optisch ansprechend, sondern überzeugt auch durch ihre Optik. Obwohl die Kosten für die Konstruktion eines Walmdachs höher sind als bei anderen Dachformen, bietet das Walmdach eine Reihe von Vorteilen.</p>
            <p className="stT__p">Individualisieren Sie Ihr Haus nach Ihren Wünschen. Wir zeigen Ihnen unsere Grundrisslösungen und Visualisierungen.</p>

            <h3 className="stT__sub">Infos</h3>
            <ul className="stT__facts">
              <li className="stT__fact"><span className="stT__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Nettfläche <strong>136,36 m²</strong></span></li>
              <li className="stT__fact"><span className="stT__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Bruttofläche <strong>209,44 m²</strong></span></li>
            </ul>

            <a href="/roani130" className="stT__btn">Mehr Erfahren</a>
          </div>
        </div>
      </section>

      {/* ROAN 130/2 */}
      <section className="stX">
        <div className="stX__inner">
          <div className="stX__copy">
            <h2 className="stX__title">ROAN 130/2</h2>
            <p className="stX__p">Mit seinen bodentiefen Fenstern bietet der Essplatz im Erker eine wunderbare Aussicht nach draußen und lädt zum gemütlichen Verweilen ein…</p>
            <p className="stX__p">Individualisieren Sie Ihr Haus nach Ihren Wünschen…</p>

            <h3 className="stX__sub">Infos</h3>
            <ul className="stX__facts">
              <li className="stX__fact"><span className="stX__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Nettfläche <strong>137,25 m²</strong></span></li>
              <li className="stX__fact"><span className="stX__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Bruttofläche <strong>176,73 m²</strong></span></li>
            </ul>

            <a href="/roani130-2" className="stX__btn">Mehr Erfahren</a>
          </div>

          <figure className="stX__media">
            <img src={Style2} alt="Style 130 – Außenansicht" />
          </figure>
        </div>
      </section>

      {/* MALI 140 */}
      <section className="stT">
        <div className="stT__inner">
          <figure className="stT__media">
            <img src={Style3} alt="Style 130 – Außenansicht" />
          </figure>

          <div className="stT__copy">
            <h2 className="stT__title">MALI 140</h2>
            <p className="stT__p">Das Satteldach ist eine der am weitesten verbreiteten Dachformen in Deutschland…</p>
            <p className="stT__p">Individualisieren Sie Ihr Haus nach Ihren Wünschen…</p>

            <h3 className="stT__sub">Infos</h3>
            <ul className="stT__facts">
              <li className="stT__fact"><span className="stT__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Nettfläche <strong>146,24 m²</strong></span></li>
              <li className="stT__fact"><span className="stT__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Bruttofläche <strong>184,00 m²</strong></span></li>
            </ul>

            <a href="/mali140" className="stT__btn">Mehr Erfahren</a>
          </div>
        </div>
      </section>

      {/* MALI 140/2 */}
      <section className="stX">
        <div className="stX__inner">
          <div className="stX__copy">
            <h2 className="stX__title">MALI 140/2</h2>
            <p className="stX__p">Die Architektur der Stadtvilla Style 140-2 zeichnet sich durch klare Linien und moderne Gestaltungselemente aus…</p>
            <p className="stX__p">Individualisieren Sie Ihr Haus nach Ihren Wünschen…</p>

            <h3 className="stX__sub">Infos</h3>
            <ul className="stX__facts">
              <li className="stX__fact"><span className="stX__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Nettfläche <strong>140,83 m²</strong></span></li>
              <li className="stX__fact"><span className="stX__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Bruttofläche <strong>180,83 m²</strong></span></li>
            </ul>

            <a href="/mali140-2" className="stX__btn">Mehr Erfahren</a>
          </div>

          <figure className="stX__media">
            <img src={Style4} alt="Style 130 – Außenansicht" />
          </figure>
        </div>
      </section>

      {/* BLINI 150 */}
      <section className="stT">
        <div className="stT__inner">
          <figure className="stT__media">
            <img src={Style5} alt="Style 130 – Außenansicht" />
          </figure>

          <div className="stT__copy">
            <h2 className="stT__title">BLINI 150</h2>
            <p className="stT__p">Die zweigeschossige Stadtvilla macht sich hervorragend…</p>
            <p className="stT__p">Individualisieren Sie Ihr Haus nach Ihren Wünschen…</p>

            <h3 className="stT__sub">Infos</h3>
            <ul className="stT__facts">
              <li className="stT__fact"><span className="stT__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Nettfläche <strong>149.64 m²</strong></span></li>
              <li className="stT__fact"><span className="stT__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Bruttofläche <strong>188.80 m²</strong></span></li>
            </ul>

            <a href="/blini150" className="stT__btn">Mehr Erfahren</a>
          </div>
        </div>
      </section>

      {/* BLINI 150/2 */}
      <section className="stX">
        <div className="stX__inner">
          <div className="stX__copy">
            <h2 className="stX__title">BLINI 150/2</h2>
            <p className="stX__p">Ein stilvolles Haus mit einem eleganten Walmdach…</p>
            <p className="stX__p">Individualisieren Sie Ihr Haus nach Ihren Wünschen…</p>

            <h3 className="stX__sub">Infos</h3>
            <ul className="stX__facts">
              <li className="stX__fact"><span className="stX__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Nettfläche <strong>152.93 m²</strong></span></li>
              <li className="stX__fact"><span className="stX__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Bruttofläche <strong>195.97 m²</strong></span></li>
            </ul>

            <a href="/blini150-2" className="stX__btn">Mehr Erfahren</a>
          </div>

          <figure className="stX__media">
            <img src={Style6} alt="Style 130 – Außenansicht" />
          </figure>
        </div>
      </section>
    </>
  );
}
