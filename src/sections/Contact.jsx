import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, MapPin, ShieldCheck } from 'lucide-react';
import Logo from '../assets/Logo.svg';
import { scrollToId } from '../lib/anim';
import { CTAButton, SplitWords, Video } from '../components/motion';
import { ease } from '../lib/anim';
import { CONTACT_URL, DISCLAIMER, EMAIL, GITHUB_URL, LINKEDIN_URL, PITCH, TBC, navLinks, services, videos } from '../data/content';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['-15%', '0%']);

  return (
    <section id="contact" ref={ref} className="bg-mist px-3 pb-3">
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

        <div className="container-x relative pb-16 pt-32 md:pt-48">
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
              <CTAButton variant="light" />
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

          <footer className="mt-32 border-t border-white/10 pt-14">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <img src={Logo} alt="Srikanta Magaji" className="h-6 w-auto brightness-0 invert" />
                <p className="mt-5 max-w-xs text-white/60">{PITCH}</p>
              </div>
              <FooterCol title="Services" className="md:col-span-3">
                {services.map((s) => (
                  <a key={s.title} href={CONTACT_URL} target="_blank" rel="noreferrer" className="hover:text-white">{s.title}</a>
                ))}
              </FooterCol>
              <FooterCol title="Pages" className="md:col-span-2">
                {navLinks.map((l) => (
                  <button key={l.id} onClick={() => scrollToId(l.id)} className="text-left hover:text-white">{l.name}</button>
                ))}
              </FooterCol>
              <FooterCol title="Connect" className="md:col-span-2">
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
                <a href={CONTACT_URL} target="_blank" rel="noreferrer" className="hover:text-white">Booking form</a>
                {EMAIL ? <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a> : <span>Email {TBC}</span>}
                {GITHUB_URL ? <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a> : <span>GitHub {TBC}</span>}
              </FooterCol>
            </div>
            <p className="mt-16 text-sm text-white/60">{DISCLAIMER}</p>
            <div className="mt-6 flex flex-col justify-between gap-4 text-sm text-white/45 md:flex-row">
              <span>© {new Date().getFullYear()} Srikanta Magaji. All rights reserved.</span>
              <button onClick={() => scrollToId('top')} className="text-left hover:text-white">Back to top ↑</button>
            </div>
          </footer>
        </div>
      </motion.div>
    </section>
  );
};

const FooterCol = ({ title, children, className }) => (
  <div className={className}>
    <div className="mb-5 text-[11px] uppercase tracking-[0.18em] text-white/40">{title}</div>
    <div className="flex flex-col gap-3 text-white/70">{children}</div>
  </div>
);

export default Contact;
