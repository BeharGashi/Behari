import React from "react";
import "./SCM6007.css";
import Hero from './Hero'
import Plan from './Plan'
import Galery from './Galery'
import Similar from "../../../Reusable/ahnliche"
import Form from "../../../Reusable/formwizard"

export default function SCM6007() {
    return (
        <>
            <Hero />
            <section className="ocm" id="ocm3001" aria-labelledby="ocm-title">
                <div className="ocm__container">
                    {/* Header */}
                    <header className="ocm__header">
                        <span className="ocm__eyebrow">Mobiles Sanitärcontainer-Modul</span>
                        <h1 className="ocm__title" id="ocm-title">Typ SC-M600-7</h1>
                        <p className="ocm__subtitle">WC- & Duschcontainer</p>
                    </header>

                    {/* Body */}
                    <div className="ocm__grid">
                        <div className="ocm__copy">
                            <p>
                                Der SC-M600-7 besteht aus zwei verbundenen Modulen mit zwei separaten Eingängen. Oben: 12 WC-Kabinen (6 je Modul) mit durchgehender Waschplatzzeile; unten: 10 Duschkabinen (5 je Modul) mit vorgelagerten Waschbecken. Mit <strong>58,88&nbsp;m²</strong>ist er ideal für Großbaustellen, Camps und Events. Helle, pflegeleichte Oberflächen, Kippfenster zur natürlichen Lüftung und anschlussfertige Zu-/Abwassertechnik ermöglichen eine schnelle, hygienische Inbetriebnahme.
                                </p>
                        </div>

                        {/* Meta / Facts */}
                        <aside className="ocm__meta" aria-label="Kurzinfos zum Modell OC-M300-1">
                            <div className="ocm__metric" aria-label="Nutzfläche 7,31 Quadratmeter">
                                <span className="ocm__metricValue">
                                    58,88 <span className="ocm__metricUnit">m²</span>
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
                                        <dt>Typ:</dt><dd> SC-M600-7 (Doppelmodul)</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Außenmaße</dt><dd> 12.116 × 4.876&nbsp;mm</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Nutzfläche</dt><dd> 58,88 &nbsp;m²</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Aufteilung</dt><dd> 12 × WC-Kabinen, 10 × Duschkabinen; beidseitige Waschplatzzeilen</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Eingänge</dt><dd> 2 (links/rechts) – Bereiche separat nutzbar</dd>
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
                                    <li><strong>Sehr hohe Kapazität auf kompakter Grundfläche</strong></li>
                                    <li><strong>Parallele Nutzung & klare Wegeführung dank zwei Eingängen</strong></li>
                                    <li><strong>Sofort betriebsbereit:</strong>Vorinstallierte Sanitär- und Elektroinstallation</li>
                                    <li><strong>Hygienisch & pflegeleicht:</strong>Glatte, widerstandsfähige Oberflächen</li>
                                    <li><strong>anglebig & wetterbeständig:</strong>Für Innen- und Außeneinsatz</li>
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
                                    <li><strong>Innenausbau:</strong> Helle, pflegeleichte Fliesen; Trennwände je Kabine</li>
                                    <li><strong>Tür:</strong> Außentüren 880 × 2050 mm; Innentüren für WC; Duschabteile mit Vorhängen</li>
                                    <li><strong>Fenster:</strong> Mehrere Kippfenster je Zone zur natürlichen Lüftung</li>
                                    <li><strong>Sanitär:</strong> WC-/Urinalbereiche, 4 Duschplätze mit Brausearmaturen, Waschplätze mit Mischbatterien</li>
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
