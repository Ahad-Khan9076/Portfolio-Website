import { motion } from 'framer-motion'
import { problemCards } from '@/data/problems'
import { SectionDetailLink } from '@/components/ui/SectionDetailLink'
import { cn } from '@/lib/cn'
import { sectionContainerClass } from '@/lib/sectionLayout'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.05 + i * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

interface ProblemDiagnosisSectionProps {
  /** Hide duplicate heading when page already has PageIntro */
  hideIntro?: boolean
  compact?: boolean
  detailLink?: { to: string; label: string }
}

export function ProblemDiagnosisSection({
  hideIntro = false,
  compact = false,
  detailLink,
}: ProblemDiagnosisSectionProps) {
  return (
    <section
      id="how-i-help"
      className={cn(
        'relative overflow-hidden bg-brand-white scroll-mt-24',
        hideIntro && '!pt-0',
      )}
      aria-labelledby={hideIntro ? undefined : 'problem-heading'}
      aria-label={hideIntro ? 'Problem diagnosis cards' : undefined}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 size-[26rem] translate-x-1/3 rounded-full bg-brand-blue/45 blur-3xl opacity-40"
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Problem diagnosis
            </p>
            <h2
              id="problem-heading"
              className="mt-4 text-balance text-brand-black"
            >
              Your problem probably isn’t your skill.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
              It’s the system between skill and revenue.
            </p>
          </motion.div>
        ) : null}

        <div
          className={cn(
            'grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5',
            hideIntro ? 'mt-0' : 'mt-12 lg:mt-16',
          )}
        >
          {problemCards.map((card, index) => {
            const Icon = card.icon
            const isLarge = card.span.includes('7') || card.span.includes('8')

            return (
              <motion.article
                key={card.id}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className={cn(
                  'group relative flex flex-col justify-between border border-brand-black/10 bg-brand-white p-6 transition-colors duration-300 hover:border-brand-blue/40 md:p-7',
                  isLarge ? 'md:min-h-[14rem] lg:min-h-[16rem]' : 'md:min-h-[12rem]',
                  card.span,
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs font-semibold tracking-[0.16em] text-brand-blue">
                    {card.number}
                  </span>
                  <span className="flex size-9 items-center justify-center border border-brand-black/10 text-brand-black transition-colors duration-300 group-hover:border-brand-blue/40 group-hover:text-brand-blue">
                    <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                  </span>
                </div>

                <div className={cn('mt-8', isLarge && 'md:mt-12')}>
                  <h3 className="text-xl font-bold tracking-tight text-brand-black md:text-2xl">
                    {card.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-3 leading-relaxed text-gray-600',
                      isLarge ? 'max-w-xl text-base md:text-lg' : 'text-sm md:text-base',
                    )}
                  >
                    {card.description}
                  </p>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-brand-blue transition-all duration-300 group-hover:w-full"
                />
              </motion.article>
            )
          })}
        </div>

        {detailLink ? (
          <SectionDetailLink to={detailLink.to} label={detailLink.label} />
        ) : null}
      </div>
    </section>
  )
}
