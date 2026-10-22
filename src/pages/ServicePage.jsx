import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { palettes } from '../lib/palettes';
import Approach from '../sections/Approach';
import { ease, trackSpot } from '../lib/anim';
import { usePageMeta } from '../lib/page';
import { pageMeta, retainer, servicePages, services, work } from '../data/content';


const Included = ({ groups }) => (
  <section className="bg-pastel py-24 md:py-32">
    <div className="container-x">
      <div className="mb-12 max-w-3xl md:mb-16">
        <Eyebrow>What’s included</Eyebrow>
        <h2 className="h-section mt-6">
          <SplitWords text="What the work" /> <SplitWords text="covers" delay={0.15} wordClassName="text-soft" />
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            onMouseMove={trackSpot}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.7, ease, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -4 }}
            className={`spot relative flex min-h-[230px] flex-col justify-between rounded-4xl bg-white p-7 text-ink ring-1 ring-line`}
          >
            <span className="label opacity-60">0{i + 1}</span>
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">{g.title}</h3>
              <p className="mt-2 text-muted">{g.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Marketing: the path every campaign is built around, drawn as a flow.
const Flow = ({ steps }) => (
  <section className="relative overflow-hidden bg-night py-24 text-white md:py-32">
    <div className="grid-lines absolute inset-0" />
    <div className="container-x relative">
      <h2 className="h-section max-w-3xl">
        <SplitWords text="Tracked from the first ad" /> <SplitWords text="to the weekly report" delay={0.2} wordClassName="text-soft" />
      </h2>
      <div className="relative mt-16 grid gap-4 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-1/2 hidden h-[2px] bg-white/15 md:block" />
        {steps.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: i * 0.15 }}
            className="relative flex items-center gap-4 rounded-3xl bg-white p-5 text-ink shadow-[0_20px_50px_-20px_rgba(5,5,7,0.6)]"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ink font-mono text-sm text-white">0{i + 1}</span>
            <span className="text-lg font-semibold tracking-tight">{s}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Advisory: the two tracks side by side.
const Tracks = ({ tracks }) => (
  <section className="bg-paper py-24 md:py-32">
    <div className="container-x">
      <div className="mb-12 max-w-3xl">
        <Eyebrow>Two tracks</Eyebrow>
        <h2 className="h-section mt-6">
          <SplitWords text="Two tracks," /> <SplitWords text="one method" delay={0.15} wordClassName="text-soft" />
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {tracks.map((t, i) => (
          <motion.article
            key={t.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.9, ease, delay: i * 0.12 }}
            className="relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-4xl text-white"
          >
            <img src={t.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-transparent`} />
            <div className="relative p-8 md:p-10">
              <h3 className="text-4xl font-semibold tracking-tightest md:text-5xl">{t.name}</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {t.points.map((p) => (
                  <li key={p} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink">{p}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

// Software: what the audit deliverable looks like. Layout only, no real findings.
const RiskReport = ({ risks }) => (
  <section className="relative overflow-hidden bg-night py-24 text-white md:py-32">
    <div className="grid-lines absolute inset-0" />
    <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
      <div>
        <Eyebrow light>The deliverable</Eyebrow>
        <h2 className="h-section mt-6">
          <SplitWords text="A ranked list," /> <SplitWords text="not a thick report" delay={0.2} wordClassName="text-soft" />
        </h2>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-md text-lg text-white/65">Every finding is ranked high, medium or low, with a fix plan and an owner for each. Your team knows where to start the same week.</p>
        </Reveal>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease }}
        className="rounded-4xl bg-white p-6 text-ink shadow-[0_40px_90px_-40px_rgba(0,0,0,0.6)] md:p-8"
      >
        <div className="flex items-center justify-between border-b border-line pb-4">
          <span className="font-semibold">Risk report</span>
          <span className="label text-muted">Sample layout</span>
        </div>
        <ul className="mt-4 space-y-3">
          {risks.map((r, i) => (
            <motion.li
              key={r.level}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.3 + i * 0.12 }}
              className="flex items-center gap-4 rounded-2xl bg-fog p-4"
            >
              <span className={`h-10 w-2 rounded-full ${r.color}`} />
              <span className="text-lg font-semibold">{r.level}</span>
              <span className="label ml-auto text-muted">{r.note}</span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-ink p-4 text-white">
          <Check size={18} className="text-white" strokeWidth={3} />
          <span className="font-medium">Fix plan with owners</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const Related = ({ items }) =>
  items.length > 0 && (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-x">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Work</Eyebrow>
            <h2 className="h-section mt-6">
              <SplitWords text="How it looks" /> <SplitWords text="in practice" delay={0.15} wordClassName="text-soft" />
            </h2>
          </div>
          <CTAButton variant="ghost" href="/work">All work</CTAButton>
        </div>
        <div className={`grid gap-4 ${items.length > 1 ? 'md:grid-cols-2' : ''}`}>
          {items.map((w, i) => (
            <motion.div
              key={w.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
            >
              <Link to={`/work#case-${w.slug}`} className={`group relative block aspect-[4/3] overflow-hidden rounded-4xl ${items.length > 1 ? '' : 'md:aspect-[16/7]'}`}>
                <img src={w.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent" />
                <span className="label absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 text-ink">{w.kind}</span>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{w.name}</h3>
                    <p className="mt-2 text-white/75">{w.result}</p>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-ink transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

const PriceBand = () => (
  <section className="bg-paper pb-24 md:pb-32">
    <div className="container-x">
      <Reveal className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-4xl bg-white p-8 ring-1 ring-line md:flex-row md:items-center md:p-12">
        <div>
          <div className="label text-ink/60">Included in the retainer</div>
          <p className="mt-3 text-5xl font-semibold tracking-tightest md:text-7xl">
            {retainer.price} <span className="text-2xl font-medium tracking-tight text-ink/60 md:text-3xl">{retainer.unit}</span>
          </p>
          <p className="mt-3 max-w-md text-ink/75">{retainer.summary}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <CTAButton variant="primary" size="lg" />
          <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold ring-1 ring-ink/20 transition-colors hover:bg-ink hover:text-white">
            See pricing <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

const OtherServices = ({ current }) => (
  <section className="bg-paper pb-24 md:pb-32">
    <div className="container-x">
      <div className="label mb-6 text-muted">Other services</div>
      <div className="grid gap-4 md:grid-cols-2">
        {services
          .filter((s) => s.slug !== current)
          .map((s) => (
            <Link key={s.slug} to={`/${s.slug}`} className="card card-hover group flex items-center justify-between gap-6 p-7">
              <div>
                <div className="label text-muted">{servicePages[s.slug].eyebrow}</div>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">{s.title}</h3>
                <p className="mt-1 text-muted">{s.body}</p>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-violet group-hover:text-white">
                <ArrowUpRight size={20} />
              </span>
            </Link>
          ))}
      </div>
    </div>
  </section>
);

const ServicePage = ({ slug }) => {
  const service = services.find((s) => s.slug === slug);
  const page = servicePages[slug];
  usePageMeta(pageMeta[slug]);
  // Work items are tagged with a shortened service name ('Software & Audit'), so match on the prefix.
  const related = work.filter((w) => service.title.startsWith(w.service));
  // Service titles end in a phrase worth colouring: "& Branding", "& Startups", "Consultancy".
  const words = service.title.split(' ');
  const cut = slug === 'software' ? words.length - 1 : words.length - 2;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={words.slice(0, cut).join(' ')}
        accent={words.slice(cut).join(' ')}
        lead={page.lead}
        image={page.image}
        blobs={palettes[slug]}
      >
        <CTAButton variant="bright" size="lg" />
        <span className="rounded-full bg-white/[0.07] px-4 py-2 text-sm text-white/75 ring-1 ring-white/15">{service.pricing}</span>
      </PageHero>
      <Included groups={page.groups} />
      {slug === 'marketing' && <Flow steps={page.flow} />}
      {slug === 'advisory' && <Tracks tracks={page.tracks} />}
      {slug === 'software' && <RiskReport risks={page.risks} />}
      <Approach />
      <Related items={related} />
      <PriceBand />
      <OtherServices current={slug} />
    </>
  );
};

export default ServicePage;
