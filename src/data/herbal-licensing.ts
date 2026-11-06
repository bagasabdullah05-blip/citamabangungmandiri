import type { LicensingTier } from './herbal-types';

export const licensingTiers: LicensingTier[] = [
  {
    tier: 'Pembuka',
    range: '500 pcs',
    order: '500 unit per varian',
    cost: 'Biaya perizinan dibayar klien',
    costNote:
      'Uji laboratorium, pengajuan izin, dan pengurusan berkas tetap kami dampingi, tetapi dibebankan ke klien.',
    perks: [
      'Pendampingan pengurusan berkas',
      'Konsultasi komposisi dan klaim',
      'Pembuatan draft label',
    ],
    highlight: false,
  },
  {
    tier: 'Menengah',
    range: '501 - 1.000 pcs',
    order: 'Di atas 500 sampai 1.000 unit',
    cost: 'Biaya perizinan tetap dibayar klien',
    costNote:
      'Belum masuk program gratis. Kami tetap menangani seluruh paperwork, klien menanggung biaya pengujian dan pengajuan.',
    perks: [
      'Pendampingan pengurusan berkas',
      'Konsultasi komposisi dan klaim',
      'Pembuatan draft label',
      'Revisi label hingga disetujui',
    ],
    highlight: false,
  },
  {
    tier: 'Mitra Borongan',
    range: 'Di atas 1.000 pcs',
    order: 'Di atas 1.000 unit per varian',
    cost: 'Perizinan gratis, 100%',
    costNote:
      'Uji laboratorium, izin BPOM, dan izin HAKI kami tanggung seluruhnya. Anda hanya membayar biaya produksi.',
    perks: [
      'Gratis uji laboratorium',
      'Gratis pengajuan izin BPOM',
      'Gratis pengajuan izin HAKI',
      'Pendampingan penuh sampai izin terbit',
      'Konsultasi komposisi dan klaim',
      'Desain label plus revisi tanpa batas',
      'Pemantauan status pengajuan berkala',
    ],
    highlight: true,
  },
];

export const licensingScope = [
  {
    icon: 'flask',
    title: 'Uji Laboratorium',
    description:
      'Pengujian mutu, keamanan pangan, dan parameter mutu produk. Biaya pengujian kami tanggung untuk order di atas 1.000 unit.',
    covered: true,
  },
  {
    icon: 'award',
    title: 'Izin BPOM',
    description:
      'Pengajuan izin edar BPOM untuk produk yang klaimnya memerlukan perizinan. Biaya pengajuan ditanggung kami.',
    covered: true,
  },
  {
    icon: 'certificate',
    title: 'Izin HAKI',
    description:
      'Pengajuan hak atas kekayaan intelektual seperti merek dan desain kemasan. Nama merek Anda dilindungi atas nama Anda sendiri.',
    covered: true,
  },
  {
    icon: 'box',
    title: 'Biaya Produksi',
    description:
      'Bahan baku, kemasan, tenaga kerja, dan biaya cetak. Tetap komponen biaya terpisah dan tidak termasuk program gratis.',
    covered: false,
  },
];

export const licensingConditions = [
  'Gratis berlaku untuk order di atas 1.000 unit per varian dalam satu pesanan.',
  'Program hanya berlaku bagi klien yang memakai layanan produksi PT. Citra Bangun Mandiri.',
  'Satu proses perizinan per nama merek dan per varian produk.',
  'Bila produk gagal memenuhi persyaratan pengujian, perbaikan formulasi dihitung sebagai order terpisah.',
  'Biaya yang tidak tercantum sebagai gratis dibayar terpisah oleh klien.',
  'Program tidak dapat digabungkan dengan promo lain dan hanya berlaku untuk pesanan setelah dipublikasikan.',
];

export const objections = [
  {
    q: 'Betulkah gratis, tidak ada biaya tersembunyi?',
    a: 'Untuk order di atas 1.000 unit, uji laboratorium, pengajuan izin BPOM, dan izin HAKI memang kami tanggung. Yang tetap Anda bayar hanya biaya produksi: bahan baku, kemasan, dan tenaga kerja. Semua rinciannya kami tulis di kontrak sebelum produksi jalan, jadi tidak ada biaya yang muncul di tengah jalan.',
  },
  {
    q: 'Saya baru mulai, belum punya nama merek',
    a: 'Tidak masalah. Pengajuan HAKI termasuk program gratis, jadi nama merek Anda tetap bisa didaftarkan sejak awal. Kami bantu menyiapkan struktur informasi yang dibutuhkan. Nama merek, desain kemasan, dan informasi produk cukup Anda siapkan saat konsultasi pertama.',
  },
  {
    q: 'Bagaimana kalau produk saya gagal uji laboratorium?',
    a: 'Kami memberitahukan hasilnya sejak awal dan memodifikasi formulasi bersama Anda sampai memenuhi persyaratan, tanpa biaya tambahan dari sisi kami. Perbaikan dihitung sebagai order terpisah dan baru jalan setelah Anda menyetujui spesifikasi baru.',
  },
  {
    q: 'Berapa lama prosesnya sampai izin terbit?',
    a: 'Untuk produk jamu dan serbuk dengan proses P-IRT, rata-rata memerlukan 1 sampai 2 bulan untuk berkas dan pengujian. Pengajuan halal memerlukan waktu lebih lama sesuai jadwal lembaga yang menerbitkan. Jadwal detail kami berikan setelah spesifikasi produk disepakati.',
  },
  {
    q: 'Apakah 1.000 pcs itu per varian atau total?',
    a: 'Per varian, dalam satu pesanan. Kalau Anda punya tiga varian dan masing-masing di atas 1.000 unit, program gratis berlaku untuk ketiganya.',
  },
];

export const proofPoints = [
  {
    icon: 'clock',
    title: 'Konsultasi hari pertama, tanpa biaya',
    description:
      'Anda kirim kebutuhan, kami balas dengan perkiraan biaya produksi, timeline, dan daftar berkas yang perlu disiapkan. Gratis dan tanpa ikatan.',
    action: 'Kirim kebutuhan lewat WhatsApp',
    href: '/kontak/',
  },
  {
    icon: 'file',
    title: 'Satu kontrak, semua biaya tertulis',
    description:
      'Sebelum produksi berjalan, rincian biaya sudah disepakati tertulis. Tidak ada tagihan yang muncul setelah order jalan.',
    action: 'Lihat rincian program',
    href: '/maklon/gratis-perizinan/',
  },
  {
    icon: 'users',
    title: 'Tim yang sama sampai produk dikirim',
    description:
      'Satu kontak yang menangani order Anda dari konsultasi sampai pengiriman. Tidak perlu mengulang menjelaskan kebutuhan ke banyak pihak.',
    action: 'Ajukan konsultasi',
    href: '/kontak/',
  },
];

export const bookingSteps = [
  {
    step: '01',
    title: 'Kirim kebutuhan',
    description:
      'Ceritakan produk yang ingin Anda buat, target pasar, dan perkiraan jumlah. Cukup lewat WhatsApp, boleh singkat.',
  },
  {
    step: '02',
    title: 'Terima hitungan lengkap',
    description:
      'Kami kirim estimasi biaya produksi, jadwal produksi, dan rincian berkas izin yang perlu Anda siapkan.',
  },
  {
    step: '03',
    title: 'Konfirmasi dan produksi',
    description:
      'Setelah Anda setujui, kami mulai formulasi dan produksi. Izin diproses bersamaan tanpa biaya tambahan.',
  },
];
