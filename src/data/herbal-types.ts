export type HerbalService = {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  minOrder: string;
};

export type Product = {
  slug: string;
  name: string;
  category:
    | 'Jamu'
    | 'Serbuk'
    | 'Teh'
    | 'Minyak'
    | 'Lotion'
    | 'Kapsul'
    | 'Madu'
    | 'Cuka'
    | 'Sari Kurma';
  group: 'Brand Kami' | 'Maklon Klien';
  form?: string;
  size?: string;
  sizes?: string[];
  description?: string;
  keyIngredients?: string[];
  packaging?: string[];
  minOrder?: string;
  certification: string[];
  regNumber?: string;
  photo?: string;
  featured?: boolean;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
};

export type HerbalCertificate = {
  name: string;
  description: string;
  status: 'Aktif' | 'Proses' | 'Persiapan';
  detail: string;
};

export type Advantage = {
  icon: string;
  title: string;
  description: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type LicensingTier = {
  tier: string;
  range: string;
  order: string;
  cost: string;
  costNote: string;
  perks: string[];
  highlight?: boolean;
};

export type LicensingScopeItem = {
  icon: string;
  title: string;
  description: string;
  covered: boolean;
};