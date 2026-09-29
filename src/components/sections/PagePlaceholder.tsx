import { Button } from '@/components/ui/Button'
import { GlowBackground } from '@/components/ui/GlowBackground'
import { cn } from '@/lib/cn'

interface PagePlaceholderProps {
  title: string
  description: string
  eyebrow?: string
  tone?: 'light' | 'dark'
  showCta?: boolean
}

/**
 * Temporary route shell used while pages are built phase-by-phase.
 */
export function PagePlaceholder({
  title,
  description,
  eyebrow = 'Coming soon',
  tone = 'light',
  showCta = true,
}: PagePlaceholderProps) {
  const isDark = tone === 'dark'

  return (
    <GlowBackground
      position="hero"
      intensity="soft"
      className={cn(
        'section-padding min-h-[60vh]',
        isDark ? 'bg-brand-black' : 'bg-brand-white',
      )}
    >
      <div className="container-site">
        <div className="max-w-3xl flex flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
            {eyebrow}
          </p>
          <h1
            className={cn(
              'text-balance',
              isDark ? 'text-brand-white' : 'text-brand-black',
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              'text-base md:text-lg leading-relaxed max-w-2xl',
              isDark ? 'text-gray-300' : 'text-gray-600',
            )}
          >
            {description}
          </p>
          {showCta ? (
            <div className="flex flex-wrap gap-3 pt-2">
              <Button to="/contact" glow>
                Book a call
              </Button>
              <Button to="/services" variant="outline">
                View services
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </GlowBackground>
  )
}
