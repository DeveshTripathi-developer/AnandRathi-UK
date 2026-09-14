import React from 'react';
import { Search, LineChart, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    phase: 'Phase 01',
    title: 'Fearless Asset Audit & Diagnostics',
    description:
      'We conduct an exhaustive, unvarnished forensic analysis of your existing holdings, fund expense ratios, hidden currency frictions, and systemic downside exposures.',
    deliverable: 'Independent 360° Diagnostic Report detailing true cost drag and downside drawdowns.',
    icon: Search,
  },
  {
    phase: 'Phase 02',
    title: 'Quantitative Data Modeling',
    description:
      'Drawing on our proprietary historical datasets across 30+ years, we simulate your family cash flows against severe stagflationary, geopolitical, and liquidity stress tests.',
    deliverable: 'Custom Monte Carlo & historical shock stress test across 5 historical bear cycles.',
    icon: LineChart,
  },
  {
    phase: 'Phase 03',
    title: 'Bespoke Structural Engineering',
    description:
      'We formulate a tax-efficient, generational holding architecture tailored to UK resident, non-dom, or dual-jurisdiction requirements with disciplined risk guardrails.',
    deliverable: 'Personalised Strategic Investment Policy Statement (IPS) with fixed target rates.',
    icon: Cpu,
  },
  {
    phase: 'Phase 04',
    title: 'Active Governance & Quarterly Audits',
    description:
      'Implementation with Tier-1 independent custodians. You receive transparent, real-time reporting with quarterly face-to-face partner reviews at our London City office.',
    deliverable: 'Direct senior director review with zero product sales pressure and total fee transparency.',
    icon: ShieldCheck,
  },
];

export default function AdvisoryProcess() {
  return (
    <section id="advisory" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4">
            Disciplined Execution
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-950 tracking-tight">
            The Anand Rathi Advisory Protocol
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-light">
            How we translate complex family goals into institutional precision—free from corporate conflicts and opaque jargon.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.phase}
                id={`process-step-${idx + 1}`}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-amber-500/40 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                      {step.phase}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#0A1128] text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-slate-950 mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Key Deliverable
                  </span>
                  <p className="text-xs font-medium text-slate-900">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Protocol Assurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold font-serif text-slate-950">
              Request an Independent Portfolio Diagnostic
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Receive a complimentary, confidential review of your existing wealth allocations with our City of London team.
            </p>
          </div>
          <a
            href="#consultation-intake"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A1128] hover:bg-slate-900 text-amber-300 font-semibold text-xs tracking-wider uppercase transition-colors shadow"
          >
            <span>Initiate Phase 01 Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
