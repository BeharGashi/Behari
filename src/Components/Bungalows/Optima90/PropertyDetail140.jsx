import React from "react";
import "./PropertyDetail140.css";

/* --- Ikona (SVG të thjeshta) --- */
const IconTerrace = (p) => ( // TERRASSE
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M12 5l7 4H5l7-4zM12 9v9M6 18h12" fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconHall = (p) => ( // DIELE
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <rect x="5" y="3" width="14" height="18" rx="1.5" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <circle cx="14.5" cy="12" r="1" fill="#15222B"/>
    <path d="M5 19h14" stroke="#15222B" strokeWidth="1.6"/>
  </svg>
);
const IconDoor = (p) => ( // FLUR
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
const IconKitchen = (p) => ( // KOCHEN
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M4 7h16M7 7v10m10-10v10M4 17h16" fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="9" cy="11" r="0.9" fill="#15222B"/><circle cx="15" cy="11" r="0.9" fill="#15222B"/>
  </svg>
);
const IconHwr = (p) => ( // HWR (Hauswirtschaftsraum)
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <rect x="5" y="4" width="14" height="16" rx="1.5" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <circle cx="12" cy="12" r="3.2" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <circle cx="9" cy="7.5" r="0.9" fill="#15222B"/>
  </svg>
);
const IconBath = (p) => ( // BAD
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M4 10h16v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-4zM7 6a3 3 0 0 1 6 0v4"
      fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
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
const IconWC = (p) => ( // WC
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M6 8h12v2H6zM9 10v2a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3v-2M10 17h4M9 19h6"
      fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* --- Të dhënat sipas fotos --- */
const features = [
  { icon: IconTerrace, title: "Terrasse",        sub: "20.01 m²" },
  { icon: IconHall,    title: "Diele",           sub: "7.65 m²"  },
  { icon: IconDoor,    title: "Flur",            sub: "7.94 m²"  },
  { icon: IconLiving,  title: "Wohnen & Essen",  sub: "25.19 m²" },
  { icon: IconKitchen, title: "Kochen",          sub: "10.57 m²" },
  { icon: IconHwr,     title: "HWR",             sub: "6.24 m²"  },
  { icon: IconBath,    title: "Bad",             sub: "5.88 m²"  },
  { icon: IconBed,     title: "Schlafen",        sub: "13.78 m²" },
  { icon: IconGuest,   title: "Gast",            sub: "14.89 m²" },
  { icon: IconWC,      title: "WC",              sub: "2.08 m²"  },
];

export default function PropertyDetail() {
  return (
    <section className="pd140">
      <div className="pd140__inner">
        <h2 className="pd140__title">OPTIMA 90</h2>

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
