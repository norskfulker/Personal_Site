import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

import Logo from '../assets/Logo.svg';

const navLinks = [
  { name: 'Story', id: 'story' },
  { name: 'Works', id: 'works' },
  { name: 'Capabilities', id: 'capabilities' },
  { name: 'Explorations', id: 'explorations' },
  { name: 'Connect', id: 'connect' },
];

const Navbar = ({ onOpenContact }) => {
  const [activeSection, setActiveSection] = useState('story');
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 300; // Offset for better detection

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Use Lenis scroll if available, otherwise native
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -80 });
      } else {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
      setActiveSection(id);
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md shadow-sm dark:shadow-white/5' 
          : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => scrollToSection('story')}
        >
          <img src={Logo} alt="Logo" className="h-10 w-auto dark:invert transition-all duration-300" />
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex items-center bg-white/50 dark:bg-white/5 backdrop-blur-sm px-2 py-1.5 rounded-full border border-black/5 dark:border-white/10 shadow-sm transition-colors duration-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-300"
            >
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-sm border border-black/5 dark:border-white/5"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${
                activeSection === link.id 
                  ? 'text-primary-light dark:text-primary-dark' 
                  : 'text-secondary-light dark:text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark'
              }`}>
                {link.name}
              </span>
            </button>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-primary-light dark:text-primary-dark"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-primary-light dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-black/10 dark:shadow-white/10 transition-colors"
            onClick={onOpenContact}
          >
            Initiate Contact
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
