import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import FcaBanner from '@/components/FcaBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anand Rathi Wealth UK | Private Wealth. Uncomplicated.',
  description:
    'Anand Rathi Wealth UK Limited – FCA Authorised (Ref: 1033886) private wealth management in the City of London. Preserving and growing wealth across generations with data-backed, uncomplicated counsel.',
  openGraph: {
    title: 'Anand Rathi Wealth UK | Private Wealth. Uncomplicated.',
    description:
      'FCA Authorised (Ref: 1033886) private wealth management at Octagon Point, City of London. $11.16B AUM, 13,941+ client families, 30+ years track record.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Anand Rathi Wealth UK Limited',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anand Rathi Wealth UK | Private Wealth. Uncomplicated.',
    description:
      'FCA Authorised (Ref: 1033886) private wealth management in the City of London. Preserving & growing wealth across generations.',
  },
};

const financialServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Anand Rathi Wealth UK Limited',
  legalName: 'Anand Rathi Wealth UK Limited',
  alternateName: 'Anand Rathi Wealth UK',
  url: 'https://www.anandrathiwealth.co.uk/',
  description:
    'FCA Authorised (Ref: 1033886) private wealth management in the City of London. Preserving and growing wealth across generations with data-backed, uncomplicated counsel.',
  telephone: '+44 20 7946 0192',
  email: 'london@anandrathiwealth.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Octagon Point, 5 Cheapside',
    addressLocality: 'City of London',
    postalCode: 'EC2V 6AA',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5138,
    longitude: -0.0967,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '18:00',
    },
  ],
  priceRange: '££££',
  currenciesAccepted: 'GBP, USD, EUR',
  founder: {
    '@type': 'Person',
    name: 'Anand Rathi',
    jobTitle: 'Founder & Chairman',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Anand Rathi Wealth UK Limited',
  alternateName: 'Anand Rathi Wealth',
  url: 'https://www.anandrathiwealth.co.uk/',
  identifier: 'Company No: 16223861 | FCA Ref: 1033886',
  foundingDate: '1994',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 1000,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Octagon Point, 5 Cheapside',
    addressLocality: 'City of London',
    postalCode: 'EC2V 6AA',
    addressCountry: 'GB',
  },
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What regulatory protections safeguard my capital with Anand Rathi Wealth UK Limited?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anand Rathi Wealth UK Limited is authorised and regulated by the Financial Conduct Authority (FCA Firm Reference: 1033886). Client assets are held under strict client money and asset rules (CASS) by independent, Tier-1 custodian banks. Your assets are legally segregated from the firm’s balance sheet, ensuring they remain protected and ring-fenced at all times.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the qualifying investment threshold to engage your private wealth services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work primarily with High-Net-Worth (HNW) and Ultra-High-Net-Worth (UHNW) individuals, business owners, senior executives, and family offices. Our private advisory mandates typically start at £500,000 of liquid investable capital.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you advise on the UK Non-Domiciled (Non-Dom) regime changes and cross-border assets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With over 30 years of cross-border experience stewarding Indian diaspora (NRI), Middle Eastern, and international family wealth, we specialize in multi-jurisdictional tax efficiency and the UK Foreign Income and Gains (FIG) rules.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does your fee model operate, and do you accept product commissions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We operate strictly on a clean, all-inclusive advisory fee model. We do not accept third-party commissions, brokerage kickbacks, or hidden spreads. Our fees are fully disclosed in advance as an annualized percentage of assets under management.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        {/* Structured Data (SEO) - FinancialService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
        />
        {/* Structured Data (SEO) - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Structured Data (SEO) - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF9F6] text-slate-900 selection:bg-amber-400 selection:text-slate-950" suppressHydrationWarning>
        {/* Persistent, Accessible FCA Compliance Banner */}
        <FcaBanner />

        {/* Institutional Header & Navigation Bar */}
        <Navbar />

        {/* Application View */}
        <div className="flex-1 flex flex-col">
          {children}
        </div>

        {/* Persistent FCA Regulatory Footer */}
        <Footer />
      </body>
    </html>
  );
}
