"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function AnalyticsProvider() {
  if (!GA_ID) {
    console.warn("Google Analytics ID (NEXT_PUBLIC_GA_ID) is missing.");
    return null;
  }

  return (
    <>
      {/*
        1. Initialize Data Layer and Set Default Consent
        This must run BEFORE the GA script is loaded.
        Using 'afterInteractive' but defining the command before the GA config.
        Next.js guarantees script execution order for same strategy.
      */}
      <Script
        id="ga-consent-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Set default consent to 'denied' for relevant categories
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `,
        }}
      />

      {/*
        2. Load Google Analytics Script
        Standard loading from Google Tag Manager.
      */}
      <Script
        id="ga-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      {/*
        3. Initialize Google Analytics
        Configures the specific property ID.
      */}
      <Script
        id="ga-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
        }}
      />
    </>
  );
}
