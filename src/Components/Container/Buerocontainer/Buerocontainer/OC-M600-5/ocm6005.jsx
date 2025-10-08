import React from "react";
import "./ocm6005.css";
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
                        <h1 className="ocm__title" id="ocm-title">Typ OC-M600-5</h1>
                        <p className="ocm__subtitle">Großraumbüro oder Konferenzcontainer.</p>
                    </header>

                    {/* Body */}
                    <div className="ocm__grid">
                        <div className="ocm__copy">
                            <p>
                                Der OC-M600-5 besteht aus zwei miteinander verbundenen Containermodulen und bietet eine großzügige Nutzfläche von <strong>29.53&nbsp;m²</strong>– ideal für Konferenzräume, Besprechungsräume, Teamarbeitsplätze oder Schulungsbereiche.
Die durchgehende Fläche sorgt für Flexibilität in der Nutzung und ein offenes, professionelles Ambiente..
                            </p>
                        </div>

                        {/* Meta / Facts */}
                        <aside className="ocm__meta" aria-label="Kurzinfos zum Modell OC-M300-1">
                            <div className="ocm__metric" aria-label="Nutzfläche 7,31 Quadratmeter">
                                <span className="ocm__metricValue">
                                    29.53 <span className="ocm__metricUnit">m²</span>
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
                                        <dt>Typ</dt><dd>OC-M600-5</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Außenmaße</dt><dd>6058 × 4876&nbsp;mm</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Nutzfläche</dt><dd>29,53 m²&nbsp;m²</dd>
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
                                    <li>Verteilungstafel mit 4 Sicherungsautomaten</li>
                                    <li>2 Steckdose</li>
                                    <li> Lichtschalter</li>
                                    <li>2 LED-Deckenleuchte</li>
                                    <li>Schräg montierte Wandsteckdose</li>
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
                                    <li><strong>Doppelmodul:</strong> Durchgehende Innenfläche – ideal für Konferenzen oder größere Arbeitsgruppen</li>
                                    <li><strong>Heller & offener Raum:</strong>Dank großer Fensterflächen
Stabile Konstruktion: Mit hoher Langlebigkeit</li>
                                    <li><strong>Einfacher Transport & Aufstellung:</strong>Kran- und Staplervorrichtung vorhanden</li>
                                    <li><strong>Stabile Konstruktion:</strong>Mit hoher Langlebigkeit</li>
                                    <li><strong>Individuelle Nutzung:</strong>Schulungsraum, Showroom, Gemeinschaftsbüro</li>
                                    <li><strong>Optional auf Anfrage:</strong> Möblierung, Klimaanlage, Heizung, zusätzliche Fenster/Türen, individuelle Farbgestaltung</li>
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
                                    <li><strong>Stahlrahmen:</strong> 2 geschweißte Stahlrahmen 6058×2438 mm </li>
                                    <li><strong>Tür:</strong> 1 Aluminiumtür 880×2050 mm (RAL 9002)</li>
                                    <li><strong>Fenster:</strong> 2 Kunststofffenster 2050×1450 mm (RAL 9002)</li>
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
