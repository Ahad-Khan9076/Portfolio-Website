import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/cn'

export type SectionDetailLinkProps = {
  to: string
  label: string
  className?: string
  centered?: boolean
  /** When false, skip the top rule (e.g. inside a column). */
  showDivider?: boolean
  tone?: 'light' | 'dark'
}

export function SectionDetailLink({
  to,
  label,
  className,
  centered = false,
  showDivider = true,
  tone = 'light',
}: SectionDetailLinkProps) {
  return (
    <div
      className={cn(
        showDivider &&
          'mt-10 border-t border-brand-black/10 pt-8 md:mt-12 md:pt-10',
        !showDivider && 'mt-8',
        centered && 'text-center',
        tone === 'dark' && showDivider && 'border-white/10',
        className,
      )}
    >
      <Link
        to={to}
        className={cn(
          'group inline-flex items-center gap-2 text-sm font-semibold tracking-tight transition-colors',
          tone === 'dark'
            ? 'text-brand-white hover:text-brand-blue'
            : 'text-brand-black hover:text-brand-blue',
        )}
      >
        {label}
        <ArrowUpRight
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </Link>
    </div>
  )
}
