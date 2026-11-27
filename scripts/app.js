/* ==========================================================================
   APP ORCHESTRATOR — I18N SYNC, MOBILE DRAWER & BOOTSTRAP
   ========================================================================== */

(function () {
  'use strict';

  window.RO_APP = window.RO_APP || {};

  var initialLang = 'id';
  try {
    if (localStorage.getItem('ro_porto_lang') === 'en') initialLang = 'en';
  } catch (e) {}

  window.RO_APP.state = {
    lang: initialLang
  };

  function applyLanguage(lang) {
    var next = lang === 'en' ? 'en' : 'id';
    window.RO_APP.state.lang = next;
    document.documentElement.lang = next;
    try { localStorage.setItem('ro_porto_lang', next); } catch (e) {}

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isAct = btn.getAttribute('data-lang') === next;
      btn.classList.toggle('active', isAct);
      btn.setAttribute('aria-pressed', isAct ? 'true' : 'false');
    });

    var dict = window.PORTFOLIO_DATA.i18n[next] || window.PORTFOLIO_DATA.i18n.id;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    if (window.RO_APP.home) window.RO_APP.home.render();
    if (window.RO_APP.cases) window.RO_APP.cases.render();
    if (window.RO_APP.lightbox) window.RO_APP.lightbox.refreshLang();
    if (window.RO_APP.palette) window.RO_APP.palette.refreshLang();
    syncFullscreenUI();
    if (window.RO_APP.router) {
      window.RO_APP.router.refreshTitle();
      if (window.RO_APP.motion) {
        window.RO_APP.motion.refresh(window.RO_APP.router.getCurrentView());
      }
    }
  }

  function initMobileDrawer() {
    var drawer = document.getElementById('mobileDrawer');
    var openBtn = document.getElementById('mobileMenuBtn');
    var closeBtn = document.getElementById('mobileCloseBtn');
    var backdrop = document.getElementById('mobileDrawerBackdrop');
    if (!drawer || !openBtn) return;

    function open() {
      drawer.classList.add('is-open');
      openBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (window.RO_APP.motion) window.RO_APP.motion.stopScroll();
      if (closeBtn) closeBtn.focus();
    }

    function close() {
      drawer.classList.remove('is-open');
      openBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      if (window.RO_APP.motion) window.RO_APP.motion.startScroll();
      openBtn.focus();
    }

    openBtn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (backdrop) backdrop.addEventListener('click', close);

    drawer.querySelectorAll('a, [data-drawer-close]').forEach(function (el) {
      el.addEventListener('click', close);
    });

    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && drawer.classList.contains('is-open')) close();
    });
  }

  var EXPAND_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>';
  var COMPRESS_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>';
  var toastTimer = null;

  function showToast(msg) {
    var toast = document.getElementById('cinemaToast');
    if (!toast || !msg) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 2800);
  }

  function isFullscreenActive() {
    return Boolean(document.fullscreenElement || document.webkitFullscreenElement);
  }

  function syncFullscreenUI() {
    var btn = document.getElementById('fullscreenToggle');
    var icon = document.getElementById('fullscreenIcon');
    if (!btn || !icon) return;

    var active = isFullscreenActive();
    var dict = window.PORTFOLIO_DATA.i18n[window.RO_APP.state.lang] || window.PORTFOLIO_DATA.i18n.id;
    var label = active ? dict['aria.fullscreenExit'] : dict['aria.fullscreenEnter'];

    icon.innerHTML = active ? COMPRESS_SVG : EXPAND_SVG;
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
    btn.style.color = active ? 'var(--accent-cyan)' : '';
    btn.style.borderColor = active ? 'var(--border-active)' : '';
  }

  function toggleFullscreen() {
    var docEl = document.documentElement;
    if (!isFullscreenActive()) {
      var req = docEl.requestFullscreen || docEl.webkitRequestFullscreen;
      if (req) {
        var res = req.call(docEl);
        if (res && typeof res.catch === 'function') res.catch(function () {});
      }
    } else {
      var exit = document.exitFullscreen || document.webkitExitFullscreen;
      if (exit) {
        var out = exit.call(document);
        if (out && typeof out.catch === 'function') out.catch(function () {});
      }
    }
  }

  function initFullscreen() {
    var btn = document.getElementById('fullscreenToggle');
    if (!btn) return;
    var supported = Boolean(
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.documentElement.requestFullscreen ||
      document.documentElement.webkitRequestFullscreen
    );
    if (!supported) {
      btn.style.display = 'none';
      return;
    }

    syncFullscreenUI();
    btn.addEventListener('click', toggleFullscreen);

    var onChange = function () {
      syncFullscreenUI();
      if (isFullscreenActive()) {
        var dict = window.PORTFOLIO_DATA.i18n[window.RO_APP.state.lang] || window.PORTFOLIO_DATA.i18n.id;
        showToast(dict['toast.fullscreen']);
      }
      if (window.ScrollTrigger) {
        setTimeout(function () { window.ScrollTrigger.refresh(); }, 180);
      }
    };
    document.addEventListener('fullscreenchange', onChange);
    document.addEventListener('webkitfullscreenchange', onChange);
  }

  function initLiveWibClock() {
    var el = document.getElementById('wibClock');
    if (!el) return;
    function tick() {
      try {
        var fmt = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
        el.textContent = fmt.format(new Date()) + ' WIB';
      } catch (e) {
        el.textContent = 'WIB';
      }
    }
    tick();
    setInterval(tick, 30000);
  }

  function boot() {
    /* Dynamic Year */
    var y = String(new Date().getFullYear());
    document.querySelectorAll('.year-now').forEach(function (el) { el.textContent = y; });

    /* Language Toggle */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });

    /* Back to Top button */
    var backTop = document.getElementById('backTopBtn');
    if (backTop) {
      backTop.addEventListener('click', function () {
        if (window.RO_APP.motion) window.RO_APP.motion.scrollToTop();
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    window.RO_APP.setLanguage = applyLanguage;
    window.RO_APP.fullscreen = {
      toggle: toggleFullscreen,
      isActive: isFullscreenActive,
      sync: syncFullscreenUI
    };

    window.RO_APP.theme.init();
    window.RO_APP.lightbox.init();
    window.RO_APP.palette.init();
    initMobileDrawer();
    initFullscreen();
    initLiveWibClock();

    /* Hydrate localized content first, then initialize motion & routing */
    applyLanguage(window.RO_APP.state.lang);
    syncFullscreenUI();
    window.RO_APP.motion.init();
    window.RO_APP.router.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
