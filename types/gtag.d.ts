export {};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "consent" | "config" | "event" | "js",
      target: string,
      params?: Record<string, unknown>
    ) => void;
  }
}
