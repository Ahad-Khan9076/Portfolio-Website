import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { homePathways } from '@/data/pathways'
import { easePremium, motionDurations } from '@/lib/motion'

export function HomePathwaysSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      className="relative border-t border-brand-black/5 bg-brand-white"
      aria-labelledby="pathways-heading"
    >
      <div className="container-site section-padding-compact md:section-padding">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: motionDurations.base, ease: easePremium }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue sm:text-sm">
            Explore
          </p>
          <h2 id="pathways-heading" className="mt-4 text-brand-black">
            Go deeper — one topic per page.
          </h2>
          <p className="mt-4 prose-muted max-w-2xl">
            Each topic has its own page — read what matters, skip the rest.
          </p>
        </motion.div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {homePathways.map((item, index) => (
            <motion.li
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: motionDurations.base,
                delay: index * 0.04,
                ease: easePremium,
              }}
            >
              <Link
                to={item.to}
                className="group flex h-full flex-col border border-brand-black/10 p-5 transition-[border-color,box-shadow] duration-200 hover:border-brand-blue/40 hover:shadow-[0_0_28px_rgb(9_71_228_/0.1)] md:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold tracking-tight text-brand-black group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h3>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-blue"
                    aria-hidden
                  />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
