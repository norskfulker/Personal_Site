import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { CTA_LABEL, work } from '../data/content';

const HASH_PREFIX = '#case-';

const CaseCard = ({ item, index, large, onOpen }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // Image starts zoomed in and settles as the card scrolls into view.
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1.05, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const frame = useTransform(scrollYProgress, [0, 0.35], [0.92, 1]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1, ease, delay: (index % 2) * 0.1 }}
      className={large ? 'md:col-span-12' : 'md:col-span-6'}
    >
      <motion.button
        onClick={() => onOpen(item.slug)}
        whileHover="hover"
        className="group block w-full text-left"
        aria-label={`View case study: ${item.name}`}
      >
        <motion.div style={{ scale: frame }} className={`relative overflow-hidden rounded-3xl will-change-transform ${large ? 'aspect-[4/3] md:aspect-[16/7]' : 'aspect-[4/3]'}`}>
          <motion.div layoutId={`case-img-${item.slug}`} className="absolute inset-0 overflow-hidden">
            <motion.img src={item.image} alt="" loading="lazy" style={{ scale, y }} className="absolute inset-0 h-full w-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${item.kind === 'Our venture' ? 'bg-aqua text-navy-950' : 'bg-white/90 text-ink'}`}>{item.kind}</span>
            <span className="rounded-full bg-navy-950/50 px-3 py-1 text-xs text-white">{item.service}</span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-6 text-white">
            <div>
              <h3 className="text-2xl leading-tight tracking-tight md:text-4xl md:tracking-[-0.03em]">{item.name}</h3>
              <p className="mt-2 max-w-xl text-white/75">{item.summary}</p>
            </div>
            <motion.span
              variants={{ hover: { rotate: 45, scale: 1.08 } }}
              transition={{ duration: 0.35, ease }}
              className="hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-ink sm:grid"
            >
              <ArrowUpRight size={20} />
            </motion.span>
          </div>
        </motion.div>
        <p className="mt-4 flex items-center gap-2 text-sm font-medium text-royal">
          View case study <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </p>
      </motion.button>
    </motion.article>
  );
};

const CaseModal = ({ item, onClose }) => {
  const panelRef = useRef(null);

  useEffect(() => {
    window.lenis?.stop();
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    panelRef.current?.focus();
    return () => {
      window.lenis?.start();
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const blocks = [
    ['The challenge', item.problem],
    ['What we did', item.did],
    ['Outcome', item.result],
  ];

  return (
    <motion.div className="fixed inset-0 z-[70] flex items-end justify-center md:items-center md:p-6" role="dialog" aria-modal="true" aria-label={item.name}>
      <motion.div
        className="absolute inset-0 bg-navy-950/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onClose}
      />
      <motion.div
        ref={panelRef}
        tabIndex={-1}
        data-lenis-prevent
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.55, ease }}
        className="relative max-h-[92svh] w-full max-w-4xl overflow-y-auto overscroll-contain rounded-t-3xl bg-white outline-none md:rounded-3xl"
      >
        <div className="relative aspect-[16/9] md:aspect-[16/7]">
          <motion.div layoutId={`case-img-${item.slug}`} className="absolute inset-0 overflow-hidden">
            <img src={item.image} alt="" className="h-full w-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
          <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-ink transition-transform hover:rotate-90">
            <X size={18} />
          </button>
          <div className="absolute bottom-6 left-6 right-6 text-white md:bottom-8 md:left-10">
            <div className="mb-3 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white/90 px-3 py-1 font-medium text-ink">{item.kind}</span>
              <span className="rounded-full bg-navy-950/50 px-3 py-1">{item.service}</span>
            </div>
            <h3 className="max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl md:tracking-[-0.035em]">{item.name}</h3>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
          className="p-6 md:p-10"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {blocks.map(([label, text]) => (
              <motion.div key={label} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }} className="rounded-2xl bg-mist p-5">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-royal">{label}</div>
                <p className="mt-2 text-ink">{text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}>
              <h4 className="text-lg tracking-tight">How it ran</h4>
              <ol className="mt-4 space-y-3">
                {item.steps.map((s, i) => (
                  <li key={s} className="flex gap-4">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-royal text-xs text-white">{i + 1}</span>
                    <span className="pt-0.5 text-slate">{s}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}>
              <h4 className="text-lg tracking-tight">What the client gets</h4>
              <ul className="mt-4 space-y-3">
                {item.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-slate">
                    <Check size={16} className="mt-1 shrink-0 text-royal" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {item.kind === 'Example engagement' && (
            <p className="mt-10 text-sm text-slate">This is an example of how a typical engagement runs. It does not describe a named client.</p>
          )}
          <div className="mt-8 border-t border-line pt-8">
            <CTAButton>{CTA_LABEL}</CTAButton>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const slugFromHash = () => {
  const h = window.location.hash;
  return h.startsWith(HASH_PREFIX) ? h.slice(HASH_PREFIX.length) : null;
};

const Work = () => {
  const [openSlug, setOpenSlug] = useState(slugFromHash);
  const openItem = work.find((w) => w.slug === openSlug);

  // A shared link (or the back button) changes only the hash, without reloading the page.
  useEffect(() => {
    const onHash = () => setOpenSlug(slugFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Keep the URL in sync so a case study can be shared and reopened by link.
  useEffect(() => {
    const url = openSlug ? `${HASH_PREFIX}${openSlug}` : window.location.pathname + window.location.search;
    window.history.replaceState(null, '', url);
  }, [openSlug]);

  return (
    <section id="work" className="bg-mist py-28 md:py-40">
      <div className="container-x">
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <Eyebrow>Work</Eyebrow>
            <h2 className="h-section mt-6">
              <SplitWords text="How we turn problems into progress" />
            </h2>
          </div>
          <Reveal delay={0.2}>
            <CTAButton variant="ghost">Start a conversation</CTAButton>
          </Reveal>
        </div>

        <div className="grid gap-x-6 gap-y-14 md:grid-cols-12">
          {work.map((item, i) => (
            <CaseCard key={item.slug} item={item} index={i} large={i === 0} onOpen={setOpenSlug} />
          ))}
        </div>
      </div>

      <AnimatePresence>{openItem && <CaseModal key={openItem.slug} item={openItem} onClose={() => setOpenSlug(null)} />}</AnimatePresence>
    </section>
  );
};

export default Work;
