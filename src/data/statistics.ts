export interface Statistic {
  id: string
  /** Display value shown after animation (or as-is for non-numeric) */
  value: string
  label: string
  /** Numeric target for count-up; omit for non-numeric values */
  countTo?: number
  prefix?: string
  suffix?: string
  verified: boolean
  /** Optional editorial note under the label */
  context?: string
}

/**
 * Verified statistics only.
 * "100+ Clients Closed" included per Phase 4 verified supply.
 */
export const statistics: Statistic[] = [
  {
    id: 'revenue',
    value: '$50K+',
    label: 'New Revenue Generated',
    countTo: 50,
    prefix: '$',
    suffix: 'K+',
    verified: true,
    context: 'Through acquisition systems work.',
  },
  {
    id: 'clients',
    value: '100+',
    label: 'Clients Closed',
    countTo: 100,
    suffix: '+',
    verified: true,
    context: 'Marketplace, outreach, and pipeline.',
  },
  {
    id: 'experience',
    value: '4+',
    label: 'Years Experience',
    countTo: 4,
    suffix: '+',
    verified: true,
    context: 'Acquisition systems across channels.',
  },
  {
    id: 'channels',
    value: 'Multiple',
    label: 'Acquisition Channels',
    verified: true,
    context: 'Upwork, Fiverr, LinkedIn, email, inbound, outbound.',
  },
]
