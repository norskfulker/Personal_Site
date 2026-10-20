import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './sections/Hero';
import About from './sections/About';
import ZoomReel from './sections/ZoomReel';
import Services from './sections/Services';
import Values from './sections/Values';
import Work from './sections/Work';
import Industries from './sections/Industries';
import Testimonials from './sections/Testimonials';
import Approach from './sections/Approach';
import Difference from './sections/Difference';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-royal to-aqua" />;
};

function App() {
  const [ready, setReady] = useState(false);

  return (
    <SmoothScroll>
      <Preloader onDone={() => setReady(true)} />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero ready={ready} />
        <About />
        <ZoomReel />
        <Services />
        <Values />
        <Work />
        <Industries />
        <Testimonials />
        <Approach />
        <Difference />
        <FAQ />
        <Contact />
      </main>
    </SmoothScroll>
  );
}

export default App;
