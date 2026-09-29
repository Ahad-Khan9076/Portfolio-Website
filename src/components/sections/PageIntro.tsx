import { motion, useReducedMotion } from 'framer-motion'
import { easePremium, motionDurations } from '@/lib/motion'

interface PageIntroProps {
  eyebrow?: string
  title: string
  description?: string
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  const reducedMotion = useReducedMotion()

  return (
    <section
      className="border-b border-brand-black/5 bg-brand-white pt-10 pb-8 md:pt-14 md:pb-10"
      aria-labelledby="page-intro-title"
    >
      <div className="container-site max-w-3xl">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDurations.base, ease: easePremium }}
        >
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue sm:text-sm">
              {eyebrow}
            </p>
          ) : null}
          <h1
            id="page-intro-title"
            className="mt-3 text-brand-black md:mt-4"
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-4 prose-muted md:mt-5">{description}</p>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}
