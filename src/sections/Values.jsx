import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Handshake, Shield, Sparkles, Target } from 'lucide-react';
import { Eyebrow, ParallaxImage, Reveal, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { img, values } from '../data/content';

const icons = [Target, Shield, Handshake, Sparkles];

const Values = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const glowY = useTransform(scrollYProgress, [0, 1], ['-20%', '40%']);
  const quoteY = useTransform(scrollYProgress, [0.4, 1], [80, -40]);

  return (
    <section ref={ref} className="grain relative overflow-hidden bg-navy-900 py-28 text-white md:py-40">
      <motion.div style={{ y: glowY }} className="glow pointer-events-none absolute left-1/2 top-0 h-[80vw] w-[80vw] -translate-x-1/2 [--glow:rgba(36,80,255,0.35)]" />

      <div className="container-x relative">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <Eyebrow light className="justify-center">Values</Eyebrow>
          <h2 className="h-section mt-6">
            <SplitWords text="The principles that guide my work" />
          </h2>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/65">
              Transparency, accountability and practical thinking — so you can make smarter decisions and trust the systems you build.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((v, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.9, ease, delay: (i % 2) * 0.12 }}
                className="group relative overflow-hidden rounded-3xl bg-white/[0.05] p-8 ring-1 ring-white/10 transition-colors duration-500 hover:bg-white/[0.09] md:p-10"
              >
                <div className="glow absolute -right-20 -top-20 h-56 w-56 opacity-0 transition-opacity duration-700 [--glow:rgba(62,230,193,0.35)] group-hover:opacity-100" />
                <div className="mb-16 grid h-11 w-11 place-items-center rounded-xl bg-white text-navy-900 md:mb-24">
                  <Icon size={20} strokeWidth={1.7} />
                </div>
                <h3 className="mb-3 text-2xl tracking-tight">{v.title}</h3>
                <p className="max-w-sm text-white/65">{v.body}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="relative mt-4 overflow-hidden rounded-3xl">
          <ParallaxImage src={img('photo-1449157291145-7efd050a4d0e', 1600)} className="h-[70vh] min-h-[420px]" strength={14} />
          <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/85 via-navy-900/30 to-transparent" />
          <motion.blockquote style={{ y: quoteY }} className="absolute bottom-10 left-8 right-8 max-w-2xl md:bottom-16 md:left-14">
            <p className="text-3xl leading-[1.1] tracking-tight md:text-5xl">
              “Features change. <span className="font-serif italic text-aqua">Systems endure.</span>”
            </p>
            <footer className="mt-5 text-sm text-white/60">— Srikanta Magaji</footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};

export default Values;
