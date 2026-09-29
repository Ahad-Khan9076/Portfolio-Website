import { motion } from 'framer-motion'

/**
 * Editorial bridge between problem diagnosis and the acquisition system.
 */
interface SystemTransitionProps {
  compact?: boolean
}

export function SystemTransition({ compact = false }: SystemTransitionProps) {
  return (
    <section
      className="relative overflow-hidden border-y border-brand-black/10 bg-brand-white"
      aria-label="Section transition"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-blue/50 to-transparent"
      />

      <div
        className={
          compact
            ? 'container-site relative py-12 md:py-16'
            : 'container-site relative py-16 md:py-24 lg:py-28'
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-2xl font-extrabold tracking-tight text-brand-black sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            These aren’t six different problems.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-xl font-semibold tracking-tight text-brand-blue sm:text-2xl md:text-3xl md:leading-snug">
            Symptoms of one broken acquisition system.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
