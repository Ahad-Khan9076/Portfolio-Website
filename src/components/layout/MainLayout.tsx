import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { RouteMeta } from './RouteMeta'

export function MainLayout() {
  return (
    <>
      <RouteMeta />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-md"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
