import React from "react";
import './PropertyDetail.css'

/* --- Ikona të thjeshta (SVG) --- */
const IconLiving = (p) => (      // WOHNEN
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M4 13v-2a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2M3 13h18v4H3zM6 17v2m12-2v2"
      fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconGarage = (p) => (      // GARAGEN
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M3 10l9-6 9 6v10H3z" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <path d="M7 18h10M7 15h10" fill="none" stroke="#15222B" strokeWidth="1.6"/>
  </svg>
);
const IconKitchen = (p) => (     // KÜCHE/ESSEN
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M6 3v8M10 3v8M8 3v8M14 3v18M18 3l3 6h-6l3-6z"
      fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconBed = (p) => (         // SCHLAFEN
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M3 17v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 13h18"
      fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconBath = (p) => (        // BAD
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M4 10h16v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-4zM7 6a3 3 0 0 1 6 0v4"
      fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconDoor = (p) => (        // FLUR
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <rect x="5" y="3" width="14" height="18" rx="1.5"
      fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <circle cx="15" cy="12" r="1" fill="#15222B"/>
  </svg>
);
const IconChild = (p) => (       // KIND
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <circle cx="12" cy="6" r="2.2" fill="#15222B"/>
    <path d="M6 20l2-6h8l2 6M9 12v2m6-2v2"
      fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconGuest = (p) => (       // GAST
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <circle cx="12" cy="7" r="3" fill="none" stroke="#15222B" strokeWidth="1.6"/>
    <path d="M6 19a6 6 0 0 1 12 0" fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const features = [
  { icon: IconLiving,  title: "WOHNEN",       sub: "34.51 m²" },
  { icon: IconGarage,  title: "GARAGEN",      sub: "30.27 m²" },
  { icon: IconKitchen, title: "KÜCHE/ESSEN",  sub: "9.72 m²"  },
  { icon: IconBed,     title: "SCHLAFEN",     sub: "14.08 m²" },
  { icon: IconBath,    title: "BAD",          sub: "10.27 m²"  },
  { icon: IconDoor,    title: "FLUR",         sub: "19.30 m²" },
  { icon: IconChild,   title: "KIND",         sub: "13.47 m²" },
  { icon: IconGuest,   title: "BUERO",         sub: "11.33 m²" },
];

export default function PropertyDetail() {
  return (
    <section className="pd8n4">
      <div className="pd8n4__inner">
        {/* Title / Subtitle */}
        <h2 className="pd8n4__title">ROAN 130-2</h2>

        {/* Features grid */}
        <div className="pd8n4__features">
          {features.map((f) => {
            const Ico = f.icon;
            return (
              <div className="pd8n4__feat" key={f.title}>
                <div className="pd8n4__ico">
                  <Ico />
                </div>
                <div className="pd8n4__fcopy">
                  <div className="pd8n4__ftitle">{f.title}</div>
                  <div className="pd8n4__fsub">{f.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
