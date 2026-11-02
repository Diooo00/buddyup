/**
 * CAMPUS INFO DATA
 *
 * ⚠️  IMPORTANT — Content Policy:
 * This file contains general/illustrative information about UPN "Veteran" Yogyakarta.
 * Items marked isImportant:true and any specific addresses, phone numbers, URLs, or
 * schedules are labeled "Perlu Verifikasi" in their tags.
 *
 * Students MUST verify all official details (contacts, schedules, fees, locations)
 * directly with the relevant UPNVY office or the official website: https://upnyk.ac.id
 *
 * No official UPNVY policies, fees, deadlines, or contacts are fabricated here.
 */

import type { CampusInfoCategory } from '@/types'

export const CAMPUS_INFO_DATA: CampusInfoCategory[] = [
  // ─── AKADEMIK ──────────────────────────────────────────────────────────────
  {
    id: 'cat-akademik',
    slug: 'akademik',
    title: 'Akademik',
    icon: 'GraduationCap',
    description: 'SIAKAD, KRS, SKS, kalender akademik, dan sistem penilaian.',
    items: [
      {
        id: 'akd-info-1',
        title: 'Apa itu SIAKAD?',
        content:
          'SIAKAD (Sistem Informasi Akademik) adalah portal resmi mahasiswa untuk mengisi KRS, melihat nilai, dan memantau riwayat akademik. Akses melalui alamat yang diberikan saat registrasi. Aktifkan akun kamu menggunakan NIM dan password awal dari pihak kampus.',
        tags: ['SIAKAD', 'Portal Mahasiswa'],
      },
      {
        id: 'akd-info-2',
        title: 'Cara Mengisi KRS',
        content:
          'Kartu Rencana Studi (KRS) diisi setiap awal semester melalui SIAKAD. Pilih mata kuliah sesuai kurikulum program studi dan konsultasikan dengan dosen wali/pembimbing akademik. Jumlah SKS maksimal per semester biasanya ditentukan oleh IPK semester sebelumnya. Perhatikan batas waktu pengisian KRS sesuai kalender akademik.',
        tags: ['KRS', 'SKS', 'Akademik'],
        isImportant: true,
      },
      {
        id: 'akd-info-3',
        title: 'Sistem SKS (Satuan Kredit Semester)',
        content:
          'SKS adalah satuan beban studi. Satu SKS setara dengan 1 jam tatap muka, 1 jam tugas terstruktur, dan 1 jam belajar mandiri per minggu. Program S1 umumnya memiliki beban studi sekitar 144–148 SKS yang diselesaikan dalam 8 semester (4 tahun). Jumlah SKS yang boleh diambil tiap semester bergantung pada IPK.',
        tags: ['SKS', 'Studi', 'S1'],
      },
      {
        id: 'akd-info-4',
        title: 'Dosen Wali / Pembimbing Akademik',
        content:
          'Setiap mahasiswa memiliki dosen wali yang membantu merencanakan studi. Temukan nama dosen walimu melalui SIAKAD atau Tata Usaha (TU) di fakultas masing-masing. Manfaatkan jam konsultasi untuk berdiskusi tentang KRS, masalah akademik, atau rencana masa depan.',
        tags: ['Dosen Wali', 'Konsultasi'],
      },
      {
        id: 'akd-info-5',
        title: 'Kalender Akademik',
        content:
          'Kalender akademik berisi jadwal penting: masa registrasi, pengisian KRS, perkuliahan, UTS, UAS, dan pengumuman hasil studi. Kalender resmi tersedia di website UPNVY dan pengumuman resmi kampus. Perhatikan setiap tenggat waktu agar tidak melewatkan proses penting.',
        tags: ['Kalender', 'Jadwal', 'Perlu Verifikasi'],
        isImportant: true,
      },
    ],
  },

  // ─── ADMINISTRASI ──────────────────────────────────────────────────────────
  {
    id: 'cat-administrasi',
    slug: 'administrasi',
    title: 'Administrasi',
    icon: 'FileText',
    description: 'UKT, KTM, berkas pendaftaran, dan prosedur administrasi.',
    items: [
      {
        id: 'adm-info-1',
        title: 'UKT (Uang Kuliah Tunggal)',
        content:
          'UKT adalah biaya kuliah per semester yang sudah mencakup seluruh biaya operasional pendidikan. Besaran UKT berbeda-beda berdasarkan golongan yang ditentukan saat pendaftaran. Pembayaran dilakukan melalui bank yang ditunjuk kampus sesuai tagihan di SIAKAD. Verifikasi jadwal pembayaran UKT ke Biro Administrasi Keuangan (BAK).',
        tags: ['UKT', 'Biaya Kuliah', 'Perlu Verifikasi'],
        isImportant: true,
      },
      {
        id: 'adm-info-2',
        title: 'KTM (Kartu Tanda Mahasiswa)',
        content:
          'KTM adalah identitas resmi mahasiswa UPNVY. Diperlukan untuk akses fasilitas kampus, perpustakaan, dan berbagai keperluan administrasi. Proses pembuatan KTM biasanya dilakukan di bagian Kemahasiswaan atau melalui prosedur yang ditetapkan saat PKKMB. Bawa dokumen persyaratan yang diminta.',
        tags: ['KTM', 'Identitas Mahasiswa'],
        isImportant: true,
      },
      {
        id: 'adm-info-3',
        title: 'Berkas Persyaratan Mahasiswa Baru',
        content:
          'Dokumen yang umumnya dibutuhkan: ijazah/SKHUN asli dan fotokopi, akta kelahiran, kartu keluarga, KTP, pas foto, dan surat keterangan lainnya. Persyaratan lengkap dan terkini wajib dikonfirmasi ke fakultas atau Biro Administrasi Akademik dan Kemahasiswaan (BAAK) UPNVY.',
        tags: ['Berkas', 'Registrasi', 'Perlu Verifikasi'],
      },
      {
        id: 'adm-info-4',
        title: 'Email dan Akun Institusi',
        content:
          'Mahasiswa UPNVY umumnya mendapatkan akun email institusi (@upnyk.ac.id atau sejenisnya) yang digunakan untuk komunikasi resmi dan akses layanan digital kampus. Tanyakan prosedur aktivasinya ke UPT Teknologi Informasi atau mengikuti petunjuk saat orientasi.',
        tags: ['Email', 'Akun Kampus', 'Perlu Verifikasi'],
      },
    ],
  },

  // ─── FASILITAS ─────────────────────────────────────────────────────────────
  {
    id: 'cat-fasilitas',
    slug: 'fasilitas',
    title: 'Fasilitas Kampus',
    icon: 'Building2',
    description: 'Perpustakaan, Wi-Fi, olahraga, kantin, dan sarana kampus.',
    items: [
      {
        id: 'fas-info-1',
        title: 'Perpustakaan Pusat UPNVY',
        content:
          'Perpustakaan menyediakan koleksi buku teks, jurnal ilmiah, dan referensi digital. Kamu perlu mendaftar dan mengaktifkan kartu perpustakaan menggunakan KTM. Tersedia ruang baca, ruang diskusi, dan akses ke database jurnal online. Jam operasional dan lokasi perlu dikonfirmasi langsung ke UPT Perpustakaan UPNVY.',
        tags: ['Perpustakaan', 'Fasilitas', 'Perlu Verifikasi'],
      },
      {
        id: 'fas-info-2',
        title: 'Jaringan Wi-Fi Kampus',
        content:
          'Kampus UPNVY menyediakan akses Wi-Fi di area-area tertentu. Untuk mendapatkan akses, biasanya diperlukan pendaftaran akun menggunakan NIM atau akun institusi. Tanyakan prosedur dan nama jaringan Wi-Fi resmi ke UPT Teknologi Informasi atau petugas kampus.',
        tags: ['Wi-Fi', 'Internet', 'Perlu Verifikasi'],
      },
      {
        id: 'fas-info-3',
        title: 'Fasilitas Olahraga',
        content:
          'UPNVY memiliki berbagai fasilitas olahraga untuk mahasiswa. Fasilitas yang umumnya tersedia di kampus besar termasuk lapangan futsal, basket, badminton, dan area jogging. Ketersediaan fasilitas spesifik dan prosedur pemakaiannya perlu dikonfirmasi ke bagian Kemahasiswaan atau UKM olahraga.',
        tags: ['Olahraga', 'Fasilitas', 'Perlu Verifikasi'],
      },
      {
        id: 'fas-info-4',
        title: 'Kantin dan Area Makan',
        content:
          'Terdapat beberapa kantin dan area makan di dalam kampus yang menyediakan makanan dengan harga terjangkau untuk mahasiswa. Lokasinya biasanya tersebar di dekat gedung-gedung perkuliahan. Kenali lokasi kantin terdekat dengan fakultasmu sejak awal.',
        tags: ['Kantin', 'Makan', 'Fasilitas'],
      },
      {
        id: 'fas-info-5',
        title: 'Kesehatan: Poliklinik Kampus',
        content:
          'UPNVY menyediakan layanan kesehatan dasar melalui poliklinik atau klinik kampus yang bisa diakses oleh mahasiswa. Lokasi dan jam layanan perlu dikonfirmasi ke bagian Kemahasiswaan. Bawa KTM saat berobat. Untuk kondisi darurat, hubungi pihak keamanan kampus.',
        tags: ['Kesehatan', 'Klinik', 'Perlu Verifikasi'],
        isImportant: true,
      },
    ],
  },

  // ─── KEHIDUPAN KAMPUS ──────────────────────────────────────────────────────
  {
    id: 'cat-kehidupan',
    slug: 'kehidupan-kampus',
    title: 'Kehidupan Kampus',
    icon: 'Users',
    description: 'UKM, BEM, kegiatan mahasiswa, dan komunitas kampus.',
    items: [
      {
        id: 'keh-info-1',
        title: 'PKKMB (Pengenalan Kehidupan Kampus)',
        content:
          'PKKMB adalah program orientasi wajib bagi mahasiswa baru. Kamu akan diperkenalkan pada lingkungan kampus, sistem akademik, hak dan kewajiban mahasiswa, serta kegiatan kemahasiswaan. Kehadiran di PKKMB biasanya diwajibkan. Ikuti semua sesi dengan aktif dan perhatikan informasi dari panitia.',
        tags: ['PKKMB', 'Orientasi', 'Wajib'],
        isImportant: true,
      },
      {
        id: 'keh-info-2',
        title: 'UKM (Unit Kegiatan Mahasiswa)',
        content:
          'UKM adalah organisasi kemahasiswaan berbasis minat dan bakat seperti olahraga, seni, jurnalistik, kerohanian, dan kewirausahaan. Mengikuti UKM membantu mengembangkan soft skill, memperluas jaringan, dan menambah pengalaman di luar akademik. Daftar UKM dan jadwal open recruitment biasanya diumumkan saat PKKMB atau awal semester.',
        tags: ['UKM', 'Organisasi', 'Ekstrakurikuler'],
      },
      {
        id: 'keh-info-3',
        title: 'BEM dan Senat Mahasiswa',
        content:
          'Badan Eksekutif Mahasiswa (BEM) dan Senat Mahasiswa adalah organisasi intra-kampus yang mewakili suara mahasiswa di tingkat universitas maupun fakultas. Bergabung dengan BEM/Senat memberi pengalaman berorganisasi, kepemimpinan, dan advokasi mahasiswa.',
        tags: ['BEM', 'Senat', 'Organisasi'],
      },
      {
        id: 'keh-info-4',
        title: 'Beasiswa untuk Mahasiswa',
        content:
          'Berbagai program beasiswa tersedia untuk mahasiswa UPNVY, baik dari pemerintah (KIP-Kuliah, Bidikmisi) maupun swasta. Informasi beasiswa biasanya diumumkan melalui website resmi UPNVY, SIAKAD, atau papan pengumuman di fakultas. Pantau pengumuman secara berkala dan pastikan memenuhi persyaratan administrasi.',
        tags: ['Beasiswa', 'KIP-Kuliah', 'Perlu Verifikasi'],
        isImportant: true,
      },
    ],
  },

  // ─── TRANSPORTASI & LOKASI ─────────────────────────────────────────────────
  {
    id: 'cat-transportasi',
    slug: 'transportasi-lokasi',
    title: 'Transportasi & Lokasi',
    icon: 'MapPin',
    description: 'Akses ke kampus, transportasi umum, dan area sekitar.',
    items: [
      {
        id: 'tra-info-1',
        title: 'Lokasi Kampus UPNVY',
        content:
          'UPN "Veteran" Yogyakarta memiliki kampus utama di kawasan Condongcatur, Sleman, Yogyakarta. Alamat dan denah lengkap tersedia di website resmi upnyk.ac.id. Untuk memastikan lokasi gedung atau fasilitas spesifik, gunakan peta kampus resmi atau tanyakan ke Satpam/petugas kampus.',
        tags: ['Lokasi', 'Kampus', 'Perlu Verifikasi'],
        isImportant: true,
      },
      {
        id: 'tra-info-2',
        title: 'Transportasi Umum ke Kampus',
        content:
          'Yogyakarta memiliki layanan Trans Jogja (bus rapid transit) yang melayani berbagai rute. Untuk rute yang melewati atau dekat UPNVY, cek informasi terkini di aplikasi/website Trans Jogja atau Google Maps. Ojek online (Gojek, Grab) juga tersedia luas di Yogyakarta.',
        tags: ['Transportasi', 'Trans Jogja', 'Umum'],
      },
      {
        id: 'tra-info-3',
        title: 'Tempat Tinggal di Sekitar Kampus',
        content:
          'Banyak tersedia kos-kosan, kontrakan, dan rumah sewa di sekitar kampus UPNVY dengan berbagai harga dan fasilitas. Gunakan platform pencarian kos online atau tanya senior/teman angkatan untuk rekomendasi. Perhatikan jarak ke kampus, keamanan, fasilitas, dan harga sebelum memutuskan.',
        tags: ['Kos', 'Tempat Tinggal', 'Sekitar Kampus'],
      },
    ],
  },

  // ─── KONTAK & LAYANAN ──────────────────────────────────────────────────────
  {
    id: 'cat-kontak',
    slug: 'kontak-layanan',
    title: 'Kontak & Layanan',
    icon: 'Phone',
    description: 'Unit layanan, kontak kampus, dan sumber informasi resmi.',
    items: [
      {
        id: 'kon-info-1',
        title: 'Website & Sumber Informasi Resmi',
        content:
          'Website resmi UPNVY: https://upnyk.ac.id — Ini adalah sumber utama untuk semua informasi resmi termasuk pengumuman, kalender akademik, peraturan, dan kontak. Selalu verifikasi informasi dari aplikasi atau sumber pihak ketiga dengan mengacu ke website resmi.',
        tags: ['Website', 'Informasi Resmi'],
        isImportant: true,
      },
      {
        id: 'kon-info-2',
        title: 'Unit Layanan Utama',
        content:
          'Beberapa unit yang perlu kamu kenal: BAAK (Biro Administrasi Akademik & Kemahasiswaan) untuk urusan akademik-administratif; BAK (Biro Administrasi Keuangan) untuk pembayaran UKT; UPT TI untuk akun dan layanan digital; UPT Perpustakaan untuk akses bahan kuliah. Lokasi dan nomor kontak masing-masing unit tersedia di website UPNVY.',
        tags: ['BAAK', 'BAK', 'Layanan', 'Perlu Verifikasi'],
      },
      {
        id: 'kon-info-3',
        title: 'Kontak Darurat Kampus',
        content:
          'Untuk keadaan darurat di dalam area kampus, hubungi pos keamanan (Satpam) terdekat. Nomor kontak darurat kampus dapat ditemukan di papan pengumuman, website resmi UPNVY, atau ditanyakan langsung ke petugas saat PKKMB. Simpan nomor ini di ponselmu sejak awal.',
        tags: ['Darurat', 'Keamanan', 'Perlu Verifikasi'],
        isImportant: true,
      },
      {
        id: 'kon-info-4',
        title: 'Layanan Konseling Mahasiswa',
        content:
          'UPNVY menyediakan layanan konseling dan bimbingan untuk mahasiswa yang membutuhkan dukungan akademik maupun psikologis. Layanan ini biasanya berada di bawah naungan bagian Kemahasiswaan atau unit khusus. Informasi lengkap tersedia di website UPNVY atau bisa ditanyakan ke fakultas.',
        tags: ['Konseling', 'Kesehatan Mental', 'Perlu Verifikasi'],
      },
    ],
  },
]
