import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { CTA_LABEL, navLinks, servicePages, services } from '../data/content';
import { CTAButton } from './motion';
import { ease } from '../lib/anim';

const servicePaths = services.map((s) => `/${s.slug}`);

// One dark glass pill that reads on both the dark and the light sections.
const Navbar = () => {
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [hovered, setHovered] = useState(null);
  // Hover wins while the pointer is on the menu; otherwise the pill rests on the current page.
  const current = servicePaths.includes(pathname) ? 'services' : pathname;
  const marked = hovered ?? current;

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40));

  useEffect(() => {
    if (!window.lenis) return;
    if (open) window.lenis.stop();
    else window.lenis.start();
  }, [open]);

  // Any navigation closes both menus (adjusted during render, so there is no flash of the old state).
  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpen(false);
    setMenu(false);
    setHovered(null);
  }

  const solid = scrolled || open || menu;
  const pill = (id) =>
    marked === id && (
      <motion.span layoutId="nav-pill" transition={{ type: 'spring', stiffness: 420, damping: 36 }} className="absolute inset-0 rounded-full bg-white" />
    );
  const linkCls = (id) => `relative flex items-center gap-1 px-4 py-2 text-[14px] font-medium transition-colors duration-300 ${marked === id ? 'text-ink' : 'text-white/70 hover:text-white'}`;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3"
        onMouseLeave={() => {
          setMenu(false);
          setHovered(null);
        }}
      >
        <nav
          className={`mx-auto flex max-w-[1200px] items-center justify-between rounded-full py-2 pl-5 pr-2 ring-1 transition-all duration-500 ${
            solid ? 'bg-night/80 shadow-[0_12px_40px_-12px_rgba(5,5,7,0.6)] ring-white/10 backdrop-blur-xl' : 'bg-transparent ring-transparent'
          }`}
        >
          <Link to="/" aria-label="Home" className="shrink-0">
            <img src={Logo} alt="Srikanta Magaji" className="h-5 w-auto brightness-0 invert md:h-6" />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            <li>
              <button
                onMouseEnter={() => {
                  setHovered('services');
                  setMenu(true);
                }}
                onClick={() => setMenu((m) => !m)}
                aria-expanded={menu}
                className={linkCls('services')}
              >
                {pill('services')}
                <span className="relative">Services</span>
                <ChevronDown size={14} className={`relative transition-transform duration-300 ${menu ? 'rotate-180' : ''}`} />
              </button>
            </li>
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  onMouseEnter={() => {
                    setHovered(l.path);
                    setMenu(false);
                  }}
                  aria-current={pathname === l.path ? 'page' : undefined}
                  className={linkCls(l.path)}
                >
                  {pill(l.path)}
                  <span className="relative">{l.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <CTAButton className="hidden !py-1.5 !text-[14px] md:inline-flex" variant="bright">
              {CTA_LABEL}
            </CTAButton>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="relative grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 lg:hidden"
            >
              <motion.span animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }} className="absolute h-[1.5px] w-5 bg-current" />
              <motion.span animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }} className="absolute h-[1.5px] w-5 bg-current" />
            </button>
          </div>
        </nav>

        {/* Services mega-menu: one colour card per service. */}
        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease }}
              className="mx-auto mt-2 hidden max-w-[1200px] lg:block"
            >
              <div className="grid grid-cols-3 gap-2 rounded-[1.75rem] bg-night/90 p-2 ring-1 ring-white/10 backdrop-blur-xl">
                {services.map((s) => (
                  <Link key={s.slug} to={`/${s.slug}`} className={`group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[1.4rem] p-6 text-white ring-1 ring-white/10 transition-colors hover:bg-white/[0.06]`}>
                    <div className="flex items-center justify-between">
                      <span className="label opacity-70">{servicePages[s.slug].eyebrow}</span>
                      <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                    <div>
                      <div className="text-xl font-semibold leading-tight tracking-[-0.02em]">{s.title}</div>
                      <p className="mt-1 text-sm opacity-75">{s.body}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto overflow-x-hidden bg-night px-6 pb-10 pt-28 lg:hidden"
            data-lenis-prevent
          >
            <div className="relative">
              <div className="label mb-3 text-white/40">Services</div>
              <ul className="space-y-1">
                {services.map((s, i) => (
                  <li key={s.slug} className="overflow-hidden">
                    <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.05 }}>
                      <Link to={`/${s.slug}`} className={`text-4xl font-semibold tracking-tightest ${pathname === `/${s.slug}` ? 'text-white' : 'text-white/50'}`}>
                        {s.short}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
              <div className="my-6 h-px bg-white/10" />
              <ul className="space-y-1">
                {navLinks.map((l, i) => (
                  <li key={l.path} className="overflow-hidden">
                    <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ duration: 0.6, ease, delay: 0.25 + i * 0.05 }}>
                      <Link to={l.path} className={`text-4xl font-semibold tracking-tightest ${pathname === l.path ? 'text-white' : 'text-white/50'}`}>
                        {l.name}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div className="relative mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} exit={{ opacity: 0 }}>
              <CTAButton variant="bright" size="lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
