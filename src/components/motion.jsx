import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_URL, CTA_LABEL } from '../data/content';
import { ease } from '../lib/anim';
import { palettes } from '../lib/palettes';


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
export const SplitWords = ({ text, className = '', wordClassName = '', delay = 0, stagger = 0.06, animateOnMount = false }) => {
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
            className={`inline-block ${wordClassName}`}
            variants={{
              hidden: { y: '110%' },
              show: { y: '0%', transition: { duration: 1, ease } },
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
  <Reveal y={12} className={`flex ${className}`}>
    <span className={`text-sm font-medium ${light ? 'text-white/55' : 'text-muted'}`}>{children}</span>
  </Reveal>
);

const MotionLink = motion.create(Link);

// Pill button with an arrow tile. On hover the label rolls up and the arrow leaves through the
// top-right corner while a fresh one enters from bottom-left. The travel distance equals the tile
// size, so the outgoing arrow is fully gone at every button size.
export const CTAButton = ({ children = CTA_LABEL, href = CONTACT_URL, variant = 'primary', size = 'md', className = '' }) => {
  const styles = {
    primary: 'bg-ink text-white hover:bg-ink/85',
    bright: 'bg-white text-ink hover:bg-white/90',
    ghost: 'bg-white text-ink ring-1 ring-line hover:ring-ink/40',
  };
  const tile = {
    primary: 'bg-white text-ink',
    bright: 'bg-ink text-white',
    ghost: 'bg-ink text-white',
  };
  const sizes = {
    md: { pill: 'gap-4 py-2 pl-6 pr-2 text-[15px]', tile: 'h-9 w-9', icon: 16, shift: 36 },
    lg: { pill: 'gap-5 py-2.5 pl-7 pr-2.5 text-base md:pl-8 md:text-[17px]', tile: 'h-11 w-11', icon: 18, shift: 44 },
  };
  const sz = sizes[size];
  // Paths like /pricing stay in the app; anything else (the booking page) opens in a new tab.
  const internal = href.startsWith('/');
  const Comp = internal ? MotionLink : motion.a;
  const linkProps = internal ? { to: href } : { href, target: href.startsWith('#') ? undefined : '_blank', rel: 'noreferrer' };
  const arrow = 'absolute inset-0 grid place-items-center';
  return (
    <Comp
      {...linkProps}
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center rounded-full font-medium tracking-tight transition-colors duration-300 ${sz.pill} ${styles[variant]} ${className}`}
    >
      <span className="relative block overflow-hidden">
        <motion.span className="block" variants={{ hover: { y: '-110%' } }} transition={{ duration: 0.4, ease }}>
          {children}
        </motion.span>
        <motion.span className="absolute inset-0 block" initial={{ y: '110%' }} variants={{ hover: { y: '0%' } }} transition={{ duration: 0.4, ease }}>
          {children}
        </motion.span>
      </span>
      <span className={`relative shrink-0 overflow-hidden rounded-full ${sz.tile} ${tile[variant]}`}>
        <motion.span className={arrow} variants={{ hover: { x: sz.shift, y: -sz.shift } }} transition={{ duration: 0.35, ease }}>
          <ArrowUpRight size={sz.icon} strokeWidth={2.2} />
        </motion.span>
        <motion.span className={arrow} initial={{ x: -sz.shift, y: sz.shift }} variants={{ hover: { x: 0, y: 0 } }} transition={{ duration: 0.35, ease }}>
          <ArrowUpRight size={sz.icon} strokeWidth={2.2} />
        </motion.span>
      </span>
    </Comp>
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

// Stripe-style colour field: soft blobs drifting on slow, offset loops behind dark sections.
export const Mesh = ({ className = '', blobs = palettes.violet }) => (
  <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
    {blobs.map((b, i) => (
      <div
        key={i}
        className={`blob ${b.cls}`}
        style={{ '--c': b.c, animation: `drift ${b.t} ease-in-out infinite${b.rev ? ' reverse' : ''}` }}
      />
    ))}
  </div>
);
