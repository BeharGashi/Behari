import React, { useState } from "react";
import "./anfragen.css";
import Banner from "../Home/homebanner";

/* Opsionet e Haustyp (ndrysho label-ët si të duash) */
const HOUSE_TYPES = [
  { id: "bungalow", label: "Bungalow" },
  { id: "modulhaus", label: "Modulhaus" },
  { id: "einfamilienhaus", label: "Einfamilienhaus" },
  { id: "dopplehaus", label: "Dopplehaus" },
  { id: "mehrfamilienhaus", label: "Mehrfamilienhaus" },
  { id: "garagen", label: "Garagen & Carport" },
  { id: "buero", label: "Büro Container" },
  { id: "sanitaer", label: "Sanitär Container" },
];

/* Helper i vogël për JA/NEIN radio */
function RadioYesNo({ name, value, setValue }) {
  return (
    <div className="inq__radRow">
      <label className="inq__radio">
        <input
          type="radio"
          name={name}
          value="ja"
          checked={value === "ja"}
          onChange={() => setValue("ja")}
        />
        <i /> JA
      </label>
      <label className="inq__radio">
        <input
          type="radio"
          name={name}
          value="nein"
          checked={value === "nein"}
          onChange={() => setValue("nein")}
        />
        <i /> NEIN
      </label>
    </div>
  );
}

export default function Anfragen() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    // Step 1 – Personendaten
    person_name: "",
    person_phone: "",
    person_email: "",
    contact_email: false,
    contact_phone: false,
    contact_whatsapp: false,

    // Adresa personale
    address_street: "",
    address_city: "",
    address_zip: "",
    address_country: "",

    // Step 2 – Haustyp
    house_types: [],

    // Step 3 – Fläche & Etagen
    area_wish: "",
    floors: "",           // "1" | "2" | "3+"
    rooms_count: "",
    baths_count: "",
    basement: "",         // "ja" | "nein"

    // Step 4 – Bauphase
    build_phases: [],

    // Step 5 – Gelände & Infrastruktur
    land_owned: "",       // "ja" | "nein"
    land_address: "",
    land_size: "",
    permit_status: "",    // "ja" | "nein" | "bearbeitung"
    utilities: "",        // "ja" | "nein" | "unsure"

    // Step 6 – Äußere Gestaltung
    facades: [],          // ["verputzen","holz","steine","andere"]
    facade_other: "",
    pool: "",
    markise: "",
    pergola: "",
    sliding_doors: "",
    pool_cover: "",
    whirlpool: "",

    // Step 7 – Innenausstattung
    outer_door: "",       // "holz" | "alu" | "pvc"
    inner_door: "",       // "ja" | "nein"
    stairs: "",           // "holz" | "metal" | "kombination"
    windows: "",          // "holz" | "pvc" | "aluminium"
    flooring: "",         // "parkett" | "keramik"
    kitchen: "",          // "standard" | "individuell"
    bedroom: "",          // "voll" | "bettgestell"
    livingroom: "",       // "voll" | "ohne"
    bathroom: "",         // "standard" | "individuell"
    electrical: "",       // "standard" | "smarthome"
    water_installation: "",// "standard" | "filter"

    // Step 8 – PV Anlagen
    pv_integrated: "",     // "ja" | "nein"
    pv_capacity_kw: "",    // number string
    pv_battery: "",        // "ja" | "nein"
    pv_ev_charger: "",     // "ja" | "nein"

    // Step 9 – Zeitrahmen & Budget
    start_timeframe: "",   // "asap" | "3m" | "6m"
    planned_budget: "",    // €
    financing_status: "",  // "ja" | "nein" | "bearbeitung"

    // Step 10 – Notizen
    notes: "",

    // Step 11 – Unterschrift & Einwilligung
    consent_accept: false,
    consent_date: "",
    consent_signature: "", // Name/Unterschrift e shkruar
  });

  const [errors, setErrors] = useState({});

  /* Helpers */
  const update = (name, value) => setData((d) => ({ ...d, [name]: value }));
  const setRadio = (name, value) => setData((d) => ({ ...d, [name]: value }));

  const toggleType = (id) => {
    setData((d) => {
      const exists = d.house_types.includes(id);
      return {
        ...d,
        house_types: exists ? d.house_types.filter((t) => t !== id) : [...d.house_types, id],
      };
    });
  };

  const toggleBuildPhase = (val) => {
    setData((d) => {
      const has = d.build_phases.includes(val);
      return { ...d, build_phases: has ? d.build_phases.filter((x) => x !== val) : [...d.build_phases, val] };
    });
  };

  const toggleFacade = (id) => {
    setData((d) => {
      const has = d.facades.includes(id);
      return { ...d, facades: has ? d.facades.filter((x) => x !== id) : [...d.facades, id] };
    });
  };

  /* Validime minimale */
  const validateStep1 = () => {
    const e = {};
    if (!data.person_name.trim()) e.person_name = "Schreibe bitte deinen Namen.";
    if (!data.person_phone.trim() && !data.person_email.trim())
      e.person_phone = "Telefon oder E-Mail ist erforderlich.";
    if (!data.contact_email && !data.contact_phone && !data.contact_whatsapp)
      e.contact = "Wähle mindestens eine Kontaktart.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep4 = () => {
    const e = {};
    if (!data.build_phases || data.build_phases.length === 0)
      e.build_phases = "Bitte mindestens eine Bauphase auswählen.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep5 = () => {
    const e = {};
    if (!data.land_owned) e.land_owned = "Bitte auswählen.";
    if (data.land_owned === "ja") {
      if (!data.land_address.trim()) e.land_address = "Adresse angeben.";
      if (!data.land_size) e.land_size = "Größe angeben.";
    }
    if (!data.permit_status) e.permit_status = "Bitte auswählen.";
    if (!data.utilities) e.utilities = "Bitte auswählen.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep8 = () => {
    const e = {};
    if (data.pv_integrated === "ja" && !data.pv_capacity_kw)
      e.pv_capacity_kw = "Bitte Kapazität angeben.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep11 = () => {
    const e = {};
    if (!data.consent_accept) e.consent_accept = "Bitte bestätigen Sie die Einwilligung.";
    if (!data.consent_date) e.consent_date = "Bitte Datum auswählen.";
    if (!data.consent_signature.trim()) e.consent_signature = "Bitte unterschreiben (Name).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* Navigimi */
  const next = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 4 && !validateStep4()) return;
    if (step === 5 && !validateStep5()) return;
    if (step === 8 && !validateStep8()) return;
    if (step === 11 && !validateStep11()) return;
    setErrors({});
    setStep((s) => Math.min(s + 1, 11));
  };

  const back = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
  };

  return (
    <>
      <Banner />

      <section className="inq">
        <div className="inq__inner">
          {/* Stepper */}
          <ol className="inq__steps" role="list">
            {[
              "Personenbezogene Daten",
              "Haustyp",
              "Fläche & Etagen",
              "Bauphase",
              "Grundstück & Versorgung",
              "Äußere Gestaltung",
              "Innenausstattung",
              "PV Anlagen",
              "Zeitrahmen & Budget",
              "Anmerkungen & Fragen",
              "Unterschrift",
            ].map((label, i) => {
              const n = i + 1;
              return (
                <li
                  key={label}
                  className={`inq__step ${step === n ? "is-current" : step > n ? "is-done" : ""}`}
                >
                  <span className="inq__stepNum">{n}</span>
                  <span className="inq__stepLabel">{label}</span>
                </li>
              );
            })}
          </ol>

          <div className="inq__card">
            {/* ===== STEP 1 ===== */}
            {step === 1 && (
              <div className="inq__pane">
                <h2 className="inq__legend">Abschnitt 1: Personenbezogene Daten</h2>

                <div className="inq__grid">
                  <div className="inq__field">
                    <span>Name und Vorname</span>
                    <input
                      type="text"
                      name="person_name"
                      value={data.person_name}
                      onChange={(e) => update("person_name", e.target.value)}
                      placeholder="Max Mustermann"
                    />
                    {errors.person_name && <small className="inq__err">{errors.person_name}</small>}
                  </div>

                  <div className="inq__field">
                    <span>Telefonnummer</span>
                    <input
                      type="tel"
                      name="person_phone"
                      value={data.person_phone}
                      onChange={(e) => update("person_phone", e.target.value)}
                      placeholder="+49 ..."
                    />
                    {errors.person_phone && <small className="inq__err">{errors.person_phone}</small>}
                  </div>

                  <label className="inq__field inq__col2">
                    <span>E-Mail Adresse</span>
                    <input
                      type="email"
                      name="person_email"
                      value={data.person_email}
                      onChange={(e) => update("person_email", e.target.value)}
                      placeholder="email@domain.de"
                    />
                  </label>
                </div>

                {/* Kontaktart */}
                <div className="inq__subgroup">
                  <span className="inq__label">Wie möchten Sie kontaktiert werden?</span>

                  <label className="inq__check">
                    <input
                      type="checkbox"
                      checked={data.contact_email}
                      onChange={(e) => update("contact_email", e.target.checked)}
                    />
                    <i /> E-mail
                  </label>

                  <label className="inq__check">
                    <input
                      type="checkbox"
                      checked={data.contact_phone}
                      onChange={(e) => update("contact_phone", e.target.checked)}
                    />
                    <i /> Telefon
                  </label>

                  <label className="inq__check">
                    <input
                      type="checkbox"
                      checked={data.contact_whatsapp}
                      onChange={(e) => update("contact_whatsapp", e.target.checked)}
                    />
                    <i /> Whatsapp
                  </label>

                  {errors.contact && <small className="inq__err">{errors.contact}</small>}
                </div>

                {/* Adresse */}
                <h3 className="inq__fieldsetTitle">Adresse:</h3>
                <div className="inq__grid inq__grid--addr">
                  <label className="inq__field">
                    <span>Straße und Hausnummer</span>
                    <input
                      type="text"
                      name="address_street"
                      value={data.address_street}
                      onChange={(e) => update("address_street", e.target.value)}
                      placeholder="Musterstraße 12"
                    />
                  </label>

                  <label className="inq__field">
                    <span>Ort</span>
                    <input
                      type="text"
                      name="address_city"
                      value={data.address_city}
                      onChange={(e) => update("address_city", e.target.value)}
                      placeholder="Berlin"
                    />
                  </label>

                  <label className="inq__field">
                    <span>Postleitzahl</span>
                    <input
                      type="text"
                      name="address_zip"
                      value={data.address_zip}
                      onChange={(e) => update("address_zip", e.target.value)}
                      placeholder="10115"
                    />
                  </label>

                  <label className="inq__field">
                    <span>Land</span>
                    <select
                      name="address_country"
                      value={data.address_country}
                      onChange={(e) => update("address_country", e.target.value)}
                    >
                      <option value="" disabled>Bitte auswählen</option>
                      <option value="Deutschland">Deutschland</option>
                      <option value="Österreich">Österreich</option>
                      <option value="Schweiz">Schweiz</option>
                      <option value="Andere">Andere</option>
                    </select>
                  </label>
                </div>
              </div>
            )}

            {/* ===== STEP 2 ===== */}
            {step === 2 && (
              <div className="inq__pane">
                <h2 className="inq__legend">Abschnitt 2: Haustyp</h2>
                <p className="inq__muted">Wählen Sie einen oder mehrere Haustypen, die Sie interessieren.</p>

                <div className="inq__options">
                  {HOUSE_TYPES.map((t) => (
                    <label key={t.id} className="inq__check">
                      <input
                        type="checkbox"
                        checked={data.house_types.includes(t.id)}
                        onChange={() => toggleType(t.id)}
                      />
                      <i />
                      <span className="t">{t.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* ===== STEP 3 – Fläche & Etagen ===== */}
            {step === 3 && (
              <div className="inq__pane">
                <h2 className="inq__legend">Abschnitt 3: Fläche & Etagen</h2>

                <div className="inq__grid">
                  <label className="inq__field inq__col2">
                    <span>Gewünschte Fläche (m²)</span>
                    <input
                      type="number"
                      min="0"
                      inputMode="numeric"
                      name="area_wish"
                      value={data.area_wish}
                      onChange={(e) => update("area_wish", e.target.value)}
                      placeholder="z. B. 120"
                    />
                  </label>
                </div>

                <div className="inq__subgroup">
                  <span className="inq__label">Anzahl der Etagen:</span>
                  <div className="inq__radRow">
                    <label className="inq__check">
                      <input
                        type="radio"
                        name="floors"
                        value="1"
                        checked={data.floors === "1"}
                        onChange={(e) => update("floors", e.target.value)}
                      />
                      <i /> Eine
                    </label>
                    <label className="inq__check">
                      <input
                        type="radio"
                        name="floors"
                        value="2"
                        checked={data.floors === "2"}
                        onChange={(e) => update("floors", e.target.value)}
                      />
                      <i /> Zwei
                    </label>
                    <label className="inq__check">
                      <input
                        type="radio"
                        name="floors"
                        value="3+"
                        checked={data.floors === "3+"}
                        onChange={(e) => update("floors", e.target.value)}
                      />
                      <i /> Drei oder mehr
                    </label>
                  </div>
                </div>

                <div className="inq__grid">
                  <label className="inq__field">
                    <span>Anzahl der Zimmer:</span>
                    <input
                      type="number"
                      min="0"
                      inputMode="numeric"
                      name="rooms_count"
                      value={data.rooms_count}
                      onChange={(e) => update("rooms_count", e.target.value)}
                      placeholder="z. B. 5"
                    />
                  </label>

                  <label className="inq__field">
                    <span>Anzahl Badezimmer:</span>
                    <input
                      type="number"
                      min="0"
                      inputMode="numeric"
                      name="baths_count"
                      value={data.baths_count}
                      onChange={(e) => update("baths_count", e.target.value)}
                      placeholder="z. B. 2"
                    />
                  </label>
                </div>

                <div className="inq__subgroup">
                  <span className="inq__label">Möchten Sie einen Keller?</span>
                  <RadioYesNo name="basement" value={data.basement} setValue={(v) => update("basement", v)} />
                </div>
              </div>
            )}

            {/* ===== STEP 4 ===== */}
            {step === 4 && (
              <div className="inq__pane">
                <h2 className="inq__legend">Abschnitt 4: Gewünschte Bauphase</h2>

                <div className="inq__options">
                  <label className="inq__check">
                    <input
                      type="checkbox"
                      checked={data.build_phases.includes("rohbau")}
                      onChange={() => toggleBuildPhase("rohbau")}
                    />
                    <i />
                    <span className="t">Rohbau</span>
                  </label>

                  <label className="inq__check">
                    <input
                      type="checkbox"
                      checked={data.build_phases.includes("schluessel")}
                      onChange={() => toggleBuildPhase("schluessel")}
                    />
                    <i />
                    <span className="t">Schlüsselfertig</span>
                  </label>

                  <label className="inq__check">
                    <input
                      type="checkbox"
                      checked={data.build_phases.includes("personal")}
                      onChange={() => toggleBuildPhase("personal")}
                    />
                    <i />
                    <span className="t">Personalisiert</span>
                  </label>
                </div>

                {errors.build_phases && <small className="inq__err">{errors.build_phases}</small>}
              </div>
            )}

            {/* ===== STEP 5 ===== */}
            {step === 5 && (
              <div className="inq__pane">
                <h2 className="inq__legend">Abschnitt 5: Gelände und Infrastruktur</h2>

                {/* 5.1 */}
                <div className="inq__subgroup">
                  <span className="inq__label">Sie verfügen über ein baureifes Grundstück?</span>
                  <div className="inq__check">
                    <label className="inq__check">
                      <input
                        type="radio"
                        name="land_owned"
                        checked={data.land_owned === "ja"}
                        onChange={() => setRadio("land_owned", "ja")}
                      />
                      <i /> JA
                    </label>
                    <label className="inq__check">
                      <input
                        type="radio"
                        name="land_owned"
                        checked={data.land_owned === "nein"}
                        onChange={() => setRadio("land_owned", "nein")}
                      />
                      <i /> NEIN
                    </label>
                  </div>
                  {errors.land_owned && <small className="inq__err">{errors.land_owned}</small>}
                </div>

                {/* 5.2 */}
                <div className="inq__subheading">Wenn ja, wo befindet es sich?</div>

                {data.land_owned === "ja" && (
                  <div className="inq__grid inq__grid--two">
                    <label className="inq__field">
                      <span>Adresse</span>
                      <input
                        type="text"
                        value={data.land_address}
                        onChange={(e) => update("land_address", e.target.value)}
                        placeholder="Straße, Nr., Ort"
                      />
                      {errors.land_address && <small className="inq__err">{errors.land_address}</small>}
                    </label>

                    <label className="inq__field">
                      <span>Grundstücksgröße (m²)</span>
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={data.land_size}
                        onChange={(e) => update("land_size", e.target.value)}
                        placeholder="z. B. 600"
                      />
                      {errors.land_size && <small className="inq__err">{errors.land_size}</small>}
                    </label>
                  </div>
                )}

                {/* 5.3 */}
                <div className="inq__subgroup">
                  <span className="inq__label">Haben Sie eine Baugenehmigung?</span>
                  <div className="inq__radios">
                    <label className="inq__check">
                      <input
                        type="radio"
                        name="permit_status"
                        checked={data.permit_status === "ja"}
                        onChange={() => setRadio("permit_status", "ja")}
                      />
                      <i /> JA
                    </label>
                    <label className="inq__check">
                      <input
                        type="radio"
                        name="permit_status"
                        checked={data.permit_status === "nein"}
                        onChange={() => setRadio("permit_status", "nein")}
                      />
                      <i /> NEIN
                    </label>
                    <label className="inq__check">
                      <input
                        type="radio"
                        name="permit_status"
                        checked={data.permit_status === "bearbeitung"}
                        onChange={() => setRadio("permit_status", "bearbeitung")}
                      />
                      <i /> In Bearbeitung
                    </label>
                  </div>
                  {errors.permit_status && <small className="inq__err">{errors.permit_status}</small>}
                </div>

                {/* 5.4 */}
                <div className="inq__subgroup">
                  <span className="inq__label">Gibt es Zugang zur Strom- und Wasserversorgung?</span>
                  <div className="inq__radios">
                    <label className="inq__check">
                      <input
                        type="radio"
                        name="utilities"
                        checked={data.utilities === "ja"}
                        onChange={() => setRadio("utilities", "ja")}
                      />
                      <i /> JA
                    </label>
                    <label className="inq__check">
                      <input
                        type="radio"
                        name="utilities"
                        checked={data.utilities === "nein"}
                        onChange={() => setRadio("utilities", "nein")}
                      />
                      <i /> NEIN
                    </label>
                    <label className="inq__check">
                      <input
                        type="radio"
                        name="utilities"
                        checked={data.utilities === "unsure"}
                        onChange={() => setRadio("utilities", "unsure")}
                      />
                      <i /> Ich bin nicht sicher
                    </label>
                  </div>
                  {errors.utilities && <small className="inq__err">{errors.utilities}</small>}
                </div>
              </div>
            )}

            {/* ===== STEP 6 – Äußere Gestaltung ===== */}
            {step === 6 && (
              <div className="inq__pane">
                <h2 className="inq__legend">Abschnitt 6: Äußere Gestaltung</h2>

                {/* Fassaden */}
                <h3 className="inq__fieldsetTitle">Fassaden</h3>
                <div className="inq__options">
                  <label className="inq__check">
                    <input
                      type="checkbox"
                      checked={data.facades.includes("verputzen")}
                      onChange={() => toggleFacade("verputzen")}
                    />
                    <i /> Klassisches Verputzen
                  </label>
                  <label className="inq__check">
                    <input
                      type="checkbox"
                      checked={data.facades.includes("holz")}
                      onChange={() => toggleFacade("holz")}
                    />
                    <i /> Naturholz
                  </label>
                  <label className="inq__option">
                    <input
                      type="checkbox"
                      checked={data.facades.includes("steine")}
                      onChange={() => toggleFacade("steine")}
                    />
                    <i /> Kombination mit Steinen
                  </label>
                  <label className="inq__option">
                    <input
                      type="checkbox"
                      checked={data.facades.includes("andere")}
                      onChange={() => toggleFacade("andere")}
                    />
                    <i /> Andere
                  </label>
                </div>

                {data.facades.includes("andere") && (
                  <label className="inq__field inq__col2">
                    <span>Bitte angeben:</span>
                    <input
                      type="text"
                      value={data.facade_other}
                      onChange={(e) => update("facade_other", e.target.value)}
                      placeholder="z. B. Metall, Glas..."
                    />
                  </label>
                )}

                {/* Optionen JA/NEIN */}
                <div className="inq__subgroup">
                  <span className="inq__label">Schwimmbad:</span>
                  <RadioYesNo name="pool" value={data.pool} setValue={(v) => update("pool", v)} />
                </div>
                <div className="inq__subgroup">
                  <span className="inq__label">Markise / Überdachung:</span>
                  <RadioYesNo name="markise" value={data.markise} setValue={(v) => update("markise", v)} />
                </div>
                <div className="inq__subgroup">
                  <span className="inq__label">Pergola:</span>
                  <RadioYesNo name="pergola" value={data.pergola} setValue={(v) => update("pergola", v)} />
                </div>
                <div className="inq__subgroup">
                  <span className="inq__label">Schiebetüren / Glaselemente:</span>
                  <RadioYesNo name="sliding_doors" value={data.sliding_doors} setValue={(v) => update("sliding_doors", v)} />
                </div>
                <div className="inq__subgroup">
                  <span className="inq__label">Schwimmbad Abdeckung:</span>
                  <RadioYesNo name="pool_cover" value={data.pool_cover} setValue={(v) => update("pool_cover", v)} />
                </div>
                <div className="inq__subgroup">
                  <span className="inq__label">Whirlpool:</span>
                  <RadioYesNo name="whirlpool" value={data.whirlpool} setValue={(v) => update("whirlpool", v)} />
                </div>
              </div>
            )}

            {/* ===== STEP 7 – Innenausstattung ===== */}
            {step === 7 && (
              <div className="inq__pane">
                <h2 className="inq__legend">Abschnitt 7: Innenausstattung</h2>

                <div className="inq__subgroup">
                  <span className="inq__label">Außentür</span>
                  <div className="inq__radRow">
                    <label className="inq__radio">
                      <input type="radio" name="outer_door" value="holz"
                        checked={data.outer_door === "holz"} onChange={(e) => update("outer_door", e.target.value)} />
                      <i /> Holz
                    </label>
                    <label className="inq__radio">
                      <input type="radio" name="outer_door" value="alu"
                        checked={data.outer_door === "alu"} onChange={(e) => update("outer_door", e.target.value)} />
                      <i /> Alu
                    </label>
                    <label className="inq__radio">
                      <input type="radio" name="outer_door" value="pvc"
                        checked={data.outer_door === "pvc"} onChange={(e) => update("outer_door", e.target.value)} />
                      <i /> PVC
                    </label>
                  </div>
                </div>

                <div className="inq__subgroup">
                  <span className="inq__label">Innentür</span>
                  <RadioYesNo name="inner_door" value={data.inner_door} setValue={(v) => update("inner_door", v)} />
                </div>

                <div className="inq__subgroup">
                  <span className="inq__label">Treppen</span>
                  <div className="inq__radRow">
                    <label className="inq__radio">
                      <input type="radio" name="stairs" value="holz"
                        checked={data.stairs === "holz"} onChange={(e) => update("stairs", e.target.value)} />
                      <i /> Holz
                    </label>
                    <label className="inq__radio">
                      <input type="radio" name="stairs" value="metal"
                        checked={data.stairs === "metal"} onChange={(e) => update("stairs", e.target.value)} />
                      <i /> Metal
                    </label>
                    <label className="inq__radio">
                      <input type="radio" name="stairs" value="kombination"
                        checked={data.stairs === "kombination"} onChange={(e) => update("stairs", e.target.value)} />
                      <i /> Kombination
                    </label>
                  </div>
                </div>

                <div className="inq__subgroup">
                  <span className="inq__label">Fenster</span>
                  <div className="inq__radRow">
                    <label className="inq__radio">
                      <input type="radio" name="windows" value="holz"
                        checked={data.windows === "holz"} onChange={(e) => update("windows", e.target.value)} />
                      <i /> Holz
                    </label>
                    <label className="inq__radio">
                      <input type="radio" name="windows" value="pvc"
                        checked={data.windows === "pvc"} onChange={(e) => update("windows", e.target.value)} />
                      <i /> PVC
                    </label>
                    <label className="inq__radio">
                      <input type="radio" name="windows" value="aluminium"
                        checked={data.windows === "aluminium"} onChange={(e) => update("windows", e.target.value)} />
                      <i /> Aluminium
                    </label>
                  </div>
                </div>

                <div className="inq__subgroup">
                  <span className="inq__label">Bodenbeläge</span>
                  <div className="inq__radRow">
                    <label className="inq__radio">
                      <input type="radio" name="flooring" value="parkett"
                        checked={data.flooring === "parkett"} onChange={(e) => update("flooring", e.target.value)} />
                      <i /> Parkett
                    </label>
                    <label className="inq__radio">
                      <input type="radio" name="flooring" value="keramik"
                        checked={data.flooring === "keramik"} onChange={(e) => update("flooring", e.target.value)} />
                      <i /> Keramikfliesen
                    </label>
                  </div>
                </div>

                <div className="inq__subgroup">
                  <span className="inq__label">Küche</span>
                  <div className="inq__radRow">
                    <label className="inq__radio">
                      <input type="radio" name="kitchen" value="standard"
                        checked={data.kitchen === "standard"} onChange={(e) => update("kitchen", e.target.value)} />
                      <i /> Standardmodell
                    </label>
                    <label className="inq__radio">
                      <input type="radio" name="kitchen" value="individuell"
                        checked={data.kitchen === "individuell"} onChange={(e) => update("kitchen", e.target.value)} />
                      <i /> Individuelle Planung
                    </label>
                  </div>
                </div>

                <div className="inq__subgroup">
                  <span className="inq__label">Schlafzimmer</span>
                  <div className="inq__radRow">
                    <label className="inq__radio">
                      <input type="radio" name="bedroom" value="voll"
                        checked={data.bedroom === "voll"} onChange={(e) => update("bedroom", e.target.value)} />
                      <i /> Vollständig möbliert
                    </label>
                    <label className="inq__radio">
                      <input type="radio" name="bedroom" value="bettgestell"
                        checked={data.bedroom === "bettgestell"} onChange={(e) => update("bedroom", e.target.value)} />
                      <i /> Nur Bettgestell
                    </label>
                  </div>
                </div>

                <div className="inq__subgroup">
                  <span className="inq__label">Wohnzimmer</span>
                  <div className="inq__radRow">
                    <label className="inq__radio">
                      <input type="radio" name="livingroom" value="voll"
                        checked={data.livingroom === "voll"} onChange={(e) => update("livingroom", e.target.value)} />
                      <i /> Vollständig möbliert
                    </label>
                    <label className="inq__radio">
                      <input type="radio" name="livingroom" value="ohne"
                        checked={data.livingroom === "ohne"} onChange={(e) => update("livingroom", e.target.value)} />
                      <i /> Ohne Möbel
                    </label>
                  </div>
                </div>

                <div className="inq__subgroup">
                  <span className="inq__label">Badezimmer</span>
                  <div className="inq__radRow">
                    <label className="inq__radio">
                      <input type="radio" name="bathroom" value="standard"
                        checked={data.bathroom === "standard"} onChange={(e) => update("bathroom", e.target.value)} />
                      <i /> Standardmodell
                    </label>
                    <label className="inq__radio">
                      <input type="radio" name="bathroom" value="individuell"
                        checked={data.bathroom === "individuell"} onChange={(e) => update("bathroom", e.target.value)} />
                      <i /> Individuelle Planung
                    </label>
                  </div>
                </div>

                <div className="inq__subgroup">
                  <span className="inq__label">Elektroinstallation</span>
                  <div className="inq__radRow">
                    <label className="inq__radio">
                      <input type="radio" name="electrical" value="standard"
                        checked={data.electrical === "standard"} onChange={(e) => update("electrical", e.target.value)} />
                      <i /> Standard
                    </label>
                    <label className="inq__radio">
                      <input type="radio" name="electrical" value="smarthome"
                        checked={data.electrical === "smarthome"} onChange={(e) => update("electrical", e.target.value)} />
                      <i /> Smart Home
                    </label>
                  </div>
                </div>

                <div className="inq__subgroup">
                  <span className="inq__label">Wasserinstallation</span>
                  <div className="inq__radRow">
                    <label className="inq__radio">
                      <input type="radio" name="water_installation" value="standard"
                        checked={data.water_installation === "standard"} onChange={(e) => update("water_installation", e.target.value)} />
                      <i /> Standard
                    </label>
                    <label className="inq__radio">
                      <input type="radio" name="water_installation" value="filter"
                        checked={data.water_installation === "filter"} onChange={(e) => update("water_installation", e.target.value)} />
                      <i /> Mit Wasserfiltersystem
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* ===== STEP 8 – PV Anlagen ===== */}
            {step === 8 && (
              <div className="inq__pane">
                <h2 className="inq__legend">Abschnitt 8: PV Anlagen</h2>

                <div className="inq__subgroup">
                  <span className="inq__label">Soll eine Solaranlage integriert werden?</span>
                  <RadioYesNo
                    name="pv_integrated"
                    value={data.pv_integrated}
                    setValue={(v) => update("pv_integrated", v)}
                  />
                </div>

                <label className="inq__field inq__col2">
                  <span>Gewünschte Kapazität der Solaranlage (kW)</span>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={data.pv_capacity_kw}
                    onChange={(e) => update("pv_capacity_kw", e.target.value)}
                    placeholder="z. B. 10"
                  />
                  {errors.pv_capacity_kw && <small className="inq__err">{errors.pv_capacity_kw}</small>}
                </label>

                <div className="inq__subgroup">
                  <span className="inq__label">Benötigen Sie eine Batterie zur Speicherung der Energie?</span>
                  <RadioYesNo
                    name="pv_battery"
                    value={data.pv_battery}
                    setValue={(v) => update("pv_battery", v)}
                  />
                </div>

                <div className="inq__subgroup">
                  <span className="inq__label">Möchten Sie eine Ladestation für Elektrofahrzeuge?</span>
                  <RadioYesNo
                    name="pv_ev_charger"
                    value={data.pv_ev_charger}
                    setValue={(v) => update("pv_ev_charger", v)}
                  />
                </div>
              </div>
            )}

            {/* ===== STEP 9 – Zeitrahmen & Budget ===== */}
            {step === 9 && (
              <div className="inq__pane">
                <h2 className="inq__legend">Abschnitt 9: Zeitrahmen & Budget</h2>

                <div className="inq__subgroup">
                  <span className="inq__label">Wann möchten Sie mit dem Bau beginnen?</span>
                  <div className="inq__radRow">
                    <label className="inq__radio">
                      <input
                        type="radio"
                        name="start_timeframe"
                        value="asap"
                        checked={data.start_timeframe === "asap"}
                        onChange={(e) => update("start_timeframe", e.target.value)}
                      />
                      <i /> So schnell wie möglich
                    </label>
                    <label className="inq__radio">
                      <input
                        type="radio"
                        name="start_timeframe"
                        value="3m"
                        checked={data.start_timeframe === "3m"}
                        onChange={(e) => update("start_timeframe", e.target.value)}
                      />
                      <i /> Innerhalb von 3 Monaten
                    </label>
                    <label className="inq__radio">
                      <input
                        type="radio"
                        name="start_timeframe"
                        value="6m"
                        checked={data.start_timeframe === "6m"}
                        onChange={(e) => update("start_timeframe", e.target.value)}
                      />
                      <i /> Innerhalb von 6 Monaten
                    </label>
                  </div>
                </div>

                <label className="inq__field inq__col2">
                  <span>Geplantes Budget (€)</span>
                  <input
                    type="number"
                    min="0"
                    step="100"
                    value={data.planned_budget}
                    onChange={(e) => update("planned_budget", e.target.value)}
                    placeholder="z. B. 250000"
                  />
                </label>

                <div className="inq__subgroup">
                  <span className="inq__label">Ist die Finanzierung gesichert?</span>
                  <div className="inq__radRow">
                    <label className="inq__radio">
                      <input
                        type="radio"
                        name="financing_status"
                        value="ja"
                        checked={data.financing_status === "ja"}
                        onChange={(e) => update("financing_status", e.target.value)}
                      />
                      <i /> JA
                    </label>
                    <label className="inq__radio">
                      <input
                        type="radio"
                        name="financing_status"
                        value="nein"
                        checked={data.financing_status === "nein"}
                        onChange={(e) => update("financing_status", e.target.value)}
                      />
                      <i /> NEIN
                    </label>
                    <label className="inq__radio">
                      <input
                        type="radio"
                        name="financing_status"
                        value="bearbeitung"
                        checked={data.financing_status === "bearbeitung"}
                        onChange={(e) => update("financing_status", e.target.value)}
                      />
                      <i /> In Bearbeitung
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* ===== STEP 10 – Anmerkungen & Fragen ===== */}
            {step === 10 && (
              <div className="inq__pane">
                <h2 className="inq__legend">Abschnitt 10: Anmerkungen & Fragen</h2>

                <label className="inq__field inq__col2">
                  <span>Ihre Anmerkungen oder Fragen (optional)</span>
                  <textarea
                    rows={6}
                    value={data.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    placeholder="Schreiben Sie hier, falls Sie zusätzliche Wünsche, Skizzen oder Fragen haben..."
                  />
                </label>
              </div>
            )}

            {/* ===== STEP 11 – Unterschrift & Einwilligung ===== */}
            {step === 11 && (
              <div className="inq__pane">
                <h2 className="inq__legend">Abschnitt 11: Unterschrift</h2>

                <h3 className="inq__fieldsetTitle">Erklärung zur Nutzung personenbezogener Daten</h3>
                <p className="inq__muted">
                  Durch das Ausfüllen und Einreichen dieses Formulars erkläre ich mich als Antragsteller
                  damit einverstanden, dass meine personenbezogenen Daten von <strong>WHG Holding</strong> zu folgenden
                  Zwecken verarbeitet und genutzt werden:
                </p>
                <ul className="inq__list">
                  <li>Kontaktaufnahme für Beratungen und Angebote im Zusammenhang mit dem Bau modularer Häuser.</li>
                  <li>Erstellung und Verwaltung von Verträgen sowie der erforderlichen Dokumentation für den Bauprozess.</li>
                  <li>Nutzung der Daten zu statistischen Zwecken und zur Verbesserung der Dienstleistungen.</li>
                  <li>Zukünftige Kommunikation über Produkte und Dienstleistungen von WHG Holding, einschließlich Informationen zu Sonderangeboten oder Änderungen im Service.</li>
                </ul>
                <p className="inq__muted">
                  Meine Daten werden nicht an Dritte weitergegeben, es sei denn, dies ist zur Erfüllung der
                  angeforderten Dienstleistungen erforderlich oder wird von den zuständigen Behörden gesetzlich verlangt.
                </p>
                <p className="inq__muted">
                  <strong>
                    Ich bestätige, dass ich diese Erklärung gelesen und verstanden habe und meine Einwilligung zur
                    Verarbeitung meiner personenbezogenen Daten durch WHG Holding gebe.
                  </strong>
                </p>

                <label className="inq__check inq__col2">
                  <input
                    type="checkbox"
                    checked={data.consent_accept}
                    onChange={(e) => update("consent_accept", e.target.checked)}
                  />
                  <i /> Ich akzeptiere die Bedingungen und gebe meine Einwilligung zur Verarbeitung meiner personenbezogenen Daten.
                </label>
                {errors.consent_accept && <small className="inq__err">{errors.consent_accept}</small>}

                <div className="inq__grid inq__grid--two">
                  <label className="inq__field">
                    <span>Datum</span>
                    <input
                      type="date"
                      value={data.consent_date}
                      onChange={(e) => update("consent_date", e.target.value)}
                    />
                    {errors.consent_date && <small className="inq__err">{errors.consent_date}</small>}
                  </label>

                  <label className="inq__field">
                    <span>Unterschrift (Name)</span>
                    <input
                      type="text"
                      value={data.consent_signature}
                      onChange={(e) => update("consent_signature", e.target.value)}
                      placeholder="Vor- und Nachname"
                    />
                    {errors.consent_signature && <small className="inq__err">{errors.consent_signature}</small>}
                  </label>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="inq__actions">
              <button className="inq__btn inq__btn--ghost" onClick={back} disabled={step === 1}>
                Zurück
              </button>
              <button className="inq__btn" onClick={next}>
                {step === 11 ? "Absenden" : "Weiter"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
