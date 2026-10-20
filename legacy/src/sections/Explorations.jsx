import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurText } from '../components/Animations';
import { ArrowRight, X, ArrowUpRight } from 'lucide-react';

const explorations = [
  {
    id: '01',
    title: 'Parallel Ledger Systems',
    theme: 'Hybrid financial architecture',
    description: 'Designing multi-layer ledger systems that unify traditional banking, crypto liquidity pools, and decentralized protocols into a single interoperable financial layer.',
    coreIdeas: [
      'Separation of settlement, execution, and risk layers',
      'Parallel ledgers for banks, DeFi, and payment rails',
      'Real-time reconciliation across heterogeneous systems',
      'Fault isolation to prevent systemic cascading failures'
    ],
    goal: 'Enable seamless financial flows without forcing banks and blockchain systems into the same architectural constraints.'
  },
  {
    id: '02',
    title: 'Semiconductor-Aware System Architecture',
    theme: 'Systems shaped by hardware',
    description: 'Exploring how modern semiconductor architectures (GPUs, NPUs, TPUs, custom chips) reshape distributed systems, latency models, and AI infrastructure design.',
    coreIdeas: [
      'Hardware-aware distributed computing models',
      'Latency optimization based on chip-level execution patterns',
      'GPU-first architectures for AI-heavy platforms',
      'Infrastructure design aligned with hardware bottlenecks'
    ],
    goal: 'Design systems where software architecture evolves with silicon capabilities, not against them.'
  },
  {
    id: '03',
    title: 'Digital Identity Fragmentation',
    theme: 'Identity crisis in the internet era',
    description: 'Researching why digital identity is fragmented across platforms, nations, and protocols, and how decentralized identity systems can solve trust and sovereignty issues.',
    coreIdeas: [
      'Identity as a protocol, not a platform feature',
      'Decentralized identifiers (DIDs) and verifiable credentials',
      'Cross-platform identity interoperability',
      'Trust models beyond centralized authorities'
    ],
    goal: 'Create identity systems that are portable, secure, and independent of any single institution.'
  },
  {
    id: '04',
    title: 'AI-Orchestrated Infrastructure',
    theme: 'AI as system operator',
    description: 'Designing architectures where AI models actively orchestrate infrastructure, decision-making, and resource allocation across digital platforms.',
    coreIdeas: [
      'AI-driven load balancing and scaling',
      'Autonomous system optimization',
      'Predictive infrastructure management',
      'AI as a control layer over distributed systems'
    ],
    goal: 'Move from human-operated infrastructure to self-optimizing systems.'
  },
  {
    id: '05',
    title: 'Post-Blockchain Financial Models',
    theme: 'Beyond traditional blockchain',
    description: 'Exploring financial architectures that go beyond conventional blockchain models, combining programmable money, hybrid consensus, and adaptive economic layers.',
    coreIdeas: [
      'Hybrid consensus (centralized + decentralized)',
      'Programmable monetary policies',
      'Adaptive liquidity models',
      'Financial systems that evolve with market conditions'
    ],
    goal: 'Design financial systems that are flexible, scalable, and economically intelligent.'
  },
  {
    id: '06',
    title: 'Civilizational-Scale Platforms',
    theme: 'Systems at societal scale',
    description: 'Designing architectures for platforms that operate at societal scale, where real-time data, algorithms, and digital infrastructure shape economic and social behavior.',
    coreIdeas: [
      'Event-driven platforms processing societal-scale data',
      'Algorithmic governance models',
      'Real-time economic and social feedback loops',
      'Infrastructure for digital civilizations'
    ],
    goal: 'Understand how system architecture influences societies, not just products.'
  }
];

const ExplorationModal = ({ item, onClose }) => {
  if (!item) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-md"
      />
      
      <motion.div 
        layoutId={`exploration-card-${item.id}`}
        className="relative w-full max-w-3xl bg-surface-light dark:bg-surface-dark rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-black/5 dark:border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors z-20"
        >
          <X size={20} className="text-primary-light dark:text-primary-dark" />
        </button>

        <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
          <div className="mb-8">
            <span className="font-mono text-sm text-accent-purple mb-2 block">Experiment {item.id}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-light dark:text-primary-dark mb-4">
              {item.title}
            </h2>
            <div className="inline-block px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple text-sm font-medium">
              {item.theme}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xl leading-relaxed text-secondary-light dark:text-secondary-dark">
                {item.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-primary-light dark:text-primary-dark mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-purple rounded-full" />
                  Core Ideas
                </h3>
                <ul className="space-y-3">
                  {item.coreIdeas.map((idea, i) => (
                    <li key={i} className="flex items-start gap-3 text-secondary-light dark:text-secondary-dark">
                      <ArrowUpRight size={16} className="mt-1 text-accent-purple shrink-0" />
                      <span className="text-sm">{idea}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent-purple/5 border border-accent-purple/10 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-primary-light dark:text-primary-dark mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                  Goal
                </h3>
                <p className="text-secondary-light dark:text-secondary-dark italic">
                  "{item.goal}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Explorations = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="explorations" className="py-32 bg-white/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <BlurText>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-light dark:text-primary-dark">Explorations</h2>
            </BlurText>
            <BlurText delay={0.2}>
              <p className="text-xl text-secondary-light dark:text-secondary-dark">
                Independent research into distributed systems, financial architectures, and interoperability frameworks.
              </p>
            </BlurText>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {explorations.map((item, index) => (
            <motion.div
              key={index}
              layoutId={`exploration-card-${item.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer"
            >
              <div className="glass-card h-full p-8 rounded-2xl flex flex-col justify-between min-h-[320px] relative overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-accent-purple/10 dark:group-hover:shadow-accent-purple/20 border border-black/5 dark:border-white/5">
                {/* Gradient Blob */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl group-hover:bg-accent-purple/30 transition-colors duration-500 opacity-0 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-xs text-accent-purple px-2 py-1 rounded bg-accent-purple/10">
                      EXP {item.id}
                    </span>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-primary-light dark:text-white"
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold leading-tight text-primary-light dark:text-primary-dark mb-3 group-hover:text-accent-purple transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-secondary-light dark:text-secondary-dark text-sm line-clamp-3">
                    {item.theme}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 relative z-10">
                   <div className="flex gap-2">
                    <span className="text-xs font-medium px-2 py-1 rounded bg-black/5 dark:bg-white/10 text-secondary-light dark:text-secondary-dark">Research</span>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-black/5 dark:bg-white/10 text-secondary-light dark:text-secondary-dark">Architecture</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <ExplorationModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Explorations;
