import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mesh, SplitWords } from './motion';
import { ease } from '../lib/anim';
import { useReady } from '../lib/page';

// Dark opening for every inner page: the page's H1, a lead line, and a photo card.
// `accent` is the dimmed second half of a two-tone title.
// `aside` replaces the photo card with any custom right-hand panel.
const PageHero = ({ eyebrow, title, accent, lead, image, aside, blobs, children }) => {
  const side = image || aside;
  const ready = useReady();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const show = ready ? { opacity: 1, y: 0 } : {};

  return (
    <section ref={ref} className="relative bg-paper">
      <div className="relative overflow-hidden rounded-b-[2rem] bg-night text-white md:rounded-b-[3rem]">
        <Mesh blobs={blobs} />
        <div className="absolute inset-0 bg-gradient-to-b from-night/30 via-night/10 to-night/80" />
        <div className="grid-lines absolute inset-0" />

        <div className={`container-x relative grid items-center gap-12 pb-20 pt-36 md:pb-28 md:pt-44 ${side ? 'lg:grid-cols-12' : ''}`}>
          <motion.div style={{ y: textY }} className={side ? 'lg:col-span-7' : 'max-w-4xl'}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={show}
              transition={{ duration: 0.8, ease }}
              className="text-sm font-medium text-white/55"
            >
              {eyebrow}
            </motion.p>
            <h1 className="h-display mt-7 text-[13vw] sm:text-7xl lg:text-[5.6rem]">
              {ready && (
                <>
                  <SplitWords text={title} animateOnMount />
                  {accent && (
                    <>
                      {' '}
                      <SplitWords text={accent} animateOnMount delay={0.15} wordClassName="text-soft" />
                    </>
                  )}
                </>
              )}
            </h1>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={show} transition={{ duration: 0.9, ease, delay: 0.4 }}>
              {lead && <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">{lead}</p>}
              {children && <div className="mt-9 flex flex-wrap items-center gap-3">{children}</div>}
            </motion.div>
          </motion.div>

          {side && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
              className="relative lg:col-span-5"
            >
              {aside || (
                <div className="relative aspect-[4/5] overflow-hidden rounded-4xl ring-1 ring-white/20 sm:aspect-[16/11] lg:aspect-[4/5]">
                  <motion.img src={image} alt="" style={{ y: imgY, scale: 1.2 }} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/50 to-transparent" />
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
