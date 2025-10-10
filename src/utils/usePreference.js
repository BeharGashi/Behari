import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../utils/cookies";

export function usePreference(key, initialValue) {
  const [value, setValue] = useState(() => getCookie(key, initialValue));

  useEffect(() => {
    setCookie(key, value);
  }, [key, value]);

  return [value, setValue];
}
