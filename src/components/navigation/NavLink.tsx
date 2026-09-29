import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/cn'
import type { NavItem } from './navItems'

interface NavLinkProps {
  item: NavItem
  onNavigate?: () => void
  className?: string
}

export function NavLink({ item, onNavigate, className }: NavLinkProps) {
  const location = useLocation()

  const isActive =
    item.to === '/'
      ? location.pathname === '/'
      : location.pathname === item.to ||
        location.pathname.startsWith(`${item.to}/`)

  return (
    <Link
      to={item.to}
      onClick={() => onNavigate?.()}
      className={cn(
        'nav-glow text-[0.8125rem] font-medium tracking-tight',
        className,
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.label}
    </Link>
  )
}
