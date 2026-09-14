import React from 'react';
import { Eye, Layers, BarChart3, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const PILLARS = [
  {
    number: '01',
    title: 'Fearless Approach',
    tagline: 'Sharing information you need to see, without fear',
    description:
      'Honest counsel is the foundation of every sound financial decision. We do not sugarcoat market vulnerabilities or recommend products that serve distribution incentives rather than your legacy. Our fiduciary duty is telling you the unvarnished truth about risk, costs, and asset preservation.',
    icon: Eye,
    proofPoint: 'Independent, uncompromised asset reviews showing real drawdown scenarios before commitment.',
    features: [
      'Unbiased portfolio stress-testing across 5 historical macro shocks',
      'Elimination of redundant, underperforming fund layers',
      'Direct, proactive alert when strategic assumptions are compromised',
    ],
  },
  {
    number: '02',
    title: 'Uncomplicated',
    tagline: 'Enabling full understanding before decision-making',
    description:
      'The wealth industry frequently conceals mediocre results behind labyrinthine financial jargon and artificial complexity. We believe clarity breeds conviction. We demystify asset allocation, tax efficiency, and structured risk into intuitive, decision-ready frameworks.',
    icon: Layers,
    proofPoint: 'Every recommendation is distillable into a single-page strategic mandate you can explain to your family.',
    features: [
      'Plain-English risk and allocation dashboards',
      'No black-box algorithmic allocations without clear economic logic',
      'Direct line to your senior wealth partner—no call centers or layers',
    ],
  },
  {
    number: '03',
    title: 'Backed by Data',
    tagline: 'Data at scale helps you make considered decisions',
    description:
      'Grounded in rigorous institutional research, quantitative asset modeling, and multi-decade cross-asset analytics. We do not rely on market sentiment, headline noise, or speculative tips. Every strategic allocation is stress-tested against decades of historical market data.',
    icon: BarChart3,
    proofPoint: 'Quantitative model validated across 13,941+ family accounts and $11.16B in overseen assets.',
    features: [
      'Empirical risk-adjusted return profiling',
      'Dynamic yield curve & multi-asset correlation tracking',
      'Back-tested downside mitigation parameters',
    ],
  },
  {
    number: '04',
    title: 'Transparency',
    tagline: 'Transparency → Trust → Implementation',
    description:
      'Trust is earned through total visibility. Our fee architecture is completely aligned with your net outcomes. We reject hidden commissions, undisclosed retrocessions, and opaque bid-ask markups. You know exactly what you pay, why you pay it, and what net value is delivered.',
    icon: ShieldCheck,
    proofPoint: '100% transparent fee reporting with zero third-party commissions or hidden spread markups.',
    features: [
      'All-inclusive advisory schedule agreed upfront',
      'Full disclosure of custody, platform, and transactional costs',
      'FCA-regulated fiduciary standards applied to every mandate',
    ],
  },
];

export default function PhilosophyPillars() {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4">
            Institutional Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 font-serif tracking-tight leading-tight">
            The 4 Philosophy Pillars of Our Advisory
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-light">
            Founded on the conviction that private wealth should be honest, transparent, and resilient across generations. This is how we manage $11.16B for families worldwide.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                id={`pillar-${pillar.number}`}
                className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-[#0A1128] text-amber-400 flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-amber-600 tracking-widest uppercase block">
                          Pillar {pillar.number}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-3xl font-serif font-bold text-slate-200">
                      {pillar.number}
                    </span>
                  </div>

                  <blockquote className="text-sm font-medium text-amber-900 bg-amber-50/70 border-l-2 border-amber-500 px-4 py-2.5 rounded-r mb-4 italic">
                    &ldquo;{pillar.tagline}&rdquo;
                  </blockquote>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">
                      Guaranteed Standards:
                    </span>
                    {pillar.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-900">Proven Standard</span>
                  <span className="text-amber-800 font-medium">{pillar.proofPoint}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy to Implementation Bridge */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#0A1128] to-[#1E293B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              The Anand Rathi Creed
            </span>
            <p className="text-lg sm:text-xl font-serif text-white max-w-2xl">
              &ldquo;Transparency leads to Trust. Trust enables Implementation. Implementation creates multi-generational wealth.&rdquo;
            </p>
          </div>
          <a
            href="#consultation-intake"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow"
          >
            <span>Experience Our Approach</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
