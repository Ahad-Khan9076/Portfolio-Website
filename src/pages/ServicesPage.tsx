import { PageIntro } from '@/components/sections/PageIntro'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Choose the part of your acquisition system that needs fixing."
        description="Positioning, bidding, outreach, or the full engine."
      />
      <ServicesSection hideIntro />
      <HowItWorksSection />
      <FinalCTASection />
    </>
  )
}
