import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Flame, 
  Heart, 
  UserCheck, 
  Users, 
  MessageCircle, 
  Phone,
  CheckCircle,
  Star
} from 'lucide-react';
import { 
  PORTAL_CATEGORIES, 
  JAIPUR_LOCALITIES, 
  INITIAL_CLASSIFIED_ADS, 
  SAFETY_TIPS,
  ClassifiedAd 
} from '@/config/portalData';
import { CONTACT } from '@/config/site';
import SEO from '@/components/common/SEO';
import JaipurSearchBar from '@/components/common/JaipurSearchBar';
import AdCard from '@/components/common/AdCard';
import AgeVerificationModal from '@/components/common/AgeVerificationModal';
import LiveActivityToast from '@/components/common/LiveActivityToast';

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Heart': return <Heart size={18} className="text-rose-600" />;
    case 'UserCheck': return <UserCheck size={18} className="text-emerald-600" />;
    case 'Users': return <Users size={18} className="text-indigo-600" />;
    case 'Flame': return <Flame size={18} className="text-rose-600" />;
    default: return <Sparkles size={18} className="text-indigo-600" />;
  }
};

export const Home: React.FC = () => {
  const [allAds, setAllAds] = useState<ClassifiedAd[]>(INITIAL_CLASSIFIED_ADS);
  const [filteredAds, setFilteredAds] = useState<ClassifiedAd[]>(INITIAL_CLASSIFIED_ADS);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('jaipur_user_ads') || '[]');
      if (Array.isArray(stored) && stored.length > 0) {
        setAllAds([...stored, ...INITIAL_CLASSIFIED_ADS]);
        setFilteredAds([...stored, ...INITIAL_CLASSIFIED_ADS]);
      }
    } catch (e) {
      console.error(e);
    }

    const handleAdCreated = (e: Event) => {
      const customEvent = e as CustomEvent<ClassifiedAd>;
      if (customEvent.detail) {
        setAllAds((prev) => [customEvent.detail, ...prev.filter((a) => a.id !== customEvent.detail.id)]);
        setFilteredAds((prev) => [customEvent.detail, ...prev.filter((a) => a.id !== customEvent.detail.id)]);
      }
    };

    window.addEventListener('jaipur-ad-created', handleAdCreated);
    return () => {
      window.removeEventListener('jaipur-ad-created', handleAdCreated);
    };
  }, []);

  const handleFilterChange = (category: string, locality: string, query: string, activeChips: string[] = []) => {
    let result = [...allAds];

    if (category && category !== 'all') {
      result = result.filter((ad) => ad.categorySlug === category);
    }
    if (locality && locality !== 'all') {
      result = result.filter((ad) => ad.localitySlug === locality);
    }
    if (query && query.trim() !== '') {
      const q = query.toLowerCase();
      result = result.filter(
        (ad) =>
          ad.title.toLowerCase().includes(q) ||
          ad.description.toLowerCase().includes(q) ||
          ad.services.some((s) => s.toLowerCase().includes(q))
      );
    }

    if (activeChips.includes('verified')) {
      result = result.filter((ad) => ad.isVerified);
    }
    if (activeChips.includes('online')) {
      result = result.filter((ad) => ad.isOnline);
    }
    if (activeChips.includes('outcall')) {
      result = result.filter((ad) => ad.services.some((s) => s.toLowerCase().includes('outcall')));
    }
    if (activeChips.includes('incall')) {
      result = result.filter((ad) => ad.services.some((s) => s.toLowerCase().includes('in-call') || s.toLowerCase().includes('incall')));
    }
    if (activeChips.includes('top-rated')) {
      result = result.filter((ad) => ad.rating >= 4.8);
    }

    setFilteredAds(result);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a]">
      
      {/* 18+ Age Disclaimer Modal */}
      <AgeVerificationModal />

      {/* Real-Time Live Activity Toast */}
      <LiveActivityToast />

      {/* Rich SEO Metadata */}
      <SEO
        title="Jaipur Escorts Club | Verified Call Girls & VIP Escort Service in Jaipur (24/7 Outcall)"
        description="Discover 100% real photo verified independent escorts, call girls, and VIP models in Jaipur. 24/7 hotel outcall in Sindhi Camp, Vaishali Nagar, Malviya Nagar & C Scheme Jaipur."
      />

      {/* ── 1. COMPACT TOP HERO & FAST SEARCH BAR ────────────────────── */}
      <section className="bg-gradient-to-b from-slate-100 via-[#f8fafc] to-white pt-4 pb-6 px-3 sm:px-6 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-1.5 mb-2 px-3 py-1 rounded-full border border-rose-300 bg-rose-50 text-slate-900 shadow-sm">
            <MapPin size={12} className="text-rose-600" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-rose-900">
              JAIPUR VERIFIED ESCORTS & VIP MODELS DIRECTORY
            </span>
          </div>

          <h1 className="font-black text-xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-2">
            Verified Independent Escorts & Call Girls in <span className="text-rose-600">Jaipur</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mb-4 leading-relaxed">
            100% Real photos, zero advance payment & 24/7 luxury 5-star hotel outcall visits across all 20 Jaipur localities.
          </p>

          <JaipurSearchBar onFilterChange={handleFilterChange} />
        </div>
      </section>

      {/* ── 2. TOP VERIFIED MODEL IMAGES & LIVE PROFILES GRID (FIRST ON PAGE!) ── */}
      <section className="py-6 sm:py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                <Flame size={18} />
              </div>
              <div>
                <h2 className="text-base sm:text-xl font-black text-slate-900 flex items-center gap-1.5">
                  Verified Models & Call Girls in Jaipur
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  Real photos, verified WhatsApp identity & 24/7 doorstep hotel outcall
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {filteredAds.length} Live
              </span>
            </div>
          </div>

          {/* Real Photo Grid Showcase */}
          {filteredAds.length === 0 ? (
            <div className="text-center py-10 bg-slate-50 rounded-xl border border-slate-200 p-6">
              <p className="text-sm font-bold text-slate-800 mb-1">No profiles matched your filter.</p>
              <p className="text-xs text-slate-500">Click "All Categories" or search another locality.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-3.5">
              {filteredAds.map((ad) => (
                <AdCard key={ad.id} ad={ad} featured={ad.isVip} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── 3. SERVICE CATEGORIES SHOWCASE ───────────────────────────── */}
      <section className="py-8 sm:py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="text-[10px] sm:text-xs font-black text-rose-700 uppercase tracking-widest block mb-0.5">
                Service Categories
              </span>
              <h2 className="text-lg sm:text-2xl font-black text-slate-900">
                Browse VIP Escorts & Call Girls Categories
              </h2>
            </div>
            <a
              href={`https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent('Hello! I want to book a verified VIP escort in Jaipur.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-sm hover:bg-[#20bd5a] transition-all"
            >
              <MessageCircle size={14} /> WhatsApp VIP
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {PORTAL_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/${cat.slug}`}
                className="group p-4 rounded-xl bg-white border border-slate-200/90 hover:border-rose-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-2.5">
                    {cat.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-rose-700 font-bold pt-2 border-t border-slate-100">
                  <span>View Listings</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HYPERLOCAL JAIPUR LOCALITIES DIRECTORY ───────────────── */}
      <section className="py-8 sm:py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-[10px] sm:text-xs font-black text-rose-700 uppercase tracking-widest block mb-0.5">
              Locality Directory
            </span>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900">
              Escort Services in All 20 Jaipur Localities
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Select your area to find independent models and VIP companions near your hotel.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5">
            {JAIPUR_LOCALITIES.map((loc) => (
              <Link
                key={loc.id}
                to={`/call-girls/${loc.slug}`}
                className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-rose-400 hover:bg-rose-50/50 transition-all text-center group"
              >
                <span className="text-xs font-bold text-slate-800 group-hover:text-rose-800 transition-colors block truncate">
                  {loc.name}
                </span>
                <span className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                  {loc.landmark}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SAFETY & 100% VERIFICATION ASSURANCE ──────────────────── */}
      <section className="py-8 sm:py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-6">
            <span className="text-[10px] sm:text-xs font-black text-emerald-700 uppercase tracking-widest block mb-0.5 flex items-center gap-1">
              <ShieldCheck size={14} /> Trust & Verification Protocols
            </span>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900">
              Safe Booking Guidelines & Discretion
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {SAFETY_TIPS.map((tip, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 text-xs font-black">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900">{tip.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. DIRECT WHATSAPP VIP CALLOUT ───────────────────────────── */}
      <section className="py-8 sm:py-10 bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white shadow-md">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-3xl font-black mb-2">
            Looking for 100% Genuine VIP Escorts in Jaipur?
          </h2>
          <p className="text-xs sm:text-sm text-rose-100 max-w-lg mx-auto mb-4 font-medium leading-relaxed">
            Connect directly with verified independent models and 5-star hotel outcall companions with zero advance payment.
          </p>
          <a
            href={`https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent('Hello! I want to book a verified VIP companion in Jaipur.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle size={16} className="text-emerald-600" />
            Chat on WhatsApp ({CONTACT.phoneDisplay})
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
