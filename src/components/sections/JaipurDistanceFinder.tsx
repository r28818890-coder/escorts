import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';
import { NOIDA_LOCATIONS, BRAND, CONTACT } from '@/config/site';

const NoidaDistanceFinder: React.FC = () => {
  const [selectedSlug, setSelectedSlug] = useState<string>(NOIDA_LOCATIONS[0].slug);

  const currentLocation = NOIDA_LOCATIONS.find(loc => loc.slug === selectedSlug) || NOIDA_LOCATIONS[0];

  const handleOpenMaps = () => {
    window.open(CONTACT.mapLink, '_blank');
  };

  return (
    <section className="py-8 md:py-20 px-2.5 md:px-4 bg-[#0a0a0a] border-t border-b border-[#e11d48]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-12">
          <span className="section-label mb-2">NOIDA & NCR TRAVEL CALCULATOR</span>
          <h2 className="text-xl md:text-5xl font-display font-bold text-white mb-2">
            How Far Are You From <span className="text-[#e11d48]">{BRAND.name}</span>?
          </h2>
          <p className="text-[#a3a3a3] text-xs md:text-base">
            Select your location in Noida & NCR to see exact travel distance & direct navigation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-[#111111] border border-[#e11d48]/20 rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-2xl backdrop-blur-md">
          {/* Location Selector */}
          <div className="mb-4 md:mb-8">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#e11d48] mb-2">
              Select Your Location in Noida & NCR:
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e11d48]" size={16} />
              <select
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#e11d48]/30 text-white font-bold rounded-xl py-2.5 pl-9 pr-4 outline-none focus:border-[#e11d48] text-xs md:text-base"
              >
                {NOIDA_LOCATIONS.map((loc) => (
                  <option key={loc.slug} value={loc.slug} className="bg-[#111111] text-white">
                    {loc.area} ({loc.distance})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Card */}
          <div className="bg-[#050505] border border-white/10 rounded-xl p-3.5 md:p-6 mb-4 md:mb-8 grid grid-cols-2 gap-3 text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-[#e11d48]/10 border border-[#e11d48]/30 flex items-center justify-center text-[#e11d48] mb-1">
                <Navigation size={14} />
              </div>
              <span className="text-[9px] uppercase font-bold text-[#a3a3a3]">Travel Distance</span>
              <span className="text-xs md:text-base font-bold text-white">{currentLocation.distance}</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-[#e11d48]/10 border border-[#e11d48]/30 flex items-center justify-center text-[#e11d48] mb-1">
                <MapPin size={14} />
              </div>
              <span className="text-[9px] uppercase font-bold text-[#a3a3a3]">Landmark</span>
              <span className="text-xs md:text-sm font-bold text-white">{currentLocation.landmark}</span>
            </div>
          </div>

          <button
            onClick={handleOpenMaps}
            className="w-full py-3 bg-gradient-to-r from-[#be123c] to-[#e11d48] text-black font-bold text-xs md:text-sm uppercase tracking-widest rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <Navigation size={14} /> Open Live GPS Route to Noida Spa
          </button>
        </div>
      </div>
    </section>
  );
};

export default NoidaDistanceFinder;
