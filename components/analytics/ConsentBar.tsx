"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag: (
      command: "consent" | "config" | "event" | "js",
      target: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

const CONSENT_KEY = "analytics-consent";

export function ConsentBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_KEY);

    // If consent was already granted, re-apply it on load
    if (storedConsent === "granted" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
      return;
    }

    // If no decision yet, show banner after delay or first interaction
    if (!storedConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      const handleScroll = () => {
        setIsVisible(true);
      };

      window.addEventListener("scroll", handleScroll, { once: true });

      return () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleAccept = () => {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }

    localStorage.setItem(CONSENT_KEY, "granted");
    setIsVisible(false);
  };

  const handleReject = () => {
    // Default consent is already denied — no update needed
    localStorage.setItem(CONSENT_KEY, "denied");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg animate-in slide-in-from-bottom duration-500">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-2xl text-center md:text-left">
          Usamos métricas anônimas para entender quais conteúdos são mais úteis
          e melhorar o blog. Nada muda se você preferir não aceitar.
        </p>

        <div className="flex items-center justify-center md:justify-end gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            Rejeitar
          </button>

          <button
            onClick={handleAccept}
            className="rounded-md bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
