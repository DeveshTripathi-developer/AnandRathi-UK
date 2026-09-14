import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-center bg-[#FAF9F6]">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A1128] to-[#1E293B] text-amber-400 flex items-center justify-center mb-6 shadow-lg">
        <Shield className="w-8 h-8 text-amber-400" />
      </div>
      
      <span className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-2">
        Error 404 • Page Not Found
      </span>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-950 tracking-tight mb-4">
        Page Not Located
      </h1>
      
      <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mb-8 font-light leading-relaxed">
        The requested institutional page or resource could not be found or may have been relocated.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold transition-all shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          href="/#consultation-intake"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-semibold hover:bg-slate-50 transition-all shadow-sm"
        >
          <span>Contact London Practice</span>
        </Link>
      </div>

      <div className="mt-12 text-[11px] text-slate-400">
        Anand Rathi Wealth UK Limited • FCA Authorised (Ref: 1033886)
      </div>
    </div>
  );
}
