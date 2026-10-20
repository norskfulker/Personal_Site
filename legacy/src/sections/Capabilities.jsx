import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurText } from '../components/Animations';
import { ArrowRight, X, Check } from 'lucide-react';

const pillars = [
  {
    title: 'Engineering Domains',
    items: ['Distributed Systems', 'Blockchain Infrastructure', 'Payment Systems', 'Real-Time Platforms', 'Large-Scale Platforms', 'Design Systems'],
    delay: 0,
    modalContent: [
      { title: 'Distributed Systems', desc: 'High-throughput, fault-tolerant architectures.' },
      { title: 'Blockchain Infrastructure', desc: 'L1/L2, cross-chain, interoperability.' },
      { title: 'Payment Systems', desc: 'Hybrid rails (banks + crypto + DeFi).' },
      { title: 'Real-Time Platforms', desc: 'Kafka, WebSockets, streaming pipelines.' },
      { title: 'Large-Scale Platforms', desc: 'Global concurrency, low latency.' },
      { title: 'Design Systems', desc: 'Scalable design-to-code frameworks.' }
    ]
  },
  {
    title: 'System Architecture & Industries',
    items: ['FinTech & Banking', 'DeFi', 'Gaming', 'Enterprise SaaS', 'Global Payments', 'AI Platforms'],
    delay: 0.2,
    modalContent: [
      { title: 'FinTech & Banking', desc: 'Ledgers, escrow, compliance layers.' },
      { title: 'DeFi', desc: 'Liquidity routing, risk isolation.' },
      { title: 'Gaming', desc: 'Real-time infra, virtual economies.' },
      { title: 'Enterprise SaaS', desc: 'Multi-tenant microservices.' },
      { title: 'Global Payments', desc: 'Cross-border settlement.' },
      { title: 'AI Platforms', desc: 'ML pipelines and infra.' }
    ]
  },
  {
    title: 'Technologies',
    items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Go', 'Rust', 'Kubernetes', 'Docker', 'Terraform', 'AWS'],
    delay: 0.4,
    modalContent: {
      type: 'tags',
      items: [
        'React', 'Next.js', 'TypeScript', 'Node.js', 'Go', 'Rust', 
        'Kubernetes', 'Docker', 'Terraform', 'AWS', 'GCP', 'Cloudflare', 
        'Kafka', 'Redis', 'PostgreSQL', 'Solidity', 'Substrate', 
        'Stripe', 'Adyen', 'Razorpay'
      ]
    }
  }
];

const CapabilityModal = ({ pillar, onClose }) => {
  if (!pillar) return null;

  // Prevent background scrolling when modal is open
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
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-2xl bg-surface-light dark:bg-surface-dark rounded-3xl shadow-2xl overflow-hidden border border-black/5 dark:border-white/10 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="p-6 md:p-8 flex items-center justify-between border-b border-black/5 dark:border-white/5 shrink-0">
           <div className="flex items-center gap-4">
            <div className="w-1.5 h-8 bg-accent-blue rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary-light dark:text-primary-dark">
              {pillar.title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
          >
            <X size={20} className="text-primary-light dark:text-primary-dark" />
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
          {pillar.title === 'Technologies' ? (
            <div className="flex flex-wrap gap-3">
              {pillar.modalContent.items.map((tech, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/5 text-secondary-light dark:text-secondary-dark border border-black/5 dark:border-white/5 font-medium hover:bg-accent-blue/10 hover:text-accent-blue hover:border-accent-blue/20 transition-colors cursor-default whitespace-nowrap"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {pillar.modalContent.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-1.5 rounded-full bg-accent-blue/10 text-accent-blue shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary-light dark:text-primary-dark mb-1 group-hover:text-accent-blue transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-secondary-light dark:text-secondary-dark leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  {i !== pillar.modalContent.length - 1 && (
                    <div className="ml-[34px] mt-6 h-px w-full bg-border-light dark:bg-white/5" />
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Capabilities = () => {
  const [selectedPillar, setSelectedPillar] = useState(null);

  return (
    <section id="capabilities" className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
      {/* Background Micro-grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24">
          <BlurText>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-light dark:text-primary-dark">Capabilities</h2>
          </BlurText>
          <BlurText delay={0.2}>
            <p className="text-xl text-secondary-light dark:text-secondary-dark max-w-2xl">
              Architecting the backbone of digital finance and distributed networks.
            </p>
          </BlurText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: pillar.delay }}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              onClick={() => setSelectedPillar(pillar)}
              className="group relative h-full cursor-pointer"
            >
              <div className="h-full glass-panel rounded-2xl p-8 neon-border transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent-blue/10 flex flex-col justify-between overflow-hidden">
                <div>
                  <h3 className="text-xl font-bold mb-8 text-primary-light dark:text-primary-dark flex items-center gap-3">
                    <span className="w-1 h-6 bg-accent-blue rounded-full" />
                    {pillar.title}
                  </h3>
                  <div className="space-y-6 max-h-[400px] overflow-hidden relative">
                    {pillar.items.map((item, i) => (
                      <div key={i} className="relative pl-6">
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: "100%" }}
                          transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                          className="absolute left-0 top-0 w-px bg-border-light dark:bg-white/10"
                        />
                        <BlurText delay={0.4 + (i * 0.1)}>
                          <p className="text-secondary-light dark:text-secondary-dark group-hover:text-primary-light dark:group-hover:text-white transition-colors duration-300">
                            {item}
                          </p>
                        </BlurText>
                      </div>
                    ))}
                    {/* Gradient Fade for Overflow */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPillar && (
          <CapabilityModal pillar={selectedPillar} onClose={() => setSelectedPillar(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Capabilities;
