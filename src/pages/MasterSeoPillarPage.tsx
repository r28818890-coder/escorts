import React, { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ChevronDown, 
  Building2, 
  Search, 
  AlertTriangle,
  Award,
  ChevronRight,
  BadgeCheck,
  Check
} from 'lucide-react';
import SEO from '@/components/common/SEO';
import { AdCard } from '@/components/common/AdCard';
import { INITIAL_CLASSIFIED_ADS, ClassifiedAd } from '@/config/portalData';
import { BRAND, CONTACT } from '@/config/site';
import { 
  KEYWORD_CONFIGS, 
  SECTOR_DETAILS, 
  LUXURY_HOTELS, 
  MASTER_FAQS, 
  ANTI_SCAM_CHECKLIST, 
  RATES_PACKAGES_LIST,
  LocalityDetail,
  SeoKeywordConfig
} from '@/data/masterSeoContent';

interface MasterSeoPillarPageProps {
  targetSlug?: string;
}

export const MasterSeoPillarPage: React.FC<MasterSeoPillarPageProps> = ({ targetSlug }) => {
  const location = useLocation();
  const currentPathSlug = targetSlug || location.pathname.replace(/^\//, '').split('/')[0] || 'noida-escorts';
  
  const config: SeoKeywordConfig = KEYWORD_CONFIGS[currentPathSlug] || KEYWORD_CONFIGS['noida-escorts'];

  // State management
  const [selectedSector, setSelectedSector] = useState<LocalityDetail>(SECTOR_DETAILS[0]);
  const [sectorSearch, setSectorSearch] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqSearch, setFaqSearch] = useState('');

  // Filtered sectors for directory
  const filteredSectors = useMemo(() => {
    if (!sectorSearch.trim()) return SECTOR_DETAILS;
    const q = sectorSearch.toLowerCase();
    return SECTOR_DETAILS.filter(s => 
      s.name.toLowerCase().includes(q) || 
      s.zone.toLowerCase().includes(q) || 
      s.landmarks.some(l => l.toLowerCase().includes(q))
    );
  }, [sectorSearch]);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    if (!faqSearch.trim()) return MASTER_FAQS;
    const q = faqSearch.toLowerCase();
    return MASTER_FAQS.filter(f => 
      f.q.toLowerCase().includes(q) || 
      f.a.toLowerCase().includes(q)
    );
  }, [faqSearch]);

  // Verified ads showcase (6 top ads)
  const showcaseAds: ClassifiedAd[] = useMemo(() => {
    return INITIAL_CLASSIFIED_ADS.slice(0, 6);
  }, []);

  const whatsappBookingUrl = `https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent(
    `Hello ${BRAND.name}, I am on your verified ${config.targetKeyword} page. I am looking for a 20-minute hotel outcall in Noida. Please share available real photos and rates.`
  )}`;

  // Structured Data Schema for Google #1 Ranking
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${BRAND.domain}/${config.slug}#localbusiness`,
        "name": `${BRAND.name} - ${config.h1}`,
        "description": config.metaDescription,
        "url": `${BRAND.domain}/${config.slug}`,
        "telephone": CONTACT.phone,
        "priceRange": "₹₹ - ₹₹₹₹",
        "image": `${BRAND.domain}/images/hero-hot-model-bg.webp`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sector 18 Commercial Hub & Expressway",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201301",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.5708",
          "longitude": "77.3271"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "489",
          "bestRating": "5",
          "worstRating": "1"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "Service",
        "@id": `${BRAND.domain}/${config.slug}#service`,
        "name": config.h1,
        "serviceType": "Adult Entertainment & Companion Outcall Service",
        "provider": {
          "@type": "LocalBusiness",
          "name": BRAND.name,
          "telephone": CONTACT.phone
        },
        "areaServed": [
          { "@type": "City", "name": "Noida" },
          { "@type": "City", "name": "Greater Noida" },
          { "@type": "City", "name": "Ghaziabad" }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "2500",
          "highPrice": "20000",
          "priceCurrency": "INR"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${BRAND.domain}/${config.slug}#faq`,
        "mainEntity": MASTER_FAQS.slice(0, 15).map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${BRAND.domain}/${config.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BRAND.domain
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": config.h1,
            "item": `${BRAND.domain}/${config.slug}`
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-amber-500/20">
      <SEO
        title={config.metaTitle}
        description={config.metaDescription}
        url={`${BRAND.domain}/${config.slug}`}
        schema={schemaData}
        keywords={config.relatedKeywords ? config.relatedKeywords.join(', ') : undefined}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: config.targetKeyword.toUpperCase(), url: `/${config.slug}` }
        ]}
      />

      {/* ── BREADCRUMB ────────────────────────────────────────── */}
      <div className="bg-slate-100/80 border-b border-slate-200 text-xs py-2.5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-500 flex-wrap">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-slate-900 font-semibold capitalize">{config.targetKeyword}</span>
          <span className="ml-auto text-slate-400 hidden sm:inline">24/7 Verified Dispatch: <strong className="text-slate-800">{CONTACT.phone}</strong></span>
        </div>
      </div>

      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <header className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white pt-12 pb-16 px-4 md:px-8 overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Top Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Sparkles size={16} className="text-amber-400" />
            <span>{config.badge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 font-bold">24/7 Live Outcall</span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
            {config.h1}
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
            {config.heroSubtitle}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 max-w-md mx-auto">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Booking (24/7)</span>
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-400/30 font-bold text-base shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Phone size={20} />
              <span>Call: {CONTACT.phone}</span>
            </a>
          </div>

          {/* 4 Pillars Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                <CheckCircle2 size={16} />
                <span>100% Real Photos</span>
              </div>
              <p className="text-xs text-slate-300">Biometrically verified authentic models with zero catalog stock.</p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                <ShieldCheck size={16} />
                <span>0 Advance Deposit</span>
              </div>
              <p className="text-xs text-slate-300">Never pay before meeting. Direct cash or UPI at your hotel door.</p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-1">
                <Clock size={16} />
                <span>15-20 Min Outcall</span>
              </div>
              <p className="text-xs text-slate-300">Instant dispatch to Sector 18, 62, Expressway & luxury hotels.</p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-1">
                <Award size={16} />
                <span>Right of Refusal</span>
              </div>
              <p className="text-xs text-slate-300">100% unconditional right of refusal at your door with zero penalty.</p>
            </div>
          </div>
        </div>
      </header>

      {/* ── PRIMARY INTRO & FOCUS SECTION ──────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="max-w-4xl">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
              {config.focusSectionTitle}
            </h2>
            <div 
              className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 mb-6"
              dangerouslySetInnerHTML={{ __html: config.primaryIntro }}
            />
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6"
               dangerouslySetInnerHTML={{ __html: config.focusParagraph }}
            />
            
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
              <span className="font-semibold text-slate-900">Popular Sectors Served:</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Sector 18</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Sector 62</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Sector 50</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Sector 137 Expressway</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Pari Chowk</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Film City (Sector 16)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── VERIFIED COMPANION PROFILES SHOWCASE ────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div>
            <div className="text-xs font-bold text-amber-600 tracking-wider uppercase mb-1">Authenticated Portfolio</div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Verified {config.targetKeyword.replace(/(^\w|\s\w)/g, m => m.toUpperCase())} Profiles
            </h2>
          </div>
          <a
            href={whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700 underline flex items-center gap-1"
          >
            <span>Request Today's Fresh Selfies on WhatsApp</span>
            <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {showcaseAds.map((ad, idx) => (
            <AdCard key={ad.id || idx} ad={ad} featured={idx === 0} />
          ))}
        </div>
      </section>

      {/* ── 28-SECTOR INTERACTIVE DIRECTORY ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="mb-6">
          <div className="text-xs font-bold text-amber-600 tracking-wider uppercase mb-1">Hyper-Local Coverage</div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Noida Sector-by-Sector Availability Directory
          </h2>
          <p className="text-slate-600 text-sm">
            Select a sector below to view local outcall dispatch times, luxury hotels, landmarks, and safety guidelines.
          </p>
        </div>

        {/* Search Bar for Sectors */}
        <div className="relative mb-5 max-w-md">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search sectors, landmarks, or hotels (e.g. Sector 18, Radisson)..."
            value={sectorSearch}
            onChange={(e) => setSectorSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
          />
        </div>

        {/* Sector Tabs Bar */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none mb-6">
          {filteredSectors.map((sector) => {
            const isSelected = selectedSector.slug === sector.slug;
            return (
              <button
                key={sector.slug}
                onClick={() => setSelectedSector(sector)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400 hover:bg-amber-50/50'
                }`}
              >
                {sector.name}
              </button>
            );
          })}
        </div>

        {/* Selected Sector Comprehensive Specification Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-start justify-between flex-wrap gap-4 border-b border-slate-100 pb-5 mb-5">
            <div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 mb-2 inline-block">
                {selectedSector.zone}
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                {selectedSector.name} Companion Services
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Metro Station: <strong>{selectedSector.metro}</strong> | Average Arrival: <strong className="text-emerald-700">{selectedSector.outcallArrival}</strong>
              </p>
            </div>
            <a
              href={`https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent(
                `Hello ${BRAND.name}, I need companion outcall dispatch to ${selectedSector.name}. Please confirm available models.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-sm inline-flex items-center gap-2"
            >
              <MessageCircle size={16} />
              <span>Book in {selectedSector.name}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Locality Overview & Dispatch Transit</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                {selectedSector.overview}
              </p>
              
              <h4 className="font-bold text-slate-900 mb-2">Why Discerning Clients Choose This Sector</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                {selectedSector.whyChoose}
              </p>

              <h4 className="font-bold text-slate-900 mb-2">Client Demographics</h4>
              <p className="text-slate-600 leading-relaxed">
                {selectedSector.clientProfile}
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900 text-xs mb-1 uppercase tracking-wide text-amber-700">Luxury Hotels Serviced</div>
                <ul className="space-y-1 text-slate-700 text-xs">
                  {selectedSector.luxuryHotels.map((h, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Building2 size={13} className="text-slate-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900 text-xs mb-1 uppercase tracking-wide text-amber-700">Prominent Landmarks</div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {selectedSector.landmarks.map((l, i) => (
                    <span key={i} className="text-[11px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700">
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200/80 text-xs text-emerald-950">
                <div className="font-bold mb-1 flex items-center gap-1.5 text-emerald-800">
                  <ShieldCheck size={15} />
                  <span>Safety & In-Call Availability</span>
                </div>
                <p className="mb-2 leading-relaxed">{selectedSector.safetyTips}</p>
                <p className="font-semibold text-emerald-900">{selectedSector.inCallAvailability}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-STAR LUXURY HOTEL MATRIX TABLE ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="mb-6">
          <div className="text-xs font-bold text-amber-600 tracking-wider uppercase mb-1">Discreet Hospitality Matrix</div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Top Luxury & Business Hotels in Noida: Outcall Speed & Visitor Policies
          </h2>
          <p className="text-slate-600 text-sm">
            Every hotel below has been verified for smooth guest elevator check-in and 15 to 25 minute direct suite dispatch.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white text-xs uppercase font-bold tracking-wider">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Hotel Property</th>
                  <th className="py-4 px-4">Category</th>
                  <th className="py-4 px-4">Location</th>
                  <th className="py-4 px-4">ETA Speed</th>
                  <th className="py-4 px-4">Visitor Guest Policy</th>
                  <th className="py-4 px-4">Recommended Companions</th>
                  <th className="py-4 px-4 text-right">Instant Booking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 text-xs sm:text-sm">
                {LUXURY_HOTELS.map((hotel, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      {hotel.name}
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-xs font-semibold whitespace-nowrap">
                        {hotel.stars}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-500 whitespace-nowrap">
                      {hotel.location}
                    </td>
                    <td className="py-4 px-4 font-semibold text-emerald-700 whitespace-nowrap">
                      {hotel.arrivalSpeed}
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-600 max-w-xs">
                      {hotel.guestPolicy}
                    </td>
                    <td className="py-4 px-4 text-xs font-medium text-slate-800">
                      {hotel.recommendedCategory}
                    </td>
                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <a
                        href={`https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent(
                          `Hello, I am staying at ${hotel.name} in Noida. Please send verified models for hotel outcall.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-colors inline-block"
                      >
                        Book Outcall
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── TRANSPARENT RATES & PACKAGES ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold text-amber-600 tracking-wider uppercase mb-1">Transparent Pricing</div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
            Noida Companion Rates & Luxury Packages
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No surprise surcharges. Direct cash on delivery or instant UPI in-person after meeting. Never pay advance money online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {RATES_PACKAGES_LIST.map((pkg, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                idx === 4 
                  ? 'border-amber-400 shadow-md ring-1 ring-amber-400/30' 
                  : 'border-slate-200 shadow-sm hover:border-amber-300'
              }`}
            >
              <div>
                {idx === 4 && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500 text-white mb-2 inline-block">
                    Most Popular VIP Choice
                  </span>
                )}
                <h3 className="text-lg font-bold text-slate-900 mb-1">{pkg.name}</h3>
                <div className="text-xs text-amber-700 font-semibold mb-3">{pkg.duration}</div>
                <div className="text-2xl font-black text-slate-900 mb-2">{pkg.rateRange}</div>
                <div className="text-xs text-slate-500 mb-4">{pkg.idealFor}</div>

                <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4 text-xs text-slate-700">
                  {pkg.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[11px] text-slate-400 mb-3 italic">{pkg.bookingNotes}</p>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent(
                    `Hello ${BRAND.name}, I want to reserve the "${pkg.name}" package (${pkg.rateRange}). Please confirm companion availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center block py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                >
                  Reserve This Package
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 10-CHAPTER DEEP EDITORIAL ARTICLES ─────────────────── */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-10">
        <div className="text-center mb-10">
          <div className="text-xs font-bold text-amber-600 tracking-wider uppercase mb-1">Authoritative Industry Guide</div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Comprehensive Insights & Analysis on {config.targetKeyword.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}
          </h2>
        </div>

        <div className="space-y-8">
          {config.chapters.map((ch, idx) => (
            <article 
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {ch.title}
              </h3>
              <div 
                className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: ch.content }}
              />
            </article>
          ))}
        </div>
      </section>

      {/* ── 15-POINT ANTI-SCAM CONSUMER PROTECTION CHECKLIST ───── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="bg-rose-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-rose-900">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold mb-3">
              <AlertTriangle size={15} />
              <span>Consumer Protection Warning</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
              How to Avoid Escort Scams in Noida: 15-Point Safety Standard
            </h2>
            <p className="text-rose-200 text-xs sm:text-sm leading-relaxed">
              Cyber fraudsters run deceptive ads demanding advance tokens, taxi fares, or room security. Memorize these golden rules to protect yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ANTI_SCAM_CHECKLIST.map((item, idx) => (
              <div key={idx} className="bg-rose-900/40 border border-rose-800/60 p-4 rounded-xl backdrop-blur-sm">
                <div className="font-bold text-amber-300 text-sm mb-1.5 flex items-start gap-2">
                  <BadgeCheck size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>{item.rule}</span>
                </div>
                <p className="text-rose-100 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-rose-900 flex items-center justify-between flex-wrap gap-4 text-xs text-rose-200">
            <span>Escorts Hub Noida Coordinator Helpline: <strong className="text-white text-sm">{CONTACT.phone}</strong></span>
            <a
              href={`https://wa.me/${CONTACT.whatsapp1}?text=Hello%20Escorts%20Hub%20Noida,%20please%20verify%20my%20booking%20safety.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-rose-50 text-rose-950 font-bold px-4 py-2 rounded-xl transition-colors"
            >
              Verify Real Profiles on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* ── CLIENT TESTIMONIALS & REVIEWS ──────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold text-amber-600 tracking-wider uppercase mb-1">Authentic Feedback</div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Verified Client Experiences in Noida
          </h2>
          <p className="text-slate-600 text-sm">
            Read real accounts from corporate travelers and guests staying at Noida luxury hotels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {config.reviews.map((rev, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-xs">{rev.name}</div>
                  <div className="text-[11px] text-slate-500">{rev.hotel}</div>
                </div>
                {rev.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    <CheckCircle2 size={11} />
                    Verified Stay
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 35 MASTER FAQS ACCORDION ───────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-10">
        <div className="text-center mb-8">
          <div className="text-xs font-bold text-amber-600 tracking-wider uppercase mb-1">Got Questions?</div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Frequently Asked Questions ({filteredFaqs.length})
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about outcall procedures, safety, payments, and companions.
          </p>
        </div>

        {/* FAQ Search */}
        <div className="relative mb-6">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search FAQs (e.g. advance, payment, Russian, hotels)..."
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
          />
        </div>

        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full py-4 px-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-amber-600' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── HYPERLOCAL SECTOR GUIDE CLOUD ──────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 border-t border-slate-200">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Hyperlocal Sector Guides for {config.targetKeyword.toUpperCase()}
          </h3>
          <p className="text-slate-500 text-xs">
            Direct outcall dispatch coverage across all residential and commercial zones in Gautam Buddha Nagar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          {config.sectorGuides.map((guide, idx) => (
            <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="font-bold text-slate-900 mb-1">{guide.sectorName}</div>
              <p 
                className="text-slate-600 leading-relaxed text-[11px]"
                dangerouslySetInnerHTML={{ __html: guide.guideText }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── INTERNAL SEO SILO CROSS-LINKS ──────────────────────── */}
      <section className="bg-slate-900 text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-base font-bold text-amber-400 uppercase tracking-wider mb-6">
            Explore All 4 Top-Ranking Pillar Pages & Related Categories
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs mb-8">
            <Link 
              to="/noida-escorts" 
              className={`p-3 rounded-xl border transition-all ${config.slug === 'noida-escorts' ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold' : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'}`}
            >
              Rates & Booking Guide →
            </Link>
            <Link 
              to="/call-girls" 
              className="p-3 rounded-xl border transition-all bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
            >
              Call Girls in Noida →
            </Link>
            <Link 
              to="/vip-escorts" 
              className="p-3 rounded-xl border transition-all bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
            >
              VIP Escorts Noida →
            </Link>
            <Link 
              to="/" 
              className="p-3 rounded-xl border transition-all bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
            >
              Escorts in Noida (Home) →
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-slate-400 pt-6 border-t border-slate-800">
            <span className="font-semibold text-slate-200">High-Intent Keywords:</span>
            {config.relatedKeywords.map((kw, i) => (
              <span key={i} className="bg-slate-800/80 px-2 py-0.5 rounded text-slate-300">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOBILE STICKY FLOATING BOOKING BAR ─────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3 sm:hidden shadow-2xl">
        <div className="flex items-center gap-2">
          <a
            href={`tel:${CONTACT.phone}`}
            className="flex-1 py-2.5 rounded-xl bg-slate-800 text-amber-400 font-bold text-xs flex items-center justify-center gap-1.5 border border-amber-400/30"
          >
            <Phone size={15} />
            <span>Call Now</span>
          </a>
          <a
            href={whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] py-2.5 rounded-xl bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
          >
            <MessageCircle size={15} />
            <span>WhatsApp (20-Min Outcall)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MasterSeoPillarPage;
