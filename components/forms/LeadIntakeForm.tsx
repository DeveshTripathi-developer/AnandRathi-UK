'use client';

import React, { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar,
  AlertCircle,
  FileCheck,
  Lock,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { 
  contactSchema, 
  ContactFormData, 
  ContactActionResponse 
} from '@/lib/schemas/contact';
import { 
  submitContactInquiry 
} from '@/app/actions/contact';
import { LiquidAssetTier, PrimaryObjective, InvestmentHorizon } from '@/lib/types';

const ASSET_TIERS: LiquidAssetTier[] = [
  '£500k - £1m',
  '£1m - £2.5m',
  '£2.5m - £5m',
  '£5m - £10m',
  '£10m+',
];

const OBJECTIVES: PrimaryObjective[] = [
  'Capital Preservation & Yield',
  'Tax-Efficient Growth & Succession',
  'Cross-Border & UK Non-Dom Structuring',
  'Multi-Asset Retirement Mandate',
];

const HORIZONS: InvestmentHorizon[] = [
  '1 - 3 Years',
  '3 - 5 Years',
  '5 - 10 Years',
  '10+ Years / Multi-Generational',
];

const MEETING_FORMATS = [
  {
    id: 'In-person (Octagon Point, London)',
    title: 'In-Person Private Suite',
    subtitle: 'Octagon Point, 5 Cheapside, City of London',
    badge: 'Recommended',
  },
  {
    id: 'Secure Video Conference',
    title: 'Encrypted Video Consultation',
    subtitle: 'Direct screen sharing of bespoke portfolio stress-tests',
    badge: 'Global NRI',
  },
  {
    id: 'Confidential Telephone',
    title: 'Direct Private Telephone',
    subtitle: 'Immediate exploratory conversation with Senior Director',
    badge: 'Discreet',
  },
] as const;

interface LeadIntakeFormProps {
  initialValues?: Partial<ContactFormData>;
  onSuccess?: () => void;
  className?: string;
}

export default function LeadIntakeForm({ initialValues, onSuccess, className = '' }: LeadIntakeFormProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [serverResult, setServerResult] = useState<ContactActionResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      assetTier: initialValues?.assetTier || '£1m - £2.5m',
      objective: initialValues?.objective || 'Capital Preservation & Yield',
      horizon: initialValues?.horizon || '5 - 10 Years',
      currentStructure: initialValues?.currentStructure || '',
      fullName: initialValues?.fullName || '',
      email: initialValues?.email || '',
      phone: initialValues?.phone || '',
      location: initialValues?.location || '',
      preferredMeeting: initialValues?.preferredMeeting || 'In-person (Octagon Point, London)',
      notes: initialValues?.notes || '',
      isHnwConfirmed: false as unknown as true,
      privacyConsent: false as unknown as true,
      fcaDisclosureAcknowledged: false as unknown as true,
    },
  });

  const selectedTier = useWatch({ control, name: 'assetTier' });
  const selectedObjective = useWatch({ control, name: 'objective' });
  const selectedHorizon = useWatch({ control, name: 'horizon' });
  const selectedMeeting = useWatch({ control, name: 'preferredMeeting' });

  const goToNextStep = async () => {
    setSubmissionError(null);
    if (currentStep === 1) {
      const isValid = await trigger(['assetTier', 'objective', 'horizon']);
      if (isValid) setCurrentStep(2);
    } else if (currentStep === 2) {
      const isValid = await trigger(['fullName', 'email', 'phone', 'location', 'preferredMeeting']);
      if (isValid) setCurrentStep(3);
    }
  };

  const goToPreviousStep = () => {
    setSubmissionError(null);
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3);
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const result = await submitContactInquiry(data);
      if (result.success) {
        setServerResult(result);
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setSubmissionError(result.message || 'Submission failed. Please check form entries.');
      }
    } catch {
      setSubmissionError('Network communication timeout. Please verify your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStartNewRequest = () => {
    reset();
    setServerResult(null);
    setCurrentStep(1);
    setSubmissionError(null);
  };

  // SUCCESS STATE SCREEN
  if (serverResult && serverResult.success) {
    return (
      <div 
        id="lead-intake-success-screen"
        className={`bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-10 shadow-2xl text-center space-y-6 ${className}`}
      >
        <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto text-amber-600">
          <CheckCircle2 className="w-9 h-9 stroke-[2]" />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            FCA Compliant Intake Registered
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
            Consultation Request Confirmed
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Your mandate dossier has been transmitted confidentially to our senior advisory practice in the City of London.
          </p>
        </div>

        {/* Reference & Assignment Details Card */}
        <div className="bg-slate-900 text-white rounded-xl p-5 max-w-lg mx-auto text-left space-y-3 border border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs text-slate-400">Institutional Reference No:</span>
            <span className="font-mono font-bold text-amber-400 text-sm tracking-wider">
              {serverResult.referenceId}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs text-slate-400">Direct Advisory Assignment:</span>
            <span className="text-xs font-semibold text-slate-200">
              {serverResult.consultantAssignment}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Consultation Domicile:</span>
            <span className="text-xs text-slate-300">
              {serverResult.scheduledOffice}
            </span>
          </div>
        </div>

        {/* Regulatory Note */}
        <div className="text-xs text-slate-500 max-w-md mx-auto flex items-center justify-center gap-2">
          <Lock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>FCA Reference: 1033886 • Data safeguarded in compliance with UK GDPR standards</span>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={handleStartNewRequest}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit Another Inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      id="consultation-intake-form"
      className={`bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-8 lg:p-10 ${className}`}
    >
      {/* Form Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Confidential HNW Consultation Intake
            </span>
          </div>
          <span className="text-xs font-mono text-slate-600 font-semibold">
            Step {currentStep} of 3
          </span>
        </div>

        {/* 3 Step Indicator Tabs */}
        <div className="grid grid-cols-3 gap-2">
          <div className="space-y-1">
            <div className={`h-1.5 rounded-full transition-all duration-300 ${currentStep >= 1 ? 'bg-amber-600' : 'bg-slate-200'}`} />
            <span className={`text-[11px] font-semibold block truncate ${currentStep === 1 ? 'text-amber-800' : 'text-slate-600'}`}>
              1. Liquid Assets
            </span>
          </div>
          <div className="space-y-1">
            <div className={`h-1.5 rounded-full transition-all duration-300 ${currentStep >= 2 ? 'bg-amber-600' : 'bg-slate-200'}`} />
            <span className={`text-[11px] font-semibold block truncate ${currentStep === 2 ? 'text-amber-800' : 'text-slate-600'}`}>
              2. Contact & Venue
            </span>
          </div>
          <div className="space-y-1">
            <div className={`h-1.5 rounded-full transition-all duration-300 ${currentStep === 3 ? 'bg-amber-600' : 'bg-slate-200'}`} />
            <span className={`text-[11px] font-semibold block truncate ${currentStep === 3 ? 'text-amber-800' : 'text-slate-600'}`}>
              3. FCA Verification
            </span>
          </div>
        </div>
      </div>

      {submissionError && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{submissionError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* STEP 1: LIQUID ASSET TIER & MANDATE OBJECTIVE */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* Liquid Assets Selector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Select Investable / Liquid Asset Tier <span className="text-amber-600">*</span>
                </label>
                <span className="text-[11px] text-slate-500 font-medium">£500k UK statutory threshold</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {ASSET_TIERS.map((tier) => {
                  const isSelected = selectedTier === tier;
                  return (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setValue('assetTier', tier, { shouldValidate: true })}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-600 bg-amber-50/80 text-amber-950 font-bold shadow-sm ring-1 ring-amber-500/50'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span className="text-xs sm:text-sm block">{tier}</span>
                    </button>
                  );
                })}
              </div>
              {errors.assetTier && (
                <p className="text-xs text-rose-600 font-medium">{errors.assetTier.message}</p>
              )}
            </div>

            {/* Strategic Objective */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                Primary Wealth Objective <span className="text-amber-600">*</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {OBJECTIVES.map((obj) => {
                  const isSelected = selectedObjective === obj;
                  return (
                    <button
                      key={obj}
                      type="button"
                      onClick={() => setValue('objective', obj, { shouldValidate: true })}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-start justify-between cursor-pointer ${
                        isSelected
                          ? 'border-amber-600 bg-amber-50/80 text-slate-950 ring-1 ring-amber-500/50 shadow-sm'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span className="text-xs font-semibold leading-snug">{obj}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
              {errors.objective && (
                <p className="text-xs text-rose-600 font-medium">{errors.objective.message}</p>
              )}
            </div>

            {/* Investment Horizon */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                Anticipated Investment Horizon <span className="text-amber-600">*</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {HORIZONS.map((hor) => {
                  const isSelected = selectedHorizon === hor;
                  return (
                    <button
                      key={hor}
                      type="button"
                      onClick={() => setValue('horizon', hor, { shouldValidate: true })}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-600 bg-amber-50/80 text-amber-950 font-bold ring-1 ring-amber-500/50 shadow-sm'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span className="text-xs block">{hor}</span>
                    </button>
                  );
                })}
              </div>
              {errors.horizon && (
                <p className="text-xs text-rose-600 font-medium">{errors.horizon.message}</p>
              )}
            </div>

            {/* Existing Structure (Optional) */}
            <div className="space-y-1.5">
              <label htmlFor="currentStructure" className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center justify-between">
                <span>Current Advisory Custody / Family Office Structure (Optional)</span>
                <span className="text-[11px] text-slate-600 font-normal">e.g. SIPP, SSAS, Trust, Overseas HoldCo</span>
              </label>
              <input
                id="currentStructure"
                type="text"
                {...register('currentStructure')}
                placeholder="e.g., Discretionary portfolio with private bank, family trust, or personal holding company"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none"
              />
            </div>

          </div>
        )}

        {/* STEP 2: CONTACT DETAILS & CONSULTATION FORMAT */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-600" />
                  <span>Full Legal Name <span className="text-amber-600">*</span></span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  {...register('fullName')}
                  placeholder="e.g., Lord / Dr / Mr Alistair Campbell"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                />
                {errors.fullName && (
                  <p className="text-xs text-rose-600 font-medium">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-600" />
                  <span>Confidential Email Address <span className="text-amber-600">*</span></span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="name@familyoffice.co.uk or personal email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                />
                {errors.email && (
                  <p className="text-xs text-rose-600 font-medium">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Direct Contact Telephone <span className="text-amber-600">*</span></span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  placeholder="+44 20 7946 0000 or mobile"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                />
                {errors.phone && (
                  <p className="text-xs text-rose-600 font-medium">{errors.phone.message}</p>
                )}
              </div>

              {/* Tax Residence / Location */}
              <div className="space-y-1.5">
                <label htmlFor="location" className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Primary Tax Residence / City <span className="text-amber-600">*</span></span>
                </label>
                <input
                  id="location"
                  type="text"
                  {...register('location')}
                  placeholder="e.g., London UK, Dubai UAE, Singapore, Mumbai"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                />
                {errors.location && (
                  <p className="text-xs text-rose-600 font-medium">{errors.location.message}</p>
                )}
              </div>
            </div>

            {/* Meeting Venue Selection */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                Preferred Initial Consultation Venue <span className="text-amber-600">*</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {MEETING_FORMATS.map((fmt) => {
                  const isSelected = selectedMeeting === fmt.id;
                  return (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => setValue('preferredMeeting', fmt.id, { shouldValidate: true })}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-amber-600 bg-amber-50/80 text-slate-950 ring-1 ring-amber-500/50 shadow-sm'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                            {fmt.badge}
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                        </div>
                        <span className="font-semibold text-xs block text-slate-900 mt-2">{fmt.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{fmt.subtitle}</p>
                    </button>
                  );
                })}
              </div>
              {errors.preferredMeeting && (
                <p className="text-xs text-rose-600 font-medium">{errors.preferredMeeting.message}</p>
              )}
            </div>

            {/* Confidential Notes */}
            <div className="space-y-1.5">
              <label htmlFor="notes" className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                Confidential Preliminary Notes / Specific Areas of Inquiry (Optional)
              </label>
              <textarea
                id="notes"
                rows={3}
                {...register('notes')}
                placeholder="Share any background you feel comfortable sharing in advance (e.g. liquidity event timing, cross-border remittance, IHT planning)..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none resize-none"
              />
            </div>

          </div>
        )}

        {/* STEP 3: REGULATORY VERIFICATION & STATUTORY CONSENTS */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <Building2 className="w-4 h-4 text-amber-700" />
                <span>Financial Conduct Authority (FCA) Statutory Disclosures</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Anand Rathi Wealth UK Limited (Company No. 16223861) is authorised and regulated by the Financial Conduct Authority (FCA Firm Reference Number: 1033886). We advise High Net Worth Individuals, Certified Sophisticated Investors, and Corporate/Trust Entities.
              </p>
            </div>

            {/* Checkbox 1: HNW Qualification */}
            <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  {...register('isHnwConfirmed')}
                  className="mt-1 rounded border-slate-300 text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">
                    High-Net-Worth / Sophisticated Client Certification <span className="text-amber-600">*</span>
                  </span>
                  <span className="text-[11px] text-slate-500 leading-relaxed block">
                    I confirm that I possess net investable assets of not less than £500,000 (excluding primary residence) or qualify as a Certified High Net Worth Individual / Sophisticated Investor under the Financial Services and Markets Act 2000 (FSMA).
                  </span>
                </div>
              </label>
              {errors.isHnwConfirmed && (
                <p className="text-xs text-rose-600 font-medium mt-2 pl-7">{errors.isHnwConfirmed.message}</p>
              )}
            </div>

            {/* Checkbox 2: Privacy / GDPR */}
            <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  {...register('privacyConsent')}
                  className="mt-1 rounded border-slate-300 text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">
                    UK GDPR & Confidential Processing Consent <span className="text-amber-600">*</span>
                  </span>
                  <span className="text-[11px] text-slate-500 leading-relaxed block">
                    I consent to Anand Rathi Wealth UK Limited securely processing my provided information strictly for the purpose of scheduling and conducting this wealth advisory consultation in accordance with the Data Protection Act 2018 and UK GDPR.
                  </span>
                </div>
              </label>
              {errors.privacyConsent && (
                <p className="text-xs text-rose-600 font-medium mt-2 pl-7">{errors.privacyConsent.message}</p>
              )}
            </div>

            {/* Checkbox 3: FCA Disclosure */}
            <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  {...register('fcaDisclosureAcknowledged')}
                  className="mt-1 rounded border-slate-300 text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">
                    Statutory Risk & Regulatory Acknowledgment <span className="text-amber-600">*</span>
                  </span>
                  <span className="text-[11px] text-slate-500 leading-relaxed block">
                    I acknowledge that capital is at risk and that this introductory meeting does not constitute unsolicited transactional advice or binding investment instructions.
                  </span>
                </div>
              </label>
              {errors.fcaDisclosureAcknowledged && (
                <p className="text-xs text-rose-600 font-medium mt-2 pl-7">{errors.fcaDisclosureAcknowledged.message}</p>
              )}
            </div>

          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200 gap-4">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={goToPreviousStep}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Step</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={goToNextStep}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer ml-auto"
            >
              <span>Continue to Step {currentStep + 1}</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs sm:text-sm font-bold transition-all shadow-lg shadow-amber-950/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Submitting Confidential Intake...</span>
                </>
              ) : (
                <>
                  <span>Submit Confidential Intake</span>
                  <FileCheck className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

      </form>
    </div>
  );
}
