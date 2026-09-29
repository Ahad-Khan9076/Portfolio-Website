import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type GlowPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'center'
  | 'hero'

interface GlowBackgroundProps {
  children?: ReactNode
  className?: string
  position?: GlowPosition
  intensity?: 'soft' | 'medium' | 'strong'
  visible?: boolean
}

const positionClasses: Record<GlowPosition, string> = {
  'top-left': 'top-0 left-0 -translate-x-1/3 -translate-y-1/3',
  'top-right': 'top-0 right-0 translate-x-1/3 -translate-y-1/3',
  'bottom-left': 'bottom-0 left-0 -translate-x-1/3 translate-y-1/3',
  'bottom-right': 'bottom-0 right-0 translate-x-1/3 translate-y-1/3',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  hero: 'top-0 right-0 translate-x-1/4 -translate-y-1/4',
}

const intensityClasses = {
  soft: 'opacity-35',
  medium: 'opacity-45',
  strong: 'opacity-55',
}

/**
 * Subtle blue glow for hero edges, section corners, cards, and CTAs.
 * Blue accent only — never a dominant background wash.
 */
export function GlowBackground({
  children,
  className,
  position = 'top-right',
  intensity = 'medium',
  visible = true,
}: GlowBackgroundProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {visible ? (
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute size-[28rem] md:size-[36rem] rounded-full blur-3xl bg-brand-blue',
            positionClasses[position],
            intensityClasses[intensity],
          )}
        />
      ) : null}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
