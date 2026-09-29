import { motion, useReducedMotion } from 'framer-motion'
import { siteConfig } from '@/data/site'
import { easePremium, motionDurations } from '@/lib/motion'
import { cn } from '@/lib/cn'

const stages = siteConfig.systemFlow

interface AcquisitionSystemVisualProps {
  className?: string
}

export function AcquisitionSystemVisual({
  className,
}: AcquisitionSystemVisualProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div
      className={cn(
        'relative w-full max-w-md mx-auto lg:max-w-none lg:ml-auto',
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-2xl bg-brand-blue blur-3xl opacity-[0.28]"
      />

      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-brand-black shadow-lg">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-brand-blue" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Acquisition System
            </span>
          </div>
          <span className="text-[0.65rem] font-medium text-gray-500">
            Live flow
          </span>
        </div>

        <div className="relative px-4 py-5 sm:px-6 sm:py-6">
          <div
            aria-hidden
            className="absolute left-[2.15rem] top-8 bottom-8 w-px bg-gradient-to-b from-brand-blue/70 via-white/15 to-brand-blue/35 sm:left-[2.65rem]"
          />

          <ol className="relative flex flex-col gap-2.5 sm:gap-3">
            {stages.map((stage, index) => {
              const isFirst = index === 0
              const isLast = index === stages.length - 1

              return (
                <motion.li
                  key={stage}
                  initial={reducedMotion ? false : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: motionDurations.base,
                    delay: reducedMotion ? 0 : 0.1 + index * 0.06,
                    ease: easePremium,
                  }}
                  className="relative flex items-center gap-3 sm:gap-4"
                >
                  <motion.span
                    className={cn(
                      'relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full border text-[0.65rem] font-bold sm:size-8',
                      isLast
                        ? 'border-brand-blue bg-brand-blue text-brand-white shadow-[0_0_20px_rgb(9_71_228_/0.4)]'
                        : isFirst
                          ? 'border-brand-blue/80 bg-brand-black text-brand-blue'
                          : 'border-white/20 bg-brand-black text-gray-300',
                    )}
                    animate={
                      !reducedMotion && isLast
                        ? {
                            boxShadow: [
                              '0 0 12px rgb(9 71 228 / 0.35)',
                              '0 0 22px rgb(9 71 228 / 0.5)',
                              '0 0 12px rgb(9 71 228 / 0.35)',
                            ],
                          }
                        : undefined
                    }
                    transition={
                      !reducedMotion && isLast
                        ? {
                            duration: 2.8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }
                        : undefined
                    }
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>

                  <div
                    className={cn(
                      'flex min-w-0 flex-1 items-center justify-between gap-3 border px-3 py-2.5 sm:px-4 sm:py-3',
                      isLast
                        ? 'border-brand-blue/45 bg-brand-blue/10'
                        : 'border-white/10 bg-white/[0.03]',
                    )}
                  >
                    <div className="min-w-0">
                      <p
                        className={cn(
                          'truncate text-sm font-semibold tracking-tight sm:text-[0.95rem]',
                          isLast ? 'text-brand-white' : 'text-gray-100',
                        )}
                      >
                        {stage}
                      </p>
                      {!isLast ? (
                        <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-gray-500">
                          Stage {index + 1}
                        </p>
                      ) : (
                        <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-brand-blue">
                          Outcome
                        </p>
                      )}
                    </div>

                    {isLast ? (
                      <span className="hidden shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-brand-blue sm:inline">
                        Active
                      </span>
                    ) : (
                      <span
                        aria-hidden
                        className="text-xs font-medium text-gray-600"
                      >
                        ↓
                      </span>
                    )}
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>

        <div className="border-t border-white/10 px-4 py-3 sm:px-5">
          <p className="text-[0.7rem] leading-relaxed text-gray-500">
            Channels are components. The system is the product.
          </p>
        </div>
      </div>
    </div>
  )
}
