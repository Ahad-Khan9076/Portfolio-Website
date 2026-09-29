import { PageIntro } from '@/components/sections/PageIntro'
import { AcquisitionSystemSection } from '@/components/sections/AcquisitionSystemSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export function SystemsPage() {
  return (
    <>
      <PageIntro
        eyebrow="The operating system"
        title="Client acquisition systems — not isolated tactics."
        description="One engine from positioning through pipeline."
      />
      <AcquisitionSystemSection compactTop />
      <FinalCTASection />
    </>
  )
}
