export interface ContentPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string | null
  isPlaceholder: boolean
}

/**
 * Resource/content placeholders.
 * Do not invent published articles until content is ready.
 */
export const contentPosts: ContentPost[] = [
  {
    id: 'placeholder-1',
    slug: 'coming-soon',
    title: 'Resources coming soon',
    excerpt:
      'Strategic notes on client acquisition systems for freelancers and agencies will appear here.',
    category: 'Insights',
    publishedAt: null,
    isPlaceholder: true,
  },
]
