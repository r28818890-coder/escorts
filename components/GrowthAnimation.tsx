import React, { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../importantConstants';
import { openWhatsAppWithMessage } from '../utils/whatsapp';

const GrowthAnimation: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const steps = [
    { id: 1, label: 'Registration' },
    { id: 2, label: 'Certification' },
    { id: 3, label: 'Funding' },
    { id: 4, label: 'Marketing' },
    { id: 5, label: 'Compliances' },
  ];

  const scrollingServices = [...SERVICES_LIST, ...SERVICES_LIST];

  const handleApplyClick = (context: string) => {
    if (typeof window !== 'undefined') {
      const baseMessage = `I want to apply via Business Nesta (${context}). Please call me.`;
      openWhatsAppWithMessage(baseMessage);
      window.dispatchEvent(new CustomEvent('open-lead-modal'));
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-16 md:py-24 bg-slate-50 overflow-visible md:overflow-hidden flex flex-col justify-center relative" 
      style={{ 
        contain: 'layout style paint',
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
    >
      <style>{`
        @keyframes drawLine {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes popIn {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes stamp {
          0% { transform: scale(2); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        
        .animate-draw-line { 
          animation: drawLine 1.5s ease-out forwards;
          will-change: width;
        }
        .animate-pop-in { 
          animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          will-change: transform, opacity;
          transform: translateZ(0);
        }
        .animate-slide-left { 
          animation: slideInLeft 0.8s ease-out forwards;
          will-change: transform, opacity;
          transform: translateZ(0);
        }
        .animate-slide-right { 
          animation: slideInRight 0.8s ease-out forwards;
          will-change: transform, opacity;
          transform: translateZ(0);
        }
        .animate-fade-up { 
          animation: fadeInUp 0.8s ease-out forwards;
          will-change: transform, opacity;
          transform: translateZ(0);
        }
        .animate-stamp { 
          animation: stamp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          will-change: transform, opacity;
          transform: translateZ(0);
        }
        .animate-float { 
          animation: float 4s ease-in-out infinite;
          will-change: transform;
          transform: translateZ(0);
        }
        .animate-float-delayed { 
          animation: float 4s ease-in-out infinite; 
          animation-delay: 2s;
          will-change: transform;
          transform: translateZ(0);
        }
        .animate-scroll-left { 
          animation: scrollLeft 60s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }
        .animate-scroll-right { 
          animation: scrollRight 60s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>

      <div className="hidden md:flex absolute inset-0 z-0 flex-col justify-center gap-16 opacity-[0.08] pointer-events-none select-none">
         <div className="w-full overflow-hidden">
            <div className="flex w-max animate-scroll-left gap-8">
              {scrollingServices.map((service, idx) => (
                <span key={`l-${idx}`} className="text-4xl font-bold uppercase text-slate-800 whitespace-nowrap">
                  {service.title} <span className="text-emerald-500 mx-4">•</span>
                </span>
              ))}
            </div>
         </div>
         <div className="w-full overflow-hidden">
            <div className="flex w-max animate-scroll-right gap-8">
              {[...scrollingServices].reverse().map((service, idx) => (
                <span key={`r-${idx}`} className="text-4xl font-bold uppercase text-slate-800 whitespace-nowrap">
                  {service.title} <span className="text-emerald-500 mx-4">•</span>
                </span>
              ))}
            </div>
         </div>
         <div className="w-full overflow-hidden">
            <div className="flex w-max animate-scroll-left gap-8">
              {scrollingServices.map((service, idx) => (
                <span key={`l2-${idx}`} className="text-4xl font-bold uppercase text-slate-800 whitespace-nowrap">
                  {service.title} <span className="text-emerald-500 mx-4">•</span>
                </span>
              ))}
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <h2 className={`text-3xl sm:text-4xl md:text-6xl text-slate-800 font-light mb-3 md:mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Growth with <span className="font-serif italic text-emerald-600">Business Nesta</span>
          </h2>
          <p className={`text-slate-500 text-sm md:text-lg transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Grow with <span className="font-serif italic font-bold">Business Nesta</span> in few steps
          </p>
        </div>

        <div className="relative mb-12 md:mb-24 max-w-5xl mx-auto px-2 sm:px-4">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 md:left-2 md:right-2 h-1 bg-slate-200 -translate-y-1/2 rounded-full overflow-hidden">
             <div className={`h-full bg-emerald-400 rounded-full ${inView ? 'animate-draw-line' : 'w-0'}`} style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Steps Container - Horizontal scroll on mobile, flex on desktop */}
          <div className="relative flex md:justify-between w-full overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide">
            <div className="flex md:justify-between w-full min-w-max md:min-w-0 gap-1 sm:gap-2 md:gap-4 px-1 md:px-0">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center group flex-shrink-0" style={{ minWidth: '60px' }}>
                  <div 
                    className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-4 border-slate-200 z-10 flex items-center justify-center shadow-md transition-all duration-300 
                    ${inView ? 'border-emerald-400 scale-100 opacity-100 animate-pop-in' : 'scale-0 opacity-0'}`}
                    style={{ animationDelay: `${1 + index * 0.3}s` }}
                  >
                    <Check className="w-5 h-5 md:w-8 md:h-8 text-emerald-600" strokeWidth={3} />
                  </div>
                  <span 
                    className={`mt-2 md:mt-4 font-medium text-slate-600 text-[10px] xs:text-xs md:text-sm tracking-wide bg-white px-1.5 md:px-2 py-0.5 md:py-1 rounded-md shadow-sm opacity-0 transition-all duration-500 text-center whitespace-nowrap ${inView ? 'opacity-100 translate-y-0' : 'translate-y-4'}`}
                    style={{ transitionDelay: `${1.2 + index * 0.3}s` }}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[260px] md:min-h-[400px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          <div 
             className={`relative z-10 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-3xl p-8 md:p-16 text-center shadow-xl max-w-3xl w-full
             ${inView ? 'animate-pop-in' : 'opacity-0 scale-90'}`}
             style={{ animationDelay: '2.5s' }}
          >
             <h3 className="text-3xl md:text-6xl font-extrabold text-slate-800 mb-2 leading-tight">
               70+ <span className="text-slate-400 font-light text-3xl md:text-5xl">CRORES</span>
             </h3>
             <p className="text-slate-500 tracking-[0.2em] uppercase text-xs md:text-base mb-2">DISBURSED TO</p>
             <h4 className="text-xl md:text-4xl font-bold text-slate-800">500+ businesses</h4>
          </div>

          {/* Floating cards for desktop */}
          <div 
            className={`hidden md:block absolute left-0 md:left-10 top-0 md:top-10 bg-[#e6f4ea] p-4 md:p-6 rounded-xl shadow-lg border border-green-100 max-w-[200px] md:max-w-[260px] transform rotate-[-5deg] z-20
            ${inView ? 'animate-slide-left animate-float' : 'opacity-0 -translate-x-20'}`}
            style={{ animationDelay: '3s' }}
          >
             <div className="flex items-center gap-2 mb-2">
               <div className="bg-green-500 rounded-full p-1"><Check size={12} className="text-white" /></div>
               <span className="text-xs font-bold text-green-800 uppercase">Success</span>
             </div>
             <p className="text-sm md:text-lg font-bold text-slate-800 leading-tight mb-2">
               <span className="text-green-600 text-2xl block">+ STARTUPS</span>
               got Startup India
             </p>
             <div className={`bg-amber-100 border-2 border-amber-400 text-amber-800 font-serif font-bold px-3 py-1 text-center rounded transform -rotate-2 shadow-sm ${inView ? 'animate-stamp' : 'opacity-0'}`} style={{ animationDelay: '3.5s' }}>
                CERTIFICATE
             </div>
             <p className="mt-2 text-3xl font-extrabold text-slate-800">7 Days</p>
             <button
               type="button"
              onClick={() => handleApplyClick('Startup India fast-track')}
               className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white text-xs md:text-sm font-bold py-2 rounded-lg shadow-md transition-colors flex items-center justify-center gap-1"
             >
                Apply Now <ArrowRight size={14} />
             </button>
          </div>

          <div 
             className={`hidden md:block absolute right-0 md:right-10 top-10 md:top-0 bg-[#e0f2fe] p-4 md:p-6 rounded-xl shadow-lg border border-blue-100 max-w-[200px] md:max-w-[240px] transform rotate-[3deg] z-20
             ${inView ? 'animate-slide-right animate-float-delayed' : 'opacity-0 translate-x-20'}`}
             style={{ animationDelay: '3.2s' }}
          >
             <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded inline-block mb-2 font-bold">TAX HOLIDAY</div>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">BUSINESSES GOT TAX HOLIDAY</p>
             <div className="bg-white rounded-lg py-2 px-4 text-center shadow-sm">
                <span className="text-2xl font-bold text-emerald-600">3 Years</span>
             </div>
             <button
               type="button"
              onClick={() => handleApplyClick('Tax holiday claim')}
               className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs md:text-sm font-bold py-2 rounded-lg shadow-md transition-colors flex items-center justify-center gap-1"
             >
                Apply Now <ArrowRight size={14} />
             </button>
          </div>
        </div>

        {/* Simplified mobile CTAs under the main card */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:hidden">
          <div className="bg-[#e6f4ea] p-4 rounded-xl shadow-lg border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-green-500 rounded-full p-1"><Check size={12} className="text-white" /></div>
              <span className="text-xs font-bold text-green-800 uppercase">Success</span>
            </div>
            <p className="text-sm font-bold text-slate-800 leading-tight mb-2">
              <span className="text-green-600 text-xl block">+ STARTUPS</span>
              got Startup India Certificate in 7 days
            </p>
            <button
              type="button"
              onClick={() => handleApplyClick('Startup India fast-track (mobile)')}
              className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2 rounded-lg shadow-md transition-colors flex items-center justify-center gap-1"
            >
              Apply Now <ArrowRight size={12} />
            </button>
          </div>

          <div className="bg-[#e0f2fe] p-4 rounded-xl shadow-lg border border-blue-100">
            <div className="bg-slate-900 text-white text-[10px] px-2 py-1 rounded inline-block mb-2 font-bold">TAX HOLIDAY</div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
              BUSINESSES GOT TAX HOLIDAY FOR 3 YEARS
            </p>
            <button
              type="button"
              onClick={() => handleApplyClick('Tax holiday claim (mobile)')}
              className="mt-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 rounded-lg shadow-md transition-colors flex items-center justify-center gap-1"
            >
              Apply Now <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthAnimation;


