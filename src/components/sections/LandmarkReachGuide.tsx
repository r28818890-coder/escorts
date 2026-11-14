import React from 'react';
import { MapPin, Navigation, Footprints, Train, Car, Clock, ShieldCheck, PhoneCall, ExternalLink, MessageCircle } from 'lucide-react';
import { BRAND, CONTACT } from '@/config/site';

export const LandmarkReachGuide: React.FC = () => {
  return (
    <section className="py-8 md:py-16 px-2.5 md:px-4 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-12">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-1.5">
            <Navigation className="w-3 h-3 md:w-4 md:h-4" /> 24/7 Outcall Coverage & Landmark Guide
          </div>
          <h2 className="text-lg md:text-4xl font-black text-white tracking-tight">
            Fast Doorstep Outcall Reach in Noida
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-1 text-xs md:text-sm">
            Independent models provide rapid 20-30 minute hotel arrivals across major transport hubs and luxury zones in Noida.
          </p>
        </div>

        {/* 4 Distance Breakdown Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 mb-6 md:mb-12">
          {/* Card 1: Sindhi Camp Bus Stand */}
          <div className="p-3 md:p-6 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-7 h-7 md:w-12 md:h-12 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center mb-2">
                <Footprints className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div className="inline-block px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] md:text-xs font-bold mb-1">
                15 - 20 Mins Arrival
              </div>
              <h3 className="text-xs md:text-lg font-bold text-white mb-1">Sindhi Camp Area</h3>
              <p className="text-slate-400 text-[10px] md:text-xs leading-tight">
                Hotels near Motilal Atal Road, Station Road, and Polo Victory.
              </p>
            </div>
          </div>

          {/* Card 2: MI Road & C-Scheme */}
          <div className="p-3 md:p-6 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-7 h-7 md:w-12 md:h-12 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-2">
                <Car className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div className="inline-block px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[9px] md:text-xs font-bold mb-1">
                20 - 25 Mins Arrival
              </div>
              <h3 className="text-xs md:text-lg font-bold text-white mb-1">MI Road & C-Scheme</h3>
              <p className="text-slate-400 text-[10px] md:text-xs leading-tight">
                5-star hotels, luxury boutique stays, and executive guest suites.
              </p>
            </div>
          </div>

          {/* Card 3: Noida Railway Station */}
          <div className="p-3 md:p-6 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-7 h-7 md:w-12 md:h-12 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center mb-2">
                <Train className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div className="inline-block px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] md:text-xs font-bold mb-1">
                15 - 20 Mins Arrival
              </div>
              <h3 className="text-xs md:text-lg font-bold text-white mb-1">Noida Junction</h3>
              <p className="text-slate-400 text-[10px] md:text-xs leading-tight">
                Doorstep hotel visits across Hasanpura and Station Circle.
              </p>
            </div>
          </div>

          {/* Card 4: Vaishali Nagar & Malviya Nagar */}
          <div className="p-3 md:p-6 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-7 h-7 md:w-12 md:h-12 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center mb-2">
                <MapPin className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div className="inline-block px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[9px] md:text-xs font-bold mb-1">
                25 - 30 Mins Arrival
              </div>
              <h3 className="text-xs md:text-lg font-bold text-white mb-1">Vaishali & Malviya Nagar</h3>
              <p className="text-slate-400 text-[10px] md:text-xs leading-tight">
                Luxury residential hubs, premium resorts, and VIP farmhouses.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Address Banner & Interactive Buttons */}
        <div className="p-3.5 md:p-8 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-rose-400 font-semibold text-xs">
              <MapPin className="w-3.5 h-3.5" /> 24/7 Verified Service Desk
            </div>
            <h4 className="text-sm md:text-xl font-bold text-white">
              {BRAND.name} — Noida City Desk
            </h4>
            <p className="text-slate-400 text-[11px] md:text-sm max-w-xl">
              {CONTACT.address}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <a
              href={CONTACT.whatsapp1Href + '?text=' + encodeURIComponent('Hello We Noida Escorts, please confirm outcall availability at my hotel.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 hover:brightness-110 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" /> Inquire on WhatsApp
            </a>

            <a
              href={CONTACT.phoneHref}
              className="px-4 py-2.5 rounded-xl bg-slate-800 text-rose-300 border border-rose-500/30 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" /> Call: {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandmarkReachGuide;
