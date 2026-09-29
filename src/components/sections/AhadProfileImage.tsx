import { User } from 'lucide-react'
import { AHAD_PROFILE_IMAGE } from '@/data/personalStory'
import { cn } from '@/lib/cn'

interface AhadProfileImageProps {
  className?: string
}

/**
 * Premium profile slot for Ahad's professional photo.
 * Set AHAD_PROFILE_IMAGE in src/data/personalStory.ts when asset is ready.
 */
export function AhadProfileImage({ className }: AhadProfileImageProps) {
  const hasImage = Boolean(AHAD_PROFILE_IMAGE)

  return (
    <figure
      className={cn(
        'relative overflow-hidden border border-brand-black/10 bg-gray-100',
        className,
      )}
      data-profile-slot="AHAD_PROFILE_IMAGE"
    >
      {hasImage ? (
        <img
          src={AHAD_PROFILE_IMAGE!}
          alt="Ahad Ali Khan — professional photo"
          className="size-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="flex size-full min-h-[20rem] flex-col items-center justify-center gap-4 px-6 py-12 text-center md:min-h-[28rem]">
          <span className="flex size-16 items-center justify-center border border-brand-black/10 bg-brand-white text-gray-400">
            <User className="size-8" strokeWidth={1.25} aria-hidden />
          </span>
          <figcaption className="flex flex-col gap-1">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-blue">
              AHAD_PROFILE_IMAGE
            </span>
            <span className="max-w-[14rem] text-xs leading-relaxed text-gray-500">
              Professional photo placeholder — replace when asset is supplied.
            </span>
          </figcaption>
        </div>
      )}
    </figure>
  )
}
