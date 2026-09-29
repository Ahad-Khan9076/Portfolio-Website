import { useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  end: number
  duration?: number
  enabled?: boolean
  decimals?: number
}

/**
 * Subtle count-up when the element enters the viewport.
 */
export function useCountUp({
  end,
  duration = 1200,
  enabled = true,
  decimals = 0,
}: UseCountUpOptions) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (!enabled) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [enabled])

  useEffect(() => {
    if (!started || !enabled) return

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const next = end * eased
      setValue(decimals > 0 ? Number(next.toFixed(decimals)) : Math.round(next))

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, end, duration, enabled, decimals])

  return { ref, value, started }
}
