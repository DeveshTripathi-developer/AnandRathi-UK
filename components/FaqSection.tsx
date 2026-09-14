'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, ArrowRight } from 'lucide-react';

export const FAQS = [
  {
    question: 'What regulatory protections safeguard my capital with Anand Rathi Wealth UK Limited?',
    answer:
      'Anand Rathi Wealth UK Limited is authorised and regulated by the Financial Conduct Authority (FCA Firm Reference: 1033886). Client assets are held under strict client money and asset rules (CASS) by independent, Tier-1 custodian banks. Your assets are legally segregated from the firm’s balance sheet, ensuring they remain protected and ring-fenced at all times. Eligible private clients may also benefit from Financial Services Compensation Scheme (FSCS) protections up to statutory limits.',
  },
  {
    question: 'What is the qualifying investment threshold to engage your private wealth services?',
    answer:
      'We work primarily with High-Net-Worth (HNW) and Ultra-High-Net-Worth (UHNW) individuals, business owners, senior executives, and family offices. Our private advisory mandates typically start at £500,000 of liquid investable capital. This threshold allows us to deploy institutional-grade multi-asset diversification, custom risk hedging, and direct partner access.',
  },
  {
    question: 'How do you advise on the UK Non-Domiciled (Non-Dom) regime changes and cross-border assets?',
    answer:
      'With over 30 years of cross-border experience stewarding Indian diaspora (NRI), Middle Eastern, and international family wealth, we specialize in multi-jurisdictional tax efficiency. We actively assist clients in transitioning under the UK Foreign Income and Gains (FIG) rules, structuring offshore trusts, Family Investment Companies (FICs), and cross-border currency hedges in conjunction with leading international tax and legal barristers.',
  },
  {
    question: 'How does your fee model operate, and do you accept product commissions?',
    answer:
      'In line with our Core Pillar of Transparency, we operate strictly on a clean, all-inclusive advisory fee model. We do not accept third-party commissions, brokerage kickbacks, or hidden spreads. Our fees are fully disclosed in advance as an annualized percentage of assets under management. Our remuneration is completely aligned with preserving and compounding your net family wealth.',
  },
  {
    question: 'Can I transfer existing SIPPs, ISAs, offshore investment bonds, or direct equity portfolios?',
    answer:
      'Yes. Our team manages seamless in-specie and cash transfers from existing UK wealth managers, private banks, platforms, and pension trustees. We conduct a Phase 01 Diagnostic to audit your current holdings for capital gains tax exposure, duplicate fees, and underperforming funds before systematically transitioning assets into your chosen mandate.',
  },
  {
    question: 'What is the cadence of portfolio reviews and access to senior leadership?',
    answer:
      'Every client is paired directly with a Senior Wealth Director at our Octagon Point, City of London office. You receive 24/7 transparent digital reporting and formal quarterly fiduciary reviews—conducted in our private boardroom suites, via encrypted video conference, or at your family office.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            Client Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-950 tracking-tight">
            Frequently Addressed Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-light">
            Clear, unvarnished insights into our FCA regulatory framework, custody structures, and fee transparency.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-slate-950">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-amber-600" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct line bridge */}
        <div className="mt-12 text-center text-xs text-slate-600">
          Have a specific fiduciary or cross-border question not covered here?{' '}
          <a
            href="#consultation-intake"
            className="text-amber-800 font-bold underline hover:text-amber-900 inline-flex items-center gap-1"
          >
            <span>Ask a London Director</span>
            <ArrowRight className="w-3 h-3 inline" />
          </a>
        </div>

      </div>
    </section>
  );
}
