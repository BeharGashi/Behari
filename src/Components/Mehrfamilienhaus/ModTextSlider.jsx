// ModTextSlider.jsx
import React, { useEffect, useRef, useState } from "react";
import "./ModTextSlider.css"
import modBg from "./Sliderbanner.webp"

export default function ModTextSlider({
  items = [],
  interval = 4500,
  title = "Modulhäuser – Vorteile auf einen Blick",
  className = "",
  bg = modBg, // mund ta overridesh: <ModTextSlider bg={yourImg} />
}) {
  const [index, setIndex] = useState(0);

  const sliderRef = useRef(null);
  const timerRef = useRef(null);
  const reduceMotionRef = useRef(false);

  const itemsArr = Array.isArray(items) ? items.filter(Boolean) : [];
  const len = itemsArr.length;
  const safeIndex = len ? index % len : 0;
  const curr = len ? itemsArr[safeIndex] : null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      reduceMotionRef.current =
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false;
    }
  }, []);

  const clear = () => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  };
  const start = () => {
    if (reduceMotionRef.current || len < 2) return;
    clear();
    timerRef.current = setInterval(() => setIndex(i => (i + 1) % len), interval);
  };

  useEffect(() => { if (len) { start(); return clear; } }, [interval, len]); // eslint-disable-line

  useEffect(() => {
    const root = sliderRef.current;
    if (!root) return;
    const onEnter = () => clear();
    const onLeave = () => start();
    const onKey = e => {
      if (!len) return;
      if (e.key === "ArrowRight") { e.preventDefault(); clear(); setIndex(i => (i + 1) % len); }
      if (e.key === "ArrowLeft")  { e.preventDefault(); clear(); setIndex(i => (i - 1 + len) % len); }
      if (e.key === "Home")       { e.preventDefault(); clear(); setIndex(0); }
      if (e.key === "End")        { e.preventDefault(); clear(); setIndex(len - 1); }
    };
    root.addEventListener("mouseenter", onEnter);
    root.addEventListener("mouseleave", onLeave);
    root.addEventListener("focusin", onEnter);
    root.addEventListener("focusout", onLeave);
    root.addEventListener("keydown", onKey);
    return () => {
      root.removeEventListener("mouseenter", onEnter);
      root.removeEventListener("mouseleave", onLeave);
      root.removeEventListener("focusin", onEnter);
      root.removeEventListener("focusout", onLeave);
      root.removeEventListener("keydown", onKey);
    };
  }, [len]); // eslint-disable-line

  const goTo = i => { if (!len) return; clear(); setIndex(((i % len) + len) % len); };

  return (
    <section
      ref={sliderRef}
      className={`mod-section ${className}`}
      aria-label="Text-Slider Modulhäuser"
      tabIndex={0}
      style={{ "--mod-bg": `url(${bg})` }}
    >
      {/* FULL-WIDTH BACKGROUND */}
      <div className="mod-section__bg" aria-hidden="true" />
      <div className="mod-section__overlay" aria-hidden="true" />

      {/* CARD në mes */}
      <div className="mod-inner">
        <div className="mod-container">
          <span className="mod-eyebrow" aria-hidden="true">{title}</span>

          {!len ? (
            <div className="mod-slide" aria-live="polite">
              <h3 className="mod-title">Keine Inhalte verfügbar</h3>
              <p className="mod-text">Bitte übergib ein Array mit {`{ title, text }`} Einträgen.</p>
            </div>
          ) : (
            <>
              <div key={safeIndex} className="mod-slide" aria-live="polite">
                <h3 className="mod-title">{curr.title}</h3>
                <p className="mod-text">{curr.text}</p>
              </div>

              {len > 1 && (
                <>
                  <div className="mod-controls">
                    <button className="mod-btn" onClick={() => goTo(safeIndex - 1)} aria-label="Previous">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <button className="mod-btn" onClick={() => goTo(safeIndex + 1)} aria-label="Next">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>

                  <div className="mod-dots" role="tablist" aria-label="Slider pages">
                    {itemsArr.map((_, i) => (
                      <button
                        key={i}
                        role="tab"
                        aria-selected={i === safeIndex}
                        aria-controls={`mod-slide-${i}`}
                        className={`mod-dot ${i === safeIndex ? "is-active" : ""}`}
                        onClick={() => goTo(i)}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}