export interface CaseStudy {
  id: string
  slug: string
  category: string
  title: string
  client: string
  problem: string
  diagnosis: string
  whatChanged: string
  result: string
  lesson: string
  isPlaceholder: boolean
}

const PENDING = 'Details coming soon.'

/**
 * Category-framed placeholders only.
 * Do not invent client names, metrics, or outcomes.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: 'upwork-profile',
    slug: 'upwork-profile',
    category: 'Upwork Profile',
    title: 'Upwork Profile System',
    client: PENDING,
    problem: PENDING,
    diagnosis: PENDING,
    whatChanged: PENDING,
    result: PENDING,
    lesson: PENDING,
    isPlaceholder: true,
  },
  {
    id: 'fiverr',
    slug: 'fiverr',
    category: 'Fiverr',
    title: 'Fiverr Positioning System',
    client: PENDING,
    problem: PENDING,
    diagnosis: PENDING,
    whatChanged: PENDING,
    result: PENDING,
    lesson: PENDING,
    isPlaceholder: true,
  },
  {
    id: 'linkedin',
    slug: 'linkedin',
    category: 'LinkedIn',
    title: 'LinkedIn Outreach System',
    client: PENDING,
    problem: PENDING,
    diagnosis: PENDING,
    whatChanged: PENDING,
    result: PENDING,
    lesson: PENDING,
    isPlaceholder: true,
  },
  {
    id: 'outbound',
    slug: 'outbound',
    category: 'Outbound',
    title: 'Outbound Acquisition System',
    client: PENDING,
    problem: PENDING,
    diagnosis: PENDING,
    whatChanged: PENDING,
    result: PENDING,
    lesson: PENDING,
    isPlaceholder: true,
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}
