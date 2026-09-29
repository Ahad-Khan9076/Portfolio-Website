import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SECTIONS = [
  { id: 'how-i-help', hash: '#how-i-help' },
  { id: 'systems', hash: '#systems' },
  { id: 'results', hash: '#results' },
  { id: 'services', hash: '#services' },
  { id: 'case-studies', hash: '#case-studies' },
  { id: 'about', hash: '#about' },
  { id: 'audit', hash: '#audit' },
  { id: 'content', hash: '#content' },
] as const

/**
 * Syncs URL hash with homepage sections while scrolling.
 */
export function useSectionScrollSpy(enabled: boolean) {
  const location = useLocation()

  useEffect(() => {
    if (!enabled || location.pathname !== '/') return

    const nodes = SECTIONS.map((section) => ({
      ...section,
      el: document.getElementById(section.id),
    })).filter((section) => section.el)

    if (nodes.length === 0) return

    const onScroll = () => {
      const navOffset = 88

      if (window.scrollY < 48) {
        if (window.location.hash) {
          window.history.replaceState(null, '', '/')
          window.dispatchEvent(new Event('hashchange'))
        }
        return
      }

      let current: (typeof nodes)[number] | null = null

      for (const section of nodes) {
        const top = section.el!.getBoundingClientRect().top
        if (top <= navOffset) {
          current = section
        }
      }

      if (!current) return

      if (window.location.hash !== current.hash) {
        window.history.replaceState(null, '', `/${current.hash}`)
        window.dispatchEvent(new Event('hashchange'))
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [enabled, location.pathname])
}
