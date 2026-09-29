import { cn } from '@/lib/cn'

/** Tighter vertical rhythm on homepage previews; full padding on detail pages. */
export function sectionContainerClass(compact?: boolean, extra?: string) {
  return cn(
    'container-site relative',
    compact ? 'section-padding-compact md:section-padding' : 'section-padding',
    extra,
  )
}
