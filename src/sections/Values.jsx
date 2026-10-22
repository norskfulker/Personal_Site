import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, Handshake, Shield, Target } from 'lucide-react';
import { Eyebrow, ParallaxImage, Reveal, SplitWords } from '../components/motion';
import { ease, trackSpot } from '../lib/anim';
import { images, values } from '../data/content';

const icons = [Target, Shield, Handshake, BarChart3];

const Values = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const quoteY = useTransform(scrollYProgress, [0.4, 1], [80, -40]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-night py-28 text-white md:py-40">
      <div className="grid-lines absolute inset-0" />

      <div className="container-x relative">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <Eyebrow light className="justify-center">Values</Eyebrow>
          <h2 className="h-section mt-6">
            <SplitWords text="What I hold" /> <SplitWords text="myself to" delay={0.2} wordClassName="text-soft" />
          </h2>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Honest advice, clear ownership and practical thinking. That is how I earn repeat work.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((v, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={v.title}
                onMouseMove={trackSpot}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.9, ease, delay: (i % 2) * 0.12 }}
                className="spot group relative overflow-hidden rounded-4xl bg-white/[0.04] p-8 ring-1 ring-white/10 backdrop-blur-sm transition-colors duration-500 hover:ring-white/25 md:p-10"
              >
                <div className="mb-16 flex items-center justify-between md:mb-24">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-white`}>
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <span className="label text-white/30">0{i + 1}</span>
                </div>
                <h3 className="mb-3 text-3xl font-semibold tracking-[-0.03em]">{v.title}</h3>
                <p className="max-w-sm text-white/60">{v.body}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="relative mt-4 overflow-hidden rounded-4xl">
          <ParallaxImage src={images.mumbai} className="h-[70vh] min-h-[420px]" strength={14} />
          <div className="absolute inset-0 bg-gradient-to-tr from-night/90 via-night/40 to-transparent" />
          <motion.blockquote style={{ y: quoteY }} className="absolute bottom-10 left-8 right-8 max-w-2xl md:bottom-16 md:left-14">
            <p className="text-4xl font-semibold leading-[1] tracking-tightest md:text-6xl">
              Fewer guesses. <span className="text-soft">Better decisions.</span>
            </p>
            <footer className="label mt-5 text-white/55">My working rule.</footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};

export default Values;
