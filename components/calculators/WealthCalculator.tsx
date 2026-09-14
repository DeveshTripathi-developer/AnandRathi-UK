'use client';

import React, { useState, useMemo } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Sparkles, 
  ArrowRight, 
  Info, 
  Sliders, 
  Check, 
  PoundSterling,
  Calendar,
  Layers,
  BarChart3,
  Percent
} from 'lucide-react';
import { MandateType, MandateConfig } from '@/lib/types';

export interface RiskTierOption {
  id: MandateType;
  name: string;
  rate: number; // decimal e.g. 0.055
  rateLabel: string;
  tagline: string;
  description: string;
  volatility: string;
  allocation: {
    equities: number;
    fixedIncome: number;
    structuredCredit: number;
    alternatives: number;
  };
  highlightColor: string;
  badgeBg: string;
}

export const RISK_TIERS: Record<MandateType, RiskTierOption> = {
  conservative: {
    id: 'conservative',
    name: 'Conservative Mandate',
    rate: 0.055,
    rateLabel: '5.5% p.a.',
    tagline: 'Capital Preservation & Drawdown Control',
    description: 'Prioritises inter-generational preservation, immediate liquidity buffers, and minimal volatility.',
    volatility: '4.0% – 6.0% Target Volatility',
    allocation: {
      fixedIncome: 65,
      equities: 15,
      structuredCredit: 10,
      alternatives: 10,
    },
    highlightColor: 'from-blue-500 to-indigo-600',
    badgeBg: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
  },
  balanced: {
    id: 'balanced',
    name: 'Balanced Mandate',
    rate: 0.082,
    rateLabel: '8.2% p.a.',
    tagline: 'Dynamic Multi-Asset Compounding',
    description: 'Disciplined compounding through active equity participation buffered by downside hedging structures.',
    volatility: '8.0% – 10.0% Target Volatility',
    allocation: {
      equities: 50,
      fixedIncome: 30,
      structuredCredit: 10,
      alternatives: 10,
    },
    highlightColor: 'from-amber-500 to-amber-600',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  },
  growth: {
    id: 'growth',
    name: 'Growth Mandate',
    rate: 0.105,
    rateLabel: '10.5% p.a.',
    tagline: 'Generational Alpha & Long Horizon',
    description: 'High-conviction global equity and private market allocations targeted for long-term dynastic growth.',
    volatility: '12.0% – 15.0% Target Volatility',
    allocation: {
      equities: 75,
      fixedIncome: 10,
      structuredCredit: 10,
      alternatives: 5,
    },
    highlightColor: 'from-emerald-500 to-teal-600',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  },
};

const INITIAL_PRESETS = [
  { label: '£500k', value: 500000 },
  { label: '£1.0m', value: 1000000 },
  { label: '£2.5m', value: 2500000 },
  { label: '£5.0m', value: 5000000 },
  { label: '£10m+', value: 10000000 },
];

const MONTHLY_PRESETS = [
  { label: '£0', value: 0 },
  { label: '£2,500/m', value: 2500 },
  { label: '£5,000/m', value: 5000 },
  { label: '£10,000/m', value: 10000 },
  { label: '£25,000/m', value: 25000 },
];

const HORIZONS_PRESETS = [5, 10, 15, 20, 25, 30];

interface WealthCalculatorProps {
  onPreFillConsultation?: (params: { 
    initial: number; 
    annual: number; 
    horizon: number; 
    mandate: string;
    monthly?: number;
  }) => void;
}

export default function WealthCalculator({ onPreFillConsultation }: WealthCalculatorProps) {
  // Interactive Slider States
  const [initialInvestment, setInitialInvestment] = useState<number>(1000000); // £1,000,000 default
  const [monthlyAddition, setMonthlyAddition] = useState<number>(5000); // £5,000/month default
  const [timeHorizon, setTimeHorizon] = useState<number>(15); // 15 years default
  const [selectedTier, setSelectedTier] = useState<MandateType>('balanced');
  const [adjustInflation, setAdjustInflation] = useState<boolean>(false);

  const inflationRate = 0.025; // 2.5% Bank of England long-term benchmark

  // Calculation engine using standard monthly compounding
  const projectionData = useMemo(() => {
    const years = Array.from({ length: timeHorizon + 1 }, (_, i) => i);
    
    return years.map((year) => {
      const getFV = (nominalAnnualRate: number) => {
        const effectiveAnnualRate = adjustInflation 
          ? (1 + nominalAnnualRate) / (1 + inflationRate) - 1 
          : nominalAnnualRate;

        if (year === 0) return initialInvestment;

        // Monthly compounding interest rate
        const monthlyRate = Math.pow(1 + effectiveAnnualRate, 1 / 12) - 1;
        const totalMonths = year * 12;

        // Principal growth
        const principalFV = initialInvestment * Math.pow(1 + monthlyRate, totalMonths);

        // Future value of ordinary monthly annuity
        const annuityFV = monthlyRate > 0 && monthlyAddition > 0
          ? monthlyAddition * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate)
          : monthlyAddition * totalMonths;

        return Math.round(principalFV + annuityFV);
      };

      const conservativeVal = getFV(RISK_TIERS.conservative.rate);
      const balancedVal = getFV(RISK_TIERS.balanced.rate);
      const growthVal = getFV(RISK_TIERS.growth.rate);
      const totalDeposited = initialInvestment + (monthlyAddition * 12 * year);

      return {
        year,
        conservative: conservativeVal,
        balanced: balancedVal,
        growth: growthVal,
        totalDeposited,
      };
    });
  }, [initialInvestment, monthlyAddition, timeHorizon, adjustInflation]);

  const endpoint = projectionData[projectionData.length - 1];
  const currentProjectedValue = endpoint[selectedTier];
  const totalPrincipalDeposited = endpoint.totalDeposited;
  const netCompoundGrowth = Math.max(0, currentProjectedValue - totalPrincipalDeposited);
  const activeMandate = RISK_TIERS[selectedTier];

  // Currency formatter (GBP)
  const formatGBP = (val: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Compact currency formatter for charts & badges
  const formatCompactGBP = (val: number) => {
    if (val >= 1000000000) return `£${(val / 1000000000).toFixed(2)}B`;
    if (val >= 1000000) return `£${(val / 1000000).toFixed(2)}M`;
    if (val >= 1000) return `£${Math.round(val / 1000)}k`;
    return `£${val}`;
  };

  const handleApplyToConsultation = () => {
    const annualAddition = monthlyAddition * 12;
    if (onPreFillConsultation) {
      onPreFillConsultation({
        initial: initialInvestment,
        annual: annualAddition,
        horizon: timeHorizon,
        mandate: activeMandate.name,
        monthly: monthlyAddition,
      });
    }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-consultation-modal'));
      const targetEl = document.getElementById('consultation-intake');
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Max value in projection for SVG coordinate scaling
  const maxProjectionVal = Math.max(
    ...projectionData.map((d) => Math.max(d.growth, d.balanced, d.conservative, d.totalDeposited))
  ) * 1.05;

  return (
    <section 
      id="wealth-calculator" 
      className="py-20 md:py-28 bg-[#FAF9F6] border-b border-slate-200 scroll-mt-16 text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sliders className="w-3.5 h-3.5 text-amber-600" />
            Institutional Compounding Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-950 tracking-tight">
            Interactive Wealth Simulator
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-light">
            Model how your capital compounds across our 3 institutional mandates. Adjust initial sums, monthly liquid additions, and investment timeframes to evaluate prospective trajectories.
          </p>
        </div>

        {/* Main Grid: Controls (Left) & Results/Chart (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Interactive Sliders & Risk Tier Selection */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-8 space-y-8">
            
            {/* Header & Inflation Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-slate-100 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                  Step 1: Portfolio Parameters
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  Calibrate Capital & Risk Mandate
                </span>
              </div>

              {/* Real Inflation Toggle */}
              <label 
                htmlFor="inflation-toggle-input" 
                className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer select-none bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <input
                  id="inflation-toggle-input"
                  type="checkbox"
                  checked={adjustInflation}
                  onChange={(e) => setAdjustInflation(e.target.checked)}
                  className="rounded border-slate-300 text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                />
                <span>Real Terms (Net 2.5% Inflation)</span>
              </label>
            </div>

            {/* Slider 1: Initial Investment */}
            <div className="space-y-3" id="initial-investment-container">
              <div className="flex items-center justify-between">
                <label htmlFor="initial-investment-slider" className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <PoundSterling className="w-3.5 h-3.5 text-amber-600" />
                  <span>Initial Investment Principal</span>
                </label>
                <span className="text-lg font-bold font-mono text-slate-950 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
                  {formatGBP(initialInvestment)}
                </span>
              </div>

              <input
                id="initial-investment-slider"
                type="range"
                min="500000"
                max="10000000"
                step="100000"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              />

              {/* Quick Presets */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] text-slate-600 mr-1">Presets:</span>
                {INITIAL_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setInitialInvestment(preset.value)}
                    className={`text-[11px] px-2.5 py-0.5 rounded transition-all cursor-pointer ${
                      initialInvestment === preset.value
                        ? 'bg-amber-600 text-white font-semibold shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 2: Monthly Additions */}
            <div className="space-y-3" id="monthly-additions-container">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="monthly-additions-slider" className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
                    <span>Monthly Additions</span>
                  </label>
                  <span className="text-[11px] text-slate-600">
                    ({formatGBP(monthlyAddition * 12)} / year equivalent)
                  </span>
                </div>
                <span className="text-lg font-bold font-mono text-slate-950 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
                  {formatGBP(monthlyAddition)}/mo
                </span>
              </div>

              <input
                id="monthly-additions-slider"
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={monthlyAddition}
                onChange={(e) => setMonthlyAddition(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              />

              {/* Quick Presets */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] text-slate-600 mr-1">Presets:</span>
                {MONTHLY_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setMonthlyAddition(preset.value)}
                    className={`text-[11px] px-2.5 py-0.5 rounded transition-all cursor-pointer ${
                      monthlyAddition === preset.value
                        ? 'bg-amber-600 text-white font-semibold shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 3: Time Horizon */}
            <div className="space-y-3" id="time-horizon-container">
              <div className="flex items-center justify-between">
                <label htmlFor="time-horizon-slider" className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span>Investment Time Horizon</span>
                </label>
                <span className="text-lg font-bold font-mono text-slate-950 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
                  {timeHorizon} Years
                </span>
              </div>

              <input
                id="time-horizon-slider"
                type="range"
                min="5"
                max="30"
                step="1"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              />

              {/* Quick Horizon Buttons */}
              <div className="flex justify-between items-center text-xs text-slate-500 pt-1">
                {HORIZONS_PRESETS.map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setTimeHorizon(yr)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                      timeHorizon === yr 
                        ? 'bg-slate-900 text-white font-bold' 
                        : 'hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    {yr} yrs
                  </button>
                ))}
              </div>
            </div>

            {/* Risk Tier Selection (Conservative, Balanced, Growth) */}
            <div className="space-y-3 pt-4 border-t border-slate-100" id="risk-tier-selection-container">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                <span>Select Risk Mandate Tier</span>
                <span className="text-[11px] text-amber-800 font-normal">Audited Institutional Performance</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(RISK_TIERS) as MandateType[]).map((tierKey) => {
                  const tier = RISK_TIERS[tierKey];
                  const isSelected = selectedTier === tierKey;

                  return (
                    <button
                      key={tier.id}
                      type="button"
                      id={`mandate-tier-btn-${tier.id}`}
                      onClick={() => setSelectedTier(tier.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between relative cursor-pointer ${
                        isSelected
                          ? 'border-amber-600 bg-amber-50/70 ring-2 ring-amber-500/30 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-amber-600 text-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}

                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border inline-block mb-1.5 ${tier.badgeBg}`}>
                          {tier.rateLabel}
                        </span>
                        <div className="font-serif font-bold text-sm text-slate-900 leading-tight">
                          {tier.name.replace(' Mandate', '')}
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-500 mt-2 line-clamp-2">
                        {tier.tagline}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Asset Allocation Breakdown of Selected Mandate */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <div className="flex items-center justify-between font-semibold text-slate-800">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-600" />
                  <span>Strategic Allocation ({activeMandate.name})</span>
                </span>
                <span className="text-[11px] text-slate-500">{activeMandate.volatility}</span>
              </div>

              {/* Progress Distribution Bar */}
              <div className="h-2.5 w-full bg-slate-200 rounded-full flex overflow-hidden">
                <div 
                  style={{ width: `${activeMandate.allocation.equities}%` }} 
                  className="bg-blue-600 h-full" 
                  title={`Equities: ${activeMandate.allocation.equities}%`} 
                />
                <div 
                  style={{ width: `${activeMandate.allocation.fixedIncome}%` }} 
                  className="bg-amber-500 h-full" 
                  title={`Fixed Income: ${activeMandate.allocation.fixedIncome}%`} 
                />
                <div 
                  style={{ width: `${activeMandate.allocation.structuredCredit}%` }} 
                  className="bg-emerald-600 h-full" 
                  title={`Structured Credit: ${activeMandate.allocation.structuredCredit}%`} 
                />
                <div 
                  style={{ width: `${activeMandate.allocation.alternatives}%` }} 
                  className="bg-purple-600 h-full" 
                  title={`Alternatives: ${activeMandate.allocation.alternatives}%`} 
                />
              </div>

              {/* Allocation Legend */}
              <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-600 pt-1">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Equities {activeMandate.allocation.equities}%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Fixed Income {activeMandate.allocation.fixedIncome}%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Protected Credit {activeMandate.allocation.structuredCredit}%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  Alts {activeMandate.allocation.alternatives}%
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: Results Summary, Trajectory Chart & CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary KPI Result Card (Luxury Navy Surface) */}
            <div className="bg-[#0A1128] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    Projected Portfolio Terminal Value
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {timeHorizon}-Year Horizon ({adjustInflation ? 'Real Terms' : 'Nominal'})
                </span>
              </div>

              {/* Big Numerals */}
              <div className="text-4xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-none mb-4">
                {formatGBP(currentProjectedValue)}
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    Total Principal Invested:
                  </span>
                  <span className="text-lg font-bold font-mono text-slate-200">
                    {formatGBP(totalPrincipalDeposited)}
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    (Initial + Monthly Additions)
                  </span>
                </div>

                <div>
                  <span className="text-xs text-amber-400 block mb-1">
                    Compounding Wealth Created:
                  </span>
                  <span className="text-lg font-bold font-mono text-amber-300">
                    +{formatGBP(netCompoundGrowth)}
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    (Generated via Investment Yield)
                  </span>
                </div>
              </div>

              {/* All 3 Mandates Comparative Summary */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-xs">
                <div className={`p-2 rounded-lg border ${selectedTier === 'conservative' ? 'bg-slate-800/80 border-amber-400/60' : 'bg-slate-900/60 border-slate-800'}`}>
                  <span className="text-[10px] text-slate-400 block">Conservative (5.5%)</span>
                  <span className="font-bold text-slate-200 font-mono">{formatCompactGBP(endpoint.conservative)}</span>
                </div>
                <div className={`p-2 rounded-lg border ${selectedTier === 'balanced' ? 'bg-slate-800/80 border-amber-400/60' : 'bg-slate-900/60 border-slate-800'}`}>
                  <span className="text-[10px] text-slate-400 block">Balanced (8.2%)</span>
                  <span className="font-bold text-amber-300 font-mono">{formatCompactGBP(endpoint.balanced)}</span>
                </div>
                <div className={`p-2 rounded-lg border ${selectedTier === 'growth' ? 'bg-slate-800/80 border-amber-400/60' : 'bg-slate-900/60 border-slate-800'}`}>
                  <span className="text-[10px] text-slate-400 block">Growth (10.5%)</span>
                  <span className="font-bold text-emerald-300 font-mono">{formatCompactGBP(endpoint.growth)}</span>
                </div>
              </div>
            </div>

            {/* Visual Compounding Trajectory Chart (SVG) */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-amber-600" />
                  <span>Trajectory Comparison Across Horizon</span>
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  Scale: 0 – {formatCompactGBP(maxProjectionVal)}
                </span>
              </div>

              {/* SVG Chart */}
              <div className="h-52 w-full relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="selectedTierGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  {[0.25, 0.5, 0.75, 1].map((ratio, idx) => (
                    <line
                      key={idx}
                      x1="0"
                      y1={200 - ratio * 180}
                      x2="500"
                      y2={200 - ratio * 180}
                      stroke="#E2E8F0"
                      strokeDasharray="4 4"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Deposited Capital Base Line (dashed) */}
                  <path
                    d={projectionData.reduce((acc, d, i) => {
                      const x = (i / timeHorizon) * 500;
                      const y = 200 - (d.totalDeposited / maxProjectionVal) * 180;
                      return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }, '')}
                    fill="none"
                    stroke="#94A3B8"
                    strokeDasharray="3 3"
                    strokeWidth="1.5"
                  />

                  {/* Area fill for selected tier */}
                  <path
                    d={`
                      ${projectionData.reduce((acc, d, i) => {
                        const x = (i / timeHorizon) * 500;
                        const y = 200 - (d[selectedTier] / maxProjectionVal) * 180;
                        return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                      }, '')}
                      L 500 200 L 0 200 Z
                    `}
                    fill="url(#selectedTierGradient)"
                  />

                  {/* Comparative line: Conservative */}
                  <path
                    d={projectionData.reduce((acc, d, i) => {
                      const x = (i / timeHorizon) * 500;
                      const y = 200 - (d.conservative / maxProjectionVal) * 180;
                      return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }, '')}
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth={selectedTier === 'conservative' ? 3 : 1.5}
                    strokeOpacity={selectedTier === 'conservative' ? 1 : 0.4}
                  />

                  {/* Comparative line: Balanced */}
                  <path
                    d={projectionData.reduce((acc, d, i) => {
                      const x = (i / timeHorizon) * 500;
                      const y = 200 - (d.balanced / maxProjectionVal) * 180;
                      return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }, '')}
                    fill="none"
                    stroke="#D97706"
                    strokeWidth={selectedTier === 'balanced' ? 3.5 : 1.5}
                    strokeOpacity={selectedTier === 'balanced' ? 1 : 0.4}
                  />

                  {/* Comparative line: Growth */}
                  <path
                    d={projectionData.reduce((acc, d, i) => {
                      const x = (i / timeHorizon) * 500;
                      const y = 200 - (d.growth / maxProjectionVal) * 180;
                      return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }, '')}
                    fill="none"
                    stroke="#10B981"
                    strokeWidth={selectedTier === 'growth' ? 3 : 1.5}
                    strokeOpacity={selectedTier === 'growth' ? 1 : 0.4}
                  />

                  {/* End node marker for active tier */}
                  <circle
                    cx="500"
                    cy={200 - (currentProjectedValue / maxProjectionVal) * 180}
                    r="5"
                    fill="#D97706"
                    stroke="#FFF"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Chart Legend */}
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-0.5 bg-slate-400 border-dashed" />
                  <span>Total Deposited</span>
                </span>
                <span className="flex items-center gap-1.5 text-blue-600">
                  <span className="w-2.5 h-0.5 bg-blue-600" />
                  <span>Conservative (5.5%)</span>
                </span>
                <span className="flex items-center gap-1.5 text-amber-700 font-semibold">
                  <span className="w-2.5 h-0.5 bg-amber-600" />
                  <span>Balanced (8.2%)</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-600">
                  <span className="w-2.5 h-0.5 bg-emerald-600" />
                  <span>Growth (10.5%)</span>
                </span>
              </div>
            </div>

            {/* Action Bridge CTA */}
            <div className="bg-slate-100 rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                  Bridge Simulation to Portfolio Mandate
                </span>
                <p className="text-xs text-slate-600">
                  Transfers your £{(initialInvestment / 1000000).toFixed(1)}M initial / £{monthlyAddition.toLocaleString()}/mo parameters directly into our confidential intake form.
                </p>
              </div>

              <button
                id="apply-simulation-to-consultation-btn"
                type="button"
                onClick={handleApplyToConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 transition-all shadow-md shadow-amber-950/20 shrink-0 cursor-pointer active:scale-95"
              >
                <span>Request Mandate Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Compliance Risk Disclosure */}
            <p className="text-[11px] text-slate-500 leading-relaxed italic">
              *Disclaimer: Projections are illustrative simulations based on target mandate CAGR assumptions and do not constitute a guarantee of future returns. The value of investments and the income derived from them may fall as well as rise. Anand Rathi Wealth UK Limited is authorised and regulated by the Financial Conduct Authority (FCA Ref: 1033886).
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
