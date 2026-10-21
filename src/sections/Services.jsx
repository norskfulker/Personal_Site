import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { CONTACT_URL, services } from '../data/content';

const Services = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className="relative bg-white py-28 md:py-40">
      <div className="container-x">
        <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>Services</Eyebrow>
            <h2 className="h-section mt-6">
              <SplitWords text="Three services. One team accountable." />
            </h2>
          </div>
          <Reveal className="flex flex-col justify-end gap-6 md:col-span-4 md:col-start-9" delay={0.2}>
            <p className="text-lg text-slate">
              We market it, advise on it and audit it. Hire us for one, or let one team cover all three.
            </p>
            <div>
              <CTAButton variant="ghost">Discuss your project</CTAButton>
            </div>
          </Reveal>
        </div>

        <div className="relative" onMouseLeave={() => setActive(null)}>
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={CONTACT_URL}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setActive(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.8, ease, delay: i * 0.06 }}
              className="group relative grid grid-cols-12 gap-4 border-t border-line py-10 last:border-b md:py-12"
            >
              <motion.span
                className="absolute inset-0 origin-bottom bg-mist"
                initial={false}
                animate={{ scaleY: active === i ? 1 : 0 }}
                transition={{ duration: 0.5, ease }}
              />
              <span className="relative col-span-2 pt-2 text-sm tabular-nums text-slate md:col-span-1">0{i + 1}</span>
              <div className="relative col-span-10 md:col-span-5">
                <h3 className="text-3xl tracking-tight transition-transform duration-500 group-hover:translate-x-3 md:text-[2.6rem] md:leading-[1.05] md:tracking-[-0.035em]">
                  {s.title}
                </h3>
                <p className="mt-4 text-lg text-slate">{s.body}</p>
              </div>
              <div className="relative col-span-12 md:col-span-5 md:col-start-7">
                <ul className="space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-ink/80">
                      <Check size={16} className="mt-1 shrink-0 text-royal" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 inline-block rounded-full bg-royal-100 px-3 py-1 text-sm text-royal">{s.pricing}</p>
              </div>
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
