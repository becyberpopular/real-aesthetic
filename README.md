# Welcome to your AI Studio project

This project was built with AI Studio.

## Development

Prefer working locally? You need Node.js and npm.

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Real Aesthetic Medical Spa — where things live

The site is bilingual. Spanish is the default (`/`, `/sobre/`, `/tratamientos/…`) and English mirrors it
(`/en/`, `/about/`, `/procedures/…`). Every page has a language switcher linking to its counterpart.

| What | Where |
| --- | --- |
| Main pages (home, about, catalog, contact, club, financing, legal, 404) | `src/views/es/*.tsx`, `src/views/en/*.tsx` (+ `*.head.json` for SEO tags) |
| Treatment pages (73 per language) | One JSON file each in `src/content/treatments/es/` and `src/content/treatments/en/`, rendered by `src/site/TreatmentPage.tsx` |
| Page styles | `src/styles/pages/*.css` (each page loads only its own stylesheet) |
| Menus, footer, related treatments | `src/site/MegaMenu.tsx`, `MobileNav.tsx`, `SiteFooter.tsx`, `RelatedTreatments.tsx` |
| Menu treatment lists / related treatments | `src/site/treatments-nav.ts`, `src/site/related-data.ts`, `src/site/catalog-data.ts` |
| Scroll effects, catalog filters, Cherry widget | `src/site/behaviors.ts` |
| Images | `public/img/` |
