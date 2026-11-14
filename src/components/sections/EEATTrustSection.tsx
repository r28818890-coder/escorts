import React from 'react';
import { ShieldCheck, Award, CheckCircle2, UserCheck, Lock, Clock, MapPin, Sparkles } from 'lucide-react';
import { BRAND, CONTACT } from '@/config/site';

export const EEATTrustSection: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-slate-900 to-slate-950 text-white border-y border-amber-500/20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* JSON-LD Schema for E-E-A-T Experience & Trustworthiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: `${BRAND.name} E-E-A-T Trust & Quality Standards`,
            description: 'Editorial standards, 5-step companion verification protocol, zero-advance fraud protection, and privacy compliance in Noida and 30km NCR.',
            mainEntity: {
              '@type': 'Organization',
              name: BRAND.name,
              url: BRAND.domain,
              foundingDate: '2020',
              knowsAbout: [
                'Noida Hospitality',
                'Hotel Outcall Concierge',
                'Zero-Advance Fraud Protection',
                'VIP Model Verification',
                'Greater Noida & 30km NCR Outcall'
              ]
            }
          })
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Badge & Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" /> Commitment to Transparency, Safety & Trust Standards
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
            Why Discerning Clients Trust {BRAND.name}
          </h2>
          <p className="text-slate-400 text-xs md:text-sm mt-2">
            Built on Local NCR Experience, Verified Authoritativeness & 100% Zero-Advance Payment Trustworthiness.
          </p>
        </div>

        {/* 4 Pillars of E-E-A-T Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* 1. Experience */}
          <div className="p-5 md:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-lg space-y-3 hover:border-amber-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm md:text-base text-white">6+ Years NCR Experience</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Serving premium domestic and corporate executives, solo travelers, and luxury hotel guests in Noida & Greater Noida since 2020.
            </p>
            <div className="text-[11px] font-semibold text-amber-400 flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Direct In-Person Verification
            </div>
          </div>

          {/* 2. Expertise */}
          <div className="p-5 md:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-lg space-y-3 hover:border-emerald-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm md:text-base text-white">5-Step Verification</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Every listed companion undergoes physical verification, live video checks, photo matching, and adult compliance (18+ only).
            </p>
            <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Real Authentic Photos
            </div>
          </div>

          {/* 3. Authoritativeness */}
          <div className="p-5 md:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-lg space-y-3 hover:border-amber-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm md:text-base text-white">30km Radius Authority</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Complete coverage across Sector 18, Sector 62, Expressway, Greater Noida (Pari Chowk), and Ghaziabad (Indirapuram & Vaishali).
            </p>
            <div className="text-[11px] font-semibold text-amber-400 flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 20-30 Min Rapid Outcall
            </div>
          </div>

          {/* 4. Trustworthiness */}
          <div className="p-5 md:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-lg space-y-3 hover:border-emerald-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm md:text-base text-white">Zero-Advance Guarantee</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              We never demand advance booking fees or deposit QR codes. Pay securely via Cash or UPI only upon physical arrival at your hotel.
            </p>
            <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Anti-Scam Protection
            </div>
          </div>
        </div>

        {/* AI & Answer Engine Direct Knowledge Bar */}
        <div className="mt-8 p-4 md:p-6 rounded-2xl bg-slate-800/50 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center justify-center md:justify-start gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Direct WhatsApp Concierge Coordination
            </span>
            <p className="text-xs text-slate-300">
              Instant confirmation with coordinator at <strong className="text-white">{CONTACT.phoneDisplay}</strong>. No middleman fees, 100% discretion.
            </p>
          </div>
          <a
            href={`https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent('Hello Escorts Hub Noida, I would like to book a verified VIP companion.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-950"
          >
            Chat with Concierge
          </a>
        </div>
      </div>
    </section>
  );
};

export default EEATTrustSection;
