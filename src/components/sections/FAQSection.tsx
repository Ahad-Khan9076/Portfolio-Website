import { motion } from 'framer-motion'
import { FAQItem } from '@/components/ui/FAQItem'
import { SectionDetailLink } from '@/components/ui/SectionDetailLink'
import { faqs } from '@/data/faqs'
import { sectionContainerClass } from '@/lib/sectionLayout'

interface FAQSectionProps {
  compact?: boolean
  previewLimit?: number
  detailLink?: { to: string; label: string }
}

export function FAQSection({
  compact = false,
  previewLimit,
  detailLink,
}: FAQSectionProps) {
  const items = previewLimit ? faqs.slice(0, previewLimit) : faqs
  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-brand-black/5 bg-gray-50 scroll-mt-24"
      aria-labelledby="faq-heading"
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
            FAQ
          </p>
          <h2 id="faq-heading" className="mt-4 text-brand-black">
            Straight answers before you commit.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-3xl border border-brand-black/10 bg-brand-white px-6 md:px-8"
        >
          {items.map((faq, index) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={index === 0}
            />
          ))}
        </motion.div>

        {detailLink ? (
          <SectionDetailLink to={detailLink.to} label={detailLink.label} />
        ) : null}
      </div>
    </section>
  )
}
