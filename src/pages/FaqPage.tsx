import React from 'react';
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
  const faqSchema = {
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
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pb-24">
      <SEO
        title={`Frequently Asked Questions | ${BRAND.name}`}
        description={`Frequently asked questions about verified companion bookings, 24/7 hotel outcall, rates, and discretion at ${BRAND.name} in Noida & NCR.`}
        schema={faqSchema}
      />
      <FAQSection />
    </div>
  );
};

export default FaqPage;
