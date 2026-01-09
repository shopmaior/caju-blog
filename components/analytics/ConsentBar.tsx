"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* -------------------------------------------------------------------------- */
/* Types & Constants                                                           */
/* -------------------------------------------------------------------------- */

type CopyVariant = "A" | "B";

const CONSENT_COOKIE = "analytics_consent";
const COPY_VARIANT_COOKIE = "consent_copy_variant";

/* -------------------------------------------------------------------------- */
/* Cookie Utilities (client-safe)                                              */
/* -------------------------------------------------------------------------- */

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;

  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
}

function setCookie(
  name: string,
  value: string,
  maxAgeSeconds = 60 * 60 * 24 * 180 // 6 months
) {
  if (typeof document === "undefined") return;

  const isSecure =
    typeof window !== "undefined" && window.location.protocol === "https:";
  const secureAttribute = isSecure ? "; Secure" : "";

  document.cookie = `${name}=${value}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax${secureAttribute}`;
}

/* -------------------------------------------------------------------------- */
/* Copy Variants (editorial, low-friction)                                     */
/* -------------------------------------------------------------------------- */

const COPY: Record<
  CopyVariant,
  {
    text: string;
  }
> = {
  A: {
    text: "Usamos métricas anônimas para entender quais conteúdos são mais úteis e melhorar o blog. Nada muda se você preferir não aceitar.",
  },
  B: {
    text: "Este blog usa apenas dados anônimos para evoluir o conteúdo editorial. Você pode aceitar ou continuar normalmente sem mudanças.",
  },
};

/* -------------------------------------------------------------------------- */
/* Copy Variant Resolution (NO useEffect, SSR-safe)                            */
/* -------------------------------------------------------------------------- */

function resolveCopyVariant(): CopyVariant {
  if (typeof document === "undefined") return "A";

  const stored = getCookie(COPY_VARIANT_COOKIE) as CopyVariant | undefined;

  if (stored === "A" || stored === "B") {
    return stored;
  }

  const variant: CopyVariant = Math.random() < 0.5 ? "A" : "B";
  setCookie(COPY_VARIANT_COOKIE, variant);

  return variant;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

export function ConsentBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [copyVariant, setCopyVariant] = useState<CopyVariant>("A");

  /* ------------------------------------------------------------------------ */
  /* Consent Resolution & Adaptive Reveal                                     */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (typeof document === "undefined") return;

    const consent = getCookie(CONSENT_COOKIE);

    // Re-apply granted consent on reload
    if (consent === "granted") {
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
      return;
    }

    // If already denied, do nothing
    if (consent === "denied") return;

    // Adaptive reveal: time OR first real interaction
    const reveal = () => {
      const variant = resolveCopyVariant();
      if (variant !== "A") {
        setCopyVariant(variant);
      }
      setIsVisible(true);
    };

    const timer = setTimeout(reveal, 3000);

    window.addEventListener("scroll", reveal, { once: true });
    window.addEventListener("mousemove", reveal, { once: true });
    window.addEventListener("touchstart", reveal, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("mousemove", reveal);
      window.removeEventListener("touchstart", reveal);
    };
  }, []);

  /* ------------------------------------------------------------------------ */
  /* Actions                                                                   */
  /* ------------------------------------------------------------------------ */

  const accept = () => {
    window.gtag?.("consent", "update", {
      analytics_storage: "granted",
    });

    setCookie(CONSENT_COOKIE, "granted");
    setIsVisible(false);
  };

  const reject = () => {
    // Default consent is already denied
    setCookie(CONSENT_COOKIE, "denied");
    setIsVisible(false);
  };

  /* ------------------------------------------------------------------------ */
  /* Render                                                                    */
  /* ------------------------------------------------------------------------ */

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg animate-in slide-in-from-bottom duration-500"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-2xl text-center md:text-left">
          {COPY[copyVariant].text}{" "}
          <Link
            href="/politica-de-privacidade"
            className="underline underline-offset-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            Saiba mais
          </Link>
        </p>

        <div className="flex items-center justify-center md:justify-end gap-3 shrink-0">
          <button
            onClick={reject}
            type="button"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            Rejeitar
          </button>

          <button
            onClick={accept}
            type="button"
            className="rounded-md bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
