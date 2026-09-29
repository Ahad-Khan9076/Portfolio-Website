import { useEffect } from 'react'

interface PageMeta {
  title: string
  description: string
  path?: string
}

const DEFAULT_DESCRIPTION =
  'Ahad Ali Khan — Business Developer & Client Acquisition Strategist. End-to-end client acquisition systems for freelancers and agencies: positioning, Upwork, Fiverr, LinkedIn outreach, email, inbound & outbound sales.'

/**
 * Updates document title and meta description per route.
 * Canonical uses VITE_SITE_URL when set, otherwise current origin.
 */
export function useDocumentMeta({ title, description, path = '' }: PageMeta) {
  useEffect(() => {
    const fullTitle = title.includes('Ahad Ali Khan')
      ? title
      : `${title} | Ahad Ali Khan`

    document.title = fullTitle

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description || DEFAULT_DESCRIPTION)

    const siteUrl = import.meta.env.VITE_SITE_URL ?? window.location.origin
    const canonicalHref = `${siteUrl.replace(/\/$/, '')}${path || '/'}`
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalHref)
  }, [title, description, path])
}

export { DEFAULT_DESCRIPTION }
