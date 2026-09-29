/**
 * Verified site identity and brand copy.
 * Do not invent clients, revenue claims, awards, or testimonials.
 */

export const siteConfig = {
  name: 'Ahad Ali Khan',
  shortName: 'Ahad',
  role: 'Business Developer & Client Acquisition Strategist',
  founderOf: 'BidsSync',
  experience: '4+ years',
  positioning:
    'I help freelancers and agencies build end-to-end client acquisition systems.',
  headline: "I don't build better profiles. I build client acquisition systems.",
  claimedResult: '$50K+ in new revenue generated for freelancers and agencies.',
  email: '', // Add verified contact email when available
  systemFlow: [
    'Positioning',
    'Visibility',
    'Outreach',
    'Conversations',
    'Follow-up',
    'Conversion',
    'Pipeline',
  ] as const,
  audiences: [
    {
      id: 'solo-freelancers',
      label: 'Solo freelancers',
      description: 'Stuck around $1K–$3K/month',
    },
    {
      id: 'agencies',
      label: 'Agencies',
      description: 'Plateaued on marketplaces, LinkedIn, or outbound',
    },
  ],
  channels: [
    'Upwork',
    'Fiverr',
    'LinkedIn',
    'Email',
    'Inbound Sales',
    'Outbound Sales',
  ] as const,
} as const

export type SiteConfig = typeof siteConfig
