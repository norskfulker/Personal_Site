# Project rules

This is Sri's consulting website (React + Vite + Tailwind + framer-motion, single page in `src/`). `legacy/` holds the previous portfolio code and is not built.

Before editing any copy, read [docs/site-context.md](docs/site-context.md). It is the owner's brief and its rules win: only the 3 listed services, only the listed facts about the owner, never invent testimonials, metrics or clients, and mark unknowns as "[owner to confirm]" (draft only). Never publish or deploy; the owner publishes manually.

Most copy lives in `src/data/content.js`; sections are in `src/sections/`.

SEO: each page's title, description and `path` live in `pageMeta` in `src/data/content.js`; `SITE_URL` there sets the domain. `npm run build` runs `scripts/seo.mjs`, which writes one HTML file per page (own head tags + JSON-LD), `sitemap.xml` and `robots.txt`. A new page needs a `pageMeta` entry. The share image and icons come from `python scripts/make-icons.py`.
