import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT_URL, CTA_LABEL } from '../data/content';
import { ease } from '../lib/anim';


export const Reveal = ({ children, className = '', delay = 0, y = 32, as = 'div' }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </Tag>
  );
};

// Headline whose words rise out of a mask, one after another.
export const SplitWords = ({ text, className = '', delay = 0, stagger = 0.06, animateOnMount = false }) => {
  const words = text.split(' ');
  const trigger = animateOnMount
    ? { initial: 'hidden', animate: 'show' }
    : { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '-10% 0px' } };

  return (
    <motion.span
      className={className}
      {...trigger}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom" aria-hidden>
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%', rotate: 4 },
              show: { y: '0%', rotate: 0, transition: { duration: 1, ease } },
            }}
          >
            {word}
            {i < words.length - 1 && ' '}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

// Paragraph that lights up word by word as it scrolls through the viewport.
const ScrollWord = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {children}{' '}
    </motion.span>
  );
};

export const ScrollRevealText = ({ text, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const words = text.split(' ');
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        return (
          <ScrollWord key={i} progress={scrollYProgress} range={[start, start + 1 / words.length]}>
            {word}
          </ScrollWord>
        );
      })}
    </p>
  );
};

// Image that drifts against the scroll and zooms out as it enters.
export const ParallaxImage = ({ src, alt = '', className = '', strength = 12, zoom = true }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], zoom ? [1.35, 1.15, 1.2] : [1.2, 1.2, 1.2]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      />
    </div>
  );
};

export const Eyebrow = ({ children, light = false, className = '' }) => (
  <Reveal y={12} className={`flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] ${light ? 'text-white/70' : 'text-slate'} ${className}`}>
    <span className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-aqua' : 'bg-royal'}`} />
    {children}
  </Reveal>
);

// Pill button with an arrow tile that slides on hover, like the Framer template.
export const CTAButton = ({ children = CTA_LABEL, href = CONTACT_URL, variant = 'primary', className = '' }) => {
  const styles = {
    primary: 'bg-royal text-white shadow-[0_10px_40px_-10px_rgba(36,80,255,0.8)] hover:bg-royal-600',
    light: 'bg-white text-ink hover:bg-royal-100',
    ghost: 'bg-ink/[0.04] text-ink ring-1 ring-ink/10 hover:bg-ink/[0.07]',
  };
  const tile = {
    primary: 'bg-white/15 text-white',
    light: 'bg-royal text-white',
    ghost: 'bg-ink text-white',
  };
  return (
    <motion.a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel="noreferrer"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center gap-4 rounded-full py-2 pl-6 pr-2 text-[15px] font-medium transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      <span className="relative block overflow-hidden">
        <motion.span className="block" variants={{ hover: { y: '-110%' } }} transition={{ duration: 0.4, ease }}>
          {children}
        </motion.span>
        <motion.span className="absolute inset-0 block" initial={{ y: '110%' }} variants={{ hover: { y: '0%' } }} transition={{ duration: 0.4, ease }}>
          {children}
        </motion.span>
      </span>
      <span className={`relative grid h-9 w-9 place-items-center overflow-hidden rounded-full ${tile[variant]}`}>
        <motion.span variants={{ hover: { x: 18, y: -18 } }} transition={{ duration: 0.35, ease }}>
          <ArrowUpRight size={17} />
        </motion.span>
        <motion.span className="absolute" initial={{ x: -18, y: 18 }} variants={{ hover: { x: 0, y: 0 } }} transition={{ duration: 0.35, ease }}>
          <ArrowUpRight size={17} />
        </motion.span>
      </span>
    </motion.a>
  );
};

export const Counter = ({ to, suffix = '', prefix = '', className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 2.2, ease, onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className={className}>
      {prefix}{value}{suffix}
    </span>
  );
};

// Muted looping background video that only plays while on screen.
export const Video = ({ src, poster, className = '', style }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '200px 0px' });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (inView) el.play().catch(() => {});
    else el.pause();
  }, [inView]);

  return (
    <motion.video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      disablePictureInPicture
      style={style}
      className={`object-cover ${className}`}
    />
  );
};
