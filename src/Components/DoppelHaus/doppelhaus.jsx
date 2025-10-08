import React from "react";
import "./doppelhaus.css";
import Hero from "./Hero";
import Doppelhauser from "./2familien.webp";
import Warum from './WarumDoppelhaus'
import Fenster from './FensterKarten'
import Form from '../Reusable/formwizard'
import Bauweisen from '../Reusable/Bauweisen'

export default function Doppelhaus() {
  return (
    <>
      <Hero />

      <section className="doppelhaus" aria-labelledby="doppelhaus-title">
        <div className="dh__container" role="region" aria-describedby="doppelhaus-lead">
          <h1 id="doppelhaus-title" className="dh__title">
            Bau Doppelhaushälfte kompakt, effizient und familienfreundlich
          </h1>

          <p id="doppelhaus-lead" className="dh__lead">
            Der Bau Doppelhaushälfte ist eine attraktive Alternative zum
            freistehenden Einfamilienhaus – besonders in Zeiten von
            Nachverdichtung und begrenztem Baugrund.
          </p>
          <p className="dh__lead">
            Ob als Anbau an bestehende Gebäude oder auf innerstädtischen
            Grundstücken: Doppel-, Reihen- und Stadthäuser bieten vielfältige
            Möglichkeiten.
          </p>
          <p className="dh__lead">
            Unsere Entwürfe verbinden individuelle Architektur, flexible
            Grundrisse und unterschiedliche Größen – angepasst an regionale
            Vorschriften und Ihr Budget.
          </p>
          <p className="dh__lead dh__lead--last">
            Dabei profitieren Sie von der Erfahrung zahlreicher Kundenprojekte
            und der Expertise von Natural Wohnbau.
          </p>
        </div>
      </section>

      <section className="dhs" aria-labelledby="dhs-title">
        <div className="dhs__grid">
          {/* Kolona e majtë: Teksti */}
          <div className="dhs__col dhs__col--text">
            <h2 id="dhs-title" className="dhs__title">Doppelhäuser</h2>

            <p className="dhs__lead">
              Seite an Seite wohnen und dennoch volle Privatsphäre genießen – genau
              das bieten unsere Doppelhäuser. Diese Bauweise ermöglicht eine
              effiziente Raumnutzung, senkt Energiekosten und schafft ideale
              Wohnverhältnisse für Familien, Freunde oder generationsübergreifendes
              Wohnen.
            </p>
            <p className="dhs__lead dhs__lead--last">
              Flexibel, nachhaltig und perfekt für modernes Mehrfamilienleben.
              Natural Wohnbau sorgt dafür, dass Ihre Doppelhauslösung nicht nur
              funktional, sondern auch nachhaltig und zukunftssicher ist.
            </p>
          </div>

          {/* Kolona e djathtë: Imazhi */}
          <div className="dhs__col dhs__col--media">
            <img
              className="dhs__img"
              src={Doppelhauser}
              alt="Modernes Doppelhaus von Natural Wohnbau"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <Warum/>
      <Fenster/>
      <Form/>
      <Bauweisen/>
    </>
  );
}
