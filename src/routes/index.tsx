import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/components/layout/MainLayout'
import { AboutPage } from '@/pages/AboutPage'
import { CaseStudiesPage } from '@/pages/CaseStudiesPage'
import { CaseStudyDetailPage } from '@/pages/CaseStudyDetailPage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { HowIHelpPage } from '@/pages/HowIHelpPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ResourcesPage } from '@/pages/ResourcesPage'
import { ResultsPage } from '@/pages/ResultsPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { SystemsPage } from '@/pages/SystemsPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="how-i-help" element={<HowIHelpPage />} />
        <Route path="systems" element={<SystemsPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="case-studies/:slug" element={<CaseStudyDetailPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
