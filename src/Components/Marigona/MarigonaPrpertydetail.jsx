import React from "react";
import './MarigonaPropertydetail.css'

/* --- Ikona të thjeshta (SVG) --- */
const IconLiving = (p) => (      // WOHNEN
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path d="M4 13v-2a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2M3 13h18v4H3zM6 17v2m12-2v2"
      fill="none" stroke="#15222B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
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


const features = [
  { icon: IconLiving,  title: "WOHNEN",       sub: "32.74 m²" },
  { icon: IconKitchen, title: "KÜCHE/ESSEN",  sub: "9.55 m²"  },
  { icon: IconBed,     title: "SCHLAFEN",     sub: "23.09 m²" },
  { icon: IconBath,    title: "BAD",          sub: "8.37 m²"  },
  { icon: IconDoor,    title: "FLUR",         sub: "19.30 m²" },
  { icon: IconChild,   title: "KIND",         sub: "27.76 m²" },
];



export default function MarigonaPropertyDetail() {
  return (
    <section className="mgpd">
      <div className="mgpd__inner">
        {/* Title */}


        {/* Subtitle */}
        <h2 className="mgpd__title">MARA</h2>

        {/* Features grid */}
        <div className="mgpd__features">
          {features.map((f) => {
            const Ico = f.icon;
            return (
              <div className="mgpd__feat" key={f.title}>
                <div className="mgpd__ico">
                  <Ico />
                </div>
                <div className="mgpd__fcopy">
                  <div className="mgpd__ftitle">{f.title}</div>
                  <div className="mgpd__fsub">{f.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
