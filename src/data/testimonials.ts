export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company?: string
  imageUrl?: string | null
  isPlaceholder: boolean
}

/**
 * No fabricated client quotes.
 * Placeholders until verified testimonials are supplied.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'placeholder-1',
    quote: 'Verified testimonial pending.',
    author: 'Client name pending',
    role: 'Role pending',
    company: undefined,
    imageUrl: null,
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    quote: 'Verified testimonial pending.',
    author: 'Client name pending',
    role: 'Role pending',
    company: undefined,
    imageUrl: null,
    isPlaceholder: true,
  },
  {
    id: 'placeholder-3',
    quote: 'Verified testimonial pending.',
    author: 'Client name pending',
    role: 'Role pending',
    company: undefined,
    imageUrl: null,
    isPlaceholder: true,
  },
]
