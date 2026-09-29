import { PageIntro } from '@/components/sections/PageIntro'
import { ProblemDiagnosisSection } from '@/components/sections/ProblemDiagnosisSection'
import { SystemTransition } from '@/components/sections/SystemTransition'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export function HowIHelpPage() {
  return (
    <>
      <PageIntro
        eyebrow="Problem diagnosis"
        title="Your problem probably isn’t your skill."
        description="What’s breaking: visibility, positioning, pipeline, or follow-up."
      />
      <ProblemDiagnosisSection hideIntro />
      <SystemTransition />
      <FinalCTASection />
    </>
  )
}
