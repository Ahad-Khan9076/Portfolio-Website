import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { AcquisitionSystemVisual } from '@/components/sections/AcquisitionSystemVisual'
import { SectionDetailLink } from '@/components/ui/SectionDetailLink'
import { acquisitionStages } from '@/data/acquisitionSystem'
import { AmbientGlow } from '@/components/ui/AmbientGlow'
import { easePremium, motionDurations } from '@/lib/motion'
import { sectionContainerClass } from '@/lib/sectionLayout'

export function HomeSystemsPreviewSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="systems"
      className="relative isolate overflow-hidden bg-brand-black text-brand-white scroll-mt-24"
      aria-labelledby="home-systems-heading"
    >
      <AmbientGlow position="top-left" className="-left-16 opacity-[0.28]" />
      <AmbientGlow position="bottom-right" className="opacity-[0.22]" />

      <div className={sectionContainerClass(true)}>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: motionDurations.slow, ease: easePremium }}
            className="lg:col-span-5"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
              The operating system
            </p>
            <h2
              id="home-systems-heading"
              className="mt-4 text-balance text-brand-white"
            >
              One acquisition engine — not scattered tactics.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
              Profile through follow-up — wired so conversations become pipeline.
            </p>

            <ol className="mt-8 flex flex-wrap gap-2">
              {acquisitionStages.map((stage) => (
                <li key={stage.id}>
                  <span className="inline-block border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-tight text-gray-200">
                    {stage.title}
                  </span>
                </li>
              ))}
            </ol>

            <SectionDetailLink
              to="/systems"
              label="Explore the full 8-stage system"
              showDivider={false}
              tone="dark"
            />
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: motionDurations.slow,
              delay: reducedMotion ? 0 : 0.08,
              ease: easePremium,
            }}
            className="min-w-0 lg:col-span-7"
          >
            <Link
              to="/systems"
              className="block transition-opacity hover:opacity-95"
              aria-label="Open full acquisition system page"
            >
              <AcquisitionSystemVisual />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
