import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Similar.css";

/* Ndrysho path-et sipas projektit tënd */
import Image1 from "./LC-M300-1/LC_M300-1-2-scaled.jpg";
import Image2 from "./LC-M300-2/LC_M300-2-7-scaled.jpg";
import Image4 from "./LC-M600-1/LC_M600-1-17-1-scaled.jpg";
import Image5 from "./LC-M600-2/LC_M600-2-27-1-scaled.jpg";
import Image6 from "./LC-M600-3/LC_M600-3-32-scaled.jpg";
import Image7 from "./LC-M600-4/LC_M600-4-37-scaled.jpg";

const ITEMS = [
  {
    href: "/lc-m300-1",
    img: Image1,
    title: "LC-M300-1",
    lines: ["Außenmaße: 3000 × 2438 mm", "Nutzfläche: 7,31 m²", "Farbe: RAL 9002 (Weißgrau)"],
  },
  {
    href: "/lc-m300-2",
    img: Image2,
    title: "LC-M300-2",
    lines: ["Außenmaße: 6058 × 2438 mm", "Nutzfläche: 14,76 m²", "Farbe: RAL 9002 (Weißgrau)"],
  },
  {
    href: "/lc-m600-1", /* sipas kërkesës tënde pa vizë */
    img: Image4,
    title: "LC-M600-1",
    lines: ["Außenmaße: 6058 × 2438 mm", "Nutzfläche: 14,76 m²", "Farbe: RAL 9002 (Weißgrau)"],
  },
  {
    href: "/lc-m600-2",
    img: Image5,
    title: "LC-M600-2",
    lines: ["Außenmaße: 6058 × 2438 mm", "Nutzfläche: 14,76 m²", "Farbe: RAL 9002 (Weißgrau)"],
  },
  {
    href: "/lc-m600-3",
    img: Image6,
    title: "LC-M600-3",
    lines: ["Außenmaße: 6058 × 2438 mm", "Nutzfläche: 14,76 m²", "Farbe: RAL 9002 (Weißgrau)"],
  },
    {
    href: "/LC-M600-4",
    img: Image7,
    title: "OC-M600-5",
    lines: ["Außenmaße: 6058 × 2438 mm", "Nutzfläche: 14,76 m²", "Farbe: RAL 9002 (Weißgrau)"],
  },
];

export default function Similar({
  autoplay = true,
  intervalMs = 5000,
  title = "Ähnliche Produkte",
  subtitle = "Entdecken Sie passende Alternativen zu Ihrer Auswahl – stöbern Sie durch unsere ähnlichen Produkte.",
}) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(3);
  const timerRef = useRef(null);
  const hoveringRef = useRef(false);

  useEffect(() => {
    const mq3 = window.matchMedia("(min-width: 1024px)");
    const mq2 = window.matchMedia("(min-width: 768px)");
    const apply = () => {
      if (mq3.matches) setPerView(3);
      else if (mq2.matches) setPerView(2);
      else setPerView(1);
    };
    apply();
    mq3.addEventListener?.("change", apply);
    mq2.addEventListener?.("change", apply);
    return () => {
      mq3.removeEventListener?.("change", apply);
      mq2.removeEventListener?.("change", apply);
    };
  }, []);

  const maxIndex = useMemo(() => ITEMS.length - 1, []);

  const getStep = () => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) {
      return track?.children?.[0]?.offsetWidth || 0;
    }
    const a = track.children[0].offsetLeft;
    const b = track.children[1].offsetLeft;
    return Math.max(1, b - a);
  };

  const scrollToIndex = (i, behavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(i, maxIndex));
    const step = getStep();
    track.scrollTo({ left: clamped * step, behavior });
    setActive(clamped);
  };

  useEffect(() => {
    if (!autoplay) return;
    const start = () => {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        if (hoveringRef.current) return;
        setActive((prev) => {
          const next = prev + 1;
          const track = trackRef.current;
          if (!track) return prev;
          const endIndex = maxIndex;
          const target = next > endIndex ? 0 : next;
          scrollToIndex(target);
          return target;
        });
      }, intervalMs);
    };
    start();
    return () => clearInterval(timerRef.current);
  }, [autoplay, intervalMs, maxIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const step = getStep();
      const i = Math.round(track.scrollLeft / step);
      setActive(Math.max(0, Math.min(i, maxIndex)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [maxIndex]);

  return (
    <section className="sim" aria-labelledby="sim-title">
      <div className="sim__container">
        {/* Header i seksionit */}
        <header className="sim__header">
          <h2 id="sim-title" className="sim__sectionTitle">{title}</h2>
          <p className="sim__lead">{subtitle}</p>
        </header>

        <div
          className="sim__viewport"
          onMouseEnter={() => (hoveringRef.current = true)}
          onMouseLeave={() => (hoveringRef.current = false)}
        >
          <div
            className="sim__track"
            ref={trackRef}
            role="listbox"
            aria-label="Produkt-Slider"
            aria-activedescendant={`sim-card-${active}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") { e.preventDefault(); scrollToIndex(active + 1); }
              else if (e.key === "ArrowLeft") { e.preventDefault(); scrollToIndex(active - 1); }
            }}
          >
            {ITEMS.map((it, idx) => (
              <a
                id={`sim-card-${idx}`}
                href={it.href}
                className="sim__card"
                key={it.title + idx}
                role="option"
                aria-selected={active === idx}
              >
                <div className="sim__imgBox">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading={idx < perView ? "eager" : "lazy"}
                    fetchpriority={idx < perView ? "high" : "auto"}
                    decoding="async"
                  />
                  <div className="sim__imgShade" aria-hidden="true" />
                </div>

                <div className="sim__details">
                  <h3 className="sim__title">{it.title}</h3>
                  {it.lines.map((ln, i) => (
                    <p key={i} className="sim__line">{ln}</p>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="sim__dots" role="tablist" aria-label="Slider Navigation">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              className={`sim__dot ${active === i ? "is-active" : ""}`}
              aria-label={`Zu Karte ${i + 1}`}
              aria-selected={active === i}
              role="tab"
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
