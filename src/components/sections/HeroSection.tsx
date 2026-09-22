import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Sparkles, Crown, Users, Star, Clock } from 'lucide-react';
import logoImage from '@/assets/Logo_page-0001.webp';

/**
 * HeroSection — alternative hero used for A/B testing or secondary landing pages.
 * Primary hero is Hero.tsx used in Home.tsx.
 */
const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const heroStats = [
    { icon: Users, label: 'Happy Guests', value: '15,000+' },
    { icon: Star, label: 'Google Rating', value: '4.9' },
    { icon: Clock, label: 'Open Always', value: '24/7' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">

      {/* Ambient Gold Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(190, 18, 60,0.15),_transparent_70%)] pointer-events-none" />
      <div className="absolute top-40 -left-40 w-[400px] h-[400px] bg-[#be123c] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute top-60 -right-40 w-[500px] h-[500px] bg-[#e11d48] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-[#e11d48]/50 overflow-hidden shadow-[0_0_30px_rgba(225, 29, 72,0.25)]">
              <img
                src="/jaipur_escorts_club_logo.jpg"
                alt="Jaipur Escorts Club Logo"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-[#e11d48]/30 bg-white/5 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-[#e11d48]" />
            <span className="text-sm font-bold text-[#e11d48] tracking-widest uppercase">Sindhi Camp, Jaipur · Open 24 Hours</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6"
          >
            <span className="block text-[#faf9f6]">Luxury Thai Spa</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#be123c] via-[#e11d48] to-[#be123c]">
              in Jaipur
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-[#a3a3a3] mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Certified therapists. Private suites. 9 signature therapies. Open 24 hours at Sindhi Camp — just minutes from Jaipur Railway Station.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="tel:+917357678356"
              className="px-8 py-4 bg-gradient-to-r from-[#be123c] to-[#e11d48] text-black rounded-lg font-bold text-sm tracking-widest hover:scale-105 transition-transform shadow-lg shadow-[#be123c]/20 flex items-center justify-center gap-3 uppercase"
            >
              <Phone size={18} />
              Call Now: 73576 78356
            </a>
            <a
              href="https://wa.me/917357678356?text=Hello%20Jaipur Spa%20SPA%2C%20I%20would%20like%20to%20book%20a%20therapy%20session.%20Please%20confirm%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white rounded-lg font-bold text-sm tracking-widest hover:scale-105 transition-transform shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-3 uppercase"
            >
              <MessageCircle size={18} />
              Book on WhatsApp
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-lead-modal'))}
              className="px-8 py-4 border border-[#e11d48]/50 text-[#e11d48] bg-white/5 backdrop-blur-sm rounded-lg font-bold text-sm tracking-widest hover:bg-[#e11d48]/10 transition-colors flex items-center justify-center gap-3 uppercase"
            >
              <Crown size={18} />
              Book Appointment
            </button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {heroStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-[#e11d48]/20 p-6 text-center shadow-2xl hover:border-[#e11d48]/50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#1a1a1a] border border-[#333333] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon size={20} className="text-[#e11d48]" />
                </div>
                <p className="text-3xl font-black text-[#e5e5e5] mb-1">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-[#a3a3a3]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505]/80 to-transparent" />
    </section>
  );
};

export default HeroSection;
