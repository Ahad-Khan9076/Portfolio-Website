import { motion } from 'framer-motion'
import { AuditLeadForm } from '@/components/forms/AuditLeadForm'
import { auditAreas, leadMagnetCopy } from '@/data/leadMagnet'

export function LeadMagnetSection() {
  return (
    <section
      id="audit"
      className="relative overflow-hidden border-t border-brand-black/5 bg-gray-50 scroll-mt-24"
      aria-labelledby="audit-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-0 size-[22rem] rounded-full bg-brand-blue/45 blur-3xl opacity-40"
      />

      <div className="container-site relative section-padding">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Interested, not ready to hire?
            </p>
            <h2 id="audit-heading" className="mt-4 text-brand-black">
              {leadMagnetCopy.headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
              {leadMagnetCopy.supporting}
            </p>

            <div className="mt-8 border border-brand-black/10 bg-brand-white p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">
                {leadMagnetCopy.offerTitle}
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-2">
                {auditAreas.map((area) => (
                  <li
                    key={area}
                    className="text-sm font-medium text-brand-black before:mr-2 before:inline-block before:size-1.5 before:rounded-full before:bg-brand-blue before:align-middle"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7"
          >
            <div className="border border-brand-black/10 bg-brand-white p-6 md:p-8 lg:p-10">
              <AuditLeadForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
