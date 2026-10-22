import Hero from '../sections/Hero';
import WhatIDo from '../sections/WhatIDo';
import Services from '../sections/Services';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import { usePageMeta } from '../lib/page';
import { pageMeta } from '../data/content';

// The main flow only. Everything else has its own page.
const Home = () => {
  usePageMeta(pageMeta.home);
  return (
    <>
      <Hero />
      <WhatIDo />
      <Services />
      <Pricing compact />
      <FAQ />
    </>
  );
};

export default Home;
