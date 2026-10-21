import { motion } from 'framer-motion';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { approach } from '../data/content';

const Approach = () => (
  <section id="approach" className="bg-mist py-24 md:py-36">
    <div className="container-x">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <Eyebrow className="justify-center">Our Approach</Eyebrow>
        <h2 className="h-section mt-6">
          <SplitWords text="How every engagement runs" />
        </h2>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate">Three steps. Clear owners. No surprises.</p>
        </Reveal>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {approach.map((item, i) => (
          <motion.article
            key={item.step}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.8, ease, delay: i * 0.12 }}
            whileHover={{ y: -10 }}
            className="card card-hover group flex flex-col overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-royal/30 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <div className="flex items-baseline justify-between">
                <span className="rounded-full bg-royal-100 px-3 py-1 text-sm font-semibold text-royal">Step {item.step}</span>
                <span className="text-6xl font-bold tracking-tightest text-ink/10 transition-colors duration-500 group-hover:text-royal/25">
                  {item.step}
                </span>
              </div>
              <h3 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">{item.title}</h3>
              <p className="mt-3 text-slate">{item.body}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <Reveal className="mt-14 flex justify-center">
        <CTAButton size="lg">Start with step one</CTAButton>
      </Reveal>
    </div>
  </section>
);

export default Approach;
