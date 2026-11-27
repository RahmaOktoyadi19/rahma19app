/* ==========================================================================
   CLEAN VIEW + SECTION HASH ROUTER (ZERO 404 ON STATIC HOSTING + LEGACY ALIAS)
   ========================================================================== */

(function () {
  'use strict';

  window.RO_APP = window.RO_APP || {};

  var VIEWS = {
    home: 'homeView',
    spora: 'sporaView',
    pindai: 'pindaiView',
    apd: 'apdView'
  };

  var HOME_ANCHORS = ['about', 'internship', 'projects', 'tech', 'experience', 'contact'];
  var currentView = null;

  function parseHash(rawHash) {
    var h = (rawHash || '#/').trim();

    /* Legacy Pindai routes preserved 100% */
    if (h === '#/pindai' || h === '#pindai' || h === '#/projects/pindai') {
      return { view: 'pindai', anchor: null };
    }
    if (h === '#pindai-gallery' || h === '#/projects/pindai/gallery') {
      return { view: 'pindai', anchor: 'pindai-gallery' };
    }
    if (h === '#/projects/spora' || h === '#/spora') {
      return { view: 'spora', anchor: null };
    }
    if (h === '#spora-gallery' || h === '#/projects/spora/gallery') {
      return { view: 'spora', anchor: 'spora-gallery' };
    }
    if (h === '#spora-pwa' || h === '#/projects/spora/pwa') {
      return { view: 'spora', anchor: 'spora-pwa' };
    }
    if (h === '#/projects/detector-apd' || h === '#/detector-apd') {
      return { view: 'apd', anchor: null };
    }

    var cleanAnchor = h.replace(/^#\/?/, '');
    if (HOME_ANCHORS.indexOf(cleanAnchor) !== -1) {
      return { view: 'home', anchor: cleanAnchor };
    }
    return { view: 'home', anchor: null };
  }

  function sweepRouteBar() {
    var bar = document.getElementById('routeBar');
    if (!bar) return;
    bar.classList.remove('run');
    void bar.offsetWidth;
    bar.classList.add('run');
  }

  function updateNavHighlight(view, anchor) {
    var targetKey = view === 'home' ? (anchor || 'home') : 'projects';
    document.querySelectorAll('[data-nav-key]').forEach(function (el) {
      el.classList.toggle('is-active', el.getAttribute('data-nav-key') === targetKey);
    });
  }

  function updateDocumentTitle(view) {
    var l = window.RO_APP.state.lang;
    var base = window.PORTFOLIO_DATA.i18n[l]['meta.title'];
    if (view === 'spora') {
      document.title = 'SPORA Case Study — ' + (l === 'en' ? 'PT Semen Padang Plant Forum | Rahma Oktoyadi' : 'Forum Diskusi Pabrik PT Semen Padang | Rahma Oktoyadi');
    } else if (view === 'pindai') {
      document.title = 'Pindai v1.1.1 — ' + (l === 'en' ? 'Cross-Platform Hybrid OCR Case Study | Rahma Oktoyadi' : 'Studi Kasus OCR Hybrid Lintas Platform | Rahma Oktoyadi');
    } else if (view === 'apd') {
      document.title = 'Detector APD — ' + (l === 'en' ? 'Industrial Safety Showcase | Rahma Oktoyadi' : 'Showcase Keselamatan K3 Industri | Rahma Oktoyadi');
    } else {
      document.title = base;
    }
  }

  function scrollToAnchor(anchorId) {
    var target = document.getElementById(anchorId);
    if (!target) return;
    setTimeout(function () {
      if (window.RO_APP.motion && window.RO_APP.motion.scrollTo) {
        window.RO_APP.motion.scrollTo(target);
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 55);
  }

  function commitView(route) {
    Object.keys(VIEWS).forEach(function (key) {
      var el = document.getElementById(VIEWS[key]);
      if (!el) return;
      var active = key === route.view;
      el.classList.toggle('is-active', active);
      el.classList.toggle('view-enter', active);
      el.setAttribute('aria-hidden', active ? 'false' : 'true');
    });

    currentView = route.view;

    if (route.view === 'spora' && window.RO_APP.cases) {
      window.RO_APP.cases.hydrateSporaMedia();
    }
    if (route.view === 'pindai' && window.RO_APP.cases) {
      window.RO_APP.cases.hydratePindaiMedia();
    }

    updateNavHighlight(route.view, route.anchor);
    updateDocumentTitle(route.view);

    if (route.anchor) {
      scrollToAnchor(route.anchor);
    } else if (window.RO_APP.motion && window.RO_APP.motion.scrollToTop) {
      window.RO_APP.motion.scrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    if (window.RO_APP.motion) {
      window.RO_APP.motion.refresh(route.view);
    }
    if (window.RO_APP.widgets && window.RO_APP.widgets.onViewEnter) {
      window.RO_APP.widgets.onViewEnter(route.view);
    }
  }

  function handleRoute(initial) {
    var route = parseHash(window.location.hash);

    /* Close mobile drawer if open */
    var drawer = document.getElementById('mobileDrawer');
    if (drawer && drawer.classList.contains('is-open')) {
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    if (initial) {
      commitView(route);
      return;
    }

    if (route.view === currentView) {
      updateNavHighlight(route.view, route.anchor);
      if (route.anchor) scrollToAnchor(route.anchor);
      else if (window.RO_APP.motion) window.RO_APP.motion.scrollToTop();
      return;
    }

    sweepRouteBar();
    var reduceMotion = document.documentElement.getAttribute('data-motion') === 'reduced';
    if (document.startViewTransition && !reduceMotion) {
      document.startViewTransition(function () {
        commitView(route);
      });
    } else {
      commitView(route);
    }
  }

  function go(hash) {
    if (window.location.hash === hash) {
      handleRoute(false);
    } else {
      window.location.hash = hash;
    }
  }

  function initRouter() {
    window.addEventListener('hashchange', function () { handleRoute(false); });

    /* Allow re-clicking the active anchor link cleanly */
    document.addEventListener('click', function (ev) {
      var a = ev.target.closest('a[href^="#"]');
      if (!a) return;
      var href = a.getAttribute('href');
      if (href && href === window.location.hash) {
        ev.preventDefault();
        handleRoute(false);
      }
    });

    handleRoute(true);
  }

  window.RO_APP.router = {
    init: initRouter,
    go: go,
    getCurrentView: function () { return currentView || 'home'; },
    refreshTitle: function () { updateDocumentTitle(currentView || 'home'); }
  };
})();
