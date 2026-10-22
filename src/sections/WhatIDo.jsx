import { motion } from 'framer-motion';
import { CTAButton, Eyebrow, Reveal, ScrollRevealText } from '../components/motion';
import { ease } from '../lib/anim';
import { approach } from '../data/content';

// Two light cards and one dark, for rhythm without colour.
const looks = ['bg-white text-ink ring-1 ring-line', 'bg-white text-ink ring-1 ring-line', 'bg-ink text-white'];

// Home: who I help and how an engagement runs, in one block. The detail lives on /about and /work.
const WhatIDo = () => (
  <section id="what" className="bg-pastel py-28 md:py-40">
    <div className="container-x">
      <Eyebrow>What I do</Eyebrow>
      <ScrollRevealText
        className="mt-8 max-w-5xl text-3xl font-medium leading-[1.15] tracking-[-0.03em] md:text-[3.6rem] md:leading-[1.05] md:tracking-[-0.045em]"
        text="I help startups, growing businesses and public-sector teams market smarter, decide faster and build with less risk. One person for growth, strategy and technical due care."
      />

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {approach.map((a, i) => (
          <motion.div
            key={a.step}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.9, ease, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className={`flex min-h-[300px] flex-col justify-between rounded-4xl p-8 ${looks[i]}`}
          >
            <div className="flex items-center justify-between">
              <span className="label opacity-70">Step {a.step}</span>
              <span className="text-5xl font-semibold tracking-tightest opacity-15">{a.step}</span>
            </div>
            <div>
              <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{a.title}</h3>
              <p className="mt-3 opacity-65">{a.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <Reveal className="mt-12 flex flex-wrap gap-3">
        <CTAButton variant="ghost" href="/about">About me</CTAButton>
        <CTAButton variant="ghost" href="/work">See the work</CTAButton>
      </Reveal>
    </div>
  </section>
);

export default WhatIDo;
