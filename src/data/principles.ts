export interface Principle {
  id: string
  number: string
  statement: string
}

export const principles: Principle[] = [
  {
    id: 'visibility-positioning',
    number: '01',
    statement: 'Visibility without positioning creates noise.',
  },
  {
    id: 'leads-offer',
    number: '02',
    statement: 'More leads don’t fix a weak offer.',
  },
  {
    id: 'outreach-followup',
    number: '03',
    statement: 'Outreach without follow-up wastes attention.',
  },
  {
    id: 'profile-system',
    number: '04',
    statement: 'A profile is not a client acquisition system.',
  },
  {
    id: 'channels-together',
    number: '05',
    statement: 'Your acquisition channels should work together.',
  },
]

export const pointOfViewHeadline =
  'More proposals won’t fix broken positioning.'
