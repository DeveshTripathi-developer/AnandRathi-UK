import React from 'react';
import { Shield, ArrowRight, Building, Lock, CheckCircle2 } from 'lucide-react';
import StatsCounter from './StatsCounter';

/**
 * Server Component (RSC)
 * Pre-renders the institutional hero presentation and stat counter
 * on the server, guaranteeing zero client-side hydration delay.
 */
export default function Hero() {
  return (
    <section 
      id="hero-section"
      className="relative bg-gradient-to-b from-[#070D1E] via-[#0A1128] to-[#0E1738] text-white pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-slate-800"
    >
      {/* Subtle luxury ambient glow & grid backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-7">
            {/* Regulatory and Domicile Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-slate-300 text-xs font-medium tracking-wide">
                <Building className="w-3.5 h-3.5 text-amber-400" />
                <span>Octagon Point, City of London</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium tracking-wide">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>FCA Authorised (Ref: 1033886)</span>
              </span>
            </div>

            {/* Core Proposition Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] font-serif">
                Private Wealth.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 block sm:inline">
                  Uncomplicated.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                Bespoke wealth stewardship for high-net-worth individuals, business owners, and family offices in the UK and internationally. Governed by 30+ years of institutional rigor, zero product sales bias, and data-backed portfolio engineering.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#consultation-intake"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded font-semibold text-base bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 transition-all shadow-lg shadow-amber-950/30 group"
              >
                <span>Book Confidential Consultation</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#wealth-calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded font-medium text-base text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 transition-all hover:text-white"
              >
                <span>Explore Wealth Simulator</span>
              </a>
            </div>

            {/* Regulatory Assurance Micro-Note */}
            <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
              <Shield className="w-3.5 h-3.5 text-amber-400/80 shrink-0" />
              <span>
                FCA Firm Reference: 1033886 • Capital at risk • Structured strictly for qualifying wealth tiers
              </span>
            </p>
          </div>

          {/* Institutional Domicile & Governance Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-800/90 to-slate-900/90 rounded-xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-sm relative">
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded bg-amber-500 text-slate-950 text-[11px] font-bold uppercase tracking-wider shadow">
                London Practice
              </div>

              <div className="border-b border-slate-700/80 pb-5 mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-1">
                  Institutional Mandate
                </span>
                <h2 className="text-xl font-bold text-white font-serif">
                  Anand Rathi Wealth UK Limited
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Advising UK domestic families, Non-Resident Indians (NRI), and international cross-border wealth.
                </p>
              </div>

              {/* Pillars Teaser */}
              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block text-xs uppercase tracking-wide">
                      Fearless Counsel
                    </strong>
                    <span className="text-slate-400 text-xs leading-relaxed">
                      Unbiased portfolio reviews showing you unfiltered realities without sales incentives.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block text-xs uppercase tracking-wide">
                      Data-Led Risk Engineering
                    </strong>
                    <span className="text-slate-400 text-xs leading-relaxed">
                      Mathematically disciplined drawdown controls tested over 30+ years of economic cycles.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block text-xs uppercase tracking-wide">
                      100% Fee Transparency
                    </strong>
                    <span className="text-slate-400 text-xs leading-relaxed">
                      All-inclusive fiduciary fee. Zero commissions, trail brokerages, or opaque spreads.
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Appointment Availability */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">London Practice Availability:</span>
                <span className="text-amber-300 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Octagon Point Private Suites
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Server-Pre-Rendered Statistics (RSC) */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <StatsCounter />
        </div>

      </div>
    </section>
  );
}
