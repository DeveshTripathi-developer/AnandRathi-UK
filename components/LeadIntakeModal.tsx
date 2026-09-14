'use client';

import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import LeadIntakeForm from './LeadIntakeForm';
import { LiquidAssetTier, PrimaryObjective, InvestmentHorizon } from '@/lib/types';

interface LeadIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  preFillData?: {
    assetTier?: LiquidAssetTier;
    objective?: PrimaryObjective;
    horizon?: InvestmentHorizon;
    initial?: number;
    annual?: number;
    mandate?: string;
  };
}

export default function LeadIntakeModal({ isOpen, onClose, preFillData }: LeadIntakeModalProps) {
  if (!isOpen) return null;

  // Map pre-filled numbers to asset tier if provided
  let mappedTier: LiquidAssetTier | undefined;
  if (preFillData?.initial) {
    if (preFillData.initial >= 10000000) mappedTier = '£10m+';
    else if (preFillData.initial >= 5000000) mappedTier = '£5m - £10m';
    else if (preFillData.initial >= 2500000) mappedTier = '£2.5m - £5m';
    else if (preFillData.initial >= 1000000) mappedTier = '£1m - £2.5m';
    else mappedTier = '£500k - £1m';
  }

  return (
    <div
      id="consultation-modal-backdrop"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="relative w-full max-w-3xl my-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-20 p-2 rounded-full text-slate-300 hover:text-white bg-slate-900/80 sm:bg-transparent hover:bg-slate-800 transition-colors"
          aria-label="Close consultation modal"
        >
          <X className="w-6 h-6" />
        </button>

        <LeadIntakeForm
          initialValues={{
            assetTier: mappedTier || preFillData?.assetTier,
            objective: preFillData?.objective,
            horizon: preFillData?.horizon,
            notes: preFillData?.mandate
              ? `Client configured simulator scenario: ${preFillData.mandate} mandate with initial investment £${preFillData.initial?.toLocaleString()} over ${preFillData.horizon || 'selected'} years.`
              : undefined,
          }}
          onSuccess={() => {
            // keep open to see confirmation card
          }}
        />
      </div>
    </div>
  );
}
