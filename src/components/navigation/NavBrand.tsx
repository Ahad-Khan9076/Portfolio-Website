import { Link } from 'react-router-dom'
import { User } from 'lucide-react'
import { AHAD_PROFILE_IMAGE } from '@/data/personalStory'
import { siteConfig } from '@/data/site'
import { cn } from '@/lib/cn'

interface NavBrandProps {
  onNavigate?: () => void
  className?: string
}

/** Compact single-line brand mark for a clean header. */
export function NavBrand({ onNavigate, className }: NavBrandProps) {
  const hasImage = Boolean(AHAD_PROFILE_IMAGE)

  return (
    <Link
      to="/"
      onClick={onNavigate}
      className={cn(
        'group flex min-w-0 shrink-0 items-center gap-2.5',
        className,
      )}
    >
      <span
        className="relative size-8 shrink-0 overflow-hidden rounded-lg border border-white/15 bg-white/5 transition-[box-shadow,border-color] duration-200 group-hover:border-brand-blue/50 group-hover:shadow-[0_0_16px_rgb(9_71_228_/0.4)] sm:size-9"
        data-profile-slot="AHAD_PROFILE_IMAGE"
      >
        {hasImage ? (
          <img
            src={AHAD_PROFILE_IMAGE!}
            alt=""
            className="size-full object-cover object-center"
          />
        ) : (
          <span className="flex size-full items-center justify-center text-white/45">
            <User className="size-4" strokeWidth={1.5} aria-hidden />
          </span>
        )}
      </span>

      <span className="truncate text-[0.9375rem] font-bold tracking-tight sm:text-base">
        <span className="text-brand-blue">Ahad</span>{' '}
        <span className="text-brand-white">
          Ali Khan<span className="text-brand-blue">.</span>
        </span>
      </span>
      <span className="sr-only">{siteConfig.name}</span>
    </Link>
  )
}
