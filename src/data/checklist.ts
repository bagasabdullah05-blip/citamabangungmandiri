export type ChecklistGroup = {
  id: string;
  title: string;
  icon: string;
  tone: 'brand' | 'accent' | 'silver';
  intro: string;
  items: ChecklistItem[];
};

export type ChecklistItem = {
  label: string;
  hint: string;
  required: boolean;
};

export const checklistGroups: ChecklistGroup[] = [
  {
    id: 'identitas',
    title: 'Identitas Perusahaan',
    icon: 'building',
    tone: 'brand',
    intro:
      'Data ini muncul di header, footer, dan halaman kontak. Pastikan sama dengan dokumen resmi.',
    items: [
      {
        label: 'Nama resmi perusahaan',
        hint: 'Contoh: PT. Citra Bangun Mandiri. Harus sama dengan akta pendirian.',
        required: true,
      },
      {
        label: 'Bentuk badan usaha',
        hint: 'PT, CV, atau usaha perorangan.',
        required: true,
      },
      {
        label: 'Tahun berdiri',
        hint: 'Tahun akta pendirian perusahaan.',
        required: true,
      },
      {
        label: 'Alamat kantor pusat',
        hint: 'Jalan, nomor, kota, provinsi, kode pos, negara.',
        required: true,
      },
      {
        label: 'Alamat unit produksi herbal',
        hint: 'Kalau berbeda dari kantor pusat, tuliskan terpisah.',
        required: true,
      },
      {
        label: 'Nomor WhatsApp dan telepon',
        hint: 'Gunakan nomor yang aktif dan bisa dihubungi saat jam kerja.',
        required: true,
      },
      {
        label: 'Alamat email',
        hint: 'Satu untuk umum, satu khusus herbal bila perlu.',
        required: true,
      },
      {
        label: 'Jam kerja',
        hint: 'Contoh: Senin-Sabtu, 08.00-17.00 WIB.',
        required: false,
      },
    ],
  },
  {
    id: 'legalitas',
    title: 'Legalitas',
    icon: 'certificate',
    tone: 'accent',
    intro:
      'Nomor sertifikat akan tampil di halaman legalitas. Jangan isi nomor yang belum Anda miliki.',
    items: [
      {
        label: 'Nomor Akta Pendirian',
        hint: 'Nomor akta dari kbumn.go.id.',
        required: true,
      },
      {
        label: 'NPWP Perusahaan',
        hint: 'Format 16 digit seperti 01.234.567.8-901.000.',
        required: true,
      },
      {
        label: 'NIB',
        hint: 'Nomor Induk Berusaha dari OSS.',
        required: true,
      },
      {
        label: 'Izin Usaha Industri',
        hint: 'Nomor izin usaha industri dan masa berlakunya.',
        required: true,
      },
      {
        label: 'Sertifikat Merek HAKI',
        hint: 'Nomor pendaftaran merek bila sudah dimiliki.',
        required: true,
      },
      {
        label: 'Sertifikat P-IRT',
        hint: 'Nomor P-IRT untuk produk pangan diproduksi skala kecil.',
        required: false,
      },
      {
        label: 'Sertifikat Halal',
        hint: 'Nomor sertifikat dan lembaga penerbitnya.',
        required: false,
      },
      {
        label: 'Izin BPOM',
        hint: 'Nomor izin edar MD atau ML bila sudah dimiliki.',
        required: false,
      },
    ],
  },
  {
    id: 'brand',
    title: 'Logo dan Warna',
    icon: 'award',
    tone: 'brand',
    intro:
      'Warna sementara sudah dipasang: royal purple, leaf green, dan silver grey. Logo resmi perlu menggantikan favicon bawaan.',
    items: [
      {
        label: 'File logo utama',
        hint: 'SVG atau PNG transparan, lebar minimal 512px.',
        required: true,
      },
      {
        label: 'File favicon',
        hint: 'Versi 32x32 dan 512x512 dalam format ICO atau PNG.',
        required: true,
      },
      {
        label: 'Konfirmasi palet warna',
        hint: 'Royal purple #5B21B6, leaf green #4D7C0F, silver grey #64748B.',
        required: true,
      },
      {
        label: 'Panduan pemakaian logo',
        hint: 'Jarak aman, ukuran minimum, dan warna yang dilarang.',
        required: false,
      },
    ],
  },
  {
    id: 'gambar',
    title: 'Foto dan Gambar',
    icon: 'package',
    tone: 'accent',
    intro:
      'Situs saat ini belum memakai foto sama sekali. Format ideal: JPG atau WebP, lebar 1200-1600px, di bawah 300KB.',
    items: [
      {
        label: 'Foto hero perusahaan',
        hint: 'Gambar utama perusahaan, lebar minimal 1600px.',
        required: true,
      },
      {
        label: 'Foto hero unit produksi herbal',
        hint: 'Area produksi, mesin, atau tim sedang bekerja.',
        required: true,
      },
      {
        label: 'Foto tiap layanan maklon',
        hint: 'Minimal 3 sampai 4 foto.',
        required: true,
      },
      {
        label: 'Foto tiap produk portofolio',
        hint: 'Satu foto per produk, format lanskap.',
        required: true,
      },
      {
        label: 'Foto produk herbal',
        hint: 'Satu foto per kategori produk, menampilkan kemasan akhir.',
        required: true,
      },
      {
        label: 'Foto proses produksi',
        hint: 'Minimal 3 sampai 6 foto tahapan.',
        required: false,
      },
      {
        label: 'Foto tim kerja',
        hint: 'Untuk halaman tentang kami.',
        required: false,
      },
      {
        label: 'Scan sertifikat',
        hint: 'Format JPG atau PDF untuk halaman sertifikasi.',
        required: false,
      },
      {
        label: 'Foto og-image dalam JPG',
        hint: 'Ukuran 1200x630 untuk tampilan bagikan di WhatsApp dan media sosial.',
        required: true,
      },
    ],
  },
  {
    id: 'konten',
    title: 'Konten dan Klaim',
    icon: 'file',
    tone: 'silver',
    intro:
      'Semua angka di situs sekarang masih placeholder. Ganti dengan data nyata sebelum dipublikasikan.',
    items: [
      {
        label: 'Jumlah produk berizin edar',
        hint: 'Angka resmi dari catatan internal.',
        required: true,
      },
      {
        label: 'Tahun pengalaman',
        hint: 'Dihitung sejak perusahaan berdiri.',
        required: true,
      },
      {
        label: 'Kapasitas produksi bulanan',
        hint: 'Dalam unit per bulan.',
        required: false,
      },
      {
        label: 'Jumlah mitra aktif',
        hint: 'Klien yang pernah order dalam 12 bulan terakhir.',
        required: false,
      },
      {
        label: 'Status P-IRT dan Halal',
        hint: 'Perbarui status: aktif, proses, atau belum.',
        required: true,
      },
      {
        label: 'Rincian biaya perizinan',
        hint: 'Nominal pasti untuk pengujian, BPOM, dan HAKI di bawah 1.000 pcs.',
        required: true,
      },
      {
        label: 'Harga produksi per varian',
        hint: 'Harga per unit atau per batch, sudah termasuk kemasan atau belum.',
        required: true,
      },
      {
        label: 'Testimoni klien',
        hint: 'Hanya gunakan yang ada izin tertulisnya.',
        required: false,
      },
    ],
  },
  {
    id: 'sosial',
    title: 'Media Sosial',
    icon: 'users',
    tone: 'brand',
    intro: 'Pastikan tautan bisa dibuka publik tanpa perlu login.',
    items: [
      { label: 'Link Instagram', hint: 'URL profil, bukan tautan DM.', required: true },
      { label: 'Link LinkedIn', hint: 'URL company page.', required: false },
      { label: 'Link Facebook', hint: 'URL halaman, bukan grup tertutup.', required: false },
      { label: 'Link YouTube', hint: 'Kalau ada channel video produksi.', required: false },
    ],
  },
  {
    id: 'domain',
    title: 'Domain dan Hosting',
    icon: 'shield',
    tone: 'accent',
    intro:
      'Domain dan akun ini belum disiapkan. Situs bisa tetap dihosting gratis sebelum domain dibeli.',
    items: [
      {
        label: 'Beli domain',
        hint: 'citrabangunmandiri.com tersedia saat terakhir dicek. Ketersediaan bisa berubah.',
        required: true,
      },
      {
        label: 'Akun GitHub',
        hint: 'Untuk repository sumber situs.',
        required: true,
      },
      {
        label: 'Akun Cloudflare atau Vercel',
        hint: 'Untuk hosting gratis dan pengelolaan DNS domain.',
        required: true,
      },
      {
        label: 'Google Search Console',
        hint: 'Verifikasi sitemap setelah domain aktif.',
        required: false,
      },
      {
        label: 'Google Business Profile',
        hint: 'Agar muncul di pencarian lokal setelah alamatnya valid.',
        required: false,
      },
    ],
  },
];

export const checklistMeta = {
  total: checklistGroups.reduce((sum, group) => sum + group.items.length, 0),
  required: checklistGroups.reduce(
    (sum, group) => sum + group.items.filter((item) => item.required).length,
    0,
  ),
};
