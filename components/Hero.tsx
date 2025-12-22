import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const heroStats = [
  { label: 'Clients Onboarded', value: '1,200+', meta: '+24% YoY' },
  { label: 'Cities Served', value: '80+', meta: 'Tier I • II • III' },
  { label: 'Partners', value: '150+', meta: 'Mentors & Advisors' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-white via-[#f7f7f4] to-white">
      {/* Background Ornaments */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-20 top-10 w-72 h-72 bg-orange-200/30 blur-[110px] rounded-full" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#c9f1e7]/60 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')] opacity-[0.08]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-black/5 uppercase tracking-[0.25em] text-[11px] font-semibold text-gray-800">
             <Sparkles size={14} className="text-orange-500" />
             <span>2025 spotlight</span>
          </div>
          
          <div className="relative inline-block">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-orange-200 via-transparent to-green-200 opacity-70" />
            <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-4 tracking-tight uppercase leading-[0.9]">
              BUSINESS<br/>
              NESTA LLP
            </h1>
          </div>
          
          <h2 className="text-xl md:text-2xl text-gray-600 tracking-[0.25em] uppercase mb-8 font-light">
            Boosting New Enterprises Securing Total Assistance
          </h2>

          <p className="font-serif italic text-3xl md:text-5xl text-gray-800 mb-10">
            from startup to Scale up...
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-5 mt-4"
        >
          <button className="px-8 py-4 bg-black text-white rounded-lg font-bold text-sm tracking-[0.2em] hover:bg-gray-800 transition-all shadow-2xl flex items-center gap-3 group uppercase">
            Guided by Business Nesta
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('open-lead-modal'));
              }
            }}
            className="px-8 py-4 bg-white/90 border border-black text-black rounded-lg font-bold text-sm tracking-[0.2em] hover:bg-gray-50 transition-colors shadow-sm uppercase"
          >
            Contact Us
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-white/90 backdrop-blur rounded-2xl border border-black/5 p-6 text-left shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">{stat.label}</p>
              <p className="text-4xl font-black text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-2">{stat.meta}</p>
            </div>
          ))}
        </motion.div>
        
        {/* Keywords from PDF */}
        <div className="mt-16 w-full overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            className="flex gap-12 text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap"
          >
            <span>Vision • Planning • Foundation • Resource • Sustainability • Success</span>
            <span>Vision • Planning • Foundation • Resource • Sustainability • Success</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;