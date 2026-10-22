import { motion } from 'framer-motion';
import { Compass, LineChart } from 'lucide-react';
import { CTAButton, Eyebrow, ParallaxImage, Reveal, ScrollRevealText } from '../components/motion';
import { ease } from '../lib/anim';
import { pillars } from '../data/content';

const icons = [Compass, null, LineChart];

// Light, photo, dark: three cards that read as a set.
const looks = [
  { card: 'bg-white text-ink ring-1 ring-line', body: 'text-muted', tile: 'bg-fog text-ink' },
  { card: 'text-white', body: 'text-white/80', tile: '' },
  { card: 'bg-ink text-white', body: 'text-white/65', tile: 'bg-white/10 text-white' },
];

const About = () => (
  <section id="about" className="relative bg-paper py-28 md:py-40">
    <div className="container-x">
      <Eyebrow>About</Eyebrow>
      <ScrollRevealText
        className="mt-8 max-w-5xl text-3xl font-medium leading-[1.15] tracking-[-0.03em] md:text-[3.6rem] md:leading-[1.05] md:tracking-[-0.045em]"
        text="I help startups, growing businesses and public-sector teams market smarter, decide faster and build with less risk. One person for growth, strategy and technical risk."
      />

      <Reveal className="mt-12 flex flex-wrap items-center gap-6" delay={0.1}>
        <CTAButton variant="ghost" href="/work">How I work</CTAButton>
      </Reveal>

      <div className="mt-20 grid gap-4 md:grid-cols-3">
        {pillars.map((p, i) => {
          const Icon = icons[i];
          const look = looks[i];
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 1, ease, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className={`relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-4xl p-8 ${look.card}`}
            >
              {p.image && (
                <>
                  <ParallaxImage src={p.image} className="!absolute inset-0" strength={8} />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/40 to-transparent" />
                </>
              )}
              <div className="relative">
                {Icon && (
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl ${look.tile}`}>
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                )}
              </div>
              <div className="relative">
                <h3 className="mb-3 text-3xl font-semibold tracking-[-0.03em]">{p.title}</h3>
                <p className={look.body}>{p.body}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default About;
