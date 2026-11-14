import React, { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '@/config/site';
import { openWhatsAppWithMessage } from '@/utils/whatsapp';

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
    { id: 1, label: 'Book' },
    { id: 2, label: 'Arrive' },
    { id: 3, label: 'Relax' },
    { id: 4, label: 'Restore' },
    { id: 5, label: 'Repeat' },
  ];

  const scrollingServices = [...SERVICES_LIST, ...SERVICES_LIST];

  const handleApplyClick = (context: string) => {
    if (typeof window !== 'undefined') {
      const baseMessage = `Hello Noida Spa, I would like to inquire about ${context}.`;
      openWhatsAppWithMessage(baseMessage);
      window.dispatchEvent(new CustomEvent('open-lead-modal'));
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#050505] overflow-visible md:overflow-hidden flex flex-col justify-center relative"
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
        @keyframes floatAnim {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes scrollLeft2 {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight2 {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .ga-animate-draw-line {
          animation: drawLine 1.5s ease-out forwards;
          will-change: width;
        }
        .ga-animate-pop-in {
          animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          will-change: transform, opacity;
          transform: translateZ(0);
        }
        .ga-animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
          will-change: transform, opacity;
          transform: translateZ(0);
        }
        .ga-animate-stamp {
          animation: stamp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          will-change: transform, opacity;
          transform: translateZ(0);
        }
        .ga-animate-float-delayed {
          animation: floatAnim 4s ease-in-out infinite;
          animation-delay: 2s;
          will-change: transform;
          transform: translateZ(0);
        }
        .ga-scroll-left {
          animation: scrollLeft2 60s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }
        .ga-scroll-right {
          animation: scrollRight2 60s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>

      {/* Scrolling background text — dark theme version */}
      <div className="hidden md:flex absolute inset-0 z-0 flex-col justify-center gap-16 opacity-[0.04] pointer-events-none select-none">
        <div className="w-full overflow-hidden">
          <div className="flex w-max ga-scroll-left gap-8">
            {scrollingServices.map((service, idx) => (
              <span key={`l-${idx}`} className="text-4xl font-bold uppercase text-[#e11d48] whitespace-nowrap">
                {service.title} <span className="text-[#be123c] mx-4">•</span>
              </span>
            ))}
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="flex w-max ga-scroll-right gap-8">
            {[...scrollingServices].reverse().map((service, idx) => (
              <span key={`r-${idx}`} className="text-4xl font-bold uppercase text-[#e11d48] whitespace-nowrap">
                {service.title} <span className="text-[#be123c] mx-4">•</span>
              </span>
            ))}
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="flex w-max ga-scroll-left gap-8">
            {scrollingServices.map((service, idx) => (
              <span key={`l2-${idx}`} className="text-4xl font-bold uppercase text-[#e11d48] whitespace-nowrap">
                {service.title} <span className="text-[#be123c] mx-4">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <h2 className={`text-3xl sm:text-4xl md:text-6xl text-[#e5e5e5] font-light mb-3 md:mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Your Spa Journey at <span className="font-serif italic text-[#e11d48]">Noida Spa</span>
          </h2>
          <p className={`text-[#a3a3a3] text-sm md:text-lg transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Book, unwind and renew with our luxury Noida wellness experiences.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="relative mb-12 md:mb-24 max-w-5xl mx-auto px-2 sm:px-4">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 md:left-2 md:right-2 h-1 bg-[#1a1a1a] -translate-y-1/2 rounded-full overflow-hidden">
            <div className={`h-full bg-[#e11d48] rounded-full ${inView ? 'ga-animate-draw-line' : 'w-0'}`} style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Steps Container */}
          <div className="relative flex md:justify-between w-full overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
            <div className="flex md:justify-between w-full min-w-max md:min-w-0 gap-1 sm:gap-2 md:gap-4 px-1 md:px-0">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center group flex-shrink-0" style={{ minWidth: '60px' }}>
                  <div
                    className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#0a0a0a] border-4 border-[#333333] z-10 flex items-center justify-center shadow-md transition-all duration-300
                    ${inView ? 'border-[#e11d48] scale-100 opacity-100 ga-animate-pop-in' : 'scale-0 opacity-0'}`}
                    style={{ animationDelay: `${1 + index * 0.3}s` }}
                  >
                    <Check className="w-5 h-5 md:w-8 md:h-8 text-[#e11d48]" strokeWidth={3} />
                  </div>
                  <span
                    className={`mt-2 md:mt-4 font-medium text-[#e5e5e5] text-[10px] xs:text-xs md:text-sm tracking-wide bg-[#111111] border border-[#e11d48]/20 px-1.5 md:px-2 py-0.5 md:py-1 rounded-md shadow-sm opacity-0 transition-all duration-500 text-center whitespace-nowrap ${inView ? 'opacity-100 translate-y-0' : 'translate-y-4'}`}
                    style={{ transitionDelay: `${1.2 + index * 0.3}s` }}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Card + Floating Card */}
        <div className="relative min-h-[260px] md:min-h-[400px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          <div
            className={`relative z-10 bg-[#0a0a0a] border border-[#e11d48]/30 rounded-3xl p-8 md:p-16 text-center shadow-2xl shadow-[#e11d48]/5 max-w-3xl w-full
            ${inView ? 'ga-animate-pop-in' : 'opacity-0 scale-90'}`}
            style={{ animationDelay: '2.5s' }}
          >
            <h3 className="text-3xl md:text-6xl font-extrabold text-[#e5e5e5] mb-2 leading-tight">
              15,000+ <span className="text-[#a3a3a3] font-light text-3xl md:text-5xl">GUESTS</span>
            </h3>
            <p className="text-[#a3a3a3] tracking-[0.2em] uppercase text-xs md:text-base mb-2">SERVED IN NOIDA &amp; NCR</p>
            <h4 className="text-xl md:text-4xl font-bold text-[#e5e5e5]">Luxury spa experiences</h4>
            <div className="flex items-center justify-center gap-2 mb-2 mt-3">
              <div className="bg-[#e11d48] rounded-full p-1"><Check size={12} className="text-black" /></div>
              <span className="text-xs font-bold text-[#e11d48] uppercase">Relaxation</span>
            </div>
            <p className="text-sm md:text-lg font-bold text-[#e5e5e5] leading-tight mb-2">
              <span className="text-[#e11d48] text-2xl block">Private Spa</span>
              suites &amp; rituals
            </p>
            <div
              className={`bg-[#e11d48]/10 border-2 border-[#e11d48]/50 text-[#e11d48] font-serif font-bold px-3 py-1 text-center rounded transform -rotate-2 shadow-sm ${inView ? 'ga-animate-stamp' : 'opacity-0'}`}
              style={{ animationDelay: '3.5s' }}
            >
              WELLNESS
            </div>
            <p className="mt-2 text-3xl font-extrabold text-[#e5e5e5]">24/7 Access</p>
            <button
              type="button"
              onClick={() => handleApplyClick('Book a private spa suite')}
              className="mt-4 w-full bg-gradient-to-r from-[#be123c] to-[#e11d48] hover:from-[#b45309] hover:to-[#be123c] text-black text-xs md:text-sm font-bold py-3 rounded-lg shadow-md transition-all flex items-center justify-center gap-1"
            >
              Book Now <ArrowRight size={14} />
            </button>
          </div>

          {/* Floating card — desktop only */}
          <div
            className={`hidden md:block absolute right-0 md:right-10 top-10 md:top-0 bg-[#111111] border border-[#e11d48]/30 p-4 md:p-6 rounded-xl shadow-2xl max-w-[200px] md:max-w-[240px] transform rotate-[3deg] z-20
            ${inView ? 'ga-animate-slide-right ga-animate-float-delayed' : 'opacity-0 translate-x-20'}`}
            style={{ animationDelay: '3.2s' }}
          >
            <div className="bg-[#e11d48] text-black text-xs px-2 py-1 rounded inline-block mb-2 font-bold">SPA RITUALS</div>
            <p className="text-xs font-bold text-[#a3a3a3] uppercase tracking-wider mb-2">WELLNESS PACKAGES DESIGNED FOR YOU</p>
            <div className="bg-[#0a0a0a] border border-[#e11d48]/20 rounded-lg py-2 px-4 text-center shadow-sm">
              <span className="text-2xl font-bold text-[#e11d48]">90 min</span>
            </div>
            <button
              type="button"
              onClick={() => handleApplyClick('Reserve a spa ritual')}
              className="mt-4 w-full bg-gradient-to-r from-[#be123c] to-[#e11d48] hover:from-[#b45309] hover:to-[#be123c] text-black text-xs font-bold py-2 rounded-lg shadow-md transition-all flex items-center justify-center gap-1"
            >
              Book Now <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Mobile CTA cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:hidden">
          <div className="bg-[#0a0a0a] border border-[#e11d48]/20 p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#e11d48] rounded-full p-1"><Check size={12} className="text-black" /></div>
              <span className="text-xs font-bold text-[#e11d48] uppercase">Wellness</span>
            </div>
            <p className="text-sm font-bold text-[#e5e5e5] leading-tight mb-2">
              <span className="text-[#e11d48] text-xl block">Private Spa</span>
              suites available now
            </p>
            <button
              type="button"
              onClick={() => handleApplyClick('Book private spa suite (mobile)')}
              className="mt-3 w-full bg-gradient-to-r from-[#be123c] to-[#e11d48] text-black text-xs font-bold py-2 rounded-lg shadow-md transition-all flex items-center justify-center gap-1"
            >
              Book Now <ArrowRight size={12} />
            </button>
          </div>

          <div className="bg-[#0a0a0a] border border-[#e11d48]/20 p-4 rounded-xl shadow-lg">
            <div className="bg-[#e11d48] text-black text-[10px] px-2 py-1 rounded inline-block mb-2 font-bold">SPA RITUALS</div>
            <p className="text-[11px] font-bold text-[#a3a3a3] uppercase tracking-wider mb-2">
              PREMIUM THERAPIES FROM ₹999
            </p>
            <button
              type="button"
              onClick={() => handleApplyClick('Reserve a spa ritual (mobile)')}
              className="mt-2 w-full bg-gradient-to-r from-[#be123c] to-[#e11d48] text-black text-xs font-bold py-2 rounded-lg shadow-md transition-all flex items-center justify-center gap-1"
            >
              Book Now <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthAnimation;
