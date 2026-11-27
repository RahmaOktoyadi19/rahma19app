/* ==========================================================================
   COMMAND PALETTE (CTRL+K) + INDARUNG EASTER EGG + 60-SEC RECRUITER BRIEF
   ========================================================================== */

(function () {
  'use strict';

  window.RO_APP = window.RO_APP || {};

  var selectedIdx = 0;
  var filteredItems = [];
  var lastFocused = null;

  function lang() {
    return window.RO_APP.state.lang;
  }

  function getCommands() {
    var l = lang();
    var prof = window.PORTFOLIO_DATA.profile;
    return [
      {
        group: l === 'en' ? 'Navigation' : 'Navigasi',
        title: l === 'en' ? 'Home — First Impression' : 'Beranda — Halaman Utama',
        sub: '#/',
        tag: 'HOME',
        keywords: 'home beranda awal top',
        action: function () { window.RO_APP.router.go('#/'); }
      },
      {
        group: l === 'en' ? 'Navigation' : 'Navigasi',
        title: l === 'en' ? 'Inside My Internship Journey (PT Semen Padang)' : 'Perjalanan Magang PT Semen Padang (Week 01–04)',
        sub: l === 'en' ? 'Indarung 6 Kiln Maintenance, Data Sync, SPORA & Payroll' : 'Maintenance Kiln Indarung 6, Rekap Data, SPORA & Penggajian',
        tag: 'INTERNSHIP',
        keywords: 'magang internship semen padang indarung kiln week 01 02 03 04 absensi payroll',
        action: function () { window.RO_APP.router.go('#internship'); }
      },
      {
        group: l === 'en' ? 'Navigation' : 'Navigasi',
        title: l === 'en' ? 'About Me & Engineering Mindset' : 'Tentang Saya & Nilai Profesional',
        sub: l === 'en' ? 'Informatics Engineering, Universitas Riau (UNRI)' : 'Teknik Informatika, Universitas Riau (UNRI)',
        tag: 'ABOUT',
        keywords: 'about tentang profil unri riau',
        action: function () { window.RO_APP.router.go('#about'); }
      },
      {
        group: l === 'en' ? 'Navigation' : 'Navigasi',
        title: l === 'en' ? 'Verified Tech Stack (Live Trace)' : 'Ekosistem Teknologi Terverifikasi',
        sub: 'Laravel, Flutter, Dart, Gemini Vision, ML Kit, Excel',
        tag: 'STACK',
        keywords: 'tech stack teknologi laravel flutter dart php excel gemini',
        action: function () { window.RO_APP.router.go('#tech'); }
      },
      {
        group: l === 'en' ? 'Navigation' : 'Navigasi',
        title: l === 'en' ? 'Contact & Collaboration' : 'Kontak & Kolaborasi',
        sub: prof.githubHandle,
        tag: 'CONTACT',
        keywords: 'contact kontak github email linkedin cv',
        action: function () { window.RO_APP.router.go('#contact'); }
      },
      {
        group: l === 'en' ? 'Case Studies' : 'Studi Kasus Proyek',
        title: 'SPORA v1.9 — PT Semen Padang Industrial PWA',
        sub: l === 'en' ? 'Laravel 13, 5,406 Assets, Satellite GIS, 24 Screenshots & 99/99 Tests' : 'Laravel 13, 5.406 Alat, Peta Satelit GIS, 24 Screenshot & 99/99 Tes',
        tag: 'CASE 01',
        keywords: 'spora laravel forum pabrik whatsapp mentor pwa gis 5406 peta satelit',
        action: function () { window.RO_APP.router.go('#/projects/spora'); }
      },
      {
        group: l === 'en' ? 'Quick Actions' : 'Aksi Cepat',
        title: l === 'en' ? 'Try SPORA v1.9 Live (Click Tutorial Mode)' : 'Coba Aplikasi SPORA v1.9 Live (Klik Mode Tutorial)',
        sub: 'https://forum.sp-link.id/',
        tag: 'LIVE PWA ↗',
        keywords: 'spora live demo tutorial coba aplikasi forum.sp-link.id pwa',
        action: function () { window.open('https://forum.sp-link.id/', '_blank', 'noopener,noreferrer'); }
      },
      {
        group: l === 'en' ? 'Case Studies' : 'Studi Kasus Proyek',
        title: 'Pindai v1.1.1 — Cross-Platform Hybrid OCR App',
        sub: l === 'en' ? 'Flutter, Gemini Vision + Offline OCR, 9 Screenshots & Downloads' : 'Flutter, Gemini Vision + OCR Offline, 9 Screenshot & Unduhan',
        tag: 'CASE 02',
        keywords: 'pindai ocr flutter windows android ios download exe apk',
        action: function () { window.RO_APP.router.go('#/projects/pindai'); }
      },
      {
        group: l === 'en' ? 'Case Studies' : 'Studi Kasus Proyek',
        title: 'Detector APD — Industrial Safety (K3) Showcase',
        sub: l === 'en' ? 'PPE safety dossier & visual emblem' : 'Inisiatif keselamatan kerja K3 & dossier proyek',
        tag: 'CASE 03',
        keywords: 'detector apd ppe safety helm k3',
        action: function () { window.RO_APP.router.go('#/projects/detector-apd'); }
      },
      {
        group: l === 'en' ? 'Quick Actions' : 'Aksi Cepat',
        title: l === 'en' ? 'Open 60-Second Recruiter Executive Brief' : 'Buka Ringkasan Eksekutif 60 Detik (HRD)',
        sub: l === 'en' ? 'One-screen overview of profile, internship & projects' : 'Ringkasan 1 layar profil, magang & 3 proyek',
        tag: 'BRIEF',
        keywords: 'hrd recruiter brief ringkasan cv summary',
        action: function () { openBrief(); }
      },
      {
        group: l === 'en' ? 'Quick Actions' : 'Aksi Cepat',
        title: l === 'en' ? 'Presentation QR Code (Portfolio & SPORA)' : 'Tampilkan QR Code Presentasi (Portfolio & SPORA)',
        sub: l === 'en' ? 'Scannable QR code for mentor & HRD projector sessions' : 'QR Code siap pindai HP untuk sesi presentasi proyektor',
        tag: 'QR CODE',
        keywords: 'qr code scan presentasi projector share bagikan',
        action: function () { if (window.RO_APP.widgets) window.RO_APP.widgets.openQr('portfolio'); }
      },
      {
        group: l === 'en' ? 'Quick Actions' : 'Aksi Cepat',
        title: l === 'en' ? 'Print / Save Executive PDF Summary' : 'Cetak / Simpan Ringkasan Eksekutif PDF',
        sub: l === 'en' ? 'Clean A4 dossier with QR code for HRD & mentors' : 'Ringkasan A4 bersih lengkap dengan QR Code untuk HRD/mentor',
        tag: 'PDF',
        keywords: 'pdf print cetak export dossier resume cv',
        action: function () { if (window.RO_APP.widgets) window.RO_APP.widgets.printPdf(); }
      },
      {
        group: l === 'en' ? 'Quick Actions' : 'Aksi Cepat',
        title: l === 'en' ? 'Toggle Subtle Tactile Sound FX' : 'Aktifkan / Matikan Suara Interaksi Halus',
        sub: l === 'en' ? 'Web Audio micro-clicks (muted by default)' : 'Efek suara klik Web Audio halus (mute secara default)',
        tag: 'SOUND',
        keywords: 'sound audio suara mute click fx',
        action: function () { if (window.RO_APP.sound) window.RO_APP.sound.toggle(); }
      },
      {
        group: l === 'en' ? 'Quick Actions' : 'Aksi Cepat',
        title: l === 'en' ? 'Replay Cinematic Intro Curtain' : 'Putar Ulang Tirai Pembuka Sinematik',
        sub: 'RO // Indarung VI Telemetry Intro',
        tag: 'INTRO',
        keywords: 'intro preloader curtain boot replay animasi pembuka',
        action: function () { if (window.RO_APP.widgets) window.RO_APP.widgets.replayCurtain(); }
      },
      {
        group: l === 'en' ? 'Quick Actions' : 'Aksi Cepat',
        title: l === 'en' ? 'Toggle Fullscreen Cinema Mode (Esc to exit)' : 'Mode Layar Penuh / Fullscreen (Tekan Esc untuk keluar)',
        sub: l === 'en' ? 'Hide browser tabs & address bar for clean presentation' : 'Sembunyikan tab & address bar browser untuk tampilan presentasi',
        tag: 'FULLSCREEN',
        keywords: 'fullscreen layar penuh f11 esc presentasi cinema maximize',
        action: function () { if (window.RO_APP.fullscreen) window.RO_APP.fullscreen.toggle(); }
      },
      {
        group: l === 'en' ? 'Quick Actions' : 'Aksi Cepat',
        title: l === 'en' ? 'Toggle Smooth / Reduced Motion Animations' : 'Ganti Mode Animasi (Smooth / Reduced Motion)',
        sub: l === 'en' ? 'Control GSAP scroll animations & Lenis smooth scroll' : 'Atur animasi scroll GSAP & Lenis smooth scroll',
        tag: 'MOTION',
        keywords: 'motion animasi animation smooth reduced gsap lenis',
        action: function () { if (window.RO_APP.motion) window.RO_APP.motion.toggleMode(); }
      },
      {
        group: l === 'en' ? 'Quick Actions' : 'Aksi Cepat',
        title: l === 'en' ? 'Toggle Dark Cinematic / Light Editorial Mode' : 'Ganti Tema Dark Cinematic / Light Editorial',
        sub: l === 'en' ? 'Switch interface lighting instantly' : 'Ubah pencahayaan antarmuka seketika',
        tag: 'THEME',
        keywords: 'theme tema dark light gelap terang mode',
        action: function () { window.RO_APP.theme.toggle(); }
      },
      {
        group: l === 'en' ? 'Quick Actions' : 'Aksi Cepat',
        title: l === 'en' ? 'Switch Language (Bahasa Indonesia / English)' : 'Ganti Bahasa (Indonesia / English)',
        sub: l === 'en' ? 'Currently: English' : 'Saat ini: Bahasa Indonesia',
        tag: l === 'en' ? 'ID' : 'EN',
        keywords: 'lang language bahasa indonesia english id en',
        action: function () { window.RO_APP.setLanguage(l === 'en' ? 'id' : 'en'); }
      },
      {
        group: l === 'en' ? 'Quick Actions' : 'Aksi Cepat',
        title: l === 'en' ? 'Open GitHub Profile (RahmaOktoyadi19)' : 'Buka Profil GitHub (RahmaOktoyadi19)',
        sub: prof.githubUrl,
        tag: 'GITHUB ↗',
        keywords: 'github repo code source',
        action: function () { window.open(prof.githubUrl, '_blank', 'noopener,noreferrer'); }
      }
    ];
  }

  function renderPaletteList(query) {
    var listEl = document.getElementById('cmdList');
    if (!listEl) return;

    var q = (query || '').trim().toLowerCase();
    var all = getCommands();

    /* Subtle Industrial Easter Egg for Indarung / Kiln */
    var easterHtml = '';
    if (q === 'indarung' || q === 'kiln' || q === 'semen padang') {
      easterHtml =
        '<div style="margin:6px 6px 10px;padding:12px 14px;border-radius:10px;background:var(--accent-amber-soft);border:1px solid var(--accent-amber-border);font-family:var(--font-mono);font-size:0.74rem;color:var(--text-primary);">' +
          '<div style="color:var(--accent-amber);font-weight:700;margin-bottom:4px;">FIELD TELEMETRY // INDARUNG VI, PADANG</div>' +
          '<div>00°57\'S 100°28\'E • Week 01 Kiln Maintenance Onboarding → Week 03 SPORA Laravel Build → Week 04 Mentor Presentation.</div>' +
        '</div>';
    }

    filteredItems = all.filter(function (c) {
      if (!q) return true;
      var hay = (c.title + ' ' + c.sub + ' ' + c.keywords + ' ' + c.tag).toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    if (selectedIdx >= filteredItems.length) selectedIdx = 0;

    if (!filteredItems.length) {
      var emptyMsg = window.PORTFOLIO_DATA.i18n[lang()]['cmd.empty'];
      listEl.innerHTML = easterHtml + '<div class="cmd-empty">' + emptyMsg + '</div>';
      return;
    }

    var html = easterHtml;
    var lastGroup = '';
    filteredItems.forEach(function (item, idx) {
      if (item.group !== lastGroup) {
        html += '<div class="cmd-group-label">' + item.group + '</div>';
        lastGroup = item.group;
      }
      html +=
        '<button type="button" class="cmd-item' + (idx === selectedIdx ? ' is-selected' : '') + '" data-cmd-idx="' + idx + '">' +
          '<div>' +
            '<div class="cmd-item-title">' + item.title + '</div>' +
            '<div class="cmd-item-sub">' + item.sub + '</div>' +
          '</div>' +
          '<span class="cmd-item-tag">' + item.tag + '</span>' +
        '</button>';
    });

    listEl.innerHTML = html;

    listEl.querySelectorAll('.cmd-item').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = Number(btn.getAttribute('data-cmd-idx'));
        executeItem(idx);
      });
    });
  }

  function executeItem(idx) {
    var item = filteredItems[idx];
    if (!item) return;
    closePalette();
    item.action();
  }

  function openPalette() {
    var modal = document.getElementById('cmdModal');
    var input = document.getElementById('cmdInput');
    if (!modal || !input) return;
    closeBrief();
    lastFocused = document.activeElement;
    selectedIdx = 0;
    input.value = '';
    renderPaletteList('');
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (window.RO_APP.motion) window.RO_APP.motion.stopScroll();
    setTimeout(function () { input.focus(); }, 20);
  }

  function closePalette() {
    var modal = document.getElementById('cmdModal');
    if (!modal || !modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (window.RO_APP.motion) window.RO_APP.motion.startScroll();
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  /* ================= 60-SECOND RECRUITER BRIEF MODAL ================= */
  function renderBriefBody() {
    var l = lang();
    var body = document.getElementById('briefContent');
    if (!body) return;

    if (l === 'en') {
      body.innerHTML =
        '<div class="brief-grid">' +
          '<div class="brief-box">' +
            '<h4>Identity &amp; Education</h4>' +
            '<ul>' +
              '<li><strong>Rahma Oktoyadi</strong> — B.Eng. Informatics Engineering, Universitas Riau (UNRI).</li>' +
              '<li>Currently documenting a 4-month industrial internship at <strong>PT Semen Padang</strong> (Month 01 verified).</li>' +
              '<li>Focus: Web (Laravel), Cross-Platform (Flutter), AI OCR Integration &amp; Operational Data.</li>' +
            '</ul>' +
          '</div>' +
          '<div class="brief-box">' +
            '<h4>PT Semen Padang Internship (Month 01)</h4>' +
            '<ul>' +
              '<li><strong>Week 01:</strong> Field manpower biometric registration (fingerprint &amp; face) during Indarung 6 kiln maintenance.</li>' +
              '<li><strong>Week 02:</strong> Full-week database-to-Excel manpower attendance reconciliation.</li>' +
              '<li><strong>Weeks 02–03:</strong> Built <strong>SPORA</strong> plant discussion forum from scratch in Laravel.</li>' +
              '<li><strong>Week 04:</strong> Monday mentor demo (appreciated + revisions) + Tue–Fri payroll attendance recap.</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="brief-box" style="margin-bottom:16px;">' +
          '<h4>3 Featured Projects</h4>' +
          '<ul>' +
            '<li><strong>SPORA v1.9 (Laravel 13 PWA):</strong> Live industrial forum at <code>forum.sp-link.id</code> (5,406 plant assets, Satellite GIS, 99/99 PHPUnit tests, 24 real screenshots — click Tutorial Mode to try safely!).</li>' +
            '<li><strong>Pindai v1.1.1 (Flutter):</strong> Cross-platform Hybrid OCR app (18,835 Dart lines, 75/75 tests passing, 0 analyze issues, live Windows .exe &amp; Android .apk installers).</li>' +
            '<li><strong>Detector APD:</strong> Industrial PPE (K3) safety initiative — case study dossier structured for verified technical specs.</li>' +
          '</ul>' +
        '</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:10px;">' +
          '<a href="#/projects/spora" class="btn btn-primary btn-sm" data-brief-nav>Read SPORA Case Study →</a>' +
          '<a href="#/projects/pindai" class="btn btn-secondary btn-sm" data-brief-nav>Explore Pindai v1.1.1 →</a>' +
          '<button type="button" class="btn btn-secondary btn-sm" data-print-pdf>Save PDF Brief ↓</button>' +
          '<button type="button" class="btn btn-ghost btn-sm" data-open-qr="portfolio" data-brief-nav>QR Code</button>' +
          '<a href="https://github.com/RahmaOktoyadi19" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm">GitHub ↗</a>' +
        '</div>';
    } else {
      body.innerHTML =
        '<div class="brief-grid">' +
          '<div class="brief-box">' +
            '<h4>Identitas &amp; Pendidikan</h4>' +
            '<ul>' +
              '<li><strong>Rahma Oktoyadi</strong> — Mahasiswa Teknik Informatika, Fakultas Teknik, Universitas Riau (UNRI).</li>' +
              '<li>Menjalani program magang industri 4 bulan di <strong>PT Semen Padang</strong> (Bulan 01 terdokumentasi faktual).</li>' +
              '<li>Fokus: Web (Laravel), Aplikasi Lintas Platform (Flutter), Integrasi AI OCR &amp; Pengolahan Data.</li>' +
            '</ul>' +
          '</div>' +
          '<div class="brief-box">' +
            '<h4>Magang PT Semen Padang (Bulan 01)</h4>' +
            '<ul>' +
              '<li><strong>Week 01:</strong> Pendaftaran pekerja &amp; rekam biometrik (sidik jari &amp; wajah) saat maintenance kiln Indarung 6.</li>' +
              '<li><strong>Week 02:</strong> Sinkronisasi database absensi man power dengan rekap manual Microsoft Excel (1 minggu penuh).</li>' +
              '<li><strong>Week 02–03:</strong> Membangun forum diskusi pabrik <strong>SPORA</strong> dari nol menggunakan Laravel.</li>' +
              '<li><strong>Week 04:</strong> Presentasi perdana Senin ke mentor (apresiasi &amp; revisi) + rekap absensi penggajian Selasa–Jumat.</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="brief-box" style="margin-bottom:16px;">' +
          '<h4>3 Proyek Utama</h4>' +
          '<ul>' +
            '<li><strong>SPORA v1.9 (Laravel 13 PWA):</strong> Forum industri live di <code>forum.sp-link.id</code> (5.406 alat pabrik, Peta Satelit GIS, 99/99 tes PHPUnit lulus, 24 screenshot asli — klik Mode Tutorial untuk mencoba aman!).</li>' +
            '<li><strong>Pindai v1.1.1 (Flutter):</strong> Aplikasi OCR Hybrid lintas platform (18.835 baris Dart, 75/75 tes lulus, 0 isu analyze, installer Windows .exe &amp; Android .apk siap unduh).</li>' +
            '<li><strong>Detector APD:</strong> Inisiatif keselamatan kerja industri (K3) — halaman dossier disiapkan untuk spesifikasi teknis terverifikasi.</li>' +
          '</ul>' +
        '</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:10px;">' +
          '<a href="#/projects/spora" class="btn btn-primary btn-sm" data-brief-nav>Baca Case Study SPORA →</a>' +
          '<a href="#/projects/pindai" class="btn btn-secondary btn-sm" data-brief-nav>Jelajahi Pindai v1.1.1 →</a>' +
          '<button type="button" class="btn btn-secondary btn-sm" data-print-pdf>Simpan Ringkasan PDF ↓</button>' +
          '<button type="button" class="btn btn-ghost btn-sm" data-open-qr="portfolio" data-brief-nav>QR Presentasi</button>' +
          '<a href="https://github.com/RahmaOktoyadi19" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm">GitHub ↗</a>' +
        '</div>';
    }

    body.querySelectorAll('[data-brief-nav]').forEach(function (link) {
      link.addEventListener('click', function () { closeBrief(); });
    });
  }

  function openBrief() {
    var modal = document.getElementById('briefModal');
    if (!modal) return;
    closePalette();
    lastFocused = document.activeElement;
    renderBriefBody();
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (window.RO_APP.motion) window.RO_APP.motion.stopScroll();
    var closeBtn = document.getElementById('briefCloseBtn');
    if (closeBtn) closeBtn.focus();
  }

  function closeBrief() {
    var modal = document.getElementById('briefModal');
    if (!modal || !modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (window.RO_APP.motion) window.RO_APP.motion.startScroll();
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  function initPalette() {
    var cmdModal = document.getElementById('cmdModal');
    var cmdInput = document.getElementById('cmdInput');
    var briefModal = document.getElementById('briefModal');

    document.querySelectorAll('[data-open-cmd]').forEach(function (btn) {
      btn.addEventListener('click', openPalette);
    });
    document.querySelectorAll('[data-open-brief]').forEach(function (btn) {
      btn.addEventListener('click', openBrief);
    });

    var briefClose = document.getElementById('briefCloseBtn');
    if (briefClose) briefClose.addEventListener('click', closeBrief);

    if (cmdModal) {
      cmdModal.addEventListener('click', function (ev) {
        if (ev.target === cmdModal) closePalette();
      });
    }
    if (briefModal) {
      briefModal.addEventListener('click', function (ev) {
        if (ev.target === briefModal) closeBrief();
      });
    }

    if (cmdInput) {
      cmdInput.addEventListener('input', function () {
        selectedIdx = 0;
        renderPaletteList(cmdInput.value);
      });
      cmdInput.addEventListener('keydown', function (ev) {
        if (ev.key === 'ArrowDown') {
          ev.preventDefault();
          if (filteredItems.length) {
            selectedIdx = (selectedIdx + 1) % filteredItems.length;
            renderPaletteList(cmdInput.value);
          }
        } else if (ev.key === 'ArrowUp') {
          ev.preventDefault();
          if (filteredItems.length) {
            selectedIdx = (selectedIdx - 1 + filteredItems.length) % filteredItems.length;
            renderPaletteList(cmdInput.value);
          }
        } else if (ev.key === 'Enter') {
          ev.preventDefault();
          executeItem(selectedIdx);
        }
      });
    }

    document.addEventListener('keydown', function (ev) {
      if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === 'k') {
        ev.preventDefault();
        if (cmdModal && cmdModal.classList.contains('is-open')) closePalette();
        else openPalette();
        return;
      }
      if (ev.key === 'Escape') {
        if (cmdModal && cmdModal.classList.contains('is-open')) closePalette();
        if (briefModal && briefModal.classList.contains('is-open')) closeBrief();
      }
    });
  }

  window.RO_APP.palette = {
    init: initPalette,
    open: openPalette,
    close: closePalette,
    openBrief: openBrief,
    closeBrief: closeBrief,
    refreshLang: function () {
      var briefModal = document.getElementById('briefModal');
      if (briefModal && briefModal.classList.contains('is-open')) renderBriefBody();
    }
  };
})();
