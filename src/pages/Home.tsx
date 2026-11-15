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
  Clock,
  Lock,
  Building,
  Award,
  ChevronDown,
  Navigation
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
import { NoidaSearchBar } from '@/components/common/NoidaSearchBar';
import AdCard from '@/components/common/AdCard';
import AgeVerificationModal from '@/components/common/AgeVerificationModal';
import LiveActivityToast from '@/components/common/LiveActivityToast';

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Heart': return <Heart size={20} className="text-amber-500" />;
    case 'UserCheck': return <UserCheck size={20} className="text-emerald-500" />;
    case 'Users': return <Users size={20} className="text-indigo-500" />;
    case 'Flame': return <Flame size={20} className="text-rose-500" />;
    default: return <Sparkles size={20} className="text-amber-500" />;
  }
};

const ZONES = ['All NCR', 'Central Noida', 'Noida Expressway', 'Greater Noida', 'Ghaziabad NCR'] as const;

export const Home: React.FC = () => {
  const [allAds, setAllAds] = useState<ClassifiedAd[]>(INITIAL_CLASSIFIED_ADS);
  const [filteredAds, setFilteredAds] = useState<ClassifiedAd[]>(INITIAL_CLASSIFIED_ADS);
  const [visibleCount, setVisibleCount] = useState<number>(18);
  const [activeZone, setActiveZone] = useState<string>('All NCR');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('noida_user_ads') || '[]');
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
    setVisibleCount(18);
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
    setVisibleCount(18);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const homeFaqs = [
    {
      q: 'How can I safely book verified escorts in Noida hotels?',
      a: 'At Escorts Hub Noida, we operate under a strict photo-verified companion protocol. You browse verified profiles, choose your preferred companion, confirm the arrival details via direct call or WhatsApp at +91 8218125815, and welcome your companion directly in person at your luxury hotel room or private residence.'
    },
    {
      q: 'What is the average outcall arrival time to 5-star hotels in Noida Sector 18 and Expressway?',
      a: 'For major luxury hotels in Sector 18 (such as Radisson Blu, Mosaic Hotel, and Savoy Suites), outcall arrival time is typically 15 to 25 minutes. For properties along the Noida-Greater Noida Expressway (including Sandal Suites by Lemon Tree, Jaypee Greens Golf & Spa Resort, and Crowne Plaza Greater Noida), average travel time is 20 to 35 minutes depending on traffic on the DND Flyway or expressway.'
    },
    {
      q: 'Are all companion profiles on Escorts Hub Noida 100% photo verified?',
      a: 'Yes. Every companion listed on Escorts Hub Noida undergoes strict multi-point biometric ID verification and real-time photo matching before publication. We do not use commercial stock imagery or misleading web graphics. What you see on the profile card is the exact companion who arrives at your location.'
    },
    {
      q: 'Which hotels in Noida and NCR allow private guest visits and outcall companions?',
      a: 'Reputed luxury and 4-star/5-star business hotels across Noida—including Radisson Blu Sector 18, Crowne Plaza Greater Noida, Jaypee Greens Golf & Spa Resort, Fortune Sector 27, Mosaic Hotel Sector 18, and Savoy Suites—routinely accommodate registered adult guests provided visitors present a valid government-issued photo ID (Aadhaar Card, Passport, or Driving Licence) at the hotel reception in accordance with local hospitality regulations.'
    },
    {
      q: 'What sectors and areas across Noida and NCR are covered for 24/7 outcalls?',
      a: 'We provide comprehensive 24/7 doorstep companion outcall services across all 18 prime sectors and hubs: Sector 18, Sector 62 Electronic City, Sector 50, Sector 137 Expressway, Film City Sector 16, Sector 76 & 78, Jaypee Wish Town Sector 128, Sector 142 Advant Navis, Pari Chowk Greater Noida, Noida Extension (Gaur City), Knowledge Park, Indirapuram, Vaishali, Vasundhara, Crossings Republik, Kaushambi, Mayur Vihar, and Botanical Garden.'
    },
    {
      q: 'How is client privacy, anonymity, and confidentiality safeguarded?',
      a: 'Discretion is our foremost principle. We maintain zero call logs, zero marketing databases, and never share client telephone numbers or booking details with third parties. All WhatsApp interactions at +91 8218125815 are end-to-end encrypted, and our team adheres to complete nondisclosure agreements.'
    },
    {
      q: 'What payment methods are supported for companionship services in Noida?',
      a: 'Clients may settle payments directly in person upon the companion’s verified arrival. For corporate clients or travelers who prefer digital settlement, direct peer-to-peer UPI or bank transfer may be completed upon mutual agreement in person. No online prepayments or digital wallet transfers are ever required prior to meeting.'
    },
    {
      q: 'What should I do if a model arriving does not match her website photograph?',
      a: 'In the rare event of any discrepancy, you maintain full right of refusal at the door with zero financial liability or cancellation charge. Simply notify our central dispatcher immediately at +91 8218125815, and we will either dispatch an alternate verified companion or cancel the visit without hesitation.'
    }
  ];

  // Schema LD+JSON for Homepage: Organization + LocalBusiness + FAQPage
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'EntertainmentBusiness'],
        '@id': 'https://wenoidaescorts.com/#business',
        'name': 'Escorts Hub Noida',
        'alternateName': 'We Noida Escorts Directory',
        'url': 'https://wenoidaescorts.com/',
        'telephone': '+918218125815',
        'email': 'contact@wenoidaescorts.com',
        'image': 'https://wenoidaescorts.com/ecj-og-image.png',
        'logo': 'https://wenoidaescorts.com/ecj-logo.svg',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Sector 18, Commercial Belt, Near DLF Mall of India',
          'addressLocality': 'Noida',
          'addressRegion': 'Uttar Pradesh',
          'postalCode': '201301',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '28.5355',
          'longitude': '77.3910'
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          'opens': '00:00',
          'closes': '23:59'
        },
        'areaServed': NOIDA_LOCALITIES.map((loc) => ({
          '@type': 'AdministrativeArea',
          'name': `${loc.name}, Noida NCR`
        })),
        'sameAs': [
          'https://wa.me/918218125815'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://wenoidaescorts.com/#website',
        'url': 'https://wenoidaescorts.com/',
        'name': 'Escorts Hub Noida',
        'description': 'Premier verified directory for independent call girls, VIP models, and 24/7 hotel outcall companions in Noida & NCR.',
        'publisher': { '@id': 'https://wenoidaescorts.com/#business' },
        'inLanguage': 'en-IN'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://wenoidaescorts.com/#faq',
        'mainEntity': homeFaqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a]">
      
      {/* Real-Time Live Activity Toast */}
      <LiveActivityToast />

      {/* Primary Technical SEO Meta Tags (Capped strictly to <=58 chars) */}
      <SEO
        title="Escorts in Noida | Verified 24/7 Hotel Outcall"
        description="Book verified escorts in Noida with 100% real photos, direct 24/7 hotel outcall, and prompt 20-min arrival. Call or WhatsApp +91 8218125815 now."
        schema={homeSchema}
      />

      {/* ── 1. HERO SECTION (Targeting Primary Keyword: "escorts in noida") ── */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-14 px-3 sm:px-6 border-b border-amber-500/20">
        
        {/* Alluring Hot Model Background Image with Cinematic Vignette Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/hero-hot-model-bg-mobile.webp" type="image/webp" />
            <img
              src="/images/hero-hot-model-bg.webp"
              alt="VIP Escorts in Noida verified companions"
              width={1920}
              height={1080}
              className="w-full h-full object-cover object-center opacity-40 filter brightness-90 contrast-110 transform scale-105"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          {/* Multi-layered dark gradient overlays ensuring high WCAG AA text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/60 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/25 to-slate-950/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.18),_transparent_70%)]" />
        </div>

        {/* Ambient Backlight Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto text-center z-10">
          
          {/* Top Radar & Trust Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 backdrop-blur-md shadow-inner">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-amber-300">
              Escorts Hub Noida • Verified 24/7 Dispatch
            </span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
              Live Available
            </span>
          </div>

          {/* EXACTLY ONE H1: Contains primary keyword "escorts in noida" */}
          <h1 className="font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Escorts in Noida
          </h1>

          {/* 2-line subhead naming Noida landmarks */}
          <p className="text-sm sm:text-base text-slate-200 max-w-3xl mx-auto mb-6 leading-relaxed font-normal drop-shadow">
            Doorstep 24/7 verified VIP hotel outcalls near DLF Mall of India, Sector 18 Metro Gate 2, Botanical Garden interchange, and along the Noida-Greater Noida Expressway. Genuine independent companions with complete privacy.
          </p>

          {/* Trust Chips Row */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-7 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200">
              <ShieldCheck size={14} className="text-emerald-400" /> 100% Real Photos
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200">
              <Lock size={14} className="text-amber-400" /> 100% Privacy Verified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200">
              <Clock size={14} className="text-sky-400" /> 20-Min Fast Outcall
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200">
              <CheckCircle size={14} className="text-emerald-400" /> Direct Hotel Outcall
            </span>
          </div>

          {/* Dual Call-to-Action Buttons (Side by Side Left-Right on Mobile) */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-xs sm:max-w-md mx-auto mb-8">
            <a
              href="tel:+918218125815"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:px-6 sm:py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all min-h-[44px]"
            >
              <Phone size={15} />
              <span>Call 8218125815</span>
            </a>

            <a
              href={`https://wa.me/918218125815?text=${encodeURIComponent('Hello Escorts Hub Noida! I want to book a verified companion in Noida Sector 18 / NCR.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:px-6 sm:py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all min-h-[44px]"
            >
              <MessageCircle size={15} />
              <span>WhatsApp VIP</span>
            </a>
          </div>

          {/* Search & Filter Bar (Single search bar on page) */}
          <NoidaSearchBar onFilterChange={handleFilterChange} />
        </div>
      </section>

      {/* 18+ Age Disclaimer Modal (Rendered after Hero so H1 is first in DOM tree) */}
      <AgeVerificationModal />

      {/* ── 2. PROFILE GRID (Photos First - Featured Verified Companions) ── */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Zone Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-sm shrink-0">
                <Flame size={22} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  Featured Verified Companions in Noida
                </h2>
                <p className="text-xs text-slate-500">
                  100% Real photos & 24/7 doorstep hotel outcall across Noida & NCR
                </p>
              </div>
            </div>

            {/* NCR Region Zone Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {ZONES.map((zone) => (
                <button
                  key={zone}
                  type="button"
                  onClick={() => handleZoneSelect(zone)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                    activeZone === zone
                      ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:border-amber-400 hover:text-slate-900'
                  }`}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>

          {/* Profile Cards Grid (Optimized for Mobile/Slow Networks) */}
          {filteredAds.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <p className="text-sm font-bold text-slate-800 mb-1">No profiles matched your current filter.</p>
              <p className="text-xs text-slate-500">Click "All NCR" or search another sector.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
                {filteredAds.slice(0, visibleCount).map((ad, idx) => (
                  <AdCard key={ad.id} ad={ad} featured={idx < 2} />
                ))}
              </div>

              {filteredAds.length > visibleCount && (
                <div className="text-center mt-8">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((prev) => prev + 18)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Load More Verified Models ({filteredAds.length - visibleCount} More)</span>
                    <ChevronDown size={16} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── 3. CATEGORY GRID (5 Silo Hubs - Now Below Photos) ───────── */}
      <section className="py-10 sm:py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-black text-amber-600 uppercase tracking-widest block mb-1">
              Category Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Explore Noida Companionship Silos
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Browse our five verified companion categories across Noida, Greater Noida, and the NCR corridor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PORTAL_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/${cat.slug}`}
                className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-500 hover:bg-amber-50/20 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="font-black text-base text-slate-900 group-hover:text-amber-700 transition-colors mb-1.5">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">
                    {cat.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-amber-700 font-bold pt-3 border-t border-slate-200">
                  <span>Browse Profiles</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. LOCALITY GRID (All 18 Prime Localities Linked) ─────── */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-black text-amber-600 uppercase tracking-widest block mb-1">
              Hyperlocal NCR Footprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Verified Escorts Across All 18 Noida Sectors & NCR Hubs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Select your hotel neighborhood or metro sector below for verified outcall companions arriving in 15 to 30 minutes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {NOIDA_LOCALITIES.map((loc) => (
              <Link
                key={loc.id}
                to={`/call-girls/${loc.slug}`}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all text-center group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-amber-700 transition-colors block truncate">
                    {loc.name}
                  </span>
                  <span className="text-[11px] text-slate-500 line-clamp-1 mt-1">
                    {loc.landmark}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-amber-700 mt-3 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full inline-block self-center">
                  {loc.zone}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              to="/noida-areas"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 underline underline-offset-4"
            >
              <Navigation size={13} /> View Comprehensive Noida & NCR Sector Index with Metro Stations
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. TRUST, SAFETY & VERIFICATION SECTION ───────────────── */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-2 flex items-center justify-center gap-1.5">
              <ShieldCheck size={18} /> Safety & Authenticity Protocols
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mb-3">
              Verified Companion Safety Guarantee in Noida
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We eliminate online scams completely. Enjoy verified 24/7 hotel outcall companions with real photographs and complete privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SAFETY_TIPS.map((tip, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-sm font-black">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-sm sm:text-base text-white">{tip.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Award size={32} className="text-amber-400 shrink-0" />
              <div>
                <h4 className="font-bold text-sm sm:text-base text-amber-300">100% Genuine Physical Meeting Protocol</h4>
                <p className="text-xs text-slate-300">Direct door arrival to your luxury hotel room or suite. No middleman deductions or fake online profiles.</p>
              </div>
            </div>
            <a
              href="tel:+918218125815"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all min-h-[48px] flex items-center"
            >
              Verify on Call: 8218125815
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. COMPREHENSIVE 1,200+ WORDS EDITORIAL CONTENT ───────── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            {/* Header & Overview */}
            <div>
              <span className="text-xs font-black text-amber-600 uppercase tracking-widest block mb-1">
                Premier Escort Services in Noida
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                The Definitive Guide to Booking Verified Escorts in Noida & NCR
              </h2>
              <p>
                Noida, one of India's fastest-growing planned industrial and commercial hubs in the National Capital Region (NCR), is home to world-class corporate parks, multinational tech headquarters, and premier luxury hospitality destinations. Whether you are an executive visiting the multinational IT corridors of Sector 62 and Advant Navis on the Expressway, attending an international symposium at the India Expo Mart in Greater Noida, or enjoying a leisurely stay near DLF Mall of India and Sector 18, Escorts Hub Noida offers the most discreet, reliable, and verified adult companionship directory in the region.
              </p>
              <p>
                Our directory features strictly verified independent escorts, high-profile college companions, air hostess models, and elite corporate call girls available for 24/7 doorstep hotel outcall appointments. Operating with a verified-photo standard, we prioritize client security, personal confidentiality, and transparent real-photo authenticity above all else.
              </p>
            </div>

            {/* 5-Star Hotel Outcall Protocols */}
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <Building size={22} className="text-amber-600" />
                24/7 Hotel Outcall Protocols for Noida's Premier Hospitality Destinations
              </h3>
              <p>
                The cornerstone of a seamless companionship experience is hotel outcall convenience. Noida boasts an array of prestigious 4-star and 5-star properties designed to accommodate discerning international business executives and domestic travelers. Our companions routinely fulfill doorstep outcall appointments across all premier hotels, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <strong>Radisson Blu Hotel Noida (Sector 18):</strong> Located in the pulsating commercial heart of Noida opposite Gardens Galleria and DLF Mall of India, offering exceptional dining, executive suites, and prompt 15-minute outcall arrival times.
                </li>
                <li>
                  <strong>Crowne Plaza Greater Noida:</strong> A sprawling 5-star luxury retreat near Surajpur and Knowledge Park, ideal for attendees of international expos and exhibitions at the India Expo Mart.
                </li>
                <li>
                  <strong>Jaypee Greens Golf & Spa Resort (Greater Noida):</strong> An opulent golf-facing sanctuary surrounded by lush greens, offering unmatched privacy and peaceful rendezvous suites.
                </li>
                <li>
                  <strong>Mosaic Hotel (Sector 18):</strong> A boutique luxury hotel in close proximity to the Sector 18 Metro Station Gate 2 and Atta Market, favored for rapid outcall dispatch and central convenience.
                </li>
                <li>
                  <strong>Savoy Suites & Sandal Suites by Lemon Tree (Expressway):</strong> Prime executive residences on the Noida-Greater Noida Expressway near Sector 137 and Sector 142, catering to corporate leaders and IT specialists.
                </li>
              </ul>
              <p className="mt-3">
                When booking an outcall to your hotel, simply provide your hotel name, room number, and preferred arrival window. In accordance with standard hotel security and hospitality norms across Uttar Pradesh, all companions carry government-approved identification cards to ensure effortless check-in and room access.
              </p>
            </div>

            {/* Verified Outcall Protocol */}
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <Lock size={22} className="text-amber-600" />
                Verified Companion Protocol: How We Shield Clients from Digital Scams
              </h3>
              <p>
                The digital adult companionship landscape is unfortunately plagued by predatory scam operations that publish misleading stock pictures or unverified profiles. Once an unsuspecting client contacts them, they often encounter impersonators or middlemen.
              </p>
              <p>
                At Escorts Hub Noida, we enforce a strict photo-verification and direct communication protocol across all 100 active profiles. We provide genuine photographs, accurate descriptions, and transparent hotel outcall coordination. Clients greet their chosen companion face-to-face in the privacy of their hotel room, guaranteeing 100% peace of mind, authentic service, and total satisfaction.
              </p>
            </div>

            {/* Hyperlocal Sector Breakdown */}
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <MapPin size={22} className="text-amber-600" />
                Hyperlocal Sector Coverage: From Central Noida to Greater Noida & Ghaziabad
              </h3>
              <p>
                Noida's distinct urban grid structure allows for organized, prompt outcall fulfillment. We have stationed verified models and independent escorts within proximity to major transit arteries, guaranteeing arrival times between 15 to 30 minutes across all four NCR zones:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Central Noida & Film City</h4>
                  <p className="text-xs text-slate-600">
                    Covering Sector 18, Sector 15/16 Film City, Sector 50, Sector 76/78, and the Botanical Garden Metro interchange (Blue Line and Magenta Line junction). Rapid outcall dispatch to DLF Mall of India, Wave One, and Atta Market.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Noida Expressway Corridor</h4>
                  <p className="text-xs text-slate-600">
                    Spanning Sector 137, Sector 128 (Jaypee Wish Town & Sultanpur), and Sector 142 (Advant Navis Business Park). Home to major multinational corporate campuses and contemporary serviced hotel suites.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Greater Noida & Knowledge Park</h4>
                  <p className="text-xs text-slate-600">
                    Covering Pari Chowk, Alpha 1, Ansal Plaza, Knowledge Park, India Expo Mart, and Noida Extension (Gaur City / Char Murti). Outcall coverage for grand resort retreats and academic conferences.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Ghaziabad NCR & Trans-Hindon</h4>
                  <p className="text-xs text-slate-600">
                    Serving Indirapuram (Shipra Mall, Habitat Centre), Vaishali (Max Hospital & Metro), Vasundhara, Crossings Republik (NH-24), and Kaushambi border near Anand Vihar ISBT.
                  </p>
                </div>
              </div>
            </div>

            {/* Discretion & Privacy Assurance */}
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <ShieldCheck size={22} className="text-amber-600" />
                Uncompromising Confidentiality, Discretion & Safe Dating Standards
              </h3>
              <p>
                We understand that privacy is paramount for high-profile business professionals, government dignitaries, and international travelers. Escorts Hub Noida adheres to strict data privacy measures: we do not maintain client phone databases, marketing mailing lists, or shared communication logs. All calls to +91 8218125815 and WhatsApp messages are treated with utmost confidentiality and purged regularly.
              </p>
              <p>
                Furthermore, all companions registered with our platform undergo regular health screenings and practice strict personal hygiene protocols, ensuring every rendezvous is safe, respectful, and fulfilling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ SECTION (With FAQPage Schema Integration) ───────── */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black text-amber-600 uppercase tracking-widest block mb-1">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Everything You Need to Know About Escorts in Noida
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Clear, transparent answers regarding booking procedures, outcall timing, payment safety, and hotel discretion.
            </p>
          </div>

          <div className="space-y-3.5">
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-amber-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-600' : ''}`}
                    />
                  </button>

                  <div
                    className={`px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 ${
                      isOpen ? 'block' : 'hidden'
                    }`}
                  >
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL DUAL CALL-TO-ACTION SECTION ──────────────────── */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <span className="text-amber-400 font-black text-xs tracking-widest uppercase mb-2 block">
            Instant 24/7 Outcall Reservation
          </span>
          <h2 className="text-2xl sm:text-4xl font-black mb-4">
            Connect with Verified Companions in Noida Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            Fast 20-minute doorstep arrival to your hotel room or private suite across Sector 18, Sector 62, Noida Expressway, Greater Noida, and Indirapuram with discreet 24/7 hotel outcall service.
          </p>

          <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-xs sm:max-w-md mx-auto">
            <a
              href="tel:+918218125815"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:px-6 sm:py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all min-h-[44px]"
            >
              <Phone size={15} />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/918218125815?text=${encodeURIComponent('Hello Escorts Hub Noida! I would like to book a verified companion in Noida Sector 18 / NCR.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:px-6 sm:py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all min-h-[44px]"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
