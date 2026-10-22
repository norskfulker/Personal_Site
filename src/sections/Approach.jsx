import { motion } from 'framer-motion';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease, trackSpot } from '../lib/anim';
import { approach } from '../data/content';


const Approach = () => (
  <section id="approach" className="bg-paper py-24 md:py-36">
    <div className="container-x">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <Eyebrow className="justify-center">My approach</Eyebrow>
        <h2 className="h-section mt-6">
          <SplitWords text="How we’d work" /> <SplitWords text="together" delay={0.2} wordClassName="text-soft" />
        </h2>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">Understand first, decide second, then deliver. In that order, every time.</p>
        </Reveal>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {approach.map((item, i) => (
          <motion.article
            key={item.step}
            onMouseMove={trackSpot}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.8, ease, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className="spot card card-hover group flex flex-col overflow-hidden p-2"
          >
            <div className={`relative aspect-[4/3] overflow-hidden rounded-[1.1rem] bg-fog`}>
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 md:p-6">
              <div className="flex items-baseline justify-between">
                <span className="label rounded-full bg-fog px-3 py-1.5 text-ink/70">Step {item.step}</span>
                <span className="text-6xl font-semibold tracking-tightest text-ink/10">
                  {item.step}
                </span>
              </div>
              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{item.title}</h3>
              <p className="mt-3 text-muted">{item.body}</p>
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
