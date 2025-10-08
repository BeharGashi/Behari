import React from "react";
import "./PropertyDetail140.css";

/* --- Ikona (SVG) --- */
const IconDoor = (p) => ( // FLUR
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <rect x="5" y="3" width="14" height="18" rx="1.5" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <circle cx="15" cy="12" r="1" fill="#15222B"/>
  </svg>
);
const IconLiving = (p) => ( // WOHNEN/ESSEN
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
const IconBed = (p) => ( // SCHLAFEN
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M3 17v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 13h18"
      fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconRoom = (p) => ( // ZIMMER 2 / ZIMMER 3
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <rect x="4" y="6" width="16" height="12" rx="1.5" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <rect x="7" y="9" width="5" height="4" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <path d="M4 18h16" stroke="#15222B" strokeWidth="1.6"/>
  </svg>
);
const IconBath = (p) => ( // BAD
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M4 10h16v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-4zM7 6a3 3 0 0 1 6 0v4"
      fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconHwr = (p) => ( // HWR
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <rect x="5" y="4" width="14" height="16" rx="1.5" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <circle cx="12" cy="12" r="3.2" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <circle cx="9" cy="7.5" r="0.9" fill="#15222B"/>
  </svg>
);

/* --- Të dhënat sipas fotos --- */
const features = [
  { icon: IconDoor,   title: "FLUR",           sub: "11.95 m²" },
  { icon: IconLiving, title: "WOHNEN/ESSEN",   sub: "24.99 m²" },
  { icon: IconKitchen,title: "KÜCHE",          sub: "8.51 m²"  },
  { icon: IconBed,    title: "SCHLAFEN",       sub: "14.50 m²" },
  { icon: IconRoom,   title: "ZIMMER 2",       sub: "10.57 m²" },
  { icon: IconRoom,   title: "ZIMMER 3",       sub: "10.35 m²" },
  { icon: IconBath,   title: "BAD",            sub: "6.93 m²"  },
  { icon: IconHwr,    title: "HWR",            sub: "4.27 m²"  },
];

export default function PropertyDetail() {
  return (
    <section className="pd140">
      <div className="pd140__inner">
        <h2 className="pd140__title">OPTIMA 90-2</h2>

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
