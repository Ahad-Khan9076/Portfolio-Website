import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
  titleId?: string
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className,
  titleId,
  children,
}: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <div
      className={cn(
        'flex flex-col gap-4 max-w-3xl',
        align === 'center' && 'mx-auto text-center items-center',
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className={cn(
          'text-balance',
          isDark ? 'text-brand-white' : 'text-brand-black',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'text-base md:text-lg leading-relaxed max-w-2xl',
            isDark ? 'text-gray-300' : 'text-gray-600',
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  )
}
