import React from 'react';
import { Star, CheckCircle2, ShieldCheck } from 'lucide-react';

const ReviewWidget: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-2 py-4 px-2 flex-wrap text-xs">
      {/* Google Reviews Block */}
      <div className="flex items-center gap-2 bg-white/5 border border-[#e11d48]/20 px-3 py-2 rounded-xl shadow-md backdrop-blur-sm">
        <div className="flex items-center justify-center w-7 h-7 bg-white rounded-full p-1 shrink-0">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-white text-xs md:text-sm leading-none">4.9</span>
            <div className="flex text-[#e11d48]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={11} fill="currentColor" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1 mt-0.5 text-[9px] md:text-xs text-[#a3a3a3]">
            <span>Google Reviews</span>
            <CheckCircle2 size={10} className="text-[#34A853]" />
          </div>
        </div>
      </div>

      <div className="hidden sm:block text-[#333333]">|</div>

      {/* Certified Therapists Block */}
      <div className="flex items-center gap-2 bg-white/5 border border-[#e11d48]/20 px-3 py-2 rounded-xl shadow-md backdrop-blur-sm">
        <div className="flex items-center justify-center w-7 h-7 bg-[#e11d48]/10 rounded-full text-[#e11d48] shrink-0">
          <ShieldCheck size={14} />
        </div>
        <div>
          <div className="font-bold text-white text-xs leading-tight">Certified Therapists</div>
          <div className="flex items-center gap-1 text-[9px] md:text-xs text-[#a3a3a3]">
            <span>Verified Staff</span>
          </div>
        </div>
      </div>

      <div className="hidden sm:block text-[#333333]">|</div>

      {/* 15,000+ Guests Block */}
      <div className="flex items-center gap-2 bg-white/5 border border-[#e11d48]/20 px-3 py-2 rounded-xl shadow-md backdrop-blur-sm">
        <div className="flex items-center justify-center w-7 h-7 bg-[#e11d48]/10 rounded-full text-[#e11d48] text-xs font-black shrink-0">
          
        </div>
        <div>
          <div className="font-bold text-white text-xs leading-none">15,000+</div>
          <div className="text-[9px] md:text-xs text-[#a3a3a3] mt-0.5">Happy Guests</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewWidget;
