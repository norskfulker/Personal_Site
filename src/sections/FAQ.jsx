import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { CTAButton, Eyebrow, Reveal, SplitWords } from '../components/motion';
import { ease } from '../lib/anim';
import { faqs } from '../data/content';

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-mist py-28 md:py-40">
      <div className="container-x grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="h-section mt-6">
            <SplitWords text="Your commonly asked questions" />
          </h2>
          <Reveal delay={0.2} className="mt-8">
            <p className="mb-8 max-w-sm text-slate">Can’t find what you’re looking for? Send a note and I’ll reply personally.</p>
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
                className={`mb-3 overflow-hidden rounded-2xl transition-colors duration-500 ${isOpen ? 'bg-white shadow-[0_20px_50px_-30px_rgba(10,16,36,0.3)]' : 'bg-white/50'}`}
              >
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-6 p-6 text-left md:p-7">
                  <span className="text-lg tracking-tight md:text-xl">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? '#2450ff' : '#ffffff', color: isOpen ? '#ffffff' : '#0a1024' }}
                    transition={{ duration: 0.4, ease }}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full ring-1 ring-line"
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
                      <p className="max-w-xl px-6 pb-7 text-slate md:px-7">{f.a}</p>
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
