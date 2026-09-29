import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'
import type { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        'group flex h-full flex-col border border-brand-black/10 bg-brand-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand-blue/45 hover:shadow-[0_0_48px_rgb(9_71_228_/0.18)] md:p-8',
        service.featured && 'border-brand-blue/25',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs font-semibold tracking-[0.16em] text-brand-blue">
          {service.number}
        </span>
        {service.featured ? (
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-blue">
            Full system
          </span>
        ) : null}
      </div>

      <h3 className="mt-5 text-2xl font-bold tracking-tight text-brand-black">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        <span className="font-semibold text-brand-black">For: </span>
        {service.forWhom}
      </p>

      <p className="mt-4 text-base leading-relaxed text-gray-700">
        {service.shortDescription}
      </p>

      <ul className="mt-6 flex flex-1 flex-col gap-2">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-gray-700"
          >
            <span
              aria-hidden
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-blue"
            />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          to={service.ctaTo}
          variant={service.featured ? 'primary' : 'outline'}
          glow={service.featured}
        >
          {service.ctaLabel}
          <ArrowUpRight className="size-4" aria-hidden />
        </Button>
      </div>
    </article>
  )
}
