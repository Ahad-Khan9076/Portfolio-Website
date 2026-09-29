import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { InputField, SelectField, TextAreaField } from '@/components/ui/FormField'
import { acquisitionChannelOptions } from '@/data/leadMagnet'
import { submitContactForm } from '@/lib/forms/submitForms'
import type { FormSubmitStatus } from '@/lib/forms/types'
import {
  minLength,
  required,
  requiredEmail,
} from '@/lib/forms/validate'

const strugglingOptions = [
  'Positioning / offer clarity',
  'Marketplace profiles (Upwork / Fiverr)',
  'Proposals & bidding',
  'LinkedIn / email outreach',
  'Follow-up & pipeline',
  'Full system — not sure where to start',
] as const

const budgetOptions = [
  'Audit / strategy only',
  'Focused channel build',
  'Full acquisition system',
  'Not sure yet',
] as const

type FieldErrors = Partial<
  Record<
    | 'name'
    | 'email'
    | 'currentAcquisitionChannel'
    | 'strugglingWith'
    | 'budgetEngagementType',
    string
  >
>

interface ContactFormProps {
  className?: string
  showDmCta?: boolean
}

export function ContactForm({ className, showDmCta = true }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [channel, setChannel] = useState('')
  const [strugglingWith, setStrugglingWith] = useState('')
  const [budget, setBudget] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<FormSubmitStatus>('idle')
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validate = (): boolean => {
    const next: FieldErrors = {
      name: required(name, 'Name') ?? minLength(name, 2, 'Name'),
      email: requiredEmail(email),
      currentAcquisitionChannel: required(
        channel,
        'Current acquisition channel',
      ),
      strugglingWith: required(strugglingWith, 'What you are struggling with'),
      budgetEngagementType: required(budget, 'Budget / engagement type'),
    }

    setErrors(next)
    return !Object.values(next).some(Boolean)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setSubmitError(null)

    if (!validate()) return

    setStatus('submitting')

    const result = await submitContactForm({
      formType: 'contact',
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      currentAcquisitionChannel: channel,
      strugglingWith,
      budgetEngagementType: budget,
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    })

    if (!result.ok) {
      setStatus('error')
      setSubmitError(result.message)
      return
    }

    setStatus('success')
    setName('')
    setEmail('')
    setCompany('')
    setChannel('')
    setStrugglingWith('')
    setBudget('')
    setMessage('')
    setErrors({})
  }

  if (status === 'success') {
    return (
      <div className={className} role="status" aria-live="polite">
        <p className="text-lg font-semibold text-brand-black">
          Message received.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Thanks for reaching out. This form is ready to connect to your CRM or
          inbox when you wire up the API.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField
          id="contact-name"
          name="name"
          label="Name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
          disabled={status === 'submitting'}
        />
        <InputField
          id="contact-email"
          name="email"
          type="email"
          label="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          disabled={status === 'submitting'}
        />
        <InputField
          id="contact-company"
          name="company"
          label="Company"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          disabled={status === 'submitting'}
          className="sm:col-span-2"
        />
        <SelectField
          id="contact-channel"
          name="currentAcquisitionChannel"
          label="Current acquisition channel"
          options={acquisitionChannelOptions}
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
          error={errors.currentAcquisitionChannel}
          disabled={status === 'submitting'}
        />
        <SelectField
          id="contact-struggling"
          name="strugglingWith"
          label="What are you struggling with?"
          options={strugglingOptions}
          value={strugglingWith}
          onChange={(e) => setStrugglingWith(e.target.value)}
          error={errors.strugglingWith}
          disabled={status === 'submitting'}
        />
        <SelectField
          id="contact-budget"
          name="budgetEngagementType"
          label="Budget / engagement type"
          options={budgetOptions}
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          error={errors.budgetEngagementType}
          disabled={status === 'submitting'}
          className="sm:col-span-2"
        />
        <TextAreaField
          id="contact-message"
          name="message"
          label="Message (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === 'submitting'}
          className="sm:col-span-2"
          placeholder="Anything else that helps us understand your situation…"
        />
      </div>

      {submitError ? (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {submitError}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" glow disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Build My System'}
        </Button>
        {showDmCta ? (
          <p className="text-sm text-gray-600">
            Prefer DMs?{' '}
            <Link
              to="/contact"
              className="font-semibold text-brand-blue hover:underline"
            >
              DM me &ldquo;SYSTEM&rdquo;
            </Link>
          </p>
        ) : null}
      </div>
    </form>
  )
}
