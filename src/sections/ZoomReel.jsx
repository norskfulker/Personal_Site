import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Video } from '../components/motion';
import { videos } from '../data/content';

// Pinned video that grows from a framed card to full-bleed as you scroll.
// Only transform and opacity are animated so the browser never re-lays out the page.
const ZoomReel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const scale = useTransform(scrollYProgress, [0, 0.6], [0.45, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.6], ['3rem', '0rem']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const leftX = useTransform(scrollYProgress, [0, 0.5], ['0%', '-60%']);
  const rightX = useTransform(scrollYProgress, [0, 0.5], ['0%', '60%']);
  const sideOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const captionOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.55, 0.8], [60, 0]);

  return (
    <section ref={ref} className="relative h-[280vh] bg-paper">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.span style={{ x: leftX, opacity: sideOpacity }} className="absolute left-5 top-1/2 z-10 -translate-y-1/2 text-4xl font-semibold tracking-tightest text-ink md:left-12 md:text-7xl">
          Less noise.
        </motion.span>
        <motion.span style={{ x: rightX, opacity: sideOpacity }} className="text-gradient absolute right-5 top-1/2 z-10 -translate-y-1/2 text-4xl font-semibold tracking-tightest md:right-12 md:text-7xl">
          More signal.
        </motion.span>

        <motion.div style={{ scale, borderRadius: radius }} className="absolute inset-0 overflow-hidden will-change-transform">
          <Video src={videos.boardroom} style={{ scale: videoScale }} className="absolute inset-0 h-full w-full will-change-transform" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-violet/30" />
          <motion.div style={{ opacity: captionOpacity, y: captionY }} className="container-x absolute inset-x-0 bottom-12 text-white md:bottom-20">
            <p className="max-w-3xl text-4xl font-semibold leading-[1] tracking-tightest md:text-7xl">
              Decisions you can <span className="text-soft">stand behind.</span>
            </p>
            <p className="mt-6 max-w-md text-white/70">
              I sit with founders, owners and public-sector teams until the plan is clear and the work is moving.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ZoomReel;
