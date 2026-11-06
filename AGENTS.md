## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Workflow edit dan verifikasi

Jangan jalankan `check` + `build` + `deploy` setiap kali mengedit file. Itu memakan
±37 detik per perubahan, sedangkan dev server menyegarkan halaman dalam <1 detik.

- Saat mengedit: cukup lihat hasilnya di dev server (`http://localhost:4321`).
- `npm run check`: sekali di akhir rangkaian edit, bukan per file.
- `npm run deploy`: hanya saat pengguna meminta publikasi atau fitur selesai.
- `npm run deploy:gh`: publikasi ke GitHub Pages (build + push branch `gh-pages`).
- `npm run verify`: check + build sekaligus untuk verifikasi akhir.

Perintah `npm run` di project ini memakai binary lokal, lebih cepat daripada `npx`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
