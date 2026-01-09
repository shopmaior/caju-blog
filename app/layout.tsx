import { Analytics } from "@vercel/analytics/react";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { ConsentBar } from "@/components/analytics/ConsentBar";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://blog.cajuofertas.com.br";
const siteName = "Blog Caju Ofertas";
const siteDescription = "Ofertas e descontos perto de você.";

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,

  // Canonical
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} | Ofertas e Descontos Exclusivos`,
    description: siteDescription,
    images: [
      {
        url: `/og/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Ofertas e Descontos Exclusivos`,
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Ofertas e Descontos Exclusivos`,
    description: siteDescription,
    images: [`/og/og-image.png`],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      { rel: "icon", url: "/android-icon-192x192.png", sizes: "192x192" },
    ],
  },

  // Manifest
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body className="antialiased">
        <AnalyticsProvider />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-to-content">
            Saltar para o conteúdo
          </a>
          <Header />
          {children}
          <Footer />
          <ConsentBar />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
