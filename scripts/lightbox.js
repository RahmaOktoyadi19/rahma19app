/* ==========================================================================
   UNIVERSAL FULLSCREEN LIGHTBOX — SUPPORTS SPORA (24 SHOTS) & PINDAI (9 SHOTS)
   Zoom, Keyboard (←, →, +, -, Esc), Touch Swipe, Focus Trap & Focus Restore
   ========================================================================== */

(function () {
  'use strict';

  window.RO_APP = window.RO_APP || {};

  var activeGalleryKey = 'pindai';
  var lbIndex = 0;
  var lbZoom = 1;
  var triggerEl = null;

  function getShots() {
    if (activeGalleryKey === 'spora' && window.PORTFOLIO_DATA.spora && window.PORTFOLIO_DATA.spora.screenshots) {
      return window.PORTFOLIO_DATA.spora.screenshots;
    }
    return window.PORTFOLIO_DATA.pindai.screenshots;
  }

  function getPrimarySrc(shot) {
    return shot.webp || shot.src;
  }

  function getFallbackSrc(shot) {
    return shot.src || shot.webp;
  }

  function applyZoom() {
    var img = document.getElementById('lbImg');
    var resetBtn = document.getElementById('lbZoomReset');
    if (img) img.style.transform = 'scale(' + lbZoom + ')';
    if (resetBtn) resetBtn.textContent = Math.round(lbZoom * 100) + '%';
  }

  function renderThumbs() {
    var lang = window.RO_APP.state.lang;
    var shots = getShots();
    var thumbsEl = document.getElementById('lbThumbs');
    if (!thumbsEl) return;

    thumbsEl.innerHTML = shots.map(function (s, i) {
      var primary = getPrimarySrc(s);
      var fallback = getFallbackSrc(s);
      var onErr = primary !== fallback ? ' onerror="this.onerror=null;this.src=\'' + fallback + '\';"' : '';
      return (
        '<button type="button" class="lb-thumb' + (i === lbIndex ? ' active' : '') + '" data-idx="' + i + '" aria-label="' + s.title[lang] + '">' +
          '<img src="' + primary + '"' + onErr + ' alt="" width="66" height="40" loading="lazy" />' +
        '</button>'
      );
    }).join('');

    thumbsEl.querySelectorAll('.lb-thumb').forEach(function (btn) {
      btn.addEventListener('click', function () {
        lbIndex = Number(btn.getAttribute('data-idx'));
        lbZoom = 1;
        updateUI();
      });
    });

    var activeThumb = thumbsEl.querySelector('.lb-thumb.active');
    if (activeThumb && activeThumb.scrollIntoView) {
      activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  function updateUI() {
    var lang = window.RO_APP.state.lang;
    var shots = getShots();
    var shot = shots[lbIndex];
    if (!shot) return;

    var img = document.getElementById('lbImg');
    var counter = document.getElementById('lbCounter');
    var title = document.getElementById('lbTitle');
    var desc = document.getElementById('lbDesc');

    if (img) {
      var primary = getPrimarySrc(shot);
      var fallback = getFallbackSrc(shot);
      img.onerror = primary !== fallback ? function () { img.onerror = null; img.src = fallback; } : null;
      img.src = primary;
      img.alt = shot.title[lang];
    }
    if (counter) counter.textContent = (lbIndex + 1) + ' / ' + shots.length;
    if (title) title.textContent = '#' + shot.idx + ' — ' + shot.title[lang];
    if (desc) desc.textContent = shot.desc[lang];
    applyZoom();
    renderThumbs();
  }

  function openLightbox(index, opener, galleryKey) {
    var lb = document.getElementById('lightbox');
    if (!lb) return;
    activeGalleryKey = galleryKey === 'spora' ? 'spora' : 'pindai';
    var shots = getShots();
    triggerEl = opener || document.activeElement;
    lbIndex = (index + shots.length) % shots.length;
    lbZoom = 1;
    updateUI();
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (window.RO_APP.motion) window.RO_APP.motion.stopScroll();
    var closeBtn = document.getElementById('lbClose');
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    var lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('is-open')) return;
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
    if (window.RO_APP.motion) window.RO_APP.motion.startScroll();
    var img = document.getElementById('lbImg');
    if (img) img.removeAttribute('src');
    if (triggerEl && typeof triggerEl.focus === 'function') {
      triggerEl.focus();
    }
  }

  function step(delta) {
    var shots = getShots();
    lbIndex = (lbIndex + delta + shots.length) % shots.length;
    lbZoom = 1;
    updateUI();
  }

  function initLightbox() {
    var lb = document.getElementById('lightbox');
    if (!lb) return;

    var bind = function (id, fn) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('click', fn);
    };

    bind('lbClose', closeLightbox);
    bind('lbPrev', function () { step(-1); });
    bind('lbNext', function () { step(1); });
    bind('lbPrevMobile', function () { step(-1); });
    bind('lbNextMobile', function () { step(1); });
    bind('lbZoomIn', function () {
      lbZoom = Math.min(2.4, +(lbZoom + 0.35).toFixed(2));
      applyZoom();
    });
    bind('lbZoomOut', function () {
      lbZoom = Math.max(1, +(lbZoom - 0.35).toFixed(2));
      applyZoom();
    });
    bind('lbZoomReset', function () {
      lbZoom = 1;
      applyZoom();
    });

    var stage = document.getElementById('lbStage');
    if (stage) {
      stage.addEventListener('click', function (ev) {
        if (ev.target === stage) closeLightbox();
      });

      var touchStartX = 0;
      stage.addEventListener('touchstart', function (ev) {
        if (ev.touches && ev.touches.length === 1) touchStartX = ev.touches[0].clientX;
      }, { passive: true });

      stage.addEventListener('touchend', function (ev) {
        if (lbZoom > 1 || !ev.changedTouches || ev.changedTouches.length !== 1) return;
        var dx = ev.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 48) step(dx < 0 ? 1 : -1);
      }, { passive: true });
    }

    document.addEventListener('keydown', function (ev) {
      if (!lb.classList.contains('is-open')) return;

      if (ev.key === 'Escape') {
        ev.preventDefault();
        closeLightbox();
      } else if (ev.key === 'ArrowRight') {
        ev.preventDefault();
        step(1);
      } else if (ev.key === 'ArrowLeft') {
        ev.preventDefault();
        step(-1);
      } else if (ev.key === '+' || ev.key === '=') {
        lbZoom = Math.min(2.4, +(lbZoom + 0.35).toFixed(2));
        applyZoom();
      } else if (ev.key === '-') {
        lbZoom = Math.max(1, +(lbZoom - 0.35).toFixed(2));
        applyZoom();
      } else if (ev.key === 'Tab') {
        var focusables = lb.querySelectorAll('button:not([disabled]):not(.hidden)');
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (ev.shiftKey && document.activeElement === first) {
          ev.preventDefault();
          last.focus();
        } else if (!ev.shiftKey && document.activeElement === last) {
          ev.preventDefault();
          first.focus();
        }
      }
    });
  }

  window.RO_APP.lightbox = {
    init: initLightbox,
    open: openLightbox,
    close: closeLightbox,
    refreshLang: function () {
      var lb = document.getElementById('lightbox');
      if (lb && lb.classList.contains('is-open')) updateUI();
    }
  };
})();
