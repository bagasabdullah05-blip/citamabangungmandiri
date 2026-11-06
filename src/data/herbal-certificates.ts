import type { HerbalCertificate } from './herbal-types';

export const herbalCertificates: HerbalCertificate[] = [
  {
    name: 'Izin P-IRT',
    description:
      'Izin edar untuk produk pangan yang diproduksi skala rumahan dan usaha kecil.',
    status: 'Aktif',
    detail: 'Dimiliki untuk varian sari kurma dan madu tertentu.',
  },
  {
    name: 'Sertifikat Halal',
    description: 'Sertifikasi halal dari lembaga halal yang diakui Kementerian Agama.',
    status: 'Proses',
    detail: 'Registrasi dan verifikasi sedang berjalan di lembaga halal.',
  },
  {
    name: 'Izin BPOM',
    description: 'Izin edar BPOM untuk produk dengan klaim kesehatan tertentu.',
    status: 'Aktif',
    detail: 'Beberapa produk kapsul, madu, dan sari kurma telah mengantongi izin edar BPOM.',
  },
  {
    name: 'Sistem Mutu',
    description:
      'Penerapan prosedur produksi yang tertulis, terekam, dan dapat diaudit.',
    status: 'Persiapan',
    detail: 'Implementasi sistem mutu masih berjalan sebelum audit eksternal.',
  },
];