export interface ProofAsset {
  id: string
  label: string
  category: string
  /** Grid span for editorial asymmetric layout */
  span: string
  aspect: 'tall' | 'wide' | 'square'
}

/**
 * Placeholder slots for real proof assets.
 * Replace `label` containers with verified screenshots/assets later.
 * Do not fabricate results or screenshots.
 */
export const proofAssets: ProofAsset[] = [
  {
    id: 'upwork-profile',
    label: 'CASE STUDY ASSET — ADD SCREENSHOT',
    category: 'Upwork Profile',
    span: 'md:col-span-7',
    aspect: 'wide',
  },
  {
    id: 'fiverr-gigs',
    label: 'CASE STUDY ASSET — ADD SCREENSHOT',
    category: 'Fiverr',
    span: 'md:col-span-5',
    aspect: 'tall',
  },
  {
    id: 'linkedin-outreach',
    label: 'CASE STUDY ASSET — ADD SCREENSHOT',
    category: 'LinkedIn',
    span: 'md:col-span-4',
    aspect: 'square',
  },
  {
    id: 'proposal-example',
    label: 'CASE STUDY ASSET — ADD SCREENSHOT',
    category: 'Proposal Example',
    span: 'md:col-span-4',
    aspect: 'square',
  },
  {
    id: 'client-messages',
    label: 'CASE STUDY ASSET — ADD SCREENSHOT',
    category: 'Client Messages',
    span: 'md:col-span-4',
    aspect: 'square',
  },
  {
    id: 'analytics',
    label: 'CASE STUDY ASSET — ADD SCREENSHOT',
    category: 'Analytics',
    span: 'md:col-span-5',
    aspect: 'wide',
  },
  {
    id: 'before-after',
    label: 'CASE STUDY ASSET — ADD SCREENSHOT',
    category: 'Profile Before / After',
    span: 'md:col-span-7',
    aspect: 'wide',
  },
  {
    id: 'content-performance',
    label: 'CASE STUDY ASSET — ADD SCREENSHOT',
    category: 'Content Performance',
    span: 'md:col-span-12',
    aspect: 'wide',
  },
]
