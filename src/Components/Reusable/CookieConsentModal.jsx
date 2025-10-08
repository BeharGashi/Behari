import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../../utils/cookies";

const BACKDROP = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.45)",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px"
};

const CARD = {
  width: "100%",
  maxWidth: 640,
  background: "#15222B",
  borderRadius: "10px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  overflow: "hidden",
  fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
};

const HEADER = {
  padding: "18px 22px",
  borderBottom: "1px solid #D6B349",
  textAlign: "center",
  fontSize: 22,
  fontWeight: 600,
  color: "white"
};

const BODY = { padding: "18px 22px", color: "white", lineHeight: 1.55, fontSize: 15 };

const DIVIDER = {
  margin: "18px auto",
  width: 80,
  height: 2,
  background: "#D6B349",
  borderRadius: 2
};

const PILL_ROW = { 
  display: "flex", 
  gap: 18, 
  flexWrap: "wrap", 
  marginTop: 10, 
  marginBottom: 16,
  color: "#15222B"
};

const PILL = (active) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: 14,
  background: active ? "#D6B349" : "#f3f4f6",
  border: "1px solid #e5e7eb",
  cursor: "pointer",
  userSelect: "none",
  color: "#15222B",
  fontWeight: active ? "600" : "400"
});

const FOOT = { padding: "18px 22px", display: "grid", gap: 10 };

const BTN = {
  base: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 8,
    border: 0,
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer"
  },
  primary: { background: "#D6B349", color: "#15222B" },
  neutral: { background: "#f3f4f6", color: "#15222B" },
  outline: { background: "#e5e7eb", color: "#15222B" }
};

const LINKS = {
  padding: "8px 0 0",
  display: "flex",
  gap: 18,
  justifyContent: "center",
  fontSize: 14
};

const COOKIE_NAME = "cookie_consent_v1";

const DEFAULT_STATE = {
  essential: true,
  functional: false,
  statistic: false,
  marketing: false
};

export default function CookieConsentModal({ privacyLink = "/datenschutz", imprintLink = "/impressum" }) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(DEFAULT_STATE);

  useEffect(() => {
    const existing = getCookie(COOKIE_NAME, null);
    if (!existing) setOpen(true);
  }, []);

  const handleToggle = (key) => {
    if (key === "essential") return;
    setState((s) => ({ ...s, [key]: !s[key] }));
  };

  const saveConsent = (data) => {
    setCookie(COOKIE_NAME, data, { expires: 365 });
    setOpen(false);
  };

  const onAcceptAll = () => saveConsent({ essential: true, functional: true, statistic: true, marketing: true });
  const onContinueWithout = () => saveConsent({ essential: true, functional: false, statistic: false, marketing: false });
  const onSaveSelection = () => saveConsent(state);

  if (!open) return null;

  return (
    <div style={BACKDROP} role="dialog" aria-modal="true" aria-label="Privatsphäre-Einstellungen">
      <div style={CARD}>
        <div style={HEADER}>Privatsphäre-Einstellungen</div>

        <div style={BODY}>
          <p>
            Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten personenbezogene
            Daten (z.B. deine IP-Adresse) über dich. Wir teilen diese Daten auch mit Dritten. Die Datenverarbeitung kann
            mit deiner Einwilligung oder auf der Grundlage eines berechtigten Interesses erfolgen, dem du widersprechen
            kannst. Du hast das Recht, nur in essenzielle Services einzuwilligen und deine Einwilligung zu einem späteren
            Zeitpunkt in der Datenschutzerklärung zu ändern oder zu widerrufen. Nachfolgend findest du eine Übersicht
            über alle Services, die von dieser Website genutzt werden. Du kannst detaillierte Informationen zu jedem
            Service einsehen und diesen einzeln zustimmen oder von deinem Widerspruchsrecht Gebrauch machen.
          </p>

          <div style={DIVIDER} />

          <p style={{ marginTop: 10 }}>
            Einige Dienste verarbeiten personenbezogene Daten in unsicheren Drittländern. Indem du in die Nutzung dieser
            Services einwilligst, erklärst du dich auch mit der Verarbeitung deiner Daten in diesen unsicheren Drittländern
            gemäß Art. 49 Abs. 1 lit. a DSGVO einverstanden. Dies birgt das Risiko, dass deine Daten von Behörden zu
            Kontroll- und Überwachungszwecken verarbeitet werden, möglicherweise ohne die Möglichkeit eines Rechtsbehelfs.
          </p>

          <div style={PILL_ROW}>
            <span style={PILL(true)} onClick={() => {}}>
              • Essenziell
            </span>
            <span style={PILL(state.functional)} onClick={() => handleToggle("functional")}>
              • Funktional
            </span>
            <span style={PILL(state.statistic)} onClick={() => handleToggle("statistic")}>
              • Statistik
            </span>
            <span style={PILL(state.marketing)} onClick={() => handleToggle("marketing")}>
              • Marketing
            </span>
          </div>
        </div>

        <div style={FOOT}>
          <button style={{ ...BTN.base, ...BTN.primary }} onClick={onAcceptAll}>
            Alle akzeptieren
          </button>
          <button style={{ ...BTN.base, ...BTN.neutral }} onClick={onContinueWithout}>
            Weiter ohne Einwilligung
          </button>
          <button style={{ ...BTN.base, ...BTN.outline }} onClick={onSaveSelection}>
            Individuelle Auswahlen speichern
          </button>

          <div style={LINKS}>
            <a href={privacyLink} style={{ color: "#15222B", textDecoration: "underline" }}>
              Datenschutz
            </a>
            <a href={imprintLink} style={{ color: "#15222B", textDecoration: "underline" }}>
              Impressum
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
