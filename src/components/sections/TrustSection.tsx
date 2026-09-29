import { motion } from 'framer-motion'
import { StatCard } from '@/components/ui/StatCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

const channels = [
  'Upwork',
  'Fiverr',
  'LinkedIn',
  'Email',
  'Inbound',
  'Outbound',
] as const

/**
 * Only verified statistics are shown.
 * "100+ Clients Closed" is omitted — not present in verified brand data.
 */
const verifiedStats = [
  { value: '4+', label: 'Years' },
  { value: '$50K+', label: 'New Revenue Generated' },
] as const

export function TrustSection() {
  return (
    <section
      className="relative overflow-hidden border-t border-brand-black/5 bg-brand-white"
      aria-labelledby="trust-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-brand-blue/40 blur-3xl opacity-40"
      />

      <div className="container-site relative section-padding !py-14 md:!py-20">
        <SectionHeading
          titleId="trust-heading"
          eyebrow="Where clients are found"
          title="Built across the channels where service businesses find clients."
          className="max-w-3xl"
        />

        <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-brand-black/10 bg-brand-black/10 sm:grid-cols-3 lg:grid-cols-6">
          {channels.map((channel, index) => (
            <motion.li
              key={channel}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex min-h-[4.5rem] items-center justify-center bg-brand-white px-3 py-4 text-center"
            >
              <span className="text-sm font-semibold tracking-tight text-brand-black md:text-base">
                {channel}
              </span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12 grid gap-8 border-t border-brand-black/10 pt-10 sm:grid-cols-2 sm:gap-12 md:mt-14 md:pt-12">
          {verifiedStats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
