import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUp, ArrowUpRight, CalendarDays, Clock, MapPin, Video as VideoIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { ease, scrollToId } from '../lib/anim';
import { useBooking } from './Booking';
import { CTAButton, Mesh, Reveal, SplitWords, Video } from './motion';
import { CONTACT_URL, DISCLAIMER, EMAIL, GITHUB_URL, LINKEDIN_URL, DRAFT, PITCH, TAGLINE, TBC, navLinks, videos } from '../data/content';

const linkCls = 'group inline-flex items-center gap-1.5 text-white/65 transition-colors hover:text-white';

const Col = ({ title, children }) => (
  <div>
    <div className="label mb-5 text-white/40">{title}</div>
    <div className="flex flex-col items-start gap-3 text-[15px]">{children}</div>
  </div>
);

// The logo is used as a mask over a white fade, so it fills the footer edge to edge.
const logoMask = { WebkitMaskImage: `url(${Logo})`, maskImage: `url(${Logo})`, WebkitMaskSize: '100% 100%', maskSize: '100% 100%', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat' };

const slotFacts = [
  { icon: Clock, title: '30 minutes, free', sub: 'No obligation' },
  { icon: VideoIcon, title: 'On Google Meet', sub: 'Link arrives with the invite' },
  { icon: MapPin, title: 'Based in India', sub: 'Working with clients anywhere' },
];

// The card that invites a booking: opens the scheduling dialog, or goes straight to cal.com.
const SlotCard = () => {
  const openBooking = useBooking();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, ease, delay: 0.2 }}
      className="relative overflow-hidden rounded-[1.75rem] bg-white/[0.06] p-6 ring-1 ring-white/15 backdrop-blur-xl md:p-7"
    >
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-lg font-semibold tracking-tight text-ink">SM</div>
        <div>
          <div className="label text-white/45">Book directly</div>
          <h3 className="mt-1 text-xl font-semibold leading-tight tracking-[-0.03em]">Schedule your slot</h3>
        </div>
      </div>

      <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
        {slotFacts.map((f) => (
          <li key={f.title} className="flex items-center gap-3 py-3.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10">
              <f.icon size={16} />
            </span>
            <span>
              <span className="block text-sm font-medium">{f.title}</span>
              <span className="block text-xs text-white/55">{f.sub}</span>
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => openBooking?.()}
        aria-haspopup="dialog"
        className="group mt-6 flex w-full items-center justify-between rounded-full bg-white py-2 pl-6 pr-2 text-[15px] font-medium text-ink transition-colors hover:bg-white/90"
      >
        <span className="flex items-center gap-2">
          <CalendarDays size={16} /> Pick a time
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:translate-x-0.5">
          <ArrowRight size={16} strokeWidth={2.2} />
        </span>
      </button>
      <a
        href={CONTACT_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-4 flex items-center justify-center gap-1 text-sm text-white/60 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
      >
        Or go straight to cal.com <ArrowUpRight size={14} />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </motion.div>
  );
};

// Contact and footer in one block: the booking invitation, then the site links, then the logo.
const Footer = () => {
  const ref = useRef(null);
  const openBooking = useBooking();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.25'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['-12%', '0%']);

  return (
    <footer id="contact" ref={ref} className="bg-paper px-3 pb-3 pt-3">
      <motion.div style={{ scale }} className="relative overflow-hidden rounded-4xl bg-night text-white will-change-transform">
        {/* Colour and motion stay behind the invitation; the links below sit on plain night. */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-[900px] overflow-hidden md:h-[760px]">
          <motion.div style={{ y: videoY }} className="absolute inset-0 h-[115%]">
            <Video src={videos.horizon} className="h-full w-full opacity-35 mix-blend-luminosity" />
          </motion.div>
          <Mesh className="opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-night/20 via-night/40 to-night" />
        </div>
        <div className="grid-lines absolute inset-0" />

        <div className="container-x relative pt-24 md:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <Reveal y={12}>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-3.5 py-1.5 text-sm text-white/75 ring-1 ring-white/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden /> Free 30-minute call
                </span>
              </Reveal>
              <h2 className="h-display mt-7 text-5xl md:text-7xl lg:text-[5.75rem]">
                <SplitWords text="Let’s talk about" />{' '}
                <SplitWords text="what’s next." delay={0.15} wordClassName="text-soft" />
              </h2>
              <Reveal delay={0.25}>
                <p className="mt-7 max-w-lg text-lg text-white/70">
                  Thirty minutes, no cost. Tell me what you are working on and I will tell you plainly if I can help.
                </p>
              </Reveal>
              <Reveal delay={0.35} className="mt-9 flex flex-wrap items-center gap-3">
                <CTAButton variant="bright" size="lg" />
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <SlotCard />
            </div>
          </div>

          <div className="mt-24 grid gap-12 border-t border-white/10 pt-14 md:mt-32 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-2xl font-semibold tracking-[-0.03em]">
                {TAGLINE.split('. ').map((phrase, i, all) => (
                  <span key={phrase} className={`mr-[0.22em] inline-block whitespace-nowrap ${i === all.length - 1 ? 'text-soft' : ''}`}>
                    {phrase.replace(/\.$/, '')}.
                  </span>
                ))}
              </p>
              <p className="mt-4 max-w-xs text-white/60">{PITCH}</p>
            </div>

            <div className="grid grid-cols-2 gap-10 md:col-span-7 md:justify-items-end">
              <Col title="Pages">
                <Link to="/" className={linkCls}>Home</Link>
                {navLinks.map((l) => (
                  <Link key={l.path} to={l.path} className={linkCls}>
                    {l.name}
                  </Link>
                ))}
              </Col>
              <Col title="Connect">
                <button type="button" onClick={() => openBooking?.()} className={linkCls}>
                  Book a call
                </button>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={linkCls}>
                  LinkedIn <ArrowUpRight size={14} />
                </a>
                {EMAIL ? <a href={`mailto:${EMAIL}`} className={linkCls}>{EMAIL}</a> : DRAFT && <span className="text-white/40">Email {TBC}</span>}
                {GITHUB_URL ? (
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={linkCls}>
                    GitHub <ArrowUpRight size={14} />
                  </a>
                ) : (
                  DRAFT && <span className="text-white/40">GitHub {TBC}</span>
                )}
              </Col>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <p>{DISCLAIMER}</p>
            <div className="flex items-center gap-6">
              <span className="font-mono text-xs">© {new Date().getFullYear()} Srikanta Magaji</span>
              <button
                onClick={() => scrollToId('root')}
                aria-label="Back to top"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink transition-transform hover:-translate-y-1"
              >
                <ArrowUp size={18} strokeWidth={2.4} />
              </button>
            </div>
          </div>
        </div>

        {/* Full-size logo, end to end, as the last thing on every page. */}
        <Reveal y={60} className="relative px-3 pb-4 md:px-5 md:pb-6">
          <div role="img" aria-label="Srikanta Magaji" className="aspect-[709/102] w-full bg-gradient-to-b from-white to-white/25" style={logoMask} />
        </Reveal>
      </motion.div>
    </footer>
  );
};

export default Footer;
