import React from "react";
import "./Materiale.css";
import Hero from "./MaterialeHero"

// Importet – kontrollo emrat/path saktë sipas projektit tënd
import BSH from "./Brettschichtholz.webp";
import Holzfaser from "./Holzfaserdämmung.webp"; // nëse ke emër pa umlaut, përdor ./Holzfaserdammung.webp
import OSB from "./OSB-Platten.webp";
import CLT from "./CLT.webp";
import Gips from "./Gips.webp";
import XPS from "./XPS.webp";
import Dampfsperre from "./Dampfsperre.webp";

const materials = [
  {
    eyebrow: "Brettschichtholz (BSH)",
    title: "Stabilität & Nachhaltigkeit vereint",
    paragraphs: [
      "Brettschichtholz (BSH), auch als Glued Laminated Timber (GLT) bekannt, ist ein hochwertiges Konstruktionsholz, das aus mehreren Holzlagen besteht und unter hohem Druck miteinander verleimt wird. Durch diese präzise Verarbeitung entsteht ein äußerst stabiler, langlebiger und verzugsfreier Baustoff, der sich ideal für nachhaltige Bauprojekte eignet.",
    ],
    listTitle: "Vorteile von Brettschichtholz:",
    bullets: [
      "Hohe Tragfähigkeit & Formstabilität – Perfekt für tragende Konstruktionen",
      "Nachhaltig & umweltfreundlich – Hergestellt aus nachwachsenden Rohstoffen",
      "Widerstandsfähig gegen Feuchtigkeit & Verformung – Ideal für langlebige Bauweisen",
      "Flexibel einsetzbar – Geeignet für Häuser, Brücken, Hallen und mehr",
    ],
    closing:
      "Brettschichtholz kombiniert natürliche Schönheit mit technischer Präzision, um ein modernes, energieeffizientes und umweltfreundliches Wohnen zu ermöglichen.",
    image: BSH,
    imageAlt: "Brettschichtholz",
  },
  {
    eyebrow: "Holzfaserdämmung",
    title: "Nachhaltige Isolierung für Ihr Zuhause",
    paragraphs: [
      "Holzfaserdämmstoffe bieten eine umweltfreundliche und effektive Möglichkeit, Ihr Zuhause zu isolieren. Hergestellt aus natürlichen Holzfasern, zeichnen sie sich durch hervorragende Wärme- und Schalldämmeigenschaften aus und tragen zu einem gesunden Raumklima bei.",
    ],
    listTitle: "Vorteile der Holzfaserdämmung:",
    bullets: [
      "Exzellente Wärmedämmung: Reduziert den Energieverbrauch und senkt Heizkosten.",
      "Effektiver Schallschutz: Minimiert Lärmbelastung von außen.",
      "Feuchtigkeitsregulierend: Verhindert Schimmelbildung durch optimale Feuchtigkeitsaufnahme und -abgabe.",
      "Nachhaltig & ökologisch: Hergestellt aus nachwachsenden Rohstoffen, schonend für die Umwelt.",
    ],
    closing:
      "Mit Holzfaserdämmung investieren Sie in eine langlebige, effiziente und umweltbewusste Lösung für Ihr Zuhause.",
    image: Holzfaser,
    imageAlt: "Holzfaserdämmung",
  },
  {
    eyebrow: "OSB-Platten",
    title: "Robust, vielseitig & wirtschaftlich",
    paragraphs: [
      "OSB-Platten (Oriented Strand Board) sind ein moderner und widerstandsfähiger Holzwerkstoff, der aus verleimten Holzspänen besteht. Aufgrund ihrer hohen Stabilität, Feuchtigkeitsbeständigkeit und Tragfähigkeit sind sie eine beliebte Wahl für den Bau- und Innenausbau.",
    ],
    listTitle: "Vorteile von OSB-Platten:",
    bullets: [
      "Hohe Stabilität und Tragfähigkeit – Ideal für Wand-, Boden- und Dachkonstruktionen",
      "Feuchtigkeitsbeständig – Geeignet für trockene und feuchte Innenbereiche",
      "Nachhaltige Herstellung – Aus Holzspänen gefertigt, ressourcenschonend und umweltfreundlich",
      "Vielseitig einsetzbar – Perfekt für Wände, Böden, Decken, Möbel und mehr",
    ],
    closing:
      "Mit OSB-Platten setzen Sie auf eine kosteneffiziente, langlebige und nachhaltige Lösung für Ihr Bauprojekt.",
    image: OSB,
    imageAlt: "OSB-Platten",
  },
  {
    eyebrow: "CLT – Cross Laminated Timber",
    title: "Massivholz mit System",
    paragraphs: [
      "CLT (Cross Laminated Timber), auch als Kreuzlagenholz bekannt, ist ein moderner, nachhaltiger Baustoff aus massivem Holz. Durch das kreuzweise Verleimen mehrerer Holzlagen entsteht eine hochbelastbare, formstabile und energieeffiziente Konstruktion, die sich ideal für Wohn- und Gewerbebauten eignet.",
    ],
    listTitle: "Vorteile von CLT:",
    bullets: [
      "Hohe Tragfähigkeit und Formstabilität – Perfekt für tragende Strukturen und mehrstöckige Gebäude",
      "Nachhaltig und umweltfreundlich – Hergestellt aus nachwachsenden Rohstoffen mit geringer CO₂-Bilanz",
      "Hervorragende Wärmedämmung – Sorgt für ein energieeffizientes und angenehmes Wohnklima",
      "Vielseitig einsetzbar – Geeignet für Wände, Böden, Decken und komplette Gebäudestrukturen",
    ],
    closing:
      "CLT vereint Tradition und Innovation und ermöglicht eine nachhaltige, schnelle und präzise Bauweise mit maximalem Wohnkomfort.",
    image: CLT,
    imageAlt: "CLT – Cross Laminated Timber",
  },
  {
    eyebrow: "Gipskartonplatten",
    title: "Flexibel im Ausbau – stark in der Funktion",
    paragraphs: [
      "Gipskartonplatten, auch bekannt als Trockenbauplatten, sind ein wesentlicher Bestandteil des modernen Innenausbaus. Sie bieten eine leichte, stabile und flexible Lösung für Wände, Decken und Verkleidungen, sowohl in Wohn- als auch Gewerbebauten.",
    ],
    listTitle: "Vorteile von Gipskartonplatten:",
    bullets: [
      "Einfache und schnelle Montage – Ideal für den Trockenbau",
      "Hohe Stabilität und Brandschutz – Sorgt für Sicherheit und Langlebigkeit",
      "Hervorragende Schalldämmung – Für ein ruhiges und angenehmes Wohnklima",
      "Umweltfreundlich und recycelbar – Nachhaltige Bauweise mit geringer Umweltbelastung",
    ],
    closing:
      "Gipskartonplatten sind die perfekte Wahl für eine moderne, funktionale und energieeffiziente Raumgestaltung.",
    image: Gips,
    imageAlt: "Gipskartonplatten",
  },
  {
    eyebrow: "XPS – Effiziente Wärmedämmung",
    title: "Stark, druckfest & feuchtigkeitsresistent",
    paragraphs: [
      "XPS (Extrudierter Polystyrolschaum) ist ein leistungsstarker Dämmstoff mit hervorragender Wärmedämmung und hoher Druckfestigkeit. Durch seine geschlossene Zellstruktur ist XPS besonders feuchtigkeitsbeständig und eignet sich ideal für Anwendungen, die eine robuste und langlebige Dämmung erfordern.",
    ],
    listTitle: "Vorteile von XPS:",
    bullets: [
      "Exzellente Wärmedämmung – Reduziert den Energieverbrauch und Heizkosten",
      "Hohe Druckfestigkeit – Ideal für Bodenplatten, Kellerwände und Flachdächer",
      "Feuchtigkeitsresistent – Perfekt für Anwendungen mit direktem Erdkontakt",
      "Langlebig & Formstabil – Beständig gegen Alterung und Verrottung",
    ],
    closing:
      "Dank seiner einzigartigen Eigenschaften ist XPS die perfekte Wahl für eine effiziente, langlebige und feuchtigkeitsbeständige Dämmung in Neubauten und Sanierungsprojekten.",
    image: XPS,
    imageAlt: "XPS Dämmung",
  },
  {
    eyebrow: "Dampfsperre",
    title: "Schützt Konstruktion & Wohnklima",
    paragraphs: [
      "Eine Dampfsperre ist eine essenzielle Schutzschicht in Gebäudekonstruktionen, die das Eindringen von Feuchtigkeit in Wände, Dächer und Böden verhindert. Sie sorgt für ein trockenes, gesundes Raumklima und schützt vor Schimmelbildung und Bauschäden.",
    ],
    listTitle: "Vorteile der Dampfsperre:",
    bullets: [
      "Verhindert Feuchtigkeitsansammlung – Schützt Dämmmaterialien und Gebäudestruktur",
      "Erhöht die Energieeffizienz – Unterstützt eine effektive Wärmedämmung",
      "Schützt vor Schimmel & Bauschäden – Sorgt für eine langlebige Bausubstanz",
      "Optimiert das Wohnklima – Hält Räume trocken und komfortabel",
    ],
    closing:
      "Eine hochwertige Dampfsperre ist der Schlüssel zu einem energieeffizienten und langlebigen Gebäude, das optimal gegen Feuchtigkeit geschützt ist.",
    image: Dampfsperre,
    imageAlt: "Dampfsperre",
  },
];

export default function Materiale() {
  return (
    <>
    <Hero/>
    <section className="materiale">
      <div className="materiale__container">
        {materials.map((m, idx) => (
          <article className={`materiale__item ${idx % 2 === 1 ? "is-alt" : ""}`} key={idx}>
            <div className="materiale__image">
              <img src={m.image} alt={m.imageAlt} loading="lazy" />
            </div>

            <div className="materiale__content">
              <span className="materiale__eyebrow">{m.eyebrow}</span>
              <h3 className="materiale__title">{m.title}</h3>
              <div className="materiale__divider" />

              {m.paragraphs.map((p, i) => (
                <p key={i} className="materiale__paragraph">{p}</p>
              ))}

              <h4 className="materiale__listtitle">{m.listTitle}</h4>
              <ul className="materiale__list" role="list">
                {m.bullets.map((b, i) => (
                  <li className="materiale__listitem" key={i}>
                    <span className="materiale__check" aria-hidden="true">✔</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <p className="materiale__closing">{m.closing}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
    </>
  );
}
