import PageHero from '../components/PageHero';
import { CTAButton } from '../components/motion';
import { palettes } from '../lib/palettes';
import Work from '../sections/Work';
import Approach from '../sections/Approach';
import Testimonials from '../sections/Testimonials';
import { usePageMeta } from '../lib/page';
import { pageMeta } from '../data/content';

const WorkPage = () => {
  usePageMeta(pageMeta.work);
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Selected"
        accent="work"
        lead="My own venture, PowerProof, plus example engagements that show how a typical project runs. Each one: the problem, what I did, the result."
        blobs={palettes.cool}
      >
        <CTAButton variant="bright" size="lg" />
      </PageHero>
      <Work showHeader={false} />
      <Approach />
      <Testimonials />
    </>
  );
};

export default WorkPage;
