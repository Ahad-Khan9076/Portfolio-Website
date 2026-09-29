import { cn } from '@/lib/cn'

interface SectionEyebrowProps {
  children: string
  className?: string
  tone?: 'light' | 'dark'
}

export function SectionEyebrow({
  children,
  className,
  tone = 'light',
}: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        'text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue sm:text-sm',
        tone === 'dark' && 'text-brand-blue',
        className,
      )}
    >
      {children}
    </p>
  )
}
