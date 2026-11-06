import type { HerbalService } from './herbal-types';

export const herbalServices: HerbalService[] = [
  {
    icon: 'box',
    title: 'Private Label',
    tagline: 'Produk dengan merek Anda sendiri',
    description:
      'Kami memproduksi produk sesuai formulasi dan desain yang Anda tentukan. Nama merek dan kemasan sepenuhnya milik Anda.',
    deliverables: [
      'Formulasi produk bersama tim R&D',
      'Produksi dan pengemasan',
      'Pencantuman komposisi dan aturan pakai',
      'Pendampingan berkas izin edar',
    ],
    minOrder: '500 unit',
  },
  {
    icon: 'flask',
    title: 'OEM',
    tagline: 'Formula Anda, produksi kami',
    description:
      'Anda sudah memiliki formulasi dan spesifikasi produk. Kami menjalankan produksi, pengujian, dan pengemasan sesuai spesifikasi tersebut.',
    deliverables: [
      'Produksi sesuai spesifikasi',
      'Pengujian kualitas tiap batch',
      'Pengemasan dan pelabelan',
      'Laporan hasil produksi',
    ],
    minOrder: '1.000 unit',
  },
  {
    icon: 'bulb',
    title: 'ODM',
    tagline: 'Ide produk dari kami',
    description:
      'Jika Anda sedang mencari produk baru, tim kami melakukan riset pasar dan merancang produk siap produksi untuk Anda.',
    deliverables: [
      'Riset pasar dan tren produk',
      'Rancangan formulasi',
      'Pembuatan prototipe',
      'Penyesuaian sesuai arahan klien',
    ],
    minOrder: '1.000 unit',
  },
  {
    icon: 'package',
    title: 'Pengemasan Custom',
    tagline: 'Kemasan sesuai desain Anda',
    description:
      'Kami kerjakan produksi kemasan mulai dari label, kemasan primer, dus, sampai insert di dalam kemasan.',
    deliverables: [
      'Cetak label dan stiker',
      'Kemasan primer dan sekunder',
      'Dus dan insert kemasan',
      'Penyesuaian ukuran dan bahan',
    ],
    minOrder: 'Sesuai kebutuhan',
  },
];

export type ServiceComparison = {
  service: string;
  bestFor: string;
  formulation: string;
};

export const serviceComparison: ServiceComparison[] = [
  {
    service: 'Private Label',
    bestFor: 'Brand baru yang sudah punya konsep produk',
    formulation: 'Bersama tim R&D kami',
  },
  {
    service: 'OEM',
    bestFor: 'Brand yang sudah punya formula sendiri',
    formulation: 'Disediakan klien',
  },
  {
    service: 'ODM',
    bestFor: 'Brand yang sedang mencari produk baru',
    formulation: 'Disusun oleh kami',
  },
  {
    service: 'Pengemasan Custom',
    bestFor: 'Semua tahap yang sudah berjalan',
    formulation: 'Sesuai kebutuhan',
  },
];