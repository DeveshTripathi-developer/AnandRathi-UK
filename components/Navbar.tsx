'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Menu, X, ArrowRight, ShieldCheck, Palette } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('open-consultation-modal'));
        const el = document.getElementById('consultation-intake');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const navLinks = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Mandates', href: '#mandates' },
    { label: 'Wealth Calculator', href: '#wealth-calculator' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Advisory Protocol', href: '#advisory' },
    { label: 'London Office', href: '#london-office' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0A1128]/95 backdrop-blur-md border-b border-slate-800/80 text-white transition-all">
      {/* Top micro bar for high net worth clients */}
      <div className="hidden lg:block border-b border-slate-800/60 bg-[#070D1E]/70 text-xs py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Octagon Point, 5 Cheapside, City of London EC2V 6AA</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400/90" />
              <span>Authorised by FCA (1033886) • Company No: 16223861</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">UK & Cross-Border Private Advisory Desk</span>
            <a 
              href="tel:+442079460192" 
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors font-medium"
            >
              <Phone className="w-3 h-3" />
              <span>+44 (0) 20 7946 0192</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <Link href="/" className="group flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded border border-amber-400/60 bg-gradient-to-br from-amber-400/20 to-transparent flex items-center justify-center font-serif text-amber-300 font-bold text-lg tracking-wider shadow-sm">
              AR
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white block leading-none font-serif">
                ANAND RATHI
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] text-amber-400 font-medium uppercase block mt-1">
                WEALTH UK LIMITED
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop navigation links */}
        <nav className="hidden xl:flex items-center space-x-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-300 transition-colors py-1 relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('open-figma-showcase'));
              }
            }}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded text-xs font-semibold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-400/40 transition-colors shadow-sm cursor-pointer"
            title="Review 3 Figma Design Concepts for Client Approval"
          >
            <Palette className="w-3.5 h-3.5 text-amber-400" />
            <span>Figma Designs (3)</span>
          </button>

          <a
            href="tel:+442079460192"
            className="hidden xl:flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-2 rounded border border-slate-700/80 hover:border-slate-600 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Desk</span>
          </a>

          <button
            id="nav-consultation-btn"
            onClick={handleOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold tracking-wide bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 transition-all duration-200 shadow-md shadow-amber-950/20 cursor-pointer active:scale-95"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('open-figma-showcase'));
              }
            }}
            className="px-2.5 py-1.5 rounded text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/40 flex items-center gap-1"
          >
            <Palette className="w-3 h-3" />
            <span>Figma (3)</span>
          </button>
          <button
            id="mobile-consultation-quick-btn"
            onClick={handleOpenConsultation}
            className="px-3 py-1.5 rounded text-xs font-semibold bg-amber-500 text-slate-950"
          >
            Consult
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-slate-300 hover:text-white hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0A1128] px-4 pt-3 pb-6 space-y-3">
          <div className="p-3 bg-slate-900/80 rounded border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
            <span>FCA Ref: 1033886 • London</span>
            <a href="tel:+442079460192" className="text-amber-400 font-semibold flex items-center gap-1">
              <Phone className="w-3 h-3" /> +44 (0) 20 7946 0192
            </a>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-amber-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            id="mobile-menu-full-consultation-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              handleOpenConsultation();
            }}
            className="w-full mt-3 flex items-center justify-center gap-2 py-3 rounded font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 shadow-md"
          >
            <span>Request Private Wealth Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
