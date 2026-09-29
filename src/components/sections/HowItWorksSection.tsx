import { motion } from 'framer-motion'
import { SectionDetailLink } from '@/components/ui/SectionDetailLink'
import { howItWorksHeadline, howItWorksSteps } from '@/data/howItWorks'
import { sectionContainerClass } from '@/lib/sectionLayout'

interface HowItWorksSectionProps {
  compact?: boolean
  detailLink?: { to: string; label: string }
}

export function HowItWorksSection({
  compact = false,
  detailLink,
}: HowItWorksSectionProps) {
  return (
    <section
      className="relative overflow-hidden bg-brand-white"
      aria-labelledby="how-heading"
    >
      <div className={sectionContainerClass(compact)}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Process
          </p>
          <h2 id="how-heading" className="mt-4 text-brand-black">
            {howItWorksHeadline}
          </h2>
        </motion.div>

        <div className="relative mt-12 lg:mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-5 hidden h-px bg-brand-black/10 md:block"
          />
          <motion.div
            aria-hidden
            className="absolute left-0 top-5 hidden h-px w-full origin-left bg-brand-blue md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
            {howItWorksSteps.map((step, index) => (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex flex-col gap-4 border border-brand-black/10 bg-brand-white p-6 md:border-0 md:bg-transparent md:p-0 md:pt-2"
              >
                <span className="relative z-10 flex size-10 items-center justify-center border-2 border-brand-blue bg-brand-white font-mono text-xs font-bold text-brand-blue">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-brand-black">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {detailLink ? (
          <SectionDetailLink to={detailLink.to} label={detailLink.label} />
        ) : null}
      </div>
    </section>
  )
}
