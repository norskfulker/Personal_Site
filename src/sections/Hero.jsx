import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import { CTAButton, SplitWords, Video } from '../components/motion';
import { ease, scrollToId } from '../lib/anim';
import { PITCH, videos } from '../data/content';

const Hero = ({ ready }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const beamX = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[640px] bg-mist">
      <div className="grain absolute inset-0 overflow-hidden rounded-b-[2rem] bg-navy-950 md:rounded-b-[3rem]">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0 will-change-transform">
          {/* Plexus footage under the colour wash */}
          <Video src={videos.network} className="absolute inset-0 h-full w-full opacity-45" />

          {/* Animated gradient field */}
          <motion.div
            className="glow absolute -left-1/3 -top-1/3 h-[110vmax] w-[110vmax] [--glow:rgba(36,80,255,0.7)]"
            animate={{ x: ['0%', '12%', '-4%', '0%'], y: ['0%', '8%', '14%', '0%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="glow absolute -bottom-1/2 right-[-30%] h-[90vmax] w-[90vmax] [--glow:rgba(10,43,209,0.6)]"
            animate={{ x: ['0%', '-10%', '6%', '0%'], y: ['0%', '-12%', '-4%', '0%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Diagonal light beam, like the reference hero */}
          <motion.div
            style={{ x: beamX }}
            className="absolute left-[10%] top-[-30%] h-[160%] w-[38%] rotate-[38deg] bg-gradient-to-r from-transparent via-aqua/30 to-transparent"
            animate={{ opacity: [0.55, 0.9, 0.55] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-transparent to-navy-950/80" />
        </motion.div>

        <motion.div style={{ y: textY, opacity: textOpacity }} className="container-x relative flex h-full flex-col justify-between pb-10 pt-32 md:pb-14 md:pt-40">
          <h1 className="h-display max-w-5xl text-[15vw] text-white sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem]">
            <span className="block">
              {ready && <SplitWords text="Market it." animateOnMount />}
            </span>
            <span className="block">
              {ready && <SplitWords text="Advise it." animateOnMount delay={0.1} />}
            </span>
            <span className="block text-aqua">
              {ready && <SplitWords text="Audit it." animateOnMount delay={0.2} />}
            </span>
          </h1>

          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease, delay: 0.6 }}
              className="max-w-md"
            >
              <p className="mb-8 text-lg leading-relaxed text-white/75 md:text-xl">
                {PITCH}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/15 pt-8">
                <CTAButton variant="aqua" size="lg" />
                <button
                  onClick={() => scrollToId('pricing')}
                  className="text-[15px] font-semibold text-white underline decoration-white/30 decoration-2 underline-offset-[6px] transition-colors hover:decoration-aqua"
                >
                  See pricing
                </button>
              </div>
              <p className="mt-4 text-sm text-white/55">Free. 15 minutes. No obligation.</p>
            </motion.div>

            <motion.a
              href="#services"
              style={{ y: cardY }}
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={ready ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.1, ease, delay: 0.8 }}
              whileHover="hover"
              className="group relative hidden aspect-[4/3] w-[300px] overflow-hidden rounded-3xl ring-1 ring-white/15 md:block lg:w-[360px]"
            >
              <motion.div variants={{ hover: { scale: 1.08 } }} transition={{ duration: 0.8, ease }} className="absolute inset-0">
                <Video src={videos.office} className="h-full w-full" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-sm text-white">
                <span>See what we do</span>
                <motion.span variants={{ hover: { scale: 1.15 } }} className="grid h-9 w-9 place-items-center rounded-full bg-white/25">
                  <Play size={14} fill="currentColor" />
                </motion.span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
