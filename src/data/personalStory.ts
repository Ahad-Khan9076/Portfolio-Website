/**
 * Personal narrative and career timeline.
 * Based on verified brand positioning — not fabricated client stories.
 */

export const personalStory = {
  headline: 'I learned client acquisition by being in the trenches.',
  experienceLine:
    '4+ years in BD across Upwork, Fiverr, LinkedIn, email, inbound, and outbound.',
  insight:
    'Most freelancers and agencies don’t have a skill problem — they have a system problem: visibility, positioning, pipeline, or follow-up.',
  shift:
    'Client acquisition is one system, not a pile of tactics.',
  bidsSync:
    'BidsSync is where that work lives — one connected acquisition engine for freelancers and agencies.',
} as const

export interface StoryTimelineStage {
  id: string
  title: string
  description: string
}

export const storyTimeline: StoryTimelineStage[] = [
  {
    id: 'early-bd',
    title: 'Early BD',
    description: 'How offers are framed and what gets a reply.',
  },
  {
    id: 'marketplace',
    title: 'Marketplace Experience',
    description: 'Upwork and Fiverr — profiles, gigs, and activity vs. pipeline.',
  },
  {
    id: 'outbound',
    title: 'Outbound',
    description: 'LinkedIn and email — targeting, messaging, and sequences that open dialogue.',
  },
  {
    id: 'inbound',
    title: 'Inbound',
    description: 'Visibility and inbound so the right clients find you.',
  },
  {
    id: 'system-building',
    title: 'System Building',
    description: 'Positioning through conversion as one operating system.',
  },
  {
    id: 'bidssync',
    title: 'BidsSync',
    description: 'BidsSync — install the system, not another tactic.',
  },
]

/** Path to professional photo in /public. Replace the file when ready. */
export const AHAD_PROFILE_IMAGE: string | null = '/images/ahad-profile.jpg'
