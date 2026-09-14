'use server';

import { z } from 'zod';

const leadSchema = z.object({
  assetTier: z.enum([
    '£500k - £1m',
    '£1m - £2.5m',
    '£2.5m - £5m',
    '£5m - £10m',
    '£10m+',
  ], {
    message: 'Please select a qualified liquid wealth tier',
  }),
  objective: z.enum([
    'Capital Preservation & Yield',
    'Tax-Efficient Growth & Succession',
    'Cross-Border & UK Non-Dom Structuring',
    'Multi-Asset Retirement Mandate',
  ], {
    message: 'Please select your primary strategic objective',
  }),
  horizon: z.enum([
    '1 - 3 Years',
    '3 - 5 Years',
    '5 - 10 Years',
    '10+ Years / Multi-Generational',
  ], {
    message: 'Please indicate your investment timeframe',
  }),
  currentStructure: z.string().optional(),

  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please provide a valid email address' }),
  phone: z.string().min(7, { message: 'Please provide a valid direct contact telephone number' }),
  location: z.string().min(2, { message: 'Please indicate your current city or country of tax residence' }),
  preferredMeeting: z.enum([
    'In-person (Octagon Point, London)',
    'Secure Video Conference',
    'Confidential Telephone',
  ], {
    message: 'Please select a preferred meeting format',
  }),
  notes: z.string().max(1000).optional(),

  isHnwConfirmed: z.boolean().refine(val => val === true, {
    message: 'Please confirm high-net-worth or sophisticated client eligibility',
  }),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: 'Privacy and data protection consent is required under UK GDPR',
  }),
  fcaDisclosureAcknowledged: z.boolean().refine(val => val === true, {
    message: 'FCA regulatory status acknowledgment is required',
  }),
});

export type ActionResponse = {
  success: boolean;
  message: string;
  referenceId?: string;
  consultantAssignment?: string;
  scheduledOffice?: string;
  errors?: Record<string, string[]>;
};

export async function submitConsultationRequest(rawData: unknown): Promise<ActionResponse> {
  // Simulate institutional server-side processing latency
  await new Promise((resolve) => setTimeout(resolve, 650));

  const validation = leadSchema.safeParse(rawData);

  if (!validation.success) {
    const formattedErrors: Record<string, string[]> = {};
    for (const [field, issues] of Object.entries(validation.error.flatten().fieldErrors)) {
      if (issues) formattedErrors[field] = issues;
    }
    return {
      success: false,
      message: 'Validation failed. Please review the highlighted requirements.',
      errors: formattedErrors,
    };
  }

  const data = validation.data;
  const timestamp = Date.now().toString().slice(-6);
  const referenceId = `ARW-UK-${timestamp}`;

  // Log server-side record securely (mocking confidential advisory CRM ingestion)
  console.log(`[FCA Compliance Audit] New private wealth intake logged: ${referenceId}`, {
    tier: data.assetTier,
    objective: data.objective,
    residence: data.location,
    format: data.preferredMeeting,
    client: `${data.fullName.slice(0, 1)}*** (${data.email.split('@')[1]})`,
    fcaRef: '1033886',
  });

  return {
    success: true,
    message: 'Your confidential consultation request has been lodged with Anand Rathi Wealth UK Limited.',
    referenceId,
    consultantAssignment: 'Senior Private Wealth Director, London Practice',
    scheduledOffice: 'Octagon Point, 5 Cheapside, City of London, EC2V 6AA',
  };
}
