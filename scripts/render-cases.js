/* ==========================================================================
   CASE STUDY RENDERERS — SPORA, PINDAI v1.1.1 (ALL FEATURES), DETECTOR APD
   ========================================================================== */

(function () {
  'use strict';

  window.RO_APP = window.RO_APP || {};

  var activeGalleryFilter = 'all';
  var activeSporaStage = 0;
  var sweepTimer = null;

  function t(key) {
    var lang = window.RO_APP.state.lang;
    var dict = window.PORTFOLIO_DATA.i18n[lang] || window.PORTFOLIO_DATA.i18n.id;
    return dict[key] !== undefined ? dict[key] : key;
  }

  /* ================= 01. SPORA FEATURED CASE STUDY ================= */
  function renderSpora() {
    var lang = window.RO_APP.state.lang;
    var data = window.PORTFOLIO_DATA.spora;

    var subEl = document.getElementById('sporaOverviewText');
    if (subEl) subEl.textContent = data.overview[lang];

    var cardsEl = document.getElementById('sporaCardsGrid');
    if (cardsEl) {
      cardsEl.innerHTML = data.cards.map(function (c) {
        return (
          '<article class="case-card" data-reveal>' +
            '<span class="case-card-kicker">' + c.kicker[lang] + '</span>' +
            '<h3>' + c.title[lang] + '</h3>' +
            '<p>' + c.body[lang] + '</p>' +
          '</article>'
        );
      }).join('');
    }

    renderSporaEvolution();

    var noticeEl = document.getElementById('sporaNoticeText');
    if (noticeEl) {
      noticeEl.innerHTML =
        '<strong>' + data.pendingNotice.title[lang] + '</strong>' +
        '<p>' + data.pendingNotice.desc[lang] + '</p>';
    }
  }

  function renderSporaEvolution() {
    var lang = window.RO_APP.state.lang;
    var stages = window.PORTFOLIO_DATA.spora.evolutionStages;
    var tabsEl = document.getElementById('sporaEvoTabs');
    var stageEl = document.getElementById('sporaEvoStage');
    if (!tabsEl || !stageEl) return;

    tabsEl.innerHTML = stages.map(function (st, idx) {
      var active = idx === activeSporaStage;
      return '<button type="button" role="tab" aria-selected="' + (active ? 'true' : 'false') + '" class="evo-btn' + (active ? ' is-active' : '') + '" data-evo-idx="' + idx + '">' + st.label[lang] + '</button>';
    }).join('');

    tabsEl.querySelectorAll('[data-evo-idx]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeSporaStage = Number(btn.getAttribute('data-evo-idx'));
        renderSporaEvolution();
      });
    });

    var current = stages[activeSporaStage] || stages[0];
    stageEl.innerHTML =
      '<div>' +
        '<span class="case-card-kicker">' + current.label[lang] + '</span>' +
        '<h4>' + current.title[lang] + '</h4>' +
        '<p>' + current.desc[lang] + '</p>' +
        '<a href="#internship" class="btn btn-secondary btn-sm">' + t('case.backJourney') + '</a>' +
      '</div>' +
      '<div class="evo-visual-box">' +
        current.telemetry.map(function (row) {
          return '<div class="evo-line"><span style="color:var(--text-muted);">' + row.k + '</span><strong style="color:var(--text-primary);text-align:right;">' + row.v + '</strong></div>';
        }).join('') +
      '</div>';
  }

  /* ================= 02. PINDAI v1.1.1 PRODUCT SHOWCASE ================= */
  function setComparePercent(val) {
    var range = document.getElementById('compareRange');
    var darkLayer = document.getElementById('compareDarkLayer');
    var divider = document.getElementById('compareDivider');
    var knob = document.getElementById('compareKnob');
    if (!range || !darkLayer || !divider || !knob) return;

    var pct = Math.max(0, Math.min(100, Number(val)));
    range.value = pct;
    darkLayer.style.clipPath = 'inset(0 0 0 ' + pct + '%)';
    divider.style.left = pct + '%';
    knob.style.left = pct + '%';
  }

  function runAutoSweepDemo() {
    if (sweepTimer) cancelAnimationFrame(sweepTimer);
    var start = null;
    var duration = 2200;
    function step(ts) {
      if (!start) start = ts;
      var elapsed = ts - start;
      var p = Math.min(1, elapsed / duration);
      /* Sweep 50 -> 12 -> 88 -> 50 */
      var val;
      if (p < 0.33) val = 50 - (38 * (p / 0.33));
      else if (p < 0.72) val = 12 + (76 * ((p - 0.33) / 0.39));
      else val = 88 - (38 * ((p - 0.72) / 0.28));
      setComparePercent(val);
      if (p < 1) {
        sweepTimer = requestAnimationFrame(step);
      } else {
        sweepTimer = null;
      }
    }
    sweepTimer = requestAnimationFrame(step);
  }

  function hydrateCompareImages() {
    /* Only load HD comparison screenshots once user enters Pindai view (zero wasted Home bandwidth) */
    var stage = document.getElementById('compareStage');
    if (!stage || stage.getAttribute('data-hydrated') === 'true') return;
    stage.setAttribute('data-hydrated', 'true');

    var lightPic = document.getElementById('compareLightPic');
    var darkPic = document.getElementById('compareDarkPic');
    if (lightPic) {
      lightPic.innerHTML =
        '<source srcset="./assets/projects/pindai/01_beranda_terang.webp" type="image/webp" />' +
        '<img src="./assets/projects/pindai/01_beranda_terang.png" alt="Pindai Mode Terang" width="1920" height="1140" decoding="async" />';
    }
    if (darkPic) {
      darkPic.innerHTML =
        '<source srcset="./assets/projects/pindai/02_beranda_gelap.webp" type="image/webp" />' +
        '<img src="./assets/projects/pindai/02_beranda_gelap.png" alt="Pindai Mode Gelap" width="1920" height="1140" decoding="async" />';
    }
  }

  function bindCompareControls() {
    var range = document.getElementById('compareRange');
    if (!range || range.getAttribute('data-bound') === 'true') return;
    range.setAttribute('data-bound', 'true');

    range.addEventListener('input', function () {
      if (sweepTimer) { cancelAnimationFrame(sweepTimer); sweepTimer = null; }
      setComparePercent(range.value);
    });
    var btnL = document.getElementById('compareLightBtn');
    var btnS = document.getElementById('compareSplitBtn');
    var btnD = document.getElementById('compareDarkBtn');
    var btnA = document.getElementById('compareSweepBtn');
    if (btnL) btnL.addEventListener('click', function () { setComparePercent(100); });
    if (btnS) btnS.addEventListener('click', function () { setComparePercent(50); });
    if (btnD) btnD.addEventListener('click', function () { setComparePercent(0); });
    if (btnA) btnA.addEventListener('click', runAutoSweepDemo);
    setComparePercent(50);
  }

  function renderPindai() {
    var lang = window.RO_APP.state.lang;
    var data = window.PORTFOLIO_DATA.pindai;

    /* Story Cards */
    var storyEl = document.getElementById('pindaiStoryGrid');
    if (storyEl) {
      storyEl.innerHTML = data.storyCards.map(function (c) {
        return (
          '<article class="case-card" data-reveal>' +
            '<span class="case-card-kicker">' + c.kicker[lang] + '</span>' +
            '<h3>' + c.title[lang] + '</h3>' +
            '<p>' + c.body[lang] + '</p>' +
          '</article>'
        );
      }).join('');
    }

    /* 9 Core Features */
    var featEl = document.getElementById('pindaiFeaturesGrid');
    if (featEl) {
      featEl.innerHTML = data.features.map(function (f) {
        return (
          '<article class="case-card" data-reveal>' +
            '<span class="case-card-kicker">' + f.num + '</span>' +
            '<h3>' + f.title[lang] + '</h3>' +
            '<p>' + f.desc[lang] + '</p>' +
          '</article>'
        );
      }).join('');
    }

    /* Gallery Filters (Valid WAI-ARIA tablist + role="tab" + aria-selected) */
    var filtersEl = document.getElementById('galleryFilters');
    if (filtersEl) {
      filtersEl.innerHTML = data.galleryCategories.map(function (c) {
        var active = c.id === activeGalleryFilter;
        return '<button type="button" role="tab" aria-selected="' + (active ? 'true' : 'false') + '" class="filter-pill' + (active ? ' active' : '') + '" data-filter="' + c.id + '">' + c.label[lang] + '</button>';
      }).join('');

      filtersEl.querySelectorAll('[data-filter]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          activeGalleryFilter = btn.getAttribute('data-filter');
          renderPindaiGallery();
          if (window.gsap && document.documentElement.getAttribute('data-motion') !== 'reduced') {
            window.gsap.fromTo(
              '#galleryGrid .shot-card:not(.hidden)',
              { y: 20, opacity: 0, scale: 0.96 },
              { y: 0, opacity: 1, scale: 1, duration: 0.42, stagger: 0.05, ease: 'power3.out', clearProps: 'transform' }
            );
          }
          filtersEl.querySelectorAll('[data-filter]').forEach(function (b) {
            var isSel = b.getAttribute('data-filter') === activeGalleryFilter;
            b.classList.toggle('active', isSel);
            b.setAttribute('aria-selected', isSel ? 'true' : 'false');
          });
        });
      });
    }

    renderPindaiGallery();

    /* 5-Step Architecture Flow */
    var archEl = document.getElementById('archFlow');
    if (archEl) {
      archEl.innerHTML = data.archSteps.map(function (a) {
        return (
          '<div class="arch-step" data-reveal>' +
            '<small>' + a.step + '</small>' +
            '<h4>' + a.title[lang] + '</h4>' +
            '<p>' + a.desc[lang] + '</p>' +
          '</div>'
        );
      }).join('');
    }

    /* Tech Stack Table (Mobile-Stacked Card Ready via data-label) */
    var techBody = document.getElementById('techStackBody');
    if (techBody) {
      techBody.innerHTML = data.techStack.map(function (row) {
        return (
          '<tr>' +
            '<td data-label="' + t('pindai.thPkg') + '"><strong>' + row.pkg + '</strong></td>' +
            '<td data-label="' + t('pindai.thVer') + '"><code>' + row.ver + '</code></td>' +
            '<td data-label="' + t('pindai.thRole') + '">' + row.role[lang] + '</td>' +
          '</tr>'
        );
      }).join('');
    }

    /* Security & Limits */
    var secEl = document.getElementById('securityList');
    if (secEl) {
      secEl.innerHTML = data.securityItems.map(function (item) {
        return '<li><span class="check-badge" aria-hidden="true">✓</span><span>' + item[lang] + '</span></li>';
      }).join('');
    }
    var limEl = document.getElementById('limitsList');
    if (limEl) {
      limEl.innerHTML = data.limitsItems.map(function (item) {
        return '<li><span class="check-badge" aria-hidden="true">•</span><span>' + item[lang] + '</span></li>';
      }).join('');
    }

    /* Release Table (Zero 404 URLs, Mobile-Stacked Ready) */
    var relBody = document.getElementById('releaseTableBody');
    if (relBody) {
      relBody.innerHTML = data.releaseRows.map(function (r) {
        var attrs = r.directDownload ? 'download' : 'target="_blank" rel="noopener noreferrer"';
        var icon = r.directDownload ? '↓' : '↗';
        var btnCls = r.directDownload ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm';
        var btnText = r.directDownload ? t('pindai.btnDownload') : t('pindai.btnReleases');
        return (
          '<tr>' +
            '<td data-label="' + t('pindai.thPlat') + '"><strong>' + r.platform + '</strong></td>' +
            '<td data-label="' + t('pindai.thArt') + '"><a class="artifact-link" href="' + r.url + '" ' + attrs + '><span>' + icon + '</span><span>' + r.artifact + '</span></a></td>' +
            '<td data-label="' + t('pindai.thSize') + '">' + r.size + '</td>' +
            '<td data-label="' + t('pindai.thVerif') + '">' + r.verif[lang] + '</td>' +
            '<td data-label="' + t('pindai.thAct') + '"><a class="' + btnCls + '" href="' + r.url + '" ' + attrs + '>' + btnText + '</a></td>' +
          '</tr>'
        );
      }).join('');
    }

    bindCompareControls();
  }

  function renderPindaiGallery() {
    var lang = window.RO_APP.state.lang;
    var shots = window.PORTFOLIO_DATA.pindai.screenshots;
    var gridEl = document.getElementById('galleryGrid');
    if (!gridEl) return;

    var zoomIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6M8 11h6"/></svg>';

    gridEl.innerHTML = shots.map(function (s, idx) {
      var match = activeGalleryFilter === 'all' || s.cat === activeGalleryFilter;
      return (
        '<button type="button" class="shot-card' + (match ? '' : ' hidden') + '" data-index="' + idx + '" aria-label="' + s.title[lang] + '">' +
          '<div class="shot-thumb">' +
            '<picture>' +
              '<source srcset="' + s.webp + '" type="image/webp" />' +
              '<img src="' + s.src + '" alt="' + s.title[lang] + '" width="1920" height="1140" loading="lazy" decoding="async" />' +
            '</picture>' +
            '<div class="shot-hover"><span class="shot-hover-pill">' + zoomIcon + '<span>' + t('pindai.shotZoom') + '</span></span></div>' +
          '</div>' +
          '<div class="shot-body">' +
            '<div class="shot-meta">' +
              '<span class="shot-idx">#' + s.idx + '</span>' +
              '<span class="chip chip-mono">' + s.catLabel[lang] + '</span>' +
            '</div>' +
            '<h4>' + s.title[lang] + '</h4>' +
            '<p>' + s.desc[lang] + '</p>' +
          '</div>' +
        '</button>'
      );
    }).join('');

    gridEl.querySelectorAll('.shot-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var idx = Number(card.getAttribute('data-index'));
        if (window.RO_APP.lightbox) window.RO_APP.lightbox.open(idx, card);
      });
    });
  }

  /* ================= 03. DETECTOR APD CASE STUDY ================= */
  function renderApd() {
    var lang = window.RO_APP.state.lang;
    var data = window.PORTFOLIO_DATA.apd;

    var subEl = document.getElementById('apdOverviewText');
    if (subEl) subEl.textContent = data.overview[lang];

    var cardsEl = document.getElementById('apdCardsGrid');
    if (cardsEl) {
      cardsEl.innerHTML = data.cards.map(function (c) {
        return (
          '<article class="case-card" data-reveal>' +
            '<span class="case-card-kicker">' + c.kicker[lang] + '</span>' +
            '<h3>' + c.title[lang] + '</h3>' +
            '<p>' + c.body[lang] + '</p>' +
          '</article>'
        );
      }).join('');
    }

    var prepEl = document.getElementById('apdPreparedList');
    if (prepEl) {
      prepEl.innerHTML = data.preparedSections[lang].map(function (item) {
        return '<li><span class="check-badge" aria-hidden="true">•</span><span>' + item + '</span></li>';
      }).join('');
    }

    var noticeEl = document.getElementById('apdNoticeText');
    if (noticeEl) {
      noticeEl.innerHTML =
        '<strong>' + data.pendingNotice.title[lang] + '</strong>' +
        '<p>' + data.pendingNotice.desc[lang] + '</p>';
    }
  }

  function renderAllCases() {
    renderSpora();
    renderPindai();
    renderApd();
  }

  window.RO_APP.cases = {
    render: renderAllCases,
    hydratePindaiMedia: hydrateCompareImages
  };
})();
