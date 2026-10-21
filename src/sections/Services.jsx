import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { CONTACT_URL, services } from '../data/content';

const Services = () => (
  <section id="services" className="relative bg-mist py-24 md:py-36">
    <div className="container-x">
      <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12">
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
        </Reveal>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.a
            key={s.title}
            href={CONTACT_URL}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.8, ease, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="card card-hover group flex flex-col overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-royal"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={s.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1 text-sm font-bold tabular-nums text-ink">0{i + 1}</span>
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-7">
              <h3 className="text-2xl font-semibold leading-tight tracking-tight">{s.title}</h3>
              <p className="mt-3 text-slate">{s.body}</p>

              <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] text-ink/80">
                    <Check size={16} strokeWidth={2.6} className="mt-0.5 shrink-0 text-royal" />
                    {p}
                  </li>
                ))}
              </ul>

              <p className="mt-6 self-start rounded-full bg-royal-100 px-3 py-1 text-sm font-medium text-royal">{s.pricing}</p>

              <div className="mt-auto flex items-center justify-between pt-8">
                <span className="font-semibold text-ink transition-colors duration-300 group-hover:text-royal">Talk about this</span>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-royal">
                  <ArrowUpRight size={20} strokeWidth={2.4} />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-royal p-8 text-white shadow-[0_30px_70px_-30px_rgba(36,80,255,0.9)] md:mt-20 md:flex-row md:items-center md:p-10">
        <p className="max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">
          Not sure which one you need? That is what the free call is for.
        </p>
        <CTAButton variant="aqua" size="lg" />
      </Reveal>
    </div>
  </section>
);

export default Services;
