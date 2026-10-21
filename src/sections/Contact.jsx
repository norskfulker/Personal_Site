import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, MapPin, ShieldCheck } from 'lucide-react';
import { CTAButton, SplitWords, Video } from '../components/motion';
import { ease } from '../lib/anim';
import { videos } from '../data/content';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['-15%', '0%']);

  return (
    <section id="contact" ref={ref} className="bg-mist px-3">
      <motion.div style={{ scale }} className="grain relative overflow-hidden rounded-3xl bg-navy-950 text-white will-change-transform">
        <motion.div style={{ y: videoY }} className="absolute inset-0 h-[115%]">
          <Video src={videos.horizon} className="h-full w-full opacity-70" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-royal/30 to-navy-950" />
        <motion.div
          className="glow absolute left-1/2 top-1/4 h-[70vw] w-[70vw] -translate-x-1/2 [--glow:rgba(36,80,255,0.4)]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container-x relative pb-20 pt-32 md:pb-28 md:pt-48">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="h-display text-5xl md:text-8xl">
              <SplitWords text="Let’s talk about" />{' '}
              <span className="font-serif italic text-aqua"><SplitWords text="what’s next." delay={0.15} /></span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease, delay: 0.3 }}
              className="mx-auto mt-8 max-w-xl text-lg text-white/75"
            >
              Fifteen minutes, no cost. Tell us what you are working on and we will tell you plainly if we can help.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.45 }}
              className="mt-10 flex justify-center"
            >
              <CTAButton variant="aqua" size="lg" />
            </motion.div>
          </div>

          <div className="mx-auto mt-20 grid max-w-4xl gap-3 sm:grid-cols-3">
            {[
              { icon: Clock, title: 'Free 15-min call', sub: 'No obligation' },
              { icon: ShieldCheck, title: 'Ranked audit reports', sub: 'High, medium, low + fix plan' },
              { icon: MapPin, title: 'Based in India', sub: 'Working with clients anywhere' },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15"
              >
                <b.icon size={18} className="text-aqua" />
                <div>
                  <div className="text-sm font-medium">{b.title}</div>
                  <div className="text-xs text-white/60">{b.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
