export interface HowItWorksStep {
  id: string
  number: string
  title: string
  description: string
}

export const howItWorksHeadline = 'Scattered tactics → one connected system.'

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 'audit',
    number: '01',
    title: 'Audit',
    description: 'Find where the system leaks.',
  },
  {
    id: 'position',
    number: '02',
    title: 'Position',
    description: 'Fix positioning, offer, and messaging.',
  },
  {
    id: 'build',
    number: '03',
    title: 'Build',
    description: 'Build channels and workflows that fit.',
  },
  {
    id: 'optimize',
    number: '04',
    title: 'Optimize',
    description: 'Measure what works; improve the pipeline.',
  },
]
