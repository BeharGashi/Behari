import React from "react";
import "./PropertyDetail140.css";

/* --- Ikona (SVG të thjeshta) --- */
const IconTerrace = (p) => ( // TERRASSE
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M12 5l7 4H5l7-4zM12 9v9M6 18h12" fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconHall = (p) => ( // DIELE (hyrje)
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <rect x="5" y="3" width="14" height="18" rx="1.5" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <circle cx="14.5" cy="12" r="1" fill="#15222B"/>
    <path d="M5 19h14" stroke="#15222B" strokeWidth="1.6"/>
  </svg>
);
const IconDoor = (p) => ( // FLUR (korridor)
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <rect x="5" y="3" width="14" height="18" rx="1.5" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <circle cx="15" cy="12" r="1" fill="#15222B"/>
  </svg>
);
const IconLiving = (p) => ( // WOHNEN & ESSEN
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M4 13v-2a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2M3 13h18v4H3zM6 17v2m12-2v2"
      fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconKitchen = (p) => ( // KÜCHE
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M4 7h16M7 7v10m10-10v10M4 17h16" fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="9" cy="11" r="0.9" fill="#15222B"/><circle cx="15" cy="11" r="0.9" fill="#15222B"/>
  </svg>
);
const IconPantry = (p) => ( // SPEIS
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <rect x="4" y="4" width="16" height="16" rx="1.5" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <path d="M4 10h16M4 14h16" stroke="#15222B" strokeWidth="1.6"/>
    <circle cx="9" cy="8" r="0.9" fill="#15222B"/><circle cx="15" cy="8" r="0.9" fill="#15222B"/>
  </svg>
);
const IconBed = (p) => ( // SCHLAFEN
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M3 17v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 13h18"
      fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconGuest = (p) => ( // GAST
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <circle cx="12" cy="7" r="3" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <path d="M6 19a6 6 0 0 1 12 0" fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconTech = (p) => ( // TECHNIKRAUM
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <circle cx="12" cy="12" r="3" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1"
      stroke="#15222B" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconBath = (p) => ( // BAD
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M4 10h16v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-4zM7 6a3 3 0 0 1 6 0v4"
      fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* --- Të dhënat sipas fotos --- */
const features = [
  { icon: IconTerrace, title: "Terrasse",        sub: "9.91 m²"  },
  { icon: IconHall,    title: "Diele",           sub: "3.22 m²"  },
  { icon: IconDoor,    title: "Flur",            sub: "6.71 m²"  },
  { icon: IconLiving,  title: "Wohnen & Essen",  sub: "25.01 m²" },
  { icon: IconKitchen, title: "Küche",           sub: "11.72 m²" },
  { icon: IconPantry,  title: "Speis",           sub: "2.27 m²"  },
  { icon: IconBed,     title: "Schlafen",        sub: "11.69 m²" },
  { icon: IconGuest,   title: "Gast",            sub: "9.80 m²"  },
  { icon: IconTech,    title: "Technikraum",     sub: "5.38 m²"  },
  { icon: IconBath,    title: "Bad",             sub: "6.50 m²"  },
];

export default function PropertyDetail() {
  return (
    <section className="pd140">
      <div className="pd140__inner">
        <h2 className="pd140__title">OPTIMA 80</h2>

        <div className="pd140__features">
          {features.map((f) => {
            const Ico = f.icon;
            return (
              <div className="pd140__feat" key={f.title}>
                <div className="pd140__ico"><Ico /></div>
                <div className="pd140__fcopy">
                  <div className="pd140__ftitle">{f.title}</div>
                  <div className="pd140__fsub">{f.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
