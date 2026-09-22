import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle, Phone, Lock, Eye, AlertOctagon } from 'lucide-react';
import SEO from '@/components/common/SEO';
import { SAFETY_TIPS } from '@/config/portalData';
import { BRAND, CONTACT } from '@/config/site';

export const SafetyGuidePage: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pt-8 pb-20">
      <SEO
        title={`Safety Guidelines & Scam Prevention – ${BRAND.name}`}
        description={`Learn essential safety advice, fraud prevention tips, and verified booking protocols for adult classifieds in Jaipur.`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 shadow-sm">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight">
            Safety & Anti-Scam Guidelines
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Your personal safety, privacy, and financial security are our top priorities. Please review our mandatory safety protocols before booking any companion in Jaipur.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="space-y-4 mb-12">
          {SAFETY_TIPS.map((tip, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-black text-sm shrink-0">
                0{idx + 1}
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-black text-slate-900">{tip.title}</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Red Flags Section */}
        <div className="bg-rose-50 border border-rose-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
          <h3 className="text-lg sm:text-xl font-black text-rose-900 mb-4 flex items-center gap-2">
            <AlertOctagon size={22} className="text-rose-600" />
            Common Scams & Red Flags to Avoid
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-rose-950">
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold">•</span>
              <span><strong>Advance Taxi / Hotel Deposit:</strong> Never send UPI payments for "fuel charges", "cab fare", or "hotel room booking" in advance.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold">•</span>
              <span><strong>Fake Verification Codes:</strong> Never share OTPs or click on unverified payment verification links.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold">•</span>
              <span><strong>Unrealistic Cheap Rates:</strong> Be cautious of profiles advertising luxury 5-star models for abnormally low prices.</span>
            </li>
          </ul>
        </div>

        {/* Verification Hotline CTA */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white shadow-md text-center space-y-3">
          <h3 className="text-xl font-black">Report a Suspicious Profile or Number</h3>
          <p className="text-xs sm:text-sm text-rose-100 max-w-lg mx-auto">
            If any advertiser demands advance fee or sends unfamiliar links, notify our verification team immediately on WhatsApp.
          </p>
          <a
            href={CONTACT.whatsapp1Href + '?text=' + encodeURIComponent('Hello Jaipur Escorts Club, I want to report a suspicious number or verify a profile.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-sm"
          >
            <Phone size={15} /> Contact Verification Hotline
          </a>
        </div>

      </div>
    </div>
  );
};

export default SafetyGuidePage;
