export type Stat = {
  value: string;
  label: string;
  description?: string;
};

export type Service = {
  icon: string;
  title: string;
  description: string;
  points: string[];
};

export type Project = {
  title: string;
  category: string;
  location: string;
  year: string;
  scope: string;
  status: 'Selesai' | 'Berjalan';
  description: string;
};

export type Certificate = {
  name: string;
  issuer: string;
  number: string;
  year: string;
};

export const stats: Stat[] = [
  {
    value: '10+',
    label: 'Tahun Pengalaman',
    description: 'Berkarya di industri herbal sejak 2015.',
  },
  {
    value: '1000+',
    label: 'Apotek Terjangkau',
    description: 'Produk kami dipasarkan melalui lebih dari seribu apotek.',
  },
  {
    value: '20+',
    label: 'Brand Maklon',
    description: 'Brand yang mempercayakan produksinya kepada kami.',
  },
  {
    value: '30',
    label: 'Produk dalam katalog',
    description: 'Kapsul, madu, sari kurma, minyak, dan cuka berizin BPOM dan P-IRT.',
  },
];

export const values = [
  {
    title: 'Kualitas Terjaga',
    description:
      'Setiap batch melewati pemeriksaan laboratorium untuk kadar bahan aktif, kadar air, kontaminasi, dan daya simpan.',
  },
  {
    title: 'Dokumen Lengkap',
    description:
      'Kami siapkan berkas izin edar dan pengajuan sertifikat halal agar produk Anda mudah dipasarkan.',
  },
  {
    title: 'Harga Transparan',
    description:
      'Rincian biaya produksi dan minimum order disampaikan terbuka di awal, tanpa biaya tersembunyi.',
  },
  {
    title: 'Waktu Produksi Terukur',
    description:
      'Jadwal produksi disusun dengan target waktu yang jelas dan laporan progres berkala selama proses berjalan.',
  },
];

export const services: Service[] = [
  {
    icon: 'flask',
    title: 'Private Label',
    description: 'Produk dengan merek Anda sendiri.',
    points: [
      'Formulasi produk bersama tim R&D',
      'Produksi dan pengemasan',
      'Pencantuman komposisi dan aturan pakai',
      'Pendampingan berkas izin edar',
    ],
  },
  {
    icon: 'package',
    title: 'OEM',
    description: 'Formula Anda, produksi kami.',
    points: [
      'Produksi sesuai spesifikasi',
      'Pengujian kualitas tiap batch',
      'Pengemasan dan pelabelan',
      'Laporan hasil produksi',
    ],
  },
  {
    icon: 'bulb',
    title: 'ODM',
    description: 'Ide produk dari kami.',
    points: [
      'Riset pasar dan tren produk',
      'Rancangan formulasi',
      'Pembuatan prototipe',
      'Penyesuaian sesuai arahan klien',
    ],
  },
  {
    icon: 'box',
    title: 'Pengemasan Custom',
    description: 'Kemasan sesuai desain Anda.',
    points: [
      'Cetak label dan stiker',
      'Kemasan primer dan sekunder',
      'Dus dan insert kemasan',
      'Penyesuaian ukuran dan bahan',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Panggung Hunian Matoa',
    category: 'Hunian',
    location: 'Palu, Sulawesi Tengah',
    year: '2025',
    scope: 'Bangun baru, 24 unit',
    status: 'Selesai',
    description:
      'Pembangunan 24 unit hunian dua lantai dengan spesifikasi tahan gempa sesuai standar SNI.',
  },
  {
    title: 'Gudang Logistik Palu',
    category: 'Komersial',
    location: 'Palu, Sulawesi Tengah',
    year: '2024',
    scope: 'Bangun baru, 1.200 m2',
    status: 'Selesai',
    description:
      'Gudang penyimpanan dengan atap baja ringan dan lantai beton bertulang tebal.',
  },
  {
    title: 'Renovasi Ruko Pasar Tip',
    category: 'Renovasi',
    location: 'Manado, Sulawesi Utara',
    year: '2025',
    scope: 'Renovasi total, 3 lantai',
    status: 'Selesai',
    description:
      'Renovasi struktural dan redesign tampak depan ruko era 90-an.',
  },
  {
    title: 'Pabrik Pengolahan Herbal',
    category: 'Industri',
    location: 'Palu, Sulawesi Tengah',
    year: '2025',
    scope: 'Bangun baru, 1.800 m2',
    status: 'Berjalan',
    description:
      'Fasilitas produksi herbal dengan area produksi bersih, gudang bahan, dan laboratorium QC.',
  },
  {
    title: 'Kompleks Ruko Tamara',
    category: 'Komersial',
    location: 'Palu, Sulawesi Tengah',
    year: '2023',
    scope: 'Bangun baru, 8 unit ruko',
    status: 'Selesai',
    description:
      'Ruko dua lantai dengan akses jalan dan drainase yang baik.',
  },
  {
    title: 'Gereja Bethany',
    category: 'Institusi',
    location: 'Sigi, Sulawesi Tengah',
    year: '2024',
    scope: 'Bangun baru, 400 m2',
    status: 'Selesai',
    description:
      'Pembangunan ruang ibadah beserta serbaguna dan akses yang aman untuk seluruh pengguna.',
  },
];

export const certificates: Certificate[] = [
  { name: 'Akta Pendirian Perseroan', issuer: 'Kementerian Hukum', number: '—', year: '2015' },
  { name: 'Nomor Induk Berusaha (NIB)', issuer: 'Kementerian Investasi', number: '—', year: '2024' },
  { name: 'Izin Usaha Konstruksi', issuer: 'Kementerian Pekerjaan Umum', number: '—', year: '2025' },
  { name: 'Sertifikat Badan Usaha (SBU)', issuer: 'Kementerian Pekerjaan Umum', number: '—', year: '2025' },
  { name: 'NPWP Perusahaan', issuer: 'Kantor Pelayanan Pajak', number: '—', year: '2015' },
];

export const timeline = [
  {
    year: '2015',
    title: 'Berdiri',
    description:
      'PT. Citra Bangun Mandiri berdiri dan mulai berkarya di industri herbal.',
  },
  {
    year: '2018',
    title: 'Perluasan Pasar',
    description:
      'Produk kami menjangkau semakin banyak apotek di berbagai daerah.',
  },
  {
    year: '2021',
    title: 'Layanan Maklon',
    description:
      'Membuka layanan maklon untuk brand lain yang ingin punya produk herbal sendiri.',
  },
  {
    year: '2024',
    title: 'Produk Berizin BPOM',
    description:
      'Sejumlah produk kapsul dan madu mengantongi izin edar BPOM.',
  },
  {
    year: '2026',
    title: 'Program Gratis Perizinan',
    description:
      'Meluncurkan program gratis perizinan untuk order di atas 1.000 pcs.',
  },
];