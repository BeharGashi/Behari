import React, { useEffect, useRef, useState } from "react";
import "./Modulhauser.css";

import Hero from "./Hero";
import Hut3 from "./hutspace3.webp";     // rregullo path-in nëse ndryshon
import Hut1 from "./hutspace1.webp";     // rregullo path-in nëse ndryshon

import Models from "./HouseModelsSection";             // seksioni me 3 modele (HUT SPACE, Marigona, Mami)
import StandardsSlider from "../Reusable/StandardsSlider"; // slider 2–3–2 (rregullo path-in nëse ndryshon)
import Form from "../Reusable/formwizard"

const ITEMS = [
  { title: "Nachhaltige Materialien", text: "Vollständig mit hochwertigem Holz ausgestattet – warm, natürlich und ökologisch." },
  { title: "Atemberaubende Aussicht", text: "Panoramafenster eröffnen beeindruckende Ausblicke auf die Natur, direkt vom Bett oder Sofa." },
  { title: "Flexibel auf jedem Gelände", text: "Ob Hanglage oder unwegsames Terrain – HUT SPACE passt sich überall perfekt an." },
  { title: "Kein Eingriff in die Natur", text: "Dank der Stelzenbauweise bleibt der Boden unberührt – keine Gräben, keine Fundamente." },
  { title: "Minimalistisches Design, maximaler Komfort", text: "Kompakt, stilvoll und funktional – alles, was man zum Leben und Wohlfühlen braucht." },
];

export default function ModulhauserSection({ interval = 3500 }) {
  const [index, setIndex] = useState(0);

  // refs
  const sliderRef = useRef(null);     // pause-on-hover për slider-in e tekstit
  const hutRef = useRef(null);        // reveal on scroll – seksioni HUT SPACE (foto majtas)
  const tiltRef = useRef(null);       // tilt për imazhin e Hut3
  const statementRef = useRef(null);  // reveal on scroll – seksioni më pas (tekst majtas)
  const tiltRef2 = useRef(null);      // tilt për imazhin e Hut1

  // timers & prefs
  const timerRef = useRef(null);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      reduceMotionRef.current = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false;
    }
  }, []);

  // auto-rotacioni i slide-it (Modulhäuser)
  const start = () => {
    if (reduceMotionRef.current) return;
    clear();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % ITEMS.length);
    }, interval);
  };

  const clear = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    start();
    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval]);

  // Pause on hover/focus vetëm në zonën e slider-it
  useEffect(() => {
    const root = sliderRef.current;
    if (!root) return;
    const onEnter = () => clear();
    const onLeave = () => start();
    root.addEventListener("mouseenter", onEnter);
    root.addEventListener("mouseleave", onLeave);
    root.addEventListener("focusin", onEnter);
    root.addEventListener("focusout", onLeave);
    return () => {
      root.removeEventListener("mouseenter", onEnter);
      root.removeEventListener("mouseleave", onLeave);
      root.removeEventListener("focusin", onEnter);
      root.removeEventListener("focusout", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reveal on scroll – HUT SPACE (hs-reveal)
  useEffect(() => {
    const root = hutRef.current;
    const items = root?.querySelectorAll(".hs-reveal");
    if (!items?.length) return;

    const supported = typeof window !== "undefined" && "IntersectionObserver" in window;
    if (!supported) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Tilt për imazhin e Hut3
  useEffect(() => {
    const wrap = tiltRef.current;
    if (!wrap) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    const MAX_TILT = 6; // deg
    const MAX_TRANS = 8; // px

    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const tiltX = (0.5 - y) * MAX_TILT;
      const tiltY = (x - 0.5) * MAX_TILT;
      const tx = (x - 0.5) * MAX_TRANS;
      const ty = (0.5 - y) * MAX_TRANS;
      wrap.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${tx}px, ${ty}px, 0)`;
    };

    const onLeave = () => (wrap.style.transform = "");

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Reveal on scroll – seksioni i dytë (hs2-reveal)
  useEffect(() => {
    const root = statementRef.current;
    const items = root?.querySelectorAll(".hs2-reveal");
    if (!items?.length) return;

    const supported = typeof window !== "undefined" && "IntersectionObserver" in window;
    if (!supported) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Tilt për imazhin e Hut1
  useEffect(() => {
    const wrap = tiltRef2.current;
    if (!wrap) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    const MAX_TILT = 6; // deg
    const MAX_TRANS = 8; // px

    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const tiltX = (0.5 - y) * MAX_TILT;
      const tiltY = (x - 0.5) * MAX_TILT;
      const tx = (x - 0.5) * MAX_TRANS;
      const ty = (0.5 - y) * MAX_TRANS;
      wrap.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${tx}px, ${ty}px, 0)`;
    };

    const onLeave = () => (wrap.style.transform = "");

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <Hero />

      {/* ====== MODULHÄUSER – slider (tituj/tekste që ndryshojnë) ====== */}
      <section ref={sliderRef} className="mod-section" aria-labelledby="mod-heading">
        <div className="mod-container">
          <div className="mod-content" aria-live="polite">
            <span className="mod-eyebrow">Modulhäuser</span>

            {/* Remount on index change për CSS fade-in */}
            <div key={index} className="mod-slide">
              <h2 id="mod-heading" className="mod-title">{ITEMS[index].title}</h2>
              <p className="mod-text">{ITEMS[index].text}</p>
            </div>

            <ul className="mod-dots" role="tablist" aria-label="Folien-Auswahl">
              {ITEMS.map((_, i) => (
                <li key={i}>
                  <button
                    type="button"
                    className={`mod-dot ${i === index ? "is-active" : ""}`}
                    onClick={() => setIndex(i)}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Folie ${i + 1} von ${ITEMS.length}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ====== HUT SPACE – image left / text right ====== */}
      <section ref={hutRef} className="hs-section" aria-labelledby="hs-title">
        <div className="hs-glow" aria-hidden="true" />
        <div className="hs-container">
          {/* Imazhi majtas */}
          <div className="hs-media hs-reveal" style={{ "--d": "0ms" }}>
            <div ref={tiltRef} className="hs-tilt">
              <figure className="hs-frame">
                <img className="hs-img" src={Hut3} alt="HUT SPACE – modulare Hütte" loading="lazy" />
                <span className="hs-shine" aria-hidden="true" />
              </figure>
            </div>
          </div>

          {/* Teksti djathtas */}
          <div className="hs-copy">
            <span className="hs-kicker hs-reveal" style={{ "--d": "80ms" }}>HUT SPACE</span>
            <h2 id="hs-title" className="hs-title hs-reveal" style={{ "--d": "140ms" }}>
              Zwischen Vergangenheit und Zukunft
            </h2>
            <div className="hs-text hs-reveal" style={{ "--d": "200ms" }}>
              <p>Hoch oben auf dem Berg, wo Natur und Stille dominieren, schwebt HUT SPACE – eine modulare Hütte mit 70&nbsp;m², gebaut aus Stahlrahmen und warmem SWP-Holz im Inneren.</p>
              <p>Die Konstruktion steht auf Stelzen und berührt den Boden kaum. Kein Graben, kein Fundament – nur Leichtigkeit, Naturverbundenheit und maximale Rücksicht auf die Umgebung.</p>
              <p>Innen gemütlich, außen robust, mit Panoramablick und zeitlosem Design – HUT SPACE ist nicht nur ein Rückzugsort, sondern ein Erlebnis für alle Sinne.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== HUT SPACE – Text left / Image right ====== */}
      <section ref={statementRef} className="hs2-section" aria-labelledby="hs2-title">
        <div className="hs2-glow" aria-hidden="true" />
        <div className="hs2-container">
          {/* Teksti majtas */}
          <div className="hs2-copy">
            <span className="hs2-kicker hs2-reveal" style={{ "--d": "60ms" }}>Ein Raum wie kein anderer</span>
            <h2 id="hs2-title" className="hs2-title hs2-reveal" style={{ "--d": "120ms" }}>
              HUT SPACE – einzigartig in Idee, Form und Umsetzung.
            </h2>
            <div className="hs2-text hs2-reveal" style={{ "--d": "180ms" }}>
              <p>Was HUT SPACE so besonders macht? Es ist nicht nur ein Haus – es ist ein Statement. Ein Statement für architektonische Freiheit, nachhaltiges Bauen und respektvollen Umgang mit der Natur.</p>
              <p>Dank seiner Stelzenkonstruktion schwebt HUT SPACE über dem Boden, ohne ihn zu berühren. Kein anderes Wohnkonzept verbindet Design, Natur und Funktionalität auf so elegante Weise. Während andere graben, betonieren und zerstören, setzt HUT SPACE auf Leichtigkeit, Ästhetik und Umweltbewusstsein.</p>
              <p>Von außen futuristisch, von innen warm und gemütlich – mit hochwertigen Naturmaterialien und einem Panorama, das man nie vergisst. Diese Kombination macht HUT SPACE zu einem Ort, den es so nur einmal gibt.</p>
              <p className="hs2-emph">Jetzt Besichtigung anfragen oder persönliches Angebot sichern!</p>
            </div>
          </div>

          {/* Imazhi djathtas */}
          <div className="hs2-media hs2-reveal" style={{ "--d": "0ms" }}>
            <div ref={tiltRef2} className="hs2-tilt">
              <figure className="hs2-frame">
                <img className="hs2-img" src={Hut1} alt="HUT SPACE – modernes Modulhaus auf Stelzen" loading="lazy" />
                <span className="hs2-shine" aria-hidden="true" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Modelet (3 karta) ====== */}
      <Models />

      {/* ====== Standards & Schutz (slider 2–3–2) ====== */}
      <StandardsSlider autoPlay={true} interval={6000} />
      <Form />
    </>
  );
}
