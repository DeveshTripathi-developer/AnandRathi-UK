'use client';

import React, { useState } from 'react';
import { 
  Palette, 
  Layers, 
  Type, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  X, 
  Sliders, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Building2,
  TrendingUp,
  Landmark,
  Compass,
  CheckCircle,
  FileText,
  Award
} from 'lucide-react';

export type DesignConceptId = 'heritage' | 'swiss' | 'sovereign';

interface FigmaDesignShowcaseProps {
  isOpen: boolean;
  onClose: () => void;
  activeTheme: DesignConceptId;
  onSelectTheme: (theme: DesignConceptId) => void;
}

export const DESIGN_CONCEPTS = [
  {
    id: 'heritage' as DesignConceptId,
    number: '01',
    name: 'Mayfair Heritage Luxury',
    subtitle: 'Classic British Private Bank & Multi-Family Office',
    tagline: 'Old-world discretion paired with institutional gravitas',
    accentColor: '#D4AF37',
    primaryColor: '#0A1128',
    surfaceColor: '#101B3B',
    bgTone: '#070D1E',
    textColor: '#FAF9F6',
    serifFamily: 'Playfair Display / Cormorant Garamond',
    sansFamily: 'Plus Jakarta Sans',
    targetAudience: 'Tier 1 UK & NRI Multi-Generational Families (£2.5m - £50m+)',
    keyHighlights: [
      'Deep Imperial Navy (#0A1128) backdrop with 24K Champagne Gold (#D4AF37) accents',
      'Refined serif typography with optical letter-spacing for high-trust institutional credibility',
      'Discreet hairline gold borders (1px) with subtle ambient light glow',
      'Conservative, fiduciary-first presentation prioritizing regulatory safety (FCA #1033886)'
    ],
    figmaTokens: {
      primary: '#0A1128',
      surface: '#101B3B',
      surfaceLight: '#1E293B',
      accentGold: '#D4AF37',
      accentAmber: '#F59E0B',
      borderSubtle: 'rgba(212, 175, 55, 0.25)',
      textLight: '#F8FAFC',
      textMuted: '#94A3B8',
    },
    specs: {
      grid: '12-Column Desktop Grid (1280px max-width, 80px margins, 24px gutters)',
      spatialRatio: '8pt spatial baseline system (8px, 16px, 24px, 32px, 48px, 64px, 96px)',
      typographyScale: 'Display: 56px/64px (-1.5% tracking) • H1: 42px/48px • H2: 32px/38px • Body: 16px/26px (1.625)',
      elevation: 'Low-diffuse ambient shadows (rgba(0,0,0,0.4) 0px 20px 40px -15px) + 1px gold border'
    }
  },
  {
    id: 'swiss' as DesignConceptId,
    number: '02',
    name: 'Swiss Minimalist Atelier',
    subtitle: 'Editorial Alabaster & Precision Wealth Management',
    tagline: 'Understated Geneva-style clarity, generous negative space, pure legibility',
    accentColor: '#96702E',
    primaryColor: '#0F172A',
    surfaceColor: '#FFFFFF',
    bgTone: '#FAF9F6',
    textColor: '#0F172A',
    serifFamily: 'Cormorant Garamond (Editorial)',
    sansFamily: 'Inter / Plus Jakarta Sans',
    targetAudience: 'Tech Entrepreneurs, C-Suite Executives & Next-Gen Inheritors (£1m - £10m)',
    keyHighlights: [
      'Warm luminous Alabaster Ivory canvas (#FAF9F6) with Slate-Charcoal (#0F172A) text',
      'High-contrast editorial grid with generous 120px negative space padding',
      'Brushed bronze & antique gold micro-pills (#96702E) instead of heavy gradients',
      'Ultra-clean mathematical data visualization with Swiss typographic hierarchy'
    ],
    figmaTokens: {
      primary: '#0F172A',
      surface: '#FFFFFF',
      surfaceLight: '#F8FAFC',
      accentGold: '#96702E',
      accentAmber: '#B45309',
      borderSubtle: '#E2E8F0',
      textLight: '#0F172A',
      textMuted: '#64748B',
    },
    specs: {
      grid: '12-Column Asymmetric Swiss Layout (1320px max-width, 96px margins, 32px gutters)',
      spatialRatio: '12pt typographic rhythm with 65–75 character constrained reading widths',
      typographyScale: 'Display: 60px/68px (-2% tracking) • H1: 44px/52px • H2: 30px/36px • Body: 17px/28px',
      elevation: 'Zero heavy shadows. Structural definition via 1px crisp borders (#E2E8F0) and background contrast'
    }
  },
  {
    id: 'sovereign' as DesignConceptId,
    number: '03',
    name: 'Sovereign Tech-Forward Obsidian',
    subtitle: 'Modern Institutional Family Office & Quant Mandates',
    tagline: 'High-density intelligence, real-time analytics, sovereign fund precision',
    accentColor: '#F59E0B',
    primaryColor: '#06080F',
    surfaceColor: '#0B1120',
    bgTone: '#030509',
    textColor: '#F1F5F9',
    serifFamily: 'Modern Transitional Serif + Tabular Sans',
    sansFamily: 'Plus Jakarta Sans',
    targetAudience: 'Sovereign Capital Allocators, Family Office Principals & Cross-Border Investors (£5m+)',
    keyHighlights: [
      'Obsidian Black (#06080F) with illuminated Electric Gold (#F59E0B) metric indicators',
      'High-density dashboard cards with tabular numerical alignments for instantaneous metric parsing',
      'Interactive risk-return frontier visualizer with crisp mandate allocation breakdown',
      'Designed for dual-screen executive desktops and institutional presentation monitors'
    ],
    figmaTokens: {
      primary: '#06080F',
      surface: '#0B1120',
      surfaceLight: '#131D33',
      accentGold: '#F59E0B',
      accentAmber: '#D97706',
      borderSubtle: 'rgba(245, 158, 11, 0.3)',
      textLight: '#F1F5F9',
      textMuted: '#94A3B8',
    },
    specs: {
      grid: '12-Column Dense Grid (1360px max-width, 64px margins, 20px gutters)',
      spatialRatio: '4pt micro-grid system optimized for data-dense financial tables and charts',
      typographyScale: 'Display: 52px/58px • Numbers: Tabular Lining Figures • H1: 38px/44px • Body: 15px/24px',
      elevation: 'Frosted obsidian glass cards (backdrop-blur-xl + border: 1px solid rgba(255,255,255,0.08))'
    }
  }
];

export default function FigmaDesignShowcase({
  isOpen,
  onClose,
  activeTheme,
  onSelectTheme,
}: FigmaDesignShowcaseProps) {
  const [selectedConcept, setSelectedConcept] = useState<DesignConceptId>(activeTheme);
  const [prevActiveTheme, setPrevActiveTheme] = useState<DesignConceptId>(activeTheme);
  const [copiedCode, setCopiedCode] = useState(false);
  const [clientApproval, setClientApproval] = useState<{
    status: 'pending' | 'approved';
    approvedConcept?: DesignConceptId;
    clientNotes?: string;
  }>({ status: 'pending' });
  const [clientNotes, setClientNotes] = useState('');
  const [activeTab, setActiveTab] = useState<'artboard' | 'tokens' | 'client-review'>('artboard');

  if (activeTheme !== prevActiveTheme) {
    setPrevActiveTheme(activeTheme);
    setSelectedConcept(activeTheme);
  }

  if (!isOpen) return null;

  const current = DESIGN_CONCEPTS.find(c => c.id === selectedConcept) || DESIGN_CONCEPTS[0];

  const handleApplyToLiveSite = (id: DesignConceptId) => {
    onSelectTheme(id);
  };

  const handleCopyFigmaSpec = () => {
    const spec = `
# FIGMA DESIGN SPECIFICATION: ANAND RATHI WEALTH UK
Concept: ${current.name} (${current.subtitle})

## 1. COLOR TOKENS
- Primary Background: ${current.figmaTokens.primary}
- Surface Card: ${current.figmaTokens.surface}
- Elevated Surface: ${current.figmaTokens.surfaceLight}
- Brand Accent (Gold): ${current.figmaTokens.accentGold}
- Highlight Amber: ${current.figmaTokens.accentAmber}
- Border Hairline: ${current.figmaTokens.borderSubtle}
- High-Contrast Text: ${current.figmaTokens.textLight}
- Muted Typography: ${current.figmaTokens.textMuted}

## 2. TYPOGRAPHY
- Serif Heading: ${current.serifFamily}
- Sans Body: ${current.sansFamily}
- Scale: ${current.specs.typographyScale}

## 3. LAYOUT & GRID
- Grid: ${current.specs.grid}
- Baseline Spacing: ${current.specs.spatialRatio}
- Elevation & Borders: ${current.specs.elevation}

## 4. REGULATORY METRICS
- AUM: $11.16 Billion USD
- Client Families: 13,941+
- Experience: 30+ Years Heritage
- FCA Registration: 1033886 | Company No: 16223861
- London Address: Octagon Point, 5 Cheapside, City of London EC2V 6AA
    `.trim();

    navigator.clipboard.writeText(spec);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleApproveDesign = () => {
    setClientApproval({
      status: 'approved',
      approvedConcept: selectedConcept,
      clientNotes: clientNotes.trim() || 'Approved for production development.',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-[#0B1120] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-4 bg-[#070D1E] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white tracking-tight font-serif">
                  Figma Design Concepts for Client Approval
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  3 Directions Ready
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Anand Rathi Wealth UK Limited • High-Net-Worth Wealth Management Redesign
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleCopyFigmaSpec}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
              <span>{copiedCode ? 'Specs Copied!' : 'Copy Figma Specs'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Concept Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 bg-[#0A1128]/70 border-b border-slate-800">
          {DESIGN_CONCEPTS.map((concept) => {
            const isSelected = selectedConcept === concept.id;
            const isLive = activeTheme === concept.id;

            return (
              <div
                key={concept.id}
                onClick={() => setSelectedConcept(concept.id)}
                className={`relative p-4 rounded-xl cursor-pointer transition-all duration-200 border text-left ${
                  isSelected 
                    ? 'bg-slate-900 border-amber-400 ring-1 ring-amber-400/50 shadow-lg' 
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-amber-400 font-semibold">
                      Concept {concept.number}
                    </span>
                    {isLive && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Active Live
                      </span>
                    )}
                  </div>
                  <div 
                    className="w-4 h-4 rounded-full border border-slate-700 flex items-center justify-center"
                    style={{ backgroundColor: concept.accentColor }}
                  />
                </div>

                <h3 className="text-sm font-bold text-white font-serif tracking-tight">
                  {concept.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {concept.subtitle}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">{concept.serifFamily.split('/')[0]}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleApplyToLiveSite(concept.id);
                    }}
                    className={`px-2 py-1 rounded text-[10px] font-semibold transition-colors ${
                      isLive 
                        ? 'text-emerald-300 bg-emerald-950/60 border border-emerald-500/40' 
                        : 'text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30'
                    }`}
                  >
                    {isLive ? '✓ Applied Live' : 'Apply Live Theme'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Mode Navigation (Artboard Preview / Design Tokens / Client Sign-Off) */}
        <div className="flex items-center justify-between px-6 py-2 bg-[#090F1F] border-b border-slate-800 text-xs">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('artboard')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'artboard' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>High-Fidelity Artboard Preview</span>
            </button>

            <button
              onClick={() => setActiveTab('tokens')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'tokens' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Figma Tokens & Typography Matrix</span>
            </button>

            <button
              onClick={() => setActiveTab('client-review')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'client-review' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Client Sign-Off & Approval</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-slate-400 text-[11px]">
            <span>Target:</span>
            <span className="text-amber-300 font-medium">{current.targetAudience}</span>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1 bg-[#070D1E]/40">

          {/* TAB 1: ARTBOARD PREVIEW */}
          {activeTab === 'artboard' && (
            <div className="space-y-6">
              {/* Concept Presentation Header */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                      Concept {current.number} Design System
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400">{current.tagline}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                    {current.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                    Designed specifically for high-net-worth clients, cross-border NRI wealth preservation, and institutional trust in the City of London.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleApplyToLiveSite(current.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-md cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Experience This Live</span>
                  </button>
                </div>
              </div>

              {/* Simulated Figma Desktop Artboard Window (1440x900 responsive mock) */}
              <div className="border border-slate-700/80 rounded-xl overflow-hidden shadow-2xl bg-black">
                {/* Figma Canvas Window Header */}
                <div className="bg-[#18181B] px-4 py-2.5 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                    </div>
                    <span className="ml-2 font-mono text-[11px] text-neutral-300">
                      Figma Frame: Desktop / 1440 × 1080 — {current.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-mono">100% Zoom</span>
                    <span className="text-amber-400 font-medium">Auto-Layout: Flex-Col</span>
                  </div>
                </div>

                {/* THE ARTBOARD INTERFACE (Rendered uniquely for each concept) */}
                <div 
                  className="p-6 sm:p-10 transition-all duration-300"
                  style={{
                    backgroundColor: current.bgTone,
                    color: current.textColor,
                    fontFamily: current.sansFamily,
                  }}
                >
                  {/* Artboard Top Navigation */}
                  <div 
                    className="rounded-xl px-6 py-4 flex items-center justify-between border mb-8"
                    style={{
                      backgroundColor: current.surfaceColor,
                      borderColor: current.figmaTokens.borderSubtle,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded border flex items-center justify-center font-serif font-bold text-sm"
                        style={{
                          borderColor: current.accentColor,
                          color: current.accentColor,
                          backgroundColor: `${current.accentColor}15`
                        }}
                      >
                        AR
                      </div>
                      <div>
                        <div className="font-serif font-bold text-sm tracking-tight leading-none">
                          ANAND RATHI
                        </div>
                        <div 
                          className="text-[9px] tracking-[0.2em] font-semibold uppercase mt-0.5"
                          style={{ color: current.accentColor }}
                        >
                          WEALTH UK LIMITED
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center gap-6 text-xs font-medium opacity-80">
                      <span>Philosophy</span>
                      <span>Mandates</span>
                      <span>Growth Engine</span>
                      <span>Leadership</span>
                      <span>City Office</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span 
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full border hidden sm:inline-block"
                        style={{
                          borderColor: current.accentColor,
                          color: current.accentColor,
                          backgroundColor: `${current.accentColor}10`
                        }}
                      >
                        FCA Regulated #1033886
                      </span>
                      <button 
                        className="px-3 py-1.5 rounded text-xs font-semibold shadow-sm transition-transform"
                        style={{
                          backgroundColor: current.accentColor,
                          color: current.id === 'swiss' ? '#FFFFFF' : '#070D1E',
                        }}
                      >
                        Client Consultation
                      </button>
                    </div>
                  </div>

                  {/* Artboard Hero Layout */}
                  <div className="max-w-4xl mx-auto text-center py-8">
                    <div 
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 border"
                      style={{
                        backgroundColor: `${current.accentColor}12`,
                        borderColor: `${current.accentColor}40`,
                        color: current.accentColor,
                      }}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>City of London • Octagon Point Private Advisory Desk</span>
                    </div>

                    <h1 
                      className="text-3xl sm:text-5xl font-bold tracking-tight mb-5 leading-[1.15]"
                      style={{ fontFamily: current.serifFamily }}
                    >
                      Stewarding Generational Wealth with Institutional Precision
                    </h1>

                    <p className="text-sm sm:text-base opacity-75 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                      Holistic wealth planning, multi-asset risk mandates, and cross-border fiduciary structuring tailored for ultra-high-net-worth families.
                    </p>

                    {/* Pre-Rendered Hero Stats Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                      {[
                        { value: '$11.16B', label: 'Global Assets Under Management', sub: 'Pre-rendered server metric' },
                        { value: '13,941+', label: 'Client Families Globally', sub: 'Multi-generational retention' },
                        { value: '30+ Years', label: 'Institutional Heritage', sub: 'Established pedigree' },
                      ].map((stat, i) => (
                        <div 
                          key={i}
                          className="p-4 rounded-xl border text-left transition-all"
                          style={{
                            backgroundColor: current.surfaceColor,
                            borderColor: current.figmaTokens.borderSubtle,
                          }}
                        >
                          <div 
                            className="text-2xl sm:text-3xl font-bold tracking-tight font-serif"
                            style={{ color: current.accentColor }}
                          >
                            {stat.value}
                          </div>
                          <div className="text-xs font-semibold mt-1 opacity-90">{stat.label}</div>
                          <div className="text-[10px] opacity-60 mt-0.5">{stat.sub}</div>
                        </div>
                      ))}
                    </div>

                    {/* Mandate Preview Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                      {[
                        { title: 'Conservative Mandate', returnRate: '5.5% Target', risk: 'Capital Preservation' },
                        { title: 'Balanced Mandate', returnRate: '8.2% Target', risk: 'Growth & Income' },
                        { title: 'Growth Mandate', returnRate: '10.5% Target', risk: 'Long-term Compounding' },
                      ].map((m, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl border relative overflow-hidden"
                          style={{
                            backgroundColor: current.surfaceColor,
                            borderColor: current.figmaTokens.borderSubtle,
                          }}
                        >
                          <div 
                            className="text-[10px] uppercase font-bold tracking-wider"
                            style={{ color: current.accentColor }}
                          >
                            {m.risk}
                          </div>
                          <div className="text-sm font-bold mt-1">{m.title}</div>
                          <div 
                            className="text-lg font-bold font-mono mt-2"
                            style={{ color: current.accentColor }}
                          >
                            {m.returnRate}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Regulatory Banner Footer in Artboard */}
                  <div 
                    className="mt-10 pt-4 border-t text-[11px] flex flex-col sm:flex-row items-center justify-between opacity-70 gap-2"
                    style={{ borderColor: current.figmaTokens.borderSubtle }}
                  >
                    <span>Authorised and Regulated by the Financial Conduct Authority (FCA: 1033886)</span>
                    <span>Company No: 16223861 • Octagon Point, 5 Cheapside, London EC2V 6AA</span>
                  </div>
                </div>
              </div>

              {/* Design Rationale Checklist for Client Meeting */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Why This Direction Appeals to HNW Clients
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {current.keyHighlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                    <Sliders className="w-4 h-4" />
                    Figma Layout & Typography Geometry
                  </h4>
                  <div className="space-y-2 text-xs text-slate-300 font-mono">
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                      <span className="text-slate-400">Heading Serif:</span>
                      <span className="text-white">{current.serifFamily}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                      <span className="text-slate-400">Body Sans:</span>
                      <span className="text-white">{current.sansFamily}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                      <span className="text-slate-400">Grid Container:</span>
                      <span className="text-white">{current.specs.grid.split('(')[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Elevation:</span>
                      <span className="text-amber-300 text-right">{current.specs.elevation.slice(0, 32)}...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FIGMA TOKENS & TYPOGRAPHY MATRIX */}
          {activeTab === 'tokens' && (
            <div className="space-y-6">
              {/* Color Swatches Grid */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-amber-400" />
                  Color Variables & Token Library ({current.name})
                </h4>
                <p className="text-xs text-slate-400 mb-4">
                  Exportable CSS / Figma variable primitives formatted with exact hex, optical contrast ratios, and semantic usage.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'Brand Primary', token: 'color/brand/primary', hex: current.figmaTokens.primary, textDark: false },
                    { label: 'Surface Container', token: 'color/surface/card', hex: current.figmaTokens.surface, textDark: current.id === 'swiss' },
                    { label: 'Elevated Surface', token: 'color/surface/elevated', hex: current.figmaTokens.surfaceLight, textDark: current.id === 'swiss' },
                    { label: '24K Gold Accent', token: 'color/accent/gold', hex: current.figmaTokens.accentGold, textDark: true },
                    { label: 'Amber Highlight', token: 'color/accent/amber', hex: current.figmaTokens.accentAmber, textDark: true },
                    { label: 'Border Hairline', token: 'color/border/subtle', hex: current.figmaTokens.borderSubtle, textDark: false },
                    { label: 'Text Primary', token: 'color/text/headline', hex: current.figmaTokens.textLight, textDark: current.id === 'swiss' },
                    { label: 'Text Muted', token: 'color/text/caption', hex: current.figmaTokens.textMuted, textDark: current.id === 'swiss' },
                  ].map((color, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <div 
                        className="w-full h-12 rounded-md border border-slate-700/60 mb-2 flex items-center justify-center font-mono text-xs font-bold"
                        style={{
                          backgroundColor: color.hex,
                          color: color.textDark ? '#000000' : '#FFFFFF'
                        }}
                      >
                        {color.hex}
                      </div>
                      <div className="text-xs font-semibold text-slate-200">{color.label}</div>
                      <div className="text-[10px] font-mono text-slate-400 truncate">{color.token}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography Specimen Scale */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <Type className="w-4 h-4 text-amber-400" />
                  Typography Hierarchy & Font Pairing Spec
                </h4>
                <p className="text-xs text-slate-400 mb-4">
                  Serif heading pairing: <span className="text-amber-300 font-semibold">{current.serifFamily}</span> • Body pairing: <span className="text-amber-300 font-semibold">{current.sansFamily}</span>
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                    <div className="flex justify-between items-baseline mb-2 text-xs font-mono text-slate-400">
                      <span>Display Headline (Desktop)</span>
                      <span className="text-amber-400">56px / 64px • Weight: 700 Serif</span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                      Stewarding Generational Wealth
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                    <div className="flex justify-between items-baseline mb-2 text-xs font-mono text-slate-400">
                      <span>Section H2 Headline</span>
                      <span className="text-amber-400">32px / 38px • Weight: 600 Serif</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-serif font-semibold text-white">
                      Four Pillars of Fiduciary Excellence
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                    <div className="flex justify-between items-baseline mb-2 text-xs font-mono text-slate-400">
                      <span>Body Paragraph (Editorial)</span>
                      <span className="text-amber-400">16px / 26px • Weight: 400 Sans</span>
                    </div>
                    <div className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                      Anand Rathi Wealth UK Limited is authorised and regulated by the Financial Conduct Authority (FCA Ref: 1033886). We structure bespoke risk-adjusted portfolios designed to navigate volatile macro-cycles while safeguarding multi-generational capital.
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                    <div className="flex justify-between items-baseline mb-2 text-xs font-mono text-slate-400">
                      <span>Metric Display (Tabular Figures)</span>
                      <span className="text-amber-400">36px / 44px • Tabular Lining</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-amber-400">
                      $11.16B AUM • 13,941+ Families • 10.5% CAGR
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CLIENT SIGN-OFF & APPROVAL */}
          {activeTab === 'client-review' && (
            <div className="space-y-6">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-white">
                      Client Concept Selection & Sign-Off
                    </h3>
                    <p className="text-xs text-slate-400">
                      Record the formal design selection to align stakeholders, brand managers, and development teams.
                    </p>
                  </div>
                </div>

                {clientApproval.status === 'approved' ? (
                  <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span>Formal Design Approval Recorded</span>
                    </div>
                    <div className="text-xs text-slate-300 space-y-1">
                      <p><strong>Approved Concept:</strong> {DESIGN_CONCEPTS.find(c => c.id === clientApproval.approvedConcept)?.name}</p>
                      <p><strong>Notes / Direction:</strong> {clientApproval.clientNotes}</p>
                      <p className="text-[11px] text-slate-400 pt-2 border-t border-emerald-900/60">
                        Status: Ready for production sign-off and Figma handoff export.
                      </p>
                    </div>

                    <button
                      onClick={() => setClientApproval({ status: 'pending' })}
                      className="mt-2 text-xs text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Modify Selection
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Choose Selected Design Concept:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {DESIGN_CONCEPTS.map((concept) => (
                          <div
                            key={concept.id}
                            onClick={() => setSelectedConcept(concept.id)}
                            className={`p-3 rounded-lg border cursor-pointer text-left transition-all ${
                              selectedConcept === concept.id
                                ? 'bg-amber-500/10 border-amber-400 text-white ring-1 ring-amber-400/40'
                                : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <div className="text-xs font-bold">{concept.name}</div>
                            <div className="text-[10px] text-slate-400 mt-0.5">{concept.subtitle}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Client Stakeholder Feedback / Notes (Optional):
                      </label>
                      <textarea
                        value={clientNotes}
                        onChange={(e) => setClientNotes(e.target.value)}
                        placeholder="e.g., We prefer Concept 1 (Mayfair Heritage) for its traditional City of London private banking presence, but please incorporate the tabular mandate metrics from Concept 3..."
                        rows={3}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xs text-slate-400">
                        Active Selection: <span className="text-amber-300 font-semibold">{current.name}</span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleApplyToLiveSite(selectedConcept)}
                          className="px-4 py-2 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
                        >
                          Apply Theme Live
                        </button>
                        <button
                          onClick={handleApproveDesign}
                          className="px-5 py-2 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
                        >
                          <Check className="w-4 h-4" />
                          <span>Approve This Concept</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-3.5 bg-[#070D1E] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Current Selection: <strong className="text-white font-medium">{current.name}</strong></span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleApplyToLiveSite(current.id)}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-sm cursor-pointer"
            >
              Apply {current.name} Live
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              Close Viewer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
