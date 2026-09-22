import React from 'react';

export const WatermarkBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 select-none flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* Single Clean Centered Screen-Fit Watermark */}
      <div className="transform -rotate-12 sm:-rotate-15 text-center px-4 max-w-full">
        <span className="block text-[7.5vw] sm:text-[6vw] md:text-[4.8vw] font-black uppercase tracking-[0.2em] text-slate-900/[0.09] font-sans leading-none whitespace-nowrap">
          JAIPUR ESCORTS CLUB
        </span>
      </div>
    </div>
  );
};

export default WatermarkBackground;
