import React from "react";
import "./Hero.css";
import Hut1 from './hutspace1.webp'
import Hut2 from './hutspace3.webp'

export default function Hero() {
    return (
        <section
            className="hero"
            style={{
                // VENDOS URL-në e fotos së sfondit këtu
                backgroundImage: `url(${Hut1})`
            }}
        >
            <div className="hero__inner">
                                <div className="hero__visual">
                    {/* Foto rrethore */}
                    <div className="circle">
                        <img
                            src={Hut2}
                            alt="Plant"
                        />
                    </div>

                    {/* Harku i gjelbër me animim */}
                    <svg className="arc" viewBox=" -50 -50 100 100" aria-hidden="true">
                        <path
                            d="M -46.5 0 A 46.5 46.5 0 1 1 46.5 0"
                            fill="none"
                            stroke="#D6B349"
                            strokeWidth="7"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <div className="hero__text">
                    <p>Individuell wohnen, modular gebau</p>
                    <h1>
                        Modulares Haus aus Holz <br />
                        flexibel, schnell & nachhaltig
                    </h1>
                    <p>
                        Ein modulares Haus bietet volle Gestaltungsfreiheit bei maximaler Effizienz.
Nachhaltig gebaut, anpassbar in Größe und Design – perfekt für modernes Wohnen.
                    </p>
                    <button className="btn">Angebot anfordern</button>
                </div>
            </div>
        </section>
    );
}
