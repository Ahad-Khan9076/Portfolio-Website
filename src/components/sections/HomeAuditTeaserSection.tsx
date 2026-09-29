import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { auditAreas, leadMagnetCopy } from '@/data/leadMagnet'
import { sectionContainerClass } from '@/lib/sectionLayout'

export function HomeAuditTeaserSection() {
  const previewAreas = auditAreas.slice(0, 4)

  return (
    <section
      id="audit"
      className="relative overflow-hidden border-t border-brand-black/5 bg-gray-50 scroll-mt-24"
      aria-labelledby="home-audit-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-0 size-[22rem] rounded-full bg-brand-blue/45 blur-3xl opacity-40"
      />

      <div className={sectionContainerClass(true)}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Free audit
            </p>
            <h2 id="home-audit-heading" className="mt-4 text-brand-black">
              {leadMagnetCopy.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              {leadMagnetCopy.supporting}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button to="/contact#audit" size="lg" glow className="w-full sm:w-auto">
                Start the Revenue Leak Audit
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Contact & FAQ
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="border border-brand-black/10 bg-brand-white p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">
                {leadMagnetCopy.offerTitle}
              </p>
              <ul className="mt-5 space-y-2">
                {previewAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-blue"
                    />
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                Full checklist and form on the contact page.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
