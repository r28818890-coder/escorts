import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, MessageCircle, MapPin, AlertTriangle, Sparkles, Heart, UserCheck, Users, Flame } from 'lucide-react';
import { PORTAL_CATEGORIES, NOIDA_LOCALITIES } from '@/config/portalData';
import { BRAND, CONTACT } from '@/config/site';

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Heart': return <Heart size={13} className="text-amber-500" />;
    case 'UserCheck': return <UserCheck size={13} className="text-emerald-500" />;
    case 'Users': return <Users size={13} className="text-indigo-400" />;
    case 'Flame': return <Flame size={13} className="text-rose-500" />;
    default: return <Sparkles size={13} className="text-amber-500" />;
  }
};

export const NewsFooter: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-amber-500/20 pt-7 pb-16 md:pb-8 text-[11px] leading-normal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & 18+ Disclaimer Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pb-6 border-b border-slate-800/80">
          <div className="lg:col-span-5 space-y-2.5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-[0_0_10px_rgba(245,158,11,0.25)] flex items-center justify-center shrink-0">
                <img src="/ecj-mark.svg" alt="Escorts Hub Noida logo" width={36} height={36} className="w-full h-full object-contain rounded-full bg-slate-950" />
              </div>
              <div>
                <span className="font-black text-base text-white tracking-wide">
                  {BRAND.name}
                </span>
                <span className="block text-[9px] text-amber-400 font-bold tracking-widest uppercase">
                  #1 Verified VIP Escorts Directory in Noida & NCR
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
              <span className="bg-red-950/80 text-red-300 border border-red-800 text-[9px] font-bold uppercase px-2 py-0.5 rounded flex items-center gap-1">
                <AlertTriangle size={11} /> 18+ Restricted
              </span>
              <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-800 text-[9px] font-bold uppercase px-2 py-0.5 rounded flex items-center gap-1">
                <Shield size={11} /> 100% Verified Photos
              </span>
              <span className="bg-amber-950/80 text-amber-300 border border-amber-800 text-[9px] font-bold uppercase px-2 py-0.5 rounded flex items-center gap-1">
                <MapPin size={11} /> Hyperlocal NCR
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            
            {/* Column 1: Categories */}
            <div>
              <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px] mb-2">
                Categories
              </h4>
              <ul className="space-y-1 text-[11px]">
                {PORTAL_CATEGORIES.map((c) => (
                  <li key={c.id}>
                    <Link to={`/${c.slug}`} className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1">
                      {getCategoryIcon(c.iconName)}
                      <span>{c.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Noida & NCR Areas */}
            <div>
              <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px] mb-2">
                Noida & NCR Areas
              </h4>
              <ul className="space-y-1 text-[11px]">
                {NOIDA_LOCALITIES.slice(0, 6).map((loc) => (
                  <li key={loc.id}>
                    <Link to={`/call-girls/${loc.slug}`} className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1">
                      <MapPin size={10} className="text-amber-500 shrink-0" />
                      <span>{loc.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/noida-areas" className="text-amber-400 font-bold hover:underline">
                    View All 18 NCR Areas →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Trust & Legal */}
            <div>
              <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px] mb-2">
                Safety &amp; Info
              </h4>
              <ul className="space-y-1 text-[11px]">
                <li>
                  <Link to="/escorts-in-noida" className="text-rose-400 font-bold hover:underline">
                    Escorts in Noida Hub
                  </Link>
                </li>
                <li>
                  <Link to="/booking" className="text-amber-400 font-bold hover:underline">
                    Fast 24/7 Booking
                  </Link>
                </li>
                <li>
                  <Link to="/safety-guide" className="text-slate-300 hover:text-amber-400 transition-colors">
                    Safety &amp; Scam Prevention
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-300 hover:text-amber-400 transition-colors">
                    About Portal
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-slate-300 hover:text-amber-400 transition-colors">
                    FAQ &amp; Help
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-slate-300 hover:text-amber-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-slate-300 hover:text-amber-400 transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-slate-500 text-[10px]">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-slate-400">
            <span>Direct Hotline: {CONTACT.phoneDisplay}</span>
            <span className="hidden sm:inline">•</span>
            <span>Sector 18, Noida, Uttar Pradesh 201301</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default NewsFooter;
