export const site = {
  name: 'Citra Bangun Mandiri',
  colors: {
    royalPurple: '#5B21B6',
    royalPurpleDark: '#3B1580',
    leafGreen: '#4D7C0F',
    silverGrey: '#64748B',
  },
  legalName: 'PT. Citra Bangun Mandiri',
  tagline: 'Mitra Herbal yang Terpercaya',
  description:
    'PT. Citra Bangun Mandiri adalah perusahaan herbal yang memproduksi produk herbal berkualitas dan menyediakan jasa maklon untuk brand Anda.',
  url: 'https://citrabangunmandiri.com',
  email: 'cbmofficial.id@gmail.com',
  emailHerbal: 'cbmofficial.id@gmail.com',
  phone: '+62 857-2858-0008',
  whatsapp: '6285728580008',
  address: 'Gayam, Sukoharjo, Kabupaten Sukoharjo, Jawa Tengah, Indonesia',
  addressHerbal:
    'Gayam, Sukoharjo, Kabupaten Sukoharjo, Jawa Tengah, Indonesia',
  social: {
    instagram: '',
    linkedin: '',
    facebook: '',
    youtube: '',
  },
  hours: 'Senin–Sabtu, 08.00–17.00 WIB',
};

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const nav: NavItem[] = [
  {
    label: 'Profil Perusahaan',
    href: '/profil/',
    children: [
      {
        label: 'Tentang Kami',
        href: '/profil/tentang/',
        description: 'Sejarah, visi, misi, dan nilai-nilai kami.',
      },
      {
        label: 'Visi & Misi',
        href: '/profil/#visi-misi',
        description: 'Visi dan misi perusahaan.',
      },
      {
        label: 'Budaya & Nilai',
        href: '/profil/#budaya',
        description: 'Tujuh nilai BER-CBM.',
      },
      {
        label: 'Kontak',
        href: '/kontak/',
        description: 'Hubungi tim kami.',
      },
    ],
  },
  {
    label: 'Maklon',
    href: '/maklon/',
    children: [
      {
        label: 'Layanan Maklon',
        href: '/maklon/layanan/',
        description: 'Layanan OEM, ODM, dan white label herbal.',
      },
      {
        label: 'Produk',
        href: '/maklon/produk/',
        description: 'Katalog produk brand kami dan maklon klien.',
      },
      {
        label: 'Cara Maklon',
        href: '/maklon/proses/',
        description: 'Tahapan dari formulasi hingga pengiriman.',
      },
      {
        label: 'Perizinan',
        href: '/maklon/gratis-perizinan/',
        description: 'Program gratis izin BPOM, HAKI, dan laboratorium.',
      },
      {
        label: 'Sertifikasi',
        href: '/maklon/sertifikasi/',
        description: 'BPOM, GMP, Halal, dan izin produksi lainnya.',
      },
      {
        label: 'Nilai & Keunggulan',
        href: '/maklon/#keunggulan',
        description: 'Kenapa bekerja sama dengan kami.',
      },
    ],
  },
];

export const footerNav = [
  {
    title: 'Profil Perusahaan',
    links: [
      { label: 'Tentang Kami', href: '/profil/tentang/' },
      { label: 'Visi & Misi', href: '/profil/#visi-misi' },
      { label: 'Budaya & Nilai', href: '/profil/#budaya' },
      { label: 'Kontak', href: '/kontak/' },
    ],
  },
  {
    title: 'Maklon',
    links: [
      { label: 'Layanan Maklon', href: '/maklon/layanan/' },
      { label: 'Produk', href: '/maklon/produk/' },
      { label: 'Cara Maklon', href: '/maklon/proses/' },
      { label: 'Perizinan', href: '/maklon/gratis-perizinan/' },
      { label: 'Sertifikasi', href: '/maklon/sertifikasi/' },
    ],
  },
];