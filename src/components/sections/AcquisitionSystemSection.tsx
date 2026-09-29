import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { AmbientGlow } from '@/components/ui/AmbientGlow'
import { Button } from '@/components/ui/Button'
import { acquisitionStages } from '@/data/acquisitionSystem'
import { cn } from '@/lib/cn'

interface AcquisitionSystemSectionProps {
  compactTop?: boolean
}

export function AcquisitionSystemSection({
  compactTop = false,
}: AcquisitionSystemSectionProps) {
  const reducedMotion = useReducedMotion()
  const [activeId, setActiveId] = useState(acquisitionStages[0].id)
  const activeStage =
    acquisitionStages.find((stage) => stage.id === activeId) ??
    acquisitionStages[0]
  const activeIndex = acquisitionStages.findIndex(
    (stage) => stage.id === activeId,
  )

  return (
    <section
      id="systems"
      className={cn(
        'relative overflow-hidden bg-brand-black text-brand-white scroll-mt-24',
        compactTop && '!pt-0',
      )}
      aria-labelledby={compactTop ? undefined : 'system-heading'}
      aria-label={compactTop ? 'Acquisition system stages' : undefined}
    >
      <AmbientGlow position="top-left" className="-left-20 opacity-[0.28]" />
      <AmbientGlow position="bottom-right" className="opacity-[0.22]" />

      <div
        className={cn(
          'container-site relative section-padding',
          compactTop && '!pt-0 md:!pt-2',
        )}
      >
        {!compactTop ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
              The operating system
            </p>
            <h2
              id="system-heading"
              className="mt-4 text-balance text-brand-white"
            >
              I don’t build better profiles.
              <br className="hidden sm:block" />
              I build client acquisition systems.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
              Profile, proposals, outreach, and follow-up — one engine, not separate tactics.
            </p>
          </motion.div>
        ) : (
          <p className="max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Profile, proposals, outreach, and follow-up — one engine, not separate tactics.
          </p>
        )}

        <div className={cn('hidden lg:block', compactTop ? 'mt-8' : 'mt-14')}>
          <div className="relative overflow-x-auto overscroll-x-contain pb-2">
            {/* Base track */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-[1.15rem] h-px bg-white/10"
            />
            {/* Active progress line */}
            <motion.div
              aria-hidden
              className="absolute left-0 top-[1.15rem] h-px origin-left bg-brand-blue shadow-[0_0_10px_rgb(9_71_228_/0.45)]"
              initial={false}
              animate={{
                width: `${(activeIndex / (acquisitionStages.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />

            <ul className="relative flex min-w-[58rem] gap-3 xl:min-w-0 xl:grid xl:grid-cols-8 xl:gap-2">
              {acquisitionStages.map((stage, index) => {
                const isActive = stage.id === activeId
                const isPassed = index <= activeIndex

                return (
                  <li key={stage.id} className="min-w-[6.75rem] flex-1 xl:min-w-0">
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(stage.id)}
                      onFocus={() => setActiveId(stage.id)}
                      onClick={() => setActiveId(stage.id)}
                      className={cn(
                        'group flex w-full flex-col items-start gap-4 text-left outline-none',
                      )}
                      aria-pressed={isActive}
                    >
                      <span className="relative flex size-9 items-center justify-center">
                        <motion.span
                          className={cn(
                            'absolute inset-0 rounded-full border transition-colors duration-300',
                            isActive
                              ? 'border-brand-blue bg-brand-blue shadow-[0_0_18px_rgb(9_71_228_/0.4)]'
                              : isPassed
                                ? 'border-brand-blue/60 bg-brand-black'
                                : 'border-white/20 bg-brand-black',
                          )}
                          animate={
                            !reducedMotion && isActive
                              ? { scale: [1, 1.06, 1] }
                              : { scale: 1 }
                          }
                          transition={
                            !reducedMotion && isActive
                              ? {
                                  duration: 1.8,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                }
                              : { duration: 0.2 }
                          }
                        />
                        <span
                          className={cn(
                            'relative z-10 text-[0.65rem] font-bold',
                            isActive ? 'text-brand-white' : 'text-gray-400',
                          )}
                        >
                          {stage.number}
                        </span>
                      </span>

                      <div className="min-w-0 pr-1">
                        <p
                          className={cn(
                            'text-xs xl:text-sm font-semibold tracking-tight transition-colors duration-200',
                            isActive
                              ? 'text-brand-blue'
                              : 'text-gray-200 group-hover:text-brand-white',
                          )}
                        >
                          {stage.title}
                        </p>
                        <p
                          className={cn(
                            'mt-1 text-[0.7rem] leading-snug text-gray-500 transition-opacity duration-200',
                            isActive ? 'opacity-100' : 'opacity-70',
                          )}
                        >
                          {stage.shortExplanation}
                        </p>
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-10 overflow-hidden border border-white/10 bg-white/[0.03] p-8 glow-blue-soft"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-brand-blue/50 blur-3xl opacity-50"
              />
              <div className="relative grid gap-8 md:grid-cols-12">
                <div className="md:col-span-3">
                  <p className="font-mono text-xs tracking-[0.16em] text-brand-blue">
                    {activeStage.number}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-brand-white">
                    {activeStage.title}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gray-500">
                    Problem
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-gray-300">
                    {activeStage.problem}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brand-blue">
                    What I build
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-brand-white">
                    {activeStage.whatIBuild}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <div className={cn('lg:hidden', compactTop ? 'mt-8' : 'mt-12')}>
          <ol className="relative flex flex-col gap-0">
            <div
              aria-hidden
              className="absolute bottom-3 left-[0.95rem] top-3 w-px bg-white/10"
            />
            <motion.div
              aria-hidden
              className="absolute left-[0.95rem] top-3 w-px origin-top bg-brand-blue shadow-[0_0_10px_rgb(9_71_228_/0.65)]"
              initial={false}
              animate={{
                height: `calc(${(activeIndex / Math.max(acquisitionStages.length - 1, 1)) * 100}% - 0.5rem)`,
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />

            {acquisitionStages.map((stage) => {
              const isActive = stage.id === activeId

              return (
                <li key={stage.id} className="relative pl-10">
                  <button
                    type="button"
                    onClick={() => setActiveId(stage.id)}
                    className="w-full py-4 text-left"
                    aria-expanded={isActive}
                  >
                    <span
                      className={cn(
                        'absolute left-0 top-5 flex size-8 items-center justify-center rounded-full border text-[0.65rem] font-bold transition-colors duration-200',
                        isActive
                          ? 'border-brand-blue bg-brand-blue text-brand-white shadow-[0_0_20px_rgb(9_71_228_/0.55)]'
                          : 'border-white/20 bg-brand-black text-gray-400',
                      )}
                    >
                      {stage.number}
                    </span>

                    <div
                      className={cn(
                        'border px-4 py-4 transition-colors duration-200',
                        isActive
                          ? 'border-brand-blue/45 bg-brand-blue/10'
                          : 'border-white/10 bg-white/[0.02]',
                      )}
                    >
                      <p
                        className={cn(
                          'text-base font-semibold tracking-tight',
                          isActive ? 'text-brand-blue' : 'text-brand-white',
                        )}
                      >
                        {stage.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {stage.shortExplanation}
                      </p>

                      <AnimatePresence initial={false}>
                        {isActive ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                              <div>
                                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gray-500">
                                  Problem
                                </p>
                                <p className="mt-1.5 text-sm leading-relaxed text-gray-300">
                                  {stage.problem}
                                </p>
                              </div>
                              <div>
                                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                                  What I build
                                </p>
                                <p className="mt-1.5 text-sm leading-relaxed text-brand-white">
                                  {stage.whatIBuild}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 overflow-hidden border border-white/10 p-8 md:mt-20 md:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-8 bottom-0 size-48 rounded-full bg-brand-blue/55 blur-3xl opacity-55"
          />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
                Next step
              </p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-brand-white md:text-3xl">
                Find where your acquisition system is leaking.
              </h3>
            </div>
            <Button to="/contact" size="lg" glow className="shrink-0">
              Find My Revenue Leaks
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
