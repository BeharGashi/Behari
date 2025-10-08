import React from "react";
import "./ocm3001.css";
import Hero from './Hero'
import Plan from './Plan'
import Galery from './Galery'
import Similar from "../Schlafcontainer/Similar"
import Form from "../../../Reusable/formwizard"

export default function OCM3001() {
  return (
    <>
      <Hero />
      <section className="ocm" id="ocm3001" aria-labelledby="ocm-title">
        <div className="ocm__container">
          {/* Header */}
          <header className="ocm__header">
            <span className="ocm__eyebrow">Mobiles Schlafcontainer-Modul</span>
            <h1 className="ocm__title" id="ocm-title">Typ SchC-M600-2</h1>
            <p className="ocm__subtitle">Kompakt. Flexibel. Sofort einsatzbereit.</p>
          </header>

          {/* Body */}
          <div className="ocm__grid">
            <div className="ocm__copy">
              <p>
                Der SchC-M600-2 ist ein voll ausgestatteter Schlafcontainer mit
                <strong> zwei Betten</strong>, Ess-/Arbeitsbereich und
                <strong> separatem Bad</strong> mit Dusche, WC und Handwaschbecken.
                Mit seiner robusten Bauweise eignet er sich ideal für Baustellen,
                Camps, Events und temporäre Unterkünfte.
              </p>
              <p>
                Der Grundriss bietet viel Stauraum (Schrankzeile), ein großes
                Fenster im Aufenthaltsbereich sowie ein Kippfenster im Bad für
                natürliche Belüftung. Alle Oberflächen sind hell, hygienisch und
                leicht zu reinigen.
              </p>
            </div>

            {/* Meta / Facts */}
            <aside className="ocm__meta" aria-label="Kurzinfos zum Modell SchC-M600-2">
              <div className="ocm__metric" aria-label="Nutzfläche 14,77 Quadratmeter">
                <span className="ocm__metricValue">
                  14,77 <span className="ocm__metricUnit">m²</span>
                </span>
                <span className="ocm__metricLabel">Nutzfläche</span>
              </div>

              <ul className="ocm__badges" aria-label="Highlights">
                <li className="ocm__badge">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Kompakt
                </li>
                <li className="ocm__badge">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16M12 4v16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Flexibel
                </li>
                <li className="ocm__badge">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
            <h2 className="ocms__title" id="ocms-title">Technische Daten & Merkmale</h2>
          </header>

          <div className="ocms__grid">
            <div className="ocms__card_container">

              {/* Technische Daten */}
              <article className="ocms__card">
                <div className="ocms__cardHead">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="ocms__icon">
                    <path d="M3 7h18M3 12h18M3 17h18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <h3 className="ocms__cardTitle">Technische Daten</h3>
                </div>
                <dl className="ocms__dl">
                  <div className="ocms__row">
                    <dt>Typ</dt><dd>SchC-M600-2</dd>
                  </div>
                  <div className="ocms__row">
                    <dt>Außenmaße</dt><dd>6058 × 2438&nbsp;mm</dd>
                  </div>
                  <div className="ocms__row">
                    <dt>Nutzfläche</dt><dd>14,77&nbsp;m²</dd>
                  </div>
                  <div className="ocms__row">
                    <dt>Farbe</dt><dd>RAL&nbsp;9002 (Weißgrau)</dd>
                  </div>
                </dl>
              </article>

              <article className="ocmss__card">
                <div className="ocmss__cardHead">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="ocms__icon">
                    <path d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2Zm-2 11 2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="ocmss__cardTitle">Besondere Merkmale</h3>
                </div>
                <ul className="ocmss__list">
                  <li><strong>2 Schlafplätze:</strong> Einzelbetten, Tisch mit 2 Stühlen und Schrankzeile</li>
                  <li><strong>Eigenes Bad:</strong> Dusche, WC und Handwaschbecken</li>
                  <li><strong>Hygienisch & pflegeleicht:</strong> Glatte, leicht zu reinigende Oberflächen</li>
                  <li><strong>Langlebig & wetterbeständig:</strong> Für den Innen- und Außeneinsatz geeignet</li>
                  <li><strong>Optional auf Anfrage:</strong> Möblierungspaket, Klimaanlage/Heizung, zusätzliche Fenster/Türen, Sonderfarbe</li>
                </ul>
              </article>
            </div>

            <div className="ocms__card_container">
              {/* Besondere Merkmale */}
              <article className="ocms__card">
                <div className="ocms__cardHead">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="ocms__icon">
                    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="ocms__cardTitle">Elektrik</h3>
                </div>
                <ul className="ocms__list">
                  <li>Verteilungstafel mit FI/LS-Schutz</li>
                  <li>3–4 Steckdosen im Wohnbereich + 1 Steckdose (IP44) im Bad</li>
                  <li>2 Lichtschalter (Wohnraum/Bad)</li>
                  <li>2 LED-Deckenleuchten im Wohnraum + 1 Einbauspot im Bad</li>
                  <li>Vorbereitung für Elektroheizung/Klimagerät (optional)</li>
                </ul>
              </article>

              {/* Ausstattung */}
              <article className="ocms__card">
                <div className="ocms__cardHead">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="ocms__icon">
                    <path d="M12 3l9 6-9 6-9-6 9-6Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="ocms__cardTitle">Ausstattung</h3>
                </div>
                <ul className="ocms__list">
                  <li><strong>Stahlrahmen:</strong> Geschweißter Rahmen aus robustem Stahl (6058×2438&nbsp;mm)</li>
                  <li><strong>Türen:</strong> 1 Außentür 880×2050&nbsp;mm; 1 Innentür zum Bad 680×2050&nbsp;mm</li>
                  <li><strong>Fenster:</strong> 1 × 900×1250&nbsp;mm im Wohnbereich; 1 × Kippfenster 600×600&nbsp;mm im Bad</li>
                  <li><strong>Innenausbau:</strong> Wohnbereich mit strapazierfähigem Boden; Bad mit gefliesten Wänden/Boden</li>
                  <li><strong>Sanitärausstattung:</strong> Dusche, WC, Handwaschbecken mit Armaturen</li>
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
