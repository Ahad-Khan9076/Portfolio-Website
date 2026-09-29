import { PageIntro } from '@/components/sections/PageIntro'
import { ContentAuthoritySection } from '@/components/sections/ContentAuthoritySection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export function ResourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Authority"
        title="Most of my thinking happens in public."
        description="Acquisition systems thinking — not growth hacks."
      />
      <ContentAuthoritySection hideIntro />
      <FinalCTASection />
    </>
  )
}
