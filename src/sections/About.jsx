import { motion } from 'framer-motion';
import { Compass, LineChart } from 'lucide-react';
import { CTAButton, Eyebrow, ParallaxImage, Reveal, ScrollRevealText } from '../components/motion';
import { ease } from '../lib/anim';
import { pillars } from '../data/content';

const icons = [Compass, null, LineChart];

const About = () => (
  <section id="about" className="relative bg-mist py-28 md:py-40">
    <div className="container-x">
      <Eyebrow>About</Eyebrow>
      <ScrollRevealText
        className="mt-8 max-w-5xl text-3xl leading-[1.15] tracking-tight md:text-[3.4rem] md:leading-[1.08] md:tracking-[-0.035em]"
        text="I help startups, growing businesses and public-sector teams market better, decide faster and build with less risk."
      />

      <Reveal className="mt-12 flex flex-wrap items-center gap-6" delay={0.1}>
        <CTAButton variant="ghost" href="#approach">How I work</CTAButton>
      </Reveal>

      <div className="mt-20 grid gap-4 md:grid-cols-3">
        {pillars.map((p, i) => {
          const Icon = icons[i];
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 1, ease, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className={`relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-3xl p-8 ${p.image ? 'text-white' : 'bg-white'}`}
            >
              {p.image && (
                <>
                  <ParallaxImage src={p.image} className="!absolute inset-0" strength={8} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-800/40 to-royal/20" />
                </>
              )}
              <div className="relative">
                {Icon && (
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-royal-100 text-royal">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                )}
              </div>
              <div className="relative">
                <h3 className="mb-3 text-2xl tracking-tight">{p.title}</h3>
                <p className={p.image ? 'text-white/80' : 'text-slate'}>{p.body}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default About;
