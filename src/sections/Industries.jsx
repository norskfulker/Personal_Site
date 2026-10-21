import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Eyebrow, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { industries } from '../data/content';

const Marquee = () => {
  const row = [...industries, ...industries];
  return (
    <div className="mask-fade-x relative overflow-hidden border-y border-line py-6">
      <motion.div
        className="flex w-max gap-12"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {row.map((ind, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap text-4xl tracking-tightest text-ink/80 md:text-6xl">
            {ind.name}
            <span className="h-3 w-3 rounded-full bg-gradient-to-br from-royal to-aqua" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Industries = () => {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section className="bg-white py-28 md:py-40">
      <div className="container-x mb-14">
        <Eyebrow>Who we work with</Eyebrow>
        <h2 className="h-section mt-6 max-w-3xl">
          <SplitWords text="Built for teams making big moves" />
        </h2>
      </div>

      <Marquee />

      <div className="container-x mt-16 grid gap-10 md:grid-cols-12">
        <ul className="md:col-span-5">
          {industries.map((ind, i) => (
            <li key={ind.name}>
              <button
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group flex w-full items-center justify-between border-b border-line py-5 text-left"
              >
                <span className={`text-2xl tracking-tight transition-colors duration-300 md:text-3xl ${active === i ? 'text-ink' : 'text-ink/35'}`}>{ind.name}</span>
                <motion.span
                  animate={{ scale: active === i ? 1 : 0, opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="h-2.5 w-2.5 rounded-full bg-royal"
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-navy-900 md:col-span-7">
          {/* Every image is mounted (and downloaded) up front, so hovering only crossfades: no network wait. */}
          {industries.map((ind, i) => (
            <motion.img
              key={ind.name}
              src={ind.image}
              alt=""
              decoding="async"
              initial={false}
              animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.08 }}
              transition={{ duration: 0.6, ease }}
              className="absolute inset-0 h-full w-full object-cover will-change-transform"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/10 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease, delay: 0.1 } }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.12 } }}
              >
                <h3 className="mb-2 text-3xl tracking-tight">{current.name}</h3>
                <p className="max-w-md text-white/75">{current.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
