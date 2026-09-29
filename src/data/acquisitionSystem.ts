export interface AcquisitionStage {
  id: string
  number: string
  title: string
  shortExplanation: string
  problem: string
  whatIBuild: string
}

/**
 * Full client acquisition operating system.
 * This is the detailed IP view — distinct from the simplified hero preview.
 */
export const acquisitionStages: AcquisitionStage[] = [
  {
    id: 'positioning',
    number: '01',
    title: 'Positioning',
    shortExplanation: 'Make your value unmistakable.',
    problem: 'Clients don’t immediately understand your value.',
    whatIBuild: 'Positioning, niche, offer, messaging, keywords.',
  },
  {
    id: 'offer',
    number: '02',
    title: 'Offer',
    shortExplanation: 'Sell a specific outcome.',
    problem: 'Your service sounds like everyone else’s.',
    whatIBuild: 'An offer designed around a specific client problem.',
  },
  {
    id: 'visibility',
    number: '03',
    title: 'Visibility',
    shortExplanation: 'Get found by the right people.',
    problem: 'The right people don’t discover you.',
    whatIBuild: 'Profile, gig, content, visibility.',
  },
  {
    id: 'outreach',
    number: '04',
    title: 'Outreach',
    shortExplanation: 'Contact with intention.',
    problem: 'You are contacting people randomly.',
    whatIBuild: 'ICP, prospecting and outreach systems.',
  },
  {
    id: 'conversation',
    number: '05',
    title: 'Conversation',
    shortExplanation: 'Turn interest into dialogue.',
    problem: 'Leads don’t turn into meaningful conversations.',
    whatIBuild: 'Messaging and sales conversation frameworks.',
  },
  {
    id: 'follow-up',
    number: '06',
    title: 'Follow-up',
    shortExplanation: 'Keep opportunities alive.',
    problem: 'Potential opportunities disappear.',
    whatIBuild: 'Structured follow-up sequences.',
  },
  {
    id: 'conversion',
    number: '07',
    title: 'Conversion',
    shortExplanation: 'Close with clarity.',
    problem: 'Interest does not become business.',
    whatIBuild: 'A clearer sales process and conversion path.',
  },
  {
    id: 'pipeline',
    number: '08',
    title: 'Pipeline',
    shortExplanation: 'Make revenue repeatable.',
    problem: 'Revenue depends on luck.',
    whatIBuild: 'A connected acquisition pipeline.',
  },
]
