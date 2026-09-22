import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { BRAND, CONTACT } from '@/config/site';

const faqs = [
  {
    question: 'How do I book a verified escort or companion in Jaipur?',
    answer: `Booking is straightforward and discreet. Browse our verified categories (VIP Models, Russian Companions, College Models, Independent Escorts), choose your preferred companion or locality, and message our coordinator directly on WhatsApp at ${CONTACT.phoneDisplay}. We confirm real-time availability and send authentic photos.`
  },
  {
    question: 'Are the companion photos 100% genuine and verified?',
    answer: 'Yes. Every profile listed on Jaipur Escorts Club undergoes strict phone authentication and genuine photo verification before going live. The companion you select is the exact person who arrives.'
  },
  {
    question: 'Do you provide 24/7 hotel outcall service across Jaipur?',
    answer: 'Yes! Jaipur Escorts Club operates 24 Hours, 7 Days a week. Independent companions provide fast 30–45 minute doorstep outcalls to all 3-star, 4-star, and 5-star hotels and luxury private apartments in Sindhi Camp, MI Road, Vaishali Nagar, Malviya Nagar, C-Scheme, and Tonk Road.'
  },
  {
    question: 'Is there any advance payment or booking deposit required?',
    answer: 'No! We maintain a strict zero-advance policy to protect clients from online frauds. You never pay unfamiliar QR codes or deposit links. Payment is settled directly in cash or UPI with the companion upon arrival.'
  },
  {
    question: 'How is client privacy and confidentiality maintained?',
    answer: 'Complete discretion is our highest priority. We do not store personal chats, logs, or private data. Companions arrive dressed casually and professionally at your hotel lobby or room door with 100% confidentiality.'
  },
  {
    question: 'What are the standard booking rates in Jaipur?',
    answer: 'Rates vary depending on duration (short 1-2 hr date, half-night, or full-night VIP accompaniment) and model category. Standard rates range from ₹2,500 to ₹8,000+ for Indian models, with custom rates for foreign VIP models. WhatsApp us for transparent pricing.'
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-[#f8fafc] relative overflow-hidden text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-300 bg-rose-50 text-rose-900 text-xs font-black uppercase tracking-wider shadow-sm">
              <HelpCircle size={14} className="text-rose-600" /> FAQ & Guidance
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">
              Frequently Asked <br />
              <span className="text-rose-600">Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              Everything you need to know about 100% verified profiles, hotel outcalls, and safe WhatsApp coordination at {BRAND.name}.
            </p>
            
            <a 
              href={CONTACT.whatsapp1Href + '?text=' + encodeURIComponent('Hello Jaipur Escorts Club, I have a question regarding verified companion booking.')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-full transition-colors shadow-sm"
            >
              <MessageCircle size={16} />
              Ask on WhatsApp
            </a>
          </div>
          
          <div className="lg:col-span-7">
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-rose-600 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown 
                        size={18} 
                        className={`shrink-0 text-rose-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;