import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { industries } from '../data/content';


// Names alternate full and dimmed ink, with a small dot between each.
const Marquee = () => {
  const row = [...industries, ...industries];
  return (
    <div className="mask-fade-x relative overflow-hidden border-y border-line bg-white py-7">
      <div className="flex w-max animate-marquee gap-10">
        {row.map((ind, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap text-5xl font-semibold tracking-tightest text-ink md:text-7xl">
            <span className={i % 2 ? 'text-ink/25' : ''}>{ind.name}</span>
            <span className="h-2 w-2 rounded-full bg-ink/20" />
          </span>
        ))}
      </div>
    </div>
  );
};

const Industries = () => {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section id="who" className="bg-paper py-24 md:py-36">
      <div className="container-x mb-14">
        <Eyebrow>Who I work with</Eyebrow>
        <h2 className="h-section mt-6 max-w-4xl">
          <SplitWords text="Founders, operators" /> <SplitWords text="and public teams" delay={0.2} wordClassName="text-soft" />
        </h2>
      </div>

      <Marquee />

      <div className="container-x mt-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <ul>
            {industries.map((ind, i) => (
              <li key={ind.name}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group relative flex w-full items-center gap-5 border-b border-line py-5 text-left"
                >
                  <span className={`label w-8 transition-colors duration-300 ${active === i ? 'text-ink' : 'text-ink/30'}`}>0{i + 1}</span>
                  <span className={`text-2xl font-semibold tracking-[-0.03em] transition-colors duration-300 md:text-3xl ${active === i ? 'text-ink' : 'text-ink/30'}`}>
                    {ind.name}
                  </span>
                  {active === i && (
                    <motion.span layoutId="who-bar" transition={{ type: 'spring', stiffness: 380, damping: 34 }} className="absolute inset-x-0 -bottom-px h-[2px] bg-ink" />
                  )}
                </button>
              </li>
            ))}
          </ul>
          <Reveal className="mt-10">
            <p className="mb-5 text-lg font-medium text-ink">Sound like you? Tell me what you are working on.</p>
            <CTAButton size="lg" />
          </Reveal>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-4xl bg-night md:col-span-7">
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
          <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/10 to-transparent" />
          <span className="label absolute left-6 top-6 rounded-full bg-night/50 px-3 py-1.5 text-white ring-1 ring-white/20 backdrop-blur">
            0{active + 1} / 0{industries.length}
          </span>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease, delay: 0.1 } }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.12 } }}
              >
                <h3 className="mb-2 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{current.name}</h3>
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
