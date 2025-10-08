// Schlafcontainer.jsx
import React, { useEffect } from "react";
import "./Schlafcontainer.css";
import Fig1 from './Sleepingcontainer.webp'
import Fig2 from '../DC-M600-1/DC_M600-1-17-scaled.jpg'
import Fig3 from '../DC-M600-2/DC_M600-2-27-scaled.jpg'
import Fig4 from '../DC-M600-3/DC_M600-3-32-scaled.jpg'
import Fig5 from '../DC-M600-4/DC_M600-4-37-scaled.jpg'

/* =========================
   Ikona (SVG me currentColor)
   ========================= */
const IconBed = (props) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M64 128c-17.7 0-32 14.3-32 32v192H16c-8.8 0-16 7.2-16 16v32h48v-32h416v32h48v-32c0-8.8-7.2-16-16-16h-16V224c0-35.3-28.7-64-64-64H224c-17.7 0-32 14.3-32 32v64H96v-96c0-17.7-14.3-32-32-32zm288 64c17.7 0 32 14.3 32 32v32H224v-32c0-17.7 14.3-32 32-32h96z"/>
  </svg>
);

const IconThermo = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M14 14.76V5a4 4 0 1 0-8 0v9.76a6 6 0 1 0 8 0ZM10 22a4 4 0 0 1-2-7.5V5a2 2 0 1 1 4 0v9.5A4 4 0 0 1 10 22Zm7-14a1 1 0 0 1 0-2h3a1 1 0 1 1 0 2Zm-1 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm1 5a1 1 0 0 1 0-2h3a1 1 0 1 1 0 2Z"/>
  </svg>
);

/* Vent ikonën e re (siç e përdore më lart) */
const IconVent = (props) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <g fill="currentColor">
      <path d="m24 17h-10c-.552 0-1-.448-1-1s.448-1 1-1h10c2.757 0 5-2.243 5-5 0-2.206-1.794-4-4-4-1.654 0-3 1.346-3 3 0 1.103.897 2 2 2 .552 0 1 .448 1 1s-.448 1-1 1c-2.206 0-4-1.794-4-4 0-2.757 2.243-5 5-5 3.309 0 6 2.691 6 6 0 3.86-3.14 7-7 7z"/>
      <path d="m28 44c-2.757 0-5-2.243-5-5 0-2.206 1.794-4 4-4 .552 0 1 .447 1 1s-.448 1-1 1c-1.103 0-2 .897-2 2 0 1.654 1.346 3 3 3 2.206 0 4-1.794 4-4 0-2.757-2.243-5-5-5h-24c-.552 0-1-.447-1-1s.448-1 1-1h24c3.86 0 7 3.141 7 7 0 3.309-2.691 6-6 6z"/>
      <path d="m39 25h-36c-.552 0-1-.448-1-1s.448-1 1-1h36c2.757 0 5-2.243 5-5 0-2.206-1.794-4-4-4-1.654 0-3 1.346-3 3 0 1.103.897 2 2 2 .552 0 1 .448 1 1s-.448 1-1 1c-2.206 0-4-1.794-4-4 0-2.757 2.243-5 5-5 3.309 0 6 2.691 6 6 0 3.86-3.14 7-7 7z"/>
      <path d="m41 38c-.366 0-.702-.199-.877-.521l-.665-1.215c-.398-.729-.994-1.324-1.722-1.722l-1.216-.666c-.321-.175-.52-.512-.52-.877s.199-.702.52-.877l1.215-.665c.729-.398 1.324-.994 1.723-1.723l.665-1.215c.352-.643 1.403-.643 1.755 0l.665 1.215c.398.729.994 1.324 1.722 1.722l1.216.666c.321.175.52.512.52.877s-.199.702-.52.877l-1.215.665c-.729.398-1.324.994-1.723 1.723l-.665 1.215c-.176.321-.512.521-.877.521zm-1.945-5c.784.498 1.446 1.16 1.945 1.945.499-.784 1.161-1.447 1.945-1.945-.784-.498-1.446-1.16-1.945-1.945-.499.784-1.161 1.447-1.945 1.945z"/>
      <path d="m8 16c-.366 0-.702-.2-.877-.52l-.665-1.215c-.398-.729-.994-1.324-1.723-1.723l-1.215-.665c-.32-.175-.52-.512-.52-.877s.2-.702.52-.877l1.215-.665c.729-.398 1.324-.994 1.723-1.723l.665-1.215c.351-.641 1.404-.641 1.755 0l.665 1.215c.398.729.994 1.324 1.723 1.723l1.215.665c.32.175.52.512.52.877s-.2.702-.52.877l-1.215.665c-.729.398-1.324.994-1.723 1.723l-.665 1.215c-.175.32-.512.52-.877.52zm-1.944-5c.784.499 1.446 1.161 1.944 1.944.499-.784 1.161-1.446 1.944-1.944-.784-.499-1.446-1.161-1.944-1.944-.499.784-1.161 1.446-1.944 1.944zm1.279-2.785h.01z"/>
    </g>
  </svg>
);

const IconShield = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="currentColor" d="M12 2l7 3v6c0 5.25-3.438 9.78-7 11-3.562-1.22-7-5.75-7-11V5l7-3zm0 2.18L7 5.78v5.3c0 4.18 2.64 8.07 5 9.18 2.36-1.11 5-5 5-9.18v-5.3l-5-1.6z"/>
  </svg>
);

/* Ikona e re Energy (nga kërkesa e fundit) */
const IconEnergy = (props) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M201.208,442.942c1.158,0.533,2.379,0.792,3.588,0.792c2.675,0,5.283-1.258,6.929-3.546l153.6-213.333
      c1.871-2.6,2.129-6.029,0.671-8.879c-1.462-2.85-4.392-4.642-7.596-4.642h-76.458l33.537-134.467
      c0.992-3.971-0.975-8.087-4.688-9.808c-3.733-1.717-8.133-0.571-10.517,2.754l-153.6,213.333c-1.871,2.6-2.129,6.029-0.671,8.879
      c1.462,2.85,4.392,4.642,7.596,4.642h76.458l-33.538,134.467C195.529,437.104,197.496,441.221,201.208,442.942z M249.263,292.2
      c0.638-2.55,0.062-5.25-1.554-7.321s-4.1-3.279-6.725-3.279h-70.725l117.912-163.767L262.737,219.8
      c-0.638,2.55-0.062,5.25,1.554,7.321s4.1,3.279,6.725,3.279h70.725L223.829,394.167L249.263,292.2z"/>
    <path fill="currentColor" d="M503.467,247.467c-4.713,0-8.533,3.821-8.533,8.533c0,131.75-107.183,238.933-238.933,238.933
      c-70.547,0-137.665-31.642-182.867-85.333h46.333c4.713,0,8.533-3.821,8.533-8.533c0-4.713-3.821-8.533-8.533-8.533H51.2
      c-4.713,0-8.533,3.821-8.533,8.533v68.267c0,4.713,3.821,8.533,8.533,8.533s8.533-3.821,8.533-8.533v-49.146
      C108.161,477.95,180.235,512,256,512c141.158,0,256-114.842,256-256C512,251.287,508.179,247.467,503.467,247.467z"/>
    <path fill="currentColor" d="M256,17.067c70.547,0,137.665,31.642,182.867,85.333h-46.333c-4.713,0-8.533,3.821-8.533,8.533s3.821,8.533,8.533,8.533
      H460.8c4.713,0,8.533-3.821,8.533-8.533V42.667c0-4.713-3.821-8.533-8.533-8.533c-4.713,0-8.533,3.821-8.533,8.533v49.146
      C403.839,34.05,331.765,0,256,0C114.842,0,0,114.842,0,256c0,4.713,3.821,8.533,8.533,8.533s8.533-3.821,8.533-8.533
      C17.067,124.25,124.25,17.067,256,17.067z"/>
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

/* =========================
   Të dhënat (DE)
   ========================= */
const models = [
  {
    id: "single",
    name: "SchC-M600-1",
    teaser: "Zwei-Bett-Wohncontainer mit Tisch/Essplatz und Stauraum.",
    img: Fig2,
    highlights: ["Einzelbett 90×200", "Stauraum & USB", "Leselicht"],
    href: "/sch-m600-1",
  },
  {
    id: "double",
    name: "SchC-M600-2",
    teaser: "2 Betten, Ess-/Arbeitsbereich, Bad mit Dusche, WC.",
    img: Fig3,
    highlights: ["2 Betten 90×200", "Ablagen", "Dimmbare Beleuchtung"],
    href: "/sch-m600-2",
  },
  {
    id: "crew",
    name: "SchC-M600-3",
    teaser: "Team-Schlafplatz mit robustem Finish.",
    img: Fig4,
    highlights: ["4 Schlafplätze", "2 Zimmer", "Schallpaket"],
    href: "/sch-m600-3",
  },
  {
    id: "premium",
    name: "SchC-M600-4",
    teaser: "Zwei vollständig abgetrennte Nasszellen.",
    img: Fig5,
    highlights: ["4 Schlafplätze", "2 Zimmer", "Akzentbeleuchtung"],
    href: "/sch-m600-4",
  },
];

const features = [
  { icon: <IconBed />, title: "Erholsamer Schlaf", text: "Komfortmatratzen, Akustikpaneele, blendfreie Beleuchtung." },
  { icon: <IconThermo />, title: "Klima & Heizung", text: "Hocheffiziente Klimatisierung, Inverter-Heizung, Nachtmodus." },
  { icon: <IconVent />, title: "Belüftung & Luftqualität", text: "WRG-Systeme, HEPA-Option, CO₂-Überwachung." },
  { icon: <IconShield />, title: "Hygiene & Sicherheit", text: "Antibakterielle Oberflächen, Rauchmelder, RC2-Option." },
  { icon: <IconEnergy />, title: "Energieeffizienz", text: "LED 4000K, 230/400 V, Photovoltaik-ready." },
  { icon: <IconAccess />, title: "Barrierefreiheit", text: "Breite Türen, niedrige Schwellen, kontrastreiche Leitsysteme." },
];

const specs = [
  { k: "Abmessungen", v: "L 6–12 m · B 2.5–3 m · H 2.8–3 m" },
  { k: "Betten", v: "1–6 Plätze (Einzel/Stock/Boxspring)" },
  { k: "Isolierung", v: "PUR/PIR 80–120 mm · Kältebrückenarm" },
  { k: "Schallschutz", v: "Akustikpaneele, dichte Türen" },
  { k: "Energie", v: "230/400 V · FI/LS · optional PV" },
  { k: "Boden", v: "Warm & rutschhemmend (R10)" },
  { k: "Bad", v: "Eigenes Bad optional (Premium)" },
  { k: "Lieferzeit", v: "ca. 2–6 Wochen" },
];

const steps = [
  { n: "01", t: "Bedarf & Personen", d: "Anzahl, Aufenthaltsdauer, Komfortniveau, Standort." },
  { n: "02", t: "Konfiguration", d: "Betten, Bad, Isolierung, Klima, Akustik, Energie." },
  { n: "03", t: "Lieferung & Aufbau", d: "Schnelle Montage, Einweisung, Übergabe – bezugsfertig." },
];

const faqs = [
  { q: "Wie ist das Raumklima nachts?", a: "Nachtmodus für leise Klimatisierung und konstante Temperatur." },
  { q: "Gibt es Einzelbäder?", a: "Ja, in Premium Suite; modular auch für andere Modelle verfügbar." },
  { q: "Stromanschluss?", a: "Standard 230 V; bei größeren Anlagen 400 V – Photovoltaik optional." },
  { q: "Wie wird gereinigt?", a: "Abwaschbare, antibakterielle Flächen, robuste Bodenbeläge." },
];

/* =========================
   Komponenta kryesore
   ========================= */
export default function Schlafcontainer() {
  // Reveal animations (IntersectionObserver)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("inview")),
      { threshold: 0.2 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="sc">
      {/* HERO me “stripe” luksoz dhe imazh */}
      <header className="sc-hero">
        <div className="container sc-hero__grid">
          <div className="sc-hero__copy">
            <span className="eyebrow" data-reveal>Schlafcontainer</span>
            <h1 className="title-xl" data-reveal style={{ animationDelay: "80ms" }}>
              Luxus, Ruhe & Effizienz.
            </h1>
            <p className="lead" data-reveal style={{ animationDelay: "140ms" }}>
              Moderne Schlafmodule mit perfekter Akustik, fein abgestimmter Beleuchtung
              und effizienter Klimatisierung – für Baustellen, Events und temporäre Unterkünfte.
            </p>
          </div>
          <div className="sc-hero__media" data-reveal style={{ animationDelay: "220ms" }}>
            <div className="frame">
              <img src={Fig1} alt="Innenansicht eines luxuriösen Schlafcontainers" />
            </div>
          </div>
        </div>
      </header>

      {/* MODELE – 6 kartat me link (scroll-snap + grid responsiv) */}
      <section id="modelle" className="container sc-models">
        <h2 className="title" data-reveal>Wähle dein Schlaf-Modell</h2>
        <p className="sub" data-reveal>
          Vier Ausstattungsvarianten für jede Belegung: vom platzsparenden Zimmer bis zur Premium-Einheit mit eigener Dusche und WC.
        </p>
        <div className="sc-models__grid">
          {models.map((m, i) => (
            <article key={m.id} className="mcard" data-reveal style={{ animationDelay: `${i * 80}ms` }}>
              <a className="mcard__media" href={m.href} aria-label={`${m.name} öffnen`}>
                <img src={m.img} alt={m.name} />
              </a>
              <div className="mcard__body">
                <h3 className="mcard__title">{m.name}</h3>
                <p className="mcard__teaser">{m.teaser}</p>
                <div className="mcard__tags">
                  {m.highlights.slice(0, 2).map((h, k) => <span key={k} className="tag">{h}</span>)}
                </div>
                <div className="mcard__cta">
                  <a className="btn btn--ghost" href={m.href}>Mehr erfahren</a>
                  <a className="btn btn--primary btn--glow" href="#anfrage">Angebot anfragen</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="container feat">
        <h2 className="title" id="features" data-reveal>Features für tiefen Schlaf</h2>
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



      {/* STEPS */}
      <section className="container steps">
        <h2 className="title" id="lauft" data-reveal>So läuft es ab</h2>
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
      <section className="container sc-faq">
        <h2 className="title" id="QAF" data-reveal>Häufige Fragen</h2>
        <div className="faq__list">
          {faqs.map((f, i) => (
            <details key={i} className="faq__item" data-reveal style={{ animationDelay: `${i * 60}ms` }}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
