import React from 'react';
import { CONTACT } from '@/config/site';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { JAIPUR_LOCATIONS, BRAND } from '@/config/site';
import SEO from '@/components/common/SEO';
import NotFoundPage from '@/pages/NotFoundPage';

const CityLanding: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const location = JAIPUR_LOCATIONS.find(loc => loc.slug === slug);

  if (!location) {
    return <NotFoundPage />;
  }

  const title = `Verified Companions & Escorts in ${location.area}, Jaipur | ${BRAND.name}`;
  const description = `Looking for 100% verified escort models near ${location.area}? ${BRAND.name} provides 24/7 hotel outcalls within 20-30 minutes across ${location.area}. Call ${CONTACT.phoneDisplay}.`;

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] font-body pb-20">
      <SEO 
        title={title}
        description={description}
      />
      
      {/* Hero Section */}
      <div className="relative pt-12 pb-16 px-6 overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-100 to-[#f8fafc]">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-300 bg-rose-50 mb-6 shadow-sm">
            <MapPin size={14} className="text-rose-600" />
            <span className="text-[10px] font-black tracking-[0.2em] text-rose-900 uppercase">
              Companions in {location.area}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            Verified Models & Escorts in <br />
            <span className="text-rose-600">
              {location.area}, Jaipur
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mb-8 leading-relaxed">
            Experience genuine companionship and discreet hotel visits with {BRAND.name}. Fast doorstep arrival in <strong className="text-slate-900">{location.distance}</strong> across {location.area}.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href={CONTACT.whatsapp1Href + '?text=' + encodeURIComponent(`Hello Escorts Hub Jaipur, I want to book a verified companion in ${location.area}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white font-bold uppercase tracking-widest text-xs rounded-full shadow-md hover:brightness-110 transition-transform flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle size={16} /> WhatsApp Inquiry
            </a>
            <a 
              href={CONTACT.phoneHref}
              className="px-8 py-3.5 bg-white border border-slate-300 text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
            >
              <Phone size={16} className="text-rose-600" />
              Call Hotline
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-6">Why Book With Us?</h2>
            <div className="space-y-4">
              {[
                { title: 'Fast Doorstep Outcall', desc: `Arrives within ${location.distance} at your hotel in ${location.area}` },
                { title: '24/7 Availability', desc: 'Round-the-clock coordination and instant photo sharing' },
                { title: '100% Verified Profiles', desc: 'Genuine independent models with real phone verification' },
                { title: 'Zero Advance Scam Policy', desc: 'Pay directly to companion upon arrival' }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-slate-900 font-bold text-sm mb-0.5">{benefit.title}</h3>
                    <p className="text-slate-600 text-xs">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-4">Area Coverage: {location.area}</h3>
            <div className="space-y-4">
              <div className="flex gap-3 text-xs text-slate-600">
                <MapPin className="text-rose-600 shrink-0" size={18} />
                <p>Doorstep hotel outcall available near <strong>{location.landmark}</strong>.</p>
              </div>
              <div className="flex gap-3 text-xs text-slate-600">
                <Clock className="text-rose-600 shrink-0" size={18} />
                <p>Standard arrival time: <strong>{location.distance}</strong>.</p>
              </div>
              
              <div className="pt-4 border-t border-slate-100">
                <a 
                  href={CONTACT.whatsapp1Href + '?text=' + encodeURIComponent(`Hello Escorts Hub Jaipur, please share available model profiles in ${location.area}.`)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-rose-100 transition-colors cursor-pointer"
                >
                  Request Profiles on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityLanding;