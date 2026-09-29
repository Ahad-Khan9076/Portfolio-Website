export type ContentPlatform =
  | 'LinkedIn'
  | 'Instagram'
  | 'Newsletter'
  | 'YouTube'

export interface AuthorityPlatform {
  id: string
  name: ContentPlatform
  status: 'active' | 'future'
  description: string
}

export const authorityPlatforms: AuthorityPlatform[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    status: 'active',
    description: 'Acquisition systems thinking — shared here first.',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    status: 'active',
    description: 'Short insights on building pipeline.',
  },
  {
    id: 'newsletter',
    name: 'Newsletter',
    status: 'future',
    description: 'Deeper breakdowns — coming soon.',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    status: 'future',
    description: 'Long-form walkthroughs — later phase.',
  },
]

export const contentCategories = [
  'Client Acquisition',
  'Upwork',
  'Fiverr',
  'LinkedIn',
  'Outbound Sales',
  'Inbound Sales',
  'Personal Branding',
  'Business Development',
] as const

export interface AuthorityContentCard {
  id: string
  category: (typeof contentCategories)[number]
  title: string
  excerpt: string
  platform: ContentPlatform
  href: string
  isPlaceholder: boolean
}

const PLACEHOLDER_EXCERPT = 'Excerpt when published.'

/**
 * Editorial content cards — placeholders until real posts are linked.
 */
export const authorityContentCards: AuthorityContentCard[] = [
  {
    id: 'ca-1',
    category: 'Client Acquisition',
    title: 'Why tactics fail without a system',
    excerpt: PLACEHOLDER_EXCERPT,
    platform: 'LinkedIn',
    href: '#',
    isPlaceholder: true,
  },
  {
    id: 'upwork-1',
    category: 'Upwork',
    title: 'Profile vs. positioning on Upwork',
    excerpt: PLACEHOLDER_EXCERPT,
    platform: 'LinkedIn',
    href: '#',
    isPlaceholder: true,
  },
  {
    id: 'fiverr-1',
    category: 'Fiverr',
    title: 'Gig structure that supports conversations',
    excerpt: PLACEHOLDER_EXCERPT,
    platform: 'LinkedIn',
    href: '#',
    isPlaceholder: true,
  },
  {
    id: 'linkedin-1',
    category: 'LinkedIn',
    title: 'Outbound that opens real dialogue',
    excerpt: PLACEHOLDER_EXCERPT,
    platform: 'LinkedIn',
    href: '#',
    isPlaceholder: true,
  },
  {
    id: 'outbound-1',
    category: 'Outbound Sales',
    title: 'ICP before inbox volume',
    excerpt: PLACEHOLDER_EXCERPT,
    platform: 'LinkedIn',
    href: '#',
    isPlaceholder: true,
  },
  {
    id: 'inbound-1',
    category: 'Inbound Sales',
    title: 'Visibility with a conversion path',
    excerpt: PLACEHOLDER_EXCERPT,
    platform: 'Instagram',
    href: '#',
    isPlaceholder: true,
  },
  {
    id: 'brand-1',
    category: 'Personal Branding',
    title: 'Authority without generic marketing',
    excerpt: PLACEHOLDER_EXCERPT,
    platform: 'Instagram',
    href: '#',
    isPlaceholder: true,
  },
  {
    id: 'bd-1',
    category: 'Business Development',
    title: 'BD as system design, not hustle',
    excerpt: PLACEHOLDER_EXCERPT,
    platform: 'LinkedIn',
    href: '#',
    isPlaceholder: true,
  },
]

export const linkedInFollowCta = {
  label: 'Follow Ahad on LinkedIn',
  href: '#',
  isPlaceholder: true,
} as const
