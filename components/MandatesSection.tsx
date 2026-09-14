import React from 'react';
import { Shield, TrendingUp, Sparkles, Check, ArrowRight, Layers, BarChart } from 'lucide-react';

const MANDATES_DATA = [
  {
    id: 'mandate-conservative',
    name: 'Conservative Mandate',
    targetCagr: '5.5% p.a.',
    tagline: 'Capital Preservation & Steady Liquidity',
    idealFor: 'Multi-generational preservation, immediate income requirements, volatility-sensitive capital.',
    volatility: '4.0% – 6.0% Target Annualised Volatility',
    benchmark: 'UK Gilts & Global Investment Grade Debt Blend',
    allocation: [
      { name: 'Sovereign Debt & UK Gilts', pct: 45 },
      { name: 'Investment Grade Corporate Credit', pct: 20 },
      { name: 'Defensive Global Dividend Equities', pct: 15 },
      { name: 'Structured Capital Protected Notes', pct: 10 },
      { name: 'Cash & Short-Term Money Markets', pct: 10 },
    ],
    features: [
      'Primary emphasis on drawdown minimisation',
      'Regular predictable yield distribution',
      'High-liquidity sovereign buffers',
      'Inflation-linked gilt hedges',
    ],
    accent: 'border-blue-500/30 hover:border-blue-400',
    badgeBg: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
  },
  {
    id: 'mandate-balanced',
    name: 'Balanced Mandate',
    targetCagr: '8.2% p.a.',
    tagline: 'Core Multi-Asset Compounding & Risk Control',
    idealFor: 'Mid-to-long term family wealth creation seeking above-inflation real wealth compounding.',
    volatility: '8.0% – 10.0% Target Annualised Volatility',
    benchmark: '60/40 Global Multi-Asset Index',
    allocation: [
      { name: 'Global Quality & Large-Cap Equities', pct: 50 },
      { name: 'Multi-Asset Fixed Income & Gilts', pct: 25 },
      { name: 'Structured Downside Protection Series', pct: 10 },
      { name: 'Real Assets, Infrastructure & Commodities', pct: 10 },
      { name: 'Strategic Cash Reserves', pct: 5 },
    ],
    features: [
      'Dynamic rebalancing across market extremes',
      'Structured floor hedging pioneered by Feroze Azeez',
      'Tax-efficient global equity exposure',
      'Optimised for 5–15 year horizons',
    ],
    accent: 'border-amber-500/50 hover:border-amber-400 ring-1 ring-amber-500/30',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    isPopular: true,
  },
  {
    id: 'mandate-growth',
    name: 'Growth Mandate',
    targetCagr: '10.5% p.a.',
    tagline: 'High-Conviction Generational Appreciation',
    idealFor: 'Dynastic succession planning, long-term horizon capital with ample external liquidity reserves.',
    volatility: '12.0% – 15.0% Target Annualised Volatility',
    benchmark: 'MSCI World Net Total Return (GBP)',
    allocation: [
      { name: 'Global High-Conviction Equities', pct: 60 },
      { name: 'Disruptive Innovation, Tech & Healthcare', pct: 15 },
      { name: 'Structured Alpha Strategies', pct: 10 },
      { name: 'Private Equity & Opportunistic Secondary', pct: 10 },
      { name: 'Tactical Cash Cushion', pct: 5 },
    ],
    features: [
      'Unconstrained global compounding focus',
      'Concentrated holdings in resilient market leaders',
      'Calculated asymmetry with structured options',
      'Designed for 10+ year dynastic horizons',
    ],
    accent: 'border-emerald-500/30 hover:border-emerald-400',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  },
];

export default function MandatesSection() {
  return (
    <section id="mandates" className="py-20 md:py-28 bg-[#070D1E] text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            Institutional Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            The 3 Core Risk Mandates
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-light">
            Engineered through 30+ years of institutional data. Each mandate is governed by strict volatility parameters, independent Tier-1 custody, and zero product-selling conflicts.
          </p>
        </div>

        {/* Mandate Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MANDATES_DATA.map((mandate) => (
            <div
              key={mandate.id}
              id={mandate.id}
              className={`bg-slate-900/90 rounded-2xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${mandate.accent}`}
            >
              {mandate.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-bold uppercase tracking-wider shadow">
                  Most Selected by HNW Families
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${mandate.badgeBg}`}>
                    Target: {mandate.targetCagr}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">FCA Tier</span>
                </div>

                <h3 className="text-2xl font-bold font-serif text-white mb-2">
                  {mandate.name}
                </h3>

                <p className="text-xs font-medium text-amber-400/90 mb-4">
                  {mandate.tagline}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 pb-6 border-b border-slate-800">
                  {mandate.idealFor}
                </p>

                {/* Risk profile metrics */}
                <div className="space-y-2 mb-6 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Risk Profile:</span>
                    <span className="text-slate-200 font-medium">{mandate.volatility}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Benchmark:</span>
                    <span className="text-slate-200 font-medium">{mandate.benchmark}</span>
                  </div>
                </div>

                {/* Asset allocation list */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Strategic Target Asset Allocation:
                  </span>
                  {mandate.allocation.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-300">{item.name}</span>
                        <span className="font-mono font-bold text-amber-300">{item.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-amber-400 h-full rounded-full"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2 pt-2">
                  {mandate.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action CTA */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href="#wealth-calculator"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold tracking-wide transition-all border border-slate-700"
                >
                  <span>Simulate {mandate.name.split(' ')[0]} Returns</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
