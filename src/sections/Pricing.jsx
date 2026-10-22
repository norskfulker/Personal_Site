import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ClipboardList, Landmark, Megaphone, Network, Radar, Rocket, SearchCheck, TrendingUp } from 'lucide-react';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease, trackSpot } from '../lib/anim';
import { DISCLAIMER, retainer } from '../data/content';

// One icon per entry in retainer.includes, in the same order.
const icons = [TrendingUp, Radar, Rocket, SearchCheck, Megaphone, Network, Landmark, ClipboardList];

// `page`: this section opens the pricing page, so its heading is the H1.
// `compact`: the home page version, which skips the "why a retainer" cards and links to the full page.
const Pricing = ({ page = false, compact = false }) => {
  const Heading = page ? 'h1' : 'h2';
  return (
  <section id="pricing" className={`relative overflow-hidden bg-night pb-24 text-white md:pb-36 ${page ? 'rounded-b-[2rem] pt-36 md:rounded-b-[3rem] md:pt-44' : 'pt-24 md:pt-36'}`}>
    <div className="grid-lines absolute inset-0" />
    <div className="container-x relative">
      <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12">
        <div className="md:col-span-7">
          <Eyebrow light>Pricing</Eyebrow>
          <Heading className={page ? 'h-display mt-6 text-[13vw] sm:text-7xl lg:text-[5.6rem]' : 'h-section mt-6'}>
            <SplitWords text="One retainer." /> <SplitWords text="Everything included." delay={0.15} wordClassName="text-soft" />
          </Heading>
        </div>
        <Reveal className="flex items-end md:col-span-4 md:col-start-9" delay={0.2}>
          <p className="text-lg text-white/60">
            No packages to compare and no menu of add-ons. One flat monthly fee buys all three services, pointed at whatever moves your business most.
          </p>
        </Reveal>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease }}
        className="relative grid overflow-hidden rounded-4xl bg-coal ring-1 ring-white/10 lg:grid-cols-12"
      >
        {/* Price panel: the one light block in a dark section, so the number is the first thing you see. */}
        <div className="relative flex flex-col overflow-hidden bg-white p-8 text-ink md:p-10 lg:col-span-5">
          <div className="relative">
            <span className="text-sm font-medium text-muted">Monthly retainer</span>
            <div className="mt-8 flex flex-wrap items-end gap-x-3">
              <span className="text-7xl font-semibold tracking-tightest md:text-8xl">{retainer.price}</span>
              <span className="pb-3 text-lg text-ink/70">{retainer.unit}</span>
            </div>
            <p className="mt-5 max-w-sm text-lg text-ink/80">{retainer.summary}</p>
            <ul className="mt-8 space-y-3 border-t border-ink/15 pt-6">
              {retainer.terms.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] text-ink/80">
                  <Check size={16} strokeWidth={3} className="mt-1 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mt-auto pt-10">
            <CTAButton variant="primary" size="lg" />
            <p className="mt-4 text-sm text-ink/65">Free, 30 minutes. I will tell you plainly if the retainer is right for you.</p>
          </div>
        </div>

        {/* What it covers */}
        <div className="p-8 md:p-10 lg:col-span-7">
          <div className="label text-white/45">What the retainer covers</div>
          <div className="mt-6 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {retainer.includes.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.05 }}
                  className="flex gap-4"
                >
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/[0.06] ring-1 ring-white/10 text-white/80`}>
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-white/55">{item.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Why a retainer */}
      {compact ? (
        <Link to="/pricing" className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white hover:text-ink">
          Why one retainer <ArrowRight size={16} />
        </Link>
      ) : (
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {retainer.why.map((w, i) => (
          <motion.div
            key={w.title}
            onMouseMove={trackSpot}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: i * 0.1 }}
            className="spot relative rounded-[1.5rem] bg-white/[0.04] p-7 ring-1 ring-white/10 [--spot:rgba(255,255,255,0.06)]"
          >
            <div className="label text-white/40">0{i + 1}</div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">{w.title}</h3>
            <p className="mt-2 text-white/60">{w.body}</p>
          </motion.div>
        ))}
      </div>
      )}

      <p className="mt-10 text-sm text-white/40">
        Revenue growth is the aim I work towards, not a guarantee. {DISCLAIMER}
      </p>
    </div>
  </section>
  );
};

export default Pricing;
