import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'
import { cn } from '@/lib/cn'

interface FieldShellProps {
  id: string
  label: string
  error?: string
  children: ReactNode
  className?: string
}

function FieldShell({ id, label, error, children, className }: FieldShellProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-sm font-medium text-brand-black">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-xs text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

const controlClass =
  'w-full border border-brand-black/15 bg-brand-white px-4 py-2.5 text-base text-brand-black outline-none transition-colors placeholder:text-gray-400 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30'

type InputFieldProps = {
  id: string
  label: string
  error?: string
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

export function InputField({
  id,
  label,
  error,
  className,
  ...props
}: InputFieldProps) {
  return (
    <FieldShell id={id} label={label} error={error} className={className}>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={controlClass}
        {...props}
      />
    </FieldShell>
  )
}

type SelectFieldProps = {
  id: string
  label: string
  error?: string
  className?: string
  options: readonly string[]
  placeholder?: string
} & SelectHTMLAttributes<HTMLSelectElement>

export function SelectField({
  id,
  label,
  error,
  className,
  options,
  placeholder = 'Select…',
  ...props
}: SelectFieldProps) {
  return (
    <FieldShell id={id} label={label} error={error} className={className}>
      <select
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(controlClass, 'appearance-none')}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldShell>
  )
}

type TextAreaFieldProps = {
  id: string
  label: string
  error?: string
  className?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextAreaField({
  id,
  label,
  error,
  className,
  ...props
}: TextAreaFieldProps) {
  return (
    <FieldShell id={id} label={label} error={error} className={className}>
      <textarea
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(controlClass, 'min-h-[7rem] resize-y')}
        {...props}
      />
    </FieldShell>
  )
}
