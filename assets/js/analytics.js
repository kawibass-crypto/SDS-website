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

  // 3. Event Tracking Helpers (GA4)
  window.sdsTrackEvent = function(eventName, params = {}) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  };

  // Auto-bind click event tracking on download links and CTA buttons
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[download], .tool-download, .vi-dl').forEach(el => {
      el.addEventListener('click', function() {
        const href = el.getAttribute('href') || '';
        const text = (el.textContent || '').trim();
        window.sdsTrackEvent('file_download', { file_name: href, button_text: text });
      });
    });

    document.querySelectorAll('.t-card, .w-card, .proj-card').forEach(el => {
      el.addEventListener('click', function() {
        const text = (el.textContent || '').trim().slice(0, 50);
        window.sdsTrackEvent('select_content', { item_id: text });
      });
    });

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', function() {
        window.sdsTrackEvent('toggle_language', { lang: document.documentElement.lang });
      });
    }
  });
})();
