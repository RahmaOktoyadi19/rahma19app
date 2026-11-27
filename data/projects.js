/* ==========================================================================
   PROJECTS, CASE STUDIES, TECH-TO-PROJECT MATRIX & EXPERIENCE DATA
   Strictly factual — zero invented metrics, URLs, or unverified features
   ========================================================================== */

window.PORTFOLIO_DATA = window.PORTFOLIO_DATA || {};

/* ================= 3 FEATURED PROJECTS SUMMARY (HOMEPAGE) ================= */
window.PORTFOLIO_DATA.featuredProjects = [
  {
    id: 'spora',
    num: '01',
    route: '#/projects/spora',
    cardClass: 'project-card-spora',
    logoClass: 'spora',
    logo: './assets/logos/spora-logo.png',
    logoAlt: { id: 'Logo resmi SPORA', en: 'Official SPORA logo' },
    name: 'SPORA',
    badge: { id: 'PROYEK MAGANG PT SEMEN PADANG', en: 'PT SEMEN PADANG INTERNSHIP' },
    badgeClass: 'chip-spora',
    subtitle: {
      id: 'Aplikasi web forum diskusi internal berbasis Laravel yang dirancang untuk menggantikan fragmentasi diskusi pabrik di WhatsApp, mempercepat penyampaian informasi, dan memusatkan penyelesaian masalah operasional.',
      en: 'Internal plant discussion forum built with Laravel to replace fragmented WhatsApp factory discussions, accelerate information sharing, and centralize operational problem solving.'
    },
    highlights: {
      id: [
        'Dibangun dari nol pada Minggu 02–03 periode magang di PT Semen Padang.',
        'Dipresentasikan perdana di hadapan mentor pada Senin Minggu 04 dengan apresiasi positif.',
        'Menjalani siklus revisi & penyempurnaan terarah berdasarkan masukan langsung mentor.'
      ],
      en: [
        'Built from scratch during Weeks 02–03 of my internship at PT Semen Padang.',
        'Presented to my mentor on Monday of Week 04, earning positive appreciation.',
        'Iteratively refined through a structured mentor feedback and revision loop.'
      ]
    },
    tags: ['Laravel', 'PHP', 'Plant Forum', 'PT Semen Padang'],
    visualType: 'spora-blueprint'
  },
  {
    id: 'pindai',
    num: '02',
    route: '#/projects/pindai',
    cardClass: 'project-card-pindai',
    logoClass: 'pindai',
    logo: './assets/logos/pindai-logo.png',
    logoAlt: { id: 'Logo resmi Pindai', en: 'Official Pindai logo' },
    name: 'Pindai v1.1.1',
    badge: { id: 'PRODUK LINTAS PLATFORM • RILIS AKTIF', en: 'CROSS-PLATFORM PRODUCT • LIVE RELEASE' },
    badgeClass: 'chip-cyan',
    subtitle: {
      id: 'Aplikasi pemindai dokumen & OCR Hybrid lintas platform (Windows, Android, iOS) berbasis Flutter yang memadukan Gemini Vision AI, OCR Offline, impor PDF multi-halaman, editor WYSIWYG, terjemahan, serta ekspor PDF/DOCX/TXT.',
      en: 'Cross-platform Flutter document scanner & Hybrid OCR app (Windows, Android, iOS) combining Gemini Vision AI, Offline OCR, multi-page PDF import, WYSIWYG editing, translation, and PDF/DOCX/TXT export.'
    },
    highlights: {
      id: [
        '29 file / 18.835 baris kode Dart terstruktur dengan 75/75 tes otomatis lulus & 0 isu flutter analyze.',
        '9 screenshot HD asli + Interactive Light/Dark Mode slider langsung di halaman Case Study.',
        'Installer rilis terverifikasi siap unduh: Windows x64 (.exe 13,93 MB) & Android (.apk 92,45 MB).'
      ],
      en: [
        '29 files / 18,835 structured Dart lines with 75/75 automated tests passing & 0 flutter analyze issues.',
        '9 authentic HD screenshots + live Interactive Light/Dark Mode slider on the Case Study page.',
        'Verified release installers ready to download: Windows x64 (.exe 13.93 MB) & Android (.apk 92.45 MB).'
      ]
    },
    tags: ['Flutter', 'Dart', 'Gemini Vision API', 'ML Kit & WinRT OCR'],
    visualType: 'pindai-preview',
    previewWebp: './assets/projects/pindai/02_beranda_gelap.webp',
    previewPng: './assets/projects/pindai/02_beranda_gelap.png',
    extraLink: {
      url: 'https://github.com/RahmaOktoyadi19/rahma19app/releases',
      labelKey: 'projects.liveRelease'
    }
  },
  {
    id: 'detector-apd',
    num: '03',
    route: '#/projects/detector-apd',
    cardClass: 'project-card-apd',
    logoClass: 'apd',
    logo: './assets/logos/detector-apd-logo.jpg',
    logoAlt: { id: 'Logo asli Detector APD', en: 'Official Detector APD logo' },
    name: 'Detector APD',
    badge: { id: 'INISIATIF KESELAMATAN INDUSTRI (K3)', en: 'INDUSTRIAL SAFETY (PPE) INITIATIVE' },
    badgeClass: 'chip-apd',
    subtitle: {
      id: 'Proyek bertema deteksi Alat Pelindung Diri (APD) yang berangkat dari kesadaran keselamatan kerja (K3) di lingkungan operasional industri. Halaman dossier teknis telah disiapkan dan akan diperbarui sesuai dokumentasi implementasi terverifikasi.',
      en: 'Personal Protective Equipment (PPE / APD) safety detection project rooted in industrial workplace safety (K3) awareness. The dedicated case study dossier is structured and ready to be populated with verified technical documentation.'
    },
    highlights: {
      id: [
        'Identitas visual resmi memadukan perisai K3, helm keselamatan industri, dan lensa optik pendeteksi.',
        'Selaras dengan konteks keselamatan kerja nyata di lingkungan pabrik PT Semen Padang.',
        'Struktur Case Study transparan — siap dilengkapi detail arsitektur, screenshot, & repositori aktual.'
      ],
      en: [
        'Official visual emblem uniting a safety shield, industrial hard hat, and optical detection lens.',
        'Aligned directly with real-world workplace safety awareness in industrial plant environments.',
        'Transparent Case Study structure — ready to be enriched with verified architecture, visuals & repo.'
      ]
    },
    tags: ['Industrial Safety (K3)', 'APD / PPE Focus', 'Documentation Slot Ready'],
    visualType: 'apd-blueprint'
  }
];

/* ================= CASE STUDY 01: SPORA (100% FACTUAL) ================= */
window.PORTFOLIO_DATA.spora = {
  overview: {
    id: 'SPORA adalah aplikasi forum diskusi internal berbasis web yang saya rancang dan bangun dari nol menggunakan Laravel selama bulan pertama magang di PT Semen Padang (Minggu 02–04).',
    en: 'SPORA is an internal web discussion forum application designed and built from scratch with Laravel during the first month of my internship at PT Semen Padang (Weeks 02–04).'
  },
  cards: [
    {
      kicker: { id: '01 / LATAR BELAKANG', en: '01 / BACKGROUND' },
      title: { id: 'Realitas Komunikasi di Lingkungan Pabrik', en: 'Communication Reality on the Plant Floor' },
      body: {
        id: 'Di lingkungan operasional pabrik, diskusi teknis dan penyampaian informasi harian sebelumnya masih banyak dilakukan melalui grup WhatsApp. Aliran pesan chat yang cepat membuat topik penting mudah tenggelam dan sulit ditelusuri kembali.',
        en: 'In day-to-day plant operations, technical discussions and operational updates were largely conducted over WhatsApp. Fast-moving chat streams easily buried important topics and made historical troubleshooting difficult to trace.'
      }
    },
    {
      kicker: { id: '02 / PERNYATAAN MASALAH', en: '02 / PROBLEM STATEMENT' },
      title: { id: 'Fragmentasi Informasi & Lambatnya Penelusuran Solusi', en: 'Fragmented Updates & Slower Problem Resolution' },
      body: {
        id: 'Ketika permasalahan di pabrik perlu dibahas lintas personel, obrolan berbasis pesan instan tidak menyediakan ruang topik yang terstruktur untuk mempercepat penyampaian informasi maupun mendokumentasikan penyelesaian masalah.',
        en: 'When factory issues required collaborative discussion, unstructured instant messaging lacked dedicated topic threads to speed up information sharing and keep problem-solving discussions organized.'
      }
    },
    {
      kicker: { id: '03 / TUJUAN & SOLUSI', en: '03 / OBJECTIVES & SOLUTION' },
      title: { id: 'Forum Diskusi Terstruktur Berbasis Laravel', en: 'Structured Laravel-Powered Discussion Forum' },
      body: {
        id: 'Membangun SPORA menggunakan framework Laravel sebagai platform khusus yang mempercepat penyampaian informasi sekaligus menyediakan ruang diskusi terarah guna membantu menyelesaikan permasalahan di lingkungan pabrik.',
        en: 'Built SPORA with Laravel as a dedicated platform designed to speed up information delivery and provide a structured discussion space for resolving issues in the factory environment.'
      }
    },
    {
      kicker: { id: '04 / PERAN & PELAJARAN', en: '04 / MY ROLE & LESSONS LEARNED' },
      title: { id: 'Full-Stack Developer Magang & Siklus Revisi Mentor', en: 'Intern Full-Stack Developer & Mentor Review Cycle' },
      body: {
        id: 'Saya menangani pembangunan aplikasi dari nol sejak Minggu 02–03, mempresentasikannya di hadapan mentor pada hari Senin Minggu 04, menerima apresiasi serta masukan konstruktif, dan mengerjakan revisi sembari menyeimbangkan tugas rekap absensi penggajian.',
        en: 'I owned the build from scratch across Weeks 02–03, delivered the first presentation to my mentor on Monday of Week 04, received both appreciation and constructive revision notes, and executed refinements alongside payroll attendance duties.'
      }
    }
  ],
  evolutionStages: [
    {
      id: 'stage-1',
      label: { id: '01. Masalah Awal', en: '01. Initial Pain Point' },
      title: { id: 'Diskusi Pabrik Tersebar di WhatsApp', en: 'Plant Discussions Fragmented on WhatsApp' },
      desc: {
        id: 'Informasi dan diskusi penyelesaian kendala pabrik masih bertumpu pada pesan instan WhatsApp sehingga topik penting bercampur dan sulit diorganisasi.',
        en: 'Factory information sharing and issue resolution relied heavily on WhatsApp chats, making critical updates hard to organize and track.'
      },
      telemetry: [
        { k: 'CONTEXT', v: 'PT Semen Padang Plant Environment' },
        { k: 'BOTTLENECK', v: 'Unstructured Chat-Based Info Flow' },
        { k: 'TIMELINE', v: 'Identified in Week 02' }
      ]
    },
    {
      id: 'stage-2',
      label: { id: '02. Pembangunan (Wk 03)', en: '02. From-Scratch Build (Wk 03)' },
      title: { id: 'Fokus Membangun SPORA dengan Laravel', en: 'Focused Laravel Build From Scratch' },
      desc: {
        id: 'Sepanjang Minggu 03, fokus penuh diarahkan untuk membangun fondasi dan fungsionalitas aplikasi forum diskusi SPORA dari awal menggunakan Laravel.',
        en: 'Throughout Week 03, dedicated engineering focus went into building the SPORA discussion forum application from scratch using Laravel.'
      },
      telemetry: [
        { k: 'FRAMEWORK', v: 'Laravel (PHP Web Application)' },
        { k: 'SCOPE', v: 'Plant Info Sharing & Issue Forum' },
        { k: 'TIMELINE', v: 'Week 02–03 Sprint' }
      ]
    },
    {
      id: 'stage-3',
      label: { id: '03. Presentasi Senin (Wk 04)', en: '03. Monday Presentation (Wk 04)' },
      title: { id: 'Presentasi Perdana di Hadapan Mentor', en: 'First Stakeholder Demo to Mentor' },
      desc: {
        id: 'Hari Senin Minggu 04 menjadi tonggak presentasi perdana SPORA kepada mentor. Aplikasi mendapat apresiasi positif disertai catatan masukan dan revisi untuk peningkatan kualitas.',
        en: 'On Monday of Week 04, SPORA was presented for the first time to my mentor — receiving positive appreciation along with constructive revision feedback.'
      },
      telemetry: [
        { k: 'MILESTONE', v: 'First Live Presentation (Monday Wk 04)' },
        { k: 'OUTCOME', v: 'Mentor Appreciation + Actionable Feedback' },
        { k: 'SKILL', v: 'Technical Communication & Demo' }
      ]
    },
    {
      id: 'stage-4',
      label: { id: '04. Revisi Paralel (Wk 04)', en: '04. Parallel Refinement (Wk 04)' },
      title: { id: 'Penyempurnaan SPORA & Tanggung Jawab Paralel', en: 'SPORA Refinement Alongside Payroll Operations' },
      desc: {
        id: 'Menindaklanjuti masukan mentor untuk menyempurnakan SPORA sembari tetap menuntaskan tugas operasional rekap data absensi penggajian pada Selasa hingga Jumat.',
        en: 'Implemented mentor-guided SPORA revisions while simultaneously delivering attendance recap verification for company payroll systems from Tuesday to Friday.'
      },
      telemetry: [
        { k: 'MODE', v: 'Iterative Revision + Operational Support' },
        { k: 'SCHEDULE', v: 'Tuesday – Friday (Week 04)' },
        { k: 'STATUS', v: 'Continuously Refined' }
      ]
    }
  ],
  pendingNotice: {
    title: {
      id: 'Slot Dokumentasi Screenshot & Daftar Fitur Terverifikasi SPORA',
      en: 'Prepared Slot for Verified SPORA Screenshots & Feature Breakdown'
    },
    desc: {
      id: 'Demi menjaga akurasi 100% tanpa mengarang detail antarmuka internal, tangkapan layar aktual aplikasi SPORA, rincian modul fitur, serta tautan demo/repositori akan ditampilkan di bagian ini segera setelah dokumentasi visual aktual ditambahkan ke proyek.',
      en: 'To maintain 100% factual accuracy without fabricating internal plant screens, authentic SPORA UI screenshots, verified module listings, and repository/demo links will appear here as soon as visual documentation is added.'
    }
  }
};

/* ================= CASE STUDY 02: PINDAI v1.1.1 (100% VERIFIED AUDIT) ================= */
window.PORTFOLIO_DATA.pindai = {
  storyCards: [
    {
      kicker: { id: '01 / PERMASALAHAN', en: '01 / PROBLEM STATEMENT' },
      title: { id: 'Ekstraksi Dokumen Lintas Perangkat Tanpa Bergantung 100% ke Cloud', en: 'Cross-Device Document Extraction Without Total Cloud Lock-In' },
      body: {
        id: 'Banyak aplikasi pemindai dokumen memaksa pengguna bergantung pada satu layanan cloud berbayar, gagal saat offline, atau menghasilkan teks mentah dengan simbol Markdown yang merepotkan saat ingin diekspor ke Microsoft Word (.docx) atau PDF rapi.',
        en: 'Many document scanners lock users into paid cloud quotas, break completely offline, or output raw Markdown-cluttered text that requires heavy cleanup before exporting to clean Microsoft Word (.docx) or PDF files.'
      }
    },
    {
      kicker: { id: '02 / KEPUTUSAN REKAYASA', en: '02 / ENGINEERING DECISIONS' },
      title: { id: 'Arsitektur OCR Hybrid + Failover 5 Model + Editor Bitmask WYSIWYG', en: 'Hybrid OCR + 5-Model Failover + Bitmask WYSIWYG Engine' },
      body: {
        id: 'Pindai memisahkan setiap lapisan sistem secara bersih: Gemini Vision API (header aman x-goog-api-key + retry 503 + pool failover 5 model) dengan fallback konfirmasi eksplisit ke OCR offline lokal (Windows.Media.Ocr / ML Kit 5 aksara), editor teks kaya tanpa Markdown, serta Google Translate terpisah agar tidak memakan kuota API Gemini.',
        en: 'Pindai enforces strict layer separation: Gemini Vision API (secure x-goog-api-key header + 503 retry + 5-model failover pool) with explicit fallback confirmation to local Offline OCR (Windows.Media.Ocr / 5-script ML Kit), a zero-Markdown rich-text editor, and decoupled Google Translate independent of Gemini quotas.'
      }
    }
  ],
  features: [
    {
      num: '01',
      title: { id: 'Beranda 2-Kolom & Mode Gelap/Terang', en: '2-Column Home & Light/Dark Theme' },
      desc: {
        id: 'Tata letak adaptif 2 kolom desktop & 1 kolom mobile dengan Pin (DISEMATKAN), pencarian real-time, sortir (Terbaru/A–Z/Terlama), hapus massal, salin cepat, dan toggle tema instan.',
        en: 'Responsive 2-column desktop & 1-column mobile workspace with Pinning, real-time search, sorting (Newest/A–Z/Oldest), bulk delete, quick copy with visual confirmation, and instant theme switching.'
      }
    },
    {
      num: '02',
      title: { id: 'Impor Foto & Dokumen PDF Lintas Platform', en: 'Cross-Platform Image & PDF Import' },
      desc: {
        id: 'Impor JPG/PNG dan PDF hingga 50 MB / 30 halaman per batch lewat pemilih rentang halaman (mis. 1-5, 8). Rasterisasi 1-halaman-per-panggilan dengan latar putih murni dan deteksi PDF terkunci.',
        en: 'Import JPG/PNG and PDFs up to 50 MB / 30 pages per batch with custom page-range selection (e.g., 1-5, 8). Page-by-page rasterization with pure-white background flattening and encrypted PDF detection.'
      }
    },
    {
      num: '03',
      title: { id: 'Kamera Windows Cerdas (v1.1.1 — Opsi A)', en: 'Smart Windows Camera (v1.1.1 — Option A)' },
      desc: {
        id: 'Prioritas otomatis kamera HP/virtual (Iriun Webcam, DroidCam, Camo, OBS) & webcam USB, ingat pilihan terakhir, dropdown nama bersih, pemantauan hot-plug 3 detik, fallback 3 resolusi, & shortcut Spasi.',
        en: 'Auto-prioritizes phone/virtual webcams (Iriun Webcam, DroidCam, Camo, OBS) & external USB webcams, remembers last choice, clean-name dropdown, 3s hot-plug watcher, 3-tier resolution fallback & Spacebar capture.'
      }
    },
    {
      num: '04',
      title: { id: 'Pratinjau Multi-Halaman & Crop 8-Handle', en: 'Multi-Page Preview & 8-Handle Crop' },
      desc: {
        id: '4 handle sudut (koreksi perspektif homografi) + 4 handle tengah sisi bebas hambatan, urutkan halaman ←/→, rotasi 90°, filter kontras Asli/Jelas, dan Zoom Lightbox layar penuh.',
        en: '4 corner handles (homography perspective rectification) + 4 unobstructed edge midpoints, page reorder ←/→, 90° rotation, Original/High-Contrast filter, and full-screen Zoom Lightbox.'
      }
    },
    {
      num: '05',
      title: { id: 'OCR Hybrid & Ketangguhan Failover Gemini', en: 'Hybrid OCR & Gemini Failover Resilience' },
      desc: {
        id: 'Gemini Vision API dengan retry otomatis HTTP 503 (1,2 dtk) & pool failover 5 model cadangan, dialog konfirmasi Batal/Lanjut ke OCR Offline (Windows.Media.Ocr / ML Kit 5 aksara), serta Pindai Ulang AI 1-klik.',
        en: 'Gemini Vision API with automatic HTTP 503 retry (1.2s) & 5-model backup failover pool, explicit Cancel/Continue confirmation before Offline OCR (Windows.Media.Ocr / 5-script ML Kit), and 1-click AI Rescan.'
      }
    },
    {
      num: '06',
      title: { id: 'Editor WYSIWYG, Side-by-Side & Cari/Ganti', en: 'WYSIWYG Editor, Side-by-Side & Find/Replace' },
      desc: {
        id: 'Mesin RichTextDocument tanpa simbol Markdown (B/I/U/S/H, daftar butir/nomor auto-lanjut, Undo/Redo), panel Side-by-Side gambar asli di desktop, Cari & Ganti (Ctrl+F/H), Rapikan Teks 1-klik, dan font A-/A+.',
        en: 'Markdown-free RichTextDocument engine (B/I/U/S/H, auto-continuing lists, Undo/Redo), desktop Side-by-Side original image viewer, Find & Replace (Ctrl+F/H), 1-click Text Cleanup, and persistent A-/A+ font sizing.'
      }
    },
    {
      num: '07',
      title: { id: 'Terjemahan Google Translate Independen', en: 'Independent Google Translate' },
      desc: {
        id: 'Selalu memakai Google Translate daring yang sepenuhnya terpisah dari kuota Gemini API Key. Hasil terjemahan disimpan di tab terpisah tanpa menimpa teks OCR asli.',
        en: 'Always powered by online Google Translate, fully decoupled from Gemini API Key quotas. Translations are stored in a dedicated tab without overwriting original OCR text.'
      }
    },
    {
      num: '08',
      title: { id: 'Ekspor PDF, DOCX OOXML Valid & TXT', en: 'PDF, Genuine OOXML DOCX & TXT Export' },
      desc: {
        id: 'Menghasilkan PDF multi-halaman berfont Roboto, berkas Microsoft Word (.docx) OOXML asli yang mempertahankan gaya Bold/Italic/Underline/Heading/List, serta TXT UTF-8 murni.',
        en: 'Generates paginated multi-page PDFs with embedded Roboto fonts, genuine OOXML Microsoft Word (.docx) preserving Bold/Italic/Underline/Heading/List formatting, and clean UTF-8 TXT.'
      }
    },
    {
      num: '09',
      title: { id: 'Pengaturan Privasi & Validasi API Key', en: 'Privacy Controls & Live API Key Validation' },
      desc: {
        id: 'Validasi koneksi Gemini API Key sebelum disimpan, input masked, sakelar persetujuan eksplisit cloud OCR & terjemahan, pemilih 5 aksara ML Kit, dan pemilih tema 3 arah.',
        en: 'Live Gemini API Key validation before saving, masked input, separate explicit consent toggles for cloud OCR and translation, 5-script ML Kit selector, and 3-way theme mode selector.'
      }
    }
  ],
  galleryCategories: [
    { id: 'all', label: { id: 'Semua (9)', en: 'All (9)' } },
    { id: 'home', label: { id: 'Beranda & Tema (2)', en: 'Home & Theme (2)' } },
    { id: 'capture', label: { id: 'Kamera & Impor (3)', en: 'Camera & Import (3)' } },
    { id: 'editor', label: { id: 'Editor & Ekspor (3)', en: 'Editor & Export (3)' } },
    { id: 'settings', label: { id: 'Pengaturan (1)', en: 'Settings (1)' } }
  ],
  screenshots: [
    {
      idx: '01',
      cat: 'home',
      webp: './assets/projects/pindai/01_beranda_terang.webp',
      src: './assets/projects/pindai/01_beranda_terang.png',
      catLabel: { id: 'Beranda & Tema', en: 'Home & Theme' },
      title: { id: 'Beranda Desktop — Mode Terang', en: 'Desktop Home — Light Mode' },
      desc: {
        id: 'Tata letak 2 kolom desktop menampilkan sidebar riwayat (dokumen disematkan, thumbnail multi-halaman, salin cepat, pencarian) berdampingan langsung dengan editor dokumen aktif.',
        en: '2-column desktop workspace displaying the scan history sidebar (pinned docs, multi-page thumbnails, quick copy, search) alongside the live document editor.'
      }
    },
    {
      idx: '02',
      cat: 'home',
      webp: './assets/projects/pindai/02_beranda_gelap.webp',
      src: './assets/projects/pindai/02_beranda_gelap.png',
      catLabel: { id: 'Beranda & Tema', en: 'Home & Theme' },
      title: { id: 'Beranda Desktop — Mode Gelap', en: 'Desktop Home — Dark Mode' },
      desc: {
        id: 'Tampilan Mode Gelap (Dark Mode) dengan palet kontras tinggi yang seragam pada kartu riwayat, tab Teks Asli/Terjemahan, toolbar WYSIWYG, dan bilah aksi bawah.',
        en: 'High-contrast Dark Mode palette applied consistently across history cards, Original/Translation tabs, WYSIWYG toolbar, and bottom action bar.'
      }
    },
    {
      idx: '03',
      cat: 'capture',
      webp: './assets/projects/pindai/03_pilihan_impor_pdf.webp',
      src: './assets/projects/pindai/03_pilihan_impor_pdf.png',
      catLabel: { id: 'Kamera & Impor', en: 'Camera & Import' },
      title: { id: 'Pilihan Impor: Foto / Galeri & Dokumen PDF', en: 'Import Picker: Photo / Gallery & PDF Document' },
      desc: {
        id: 'Sheet sumber impor terpadu yang memisahkan impor gambar (JPG/PNG multi-file) dan impor Dokumen PDF scan atau tulisan tangan lintas platform.',
        en: 'Unified import choice sheet separating multi-image (JPG/PNG) selection and cross-platform scanned or handwritten PDF document import.'
      }
    },
    {
      idx: '04',
      cat: 'capture',
      webp: './assets/projects/pindai/04_kamera_windows_iriun.webp',
      src: './assets/projects/pindai/04_kamera_windows_iriun.png',
      catLabel: { id: 'Kamera & Impor', en: 'Camera & Import' },
      title: { id: 'Kamera Windows Cerdas (Opsi A — Iriun Webcam)', en: 'Smart Windows Camera (Option A — Iriun Webcam)' },
      desc: {
        id: 'Otomatis memprioritaskan Iriun Webcam dan menampilkan dropdown daftar kamera tersedia dengan nama bersih serta kategori perangkat (Kamera HP / Virtual vs Kamera Laptop).',
        en: 'Automatically prioritizes Iriun Webcam and presents a clean-name camera dropdown with device categories (Phone / Virtual Camera vs Laptop Camera).'
      }
    },
    {
      idx: '05',
      cat: 'capture',
      webp: './assets/projects/pindai/05_pratinjau_crop_manual.webp',
      src: './assets/projects/pindai/05_pratinjau_crop_manual.png',
      catLabel: { id: 'Kamera & Impor', en: 'Camera & Import' },
      title: { id: 'Pratinjau Multi-Halaman & Crop Manual 8-Handle', en: 'Multi-Page Preview & 8-Handle Manual Crop' },
      desc: {
        id: 'Area crop dengan 4 handle sudut perspektif dan 4 handle sisi tengah yang sepenuhnya bebas hambatan, strip urutan halaman ←/→, tombol Putar 90°, Filter Kontras, dan Ekstrak Teks.',
        en: 'Unobstructed crop canvas with 4 perspective corner handles and 4 edge midpoints, multi-page reorder strip ←/→, 90° Rotate, Contrast Filter, and Extract Text CTA.'
      }
    },
    {
      idx: '06',
      cat: 'editor',
      webp: './assets/projects/pindai/06_editor_side_by_side_cari.webp',
      src: './assets/projects/pindai/06_editor_side_by_side_cari.png',
      catLabel: { id: 'Editor & Ekspor', en: 'Editor & Export' },
      title: { id: 'Editor WYSIWYG + Side-by-Side & Cari/Ganti', en: 'WYSIWYG Editor + Side-by-Side & Find/Replace' },
      desc: {
        id: 'Mode Side-by-Side desktop membandingkan gambar dokumen asli (Halaman 1/2) di kiri dengan panel Cari & Ganti (Ctrl+F/H) serta teks kaya terformat di kanan.',
        en: 'Desktop Side-by-Side view comparing the original document page (Page 1/2) on the left with live Find & Replace and formatted WYSIWYG text on the right.'
      }
    },
    {
      idx: '07',
      cat: 'editor',
      webp: './assets/projects/pindai/07_terjemahan_google.webp',
      src: './assets/projects/pindai/07_terjemahan_google.png',
      catLabel: { id: 'Editor & Ekspor', en: 'Editor & Export' },
      title: { id: 'Terjemahan Instan Google Translate', en: 'Instant Google Translate Dialog' },
      desc: {
        id: 'Layanan Google Translate daring tanpa menggunakan kuota API Key Gemini, menampilkan pratinjau langsung dan menyimpan hasil ke tab Terjemahan terpisah.',
        en: 'Online Google Translate service independent of Gemini API Key quotas, featuring instant preview and saving results to a separate Translation tab.'
      }
    },
    {
      idx: '08',
      cat: 'editor',
      webp: './assets/projects/pindai/08_ekspor_dokumen.webp',
      src: './assets/projects/pindai/08_ekspor_dokumen.png',
      catLabel: { id: 'Editor & Ekspor', en: 'Editor & Export' },
      title: { id: 'Ekspor Multi-Format (PDF, DOCX, TXT)', en: 'Multi-Format Export (PDF, DOCX, TXT)' },
      desc: {
        id: 'Pilihan ekspor ke PDF multi-halaman berfont Roboto, Microsoft Word (.docx) format OOXML valid, dan Teks Biasa (.txt) UTF-8.',
        en: 'Export options for multi-page Roboto PDF, genuine OOXML Microsoft Word (.docx), and lightweight UTF-8 Plain Text (.txt).'
      }
    },
    {
      idx: '09',
      cat: 'settings',
      webp: './assets/projects/pindai/09_pengaturan_ocr_tema.webp',
      src: './assets/projects/pindai/09_pengaturan_ocr_tema.png',
      catLabel: { id: 'Pengaturan', en: 'Settings' },
      title: { id: 'Pengaturan Tema, Aksara ML Kit & Privasi', en: 'Theme, ML Kit Script & Privacy Settings' },
      desc: {
        id: 'Pemilih tema 3 arah (Terang/Gelap/Sistem), pilihan 5 aksara offline ML Kit, kolom Gemini API Key tersembunyi (masked), serta pemilihan model Gemini.',
        en: '3-way Theme selector (Light/Dark/System), 5 offline ML Kit script options, masked Gemini API Key field, and quick Gemini model chips.'
      }
    }
  ],
  archSteps: [
    {
      step: 'STEP 01',
      title: { id: 'Input Multi-Sumber', en: 'Multi-Source Input' },
      desc: {
        id: 'Kamera Windows Opsi A (Iriun/USB/Laptop), Kamera Mobile, Galeri JPG/PNG, atau Dokumen PDF via printing.',
        en: 'Windows Camera Option A (Iriun/USB/Laptop), Mobile Camera, JPG/PNG Gallery, or PDF via printing.'
      }
    },
    {
      step: 'STEP 02',
      title: { id: 'Pra-Pemrosesan Citra', en: 'Image Preprocessing' },
      desc: {
        id: 'ImageProcessingService: validasi, baking EXIF, flattening latar putih PDF, crop perspektif 4-sudut, rotasi & kontras.',
        en: 'ImageProcessingService: validation, EXIF baking, white PDF flattening, 4-corner perspective crop, rotation & contrast.'
      }
    },
    {
      step: 'STEP 03',
      title: { id: 'Mesin OCR Hybrid', en: 'Hybrid OCR Engine' },
      desc: {
        id: 'OcrService: Gemini Vision (header x-goog-api-key + retry 503 + 5 model failover) dengan konfirmasi Batal/Lanjut ke Windows OCR / ML Kit.',
        en: 'OcrService: Gemini Vision (x-goog-api-key header + 503 retry + 5-model failover) with explicit fallback to Windows OCR / ML Kit.'
      }
    },
    {
      step: 'STEP 04',
      title: { id: 'Editor WYSIWYG', en: 'WYSIWYG Editor' },
      desc: {
        id: 'RichTextDocument bitmask tanpa Markdown, Side-by-Side gambar asli, Cari & Ganti, Rapikan Teks, dan deteksi telepon/URL.',
        en: 'Bitmask RichTextDocument (zero Markdown), Side-by-Side original viewer, Find & Replace, Text Cleanup, and contact/URL detection.'
      }
    },
    {
      step: 'STEP 05',
      title: { id: 'Simpan, Terjemah & Ekspor', en: 'Store, Translate & Export' },
      desc: {
        id: 'StorageService lokal v2, Google Translate tab terpisah, serta ExportService (PDF Roboto, DOCX OOXML, TXT UTF-8).',
        en: 'Local v2 StorageService, separate-tab Google Translate, and ExportService (Roboto PDF, OOXML DOCX, UTF-8 TXT).'
      }
    }
  ],
  techStack: [
    { pkg: 'Flutter & Dart SDK', ver: '^3.14.0', role: { id: 'Framework UI lintas platform untuk Windows Desktop, Android, dan iOS.', en: 'Cross-platform UI framework targeting Windows Desktop, Android, and iOS.' } },
    { pkg: 'google_mlkit_text_recognition', ver: '^1.0.3', role: { id: 'OCR offline on-device Android & iOS (5 aksara: Latin, Tionghoa, Jepang, Korea, Devanagari).', en: 'On-device offline OCR for Android & iOS (5 scripts: Latin, Chinese, Japanese, Korean, Devanagari).' } },
    { pkg: 'Windows.Media.Ocr (WinRT Bridge)', ver: 'Native', role: { id: 'OCR offline bawaan Windows tanpa API key melalui bridge lokal.', en: 'Built-in Windows offline OCR with zero API key requirement via local bridge.' } },
    { pkg: 'http (Gemini Vision & Google Translate)', ver: '^1.6.0', role: { id: 'Klien REST untuk Gemini Vision API (Cloud OCR) dan Google Translate daring.', en: 'REST client powering Gemini Vision API (Cloud OCR) and online Google Translate.' } },
    { pkg: 'printing', ver: '^5.15.1', role: { id: 'Rasterisasi PDF lintas platform (PDFium Windows, PdfRenderer Android, CoreGraphics iOS).', en: 'Cross-platform PDF rasterization (PDFium Windows, PdfRenderer Android, CoreGraphics iOS).' } },
    { pkg: 'camera & camera_windows', ver: '^0.12.2 / ^0.3.1', role: { id: 'Pratinjau & pengambilan gambar webcam Windows (Iriun, DroidCam, USB, Laptop) + hot-plug.', en: 'Live Windows webcam preview & capture (Iriun, DroidCam, USB, Laptop) with hot-plug support.' } },
    { pkg: 'image', ver: '^4.13.1', role: { id: 'Manipulasi piksel Dart murni: EXIF, rotasi, homografi crop 4-sudut, kontras, flattening PDF.', en: 'Pure-Dart pixel pipeline: EXIF baking, rotation, 4-corner homography crop, contrast & PDF flattening.' } },
    { pkg: 'pdf & archive', ver: '^3.13.1 / ^4.7.1', role: { id: 'Generator PDF multi-halaman (Roboto) dan perakitan arsip ZIP OOXML untuk file .docx valid.', en: 'Multi-page Roboto PDF generator and OOXML ZIP packaging for genuine .docx files.' } },
    { pkg: 'shared_preferences & path_provider', ver: '^2.5.6 / ^2.1.6', role: { id: 'Penyimpanan lokal riwayat v2, cache gambar (maks. 30 entri), tema, font, & kamera terakhir.', en: 'Local v2 document persistence, bounded image cache (30 entries), theme, font & camera preference.' } }
  ],
  securityItems: [
    { id: '0 kebocoran API key di query URL — kunci hanya dikirim lewat HTTP header x-goog-api-key.', en: '0 API key leaks in URL queries — key is strictly sent via HTTP header x-goog-api-key.' },
    { id: 'Pesan galat HTTP (401, 404, 429, 503, timeout) disanitasi agar tidak pernah menampilkan kunci API.', en: 'HTTP error messages (401, 404, 429, 503, timeout) are sanitized to never expose API keys.' },
    { id: 'Persetujuan privasi eksplisit wajib diberikan sebelum aplikasi mengirim data ke Cloud OCR atau Terjemahan.', en: 'Explicit privacy consent is required before sending data to Cloud OCR or Translation.' },
    { id: '0 berkas rahasia (key.properties, keystore, *.jks, /dist/) terlacak di Git; build rilis Android menolak debug key.', en: '0 secret files (key.properties, keystore, *.jks, /dist/) tracked in Git; Android release blocks debug keys.' },
    { id: 'Aturan ProGuard/R8 (AGP 9+) terverifikasi melindungi ML Kit ComponentRegistrar dan PrintingPlugin.', en: 'ProGuard/R8 rules (AGP 9+) verified to preserve ML Kit ComponentRegistrar and PrintingPlugin.' }
  ],
  limitsItems: [
    { id: 'Ukuran maksimal file PDF: 50 MB per dokumen.', en: 'Maximum PDF file size: 50 MB per document.' },
    { id: 'Maksimal halaman PDF per batch: 30 halaman sekali proses (file lebih panjang dapat diimpor bertahap per rentang).', en: 'Maximum PDF pages per batch: 30 pages per run (longer PDFs can be imported sequentially by page range).' },
    { id: 'OCR Offline tidak memiliki batas kuota (100% gratis & berjalan lokal di perangkat).', en: 'Offline OCR has no usage quota limit (100% free and runs locally on-device).' },
    { id: 'OCR Gemini AI mengikuti kuota akun Google AI Studio dengan retry & failover otomatis 5 model cadangan.', en: 'Gemini AI OCR follows Google AI Studio account quotas with automatic retry & 5-model failover.' },
    { id: 'Cache gambar di memori dibatasi maksimal 30 entri agar konsumsi RAM tetap efisien.', en: 'In-memory image cache is bounded to 30 entries to keep RAM consumption predictable.' }
  ],
  releaseRows: [
    {
      platform: 'Windows x64',
      artifact: 'Pindai_Setup_1.1.1_x64.exe',
      size: '13,93 MB',
      url: 'https://github.com/RahmaOktoyadi19/rahma19app/releases/download/v1.0.0/Pindai_Setup_1.1.1_x64.exe',
      directDownload: true,
      verif: {
        id: 'Inno Setup 7.1.1; menyertakan camera_windows_plugin.dll, pdfium.dll, printing_plugin.dll, dan 10 DLL Microsoft.VC145.CRT.',
        en: 'Inno Setup 7.1.1; bundles camera_windows_plugin.dll, pdfium.dll, printing_plugin.dll, and 10 Microsoft.VC145.CRT DLLs.'
      }
    },
    {
      platform: 'Android',
      artifact: 'Pindai_1.1.1_android.apk',
      size: '92,45 MB',
      url: 'https://github.com/RahmaOktoyadi19/rahma19app/releases/download/v1.0.0/Pindai_1.1.1_android.apk',
      directDownload: true,
      verif: {
        id: 'Lolos apksigner (v2, 1 signer), zipalign 16 KB, serta verifikasi dexdump untuk ML Kit & PrintingPlugin.',
        en: 'Verified apksigner (v2, 1 signer), 16 KB zipalign, and dexdump verification for ML Kit & PrintingPlugin.'
      }
    },
    {
      platform: 'iOS (iPhone)',
      artifact: 'Pindai_1.1.1_ios_unsigned.ipa',
      size: '~32 MB (CI)',
      /* Mengarah ke halaman Releases aktif (200 OK) — memperbaiki link 404 pindai_ocr/actions */
      url: 'https://github.com/RahmaOktoyadi19/rahma19app/releases',
      directDownload: false,
      verif: {
        id: 'Dibangun via workflow CI macOS-15 (tag v1.1.1), SwiftPM iOS 15.0+, membundel LatinOCRResources.bundle untuk OCR offline.',
        en: 'Built via macOS-15 CI workflow (tag v1.1.1), SwiftPM iOS 15.0+, bundling LatinOCRResources.bundle for offline OCR.'
      }
    }
  ]
};

/* ================= CASE STUDY 03: DETECTOR APD (TRANSPARENT & HONEST) ================= */
window.PORTFOLIO_DATA.apd = {
  overview: {
    id: 'Detector APD merupakan inisiatif proyek yang berfokus pada keselamatan kerja (K3) dan kepatuhan Alat Pelindung Diri (APD) di lingkungan industri. Halaman ini disiapkan dengan struktur Case Study penuh dan hanya menampilkan informasi yang telah terverifikasi.',
    en: 'Detector APD is a project initiative focused on workplace safety (K3) and Personal Protective Equipment (PPE / APD) awareness in industrial environments. This page provides a complete Case Study structure grounded strictly in verified facts.'
  },
  cards: [
    {
      kicker: { id: '01 / KONTEKS INDUSTRI', en: '01 / INDUSTRIAL CONTEXT' },
      title: { id: 'Keselamatan Kerja (K3) di Area Manufaktur', en: 'Workplace Safety (K3) in Manufacturing Zones' },
      body: {
        id: 'Kepatuhan penggunaan Alat Pelindung Diri (APD) seperti helm keselamatan merupakan prioritas fundamental di lingkungan operasional pabrik. Identitas visual resmi Detector APD menggabungkan elemen perisai K3, helm keselamatan, dan lensa optik pendeteksi.',
        en: 'Personal Protective Equipment (PPE) compliance such as hard hats is a foundational safety priority in industrial plant areas. Detector APD\'s official emblem brings together a protective shield, safety helmet, and optical lens viewfinder.'
      }
    },
    {
      kicker: { id: '02 / IDENTITAS VISUAL TERSEDIA', en: '02 / VERIFIED VISUAL ASSET' },
      title: { id: 'Emblem Resmi Detector APD (512×512)', en: 'Official Detector APD Emblem (512×512)' },
      body: {
        id: 'Aset identitas proyek telah terintegrasi penuh dalam sistem desain Obsidian Forge dengan aksen Safety Emerald & Industrial Amber — menggantikan tampilan kartu pasif sebelumnya menjadi halaman studi kasus mandiri.',
        en: 'The project visual emblem is integrated into the Obsidian Forge design system with Safety Emerald and Industrial Amber accents — replacing the previous dead-end card with a dedicated case study route.'
      }
    }
  ],
  preparedSections: {
    id: [
      'Arsitektur Teknis & Stack Deteksi — menunggu spesifikasi teknis terverifikasi dari pemilik proyek.',
      'Daftar Kelas APD & Skenario Pengujian — akan diisi berdasarkan implementasi aktual tanpa angka fiktif.',
      'Galeri Screenshot / Demo Antarmuka — siap menampilkan hasil tangkapan layar aktual & tautan repositori GitHub.'
    ],
    en: [
      'Technical Architecture & Detection Stack — awaiting verified technical specifications from the project owner.',
      'Detected PPE Classes & Test Scenarios — to be populated from actual implementation without fabricated metrics.',
      'Interface Screenshot Gallery / Demo — ready to host authentic screenshots and repository links.'
    ]
  },
  pendingNotice: {
    title: {
      id: 'Dokumentasi Teknis Detector APD Siap Dilengkapi',
      en: 'Detector APD Technical Documentation Ready to Be Populated'
    },
    desc: {
      id: 'Sesuai prinsip kejujuran portfolio (nol fabrikasi), detail algoritma, dataset, metrik akurasi, dan tangkapan layar tidak dikarang dan akan langsung diperbarui melalui data/projects.js segera setelah dokumentasi aktual proyek tersedia.',
      en: 'Following strict zero-fabrication portfolio standards, algorithm details, datasets, accuracy metrics, and screenshots are intentionally left unfabricated and can be populated directly via data/projects.js once verified documentation is ready.'
    }
  }
};

/* ================= VERIFIED TECH STACK (LIVE TRACE MATRIX) ================= */
window.PORTFOLIO_DATA.techCategories = [
  {
    id: 'languages',
    label: { id: 'Bahasa Pemrograman', en: 'Programming Languages' },
    items: [
      { name: 'Dart', trace: { id: 'Pindai v1.1.1 (18.835 baris kode sumber + 3.080 baris tes)', en: 'Pindai v1.1.1 (18,835 Dart source lines + 3,080 test lines)' }, route: '#/projects/pindai' },
      { name: 'PHP', trace: { id: 'SPORA — Aplikasi forum diskusi pabrik berbasis Laravel', en: 'SPORA — Laravel plant discussion forum web app' }, route: '#/projects/spora' },
      { name: 'JavaScript', trace: { id: 'Arsitektur interaktif, router, i18n & Lightbox portfolio ini', en: 'Interactive architecture, router, i18n & Lightbox of this portfolio' }, route: '#/' },
      { name: 'HTML5 & CSS3', trace: { id: 'Semantic HTML, Design System Obsidian Forge & responsif 320–1920px', en: 'Semantic HTML, Obsidian Forge Design System & 320–1920px responsiveness' }, route: '#/' }
    ]
  },
  {
    id: 'backend',
    label: { id: 'Backend & Web', en: 'Backend & Web' },
    items: [
      { name: 'Laravel', trace: { id: 'SPORA — Dibangun dari nol pada Week 02–03 Magang PT Semen Padang', en: 'SPORA — Built from scratch during Weeks 02–03 at PT Semen Padang' }, route: '#/projects/spora' },
      { name: 'REST API Integration', trace: { id: 'Pindai — Klien HTTP untuk Gemini Vision API & Google Translate', en: 'Pindai — HTTP REST client for Gemini Vision API & Google Translate' }, route: '#/projects/pindai' }
    ]
  },
  {
    id: 'mobile',
    label: { id: 'Mobile & Cross-Platform', en: 'Mobile & Cross-Platform' },
    items: [
      { name: 'Flutter', trace: { id: 'Pindai v1.1.1 — Satu codebase untuk Windows x64, Android & iOS', en: 'Pindai v1.1.1 — Single codebase targeting Windows x64, Android & iOS' }, route: '#/projects/pindai' },
      { name: 'WinRT Native Bridge', trace: { id: 'Pindai — Integrasi Windows.Media.Ocr & deteksi kamera Windows', en: 'Pindai — Windows.Media.Ocr & smart Windows webcam integration' }, route: '#/projects/pindai' }
    ]
  },
  {
    id: 'ai',
    label: { id: 'Integrasi AI & OCR', en: 'AI & Vision Integration' },
    items: [
      { name: 'Gemini Vision API', trace: { id: 'Pindai — Cloud OCR dengan retry 503 & failover 5 model cadangan', en: 'Pindai — Cloud OCR with HTTP 503 retry & 5-model backup failover' }, route: '#/projects/pindai' },
      { name: 'Google ML Kit', trace: { id: 'Pindai — OCR offline on-device 5 aksara di Android & iOS', en: 'Pindai — 5-script on-device offline OCR on Android & iOS' }, route: '#/projects/pindai' },
      { name: 'Windows.Media.Ocr', trace: { id: 'Pindai — OCR lokal bawaan Windows tanpa kuota API', en: 'Pindai — Built-in local Windows OCR with zero API quota' }, route: '#/projects/pindai' }
    ]
  },
  {
    id: 'data',
    label: { id: 'Data & Penyimpanan', en: 'Data & Persistence' },
    items: [
      { name: 'Attendance Database Sync', trace: { id: 'Week 02 & Week 04 Magang PT Semen Padang — Sinkronisasi absensi & penggajian', en: 'Weeks 02 & 04 PT Semen Padang Internship — Attendance & payroll sync' }, route: '#internship' },
      { name: 'Microsoft Excel', trace: { id: 'Week 02 & Week 04 — Rekonsiliasi absensi man power & verifikasi payroll', en: 'Weeks 02 & 04 — Manpower attendance reconciliation & payroll verification' }, route: '#internship' },
      { name: 'Local Storage v2', trace: { id: 'Pindai — Penyimpanan riwayat terstruktur & cache gambar terbatas 30 entri', en: 'Pindai — Structured document history & 30-entry bounded image cache' }, route: '#/projects/pindai' }
    ]
  },
  {
    id: 'tools',
    label: { id: 'Tools & Rilis', en: 'Tools & Release Engineering' },
    items: [
      { name: 'Git & GitHub', trace: { id: 'Kontrol versi, distribusi rilis .exe/.apk & manajemen proyek', en: 'Version control, .exe/.apk release distribution & repository workflow' }, route: '#/projects/pindai' },
      { name: 'GitHub Actions CI', trace: { id: 'Pindai — Workflow macOS-15 otomatis membangun artefak iOS (.ipa)', en: 'Pindai — Automated macOS-15 workflow building iOS (.ipa) artifact' }, route: '#/projects/pindai' },
      { name: 'Inno Setup & ProGuard/R8', trace: { id: 'Pindai — Packaging installer Windows x64 & hardening release Android', en: 'Pindai — Windows x64 installer packaging & Android release hardening' }, route: '#/projects/pindai' }
    ]
  }
];

/* ================= VERIFIABLE EXPERIENCE & HIGHLIGHTS ================= */
window.PORTFOLIO_DATA.experience = [
  {
    period: { id: 'BULAN 01 / 04 • SEDANG BERJALAN', en: 'MONTH 01 / 04 • ONGOING' },
    role: { id: 'Mahasiswa Magang (Internship)', en: 'Software & Field Operations Intern' },
    org: 'PT Semen Padang — Indarung, Padang',
    desc: {
      id: 'Menjalani pengalaman nyata lintas lapangan dan rekayasa: pendaftaran biometrik pekerja saat maintenance kiln Indarung 6, rekonsiliasi database absensi-Excel untuk penggajian, serta merancang, membangun, dan mempresentasikan forum diskusi pabrik SPORA berbasis Laravel.',
      en: 'Hands-on industrial and engineering internship: manpower biometric enrollment during Indarung 6 kiln maintenance, database-to-Excel attendance & payroll reconciliation, and building & presenting the Laravel-based SPORA plant discussion forum.'
    }
  },
  {
    period: { id: 'PENDIDIKAN TINGGI', en: 'HIGHER EDUCATION' },
    role: { id: 'Mahasiswa Teknik Informatika', en: 'Informatics Engineering Student' },
    org: 'Fakultas Teknik — Universitas Riau (UNRI)',
    desc: {
      id: 'Menekuni rekayasa perangkat lunak, pengembangan web, aplikasi lintas platform, pengolahan data operasional, dan integrasi AI terapan melalui proyek nyata.',
      en: 'Focused on software engineering, web development, cross-platform applications, operational data workflows, and applied AI integration through real software projects.'
    }
  },
  {
    period: { id: 'RILIS PRODUK v1.1.1', en: 'PRODUCT RELEASE v1.1.1' },
    role: { id: 'Creator & Lead Developer — Pindai', en: 'Creator & Lead Developer — Pindai' },
    org: 'Cross-Platform OCR Suite (Windows • Android • iOS)',
    desc: {
      id: 'Merilis aplikasi Flutter 18.835 baris Dart dengan 75/75 tes lulus, 0 isu analisis statis, audit keamanan API key, serta distribusi installer resmi Windows (.exe) dan Android (.apk) di GitHub Releases.',
      en: 'Shipped an 18,835-line Flutter application with 75/75 automated tests passing, 0 static analysis issues, verified API key privacy hardening, and official Windows (.exe) & Android (.apk) installers on GitHub Releases.'
    }
  }
];
