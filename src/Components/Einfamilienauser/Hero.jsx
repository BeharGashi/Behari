import React from "react";
import "./Hero.css";
import Einfam from '../../images/einfamilenhauus.jpg'

export default function Hero() {
    return (
        <section
            className="hero"
            style={{
                // VENDOS URL-në e fotos së sfondit këtu
                backgroundImage: `url(${Einfam})`
            }}
        >
            <div className="hero__inner">
                <div className="hero__text">
                    <p>Individuell geplant. Natürlich gebaut.</p>
                    <h1>
                        Das perfekte <br />
                        Einfamilienhaus
                    </h1>
                    <p>
                        Nachhaltig, komfortabel und ganz nach Ihren Wünschen geplant
für ein Zuhause, das perfekt zu Ihnen passt!
                    </p>
                    <button className="btn">Request a Quote</button>
                </div>

                <div className="hero__visual">
                    {/* Foto rrethore */}
                    <div className="circle">
                        <img
                            src={Einfam}
                            alt="Plant"
                        />
                    </div>

                    {/* Harku i gjelbër me animim */}
                    <svg className="arc" viewBox="-50 -50 100 100" aria-hidden="true">
                        <path
                            d="M -46.5 0 A 46.5 46.5 0 1 1 46.5 0"
                            fill="none"
                            stroke="#D6B349"
                            strokeWidth="7"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
