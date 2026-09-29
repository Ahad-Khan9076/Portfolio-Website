import type {
  ContactFormPayload,
  FormSubmissionResult,
  LeadMagnetPayload,
} from '@/lib/forms/types'

/**
 * Submission layer — connect an email marketing or CRM API here later.
 * Example: await fetch('/api/leads', { method: 'POST', body: JSON.stringify(payload) })
 *
 * No external API is connected in this phase.
 */
export async function submitLeadMagnet(
  _payload: LeadMagnetPayload,
): Promise<FormSubmissionResult> {
  await simulateNetworkDelay()
  return { ok: true }
}

export async function submitContactForm(
  _payload: ContactFormPayload,
): Promise<FormSubmissionResult> {
  await simulateNetworkDelay()
  return { ok: true }
}

function simulateNetworkDelay(ms = 600): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}
