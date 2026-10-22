import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { CTA_LABEL, sampleTestimonials, testimonials } from '../data/content';

// Real testimonials always win. Sample ones exist only so the draft shows the layout:
// they are tagged "Sample" and never shipped in a production build.
const items = testimonials.length ? testimonials : import.meta.env.DEV ? sampleTestimonials.map((t) => ({ ...t, sample: true })) : [];

const Testimonials = () => {
  const trackRef = useRef(null);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    const measure = () => {
      const el = trackRef.current;
      if (el) setLimit(Math.max(0, el.scrollWidth - el.parentElement.offsetWidth));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  if (!items.length) return null;

  return (
    <section className="overflow-hidden bg-paper py-28 md:py-40">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="h-section mt-6">
            <SplitWords text="In their" /> <SplitWords text="words" delay={0.2} wordClassName="text-soft" />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted">Fewer guesses, clearer plans, and work that keeps paying off.</p>
            <div className="mt-8">
              <CTAButton>{CTA_LABEL}</CTAButton>
            </div>
            <p className="label mt-10 hidden text-muted lg:block">← Drag to explore →</p>
          </Reveal>
        </div>

        <div className="relative lg:col-span-8">
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: -limit, right: 0 }}
            dragElastic={0.12}
            className="flex cursor-grab gap-4 active:cursor-grabbing"
          >
            {items.map((t, i) => (
              <motion.figure
                key={t.quote}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease, delay: i * 0.08 }}
                className={`relative flex min-h-[360px] w-[82vw] shrink-0 select-none flex-col justify-between rounded-4xl p-8 sm:w-[380px] ${
                  i === 0 ? 'bg-ink text-white' : 'card'
                }`}
              >
                {t.sample && (
                  <span className={`absolute right-5 top-5 rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider ${i === 0 ? 'bg-white/15 text-white' : 'bg-amber-100 text-amber-800'}`}>
                    Sample
                  </span>
                )}
                <Quote size={28} className={i === 0 ? 'text-white/50' : 'text-ink/30'} />
                <blockquote className="my-8 text-xl font-medium leading-snug tracking-[-0.02em] md:text-[1.4rem]">“{t.quote}”</blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-full text-sm font-medium ${i === 0 ? 'bg-white/20' : 'bg-ink text-white'}`}>
                    {(t.name || t.role).split(/[\s,]+/).slice(0, 2).map((w) => w[0]).join('')}
                  </span>
                  <div>
                    {t.name && <div className="font-medium">{t.name}</div>}
                    <div className={`text-sm ${i === 0 ? 'text-white/80' : 'text-muted'}`}>{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
