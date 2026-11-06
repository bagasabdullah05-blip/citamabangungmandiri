import type {
  Advantage,
  Faq,
  HerbalCertificate,
  HerbalService,
  ProcessStep,
  Product,
} from './herbal-types';

export type { Advantage, Faq, HerbalCertificate, HerbalService, ProcessStep, Product };

export const herbalHero = {
  badge: 'Layanan Maklon Herbal',
  title: 'Produksikan Brand Herbal Anda Bersama Kami',
  lead: 'Kami menangani seluruh proses produksi produk herbal untuk brand, distributor, dan labeler yang ingin fokus pada pemasaran. Dari formulasi sampai kemasan siap kirim.',
  categories: [
    'Jamu',
    'Serbuk',
    'Teh Herbal',
    'Minyak Esensial',
    'Lotion',
    'Kapsul',
  ],
  stats: [
    { value: '20+', label: 'Brand Maklon' },
    { value: '7', label: 'Produk berizin edar' },
    { value: '2', label: 'Jenis izin edar' },
    { value: '100%', label: 'QC Setiap Batch' },
  ],
};

export const advantages: Advantage[] = [
  {
    icon: 'flask',
    title: 'Formulasi Bersama Tim R&D',
    description:
      'Tim riset kami membantu menentukan komposisi bahan, dosis, dan rasa agar produk Anda punya karakter yang kuat.',
  },
  {
    icon: 'shield',
    title: 'Kualitas Terjaga',
    description:
      'Setiap batch melewati pemeriksaan laboratorium untuk kadar bahan aktif, kadar air, kontaminasi, dan daya simpan.',
  },
  {
    icon: 'certificate',
    title: 'Dokumen Lengkap',
    description:
      'Kami siapkan berkas izin edar dan pengajuan sertifikat halal agar produk Anda mudah dipasarkan.',
  },
  {
    icon: 'truck',
    title: 'Kemasan Sesuai Brand',
    description:
      'Label, kemasan primer dan sekunder, serta dus custom bisa disesuaikan dengan desain yang Anda kirimkan.',
  },
  {
    icon: 'scale',
    title: 'Harga Transparan',
    description:
      'Rincian biaya produksi dan minimum order disampaikan terbuka di awal, tanpa biaya tersembunyi.',
  },
  {
    icon: 'clock',
    title: 'Waktu Produksi Terukur',
    description:
      'Jadwal produksi disusun dengan target waktu yang jelas dan laporan progres berkala selama proses berjalan.',
  },
];