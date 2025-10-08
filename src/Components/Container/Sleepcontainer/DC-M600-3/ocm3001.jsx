import React from "react";
import "./ocm3001.css";
import Hero from "./Hero";
import Plan from "./Plan";
import Galery from "./Galery";
import Similar from "../Schlafcontainer/Similar"
import Form from "../../../Reusable/formwizard";

export default function SHCM6003() {
  return (
    <>
      <Hero />
      <section className="ocm" id="ocm3001" aria-labelledby="ocm-title">
        <div className="ocm__container">
          {/* Header */}
          <header className="ocm__header">
            <span className="ocm__eyebrow">Mobiles Schlafcontainer-Modul</span>
            <h1 className="ocm__title" id="ocm-title">Typ SchC-M600-3</h1>
            <p className="ocm__subtitle">Kompakt. Flexibel. Sofort einsatzbereit.</p>
          </header>

          {/* Body */}
          <div className="ocm__grid">
            <div className="ocm__copy">
              <p>
                Der SchC-M600-3 ist ein durchdacht aufgeteilter Schlafcontainer mit{" "}
                <strong>zwei separaten Wohn-/Schlafräumen</strong> an den Stirnseiten
                (jeweils für 2 Personen). In der Mitte befindet sich ein
                <strong> gemeinsamer Sanitärkern</strong> mit zwei Duschen, einem WC
                und zwei Handwaschbecken sowie Pantry-/Arbeitsbereichen.
              </p>
              <p>
                Das Modul eignet sich ideal für Baustellen, Camps, Veranstaltungen
                oder temporäre Unterkünfte – robust, pflegeleicht und schnell
                betriebsbereit.
              </p>
            </div>

            {/* Meta / Facts */}
            <aside className="ocm__meta" aria-label="Kurzinfos zum Modell SchC-M600-3">
              <div className="ocm__metric" aria-label="Nutzfläche 13,74 Quadratmeter">
                <span className="ocm__metricValue">
                  44,31 <span className="ocm__metricUnit">m²</span>
                </span>
                <span className="ocm__metricLabel">Nutzfläche</span>
              </div>

              <ul className="ocm__badges" aria-label="Highlights">
                <li className="ocm__badge">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M9 12l2 2 4-4M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Kompakt
                </li>
                <li className="ocm__badge">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M4 12h16M12 4v16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Flexibel
                </li>
                <li className="ocm__badge">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Sofort einsatzbereit
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <Plan />

      <section className="ocms" id="ocm3001-specs" aria-labelledby="ocms-title">
        <div className="ocms__container">
          <header className="ocms__header">
            <span className="ocms__eyebrow">Details & Ausstattung</span>
            <h2 className="ocms__title" id="ocms-title">
              Technische Daten & Merkmale
            </h2>
          </header>

          <div className="ocms__grid">
            <div className="ocms__card_container">
              {/* Technische Daten */}
              <article className="ocms__card">
                <div className="ocms__cardHead">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="ocms__icon">
                    <path
                      d="M3 7h18M3 12h18M3 17h18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <h3 className="ocms__cardTitle">Technische Daten</h3>
                </div>
                <dl className="ocms__dl">
                  <div className="ocms__row">
                    <dt>Typ</dt>
                    <dd>SchC-M600-3</dd>
                  </div>
                  <div className="ocms__row">
                    <dt>Außenmaße</dt>
                    <dd>6058 × 2438&nbsp;mm</dd>
                  </div>
                  <div className="ocms__row">
                    <dt>Nutzfläche</dt>
                    <dd>44,31&nbsp;m²</dd>
                  </div>
                  <div className="ocms__row">
                    <dt>Farbe</dt>
                    <dd>RAL&nbsp;9002 (Weißgrau)</dd>
                  </div>
                </dl>
              </article>

              {/* Besondere Merkmale */}
              <article className="ocmss__card">
                <div className="ocmss__cardHead">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="ocms__icon">
                    <path
                      d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2Zm-2 11 2 2 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="ocmss__cardTitle">Besondere Merkmale</h3>
                </div>
                <ul className="ocmss__list">
                  <li><strong>Belegung:</strong> 4 Schlafplätze (2 Zimmer à 2 Betten)</li>
                  <li><strong>Sanitärkern:</strong> 2 Duschen, 1 WC, 2 Handwaschbecken – zentral angeordnet</li>
                  <li><strong>Komfort:</strong> Pantry-/Arbeitsbereiche je Raum, Stauraum/Schränke</li>
                  <li><strong>Sofort betriebsbereit:</strong> Vormontierte Sanitär- und Elektrokombponenten</li>
                  <li><strong>Langlebig & wetterbeständig:</strong> Glatte, leicht zu reinigende Oberflächen; robuste Stahlrahmenkonstruktion</li>
                  <li><strong>Optional auf Anfrage:</strong> Möblierung, Klimaanlage, Frostschutzheizung, zusätzliche Fenster/Türen, Sonderfarbe</li>
                </ul>
              </article>
            </div>

            <div className="ocms__card_container">
              {/* Elektrik */}
              <article className="ocms__card">
                <div className="ocms__cardHead">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="ocms__icon">
                    <path
                      d="M13 2L3 14h7l-1 8 10-12h-7l1-8Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="ocms__cardTitle">Elektrik</h3>
                </div>
                <ul className="ocms__list">
                  <li>Verteilungstafel mit FI/LS-Schutz</li>
                  <li>LED-Deckenleuchten: 2× Wohnbereiche, 1× Sanitärbereich</li>
                  <li>Lichtschalter je Raum</li>
                  <li>Mehrere Steckdosen in Wohn-/Schlafräumen und an den Pantryzeilen</li>
                  <li>Anschlussfertig für Zu-/Abwasser; Vorbereitung für Boiler/Heizung (optional)</li>
                </ul>
              </article>

              {/* Ausstattung */}
              <article className="ocms__card">
                <div className="ocms__cardHead">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="ocms__icon">
                    <path
                      d="M12 3l9 6-9 6-9-6 9-6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="ocms__cardTitle">Ausstattung</h3>
                </div>
                <ul className="ocms__list">
                  <li><strong>Stahlrahmen:</strong> Geschweißter Rahmen aus robustem Stahl (6058×2438&nbsp;mm)</li>
                  <li><strong>Türen:</strong> 2 Außentüren 880×2050&nbsp;mm (je Stirnseite)</li>
                  <li><strong>Fenster:</strong> Kunststoff-Kippfenster 900×1250&nbsp;mm zur natürlichen Lüftung (je Raum)</li>
                  <li><strong>Innenausbau:</strong> Gefliester Sanitärbereich, Trennwände zwischen den Räumen, pflegeleichter Boden im Wohnbereich</li>
                  <li><strong>Sanitärausstattung:</strong> 2 × Dusche, 1 × WC, 2 × Handwaschbecken</li>
                  <li><strong>Pantryzeilen:</strong> Spüle/Arbeitsfläche je Raum (optional mit Kochfeld/Kühlschrank)</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Galery />
      <Similar />
      <Form />
    </>
  );
}
