import React from "react";
import "./ocm3001.css";
import Hero from './Hero'
import Plan from './Plan'
import Galery from './Galery'
import Similar from "../Schlafcontainer/Similar"
import Form from "../../../Reusable/formwizard"

export default function DCM6004() {
  return (
    <>
      <Hero />
      <section className="ocm" id="ocm3001" aria-labelledby="ocm-title">
        <div className="ocm__container">
          {/* Header */}
          <header className="ocm__header">
            <span className="ocm__eyebrow">Mobiles Schlafcontainer-Modul</span>
            <h1 className="ocm__title" id="ocm-title">Typ SchC-M600-4</h1>
            <p className="ocm__subtitle">Kompakt. Flexibel. Sofort einsatzbereit.</p>
          </header>

          {/* Body */}
          <div className="ocm__grid">
            <div className="ocm__copy">
              <p>
                Der SchC-M600-4 ist ein hochwertiges Schlafcontainer-Modul mit
                zwei separaten Schlafbereichen und einem zentralen Zugang.
                Auf der rechten Seite befinden sich <strong>zwei vollständig
                abgetrennte Nasszellen</strong> – jeweils mit Dusche, WC und
                Handwaschbecken – für maximale Privatsphäre und Komfort.
              </p>
              <p>
                Mit einer Nutzfläche von <strong>44,31&nbsp;m²</strong> eignet
                sich das Modul ideal für Baustellen, Camps, Events oder temporäre
                Unterkünfte. Robuste Konstruktion, helle Oberflächen und
                anschlussfertige Zu-/Abwasser- und Elektroinstallation sorgen
                für einen schnellen und hygienischen Betrieb.
              </p>
            </div>

            {/* Meta / Facts */}
            <aside className="ocm__meta" aria-label="Kurzinfos zum Modell SchC-M600-4">
              <div className="ocm__metric" aria-label="Nutzfläche 14,78 Quadratmeter">
                <span className="ocm__metricValue">
                  44,31 <span className="ocm__metricUnit">m²</span>
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
                    <dt>Typ</dt><dd>SchC-M600-4</dd>
                  </div>
                  <div className="ocms__row">
                    <dt>Außenmaße</dt><dd>6058 × 2438&nbsp;mm</dd>
                  </div>
                  <div className="ocms__row">
                    <dt>Nutzfläche</dt><dd>14,78&nbsp;m²</dd>
                  </div>
                  <div className="ocms__row">
                    <dt>Farbe</dt><dd>RAL&nbsp;9002 (Weißgrau)</dd>
                  </div>
                </dl>
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
                  <li><strong>Stahlrahmen:</strong> Geschweißter Rahmen aus robustem Stahl</li>
                  <li><strong>Tür:</strong> 1 Außentür 880×2050&nbsp;mm; mehrere Innentüren 880×2050&nbsp;mm</li>
                  <li><strong>Fenster:</strong> 2 Kunststoff-Kippfenster 900×1250&nbsp;mm zur natürlichen Belüftung</li>
                  <li><strong>Innenausbau:</strong> Wohnbereiche mit strapazierfähigem Boden; geflieste Nasszellen</li>
                  <li><strong>Sanitärausstattung:</strong> 2× Dusche, 2× WC, 2× Handwaschbecken</li>
                </ul>
              </article>
            </div>

            <div className="ocms__card_container">
              {/* Elektrik */}
              <article className="ocms__card">
                <div className="ocms__cardHead">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="ocms__icon">
                    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="ocms__cardTitle">Elektrik</h3>
                </div>
                <ul className="ocms__list">
                  <li>Verteilungstafel mit FI/LS-Schutz</li>
                  <li>LED-Deckenleuchten in Wohn- und Nassbereichen</li>
                  <li>Lichtschalter (je Bereich) & mehrere 230-V-Steckdosen</li>
                  <li>Anschlussfertig für Zu-/Abwasser; Vorbereitung für Boiler/Heizung (optional)</li>
                </ul>
              </article>

              {/* Besondere Merkmale */}
              <article className="ocmss__card">
                <div className="ocmss__cardHead">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="ocms__icon">
                    <path d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2Zm-2 11 2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="ocmss__cardTitle">Besondere Merkmale</h3>
                </div>
                <ul className="ocmss__list">
                  <li><strong>2 getrennte Dusch-WCs:</strong> Jede Nasszelle mit Dusche, WC und Waschtisch</li>
                  <li><strong>Getrennter Mittelgang:</strong> Direkter Zugang zu beiden Schlafräumen</li>
                  <li><strong>Hygienisch & pflegeleicht:</strong> Geflieste Nasszellen, helle, leicht zu reinigende Oberflächen</li>
                  <li><strong>Robust & wetterbeständig:</strong> Für den Innen- und Außeneinsatz geeignet</li>
                  <li><strong>Optional auf Anfrage:</strong> Möblierung, Küchenblock, Klimaanlage/Heizung, zusätzliche Fenster/Türen, Wunschfarbe</li>
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
