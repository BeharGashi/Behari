import React from "react";
import "./Wandaufbau.css";
import WandaufbauImg from "./Wandaufbau.webp";
import Hero from "./WandaufbauHero"
import Energiesparwand from "./Energiesparwand.webp"
import Klima from './Klima.webp'
import Klimaplus from './Klimaplus.webp'
import Warm from './warm.jpg'
import Form from "../../Reusable/formwizard"


const cards = [
  {
    eyebrow: "Thermo Protect 40",
    title: "Energiesparwand",
    tagline: "Die inneren Werte zählen",
    text: `Unsere Basis-Energiesparwand bietet ein Optimum an Wärmedämmung für dein Haus, 
mit höchstem Dämmwert und besten Konstruktionseigenschaften. Sie sorgt für ein angenehmes Wohngefühl 
über Generationen und niedrige Heizkosten – und das serienmäßig ein Leben lang! 
Sie entspricht sogar dem Passivhausstandard.`,
    stats: [
      { value: "0,099 W/m²K", label: "U-Wert" },
      { value: "401 mm", label: "gesamte Wandstärke" },
    ],
    img: Energiesparwand,
    alt: "Thermo Protect 40 – Energiesparwand",
  },
  {
    eyebrow: "Thermo Protect 40",
    title: "Klima",
    tagline: "Atmosphäre kommt von Atmen",
    text: `Natürliche Materialien wie Steinwolldämmplatten und diffusionsoffener Außenputz sorgen 
für eine optimale Innenraum-Atmosphäre. Das Ergebnis: optimale Behaglichkeit und Energieersparnis! 
Du sparst Energiekosten und schonen die Umwelt über viele Jahre hinweg.`,
    stats: [
      { value: "0,111 W/m²K", label: "U-Wert" },
      { value: "401 mm", label: "gesamte Wandstärke" },
    ],
    img: Klima,
    alt: "Thermo Protect 40 – Klima",
  },
  {
    eyebrow: "Thermo Protect 40",
    title: "Klima Plus",
    tagline: "Nachhaltiges Bauen im Trend",
    text: `Ökologische Grundstoffe und atmungsaktive Materialien verbessern das Raumklima 
und schaffen viel Behaglichkeit. Als Beitrag zum Klimaschutz setzen unsere Wandaufbauten auf den Baustoff Holz, 
denn er bindet das klimaschädliche Kohlendioxid. Im Durchschnitt bindet ein Haas Haus so ganze 30 Tonnen Kohlendioxid!`,
    stats: [
      { value: "0,113 W/m²K", label: "U-Wert" },
      { value: "401 mm", label: "gesamte Wandstärke" },
    ],
    img: Klimaplus,
    alt: "Thermo Protect 40 – Klima Plus",
  },
];

export default function Wandaufbau() {
  return (
    <>
      <Hero />
      <section className="wandaufbau" aria-labelledby="wandaufbau-title">
        <div className="wandaufbau__container">
          {/* Imazhi me kornizë në anën e majtë */}
          <div className="wandaufbau__imagewrap">
            <div className="wandaufbau__frame">
              <img
                src={WandaufbauImg}
                alt="Wandaufbau – Schichtenaufbau der Natural Wohnbau Energiesparwände"
                className="wandaufbau__img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Blloku i tekstit me shirit vertikal gold */}
          <div className="wandaufbau__content">
            <span className="wandaufbau__eyebrow">Wandaufbau</span>
            <h2 id="wandaufbau-title" className="wandaufbau__title">
              Mit Natural Wohnbau rundherum geschützt
            </h2>

            <p className="wandaufbau__lead">
              Natural Wohnbau Energiesparwände sind hochdämmend und bieten durch
              ihre hervorragende Materialqualität und durchdachte Konstruktion
              perfekten Schutz vor Hitze und Kälte und gewährleisten optimalen
              Schall- und Brandschutz. Die Stabilität Ihres Traumhauses wird unter
              anderem durch die innenliegende Doppelbohlenverschalung unterstützt.
            </p>

            <p>
              Alle Wände von Natural Wohnbau verfügen über überragende
              Dämm-Eigenschaften. Das hält dein Fertighaus im Winter warm und
              schafft ein angenehm kühles Raumklima im Sommer. Jede Wand wird in
              der Werk präzise vorgefertigt und in klimatisierten Hallen
              zusammengebaut. So genießt du vom ersten Tag an die Vorzüge der
              trockenen und vorgefertigten Bauweise.
            </p>

            {/* Chips / etiketa nga pikat kyçe të tekstit (opsionale por elegante) */}
            <ul className="wandaufbau__chips" role="list" aria-label="Kerneigenschaften">
              <li className="wandaufbau__chip">Hitzeschutz</li>
              <li className="wandaufbau__chip">Kälteschutz</li>
              <li className="wandaufbau__chip">Schall- & Brandschutz</li>
              <li className="wandaufbau__chip">Doppelbohlenverschalung</li>
              <li className="wandaufbau__chip">Präzise vorgefertigt</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="tp" aria-label="Thermo Protect 40 Varianten">
        <div className="tp__container">
          {cards.map((c, i) => (
            <article className="tp__card" key={i}>
              <div className="tp__media">
                <img src={c.img} alt={c.alt} loading="lazy" />
              </div>

              <div className="tp__body">
                <span className="tp__eyebrow">{c.eyebrow}</span>
                <h3 className="tp__title">{c.title}</h3>
                <p className="tp__tagline">{c.tagline}</p>

                <p className="tp__text">{c.text}</p>

                <div className="tp__stats" role="group" aria-label="Wanddaten">
                  {c.stats.map((s, idx) => (
                    <div className="tp__stat" key={idx}>
                      <div className="tp__stat-value">{s.value}</div>
                      <div className="tp__stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    <section className="wk" aria-labelledby="wk-title">
      <div className="wk__container">
        {/* Blloku i tekstit me accent bar */}
        <div className="wk__content">
          <header className="wk__header">
            <h2 id="wk-title" className="wk__title">
              <span className="wk__title-warm">Warm im Winter</span> –{" "}
              <span className="wk__title-cool">kühl im Sommer</span>
            </h2>
            <div className="wk__divider" />
          </header>

          <p className="wk__lead">
            Allen drei gemeinsam sind die überragenden Dämmeigenschaften, die
            dein Haus im Winter kuschelig warm halten und im Sommer für ein
            angenehm kühles Raumklima sorgen. Präzise vorgefertigt und in
            klimatisierten Hallen trocken gebaut, leben die Wände die Vorzüge
            der trockenen und vorgefertigten Bauweise vom ersten Tag an voll
            aus. Alle Natural Wohnbau Wandsysteme sind im Innenbereich mit
            Holzwerkstoff- und Gipskartonplatten doppelt beplankt.
          </p>

          <p>
            Dank der doppelten Beplankung auf der Innenseite mit einer
            Gipsplatte und einer Holzplatte tragen die Wände vollflächig hohe
            Lasten. Bei jeder Wandmontage kannst du daher mit Standardnägeln und
            -schrauben arbeiten, lästiges Dübeln bleibt erspart. Auch die
            Stabilität deines Traumhauses wird dadurch unterstützt.
          </p>

          <p>
            Die Fassade wird auf der Baustelle fugenlos verputzt. Bei richtiger
            Pflege behält deine Natural Haus Außenhaut ihre hervorragenden
            Eigenschaften für nahezu unbegrenzte Zeit.
          </p>

          {/* Fakta të shpejta – dizajn tjetër nga chips/listat e seksioneve të tjera */}
          <ul className="wk__facts" role="list" aria-label="Kerneigenschaften">
            <li className="wk__fact">
              <span className="wk__bullet" aria-hidden="true" />
              Doppelte Innenbeplankung: Gips + Holz
            </li>
            <li className="wk__fact">
              <span className="wk__bullet" aria-hidden="true" />
              Trocken & präzise vorgefertigt (Werkfertigung)
            </li>
            <li className="wk__fact">
              <span className="wk__bullet" aria-hidden="true" />
              Fugenloser Außenputz, langlebige Fassade
            </li>
          </ul>
        </div>

        {/* Panel i imazhit me kornizë të hollë gold */}
        <aside className="wk__media">
          <div className="wk__frame">
            <img
              src={Warm}
              alt="Wandaufbau mit hochwertiger Dämmung – warm im Winter, kühl im Sommer"
              loading="lazy"
            />
          </div>
        </aside>
      </div>
    </section>
    <Form/>
    </>
  );
}
