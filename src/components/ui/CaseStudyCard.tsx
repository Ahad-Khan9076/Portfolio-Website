import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import type { CaseStudy } from '@/data/caseStudies'

interface CaseStudyCardProps {
  study: CaseStudy
  className?: string
  tone?: 'light' | 'dark'
}

export function CaseStudyCard({
  study,
  className,
  tone = 'light',
}: CaseStudyCardProps) {
  const isDark = tone === 'dark'

  return (
    <article
      className={cn(
        'group flex h-full flex-col border p-6 md:p-8 transition-colors duration-200',
        isDark
          ? 'border-white/10 bg-white/[0.03] hover:border-brand-blue/40'
          : 'border-brand-black/10 bg-brand-white hover:border-brand-blue/40',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand-blue">
          {study.category}
        </p>
        {study.isPlaceholder ? (
          <span
            className={cn(
              'border px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.1em]',
              isDark
                ? 'border-white/15 text-gray-500'
                : 'border-gray-200 text-gray-500',
            )}
          >
            Coming soon
          </span>
        ) : null}
      </div>

      <h3
        className={cn(
          'mt-4 text-xl font-bold tracking-tight md:text-2xl',
          isDark ? 'text-brand-white' : 'text-brand-black',
        )}
      >
        {study.title}
      </h3>

      <p
        className={cn(
          'mt-3 flex-1 text-sm leading-relaxed',
          isDark ? 'text-gray-400' : 'text-gray-600',
        )}
      >
        {study.problem}
      </p>

      <div
        className={cn(
          'mt-6 border-t pt-5',
          isDark ? 'border-white/10' : 'border-brand-black/10',
        )}
      >
        <Link
          to={`/case-studies/${study.slug}`}
          className={cn(
            'inline-flex items-center gap-2 text-sm font-semibold tracking-tight transition-colors hover:text-brand-blue',
            isDark ? 'text-brand-white' : 'text-brand-black',
          )}
        >
          View Case Study
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
