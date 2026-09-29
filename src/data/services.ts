export interface Service {
  id: string
  slug: string
  number: string
  title: string
  forWhom: string
  shortDescription: string
  description: string
  features: string[]
  ctaLabel: string
  ctaTo: string
  featured?: boolean
}

/**
 * Strategic service offerings — components of the acquisition system.
 */
export const services: Service[] = [
  {
    id: 'profile-gig-positioning',
    slug: 'profile-gig-positioning',
    number: '01',
    title: 'Profile & Gig Positioning',
    forWhom:
      'Marketplace profiles that aren’t driving visibility or conversations.',
    shortDescription:
      'Who you serve, what you sell, and why clients choose you.',
    description:
      'Profile and gig positioning so you read as the clear choice — not a commodity.',
    features: [
      'Upwork profile optimization',
      'Fiverr gig positioning',
      'Keyword strategy',
      'Competitor analysis',
      'Offer positioning',
      'Profile messaging',
    ],
    ctaLabel: 'Fix My Positioning',
    ctaTo: '/contact',
  },
  {
    id: 'proposal-bidding-systems',
    slug: 'proposal-bidding-systems',
    number: '02',
    title: 'Proposal & Bidding System',
    forWhom: 'Proposals sent without repeatable targeting and bidding.',
    shortDescription: 'Repeatable proposals and bids — not one-off applications.',
    description:
      'Targeting, frameworks, and follow-up that support consistent pipeline.',
    features: [
      'Job targeting',
      'Proposal strategy',
      'Proposal frameworks',
      'Bidding process',
      'Client psychology',
      'Follow-up process',
    ],
    ctaLabel: 'Build My Bidding System',
    ctaTo: '/contact',
  },
  {
    id: 'linkedin-email-outreach',
    slug: 'linkedin-email-outreach',
    number: '03',
    title: 'LinkedIn + Email Outreach',
    forWhom: 'Outbound that needs the right buyers — not random messages.',
    shortDescription: 'LinkedIn and email outreach that starts real conversations.',
    description:
      'Sequences and messaging across LinkedIn and email for qualified dialogue.',
    features: [
      'ICP definition',
      'Prospecting',
      'Messaging',
      'Outreach sequences',
      'Follow-up',
      'Pipeline management',
    ],
    ctaLabel: 'Build My Outreach System',
    ctaTo: '/contact',
  },
  {
    id: 'full-client-acquisition-system',
    slug: 'full-client-acquisition-system',
    number: '04',
    title: 'Full Client Acquisition System',
    forWhom: 'The full system — not an isolated tactic.',
    shortDescription:
      'Positioning through pipeline as one engine.',
    description:
      'End-to-end acquisition: positioning → visibility → inbound → outbound → follow-up → pipeline.',
    features: [
      'Positioning',
      'Visibility',
      'Inbound',
      'Outbound',
      'Follow-up',
      'Pipeline',
    ],
    ctaLabel: 'Build My Full System',
    ctaTo: '/contact',
    featured: true,
  },
]
