import React, { useEffect } from "react";
import "./Relevant.css";

/* Images (vendosi skedarët në të njëjtën dosje) */
import Pools from "./Pool.webp";
import Sauna from "./Sauna.webp";
import Whirlpool from "./Whirlpool.webp";
import Pergola from "./Pergola.webp";
import GlasCover from "./GlasCover.webp";
import Kassettenmarkise from "./Kassettenmarkise.webp";
import Schiebesystem from "./Schiebesystem.webp";
import Poolabdeckung from "./Poolabdeckung.webp";

/* Simple in-view hook për animime */
function useInView() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const els = Array.from(document.querySelectorAll(".relev .reveal, .relev .stagger, .relev .photo-glide, .relev .gold-wipe"));
    if (!els.length) return;
    if (reduced) { els.forEach(el => el.classList.add("in-view")); return; }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
      });
    }, { threshold: 0.18 });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Relevat(){
  useInView();

  return (
    <section id="wellness" className="relev">
  <div className="container">
    <div className="gold-wipe">
      <h2 className="relev-title wipe-target">Wellness & Outdoor</h2>
    </div>

    <div className="relev-grid stagger">
      <a href="/schwimmbecken" className="re-card" aria-label="Schwimmbecken" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <figure className="re-media photo-glide">
          <img src={Pools} alt="Poolanlage mit klarer Geometrie" />
        </figure>
        <h3 className="re-title">Schwimmbecken</h3>
        <p className="re-text">Individuelle Becken mit Technik aus einer Hand – von Planung bis Inbetriebnahme.</p>
      </a>

      <a href="/sauna" className="re-card" aria-label="Sauna" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <figure className="re-media photo-glide">
          <img src={Sauna} alt="Hochwertige Sauna mit Holzakzenten" />
        </figure>
        <h3 className="re-title">Sauna</h3>
        <p className="re-text">Premium-Saunen mit effizienter Dämmung, sauberer Montage und stimmiger LED-Beleuchtung.</p>
      </a>

      <a href="/whirlpool" className="re-card" aria-label="Whirlpool" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <figure className="re-media photo-glide">
          <img src={Whirlpool} alt="Whirlpool mit Hydromassage und leisen Pumpen" />
        </figure>
        <h3 className="re-title">Whirlpool</h3>
        <p className="re-text">Hydromassage-Komfort, geräuscharme Pumpen und wartungsfreundliche Filtereinheiten.</p>
      </a>

      <a href="/pergola" className="re-card" aria-label="Stilvoller Sonnenschutz" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <figure className="re-media photo-glide">
          <img src={Pergola} alt="Pergola als stilvoller Sonnenschutz" />
        </figure>
        <h3 className="re-title">Stilvoller Sonnenschutz</h3>
        <p className="re-text">Aluminium-Pergolen me Markise/Lamellen – eleganter, wetterfester Schatten für Terrasse & Hof.</p>
      </a>

      <a href="/glasdach" className="re-card" aria-label="Glasdach" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <figure className="re-media photo-glide">
          <img src={GlasCover} alt="Glasüberdachung mit schlanken Profilen" />
        </figure>
        <h3 className="re-title">Glasdach</h3>
        <p className="re-text">Ganzglas-Überdachungen mit UV-Schutz und schlanken Profilen – transparent und langlebig.</p>
      </a>

      <a href="/kassettenmarkise" className="re-card" aria-label="Kassettenmarkise" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <figure className="re-media photo-glide">
          <img src={Kassettenmarkise} alt="Kassettenmarkise in geschlossener Kassette" />
        </figure>
        <h3 className="re-title">Kassettenmarkise</h3>
        <p className="re-text">Geschützte Kassette für Tuch & Mechanik – ruhiger Lauf und saubere, dezente Optik.</p>
      </a>

      <a href="/schiebesystem" className="re-card" aria-label="Glaswände" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <figure className="re-media photo-glide">
          <img src={Schiebesystem} alt="Rahmenloses Schiebesystem aus Glas" />
        </figure>
        <h3 className="re-title">Glaswände</h3>
        <p className="re-text">Rahmenlose Glaselemente für Terrassen – windgeschützt, transparent und leichtgängig.</p>
      </a>

      <a href="/poolabdeckung" className="re-card" aria-label="Poolabdeckung" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <figure className="re-media photo-glide">
          <img src={Poolabdeckung} alt="Poolabdeckung zur Sicherheit und Wärmespeicherung" />
        </figure>
        <h3 className="re-title">Poolabdeckung</h3>
        <p className="re-text">Sichere, isolierende Cover reduzieren Wärmeverluste und halten den Pool dauerhaft sauber.</p>
      </a>
    </div>
  </div>
</section>

  );
}
