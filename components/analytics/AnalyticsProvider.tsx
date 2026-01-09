"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function isValidGAId(id: string | undefined): boolean {
  if (!id) return false;
  // Accept common GA patterns like "G-XXXX" (GA4) or "UA-XXXX" (Universal Analytics)
  return /^(G|UA)-[A-Z0-9]+/i.test(id);
}

export function AnalyticsProvider() {
  if (!isValidGAId(GA_ID)) {
    if (process.env.NODE_ENV === "development") {
      if (!GA_ID) {
        console.warn("NEXT_PUBLIC_GA_ID is not defined.");
      } else {
        console.warn(
          `NEXT_PUBLIC_GA_ID "${GA_ID}" does not appear to be a valid Google Analytics tracking ID.`
        );
      }
    }
    return null;
  }

  /**
   * Rationale for using dangerouslySetInnerHTML
   *
   * This script must execute a strict, atomic sequence:
   * 1) Initialize the dataLayer
   * 2) Set default consent (Consent Mode v2) to "denied"
   * 3) Load the Google Analytics script
   * 4) Initialize GA while still blocked by consent
   *
   * Splitting these steps across multiple <Script /> components can introduce
   * race conditions, potentially allowing pageviews or events to be sent
   * before explicit user consent is applied.
   *
   * The injected content is static and fully controlled at build time.
   * GA_ID is sourced exclusively from a NEXT_PUBLIC_* environment variable
   * and does not include any user input, which significantly mitigates XSS risk.
   *
   * This approach guarantees predictable execution order and LGPD-compliant
   * behavior without relying on `beforeInteractive`, which is not permitted
   * outside of _document in the App Router.
   */
  return (
    <Script
      id="ga-consent-and-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          // Initialize dataLayer
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // 1 Set default consent (LGPD-safe)
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });

          // 2 Load GA script dynamically
          (function() {
            var s = document.createElement('script');
            s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
            s.async = true;
            document.head.appendChild(s);
          })();

          // 3 Initialize GA (still blocked by consent)
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            send_page_view: false
          });
        `,
      }}
    />
  );
}
