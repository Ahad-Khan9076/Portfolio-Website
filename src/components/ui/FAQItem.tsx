import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

interface FAQItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
  className?: string
}

export function FAQItem({
  question,
  answer,
  defaultOpen = false,
  className,
}: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()

  return (
    <div
      className={cn(
        'border-b border-brand-black/10 last:border-b-0',
        className,
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        <span className="text-base md:text-lg font-semibold tracking-tight text-brand-black pr-4">
          {question}
        </span>
        <ChevronDown
          className={cn(
            'size-5 shrink-0 text-brand-blue transition-transform duration-200',
            open && 'rotate-180',
          )}
          aria-hidden
        />
      </button>
      <div
        id={panelId}
        role="region"
        hidden={!open}
        className={cn('pb-5 pr-8', !open && 'hidden')}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}
