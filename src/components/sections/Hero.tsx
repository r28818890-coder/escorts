import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Phone, MessageCircle, Sparkles, CheckCircle2, Star, Users, Clock } from 'lucide-react';
import { CONTACT } from '@/config/site';

const heroStats = [
  { label: 'Happy Guests', value: '15,000+', icon: Users },
  { label: 'Open Always', value: '24/7', icon: Clock },
  { label: 'Google Rating', value: '4.9', icon: Star },
];

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-[#050505]">
      {/* Ambient Gold Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] md:w-[800px] h-[300px] md:h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(190, 18, 60,0.15),_transparent_70%)] pointer-events-none" />
      <div className="absolute top-40 -left-40 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#be123c] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-3 md:px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl flex flex-col items-center w-full"
        >
          {/* Top Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 mb-4 md:mb-8 px-3.5 py-1.5 rounded-full border border-[#e11d48]/30 bg-white/5 backdrop-blur-sm">
             <Sparkles size={12} className="text-[#e11d48]" />
             <span className="text-[10px] md:text-xs font-bold text-[#e11d48] uppercase tracking-widest">Top Spa in Noida • Sindhi Camp • Open 24 Hours</span>
          </motion.div>
          
          {/* Main Headline - Responsive Scaling */}
          <motion.h1 variants={itemVariants} className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.15] mb-4 md:mb-6">
            <span className="block text-[#faf9f6]">Massage Spa</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#be123c] via-[#e11d48] to-[#be123c] animate-shimmer" style={{ backgroundSize: '200% auto' }}>
              in Noida
            </span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-xs md:text-lg text-[#d4d4d4] max-w-2xl mb-6 md:mb-10 leading-relaxed px-2">
            Searching for a "spa near me"? Experience the best massage spa near Sindhi Camp & Noida Junction Railway Station. Certified therapists. Private sanitized suites. Open 24 Hours.
          </motion.p>

          {/* Trust Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:gap-8 mb-8 md:mb-12">
            {['Certified Therapists', 'Hygienic Private Suites', 'Open 24/7'].map((trust, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[#e5e5e5] text-xs md:text-base font-medium">
                <CheckCircle2 size={15} className="text-[#e11d48] shrink-0" />
                {trust}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0">
            <a href={CONTACT.phoneHref} className="btn-modern btn-modern-primary px-5 py-3 md:px-8 md:py-4 text-xs md:text-sm uppercase">
              <Phone size={16} />
              Call Now: {CONTACT.phoneDisplay}
            </a>
            <a href={CONTACT.whatsapp1Href + '?text=' + encodeURIComponent('Hello ECJ, I would like to check availability.')} target="_blank" rel="noopener noreferrer" className="btn-modern px-5 py-3 md:px-8 md:py-4 bg-[#25D366] text-white text-xs md:text-sm uppercase">
              <MessageCircle size={16} />
              Book on WhatsApp
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="mt-12 md:mt-20 grid grid-cols-3 gap-3 md:gap-6 w-full max-w-4xl px-2">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl border border-[#e11d48]/20 p-3 md:p-6 text-center shadow-xl">
                <div className="w-8 h-8 md:w-12 md:h-12 mx-auto rounded-full bg-[#1a1a1a] border border-[#333333] flex items-center justify-center mb-2">
                  <stat.icon size={16} className="text-[#e11d48]" />
                </div>
                <p className="text-lg md:text-3xl font-black text-[#e5e5e5] mb-0.5">{stat.value}</p>
                <p className="text-[9px] md:text-xs uppercase tracking-wider text-[#a3a3a3]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;