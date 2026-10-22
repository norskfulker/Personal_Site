import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';
import Contact from './sections/Contact';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import BlogPage from './pages/BlogPage';
import NotFound from './pages/NotFound';
import { ReadyContext } from './lib/page';

// New page starts at the top. A case-study link (#case-…) opens its modal instead, so leave that alone.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.location.hash.startsWith('#case-')) return;
    if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const { pathname } = useLocation();

  return (
    <ReadyContext.Provider value>
      <SmoothScroll>
        <ScrollToTop />
        <Navbar />
        <motion.main key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketing" element={<ServicePage slug="marketing" />} />
            <Route path="/advisory" element={<ServicePage slug="advisory" />} />
            <Route path="/software" element={<ServicePage slug="software" />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
        {/* Every page ends with the booking call to action (owner brief). */}
        <Contact />
        <Footer />
        <StickyCTA />
      </SmoothScroll>
    </ReadyContext.Provider>
  );
}

export default App;
