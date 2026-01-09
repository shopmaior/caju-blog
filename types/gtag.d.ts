export {};

declare global {
  interface Window {
    gtag?: (
      command: "consent" | "config" | "event" | "js",
      target: string,
      params?: Record<string, unknown>
    ) => void;
  }
}
