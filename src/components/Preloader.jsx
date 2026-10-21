import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ease } from '../lib/anim';

// Short intro curtain: a counter fills, then the panel lifts away to reveal the hero.
const Preloader = ({ onDone }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n = Math.min(100, n + Math.ceil(Math.random() * 14));
      setCount(n);
      if (n === 100) {
        clearInterval(id);
        setTimeout(() => setVisible(false), 250);
      }
    }, 70);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-between bg-navy-950 p-6 text-white md:p-10"
          exit={{ y: '-100%', borderBottomLeftRadius: '50% 12%', borderBottomRightRadius: '50% 12%' }}
          transition={{ duration: 1, ease }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease }}
            className="text-lg tracking-tight text-white/70"
          >
            Market it. Advise it. <span className="font-serif italic text-white">Audit it.</span>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} className="text-7xl font-light tabular-nums tracking-tightest md:text-[9rem] md:leading-none">
            {count}
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-royal to-aqua"
            animate={{ width: `${count}%` }}
            transition={{ ease: 'linear', duration: 0.1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
