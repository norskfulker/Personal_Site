import React from 'react';
import { motion } from 'framer-motion';
import { BlurText } from '../components/Animations';

const Connect = ({ onOpenContact }) => {
  return (
    <section id="connect" className="py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
      {/* Dynamic Background Gradient */}
      <motion.div 
        className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, #d6e8ff 0%, transparent 50%)",
            "radial-gradient(circle at 60% 40%, #e6d8ff 0%, transparent 50%)",
            "radial-gradient(circle at 40% 60%, #c7f5d9 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, #d6e8ff 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <BlurText>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-primary-light dark:text-primary-dark">
            I collaborate with founders and institutions building systems that require more than incremental solutions.
          </h2>
        </BlurText>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
            onClick={onOpenContact}
          >
            <div className="absolute inset-0 bg-accent-blue/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50" />
            <div className="relative bg-primary-light dark:bg-white text-white dark:text-black text-lg font-semibold px-10 py-5 rounded-full shadow-2xl flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Initiate Contact
            </div>
          </motion.button>
        </motion.div>
        
        <footer className="mt-32 text-secondary-light dark:text-secondary-dark text-sm font-medium">
          <div className="flex items-center justify-center gap-6 mb-4">
            <a href="https://www.linkedin.com/in/srikanta01/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light dark:hover:text-white transition-colors">LinkedIn</a>
          </div>
          <p>© {new Date().getFullYear()} Srikanta Magaji. Built with Courage.</p>
        </footer>
      </div>
    </section>
  );
};

export default Connect;
