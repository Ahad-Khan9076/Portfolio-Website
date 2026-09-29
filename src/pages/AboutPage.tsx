import { PageIntro } from '@/components/sections/PageIntro'
import { PersonalStorySection } from '@/components/sections/PersonalStorySection'
import { PointOfViewSection } from '@/components/sections/PointOfViewSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Trusted specialist — not a menu of freelance gigs."
        description="Trenches-to-systems story and why BidsSync exists."
      />
      <PersonalStorySection hideIntro />
      <PointOfViewSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  )
}
