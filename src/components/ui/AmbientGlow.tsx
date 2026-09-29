import { cn } from '@/lib/cn'

type GlowPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface AmbientGlowProps {
  position?: GlowPosition
  className?: string
}

const positionClasses: Record<GlowPosition, string> = {
  'top-left': '-left-16 top-0',
  'top-right': '-right-16 top-0',
  'bottom-left': '-left-12 bottom-0',
  'bottom-right': '-right-12 bottom-0',
}

/**
 * Subtle brand glow — kept behind content, 50–60% effective opacity.
 */
export function AmbientGlow({
  position = 'top-right',
  className,
}: AmbientGlowProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute size-[min(22rem,70vw)] rounded-full bg-brand-blue blur-3xl opacity-[0.35]',
        positionClasses[position],
        className,
      )}
    />
  )
}
