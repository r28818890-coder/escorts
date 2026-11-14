import React, { useEffect } from 'react';
import { PageData, PageId } from '@/types';
import { ArrowLeft, Shield, FileText } from 'lucide-react';
import SEO from '@/components/common/SEO';
import { BRAND } from '@/config/site';

interface LegalPageProps {
  data: PageData;
  onBack?: (pageId: PageId) => void;
}

const ServiceLegalPage: React.FC<LegalPageProps> = ({ data, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <div className="w-full font-body text-[#0f172a] bg-[#f8fafc] min-h-screen pb-24">
      <SEO
        title={`${data.title} | ${BRAND.name}`}
        description={`${data.subtitle} Official policies and terms of service for ${BRAND.name}.`}
      />
      {/* Hero Section */}
      <div className="pt-10 pb-12 px-4 bg-gradient-to-b from-slate-100 to-[#f8fafc] border-b border-slate-200 text-center">
        <div className="container mx-auto max-w-4xl relative z-10">
          {onBack && (
            <div className="flex justify-center mb-6">
              <button
                type="button"
                onClick={() => onBack('home')}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-rose-600 uppercase tracking-wider transition-colors cursor-pointer"
              >
                <ArrowLeft size={14} /> Back to Home
              </button>
            </div>
          )}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-300 bg-rose-50 text-rose-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <FileText size={14} className="text-rose-600" /> Legal Information
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
            {data.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl">
        <div className="space-y-8">
          {data.sections.map((section, index) => {
            const SectionIcon = (section as any).icon;
            const content = (section as any).content;
            return (
              <div key={index} className="flex flex-col md:flex-row gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 shrink-0">
                  {SectionIcon ? <SectionIcon size={20} /> : <Shield size={20} />}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-slate-900 mb-3">{section.title}</h3>
                  {Array.isArray(content) ? (
                    <ul className="space-y-2.5">
                      {content.map((item, i) => (
                        <li key={i} className="text-slate-600 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                          <span className="text-rose-600 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{content}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceLegalPage;
