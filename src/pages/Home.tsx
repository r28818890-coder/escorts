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
  Star,
  Compass
} from 'lucide-react';
import { 
  PORTAL_CATEGORIES, 
  NOIDA_LOCALITIES, 
  INITIAL_CLASSIFIED_ADS, 
  SAFETY_TIPS,
  ClassifiedAd 
} from '@/config/portalData';
import { BRAND, CONTACT } from '@/config/site';
import SEO from '@/components/common/SEO';
import JaipurSearchBar from '@/components/common/JaipurSearchBar';
import AdCard from '@/components/common/AdCard';
import AgeVerificationModal from '@/components/common/AgeVerificationModal';
import LiveActivityToast from '@/components/common/LiveActivityToast';
import EEATTrustSection from '@/components/sections/EEATTrustSection';
import GoogleAiOverviewSeo from '@/components/sections/GoogleAiOverviewSeo';

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Heart': return <Heart size={18} className="text-amber-500" />;
    case 'UserCheck': return <UserCheck size={18} className="text-emerald-500" />;
    case 'Users': return <Users size={18} className="text-indigo-500" />;
    case 'Flame': return <Flame size={18} className="text-rose-500" />;
    default: return <Sparkles size={18} className="text-amber-500" />;
  }
};

const ZONES = ['All NCR', 'Central Noida', 'Noida Expressway', 'Greater Noida', 'Ghaziabad NCR'] as const;

export const Home: React.FC = () => {
  const [allAds, setAllAds] = useState<ClassifiedAd[]>(INITIAL_CLASSIFIED_ADS);
  const [filteredAds, setFilteredAds] = useState<ClassifiedAd[]>(INITIAL_CLASSIFIED_ADS);
  const [activeZone, setActiveZone] = useState<string>('All NCR');

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('noida_user_ads') || localStorage.getItem('jaipur_user_ads') || '[]');
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

    window.addEventListener('noida-ad-created', handleAdCreated);
    return () => {
      window.removeEventListener('noida-ad-created', handleAdCreated);
    };
  }, []);

  const handleZoneSelect = (zone: string) => {
    setActiveZone(zone);
    if (zone === 'All NCR') {
      setFilteredAds(allAds);
      return;
    }

    const matchingLocalitySlugs = NOIDA_LOCALITIES
      .filter((loc) => loc.zone === zone)
      .map((loc) => loc.slug);

    setFilteredAds(allAds.filter((ad) => matchingLocalitySlugs.includes(ad.localitySlug)));
  };

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

      {/* Rich SEO Metadata for Noida & NCR */}
      <SEO
        title="Escorts Hub Noida | Verified Call Girls & VIP Escorts in Noida (NCR 24/7 Outcall)"
        description="Discover 100% real photo verified independent escorts, call girls, and VIP models in Noida. 24/7 hotel outcall in Sector 18, Sector 62, Noida Expressway, Greater Noida & Indirapuram."
      />

      {/* ── 1. MODERN LUXURY HERO & RADAR ────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-8 pb-10 px-3 sm:px-6 border-b border-amber-500/20">
        
        {/* Ambient Backlight Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto text-center z-10">
          
          {/* Top Radar Badge */}
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-amber-300">
              NOIDA & NCR VIP COMPANIONS RADAR
            </span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
              24/7 Live
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-black text-2xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-3">
            Verified Independent Escorts in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Noida & NCR</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed font-medium">
            100% Real photos, zero advance fraud & 24/7 doorstep 5-star hotel outcall visits across Noida Sector 18, Sector 62, Expressway, Greater Noida & Ghaziabad borders.
          </p>

          {/* NCR Region Zone Switcher Tabs */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap mb-5">
            {ZONES.map((zone) => (
              <button
                key={zone}
                type="button"
                onClick={() => handleZoneSelect(zone)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  activeZone === zone
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-black border-amber-400 shadow-md scale-105'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-amber-500/50 hover:text-white'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>

          <JaipurSearchBar onFilterChange={handleFilterChange} />
        </div>
      </section>

      {/* ── 2. TOP VERIFIED MODEL IMAGES & LIVE PROFILES GRID ────────── */}
      <section className="py-8 sm:py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex items-center justify-between mb-5 sm:mb-7">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-sm">
                <Flame size={22} />
              </div>
              <div>
                <h2 className="text-base sm:text-2xl font-black text-slate-900 flex items-center gap-1.5">
                  Verified Models & Call Girls in Noida & NCR
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  Real photos, direct WhatsApp confirmation & 24/7 doorstep hotel outcall across NCR
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {filteredAds.length} Profiles Available
              </span>
            </div>
          </div>

          {/* Real Photo Grid Showcase */}
          {filteredAds.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <p className="text-sm font-bold text-slate-800 mb-1">No profiles matched your current filter.</p>
              <p className="text-xs text-slate-500">Click "All NCR" or search another sector.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
              {filteredAds.map((ad) => (
                <AdCard key={ad.id} ad={ad} featured={ad.isVip} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── 3. SERVICE CATEGORIES SHOWCASE ───────────────────────────── */}
      <section className="py-8 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] sm:text-xs font-black text-amber-700 uppercase tracking-widest block mb-0.5">
                Directory Categories
              </span>
              <h2 className="text-lg sm:text-2xl font-black text-slate-900">
                Browse VIP Companions & Services in Noida
              </h2>
            </div>
            <a
              href={`https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent('Hello! I want to book a verified VIP escort in Noida & NCR.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-sm hover:bg-[#20bd5a] transition-all"
            >
              <MessageCircle size={15} /> WhatsApp VIP
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
            {PORTAL_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/${cat.slug}`}
                className="group p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-500/80 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3 group-hover:scale-108 transition-transform">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-amber-700 transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-3">
                    {cat.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-amber-700 font-bold pt-2.5 border-t border-slate-100">
                  <span>Explore Profiles</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HYPERLOCAL NCR LOCALITIES DIRECTORY ──────────────── */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] sm:text-xs font-black text-amber-700 uppercase tracking-widest block mb-1">
              Hyperlocal Footprint
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900">
              Call Girls & Escort Services in 18 Prime Noida & NCR Sectors
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Select your neighborhood or hotel hub to connect with verified call girls, independent models, and 24/7 outcall companions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {NOIDA_LOCALITIES.map((loc) => (
              <Link
                key={loc.id}
                to={`/call-girls/${loc.slug}`}
                className="p-3 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-amber-400 hover:bg-amber-50/40 hover:shadow-md transition-all text-center group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-amber-800 transition-colors block truncate">
                    {loc.name}
                  </span>
                  <span className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                    {loc.landmark}
                  </span>
                </div>
                <span className="text-[9px] font-semibold text-amber-700 mt-2 bg-white border border-amber-200 px-1.5 py-0.5 rounded-full inline-block self-center">
                  {loc.zone}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SAFETY & 100% VERIFICATION ASSURANCE ──────────────────── */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] sm:text-xs font-black text-emerald-700 uppercase tracking-widest block mb-1 flex items-center gap-1.5">
              <ShieldCheck size={16} /> Trust & Verification Protocols
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900">
              Safe Booking & Discretion in Noida
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Zero advance payment protocol protects you from scammers across all NCR hotels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {SAFETY_TIPS.map((tip, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 text-xs font-black">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900">{tip.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5B. GOOGLE E-E-A-T TRUST & QUALITY STANDARDS ───────────── */}
      <EEATTrustSection />

      {/* ── 5C. GOOGLE AI OVERVIEWS & GEMINI SEARCH AEO ───────────── */}
      <GoogleAiOverviewSeo />

      {/* ── 6. DIRECT WHATSAPP VIP CALLOUT ───────────────────────────── */}
      <section className="py-10 sm:py-12 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <span className="text-amber-400 font-black text-[11px] tracking-widest uppercase mb-2 block">
            Instant Doorstep Outcall Service
          </span>
          <h2 className="text-2xl sm:text-4xl font-black mb-3">
            Looking for 100% Genuine VIP Escorts in Noida?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6 font-medium leading-relaxed">
            Connect directly with verified independent models and 5-star hotel outcall companions with zero advance payment in Sector 18, 62, Greater Noida and Indirapuram.
          </p>
          <a
            href={`https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent('Hello! I want to book a verified VIP companion in Noida & NCR.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-8 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp ({CONTACT.phoneDisplay})
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
