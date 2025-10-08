// Umkleidescontainer.jsx
import React, { useEffect, useState, useCallback } from "react";
import "./Test.css";

/* =========================
   Ikona (currentColor)
   ========================= */
const IconShower = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="currentColor" d="M8 6a4 4 0 0 1 8 0h3a1 1 0 1 1 0 2h-8a3 3 0 0 0-3 3v1H7V11a5 5 0 0 1 5-5h1a2 2 0 1 0-4 0H8zM6 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 .001 2.001A1 1 0 0 0 14 16zm-8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 .001 2.001A1 1 0 0 0 10 20zm4 0a1 1 0 1 0 .001 2.001A1 1 0 0 0 14 20z"/>
  </svg>
);
const IconShield = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="currentColor" d="M12 2l7 3v6c0 5.25-3.438 9.78-7 11-3.562-1.22-7-5.75-7-11V5l7-3zm0 2.18L7 5.78v5.3c0 4.18 2.64 8.07 5 9.18 2.36-1.11 5-5 5-9.18v-5.3l-5-1.6z"/>
  </svg>
);
const IconVent = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="currentColor" d="M12 7a5 5 0 0 1 4.9-3.999 1.5 1.5 0 1 1 0 3A2 2 0 0 0 15 8a3 3 0 0 1-3 3 2 2 0 1 0 0 4 3 3 0 0 1 3 3 2 2 0 0 0 1.9 1.999 1.5 1.5 0 1 1 0 3A5 5 0 0 1 12 19a2 2 0 1 0 0-4 5 5 0 0 1 0-10z"/>
  </svg>
);
const IconLocker = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="currentColor" d="M6 3h6a2 2 0 0 1 2 2v14H4V5a2 2 0 0 1 2-2zm0 2v2h6V5H6zm0 4v8h6V9H6zm10-6h2a2 2 0 0 1 2 2v14h-6V5a2 2 0 0 1 2-2zm0 2v2h2V5h-2zm0 4v2h2V9h-2z"/>
  </svg>
);
const IconAccess = (props) => (
  <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <g fill="currentColor">
      <circle cx="30" cy="30" r="28" stroke="currentColor" fill="none" strokeWidth="2"/>
      <circle cx="30" cy="15" r="5"/>
      <path d="M44 22l-10.5 1h-7L16 22c-1.7-.1-3 1.2-3 2.9s1.2 3 2.9 3l8.6.8c.6.1 1 .5 1 1.1v2.1c0 .5-.1 1-.3 1.5l-4.7 12c-.6 1.5.1 3.2 1.7 3.8s3.2-.1 3.8-1.7L30 37l4.6 11.5c.6 1.6 2.3 2.3 3.9 1.7s2.3-2.3 1.7-3.9l-4.7-12c-.2-.5-.3-1-.3-1.5V29c0-.6.4-1 .9-1.1l8.7-.8c1.6-.1 2.9-1.5 2.7-3.1-.1-1.7-1.5-2.9-3.1-2.9Z"/>
    </g>
  </svg>
);
const IconEnergy = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="currentColor" d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/>
  </svg>
);

/* =========================
   Të dhënat (DE)
   ========================= */
const models = [
  {
    id: "basic",
    name: "Umkleide Basic",
    teaser: "Kompakt, robust, sofort einsatzbereit.",
    img: "/images/model-basic.jpg",
    highlights: ["Spinde & Bänke", "LED-Beleuchtung", "R10-Boden"],
    specs: ["L 6–8 m · B 2.5 m", "H 2.8 m", "230 V · FI/LS"],
  },
  {
    id: "dusche",
    name: "Umkleide + Duschen",
    teaser: "Duschen integriert – hygienisch & komfortabel.",
    img: "/images/model-dusche.jpg",
    highlights: ["Warmwasser", "Trinkwasserhygiene", "R11-Boden"],
    specs: ["2–6 Duschplätze", "Zonen getrennt", "Abluftsystem"],
  },
  {
    id: "sport",
    name: "Sportverein",
    teaser: "Optimiert für Teams & Spieltage.",
    img: "/images/model-sport.jpg",
    highlights: ["Team-Zonen", "Spindtrocknung", "Schlamm-Drain"],
    specs: ["L 8–12 m", "Belüftung mit WRG", "RFID-Spinde optional"],
  },
  {
    id: "industrie",
    name: "Industrie Robust",
    teaser: "Hohe Beanspruchung, 24/7-Betrieb.",
    img: "/images/model-industrie.jpg",
    highlights: ["HPL-Wände", "Stoßschutz", "Antibakterielle Flächen"],
    specs: ["R11-Boden", "400 V verfügbar", "Reinigung easy"],
  },
  {
    id: "event",
    name: "Event Mobil",
    teaser: "Mobil & elegant für Events & Messen.",
    img: "/images/model-event.jpg",
    highlights: ["Schneller Aufbau", "Design-Oberflächen", "Leise Lüftung"],
    specs: ["Trailertauglich", "LED 4000K", "Modular erweiterbar"],
  },
  {
    id: "winter",
    name: "Winterpaket",
    teaser: "Warm, trocken, effizient im Winter.",
    img: "/images/model-winter.jpg",
    highlights: ["Isolierung+Heizung", "Bodenheizung optional", "Trocknungsprogramm"],
    specs: ["PUR/PIR 100–120 mm", "WRG", "Frostschutz"],
  },
];

const features = [
  { icon: <IconShower />, title: "Duschen & Sanitär", text: "Getrennte Bereiche, Warmwasser, Trinkwasserhygiene." },
  { icon: <IconVent />, title: "Belüftung & Trocknung", text: "Umluft/Abluft, Wärmerückgewinnung, leise & effizient." },
  { icon: <IconLocker />, title: "Spinde & Bänke", text: "Robuste Spinde, HPL-Bänke, rutschhemmende Oberflächen." },
  { icon: <IconShield />, title: "Hygiene & Sicherheit", text: "Antibakterielle Flächen, sichere Elektrik, RC2-Optionen." },
  { icon: <IconAccess />, title: "Barrierefreiheit", text: "Rampen, 90-cm-Türen, kontrastreiche Leitsysteme." },
  { icon: <IconEnergy />, title: "Energie & Betrieb", text: "230/400 V, LED 4000 K, geringer Verbrauch." },
];

const steps = [
  { n: "01", t: "Bedarf klären", d: "Nutzung, Personenanzahl, Standort & Infrastruktur bestimmen." },
  { n: "02", t: "Konfiguration", d: "Module, Oberflächen, Belüftung & Sanitär auswählen." },
  { n: "03", t: "Lieferung & Montage", d: "Schneller Aufbau, Einweisung, Übergabe – sofort startklar." },
];

const faqs = [
  { q: "Wie schnell ist die Lieferung möglich?", a: "Je nach Modell 2–6 Wochen. Expresslösungen auf Anfrage." },
  { q: "Sind Damen-/Herrenbereiche trennbar?", a: "Ja, durch separate Kabinen und Zugänge – flexibel planbar." },
  { q: "Welche Stromanschlüsse werden benötigt?", a: "Standard 230 V; bei größeren Anlagen 400 V – wir beraten." },
  { q: "Reinigung & Hygiene?", a: "HPL- und antibakterielle Oberflächen erleichtern die Reinigung." },
];

/* =========================================================
   Komponenta kryesore
   ========================================================= */
export default function Umkleidescontainer() {
  const [active, setActive] = useState(null);

  // Reveal animations
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("inview")),
      { threshold: 0.2 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const openModel = useCallback((m) => setActive(m), []);
  const closeModel = useCallback(() => setActive(null), []);

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <main className="uc2">
      {/* HERO – valë e lehtë, qendrim i majtë */}
      <header className="uc2-hero">
        <div className="container uc2-hero__grid">
          <div className="uc2-hero__copy">
            <span className="eyebrow" data-reveal>Umkleidecontainer</span>
            <h1 className="title-xl" data-reveal style={{ animationDelay: "80ms" }}>
              Premium-Umkleiden für Baustelle, Sport & Event
            </h1>
            <p className="lead" data-reveal style={{ animationDelay: "140ms" }}>
              Luxuriöse Materialien, effiziente Belüftung, hygienische Sanitärmodule.
              Zeitloses Design – ohne Kompromisse bei Komfort und Sauberkeit.
            </p>
            <div className="actions" data-reveal style={{ animationDelay: "200ms" }}>
              <a href="#modelle" className="btn btn--primary btn--glow">Modelle ansehen</a>
              <a href="#features" className="btn btn--outline">Features entdecken</a>
            </div>
          </div>
          <div className="uc2-hero__media" data-reveal style={{ animationDelay: "220ms" }}>
            <div className="frame">
              <img src="/images/umkleidecontainer-hero.jpg" alt="Moderne Außenansicht eines Umkleidecontainers" />
            </div>
          </div>
        </div>
      </header>

      {/* 6 MODELE – grilë klikueshme */}
      <section id="modelle" className="container models">
        <h2 className="title" data-reveal>Wähle dein Modell</h2>
        <p className="sub" data-reveal>
          Sechs Konfigurationen für jeden Einsatz: kompakt, sportlich, industriell, mobil oder winterfest.
        </p>
        <div className="models__grid">
          {models.map((m, i) => (
            <article
              key={m.id}
              className="model-card"
              data-reveal
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <button className="model-card__media" onClick={() => openModel(m)} aria-label={`${m.name} öffnen`}>
                <img src={m.img} alt={m.name} />
              </button>
              <div className="model-card__body">
                <h3 className="model-card__title">{m.name}</h3>
                <p className="model-card__teaser">{m.teaser}</p>
                <div className="model-card__tags">
                  {m.highlights.slice(0, 2).map((h, k) => (
                    <span key={k} className="tag">{h}</span>
                  ))}
                </div>
                <div className="model-card__cta">
                  <button className="btn btn--ghost" onClick={() => openModel(m)}>Mehr erfahren</button>
                  <a href="#anfrage" className="btn btn--primary btn--glow">Angebot anfragen</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODAL – detajet e modelit */}
      {active && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="model-title">
          <div className="modal__backdrop" onClick={closeModel} />
          <div className="modal__panel" data-reveal style={{ animationDelay: "0ms" }}>
            <button className="modal__close" onClick={closeModel} aria-label="Schließen">×</button>
            <div className="modal__grid">
              <div className="modal__media">
                <img src={active.img} alt={active.name} />
              </div>
              <div className="modal__body">
                <h3 id="model-title" className="title-md">{active.name}</h3>
                <p className="modal__teaser">{active.teaser}</p>
                <h4 className="title-sm">Highlights</h4>
                <ul className="bullets">
                  {active.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
                <h4 className="title-sm">Technische Eckdaten</h4>
                <ul className="bullets bullets--grid">
                  {active.specs.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
                <div className="modal__cta">
                  <a href="#anfrage" className="btn btn--primary btn--glow">Unverbindliches Angebot</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FEATURES – 6 ikona */}
      <section id="features" className="container feat">
        <h2 className="title" data-reveal>Features, die Maßstäbe setzen</h2>
        <div className="feat__grid">
          {features.map((f, i) => (
            <div className="feat__card" key={i} data-reveal style={{ animationDelay: `${i * 70}ms` }}>
              <div className="feat__icon">{f.icon}</div>
              <h3 className="feat__title">{f.title}</h3>
              <p className="feat__text">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STEPS – 3 hapat */}
      <section className="container steps">
        <h2 className="title" data-reveal>So läuft es ab</h2>
        <div className="steps__rail">
          {steps.map((s, i) => (
            <div className="step" key={i} data-reveal style={{ animationDelay: `${i * 90}ms` }}>
              <div className="step__n">{s.n}</div>
              <div className="step__b">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container faq">
        <h2 className="title" data-reveal>Häufige Fragen</h2>
        <div className="faq__list">
          {faqs.map((f, i) => (
            <details key={i} className="faq__item" data-reveal style={{ animationDelay: `${i * 60}ms` }}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA për ofertë */}
      <section id="anfrage" className="cta">
        <div className="container cta__box" data-reveal>
          <div className="cta__copy">
            <h2 className="title-md">Individuell konfigurieren & Angebot erhalten</h2>
            <p>Wähle Modell, Größe und Ausstattung – wir melden uns kurzfristig mit einem verbindlichen Angebot.</p>
          </div>
          <form className="cta__form" onSubmit={(e)=>e.preventDefault()}>
            <label>
              Modell
              <select defaultValue="Umkleide Basic">
                {models.map((m)=> <option key={m.id} value={m.name}>{m.name}</option>)}
              </select>
            </label>
            <label>
              Größe
              <select defaultValue="8 m">
                <option>6 m</option><option>8 m</option><option>10 m</option><option>12 m</option>
              </select>
            </label>
            <label>
              E-Mail
              <input type="email" placeholder="max@example.com" required />
            </label>
            <button className="btn btn--primary btn--glow" type="submit">Anfrage senden</button>
          </form>
        </div>
      </section>

      <footer className="container foot">
        <p>* Abbildungen ähnlich. Technische Änderungen vorbehalten. Installation gemäß lokalen Vorschriften.</p>
      </footer>
    </main>
  );
}
