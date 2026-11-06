import type { ProcessStep } from './herbal-types';

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Konsultasi dan Analisis Kebutuhan',
    description:
      'Kami membahas kebutuhan Anda: jenis produk, manfaat yang dituju, pasar sasaran, dan target harga yang ingin dicapai.',
    duration: '2 minggu',
    deliverables: ['Ringkasan kebutuhan produk', 'Estimasi harga awal'],
  },
  {
    step: '02',
    title: 'Formulasi dan Prototipe',
    description:
      'Tim R&D menyusun formula dan membuat prototipe untuk Anda cicipi dan beri masukan.',
    duration: '2 minggu',
    deliverables: ['Formula rancangan', 'Prototipe produk', 'Contoh rasa'],
  },
  {
    step: '03',
    title: 'Desain Kemasan',
    description:
      'Anda menyiapkan desain kemasan, tim kami menyiapkan versi siap cetak yang sesuai aturan penulisan produk.',
    duration: '3-7 hari kerja',
    deliverables: ['Mockup kemasan', 'File siap cetak'],
  },
  {
    step: '04',
    title: 'Persetujuan dan Kontrak',
    description:
      'Semua detail disepakati: spesifikasi produk, kemasan, jumlah, harga, dan jadwal produksi.',
    duration: '2-5 hari kerja',
    deliverables: ['Dokumen spesifikasi produk', 'Perjanjian kerja sama'],
  },
  {
    step: '05',
    title: 'Pengurusan Perizinan',
    description:
      'Uji laboratorium serta pengajuan izin BPOM, HAKI, dan P-IRT kami urus. Gratis untuk order di atas 1.000 pcs per varian.',
    duration: '2 minggu',
    deliverables: ['Hasil uji laboratorium', 'Nomor izin edar'],
  },
  {
    step: '06',
    title: 'Produksi dan Pengawasan Mutu',
    description:
      'Produksi berjalan dengan tim QC yang memeriksa setiap batch sesuai standar yang telah disepakati.',
    duration: '2 minggu',
    deliverables: ['Laporan QC per batch', 'Dokumentasi produksi'],
  },
  {
    step: '07',
    title: 'Pengemasan dan Pengiriman',
    description:
      'Produk dikemas sesuai pesanan, diperiksa kelengkapannya, lalu dikirim ke alamat yang Anda tentukan.',
    duration: '3-7 hari kerja',
    deliverables: ['Produk siap kirim', 'Dokumen pengiriman'],
  },
];