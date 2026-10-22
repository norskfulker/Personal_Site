import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { faqs } from '../data/content';

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-pastel py-28 md:py-40">
      <div className="container-x grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="h-section mt-6">
            <SplitWords text="Questions" /> <SplitWords text="people ask" delay={0.2} wordClassName="text-soft" />
          </h2>
          <Reveal delay={0.2} className="mt-8">
            <p className="mb-8 max-w-sm text-muted">Can’t find your answer? Ask me on a free 30-minute call.</p>
            <CTAButton variant="ghost">Ask a question</CTAButton>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: i * 0.06 }}
                className={`mb-3 overflow-hidden rounded-[1.5rem] border transition-[background-color,border-color,box-shadow] duration-500 ${isOpen ? 'border-ink/15 bg-white shadow-[0_24px_60px_-30px_rgba(10,10,11,0.25)]' : 'border-line bg-white/60 hover:border-ink/15'}`}
              >
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-6 p-6 text-left md:p-7">
                  <span className="text-lg font-medium tracking-[-0.02em] md:text-xl">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? '#0a0a0b' : '#f0f0f2', color: isOpen ? '#ffffff' : '#0a0a0b' }}
                    transition={{ duration: 0.4, ease }}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full"
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                    >
                      <p className="max-w-xl px-6 pb-7 text-muted md:px-7">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
