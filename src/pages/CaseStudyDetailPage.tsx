import { useParams } from 'react-router-dom'
import { PagePlaceholder } from '@/components/sections/PagePlaceholder'
import { getCaseStudyBySlug } from '@/data/caseStudies'

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? getCaseStudyBySlug(slug) : undefined

  const description = study
    ? study.isPlaceholder
      ? `${study.category} — details coming when verified.`
      : `${study.problem} — ${study.result}`
    : `No case study for “${slug ?? 'unknown'}”.`

  return (
    <PagePlaceholder
      eyebrow={study?.isPlaceholder ? 'Coming soon' : study?.category}
      title={study?.title ?? 'Case study'}
      description={description}
      showCta
    />
  )
}
