import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToId } from '@/lib/scroll'

/**
 * When landing on any route with a hash (e.g. /contact#audit), scroll after mount.
 */
export function HashScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const id = location.hash.replace(/^#/, '')
    if (!id) return

    const frame = window.requestAnimationFrame(() => {
      scrollToId(id, 'smooth')
    })

    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  return null
}
