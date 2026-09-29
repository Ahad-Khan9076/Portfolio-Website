import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { caseStudies } from '@/data/caseStudies'
import { SectionDetailLink } from '@/components/ui/SectionDetailLink'
import { cn } from '@/lib/cn'
import { sectionContainerClass } from '@/lib/sectionLayout'

const flowSteps = [
  { key: 'client', label: 'Client' },
  { key: 'problem', label: 'Problem' },
  { key: 'diagnosis', label: 'Diagnosis' },
  { key: 'whatChanged', label: 'What Changed' },
  { key: 'result', label: 'Result' },
  { key: 'lesson', label: 'Lesson' },
] as const

interface CaseStudiesSectionProps {
  hideIntro?: boolean
  compact?: boolean
  previewLimit?: number
  detailLink?: { to: string; label: string }
}

export function CaseStudiesSection({
  hideIntro = false,
  compact = false,
  previewLimit,
  detailLink,
}: CaseStudiesSectionProps) {
  const studies = previewLimit
    ? caseStudies.slice(0, previewLimit)
    : caseStudies
  return (
    <section
      id="case-studies"
      className={cn(
        'relative overflow-hidden bg-brand-black text-brand-white scroll-mt-24',
        hideIntro && '!pt-0',
      )}
      aria-labelledby={hideIntro ? undefined : 'case-studies-heading'}
      aria-label={hideIntro ? 'Case studies' : undefined}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-24 size-[26rem] rounded-full bg-brand-blue/45 blur-3xl opacity-40"
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
              Case studies
            </p>
            <h2 id="case-studies-heading" className="mt-4 text-brand-white">
              Different problems.
              <br className="hidden sm:block" />
              Same principle: build the system.
            </h2>
          </motion.div>
        ) : null}

        <div
          className={cn(
            'grid grid-cols-1 gap-5 lg:grid-cols-2',
            hideIntro ? 'mt-0' : 'mt-12',
          )}
        >
          {studies.map((study, index) => {
            const values = {
              client: study.client,
              problem: study.problem,
              diagnosis: study.diagnosis,
              whatChanged: study.whatChanged,
              result: study.result,
              lesson: study.lesson,
            }

            return (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-brand-blue/40 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand-blue">
                    {study.category}
                  </p>
                  {study.isPlaceholder ? (
                    <span className="border border-white/15 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-gray-500">
                      Coming soon
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-brand-white md:text-2xl">
                  {study.title}
                </h3>

                <ol className="mt-6 flex flex-1 flex-col gap-0">
                  {(previewLimit
                    ? flowSteps.filter((s) =>
                        ['client', 'problem', 'result'].includes(s.key),
                      )
                    : flowSteps
                  ).map((step, stepIndex, arr) => (
                    <li
                      key={step.key}
                      className={cn(
                        'relative grid grid-cols-[5.5rem_1fr] gap-3 border-l border-white/10 py-3 pl-4',
                        stepIndex === 0 && 'pt-0',
                        stepIndex === arr.length - 1 && 'pb-0',
                      )}
                    >
                      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-gray-500">
                        {step.label}
                      </span>
                      <span className="text-sm leading-relaxed text-gray-400">
                        {values[step.key]}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-brand-white transition-colors hover:text-brand-blue"
                  >
                    View Case Study
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>

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
