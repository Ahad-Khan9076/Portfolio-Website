/** Premium easing curve for section motion. */
export const easePremium = [0.22, 1, 0.36, 1] as const

export const motionDurations = {
  fast: 0.35,
  base: 0.45,
  slow: 0.55,
} as const

export function getFadeUpTransition(reducedMotion: boolean, delay = 0) {
  if (reducedMotion) {
    return { duration: 0 }
  }
  return {
    duration: motionDurations.base,
    delay,
    ease: easePremium,
  }
}

export function getFadeUpInitial(reducedMotion: boolean) {
  if (reducedMotion) return false
  return { opacity: 0, y: 14 }
}

export function getFadeUpAnimate(reducedMotion: boolean) {
  if (reducedMotion) return { opacity: 1, y: 0 }
  return { opacity: 1, y: 0 }
}
