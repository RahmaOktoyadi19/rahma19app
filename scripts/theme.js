/* ==========================================================================
   THEME ENGINE — DARK CINEMATIC DEFAULT + PERSISTENT LIGHT EDITORIAL TOGGLE
   ========================================================================== */

(function () {
  'use strict';

  window.RO_APP = window.RO_APP || {};

  var SUN_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41"/></svg>';
  var MOON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function applyTheme(theme, persist) {
    var next = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    var iconEl = document.getElementById('themeIcon');
    if (iconEl) iconEl.innerHTML = next === 'dark' ? SUN_SVG : MOON_SVG;
    if (persist) {
      try { localStorage.setItem('ro_porto_theme', next); } catch (e) {}
    }
  }

  function toggleTheme() {
    applyTheme(getTheme() === 'dark' ? 'light' : 'dark', true);
  }

  function initTheme() {
    applyTheme(getTheme(), false);
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
  }

  window.RO_APP.theme = {
    get: getTheme,
    apply: applyTheme,
    toggle: toggleTheme,
    init: initTheme
  };
})();
