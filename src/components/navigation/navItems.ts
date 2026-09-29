export type NavChild = {
  label: string
  to: string
  description?: string
}

export type NavItem = {
  label: string
  to: string
  children?: NavChild[]
}

/**
 * Clean header set — logo covers Home, CTA covers Contact.
 */
export const navItems: NavItem[] = [
  {
    label: 'Approach',
    to: '/how-i-help',
    children: [
      {
        label: 'How I Help',
        to: '/how-i-help',
        description: 'Problem diagnosis — what’s actually broken',
      },
      {
        label: 'The System',
        to: '/systems',
        description: '8-stage acquisition operating system',
      },
      {
        label: 'Results & Proof',
        to: '/results',
        description: 'Outcomes and evidence wall',
      },
    ],
  },
  { label: 'Services', to: '/services' },
  { label: 'Cases', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Resources', to: '/resources' },
]

export const primaryCta = {
  label: 'Free Revenue Audit',
  to: '/contact#audit',
} as const
