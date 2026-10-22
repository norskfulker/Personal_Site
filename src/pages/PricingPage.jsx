import Pricing from '../sections/Pricing';
import Difference from '../sections/Difference';
import FAQ from '../sections/FAQ';
import { usePageMeta } from '../lib/page';
import { pageMeta } from '../data/content';

const PricingPage = () => {
  usePageMeta(pageMeta.pricing);
  return (
    <>
      <Pricing page />
      <Difference />
      <FAQ />
    </>
  );
};

export default PricingPage;
