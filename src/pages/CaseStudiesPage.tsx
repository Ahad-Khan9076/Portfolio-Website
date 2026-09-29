import { PageIntro } from '@/components/sections/PageIntro'
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export function CaseStudiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Case studies"
        title="Different problems. Same principle: build the system."
        description="Upwork, Fiverr, LinkedIn, outbound — verified details when ready."
      />
      <CaseStudiesSection hideIntro />
      <FinalCTASection />
    </>
  )
}
