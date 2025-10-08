import CookieConsent from "react-cookie-consent";
import { setCookie } from "../utils/cookies";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Prano"
      declineButtonText="Refuzo"
      enableDeclineButton
      onAccept={() => setCookie("consent", "accepted")}
      onDecline={() => setCookie("consent", "declined")}
      cookieName="cookie_consent"
      expires={365}
    >
      Përdorim cookies për preferenca dhe për të përmirësuar përvojën.
    </CookieConsent>
  );
}
