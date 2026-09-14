'use server';

import { contactSchema, type ContactActionResponse } from '@/lib/schemas/contact';

export type { ContactActionResponse, ContactFormData } from '@/lib/schemas/contact';

/**
 * Server Action: Process and record confidential HNW consultation requests.
 * Validates inputs against strict FCA compliance and UK GDPR schemas.
 */
export async function submitContactInquiry(rawData: unknown): Promise<ContactActionResponse> {
  // Simulate institutional processing and verification latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    const formattedErrors: Record<string, string[]> = {};
    for (const [field, issues] of Object.entries(result.error.flatten().fieldErrors)) {
      if (issues && issues.length > 0) {
        formattedErrors[field] = issues;
      }
    }
    return {
      success: false,
      message: 'Validation failed. Please review the highlighted fields before proceeding.',
      errors: formattedErrors,
    };
  }

  const data = result.data;
  const timestamp = Date.now().toString().slice(-6);
  const referenceId = `ARW-UK-${timestamp}`;
  const isoTimestamp = new Date().toISOString();

  // Audit log for compliance review
  console.log(`[FCA Compliance Audit] Intake Record Created: ${referenceId}`, {
    referenceId,
    assetTier: data.assetTier,
    objective: data.objective,
    taxResidence: data.location,
    format: data.preferredMeeting,
    clientSummary: `${data.fullName.slice(0, 1)}*** | ${data.email.split('@')[1]}`,
    fcaFirmRef: '1033886',
    companyNumber: '16223861',
    office: 'Octagon Point, 5 Cheapside, City of London',
  });

  return {
    success: true,
    message: 'Your confidential consultation request has been registered with Anand Rathi Wealth UK Limited.',
    referenceId,
    consultantAssignment: 'Senior Private Wealth Director, London Practice',
    scheduledOffice: 'Octagon Point, 5 Cheapside, City of London, EC2V 6AA',
    submissionTimestamp: isoTimestamp,
  };
}

// Alias for backward compatibility
export async function submitConsultationRequest(rawData: unknown): Promise<ContactActionResponse> {
  return submitContactInquiry(rawData);
}
