'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, ArrowLeft } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service if needed
    console.error('Application runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-center bg-[#FAF9F6]">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center mb-6 shadow-sm">
        <AlertTriangle className="w-8 h-8 text-amber-600" />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-2">
        System Notice
      </span>

      <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-950 tracking-tight mb-4">
        Temporary Service Interruption
      </h1>

      <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mb-8 font-light leading-relaxed">
        An unexpected error occurred while loading this page. Our technical team has been notified.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold transition-all shadow-md cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reload Section</span>
        </button>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-semibold hover:bg-slate-50 transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>

      <div className="mt-12 text-[11px] text-slate-400">
        Anand Rathi Wealth UK Limited • FCA Authorised (Ref: 1033886)
      </div>
    </div>
  );
}
