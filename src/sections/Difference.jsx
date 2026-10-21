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
          <SplitWords text="Why teams choose us" />
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease }}
          className="rounded-3xl bg-mist p-8 md:p-12"
        >
          <h3 className="text-2xl tracking-tight text-slate">Typical agencies</h3>
          <p className="mt-3 text-slate">Many engagements deliver recommendations, then fall short during implementation.</p>
          <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 space-y-4">
            {comparison.others.map((t) => (
              <motion.li key={t} variants={item} className="flex items-start gap-3 text-slate">
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
          className="grain relative overflow-hidden rounded-3xl bg-gradient-to-br from-royal via-royal-600 to-navy-800 p-8 text-white md:p-12"
        >
          <motion.div
            className="glow absolute -right-32 -top-32 h-96 w-96 [--glow:rgba(62,230,193,0.45)]"
            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <h3 className="relative text-2xl tracking-tight">Working with us</h3>
          <p className="relative mt-3 text-white/75">Strategy and execution from one team, measured by real results.</p>
          <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mt-10 space-y-4">
            {comparison.me.map((t) => (
              <motion.li key={t} variants={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-royal"><Check size={13} strokeWidth={3} /></span>
                {t}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-y-12 border-t border-line pt-14 md:grid-cols-4">
        {facts.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: i * 0.1 }}
            className="px-2"
          >
            <span className="block bg-gradient-to-br from-ink to-royal bg-clip-text text-3xl tracking-tightest text-transparent md:text-4xl">{f.title}</span>
            <div className="mt-3 text-slate">{f.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Difference;
