// Runs after `vite build`. The site is a single-page app, so without this every URL would serve the
// same HTML head and crawlers that skip JavaScript (LinkedIn, WhatsApp, X, Slack) would see the home
// page's title everywhere. For each page this writes dist/<page>.html with its own title, description,
// canonical URL, Open Graph / Twitter tags and JSON-LD, then writes sitemap.xml and robots.txt.
//
// Cloudflare serves /pricing from pricing.html (Pages, and Workers with html_handling "auto-trailing-slash"),
// and 404.html for anything else, so unknown URLs get a real 404 status.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  CONTACT_URL, EMAIL, LINKEDIN_URL, OG_IMAGE, PITCH, SITE_NAME, SITE_URL, TAGLINE, pageMeta, posts, services,
} from '../src/data/content.js';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const shell = readFileSync(`${dist}index.html`, 'utf8');
const abs = (path) => new URL(path, SITE_URL).href;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// The blog stays out of search until it has real posts (it is marked noindex in the app too).
const pages = Object.entries(pageMeta).map(([key, m]) => ({ key, ...m, noindex: key === 'blog' && posts.length === 0 }));
const notFound = {
  key: '404',
  path: '/404',
  title: 'Page not found | Srikanta',
  description: 'This page does not exist. Head back home or book a free 30-min call.',
  noindex: true,
};

// Who and what, for search engines. Facts only from the owner brief.
const person = {
  '@type': 'Person',
  '@id': `${abs('/')}#person`,
  name: 'Srikanta Magaji',
  jobTitle: 'Founder-consultant',
  url: abs('/'),
  email: `mailto:${EMAIL}`,
  sameAs: [LINKEDIN_URL],
  address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  knowsAbout: services.map((s) => s.title),
};
const business = {
  '@type': 'ProfessionalService',
  '@id': `${abs('/')}#business`,
  name: SITE_NAME,
  slogan: TAGLINE,
  description: PITCH,
  url: abs('/'),
  email: EMAIL,
  image: abs(OG_IMAGE.path),
  founder: { '@id': person['@id'] },
  address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  areaServed: 'Worldwide',
  potentialAction: { '@type': 'ReserveAction', target: CONTACT_URL, name: 'Book a free 30-minute call' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.body, url: abs(`/${s.slug}`) },
    })),
  },
};
const website = { '@type': 'WebSite', '@id': `${abs('/')}#website`, name: SITE_NAME, url: abs('/'), publisher: { '@id': business['@id'] }, inLanguage: 'en' };

const jsonLd = (page) => {
  const url = abs(page.path);
  const webpage = {
    '@type': page.key === 'about' ? 'AboutPage' : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': website['@id'] },
    about: { '@id': business['@id'] },
    inLanguage: 'en',
  };
  const graph = [website, person, business, webpage];
  if (page.path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: abs('/') },
        { '@type': 'ListItem', position: 2, name: page.title.split(' | ')[0], item: url },
      ],
    });
  }
  // `<` is escaped so the JSON can never close the script tag early.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
};

const head = (page) => {
  const url = abs(page.path);
  const image = abs(OG_IMAGE.path);
  return [
    page.key !== '404' && `<link rel="canonical" href="${esc(url)}" />`,
    `<meta name="robots" content="${page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:image:width" content="${OG_IMAGE.width}" />`,
    `<meta property="og:image:height" content="${OG_IMAGE.height}" />`,
    `<meta property="og:image:alt" content="${esc(OG_IMAGE.alt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
    `<meta name="twitter:image:alt" content="${esc(OG_IMAGE.alt)}" />`,
    page.key !== '404' && `<script type="application/ld+json">${jsonLd(page)}</script>`,
  ]
    .filter(Boolean)
    .join('\n    ');
};

const marker = /<!-- seo:head[\s\S]*?-->/;
if (!marker.test(shell)) throw new Error('index.html is missing the <!-- seo:head --> marker');

const render = (page) =>
  shell
    // Function replacers, so a "$" in copy (the $4,500 price) is never read as a regex group.
    .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${esc(page.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, () => `<meta name="description" content="${esc(page.description)}" />`)
    .replace(marker, () => head(page));

const fileFor = (path) => (path === '/' ? 'index.html' : `${path.slice(1)}.html`);
for (const page of [...pages, notFound]) writeFileSync(`${dist}${fileFor(page.path)}`, render(page));

// Sitemap: every indexable page. lastmod is the build date.
const today = new Date().toISOString().slice(0, 10);
const indexable = pages.filter((p) => !p.noindex);
writeFileSync(
  `${dist}sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable
  .map((p) => `  <url>\n    <loc>${esc(abs(p.path))}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${p.path === '/' ? '1.0' : '0.8'}</priority>\n  </url>`)
  .join('\n')}
</urlset>
`,
);

writeFileSync(`${dist}robots.txt`, `User-agent: *\nAllow: /\n\nSitemap: ${abs('/sitemap.xml')}\n`);

console.log(`seo: ${pages.length + 1} page heads, sitemap with ${indexable.length} URLs, robots.txt`);
