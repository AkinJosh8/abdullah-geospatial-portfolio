# Abdullah Azeez Portfolio

A premium, editorial-style portfolio for a geospatial analyst and urban systems researcher. The site presents project work in a polished, research-driven layout with a dark, technical aesthetic, responsive breakpoints, route-based project detail pages, and SEO metadata generation.

## Overview

This project is a Vite + React portfolio built to showcase:

- geospatial analysis and GIS work
- urban planning and climate-risk research
- land-use and accessibility studies
- project archives and downloadable documents
- static portfolio publishing with strong SEO metadata

## Stack

- React 19
- Vite 8
- React Router 7
- Framer Motion
- react-simple-maps + world-atlas
- custom CSS system with responsive design tokens

## Features

- responsive landing page with hero section and visual storytelling
- project archive page with structured cards and metadata
- dynamic project detail pages driven by slug-based routing
- document and map asset loading by project
- GitHub and document actions on project cards
- theme toggle support
- page-level SEO and canonical URL generation
- static-export-friendly build setup

## Project structure

```text
website_portfolio/
├── index.html
├── package.json
├── public/
│   ├── favicon.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md
```

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the local Vite URL shown in the terminal.

## Available scripts

```bash
npm run dev     # start the local development server
npm run build   # create a production build
npm run preview # preview the production build locally
npm run lint    # run lint checks
```

## Environment variables

This project supports a production site URL override for SEO canonical tags and metadata.

Create a `.env` file in the project root if needed:

```env
VITE_SITE_URL=https://your-domain.com
```

If this variable is not set, the app falls back to the current browser origin.

## Production build

```bash
npm run build
```

The generated production files are placed in the `dist/` directory and can be deployed to any static host such as Netlify, Vercel, Cloudflare Pages, or GitHub Pages.

> If you deploy to a static host with client-side routing, make sure your host is configured to redirect unknown routes to `index.html`.

## SEO notes

The site includes programmatic SEO helpers for:

- page titles
- meta descriptions
- Open Graph tags
- Twitter card metadata
- canonical URLs
- JSON-LD structured data

The logic lives in:

- `src/utils/seo.js`

## Notes for content updates

Core portfolio data is stored under:

- `src/data/projects.js`
- `src/data/projectAssets.js`

These files drive the homepage, archive, and project detail content. If you add or update a project, make sure the project slug and asset references remain consistent.

## Deployment checklist

- set production domain in `VITE_SITE_URL` or host environment
- verify `public/robots.txt` and `public/sitemap.xml`
- confirm project assets and PDFs are available in final deployment
- confirm client-side route rewrites are configured for detail pages

## License

This project is a portfolio website and is intended for personal or professional use. Add or adjust licensing terms as needed for your deployment and distribution requirements.
