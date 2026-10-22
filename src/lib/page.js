import { createContext, useContext, useEffect } from 'react';
import { SITE_URL } from '../data/content';

// True once the intro curtain has lifted, so page heroes can start their entrance on time.
export const ReadyContext = createContext(true);
export const useReady = () => useContext(ReadyContext);

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

// One title and description per page (owner brief SEO rules), plus the canonical URL and the
// social tags. The same values are written into each page's HTML at build time (scripts/seo.mjs),
// so crawlers that do not run JavaScript still see them.
export const usePageMeta = ({ title, description, path, noindex = false }) => {
  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    if (path) {
      const url = new URL(path, SITE_URL).href;
      setCanonical(url);
      setMeta('property', 'og:url', url);
    }
  }, [title, description, path, noindex]);
};
