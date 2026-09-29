import { motion } from 'framer-motion'
import { ContactForm } from '@/components/forms/ContactForm'

interface ContactSectionProps {
  showPageHeader?: boolean
}

export function ContactSection({ showPageHeader = true }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-white scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="container-site section-padding">
        {showPageHeader ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Contact
            </p>
            <h2 id="contact-heading" className="mt-4 text-brand-black">
              Let&apos;s build your acquisition system.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
              Tell me where you&apos;re stuck — we&apos;ll map the next step.
            </p>
          </motion.div>
        ) : (
          <h2 id="contact-heading" className="sr-only">
            Contact
          </h2>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-3xl border border-brand-black/10 bg-gray-50 p-6 md:p-8 lg:p-10"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
