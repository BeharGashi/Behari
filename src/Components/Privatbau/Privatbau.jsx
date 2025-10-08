import React, { useEffect, useMemo } from "react";
import "./Privatbau.css";


// Replace with your actual assets (optional)
import heroImg from "./privatbau-hero.webp";
import villaImg from "./privatbau-villa.webp";
import efhImg from "./privatbau-efh.webp";
import umbautenImg from "./privatbau-umbauten.webp";
import interiorImg from "./privatbau-interior.webp";
import Form from "../Reusable/formwizard"

const src = (i) => (typeof i === "string" ? i : i?.src);

export default function Privatbau() {
  const hero = useMemo(() => src(heroImg) || "/images/privatbau/hero.jpg", []);
  const c1 = src(villaImg) || "/images/privatbau/villa.jpg";
  const c2 = src(efhImg) || "/images/privatbau/einfamilienhaus.jpg";
  const c3 = src(umbautenImg) || "/images/privatbau/umbauten.jpg";
  const c4 = src(interiorImg) || "/images/privatbau/interior.jpg";

  // IntersectionObserver for reveal-on-scroll
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".pb-reveal"));
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
    <main className="pb-page">
      {/* HERO */}
      <section className="pb-hero" aria-label="Privatbau – Natural Wohnbau">
        <div className="pb-container pb-hero-grid">
          <div className="pb-hero-copy pb-reveal">
            <div className="pb-eyebrow">Diskret · Präzise · Wertbeständig</div>
            <h1>Privatbau auf höchstem Niveau</h1>
            <p>
              Architektur für besondere Ansprüche: ruhige Eleganz, hochwertige
              Materialien und eine Planung, die Design, Komfort und Budget in Einklang bringt.
              Wir führen Ihr Projekt mit Klarheit – vom ersten Gespräch bis zur Übergabe.
            </p>
            <a className="pb-btn pb-btn--primary" href="/kontakt">
              Unverbindliches Erstgespräch
            </a>
          </div>
          <div
            className="pb-hero-visual pb-reveal"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.18), rgba(21,34,43,.55)), url(${hero})`,
            }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* PILLARS */}
      <section className="pb-section pb-pillars" aria-label="Unsere Haltung">
        <div className="pb-container">
          <div className="pb-pillars-grid">
            <article className="pb-pillar pb-reveal">
              <h3>Architektur mit Ruhe</h3>
              <p>
                Zeitlose Geometrie, natürliche Materialien und Räume, die sich
                selbstverständlich anfühlen – ohne laute Gesten.
              </p>
            </article>
            <article className="pb-pillar pb-reveal">
              <h3>Exzellente Ausführung</h3>
              <p>
                Präzise Detailplanung, verlässliche Partner und Qualitätskontrolle –
                damit aus dem Entwurf echte Wertigkeit entsteht.
              </p>
            </article>
            <article className="pb-pillar pb-reveal">
              <h3>Transparente Steuerung</h3>
              <p>
                Klare Termine, nachvollziehbare Kosten, regelmäßiges Reporting –
                damit Entscheidungen leichtfallen.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="pb-section pb-showcase" aria-label="Privatbau – Beispiele">
        <div className="pb-container pb-grid">
          <article className="pb-card pb-reveal">
            <div
              className="pb-card-media"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.2), rgba(21,34,43,.55)), url(${c1})` }}
            >
              <span className="pb-badge">Modulhause</span>
            </div>
            <div className="pb-card-body">
              <h4>Großzügige Architektur</h4>
              <p>
                Repräsentativ und privat zugleich: klare Achsen, fließende Sequenzen,
                handwerkliche Perfektion.
              </p>
            </div>
          </article>

          <article className="pb-card pb-reveal">
            <div
              className="pb-card-media"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.2), rgba(21,34,43,.55)), url(${c2})` }}
            >
              <span className="pb-badge">Einfamilienhaus</span>
            </div>
            <div className="pb-card-body">
              <h4>Wohnen mit Leichtigkeit</h4>
              <p>
                Smarte Grundrisse, viel Tageslicht und Materialien, die Patina schön
                altern lassen.
              </p>
            </div>
          </article>

          <article className="pb-card pb-reveal">
            <div
              className="pb-card-media"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.2), rgba(21,34,43,.55)), url(${c3})` }}
            >
              <span className="pb-badge">Zubau & Modernisierung</span>
            </div>
            <div className="pb-card-body">
              <h4>Bestehendes veredeln</h4>
              <p>
                Subtile Eingriffe mit großer Wirkung – funktional, gestalterisch und
                energetisch.
              </p>
            </div>
          </article>

          <article className="pb-card pb-reveal">
            <div
              className="pb-card-media"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.2), rgba(21,34,43,.55)), url(${c4})` }}
            >
              <span className="pb-badge">Interieur</span>
            </div>
            <div className="pb-card-body">
              <h4>Material & Atmosphäre</h4>
              <p>
                Oberflächen mit Tiefe, ausgewogenes Licht und eine Haptik, die man
                spürt – innen wie außen.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* LEISTUNGEN / SPLIT */}
      <section className="pb-section pb-split" aria-label="Leistungen im Privatbau">
        <div className="pb-container pb-split-grid">
          <div className="pb-slab pb-reveal">
            <h3>Leistungen im Überblick</h3>
            <ul className="pb-list">
              <li>Beratung, Bedarfserhebung & Standortanalyse</li>
              <li>Vorentwurf, Entwurfsplanung & 3D-Visualisierung</li>
              <li>Einreichung & behördliche Koordination</li>
              <li>Ausführungsplanung & Ausschreibung</li>
              <li>Kosten- & Terminsteuerung, Bauleitung</li>
              <li>Innenarchitektur & detaillierte Materialkonzepte</li>
            </ul>
          </div>
          <div className="pb-slab pb-reveal">
            <h3>Ihr Vorteil</h3>
            <p>
              Ein Team, ein roter Faden: Wir begleiten Sie durch alle Phasen – mit
              einem Anspruch an Gestaltung und Präzision, der man sieht und spürt.
            </p>
            <div className="pb-kpis" role="list">
              <div className="pb-kpi" role="listitem"><b>Präzise</b><span>Saubere Details</span></div>
              <div className="pb-kpi" role="listitem"><b>Transparent</b><span>Klarer Prozess</span></div>
              <div className="pb-kpi" role="listitem"><b>Verlässlich</b><span>Fixe Termine</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="pb-section pb-timeline-wrap" aria-label="Ablauf">
        <div className="pb-container">
          <h2 className="pb-reveal">Ablauf im Privatbau</h2>
          <ol className="pb-timeline">
            {[
              ["Kennenlernen", "Ziele, Budget, Rahmenbedingungen – strukturiert und klar."],
              ["Vorentwurf", "Varianten, Raumprogramm, erste Materialität & Budgetabgleich."],
              ["Entwurf", "Proportionen, Blickachsen, 3D – Entscheidungssicherheit."],
              ["Einreichung", "Behördlicher Prozess bis zur Genehmigung."],
              ["Ausführung", "Detailpläne, Vergabe, Bauleitung und Qualitätssicherung."],
            ].map(([t, d]) => (
              <li key={t} className="pb-reveal">
                <span className="pb-dot" />
                <div>
                  <h4>{t}</h4>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Form/>
    </main>
    </>
  );
}
