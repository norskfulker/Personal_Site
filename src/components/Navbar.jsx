import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Logo from '../assets/Logo.svg';
import { CTA_LABEL, navLinks } from '../data/content';
import { CTAButton } from './motion';
import { ease, scrollToId } from '../lib/anim';

// The section whose box crosses a line ~35% down the viewport is the one you are reading.
const useActiveSection = (ids) => {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const seen = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.isIntersecting));
        setActive(ids.find((id) => seen.get(id)) ?? null);
      },
      { rootMargin: '-35% 0px -64% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);
  return active;
};

const sectionIds = navLinks.map((l) => l.id);

const Navbar = () => {
  const { scrollY } = useScroll();
  const [onHero, setOnHero] = useState(true);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const active = useActiveSection(sectionIds);
  // Hover wins while the pointer is on the menu; otherwise the pill rests on the section in view.
  const marked = hovered ?? active;

  useMotionValueEvent(scrollY, 'change', (y) => {
    setOnHero(y < window.innerHeight * 0.85);
  });

  useEffect(() => {
    if (!window.lenis) return;
    if (open) window.lenis.stop();
    else window.lenis.start();
  }, [open]);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 350 : 0);
  };

  const dark = onHero || open;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3"
      >
        <nav
          className={`mx-auto flex max-w-[1280px] items-center justify-between rounded-full py-2.5 pl-5 pr-2.5 transition-all duration-500 ${
            dark ? 'bg-transparent' : 'bg-white/90 shadow-[0_8px_30px_-12px_rgba(10,16,36,0.18)] ring-1 ring-ink/5 backdrop-blur-md'
          }`}
        >
          <button onClick={() => go('top')} aria-label="Back to top" className="shrink-0">
            <img src={Logo} alt="Srikanta Magaji" className={`h-5 w-auto transition duration-500 md:h-6 ${dark ? 'brightness-0 invert' : ''}`} />
          </button>

          <ul className="hidden items-center gap-0.5 lg:flex" onMouseLeave={() => setHovered(null)}>
            {navLinks.map((l) => {
              const on = marked === l.id;
              return (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    onMouseEnter={() => setHovered(l.id)}
                    aria-current={active === l.id ? 'true' : undefined}
                    className={`relative px-4 py-2 text-[14px] font-medium transition-colors duration-300 ${
                      on ? (dark ? 'text-ink' : 'text-white') : dark ? 'text-white/80 hover:text-white' : 'text-slate hover:text-ink'
                    }`}
                  >
                    {on && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                        className={`absolute inset-0 rounded-full ${dark ? 'bg-white' : 'bg-ink'}`}
                      />
                    )}
                    <span className="relative">{l.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <CTAButton className="hidden !py-1.5 !text-[14px] md:inline-flex" variant={dark ? 'aqua' : 'primary'}>
              {CTA_LABEL}
            </CTAButton>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className={`relative grid h-11 w-11 place-items-center rounded-full lg:hidden ${dark ? 'bg-white/10 text-white' : 'bg-ink text-white'}`}
            >
              <motion.span animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }} className="absolute h-[1.5px] w-5 bg-current" />
              <motion.span animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }} className="absolute h-[1.5px] w-5 bg-current" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-navy-900 px-6 pb-10 pt-28 lg:hidden"
          >
            <ul className="space-y-2">
              {navLinks.map((l, i) => (
                <li key={l.id} className="overflow-hidden">
                  <motion.button
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.05 }}
                    onClick={() => go(l.id)}
                    className={`text-5xl font-semibold tracking-tightest ${active === l.id ? 'text-aqua' : 'text-white'}`}
                  >
                    {l.name}
                  </motion.button>
                </li>
              ))}
            </ul>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} exit={{ opacity: 0 }}>
              <CTAButton variant="aqua" size="lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
