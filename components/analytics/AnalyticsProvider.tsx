"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function AnalyticsProvider() {
  if (!GA_ID) {
    if (process.env.NODE_ENV === "development") {
      console.warn("NEXT_PUBLIC_GA_ID is not defined.");
    }
    return null;
  }

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
