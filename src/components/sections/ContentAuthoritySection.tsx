import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import {
  authorityContentCards,
  authorityPlatforms,
  linkedInFollowCta,
} from '@/data/contentAuthority'
import { SectionDetailLink } from '@/components/ui/SectionDetailLink'
import { cn } from '@/lib/cn'
import { sectionContainerClass } from '@/lib/sectionLayout'

interface ContentAuthoritySectionProps {
  hideIntro?: boolean
  compact?: boolean
  previewLimit?: number
  detailLink?: { to: string; label: string }
}

export function ContentAuthoritySection({
  hideIntro = false,
  compact = false,
  previewLimit,
  detailLink,
}: ContentAuthoritySectionProps) {
  const cards = previewLimit
    ? authorityContentCards.slice(0, previewLimit)
    : authorityContentCards
  return (
    <section
      id="content"
      className={cn(
        'relative overflow-hidden bg-brand-white scroll-mt-24',
        hideIntro && '!pt-0',
      )}
      aria-labelledby={hideIntro ? undefined : 'content-heading'}
      aria-label={hideIntro ? 'Content and authority' : undefined}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 size-[22rem] rounded-full bg-brand-blue/40 blur-3xl opacity-35"
      />

      <div
        className={sectionContainerClass(
          compact,
          hideIntro ? '!pt-0 md:!pt-2' : undefined,
        )}
      >
        {!hideIntro ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Authority
            </p>
            <h2 id="content-heading" className="mt-4 text-brand-black">
              Most of my thinking happens in public.
            </h2>
          </motion.div>
        ) : null}

        <ul
          className={cn(
            'grid grid-cols-2 gap-4 sm:grid-cols-4',
            hideIntro ? 'mt-0' : 'mt-10 lg:mt-12',
          )}
        >
          {authorityPlatforms.map((platform, index) => (
            <motion.li
              key={platform.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border border-brand-black/10 bg-brand-white p-4 md:p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-bold tracking-tight text-brand-black">
                  {platform.name}
                </span>
                {platform.status === 'future' ? (
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-gray-400">
                    Future
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                {platform.description}
              </p>
            </motion.li>
          ))}
        </ul>

        {/* Content cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {cards.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: (index % 4) * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                'group flex h-full flex-col border border-brand-black/10 p-5 transition-colors duration-200 hover:border-brand-blue/40 md:p-6',
                index === 0 && 'lg:col-span-2',
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                  {card.category}
                </p>
                <span className="text-[0.65rem] font-medium text-gray-500">
                  {card.platform}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-brand-black group-hover:text-brand-blue transition-colors">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                {card.excerpt}
              </p>
              {card.isPlaceholder ? (
                <p className="mt-4 text-[0.65rem] uppercase tracking-[0.1em] text-gray-400">
                  Content link pending
                </p>
              ) : (
                <a
                  href={card.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-black hover:text-brand-blue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
              )}
            </motion.article>
          ))}
        </div>

        {detailLink ? (
          <SectionDetailLink to={detailLink.to} label={detailLink.label} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 flex flex-col items-start gap-4 border-t border-brand-black/10 pt-10 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="max-w-md text-sm text-gray-600">
              Follow for client acquisition systems thinking — not generic growth
              hacks.
            </p>
            {linkedInFollowCta.isPlaceholder ? (
              <Button to="/contact" variant="outline" size="md">
                {linkedInFollowCta.label}
              </Button>
            ) : (
              <Button
                to={linkedInFollowCta.href}
                variant="primary"
                size="md"
                glow
              >
                {linkedInFollowCta.label}
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
