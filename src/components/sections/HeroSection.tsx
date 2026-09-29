import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { AmbientGlow } from '@/components/ui/AmbientGlow'
import { HeroPortrait } from '@/components/sections/HeroPortrait'
import { siteConfig } from '@/data/site'
import { easePremium, motionDurations } from '@/lib/motion'

const displayChannels = [
  'Upwork',
  'Fiverr',
  'LinkedIn',
  'Email',
  'Inbound',
  'Outbound',
] as const

export function HeroSection() {
  const reducedMotion = useReducedMotion()

  const fadeIn = reducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 18 }

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-brand-black text-brand-white"
      aria-labelledby="hero-heading"
    >
      <AmbientGlow position="top-left" className="-left-20 opacity-[0.3]" />
      <AmbientGlow position="bottom-right" className="opacity-[0.25]" />

      <div className="container-site relative grid min-w-0 items-center gap-10 py-14 sm:gap-12 sm:py-16 md:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24 xl:gap-14 xl:py-28">
        <div className="min-w-0 lg:col-span-6">
          <motion.div
            initial={fadeIn}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionDurations.slow, ease: easePremium }}
            className="flex flex-col gap-5 md:gap-6"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue sm:text-sm">
                Client acquisition systems
              </p>
              <p className="text-sm text-gray-400">
                {siteConfig.name}
                <span className="mx-2 text-gray-600">·</span>
                {siteConfig.role}
              </p>
            </div>

            <h1 id="hero-heading" className="max-w-[16em] text-brand-white">
              Build a Client Acquisition System That Brings Qualified
              Opportunities.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
              I help freelancers and agencies connect positioning through
              pipeline — one system, not scattered tactics.
            </p>

            <div className="flex flex-wrap items-end gap-6 sm:gap-8">
              <div>
                <p className="text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">
                  4+
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-gray-500">
                  Years
                </p>
              </div>
              <div>
                <p className="text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">
                  $50K+
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-gray-500">
                  New Revenue Generated
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button to="/contact" size="lg" glow className="w-full sm:w-auto">
                  Find My Revenue Leaks
                </Button>
                <Button
                  to="/systems"
                  variant="outlineLight"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  See How I Build Systems
                </Button>
              </div>

              <p className="text-sm text-gray-500">
                Prefer a direct start?{' '}
                <Link
                  to="/contact"
                  className="font-semibold text-brand-white underline decoration-brand-blue/50 underline-offset-4 transition-colors hover:text-brand-blue"
                >
                  DM me &ldquo;SYSTEM&rdquo;
                </Link>
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                Channels inside the system
              </p>
              <ul className="flex flex-wrap gap-x-3 gap-y-2 sm:gap-x-4">
                {displayChannels.map((channel) => (
                  <li
                    key={channel}
                    className="text-sm font-medium text-gray-300"
                  >
                    {channel}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="min-w-0 lg:col-span-6">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionDurations.slow,
              delay: reducedMotion ? 0 : 0.1,
              ease: easePremium,
            }}
            className="lg:pl-2 xl:pl-6"
          >
            <HeroPortrait />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
