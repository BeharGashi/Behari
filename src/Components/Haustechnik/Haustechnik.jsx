import React, { useEffect } from "react";
import "./Haustechnik.css";
import Relevant from './Haustechnik/Relevant'

/* Asetet */
import heroImg from "./ht-hero.webp";
import f1 from "./ht-feature-1.webp";
import f2 from "./ht-feature-2.webp";
import f3 from "./ht-feature-3.webp";
import elektroImg from "./Elektroinstallation.webp";
import solarImg from "./Solarsysteme.webp"; // ose ndrysho emrin sipas skedarit tënd
import Wasser from './wasserinstallation.webp'


function useInView() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const els = Array.from(document.querySelectorAll(".reveal, .stagger, .wipe, .photo-wipe"));
    if (!els.length) return;
    if (reduced) { els.forEach(el => el.classList.add("in-view")); return; }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.18 });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* Ikona inline */
const IconHeat = () => (
  <svg className="ht-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8 14c0-4 4-5 4-9 0-1.2-.5-2.3-1.3-3.1C12.7 3.6 14 5.2 14 7c0 4-4 5-4 9 0 2 1.6 4 4 4s4-2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const IconVent = () => (
  <svg className="ht-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 8h9a4 4 0 1 0-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M21 16h-9a4 4 0 1 0 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M4 12h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const IconWater = () => (
  <svg className="ht-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3s6 7 6 10a6 6 0 1 1-12 0c0-3 6-10 6-10Z" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
const IconCool = () => (
  <svg className="ht-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2v20M5 5l14 14M5 19L19 5M2 12h20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconSolar = () => (
  <svg className="ht-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="5" y="8" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M5 12h14M9 8v9M15 8v9M12 2v3M4 5l2 2M20 5l-2 2M4 21l2-2M20 21l-2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);
const IconBMS = () => (
  <svg className="ht-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M6 8h6M6 12h10M6 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="17.5" cy="8" r="1.2" fill="currentColor" />
  </svg>
);

export default function Haustechnik() {
  useInView();

  return (
    <div className="ht">
      {/* HERO */}
      <section className="ht-hero container">
        <div className="ht-hero__content wipe">
          <div className="wipe-target">
            <span className="kicker"><i aria-hidden="true" /> Technische Gebäudeausrüstung</span>
            <h1 className="title-grad" style={{ margin: ".45rem 0 .55rem" }}>
              Haustechnik – effizient, komfortabel, digital
            </h1>
            <p>
              Wir planen und realisieren integrierte Haustechnik-Lösungen für Neubau und Sanierung:
              Heizung, Lüftung, Sanitär, Kühlung sowie Photovoltaik und Gebäudeautomation – perfekt
              aufeinander abgestimmt, energieeffizient und zukunftssicher.
            </p>
            <div className="ht-actions" role="group" aria-label="Aktionen">
              <a href="#leistungen" className="btn">Leistungen</a>
              <a href="#kontakt" className="btn btn--gold">Projekt anfragen</a>
            </div>
          </div>
        </div>

        {/* GOLD CORNER në wrapper; PHOTO-WIPE brenda për të shmangur konfliktin e ::after */}
        <div className="ht-hero__media gold-corner" aria-hidden="true">
          <div className="photo-wipe">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="ht-section container">
        <div className="wipe">
          <h2 className="title-grad wipe-target">Unsere Leistungsfelder</h2>
        </div>

        <div className="services stagger">
          <article className="s-card gold-corner">
            <IconHeat />
            <h3>Heizung</h3>
            <p>Wärmepumpen, Biomasse & Hybrid-Systeme – effizient geplant, sauber installiert, smart geregelt.</p>
          </article>

          <article className="s-card gold-corner">
            <IconVent />
            <h3>Lüftung</h3>
            <p>Zentrale & dezentrale Anlagen mit Wärmerückgewinnung für gesundes Raumklima und niedrige Betriebskosten.</p>
          </article>

          <article className="s-card gold-corner">
            <IconWater />
            <h3>Sanitär</h3>
            <p>Trinkwasserhygiene, Druckerhöhung, Speicher- & Zirkulationskonzepte für langlebige Anlagen.</p>
          </article>

          <article className="s-card gold-corner">
            <IconCool />
            <h3>Kälte</h3>
            <p>Prozess- und Raumkühlung mit natürlichen Kältemitteln – leise, effizient, sicher.</p>
          </article>

          <article className="s-card gold-corner">
            <IconSolar />
            <h3>Energie & PV</h3>
            <p>PV-Integration, Lastmanagement und Speicher – maximale Eigenstromquote bei hoher Versorgungssicherheit.</p>
          </article>

          <article className="s-card gold-corner">
            <IconBMS />
            <h3>Gebäudeautomation</h3>
            <p>Mess-, Steuer- und Regeltechnik (MSR) inkl. Monitoring – transparent, skalierbar, aus der Ferne wartbar.</p>
          </article>
        </div>
      </section>

      {/* MERKMALE / VORTEILE */}
      <section id="vorteile" className="ht-section container">
        <div className="wipe"><h2 className="title-grad wipe-target">Mehrwert durch Systemdenken</h2></div>

        <div className="feature-grid">
          {/* gold-corner jashtë, photo-wipe brenda */}
          <figure className="f-card gold-corner">
            <div className="photo-wipe">
              <img src={f1} alt="Detail einer präzise montierten Anlagentechnik" />
            </div>
            <figcaption>
              <h4>Präzision & Dokumentation</h4>
              <p>Saubere Ausführung mit digitaler Abnahme, Prüfprotokollen und klarer Wartungsstrategie.</p>
            </figcaption>
          </figure>

          <figure className="f-card gold-corner">
            <div className="photo-wipe">
              <img src={f2} alt="Energieeffiziente Technikräume mit geordneten Leitungswegen" />
            </div>
            <figcaption>
              <h4>Energieeffizienz</h4>
              <p>Hydraulisch abgeglichen, bedarfsgerecht geregelt und auf Spitzenlasten ausgelegt.</p>
            </figcaption>
          </figure>

          <figure className="f-card gold-corner">
            <div className="photo-wipe">
              <img src={f3} alt="Gebäudeautomation mit visualisiertem Monitoring" />
            </div>
            <figcaption>
              <h4>Monitoring & Service</h4>
              <p>Live-Daten, Alarmierung und Fernwartung – weniger Ausfälle, mehr Transparenz.</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SECTION: Elektroinstallation (majtas tekst, djathtas foto) + link i gjithë seksionit */}
      <section id="elektroinstallation" className="ht-section container">
        <a href="/elektroinstallation" className="sec-link-block">
          <div
            className="ei-split"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1.1fr) minmax(0,0.9fr)",
              alignItems: "center",
              gap: "clamp(18px, 3vw, 36px)"
            }}
          >
            <div className="ei-col ei-col--text">
              <div className="wipe">
                <h2 className="title-grad wipe-target">Elektroinstallation</h2>
              </div>
              <p className="lead" style={{ marginTop: ".4rem" }}>
                Wir planen und realisieren elektrische Anlagen für Neu- und Bestandsgebäude –
                von der Energieverteilung über Beleuchtung bis hin zu Sicherheits- und Datentechnik.
                Sauber ausgeführt, normkonform dokumentiert und zukunftssicher vorbereitet.
              </p>
            </div>

            <div className="ei-col ei-col--media">
              <figure
                className="gold-corner ei-figure"
                style={{
                  margin: 0,
                  borderRadius: "16px",
                  overflow: "hidden",
                  aspectRatio: "16/10",
                  boxShadow: "0 24px 60px rgba(0,0,0,.18)"
                }}
              >
                <div className="photo-wipe">
                  <img
                    src={elektroImg}
                    alt="Sorgfältig installierte Elektroverteilung mit klarer Kabelführung"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              </figure>
            </div>
          </div>
        </a>
      </section>
      {/* SECTION: Solarsysteme (foto majtas, tekst djathtas) */}
      <section id="solarsysteme" className="ht-section container">
        <a href="/solarsysteme" aria-label="Gehe zu Solarsysteme"
          style={{ position: "absolute", inset: 0 }} />
        <div
          className="ss-split"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.1fr)", // FOTO majtas, TEKST djathtas
            alignItems: "center",
            gap: "clamp(18px, 3vw, 36px)"
          }}
        >
          <div className="ss-col ss-col--media">
            <figure
              className="gold-corner ss-figure"
              style={{
                margin: 0,
                borderRadius: "16px",
                overflow: "hidden",
                aspectRatio: "16/10",
                boxShadow: "0 24px 60px rgba(0,0,0,.18)"
              }}
            >
              <div className="photo-wipe">
                <img
                  src={solarImg}
                  alt="Photovoltaik-Installation mit sauber geführten Leitungen und Wechselrichter"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </figure>
          </div>
          <div className="ss-col ss-col--text">
            <div className="wipe">
              <h2 className="title-grad wipe-target">Solarsysteme</h2>
            </div>
            <p className="lead" style={{ marginTop: ".4rem" }}>
              Planung und Montage von Photovoltaik mit Speicher und Lastmanagement – optimal
              integriert in die Haustechnik. Maximale Eigenstromquote, saubere Dokumentation
              und smarte Überwachung für langfristige Wirtschaftlichkeit.
            </p>
          </div>
        </div>
      </section>
      {/* SECTION: Wasserinstallation (majtas tekst, djathtas foto) + link i gjithë seksionit */}
      <section id="elektroinstallation" className="ht-section container">
        <a href="/wasserinstallation" className="sec-link-block">
          <div
            className="ei-split"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1.1fr) minmax(0,0.9fr)",
              alignItems: "center",
              gap: "clamp(18px, 3vw, 36px)"
            }}
          >
            <div className="ei-col ei-col--text">
              <div className="wipe">
                <h2 className="title-grad wipe-target">Wasserinstallation</h2>
              </div>
              <p className="lead" style={{ marginTop: ".4rem" }}>
                Eine durchdachte Wasserinstallation garantiert eine optimale Wasserversorgung und höchste Effizienz.
                Von der Planung bis zur Umsetzung sorgen wir für nachhaltige, sichere und ressourcenschonende Lösungen in Ihrem Zuhause.
              </p>
            </div>

            <div className="ei-col ei-col--media">
              <figure
                className="gold-corner ei-figure"
                style={{
                  margin: 0,
                  borderRadius: "16px",
                  overflow: "hidden",
                  aspectRatio: "16/10",
                  boxShadow: "0 24px 60px rgba(0,0,0,.18)"
                }}
              >
                <div className="photo-wipe">
                  <img
                    src={Wasser}
                    alt="Sorgfältig installierte Elektroverteilung mit klarer Kabelführung"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              </figure>
            </div>
          </div>
        </a>
      </section>
      <Relevant/>
    
    </div>
  );
}
