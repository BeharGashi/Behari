import React from "react";
import "./LCM6001.css";
import Hero from './Hero'
import Plan from './Plan'
import Galery from './Galery'
import Similar from "../Similar"
import Form from "../../../Reusable/formwizard"

export default function LCM6002() {
    return (
        <>
            <Hero />
            <section className="ocm" id="ocm3001" aria-labelledby="ocm-title">
                <div className="ocm__container">
                    {/* Header */}
                    <header className="ocm__header">
                        <span className="ocm__eyebrow">Mobiles Umkleidecontainer-Modul</span>
                        <h1 className="ocm__title" id="ocm-title">Typ UC-M600-1</h1>
                        <p className="ocm__subtitle">Große Umkleide mit Spinden & Sitzbänken.</p>
                    </header>

                    {/* Body */}
                    <div className="ocm__grid">
                        <div className="ocm__copy">
                            <p>
                                Der UC-M600-1 bietet viel Stauraum auf 14,76 m² (Außenmaß 6,06 × 2,44 m): beidseitige Spindzeilen über die gesamte Länge sowie drei zentrale Sitzbänke sorgen für geordnetes Umkleiden selbst bei höherem Personenaufkommen. Ideal für Baustellen, Sport- & Eventbereiche oder temporäre Unterkünfte.
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
                                        <dt>Typ:</dt><dd>UC-M600-1</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Außenmaße:</dt><dd>6058 × 2438&nbsp;mm</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Nutzfläche:</dt><dd>14,76&nbsp;m²</dd>
                                    </div>
                                    <div className="ocms__row">
                                        <dt>Aufteilung:</dt><dd>Spindzeilen links/rechts, 3 Sitzbänke mittig</dd>
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
                                    <li><strong>Hohe Umkleidekapazität:</strong> Dank voller Spindlänge und 3 Sitzbänken</li>
                                    <li><strong>Sofort betriebsbereit:</strong> Vorinstallierte Elektrokomponenten</li>
                                    <li><strong>Langlebig & pflegeleicht:</strong> Für intensiven Innen-/Außeneinsatz</li>
                                    <li><strong>Individuell anpassbar:</strong> Spindanzahl/-größe, Banklayout, Klima/Heizung, Farbgestaltung</li>
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
                                    <li>LED-Deckenbeleuchtung</li>
                                    <li>Lichtschalter im Eingangsbereich</li>
                                    <li>Steckdosen (z. B. fürs Reinigen/kleine Geräte)</li>
                                    <li><strong><i>*Optional: Heizung/Klimagerät, Zusatzsteckdosen</i></strong></li>
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
                                    <li><strong>Stahlrahmen:</strong> Geschweißter Rahmen aus robustem Stahl (3000×2438&nbsp;mm)</li>
                                    <li><strong>Innenausbau:</strong> Helle, pflegeleichte Oberflächen; widerstandsfähiger Boden</li>
                                    <li><strong>Tür:</strong> 1 Außentür 880 × 2050 mm</li>
                                    <li><strong>Fenster:</strong> 1 Kippfenster zur natürlichen Lüftung</li>
                                    <li><strong>Möblierung:</strong> Zahlreiche abschließbare Spinde; 3 stabile Sitzbänke</li>
                                    <li><strong>Optionen:</strong> Duschplatz mit Brausearmatur, WC, Waschbecken mit Mischbatterie</li>
                                    <li><strong>Installation:</strong> Haken-/Ablageleisten, zusätzliche Fenster/Türen, Sonderfarbe</li>
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
