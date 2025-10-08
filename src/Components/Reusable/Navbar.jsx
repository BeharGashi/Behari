import React, { useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../logo/naturalwohnbau.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMobile = () => setMobileOpen((s) => !s);
  const handleOpen = (name) => setOpenMenu((prev) => (prev === name ? null : name));
  const closeAll = () => {
    setOpenMenu(null);
    setLangOpen(false);
    setMobileOpen(false);
  };
  const onKeyDown = (e) => { if (e.key === "Escape") closeAll(); };

  const MENU = [
    {
      label: "Hausemodelle",
      key: "hausemodelle",
      items: [
        { label: "Einfamilienhauser", href: "/einfamilienhauser" },
        { label: "Doppelhauser", href: "/doppelhaus" },
        { label: "Mehrfamilienhaus", href: "/mehrfamilienhaus" },
        { label: "Modulhauser", href: "/modulhauser" },
        { label: "Bungalows", href: "/bungalows" },
        { label: "Garagen & Carport", href: "/garagenundcarport" },
      ],
    },
    {
      label: "Bauweise",
      key: "bauweise",
      items: [
        { label: "Materiale", href: "/materiale" },
        { label: "Wandaufbau", href: "/wandaufbau" },
        { label: "Tueren", href: "/tueren" },
        { label: "Fenster", href: "/fenster" },
        { label: "Solarsysteme", href: "/solarsysteme" },
        { label: "Smart Haustechnik", href: "/smart-haus-technik" },
      ],
    },
    {
      label: "Leistungen",
      key: "leistungen",
      items: [
        { label: "Haustechnik", href: "/haustechnik" },
        { label: "Innenausbau", href: "/innenausbau" },
      ],
    },
    {
      label: "Container",
      key: "container",
      items: [
        { label: "Bürocontainer", href: "/buerocontainer" },
        { label: "Sanitärcontainer", href: "/sanitaercontainer" },
        { label: "Schlaf Container", href: "/schlafcontainer" },
        { label: "Umkleidecontainer", href: "/umkleidescontainer" },
      ],
    },
  ];

  return (
    <header className="nv-wrapper" onKeyDown={onKeyDown}>
      <div className="nv-bling" aria-hidden="true" />
      <nav className="nv" role="navigation" aria-label="Hauptnavigation" ref={navRef}>
        {/* MAJTAS: LOGO */}
        <a className="nv-logo" href="/" aria-label="Startseite">
          <img
            src={logo}
            alt="Natural Wohnbau"
            className="nv-logo-img"
            width={240}     /* rezervo gjerësi (përshtate me raportin real të logos) */
            height={80}     /* i përputhur me height CSS në desktop */
            decoding="async"
            fetchpriority="high"
          />
          <span className="sr-only">Natural Wohnbau</span>
        </a>

        {/* QENDËR: MENU */}
        <ul id="primary-menu" className={`nv-menu ${mobileOpen ? "is-open" : ""}`}>
          {MENU.map((group) => (
            <li
              key={group.key}
              className={`nv-item ${openMenu === group.key ? "is-active" : ""}`}
              onMouseEnter={() => setOpenMenu(group.key)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="nv-link has-caret"
                onClick={() => handleOpen(group.key)}
                aria-expanded={openMenu === group.key}
                aria-haspopup="true"
              >
                {group.label}
                <svg className="caret" width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M5 7l5 6 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className={`nv-dropdown ${openMenu === group.key ? "open" : ""}`}>
                <ul className="nv-dropdown-grid">
                  {group.items.map((it) => (
                    <li key={it.label}>
                      <a className="nv-dd-link" href={it.href}>
                        <span className="dd-text">{it.label}</span>
                        <svg className="dd-arrow" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}

          <li className="nv-item solo">
            <a className="nv-link" href="/uber-uns">Uber Uns</a>
          </li>
          <li className="nv-item solo">
            <a className="nv-link" href="/kontakt">Kontakt</a>
          </li>
        </ul>

        {/* DJATHTAS: GLOBE + CTA + BURGER */}
        <div className="nv-utilities">
          <div className="globe">
            <button
              className="nv-link icon-only"
              aria-label="Sprache ändern"
              aria-expanded={langOpen}
              onClick={() => setLangOpen((s) => !s)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c3 2.5 3 17.5 0 20m0-20C9 4.5 9 19.5 12 22M2 12h20M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            <div className={`nv-lang ${langOpen ? "open" : ""}`}>
              <a href="/?lang=de" className="nv-dd-link">DE</a>
              <a href="/?lang=en" className="nv-dd-link">EN</a>
            </div>
          </div>

          <a className="nv-cta" href="/anfragen" role="button" aria-label="Anfragen">
            <span>Anfragen</span>
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <button
            className={`nv-burger ${mobileOpen ? "is-open" : ""}`}
            onClick={toggleMobile}
            aria-expanded={mobileOpen}
            aria-controls="primary-menu"
            aria-label="Menü umschalten"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
