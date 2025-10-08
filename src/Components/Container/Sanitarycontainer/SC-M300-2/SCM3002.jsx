import React from "react";
import "./SCM3002.css";
import Hero from './Hero'
import Plan from './Plan'
import Galery from './Galery'
import Similar from "../../../Reusable/ahnliche"
import Form from "../../../Reusable/formwizard"

export default function OCM6003() {
    return (
        <>
            <Hero />
            <section className="ocm" id="ocm3001" aria-labelledby="ocm-title">
                <div className="ocm__container">
                    {/* Header */}
                    <header className="ocm__header">
                        <span className="ocm__eyebrow">Mobiles Sanitärcontainer-Modul</span>
                        <h1 className="ocm__title" id="ocm-title">Typ SC-M300-2</h1>
                        <p className="ocm__subtitle">WC-Container mit 2 Kabinen + Urinal.</p>
                    </header>

                    {/* Body */}
                    <div className="ocm__grid">
                        <div className="ocm__copy">
                            <p>
                                Der SC-M300-2 kombiniert zwei separate WC-Kabinen mit einem Urinalbereich und vorgelagertem Doppelwaschbecken. Mit einer Nutzfläche von <strong>7.31&nbsp;m²</strong>ist er ideal für Baustellen, Events und temporäre Standorte. Helle, pflegeleichte Oberflächen, Kippfenster zur natürlichen Lüftung und anschlussfertige Zu-/Abwassertechnik ermöglichen eine schnelle, hygienische Inbetriebnahme.
                            </p>
                        </div>

                        {/* Meta / Facts */}
                        <aside className="ocm__meta" aria-label="Kurzinfos zum Modell OC-M300-1">
                            <div className="ocm__metric" aria-label="Nutzfläche 7,31 Quadratmeter">
                                <span className="ocm__metricValue">
                                    7.31 <span className="ocm__metricUnit">m²</span>
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
                                        <dt>Typ</dt><dd>SC-M300-2</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Außenmaße</dt><dd>3000 × 2438&nbsp;mm</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Nutzfläche</dt><dd>7,31 &nbsp;m²</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Kabinen</dt><dd>2 × WC, 1 × Urinal</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Waschtisch</dt><dd>Doppelwaschbecken</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Farbe</dt><dd>RAL&nbsp;9002 (Weißgrau)</dd>
                                    </div>
                                </dl>
                            </article>
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
                                    <li>LED-Deckenbeleuchtung im Raum</li>
                                    <li>Lichtschalter im Eingangsbereich</li>
                                    <li>Steckdosen im Bereich des Waschtischs</li>
                                    <li>Vorbereitung für Warmwasser</li>
                                </ul>
                            </article>
                        </div>
                        <div className="ocms__card_container">
                            {/* Besondere Merkmale */}
                            <article className="ocmss__card">
                                <div className="ocmss__cardHead">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="ocms__icon">
                                        <path d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2Zm-2 11 2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h3 className="ocmss__cardTitle">Besondere Merkmale</h3>
                                </div>
                                <ul className="ocmss__list">
                                    <li><strong>Optimierte Kapazität:</strong> Zwei WC-Kabinen plus Urinal für hohe Frequenz</li>
                                    <li><strong>Sofort betriebsbereit:</strong>Vorinstallierte Sanitär- und Elektroinstallation</li>
                                    <li><strong>Hygienisch & pflegeleicht:</strong>Glatte, leicht zu reinigende Oberflächen</li>
                                    <li><strong>Langlebig & wetterbeständig:</strong>Geeignet für Innen- und Außeneinsatz</li>
                                    <li><strong>Optional auf Anfrage:</strong> Warmwasserboiler, Frostschutzheizung, Zubehör (Spiegel, Seifen-/Papierhalter), zusätzliche Fenster/Türen, individuelle Farbgestaltung</li>
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
                                    <li><strong>Stahlrahmen:</strong> Geschweißter, robuster Rahmen (stapel- & kranbar)</li>
                                    <li><strong>Wände/Boden:</strong> Helle, pflegeleichte Fliesen; Trennwände zwischen den Kabinen</li>
                                    <li><strong>Tür:</strong> 1 Außentür 880 × 2050 mm; 2 Innentüren für WC-Kabinen</li>
                                    <li><strong>Fenster:</strong> 3 Kippfenster zur natürlichen Lüftung (Rückseite)</li>
                                    <li><strong>Sanitär:</strong> 2 WC, 1 Keramik-Urinal (Urinalbereich mit Spritzschutz), 1 Doppelwaschbecken mit Armaturen</li>
                                    <li><strong>Installation:</strong> Anschlussfertig für Zu- und Abwasser</li>
                                </ul>
                            </article>


                        </div>
                    </div >
                </div >
            </section >
            <Galery />
            <Similar />
            <Form />
        </>
    );
}
