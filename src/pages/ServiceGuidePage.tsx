import React from 'react';
import { PageData, PageId } from '@/types';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND, CONTACT } from '@/config/site';

interface GuidePageProps {
  data: PageData;
  onBack?: (pageId: PageId) => void;
}

const ServiceGuidePage: React.FC<GuidePageProps> = ({ data, onBack }) => {
  const introSection = data.sections[0];
  const IntroIcon = (introSection as any)?.icon;

  return (
    <div className="w-full font-body text-[#0f172a] animate-fade-up bg-[#f8fafc] pb-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-slate-100 to-[#f8fafc] pt-12 pb-16 px-6 overflow-hidden border-b border-slate-200">
        <div className="container mx-auto relative z-10 max-w-5xl text-center">
          {onBack && (
            <div className="flex justify-center mb-6">
              <button
                type="button"
                onClick={() => onBack('home')}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-slate-500 hover:text-rose-600 transition-colors uppercase cursor-pointer"
              >
                <span className="inline-block rotate-180"><ArrowRight size={14}/></span>
                <span>Back to Directory</span>
              </button>
            </div>
          )}
          <div className="inline-block border border-rose-300 bg-rose-50 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] text-rose-900 mb-6 shadow-sm">
            Category Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tight text-slate-900">
            {data.title}
          </h1>
          <p className="text-xs md:text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            {data.subtitle}
          </p>

          <div className="mt-8">
            <a 
              href={CONTACT.whatsapp1Href + '?text=' + encodeURIComponent(`Hello ${BRAND.name}, I want to inquire about ${data.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white font-bold uppercase tracking-widest text-xs rounded-full shadow-md hover:brightness-110 transition-transform cursor-pointer"
            >
              <MessageCircle size={16} />
              Book {data.title} on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {introSection && (
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-2xl overflow-hidden shadow-sm h-[360px] border border-slate-200 relative">
              <img
                src={(introSection as any).image || 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'}
                alt={(introSection as any).title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="w-14 h-14 bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center rounded-2xl mb-6 shadow-sm">
                {IntroIcon && <IntroIcon size={28} />}
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-slate-900">{(introSection as any).title}</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{(introSection as any).content}</p>
            </div>
          </div>
        )}

        <div className="space-y-16">
          {data.sections.slice(1).map((section, index) => {
            const s: any = section;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-12 items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-black tracking-[0.2em] text-rose-900 bg-rose-50 border border-rose-300 px-2.5 py-0.5 rounded-full uppercase">
                      Section 0{index + 1}
                    </span>
                    <div className="h-px bg-slate-200 flex-1"></div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-900">{s.title}</h3>

                  <p className="text-slate-600 mb-6 leading-relaxed text-xs sm:text-sm">
                    {s.content}
                  </p>

                  <div className="space-y-3">
                    {s.listItems?.map((item: string, i: number) => (
                      <div
                        key={i}
                        className="flex gap-3 items-start p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs"
                      >
                        <div className="mt-0.5 text-emerald-600 shrink-0">
                          <CheckCircle2 size={16} />
                        </div>
                        <span className="text-slate-800 font-medium text-xs">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 h-[300px]">
                    <img
                      src={
                        s.image ||
                        'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80'
                      }
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white py-14 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-black mb-3">Book Verified Companions in Jaipur</h3>
        <p className="max-w-xl mx-auto mb-6 text-xs sm:text-sm text-rose-100 font-medium">100% photo verified models and discreet 24/7 doorstep hotel outcall visits.</p>
        <div className="flex justify-center">
          <a
            href={CONTACT.whatsapp1Href + '?text=' + encodeURIComponent(`Hello Jaipur Escorts Club, I want to book a companion for ${data.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white text-slate-950 font-bold uppercase tracking-wider text-xs rounded-full hover:bg-slate-100 transition-colors shadow-sm flex items-center gap-2"
          >
            <MessageCircle size={16} className="text-emerald-600" /> WhatsApp Coordination
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceGuidePage;
