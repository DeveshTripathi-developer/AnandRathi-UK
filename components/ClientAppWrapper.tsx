'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import WealthCalculator from './calculators/WealthCalculator';
import LeadIntakeModal from './LeadIntakeModal';
import LeadIntakeForm from './LeadIntakeForm';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { LiquidAssetTier, PrimaryObjective, InvestmentHorizon } from '@/lib/types';

interface ClientAppWrapperProps {
  children: React.ReactNode;
}

export default function ClientAppWrapper({ children }: ClientAppWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calculatorPreFill, setCalculatorPreFill] = useState<{
    assetTier?: LiquidAssetTier;
    objective?: PrimaryObjective;
    horizon?: InvestmentHorizon;
    initial?: number;
    annual?: number;
    mandate?: string;
  } | undefined>(undefined);

  React.useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('open-consultation-modal', handleOpenModal);
    return () => window.removeEventListener('open-consultation-modal', handleOpenModal);
  }, []);

  const handlePreFill = (params: { initial: number; annual: number; horizon: number; mandate: string }) => {
    let tier: LiquidAssetTier = '£1m - £2.5m';
    if (params.initial >= 10000000) tier = '£10m+';
    else if (params.initial >= 5000000) tier = '£5m - £10m';
    else if (params.initial >= 2500000) tier = '£2.5m - £5m';
    else if (params.initial >= 1000000) tier = '£1m - £2.5m';
    else tier = '£500k - £1m';

    let horiz: InvestmentHorizon = '5 - 10 Years';
    if (params.horizon <= 3) horiz = '1 - 3 Years';
    else if (params.horizon <= 5) horiz = '3 - 5 Years';
    else if (params.horizon <= 10) horiz = '5 - 10 Years';
    else horiz = '10+ Years / Multi-Generational';

    setCalculatorPreFill({
      assetTier: tier,
      horizon: horiz,
      initial: params.initial,
      annual: params.annual,
      mandate: params.mandate,
    });
  };

  return (
    <>
      {/* Main Page Content (Server Components and Sections) */}
      <main>
        {children}

        {/* Wealth Calculator Client Component */}
        <WealthCalculator onPreFillConsultation={handlePreFill} />

        {/* Embedded Lead Intake Section */}
        <section id="consultation-intake" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                Private Wealth Client Onboarding
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-950 tracking-tight">
                Request a Confidential Consultation
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
                Connect with our senior fiduciary directors at Octagon Point, City of London. Please specify your asset parameters below.
              </p>
            </div>

            <LeadIntakeForm
              key={calculatorPreFill ? JSON.stringify(calculatorPreFill) : 'default-form'}
              initialValues={{
                assetTier: calculatorPreFill?.assetTier,
                horizon: calculatorPreFill?.horizon,
                notes: calculatorPreFill?.mandate
                  ? `Simulation selected: ${calculatorPreFill.mandate} mandate with £${calculatorPreFill.initial?.toLocaleString()} initial principal over ${calculatorPreFill.horizon}.`
                  : undefined,
              }}
            />
          </div>
        </section>
      </main>

      {/* Floating Action / Modal Trigger */}
      <LeadIntakeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preFillData={calculatorPreFill}
      />
    </>
  );
}
