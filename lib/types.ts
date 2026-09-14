export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  title: string;
  credentials: string;
  experience: string;
  bio: string;
  highlights: string[];
}

export type MandateType = 'conservative' | 'balanced' | 'growth';

export interface MandateConfig {
  name: string;
  rate: number;
  description: string;
  allocation: {
    fixedIncome: number;
    equities: number;
    structuredCredit: number;
    alternatives: number;
  };
  volatility: string;
  suitability: string;
}

export interface CalculationResult {
  year: number;
  conservative: number;
  balanced: number;
  growth: number;
  totalContributions: number;
}

export type LiquidAssetTier =
  | '£500k - £1m'
  | '£1m - £2.5m'
  | '£2.5m - £5m'
  | '£5m - £10m'
  | '£10m+';

export type PrimaryObjective =
  | 'Capital Preservation & Yield'
  | 'Tax-Efficient Growth & Succession'
  | 'Cross-Border & UK Non-Dom Structuring'
  | 'Multi-Asset Retirement Mandate';

export type InvestmentHorizon =
  | '1 - 3 Years'
  | '3 - 5 Years'
  | '5 - 10 Years'
  | '10+ Years / Multi-Generational';

export interface LeadFormData {
  // Step 1: Wealth & Objective
  assetTier: LiquidAssetTier;
  objective: PrimaryObjective;
  horizon: InvestmentHorizon;
  currentStructure?: string;

  // Step 2: Contact Details
  fullName: string;
  email: string;
  phone: string;
  location: string;
  preferredMeeting: 'In-person (Octagon Point, London)' | 'Secure Video Conference' | 'Confidential Telephone';
  notes?: string;

  // Step 3: Regulatory & Privacy Consent
  isHnwConfirmed: boolean;
  privacyConsent: boolean;
  fcaDisclosureAcknowledged: boolean;
}
