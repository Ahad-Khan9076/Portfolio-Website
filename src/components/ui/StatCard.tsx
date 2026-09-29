import { cn } from '@/lib/cn'

interface StatCardProps {
  value: string
  label: string
  className?: string
  tone?: 'light' | 'dark'
}

export function StatCard({
  value,
  label,
  className,
  tone = 'light',
}: StatCardProps) {
  const isDark = tone === 'dark'

  return (
    <div
      className={cn(
        'flex flex-col gap-2 border-l-2 border-brand-blue pl-5 py-2',
        className,
      )}
    >
      <p
        className={cn(
          'text-3xl md:text-4xl font-extrabold tracking-tight',
          isDark ? 'text-brand-white' : 'text-brand-black',
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          'text-sm md:text-base leading-snug max-w-[16rem]',
          isDark ? 'text-gray-400' : 'text-gray-600',
        )}
      >
        {label}
      </p>
    </div>
  )
}
