import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, Heart, MapPin, MessageCircle, Phone, CheckCircle } from 'lucide-react';
import SEO from '@/components/common/SEO';
import { BRAND, CONTACT } from '@/config/site';
import { NOIDA_LOCALITIES } from '@/config/portalData';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pb-20">
      <SEO
        title={`About ${BRAND.name} | #1 Verified Companion Directory in Noida & NCR`}
        description={`Learn about ${BRAND.name}, NCR's premier verified companion directory offering 100% verified models, 24/7 hotel outcall, and complete client discretion.`}
      />

      {/* Hero Header */}
      <div className="pt-8 pb-12 px-4 bg-gradient-to-b from-slate-100 to-[#f8fafc] border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-300 bg-amber-50 text-amber-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles size={14} className="text-amber-600" /> About Our Portal
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
            {BRAND.name} — Noida & NCR's #1 Verified Companion Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Connecting genuine adult clients with 100% real photo verified independent escorts, call girls, and luxury companions across Noida, Greater Noida, and surrounding NCR with zero advance fee scams.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        {/* Core Values */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-700 font-black">
              Why {BRAND.name}?
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900">
              Discretion, Authenticity & 24/7 Doorstep Service
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We provide direct communication between verified companions and clients. There are no middlemen, zero deposit frauds, and full confidentiality for 5-star hotel outcall visits across Noida, Greater Noida, and Ghaziabad.
            </p>
            <div className="space-y-2.5 pt-2">
              {[
                '100% Photo Verified Independent Models & Call Girls',
                '24/7 Direct WhatsApp Booking with zero middleman fees',
                'Doorstep Outcall visits to all 5-star hotels & corporate suites',
                'Comprehensive coverage across 18+ Noida & NCR sectors'
              ].map((item, i) => (
                <div key={i} className="flex gap-2.5 items-center p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <CheckCircle size={18} className="text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
            <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3">
              Hyperlocal NCR Coverage
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our verified companions are available across prime sectors and landmark hotels in:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {NOIDA_LOCALITIES.slice(0, 8).map((loc) => (
                <Link
                  key={loc.id}
                  to={`/call-girls/${loc.slug}`}
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-amber-50 text-slate-700 hover:text-amber-900 border border-slate-200 font-semibold truncate flex items-center gap-1.5 transition-colors"
                >
                  <MapPin size={12} className="text-amber-600 shrink-0" />
                  <span className="truncate">{loc.name}</span>
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Link to="/jaipur-areas" className="text-xs font-bold text-amber-700 hover:underline">
                View All 18 Noida & NCR Sectors →
              </Link>
            </div>
          </div>
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white text-center space-y-4 shadow-xl border border-amber-500/20">
          <h3 className="text-xl sm:text-2xl font-black">
            Ready to Connect with a Verified Companion in Noida?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Directly message our coordinator on WhatsApp for instant verified model portfolio and 20-30 min hotel outcall confirmation.
          </p>
          <a
            href={`https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent('Hello! I would like to book a verified VIP companion in Noida & NCR.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle size={16} /> WhatsApp Coordinator ({CONTACT.phoneDisplay})
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
