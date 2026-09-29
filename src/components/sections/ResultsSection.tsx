import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { statistics } from '@/data/statistics'
import { useCountUp } from '@/hooks/useCountUp'
import { SectionDetailLink } from '@/components/ui/SectionDetailLink'
import { cn } from '@/lib/cn'
import { sectionContainerClass } from '@/lib/sectionLayout'

function AnimatedStat({
  countTo,
  prefix = '',
  suffix = '',
  fallback,
  className,
}: {
  countTo?: number
  prefix?: string
  suffix?: string
  fallback: string
  className?: string
}) {
  const { ref, value } = useCountUp({
    end: countTo ?? 0,
    enabled: typeof countTo === 'number',
    duration: 1100,
  })

  const display =
    typeof countTo === 'number' ? `${prefix}${value}${suffix}` : fallback

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}

interface ResultsSectionProps {
  hideIntro?: boolean
  compact?: boolean
  detailLink?: { to: string; label: string }
}

export function ResultsSection({
  hideIntro = false,
  compact = false,
  detailLink,
}: ResultsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.25 })

  return (
    <section
      id="results"
      ref={sectionRef}
      className={cn(
        'relative overflow-hidden bg-brand-white scroll-mt-24',
        hideIntro && '!pt-0',
      )}
      aria-labelledby={hideIntro ? undefined : 'results-heading'}
      aria-label={hideIntro ? 'Statistics' : undefined}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-10 size-[22rem] rounded-full bg-brand-blue/40 blur-3xl opacity-35"
      />

      <div
        className={sectionContainerClass(
          compact,
          hideIntro ? '!pt-0 md:!pt-2' : undefined,
        )}
      >
        {!hideIntro ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Proof
            </p>
            <h2 id="results-heading" className="mt-4 text-brand-black">
              Proof over promises.
            </h2>
          </motion.div>
        ) : null}

        <div
          className={cn(
            'grid grid-cols-1 gap-x-10 gap-y-12 border-t border-brand-black/10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8',
            hideIntro
              ? 'mt-0 border-t-0 pt-0'
              : 'mt-12 pt-12 lg:mt-16 lg:pt-16',
          )}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.45,
                delay: 0.08 + index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                'flex flex-col border-l-2 border-brand-blue pl-5',
                index === 0 && 'lg:pl-0 lg:border-l-0',
              )}
            >
              <p className="text-4xl font-extrabold tracking-tight text-brand-black sm:text-5xl lg:text-6xl lg:leading-none">
                <AnimatedStat
                  countTo={stat.countTo}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  fallback={stat.value}
                />
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-black">
                {stat.label}
              </p>
              {stat.context ? (
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-gray-600">
                  {stat.context}
                </p>
              ) : null}
            </motion.div>
          ))}
        </div>

        {detailLink ? (
          <SectionDetailLink to={detailLink.to} label={detailLink.label} />
        ) : null}
      </div>
    </section>
  )
}
