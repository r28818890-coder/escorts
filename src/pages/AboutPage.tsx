import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, Heart, MapPin, MessageCircle, Phone, CheckCircle } from 'lucide-react';
import SEO from '@/components/common/SEO';
import { CONTACT } from '@/config/site';
import { JAIPUR_LOCALITIES } from '@/config/portalData';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pb-20">
      <SEO
        title="About Jaipur Escorts Club | #1 Verified Companion Directory in Jaipur"
        description="Learn about Jaipur Escorts Club, Rajasthan's premier verified companion directory offering 100% verified models, 24/7 hotel outcall, and complete client discretion."
      />

      {/* Hero Header */}
      <div className="pt-8 pb-12 px-4 bg-gradient-to-b from-slate-100 to-[#f8fafc] border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-300 bg-rose-50 text-rose-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles size={14} className="text-rose-600" /> About Our Portal
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
            Jaipur Escorts Club — Rajasthan's #1 Verified Companion Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Connecting genuine adult clients with 100% real photo verified independent escorts, call girls, and luxury companions across Jaipur with zero advance fee scams.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        {/* Core Values */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-rose-700 font-black">
              Why Jaipur Escorts Club?
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900">
              Discretion, Authenticity & 24/7 Doorstep Service
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We provide direct communication between verified companions and clients. There are no middlemen, zero deposit frauds, and full confidentiality for 5-star hotel outcall visits across Jaipur.
            </p>
            <div className="space-y-2.5 pt-2">
              {[
                '100% Photo Verified Independent Models & Call Girls',
                '24/7 Direct WhatsApp Booking with zero middleman fees',
                'Doorstep Outcall visits to all 5-star hotels & luxury resorts',
                'Comprehensive coverage across 20+ Jaipur neighborhoods'
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
              Full Adult Classifieds Coverage in Jaipur
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our portal covers the entire Pink City, ensuring fast outcall arrivals within 20 to 30 minutes in all major commercial and luxury hotel zones:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
              {JAIPUR_LOCALITIES.slice(0, 12).map((loc) => (
                <Link
                  key={loc.id}
                  to={`/call-girls/${loc.slug}`}
                  className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-rose-50 hover:text-rose-800 transition-colors truncate"
                >
                  📍 {loc.name}
                </Link>
              ))}
            </div>
            <div className="pt-3">
              <a
                href={`https://wa.me/${CONTACT.whatsapp1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle size={16} /> Contact Verified Desk on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
              <Heart size={20} />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Verified Profiles</h3>
            <p className="text-xs text-slate-500">Every photo is cross-checked to ensure 100% genuine appearance.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Strict Anti-Scam</h3>
            <p className="text-xs text-slate-500">No advance fee policy guarantees zero financial risks for clients.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <Sparkles size={20} />
            </div>
            <h3 className="font-bold text-sm text-slate-900">VIP Discretion</h3>
            <p className="text-xs text-slate-500">Absolute privacy and discreet doorstep arrivals at your preferred hotel.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
