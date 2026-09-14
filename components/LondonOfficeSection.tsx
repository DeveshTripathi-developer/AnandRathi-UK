import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Train, Building2, ShieldCheck } from 'lucide-react';

export default function LondonOfficeSection() {
  return (
    <section id="london-office" className="py-20 md:py-28 bg-[#0A1128] text-white relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            London Headquarters
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Octagon Point, City of London
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-light">
            Situated in the historic financial core of London, opposite St Paul’s Cathedral. Our private client boardroom provides a discreet environment for family wealth stewardship.
          </p>
        </div>

        {/* Office Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact and Logistics Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Address & FCA Info */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                    Registered Domicile & Suites
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-white">
                    Anand Rathi Wealth UK Limited
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    Octagon Point, 5 Cheapside, City of London, EC2V 6AA, United Kingdom
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>

              {/* Practical details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                <div className="space-y-1.5">
                  <span className="text-slate-400 font-semibold uppercase tracking-wider block flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" /> Direct Private Line
                  </span>
                  <a 
                    href="tel:+442079460192" 
                    className="text-base font-bold font-serif text-white hover:text-amber-300 transition-colors block"
                  >
                    +44 (0) 20 7946 0192
                  </a>
                  <span className="text-slate-400 block text-[11px]">
                    Monday – Friday, 08:30 – 18:00 GMT
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-slate-400 font-semibold uppercase tracking-wider block flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-400" /> Confidential Inquiries
                  </span>
                  <a 
                    href="mailto:london@anandrathiwealth.co.uk" 
                    className="text-sm font-semibold text-white hover:text-amber-300 transition-colors block"
                  >
                    london@anandrathiwealth.co.uk
                  </a>
                  <span className="text-slate-400 block text-[11px]">
                    Encrypted client correspondence
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-slate-400 font-semibold uppercase tracking-wider block flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> Private Suite Hours
                  </span>
                  <p className="text-slate-200">
                    Client consultations by appointment. Extended weekend & evening sessions available for overseas families.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-slate-400 font-semibold uppercase tracking-wider block flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Regulatory Verification
                  </span>
                  <p className="text-slate-200">
                    FCA Firm Reference: <strong className="text-amber-300">1033886</strong><br />
                    Company Registration: <strong className="text-slate-300">16223861</strong>
                  </p>
                </div>
              </div>

              {/* Transit & Access notes */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5">
                  <Train className="w-3.5 h-3.5 text-amber-400" /> Transit & Access Links
                </span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700">
                    St Paul’s Station (Central Line) – 1 min walk
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700">
                    Bank & Monument – 5 mins walk
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700">
                    Mansion House (District & Circle) – 4 mins walk
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700">
                    London City Airport – 25 mins
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Interactive London City Map Representation & Boardroom booking (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  City Location Schematic
                </span>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Suite Status: Open
                </span>
              </div>

              {/* Stylized London Map Canvas */}
              <div className="h-48 rounded-lg bg-[#070D1E] border border-slate-800 relative overflow-hidden flex items-center justify-center p-4">
                {/* Street Grid lines */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                {/* Thames river curve */}
                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 300 150">
                  <path d="M 0 130 Q 150 145 300 110" fill="none" stroke="#38BDF8" strokeWidth="12" />
                </svg>

                {/* St Paul's Landmark */}
                <div className="absolute top-10 left-12 text-[10px] text-slate-400 flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-500" />
                  <span>St Paul’s Cathedral</span>
                </div>

                {/* Bank of England Landmark */}
                <div className="absolute top-12 right-12 text-[10px] text-slate-400 flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-500" />
                  <span>Bank of England</span>
                </div>

                {/* Octagon Point Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-lg">
                      <MapPin className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-1.5 px-2.5 py-0.5 rounded bg-slate-900/90 border border-amber-500/40 text-amber-300 text-[10px] font-bold shadow-md">
                    Octagon Point, 5 Cheapside
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-2 text-xs text-slate-300">
                <p className="leading-relaxed">
                  Visitors are welcomed at our private reception on the executive floor. High-security, discreet elevator access and confidential meeting suites ensure client privacy.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800">
              <a
                href="#consultation-intake"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow"
              >
                <span>Reserve Boardroom Consultation</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
