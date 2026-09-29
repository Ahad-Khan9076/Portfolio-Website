import { useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { NavItem } from './navItems'

interface NavDropdownProps {
  item: NavItem
  className?: string
}

export function NavDropdown({ item, className }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const rootRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<number | null>(null)
  const menuId = useId()

  const childActive = item.children?.some(
    (child) =>
      location.pathname === child.to ||
      location.pathname.startsWith(`${child.to}/`),
  )
  const isActive = Boolean(childActive)

  const clearCloseTimer = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const openMenu = () => {
    clearCloseTimer()
    setOpen(true)
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimer.current = window.setTimeout(() => setOpen(false), 120)
  }

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    return () => clearCloseTimer()
  }, [])

  useEffect(() => {
    if (!open) return

    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (!item.children?.length) return null

  return (
    <div
      ref={rootRef}
      className={cn('relative shrink-0', className)}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className="nav-glow text-[0.8125rem] font-medium tracking-tight"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        aria-current={isActive ? 'page' : undefined}
        onClick={() => {
          clearCloseTimer()
          setOpen((prev) => !prev)
        }}
      >
        {item.label}
        <ChevronDown
          className={cn(
            'ml-0.5 size-3.5 transition-transform duration-200',
            open && 'rotate-180',
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          className="absolute left-1/2 top-full z-[100] w-64 -translate-x-1/2 pt-2"
        >
          <div className="overflow-hidden rounded-xl border border-white/10 bg-brand-black p-1.5 shadow-[0_20px_50px_rgb(0_0_0_/0.65)]">
            {item.children.map((child) => {
              const active =
                location.pathname === child.to ||
                location.pathname.startsWith(`${child.to}/`)

              return (
                <Link
                  key={child.to}
                  to={child.to}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={cn(
                    'nav-glow-item block px-3.5 py-2.5',
                    active &&
                      'border-brand-blue/55 bg-brand-blue/20 text-brand-white shadow-[0_0_18px_rgb(9_71_228_/0.3)]',
                    !active && 'text-white/80',
                  )}
                >
                  <span className="block text-sm font-semibold tracking-tight">
                    {child.label}
                  </span>
                  {child.description ? (
                    <span className="mt-0.5 block text-xs leading-snug text-white/45">
                      {child.description}
                    </span>
                  ) : null}
                </Link>
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}
