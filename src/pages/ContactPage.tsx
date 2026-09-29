import { PageIntro } from '@/components/sections/PageIntro'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { LeadMagnetSection } from '@/components/sections/LeadMagnetSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start with a conversation — or the free audit."
        description="Build, audit, or explore — pick your path."
      />
      <HowItWorksSection />
      <FAQSection />
      <LeadMagnetSection />
      <ContactSection showPageHeader={false} />
      <FinalCTASection />
    </>
  )
}
