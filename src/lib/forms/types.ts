export type FormSubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface LeadMagnetPayload {
  formType: 'lead_magnet_audit'
  firstName: string
  email: string
  businessType: string
  primaryAcquisitionChannel: string
  submittedAt: string
}

export interface ContactFormPayload {
  formType: 'contact'
  name: string
  email: string
  company: string
  currentAcquisitionChannel: string
  strugglingWith: string
  budgetEngagementType: string
  message: string
  submittedAt: string
}

export type FormSubmissionResult =
  | { ok: true }
  | { ok: false; message: string }
