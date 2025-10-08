import React from "react";
import "./LCM6004.css";
import Hero from './Hero'
import Plan from './Plan'
import Galery from './Galery'
import Similar from "../Similar"
import Form from "../../../Reusable/formwizard"

export default function LCM6004() {
    return (
        <>
            <Hero />
            <section className="ocm" id="ocm3001" aria-labelledby="ocm-title">
                <div className="ocm__container">
                    {/* Header */}
                    <header className="ocm__header">
                        <span className="ocm__eyebrow">Mobiles Umkleide-/Duschcontainer-Modul</span>
                        <h1 className="ocm__title" id="ocm-title">Typ UC-M600-4</h1>
                        <p className="ocm__subtitle">2 Duschplätze (mit Vorhang) + 2 Umkleidekabinen</p>
                    </header>

                    {/* Body */}
                    <div className="ocm__grid">
                        <div className="ocm__copy">
                            <p>
                                Das UC-M600-4 kombiniert zwei separate Duschplätze mit zwei geschlossenen Umkleidekabinen – perfekt für Baustellen, Camps, Sportanlagen oder Events. Die klare Trennung sorgt für Privatsphäre und einen zügigen Ablauf bei Spitzenzeiten.
                                </p>    
                        </div>

                        {/* Meta / Facts */}
                        <aside className="ocm__meta" aria-label="Umkleide mit 2 Duschen, WC & Spinde">
                            <div className="ocm__metric" aria-label="Nutzfläche 14,76 Quadratmeter">
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
                                        <dt>Typ:</dt><dd>UC-M600-4</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Außenmaße:</dt><dd>6058 × 2438&nbsp;mm</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Nutzfläche:</dt><dd>14,76&nbsp;m²</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Aufteilung:</dt><dd>RAL&nbsp;9002 (Weißgrau)</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Farbe:</dt><dd>RAL&nbsp;9002 (Weißgrau)</dd>
                                    </div>
                                </dl>
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
                                    <li><strong>Flexible Nutzung:</strong> Umkleide und Duschen klar getrennt</li>
                                    <li><strong>Sofort betriebsbereit:</strong> Werkseitig vorinstallierte Elektro- und Sanitärtechnik</li>
                                    <li><strong>Langlebig & pflegeleicht:</strong> Für Innen-/Außeneinsatz</li>
                                    <li><strong>Einfacher Transport:</strong> Stapelbar, kran- und gabelstaplertauglich</li>
                                    <li><strong><i>Optional auf Anfrage</i>:</strong> Elektro-Boiler/WW-Aufbereitung, Lüftung, zusätzliche Fenster/Türen, Möblierung, individuelle Farbgestaltung</li>
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
                                    <li>Verteilungstafel mit 6 Sicherungsautomaten</li>
                                    <li>2 LED-Feuchtraumleuchten</li>
                                    <li>1 Lichtschalter, 2 Steckdosen</li>
                                    <li>2 LED-Deckenleuchten (Feuchtraum)</li>
                                    <li><strong>Schutzleiter/Fi-Schutzschalter gemäß geltenden Normen</strong></li>
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
                                    <li><strong>Stahlrahmen:</strong> Geschweißte, stapel- und kranbare Konstruktion</li>
                                    <li><strong>Sofort betriebsbereit:</strong> Werkseitig vorinstallierte Elektro- und Sanitärtechnik</li>
                                    <li><strong>Tür:</strong> Aluminiumtür ca. 880 × 2 050 mm (RAL 9002)</li>
                                    <li><strong>Fenster:</strong> 2 Kunststoff-Kippfenster ca. 600 × 600 mm (RAL 9002)</li>
                                    <li><strong>Langlebig & wetterbeständig:</strong> Für Innen- und Außeneinsatz</li>
                                    <li><strong>Vielseitige Einsatzbereiche:</strong> Mannschaftsräume, Sportvereine, Events, Industrie</li>
                                    <li><strong>Optionen:</strong> Zusätzliche Spinde/Bänke, mehr Duschen, Boiler/Warmwasser, Heizung/Klimaanlage, individuelle Farbgestaltung</li>
                                    </ul>
                            </article>
                        </div>
                    </div >
                </div >
            </section >
            <Galery/>
            <Similar/>
            <Form/>
        </>
    );
}
