import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Eyebrow, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { comparison, facts } from '../data/content';

const list = {
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const Difference = () => (
  <section className="bg-white py-28 md:py-40">
    <div className="container-x">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <Eyebrow className="justify-center">The Difference</Eyebrow>
        <h2 className="h-section mt-6">
          <SplitWords text="One person," /> <SplitWords text="not a roster" delay={0.15} wordClassName="text-soft" />
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease }}
          className="rounded-4xl border border-line bg-fog p-8 md:p-12"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-muted">Typical agencies</h3>
          <p className="mt-3 text-muted">Many engagements deliver recommendations, then fall short during implementation.</p>
          <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 space-y-4">
            {comparison.others.map((t) => (
              <motion.li key={t} variants={item} className="flex items-start gap-3 text-muted line-through decoration-ink/20">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink/5"><X size={13} /></span>
                {t}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease, delay: 0.12 }}
          className="relative overflow-hidden rounded-4xl bg-night p-8 text-white md:p-12"
        >
          <h3 className="relative text-2xl font-semibold tracking-tight">Working with me</h3>
          <p className="relative mt-3 text-white/70">Strategy and execution from one person, measured by real results.</p>
          <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mt-10 space-y-4">
            {comparison.me.map((t) => (
              <motion.li key={t} variants={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-ink"><Check size={13} strokeWidth={3} /></span>
                {t}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <div className="mt-20 grid grid-cols-2 border-t border-line md:grid-cols-4">
        {facts.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: i * 0.1 }}
            className={`border-line px-2 pt-12 md:px-6 ${i % 2 ? 'border-l' : ''} ${i === 2 ? 'md:border-l' : ''}`}
          >
            <span className="block text-4xl font-semibold tracking-tightest md:text-5xl">{f.title}</span>
            <div className="label mt-3 text-muted">{f.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Difference;
