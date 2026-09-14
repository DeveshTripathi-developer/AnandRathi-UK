'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Shield, 
  Building2, 
  ExternalLink,
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  tenure: string;
  credentials: string;
  shortBio: string;
  fullBio: string[];
  education: string[];
  careerMilestones: string[];
  philosophyQuote: string;
  keyStats: {
    label: string;
    value: string;
  }[];
}

export const LEADERSHIP_TEAM: LeaderProfile[] = [
  {
    id: 'anand-rathi',
    name: 'Anand Rathi',
    role: 'Founder & Chairman',
    tenure: '45+ Years of Corporate & Capital Markets Governance',
    credentials: 'FCA (Gold Medallist, ICAI) • Former President, Bombay Stock Exchange (BSE)',
    shortBio: 'Leading industrial statesman and former President of the Bombay Stock Exchange (1999–2001). Guided pivotal capital market reforms including electronic screen trading and risk containment before founding the Anand Rathi Group in 1994.',
    fullBio: [
      'Anand Rathi is one of the financial industry’s most respected statesmen. A Chartered Accountant and Gold Medallist of the Institute of Chartered Accountants of India (ICAI), he served as President of the Bombay Stock Exchange (BSE) from 1999 to 2001. During his presidency, he steered historic capital market reforms, accelerating the modernization of India’s trade settlement systems, computerisation, and structural risk-containment frameworks.',
      'Prior to founding the Anand Rathi Group in 1994, he spent over two decades as a Senior Executive within the multi-billion-dollar Aditya Birla Group, leading flagship industrial conglomerates across cement, textiles, and capital goods.',
      'Under his chairmanship, the Anand Rathi Group has expanded into a global financial powerhouse overseeing over $11.16 Billion in client assets, anchored by an uncompromising commitment to client-centricity, fiduciary integrity, and fearless counsel.',
    ],
    education: [
      'Fellow Chartered Accountant (FCA), ICAI — Gold Medallist',
      'Bachelor of Commerce, University of Rajasthan',
    ],
    careerMilestones: [
      'President of the Bombay Stock Exchange (BSE) (1999–2001)',
      'Spearheaded modern depository settlement and electronic trading reforms at BSE',
      'Senior Executive Officer at Aditya Birla Group, managing conglomerate operations',
      'Founded Anand Rathi Group in 1994, growing it across 30+ years to $11.16B AUM',
    ],
    philosophyQuote: 'Honest, fearless counsel is the non-negotiable foundation of wealth stewardship. A client must always be told what they need to hear, not what is convenient to sell.',
    keyStats: [
      { label: 'Industry Experience', value: '45+ Yrs' },
      { label: 'BSE Presidency', value: '1999–2001' },
      { label: 'Global Assets Overseen', value: '$11.16B' },
    ],
  },
  {
    id: 'pradeep-gupta',
    name: 'Pradeep Gupta',
    role: 'Co-Founder & Vice Chairman',
    tenure: '30+ Years Global Private Markets & Advisory Architecture',
    credentials: 'Harvard Business School Alumnus (OPM) • Co-Founder, Navratan Capital',
    shortBio: 'Co-founder of Anand Rathi Group and alumnus of Harvard Business School. Instrumental in structuring private equity, institutional distribution networks, and international family office governance.',
    fullBio: [
      'Pradeep Gupta co-founded the Anand Rathi Group in 1994 alongside Anand Rathi and has served as a driving force behind its institutional expansion across corporate finance, private equity, and wealth management.',
      'An alumnus of the Owner/President Management (OPM) program at Harvard Business School, he earlier co-founded Navratan Capital and is widely recognized for his strategic acumen in building cross-border capital alliances across Asia, the Middle East, and Europe.',
      'Pradeep is a champion of corporate governance and sustainable family succession planning. His vision has been central to establishing institutional family office solutions that protect multi-generational wealth from geopolitical and economic volatility.',
    ],
    education: [
      'Harvard Business School (HBS) — Owner/President Management (OPM)',
      'Bachelor of Science, University of Rajasthan',
    ],
    careerMilestones: [
      'Co-founded Anand Rathi Group in 1994, steering institutional expansion',
      'Completed Harvard Business School Executive Education (OPM)',
      'Co-founder of Navratan Capital & Financial Services',
      'Architect of Anand Rathi’s international cross-border wealth governance frameworks',
    ],
    philosophyQuote: 'True wealth preservation requires engineering resilient structures that compound quietly across generations, immune to short-term market euphoria.',
    keyStats: [
      { label: 'Executive Tenure', value: '30+ Yrs' },
      { label: 'Executive Education', value: 'Harvard' },
      { label: 'Families Stewarded', value: '13,941+' },
    ],
  },
  {
    id: 'rakesh-rawal',
    name: 'Rakesh Rawal',
    role: 'Chief Executive Officer',
    tenure: 'CEO for 19+ Consecutive Years • 30+ Years Industry Leadership',
    credentials: 'B.Tech (IIT Kanpur) • MMS (JBIMS Mumbai) • Ex-Deutsche Bank & Unilever',
    shortBio: 'Serving as CEO for over 19 years. Alumnus of IIT Kanpur and JBIMS Mumbai with senior leadership pedigree at Deutsche Bank and Hindustan Unilever. Architect of the firm’s data-driven, uncomplicated wealth management model.',
    fullBio: [
      'Rakesh Rawal has served as Chief Executive Officer of Anand Rathi Wealth for more than 19 consecutive years, steering the business to become one of the premier independent wealth management practices globally.',
      'A distinguished engineer from the Indian Institute of Technology (IIT) Kanpur and a management alumnus of Jamnalal Bajaj Institute of Management Studies (JBIMS) Mumbai, Rakesh brings a rare blend of scientific precision and commercial rigor to portfolio management.',
      'Prior to Anand Rathi, Rakesh spent decades in senior executive roles at Hindustan Unilever Limited (HUL), honing principles of operational excellence and consumer psychology, before leading institutional private banking operations at Deutsche Bank.',
      'Under his 19-year tenure as CEO, the firm pioneered the "Uncomplicated" wealth philosophy—eliminating opaque derivative structures in favor of mathematically optimized asset allocation blueprints with predictable risk controls.',
    ],
    education: [
      'Bachelor of Technology (B.Tech) — Indian Institute of Technology (IIT) Kanpur',
      'Master of Management Studies (MMS) — Jamnalal Bajaj Institute of Management Studies (JBIMS)',
    ],
    careerMilestones: [
      'Chief Executive Officer of Anand Rathi Wealth for 19+ consecutive years',
      'Senior Private Banking & Wealth Leadership at Deutsche Bank',
      'Extensive brand and commercial leadership career at Hindustan Unilever Limited (HUL)',
      'Engineered the proprietary risk-adjusted multi-asset distribution algorithm',
    ],
    philosophyQuote: 'Wealth management is not about predicting the unpredictable; it is about engineering mathematically disciplined portfolios that thrive regardless of the macroeconomic weather.',
    keyStats: [
      { label: 'CEO Leadership', value: '19+ Yrs' },
      { label: 'Academic Rigor', value: 'IIT & JBIMS' },
      { label: 'Client Retention', value: '98.5%' },
    ],
  },
  {
    id: 'feroze-azeez',
    name: 'Feroze Azeez',
    role: 'Joint Chief Executive Officer',
    tenure: 'Fortune India 40 Under 40 • 20+ Years Quantitative Risk Architect',
    credentials: 'Fortune 40 Under 40 • 4,354 Structured Series • TED Speaker • 2,500+ Broadcasts',
    shortBio: 'Pioneer of quantitative downside risk mitigation and structured yield architectures. Featured on Fortune India’s "40 Under 40", TED Speaker, and frequent commentator across Bloomberg, CNBC, and international financial media.',
    fullBio: [
      'Feroze Azeez is recognized internationally as one of the foremost authorities on structured risk, private wealth analytics, and quantitative asset management. He currently serves as Joint Chief Executive Officer of Anand Rathi Wealth.',
      'Selected for Fortune India’s prestigious "40 Under 40" list of top business leaders and a keynote speaker at TED, Feroze has personally engineered and evaluated 4,354 structured risk series, setting benchmarks for capital protection during severe market corrections.',
      'With over 2,500 live broadcast appearances on leading global and domestic financial news channels (including CNBC, Bloomberg, and ET Now), Feroze is celebrated for demystifying financial jargon and advocating radical transparency in client fee models.',
      'He has pioneered the firm’s proprietary Sharpe-maximizing asset allocation engine, ensuring HNW and UHNW families achieve optimal equity beta while maintaining robust volatility buffers.',
    ],
    education: [
      'Bachelor of Engineering (B.E.), Mechanical Engineering',
      'Advanced Certifications in Quantitative Risk & Alternative Investments',
    ],
    careerMilestones: [
      'Named to Fortune India 40 Under 40 elite business leaders',
      'Engineered and overseen 4,354 structured risk-mitigated investment series',
      'Featured TED Speaker on wealth demystification and cognitive investor psychology',
      'Over 2,500 television appearances as leading capital markets commentator',
    ],
    philosophyQuote: 'Complexity is often the refuge of those trying to hide fee drag or poor risk management. True brilliance lies in making complex mathematics genuinely uncomplicated for the client.',
    keyStats: [
      { label: 'Structured Series', value: '4,354' },
      { label: 'Media Appearances', value: '2,500+' },
      { label: 'Industry Honor', value: 'Fortune 40U40' },
    ],
  },
];

interface LeadershipGridProps {
  className?: string;
  onOpenConsultation?: () => void;
}

export default function LeadershipGrid({ className = '', onOpenConsultation }: LeadershipGridProps) {
  const [activeLeader, setActiveLeader] = useState<LeaderProfile | null>(null);

  // Close modal on Escape key press
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setActiveLeader(null);
    }
  }, []);

  useEffect(() => {
    if (activeLeader) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLeader, handleKeyDown]);

  const handleConsultationClick = () => {
    setActiveLeader(null);
    if (onOpenConsultation) {
      onOpenConsultation();
    } else if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-consultation-modal'));
      const formEl = document.getElementById('consultation-intake');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="leadership" 
      className={`py-20 md:py-28 bg-[#FAF9F6] border-b border-slate-200 scroll-mt-16 text-slate-900 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            Institutional Governance & Stewardship
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-950 tracking-tight">
            Executive Leadership
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-light">
            Decades of senior institutional pedigree across top-tier investment banks, stock exchange presidencies, Harvard Business School, and multi-billion-dollar conglomerates.
          </p>
        </div>

        {/* 4-Column Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_TEAM.map((leader) => (
            <div
              key={leader.id}
              id={`leader-card-${leader.id}`}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Executive Monogram & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0A1128] to-[#1E293B] text-amber-400 flex items-center justify-center font-serif text-xl font-bold shadow-md group-hover:scale-105 transition-transform">
                    {leader.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    Executive Board
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block mb-1">
                  {leader.role}
                </span>

                <h3 className="text-xl font-bold font-serif text-slate-950 mb-2 group-hover:text-amber-900 transition-colors">
                  {leader.name}
                </h3>

                <p className="text-xs font-semibold text-slate-700 mb-4 pb-3 border-b border-slate-100 leading-snug">
                  {leader.credentials.split('•')[0].trim()}
                </p>

                <p className="text-xs text-slate-600 line-clamp-4 leading-relaxed mb-6 font-light">
                  {leader.shortBio}
                </p>
              </div>

              {/* Card Footer & Interactive Trigger */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  id={`view-biography-btn-${leader.id}`}
                  onClick={() => setActiveLeader(leader)}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-amber-700 py-1.5 transition-colors cursor-pointer"
                >
                  <span>Read Full Biography & Pedigree</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fiduciary Governance Standards Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-700 text-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-600">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-slate-900 block text-sm font-serif mb-1">Unbiased Fiduciary Stewardship</strong>
              <p className="leading-relaxed text-slate-600">
                Zero conflict of interest with proprietary asset management products. We advise purely in the interest of client family balance sheets.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-600">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-slate-900 block text-sm font-serif mb-1">Gold-Medallist & Elite Pedigree</strong>
              <p className="leading-relaxed text-slate-600">
                Led by Chartered Accountants (Gold Medallist ICAI), IIT Kanpur engineers, Harvard Business School alumni, and former stock exchange governors.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-600">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-slate-900 block text-sm font-serif mb-1">Direct Partner Involvement</strong>
              <p className="leading-relaxed text-slate-600">
                Our senior partners remain hands-on in the strategic asset allocation and structural review for qualifying HNW and UHNW families.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* INTERACTIVE BIOGRAPHY MODAL DIALOG */}
      {activeLeader && (
        <div
          id="leader-biography-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="leader-modal-name"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveLeader(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-slate-100 px-6 sm:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                <Shield className="w-3.5 h-3.5 text-amber-600" />
                <span>Executive Leadership Dossier</span>
              </div>
              <button
                type="button"
                id="close-biography-modal-btn"
                onClick={() => setActiveLeader(null)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close biography dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Executive Header Banner */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-100">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0A1128] to-[#1E293B] text-amber-400 flex items-center justify-center font-serif text-3xl font-bold shadow-xl shrink-0">
                  {activeLeader.name.split(' ').map((n) => n[0]).join('')}
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
                    {activeLeader.role}
                  </span>
                  <h3 id="leader-modal-name" className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                    {activeLeader.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700">
                    {activeLeader.credentials}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-0.5">
                    <Calendar className="w-3 h-3 text-amber-600" />
                    <span>{activeLeader.tenure}</span>
                  </p>
                </div>
              </div>

              {/* Key Track Record Metrics Strip */}
              <div className="grid grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-center">
                {activeLeader.keyStats.map((stat, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                      {stat.label}
                    </span>
                    <span className="text-base sm:text-xl font-bold font-serif text-slate-950 block">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Core Philosophy Callout */}
              <div className="p-5 rounded-xl bg-amber-50/70 border-l-4 border-amber-500 text-slate-800 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
                  Executive Philosophy
                </span>
                <p className="text-xs sm:text-sm italic leading-relaxed text-slate-700 font-serif">
                  &ldquo;{activeLeader.philosophyQuote}&rdquo;
                </p>
              </div>

              {/* Full Narrative Biography */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                  Institutional Biography
                </h4>
                {activeLeader.fullBio.map((paragraph, idx) => (
                  <p key={idx} className="font-light leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Career Milestones & Reforms */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                  Landmark Milestones & Capital Market Reforms
                </h4>
                <div className="space-y-2">
                  {activeLeader.careerMilestones.map((milestone, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Qualifications */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                  Academic Credentials & Accreditations
                </h4>
                <div className="space-y-2">
                  {activeLeader.education.map((edu, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                      <GraduationCap className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{edu}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* London Practice Contact Bridge */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 text-white p-5 rounded-xl">
                <div className="text-center sm:text-left">
                  <span className="text-xs font-semibold text-amber-400 block">
                    Octagon Point, City of London Practice
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Anand Rathi Wealth UK Limited • FCA Firm Reference: 1033886
                  </span>
                </div>

                <button
                  type="button"
                  id="modal-request-consultation-btn"
                  onClick={handleConsultationClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer"
                >
                  <span>Request Advisory Meeting</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
