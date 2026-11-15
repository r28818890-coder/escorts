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
    <footer className="bg-slate-950 text-slate-400 border-t border-amber-500/20 pt-12 pb-24 md:pb-12 text-xs leading-relaxed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & 18+ Disclaimer Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full border border-purple-500/80 bg-slate-900 p-0.5 shadow-[0_0_12px_rgba(168,85,247,0.35)]">
                <img src="/ecj-mark.svg" alt="Escorts Hub Noida logo" width={36} height={36} className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <span className="font-black text-lg text-white tracking-wide">
                  {BRAND.name}
                </span>
                <span className="block text-[10px] text-amber-400 font-bold tracking-widest uppercase">
                  #1 Verified VIP Escorts Directory in Noida & NCR
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Noida premier verified companion directory connecting genuine independent escort models, call girls, luxury wellness therapists, and VIP hostesses with adult clients across Noida, Greater Noida, and surrounding NCR areas (Sector 18, Sector 62, Expressway, Indirapuram, Vaishali). 100% verified profile authentication and direct WhatsApp confirmation.
            </p>

            <div className="flex items-center gap-2 flex-wrap pt-1">
              <span className="bg-red-950/80 text-red-300 border border-red-800 text-[10px] font-bold uppercase px-2.5 py-1 rounded flex items-center gap-1">
                <AlertTriangle size={12} /> Strictly 18+ Restricted
              </span>
              <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-800 text-[10px] font-bold uppercase px-2.5 py-1 rounded flex items-center gap-1">
                <Shield size={12} /> 100% Verified Photos
              </span>
              <span className="bg-amber-950/80 text-amber-300 border border-amber-800 text-[10px] font-bold uppercase px-2.5 py-1 rounded flex items-center gap-1">
                <MapPin size={12} /> Hyperlocal NCR Coverage
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            
            {/* Column 1: Categories */}
            <div>
              <h4 className="font-bold text-amber-400 uppercase tracking-wider text-xs mb-3">
                Categories
              </h4>
              <ul className="space-y-2 text-xs">
                {PORTAL_CATEGORIES.map((c) => (
                  <li key={c.id}>
                    <Link to={`/${c.slug}`} className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                      {getCategoryIcon(c.iconName)}
                      <span>{c.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Noida & NCR Areas */}
            <div>
              <h4 className="font-bold text-amber-400 uppercase tracking-wider text-xs mb-3">
                Noida & NCR Areas
              </h4>
              <ul className="space-y-2 text-xs">
                {NOIDA_LOCALITIES.slice(0, 6).map((loc) => (
                  <li key={loc.id}>
                    <Link to={`/call-girls/${loc.slug}`} className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1">
                      <MapPin size={11} className="text-amber-500 shrink-0" />
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
              <h4 className="font-bold text-amber-400 uppercase tracking-wider text-xs mb-3">
                Safety &amp; Info
              </h4>
              <ul className="space-y-2 text-xs">
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
                  <Link to="/safety-guide#editorial-policy" className="text-slate-300 hover:text-amber-400 transition-colors">
                    Editorial Policy &amp; Review Standards
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
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-slate-400">
            <span>Direct WhatsApp: {CONTACT.phoneDisplay}</span>
            <span className="hidden sm:inline">•</span>
            <span>Sector 18, Noida, Uttar Pradesh 201301</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default NewsFooter;
