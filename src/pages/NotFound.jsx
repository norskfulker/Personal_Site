import PageHero from '../components/PageHero';
import { CTAButton } from '../components/motion';
import { usePageMeta } from '../lib/page';

const NotFound = () => {
  usePageMeta({ title: 'Page not found | Srikanta', description: 'This page does not exist. Head back home or book a free 30-min call.' });
  return (
    <PageHero eyebrow="404" title="This page does not" accent="exist" lead="The link may be old. Start from the home page.">
      <CTAButton variant="bright" size="lg" href="/">Back home</CTAButton>
    </PageHero>
  );
};

export default NotFound;
