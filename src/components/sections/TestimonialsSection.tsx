import { motion } from 'framer-motion'
import { SectionDetailLink } from '@/components/ui/SectionDetailLink'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { testimonials } from '@/data/testimonials'
import { sectionContainerClass } from '@/lib/sectionLayout'

interface TestimonialsSectionProps {
  compact?: boolean
  previewLimit?: number
  detailLink?: { to: string; label: string }
}

export function TestimonialsSection({
  compact = false,
  previewLimit,
  detailLink,
}: TestimonialsSectionProps) {
  const items = previewLimit
    ? testimonials.slice(0, previewLimit)
    : testimonials
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-brand-black/5 bg-gray-50 scroll-mt-24"
      aria-labelledby="testimonials-heading"
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
            Social proof
          </p>
          <h2 id="testimonials-heading" className="mt-4 text-brand-black">
            Don&apos;t take my word for it.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600">
            Verified quotes replace placeholders — no fabricated results.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TestimonialCard
                quote={item.quote}
                author={item.author}
                role={item.role}
                company={item.company}
                imageUrl={item.imageUrl}
                isPlaceholder={item.isPlaceholder}
                tone="light"
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

        {detailLink ? (
          <SectionDetailLink to={detailLink.to} label={detailLink.label} />
        ) : null}
      </div>
    </section>
  )
}
