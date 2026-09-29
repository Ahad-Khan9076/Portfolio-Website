import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { HashScrollManager } from '@/components/navigation/HashScrollManager'
import { NavBrand } from '@/components/navigation/NavBrand'
import { NavDropdown } from '@/components/navigation/NavDropdown'
import { NavLink } from '@/components/navigation/NavLink'
import { navItems, primaryCta } from '@/components/navigation/navItems'
import { cn } from '@/lib/cn'

function MobileApproachLinks() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const approach = navItems.find((item) => item.children?.length)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  if (!approach?.children) return null

  const active = approach.children.some(
    (child) =>
      location.pathname === child.to ||
      location.pathname.startsWith(`${child.to}/`),
  )

  return (
    <div className="shrink-0">
      <button
        type="button"
        className={cn('nav-glow text-[0.8125rem] font-medium tracking-tight')}
        aria-expanded={open}
        aria-current={active ? 'page' : undefined}
        onClick={() => setOpen((prev) => !prev)}
      >
        {approach.label}
        <ChevronDown
          className={cn(
            'ml-0.5 size-3.5 transition-transform',
            open && 'rotate-180',
          )}
          aria-hidden
        />
      </button>
      {open ? (
        <div className="absolute inset-x-0 top-full z-[100] border-b border-white/10 bg-brand-black px-5 py-2 shadow-[0_16px_40px_rgb(0_0_0_/0.5)]">
          {approach.children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-sm font-medium text-white/85 last:border-b-0 hover:text-brand-white"
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <HashScrollManager />
      <header
        className={cn(
          'relative sticky top-0 z-50 overflow-visible border-b transition-[background-color,border-color,box-shadow] duration-300',
          scrolled
            ? 'border-white/10 bg-brand-black shadow-[0_12px_40px_rgb(0_0_0_/0.45)]'
            : 'border-white/5 bg-brand-black',
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-[min(22rem,45%)] bg-[radial-gradient(ellipse_at_left,rgb(9_71_228_/0.16),transparent_70%)]"
        />

        <div className="container-site relative flex h-16 items-center justify-between gap-4 overflow-visible md:h-[4.25rem]">
          <NavBrand />

          <div className="flex min-w-0 items-center gap-3 overflow-visible lg:gap-5">
            <nav
              className="hidden items-center gap-0.5 overflow-visible md:flex"
              aria-label="Primary"
            >
              {navItems.map((item) =>
                item.children?.length ? (
                  <NavDropdown key={item.label} item={item} />
                ) : (
                  <NavLink key={item.to} item={item} />
                ),
              )}
            </nav>

            <Link
              to={primaryCta.to}
              className={cn(
                'nav-glow-pill shrink-0 rounded-full bg-brand-blue px-4 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.08em] text-brand-white sm:px-5 sm:py-2.5 sm:text-[0.7rem]',
                'shadow-[0_0_20px_rgb(9_71_228_/0.35)] transition-[transform,box-shadow,background-color] duration-200',
                'hover:bg-brand-blue/90 motion-safe:hover:-translate-y-px',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue',
              )}
            >
              <span className="sm:hidden">Free Audit</span>
              <span className="hidden sm:inline">{primaryCta.label}</span>
            </Link>
          </div>
        </div>

        <nav
          className="relative border-t border-white/10 md:hidden"
          aria-label="Primary mobile"
        >
          <div className="container-site flex items-center gap-1 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) =>
              item.children?.length ? (
                <MobileApproachLinks key={item.label} />
              ) : (
                <NavLink key={item.to} item={item} />
              ),
            )}
            <Link
              to="/contact"
              className="nav-glow text-[0.8125rem] font-medium tracking-tight"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}
