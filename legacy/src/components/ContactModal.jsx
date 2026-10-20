import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, ArrowRight } from 'lucide-react';
import { countryCodes } from '../data/countryCodes';

const ContactModal = ({ onClose }) => {
  const [selectedDialCode, setSelectedDialCode] = useState(countryCodes.find(c => c.code === 'US')?.dial_code || '+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceInterest, setServiceInterest] = useState('System Architecture');

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., API call) would go here
    // For now, we'll just close the modal to simulate success
    setTimeout(() => {
      onClose();
    }, 500);
  };

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
        className="relative w-full max-w-lg bg-surface-light dark:bg-surface-dark rounded-3xl shadow-2xl overflow-hidden border border-black/5 dark:border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 md:p-8 flex items-center justify-between border-b border-black/5 dark:border-white/5 shrink-0 bg-white/50 dark:bg-white/5">
          <div>
            <h2 className="text-2xl font-bold text-primary-light dark:text-primary-dark">
              Initiate Contact
            </h2>
            <p className="text-sm text-secondary-light dark:text-secondary-dark mt-1">
              Let's discuss your system architecture needs.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
          >
            <X size={20} className="text-primary-light dark:text-primary-dark" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-background-light dark:bg-background-dark">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-primary-light dark:text-primary-dark">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-primary-light dark:text-primary-dark placeholder-secondary-light dark:placeholder-secondary-dark"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-primary-light dark:text-primary-dark">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-primary-light dark:text-primary-dark placeholder-secondary-light dark:placeholder-secondary-dark"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-primary-light dark:text-primary-dark">
                Phone Number
              </label>
              <div className="flex gap-3">
                <div className="relative w-32 shrink-0">
                  <select
                    value={selectedDialCode}
                    onChange={(e) => setSelectedDialCode(e.target.value)}
                    className="w-full h-full appearance-none px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-primary-light dark:text-primary-dark text-sm cursor-pointer"
                  >
                    {countryCodes.map((country) => (
                      <option key={`${country.code}-${country.dial_code}`} value={country.dial_code} className="text-black bg-white">
                        {country.code} ({country.dial_code})
                      </option>
                    ))}
                  </select>
                  {/* Custom Arrow for consistency */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-secondary-light dark:text-secondary-dark">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <input 
                  type="tel" 
                  id="phone" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-primary-light dark:text-primary-dark placeholder-secondary-light dark:placeholder-secondary-dark"
                  placeholder="555-0123"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-primary-light dark:text-primary-dark">
                What you're looking for?
              </label>
              <div className="relative">
                <select
                  id="service"
                  value={serviceInterest}
                  onChange={(e) => setServiceInterest(e.target.value)}
                  className="w-full appearance-none px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-primary-light dark:text-primary-dark cursor-pointer"
                >
                  <option value="System Architecture" className="text-black bg-white">System Architecture</option>
                  <option value="Design Industrial Flow" className="text-black bg-white">Design Industrial Flow</option>
                  <option value="Collaborative Funding" className="text-black bg-white">Collaborative Funding</option>
                  <option value="Technology and IT" className="text-black bg-white">Technology and IT</option>
                  <option value="Sourcing" className="text-black bg-white">Sourcing</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-secondary-light dark:text-secondary-dark">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-primary-light dark:text-primary-dark">
                Message
              </label>
              <textarea 
                id="message" 
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-primary-light dark:text-primary-dark placeholder-secondary-light dark:placeholder-secondary-dark resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="w-full group relative flex items-center justify-center gap-2 bg-primary-light dark:bg-white text-white dark:text-black font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactModal;
