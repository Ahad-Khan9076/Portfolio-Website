const NAV_OFFSET = 88

/**
 * Smooth-scroll to a homepage section, accounting for the sticky navbar.
 */
export function scrollToId(id: string, behavior: ScrollBehavior = 'smooth') {
  const el = document.getElementById(id)
  if (!el) return false

  const prefersReduced =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const scrollBehavior = prefersReduced ? 'auto' : behavior

  const top =
    el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET

  window.scrollTo({ top: Math.max(0, top), behavior: scrollBehavior })
  return true
}

export function getHashId(pathOrHash: string): string | null {
  if (pathOrHash.startsWith('#')) return pathOrHash.slice(1)
  const hashIndex = pathOrHash.indexOf('#')
  if (hashIndex === -1) return null
  return pathOrHash.slice(hashIndex + 1) || null
}
