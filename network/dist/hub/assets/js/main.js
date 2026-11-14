/**
 * Veloura Noida — Vanilla JavaScript (assets/js/main.js)
 * Implements: Hamburger menu, Age gate (30-day TTL), Content protection, GA4 tracking
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // ── 1. Hamburger Menu Toggle ─────────────────────────────────
    var hamburger = document.getElementById('hamburgerBtn');
    var navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', function () {
        var expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !expanded);
        hamburger.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
      });

      // Close menu when a link is clicked
      var navLinks = navMenu.querySelectorAll('.nav-link');
      navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          hamburger.classList.remove('is-active');
          navMenu.classList.remove('is-active');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // ── 2. Age Gate (18+ / Adults Only, 30-Day TTL) ──────────────
    var ageGate = document.getElementById('ageGateOverlay');
    var enterBtn = document.getElementById('ageGateEnterBtn');
    var STORAGE_KEY = 'adultConfirmedAt';
    var THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

    function checkAgeVerification() {
      if (!ageGate) return;
      var confirmedAt = localStorage.getItem(STORAGE_KEY);
      if (confirmedAt) {
        var elapsed = Date.now() - parseInt(confirmedAt, 10);
        if (elapsed < THIRTY_DAYS_MS) {
          ageGate.style.display = 'none';
          document.body.style.overflow = '';
          return;
        }
      }
      // Show age gate and lock scrolling
      ageGate.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    if (enterBtn && ageGate) {
      enterBtn.addEventListener('click', function () {
        localStorage.setItem(STORAGE_KEY, Date.now().toString());
        ageGate.style.display = 'none';
        document.body.style.overflow = '';
      });
    }

    checkAgeVerification();

    // ── 3. GA4 Tracking for Call and WhatsApp Clicks ─────────────
    document.addEventListener('click', function (e) {
      var target = e.target.closest('a');
      if (!target) return;

      var href = target.getAttribute('href') || '';

      // Call click tracking
      if (href.indexOf('tel:') === 0) {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'call_click', {
            event_category: 'engagement',
            event_label: href
          });
        } else if (window.dataLayer) {
          window.dataLayer.push({
            event: 'call_click',
            event_label: href
          });
        }
      }

      // WhatsApp click tracking
      if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp.com') !== -1) {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'whatsapp_click', {
            event_category: 'engagement',
            event_label: href
          });
        } else if (window.dataLayer) {
          window.dataLayer.push({
            event: 'whatsapp_click',
            event_label: href
          });
        }
      }
    });

    // ── 4. Area Search Form Redirection ──────────────────────────
    var areaSearchForm = document.getElementById('heroAreaForm');
    var areaSelect = document.getElementById('heroAreaSelect');
    if (areaSearchForm && areaSelect) {
      areaSearchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var selectedSlug = areaSelect.value;
        if (selectedSlug) {
          window.location.href = '/call-girls/' + selectedSlug + '/';
        } else {
          window.location.href = '/call-girls/';
        }
      });
    }
  });

  // ── 5. Content Protection: contextmenu and Ctrl+U prevented ────
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
  });

  document.addEventListener('keydown', function (e) {
    // Prevent Ctrl+U / Cmd+U (View Source)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
      e.preventDefault();
      return false;
    }
  });

  // ── 6. Copy Event: writes the actual selection ─────────────────
  document.addEventListener('copy', function (e) {
    var selection = window.getSelection().toString();
    if (selection && e.clipboardData) {
      e.clipboardData.setData('text/plain', selection);
      e.preventDefault();
    }
  });
})();

