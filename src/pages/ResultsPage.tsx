import { PageIntro } from '@/components/sections/PageIntro'
import { ResultsSection } from '@/components/sections/ResultsSection'
import { ProofWallSection } from '@/components/sections/ProofWallSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export function ResultsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Proof"
        title="Proof over promises."
        description="Verified outcomes and labeled asset slots — no fabricated results."
      />
      <ResultsSection hideIntro />
      <ProofWallSection />
      <FinalCTASection />
    </>
  )
}
