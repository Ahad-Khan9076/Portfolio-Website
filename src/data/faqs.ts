export interface FAQ {
  id: string
  question: string
  answer: string
}

/**
 * Conversion FAQ — honest language, no guaranteed outcomes.
 */
export const faqs: FAQ[] = [
  {
    id: 'who',
    question: 'Who do you work with?',
    answer:
      'Freelancers and agencies who want a connected acquisition system — not another isolated tactic.',
  },
  {
    id: 'freelancers',
    question: 'Do you work with freelancers?',
    answer:
      'Yes — especially solo freelancers plateauing around $1K–$3K/month. Work fits your offer, channels, and capacity.',
  },
  {
    id: 'agencies',
    question: 'Do you work with agencies?',
    answer:
      'Yes. System-level positioning, outreach, and pipeline design for agencies stuck on marketplaces or outbound.',
  },
  {
    id: 'upwork-only',
    question: 'Do you only work with Upwork clients?',
    answer:
      'No. Upwork is one channel. Work also spans Fiverr, LinkedIn, email, inbound, and outbound — wired together for you.',
  },
  {
    id: 'linkedin-outbound',
    question: 'Can you help with LinkedIn and outbound?',
    answer:
      'Yes — ICP, prospecting, messaging, sequences, follow-up, and pipeline handoff.',
  },
  {
    id: 'done-for-you',
    question: 'Do you provide done-for-you services?',
    answer:
      'Depends on scope — hands-on implementation or strategy plus systems you run. We align deliverables before starting.',
  },
  {
    id: 'consulting',
    question: 'Do you provide consulting?',
    answer:
      'Yes — audit, positioning, offer design, channel strategy, and acquisition architecture with clear next steps.',
  },
  {
    id: 'process-start',
    question: 'How does the process start?',
    answer:
      'Free audit or contact form. We find where the system leaks, then match audit-only, a focused build, or full system work.',
  },
  {
    id: 'timeline',
    question: 'How long does implementation take?',
    answer:
      'Varies by scope. After the audit you get a realistic sequence and milestones — not a generic timeline.',
  },
  {
    id: 'guarantee',
    question: 'Do you guarantee clients or revenue?',
    answer:
      'No. Work improves positioning, pipeline clarity, and consistency — outcomes depend on your market, offer, and execution.',
  },
]
