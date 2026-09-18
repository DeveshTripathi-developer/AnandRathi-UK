'use client';

import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF9F6] text-slate-900 flex flex-col items-center justify-center px-4 font-sans antialiased">
        <div className="max-w-md w-full text-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <AlertTriangle className="w-8 h-8 text-amber-600" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-2 block">
            System Alert • Root Error
          </span>

          <h1 className="text-3xl font-bold font-serif text-slate-950 tracking-tight mb-3">
            Anand Rathi Wealth UK
          </h1>

          <p className="text-sm text-slate-600 mb-6 font-light leading-relaxed">
            The private wealth portal encountered an unexpected runtime state. Please refresh the institutional session to continue.
          </p>

          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Restore Session</span>
          </button>

          <div className="mt-12 text-[11px] text-slate-400">
            Anand Rathi Wealth UK Limited • Authorised &amp; Regulated by the FCA (Ref: 1033886)
          </div>
        </div>
      </body>
    </html>
  );
}
