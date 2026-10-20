import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurText, FadeIn } from '../components/Animations';
import { ArrowUpRight, X, Calendar, Layers, BarChart } from 'lucide-react';

const projects = [
  {
    title: 'Parallel Ledger Escrow Infrastructure',
    description: 'Invented a multi-layer ledger architecture enabling seamless payments across banks, crypto liquidity pools, and decentralized financial systems.',
    impact: 'Foundation for hybrid financial ecosystems.',
    tags: ['DeFi', 'Blockchain', 'Architecture'],
    color: 'from-accent-blue/20 to-accent-purple/20',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000',
    details: {
      about: "A groundbreaking financial infrastructure that bridges traditional banking with decentralized finance. This system introduces a parallel ledger mechanism that ensures atomic settlements between disparate financial networks.",
      techStack: ["Rust", "Solidity", "Node.js", "PostgreSQL", "Kafka"],
      timeline: "18 months (Architecture to Production)",
      metrics: "Processed $500M+ in transaction volume within first quarter."
    }
  },
  {
    title: 'GOGAME – Large-Scale Gaming Ecosystem',
    description: 'Designed and built a gaming platform scaling to 50M+ users with real-time systems, payments, and virtual economies.',
    outcome: 'Exited in 2022 via undisclosed acquisition.',
    tags: ['Gaming', 'Scalability', 'Real-time'],
    color: 'from-accent-purple/20 to-accent-orange/20',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=2000',
    details: {
      about: "Architected the backend for a massive multiplayer gaming ecosystem. The challenge was to handle millions of concurrent connections while maintaining sub-millisecond latency for game state synchronization and economy transactions.",
      techStack: ["Go", "Elixir", "Redis", "Kubernetes", "WebSockets"],
      timeline: "2 years (Inception to Exit)",
      metrics: "Scaled to 50M+ registered users with 2M+ concurrent players."
    }
  },
  {
    title: 'Global Crypto–Fiat Ramping Infrastructure',
    description: 'Architected one of the fastest crypto–fiat on/off ramping systems used by top-tier platforms globally.',
    tags: ['Payments', 'FinTech', 'Global'],
    color: 'from-accent-green/20 to-accent-blue/20',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=2000',
    details: {
      about: "Developed a high-frequency trading engine wrapper for fiat-to-crypto conversion. The system optimizes liquidity routing across multiple exchanges to provide the best rates with minimal slippage.",
      techStack: ["C++", "Python", "React", "AWS Lambda"],
      timeline: "12 months",
      metrics: "Reduced settlement time from 3 days to 30 seconds."
    }
  },
  {
    title: 'Swiss Digital Banking System Redesign',
    description: 'Re-engineered a Geneva-based banking platform into a modular, real-time financial system.',
    tags: ['Banking', 'Security', 'Enterprise'],
    color: 'from-accent-orange/20 to-accent-yellow/20',
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=2000',
    details: {
      about: "Modernization of a legacy core banking system. We moved from a monolithic architecture to domain-driven microservices, enhancing security and enabling rapid feature development for high-net-worth clients.",
      techStack: ["Java Spring Boot", "Oracle", "Angular", "Docker"],
      timeline: "24 months",
      metrics: "Zero downtime migration of $2B+ in assets."
    }
  }
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

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
        layoutId={`project-card-${project.title}`}
        className="relative w-full max-w-3xl bg-surface-light dark:bg-surface-dark rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-black/5 dark:border-white/10"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors z-10"
        >
          <X size={20} className="text-primary-light dark:text-primary-dark" />
        </button>

        <div className="h-40 sm:h-60 w-full relative shrink-0 overflow-hidden">
          {project.image ? (
            <>
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </>
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`}>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
            </div>
          )}

          <div className="absolute bottom-6 left-6 right-6 z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-2 py-0.5 text-xs font-medium rounded-full bg-white/20 backdrop-blur-md text-white border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers size={16} /> About the Work
                </h3>
                <p className="text-lg leading-relaxed text-secondary-light dark:text-secondary-dark">
                  {project.details.about}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BarChart size={16} /> Key Metrics
                </h3>
                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <p className="text-lg font-medium text-primary-light dark:text-primary-dark">
                    {project.details.metrics}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Calendar size={16} /> Timeline
                </h3>
                <p className="text-secondary-light dark:text-secondary-dark">
                  {project.details.timeline}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.details.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 text-sm rounded-lg bg-black/5 dark:bg-white/5 text-secondary-light dark:text-secondary-dark">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SelectedWorks = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="works" className="py-32 bg-white/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <BlurText>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-light dark:text-primary-dark">Selected Works</h2>
          </BlurText>
          <BlurText delay={0.2}>
            <p className="text-xl text-secondary-light dark:text-secondary-dark max-w-2xl">
              Engineering infrastructure for the next generation of finance and digital platforms.
            </p>
          </BlurText>
        </div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              layoutId={`project-card-${project.title}`}
              onClick={() => setSelectedProject(project)}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24 cursor-pointer group`}
            >
              {/* Narrative Card */}
              <div className="flex-1 w-full group-hover:opacity-80 transition-opacity duration-300">
                <FadeIn direction={index % 2 === 1 ? 'left' : 'right'}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm font-mono text-accent-blue">0{index + 1}</span>
                    <div className="h-px w-12 bg-border-light dark:bg-border-dark" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-primary-light dark:text-primary-dark group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-secondary-light dark:text-secondary-dark mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/10 text-secondary-light dark:text-secondary-dark border border-black/5 dark:border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.impact || project.outcome) && (
                    <div className="inline-block px-5 py-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-sm font-medium shadow-sm">
                      <span className="text-accent-blue mr-2">Result:</span>
                      <span className="text-primary-light dark:text-primary-dark">{project.impact || project.outcome}</span>
                    </div>
                  )}
                </FadeIn>
              </div>

              {/* Visual Preview Card */}
              <motion.div 
                className="flex-1 w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8 }}
              >
                <div className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${project.color} p-1 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl`}>
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
                  
                  <div className="absolute inset-1 bg-surface-light dark:bg-surface-dark/90 rounded-[22px] overflow-hidden">
                    {/* Abstract Tech Visualization */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 dark:opacity-20">
                      <div className="w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.1)_1px,_transparent_1px)] dark:bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]" />
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-32 h-32 rounded-full border-2 border-dashed border-accent-blue/30 animate-spin-slow" />
                       <div className="absolute w-24 h-24 rounded-full border border-accent-purple/30 animate-reverse-spin" />
                       <div className="absolute px-6 py-3 rounded-xl bg-white/80 dark:bg-black/50 backdrop-blur-md border border-white/20 shadow-lg">
                         <span className="font-mono text-sm font-semibold text-primary-light dark:text-white">View Case Study</span>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default SelectedWorks;
