import { useEffect } from "react";
// Nëse ke cookie-consent: importo hasConsent dhe lëre kushtin më poshtë.
// Përndryshe, hiqe if (hasConsent...) krejtësisht.
import { hasConsent } from "../../utils/consent";

const TAWK_PROPERTY_ID = "689eec397001f51924432f7f";
const TAWK_WIDGET_ID   = "1j2mclgdh";

export default function TawkProvider() {
  useEffect(() => {
    // Ngarko vetëm nëse ka pëlqim "functional" (ose hiqe këtë if nëse s’do gating)
    if (typeof hasConsent === "function" && !hasConsent("functional")) return;

    // Mos e ngarko dy herë
    if (window.Tawk_API || document.getElementById("tawk-script")) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.id = "tawk-script";
    s1.async = true;
    s1.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    // Vendose në fund të body (sigurt për shumicën e rasteve)
    document.body.appendChild(s1);

    // OPTIONAL: mund të vendosësh disa evente
    // window.Tawk_API.onLoad = function () {
    //   console.log("Tawk u ngarkua");
    //   // p.sh. fshehe derisa të klikosh butonin:
    //   // window.Tawk_API.hideWidget();
    // };

    return () => {
      // Zakonisht nuk e heqim chat-in në SPA,
      // por mund të pastrosh nëse ke shumë mount/unmount.
      // document.getElementById("tawk-script")?.remove();
    };
  }, []);

  return null;
}
