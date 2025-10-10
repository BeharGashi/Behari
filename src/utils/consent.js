import { getCookie } from "./cookies";

const COOKIE_NAME = "cookie_consent_v1";

export function getConsent() {
  return getCookie(COOKIE_NAME, null);
}

export function hasConsent(category) {
  const c = getConsent();
  if (!c) return false;
  if (category === "essential") return true;
  return Boolean(c[category]);
}
