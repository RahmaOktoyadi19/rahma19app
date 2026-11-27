/* ==========================================================================
   SPORA v1.9 (SporaApp19) — COMPLETE VERIFIED CASE STUDY & 24 SCREENSHOTS
   100% Factual from Audit Teknis & Panduan Tutorial Lengkap SPORA v1.9
   ========================================================================== */

window.PORTFOLIO_DATA = window.PORTFOLIO_DATA || {};

window.PORTFOLIO_DATA.spora = {
  liveUrl: 'https://forum.sp-link.id/',
  overview: {
    id: 'SPORA (Sistem Pelaporan, Operasional, & Forum Diskusi Industri) adalah Progressive Web App (PWA) berbasis Laravel 13 yang dibangun untuk PT Semen Padang — menggabungkan forum kendala operasional, ruang chat real-time + lampiran SOP, peringatan darurat, arsip solusi Sebelum & Sesudah, serta Master Data 5.406 Nomenklatur Peralatan dengan Peta Satelit GIS & Statistik 12 Bulan.',
    en: 'SPORA (Industrial Reporting, Operations & Discussion Forum) is a Laravel 13 Progressive Web App (PWA) built for PT Semen Padang — uniting operational issue forums, real-time chat with SOP attachments, emergency alerts, Before & After resolution archives, and 5,406 Plant Equipment Nomenclatures with an interactive GIS Satellite Map & 12-Month Analytics.'
  },
  cards: [
    {
      kicker: { id: '01 / LATAR BELAKANG', en: '01 / BACKGROUND' },
      title: { id: 'Dari Diskusi Pabrik di WhatsApp ke Platform Industri Terpadu', en: 'From Plant WhatsApp Chats to a Unified Industrial Platform' },
      body: {
        id: 'Diskusi teknis, pelaporan anomali mesin, dan koordinasi pemeliharaan di kompleks pabrik Indarung II–VI & area tambang sebelumnya banyak berlangsung lewat grup WhatsApp sehingga informasi cepat tenggelam dan riwayat perbaikan tiap mesin sulit ditelusuri.',
        en: 'Technical discussions, machine anomaly reporting, and maintenance coordination across the Indarung II–VI plants and mining zones previously relied heavily on WhatsApp groups — causing critical updates to get buried and equipment repair histories to be lost.'
      }
    },
    {
      kicker: { id: '02 / SOLUSI ARSITEKTUR', en: '02 / ARCHITECTURAL SOLUTION' },
      title: { id: 'PWA Real-Time + Master Data 5.406 Alat + Peta Satelit GIS', en: 'Real-Time PWA + 5,406 Equipment Master Data + Satellite GIS' },
      body: {
        id: 'Dibangun menggunakan Laravel 13, Alpine.js, Tailwind CSS v4, Laravel Echo/Pusher, dan Leaflet GIS — mengintegrasikan laporan kendala darurat, ruang chat interaktif + lampiran PDF/Office, bukti perbaikan Sebelum–Sesudah, serta pemetaan area Indarung dalam satu PWA mobile-first.',
        en: 'Engineered with Laravel 13, Alpine.js, Tailwind CSS v4, Laravel Echo/Pusher, and Leaflet GIS — integrating emergency incident alerts, real-time chat with PDF/Office SOP attachments, Before–After repair evidence, and Indarung plant mapping inside one mobile-first PWA.'
      }
    },
    {
      kicker: { id: '03 / ADAPTASI PENGGUNA BARU', en: '03 / SAFE ONBOARDING' },
      title: { id: 'Mode Tutorial & Simulasi Interaktif 5 Langkah Tanpa Akun', en: '5-Step Interactive Tutorial & Simulation Mode (No Account Needed)' },
      body: {
        id: 'Pengunjung atau teknisi baru dapat langsung mencoba seluruh alur SPORA dari halaman Landing melalui Mode Tutorial & Simulasi lokal — seluruh klik (Suka, Komentar, Jelajah Alat) berjalan aman tanpa mengubah data server produksi pabrik.',
        en: 'Visitors and new technicians can immediately try SPORA right from the Landing page via local Tutorial & Simulation Mode — every interaction (Like, Comment, Equipment Explorer) runs safely without touching live plant production data.'
      }
    },
    {
      kicker: { id: '04 / PERAN & KUALITAS RILIS', en: '04 / ROLE & RELEASE QUALITY' },
      title: { id: 'Pengembangan Magang hingga Audit Rilis v1.9 (99/99 Tes Lulus)', en: 'From Internship Build to Audited v1.9 Release (99/99 Tests Passed)' },
      body: {
        id: 'Berawal dari pengembangan dari nol pada Minggu 02–03 magang PT Semen Padang dan presentasi Senin Minggu 04 kepada mentor, SPORA berkembang terukur hingga versi v1.9 dengan 99/99 tes PHPUnit lulus (592 assertions), 7/7 tes JS lulus, dan audit Playwright E2E 24/24 layar bersih.',
        en: 'Starting from a scratch build in Weeks 02–03 of my PT Semen Padang internship and Monday Week 04 mentor review, SPORA matured into v1.9 with 99/99 PHPUnit feature tests passing (592 assertions), 7/7 JS unit tests passing, and a clean 24/24-screen Playwright E2E audit.'
      }
    }
  ],
  evolutionStages: [
    {
      id: 'stage-1',
      label: { id: '01. Masalah Awal (Wk 02)', en: '01. Initial Pain Point (Wk 02)' },
      title: { id: 'Diskusi Pabrik Tersebar di WhatsApp', en: 'Plant Discussions Fragmented on WhatsApp' },
      desc: {
        id: 'Informasi operasional dan diskusi penyelesaian kendala mesin masih tersebar di chat instan WhatsApp sehingga topik penting sulit ditelusuri per kode alat.',
        en: 'Operational updates and machine troubleshooting discussions were scattered across WhatsApp chats, making historical tracking per equipment code difficult.'
      },
      telemetry: [
        { k: 'CONTEXT', v: 'PT Semen Padang (Indarung II–VI)' },
        { k: 'BOTTLENECK', v: 'Unstructured Chat-Based Info Flow' },
        { k: 'TIMELINE', v: 'Identified in Week 02' }
      ]
    },
    {
      id: 'stage-2',
      label: { id: '02. Bangun dari Nol (Wk 03)', en: '02. Scratch Build (Wk 03)' },
      title: { id: 'Fokus Membangun Fondasi SPORA dengan Laravel', en: 'Focused Laravel Foundation Build From Scratch' },
      desc: {
        id: 'Sepanjang Minggu 03, fokus penuh diarahkan untuk membangun arsitektur backend Laravel dan antarmuka forum diskusi SPORA dari awal.',
        en: 'Throughout Week 03, dedicated engineering effort went into building SPORA\'s Laravel backend and collaborative discussion forum from the ground up.'
      },
      telemetry: [
        { k: 'STACK', v: 'Laravel 13 + Alpine.js + Tailwind v4' },
        { k: 'SCOPE', v: 'Plant Info Sharing & Issue Forum' },
        { k: 'TIMELINE', v: 'Week 02–03 Intensive Sprint' }
      ]
    },
    {
      id: 'stage-3',
      label: { id: '03. Presentasi Mentor (Wk 04)', en: '03. Mentor Demo (Wk 04)' },
      title: { id: 'Presentasi Perdana Senin & Revisi Terarah', en: 'Monday First Presentation & Actionable Revisions' },
      desc: {
        id: 'Hari Senin Minggu 04 mempresentasikan SPORA pertama kali di hadapan mentor — memperoleh apresiasi serta masukan revisi konstruktif yang dieksekusi paralel pada Selasa–Jumat.',
        en: 'Delivered the first presentation to the mentor on Monday of Week 04 — earning positive appreciation and constructive feedback refined across Tuesday–Friday.'
      },
      telemetry: [
        { k: 'MILESTONE', v: 'First Live Presentation (Monday Wk 04)' },
        { k: 'OUTCOME', v: 'Appreciation + Structured Revisions' },
        { k: 'EXECUTION', v: 'Parallel Refinement & Payroll Ops' }
      ]
    },
    {
      id: 'stage-4',
      label: { id: '04. Rilis Audit v1.9', en: '04. Audited v1.9 Release' },
      title: { id: 'PWA Industri Lengkap dengan 5.406 Alat, GIS & 99/99 Tes Lulus', en: 'Full Industrial PWA: 5,406 Assets, GIS & 99/99 Passing Tests' },
      desc: {
        id: 'Berevolusi menjadi SPORA v1.9 (SporaApp19) lengkap dengan Mode Tutorial 5 Langkah, Chat Real-Time Echo/Pusher, Peta Satelit GIS, Rekam Jejak Sebelum/Sesudah, Statistik 12 Bulan, & PWA spora-pwa-v7.',
        en: 'Evolved into SPORA v1.9 (SporaApp19) featuring 5-Step Tutorial Mode, Echo/Pusher Real-Time Chat, Satellite GIS Map, Before/After Resolution Archives, 12-Month Analytics & spora-pwa-v7 PWA.'
      },
      telemetry: [
        { k: 'VERIFICATION', v: '99/99 PHPUnit (592 assertions) + 24 E2E' },
        { k: 'MASTER DATA', v: '5,406 Plant Equipment Nomenclatures' },
        { k: 'DEPLOYMENT', v: 'Live Web / PWA at forum.sp-link.id' }
      ]
    }
  ],
  features: [
    {
      num: '01',
      title: { id: 'Mode Tutorial & Simulasi Interaktif 5 Langkah', en: '5-Step Interactive Tutorial & Simulation Mode' },
      desc: {
        id: 'Latihan langsung dari halaman Landing tanpa perlu akun. Semua klik (Suka, Komentar, Simpan, Jelajah Alat) berjalan lokal aman tanpa menyentuh database server.',
        en: 'Practice directly from the Landing page with zero account required. Every action (Like, Comment, Bookmark, Asset Explorer) runs locally without modifying server data.'
      }
    },
    {
      num: '02',
      title: { id: 'Beranda 3-Kolom Adaptif (Gelap & Terang) + Filter', en: '3-Column Responsive Workspace (Dark/Light) & Filters' },
      desc: {
        id: 'Navigasi ciut/lebar, kode warna status kendala (Merah Darurat, Kuning Peringatan, Hijau Selesai), pencarian shortcut "/", tab urutan feed, filter kategori alat, & Panel Monitoring Pabrik.',
        en: 'Collapsible navigation, color-coded incident cards (Red Emergency, Amber Warning, Green Resolved), "/" quick search, feed sorting, equipment category filter, & Plant Monitoring panel.'
      }
    },
    {
      num: '03',
      title: { id: 'Laporan Masalah Normal vs Siaran Peringatan Darurat', en: 'Normal Anomaly Reports vs Emergency Alert Broadcasts' },
      desc: {
        id: 'Membedakan Diskusi Biasa dan Laporan Masalah Alat yang otomatis menautkan status Kendala Aktif ke Master Data, lengkap dengan urgensi Kritis untuk siaran darurat ke teknisi aktif.',
        en: 'Separates general discussions from Equipment Issue Reports that automatically flag Active Issues in Master Data, including Critical urgency triggering real-time emergency fanout alerts.'
      }
    },
    {
      num: '04',
      title: { id: 'Ruang Diskusi Real-Time + Lampiran Foto & Dokumen SOP', en: 'Real-Time Chat Room + Photo & SOP Document Attachments' },
      desc: {
        id: 'Didukung Laravel Echo + Pusher dengan bubble chat, balas kutipan (jump-to-message), reaksi emoji, @mention & #KodeAlat interaktif, kompresi foto <=300 KB, & lampiran PDF/Word/Excel/PPT hingga 10 MB.',
        en: 'Powered by Laravel Echo + Pusher with chat bubbles, quoted replies (jump-to-message), emoji reactions, interactive @mention & #AssetCode links, <=300 KB image compression, & PDF/Office attachments up to 10 MB.'
      }
    },
    {
      num: '05',
      title: { id: 'Alur Tandai Terselesaikan + Arsip Bukti Sebelum & Sesudah', en: 'Resolution Workflow + Before & After Physical Evidence' },
      desc: {
        id: 'Pembuat laporan menutup kendala dengan catatan akar masalah, daftar part diganti, dan foto bukti fisik sesudah perbaikan — otomatis mengembalikan status mesin ke Normal dan tersimpan sebagai knowledge base.',
        en: 'Reporters close issues with root-cause solution notes, replaced parts log, and post-repair evidence photos — automatically restoring equipment status to Normal and archiving permanent knowledge.'
      }
    },
    {
      num: '06',
      title: { id: 'Master Data 5.406 Nomenklatur Peralatan Pabrik', en: 'Master Data of 5,406 Plant Equipment Nomenclatures' },
      desc: {
        id: 'Katalog terindeks lintas Indarung II–VI & Area Tambang dengan pencarian instan (kode, deskripsi, kategori, plant, area), filter Kendala Aktif, metrik Kesiapan (%), & ekspor metadata alat (.TXT).',
        en: 'Indexed catalog across Indarung II–VI & Mining areas with instant search (code, description, category, plant, area), Active Issue filtering, real-time Readiness (%), & equipment identity export (.TXT).'
      }
    },
    {
      num: '07',
      title: { id: 'Peta Satelit GIS Interaktif & Mode Layar Penuh', en: 'Interactive Satellite GIS Map & Fullscreen Mode' },
      desc: {
        id: 'Dibangun dengan Leaflet (Esri World Imagery + OpenStreetMap) menampilkan pin radar status Normal/Kendala di kompleks PT Semen Padang, kontrol lapisan/zoom, dan tautan navigasi langsung Google Maps.',
        en: 'Built with Leaflet (Esri World Imagery + OpenStreetMap) showing Normal/Issue radar pins across the PT Semen Padang complex, layer/zoom controls, and direct Google Maps handoff.'
      }
    },
    {
      num: '08',
      title: { id: 'Grafik Statistik Aktivitas Alat 12 Bulan', en: '12-Month Equipment Activity Analytics Chart' },
      desc: {
        id: 'Agregasi lintas SQLite/MySQL menampilkan 4 metrik ringkas (Total, Bulan Ini, Puncak, Rata-Rata) dan grafik batang interaktif per tahun — klik batang bulan untuk membuka rincian topik & komentar.',
        en: 'Cross-engine SQLite/MySQL aggregation displaying 4 KPI cards (Total, Current Month, Peak, Average) and interactive annual bar charts — click any month bar to inspect threads & comments.'
      }
    },
    {
      num: '09',
      title: { id: 'Notifikasi Lonceng, Riwayat, Profil & Pantau Laporan Bug', en: 'Real-Time Notifications, Activity Log & Bug Tracker' },
      desc: {
        id: 'Panel notifikasi real-time (@mention, balasan, darurat), riwayat aktivitas pribadi, profil teknisi, serta form Kirim Masukan / Laporkan Bug (+ screenshot 5 MB) dengan tracker 3 tahap progres.',
        en: 'Real-time bell notifications (@mentions, replies, emergencies), personal activity timeline, technician profiles, plus Feedback / Bug Reporting (+ 5 MB screenshot) with a 3-stage status tracker.'
      }
    },
    {
      num: '10',
      title: { id: 'Mobile-First PWA (spora-pwa-v7) & Dwibahasa ID/EN', en: 'Mobile-First PWA (spora-pwa-v7) & Full ID/EN Bilingual' },
      desc: {
        id: 'Dapat diinstal ke layar utama Android, iPhone, maupun Desktop dengan kapsul navigasi bawah (*bottom dock*), pull-to-refresh, notifikasi perangkat, fallback offline aman, dan 515 baris kamus ID/EN.',
        en: 'Installable on Android, iPhone, and Desktop home screens featuring a floating bottom dock, pull-to-refresh, device notifications, safe offline fallback, and full ID/EN bilingual support.'
      }
    }
  ],
  galleryCategories: [
    { id: 'all', label: { id: 'Semua (24)', en: 'All (24)' } },
    { id: 'onboarding', label: { id: 'Onboarding & Tutorial (4)', en: 'Onboarding & Tutorial (4)' } },
    { id: 'feed', label: { id: 'Beranda & Feed (5)', en: 'Home & Feed (5)' } },
    { id: 'collab', label: { id: 'Laporan & Chat Real-Time (4)', en: 'Reports & Live Chat (4)' } },
    { id: 'assets', label: { id: '5.406 Alat, GIS & Statistik (5)', en: '5,406 Assets, GIS & Stats (5)' } },
    { id: 'account', label: { id: 'Notifikasi, Profil & Pengaturan (4)', en: 'Notifications, Profile & Settings (4)' } },
    { id: 'mobile', label: { id: 'Mobile PWA (2)', en: 'Mobile PWA (2)' } }
  ],
  screenshots: [
    {
      idx: '01', cat: 'onboarding', isMobile: false,
      src: './assets/projects/spora/01_halaman_landing.webp',
      catLabel: { id: 'Onboarding & Tutorial', en: 'Onboarding & Tutorial' },
      title: { id: 'Halaman Landing SPORA v1.9 (ID / EN)', en: 'SPORA v1.9 Landing Page (ID / EN)' },
      desc: { id: 'Halaman pembuka menampilkan ringkasan kapabilitas sistem (Peta Satelit, 5.400+ Master Nomenklatur, Forum Kolaborasi), pemilih bahasa ID/EN, dan akses langsung Mode Tutorial.', en: 'Welcome screen highlighting Satellite GIS, 5,400+ Nomenclatures, Collaborative Forum, ID/EN switcher, and direct entry to Tutorial Mode.' }
    },
    {
      idx: '02', cat: 'onboarding', isMobile: false,
      src: './assets/projects/spora/02_halaman_login.webp',
      catLabel: { id: 'Onboarding & Tutorial', en: 'Onboarding & Tutorial' },
      title: { id: 'Halaman Login & Notifikasi Lupa Sandi', en: 'Login Screen & Password Reset Guidance' },
      desc: { id: 'Form masuk dengan opsi "Ingat sesi login saya", pengintip sandi, dan notifikasi toast resmi saat tautan "Lupa Sandi?" diklik.', en: 'Authentication screen featuring "Remember my session", password visibility toggle, and official toast guidance when clicking "Forgot Password?".' }
    },
    {
      idx: '03', cat: 'onboarding', isMobile: false,
      src: './assets/projects/spora/03_halaman_daftar.webp',
      catLabel: { id: 'Onboarding & Tutorial', en: 'Onboarding & Tutorial' },
      title: { id: 'Registrasi Akun Baru + Indikator Kekuatan Sandi', en: 'Account Registration + Live Password Strength' },
      desc: { id: 'Validasi langsung kekuatan kata sandi (3 bilah hijau "Kuat & Aman") serta indikator kecocokan konfirmasi sandi real-time.', en: 'Live password strength meter (3 green bars "Strong & Secure") paired with instant confirmation matching feedback.' }
    },
    {
      idx: '04', cat: 'onboarding', isMobile: false,
      src: './assets/projects/spora/04_mode_tutorial.webp',
      catLabel: { id: 'Onboarding & Tutorial', en: 'Onboarding & Tutorial' },
      title: { id: 'Mode Tutorial & Simulasi Interaktif (5 Langkah)', en: 'Interactive Tutorial & Simulation Mode (5 Steps)' },
      desc: { id: 'Latihan aman bagi pengguna baru langsung dari Landing dengan pita oranye penanda simulasi lokal yang tidak mengubah data server produksi.', en: 'Safe sandbox from Landing featuring an amber simulation ribbon and 5 guided steps that never alter live server data.' }
    },
    {
      idx: '05', cat: 'feed', isMobile: false,
      src: './assets/projects/spora/05_beranda_jelajah_gelap.webp',
      catLabel: { id: 'Beranda & Feed', en: 'Home & Feed' },
      title: { id: 'Beranda Jelajah Desktop — Mode Gelap', en: 'Desktop Explore Feed — Dark Mode' },
      desc: { id: 'Tata letak 3 kolom untuk ruang kontrol/shift malam: menu kiri, kartu Kendala Darurat dengan grafik termal + #KodeAlat/@mention, & Panel Monitoring Pabrik di kanan.', en: '3-column control-room Dark Mode: left navigation, Emergency Issue cards with thermal graphs + #AssetCode/@mentions, & right Plant Monitoring panel.' }
    },
    {
      idx: '06', cat: 'feed', isMobile: false,
      src: './assets/projects/spora/06_beranda_jelajah_terang.webp',
      catLabel: { id: 'Beranda & Feed', en: 'Home & Feed' },
      title: { id: 'Beranda Jelajah Desktop — Mode Terang', en: 'Desktop Explore Feed — Light Mode' },
      desc: { id: 'Tampilan Mode Terang berkontras tinggi yang optimal untuk penggunaan lapangan siang hari maupun presentasi proyektor.', en: 'High-contrast Light Mode optimized for bright daylight field use and meeting room presentations.' }
    },
    {
      idx: '07', cat: 'feed', isMobile: false,
      src: './assets/projects/spora/07_filter_pencarian_kategori.webp',
      catLabel: { id: 'Beranda & Feed', en: 'Home & Feed' },
      title: { id: 'Pencarian Global, Tab Urutan & Filter Kategori Alat', en: 'Global Search, Sort Tabs & Equipment Category Filter' },
      desc: { id: 'Dropdown filter kategori peralatan (Bearing, Belt Weigher, Gearbox, Motor HT) dilengkapi kotak pencarian kategori di dalamnya.', en: 'Searchable equipment category dropdown (Bearing, Belt Weigher, Gearbox, HT Motor) paired with feed sort tabs.' }
    },
    {
      idx: '08', cat: 'feed', isMobile: false,
      src: './assets/projects/spora/08_feed_diikuti.webp',
      catLabel: { id: 'Beranda & Feed', en: 'Home & Feed' },
      title: { id: 'Tab Feed Diikuti (Kolaborasi Tim Unit)', en: 'Following Feed (Team & Plant Unit Focus)' },
      desc: { id: 'Menyajikan aliran diskusi khusus dari rekan teknisi, operator, atau supervisor yang diikuti agar kabar unit kerja tidak tenggelam.', en: 'Curated feed of discussions from followed technicians, operators, and supervisors to keep unit updates focused.' }
    },
    {
      idx: '09', cat: 'feed', isMobile: false,
      src: './assets/projects/spora/09_riwayat_aktivitas.webp',
      catLabel: { id: 'Beranda & Feed', en: 'Home & Feed' },
      title: { id: 'Tab Riwayat Aktivitas Kronologis', en: 'Chronological Activity History Log' },
      desc: { id: 'Log pribadi seluruh interaksi (membuat laporan, berkomentar, menyukai, mengikuti rekan) yang dapat diklik langsung menuju diskusi terkait.', en: 'Personal timeline of interactions (reports, comments, likes, follows) with one-click jump back to referenced threads.' }
    },
    {
      idx: '10', cat: 'collab', isMobile: false,
      src: './assets/projects/spora/10_buat_diskusi_dan_urgensi.webp',
      catLabel: { id: 'Laporan & Chat Real-Time', en: 'Reports & Live Chat' },
      title: { id: 'Form Buat Diskusi & Laporan Masalah Darurat', en: 'Create Discussion & Emergency Incident Report Form' },
      desc: { id: 'Mode Laporan Masalah Alat dengan pilihan urgensi Normal vs Kritis (Siaran Darurat), editor teks kaya, dan penandaan #KodeAlat.', en: 'Equipment Issue Report composer with Normal vs Critical Emergency Broadcast selector, rich-text editor, and #AssetCode tagging.' }
    },
    {
      idx: '11', cat: 'collab', isMobile: false,
      src: './assets/projects/spora/11_detail_diskusi_postingan.webp',
      catLabel: { id: 'Laporan & Chat Real-Time', en: 'Reports & Live Chat' },
      title: { id: 'Halaman Detail Diskusi & Status Kendala Aktif', en: 'Thread Detail & Active Equipment Issue Banner' },
      desc: { id: 'Banner status Kendala Alat Aktif, tag #4W1W03M1 & @mention yang bisa diklik langsung, chip kategori/alat, serta foto inspeksi termal.', en: 'Active Equipment Issue banner, clickable #4W1W03M1 & @mention links, category/asset chips, and full-width thermal inspection imagery.' }
    },
    {
      idx: '12', cat: 'collab', isMobile: false,
      src: './assets/projects/spora/12_ruang_diskusi_chat_lampiran.webp',
      catLabel: { id: 'Laporan & Chat Real-Time', en: 'Reports & Live Chat' },
      title: { id: 'Ruang Diskusi Real-Time + Lampiran SOP PDF & Reaksi', en: 'Real-Time Chat Room + SOP PDF Attachments & Reactions' },
      desc: { id: 'Chat bubble kolaborasi lintas bidang lengkap dengan kartu dokumen SOP PDF (buka & unduh), balasan kutipan, dan reaksi emoji cepat.', en: 'Cross-functional collaboration chat with SOP PDF document cards (preview & download), quoted replies, and quick emoji reactions.' }
    },
    {
      idx: '13', cat: 'collab', isMobile: false,
      src: './assets/projects/spora/13_modal_tandai_selesai.webp',
      catLabel: { id: 'Laporan & Chat Real-Time', en: 'Reports & Live Chat' },
      title: { id: 'Modal Tandai Kendala Terselesaikan + Bukti Fisik', en: 'Mark Issue Resolved Modal + Physical Evidence' },
      desc: { id: 'Form penutupan laporan mencatat tindakan perbaikan, komponen yang diganti, dan foto bukti fisik sesudah perbaikan.', en: 'Structured closure modal recording repair actions, replaced spare parts, and post-maintenance physical photo proof.' }
    },
    {
      idx: '14', cat: 'assets', isMobile: false,
      src: './assets/projects/spora/14_master_data_alat.webp',
      catLabel: { id: '5.406 Alat, GIS & Statistik', en: '5,406 Assets, GIS & Stats' },
      title: { id: 'Master Data 5.406 Nomenklatur Peralatan Pabrik', en: 'Master Data of 5,406 Plant Nomenclatures' },
      desc: { id: 'Katalog 5.406 alat lintas plant PT Semen Padang dengan status real-time (Normal / Kendala), tombol Peta & Detail, serta metrik Kesiapan (%).', en: 'Searchable catalog of 5,406 equipment units across plants with live Normal/Issue badges, Map & Detail actions, and Readiness (%).' }
    },
    {
      idx: '15', cat: 'assets', isMobile: false,
      src: './assets/projects/spora/15_detail_alat_ringkasan_peta.webp',
      catLabel: { id: '5.406 Alat, GIS & Statistik', en: '5,406 Assets, GIS & Stats' },
      title: { id: 'Detail Alat (#4A1J04G1) & Peta Satelit GIS', en: 'Equipment Detail (#4A1J04G1) & Satellite GIS' },
      desc: { id: 'Menyatukan peta satelit di atas dan 4 tab informasi (Ringkasan, Riwayat Selesai, Diskusi, Statistik) + ekspor metadata .TXT di bawah.', en: 'Combines the top satellite map with 4 structured tabs (Overview, Resolved History, Discussions, Analytics) plus .TXT metadata export.' }
    },
    {
      idx: '16', cat: 'assets', isMobile: false,
      src: './assets/projects/spora/16_peta_satelit_layar_penuh.webp',
      catLabel: { id: '5.406 Alat, GIS & Statistik', en: '5,406 Assets, GIS & Stats' },
      title: { id: 'Peta Satelit Kompleks Pabrik Mode Layar Penuh', en: 'Fullscreen Plant Complex Satellite GIS Map' },
      desc: { id: 'Citra satelit Esri World Imagery kompleks PT Semen Padang dengan pin radar #4A1J04G1, switch lapisan peta, zoom, & tautan Google Maps.', en: 'Esri World Imagery satellite view of the PT Semen Padang complex with #4A1J04G1 radar marker, layer switcher, zoom, & Google Maps link.' }
    },
    {
      idx: '17', cat: 'assets', isMobile: false,
      src: './assets/projects/spora/17_alat_riwayat_selesai.webp',
      catLabel: { id: '5.406 Alat, GIS & Statistik', en: '5,406 Assets, GIS & Stats' },
      title: { id: 'Rekam Jejak Terselesaikan (Foto Sebelum & Sesudah)', en: 'Resolved Maintenance Archive (Before & After Photos)' },
      desc: { id: 'Arsip permanen permasalahan, solusi + daftar komponen diganti (Bearing UCF208, Seal SKF, Grease EP2), dan perbandingan foto Sebelum & Sesudah.', en: 'Permanent maintenance knowledge base showing problem, solution + replaced parts list, and side-by-side Before & After photo evidence.' }
    },
    {
      idx: '18', cat: 'assets', isMobile: false,
      src: './assets/projects/spora/18_alat_statistik_12_bulan.webp',
      catLabel: { id: '5.406 Alat, GIS & Statistik', en: '5,406 Assets, GIS & Stats' },
      title: { id: 'Statistik Pembahasan & Kendala Alat 12 Bulan', en: '12-Month Equipment Issue & Discussion Analytics' },
      desc: { id: '4 kartu metrik tahunan dan grafik batang interaktif — klik batang bulan untuk menampilkan rincian topik & tautan postingan bulan tersebut.', en: '4 annual KPI cards paired with an interactive bar chart — clicking any month opens detailed thread & comment breakdowns.' }
    },
    {
      idx: '19', cat: 'account', isMobile: false,
      src: './assets/projects/spora/19_panel_notifikasi_dan_detail.webp',
      catLabel: { id: 'Notifikasi, Profil & Pengaturan', en: 'Notifications, Profile & Settings' },
      title: { id: 'Panel Notifikasi Lonceng & Detail Terpusat', en: 'Bell Notification Center & System Alerts' },
      desc: { id: 'Notifikasi real-time untuk @mention darurat, lampiran SOP di ruang chat, serta tanggapan laporan bug dengan status baca instan.', en: 'Real-time notifications for emergency @mentions, SOP uploads, and bug report updates with one-click Mark All Read.' }
    },
    {
      idx: '20', cat: 'account', isMobile: false,
      src: './assets/projects/spora/20_profil_pengguna.webp',
      catLabel: { id: 'Notifikasi, Profil & Pengaturan', en: 'Notifications, Profile & Settings' },
      title: { id: 'Halaman Profil Teknisi & Statistik Sosial', en: 'Technician Profile & Activity Overview' },
      desc: { id: 'Menampilkan bio unit kerja, jumlah Postingan/Mengikuti/Pengikut, daftar rekan diikuti, serta tab Diskusi Saya dan Tersimpan.', en: 'Displays unit bio, Post/Following/Follower counts, connected colleagues, and My Discussions & Saved Bookmarks tabs.' }
    },
    {
      idx: '21', cat: 'account', isMobile: false,
      src: './assets/projects/spora/21_pengaturan_utama.webp',
      catLabel: { id: 'Notifikasi, Profil & Pengaturan', en: 'Notifications, Profile & Settings' },
      title: { id: 'Pengaturan Akun, Tema, Bahasa & Pantau Laporan', en: 'Account Settings, Theme, Language & Bug Tracker' },
      desc: { id: 'Pusat kontrol avatar, bahasa ID/EN, keamanan sandi, sakelar Mode Gelap, notifikasi PWA, dan kartu 3-tahap Pantauan Laporan Bug & Masukan.', en: 'Unified control panel for avatar, ID/EN language, password security, Dark Mode, PWA alerts, and 3-stage Feedback/Bug Tracker.' }
    },
    {
      idx: '22', cat: 'account', isMobile: false,
      src: './assets/projects/spora/22_form_laporkan_bug_masukan.webp',
      catLabel: { id: 'Notifikasi, Profil & Pengaturan', en: 'Notifications, Profile & Settings' },
      title: { id: 'Form Laporkan Bug / Masukan (+ Screenshot 5 MB)', en: 'Bug Report & Feedback Composer (+ 5 MB Screenshot)' },
      desc: { id: 'Memungkinkan teknisi melaporkan kendala aplikasi atau usulan fitur disertai lampiran tangkapan layar hingga 5 MB.', en: 'Enables field users to submit bug reports or feature suggestions with optional screenshot attachments up to 5 MB.' }
    },
    {
      idx: '23', cat: 'mobile', isMobile: true,
      src: './assets/projects/spora/23_mobile_beranda_pwa.webp',
      catLabel: { id: 'Mobile PWA', en: 'Mobile PWA' },
      title: { id: 'Mobile PWA — Beranda & Navigasi Kapsul Bawah', en: 'Mobile PWA — Explore Feed & Floating Bottom Dock' },
      desc: { id: 'Tampilan ponsel lapangan (390×844) dengan pencarian ringkas, filter kategori, kartu status kendala, pull-to-refresh, & kapsul navigasi satu jempol.', en: 'Field mobile layout (390×844) with compact search, category filter, incident badges, pull-to-refresh, & thumb-friendly floating dock.' }
    },
    {
      idx: '24', cat: 'mobile', isMobile: true,
      src: './assets/projects/spora/24_mobile_detail_alat_dan_chat.webp',
      catLabel: { id: 'Mobile PWA', en: 'Mobile PWA' },
      title: { id: 'Mobile PWA — Detail Alat & Peta Satelit Interaktif', en: 'Mobile PWA — Equipment Detail & Interactive Satellite Map' },
      desc: { id: 'Peta satelit GIS responsif sentuh di atas dan drawer detail #4A1J04G1 yang dapat diusap untuk diperluas di ponsel lapangan.', en: 'Touch-responsive satellite GIS map paired with a swipe-expandable equipment detail drawer for technicians on the plant floor.' }
    }
  ],
  pwaInstallTabs: [
    {
      id: 'android',
      label: { id: 'Android (Chrome / Edge)', en: 'Android (Chrome / Edge)' },
      steps: {
        id: [
          'Buka https://forum.sp-link.id/ melalui Google Chrome atau Microsoft Edge di ponsel Android.',
          'Jika hanya ingin mencoba tampilan & fitur tanpa akun, klik "Masuk ke Mode Tutorial & Simulasi" di halaman Landing.',
          'Untuk menginstal sebagai aplikasi, ketuk menu titik tiga (⋮) di pojok kanan atas → pilih "Tambahkan ke Layar Utama" atau "Instal aplikasi".',
          'Konfirmasi Instal — ikon SPORA langsung tampil di layar utama ponsel layar penuh tanpa bilah alamat browser.'
        ],
        en: [
          'Open https://forum.sp-link.id/ in Google Chrome or Microsoft Edge on Android.',
          'To explore safely without an account, click "Enter Tutorial & Simulation Mode" on the Landing page.',
          'To install as an app, tap the three-dot menu (⋮) in the top right → select "Add to Home screen" or "Install app".',
          'Confirm Install — the SPORA icon appears on your home screen launching fullscreen like a native app.'
        ]
      }
    },
    {
      id: 'ios',
      label: { id: 'iPhone / iPad (Safari)', en: 'iPhone / iPad (Safari)' },
      steps: {
        id: [
          'Buka https://forum.sp-link.id/ menggunakan browser Safari di iPhone atau iPad.',
          'Untuk sekadar mencoba fitur dengan aman, klik menu "Mode Tutorial & Simulasi" pada halaman pembuka.',
          'Ketuk tombol Bagikan (Share — ikon kotak dengan panah ke atas) di bagian bawah layar.',
          'Gulir ke bawah → pilih "Tambahkan ke Layar Utama (Add to Home Screen)" → ketuk "Tambah (Add)".'
        ],
        en: [
          'Open https://forum.sp-link.id/ using Safari on iPhone or iPad.',
          'To safely test the app without logging in, select "Tutorial & Simulation Mode" on the Landing screen.',
          'Tap the Share button (square icon with upward arrow) at the bottom toolbar.',
          'Scroll down → choose "Add to Home Screen" → tap "Add".'
        ]
      }
    },
    {
      id: 'desktop',
      label: { id: 'Desktop (Chrome / Edge)', en: 'Desktop (Chrome / Edge)' },
      steps: {
        id: [
          'Buka https://forum.sp-link.id/ di Google Chrome atau Microsoft Edge pada laptop/PC.',
          'Untuk mencoba tanpa login akun pabrik, langsung klik "Masuk ke Mode Tutorial & Simulasi".',
          'Klik ikon "Instal Aplikasi" (layar komputer dengan panah ke bawah) di ujung kanan bilah alamat URL.',
          'Klik "Instal" — SPORA dapat dibuka dari Start Menu / Desktop sebagai jendela aplikasi mandiri.'
        ],
        en: [
          'Open https://forum.sp-link.id/ in Google Chrome or Microsoft Edge on desktop/laptop.',
          'To explore without a plant account, simply click "Enter Tutorial & Simulation Mode".',
          'Click the "Install App" icon (monitor with down arrow) on the right edge of the address bar.',
          'Click "Install" — SPORA launches from Start Menu / Desktop in its own standalone window.'
        ]
      }
    }
  ],
  archSteps: [
    {
      step: 'STEP 01',
      title: { id: 'Autentikasi & Mode Tutorial', en: 'Auth & Tutorial Sandbox' },
      desc: { id: 'Landing ID/EN, Mode Tutorial 5 Langkah lokal tanpa mengubah data server, serta Login/Daftar dengan sesi & CSRF aman.', en: 'ID/EN Landing, local 5-Step Tutorial Sandbox without touching server data, and CSRF/session-hardened Auth.' }
    },
    {
      step: 'STEP 02',
      title: { id: 'Alpine.js SPA + FeedService', en: 'Alpine.js SPA + FeedService' },
      desc: { id: '19 Blade views (8.173 baris) & 7 modul JS (10.174 baris) dengan FeedService teroptimasi untuk Jelajah, Diikuti, & Riwayat.', en: '19 Blade views (8,173 lines) & 7 JS modules (10,174 lines) backed by cached FeedService for Explore, Following & History.' }
    },
    {
      step: 'STEP 03',
      title: { id: 'Real-Time Echo & Media Engine', en: 'Real-Time Echo & Media Engine' },
      desc: { id: 'Laravel Echo + Pusher untuk chat langsung, EmergencyAlertService, kompresi foto <=300 KB, & validasi MIME dokumen 10 MB.', en: 'Laravel Echo + Pusher live chat, EmergencyAlertService, <=300 KB image compression, & strict 10 MB MIME document validation.' }
    },
    {
      step: 'STEP 04',
      title: { id: '5.406 Alat, GIS & Statistik', en: '5,406 Assets, GIS & Stats' },
      desc: { id: 'NomenclatureController + Leaflet GIS (Esri Imagery/OSM) + NomenclatureStatisticsController lintas SQLite/MySQL.', en: 'NomenclatureController + Leaflet GIS (Esri Imagery/OSM) + cross-engine SQLite/MySQL 12-month analytics.' }
    },
    {
      step: 'STEP 05',
      title: { id: 'Keamanan & PWA spora-pwa-v7', en: 'Security & spora-pwa-v7 PWA' },
      desc: { id: 'CSP Nonce per request, isolasi rate limiter, sanitasi XSS, serta Service Worker PWA dengan offline fallback aman.', en: 'Per-request CSP Nonce, isolated rate limiters, XSS sanitization, and Service Worker PWA with safe offline fallback.' }
    }
  ],
  techStack: [
    { pkg: 'PHP & Laravel Framework', ver: '^8.3 / ^13.17', role: { id: 'Backend utama (41 modul inti, 27 migrasi): Eloquent ORM, routing, autentikasi sesi, policy, jobs, & rate limiting.', en: 'Core backend (41 modules, 27 migrations): Eloquent ORM, routing, session auth, policies, queued jobs, & rate limiting.' } },
    { pkg: 'Alpine.js & Blade Templates', ver: '^3.16.3 / 19 views', role: { id: 'Reaktivitas SPA ringan (8.173 baris Blade + 8.775 baris app.js) tanpa reload halaman penuh.', en: 'Lightweight SPA reactivity (8,173 Blade lines + 8,775 app.js lines) with zero full-page reloads.' } },
    { pkg: 'Tailwind CSS & Vite', ver: '^4.0.0 / ^8.0.0', role: { id: 'Sistem desain responsif Mode Gelap & Terang serta bundling produksi cepat dengan asset hashing.', en: 'Responsive Dark/Light design system and rapid Vite production bundling with hashed manifests.' } },
    { pkg: 'Laravel Echo & Pusher', ver: '^2.5.0 / ^8.6.0', role: { id: 'Event real-time ruang diskusi (pesan masuk, indikator mengetik) serta siaran peringatan darurat.', en: 'Real-time chat broadcasting (incoming messages, typing indicators) and emergency incident broadcasts.' } },
    { pkg: 'Leaflet GIS (Esri Imagery + OSM)', ver: '^1.9.4', role: { id: 'Peta satelit interaktif kompleks Indarung II–VI & Tambang dengan marker radar status alat & tautan Google Maps.', en: 'Interactive satellite map of Indarung II–VI & Mining zones with equipment radar pins & Google Maps handoff.' } },
    { pkg: 'MySQL / SQLite', ver: '27 Migrasi', role: { id: 'Penyimpanan terindeks 5.406 nomenklatur alat, diskusi, arsip solusi Sebelum/Sesudah, & agregasi statistik 12 bulan.', en: 'Indexed persistence for 5,406 nomenclatures, discussions, Before/After archives, & 12-month analytics.' } },
    { pkg: 'ImageCompressionService & Client Compressor', ver: 'Custom Dual-Layer', role: { id: 'Kompresi foto otomatis sisi browser & server (postingan/chat <=300 KB, avatar <=150 KB) hemat kuota lapangan.', en: 'Dual client & server image compression (posts/chat <=300 KB, avatar <=150 KB) optimized for field data networks.' } },
    { pkg: 'PWA Service Worker (spora-pwa-v7)', ver: 'v7 Manifest', role: { id: 'Instalasi layar penuh Android/iOS/Desktop, cache aset statis, fallback offline 504, & notifikasi perangkat.', en: 'Standalone Android/iOS/Desktop installation, static asset caching, 504 offline fallback, & device notifications.' } },
    { pkg: 'PHPUnit & Playwright E2E', ver: '^12.5.12 / E2E', role: { id: '99/99 tes fitur PHPUnit lulus (592 assertions), 7/7 tes unit JS lulus, & audit 24/24 layar E2E 0 JS error.', en: '99/99 PHPUnit feature tests passed (592 assertions), 7/7 JS unit tests passed, & 24/24 E2E visual audit with 0 JS errors.' } }
  ],
  securityItems: [
    { id: 'Proteksi CSRF pada seluruh request tulis + regenerasi sesi & logoutOtherDevices otomatis saat ubah kata sandi.', en: 'CSRF protection on all write routes + automatic session regeneration & logoutOtherDevices on password change.' },
    { id: 'Content Security Policy (CSP) berbasis cryptographic nonce acak per request (SecurityHeaders.php), HSTS & frame-ancestors.', en: 'Per-request cryptographic nonce Content Security Policy (SecurityHeaders.php), HSTS & strict frame-ancestors.' },
    { id: 'Rate limiting terisolasi per jenis aksi (login 5/mnt, laporan 10/mnt, tulis 60/mnt, baca 120/mnt) agar tidak saling memblokir.', en: 'Isolated rate limiters per action type (login 5/min, reports 10/min, writes 60/min, reads 120/min) preventing cross-blocking.' },
    { id: 'Validasi ekstensi & MIME asli file (finfo/mime_content_type), blokir SVG/skrip, kompresi ulang gambar, & nama file UUID acak.', en: 'Genuine file MIME & extension validation (finfo), SVG/script blocking, image re-encoding, & random UUID storage names.' },
    { id: 'Sanitasi XSS menyeluruh (escapeHtml) di judul, diskusi, komentar, #KodeAlat, @mention, hingga label marker peta Leaflet.', en: 'Comprehensive XSS sanitization (escapeHtml) across titles, posts, comments, #AssetCodes, @mentions & Leaflet markers.' },
    { id: 'Proteksi path traversal penyimpanan (/storage/{folder}/{filename}) dengan whitelist folder & canonical realpath boundary.', en: 'Storage path traversal protection (/storage/{folder}/{filename}) enforcing folder whitelists & canonical realpath bounds.' },
    { id: 'Pembersihan berkas yatim transaksional saat diskusi, komentar, avatar, atau akun dihapus + cron spora:prune-activity-logs.', en: 'Transactional orphan file cleanup on post/comment/avatar/account deletion + scheduled spora:prune-activity-logs command.' }
  ],
  limitsItems: [
    { id: 'Master Data terindeks: 5.406 Nomenklatur Peralatan lintas Indarung II–VI & Area Tambang.', en: 'Indexed Master Data: 5,406 Equipment Nomenclatures across Indarung II–VI & Mining zones.' },
    { id: 'Batas teks: Judul maks. 120 karakter, Deskripsi 10.000 karakter, Komentar 5.000 karakter, Laporan Bug 3–3.000 karakter.', en: 'Text caps: Title 120 chars, Description 10,000 chars, Comments 5,000 chars, Bug/Feedback 3–3,000 chars.' },
    { id: 'Foto diskusi & bukti perbaikan: unggahan maks. 10 MB, otomatis dikompresi ke <= 300 KB (maks. 1600 px; chat 1280 px).', en: 'Post & repair photos: max 10 MB upload, auto-compressed to <= 300 KB (max 1600 px; chat 1280 px).' },
    { id: 'Dokumen lampiran chat: PDF, DOC/DOCX, XLS/XLSX, CSV, PPT/PPTX, TXT hingga 10 MB per file.', en: 'Chat document attachments: PDF, DOC/DOCX, XLS/XLSX, CSV, PPT/PPTX, TXT up to 10 MB per file.' },
    { id: 'Foto profil (avatar): unggahan maks. 10 MB, otomatis dikompresi ke <= 150 KB (maks. 512 px).', en: 'Profile avatar: max 10 MB upload, auto-compressed to <= 150 KB (max 512 px).' },
    { id: 'Screenshot laporan bug: format JPG/PNG/WEBP hingga 5 MB; kata sandi akun minimal 8 karakter.', en: 'Bug report screenshots: JPG/PNG/WEBP up to 5 MB; account passwords minimum 8 characters.' },
    { id: 'Service Worker Cache PWA spora-pwa-v7 khusus aset statis (API & HTML selalu segar dari server + fallback offline 504).', en: 'Service Worker spora-pwa-v7 caches static assets only (API & HTML always stay fresh from server + safe 504 offline fallback).' }
  ]
};
