import { motion } from 'framer-motion'
import { SectionDetailLink } from '@/components/ui/SectionDetailLink'
import { pointOfViewHeadline, principles } from '@/data/principles'
import { sectionContainerClass } from '@/lib/sectionLayout'

interface PointOfViewSectionProps {
  compact?: boolean
  detailLink?: { to: string; label: string }
}

export function PointOfViewSection({
  compact = false,
  detailLink,
}: PointOfViewSectionProps) {
  return (
    <section
      className="relative overflow-hidden bg-brand-black text-brand-white"
      aria-labelledby="pov-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-0 size-[24rem] rounded-full bg-brand-blue/50 blur-3xl opacity-45"
      />

      <div className={sectionContainerClass(compact)}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Point of view
          </p>
          <h2 id="pov-heading" className="mt-4 text-balance text-brand-white">
            {pointOfViewHeadline}
          </h2>
        </motion.div>

        <ul className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:mt-16">
          {principles.map((principle, index) => (
            <motion.li
              key={principle.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-4 bg-brand-black p-8 md:p-10 lg:min-h-[11rem]"
            >
              <span className="font-mono text-xs font-semibold tracking-[0.16em] text-brand-blue">
                {principle.number}
              </span>
              <p className="text-xl font-semibold leading-snug tracking-tight text-brand-white md:text-2xl">
                {principle.statement}
              </p>
            </motion.li>
          ))}
        </ul>

        {detailLink ? (
          <SectionDetailLink
            to={detailLink.to}
            label={detailLink.label}
            tone="dark"
          />
        ) : null}
      </div>
    </section>
  )
}
