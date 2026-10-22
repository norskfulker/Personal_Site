import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { CTAButton } from '../components/motion';
import { palettes } from '../lib/palettes';
import { ease } from '../lib/anim';
import { usePageMeta } from '../lib/page';
import { pageMeta, posts, samplePosts, services } from '../data/content';

// Real posts always win. Sample ones exist only so the draft shows the layout:
// they are tagged "Sample" and never shipped in a production build.
const items = posts.length ? posts : import.meta.env.DEV ? samplePosts.map((p) => ({ ...p, sample: true })) : [];

const filters = [{ slug: 'all', short: 'All' }, ...services];

const BlogPage = () => {
  usePageMeta(pageMeta.blog);
  const [filter, setFilter] = useState('all');
  const shown = items.filter((p) => filter === 'all' || p.service === filter);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes from"
        accent="the work"
        lead="Short, plain and practical. What I look at, and why."
        blobs={palettes.cool}
      />

      <section className="bg-pastel py-16 md:py-24">
        <div className="container-x">
          {items.length === 0 ? (
            <div className="card mx-auto max-w-2xl p-10 text-center md:p-14">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">First posts are on the way.</h2>
              <p className="mx-auto mt-4 max-w-md text-muted">Until then, the quickest way to get an answer is a free 30-minute call.</p>
              <div className="mt-8 flex justify-center">
                <CTAButton size="lg" />
              </div>
            </div>
          ) : (
            <>
              <div className="mb-10 flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f.slug}
                    onClick={() => setFilter(f.slug)}
                    className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${filter === f.slug ? 'text-white' : 'bg-white text-ink ring-1 ring-line hover:ring-ink'}`}
                  >
                    {filter === f.slug && <motion.span layoutId="blog-filter" className="absolute inset-0 rounded-full bg-ink" transition={{ type: 'spring', stiffness: 420, damping: 36 }} />}
                    <span className="relative">{f.short}</span>
                  </button>
                ))}
              </div>

              <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {shown.map((p, i) => (
                    <motion.article
                      key={p.title}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease, delay: i * 0.04 }}
                      className="card card-hover group flex flex-col overflow-hidden p-2"
                    >
                      <div className={`relative aspect-[16/10] overflow-hidden rounded-[1.1rem] bg-fog`}>
                        <img src={p.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <span className="label absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-ink">{services.find((s) => s.slug === p.service).short}</span>
                        {p.sample && <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-amber-800">Sample</span>}
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h2 className="text-xl font-semibold leading-snug tracking-[-0.02em]">{p.title}</h2>
                        <p className="mt-2 text-muted">{p.excerpt}</p>
                        <div className="mt-auto flex items-center justify-between pt-6">
                          <span className="label text-muted">{p.date || 'Draft'}</span>
                          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-violet group-hover:text-white">
                            <ArrowUpRight size={18} />
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
