import React, { useEffect, useState } from "react";
import "./contact-section.css";

export default function KontaktAlt() {
  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <main className="kontakt-alt">
      {/* SPLIT HERO */}
      <section className="split-hero" data-reveal>
        <div className="hero-copy">
          <span className="eyebrow">Natural Wohnbau</span>
          <h1>Kontakt</h1>
          <p>
            Lassen Sie uns über Ihr Projekt sprechen: maßgeschneiderte, modulare
            Wohnlösungen mit zeitloser Eleganz und höchster Präzision.
          </p>
        </div>
        <div className="hero-media" aria-label="Architekturvisualisierung" role="img">
          <div className="media-overlay" />
        </div>
      </section>

      {/* INFO RAIL (si kërkesa: ikonë + titull + tekst) */}
      <section className="rail-section" data-reveal>
        <div className="rail">
          {/* Adresse */}
          <article className="rail-item">
            <span className="bullet">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 11.5L12 4l9 7.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 10.5V20h14v-9.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 20v-5h4v5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="rail-text">
              <h4>Adresse</h4>
              <p>
                WHG Holding LLC<br/>
                Pajazit Islami, Erolina 5<br/>
                12000 Fushë&nbsp;Kosovë, Kosovo
              </p>
            </div>
          </article>

          {/* Email */}
          <article className="rail-item">
            <span className="bullet">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2" fill="none"/>
                <path d="M3 7l9 7 9-7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="rail-text">
              <h4>E-Mail</h4>
              <a className="rail-link" href="mailto:info@natural-wohnbau.com">
                info@natural-wohnbau.com
              </a>
            </div>
          </article>

          {/* Telefon */}
          <article className="rail-item">
            <span className="bullet">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.8v3a2 2 0 0 1-2.2 2A19.5 19.5 0 0 1 3.2 5.9 2 2 0 0 1 5.2 4h3a2 2 0 0 1 2 1.7c.15 1.05.4 2.06.73 3.02a2 2 0 0 1-.46 2.1l-1.26 1.26a16 16 0 0 0 6 6l1.26-1.26a2 2 0 0 1 2.1-.46c.96.33 1.97.58 3.02.73A2 2 0 0 1 22 16.8Z" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="rail-text">
              <h4>Telefon</h4>
              <a className="rail-link" href="tel:+38348188572">+383&nbsp;48&nbsp;188&nbsp;572</a>
            </div>
          </article>

          {/* Orari (opsionale) */}
          <article className="rail-item">
            <span className="bullet">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="8" fill="none"/>
                <path d="M12 8v4l3 2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="rail-text">
              <h4>Öffnungszeiten</h4>
              <p>Mo–Fr: 09:00–17:00</p>
            </div>
          </article>
        </div>
      </section>

      {/* FORM + FOTO ANËSORE (glass card) */}
      <section className="stage" id="formular" data-reveal>
        <div className="glass-card">
          <h2>Schreiben Sie uns</h2>
          <p className="lead">
            Teilen Sie uns Fläche, Stil und Standort mit – wir melden uns mit einem
            maßgeschneiderten Vorschlag.
          </p>

          <form className="form" onSubmit={handleSubmit}>
            {/* Honeypot */}
            <input type="text" name="company" className="hp" tabIndex="-1" autoComplete="off" />
            <div className="row">
              <label>
                Vorname*
                <input type="text" name="first_name" required placeholder="Max" />
              </label>
              <label>
                Nachname*
                <input type="text" name="last_name" required placeholder="Mustermann" />
              </label>
            </div>

            <div className="row">
              <label>
                E-Mail*
                <input type="email" name="email" required placeholder="max@example.com" />
              </label>
              <label>
                Telefon
                <input type="tel" name="phone" placeholder="+383 48 188 572" />
              </label>
            </div>

            <label>
              Ihre Nachricht*
              <textarea name="message" required rows="6" placeholder="Beschreiben Sie Ihr Projekt, gewünschte Größe, Stil, Ort und Timing." />
            </label>

            <label className="agree">
              <input type="checkbox" required /> Ich stimme der Verarbeitung meiner Daten
              zum Zweck der Kontaktaufnahme zu.
            </label>

            <button className="btn btn-gold btn-wide" type="submit">Nachricht senden</button>

            {sent && (
              <div className="toast" role="status" aria-live="polite">
                Danke! Wir melden uns schnellstmöglich.
              </div>
            )}
          </form>
        </div>

        <aside className="stage-aside">
          <div className="aside-photo" role="img" aria-label="Modulares Holzhaus – Detailaufnahme">
            <div className="shine" />
          </div>
        </aside>
      </section>

      {/* MAP BAND */}
      <section className="map-band" data-reveal>
        <div className="map-frame">
          <iframe
            title="Karte: Natural Wohnbau"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Pajazit%20Islami%20Erolina%205,%2012000%20Fush%C3%AB%20Kosov%C3%AB,%20Kosovo&output=embed"
          />
        </div>
      </section>
    </main>
  );
}
