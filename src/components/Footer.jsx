import { ArrowUp, ArrowUpRight } from 'lucide-react';
import Logo from '../assets/Logo.svg';
import { scrollToId } from '../lib/anim';
import { CTAButton, Reveal } from './motion';
import { CONTACT_URL, DISCLAIMER, EMAIL, GITHUB_URL, LINKEDIN_URL, PITCH, TAGLINE, TBC, navLinks, services } from '../data/content';

const linkCls = 'group inline-flex items-center gap-1.5 text-ink/70 transition-colors hover:text-royal';

const Col = ({ title, children }) => (
  <div>
    <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate">{title}</div>
    <div className="flex flex-col items-start gap-3 text-[15px]">{children}</div>
  </div>
);

const Footer = () => (
  <footer className="bg-mist px-3 pb-3 pt-3">
    <div className="card overflow-hidden">
      <div className="container-x pt-14 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <img src={Logo} alt="Srikanta Magaji" className="h-6 w-auto" />
            <p className="mt-5 max-w-xs text-slate">{PITCH}</p>
            <div className="mt-8">
              <CTAButton size="md" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-8">
            <Col title="Services">
              {services.map((s) => (
                <a key={s.title} href={CONTACT_URL} target="_blank" rel="noreferrer" className={linkCls}>
                  {s.title}
                </a>
              ))}
            </Col>
            <Col title="Pages">
              {navLinks.map((l) => (
                <button key={l.id} onClick={() => scrollToId(l.id)} className={linkCls}>
                  {l.name}
                </button>
              ))}
            </Col>
            <Col title="Connect">
              <a href={CONTACT_URL} target="_blank" rel="noreferrer" className={linkCls}>
                Booking form <ArrowUpRight size={14} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={linkCls}>
                LinkedIn <ArrowUpRight size={14} />
              </a>
              {EMAIL ? <a href={`mailto:${EMAIL}`} className={linkCls}>{EMAIL}</a> : <span className="text-slate">Email {TBC}</span>}
              {GITHUB_URL ? (
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={linkCls}>
                  GitHub <ArrowUpRight size={14} />
                </a>
              ) : (
                <span className="text-slate">GitHub {TBC}</span>
              )}
            </Col>
          </div>
        </div>

        {/* Oversized tagline as the sign-off. */}
        <Reveal y={40} className="mt-16 border-t border-line pt-8 md:mt-24">
          <p className="select-none text-[13vw] font-bold leading-[0.95] tracking-tightest text-ink sm:text-[7vw] md:text-[5.6vw] xl:text-[4.9rem]">
            {/* Each phrase stays whole, so narrow screens break between phrases, never inside one. */}
            {TAGLINE.split('. ').map((phrase, i, all) => (
              <span key={phrase} className={`mr-[0.22em] inline-block whitespace-nowrap ${i === all.length - 1 ? 'text-royal' : ''}`}>
                {phrase.replace(/\.$/, '')}.
              </span>
            ))}
          </p>
        </Reveal>
      </div>

      <div className="mt-10 bg-ink text-white/60">
        <div className="container-x flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>{DISCLAIMER}</p>
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Srikanta Magaji</span>
            <button
              onClick={() => scrollToId('top')}
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full bg-aqua text-ink transition-transform hover:-translate-y-1"
            >
              <ArrowUp size={18} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
