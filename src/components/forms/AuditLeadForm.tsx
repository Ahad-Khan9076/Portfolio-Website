import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { InputField, SelectField } from '@/components/ui/FormField'
import {
  acquisitionChannelOptions,
  businessTypeOptions,
  leadMagnetCopy,
} from '@/data/leadMagnet'
import { submitLeadMagnet } from '@/lib/forms/submitForms'
import type { FormSubmitStatus } from '@/lib/forms/types'
import {
  minLength,
  required,
  requiredEmail,
} from '@/lib/forms/validate'

interface AuditLeadFormProps {
  className?: string
}

type FieldErrors = Partial<
  Record<
    'firstName' | 'email' | 'businessType' | 'primaryAcquisitionChannel',
    string
  >
>

export function AuditLeadForm({ className }: AuditLeadFormProps) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [primaryChannel, setPrimaryChannel] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<FormSubmitStatus>('idle')
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validate = (): boolean => {
    const next: FieldErrors = {
      firstName:
        required(firstName, 'First name') ??
        minLength(firstName, 2, 'First name'),
      email: requiredEmail(email),
      businessType: required(businessType, 'Business type'),
      primaryAcquisitionChannel: required(
        primaryChannel,
        'Primary acquisition channel',
      ),
    }

    setErrors(next)
    return !Object.values(next).some(Boolean)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setSubmitError(null)

    if (!validate()) return

    setStatus('submitting')

    const result = await submitLeadMagnet({
      formType: 'lead_magnet_audit',
      firstName: firstName.trim(),
      email: email.trim(),
      businessType,
      primaryAcquisitionChannel: primaryChannel,
      submittedAt: new Date().toISOString(),
    })

    if (!result.ok) {
      setStatus('error')
      setSubmitError(result.message)
      return
    }

    setStatus('success')
    setFirstName('')
    setEmail('')
    setBusinessType('')
    setPrimaryChannel('')
    setErrors({})
  }

  if (status === 'success') {
    return (
      <div
        className={className}
        role="status"
        aria-live="polite"
      >
        <p className="text-lg font-semibold text-brand-black">
          You&apos;re in — audit request received.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          We&apos;ll use this to map leaks across your acquisition system. Email
          integration will deliver the audit when connected.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Submit another
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField
          id="audit-first-name"
          name="firstName"
          label="First Name"
          autoComplete="given-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          error={errors.firstName}
          disabled={status === 'submitting'}
        />
        <InputField
          id="audit-email"
          name="email"
          type="email"
          label="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          disabled={status === 'submitting'}
        />
        <SelectField
          id="audit-business-type"
          name="businessType"
          label="Business Type"
          options={businessTypeOptions}
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          error={errors.businessType}
          disabled={status === 'submitting'}
        />
        <SelectField
          id="audit-channel"
          name="primaryAcquisitionChannel"
          label="Primary Acquisition Channel"
          options={acquisitionChannelOptions}
          value={primaryChannel}
          onChange={(e) => setPrimaryChannel(e.target.value)}
          error={errors.primaryAcquisitionChannel}
          disabled={status === 'submitting'}
        />
      </div>

      {submitError ? (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {submitError}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        glow
        className="mt-6 w-full sm:w-auto"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting…' : leadMagnetCopy.cta}
      </Button>
    </form>
  )
}
