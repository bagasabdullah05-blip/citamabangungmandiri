import type { Lang } from './meta';

type Dict = Record<string, string>;

const loaders: Record<Lang, () => Promise<Dict>> = {
  en: async () => {
    const [a, b, c, d] = await Promise.all([
      import('./en-1'),
      import('./en-2'),
      import('./en-3'),
      import('./identity'),
    ]);
    return { ...a.en1, ...b.en2, ...c.en3, ...d.identityEn };
  },
  ms: async () => {
    const [a, b] = await Promise.all([import('./ms'), import('./identity')]);
    return { ...a.ms, ...b.identityMs };
  },
  zh: async () => {
    const [a, b, c, d, e] = await Promise.all([
      import('./zh-1'),
      import('./zh-2'),
      import('./zh-3a'),
      import('./zh-3b'),
      import('./identity'),
    ]);
    return { ...a.zh1, ...b.zh2, ...c.zh3a, ...d.zh3b, ...e.identityZh };
  },
};

const cache = new Map<Lang, Dict>();

export async function loadDict(lang: Lang): Promise<Dict> {
  const hit = cache.get(lang);
  if (hit) return hit;
  const dict = await loaders[lang]();
  cache.set(lang, dict);
  return dict;
}
