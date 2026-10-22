export const ease = [0.22, 1, 0.36, 1];

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.lenis) window.lenis.scrollTo(el, { offset: -84, duration: 1.4 });
  else el.scrollIntoView({ behavior: 'smooth' });
};

// Feeds the pointer position to CSS so a .spot card lights up under the cursor.
export const trackSpot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`);
};
