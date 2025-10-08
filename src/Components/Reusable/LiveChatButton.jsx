// src/Components/Reusable/LiveChatButton.jsx
import { color } from "framer-motion";
import React, { useEffect, useState } from "react";
// Nëse do ta gatesh me cookie-consent, mund të importosh hasConsent dhe ta përdorësh më poshtë.
// import { hasConsent } from "../../utils/consent";

// ID-të nga Tawk.to (i ke dhënë më lart)
const TAWK_PROPERTY_ID = "689eec397001f51924432f7f";
const TAWK_WIDGET_ID   = "1j2mclgdh";

export default function LiveChatButton() {
  const [hover, setHover] = useState(false);
  const [ready, setReady] = useState(false); // kur Tawk_API është gati

  useEffect(() => {
    // (Opsionale) Gating me cookie-consent:
    // if (typeof hasConsent === "function" && !hasConsent("functional")) return;

    // Shmang ngarkimin e dyfishtë
    if (window.Tawk_API || document.getElementById("tawk-script")) {
      // Nëse API ekziston, vendos hook-et e nevojshme
      wireTawkAPI();
      return;
    }

    // Inicializo API object
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Shto script-in
    const s1 = document.createElement("script");
    s1.id = "tawk-script";
    s1.async = true;
    s1.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);

    // Kur script-i ngarkohet, configure API
    const onLoadHandler = () => wireTawkAPI();
    s1.addEventListener("load", onLoadHandler);

    return () => {
      s1.removeEventListener("load", onLoadHandler);
      // Zakonisht nuk e heqim script-in në SPA; nëse duhet:
      // document.getElementById("tawk-script")?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lidh eventet e Tawk_API dhe fshih widget-in default
  const wireTawkAPI = () => {
    if (!window.Tawk_API) return;

    // Fshi bubble default, do përdorim vetëm butonin tonë
    window.Tawk_API.onLoad = function () {
      try {
        window.Tawk_API.hideWidget();
      } catch (_) {}
      setReady(true);
    };

    // Nëse tashmë është ngarkuar (p.sh. re-mount), provo të fshehësh menjëherë
    try {
      if (typeof window.Tawk_API.hideWidget === "function") {
        window.Tawk_API.hideWidget();
        setReady(true);
      }
    } catch (_) {}
  };

  const handleClick = () => {
    if (window.Tawk_API) {
      try {
        // Sigurohu që widget-i është i dukshëm pastaj hape modalin
        if (typeof window.Tawk_API.showWidget === "function") {
          window.Tawk_API.showWidget();
        }
        if (typeof window.Tawk_API.maximize === "function") {
          window.Tawk_API.maximize();
        }
      } catch (e) {
        console.warn("Nuk u arrit të hapet Tawk:", e);
      }
    } else {
      console.warn("Tawk chat nuk është gati ende.");
    }
  };

  // Stilet e butonit (brand colors)
  const BUTTON_STYLE = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#15222B",
    color: "#D6B349",
    border: "none",
    borderRadius: "50px",
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    zIndex: 9999,
    transition: "all 0.3s ease",
    opacity: ready ? 1 : 0.8 // pak transparencë derisa të jetë gati
  };

  const HOVER_STYLE = {
    backgroundColor: "#c4a038",
    color: "#15222B"
  };

  return (
    <button
      type="button"
      style={hover ? { ...BUTTON_STYLE, ...HOVER_STYLE } : BUTTON_STYLE}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
      aria-label="Live Chat"
      title={ready ? "Hap live chat" : "Duke u inicializuar…"}
    >
      💬 Live Chat
    </button>
  );
}
