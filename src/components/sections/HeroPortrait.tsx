import { useState } from 'react'
import { User } from 'lucide-react'
import { AHAD_PROFILE_IMAGE } from '@/data/personalStory'
import { siteConfig } from '@/data/site'
import { cn } from '@/lib/cn'

interface HeroPortraitProps {
  className?: string
}

/**
 * Reference-style hero portrait — large photo with soft glow and caption bar.
 * Place your image at public/images/ahad-profile.jpg (or set AHAD_PROFILE_IMAGE).
 */
export function HeroPortrait({ className }: HeroPortraitProps) {
  const [failed, setFailed] = useState(false)
  const src = AHAD_PROFILE_IMAGE
  const showImage = Boolean(src) && !failed

  return (
    <figure
      className={cn(
        'relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] lg:max-w-none',
        'shadow-[0_0_0_1px_rgb(9_71_228_/0.12),0_24px_80px_rgb(0_0_0_/0.55),0_0_60px_rgb(9_71_228_/0.18)]',
        className,
      )}
      data-profile-slot="AHAD_PROFILE_IMAGE"
    >
      <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
        {showImage ? (
          <img
            src={src!}
            alt={`${siteConfig.name} — ${siteConfig.role}`}
            className="absolute inset-0 size-full object-cover object-center"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-white/[0.04] to-brand-blue/10 px-6 text-center">
            <span className="flex size-16 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/40">
              <User className="size-8" strokeWidth={1.25} aria-hidden />
            </span>
            <figcaption className="flex flex-col gap-1.5">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-blue">
                Your photo
              </span>
              <span className="max-w-[14rem] text-xs leading-relaxed text-gray-400">
                Add <code className="text-gray-300">public/images/ahad-profile.jpg</code>
              </span>
            </figcaption>
          </div>
        )}

        {/* Bottom gradient + caption like reference heroes */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent"
        />
        <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="text-sm font-bold tracking-tight text-brand-white sm:text-base">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-xs font-medium text-gray-300 sm:text-sm">
            {siteConfig.role}
          </p>
          <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-blue">
            Founder @ {siteConfig.founderOf}
          </p>
        </figcaption>
      </div>
    </figure>
  )
}
