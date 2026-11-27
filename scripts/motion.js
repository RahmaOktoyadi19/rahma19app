/* ==========================================================================
   AWWWARDS / CODROPS-INSPIRED CINEMATIC MOTION ENGINE
   Lenis Smooth Scroll + GSAP 3 ScrollTrigger Choreography:
   1. Velvet Lenis inertial scrolling synced to gsap.ticker
   2. Split-Word Masked Heading Reveals (100% bilingual-safe)
   3. 3D Perspective + Scale Card Entrances (Value, Timeline, Bento, Exp, Case)
   4. Sticky Stacking Project Deck + Scrubbed Depth Scaling + Clip-Path Curtains
   5. Scrubbed Documentary Spine + Pop-In Timeline Dots + Sticky Chapter Sync
   6. Cursor-Tracking Specular Card Rim Lighting + 3D Portrait Parallax
   7. Zero CSS-vs-GSAP transition conflict & 100% prefers-reduced-motion safe
   ========================================================================== */

(function () {
  'use strict';

  window.RO_APP = window.RO_APP || {};

  var lenis = null;
  var fallbackObserver = null;
  var activeTriggers = [];
  var activeTweens = [];

  var MOTION_FULL_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>';
  var MOTION_REDUCED_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>';

  function prefersReducedMotion() {
    return document.documentElement.getAttribute('data-motion') === 'reduced';
  }

  function updateMotionIcon() {
    var icon = document.getElementById('motionIcon');
    var btn = document.getElementById('motionToggle');
    var reduced = prefersReducedMotion();
    if (icon) icon.innerHTML = reduced ? MOTION_REDUCED_SVG : MOTION_FULL_SVG;
    if (btn) btn.style.color = reduced ? 'var(--text-muted)' : 'var(--accent-cyan)';
  }

  function toggleMotionMode() {
    var next = prefersReducedMotion() ? 'full' : 'reduced';
    document.documentElement.setAttribute('data-motion', next);
    try { localStorage.setItem('ro_porto_motion', next); } catch (e) {}
    updateMotionIcon();

    if (next === 'reduced') {
      if (lenis) { lenis.destroy(); lenis = null; }
      clearAllScrollAnimations();
      if (window.gsap) {
        window.gsap.set('.value-card, .timeline-node, .project-showcase-card, .tech-group-card, .exp-card, .contact-panel, .case-card, .shot-card, .arch-step, .split-word, .proj-visual-stage, .shot-preview', {
          clearProps: 'all'
        });
      }
      var fill = document.getElementById('timelineSpineFill');
      if (fill) fill.style.transform = 'scaleY(1)';
    } else {
      initLenis();
      initPointerMicroInteractions();
      if (window.RO_APP.router) refreshMotion(window.RO_APP.router.getCurrentView());
    }
  }

  function isFinePointer() {
    return window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }

  function isDesktopStackCapable() {
    return window.matchMedia && window.matchMedia('(min-width: 1025px) and (min-height: 700px)').matches;
  }

  function clearAllScrollAnimations() {
    activeTriggers.forEach(function (tr) {
      if (tr && typeof tr.kill === 'function') tr.kill();
    });
    activeTriggers = [];

    activeTweens.forEach(function (tw) {
      if (tw && typeof tw.kill === 'function') tw.kill();
    });
    activeTweens = [];
  }

  function trackTween(tw) {
    if (!tw) return tw;
    activeTweens.push(tw);
    if (tw.scrollTrigger) activeTriggers.push(tw.scrollTrigger);
    return tw;
  }

  /* ================= 1. VELVET LENIS SMOOTH SCROLL ================= */
  function initLenis() {
    if (prefersReducedMotion() || !isFinePointer() || typeof window.Lenis !== 'function') return;

    lenis = new window.Lenis({
      duration: 1.22,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4
    });

    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      lenis.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add(function (time) {
        if (lenis) lenis.raf(time * 1000);
      });
      window.gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        if (lenis) lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }

  /* ================= 2. GLOBAL SCROLL PROGRESS BAR & NAVBAR STATE ================= */
  function initScrollChrome() {
    var progressBar = document.getElementById('scrollProgressBar');
    var navbar = document.getElementById('siteNavbar');
    var rafPending = false;

    function onScroll() {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(function () {
        var scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
        var docH = document.documentElement.scrollHeight - window.innerHeight;
        var ratio = docH > 0 ? Math.max(0, Math.min(1, scrollTop / docH)) : 0;
        if (progressBar) progressBar.style.transform = 'scaleX(' + ratio.toFixed(4) + ')';
        if (navbar) navbar.classList.toggle('is-scrolled', scrollTop > 24);
        rafPending = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ================= 3. POINTER SPOTLIGHT, CARD BORDER GLOW, 3D PORTRAIT & MAGNETIC ================= */
  function bindGlowCards(scope) {
    if (prefersReducedMotion() || !isFinePointer()) return;
    var root = scope || document;
    var cards = root.querySelectorAll('.value-card, .timeline-node, .project-showcase-card, .tech-group-card, .exp-card, .case-card, .shot-card, .arch-step');
    cards.forEach(function (card) {
      card.classList.add('glow-card');
      if (card.getAttribute('data-glow-bound') === 'true') return;
      card.setAttribute('data-glow-bound', 'true');
      card.addEventListener('mousemove', function (ev) {
        var r = card.getBoundingClientRect();
        var x = ((ev.clientX - r.left) / r.width) * 100;
        var y = ((ev.clientY - r.top) / r.height) * 100;
        card.style.setProperty('--card-mx', x.toFixed(1) + '%');
        card.style.setProperty('--card-my', y.toFixed(1) + '%');
      });
    });
  }

  function initPointerMicroInteractions() {
    if (prefersReducedMotion() || !isFinePointer()) return;
    document.body.classList.add('has-pointer');

    /* Global subtle directional spotlight */
    var spot = document.getElementById('cursorSpotlight');
    if (spot) {
      var movePending = false;
      var mx = 50, my = 25;
      window.addEventListener('mousemove', function (ev) {
        mx = ev.clientX;
        my = ev.clientY;
        if (!movePending) {
          movePending = true;
          requestAnimationFrame(function () {
            spot.style.setProperty('--cx', mx + 'px');
            spot.style.setProperty('--cy', my + 'px');
            movePending = false;
          });
        }
      }, { passive: true });
    }

    /* Atmospheric 3D Portrait Tilt + Specular Glare */
    var portrait = document.getElementById('portraitFrame');
    if (portrait) {
      portrait.addEventListener('mousemove', function (ev) {
        var r = portrait.getBoundingClientRect();
        var x = (ev.clientX - r.left) / r.width;
        var y = (ev.clientY - r.top) / r.height;
        var rotY = (x - 0.5) * 9;
        var rotX = (0.5 - y) * 9;
        portrait.style.transform = 'rotateX(' + rotX.toFixed(2) + 'deg) rotateY(' + rotY.toFixed(2) + 'deg) translateY(-4px)';
        portrait.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
        portrait.style.setProperty('--my', (y * 100).toFixed(1) + '%');
      });
      portrait.addEventListener('mouseleave', function () {
        portrait.style.transform = '';
      });
    }

    /* Restrained Magnetic Pull on [data-magnetic] Primary CTAs */
    document.querySelectorAll('[data-magnetic]').forEach(function (el) {
      el.addEventListener('mousemove', function (ev) {
        var r = el.getBoundingClientRect();
        var dx = ((ev.clientX - r.left) / r.width - 0.5) * 12;
        var dy = ((ev.clientY - r.top) / r.height - 0.5) * 10;
        el.style.transform = 'translate3d(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px,0)';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
      });
    });
  }

  /* ================= 4. HERO ENTRANCE REVEAL ================= */
  function runHeroEntrance() {
    if (prefersReducedMotion() || !window.gsap) return;
    var tl = window.gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.from('.hero-telemetry', { y: 18, opacity: 0, duration: 0.65 })
      .from('.hero-eyebrow-name', { y: 16, opacity: 0, duration: 0.55 }, '-=0.45')
      .from('.hero-title .line-inner', { yPercent: 112, rotateZ: 1.2, duration: 0.9, stagger: 0.12 }, '-=0.4')
      .from('.hero-lead', { y: 20, opacity: 0, duration: 0.65 }, '-=0.55')
      .from('.hero-actions > *', { y: 18, opacity: 0, scale: 0.96, duration: 0.55, stagger: 0.08 }, '-=0.48')
      .from('.hero-spec-item', { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.42')
      .from('.portrait-stage', { y: 36, opacity: 0, scale: 0.94, rotateY: -6, transformPerspective: 1100, duration: 1.0, ease: 'power3.out' }, '-=0.85');
  }

  /* ================= 5. BILINGUAL-SAFE SPLIT-WORD HEADING REVEAL ================= */
  function animateSplitHeadings(container) {
    if (prefersReducedMotion() || !window.gsap || !window.ScrollTrigger) return;
    var headings = container.querySelectorAll('.display-h2, .contact-title');

    headings.forEach(function (h) {
      var rawText = (h.textContent || '').trim();
      if (!rawText) return;
      var words = rawText.split(/\s+/);
      h.innerHTML = words.map(function (w) {
        return '<span class="split-word-wrap"><span class="split-word">' + w + '</span></span>';
      }).join(' ');

      var wordEls = h.querySelectorAll('.split-word');
      trackTween(window.gsap.fromTo(
        wordEls,
        { yPercent: 115, opacity: 0, rotateZ: 1.8 },
        {
          yPercent: 0,
          opacity: 1,
          rotateZ: 0,
          duration: 0.85,
          stagger: 0.04,
          ease: 'power4.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: h,
            start: 'top 88%',
            once: true
          }
        }
      ));
    });
  }

  /* ================= 6. HOMEPAGE CINEMATIC SCROLL CHOREOGRAPHY ================= */
  function setupHomeChoreography(homeEl) {
    var gsap = window.gsap;
    var ScrollTrigger = window.ScrollTrigger;

    /* Subtle Hero Portrait Scroll Parallax (desktop only) */
    if (isFinePointer()) {
      var portraitStage = homeEl.querySelector('.portrait-stage');
      if (portraitStage) {
        trackTween(gsap.to(portraitStage, {
          y: -36,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6
          }
        }));
      }

      /* Ambient architectural grid subtle vertical drift */
      var grid = document.querySelector('.ambient-grid');
      if (grid) {
        trackTween(gsap.to(grid, {
          y: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: homeEl,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.8
          }
        }));
      }
    }

    /* Section Headers & About Manifesto smooth rise */
    homeEl.querySelectorAll('.kicker, .lead-text, .about-manifesto, .about-body p, .about-edu-card').forEach(function (el) {
      trackTween(gsap.fromTo(
        el,
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.78,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: el,
            start: 'top 89%',
            once: true
          }
        }
      ));
    });

    /* ABOUT VALUE CARDS — Staggered 3D Perspective Cascade */
    var valueCards = homeEl.querySelectorAll('.value-card');
    if (valueCards.length) {
      trackTween(gsap.fromTo(
        valueCards,
        { y: 54, opacity: 0, rotateX: 11, scale: 0.94, transformPerspective: 1000, transformOrigin: 'center bottom' },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 0.88,
          stagger: 0.13,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '.values-stack',
            start: 'top 84%',
            once: true
          }
        }
      ));
    }

    /* INTERNSHIP DOCUMENTARY SPINE + 3D SLIDE-IN TIMELINE NODES */
    var track = document.getElementById('internshipTrack');
    var fill = document.getElementById('timelineSpineFill');
    var nodes = homeEl.querySelectorAll('.timeline-node');

    nodes.forEach(function (node) {
      node.addEventListener('click', function () {
        var idx = Number(node.getAttribute('data-week-idx'));
        if (window.RO_APP.home) window.RO_APP.home.setActiveChapter(idx);
      });
    });

    if (track && fill) {
      trackTween(gsap.fromTo(
        fill,
        { scaleY: 0.06 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: track,
            start: 'top 64%',
            end: 'bottom 58%',
            scrub: 0.4
          }
        }
      ));
    }

    nodes.forEach(function (node) {
      var idx = Number(node.getAttribute('data-week-idx'));
      var dot = node.querySelector('.timeline-dot');

      /* 3D directional slide-in entrance for each Week card */
      trackTween(gsap.fromTo(
        node,
        { y: 46, x: 24, opacity: 0, scale: 0.96, rotateY: -4, transformPerspective: 1100 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: node,
            start: 'top 87%',
            once: true
          }
        }
      ));

      if (dot) {
        trackTween(gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.55,
            ease: 'back.out(2.4)',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: node,
              start: 'top 85%',
              once: true
            }
          }
        ));
      }

      /* Live sticky chapter sync */
      var syncTr = ScrollTrigger.create({
        trigger: node,
        start: 'top 56%',
        end: 'bottom 44%',
        onEnter: function () { if (window.RO_APP.home) window.RO_APP.home.setActiveChapter(idx); },
        onEnterBack: function () { if (window.RO_APP.home) window.RO_APP.home.setActiveChapter(idx); }
      });
      activeTriggers.push(syncTr);
    });

    /* Upcoming Month 02-04 cards cascade */
    var upcoming = homeEl.querySelectorAll('.upcoming-card');
    if (upcoming.length) {
      trackTween(gsap.fromTo(
        upcoming,
        { y: 28, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 0.85,
          scale: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '#upcomingChapters',
            start: 'top 88%',
            once: true
          }
        }
      ));
    }

    /* FEATURED 3 PROJECTS — 3D ENTRANCE + CLIP-PATH CURTAIN + STICKY STACKING DEPTH */
    var projCards = gsap.utils.toArray('#featuredProjectsStack .project-showcase-card');
    projCards.forEach(function (card, i) {
      var visual = card.querySelector('.proj-visual-stage');
      var previewImg = card.querySelector('.shot-preview');

      /* 3D Perspective Hinge + Scale Entrance */
      trackTween(gsap.fromTo(
        card,
        { y: 68, opacity: 0, scale: 0.94, rotateX: 8, transformPerspective: 1200 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true
          }
        }
      ));

      /* Codrops Clip-Path Curtain Reveal on the project visual stage */
      if (visual) {
        trackTween(gsap.fromTo(
          visual,
          { clipPath: 'inset(18% 0% 0% 0% round 22px)', opacity: 0.25 },
          {
            clipPath: 'inset(0% 0% 0% 0% round 22px)',
            opacity: 1,
            duration: 1.0,
            ease: 'power4.out',
            clearProps: 'clipPath',
            scrollTrigger: {
              trigger: card,
              start: 'top 84%',
              once: true
            }
          }
        ));
      }

      if (previewImg) {
        trackTween(gsap.fromTo(
          previewImg,
          { scale: 1.14 },
          {
            scale: 1,
            duration: 1.15,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: card,
              start: 'top 84%',
              once: true
            }
          }
        ));
      }

      /* Awwwards Sticky Stacking Depth: gently scale & dim earlier card as next card glides over */
      if (isDesktopStackCapable() && i < projCards.length - 1) {
        var nextCard = projCards[i + 1];
        trackTween(gsap.to(
          card,
          {
            scale: 0.945,
            filter: 'brightness(0.74)',
            ease: 'none',
            immediateRender: false,
            scrollTrigger: {
              trigger: nextCard,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 0.45
            }
          }
        ));
      }
    });

    /* TECH STACK BENTO — Staggered 3D Wave + Pill Pop-In */
    var techCards = homeEl.querySelectorAll('.tech-group-card');
    if (techCards.length) {
      trackTween(gsap.fromTo(
        techCards,
        { y: 46, opacity: 0, scale: 0.93, rotateX: 9, transformPerspective: 1000 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: { amount: 0.42, from: 'start' },
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '#techBento',
            start: 'top 85%',
            once: true
          }
        }
      ));
    }

    /* EXPERIENCE CARDS — Smooth 3D Stagger Cascade */
    var expCards = homeEl.querySelectorAll('.exp-card');
    if (expCards.length) {
      trackTween(gsap.fromTo(
        expCards,
        { y: 50, opacity: 0, scale: 0.94, rotateX: 8, transformPerspective: 1000 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '#experienceGrid',
            start: 'top 86%',
            once: true
          }
        }
      ));
    }

    /* CONTACT PANEL — Dramatic Scale + Staggered Action Cards */
    var contactPanel = homeEl.querySelector('.contact-panel');
    if (contactPanel) {
      trackTween(gsap.fromTo(
        contactPanel,
        { y: 54, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.95,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: contactPanel,
            start: 'top 86%',
            once: true
          }
        }
      ));

      var contactCards = contactPanel.querySelectorAll('.contact-link-card');
      if (contactCards.length) {
        trackTween(gsap.fromTo(
          contactCards,
          { x: 24, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.08,
            delay: 0.12,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: contactPanel,
              start: 'top 84%',
              once: true
            }
          }
        ));
      }
    }
  }

  /* ================= 7. CASE STUDY VIEWS CHOREOGRAPHY (SPORA / PINDAI / APD) ================= */
  function setupCaseChoreography(viewEl) {
    var gsap = window.gsap;
    var ScrollTrigger = window.ScrollTrigger;

    /* Hero Case Card entrance */
    var heroCard = viewEl.querySelector('.case-hero-card');
    if (heroCard) {
      trackTween(gsap.fromTo(
        heroCard,
        { y: 30, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.78, ease: 'power3.out', clearProps: 'transform' }
      ));
    }

    /* Batch-staggered 3D reveal for feature cards, screenshot cards, architecture steps & tables */
    var batchTargets = viewEl.querySelectorAll('.case-card, .shot-card, .arch-step, .table-wrap, .evo-stage, .dossier-notice');
    if (batchTargets.length) {
      gsap.set(batchTargets, { y: 42, opacity: 0, scale: 0.95, rotateX: 6, transformPerspective: 1000 });
      var batchTr = ScrollTrigger.batch(batchTargets, {
        start: 'top 89%',
        once: true,
        onEnter: function (batch) {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 0.78,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'transform'
          });
        }
      });
      if (Array.isArray(batchTr)) {
        batchTr.forEach(function (t) { activeTriggers.push(t); });
      }
    }
  }

  /* ================= 8. FALLBACK OBSERVER (IF GSAP UNAVAILABLE) ================= */
  function runFallbackObserver(viewEl) {
    var items = viewEl.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      items.forEach(function (el) { el.classList.add('is-revealed'); });
      return;
    }
    if (fallbackObserver) fallbackObserver.disconnect();
    fallbackObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          fallbackObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    items.forEach(function (el) { fallbackObserver.observe(el); });
  }

  /* ================= 9. HOME SECTION SCROLL-SPY ================= */
  function initScrollSpy() {
    var sections = ['hero', 'about', 'internship', 'projects', 'tech', 'contact'];
    if (!('IntersectionObserver' in window)) return;

    var spy = new IntersectionObserver(function (entries) {
      if (!window.RO_APP.router || window.RO_APP.router.getCurrentView() !== 'home') return;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var key = entry.target.id === 'hero' ? 'home' : entry.target.id;
          document.querySelectorAll('[data-nav-key]').forEach(function (link) {
            link.classList.toggle('is-active', link.getAttribute('data-nav-key') === key);
          });
        }
      });
    }, { rootMargin: '-38% 0px -52% 0px' });

    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  /* ================= REFRESH ENGINE ON VIEW OR LANGUAGE CHANGE ================= */
  function refreshMotion(viewName) {
    var viewId = viewName === 'spora' ? 'sporaView'
      : viewName === 'pindai' ? 'pindaiView'
      : viewName === 'apd' ? 'apdView'
      : 'homeView';

    var viewEl = document.getElementById(viewId);
    if (!viewEl) return;

    clearAllScrollAnimations();
    bindGlowCards(viewEl);

    if (prefersReducedMotion()) {
      var fill = document.getElementById('timelineSpineFill');
      if (fill) fill.style.transform = 'scaleY(1)';
      return;
    }

    if (!window.gsap || !window.ScrollTrigger) {
      document.documentElement.classList.add('js-no-gsap');
      runFallbackObserver(viewEl);
      return;
    }

    window.gsap.registerPlugin(window.ScrollTrigger);
    animateSplitHeadings(viewEl);

    if (viewName === 'home') {
      setupHomeChoreography(viewEl);
    } else {
      setupCaseChoreography(viewEl);
    }

    setTimeout(function () {
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    }, 90);
  }

  function initMotion() {
    document.documentElement.classList.add('js-ready');
    updateMotionIcon();
    var motionBtn = document.getElementById('motionToggle');
    if (motionBtn) motionBtn.addEventListener('click', toggleMotionMode);
    initLenis();
    initScrollChrome();
    initPointerMicroInteractions();
    runHeroEntrance();
    initScrollSpy();
  }

  window.RO_APP.motion = {
    init: initMotion,
    refresh: refreshMotion,
    toggleMode: toggleMotionMode,
    isReduced: prefersReducedMotion,
    stopScroll: function () { if (lenis) lenis.stop(); },
    startScroll: function () { if (lenis) lenis.start(); },
    scrollToTop: function () {
      if (lenis) lenis.scrollTo(0, { immediate: true });
      else window.scrollTo({ top: 0, behavior: 'instant' });
    },
    scrollTo: function (el) {
      if (lenis) lenis.scrollTo(el, { offset: -74 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };
})();
