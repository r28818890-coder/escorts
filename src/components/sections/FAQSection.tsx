import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { BRAND, CONTACT } from '@/config/site';

const faqs = [
  {
    question: 'How do I book a verified escort or companion in Noida & NCR?',
    answer: `Booking is straightforward and discreet. Browse our verified categories (VIP Models, Russian Companions, College Models, Independent Escorts), choose your preferred companion or sector, and message our coordinator directly on WhatsApp at ${CONTACT.phoneDisplay}. We confirm real-time availability and send authentic photos.`
  },
  {
    question: 'Are the companion photos 100% genuine and verified?',
    answer: `Yes. Every profile listed on ${BRAND.name} undergoes strict phone authentication and genuine photo verification before going live. The companion you select is the exact person who arrives.`
  },
  {
    question: 'Do you provide 24/7 hotel outcall service across Noida & NCR?',
    answer: `Yes! ${BRAND.name} operates 24 Hours, 7 Days a week. Independent companions provide fast 20–35 minute doorstep outcalls to all 3-star, 4-star, and 5-star hotels and luxury suites in Sector 18, Sector 62, Expressway (137, 128, 142), Greater Noida (Pari Chowk), and Indirapuram.`
  },
  {
    question: 'Is there any advance payment or booking deposit required in Noida?',
    answer: 'No! We maintain a strict zero-advance policy to protect clients from online frauds. You never pay unfamiliar QR codes or deposit links. Payment is settled directly in cash or UPI with the companion upon arrival.'
  },
  {
    question: 'How is client privacy and confidentiality maintained?',
    answer: 'Complete discretion is our highest priority. We do not store personal chats, logs, or private data. Companions arrive dressed casually and professionally at your hotel lobby or room door with 100% confidentiality.'
  },
  {
    question: 'What are the verification standards for companions in Noida?',
    answer: 'Every companion listed on Escorts Hub Noida undergoes strict phone and photo verification before publication. We verify identity and real-time photos to guarantee 100% authenticity for all 5-star hotel visits.'
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-[#f8fafc] relative overflow-hidden text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-300 bg-amber-50 text-amber-900 text-xs font-black uppercase tracking-wider shadow-sm">
              <HelpCircle size={14} className="text-amber-600" /> FAQ & Guidance
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">
              Frequently Asked <br />
              <span className="text-amber-600">Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              Everything you need to know about 100% verified profiles, hotel outcalls, and safe WhatsApp coordination at {BRAND.name}.
            </p>
            
            <a 
              href={CONTACT.whatsapp1Href + '?text=' + encodeURIComponent(`Hello ${BRAND.name}, I have a question regarding verified companion booking in Noida.`)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-full transition-colors shadow-sm"
            >
              <MessageCircle size={16} />
              Ask on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-4 px-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-sm text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-600' : ''}`} 
                    />
                  </button>

                  <div
                    className={`px-6 pb-4 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-3 leading-relaxed ${
                      isOpen ? 'block' : 'hidden'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
