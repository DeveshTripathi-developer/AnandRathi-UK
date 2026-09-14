'use client';

import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp, AlertCircle, Building2, ExternalLink } from 'lucide-react';

export default function FcaBanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside 
      id="fca-regulatory-compliance-banner"
      aria-label="FCA Regulatory Compliance Information"
      className="bg-[#070D1E] text-slate-300 border-b border-amber-500/20 text-xs py-2 px-4 transition-all duration-300 relative z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap text-center md:text-left justify-center md:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-medium tracking-wide uppercase text-[10px]">
            <ShieldCheck className="w-3 h-3 text-amber-400" />
            FCA Regulated
          </span>
          <p className="text-slate-300 leading-normal">
            <strong className="text-white font-medium">Anand Rathi Wealth UK Limited</strong> is authorised & regulated by the Financial Conduct Authority (<strong className="text-amber-300 font-medium">FCA Ref: 1033886</strong>). Registered in England & Wales (<strong className="text-slate-200">No: 16223861</strong>).
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <button
            id="fca-disclosure-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-amber-400 hover:text-amber-300 underline underline-offset-4 flex items-center gap-1 font-medium transition-colors cursor-pointer"
            aria-expanded={isExpanded}
            aria-controls="fca-extended-disclosure"
          >
            <span>{isExpanded ? 'Hide Statutory Details' : 'View Statutory & Risk Disclosures'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div 
          id="fca-extended-disclosure"
          className="mt-3 pt-3 border-t border-slate-800 text-slate-400 text-[11px] leading-relaxed max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="bg-slate-900/60 p-3 rounded border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-slate-200 font-semibold mb-1">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Registered London Domicile</span>
            </div>
            <p>
              Octagon Point, 5 Cheapside, City of London, EC2V 6AA, United Kingdom. Incorporated under the Companies Act 2006.
            </p>
          </div>

          <div className="bg-slate-900/60 p-3 rounded border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-slate-200 font-semibold mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Regulatory Verification</span>
            </div>
            <p>
              Verify our authorisation directly on the Financial Services Register at{' '}
              <a 
                href="https://register.fca.org.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline inline-flex items-center gap-0.5"
              >
                register.fca.org.uk <ExternalLink className="w-2.5 h-2.5 inline" />
              </a>{' '}
              under firm reference number 1033886.
            </p>
          </div>

          <div className="bg-slate-900/60 p-3 rounded border border-amber-900/40">
            <div className="flex items-center gap-1.5 text-amber-300 font-semibold mb-1">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Statutory Risk Warning</span>
            </div>
            <p className="text-slate-300">
              The value of investments and income from them can fall as well as rise. Past performance is not a reliable indicator of future results. Capital is at risk.
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}
