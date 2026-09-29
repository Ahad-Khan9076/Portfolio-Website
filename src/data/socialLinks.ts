export interface SocialLink {
  id: string
  label: string
  href: string
  isPlaceholder?: boolean
}

/**
 * Add verified URLs when available.
 */
export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: '#',
    isPlaceholder: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: '#',
    isPlaceholder: true,
  },
  {
    id: 'upwork',
    label: 'Upwork',
    href: '#',
    isPlaceholder: true,
  },
  {
    id: 'fiverr',
    label: 'Fiverr',
    href: '#',
    isPlaceholder: true,
  },
]
