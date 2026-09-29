import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  easePremium,
  motionDurations,
} from '@/lib/motion'
import { cn } from '@/lib/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** Viewport intersection threshold */
  amount?: number
}

/**
 * Standard section entrance — respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
}: RevealProps) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: motionDurations.base,
        delay,
        ease: easePremium,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
