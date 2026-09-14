import React from 'react';
import ClientAppWrapper from '@/components/ClientAppWrapper';
import Hero from '@/components/sections/Hero';
import PhilosophyPillars from '@/components/PhilosophyPillars';
import MandatesSection from '@/components/MandatesSection';
import LeadershipProfiles from '@/components/LeadershipProfiles';
import AdvisoryProcess from '@/components/AdvisoryProcess';
import LondonOfficeSection from '@/components/LondonOfficeSection';
import FaqSection from '@/components/FaqSection';

export default function HomePage() {
  return (
    <ClientAppWrapper>
      {/* 1. Server-Hydrated Hero Section with instantaneous $11.16B / 13,941+ metrics */}
      <Hero />

      {/* 2. The 4 Philosophy Pillars */}
      <PhilosophyPillars />

      {/* 3. The 3 Institutional Mandates */}
      <MandatesSection />

      {/* 4. Leadership & Institutional Pedigree */}
      <LeadershipProfiles />

      {/* 5. The 4-Phase Advisory Protocol */}
      <AdvisoryProcess />

      {/* 6. Octagon Point London City Office Showcase */}
      <LondonOfficeSection />

      {/* 7. Client FAQs */}
      <FaqSection />
    </ClientAppWrapper>
  );
}
