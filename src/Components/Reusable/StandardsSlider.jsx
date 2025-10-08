import React, { useEffect, useRef, useState } from "react";
import "./StandardsSlider.css";

/* ---------- Ikona (SVG inline) ---------- */
const IconBrandschutz = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...p}>
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 4.4-2.9 8.3-7 9.7C7.9 20.3 5 16.4 5 12V6l7-3z" />
      <path d="M12 11c0-2 1.5-3.2 2.6-4.5.9 2.1-.4 3 1.4 4.8 1.2 1.2 1.3 3.4-.7 4.7-1.3.9-3.4.8-4.8-.4C8.9 14.2 9 12.5 10 11" />
    </g>
  </svg>
);
const IconSchall = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...p}>
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 10v4" /><path d="M7 8v8" /><path d="M10 6v12" /><path d="M13 8v8" /><path d="M16 10v4" /><path d="M19 11v2" />
    </g>
  </svg>
);
const IconFeuchte = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...p}>
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4h10" /><path d="M4 8h16" /><path d="M7 12h10" /><path d="M4 16h16" />
      <path d="M9 18c0 1.7-1.3 3-3 3s-3-1.3-3-3 3-5 3-5 3 3.3 3 5z" />
    </g>
  </svg>
);
const IconMontage = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...p}>
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4h8l1 4H7l1-4z" /><path d="M5 8h14l-1 10H6L5 8z" /><path d="M10 12h4" />
    </g>
  </svg>
);
const IconEco = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...p}>
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4c-6 0-10 3-10 9 0 3.3 2.7 6 6 6 6 0 6-9 4-15z" />
      <path d="M10 13C7 13 4 12 3 9c2 0 5 .5 7 2" />
      <path d="M7 18c-1.7-1.7-2-3.5-2-5" />
    </g>
  </svg>
);
const IconStabil = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...p}>
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18h16" /><path d="M6 16l8-8 4 4-8 8H6z" /><path d="M14 8l2-2 2 2-2 2" />
    </g>
  </svg>
);
const IconEnergy = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...p}>
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-7 9 7v8a2 2 0 0 1-2 2h-3" />
      <path d="M13 21h-2" /><path d="M12 9v4" /><path d="M9 17h6" />
    </g>
  </svg>
);

/* ---------- Të dhënat (7 karta) ---------- */
const CARDS = [
  { title: "Brandschutz", icon: IconBrandschutz, bullets: ["DIN 4102-2", "Klasse B1", "EN 13501-1", "REI 30 / REI 60"] },
  { title: "Schalldämmung", icon: IconSchall, bullets: ["DIN 4109", "≥ 45 dB", "Holzfaserdämmung", "Schwimmender Estrich"] },
  { title: "Feuchtigkeitsschutz", icon: IconFeuchte, bullets: ["Dampfsperre & Dampfbremse", "DIN 1052", "Hygrothermische Berechnung", "Wohnraumlüftung"] },
  { title: "Konstruktion & Montage", icon: IconMontage, bullets: ["ISO 9001", "EN 14732", "Zertifiziertes Holz", "Präzise Verbindungstechnik"] },
  { title: "Ökologische & Nachhaltige Standards", icon: IconEco, bullets: ["FSC/PEFC-zertifiziertes Holz", "Baubiologisch unbedenkliche Materialien", "CO₂-neutrale Bauweise", "Recyclingfähigkeit der Materialien"] },
  { title: "Stabilität", icon: IconStabil, bullets: ["EN 1995-1-1", "DIN 1052", "Zertifiziertes Holz", "Hochwertige Verbindungselemente"] },
  { title: "Energieeffizienz", icon: IconEnergy, bullets: ["KfW 40 / KfW 55", "DIN 4108-2", "(λ) ≤ 0,035 W/(mK)", "Dreifachverglasung"] },
];

/* Grupimi i paneleve: 2 – 3 – 2 */
const GROUPS = [[0, 1], [2, 3, 4], [5, 6]];

export default function StandardsSlider({
  eyebrow = "Standards & Schutz",
  title = "Technische & Ökologische Kriterien",
  autoPlay = true,
  interval = 6000,
}) {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef(null);
  const panelsRef = useRef([]);

  // scroll te paneli aktiv – vetëm horizontal në track, i qendërzuar
  const scrollToIndex = (i) => {
    const track = trackRef.current;
    const panel = panelsRef.current[i];
    if (!track || !panel) return;

    const target =
      panel.offsetLeft - (track.clientWidth - panel.clientWidth) / 2;

    track.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
    setIdx(i);
  };

  const next = () => scrollToIndex((idx + 1) % GROUPS.length);
  const prev = () => scrollToIndex((idx - 1 + GROUPS.length) % GROUPS.length);

  // autoplay + pause on hover/focus (pa lidhje me idx që të mos rigjenerohet intervali)
  useEffect(() => {
    if (!autoPlay) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    let t = setInterval(() => {
      setIdx((cur) => {
        const n = (cur + 1) % GROUPS.length;
        // scroll pas update-it
        requestAnimationFrame(() => scrollToIndex(n));
        return n;
      });
    }, interval);

    const track = trackRef.current;
    const stop = () => t && clearInterval(t);
    const start = () => (t = setInterval(() => {
      setIdx((cur) => {
        const n = (cur + 1) % GROUPS.length;
        requestAnimationFrame(() => scrollToIndex(n));
        return n;
      });
    }, interval));

    track?.addEventListener("mouseenter", stop);
    track?.addEventListener("mouseleave", start);
    track?.addEventListener("focusin", stop);
    track?.addEventListener("focusout", start);

    return () => {
      stop();
      track?.removeEventListener("mouseenter", stop);
      track?.removeEventListener("mouseleave", start);
      track?.removeEventListener("focusin", stop);
      track?.removeEventListener("focusout", start);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, autoPlay]);

  // sinkronizo idx sipas panelit më afër qendrës së track-ut
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const center = track.scrollLeft + track.clientWidth / 2;
      let nearest = 0;
      let best = Infinity;
      panelsRef.current.forEach((p, i) => {
        if (!p) return;
        const pc = p.offsetLeft + p.clientWidth / 2;
        const d = Math.abs(pc - center);
        if (d < best) { best = d; nearest = i; }
      });
      if (nearest !== idx) setIdx(nearest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [idx]);

  return (
    <section className="stds-section" aria-labelledby="stds-heading">
      <div className="stds-glow" aria-hidden="true" />
      <div className="stds-container">
        <header className="stds-head">
          <span className="stds-eyebrow">{eyebrow}</span>
          <h2 id="stds-heading" className="stds-title">{title}</h2>
        </header>

        <div className="stds-slider">
          {/* track me scroll-snap */}
          <div
            ref={trackRef}
            className="stds-track"
            aria-live="polite"
          >
            {GROUPS.map((group, i) => (
              <div
                key={i}
                className={`stds-panel stds-panel--cols-${group.length}`}
                ref={(el) => (panelsRef.current[i] = el)}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} von ${GROUPS.length}`}
              >
                {group.map((ci) => {
                  const C = CARDS[ci];
                  const Icon = C.icon;
                  return (
                    <article key={C.title} className="stds-card">
                      <div className="stds-card-head">
                        <span className="stds-badge"><Icon /></span>
                        <h3 className="stds-card-title">{C.title}</h3>
                      </div>
                      <ul className="stds-list">
                        {C.bullets.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>

          {/* shigjetat */}
          <button className="stds-nav stds-nav--prev" onClick={prev} aria-label="Zurück">‹</button>
          <button className="stds-nav stds-nav--next" onClick={next} aria-label="Weiter">›</button>
        </div>

        {/* dots poshtë */}
        <ul className="stds-dots" role="tablist" aria-label="Slider Navigation">
          {GROUPS.map((_, i) => (
            <li key={i}>
              <button
                type="button"
                role="tab"
                aria-selected={i === idx}
                className={`stds-dot ${i === idx ? "is-active" : ""}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Zu Slide ${i + 1}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
