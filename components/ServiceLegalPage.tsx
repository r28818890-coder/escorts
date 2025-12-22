import React from 'react';
import { PageData, PageId } from '../types';
import { FileText } from 'lucide-react';

interface LegalPageProps {
  data: PageData;
  onBack?: (pageId: PageId) => void;
}

const ServiceLegalPage: React.FC<LegalPageProps> = ({ data, onBack }) => {
  return (
    <div className="w-full font-sans text-gray-800 animate-fadeIn bg-white">
      <div className="py-24 px-6 text-center border-b border-gray-100 bg-gray-50">
        <div className="flex flex-col items-center gap-3 mb-6 text-gray-400">
          {onBack && (
            <button
              type="button"
              onClick={() => onBack?.('home')}
              className="self-start md:self-center inline-flex items-center gap-2 text-xs md:text-sm font-medium text-gray-400 hover:text-gray-700 transition-colors"
            >
              <span className="inline-block rotate-180">&rarr;</span>
              <span>Back to Home</span>
            </button>
          )}
          <FileText size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">Legal Document</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-black">
          {data.title}
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto font-light">
          {data.subtitle}
        </p>
        <div className="mt-8 text-xs text-gray-400">Last updated: January 2025</div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="bg-white">
          {data.sections.map((section, index) => {
            const s: any = section;
            return (
              <div key={index} className="mb-16 border-b border-gray-100 pb-12 last:border-0">
                <div className="flex items-start gap-6">
                  <div className="hidden md:block text-4xl font-serif font-bold text-gray-200">
                    {s.sectionNumber || `0${index + 1}`}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-black mb-6">{s.title}</h3>

                    <div className="text-gray-600 leading-relaxed text-lg font-light space-y-4">
                      {Array.isArray(s.content) ? (
                        <ul className="space-y-4 pl-4 border-l-2 border-gray-200">
                          {s.content.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{s.content}</p>
                      )}

                      {s.subSections && s.subSections.length > 0 && (
                        <div className="mt-8 grid gap-8 bg-gray-50 p-8 rounded-xl">
                          {s.subSections.map((sub: any, i: number) => (
                            <div key={i}>
                              <h4 className="font-bold text-black mb-2 text-sm uppercase tracking-wide">
                                {sub.title}
                              </h4>
                              <p className="text-gray-500 text-sm">{sub.content}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
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


