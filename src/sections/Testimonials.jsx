import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { TBC, testimonials } from '../data/content';

// Draft-only stand-in until the owner supplies a quote, a name and permission.
const PLACEHOLDER_SLOTS = 3;

const Placeholder = () => (
  <div className="flex min-h-[300px] w-[82vw] shrink-0 select-none flex-col justify-between rounded-3xl border-2 border-dashed border-royal/30 bg-white/60 p-8 sm:w-[400px]">
    <Quote size={28} className="text-royal/40" />
    <div>
      <p className="text-xl tracking-tight text-ink">{TBC}</p>
      <p className="mt-2 text-slate">No testimonials yet. Each one needs the quote, the person’s name and their permission.</p>
    </div>
  </div>
);

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

  return (
    <section className="overflow-hidden bg-mist py-28 md:py-40">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="h-section mt-6">
            <SplitWords text="What clients say" />
          </h2>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <CTAButton>Book a Consultation</CTAButton>
            </div>
            {(testimonials.length || PLACEHOLDER_SLOTS) > 1 && <p className="mt-10 hidden text-sm text-slate lg:block">← Drag to explore →</p>}
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
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease, delay: i * 0.1 }}
                className={`flex min-h-[380px] w-[82vw] shrink-0 select-none flex-col justify-between rounded-3xl p-8 sm:w-[400px] ${
                  i === 0 ? 'bg-gradient-to-br from-royal to-navy-800 text-white' : 'bg-white'
                }`}
              >
                <Quote size={28} className={i === 0 ? 'text-aqua' : 'text-royal'} />
                <blockquote className="my-8 text-xl leading-snug tracking-tight md:text-2xl">“{t.quote}”</blockquote>
                <figcaption>
                  <div className="font-medium">{t.name}</div>
                  <div className={`text-sm ${i === 0 ? 'text-white/65' : 'text-slate'}`}>{t.role}</div>
                </figcaption>
              </motion.figure>
            ))}
            {testimonials.length === 0 && Array.from({ length: PLACEHOLDER_SLOTS }, (_, i) => <Placeholder key={i} />)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
