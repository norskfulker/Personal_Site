import { useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { services } from '../data/content';

const Services = () => {
  const [active, setActive] = useState(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.6 });
  const y = useSpring(my, { stiffness: 180, damping: 22, mass: 0.6 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section id="services" className="relative bg-white py-28 md:py-40">
      <div className="container-x">
        <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>Services</Eyebrow>
            <h2 className="h-section mt-6">
              <SplitWords text="Strategic expertise for what comes next" />
            </h2>
          </div>
          <Reveal className="flex flex-col justify-end gap-6 md:col-span-4 md:col-start-9" delay={0.2}>
            <p className="text-lg text-slate">
              Focused engagements for the moments that decide whether a system — and the business on top of it — scales or stalls.
            </p>
            <div>
              <CTAButton variant="ghost">Discuss your challenge</CTAButton>
            </div>
          </Reveal>
        </div>

        <div className="relative" onMouseMove={onMove} onMouseLeave={() => setActive(null)}>
          {/* Floating preview that follows the cursor (desktop) */}
          <motion.div style={{ x, y }} className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block">
            <AnimatePresence>
              {active !== null && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.6, rotate: 6 }}
                  transition={{ duration: 0.45, ease }}
                  className="-ml-36 -mt-28 h-56 w-72 overflow-hidden rounded-2xl shadow-2xl"
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.img
                      key={active}
                      src={services[active].image}
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '-100%' }}
                      transition={{ duration: 0.5, ease }}
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="#contact"
              onMouseEnter={() => setActive(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.8, ease, delay: i * 0.06 }}
              className="group relative grid grid-cols-12 items-center gap-4 border-t border-line py-8 last:border-b md:py-10"
            >
              <motion.span
                className="absolute inset-0 origin-bottom bg-mist"
                initial={false}
                animate={{ scaleY: active === i ? 1 : 0 }}
                transition={{ duration: 0.5, ease }}
              />
              <span className="relative col-span-2 text-sm tabular-nums text-slate md:col-span-1">0{i + 1}</span>
              <h3 className="relative col-span-10 text-3xl tracking-tight transition-transform duration-500 group-hover:translate-x-3 md:col-span-5 md:text-5xl md:tracking-[-0.035em]">
                {s.title}
              </h3>
              <p className="relative col-span-12 text-slate md:col-span-4 md:col-start-8">{s.body}</p>
              <span className="relative col-span-12 hidden justify-end md:col-span-1 md:flex">
                <span className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-line transition-all duration-500 group-hover:rotate-45 group-hover:bg-royal group-hover:text-white group-hover:ring-royal">
                  <ArrowUpRight size={18} />
                </span>
              </span>
              <img src={s.image} alt="" loading="lazy" className="relative col-span-12 mt-2 aspect-video w-full rounded-2xl object-cover md:hidden" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
