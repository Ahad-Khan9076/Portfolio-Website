import { useLocation } from 'react-router-dom'
import { useDocumentMeta, DEFAULT_DESCRIPTION } from '@/hooks/useDocumentMeta'

const routeMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Client Acquisition Strategist',
    description: DEFAULT_DESCRIPTION,
  },
  '/how-i-help': {
    title: 'How I Help',
    description: 'System gaps: visibility, positioning, pipeline, follow-up.',
  },
  '/systems': {
    title: 'Client Acquisition System',
    description: 'Eight-stage system from positioning through pipeline.',
  },
  '/results': {
    title: 'Results & Proof',
    description: 'Verified outcomes and labeled proof slots.',
  },
  '/about': {
    title: 'About Ahad Ali Khan',
    description: 'Story, BidsSync, and systems-focused BD.',
  },
  '/services': {
    title: 'Services',
    description: 'Positioning, proposals, outreach, full system builds.',
  },
  '/case-studies': {
    title: 'Case Studies',
    description: 'Case studies across marketplaces, LinkedIn, outbound.',
  },
  '/resources': {
    title: 'Resources',
    description: 'Public thinking on acquisition and BD.',
  },
  '/contact': {
    title: 'Contact',
    description: 'Build your system or start with a free audit.',
  },
}

export function RouteMeta() {
  const { pathname } = useLocation()
  const meta =
    routeMeta[pathname] ??
    ({
      title: 'Page Not Found',
      description: DEFAULT_DESCRIPTION,
    } as const)

  useDocumentMeta({
    title: meta.title,
    description: meta.description,
    path: pathname,
  })

  return null
}
