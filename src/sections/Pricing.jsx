import { motion } from 'framer-motion';
import { Check, ClipboardList, Landmark, Megaphone, Network, Radar, Rocket, SearchCheck, TrendingUp } from 'lucide-react';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { DISCLAIMER, retainer } from '../data/content';

// One icon per entry in retainer.includes, in the same order.
const icons = [TrendingUp, Radar, Rocket, SearchCheck, Megaphone, Network, Landmark, ClipboardList];

const Pricing = () => (
  <section id="pricing" className="bg-ink py-24 text-white md:py-36">
    <div className="container-x">
      <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12">
        <div className="md:col-span-7">
          <Eyebrow light>Pricing</Eyebrow>
          <h2 className="h-section mt-6">
            <SplitWords text="One retainer. Everything we do." />
          </h2>
        </div>
        <Reveal className="flex items-end md:col-span-4 md:col-start-9" delay={0.2}>
          <p className="text-lg text-white/65">
            No packages to compare and no menu of add-ons. One flat monthly fee buys the whole team, pointed at whatever moves your business most.
          </p>
        </Reveal>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease }}
        className="card grid overflow-hidden text-ink lg:grid-cols-12"
      >
        {/* Price panel */}
        <div className="relative flex flex-col overflow-hidden bg-royal p-8 text-white md:p-10 lg:col-span-5">
          <div className="glow pointer-events-none absolute -right-1/3 -top-1/3 h-[140%] w-[140%] [--glow:rgba(62,230,193,0.35)]" />
          <div className="relative">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
              Monthly retainer
            </span>
            <div className="mt-8 flex flex-wrap items-end gap-x-3">
              <span className="text-7xl font-bold tracking-tightest md:text-8xl">{retainer.price}</span>
              <span className="pb-3 text-lg text-white/75">{retainer.unit}</span>
            </div>
            <p className="mt-5 max-w-sm text-lg text-white/85">{retainer.summary}</p>
            <ul className="mt-8 space-y-3 border-t border-white/20 pt-6">
              {retainer.terms.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] text-white/85">
                  <Check size={16} strokeWidth={2.6} className="mt-1 shrink-0 text-aqua" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mt-auto pt-10">
            <CTAButton variant="aqua" size="lg" />
            <p className="mt-4 text-sm text-white/70">Free, 15 minutes. We will tell you plainly if the retainer is right for you.</p>
          </div>
        </div>

        {/* What it covers */}
        <div className="p-8 md:p-10 lg:col-span-7">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate">What the retainer covers</div>
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
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-royal-100 text-royal">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate">{item.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Why a retainer */}
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {retainer.why.map((w, i) => (
          <motion.div
            key={w.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: i * 0.1 }}
            className="rounded-[1.75rem] bg-white/[0.06] p-7 ring-1 ring-white/10"
          >
            <div className="text-sm font-bold tabular-nums text-aqua">0{i + 1}</div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">{w.title}</h3>
            <p className="mt-2 text-white/65">{w.body}</p>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-sm text-white/40">
        Revenue growth is the aim we work towards, not a guarantee. {DISCLAIMER}
      </p>
    </div>
  </section>
);

export default Pricing;
