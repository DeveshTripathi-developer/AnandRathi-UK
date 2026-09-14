import { z } from 'zod';

export const contactSchema = z.object({
  // Step 1: Portfolio Qualification
  assetTier: z.enum([
    '£500k - £1m',
    '£1m - £2.5m',
    '£2.5m - £5m',
    '£5m - £10m',
    '£10m+',
  ], {
    message: 'Please select a qualifying liquid asset tier (£500k minimum)',
  }),
  objective: z.enum([
    'Capital Preservation & Yield',
    'Tax-Efficient Growth & Succession',
    'Cross-Border & UK Non-Dom Structuring',
    'Multi-Asset Retirement Mandate',
  ], {
    message: 'Please choose your primary wealth mandate objective',
  }),
  horizon: z.enum([
    '1 - 3 Years',
    '3 - 5 Years',
    '5 - 10 Years',
    '10+ Years / Multi-Generational',
  ], {
    message: 'Please specify your target investment horizon',
  }),
  currentStructure: z.string().max(200).optional(),

  // Step 2: Client Details & Consultation Format
  fullName: z.string().min(2, { message: 'Full legal name must be at least 2 characters' }).max(120),
  email: z.string().email({ message: 'Please provide a valid corporate or private email address' }),
  phone: z.string().min(7, { message: 'Please provide a valid direct contact telephone number' }).max(30),
  location: z.string().min(2, { message: 'Please indicate your current city or jurisdiction of tax residence' }).max(100),
  preferredMeeting: z.enum([
    'In-person (Octagon Point, London)',
    'Secure Video Conference',
    'Confidential Telephone',
  ], {
    message: 'Please choose an initial consultation format',
  }),
  notes: z.string().max(1000).optional(),

  // Step 3: Regulatory Compliance & GDPR
  isHnwConfirmed: z.boolean().refine((val) => val === true, {
    message: 'High-net-worth or sophisticated investor qualification is required',
  }),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: 'UK GDPR and Data Protection Act consent is required to process your request',
  }),
  fcaDisclosureAcknowledged: z.boolean().refine((val) => val === true, {
    message: 'FCA regulatory status disclosure acknowledgment is mandatory',
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactActionResponse = {
  success: boolean;
  message: string;
  referenceId?: string;
  consultantAssignment?: string;
  scheduledOffice?: string;
  submissionTimestamp?: string;
  errors?: Record<string, string[]>;
};
