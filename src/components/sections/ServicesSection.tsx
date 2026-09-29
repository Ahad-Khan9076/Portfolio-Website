import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { services } from '@/data/services'
import { SectionDetailLink } from '@/components/ui/SectionDetailLink'
import { cn } from '@/lib/cn'
import { sectionContainerClass } from '@/lib/sectionLayout'

interface ServicesSectionProps {
  hideIntro?: boolean
  compact?: boolean
  /** On homepage: shorter cards (fewer feature bullets). */
  homePreview?: boolean
  detailLink?: { to: string; label: string }
}

export function ServicesSection({
  hideIntro = false,
  compact = false,
  homePreview = false,
  detailLink,
}: ServicesSectionProps) {
  return (
    <section
      id="services"
      className={cn(
        'relative overflow-hidden bg-brand-white scroll-mt-24',
        hideIntro && '!pt-0',
      )}
      aria-labelledby={hideIntro ? undefined : 'services-heading'}
      aria-label={hideIntro ? 'Service offerings' : undefined}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 size-[24rem] translate-x-1/3 rounded-full bg-brand-blue/40 blur-3xl opacity-35"
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
              Services
            </p>
            <h2 id="services-heading" className="mt-4 text-brand-black">
              Choose the part of your acquisition system that needs fixing.
            </h2>
          </motion.div>
        ) : null}

        <div
          className={cn(
            'grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6',
            hideIntro ? 'mt-0' : 'mt-12',
          )}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                'group flex h-full flex-col border border-brand-black/10 bg-brand-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand-blue/45 hover:shadow-[0_0_32px_rgb(9_71_228_/0.12)] md:p-8',
                service.featured && 'lg:col-span-2 border-brand-blue/25',
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs font-semibold tracking-[0.16em] text-brand-blue">
                  {service.number}
                </span>
                {service.featured ? (
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                    Full system
                  </span>
                ) : null}
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-brand-black md:text-[1.75rem]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                <span className="font-semibold text-brand-black">For: </span>
                {service.forWhom}
              </p>

              <p className="mt-4 text-base leading-relaxed text-gray-700">
                {service.shortDescription}
              </p>

              <div className="mt-6 flex-1">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gray-500">
                  Includes
                </p>
                <ul
                  className={cn(
                    'mt-3 grid gap-2',
                    service.featured
                      ? 'sm:grid-cols-2 lg:grid-cols-3'
                      : 'sm:grid-cols-2',
                  )}
                >
                  {(homePreview
                    ? service.features.slice(0, 3)
                    : service.features
                  ).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-blue"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button
                  to={homePreview ? '/services' : service.ctaTo}
                  variant={service.featured ? 'primary' : 'outline'}
                  glow={service.featured}
                  className="group/btn"
                >
                  {homePreview ? 'Learn more' : service.ctaLabel}
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    aria-hidden
                  />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {detailLink ? (
          <SectionDetailLink to={detailLink.to} label={detailLink.label} />
        ) : null}
      </div>
    </section>
  )
}
