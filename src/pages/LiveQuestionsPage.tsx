import React, { useEffect, useState } from 'react';
import { getLiveQAs, LiveQA, seedInitialQAs } from '@/utils/liveQAStorage';
import SEO from '@/components/common/SEO';
import { MessageSquare, Sparkles } from 'lucide-react';
import { BRAND } from '@/config/site';

const LiveQuestionsPage: React.FC = () => {
  const [qas, setQas] = useState<LiveQA[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    seedInitialQAs();
    setQas(getLiveQAs());
  }, []);

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pt-12 pb-20">
      <SEO 
        title={`Live Client Q&A | ${BRAND.name}`}
        description={`Read real questions from clients about verified companion booking, hotel outcalls, rates, and discretion at ${BRAND.name}.`}
        keywords="escort questions, booking rates noida, hotel outcall queries, we noida escorts reviews"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": qas.map(qa => ({
            "@type": "Question",
            "name": qa.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": qa.answer
            }
          }))
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-300 text-rose-900 text-xs font-black tracking-wide uppercase mb-4 shadow-sm">
            <Sparkles size={14} className="text-rose-600" />
            Live Client Q&A
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
            Real Questions, <span className="text-rose-600">Real Answers</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore client inquiries about verified models, hotel outcalls, and safe WhatsApp booking in Noida.
          </p>
        </div>

        <div className="space-y-4">
          {qas.map((qa) => (
            <div key={qa.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-rose-400 transition-colors">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0 mt-1">
                  <MessageSquare size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-black text-slate-900 mb-2">
                    {qa.question}
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                      {qa.answer}
                    </p>
                  </div>
                  <div className="mt-3 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Verified Q&A
                  </div>
                </div>
              </div>
            </div>
          ))}

          {qas.length === 0 && (
            <div className="text-center py-16 border border-slate-200 bg-white rounded-2xl">
              <p className="text-slate-500 text-xs">No questions recorded yet. Ask our AI Assistant a question!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveQuestionsPage;
