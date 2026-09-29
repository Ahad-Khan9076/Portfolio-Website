import { motion } from 'framer-motion'
import { ImageIcon } from 'lucide-react'
import { proofAssets } from '@/data/proofAssets'
import { SectionDetailLink } from '@/components/ui/SectionDetailLink'
import { cn } from '@/lib/cn'
import { sectionContainerClass } from '@/lib/sectionLayout'

const aspectClasses = {
  tall: 'min-h-[18rem] md:min-h-[22rem]',
  wide: 'min-h-[14rem] md:min-h-[16rem]',
  square: 'min-h-[14rem] md:min-h-[15rem]',
} as const

interface ProofWallSectionProps {
  compact?: boolean
  previewLimit?: number
  detailLink?: { to: string; label: string }
}

export function ProofWallSection({
  compact = false,
  previewLimit,
  detailLink,
}: ProofWallSectionProps) {
  const assets = previewLimit
    ? proofAssets.slice(0, previewLimit)
    : proofAssets

  return (
    <section
      id="proof"
      className="relative overflow-hidden border-t border-brand-black/5 bg-gray-50 scroll-mt-24"
      aria-labelledby="proof-heading"
    >
      <div className={sectionContainerClass(compact)}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Evidence
          </p>
          <h2 id="proof-heading" className="mt-4 text-brand-black">
            Work you can inspect — not claims you have to trust.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            Verified screenshots and assets land here — placeholders mark the slots.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {assets.map((asset, index) => (
            <motion.figure
              key={asset.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                'group relative flex flex-col overflow-hidden border border-dashed border-brand-black/20 bg-brand-white',
                asset.span,
                aspectClasses[asset.aspect],
              )}
            >
              {/* Drop-in slot for real image later:
                  <img src={...} alt={asset.category} className="absolute inset-0 size-full object-cover" />
              */}
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-8 text-center">
                <span className="flex size-11 items-center justify-center border border-brand-black/10 text-gray-400 transition-colors group-hover:border-brand-blue/30 group-hover:text-brand-blue">
                  <ImageIcon className="size-5" strokeWidth={1.5} aria-hidden />
                </span>
                <figcaption className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand-blue">
                    {asset.category}
                  </span>
                  <span className="max-w-[16rem] text-xs font-medium tracking-wide text-gray-500 sm:text-sm">
                    {asset.label}
                  </span>
                </figcaption>
              </div>
              <div className="border-t border-dashed border-brand-black/10 px-4 py-2">
                <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gray-400">
                  Replace with verified asset
                </p>
              </div>
            </motion.figure>
          ))}
        </div>

        {detailLink ? (
          <SectionDetailLink to={detailLink.to} label={detailLink.label} />
        ) : null}
      </div>
    </section>
  )
}
