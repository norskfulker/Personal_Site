import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CTAButton, Mesh, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { useReady } from '../lib/page';
import { INTRO, services } from '../data/content';

const Hero = () => {
  const ready = useReady();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <section id="top" ref={ref} className="relative bg-paper">
      <div className="relative flex min-h-[100svh] flex-col overflow-hidden rounded-b-[2rem] bg-night text-white md:rounded-b-[3rem]">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0 will-change-transform">
          <Mesh />
          <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/20 to-night/90" />
        </motion.div>
        <div className="grid-lines absolute inset-0" />

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="container-x relative flex flex-1 flex-col items-center justify-center pb-16 pt-32 text-center md:pt-36"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="mb-8 text-sm font-medium text-white/55"
          >
            Srikanta Magaji · Founder-consultant, based in India
          </motion.p>

          <h1 className="h-display text-[17vw] sm:text-8xl md:text-[7.5rem] lg:text-[8.5rem]">
            <span className="block">{ready && <SplitWords text="Market it." animateOnMount />}</span>
            <span className="block">{ready && <SplitWords text="Advise it." animateOnMount delay={0.1} />}</span>
            <span className="block">{ready && <SplitWords text="Audit it." animateOnMount delay={0.2} wordClassName="text-gradient" />}</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: 0.6 }}
            className="mt-10 flex flex-col items-center"
          >
            <p className="max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">{INTRO}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <CTAButton variant="bright" size="lg" />
              <Link
                to="/pricing"
                className="rounded-full px-6 py-3.5 text-[15px] font-medium text-white ring-1 ring-white/20 transition-colors hover:bg-white/10"
              >
                See pricing
              </Link>
            </div>
          </motion.div>

        </motion.div>

        {/* The three services as a hairline strip: a quick map of the page below. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease, delay: 1 }}
          className="relative hidden border-t border-white/10 md:block"
        >
          <div className="container-x grid grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.title}
                to={`/${s.slug}`}
                className="group flex items-center gap-4 border-white/10 py-6 text-left transition-colors [&:not(:first-child)]:border-l [&:not(:first-child)]:pl-6"
              >
                <span className="label text-white/40 transition-colors group-hover:text-white">0{i + 1}</span>
                <span className="text-[15px] font-medium text-white/80 transition-colors group-hover:text-white">{s.title}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
