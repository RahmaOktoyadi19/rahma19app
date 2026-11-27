/* ==========================================================================
   HOMEPAGE RENDERER — INTERNSHIP CHRONICLE, 3 PROJECTS, TECH TRACE, CONTACT
   ========================================================================== */

(function () {
  'use strict';

  window.RO_APP = window.RO_APP || {};

  var activeTechFilter = 'all';

  function t(key) {
    var lang = window.RO_APP.state.lang;
    var dict = window.PORTFOLIO_DATA.i18n[lang] || window.PORTFOLIO_DATA.i18n.id;
    return dict[key] !== undefined ? dict[key] : key;
  }

  function renderInternship() {
    var lang = window.RO_APP.state.lang;
    var data = window.PORTFOLIO_DATA.internship;
    var listEl = document.getElementById('internshipTimeline');
    var upcomingEl = document.getElementById('upcomingChapters');
    if (!listEl || !upcomingEl) return;

    listEl.innerHTML = data.monthOneWeeks.map(function (w, idx) {
      var bullets = w.responsibilities[lang].map(function (b) {
        return '<li>' + b + '</li>';
      }).join('');

      var tags = w.tags[lang].map(function (tag) {
        return '<span class="chip chip-mono">' + tag + '</span>';
      }).join('');

      var crossLinkHtml = '';
      if (w.crossLink) {
        crossLinkHtml =
          '<a href="' + w.crossLink.route + '" class="timeline-crosslink">' +
            '<div class="timeline-crosslink-left">' +
              '<img src="' + w.crossLink.logo + '" alt="SPORA" width="34" height="34" loading="lazy" decoding="async" class="timeline-crosslink-logo" />' +
              '<div>' +
                '<strong style="display:block;font-size:0.86rem;color:var(--text-primary);">' + w.crossLink.title + '</strong>' +
                '<span style="font-size:0.76rem;color:var(--text-muted);">' + t('journey.sporaLinkSub') + '</span>' +
              '</div>' +
            '</div>' +
            '<span class="chip chip-spora chip-mono">' + t('journey.openSpora') + '</span>' +
          '</a>';
      }

      return (
        '<article class="timeline-node' + (idx === 0 ? ' is-current' : '') + '" data-week-id="' + w.id + '" data-week-idx="' + idx + '" data-reveal>' +
          '<span class="timeline-dot" aria-hidden="true"></span>' +
          '<div class="timeline-meta">' +
            '<span class="timeline-week">' + w.code + ' • ' + w.domain[lang] + '</span>' +
            '<span class="chip chip-mono">' + w.location + '</span>' +
          '</div>' +
          '<h3>' + w.title[lang] + '</h3>' +
          '<p>' + w.summary[lang] + '</p>' +
          '<ul class="timeline-bullets">' + bullets + '</ul>' +
          '<div class="timeline-tags">' + tags + '</div>' +
          crossLinkHtml +
        '</article>'
      );
    }).join('');

    upcomingEl.innerHTML = data.upcomingMonths.map(function (m) {
      return (
        '<div class="upcoming-card">' +
          '<span class="mono">' + m.code + '</span>' +
          '<strong>' + m.title[lang] + '</strong>' +
          '<span>' + m.status[lang] + '</span>' +
        '</div>'
      );
    }).join('');

    updateActiveChapterBox(0);
  }

  function updateActiveChapterBox(idx) {
    var lang = window.RO_APP.state.lang;
    var weeks = window.PORTFOLIO_DATA.internship.monthOneWeeks;
    var w = weeks[idx] || weeks[0];
    var codeEl = document.getElementById('activeChapterCode');
    var titleEl = document.getElementById('activeChapterTitle');
    var outEl = document.getElementById('activeChapterOutcome');

    if (codeEl) codeEl.textContent = w.chapter + ' • ' + w.code + ' — ' + w.domain[lang];
    if (titleEl) titleEl.textContent = w.title[lang];
    if (outEl) outEl.textContent = w.outcome[lang];

    document.querySelectorAll('.timeline-node').forEach(function (node) {
      node.classList.toggle('is-current', Number(node.getAttribute('data-week-idx')) === idx);
    });
  }

  function buildProjectVisual(p, lang) {
    if (p.visualType === 'spora-preview') {
      return (
        '<div class="proj-visual-stage">' +
          '<div class="proj-window-bar">' +
            '<span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span>' +
            '<span>SPORA v1.9 • forum.sp-link.id (PWA)</span>' +
          '</div>' +
          '<div class="proj-visual-body">' +
            '<img src="' + p.previewWebp + '" alt="SPORA v1.9 Dark Mode Dashboard" width="1600" height="1007" loading="lazy" decoding="async" class="shot-preview" />' +
          '</div>' +
        '</div>'
      );
    }

    if (p.visualType === 'pindai-preview') {
      return (
        '<div class="proj-visual-stage">' +
          '<div class="proj-window-bar">' +
            '<span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span>' +
            '<span>Pindai v1.1.1 • Windows / Android / iOS</span>' +
          '</div>' +
          '<div class="proj-visual-body">' +
            '<picture>' +
              '<source srcset="' + p.previewWebp + '" type="image/webp" />' +
              '<img src="' + p.previewPng + '" alt="Pindai v1.1.1 Dark Mode Workspace" width="1920" height="1140" loading="lazy" decoding="async" class="shot-preview" />' +
            '</picture>' +
          '</div>' +
        '</div>'
      );
    }

    if (p.visualType === 'spora-blueprint') {
      var steps = lang === 'en'
        ? [
            { k: 'WK 02', v: 'WhatsApp Info Bottleneck' },
            { k: 'WK 03', v: 'Laravel Forum Built From Scratch' },
            { k: 'WK 04', v: 'Mentor Demo & Iterative Revision' }
          ]
        : [
            { k: 'WK 02', v: 'Fragmentasi Info WhatsApp' },
            { k: 'WK 03', v: 'Forum Laravel Dibangun dari Nol' },
            { k: 'WK 04', v: 'Presentasi Mentor & Revisi' }
          ];
      return (
        '<div class="proj-visual-stage">' +
          '<div class="proj-window-bar">' +
            '<span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span>' +
            '<span>SPORA • PT Semen Padang Plant Forum</span>' +
          '</div>' +
          '<div class="proj-visual-body">' +
            '<div class="proj-blueprint">' +
              '<div class="blueprint-top">' +
                '<div class="blueprint-logo-lg spora">' +
                  '<img src="' + p.logo + '" alt="' + p.logoAlt[lang] + '" width="68" height="68" loading="lazy" decoding="async" />' +
                '</div>' +
                '<span class="chip chip-spora chip-mono">LARAVEL • INTERNSHIP CASE</span>' +
              '</div>' +
              '<div class="blueprint-flow">' +
                steps.map(function (s) {
                  return '<div class="blueprint-step"><small>' + s.k + '</small><strong>' + s.v + '</strong></div>';
                }).join('') +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }

    /* Detector APD blueprint */
    var apdSteps = lang === 'en'
      ? [
          { k: 'DOMAIN', v: 'Industrial K3 & PPE Awareness' },
          { k: 'IDENTITY', v: 'Safety Shield & Optical Vision' },
          { k: 'DOSSIER', v: 'Case Study Ready for Tech Specs' }
        ]
      : [
          { k: 'DOMAIN', v: 'Keselamatan K3 & Kepatuhan APD' },
          { k: 'IDENTITAS', v: 'Perisai K3 & Lensa Pendeteksi' },
          { k: 'DOSSIER', v: 'Case Study Siap Diisi Detail Teknis' }
        ];
    return (
      '<div class="proj-visual-stage">' +
        '<div class="proj-window-bar">' +
          '<span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span>' +
          '<span>Detector APD • Industrial Safety Dossier</span>' +
        '</div>' +
        '<div class="proj-visual-body">' +
          '<div class="proj-blueprint apd">' +
            '<div class="blueprint-top">' +
              '<div class="blueprint-logo-lg apd">' +
                '<img src="' + p.logo + '" alt="' + p.logoAlt[lang] + '" width="68" height="68" loading="lazy" decoding="async" />' +
              '</div>' +
              '<span class="chip chip-apd chip-mono">SAFETY K3 • PPE VISION</span>' +
            '</div>' +
            '<div class="blueprint-flow">' +
              apdSteps.map(function (s) {
                return '<div class="blueprint-step"><small>' + s.k + '</small><strong>' + s.v + '</strong></div>';
              }).join('') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderFeaturedProjects() {
    var lang = window.RO_APP.state.lang;
    var stackEl = document.getElementById('featuredProjectsStack');
    if (!stackEl) return;

    stackEl.innerHTML = window.PORTFOLIO_DATA.featuredProjects.map(function (p, stackIdx) {
      var highlights = p.highlights[lang].map(function (h) {
        return '<li>' + h + '</li>';
      }).join('');

      var tags = p.tags.map(function (tg) {
        return '<span class="chip chip-mono">' + tg + '</span>';
      }).join('');

      var extraBtn = p.extraLink
        ? '<a href="' + p.extraLink.url + '" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">' + t(p.extraLink.labelKey) + ' ↗</a>'
        : '';

      var tutorialNote = p.tutorialHint
        ? '<div class="proj-tutorial-tip"><strong>💡</strong> ' + p.tutorialHint[lang] + '</div>'
        : '';

      return (
        '<article class="project-showcase-card glow-card ' + p.cardClass + '" style="--stack-i:' + stackIdx + ';" data-proj-id="' + p.id + '" data-stack-idx="' + stackIdx + '" data-reveal>' +
          '<div>' +
            '<div class="proj-header-meta">' +
              '<span class="proj-index">CASE ' + p.num + '</span>' +
              '<span class="chip ' + p.badgeClass + ' chip-mono">' + p.badge[lang] + '</span>' +
            '</div>' +
            '<div class="proj-title-row">' +
              '<div class="proj-logo-tile ' + p.logoClass + '">' +
                '<img src="' + p.logo + '" alt="' + p.logoAlt[lang] + '" width="52" height="52" loading="lazy" decoding="async" />' +
              '</div>' +
              '<h3 class="proj-title">' + p.name + '</h3>' +
            '</div>' +
            '<p class="proj-subtitle">' + p.subtitle[lang] + '</p>' +
            '<ul class="proj-highlights">' + highlights + '</ul>' +
            tutorialNote +
            '<div class="proj-tags">' + tags + '</div>' +
            '<div class="proj-cta-row">' +
              '<a href="' + p.route + '" class="btn btn-primary btn-sm">' + t('projects.openCase') + ' →</a>' +
              extraBtn +
            '</div>' +
          '</div>' +
          buildProjectVisual(p, lang) +
        '</article>'
      );
    }).join('');

    /* Adaptive ambient spotlight tint when hovering/focusing a project */
    var tintEl = document.getElementById('projectsAmbientTint');
    var tintMap = {
      spora: 'radial-gradient(640px circle at 78% 35%, rgba(244, 63, 94, 0.12), transparent 65%)',
      pindai: 'radial-gradient(640px circle at 78% 50%, rgba(59, 130, 246, 0.14), transparent 65%)',
      'detector-apd': 'radial-gradient(640px circle at 78% 65%, rgba(16, 185, 129, 0.12), transparent 65%)'
    };

    stackEl.querySelectorAll('.project-showcase-card').forEach(function (card) {
      var pid = card.getAttribute('data-proj-id');
      var setTint = function () {
        if (tintEl && tintMap[pid]) tintEl.style.background = tintMap[pid];
      };
      card.addEventListener('mouseenter', setTint);
      card.addEventListener('focusin', setTint);
    });
  }

  function renderTechStack() {
    var lang = window.RO_APP.state.lang;
    var cats = window.PORTFOLIO_DATA.techCategories;
    var filtersEl = document.getElementById('techFilters');
    var bentoEl = document.getElementById('techBento');
    var traceBanner = document.getElementById('techTraceBanner');
    if (!filtersEl || !bentoEl) return;

    var filterItems = [{ id: 'all', label: t('tech.all') }].concat(
      cats.map(function (c) { return { id: c.id, label: c.label[lang] }; })
    );

    filtersEl.innerHTML = filterItems.map(function (f) {
      var active = f.id === activeTechFilter;
      return '<button type="button" role="tab" aria-selected="' + (active ? 'true' : 'false') + '" class="filter-pill' + (active ? ' active' : '') + '" data-tech-filter="' + f.id + '">' + f.label + '</button>';
    }).join('');

    filtersEl.querySelectorAll('[data-tech-filter]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeTechFilter = btn.getAttribute('data-tech-filter');
        renderTechStack();
        if (window.gsap && document.documentElement.getAttribute('data-motion') !== 'reduced') {
          window.gsap.fromTo(
            '#techBento .tech-group-card:not(.is-hidden)',
            { y: 18, opacity: 0, scale: 0.96 },
            { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: 'power3.out', clearProps: 'transform' }
          );
        }
      });
    });

    bentoEl.innerHTML = cats.map(function (cat) {
      var hidden = activeTechFilter !== 'all' && activeTechFilter !== cat.id;
      var pills = cat.items.map(function (it, idx) {
        return (
          '<button type="button" class="tech-pill" data-cat="' + cat.id + '" data-idx="' + idx + '">' +
            '<span class="tech-pill-dot" aria-hidden="true"></span>' +
            '<span>' + it.name + '</span>' +
          '</button>'
        );
      }).join('');

      return (
        '<div class="tech-group-card' + (hidden ? ' is-hidden' : '') + '">' +
          '<div class="tech-group-head">' +
            '<h3 class="tech-group-title">' + cat.label[lang] + '</h3>' +
            '<span class="chip chip-mono">' + cat.items.length + '</span>' +
          '</div>' +
          '<div class="tech-items">' + pills + '</div>' +
        '</div>'
      );
    }).join('');

    function setTrace(catId, idx, el) {
      var cat = cats.find(function (c) { return c.id === catId; });
      if (!cat || !cat.items[idx] || !traceBanner) return;
      var item = cat.items[idx];
      bentoEl.querySelectorAll('.tech-pill').forEach(function (p) { p.classList.remove('is-focused'); });
      if (el) el.classList.add('is-focused');
      traceBanner.innerHTML =
        '<div><strong>' + t('tech.tracePrefix') + ' (' + item.name + '):</strong> ' + item.trace[lang] + '</div>' +
        '<a href="' + item.route + '" class="chip chip-cyan chip-mono">' + t('projects.openCase') + ' →</a>';
    }

    bentoEl.querySelectorAll('.tech-pill').forEach(function (btn) {
      var cid = btn.getAttribute('data-cat');
      var idx = Number(btn.getAttribute('data-idx'));
      btn.addEventListener('mouseenter', function () { setTrace(cid, idx, btn); });
      btn.addEventListener('click', function () { setTrace(cid, idx, btn); });
      btn.addEventListener('focus', function () { setTrace(cid, idx, btn); });
    });

    if (traceBanner) {
      traceBanner.innerHTML = '<div><strong>LIVE TRACE:</strong> ' + t('tech.traceDefault') + '</div>';
    }
  }

  function renderExperience() {
    var lang = window.RO_APP.state.lang;
    var el = document.getElementById('experienceGrid');
    if (!el) return;

    el.innerHTML = window.PORTFOLIO_DATA.experience.map(function (item) {
      return (
        '<article class="exp-card" data-reveal>' +
          '<div>' +
            '<span class="exp-period">' + item.period[lang] + '</span>' +
            '<h3>' + item.role[lang] + '</h3>' +
            '<div class="exp-org">' + item.org + '</div>' +
            '<p>' + item.desc[lang] + '</p>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }

  function renderContact() {
    var prof = window.PORTFOLIO_DATA.profile;
    var col = document.getElementById('contactLinksCol');
    if (!col) return;

    var cards = [];

    cards.push(
      '<a href="' + prof.githubUrl + '" target="_blank" rel="noopener noreferrer" class="contact-link-card">' +
        '<div><strong>GitHub</strong><span>' + prof.githubHandle + '</span></div>' +
        '<span class="chip chip-cyan chip-mono">OPEN ↗</span>' +
      '</a>'
    );

    cards.push(
      '<a href="' + prof.releasesUrl + '" target="_blank" rel="noopener noreferrer" class="contact-link-card">' +
        '<div><strong>' + t('contact.releasesTitle') + '</strong><span>' + t('contact.releasesSub') + '</span></div>' +
        '<span class="chip chip-mono">v1.1.1 ↗</span>' +
      '</a>'
    );

    if (prof.email) {
      cards.push(
        '<button type="button" class="contact-link-card" id="copyEmailBtn" style="width:100%;text-align:left;">' +
          '<div><strong>' + t('contact.copyEmail') + '</strong><span>' + prof.email + '</span></div>' +
          '<span class="chip chip-amber chip-mono" id="copyEmailBadge">COPY</span>' +
        '</button>'
      );
    }

    if (prof.linkedinUrl) {
      cards.push(
        '<a href="' + prof.linkedinUrl + '" target="_blank" rel="noopener noreferrer" class="contact-link-card">' +
          '<div><strong>' + t('contact.linkedin') + '</strong><span>LinkedIn</span></div>' +
          '<span class="chip chip-cyan chip-mono">OPEN ↗</span>' +
        '</a>'
      );
    }

    if (prof.cvUrl) {
      cards.push(
        '<a href="' + prof.cvUrl + '" download class="contact-link-card">' +
          '<div><strong>' + t('contact.cv') + '</strong><span>PDF</span></div>' +
          '<span class="chip chip-success chip-mono">↓ PDF</span>' +
        '</a>'
      );
    }

    cards.push(
      '<button type="button" class="contact-link-card" data-open-brief style="width:100%;text-align:left;">' +
        '<div><strong>' + t('contact.briefTitle') + '</strong><span>' + t('contact.briefSub') + '</span></div>' +
        '<span class="chip chip-amber chip-mono">60S BRIEF →</span>' +
      '</button>'
    );

    col.innerHTML = cards.join('');

    var copyBtn = document.getElementById('copyEmailBtn');
    if (copyBtn && prof.email) {
      copyBtn.addEventListener('click', function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(prof.email).then(function () {
            var badge = document.getElementById('copyEmailBadge');
            if (badge) {
              badge.textContent = t('contact.copied');
              setTimeout(function () { badge.textContent = 'COPY'; }, 2000);
            }
          });
        }
      });
    }

    col.querySelectorAll('[data-open-brief]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (window.RO_APP.palette) window.RO_APP.palette.openBrief();
      });
    });
  }

  function renderAllHome() {
    renderInternship();
    renderFeaturedProjects();
    renderTechStack();
    renderExperience();
    renderContact();
  }

  window.RO_APP.home = {
    render: renderAllHome,
    setActiveChapter: updateActiveChapterBox
  };
})();
