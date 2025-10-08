import React, { useEffect, useMemo } from "react";
import "./Buerocontainer.css";
import heroBgUrl from "../../../../images/buerocontainer.webp";
import fig1 from '../Buerocontainer/OC-M600-2/OC_M600-2-11-scaled.webp'
import fig2 from '../Buerocontainer/OC-M300-1/OC_M300-1-4.webp'
import fig3 from '../Buerocontainer/OC-M600-1/OC_M600-1-8-scaled.webp'
import fig4 from '../Buerocontainer/OC-M600-2/OC_M600-2-12-scaled.webp'
import fig5 from '../Buerocontainer/OC-M600-3/OC_M600-3-16-scaled.webp'
import fig6 from '../Buerocontainer/OC-M600-4/OC_M600-4-20-scaled.webp'
import fig7 from '../Buerocontainer/OC-M600-5/OC_M600-5-24-scaled.webp'


export default function Sanitaercontainer() {
  const containers = useMemo(() => ([
    {
      id: "wc-standard",
      title: "Mobiles Bürocontainer",
      tag: "OCM3001",
      size: "3000×2438 mm / 7,31 m²",
      img: fig2,
      link: "/oc-m300-1"
    },
    {
      id: "wc-dusche",
      title: "Mobiles Bürocontainer",
      tag: "OCM6001",
      size: " 6058x2438 mm / 14.76 m²",
      img: fig3,
      link: "/oc-m600-1"
    },
    {
      id: "barrierefrei",
      title: "Mobiles Bürocontainer",
      tag: "OCM6002",
      size: "6058x2438 mm / 14.76 m²",
      img: fig4,
      link: "/oc-m600-2"
    },
    {
      id: "premium-gold",
      title: "Mobiles Bürocontainer",
      tag: "OCM6003",
      size: "6058 × 2438 mm / 14,76 m²",
      img: fig5,
      link: "/oc-m600-3"
    },
    {
      id: "hybrid-eco",
      title: "Mobiles Bürocontainer",
      tag: "OCM6004",
      size: "6058X24386 mm / 14.72 m²",
      img: fig6,
      link: "/oc-m600-4"
    },
    {
      id: "modular-combi",
      title: "Mobiles Bürocontainer",
      tag: "OCM6005",
      size: "6058x4876 mm / 29,67 m²",
      img: fig7,
      link: "/oc-m600-5"
    },
  ]), []);

  const specs = [
  { k: "Abmessungen", v: "L 6–12 m · B 2.5–3 m · H 2.8–3 m" },
  { k: "Dämmung", v: "PUR/PIR 80–120 mm · Uw ab 0,22 W/m²K" },
  { k: "Strom/Netzwerk", v: "230/400 V · RJ45 · FI/LS · LED 4000 K" },
  { k: "Fenster/Türen", v: "PVC/Alu · 3-fach Verglasung · RC2 optional" },
  { k: "Boden/Wände", v: "Vinyl HSP · HPL · waschfeste Wände" },
  { k: "Lieferzeit", v: "ca. 2–6 Wochen je Konfiguration" },
];

  const IconLuxus = (props) => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      fill="currentColor"
      d="m428.5 33.97h50.68c3.86 0 7 3.15 7 7v426.13c0 3.85-3.15 7-7 7-28.03 0-56.04 0-84.05 0-3.86 0-6.97-3.12-7-6.94-.43-5.73-2.18-11.06-5.13-15.62-10.06-15.59-27.1-12.95-39.26-32.63-8.53-13.86-8.53-31.8 0-45.67 12.19-19.76 29.65-17.21 39.2-32.68 5.7-9.24 5.7-21.77 0-31.01-9.55-15.48-27.01-12.95-39.2-32.68-8.53-13.86-8.53-31.8 0-45.67 12.19-19.73 29.65-17.21 39.2-32.68 5.7-9.24 5.7-21.74 0-31.01-9.55-15.48-27.01-12.93-39.2-32.68-8.53-13.86-8.53-31.8 0-45.67 12.16-19.64 29.2-17.04 39.26-32.63 3-4.68 4.76-10.12 5.16-15.99.23-3.71 3.32-6.55 6.97-6.55v-.03h33.37zm-7.01 426.13v-412.13h-20.27c-2.78 13.95-11.34 25.34-24.12 32.23-8.5 4.59-16.27 7.85-21.49 16.3-5.7 9.24-5.7 21.74 0 30.98 9.55 15.48 27.01 12.95 39.2 32.71 8.53 13.86 8.53 31.8 0 45.64-12.19 19.76-29.65 17.23-39.2 32.71-5.7 9.24-5.7 21.74 0 30.98 9.55 15.48 27.01 12.95 39.2 32.71 8.53 13.86 8.53 31.78 0 45.64-12.19 19.76-29.65 17.23-39.2 32.71-5.7 9.24-5.7 21.74 0 30.98 9.52 15.42 26.48 12.78 39.15 32.43 3.15 4.88 5.33 10.29 6.46 16.1h20.27zm-188.67-24.55c.11-3.83 3.32-6.89 7.17-6.77 3.86.11 6.89 3.32 6.77 7.17l-.65 22.45 59.33-71.89-20.21-18.77c-2.81-2.64-2.98-7.06-.34-9.86 2.61-2.83 7.03-3 9.86-.37l25.03 23.24c2.81 2.61 2.98 7.03.37 9.84l-62.16 75.32 23.22-6.43c3.71-1.02 7.57 1.16 8.59 4.88 1.02 3.71-1.16 7.54-4.88 8.59l-44.53 12.33c-4.56 1.25-8.96-2.3-8.84-6.92zm61.4-284.48c-2.83 2.61-7.26 2.47-9.86-.37-2.64-2.81-2.47-7.23.34-9.86l20.75-19.28-59.33-71.89.65 22.45c.11 3.85-2.92 7.06-6.77 7.17s-7.06-2.92-7.17-6.77l-1.28-42.77c-.11-4.65 4.28-8.19 8.84-6.92l44.53 12.33c3.71 1.02 5.9 4.85 4.88 8.56-1.02 3.74-4.88 5.9-8.59 4.88l-23.22-6.41 62.16 75.29c2.61 2.83 2.44 7.23-.37 9.84zm-107.04 74.86c-3.15-2.24-3.88-6.58-1.64-9.72 2.24-3.15 6.6-3.88 9.75-1.64 27.04 19.3 27.04 59.64 0 78.94-3.15 2.24-7.51 1.5-9.75-1.64-2.24-3.12-1.5-7.48 1.64-9.72 19.19-13.7 19.25-42.44 0-56.22zm50.74-48.93c-2.66-2.78-2.55-7.2.23-9.86 2.81-2.66 7.23-2.55 9.89.26 46.23 48.59 46.23 124.72 0 173.28-2.66 2.81-7.09 2.92-9.89.25-2.78-2.66-2.89-7.09-.23-9.86 41.08-43.15 41.05-110.95 0-154.07zm-24.77 21.4c-2.52-2.92-2.21-7.31.71-9.84 2.89-2.52 7.31-2.21 9.84.71 32.23 37.22 32.23 92.3 0 129.52-2.52 2.92-6.94 3.23-9.84.71-2.92-2.52-3.23-6.92-.71-9.84 27.61-31.91 27.61-79.34 0-111.26zm-174.93-6.57h43.8l61.82-36.91c10.63-6.35 24.09 1.33 24.09 13.66v170.93c0 12.3-13.46 19.98-24.09 13.63l-61.82-36.88h-43.8c-8.84 0-16.04-7.2-16.04-16.07v-92.32c0-8.84 7.2-16.04 16.04-16.04zm45.7 13.97h-45.7c-1.13 0-2.04.94-2.04 2.07v92.32c0 1.13.91 2.07 2.04 2.07h45.69c1.22 0 2.47.34 3.57.99l63.52 37.93c1.28.77 2.92-.08 2.92-1.67v-170.93c0-1.62-1.64-2.47-2.92-1.7l-63.04 37.64c-1.12.83-2.54 1.28-4.04 1.28zm388.26-157.83h-36.68v412.13h36.68z"
    />
  </svg>
  );
  const IconMontage = (props) => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="m497 0h-482c-8.285156 0-15 6.714844-15 15v481c0 8.285156 6.714844 15 15 15h482c8.285156 0 15-6.714844 15-15v-481c0-8.285156-6.714844-15-15-15zm-15 241h-60c-16.542969 0-30 13.457031-30 30v16.445312c0 8.546876-6.953125 15.5-15.5 15.5s-15.5-6.953124-15.5-15.5v-16.445312c0-16.542969-13.457031-30-30-30h-60v-60h16.445312c25.085938 0 45.5-20.410156 45.5-45.5s-20.414062-45.5-45.5-45.5h-16.445312v-60h211zm-452-211h211v60c0 16.542969 13.457031 30 30 30h16.445312c8.546876 0 15.5 6.953125 15.5 15.5s-6.953124 15.5-15.5 15.5h-16.445312c-16.542969 0-30 13.457031-30 30v60h-211zm0 241h211v60h-16.5c-25.089844 0-45.5 20.410156-45.5 45.5s20.410156 45.5 45.5 45.5h16.5v59h-211zm452 210h-211v-59c0-16.542969-13.457031-30-30-30h-16.5c-8.546875 0-15.5-6.953125-15.5-15.5s6.953125-15.5 15.5-15.5h16.5c16.542969 0 30-13.457031 30-30v-60h60v16.445312c0 25.085938 20.410156 45.5 45.5 45.5s45.5-20.414062 45.5-45.5v-16.445312h60zm0 0"
      />
    </svg>
  );
  const IconLeafs = (props) => (
    <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M824.6,262.4C824.6,262.4,824.6,262.4,824.6,262.4c-3.2-20.1-20.8-35.1-41.1-35.1c-0.1,0-0.3,0-0.4,0  c-126.2,1.3-247.9,46.3-344.6,126.9c-3-35.4-13.1-69.9-29.8-101.5c-22.8-43.1-57.1-79.1-99-104.1c0,0,0,0,0,0  c-16.9-10.1-38-7.3-51.2,6.8c0,0,0,0,0,0c-62.8,66.9-96.6,154.3-95.1,246.1c1.4,88.4,35.4,171.6,96,235.5c-5.7,21.8-10,44-12.9,66.6  c-1.2,9.3,5.3,17.8,14.7,19.1c0.7,0.1,1.5,0.1,2.2,0.1c8.4,0,15.7-6.2,16.8-14.8c3.1-23.5,7.7-46.5,13.9-68.8c0.7-1.5,1.1-3,1.3-4.6  c61.3-214.9,259.5-370.9,488.3-373.3h0c0,0,0,0,0.1,0c3.6,0,7,2.9,7.6,6.4c0,0,0,0,0,0c12.6,79.5,13,160.1,1.2,239.7  c-0.2,0.6-0.4,1.2-0.5,1.8c-23.5,100.9-89.1,187.1-180.2,236.4c-80.3,43.6-173.8,55-261.5,32.9c29.6-19.5,58-40.9,85.1-64.2  c71.5-61.5,131.6-134.2,178.6-215.9c4.7-8.1,1.9-18.5-6.3-23.2c-8.1-4.7-18.5-1.9-23.2,6.3C516,600,417.9,699,301.3,768.8  c-0.5,0.2-0.9,0.5-1.4,0.8c-37.4,22.3-76.6,41.5-117.4,57.5c-8.7,3.4-13.1,13.3-9.6,22c2.6,6.7,9,10.8,15.8,10.8  c2.1,0,4.2-0.4,6.2-1.2c40.4-15.8,79.2-34.6,116.4-56.3c41.4,14,84.4,21,127.3,21c65.4,0,130.5-16.1,189.1-48  C726.3,722,797.7,629,824,520.1c0.6-1.4,1.1-2.9,1.3-4.5C838.2,431.6,837.9,346.4,824.6,262.4z M334.1,470  c-0.2-18.2-1-35.1-2.4-51.3c-3.1-34.6-9-71-18-111.5c-2-9.2-11.1-14.9-20.3-12.9c-9.2,2-14.9,11.1-12.9,20.3  c8.7,39,14.4,74,17.3,107.1c2.8,31.7,3.1,66.6,0.8,109.5c-10.8,21.8-20.2,44.3-28,67.5c-102.4-122.2-98.9-301.5,12.5-420.1  c0,0,0,0,0,0c2.2-2.4,6-2.7,9.1-0.9c0,0,0,0,0,0c72.9,43.4,115.8,122,113.1,206.4C378.5,410.4,354.7,439.2,334.1,470z"
      />
    </svg>
  );
const IconFacility = (props) => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <g fill="currentColor">
      <path d="m459.669 82.906-196-81.377c-4.91-2.038-10.429-2.039-15.338 0l-196 81.377c-7.465 3.1-12.331 10.388-12.331 18.471v98.925c0 136.213 82.329 258.74 208.442 310.215 4.844 1.977 10.271 1.977 15.116 0 126.111-51.474 208.442-174.001 208.442-310.215v-98.925c0-8.083-4.865-15.371-12.331-18.471zm-27.669 117.396c0 115.795-68 222.392-176 269.974-105.114-46.311-176-151.041-176-269.974v-85.573l176-73.074 176 73.074zm-198.106 67.414 85.964-85.963c7.81-7.81 20.473-7.811 28.284 0s7.81 20.474-.001 28.284l-100.105 100.105c-7.812 7.812-20.475 7.809-28.284 0l-55.894-55.894c-7.811-7.811-7.811-20.474 0-28.284s20.474-7.811 28.284 0z" />
    </g>
  </svg>
);

  const IconBuilding16 = (props) => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <g fill="currentColor">
        <path d="m15.5 6.125h-2.8864746l-3.7926636-2.5284424c.3344116-.2510376.5541382-.6470947.5541382-1.0965576 0-.2070313-.1679688-.375-.375-.375s-.375.1679688-.375.375c0 .3447266-.2802734.625-.625.625s-.625-.2802734-.625-.625.2802734-.625.625-.625c.2070313 0 .375-.1679688.375-.375v-1c0-.2070313-.1679688-.375-.375-.375s-.375.1679688-.375.375v.6767578c-.5766602.1640625-1 .6948242-1 1.3232422 0 .4494629.2197266.84552.5541382 1.0965576l-3.7926636 2.5284424h-2.8864746c-.2070313 0-.375.1679688-.375.375v9c0 .2070313.1679688.375.375.375h15c.2070313 0 .375-.1679688.375-.375v-9c0-.2070312-.1679687-.375-.375-.375zm-2 8c-.2070313 0-.375.1679688-.375.375v.625h-1.25v-.625c0-.2070313-.1679688-.375-.375-.375s-.375.1679688-.375.375v.625h-1.25v-.625c0-.2070313-.1679688-.375-.375-.375s-.375.1679688-.375.375v.625h-1.25v-.625c0-.2070313-.1679688-.375-.375-.375s-.375.1679688-.375.375v.625h-1.25v-5.625c0-.2070313-.1679688-.375-.375-.375h-3c-.2070313 0-.375.1679688-.375.375v5.625h-1.25v-8.25h2.25v.625c0 .2070313.1679688.375.375.375s.375-.1679687.375-.375v-.625h1.25v.625c0 .2070313.1679688.375.375.375s.375-.1679687.375-.375v-.625h1.25v.625c0 .2070313.1679688.375.375.375s.375-.1679687.375-.375v-.625h1.25v.625c0 .2070313.1679688.375.375.375s.375-.1679687.375-.375v-.625h1.25v.625c0 .2070313.1679688.375.375.375s.375-.1679688.375-.375v-.625h1.25v8.25h-1.25v-.625c0-.2070312-.1679687-.375-.375-.375zm-10.625-4.25h2.25v5.25h-2.25zm1.8635254-3.75 3.2614746-2.1743164 3.2614746 2.1743164z" />
        <path d="m12.5 9.125h-5c-.2070313 0-.375.1679688-.375.375v3c0 .2070313.1679688.375.375.375h5c.2070313 0 .375-.1679688.375-.375v-3c0-.2070312-.1679687-.375-.375-.375zm-2.125.75h1.75v2.25h-1.75zm-.75 2.25h-1.75v-2.25h1.75z" />
      </g>
    </svg>
  );
  const IconAccessibility = (props) => (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path d="M30,0 C13.4314575,-1.01453063e-15 2.02906125e-15,13.4314575 0,30 C-2.02906125e-15,46.5685425 13.4314575,60 30,60 C46.5685425,60 60,46.5685425 60,30 C59.981263,13.4392249 46.5607751,0.0187370435 30,0 Z M30,58 C14.536027,58 2,45.463973 2,30 C2,14.536027 14.536027,2 30,2 C45.463973,2 58,14.536027 58,30 C57.9823655,45.4566626 45.4566626,57.9823655 30,58 Z" />
        <path d="M30,4 C15.6405965,4 4,15.6405965 4,30 C4,44.3594035 15.6405965,56 30,56 C44.3594035,56 56,44.3594035 56,30 C55.983468,15.6474499 44.3525501,4.01653204 30,4 Z M30,54 C16.745166,54 6,43.254834 6,30 C6,16.745166 16.745166,6 30,6 C43.254834,6 54,16.745166 54,30 C53.9845705,43.2484376 43.2484376,53.9845705 30,54 Z" />
        <path d="M30,21 C33.3137085,21 36,18.3137085 36,15 C36,11.6862915 33.3137085,9 30,9 C26.6862915,9 24,11.6862915 24,15 C24.0033074,18.3123376 26.6876624,20.9966926 30,21 Z M30,11 C32.209139,11 34,12.790861 34,15 C34,17.209139 32.209139,19 30,19 C27.790861,19 26,17.209139 26,15 C26,12.790861 27.790861,11 30,11 Z" />
        <path d="M43.927,22.008 L43.911,22.008 L33.411,22.951 C33.053,22.9836667 32.6946667,23 32.336,23 L27.664,23 C27.306,23 26.9483333,22.984 26.591,22.952 L16.073,22.008 C14.4211163,21.8782131 12.9767869,23.1121163 12.847,24.764 C12.7172131,26.4158837 13.9511163,27.8602131 15.603,27.99 L24.09,28.76 C24.6049502,28.8065341 24.999513,29.2379517 25,29.755 L25,32.055 C25.0003524,32.5549913 24.9067272,33.0505945 24.724,33.516 L19.912,45.771 C19.2412502,47.2864694 19.9260306,49.0587502 21.4415,49.7295 C22.9569694,50.4002498 24.7292502,49.7154694 25.4,48.2 L29.986,36.987 L34.615,48.23 C35.3052861,49.7074001 37.0492941,50.3628403 38.5417645,49.7057727 C40.034235,49.0487051 40.7285204,47.319794 40.105,45.813 L35.276,33.513 C35.0937471,33.0481548 35.0001344,32.5532967 35,32.054 L35,29.754 C35.000487,29.2369517 35.3950498,28.8055341 35.91,28.759 L44.383,27.99 C46.0351598,27.864079 47.2724208,26.4226598 47.1464999,24.7705 C47.020579,23.1183402 45.5791598,21.8810791 43.927,22.007 L43.927,22.008 Z M44.216,26 L35.729,26.77 C34.181153,26.903227 32.994277,28.2014405 33,29.755 L33,32.055 C32.9996019,32.8055551 33.1403827,33.5494884 33.415,34.248 L38.261,46.587 C38.4965494,47.0865416 38.2825416,47.6824506 37.783,47.918 C37.2834584,48.1535494 36.6875494,47.9395416 36.452,47.44 L31.833,36.227 C31.5266513,35.4847868 30.8029508,35.0005712 30,35.0005712 C29.1970492,35.0005712 28.4733487,35.4847868 28.167,36.227 L23.561,47.41 C23.4177952,47.7503309 23.0987074,47.9840573 22.7310323,48.017937 C22.3633573,48.0518168 22.0069313,47.8803363 21.8039457,47.5719054 C21.6009602,47.2634745 21.5844493,46.8682879 21.761,46.544 L26.59,34.244 C26.8627455,33.5461569 27.001829,32.8032475 27,32.054 L27,29.754 C27.0067669,28.1996736 25.8196157,26.9002889 24.271,26.767 L15.77,26 C15.2177153,25.9610639 14.8015639,25.4817847 14.8405,24.9295 C14.8794361,24.3772153 15.3587153,23.9610639 15.911,24 L26.411,24.943 C26.827,24.9803333 27.244,24.999 27.662,24.999 L32.334,24.999 C32.752,24.999 33.169,24.9803333 33.585,24.943 L44.08,24 C44.344286,23.9790735 44.6059809,24.0645905 44.8069115,24.237541 C45.007842,24.4104915 45.1313571,24.6565431 45.15,24.921 C45.1717311,25.1885073 45.0850194,25.4535218 44.9093653,25.6564455 C44.7337112,25.8593693 44.4838602,25.9831676 44.216,26 Z" />
      </g>
    </svg>
  );




  useEffect(() => {
    // Reveal on scroll
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));

    // Subtle parallax for hero glows
    const g1 = document.querySelector(".glow.g1");
    const g2 = document.querySelector(".glow.g2");
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 40; // -20..20
      const y = (e.clientY / h - 0.5) * 40;
      if (g1) g1.style.transform = `translate(${x * 0.6}px, ${y * 0.5}px)`;
      if (g2) g2.style.transform = `translate(${x * -0.4}px, ${y * -0.3}px)`;
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="san-page">
      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-bg" aria-hidden="true">
          {/* Background prapa gjithçkaje */}
          <div
            className="hero-photo"
            style={{ backgroundImage: `url(${heroBgUrl})` }}
          />
          {/* Glow-et ekzistuese, mbeten sipër background-it */}
          <div className="glow g1" />
          <div className="glow g2" />
        </div>

        <div className="container">
          <div className="hero-copy reveal is-visible">
            <h1 className="headline headline--lux reveal" style={{ animationDelay: "80ms" }}>
            Luxuriöse Modularbüros – sofort einsatzbereit
          </h1>
            <p className="lead">
              Unsere Bürocontainer vereinen hochwertige Materialien mit effizienter Technik und
            zeitloser Ästhetik. Für Baustellen, temporäre HQs oder zusätzliche Arbeitsplätze – ohne
            Kompromisse bei Komfort, Akustik und Nachhaltigkeit.
            </p>
          </div>
        </div>
      </section>
      {/* FEATURES */}
      <section className="section" id="warum-wir">
        <div className="container">
          <div className="reveal">
            <div className="kicker">Warum unser Bürocontainer?</div>
            <h2 className="h2">Höchster Standard, modernes Design und intelligente Funktionen</h2>
          </div>

          <div className="features" style={{ marginTop: 18 }}>
            {[
              { ico: <IconMontage />, t: "Schnelle Montage", d: "Lieferung & Anschluss am selben Tag durch zertifiziertes Team." },
              { ico: <IconLuxus />, t: "Akustik & Klima", d: "Leise Arbeitsumgebung, effiziente Klimatisierung & LED-Beleuchtung." },
              { ico: <IconLeafs />, t: "Eco–Smart", d: "Hochwertige Dämmung, geringe Betriebskosten, optional Solar-Ready." },
              { ico: <IconFacility />, t: "Sicherheit", d: "Robuste Konstruktion, antibakterielle Oberflächen, leicht zu reinigen." },
              { ico: <IconBuilding16 />, t: "Modularität", d: "Skalierbar: Einzelbüro, Meeting, Sanitär, Lager – frei kombinierbar." },
              { ico: <IconAccessibility />, t: "Barrierefreiheit", d: "Optionen nach EU-Standard: Rampen, 90-cm-Türen, kontrastreiche Leitsysteme." },
            ].map((f, i) => (
              <div className="feature reveal" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="icon" aria-hidden="true">{f.ico}</div>
                <div className="h3">{f.t}</div>
                <p style={{ margin: 0, opacity: .9 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* MODELLE */}
      <section className="section" id="modelle">
        <div className="container">
          <div className="reveal">
            <div className="kicker">Modelle</div>
            <h2 className="h2">Finden Sie das passende Sanitärcontainer-Modell</h2>
          </div>

          <div className="models-grid">
            {containers.map((m, i) => (
              <article className="model-card reveal" key={m.id} style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="model-media">
                  <img src={m.img} alt={m.title} loading="lazy" />
                </div>
                <div className="model-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <h3 className="h3" style={{ margin: 0 }}>{m.title}</h3>
                    <span className="tag">{m.tag}</span>
                  </div>

                  <div className="specs">
                    <span>📐 <strong>Maße:</strong> {m.size}</span>
                  </div>

                  <div className="cta-row">
                    <a className="btn is-outline" href={m.link} aria-label={`Modell ${m.title} öffnen`}>Modell öffnen</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNISCHE DATEN */}
<section className="container tdata" aria-labelledby="tdata-title" id="daten">
  <h2 id="tdata-title" className="section-title reveal">Technische Daten</h2>
  <div className="tdata__grid">
    {specs.map((s, i) => (
      <div className="tdata__card reveal" key={i} style={{ animationDelay: `${i * 60}ms` }}>
        <div className="tdata__key">{s.k}</div>
        <div className="tdata__value">{s.v}</div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
}