import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { AmbientGlow } from '@/components/ui/AmbientGlow'
import { easePremium, motionDurations } from '@/lib/motion'

const auditTo = '/contact#audit'

export function FinalCTASection() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      className="relative isolate overflow-hidden bg-brand-black text-brand-white"
      aria-labelledby="final-cta-heading"
    >
      <AmbientGlow position="top-left" className="-left-16 opacity-[0.32]" />
      <AmbientGlow position="bottom-right" className="opacity-[0.28]" />

      <div className="container-site relative section-padding">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: motionDurations.slow, ease: easePremium }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 id="final-cta-heading" className="text-balance text-brand-white">
            Your next client shouldn&apos;t depend on luck.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Find the gaps in your system and build pipeline that creates qualified opportunities.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button to="/contact" size="lg" glow className="w-full sm:w-auto">
              Build My Client Acquisition System
            </Button>
            <Button
              to={auditTo}
              variant="outlineLight"
              size="lg"
              className="w-full sm:w-auto"
            >
              Find My Revenue Leaks
            </Button>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Unsure where to start?{' '}
            <Link
              to={auditTo}
              className="font-semibold text-brand-white underline decoration-brand-blue/50 underline-offset-4 transition-colors hover:text-brand-blue"
            >
              Free Revenue Leak Audit
            </Link>
          </p>

          <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 text-left sm:grid-cols-3 sm:gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
                Ready
              </p>
              <Link
                to="/contact"
                className="mt-2 block text-sm font-semibold text-brand-white hover:text-brand-blue"
              >
                Build My System →
              </Link>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
                Interested
              </p>
              <Link
                to={auditTo}
                className="mt-2 block text-sm font-semibold text-brand-white hover:text-brand-blue"
              >
                Get Free Audit →
              </Link>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
                Not ready
              </p>
              <Link
                to="/resources"
                className="mt-2 block text-sm font-semibold text-brand-white hover:text-brand-blue"
              >
                Follow & consume content →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
