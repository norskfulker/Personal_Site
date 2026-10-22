import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Clock, Globe2, Loader2, Video, X } from 'lucide-react';
import { CONTACT_URL } from '../data/content';
import { ease } from '../lib/anim';
import { palettes } from '../lib/palettes';

const BookingContext = createContext(null);

// null outside the provider, so a CTA without one falls back to a plain link.
export const useBooking = () => useContext(BookingContext);

// The public cal.com booking page, framed. (cal.com's /embed page stays blank without its loader script.)
// Visitors book straight on cal.com; this site collects nothing.
const calendarUrl = (() => {
  const url = new URL(CONTACT_URL);
  url.searchParams.set('layout', 'month_view');
  url.searchParams.set('theme', 'dark');
  return url.toString();
})();

// Facts read from the live cal.com event (30 min, Google Meet). Keep in sync if the event changes.
const facts = [
  { icon: Clock, text: '30 minutes' },
  { icon: Video, text: 'Google Meet' },
  { icon: Globe2, text: 'Times in your time zone' },
];

const Scheduler = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-[680px] overflow-hidden rounded-3xl bg-[#101012] ring-1 ring-white/10 md:h-[70svh] md:min-h-[600px]">
      <AnimatePresence>
        {!loaded && (
          <motion.div key="loading" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0 grid place-items-center">
            <div className="flex items-center gap-3 text-sm text-white/55">
              <Loader2 size={16} className="animate-spin" /> Loading available times…
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <iframe
        src={calendarUrl}
        title="Book a 30-minute call on cal.com"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

const BookingDialog = ({ onClose }) => {
  const panelRef = useRef(null);

  // Escape closes, Tab stays inside, focus returns to the button that opened the dialog.
  useEffect(() => {
    const opener = document.activeElement;
    const panel = panelRef.current;
    panel?.querySelector('[data-autofocus]')?.focus();
    window.lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') return onClose();
      if (e.key !== 'Tab' || !panel) return;
      const items = [...panel.querySelectorAll('a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])')];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      window.lenis?.start();
      opener?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center md:items-center md:p-6">
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-night/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={onClose}
      />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ duration: 0.55, ease }}
        className="relative flex max-h-[94svh] w-full max-w-[1080px] flex-col overflow-hidden rounded-t-[2rem] bg-night text-white shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/10 md:rounded-4xl"
        data-lenis-prevent
      >
        {/* Soft colour behind the header only, so the calendar stays calm. */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-56 overflow-hidden opacity-60">
          {palettes.violet.slice(0, 2).map((b, i) => (
            <div key={i} className={`blob ${b.cls}`} style={{ '--c': b.c }} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-night" />
        </div>

        <div className="relative flex items-start justify-between gap-6 px-5 pb-5 pt-6 md:px-8 md:pt-7">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-lg font-semibold tracking-tight text-ink">SM</div>
            <div>
              <h2 id="booking-title" className="mt-1 text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-[1.9rem]">
                Schedule your slot
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ul className="hidden flex-wrap justify-end gap-2 lg:flex">
              {facts.map((f) => (
                <li key={f.text} className="flex items-center gap-2 rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[13px] text-white/75 ring-1 ring-white/10">
                  <f.icon size={14} className="text-white/55" /> {f.text}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={onClose}
              data-autofocus
              aria-label="Close"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition-colors hover:bg-white/20"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="relative flex-1 overflow-y-auto px-3 pb-3 md:px-5 md:pb-5">
          <Scheduler />

          <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-4 text-xs text-white/45">
            <span>30 minutes on Google Meet. No cost, no obligation.</span>
            <a href={CONTACT_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-white/65 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white">
              Open on cal.com <ArrowUpRight size={13} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const BookingProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const show = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <BookingContext.Provider value={show}>
      {children}
      <AnimatePresence>{open && <BookingDialog key="booking" onClose={close} />}</AnimatePresence>
    </BookingContext.Provider>
  );
};
