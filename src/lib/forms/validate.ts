const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim())
}

export function required(value: string, label: string): string | undefined {
  if (!value.trim()) return `${label} is required.`
  return undefined
}

export function requiredEmail(value: string): string | undefined {
  const req = required(value, 'Email')
  if (req) return req
  if (!isValidEmail(value)) return 'Enter a valid email address.'
  return undefined
}

export function minLength(
  value: string,
  min: number,
  label: string,
): string | undefined {
  if (value.trim().length < min) {
    return `${label} must be at least ${min} characters.`
  }
  return undefined
}
