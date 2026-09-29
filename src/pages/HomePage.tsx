import { HeroSection } from '@/components/sections/HeroSection'
import { TrustSection } from '@/components/sections/TrustSection'
import { ProblemDiagnosisSection } from '@/components/sections/ProblemDiagnosisSection'
import { SystemTransition } from '@/components/sections/SystemTransition'
import { HomeSystemsPreviewSection } from '@/components/sections/HomeSystemsPreviewSection'
import { ResultsSection } from '@/components/sections/ResultsSection'
import { ProofWallSection } from '@/components/sections/ProofWallSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection'
import { PersonalStorySection } from '@/components/sections/PersonalStorySection'
import { PointOfViewSection } from '@/components/sections/PointOfViewSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContentAuthoritySection } from '@/components/sections/ContentAuthoritySection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { HomeAuditTeaserSection } from '@/components/sections/HomeAuditTeaserSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

const detail = (to: string, label: string) => ({ to, label })

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProblemDiagnosisSection
        compact
        detailLink={detail(
          '/how-i-help',
          'Read the full problem diagnosis',
        )}
      />
      <SystemTransition compact />
      <HomeSystemsPreviewSection />
      <ResultsSection
        compact
        detailLink={detail(
          '/results',
          'See proof wall and full results page',
        )}
      />
      <ProofWallSection
        compact
        previewLimit={4}
        detailLink={detail('/results', 'View all evidence slots')}
      />
      <ServicesSection
        compact
        homePreview
        detailLink={detail('/services', 'Compare services and process')}
      />
      <CaseStudiesSection
        compact
        previewLimit={2}
        detailLink={detail('/case-studies', 'Read all case studies')}
      />
      <PersonalStorySection
        compact
        homePreview
        detailLink={detail('/about', 'Read the full story and timeline')}
      />
      <PointOfViewSection
        compact
        detailLink={detail('/about', 'About, POV, and testimonials')}
      />
      <TestimonialsSection
        compact
        previewLimit={3}
        detailLink={detail('/about', 'See all testimonials')}
      />
      <ContentAuthoritySection
        compact
        previewLimit={4}
        detailLink={detail('/resources', 'Browse resources and content')}
      />
      <HowItWorksSection
        compact
        detailLink={detail('/contact', 'FAQ, audit, and contact')}
      />
      <FAQSection
        compact
        previewLimit={4}
        detailLink={detail('/contact', 'See all FAQs and get in touch')}
      />
      <HomeAuditTeaserSection />
      <FinalCTASection />
    </>
  )
}
