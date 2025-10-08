import React, { useEffect } from "react";
import "./Innenausbau.css";

/* ——— Imports e fotove si te projekti yt ——— */
import heroImg from "./in-hero.webp";
import turenImg from "./in-turen.webp";
import treppenImg from "./in-treppen.webp";
import fensterImg from "./in-fenster.webp";
import bodenImg from "./in-boden.webp";
import mobelImg from "./in-mobel.webp";
import kuchenImg from "./in-kuchen.webp";
import schlafImg from "./in-schlafzimmer.webp";
import wohnImg from "./in-wohnzimmer.webp";
import badImg from "./in-badezimmer.webp";

/* ——— Helpers ——— */
const asSrc = (v, fb = "") => (typeof v === "string" ? v : v?.src || fb);

const toGermanSlug = (str) => {
  return str
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
    .replace(/Ä/g, "Ae").replace(/Ö/g, "Oe").replace(/Ü/g, "Ue")
    .replace(/ß/g, "ss")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

const routeMap = {
  "Türen": "/tueren",
  "Treppen": "/treppen",
  "Fenster": "/fenster",
  "Bodenbeläge": "/bodenbelaege",
  "Möbel": "/moebel",
  "Küchen": "/kuechen",
  "Schlafzimmer": "/schlafzimmer",
  "Wohnzimmer": "/wohnzimmer",
  "Badezimmer": "/badezimmer",
};

const getTileHref = (tile) => routeMap[tile.title] || `/${toGermanSlug(tile.title)}`;

function useInView() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const els = Array.from(document.querySelectorAll(".ix .reveal, .ix .stagger > *, .ix .img-reveal, .ix .wipe"));
    if (!els.length) return;
    if (reduced) { els.forEach((el) => el.classList.add("in-view")); return; }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
        }),
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const Arrow = () => (
  <svg className="i" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/* ——— Section with BG image (never collapses) ——— */
function Section({ id, title, img, fallback, right, points = [], children }) {
  const bg = `url(${asSrc(img, fallback)})`;
  return (
    <section id={id} className={`ix-feature container ${right ? "right" : ""}`}>
      <figure className="ix-media ix-media--bg img-reveal" style={{ "--bg": bg }} role="img" aria-label={title} />
      <div className="ix-copy">
        <h3 className="reveal">{title}</h3>
        <p className="reveal">{children}</p>
        <ul className="ix-points stagger">
          {points.map((p, i) => (
            <li key={i} className="reveal" style={{ "--d": `${i * 70}ms` }}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ——— Smart <img> për grid ——— */
function SmartImg({ src, alt, fallback = "", ...rest }) {
  const url = asSrc(src, fallback);
  return (
    <img
      src={url}
      alt={alt}
      onError={(e) => {
        if (fallback) { e.currentTarget.onerror = null; e.currentTarget.src = fallback; }
      }}
      {...rest}
    />
  );
}

export default function Innenausbau() {
  useInView();

  const tiles = [
    { id: "turen",   title: "Türen",        img: turenImg,   fb: "/in-turen.webp" },
    { id: "treppen", title: "Treppen",      img: treppenImg, fb: "/in-treppen.webp" },
    { id: "fenster", title: "Fenster",      img: fensterImg, fb: "/in-fenster.webp" },
    { id: "boden",   title: "Bodenbeläge",  img: bodenImg,   fb: "/in-boden.webp" },
    { id: "mobel",   title: "Möbel",        img: mobelImg,   fb: "/in-mobel.webp" },
    { id: "kuchen",  title: "Küchen",       img: kuchenImg,  fb: "/in-kuchen.webp" },
    { id: "schlaf",  title: "Schlafzimmer", img: schlafImg,  fb: "/in-schlafzimmer.webp" },
    { id: "wohn",    title: "Wohnzimmer",   img: wohnImg,    fb: "/in-wohnzimmer.webp" },
    { id: "bad",     title: "Badezimmer",   img: badImg,     fb: "/in-badezimmer.webp" },
  ];

  return (
    <div className="ix">
      {/* ===== HERO me background (bulletproof) ===== */}
      <section
        className="ix-hero ix-hero--bg"
        style={{ "--hero": `url(${asSrc(heroImg, "/in-hero.webp")})` }}
      >
        <div className="ix-hero-overlay" aria-hidden="true" />
        <div className="ix-hero-inner container">
          <div className="ix-badge reveal">Signature Interiors</div>
          <h1 className="ix-headline wipe">Innenausbau <em>auf Luxus-Niveau</em></h1>
          <p className="ix-lead reveal">
            Maßgefertigte Oberflächen, verdeckte Technik und perfektionierte Details.
            Wir planen und realisieren Räume, die leicht wirken und im Alltag höchst funktional sind.
          </p>
          <div className="ix-hero-chips stagger">
            <span className="chip">Maßarbeit</span>
            <span className="chip">Premium-Materialien</span>
            <span className="chip">Termintreu</span>
          </div>
        </div>
      </section>

      {/* ===== GRID ===== */}
      <section id="grid" className="ix-grid container">
        <div className="tiles">
          {tiles.map((t, i) => (
            <a
              key={t.id}
              href={getTileHref(t)}
              className="tile img-reveal"
              style={{ "--d": `${i * 40}ms` }}
              aria-label={`${t.title} ansehen`}
            >
              <figure className="tile-media ph">
                <SmartImg src={t.img} fallback={t.fb} alt={t.title} loading="lazy" />
              </figure>
              <div className="tile-label"><span>{t.title}</span><Arrow/></div>
            </a>
          ))}
        </div>
      </section>

      {/* ===== SEKSIONET (me background figure) ===== */}
      <Section
        id="turen" title="Türen" img={turenImg} fallback="/in-turen.webp"
        points={[
          "Flächenbündige Türen, verdeckte Bänder, akustisch optimierte Zargen.",
          "Edle Oberflächen: geräucherte Eiche, matte Lacke, selektierte Furniere.",
          "Smart-Lock, Magnetschloss und schwellenlose Übergänge.",
        ]}
      >
        Elegante Eingangs- und Zimmertüren flächenbündig zur Wand, bei Bedarf
        schalldämmend – mit präzisen Schattenfugen und langlebiger Beschlagtechnik.
      </Section>

      <Section
        id="treppen" title="Treppen" img={treppenImg} fallback="/in-treppen.webp" right
        points={[
          "Schwebende Stufen aus Holz, Stahl oder Glas.",
          "Handläufe mit integrierter LED-Beleuchtung, einstellbare Lichtfarbe.",
          "Verdeckte Befestigungen, statisch nachgewiesen.",
        ]}
      >
        Freitragende oder aufgesattelte Treppen in Massivholz, Stahl und Glas –
        konstruktiv ruhig, trittsicher und dezent inszeniert.
      </Section>

      <Section
        id="fenster" title="Fenster" img={fensterImg} fallback="/in-fenster.webp"
        points={[
          "Alu oder Holz-Alu, schlanke Profile, niedrige Uw-Werte.",
          "3-fach-Verglasung, Sonnen- und Sichtschutzgläser.",
          "Integrierte ZIP-Screens/Jalousien, Wind-/Sonnensensorik.",
        ]}
      >
        Schmale Rahmen und Hochleistungsverglasung maximieren Tageslicht und
        steuern Wärme, Blendung und Privatsphäre mit integrierter Beschattung.
      </Section>

      <Section
        id="boden" title="Bodenbeläge" img={bodenImg} fallback="/in-boden.webp" right
        points={[
          "Selektiertes Parkett, Naturstein, großformatiges Feinsteinzeug.",
          "Kompatibel mit Fußbodenheizung, fugenarme Übergänge.",
          "Perfekte Randdetails, geprüfter Feuchteschutz.",
        ]}
      >
        Böden nach Maß: geöltes Parkett, großformatige Stein- oder Keramikplatten.
        Technisch sauber aufgebaut, optisch wie aus einem Guss.
      </Section>

      <Section
        id="mobel" title="Möbel" img={mobelImg} fallback="/in-mobel.webp"
        points={[
          "Echtholzfurniere & Premium-Lacke, exakt gematcht.",
          "Push-to-open, sanfte Dämpfung, millimetergenaue Ausrichtung.",
          "Unsichtbare Beleuchtung, integriertes Kabelmanagement.",
        ]}
      >
        Einbaumöbel und Schrankwände mit abgestimmten Furnierbildern, grifflosen
        Fronten und leiser Beschlagtechnik – innen stimmungsvoll beleuchtet.
      </Section>

      <Section
        id="kuchen" title="Küchen" img={kuchenImg} fallback="/in-kuchen.webp" right
        points={[
          "Inseln aus Stein/Komposit, fugenarme Arbeitsflächen.",
          "Vollintegrierte, leise und leistungsfähige Geräte.",
          "Lichtszenen, Aluminiumprofile, ergonomische Arbeitszonen.",
        ]}
      >
        Küchen als Architektur: monolithische Inseln, bündige Einbauten,
        durchdachte Stauraumkonzepte und mehrstufige Lichtführung.
      </Section>

      <Section
        id="schlaf" title="Schlafzimmer" img={schlafImg} fallback="/in-schlafzimmer.webp"
        points={[
          "Ankleiden mit linearer Beleuchtung, verstellbaren Böden & Stangen.",
          "Akustikpaneele und gepolsterte Kopfteile.",
          "Abendliche Lichtszenen in warmen Farbtemperaturen, verdeckte Steckdosen.",
        ]}
      >
        Rückzugsorte mit maßgefertigten Schrankanlagen, sanfter Akustik und
        warmen Lichtschichten për erholsamen Schlaf.
      </Section>

      <Section
        id="wohn" title="Wohnzimmer" img={wohnImg} fallback="/in-wohnzimmer.webp" right
        points={[
          "Media-Wall mit verdeckter Belüftung und sauberer Kabelführung.",
          "Regale mit LED-Linien, integrierter Bio-/Elektrokamin.",
          "Rhythmische Wandpaneele mit feiner Haptik.",
        ]}
      >
        Wohnbereiche me integr. Medienflächen, unsichtbarer Technik dhe
        charaktervollen Oberflächen – ruhig & repräsentativ.
      </Section>

      <Section
        id="bad" title="Badezimmer" img={badImg} fallback="/in-badezimmer.webp"
        points={[
          "Walk-In-Duschen mit Großformaten & Linienentwässerung.",
          "Individuelle Waschtische aus Stein/Komposit, Armaturen in Schwarz/Messing.",
          "Spa-Beleuchtung, leise Entlüftung, beheizte Spiegel.",
        ]}
      >
        Bäder auf Spa-Niveau: wenige Fugen, klare Linien, präzise Gefälle und
        eine Lichtstimmung, die morgens aktiviert und abends beruhigt.
      </Section>
    </div>
  );
}
