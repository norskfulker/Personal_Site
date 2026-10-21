import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eyebrow, Reveal, SplitWords } from '../components/motion';
import { approach } from '../data/content';

// Cards pin on top of each other; earlier cards shrink and dim as later ones arrive.
const StepCard = ({ item, index, total, progress }) => {
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - index) * 0.05]);
  // Dim earlier cards with an overlay's opacity rather than filter: brightness (which repaints every frame).
  const dim = useTransform(progress, [start, 1], [0, (total - index - 1) * 0.12]);
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  return (
    <div className="sticky h-[78vh] min-h-[520px]" style={{ top: `calc(12vh + ${index * 28}px)` }}>
      <motion.article
        style={{ scale }}
        className="relative grid h-full origin-top overflow-hidden rounded-[2rem] bg-white will-change-transform shadow-[0_-20px_60px_-30px_rgba(10,16,36,0.25)] md:grid-cols-2"
      >
        <div className="flex flex-col justify-between p-8 md:p-14">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-royal-100 px-3 py-1 text-sm font-medium text-royal">Step {item.step}</span>
            <span className="text-7xl font-light tracking-tightest text-ink/10 md:text-9xl">{item.step}</span>
          </div>
          <div>
            <h3 className="mb-4 text-4xl tracking-tightest md:text-6xl">{item.title}</h3>
            <p className="max-w-md text-lg text-slate">{item.body}</p>
          </div>
        </div>
        <div ref={imgRef} className="relative hidden overflow-hidden md:block">
          <motion.img src={item.image} alt="" loading="lazy" style={{ scale: imgScale }} className="absolute inset-0 h-full w-full object-cover will-change-transform" />
          <div className="absolute inset-0 bg-gradient-to-tr from-royal/25 to-transparent" />
        </div>
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-navy-950" />
      </motion.article>
    </div>
  );
};

const Approach = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section id="approach" className="bg-mist pb-28 pt-28 md:pb-40 md:pt-40">
      <div className="container-x">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Eyebrow className="justify-center">Our Approach</Eyebrow>
          <h2 className="h-section mt-6">
            <SplitWords text="How every engagement runs" />
          </h2>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-slate">Three steps. Clear owners. No surprises.</p>
          </Reveal>
        </div>

        <div ref={ref} className="relative space-y-[8vh]">
          {approach.map((item, i) => (
            <StepCard key={item.step} item={item} index={i} total={approach.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
