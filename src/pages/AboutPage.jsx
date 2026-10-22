import PageHero from '../components/PageHero';
import { CTAButton } from '../components/motion';
import { palettes } from '../lib/palettes';
import About from '../sections/About';
import ZoomReel from '../sections/ZoomReel';
import Values from '../sections/Values';
import Industries from '../sections/Industries';
import Difference from '../sections/Difference';
import { usePageMeta } from '../lib/page';
import { OWNER_PHOTO, pageMeta } from '../data/content';

// The four owner facts from the brief, and nothing else.
const facts = ['Co-founded GOGAME', 'Building PowerProof', 'Microsoft Research internship', 'Based in India'];

// Portrait when the owner supplies one; until then a monogram card carrying the same facts.
const Portrait = () => (
  <div className="relative aspect-[4/5] overflow-hidden rounded-4xl bg-night ring-1 ring-white/20 sm:aspect-[16/11] lg:aspect-[4/5]">
    {OWNER_PHOTO ? (
      <img src={OWNER_PHOTO} alt="Srikanta Magaji" className="absolute inset-0 h-full w-full object-cover" />
    ) : (
      <div className="absolute inset-0 grid place-items-center">
        <span className="text-[9rem] font-semibold leading-none tracking-tightest text-white/90 md:text-[11rem]">SM</span>
      </div>
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
    <ul className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
      {facts.map((f) => (
        <li key={f} className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur">{f}</li>
      ))}
    </ul>
  </div>
);

const AboutPage = () => {
  usePageMeta(pageMeta.about);
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Hi, I’m"
        accent="Srikanta."
        lead="I’m a founder-consultant based in India. I co-founded GOGAME, a mobile gaming company. I’m building PowerProof, a business validation and market intelligence platform for Indian MSMEs. I started out with a Microsoft Research internship."
        aside={<Portrait />}
        blobs={palettes.warm}
      >
        <CTAButton variant="bright" size="lg" />
      </PageHero>
      <About />
      <ZoomReel />
      <Values />
      <Industries />
      <Difference />
    </>
  );
};

export default AboutPage;
