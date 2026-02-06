/// <reference types="gtag.js" />

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export const initDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
};

/**
 * Adds the global Side Tag script element into `<head>` and initializes the dataLayer.
 * It only needs to be called once, ideally at the root of your application.
 * This script handles it, so it can be called multiple times without causing duplicate script tags or reinitialization of the dataLayer.
 * @param trackingId - The Google Analytics Measurement ID (e.g., "G-XXXXXXXXXX").
 * @params options - Optional configuration for the gtag script, such as `anonymize_ip` or `cookie_expires`.
 */
export const initGoogleAnalytics = (
  trackingId: string,
  options: Gtag.GtagCommands["config"][1] = {},
) => {
  if (!trackingId) return;

  const scriptId = "ga-gtag";

  if (document.getElementById(scriptId)) return;

  const { head } = document;
  const script = document.createElement("script");
  script.id = scriptId;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  head.insertBefore(script, head.firstChild);

  initDataLayer();

  gtag("js", new Date());
  gtag("config", trackingId, options);
};

/**
 * Calls google tag API command.
 */
export const gtag: Gtag.Gtag = function () {
  if (!window.dataLayer) return;

  // Can't use arrow function + destructuring here
  // as Google expects argument as objects in dataLayer (not arrays) and destructuring would break that.
  window.dataLayer.push(arguments);
};
