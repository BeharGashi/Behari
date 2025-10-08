import React from "react";
import "./ocm6004.css";
import Hero from './Hero'
import Plan from './Plan'
import Galery from './Galery'
import Similar from "../../../../Reusable/Similar"
import Form from "../../../../Reusable/formwizard"

export default function OCM6003() {
    return (
        <>
            <Hero />
            <section className="ocm" id="ocm3001" aria-labelledby="ocm-title">
                <div className="ocm__container">
                    {/* Header */}
                    <header className="ocm__header">
                        <span className="ocm__eyebrow">Mobiles Bürocontainer-Modul</span>
                        <h1 className="ocm__title" id="ocm-title">Typ OC-M600-4</h1>
                        <p className="ocm__subtitle">Kompakt. Flexibel. Sofort einsatzbereit.</p>
                    </header>

                    {/* Body */}
                    <div className="ocm__grid">
                        <div className="ocm__copy">
                            <p>
                                Der OC-M600-4 ist ein moderner Bürocontainer mit integriertem WC-Bereich.
                                Mit einem großzügigen Aufenthaltsbereich, Arbeitszone und separatem Sanitärraum eignet sich dieser Container ideal für längere Einsätze auf Baustellen, Industriearealen oder als mobiler Pausen- und Verwaltungsraum. Getrennt und effizient. Mit einer Fläche von <strong>14,76&nbsp;m²</strong>.
                            </p>
                        </div>

                        {/* Meta / Facts */}
                        <aside className="ocm__meta" aria-label="Kurzinfos zum Modell OC-M300-1">
                            <div className="ocm__metric" aria-label="Nutzfläche 7,31 Quadratmeter">
                                <span className="ocm__metricValue">
                                    14,76 <span className="ocm__metricUnit">m²</span>
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
                                        <dt>Typ</dt><dd>OC-M600-4</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Außenmaße</dt><dd>6058 × 2438&nbsp;mm</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Nutzfläche</dt><dd>14,76 m²&nbsp;m²</dd>
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
                                    <li><strong>Stahlrahmen:</strong> Geschweißter Rahmen aus robustem Stahl (6058×2438&nbsp;mm)</li>
                                    <li><strong>Tür:</strong> 1 Aluminiumtüren 880×2050&nbsp;mm (Haupteingang)</li>
                                    <li><strong>Tür:</strong> 1 Aluminiumtür 680×2050 mm&nbsp;mm (Sanitärbereich)</li>
                                    <li><strong>Fenster:</strong> 1 Kunststofffenster 2050×1450 mm (Aufenthaltsbereich)</li>
                                    <li><strong>Fenster:</strong> 1 Kunststofffenster 600×600 mm (WC-Bereich)</li>
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
                                    <li><strong>Kombinierter Büro- & Sanitärcontainer:</strong> Funktionell & hygienisch</li>
                                    <li><strong>Perfekt für lange Einsätze:</strong>Aufenthaltsbereich, Arbeitstisch, Sanitärraum</li>
                                    <li><strong>Einfacher Transport & Aufstellung:</strong>Kran- und Staplervorrichtung vorhanden</li>
                                    <li><strong>Sofort einsatzbereit:</strong>Komplett vorinstalliert – Elektrik & Sanitär</li>
                                    <li><strong>Individuelle Nutzung:</strong>Bauleitung, Besprechungsraum, Kontrollstation uvm.</li>
                                    <li><strong>Optional auf Anfrage:</strong> Möblierung, Klimaanlage, Heizung, zusätzliche Fenster/Türen, individuelle Farbgestaltung</li>
                                </ul>
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
                                    <li>Verteilungstafel mit 4 Sicherungsautomaten</li>
                                    <li>2 Steckdose</li>
                                    <li>2 Lichtschalter</li>
                                    <li>2 LED-Deckenleuchte</li>
                                    <li>Schräg montierte Wandsteckdose</li>
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
