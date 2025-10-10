import React from "react";
import "./Hero.css";
import Einfam from "../../images/einfamilenhauus.jpg";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${Einfam})` }}
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
            <img src={Einfam} alt="Einfamilienhaus" />
          </div>

          {/* Harku i artë – i klipuar fiks brenda rrethit */}
          <svg
            className="arc"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <clipPath id="heroClip">
                <circle cx="50" cy="50" r="50" />
              </clipPath>
            </defs>

            <g clipPath="url(#heroClip)">
              {/* strokeWidth=8 ⇒ r ≈ 50 - 8/2 = 46; shto 0.25 për të shmangur “boshllëkun” vizual */}
              <circle
                className="arc-path"
                cx="50"
                cy="50"
                r="46.25"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
