import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { CTAButton } from './motion';
import { ease } from '../lib/anim';

// Keeps the one action we want within thumb's reach once the hero is gone.
// Steps aside when the contact section or footer (both have their own CTA) is on screen.
const StickyCTA = () => {
  const { scrollY } = useScroll();
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => setPastHero(y > window.innerHeight * 0.9));

  useEffect(() => {
    const els = [document.getElementById('contact'), document.querySelector('footer')].filter(Boolean);
    const seen = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target, e.isIntersecting));
        setAtContact([...seen.values()].some(Boolean));
      },
      { threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const show = pastHero && !atContact;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="fixed inset-x-0 bottom-3 z-40 flex justify-center px-3 md:bottom-5"
        >
          <div className="flex w-full max-w-[560px] items-center justify-between gap-3 rounded-full bg-night/90 py-2 pl-5 pr-2 text-white shadow-[0_20px_60px_-15px_rgba(5,5,7,0.5)] ring-1 ring-white/10 backdrop-blur-xl">
            <span className="flex items-center gap-2.5 text-sm font-medium">
              <span className="hidden sm:inline">Free 30 minutes. Plain answers.</span>
              <span className="sm:hidden">Free 30-min call</span>
            </span>
            <CTAButton variant="bright" className="!gap-3 !py-1.5 !pl-5 !text-[14px]">
              <span className="hidden sm:inline">Book a free 30-min call</span>
              <span className="sm:hidden">Book now</span>
            </CTAButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
