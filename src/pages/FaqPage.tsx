import React from 'react';
import SEO from '@/components/common/SEO';
import FAQSection from '@/components/sections/FAQSection';
import { BRAND } from '@/config/site';

const FaqPage: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pb-24">
      <SEO
        title={`Frequently Asked Questions | ${BRAND.name}`}
        description={`Frequently asked questions about verified companion bookings, 24/7 hotel outcall, rates, and discretion at ${BRAND.name}.`}
      />
      <FAQSection />
    </div>
  );
};

export default FaqPage;
