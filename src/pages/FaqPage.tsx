import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SEO from '@/components/common/SEO';
import FAQSection from '@/components/sections/FAQSection';
import { BRAND, CONTACT } from '@/config/site';

const FAQ_ITEMS = [
  {
    q: 'How do I book a verified escort or companion in Noida & NCR?',
    a: `Booking is straightforward and discreet. Browse our verified categories (VIP Models, Russian Companions, Independent Escorts), choose your preferred companion, and message our coordinator directly on WhatsApp (${CONTACT.phoneDisplay}). We confirm real-time availability with zero advance payment.`,
  },
  {
    q: 'Are the companion photos 100% genuine and verified?',
    a: `Yes. Every profile listed on ${BRAND.name} undergoes strict phone authentication and genuine photo verification before going live.`,
  },
  {
    q: 'Do you provide 24/7 hotel outcall service across Noida and NCR?',
    a: `Yes! ${BRAND.name} operates 24 Hours, 7 Days a week. Independent companions provide fast 20-30 minute doorstep outcalls to all hotels in Sector 18, Sector 62, Noida Expressway, Greater Noida (Pari Chowk), and Indirapuram.`,
  },
  {
    q: 'Is there any advance payment or booking deposit required in Noida?',
    a: 'No! We maintain a strict zero-advance policy to protect clients from online frauds. You never pay unfamiliar QR codes or deposit links. Payment is settled directly upon arrival.',
  },
  {
    q: 'How is client privacy and confidentiality maintained?',
    a: 'Complete discretion is our highest priority. We do not store personal chats, logs, or private data. Companions arrive dressed casually and professionally with 100% confidentiality.',
  },
];

const FaqPage: React.FC = () => {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${BRAND.domain}/faq#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BRAND.domain}/faq#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BRAND.domain}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'FAQ',
            item: `${BRAND.domain}/faq`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pb-24">
      <SEO
        title={`Frequently Asked Questions | ${BRAND.name}`}
        description={`Frequently asked questions about verified companion bookings, 24/7 hotel outcall, rates, and discretion at ${BRAND.name} in Noida & NCR.`}
        schema={pageSchema}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight size={13} />
          <span className="text-amber-600 font-bold">FAQ</span>
        </nav>
      </div>

      <FAQSection />
    </div>
  );
};

export default FaqPage;
