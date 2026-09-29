import { User } from 'lucide-react'
import { cn } from '@/lib/cn'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company?: string
  imageUrl?: string | null
  isPlaceholder?: boolean
  className?: string
  tone?: 'light' | 'dark'
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  imageUrl,
  isPlaceholder = false,
  className,
  tone = 'light',
}: TestimonialCardProps) {
  const isDark = tone === 'dark'

  return (
    <blockquote
      className={cn(
        'flex h-full flex-col gap-6 border p-6 md:p-8',
        isDark
          ? 'border-white/10 bg-brand-black text-brand-white'
          : 'border-brand-black/10 bg-brand-white text-brand-black',
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <span
          className={cn(
            'flex size-11 shrink-0 items-center justify-center overflow-hidden border',
            isDark ? 'border-white/15 bg-white/5' : 'border-brand-black/10 bg-gray-50',
          )}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt=""
              className="size-full object-cover"
            />
          ) : (
            <User
              className={cn('size-5', isDark ? 'text-gray-500' : 'text-gray-400')}
              strokeWidth={1.5}
              aria-hidden
            />
          )}
        </span>
        {isPlaceholder ? (
          <span
            className={cn(
              'border px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.1em]',
              isDark
                ? 'border-white/15 text-gray-500'
                : 'border-gray-200 text-gray-500',
            )}
          >
            Placeholder
          </span>
        ) : null}
      </div>

      <p
        className={cn(
          'text-lg leading-relaxed font-medium tracking-tight md:text-xl',
          isDark ? 'text-brand-white' : 'text-brand-black',
          isPlaceholder && 'text-gray-500 italic',
        )}
      >
        &ldquo;{quote}&rdquo;
      </p>

      <footer className="mt-auto">
        <cite className="not-italic">
          <span className="block font-semibold">{author}</span>
          <span
            className={cn(
              'block text-sm mt-1',
              isDark ? 'text-gray-400' : 'text-gray-600',
            )}
          >
            {role}
            {company ? ` · ${company}` : ''}
          </span>
        </cite>
      </footer>
    </blockquote>
  )
}
