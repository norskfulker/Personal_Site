export const ease = [0.22, 1, 0.36, 1];

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.lenis) window.lenis.scrollTo(el, { offset: -20, duration: 1.6 });
  else el.scrollIntoView({ behavior: 'smooth' });
};
