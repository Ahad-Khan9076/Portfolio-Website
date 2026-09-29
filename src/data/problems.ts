import type { LucideIcon } from 'lucide-react'
import {
  EyeOff,
  Focus,
  GitBranch,
  Link2Off,
  MessageSquareOff,
  Shuffle,
} from 'lucide-react'

export interface ProblemCard {
  id: string
  number: string
  title: string
  description: string
  icon: LucideIcon
  /** Editorial span classes for asymmetric desktop grid */
  span: string
}

export const problemCards: ProblemCard[] = [
  {
    id: 'invisible',
    number: '01',
    title: 'Invisible',
    description:
      'Your profile exists, but qualified clients aren’t finding you.',
    icon: EyeOff,
    span: 'md:col-span-7',
  },
  {
    id: 'positioning-gap',
    number: '02',
    title: 'Positioning Gap',
    description:
      'Your profile describes what you do instead of why a client should choose you.',
    icon: Focus,
    span: 'md:col-span-5',
  },
  {
    id: 'random-bidding',
    number: '03',
    title: 'Random Bidding',
    description:
      'You’re sending proposals without a repeatable targeting and bidding system.',
    icon: Shuffle,
    span: 'md:col-span-4',
  },
  {
    id: 'empty-pipeline',
    number: '04',
    title: 'Empty Pipeline',
    description:
      'Referrals, marketplaces, or luck — not multiple channels.',
    icon: GitBranch,
    span: 'md:col-span-8',
  },
  {
    id: 'weak-outreach',
    number: '05',
    title: 'Weak Outreach',
    description:
      'You send messages, but they don’t create meaningful conversations.',
    icon: MessageSquareOff,
    span: 'md:col-span-5',
  },
  {
    id: 'broken-follow-up',
    number: '06',
    title: 'Broken Follow-up',
    description:
      'Leads enter the pipeline and vanish — no structured follow-up.',
    icon: Link2Off,
    span: 'md:col-span-7',
  },
]
