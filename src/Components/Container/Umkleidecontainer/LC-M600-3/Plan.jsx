import React, { useEffect, useRef, useState } from "react";
import "./Plan.css";

/* Ndrysho këto path-e/extensione sipas projektit tënd,
   ose kaloi si props <Plan img1={Image1} img2={Image2} /> */
import Image1 from './LC_M600-3-32-scaled.jpg';
import Image2 from "./LC_M600-3-35-scaled.jpg";

export default function Plan({ img1 = Image1, img2 = Image2 }) {
  const wrapRef = useRef(null);
  const [percent, setPercent] = useState(50);
  const draggingRef = useRef(false);

  // Llogaritje e pozicionit nga koordinata x e pointerit
  const updateFromClientX = (clientX) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const pos = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const p = (pos / rect.width) * 100;
    setPercent(p);
  };

  // Eventet globale për pointer-in gjatë drag-ut
  useEffect(() => {
    const onPointerMove = (e) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.clientX);
    };
    const onPointerUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("touchmove", (e) => {
      if (!draggingRef.current || !e.touches.length) return;
      updateFromClientX(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener("touchend", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, []);

  // Keyboard (slider)
  const onKeyDown = (e) => {
    const stepPct = 5;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPercent((p) => Math.max(0, p - stepPct));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPercent((p) => Math.min(100, p + stepPct));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPercent(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPercent(100);
    }
  };

  return (
    <section className="plan" aria-label="Bild-Vergleich">
      <div className="plan__wrapper" ref={wrapRef}>
        <div className="plan__imgContainer">
          <img
            className="plan__image plan__image--base"
            src={img1}
            alt="Vorher"
            draggable="false"
          />
          <img
            className="plan__image plan__image--overlay"
            src={img2}
            alt="Nachher"
            draggable="false"
            style={{ clipPath: `inset(0 0 0 ${percent}%)` }}
          />
        </div>

        {/* Slider knob */}
        <button
          type="button"
          className="plan__scroller"
          style={{ left: `${percent}%` }}
          aria-label="Image comparison slider"
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(percent)}
          onPointerDown={(e) => {
            draggingRef.current = true;
            e.currentTarget.setPointerCapture?.(e.pointerId);
          }}
          onTouchStart={() => { draggingRef.current = true; }}
          onKeyDown={onKeyDown}
        >
          <span className="plan__scrollerThumb" />
        </button>

        {/* Hint arrows */}
        <div
          className="plan__hint plan__hint--left"
          style={{ left: `${percent}%` }}
          aria-hidden="true"
        >
          <div className="plan__arrow plan__arrow--left">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div
          className="plan__hint plan__hint--right"
          style={{ left: `${percent}%` }}
          aria-hidden="true"
        >
          <div className="plan__arrow plan__arrow--right">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
