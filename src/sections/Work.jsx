import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { work } from '../data/content';

const CaseCard = ({ item, index, large }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // Image starts zoomed in and settles as the card scrolls into view.
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.35, 1.05, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const frame = useTransform(scrollYProgress, [0, 0.35], [0.9, 1]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1, ease, delay: (index % 2) * 0.1 }}
      className={large ? 'md:col-span-12' : 'md:col-span-6'}
    >
      <motion.div style={{ scale: frame }} className={`relative overflow-hidden rounded-3xl will-change-transform ${large ? 'aspect-[16/7]' : 'aspect-[4/3]'}`}>
        <motion.img src={item.image} alt="" loading="lazy" style={{ scale, y }} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-ink">{item.tag}</span>
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <h3 className="text-3xl tracking-tightest md:text-5xl">{item.name}</h3>
          <p className="mt-2 max-w-xl text-white/80">{item.summary}</p>
        </div>
      </motion.div>
      <dl className="mt-5 grid gap-4 sm:grid-cols-3">
        {[
          ['Problem', item.problem],
          ['What I did', item.did],
          ['Result', item.result],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-white p-5">
            <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate">{label}</dt>
            <dd className="mt-2 text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </motion.article>
  );
};

const Work = () => (
  <section id="work" className="bg-mist py-28 md:py-40">
    <div className="container-x">
      <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <Eyebrow>Work</Eyebrow>
          <h2 className="h-section mt-6">
            <SplitWords text="Case studies" />
          </h2>
        </div>
        <Reveal delay={0.2}>
          <CTAButton variant="ghost">Start a conversation</CTAButton>
        </Reveal>
      </div>

      <div className="grid gap-x-6 gap-y-16 md:grid-cols-12">
        {work.map((item, i) => (
          <CaseCard key={item.name} item={item} index={i} large={i === 0 || (i === work.length - 1 && i % 2 === 1)} />
        ))}
      </div>
    </div>
  </section>
);

export default Work;
