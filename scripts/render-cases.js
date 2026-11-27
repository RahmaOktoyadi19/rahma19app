/* ==========================================================================
   CASE STUDY RENDERERS — SPORA v1.9 (24 SHOTS + PWA), PINDAI v1.1.1, APD
   ========================================================================== */

(function () {
  'use strict';

  window.RO_APP = window.RO_APP || {};

  var activeSporaFilter = 'all';
  var activeSporaStage = 0;
  var activeSporaPwaTab = 'android';
  var activePindaiFilter = 'all';
  var sweepTimers = { spora: null, pindai: null };

  function t(key) {
    var lang = window.RO_APP.state.lang;
    var dict = window.PORTFOLIO_DATA.i18n[lang] || window.PORTFOLIO_DATA.i18n.id;
    return dict[key] !== undefined ? dict[key] : key;
  }

  /* ================= SHARED INTERACTIVE LIGHT/DARK COMPARE HELPER ================= */
  function createCompareController(cfg) {
    function setPct(val) {
      var range = document.getElementById(cfg.rangeId);
      var darkLayer = document.getElementById(cfg.darkLayerId);
      var divider = document.getElementById(cfg.dividerId);
      var knob = document.getElementById(cfg.knobId);
      if (!range || !darkLayer || !divider || !knob) return;

      var pct = Math.max(0, Math.min(100, Number(val)));
      range.value = pct;
      darkLayer.style.clipPath = 'inset(0 0 0 ' + pct + '%)';
      divider.style.left = pct + '%';
      knob.style.left = pct + '%';
    }

    function autoSweep() {
      if (sweepTimers[cfg.key]) cancelAnimationFrame(sweepTimers[cfg.key]);
      var start = null;
      var duration = 2200;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min(1, (ts - start) / duration);
        var val;
        if (p < 0.33) val = 50 - (38 * (p / 0.33));
        else if (p < 0.72) val = 12 + (76 * ((p - 0.33) / 0.39));
        else val = 88 - (38 * ((p - 0.72) / 0.28));
        setPct(val);
        if (p < 1) sweepTimers[cfg.key] = requestAnimationFrame(step);
        else sweepTimers[cfg.key] = null;
      }
      sweepTimers[cfg.key] = requestAnimationFrame(step);
    }

    function bind() {
      var range = document.getElementById(cfg.rangeId);
      if (!range || range.getAttribute('data-bound') === 'true') return;
      range.setAttribute('data-bound', 'true');

      range.addEventListener('input', function () {
        if (sweepTimers[cfg.key]) { cancelAnimationFrame(sweepTimers[cfg.key]); sweepTimers[cfg.key] = null; }
        setPct(range.value);
      });
      var btnL = document.getElementById(cfg.lightBtnId);
      var btnS = document.getElementById(cfg.splitBtnId);
      var btnD = document.getElementById(cfg.darkBtnId);
      var btnA = document.getElementById(cfg.sweepBtnId);
      if (btnL) btnL.addEventListener('click', function () { setPct(100); });
      if (btnS) btnS.addEventListener('click', function () { setPct(50); });
      if (btnD) btnD.addEventListener('click', function () { setPct(0); });
      if (btnA) btnA.addEventListener('click', autoSweep);
      setPct(50);
    }

    return { bind: bind, setPct: setPct };
  }

  var sporaCompare = createCompareController({
    key: 'spora',
    rangeId: 'sporaCompareRange',
    darkLayerId: 'sporaCompareDarkLayer',
    dividerId: 'sporaCompareDivider',
    knobId: 'sporaCompareKnob',
    lightBtnId: 'sporaCompareLightBtn',
    splitBtnId: 'sporaCompareSplitBtn',
    darkBtnId: 'sporaCompareDarkBtn',
    sweepBtnId: 'sporaCompareSweepBtn'
  });

  var pindaiCompare = createCompareController({
    key: 'pindai',
    rangeId: 'compareRange',
    darkLayerId: 'compareDarkLayer',
    dividerId: 'compareDivider',
    knobId: 'compareKnob',
    lightBtnId: 'compareLightBtn',
    splitBtnId: 'compareSplitBtn',
    darkBtnId: 'compareDarkBtn',
    sweepBtnId: 'compareSweepBtn'
  });

  /* ================= 01. SPORA v1.9 FEATURED CASE STUDY ================= */
  function hydrateSporaMedia() {
    var stage = document.getElementById('sporaCompareStage');
    if (!stage || stage.getAttribute('data-hydrated') === 'true') return;
    stage.setAttribute('data-hydrated', 'true');

    var lightPic = document.getElementById('sporaCompareLightPic');
    var darkPic = document.getElementById('sporaCompareDarkPic');
    if (lightPic) {
      lightPic.innerHTML = '<img src="./assets/projects/spora/06_beranda_jelajah_terang.webp" alt="SPORA v1.9 Mode Terang" width="1600" height="1007" decoding="async" />';
    }
    if (darkPic) {
      darkPic.innerHTML = '<img src="./assets/projects/spora/05_beranda_jelajah_gelap.webp" alt="SPORA v1.9 Mode Gelap" width="1600" height="1007" decoding="async" />';
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

  function renderSporaGallery() {
    var lang = window.RO_APP.state.lang;
    var shots = window.PORTFOLIO_DATA.spora.screenshots;
    var gridEl = document.getElementById('sporaGalleryGrid');
    if (!gridEl) return;

    var zoomIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6M8 11h6"/></svg>';

    gridEl.innerHTML = shots.map(function (s, idx) {
      var match = activeSporaFilter === 'all' || s.cat === activeSporaFilter;
      var cls = 'shot-card' + (s.isMobile ? ' is-mobile-shot' : '') + (match ? '' : ' hidden');
      var w = s.isMobile ? 780 : 1600;
      var h = s.isMobile ? 1688 : 1007;
      return (
        '<button type="button" class="' + cls + '" data-index="' + idx + '" aria-label="' + s.title[lang] + '">' +
          '<div class="shot-thumb">' +
            '<img src="' + s.src + '" alt="' + s.title[lang] + '" width="' + w + '" height="' + h + '" loading="lazy" decoding="async" />' +
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
        if (window.RO_APP.lightbox) window.RO_APP.lightbox.open(idx, card, 'spora');
      });
    });
  }

  function renderSporaPwaGuide() {
    var lang = window.RO_APP.state.lang;
    var tabs = window.PORTFOLIO_DATA.spora.pwaInstallTabs;
    var tabsEl = document.getElementById('sporaPwaTabs');
    var stepsEl = document.getElementById('sporaPwaSteps');
    var phonesEl = document.getElementById('sporaPwaPhones');
    if (!tabsEl || !stepsEl) return;

    tabsEl.innerHTML = tabs.map(function (tb) {
      var active = tb.id === activeSporaPwaTab;
      return '<button type="button" role="tab" aria-selected="' + (active ? 'true' : 'false') + '" class="evo-btn' + (active ? ' is-active' : '') + '" data-pwa-tab="' + tb.id + '">' + tb.label[lang] + '</button>';
    }).join('');

    tabsEl.querySelectorAll('[data-pwa-tab]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeSporaPwaTab = btn.getAttribute('data-pwa-tab');
        renderSporaPwaGuide();
      });
    });

    var current = tabs.find(function (x) { return x.id === activeSporaPwaTab; }) || tabs[0];
    stepsEl.innerHTML = current.steps[lang].map(function (st, idx) {
      return '<li><span class="pwa-step-num">' + (idx + 1) + '</span><span>' + st + '</span></li>';
    }).join('');

    if (phonesEl) {
      var shots = window.PORTFOLIO_DATA.spora.screenshots;
      var m1 = shots[22];
      var m2 = shots[23];
      phonesEl.innerHTML =
        '<button type="button" class="pwa-phone-btn" data-spora-lb="22" aria-label="' + m1.title[lang] + '">' +
          '<img src="' + m1.src + '" alt="' + m1.title[lang] + '" width="780" height="1688" loading="lazy" decoding="async" />' +
        '</button>' +
        '<button type="button" class="pwa-phone-btn" data-spora-lb="23" aria-label="' + m2.title[lang] + '">' +
          '<img src="' + m2.src + '" alt="' + m2.title[lang] + '" width="780" height="1688" loading="lazy" decoding="async" />' +
        '</button>';

      phonesEl.querySelectorAll('[data-spora-lb]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var idx = Number(btn.getAttribute('data-spora-lb'));
          if (window.RO_APP.lightbox) window.RO_APP.lightbox.open(idx, btn, 'spora');
        });
      });
    }
  }

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

    var featEl = document.getElementById('sporaFeaturesGrid');
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

    var filtersEl = document.getElementById('sporaGalleryFilters');
    if (filtersEl) {
      filtersEl.innerHTML = data.galleryCategories.map(function (c) {
        var active = c.id === activeSporaFilter;
        return '<button type="button" role="tab" aria-selected="' + (active ? 'true' : 'false') + '" class="filter-pill' + (active ? ' active' : '') + '" data-spora-filter="' + c.id + '">' + c.label[lang] + '</button>';
      }).join('');

      filtersEl.querySelectorAll('[data-spora-filter]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          activeSporaFilter = btn.getAttribute('data-spora-filter');
          renderSporaGallery();
          if (window.gsap && document.documentElement.getAttribute('data-motion') !== 'reduced') {
            window.gsap.fromTo(
              '#sporaGalleryGrid .shot-card:not(.hidden)',
              { y: 20, opacity: 0, scale: 0.96 },
              { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.04, ease: 'power3.out', clearProps: 'transform' }
            );
          }
          filtersEl.querySelectorAll('[data-spora-filter]').forEach(function (b) {
            var isSel = b.getAttribute('data-spora-filter') === activeSporaFilter;
            b.classList.toggle('active', isSel);
            b.setAttribute('aria-selected', isSel ? 'true' : 'false');
          });
        });
      });
    }

    renderSporaGallery();
    renderSporaPwaGuide();

    var archEl = document.getElementById('sporaArchFlow');
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

    var techBody = document.getElementById('sporaTechStackBody');
    if (techBody) {
      techBody.innerHTML = data.techStack.map(function (row) {
        return (
          '<tr>' +
            '<td data-label="' + t('spora.thPkg') + '"><strong>' + row.pkg + '</strong></td>' +
            '<td data-label="' + t('spora.thVer') + '"><code>' + row.ver + '</code></td>' +
            '<td data-label="' + t('spora.thRole') + '">' + row.role[lang] + '</td>' +
          '</tr>'
        );
      }).join('');
    }

    var secEl = document.getElementById('sporaSecurityList');
    if (secEl) {
      secEl.innerHTML = data.securityItems.map(function (item) {
        return '<li><span class="check-badge" aria-hidden="true">✓</span><span>' + item[lang] + '</span></li>';
      }).join('');
    }
    var limEl = document.getElementById('sporaLimitsList');
    if (limEl) {
      limEl.innerHTML = data.limitsItems.map(function (item) {
        return '<li><span class="check-badge" aria-hidden="true">•</span><span>' + item[lang] + '</span></li>';
      }).join('');
    }

    sporaCompare.bind();
  }

  /* ================= 02. PINDAI v1.1.1 PRODUCT SHOWCASE ================= */
  function hydratePindaiMedia() {
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

  function renderPindaiGallery() {
    var lang = window.RO_APP.state.lang;
    var shots = window.PORTFOLIO_DATA.pindai.screenshots;
    var gridEl = document.getElementById('galleryGrid');
    if (!gridEl) return;

    var zoomIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6M8 11h6"/></svg>';

    gridEl.innerHTML = shots.map(function (s, idx) {
      var match = activePindaiFilter === 'all' || s.cat === activePindaiFilter;
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
        if (window.RO_APP.lightbox) window.RO_APP.lightbox.open(idx, card, 'pindai');
      });
    });
  }

  function renderPindai() {
    var lang = window.RO_APP.state.lang;
    var data = window.PORTFOLIO_DATA.pindai;

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

    var filtersEl = document.getElementById('galleryFilters');
    if (filtersEl) {
      filtersEl.innerHTML = data.galleryCategories.map(function (c) {
        var active = c.id === activePindaiFilter;
        return '<button type="button" role="tab" aria-selected="' + (active ? 'true' : 'false') + '" class="filter-pill' + (active ? ' active' : '') + '" data-filter="' + c.id + '">' + c.label[lang] + '</button>';
      }).join('');

      filtersEl.querySelectorAll('[data-filter]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          activePindaiFilter = btn.getAttribute('data-filter');
          renderPindaiGallery();
          if (window.gsap && document.documentElement.getAttribute('data-motion') !== 'reduced') {
            window.gsap.fromTo(
              '#galleryGrid .shot-card:not(.hidden)',
              { y: 20, opacity: 0, scale: 0.96 },
              { y: 0, opacity: 1, scale: 1, duration: 0.42, stagger: 0.05, ease: 'power3.out', clearProps: 'transform' }
            );
          }
          filtersEl.querySelectorAll('[data-filter]').forEach(function (b) {
            var isSel = b.getAttribute('data-filter') === activePindaiFilter;
            b.classList.toggle('active', isSel);
            b.setAttribute('aria-selected', isSel ? 'true' : 'false');
          });
        });
      });
    }

    renderPindaiGallery();

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

    pindaiCompare.bind();
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
    hydrateSporaMedia: hydrateSporaMedia,
    hydratePindaiMedia: hydratePindaiMedia
  };
})();
