import { useEffect } from "react";
import { hasConsent } from "../../utils/consent";

export default function GoogleAnalytics() {
  useEffect(() => {
    // Shiko nëse ka pranim për statistika
    if (!hasConsent("statistic")) return;

    // Vendos ID-në e GA
    const GA_ID = "G-XXXXXXXXXX";

    // Krijo <script> për gtag
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
      // Opsional: hiq skriptet kur komponenti ç’ngarkohet
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null; // Ky komponent nuk shfaq gjë në UI
}
