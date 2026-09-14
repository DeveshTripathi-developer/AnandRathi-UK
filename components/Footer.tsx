import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Building2, Phone, Mail, ExternalLink, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="institutional-footer" className="bg-[#050A17] text-slate-400 text-xs border-t border-slate-800">
      
      {/* Primary Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Domicile Summary (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded border border-amber-400/60 bg-amber-400/10 flex items-center justify-center font-serif text-amber-300 font-bold text-lg">
                AR
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block leading-none font-serif">
                  ANAND RATHI
                </span>
                <span className="text-[10px] tracking-[0.25em] text-amber-400 font-medium uppercase block mt-1">
                  WEALTH UK LIMITED
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Authorised and regulated by the Financial Conduct Authority (<strong className="text-amber-300">FCA Ref: 1033886</strong>). Registered in England and Wales under Company Number <strong className="text-slate-300">16223861</strong>.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Octagon Point, 5 Cheapside, City of London, EC2V 6AA, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:+442079460192" className="hover:text-amber-300 transition-colors">
                  +44 (0) 20 7946 0192
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:london@anandrathiwealth.co.uk" className="hover:text-amber-300 transition-colors">
                  london@anandrathiwealth.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Nav: Advisory Solutions */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
              Advisory Mandates
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#mandates" className="hover:text-amber-300 transition-colors">
                  Conservative (5.5% Target)
                </a>
              </li>
              <li>
                <a href="#mandates" className="hover:text-amber-300 transition-colors">
                  Balanced (8.2% Target)
                </a>
              </li>
              <li>
                <a href="#mandates" className="hover:text-amber-300 transition-colors">
                  Growth (10.5% Target)
                </a>
              </li>
              <li>
                <a href="#wealth-calculator" className="hover:text-amber-300 transition-colors">
                  Wealth Simulator
                </a>
              </li>
              <li>
                <a href="#consultation-intake" className="hover:text-amber-300 transition-colors">
                  Cross-Border Structuring
                </a>
              </li>
            </ul>
          </div>

          {/* Nav: Governance & Firm */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
              Governance & Leadership
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#philosophy" className="hover:text-amber-300 transition-colors">
                  4 Philosophy Pillars
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-amber-300 transition-colors">
                  Anand Rathi (Chairman)
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-amber-300 transition-colors">
                  Pradeep Gupta (Vice Chairman)
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-amber-300 transition-colors">
                  Rakesh Rawal (CEO)
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-amber-300 transition-colors">
                  Feroze Azeez (Joint CEO)
                </a>
              </li>
            </ul>
          </div>

          {/* Nav: Regulation & Registry */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
              FCA Compliance & Verification
            </span>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://register.fca.org.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>FCA Register (Ref: 1033886)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a 
                  href="https://find-and-update.company-information.service.gov.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Companies House (16223861)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-amber-300 transition-colors">
                  FSCS Protection Scope
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-amber-300 transition-colors">
                  CASS Asset Ring-Fencing
                </a>
              </li>
              <li>
                <a href="#london-office" className="hover:text-amber-300 transition-colors">
                  City of London Office
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* COMPREHENSIVE REGULATORY AND STATUTORY DISCLOSURE BLOCK */}
      <div className="bg-[#030712] border-t border-slate-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          
          <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80 text-[11px] leading-relaxed text-slate-400 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold uppercase tracking-wider text-[10px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Regulatory Status & Statutory Disclosures</span>
            </div>
            <p>
              Anand Rathi Wealth UK Limited is a private limited company incorporated in England and Wales under company registration number <strong>16223861</strong>. Authorised and regulated by the Financial Conduct Authority (FCA) under Firm Reference Number <strong>1033886</strong>. Registered office: <strong>Octagon Point, 5 Cheapside, City of London, EC2V 6AA, United Kingdom</strong>.
            </p>
            <p className="text-slate-300">
              <strong className="text-amber-300">Statutory Risk Warning:</strong> The value of investments and the income derived from them may fall as well as rise and investors may get back less than originally invested. Past performance is not a guide to future performance. Nothing contained within this website constitutes financial, investment, tax, or legal advice. Potential investors should seek professional independent advice tailored to their specific tax domicile and investment objectives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 pt-2 border-t border-slate-900">
            <p>
              © {new Date().getFullYear()} Anand Rathi Wealth UK Limited. All rights reserved. &ldquo;Private Wealth. Uncomplicated.&rdquo; is a service mark.
            </p>
            <div className="flex items-center gap-4">
              <a href="#faqs" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#faqs" className="hover:text-slate-400 transition-colors">FCA Terms of Business</a>
              <span>•</span>
              <a href="#faqs" className="hover:text-slate-400 transition-colors">Cookie Disclosures</a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
