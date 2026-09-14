import React from 'react';
import { TrendingUp, Users, Award, Shield } from 'lucide-react';

export interface StatMetric {
  id: string;
  value: string;
  badge: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const INSTITUTIONAL_METRICS: StatMetric[] = [
  {
    id: 'stat-aum',
    value: '$11.16B',
    badge: 'USD AUM',
    label: 'Global Assets Overseen',
    description: 'Disciplined multi-asset mandates across global markets, structured yield & credit.',
    icon: TrendingUp,
  },
  {
    id: 'stat-families',
    value: '13,941+',
    badge: 'HNW / UHNW',
    label: 'Client Families Served',
    description: 'High-Net-Worth families and business owners stewarded across generations.',
    icon: Users,
  },
  {
    id: 'stat-track-record',
    value: '30+ Years',
    badge: 'EST. 1994',
    label: 'Generational Track Record',
    description: 'Three decades of wealth preservation and compounding through multiple market cycles.',
    icon: Award,
  },
  {
    id: 'stat-fca-regulatory',
    value: 'Ref: 1033886',
    badge: 'FCA UK',
    label: 'Authorised & Regulated',
    description: 'Strict statutory compliance, independent Tier-1 custody, and zero product-selling bias.',
    icon: Shield,
  },
];

interface StatsCounterProps {
  metrics?: StatMetric[];
  className?: string;
  showHeading?: boolean;
}

/**
 * Server Component (RSC)
 * Pre-renders institutional statistics directly on the server to prevent
 * any client-side hydration flicker ($0.00B or empty placeholders).
 */
export default function StatsCounter({
  metrics = INSTITUTIONAL_METRICS,
  className = '',
  showHeading = true,
}: StatsCounterProps) {
  return (
    <div className={`w-full ${className}`}>
      {showHeading && (
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
            Institutional Scale & Proven Governance
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl mx-auto">
            Server-verified metrics reflecting the global scale and stability of the Anand Rathi institutional group.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.id}
              id={metric.id}
              className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 sm:p-6 hover:border-amber-500/40 transition-all duration-300 group hover:bg-slate-900 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-amber-400 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    {metric.badge}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400 group-hover:text-amber-400 group-hover:border-amber-500/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Instantaneous Server-Hydrated Value - No hydration lag or $0.00B flash */}
                <div className="text-3xl sm:text-4xl font-bold text-white font-serif tracking-tight leading-none mb-2">
                  {metric.value}
                </div>

                <div className="text-sm font-semibold text-slate-200">
                  {metric.label}
                </div>
              </div>

              <p className="text-xs text-slate-400 mt-3 leading-relaxed pt-3 border-t border-slate-800/80">
                {metric.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
