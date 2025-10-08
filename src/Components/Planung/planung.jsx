import React, { useMemo } from "react";
import "./planung.css";

// Replace these with your real assets (or keep the fallback URLs)
import heroImage from "./planung-hero.webp";          // replace with your asset
import step1 from "./planung-erstgespraech.webp";     // optional – or use URLs below
import step2 from "./planung-vorentwurf.webp";
import step3 from "./planung-entwurf.webp";
import step4 from "./planung-einreichung.webp";
import step5 from "./planung-ausfuehrung.webp";
import step6 from "./planung-kosten.webp";

const safeSrc = (img) => (typeof img === "string" ? img : img?.src);

export default function Planung() {
    const heroBg = useMemo(
    () => (typeof heroImage === "string" ? heroImage : heroImage?.src),
    []
  );
  const steps = [
    {
      badge: "1 · Erstgespräch",
      title: "Bedarf & Grundstück",
      text:
        "Wir hören zu, analysieren Rahmenbedingungen und definieren Budget, Stil und Zeitschiene. Das Ergebnis ist ein klares Briefing.",
      bullets: [
        "Nutzungsanforderungen & Prioritäten",
        "Bebauungsplan / Bestandsaufnahme",
        "Budget- und Terminrahmen",
      ],
      img: safeSrc(step1) || "/images/planung/erstgespraech.jpg",
    },
    {
      badge: "2 · Vorentwurf",
      title: "Konzept & Budgetprüfung",
      text:
        "Zonierung, Grundrisslogik und erste Materialien. Wir prüfen Realisierbarkeit und gleichen Kosten mit dem Zielbild ab.",
      bullets: [
        "Volumen- & Grundrissstudien",
        "Stil- und Materialleitbild",
        "Budget-Check & Varianten",
      ],
      img: safeSrc(step2) || "/images/planung/vorentwurf.jpg",
    },
    {
      badge: "3 · Entwurf",
      title: "Feinschliff & Visualisierung",
      text:
        "Proportionen, Blickachsen und Belichtung werden präzisiert – auf Wunsch mit 3D-Ansichten für maximale Entscheidungssicherheit.",
      bullets: [
        "Ausarbeitung Grundrisse / Ansichten",
        "3D-Visualisierung & Materialstudien",
        "Kostenfortschreibung",
      ],
      img: safeSrc(step3) || "/images/planung/entwurf.jpg",
    },
    {
      badge: "4 · Einreichung",
      title: "Behörden & Genehmigung",
      text:
        "Wir erstellen alle Unterlagen für die Einreichung und begleiten den Prozess bis zur Baugenehmigung.",
      bullets: [
        "Einreichpläne & Nachweise",
        "Koordination mit Behörden",
        "Anpassungen bis zur Freigabe",
      ],
      img: safeSrc(step4) || "/images/planung/einreichung.jpg",
    },
    {
      badge: "5 · Ausführung",
      title: "Ausführungsplanung & Ausschreibung",
      text:
        "Detailpläne, Leistungsbeschreibungen und Vergabeunterstützung – für präzise Qualität in der Umsetzung.",
      bullets: [
        "Detail- & Ausführungspläne",
        "Leistungsverzeichnisse / Angebote",
        "Vergabeempfehlung",
      ],
      img: safeSrc(step5) || "/images/planung/ausfuehrung.jpg",
    },
    {
      badge: "6 · Steuerung",
      title: "Kosten & Termine im Griff",
      text:
        "Wir monitoren Budget und Zeitplan – transparent, proaktiv und mit klarem Reporting.",
      bullets: [
        "Kostenverfolgung & Prognose",
        "Terminplanung (Meilensteine)",
        "Qualitätssicherung",
      ],
      img: safeSrc(step6) || "/images/planung/kosten.jpg",
    },
  ];

  return (
    <main className="lx-page">
      {/* HERO */}
      <section className="lx-hero" aria-label="Planung – Natural Wohnbau">
        <div className="lx-container lx-hero-grid">
          <div className="lx-hero-copy">
            <div className="lx-eyebrow">Beraten · Entwerfen · Koordinieren</div>
            <h1>Planung &amp; Projektsteuerung</h1>
            <p>
              Von der ersten Idee bis zur Ausführungsreife: präzise Konzepte, die
              Architektur, Technik und Budget in Einklang bringen – mit klaren
              Prozessen, verlässlichen Terminen und einer Ästhetik, die bleibt.
            </p>
            <a className="lx-btn lx-btn--primary" href="/kontakt">
              Unverbindliches Erstgespräch
            </a>
          </div>
          <div
            className="lx-hero-visual"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.18), rgba(21,34,43,.55)), url(${heroBg})`,
            }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="lx-section lx-promise">
        <div className="lx-container">
          <div className="lx-pillars">
            <article className="lx-pillar">
              <h3>Architektur mit Haltung</h3>
              <p>
                Zeitlose Linien, natürliche Materialien und Grundrisse, die
                funktionieren – elegant und alltagstauglich.
              </p>
            </article>
            <article className="lx-pillar">
              <h3>Planung in Präzision</h3>
              <p>
                Saubere Details, klare Schnitte, belastbare Pläne. So sichern wir
                Qualität und Termintreue auf der Baustelle.
              </p>
            </article>
            <article className="lx-pillar">
              <h3>Transparente Steuerung</h3>
              <p>
                Kosten und Meilensteine im Blick – mit Reporting, das Entscheidungen
                einfach macht.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* STEPS – ZigZag */}
      <section className="lx-section lx-steps" aria-label="Planungsphasen">
        <div className="lx-container">
          {steps.map((s, i) => (
            <article key={s.badge} className={`lx-step ${i % 2 ? "is-reverse" : ""}`}>
              <div
                className="lx-picture"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(21,34,43,.16), rgba(21,34,43,.5)), url(${s.img})`,
                }}
              />
              <div className="lx-copy">
                <span className="lx-badge">{s.badge}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="lx-list">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="lx-section lx-timeline-wrap" aria-label="Projektfahrplan">
        <div className="lx-container">
          <h2>Projektfahrplan</h2>
          <ol className="lx-timeline">
            {[
              ["Kennenlernen & Zielbild", "Start mit klaren Erwartungen und realistischem Fahrplan."],
              ["Vorentwurf & Budget", "Varianten, Kostenrahmen und Entscheidungsvorlage."],
              ["Entwurfsfreigabe", "Gestaltung, Materialität und Energie-Konzept finalisiert."],
              ["Einreichung & Freigabe", "Behördlicher Prozess bis zur Baugenehmigung."],
              ["Ausführungsplanung & Vergabe", "Details, Leistungsverzeichnisse und Angebote."],
            ].map(([t, d]) => (
              <li key={t}>
                <span className="lx-dot" />
                <div>
                  <h4>{t}</h4>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="lx-cta" aria-label="Kontaktaufnahme">
        <div className="lx-container lx-cta-inner">
          <h3>Bereit für den ersten Schritt?</h3>
          <p>Wir freuen uns auf Ihr Projekt – und auf ein gutes Gespräch.</p>
          <a className="lx-btn lx-btn--primary" href="/kontakt">Jetzt Termin anfragen</a>
        </div>
      </section> */}
    </main>
  );
}
