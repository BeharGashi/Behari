import Cookies from "js-cookie";

const baseOpts = {
  path: "/",
  sameSite: "lax",
  secure: true,   // lëre true në prod (HTTPS)
  expires: 365
};

export const setCookie = (key, value, opts = {}) => {
  const toStore = typeof value === "string" ? value : JSON.stringify(value);
  Cookies.set(key, toStore, { ...baseOpts, ...opts });
};

export const getCookie = (key, fallback = null) => {
  const v = Cookies.get(key);
  if (v === undefined) return fallback;
  try { return JSON.parse(v); } catch { return v; }
};

export const removeCookie = (key) =>
  Cookies.remove(key, { path: "/" });
