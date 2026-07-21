/**
 * SDS Website Analytics & Monitoring Helper
 * Supports Google Analytics 4 (GA4) & Microsoft Clarity
 * 
 * Instructions:
 * Replace 'YOUR_GA4_MEASUREMENT_ID' and 'YOUR_CLARITY_PROJECT_ID' below with your actual IDs,
 * or reply to the AI agent with your IDs and it will fill them in for you!
 */

(function() {
  const ANALYTICS_CONFIG = {
    // Google Analytics 4 Measurement ID (e.g., 'G-ABC123XYZ')
    GA_MEASUREMENT_ID: 'G-GCYPTEXK9L',

    // Microsoft Clarity Project ID (e.g., 'k123456789')
    CLARITY_PROJECT_ID: 'YOUR_CLARITY_PROJECT_ID'
  };

  // 1. Google Analytics 4 Integration
  if (ANALYTICS_CONFIG.GA_MEASUREMENT_ID && ANALYTICS_CONFIG.GA_MEASUREMENT_ID !== 'YOUR_GA4_MEASUREMENT_ID') {
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA_MEASUREMENT_ID}`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', ANALYTICS_CONFIG.GA_MEASUREMENT_ID);
  }

  // 2. Microsoft Clarity Integration
  if (ANALYTICS_CONFIG.CLARITY_PROJECT_ID && ANALYTICS_CONFIG.CLARITY_PROJECT_ID !== 'YOUR_CLARITY_PROJECT_ID') {
    (function(c, l, a, r, i, t, y) {
      c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", ANALYTICS_CONFIG.CLARITY_PROJECT_ID);
  }
})();
