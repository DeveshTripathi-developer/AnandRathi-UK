import React from 'react';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface FinancialMetricProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  currency?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  trend?: 'neutral' | 'positive' | 'accent';
  id?: string;
}

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'lead' | 'muted' | 'small';
  id?: string;
}

/**
 * H1 Hero Title
 * Font: Playfair Display (Serif)
 * Weight: Bold (700)
 */
export function H1({ children, className = '', id, ...props }: TypographyProps) {
  return (
    <h1
      id={id}
      className={`font-serif font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-slate-950 ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

/**
 * H2 Primary Section Heading
 * Font: Playfair Display (Serif)
 * Weight: Semi-Bold (600)
 */
export function H2({ children, className = '', id, ...props }: TypographyProps) {
  return (
    <h2
      id={id}
      className={`font-serif font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-slate-950 ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}

/**
 * H3 Subsection / Component Heading
 * Font: Playfair Display (Serif)
 * Weight: Semi-Bold (600)
 */
export function H3({ children, className = '', id, ...props }: TypographyProps) {
  return (
    <h3
      id={id}
      className={`font-serif font-semibold text-2xl sm:text-3xl tracking-tight leading-snug text-slate-950 ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

/**
 * H4 Card / Modal Subtitle Heading
 * Font: Playfair Display (Serif)
 * Weight: Semi-Bold (600)
 */
export function H4({ children, className = '', id, ...props }: TypographyProps) {
  return (
    <h4
      id={id}
      className={`font-serif font-semibold text-xl sm:text-2xl tracking-tight leading-snug text-slate-950 ${className}`}
      {...props}
    >
      {children}
    </h4>
  );
}

/**
 * Paragraph / Body Copy
 * Font: Plus Jakarta Sans (Sans-Serif)
 * Weight: Regular (400) — Base 16px (1rem), Line Height: 1.625
 */
export function Paragraph({
  children,
  className = '',
  variant = 'default',
  id,
  ...props
}: ParagraphProps) {
  const variantStyles = {
    default: 'text-base font-sans font-normal text-slate-700 leading-relaxed',
    lead: 'text-lg sm:text-xl font-sans font-normal text-slate-700 leading-relaxed',
    muted: 'text-sm font-sans font-normal text-slate-500 leading-normal',
    small: 'text-xs font-sans font-normal text-slate-500 leading-normal',
  };

  return (
    <p
      id={id}
      className={`${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Financial Figures & Metrics ($ / £ / %)
 * Font: Plus Jakarta Sans (Sans-Serif)
 * Weight: Bold (700) with Tabular Numerals (tabular-nums)
 * Prevents layout shift during numeric animations or reactive slider calculations.
 */
export function FinancialMetric({
  children,
  className = '',
  currency,
  size = 'md',
  trend = 'neutral',
  id,
  ...props
}: FinancialMetricProps) {
  const sizeStyles = {
    sm: 'text-lg sm:text-xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl',
    hero: 'text-5xl sm:text-6xl md:text-7xl',
  };

  const trendStyles = {
    neutral: 'text-slate-950',
    positive: 'text-emerald-600',
    accent: 'text-amber-500',
  };

  return (
    <span
      id={id}
      className={`font-sans font-bold tabular-nums tracking-tight inline-flex items-baseline gap-0.5 ${sizeStyles[size]} ${trendStyles[trend]} ${className}`}
      {...props}
    >
      {currency && (
        <span className="text-[0.75em] font-semibold opacity-90 select-none mr-0.5">
          {currency}
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}

/**
 * UI Label / Badge / Navigation Token
 * Font: Plus Jakarta Sans (Sans-Serif)
 * Navigation/Labels: Medium (500) | Buttons/Badges: Semi-Bold (600)
 */
export function UiLabel({
  children,
  className = '',
  weight = 'medium',
  id,
  ...props
}: TypographyProps & { weight?: 'medium' | 'semibold' }) {
  const weightClass = weight === 'semibold' ? 'font-semibold' : 'font-medium';
  return (
    <span
      id={id}
      className={`font-sans ${weightClass} text-xs tracking-wider uppercase text-slate-600 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

const Typography = {
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  FinancialMetric,
  UiLabel,
};

export default Typography;
