import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { scrollToId } from '../lib/anim';
import { CTAButton, Reveal } from './motion';
import { CONTACT_URL, DISCLAIMER, EMAIL, GITHUB_URL, LINKEDIN_URL, PITCH, TAGLINE, TBC, navLinks, services } from '../data/content';

const linkCls = 'group inline-flex items-center gap-1.5 text-white/65 transition-colors hover:text-white';

const Col = ({ title, children }) => (
  <div>
    <div className="label mb-5 text-white/40">{title}</div>
    <div className="flex flex-col items-start gap-3 text-[15px]">{children}</div>
  </div>
);

// The logo is used as a mask over a white fade, so it fills the footer edge to edge.
const logoMask = { WebkitMaskImage: `url(${Logo})`, maskImage: `url(${Logo})`, WebkitMaskSize: '100% 100%', maskSize: '100% 100%', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat' };

const Footer = () => (
  <footer className="bg-paper px-3 pb-3 pt-3">
    <div className="relative overflow-hidden rounded-4xl bg-night text-white">
      <div className="grid-lines absolute inset-0" />
      <div className="container-x relative pt-14 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-2xl font-semibold tracking-[-0.03em]">
              {TAGLINE.split('. ').map((phrase, i, all) => (
                <span key={phrase} className={`mr-[0.22em] inline-block whitespace-nowrap ${i === all.length - 1 ? 'text-soft' : ''}`}>
                  {phrase.replace(/\.$/, '')}.
                </span>
              ))}
            </p>
            <p className="mt-4 max-w-xs text-white/60">{PITCH}</p>
            <div className="mt-8">
              <CTAButton variant="bright" size="md" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-8">
            <Col title="Services">
              {services.map((s) => (
                <Link key={s.slug} to={`/${s.slug}`} className={linkCls}>
                  {s.title}
                </Link>
              ))}
            </Col>
            <Col title="Pages">
              <Link to="/" className={linkCls}>Home</Link>
              {navLinks.map((l) => (
                <Link key={l.path} to={l.path} className={linkCls}>
                  {l.name}
                </Link>
              ))}
            </Col>
            <Col title="Connect">
              <a href={CONTACT_URL} target="_blank" rel="noreferrer" className={linkCls}>
                Book a call <ArrowUpRight size={14} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={linkCls}>
                LinkedIn <ArrowUpRight size={14} />
              </a>
              {EMAIL ? <a href={`mailto:${EMAIL}`} className={linkCls}>{EMAIL}</a> : <span className="text-white/40">Email {TBC}</span>}
              {GITHUB_URL ? (
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={linkCls}>
                  GitHub <ArrowUpRight size={14} />
                </a>
              ) : (
                <span className="text-white/40">GitHub {TBC}</span>
              )}
            </Col>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/50 md:mt-20 md:flex-row md:items-center md:justify-between">
          <p>{DISCLAIMER}</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-xs">© {new Date().getFullYear()} Srikanta Magaji</span>
            <button
              onClick={() => scrollToId('root')}
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink transition-transform hover:-translate-y-1"
            >
              <ArrowUp size={18} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </div>

      {/* Full-size logo, end to end, as the last thing on every page. */}
      <Reveal y={60} className="relative px-3 pb-4 md:px-5 md:pb-6">
        <div role="img" aria-label="Srikanta Magaji" className="aspect-[709/102] w-full bg-gradient-to-b from-white to-white/25" style={logoMask} />
      </Reveal>
    </div>
  </footer>
);

export default Footer;
