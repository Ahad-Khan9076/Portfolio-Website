import { motion } from 'framer-motion'
import { AhadProfileImage } from '@/components/sections/AhadProfileImage'
import { personalStory, storyTimeline } from '@/data/personalStory'
import { siteConfig } from '@/data/site'
import { SectionDetailLink } from '@/components/ui/SectionDetailLink'
import { cn } from '@/lib/cn'
import { sectionContainerClass } from '@/lib/sectionLayout'

interface PersonalStorySectionProps {
  hideIntro?: boolean
  compact?: boolean
  homePreview?: boolean
  detailLink?: { to: string; label: string }
}

export function PersonalStorySection({
  hideIntro = false,
  compact = false,
  homePreview = false,
  detailLink,
}: PersonalStorySectionProps) {
  const timeline = homePreview ? storyTimeline.slice(0, 2) : storyTimeline
  return (
    <section
      id="about"
      className={cn(
        'relative overflow-hidden bg-brand-white scroll-mt-24',
        hideIntro && '!pt-0',
      )}
      aria-labelledby={hideIntro ? undefined : 'story-heading'}
      aria-label={hideIntro ? 'Personal story' : undefined}
    >
      <div
        className={sectionContainerClass(
          compact,
          hideIntro ? '!pt-0 md:!pt-2' : undefined,
        )}
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {!hideIntro ? (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
                  {siteConfig.name}
                </p>
                <h2
                  id="story-heading"
                  className="mt-4 text-balance text-brand-black"
                >
                  {personalStory.headline}
                </h2>
              </div>
            ) : (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
                  {personalStory.headline}
                </p>
              </div>
            )}

            <div className="flex max-w-2xl flex-col gap-5 text-base leading-relaxed text-gray-600 md:text-lg">
              <p>{personalStory.experienceLine}</p>
              <p>{personalStory.insight}</p>
              {!homePreview ? (
                <>
                  <p className="border-l-2 border-brand-blue pl-5 font-medium text-brand-black">
                    {personalStory.shift}
                  </p>
                  <p>
                    <span className="font-semibold text-brand-black">
                      {siteConfig.founderOf}
                    </span>{' '}
                    — {personalStory.bidsSync}
                  </p>
                </>
              ) : null}
            </div>

            {/* Timeline */}
            <div className="mt-4 border-t border-brand-black/10 pt-10">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gray-500">
                How the work evolved
              </p>
              <ol className="relative mt-8 flex flex-col">
                {timeline.map((stage, index) => (
                  <motion.li
                    key={stage.id}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative grid grid-cols-1 gap-2 border-l border-brand-black/10 py-5 pl-6 first:pt-0 last:pb-0 md:grid-cols-[10rem_1fr] md:gap-6 md:pl-8"
                  >
                    <span
                      aria-hidden
                      className="absolute -left-[5px] top-6 size-2.5 rounded-full bg-brand-blue"
                    />
                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-brand-black">
                      {stage.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                      {stage.description}
                    </p>
                    {index < timeline.length - 1 ? (
                      <span
                        aria-hidden
                        className="absolute -left-3 bottom-0 hidden text-brand-blue md:block"
                      >
                        ↓
                      </span>
                    ) : null}
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 lg:pt-8"
          >
            <AhadProfileImage className="lg:sticky lg:top-28" />
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              {siteConfig.role}. Founder @ {siteConfig.founderOf}.
            </p>
          </motion.div>
        </div>

        {detailLink ? (
          <SectionDetailLink to={detailLink.to} label={detailLink.label} />
        ) : null}
      </div>
    </section>
  )
}
