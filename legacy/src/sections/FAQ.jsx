import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurText } from '../components/Animations';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is your core architectural philosophy?",
    answer: "I design for resilience over efficiency. In large-scale systems, failure is inevitable. My approach focuses on fault isolation, self-healing mechanisms, and decoupled architectures that ensure the system endures even when individual components fail."
  },
  {
    question: "How do you handle the trade-off between decentralization and performance?",
    answer: "It's rarely a binary choice. I implement hybrid models where high-frequency execution happens off-chain or on optimized layers, while settlement and truth verification remain decentralized. This 'separation of concerns' allows systems to scale without compromising trustless guarantees."
  },
  {
    question: "Why do you focus on 'Semiconductor-Aware' architecture?",
    answer: "Software abstraction often ignores hardware reality. By aligning distributed system design with modern chip capabilities (GPU parallelism, NPU latency patterns), we can achieve order-of-magnitude improvements in throughput and cost-efficiency that code optimization alone cannot deliver."
  },
  {
    question: "What role does AI play in your infrastructure designs?",
    answer: "Beyond generation, AI is the ultimate orchestrator. I design systems where AI models predict load spikes, optimize routing paths in real-time, and manage resource allocation autonomously, moving us from human-maintained to self-optimizing infrastructure."
  },
  {
    question: "Do you work with early-stage startups or established enterprises?",
    answer: "I partner with high-impact ventures at pivotal scaling points. For startups, I lay the foundational architecture that prevents technical debt. For enterprises, I re-architect legacy monoliths into agile, distributed systems capable of modern innovation."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark relative border-t border-black/5 dark:border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16 text-center">
          <BlurText>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-light dark:text-primary-dark">FAQs</h2>
          </BlurText>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition-colors duration-300 text-left"
              >
                <span className="text-lg font-medium text-primary-light dark:text-primary-dark pr-8">
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full bg-black/5 dark:bg-white/10 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  {activeIndex === index ? <Minus size={20} className="text-accent-blue" /> : <Plus size={20} className="text-secondary-light dark:text-secondary-dark" />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-lg leading-relaxed text-secondary-light dark:text-secondary-dark border-x border-b border-black/5 dark:border-white/5 rounded-b-2xl bg-white/30 dark:bg-white/5 -mt-2">
                      <div className="h-4" /> {/* Spacer */}
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
