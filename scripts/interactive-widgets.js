/* ==========================================================================
   INTERACTIVE ENHANCEMENTS:
   1. Cinematic Opening Curtain (0.85s, 1x/session + replayable via Ctrl+K)
   2. Verified Impact Counter Ribbon (Count-Up Animation)
   3. Interactive Live SVG Architecture Diagrams (SPORA v1.9 & Pindai v1.1.1)
   4. Interactive "Sebelum vs Sesudah SPORA" Problem Comparator
   5. Scannable QR Presentation Modal (Portfolio & SPORA Live)
   6. Executive PDF Print Dossier Generator
   ========================================================================== */

(function () {
  'use strict';

  window.RO_APP = window.RO_APP || {};

  var sporaArchIdx = 0;
  var pindaiArchIdx = 0;
  var compMode = 'after';
  var qrTab = 'portfolio';
  var qrOpener = null;
  var impactAnimated = false;
  var bootFailsafeTimer = null;
  var bootTimeline = null;

  function lang() {
    return (window.RO_APP.state && window.RO_APP.state.lang) || 'id';
  }

  /* ================= 1. CINEMATIC OPENING CURTAIN ================= */
  function finishBootCurtain(curtain) {
    if (bootFailsafeTimer) {
      clearTimeout(bootFailsafeTimer);
      bootFailsafeTimer = null;
    }
    if (curtain) {
      curtain.classList.add('is-done');
      curtain.style.pointerEvents = '';
    }
  }

  function runBootCurtain(force) {
    var curtain = document.getElementById('bootCurtain');
    if (!curtain) return;

    if (bootFailsafeTimer) {
      clearTimeout(bootFailsafeTimer);
      bootFailsafeTimer = null;
    }
    if (bootTimeline) {
      bootTimeline.kill();
      bootTimeline = null;
    }

    var reduced = document.documentElement.getAttribute('data-motion') === 'reduced';
    var alreadyDone = false;
    try { alreadyDone = sessionStorage.getItem('ro_boot_done') === '1'; } catch (e) {}

    if (reduced || (alreadyDone && !force)) {
      finishBootCurtain(curtain);
      return;
    }

    curtain.classList.remove('is-done');
    curtain.style.pointerEvents = 'all';
    var topP = curtain.querySelector('.boot-panel-top');
    var botP = curtain.querySelector('.boot-panel-bottom');
    var core = curtain.querySelector('.boot-core');
    var fill = curtain.querySelector('.boot-progress-fill');
    var pctEl = curtain.querySelector('.boot-pct');

    try { sessionStorage.setItem('ro_boot_done', '1'); } catch (e) {}

    /* Guaranteed failsafe: never blocks interaction even if background tab pauses rAF */
    bootFailsafeTimer = setTimeout(function () {
      finishBootCurtain(curtain);
    }, 1250);

    if (window.gsap) {
      var obj = { val: 0 };
      window.gsap.set([topP, botP], { yPercent: 0 });
      window.gsap.set(core, { opacity: 1, scale: 1 });
      window.gsap.set(fill, { scaleX: 0 });
      if (pctEl) pctEl.textContent = '00%';

      bootTimeline = window.gsap.timeline({
        onComplete: function () {
          bootTimeline = null;
          finishBootCurtain(curtain);
        }
      });

      bootTimeline.to(obj, {
        val: 100,
        duration: 0.45,
        ease: 'power2.inOut',
        onUpdate: function () {
          var n = Math.round(obj.val);
          if (pctEl) pctEl.textContent = (n < 10 ? '0' : '') + n + '%';
        }
      }, 0)
        .to(fill, { scaleX: 1, duration: 0.45, ease: 'power2.inOut' }, 0)
        .to(core, { opacity: 0, scale: 0.94, duration: 0.18, ease: 'power2.in' }, 0.42)
        .add(function () { curtain.style.pointerEvents = 'none'; }, 0.46)
        .to(topP, { yPercent: -102, duration: 0.38, ease: 'power4.inOut' }, 0.46)
        .to(botP, { yPercent: 102, duration: 0.38, ease: 'power4.inOut' }, 0.46);
    } else {
      setTimeout(function () { finishBootCurtain(curtain); }, 450);
    }
  }

  /* ================= 2. VERIFIED IMPACT COUNTER RIBBON ================= */
  function formatCount(val) {
    var sep = lang() === 'en' ? ',' : '.';
    return String(Math.round(val)).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  }

  function syncImpactFormatting() {
    document.querySelectorAll('[data-count-target]').forEach(function (el) {
      var target = Number(el.getAttribute('data-count-target')) || 0;
      if (impactAnimated || document.documentElement.getAttribute('data-motion') === 'reduced') {
        el.textContent = formatCount(target);
      }
    });
  }

  function initImpactCounters() {
    var ribbon = document.getElementById('impactRibbon');
    if (!ribbon) return;
    var els = ribbon.querySelectorAll('[data-count-target]');
    if (!els.length) return;

    function finishImmediately() {
      impactAnimated = true;
      els.forEach(function (el) {
        el.textContent = formatCount(Number(el.getAttribute('data-count-target')) || 0);
      });
    }

    if (document.documentElement.getAttribute('data-motion') === 'reduced' || !window.gsap || !window.ScrollTrigger) {
      finishImmediately();
      return;
    }

    if (impactAnimated) {
      syncImpactFormatting();
      return;
    }

    window.ScrollTrigger.create({
      trigger: ribbon,
      start: 'top 92%',
      once: true,
      onEnter: function () {
        impactAnimated = true;
        els.forEach(function (el, idx) {
          var target = Number(el.getAttribute('data-count-target')) || 0;
          if (target === 0) {
            el.textContent = '0';
            return;
          }
          var counter = { v: 0 };
          window.gsap.to(counter, {
            v: target,
            duration: 1.15,
            delay: idx * 0.08,
            ease: 'power3.out',
            onUpdate: function () {
              el.textContent = formatCount(counter.v);
            }
          });
        });
      }
    });
  }

  /* ================= 3. INTERACTIVE LIVE ARCHITECTURE DIAGRAMS ================= */
  var ARCH_DETAIL = {
    spora: [
      {
        modules: ['AuthController.php', 'auth-pages.blade.php', 'tutorial-mode.blade.php', 'i18n.js (515 lines)'],
        detail: {
          id: 'Pintu masuk Landing dwibahasa ID/EN, Mode Tutorial & Simulasi lokal 5 langkah tanpa mengubah database, serta autentikasi sesi aman dengan regenerasi CSRF.',
          en: 'Bilingual ID/EN Landing, local 5-step Tutorial Sandbox with zero database mutation, and session-hardened authentication with CSRF regeneration.'
        }
      },
      {
        modules: ['ForumController.php', 'FeedService.php (672 lines)', 'app.js (Alpine.js SPA)', '19 Blade Views'],
        detail: {
          id: 'Antarmuka SPA 3-kolom tanpa reload halaman penuh: Feed Jelajah, Diikuti, Riwayat Aktivitas, filter kategori peralatan, serta Panel Monitoring Pabrik & Thread Terpanas.',
          en: 'Reload-free 3-column Alpine.js SPA powering Explore, Following, Activity History, searchable equipment category filters, and Plant Monitoring panels.'
        }
      },
      {
        modules: ['PostController.php', 'Laravel Echo + Pusher', 'EmergencyAlertService.php', 'ImageCompressionService.php'],
        detail: {
          id: 'Ruang diskusi real-time dengan balasan kutipan, reaksi emoji, siaran darurat (fanout job), kompresi foto otomatis <=300 KB, serta validasi MIME dokumen PDF/Office 10 MB.',
          en: 'Real-time chat rooms with quoted replies, emoji reactions, emergency broadcast fanout jobs, <=300 KB image compression, and strict 10 MB PDF/Office MIME validation.'
        }
      },
      {
        modules: ['NomenclatureController.php', 'plantMap.js (Leaflet GIS)', 'NomenclatureStatisticsController.php', 'MySQL / SQLite'],
        detail: {
          id: 'Mengindeks 5.406 Nomenklatur Alat lintas Indarung II–VI & Tambang, Peta Satelit Esri World Imagery layar penuh, arsip solusi Sebelum/Sesudah, serta grafik statistik 12 bulan.',
          en: 'Indexes 5,406 Equipment Nomenclatures across Indarung II–VI & Mining, fullscreen Esri Satellite GIS map, Before/After maintenance archives, & 12-month analytics.'
        }
      },
      {
        modules: ['SecurityHeaders.php (CSP Nonce)', 'spora-pwa-v7 (sw.js)', '99/99 PHPUnit Tests', 'Playwright E2E (24 screens)'],
        detail: {
          id: 'Header CSP nonce acak per request, isolasi rate limiting, proteksi path traversal penyimpanan, serta Service Worker PWA dengan instalasi standalone & fallback offline 504.',
          en: 'Per-request CSP nonces, isolated rate limiters, canonical path traversal guards, and standalone Service Worker PWA with safe 504 offline fallback.'
        }
      }
    ],
    pindai: [
      {
        modules: ['camera_windows (Option A)', 'printing (PDFium/CoreGraphics)', 'Iriun / USB Hot-Plug (3s)'],
        detail: {
          id: 'Mendukung kamera Windows prioritas otomatis (Iriun, DroidCam, USB, Laptop), kamera mobile, galeri JPG/PNG multi-file, serta impor PDF hingga 50 MB / 30 halaman per batch.',
          en: 'Auto-prioritizes Windows cameras (Iriun, DroidCam, USB, Laptop), mobile cameras, multi-image galleries, and cross-platform PDFs up to 50 MB / 30 pages per batch.'
        }
      },
      {
        modules: ['ImageProcessingService', 'image ^4.13.1', 'Homography 4-Corner Crop', 'EXIF Baking'],
        detail: {
          id: 'Pipeline piksel Dart murni: baking orientasi EXIF, flattening latar putih PDF, crop perspektif 8-handle bebas hambatan, rotasi 90°, dan filter kontras Asli/Jelas.',
          en: 'Pure-Dart pixel pipeline handling EXIF baking, pure-white PDF flattening, unobstructed 8-handle homography crop, 90° rotation, and Original/High-Contrast filtering.'
        }
      },
      {
        modules: ['OcrService', 'Gemini Vision (5-Model Failover)', 'Windows.Media.Ocr (WinRT)', 'Google ML Kit (5 Scripts)'],
        detail: {
          id: 'Header aman x-goog-api-key + retry otomatis HTTP 503 (1,2 dtk) + 5 model cadangan dengan dialog konfirmasi eksplisit ke OCR Offline gratis di perangkat.',
          en: 'Secure x-goog-api-key header + automatic 503 retry (1.2s) + 5-model failover pool with explicit fallback confirmation to local on-device Offline OCR.'
        }
      },
      {
        modules: ['RichTextDocument (Bitmask)', 'Side-by-Side Viewer', 'Find & Replace (Ctrl+F/H)'],
        detail: {
          id: 'Editor teks kaya WYSIWYG bebas simbol Markdown (B/I/U/S/H, list auto-lanjut, Undo/Redo) berdampingan dengan dokumen asli dan pembersih teks 1-klik.',
          en: 'Zero-Markdown WYSIWYG rich-text editor (B/I/U/S/H, auto-continuing lists, Undo/Redo) alongside original page inspection and 1-click text cleanup.'
        }
      },
      {
        modules: ['StorageService v2', 'Google Translate (Decoupled)', 'ExportService (PDF/DOCX/TXT)', '75/75 Tests Passed'],
        detail: {
          id: 'Penyimpanan lokal v2 (cache gambar maks 30 entri), terjemahan Google Translate independen kuota Gemini, serta ekspor PDF Roboto, DOCX OOXML valid, & TXT UTF-8.',
          en: 'Local v2 storage (30-entry bounded image cache), Gemini-independent Google Translate tab, and Roboto PDF, genuine OOXML DOCX, & UTF-8 TXT export.'
        }
      }
    ]
  };

  function renderArchWidget(projectKey, containerId, steps) {
    var container = document.getElementById(containerId);
    if (!container || !steps || !steps.length) return;
    var l = lang();
    var activeIdx = projectKey === 'spora' ? sporaArchIdx : pindaiArchIdx;
    var activeStep = steps[activeIdx] || steps[0];
    var detailInfo = ARCH_DETAIL[projectKey][activeIdx] || ARCH_DETAIL[projectKey][0];

    var hintText = l === 'en'
      ? 'Click any node to inspect verified modules & data flow'
      : 'Klik node mana saja untuk memeriksa modul terverifikasi & aliran data';

    container.innerHTML =
      '<div class="live-arch-wrap">' +
        '<div class="live-arch-head">' +
          '<span class="chip chip-mono">' + (l === 'en' ? 'INTERACTIVE LIVE PIPELINE' : 'DIAGRAM ALUR INTERAKTIF') + '</span>' +
          '<span class="live-arch-hint">' + hintText + '</span>' +
        '</div>' +
        '<div class="live-arch-track">' +
          '<svg class="live-arch-line-svg" viewBox="0 0 1000 6" preserveAspectRatio="none" aria-hidden="true">' +
            '<line x1="0" y1="3" x2="1000" y2="3" class="live-arch-path-bg" />' +
            '<line x1="0" y1="3" x2="1000" y2="3" class="live-arch-path-pulse" />' +
          '</svg>' +
          steps.map(function (st, idx) {
            var active = idx === activeIdx;
            return (
              '<button type="button" class="live-arch-node' + (active ? ' is-active' : '') + '" data-arch-idx="' + idx + '" aria-pressed="' + (active ? 'true' : 'false') + '">' +
                '<span class="live-arch-badge">0' + (idx + 1) + '</span>' +
                '<strong>' + st.title[l] + '</strong>' +
              '</button>'
            );
          }).join('') +
        '</div>' +
        '<div class="live-arch-inspector" aria-live="polite">' +
          '<div>' +
            '<span class="case-card-kicker">' + activeStep.step + ' — ' + activeStep.title[l] + '</span>' +
            '<h4>' + activeStep.title[l] + '</h4>' +
            '<p>' + detailInfo.detail[l] + '</p>' +
          '</div>' +
          '<div class="live-arch-modules">' +
            detailInfo.modules.map(function (m) {
              return '<span class="chip chip-mono">' + m + '</span>';
            }).join('') +
          '</div>' +
        '</div>' +
      '</div>';

    container.querySelectorAll('[data-arch-idx]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var nextIdx = Number(btn.getAttribute('data-arch-idx'));
        if (projectKey === 'spora') sporaArchIdx = nextIdx;
        else pindaiArchIdx = nextIdx;
        renderArchWidget(projectKey, containerId, steps);
      });
    });
  }

  function renderLiveArchitectures() {
    if (window.PORTFOLIO_DATA.spora) {
      renderArchWidget('spora', 'sporaLiveArch', window.PORTFOLIO_DATA.spora.archSteps);
    }
    if (window.PORTFOLIO_DATA.pindai) {
      renderArchWidget('pindai', 'pindaiLiveArch', window.PORTFOLIO_DATA.pindai.archSteps);
    }
  }

  /* ================= 4. SPORA "SEBELUM vs SESUDAH" COMPARATOR ================= */
  function renderSporaComparator() {
    var wrap = document.getElementById('sporaComparator');
    if (!wrap) return;
    var l = lang();
    var isBefore = compMode === 'before';

    var beforeLabel = l === 'en' ? 'Before: Plant WhatsApp Group' : 'Sebelum: Grup Chat WhatsApp';
    var afterLabel = l === 'en' ? 'After: SPORA v1.9 Platform' : 'Sesudah: Aplikasi SPORA v1.9';

    var screenHtml = isBefore
      ? (
        '<div class="sim-screen">' +
          '<div class="sim-screen-head"><span>WA Group • Koordinasi Pabrik</span><span>UNSTRUCTURED CHAT</span></div>' +
          '<div class="wa-bubble"><small>08:12 • Shift A</small>' + (l === 'en' ? 'Morning team, please send attendance sheet for today.' : 'Pagi rekan-rekan, mohon kirim rekap hadir hari ini.') + '</div>' +
          '<div class="wa-bubble is-buried"><small>08:19 • Teknisi Lapangan</small>' + (l === 'en' ? '⚠ Bearing temperature rising on Indarung IV motor! Need SOP & check ASAP.' : '⚠ Suhu bearing motor Indarung IV naik tinggi! Mohon SOP & pengecekan segera.') + '</div>' +
          '<div class="wa-bubble"><small>08:21 • Umum</small>' + (l === 'en' ? 'Reminder: safety briefing starts at 09:00.' : 'Info: briefing K3 dimulai jam 09.00 ya.') + '</div>' +
          '<div class="wa-bubble"><small>08:24 • Shift B</small>' + (l === 'en' ? 'Copy that, thanks! 👍 (+42 newer messages burying the report above...)' : 'Siap, terima kasih! 👍 (+42 pesan baru menenggelamkan laporan di atas...)') + '</div>' +
        '</div>'
      )
      : (
        '<div class="sim-screen">' +
          '<div class="sim-screen-head"><span style="color:var(--proj-spora);font-weight:700;">SPORA v1.9 • forum.sp-link.id</span><span>STRUCTURED &amp; TRACKED</span></div>' +
          '<div class="spora-structured-card">' +
            '<div style="display:flex;gap:6px;flex-wrap:wrap;">' +
              '<span class="chip chip-spora chip-mono">KENDALA DARURAT</span>' +
              '<span class="chip chip-cyan chip-mono">#4W1W03M1</span>' +
              '<span class="chip chip-success chip-mono">GIS + SOP PDF</span>' +
            '</div>' +
            '<strong style="font-family:var(--font-display);font-size:0.94rem;">' + (l === 'en' ? 'Main Drive Bearing Overheating — Indarung IV' : 'Lonjakan Suhu Bearing Main Drive — Indarung IV') + '</strong>' +
            '<div style="font-size:0.8rem;color:var(--text-secondary);">' + (l === 'en' ? 'Real-time Echo/Pusher chat thread • SOP PDF attached • Linked to 5,406 Master Data • Archived with Before/After proof upon resolution.' : 'Ruang chat real-time Echo/Pusher • Lampiran SOP PDF • Terhubung ke 5.406 Master Data Alat • Arsip foto Sebelum/Sesudah saat selesai.') + '</div>' +
          '</div>' +
        '</div>'
      );

    var pointsHtml = isBefore
      ? (
        '<div class="comparator-points">' +
          '<span class="chip chip-amber chip-mono" style="justify-self:start;">' + (l === 'en' ? 'OPERATIONAL BOTTLENECK' : 'KENDALA KOMUNIKASI LAMA') + '</span>' +
          '<h4>' + (l === 'en' ? 'Critical Equipment Issues Easily Buried in Chat Streams' : 'Laporan Penting Mudah Tenggelam di Aliran Pesan Grup') + '</h4>' +
          '<ul class="check-list">' +
            '<li><span class="check-badge" style="background:var(--accent-amber-soft);color:var(--accent-amber);">!</span><span>' + (l === 'en' ? 'No dedicated equipment index — difficult to search past repairs for a specific machine.' : 'Tidak terindeks per kode mesin — riwayat perbaikan alat sulit dicari kembali di masa depan.') + '</span></li>' +
            '<li><span class="check-badge" style="background:var(--accent-amber-soft);color:var(--accent-amber);">!</span><span>' + (l === 'en' ? 'No formal Open vs Resolved status or Before/After physical repair evidence.' : 'Tidak ada status resmi Kendala Aktif vs Terselesaikan beserta arsip foto Sebelum & Sesudah.') + '</span></li>' +
            '<li><span class="check-badge" style="background:var(--accent-amber-soft);color:var(--accent-amber);">!</span><span>' + (l === 'en' ? 'Emergency machine issues mix directly with daily non-technical chat messages.' : 'Laporan gangguan kritis bercampur langsung dengan obrolan harian biasa.') + '</span></li>' +
          '</ul>' +
        '</div>'
      )
      : (
        '<div class="comparator-points">' +
          '<span class="chip chip-success chip-mono" style="justify-self:start;">' + (l === 'en' ? 'SPORA v1.9 IMPACT' : 'SOLUSI TERUKUR SPORA v1.9') + '</span>' +
          '<h4>' + (l === 'en' ? 'Every Incident Indexed, Mapped & Permanently Archived' : 'Setiap Kendala Terindeks, Terpetakan GIS & Terarsip Permanen') + '</h4>' +
          '<ul class="check-list">' +
            '<li><span class="check-badge">✓</span><span>' + (l === 'en' ? 'Direct #AssetCode linking to 5,406 Master Data Nomenclatures + Satellite GIS Map.' : 'Tautan langsung #KodeAlat ke 5.406 Master Data Nomenklatur + Peta Satelit GIS Indarung.') + '</span></li>' +
            '<li><span class="check-badge">✓</span><span>' + (l === 'en' ? 'Dedicated real-time chat room with quoted replies, SOP PDF uploads & emergency alerts.' : 'Ruang chat real-time per topik lengkap dengan kutipan balasan, lampiran SOP PDF & siaran darurat.') + '</span></li>' +
            '<li><span class="check-badge">✓</span><span>' + (l === 'en' ? 'Closure workflow archives solution notes, replaced parts & Before/After photos into 12-month analytics.' : 'Alur Tandai Selesai mengarsipkan solusi, part diganti, foto Sebelum/Sesudah, & statistik 12 bulan.') + '</span></li>' +
          '</ul>' +
          '<div style="padding-top:4px;"><a href="https://forum.sp-link.id/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">' + (l === 'en' ? 'Try SPORA via Tutorial Mode ↗' : 'Coba SPORA via Mode Tutorial ↗') + '</a></div>' +
        '</div>'
      );

    wrap.innerHTML =
      '<div class="comparator-wrap">' +
        '<div class="comparator-bar">' +
          '<div>' +
            '<span class="case-card-kicker" style="margin-bottom:2px;">' + (l === 'en' ? 'INTERACTIVE IMPACT SIMULATOR' : 'SIMULATOR PERBANDINGAN ALUR KERJA') + '</span>' +
            '<strong style="font-family:var(--font-display);font-size:1.05rem;">' + (l === 'en' ? 'Why SPORA Was Built for the Plant Floor' : 'Mengapa SPORA Dibangun untuk Lingkungan Pabrik') + '</strong>' +
          '</div>' +
          '<div class="comparator-switch" role="tablist">' +
            '<button type="button" role="tab" aria-selected="' + (isBefore ? 'true' : 'false') + '" class="comp-tab is-before' + (isBefore ? ' is-active' : '') + '" data-comp="before">' + beforeLabel + '</button>' +
            '<button type="button" role="tab" aria-selected="' + (!isBefore ? 'true' : 'false') + '" class="comp-tab is-after' + (!isBefore ? ' is-active' : '') + '" data-comp="after">' + afterLabel + '</button>' +
          '</div>' +
        '</div>' +
        '<div class="comparator-stage">' + screenHtml + pointsHtml + '</div>' +
      '</div>';

    wrap.querySelectorAll('[data-comp]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        compMode = btn.getAttribute('data-comp');
        renderSporaComparator();
      });
    });
  }

  /* ================= 5. SCANNABLE QR CODE PRESENTATION MODAL ================= */
  function renderQrModalContent() {
    var l = lang();
    var isSpora = qrTab === 'spora';
    var url = isSpora ? 'https://forum.sp-link.id/' : 'https://rahmaoktoyadi19.github.io/rahma19app/';
    var svgPath = isSpora ? './assets/brand/qr-spora.svg' : './assets/brand/qr-portfolio.svg';
    var note = isSpora
      ? (l === 'en' ? 'Scan to open SPORA v1.9 on your phone — click Tutorial Mode to try safely!' : 'Pindai untuk buka SPORA v1.9 di HP — klik Mode Tutorial untuk mencoba aman!')
      : (l === 'en' ? 'Scan with any phone camera to open Rahma Oktoyadi\'s Portfolio instantly.' : 'Arahkan kamera HP untuk langsung membuka Portfolio Rahma Oktoyadi.');

    var imgEl = document.getElementById('qrImage');
    var urlEl = document.getElementById('qrUrlText');
    var noteEl = document.getElementById('qrNoteText');
    if (imgEl) {
      imgEl.src = svgPath;
      imgEl.alt = 'QR Code ' + url;
    }
    if (urlEl) urlEl.textContent = url;
    if (noteEl) noteEl.textContent = note;

    document.querySelectorAll('[data-qr-tab]').forEach(function (btn) {
      var active = btn.getAttribute('data-qr-tab') === qrTab;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }

  function openQrModal(initialTab) {
    var modal = document.getElementById('qrModal');
    if (!modal) return;
    if (initialTab === 'spora' || initialTab === 'portfolio') qrTab = initialTab;
    qrOpener = document.activeElement;
    renderQrModalContent();
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (window.RO_APP.motion) window.RO_APP.motion.stopScroll();
    if (window.RO_APP.sound) window.RO_APP.sound.open();
    var closeBtn = document.getElementById('qrCloseBtn');
    if (closeBtn) closeBtn.focus();
  }

  function closeQrModal() {
    var modal = document.getElementById('qrModal');
    if (!modal || !modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (window.RO_APP.motion) window.RO_APP.motion.startScroll();
    if (window.RO_APP.sound) window.RO_APP.sound.close();
    if (qrOpener && typeof qrOpener.focus === 'function') qrOpener.focus();
  }

  function initQrModal() {
    var modal = document.getElementById('qrModal');
    if (!modal) return;

    var closeBtn = document.getElementById('qrCloseBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeQrModal);
    modal.addEventListener('click', function (ev) {
      if (ev.target === modal) closeQrModal();
    });

    document.querySelectorAll('[data-qr-tab]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        qrTab = btn.getAttribute('data-qr-tab');
        renderQrModalContent();
      });
    });

    var copyBtn = document.getElementById('qrCopyUrlBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var urlEl = document.getElementById('qrUrlText');
        if (!urlEl || !navigator.clipboard) return;
        navigator.clipboard.writeText(urlEl.textContent).then(function () {
          var prev = copyBtn.textContent;
          copyBtn.textContent = lang() === 'en' ? 'Link Copied!' : 'Link Disalin!';
          setTimeout(function () { copyBtn.textContent = prev; }, 1800);
        });
      });
    }

    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && modal.classList.contains('is-open')) closeQrModal();
    });
  }

  /* ================= 6. EXECUTIVE PDF PRINT DOSSIER ================= */
  function buildPrintDossier() {
    var el = document.getElementById('printDossier');
    if (!el) return;
    var l = lang();
    var prof = window.PORTFOLIO_DATA.profile;
    var weeks = window.PORTFOLIO_DATA.internship.monthOneWeeks;

    var contactExtra = [];
    contactExtra.push('GitHub: ' + prof.githubUrl);
    if (prof.email) contactExtra.push('Email: ' + prof.email);
    if (prof.linkedinUrl) contactExtra.push('LinkedIn: ' + prof.linkedinUrl);

    el.innerHTML =
      '<div class="pd-header">' +
        '<div>' +
          '<h1>RAHMA OKTOYADI</h1>' +
          '<p>' + (l === 'en' ? 'Informatics Engineering, Universitas Riau (UNRI) • PT Semen Padang Internship Portfolio' : 'Teknik Informatika, Universitas Riau (UNRI) • Portfolio Magang PT Semen Padang') + '</p>' +
          '<p style="margin-top:4px;font-family:monospace;font-size:8.5pt;">Portfolio: https://rahmaoktoyadi19.github.io/rahma19app/ • SPORA Live: https://forum.sp-link.id/</p>' +
        '</div>' +
        '<img src="./assets/brand/qr-portfolio.svg" alt="QR Portfolio" class="pd-qr" />' +
      '</div>' +

      '<div class="pd-metrics">' +
        '<div class="pd-metric"><strong>' + formatCount(5406) + '</strong><span>' + (l === 'en' ? 'Plant Equipment Assets (SPORA)' : 'Nomenklatur Alat Pabrik (SPORA)') + '</span></div>' +
        '<div class="pd-metric"><strong>174</strong><span>' + (l === 'en' ? 'Automated Tests Passed (99+75)' : 'Tes Otomatis Lulus (99+75)') + '</span></div>' +
        '<div class="pd-metric"><strong>33</strong><span>' + (l === 'en' ? 'Authentic UI Captures (24+9)' : 'Tangkapan Layar Nyata (24+9)') + '</span></div>' +
        '<div class="pd-metric"><strong>0</strong><span>' + (l === 'en' ? 'Static Analysis & E2E Errors' : 'Error Analisis Statis & E2E') + '</span></div>' +
      '</div>' +

      '<div class="pd-section">' +
        '<h2>' + (l === 'en' ? 'PT Semen Padang Internship Chronicle — Month 01 (Verified)' : 'Perjalanan Magang PT Semen Padang — Bulan 01 (Faktual)') + '</h2>' +
        '<ul>' +
          weeks.map(function (w) {
            return '<li><strong>' + w.code + ' — ' + w.title[l] + ':</strong> ' + w.summary[l] + '</li>';
          }).join('') +
        '</ul>' +
      '</div>' +

      '<div class="pd-section">' +
        '<h2>' + (l === 'en' ? 'Featured Software Engineering Projects' : '3 Proyek Perangkat Lunak Utama') + '</h2>' +
        '<ul>' +
          '<li><strong>SPORA v1.9 (Laravel 13 • Alpine.js • Tailwind v4 • Leaflet GIS • Echo/Pusher • PWA):</strong> ' + (l === 'en' ? 'Live industrial reporting & discussion PWA at forum.sp-link.id (try via Tutorial Mode). 5,406 plant nomenclatures, satellite GIS, 12-month analytics, 99/99 PHPUnit tests (592 assertions), 24/24 E2E screens.' : 'PWA forum & pelaporan industri live di forum.sp-link.id (coba via Mode Tutorial). 5.406 nomenklatur alat, peta satelit GIS, statistik 12 bulan, 99/99 tes PHPUnit (592 assertions), 24/24 layar E2E.') + '</li>' +
          '<li><strong>Pindai v1.1.1 (Flutter • Dart • Gemini Vision API • ML Kit • WinRT OCR):</strong> ' + (l === 'en' ? 'Cross-platform Hybrid OCR scanner (18,835 Dart lines, 75/75 tests passed, 0 flutter analyze issues). Direct verified releases for Windows x64 (.exe 13.93 MB) & Android (.apk 92.45 MB).' : 'Aplikasi OCR Hybrid lintas platform (18.835 baris Dart, 75/75 tes lulus, 0 isu flutter analyze). Rilis resmi siap unduh untuk Windows x64 (.exe 13,93 MB) & Android (.apk 92,45 MB).') + '</li>' +
          '<li><strong>Detector APD:</strong> ' + (l === 'en' ? 'Industrial workplace safety (K3 / PPE) detection initiative aligned with plant safety standards.' : 'Inisiatif deteksi keselamatan kerja (K3 / Alat Pelindung Diri) untuk lingkungan industri.') + '</li>' +
        '</ul>' +
      '</div>' +

      '<div class="pd-section">' +
        '<h2>' + (l === 'en' ? 'Verified Technology Stack' : 'Ekosistem Teknologi Terverifikasi') + '</h2>' +
        '<p style="margin:0;font-size:9.2pt;">PHP 8.3 · Laravel 13 · Dart · Flutter · JavaScript · Alpine.js · Tailwind CSS v4 · Vite 8 · Leaflet GIS · Laravel Echo &amp; Pusher · Gemini Vision API · Google ML Kit · Windows.Media.Ocr · MySQL / SQLite · Microsoft Excel · PWA (Service Worker) · PHPUnit · Playwright · Git &amp; GitHub Actions</p>' +
      '</div>' +

      '<div class="pd-footer">' +
        '<span>' + contactExtra.join(' | ') + '</span>' +
        '<span>' + (l === 'en' ? 'Generated from Interactive Portfolio' : 'Dicetak dari Portfolio Interaktif') + '</span>' +
      '</div>';
  }

  function printExecutivePdf() {
    buildPrintDossier();
    if (window.RO_APP.palette) window.RO_APP.palette.closeBrief();
    setTimeout(function () { window.print(); }, 120);
  }

  function initPrintButtons() {
    document.addEventListener('click', function (ev) {
      if (ev.target.closest('[data-print-pdf]')) {
        printExecutivePdf();
      }
      var qrTrigger = ev.target.closest('[data-open-qr]');
      if (qrTrigger && !qrTrigger.getAttribute('data-qr-direct')) {
        openQrModal(qrTrigger.getAttribute('data-open-qr') || 'portfolio');
      }
    });
  }

  function refreshWidgets() {
    syncImpactFormatting();
    renderLiveArchitectures();
    renderSporaComparator();
    buildPrintDossier();
    var qrModal = document.getElementById('qrModal');
    if (qrModal && qrModal.classList.contains('is-open')) renderQrModalContent();
  }

  function initWidgets() {
    runBootCurtain(false);
    initImpactCounters();
    renderLiveArchitectures();
    renderSporaComparator();
    initQrModal();
    initPrintButtons();
    buildPrintDossier();
  }

  window.RO_APP.widgets = {
    init: initWidgets,
    refresh: refreshWidgets,
    replayCurtain: function () { runBootCurtain(true); },
    openQr: openQrModal,
    closeQr: closeQrModal,
    printPdf: printExecutivePdf
  };
})();
