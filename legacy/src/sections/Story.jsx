import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BlurText } from '../components/Animations';

const Story = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <section id="story" className="min-h-screen relative flex items-center justify-center py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: y1, opacity }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/20 dark:bg-accent-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
        />
        <motion.div 
          style={{ y: y2, opacity }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-purple/20 dark:bg-accent-purple/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-16">
          {/* Main Headline */}
          <div className="space-y-6">
            <BlurText delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-primary-light dark:text-primary-dark">
                I build the underlying <span className="text-secondary-light dark:text-secondary-dark">systems</span> that products, platforms, and financial networks depend on.
              </h1>
            </BlurText>
          </div>

          {/* Narrative Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-black/5 dark:border-white/5">
            <div className="md:col-span-4">
              <BlurText delay={0.4}>
                <h3 className="text-lg font-medium text-primary-light dark:text-primary-dark mb-2">
                  Srikanta Magaji's Narrative
                </h3>
                <div className="h-1 w-12 bg-accent-blue rounded-full"></div>
              </BlurText>
            </div>
            
            <div className="md:col-span-8 space-y-8">
              <BlurText delay={0.6}>
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-secondary-light dark:text-secondary-dark">
                  When complexity increases, systems usually fail first. <br className="hidden md:block" />
                  My work focuses on designing architectures that remain stable under scale, financial risk, and regulatory pressure.
                </p>
              </BlurText>
              
              <BlurText delay={0.8}>
                <p className="text-2xl md:text-3xl font-semibold leading-relaxed text-primary-light dark:text-primary-dark">
                  Features change. <br />
                  <span className="text-accent-blue">Systems endure.</span>
                </p>
              </BlurText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
