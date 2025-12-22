import React from 'react';
import { PageData, PageId } from '../types';
import { CheckCircle } from 'lucide-react';

interface GuidePageProps {
  data: PageData;
  onBack?: (pageId: PageId) => void;
}

const ServiceGuidePage: React.FC<GuidePageProps> = ({ data, onBack }) => {
  const introSection = data.sections[0];
  const IntroIcon = (introSection as any)?.icon;

  return (
    <div className="w-full font-sans text-gray-800 animate-fadeIn bg-white">
      <div className="relative bg-[#0a0a0a] text-white py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto relative z-10 max-w-5xl text-center">
          {onBack && (
            <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
              <button
                type="button"
                onClick={() => onBack?.('home')}
                className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                <span className="inline-block rotate-180">&rarr;</span>
                <span>Back to Home</span>
              </button>
            </div>
          )}
          <div className="inline-block border border-gray-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
            Business Guide
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">{data.title}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {data.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-6xl">
        {introSection && (
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-100 rounded-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img
                  src={(introSection as any).image || 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800'}
                  alt={(introSection as any).title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transform hover:scale-110 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
            <div>
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full mb-8 shadow-lg shadow-black/20">
                {IntroIcon && <IntroIcon size={32} />}
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6">{(introSection as any).title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{(introSection as any).content}</p>
            </div>
          </div>
        )}

        <div className="space-y-32">
          {data.sections.slice(1).map((section, index) => {
            const s: any = section;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-16 items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                      Step 0{index + 1}
                    </span>
                    <div className="h-px bg-gray-200 flex-1"></div>
                  </div>
                  <h2 className="text-3xl font-serif font-bold mb-6">{s.title}</h2>

                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {s.content}
                  </p>

                  <div className="space-y-4">
                    {s.listItems?.map((item: string, i: number) => (
                      <div
                        key={i}
                        className="flex gap-4 items-start group p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      >
                        <div className="mt-1 text-black group-hover:scale-125 transition-transform duration-300">
                          <CheckCircle size={18} />
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-black transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 border-2 border-black translate-x-4 translate-y-4 rounded-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-500"></div>

                    <div className="rounded-xl overflow-hidden shadow-xl bg-gray-100 h-[350px] relative z-10">
                      <img
                        src={
                          s.image ||
                          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
                        }
                        alt={s.title}
                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transform hover:scale-110 transition-all duration-[800ms] ease-out"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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

export default ServiceGuidePage;


