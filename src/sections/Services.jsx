import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease, trackSpot } from '../lib/anim';
import { services } from '../data/content';

const MotionLink = motion.create(Link);


const Services = () => (
  <section id="services" className="relative bg-pastel py-24 md:py-36">
    <div className="grid-lines-dark absolute inset-x-0 top-0 h-[480px]" />
    <div className="container-x relative">
      <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12">
        <div className="md:col-span-8">
          <Eyebrow>Services</Eyebrow>
          <h2 className="h-section mt-6">
            <SplitWords text="Three practices." />{' '}
            <SplitWords text="One person to call." delay={0.15} wordClassName="text-soft" />
          </h2>
        </div>
        <Reveal className="flex flex-col justify-end gap-6 md:col-span-4" delay={0.2}>
          <p className="text-lg text-muted">
            Bring me in for one, or let a single retainer cover all three. Either way, you deal with the person doing the work.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s, i) => {
          return (
            <MotionLink
              key={s.title}
              to={`/${s.slug}`}
              onMouseMove={trackSpot}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="spot card card-hover group flex flex-col overflow-hidden p-2 outline-none focus-visible:ring-2 focus-visible:ring-violet"
            >
              {/* Duotone: a grey photo multiplied over the service's gradient. */}
              <div className={`relative aspect-[16/10] overflow-hidden rounded-[1.1rem] bg-fog`}>
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="label absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-ink">0{i + 1}</span>
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em]">{s.title}</h3>
                <p className="mt-3 text-muted">{s.body}</p>

                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] text-ink/80">
                      <Check size={16} strokeWidth={2.8} className="mt-0.5 shrink-0 text-violet" />
                      {p}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 self-start rounded-full bg-fog px-3 py-1 text-sm font-medium text-ink/80">{s.pricing}</p>

                <div className="mt-auto flex items-center justify-between pt-8">
                  <span className="font-medium text-ink">How it works</span>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-violet group-hover:text-white">
                    <ArrowUpRight size={20} strokeWidth={2.4} />
                  </span>
                </div>
              </div>
            </MotionLink>
          );
        })}
      </div>

      <Reveal className="relative mt-14 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-4xl bg-ink p-8 text-white md:mt-20 md:flex-row md:items-center md:p-12">
        <p className="max-w-xl text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
          Not sure which one you need? That is what the free call is for.
        </p>
        <CTAButton variant="bright" size="lg" />
      </Reveal>
    </div>
  </section>
);

export default Services;
