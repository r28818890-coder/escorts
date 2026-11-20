import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Building2, 
  Search, 
  MapPin,
  ChevronRight,
  BadgeCheck,
  Heart,
  Calendar,
  AlertTriangle,
  Hotel,
  Compass,
  ArrowRight
} from 'lucide-react';
import SEO from '@/components/common/SEO';
import { AdCard } from '@/components/common/AdCard';
import SimilarKeywordsCloud from '@/components/common/SimilarKeywordsCloud';
import { 
  NOIDA_LOCALITIES, 
  PORTAL_CATEGORIES, 
  INITIAL_CLASSIFIED_ADS,
  ClassifiedAd 
} from '@/config/portalData';
import { NOIDA_AREAS_DATA } from '@/data/noidaAreasData';
import { BRAND, CONTACT } from '@/config/site';

export interface NoidaMasterHubPageProps {
  pageVariant?: 'default' | 'call-girl' | 'escorts-service';
}

export const NoidaMasterHubPage: React.FC<NoidaMasterHubPageProps> = ({ pageVariant }) => {
  const location = useLocation();

  const variant = pageVariant || (
    location.pathname.includes('call-girl-in-noida')
      ? 'call-girl'
      : location.pathname.includes('escorts-service-in-noida')
      ? 'escorts-service'
      : 'default'
  );

  const pageConfig = useMemo(() => {
    if (variant === 'call-girl') {
      return {
        slug: 'call-girl-in-noida',
        title: 'Call Girl in Noida 🟢 100% Real Photo | Verified VIP COD Services',
        desc: '⚡ Verified Call Girl in Noida with 100% genuine photos. 20-30 min doorstep hotel outcalls across Sector 18, 62 & Expressway. Cash on Delivery (COD) - Zero advance! WhatsApp +91 8218125815.',
        h1Top: 'Call Girl in Noida',
        h1Sub: '100% Verified Independent Companions & COD Outcalls',
        h2: 'Doorstep 20-30 min hotel room visits across Sector 18, 62, 50, 137 & Greater Noida. Zero advance token COD!',
        subtitle: 'Explore verified independent call girls in Noida with 100% real photographs and zero advance deposit. Enjoy prompt 20-30 minute doorstep hotel outcalls across Sector 18, Sector 62, Sector 50, Noida Expressway, and Greater Noida with complete privacy and Cash on Delivery.',
        breadcrumbName: 'Call Girl in Noida',
        keywords: 'call girl in noida, call girls noida, independent call girl noida, verified call girl in noida, call girl number noida, hotel outcall call girl',
        businessName: `${BRAND.name} - Call Girl in Noida & VIP Companions`,
        businessDesc: 'Verified call girl services in Noida with 100% genuine photos. 20-30 min doorstep hotel outcalls, zero advance token, and cash on delivery across Sector 18, 62, 50, 137 & Greater Noida.'
      };
    }
    if (variant === 'escorts-service') {
      return {
        slug: 'escorts-service-in-noida',
        title: 'Escorts Service in Noida 🟢 Top VIP 24/7 Hotel Outcall Companions',
        desc: '⚡ Premium Escorts Service in Noida offering 100% genuine photo verified VIP companions. Fast 20-min arrival to luxury 4 & 5-star hotels. Zero advance deposit! WhatsApp +91 8218125815.',
        h1Top: 'Escorts Service in Noida',
        h1Sub: 'Premier 24/7 VIP Outcalls & Verified Models',
        h2: 'Verified 24/7 doorstep hotel outcalls across all 18 Noida sectors. 100% real photo verification and Zero advance token COD.',
        subtitle: 'Discover premier escort service in Noida featuring top-tier VIP models, Russian companions, and corporate hostesses. Discreet 24/7 hotel outcall visits to Radisson Blu, Crowne Plaza, Jaypee Greens, and luxury suites with zero advance token deposit.',
        breadcrumbName: 'Escorts Service in Noida',
        keywords: 'escorts service in noida, noida escort service, escort services in noida, 24/7 hotel outcall escort service noida, luxury escorts service noida',
        businessName: `${BRAND.name} - Escorts Service in Noida Directory`,
        businessDesc: 'Premier verified escorts service in Noida. 20-30 min doorstep hotel outcalls to Radisson Blu, Crowne Plaza, Jaypee Greens, and luxury suites with zero advance.'
      };
    }
    return {
      slug: 'escorts-in-noida',
      title: 'Escorts in Noida 🟢 100% Real Photo | Call Girls in Noida 【Zero Advance COD】',
      desc: '⚡ Verified Escorts in Noida & Call Girls with 100% genuine photos. 20-30 min doorstep hotel outcall across all 18 Noida sectors. Cash on Delivery (COD) - Zero advance token! Call +91 8218125815.',
      h1Top: 'Escorts in Noida',
      h1Sub: 'Verified Call Girls & 24/7 Hotel Outcalls',
      h2: 'Doorstep 24/7 Verified Companion Service Across All 18 Noida Sectors & Expressways',
      subtitle: 'Welcome to the official master directory for genuine escort services in Noida. Experience uncompromising discretion, verified real photos, and prompt 20 to 30-minute doorstep arrival to all luxury 4-star and 5-star hotels across Sector 18, Sector 62, Greater Noida, and the Noida-Greater Noida Expressway corridor.',
      breadcrumbName: 'Escorts in Noida',
      keywords: 'escorts in noida, call girls in noida, noida escorts, escort service in noida, independent escorts noida, russian escorts noida, sector 18 escorts, sector 62 call girls',
      businessName: `${BRAND.name} - Escorts in Noida & VIP Companions`,
      businessDesc: 'Noida premier 100% verified escort service and companion directory. 20-30 min doorstep hotel outcalls, zero advance deposit, real photos, and cash on delivery across Sector 18, 62, 50, 137 & Greater Noida.'
    };
  }, [variant]);

  const [selectedLocality, setSelectedLocality] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'sectors' | 'categories' | 'profiles' | 'matrix'>('sectors');

  // Filter profiles based on selected locality
  const displayedProfiles = useMemo(() => {
    let ads = INITIAL_CLASSIFIED_ADS;
    if (selectedLocality !== 'all') {
      ads = ads.filter(ad => ad.localitySlug === selectedLocality);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      ads = ads.filter(ad => 
        ad.title.toLowerCase().includes(q) || 
        ad.locality.toLowerCase().includes(q) ||
        (ad.services && ad.services.some(s => s.toLowerCase().includes(q)))
      );
    }
    return ads;
  }, [selectedLocality, searchQuery]);

  // Filter localities based on search
  const filteredLocalities = useMemo(() => {
    if (!searchQuery.trim()) return NOIDA_LOCALITIES;
    const q = searchQuery.toLowerCase();
    return NOIDA_LOCALITIES.filter(loc => 
      loc.name.toLowerCase().includes(q) || 
      loc.landmark.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const whatsappBookingUrl = `https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent(
    `Hello ${BRAND.name}, I am visiting your Noida Master Page. I am looking for a 20-minute verified hotel outcall in Noida. Please share available real photos and rates.`
  )}`;

  // Structured Data Schema for Google #1 Ranking
  const canonicalUrl = `${BRAND.domain}/${pageConfig.slug}/`;
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${canonicalUrl}#business`,
        "name": pageConfig.businessName,
        "description": pageConfig.businessDesc,
        "url": canonicalUrl,
        "telephone": CONTACT.phone,
        "priceRange": "₹2,500 - ₹25,000",
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
        "areaServed": NOIDA_LOCALITIES.map(l => l.name),
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "218",
          "bestRating": "5",
          "worstRating": "1"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "sameAs": [
          "https://en.wikipedia.org/wiki/Noida",
          "https://www.wikidata.org/wiki/Q200021",
          "https://wa.me/918218125815"
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": pageConfig.title,
        "headline": `${pageConfig.h1Top} — ${pageConfig.h1Sub}`,
        "datePublished": "2026-01-15T08:00:00+05:30",
        "dateModified": new Date().toISOString(),
        "isPartOf": { "@id": `${BRAND.domain}/#website` },
        "about": { "@id": `${canonicalUrl}#business` },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", ".hero-subtitle", ".overview-box p"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${BRAND.domain}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": pageConfig.breadcrumbName,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${canonicalUrl}#localities-list`,
        "name": "Noida & NCR Hyperlocal Escort Service Localities",
        "description": "Complete programmatic index of all 18 Noida sectors and NCR satellite hubs.",
        "itemListElement": NOIDA_LOCALITIES.map((loc, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": `Escorts in ${loc.name}`,
          "url": `${BRAND.domain}/area/${loc.slug}/`
        }))
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How to book verified escorts in Noida with zero advance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Booking is 100% risk-free. Simply select your preferred model from our verified gallery, send her profile on our 24/7 WhatsApp concierge (+91 8218125815), share your hotel room number or private address, and she arrives within 20 to 30 minutes. You settle payment in person via Cash or UPI after mutual satisfaction."
            }
          },
          {
            "@type": "Question",
            "name": "Are the profile photographs on Escorts Hub Noida genuine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every profile listed on our portal undergoes multi-point real-time video/photo authentication. If the companion arriving at your hotel does not match her verified pictures, you hold a 100% right of refusal with zero cancellation fee."
            }
          },
          {
            "@type": "Question",
            "name": "Which luxury hotels in Noida accommodate 24/7 companion outcalls?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our companions frequently visit leading 4-star and 5-star business hotels including Radisson Blu Sector 18, Mosaic Hotel Sector 18, Sandal Suites by Lemon Tree on Noida Expressway, Crowne Plaza Greater Noida, Savoy Suites, and Park Ascent Sector 62."
            }
          },
          {
            "@type": "Question",
            "name": "What are the standard escort rates in Noida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard hotel outcall rates start from ₹2,500 to ₹4,500 for 1-hour sessions, ₹6,000 to ₹10,000 for 2-3 hour extended romantic evenings, and ₹12,000 to ₹25,000 for overnight (8-10 hour) VIP stays. Elite Russian and fashion models carry premium pricing."
            }
          },
          {
            "@type": "Question",
            "name": "Is my privacy and client discretion safeguarded?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We enforce an uncompromising digital privacy protocol. No client names, hotel receipts, or phone logs are saved on remote database servers. All chat logs are wiped immediately upon session completion."
            }
          }
        ]
      }
    ]
  };

  const FAQS = [
    {
      q: "How to book verified escorts in Noida with zero advance?",
      a: "Booking is 100% risk-free. Simply select your preferred model from our verified gallery, send her profile on our 24/7 WhatsApp concierge (+91 8218125815), share your hotel room number or private address, and she arrives within 20 to 30 minutes. You settle payment in person via Cash or UPI after mutual satisfaction."
    },
    {
      q: "Are the profile photographs on Escorts Hub Noida genuine?",
      a: "Yes. Every profile listed on our portal undergoes multi-point real-time video/photo authentication. If the companion arriving at your hotel does not match her verified pictures, you hold a 100% right of refusal with zero cancellation fee."
    },
    {
      q: "Which luxury hotels in Noida accommodate 24/7 companion outcalls?",
      a: "Our companions frequently visit leading 4-star and 5-star business hotels including Radisson Blu Sector 18, Mosaic Hotel Sector 18, Sandal Suites by Lemon Tree on Noida Expressway, Crowne Plaza Greater Noida, Savoy Suites, and Park Ascent Sector 62."
    },
    {
      q: "What are the standard escort rates in Noida?",
      a: "Standard hotel outcall rates start from ₹2,500 to ₹4,500 for 1-hour sessions, ₹6,000 to ₹10,000 for 2-3 hour extended romantic evenings, and ₹12,000 to ₹25,000 for overnight (8-10 hour) VIP stays. Elite Russian and fashion models carry premium pricing."
    },
    {
      q: "What is the Cash on Delivery (COD) guarantee?",
      a: "The COD guarantee ensures you never transfer online advance tokens, security deposits, or cab fare upfront. You only settle payment directly with the companion once she is physically present in your room and you are fully satisfied with her appearance."
    },
    {
      q: "How fast is outcall delivery in Sector 18 and Noida Expressway?",
      a: "Due to our decentralized network of verified models stationed across Sector 18, Sector 62, Sector 137, and Pari Chowk, average arrival times range from 15 to 25 minutes depending on traffic along the DND Flyway and Expressway."
    },
    {
      q: "Can I book independent college models and Russian companions?",
      a: "Yes. Our roster features independent college freshers, high-profile corporate hostesses, cabin crew air hostesses, and international Russian models with authentic documentation."
    },
    {
      q: "Is my privacy and client discretion safeguarded?",
      a: "Absolutely. We enforce an uncompromising digital privacy protocol. No client names, hotel receipts, or phone logs are saved on remote database servers. All chat logs are wiped immediately upon session completion."
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-[#0f172a] min-h-screen">
      <SEO
        title={pageConfig.title}
        description={pageConfig.desc}
        url={canonicalUrl}
        schema={schemaData}
        keywords={pageConfig.keywords}
      />

      {/* ── 1. Hero Section: High-Converting Authority Header ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-900/25 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-rose-400 transition-colors">Home</Link>
            <ChevronRight size={12} className="text-slate-600" />
            <span className="text-rose-400 font-medium">{pageConfig.breadcrumbName}</span>
          </nav>

          {/* Badges Bar */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30">
              <Sparkles size={13} className="text-rose-400" />
              #1 Verified Noida Companion Network
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              <CheckCircle2 size={13} className="text-emerald-400" />
              100% Real Photo Verified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
              <ShieldCheck size={13} className="text-amber-400" />
              Zero Advance • Cash on Delivery (COD)
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6">
                {pageConfig.h1Top} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-300 to-amber-200">
                  {pageConfig.h1Sub}
                </span>
              </h1>

              <p className="hero-subtitle text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8">
                {pageConfig.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} />
                  Book on WhatsApp (Instant Response)
                </a>

                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-rose-600/30 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone size={18} />
                  Call Helpline: {CONTACT.phoneDisplay}
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-rose-400 shrink-0" />
                  <span><strong>20-30 Mins</strong> Hotel Arrival</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                  <span><strong>₹0 Advance</strong> Pay on Meeting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-amber-400 shrink-0" />
                  <span><strong>4.9/5 Rating</strong> (218+ Reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-indigo-400 shrink-0" />
                  <span><strong>18 Sectors</strong> Full Coverage</span>
                </div>
              </div>
            </div>

            {/* Quick Outcall Request Box */}
            <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div>
                  <h3 className="font-bold text-white text-base">Instant Outcall Dispatch</h3>
                  <p className="text-xs text-slate-400">Sector 18 • 62 • Expressway Hub</p>
                </div>
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60">
                  <span className="text-slate-400 block mb-1">Preferred Hotel Outcall Timing:</span>
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Clock size={14} className="text-rose-400" />
                    24 Hours Day & Night Service Available
                  </span>
                </div>

                <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60">
                  <span className="text-slate-400 block mb-1">Guaranteed Anti-Scam Policy:</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <ShieldCheck size={14} />
                    Never Pay Before Seeing Your Companion
                  </span>
                </div>

                <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60">
                  <span className="text-slate-400 block mb-1">VIP Luxury Hotel Partners:</span>
                  <span className="font-medium text-slate-300">
                    Radisson Blu, Mosaic, Sandal Suites, Crowne Plaza, Savoy Suites & Private Res.
                  </span>
                </div>

                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-center block transition-all shadow-md"
                >
                  Request Photos on WhatsApp →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. Master Link Navigation Hub (The Core Requirement) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Navigation Tabs */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-black tracking-widest text-rose-600 bg-rose-50 border border-rose-200 uppercase mb-3">
            Noida Complete Hyperlocal Directory
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Explore All Noida Sector Pages & Companion Categories
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Every locality, companion category, and verified model profile created for Noida is cataloged below. 
            Click any sector hub to explore dedicated hotels, metro connections, and verified profiles.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('sectors')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === 'sectors'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Building2 size={16} />
            All 18 Noida Sectors ({NOIDA_LOCALITIES.length})
          </button>

          <button
            onClick={() => setActiveTab('categories')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === 'categories'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Sparkles size={16} />
            Companion Categories ({PORTAL_CATEGORIES.length})
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === 'matrix'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Compass size={16} />
            Category × Sector Matrix (90 URLs)
          </button>

          <button
            onClick={() => setActiveTab('profiles')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === 'profiles'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Heart size={16} />
            100 Verified Profiles
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sector, landmark or profile..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 shadow-xs"
            />
          </div>
        </div>

        {/* ── TAB CONTENT 1: All 18 Noida Sectors Links ── */}
        {activeTab === 'sectors' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredLocalities.map((loc) => {
              const areaDetail = NOIDA_AREAS_DATA[loc.slug];
              const hotelCount = areaDetail?.hotels.length || 2;
              return (
                <div 
                  key={loc.slug}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                        {areaDetail?.zone || 'Noida NCR'}
                      </span>
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                        <Clock size={12} /> {areaDetail?.eta || '15-20 mins'}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 group-hover:text-rose-600 transition-colors mb-2">
                      <Link to={`/area/${loc.slug}/`} className="hover:underline">
                        Escorts in {loc.name}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                      {areaDetail?.overview[0] || `Verified escort services, 5-star hotel outcalls, and independent call girls near ${loc.landmark}.`}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-600 mb-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <MapPin size={13} className="text-rose-500 shrink-0" />
                        <span className="truncate">Near {loc.landmark}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Hotel size={13} className="text-indigo-500 shrink-0" />
                        <span className="truncate">{hotelCount} Luxury Hotel Outcall Hubs</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      to={`/area/${loc.slug}/`}
                      className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      View {loc.name} Hub <ArrowRight size={13} />
                    </Link>
                    <Link
                      to={`/call-girls/${loc.slug}/`}
                      className="text-xs font-medium text-slate-400 hover:text-slate-600"
                    >
                      Profiles →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── TAB CONTENT 2: All Companion Categories Links ── */}
        {activeTab === 'categories' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTAL_CATEGORIES.map((cat) => (
              <div 
                key={cat.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    <Link to={`/${cat.slug}/`} className="hover:text-rose-600 transition-colors">
                      {cat.name} in Noida
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <Link
                    to={`/${cat.slug}/`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-rose-600 text-white font-bold text-xs text-center block transition-colors"
                  >
                    Explore All {cat.name} →
                  </Link>
                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-500">
                    <Link to={`/${cat.slug}/sector-18/`} className="hover:text-rose-600">Sector 18</Link> •
                    <Link to={`/${cat.slug}/sector-62/`} className="hover:text-rose-600">Sector 62</Link> •
                    <Link to={`/${cat.slug}/sector-137/`} className="hover:text-rose-600">Expressway</Link> •
                    <Link to={`/${cat.slug}/pari-chowk/`} className="hover:text-rose-600">Pari Chowk</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── TAB CONTENT 3: Category × Sector Matrix (90 Hyperlocal URLs) ── */}
        {activeTab === 'matrix' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-black text-slate-900 mb-2">Complete Category × Locality Semantic Link Matrix</h3>
            <p className="text-xs text-slate-500 mb-6">Direct indexed links to all programmatic hyperlocal landing pages across Noida.</p>

            <div className="space-y-8">
              {PORTAL_CATEGORIES.slice(0, 4).map((cat) => (
                <div key={cat.id} className="pb-6 border-b border-slate-100 last:border-b-0">
                  <h4 className="font-bold text-sm text-rose-600 mb-3 flex items-center gap-2">
                    <Sparkles size={14} />
                    {cat.name} Across All 18 Noida Sectors
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
                    {NOIDA_LOCALITIES.map((loc) => (
                      <Link
                        key={`${cat.slug}-${loc.slug}`}
                        to={`/${cat.slug}/${loc.slug}/`}
                        className="p-2 rounded-lg bg-slate-50 hover:bg-rose-50 hover:text-rose-600 border border-slate-100 hover:border-rose-200 text-slate-700 font-medium transition-all truncate"
                        title={`${cat.name} in ${loc.name}`}
                      >
                        {loc.name.replace(' Noida', '').replace(' Gr Noida West', '')}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB CONTENT 4: Direct Links to Verified Profiles ── */}
        {activeTab === 'profiles' && (
          <div>
            {/* Sector Selector Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
              <button
                onClick={() => setSelectedLocality('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedLocality === 'all'
                    ? 'bg-rose-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All Localities ({INITIAL_CLASSIFIED_ADS.length})
              </button>
              {NOIDA_LOCALITIES.map((loc) => (
                <button
                  key={loc.slug}
                  onClick={() => setSelectedLocality(loc.slug)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                    selectedLocality === loc.slug
                      ? 'bg-rose-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {loc.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProfiles.slice(0, 18).map((ad) => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>

            {displayedProfiles.length > 18 && (
              <div className="text-center mt-10">
                <Link
                  to="/call-girls/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-rose-600 text-white font-bold text-sm transition-all"
                >
                  Browse Remaining {displayedProfiles.length - 18} Verified Profiles →
                </Link>
              </div>
            )}
          </div>
        )}

      </section>

      {/* ── 3. Exhaustive Topical Authority Editorial Content ── */}
      <section className="bg-white border-y border-slate-200 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Chapter 1: The Noida Landscape */}
          <div className="prose prose-slate max-w-none">
            <span className="text-xs font-black uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Authority Guide • 2026 Edition
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-4 mb-6">
              The Definitive Guide to Verified Escorts in Noida & 5-Star Hotel Outcalls
            </h2>
            <div className="overview-box text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
              <p>
                Noida (New Okhla Industrial Development Authority) has evolved into one of India’s most prosperous, 
                dynamic corporate and residential epicenters. Spanning from the bustling commercial markets of 
                <strong>Sector 18 and DLF Mall of India</strong> to the multinational software parks of 
                <strong>Sector 62</strong>, and along the luxury residential condominiums of the 
                <strong>Noida-Greater Noida Expressway (Sectors 128, 137, 142)</strong>, the city attracts 
                thousands of national and foreign corporate executives, IT specialists, trade delegates, and 
                discerning travelers every month.
              </p>
              <p>
                With world-class hospitality hubs such as <em>Radisson Blu Sector 18, Mosaic Hotel, Sandal Suites, 
                and Crowne Plaza Greater Noida</em>, the demand for verified, professional, and discreet adult 
                companionship has grown exponentially. <strong>Escorts Hub Noida</strong> serves as the city’s 
                trusted single-source-of-truth portal, eliminating middlemen and online scams through our strict 
                <strong>100% Real Photo Verification</strong> and <strong>Zero-Advance Cash on Delivery (COD)</strong> policy.
              </p>
            </div>
          </div>

          {/* Chapter 2: Four-Step Booking Sequence */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-emerald-600" size={24} />
              The 4-Step Risk-Free Hotel Outcall Sequence
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-2xl font-black text-rose-600 block mb-2">01</span>
                <h4 className="font-bold text-slate-900 mb-2">Select Verified Profile</h4>
                <p className="text-slate-600 leading-relaxed">
                  Browse our photo-verified roster in your specific sector (Sector 18, 62, 137, Pari Chowk) and choose your preferred model.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-2xl font-black text-rose-600 block mb-2">02</span>
                <h4 className="font-bold text-slate-900 mb-2">WhatsApp Confirmation</h4>
                <p className="text-slate-600 leading-relaxed">
                  Send the profile screenshot to our 24/7 WhatsApp desk (+91 8218125815). We confirm her real-time availability in under 3 minutes.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-2xl font-black text-rose-600 block mb-2">03</span>
                <h4 className="font-bold text-slate-900 mb-2">20-Min Doorstep Outcall</h4>
                <p className="text-slate-600 leading-relaxed">
                  Your companion arrives discreetly at your 4-star/5-star hotel suite or private apartment in sanitized executive transit.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-2xl font-black text-emerald-600 block mb-2">04</span>
                <h4 className="font-bold text-slate-900 mb-2">In-Person Settlement</h4>
                <p className="text-slate-600 leading-relaxed">
                  Verify her photo in person. Once 100% satisfied, settle payment directly via cash or UPI. Zero prepayment required.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 3: Safety & Anti-Scam Guide */}
          <div className="border-l-4 border-rose-600 pl-6 py-2">
            <h3 className="text-xl font-black text-slate-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="text-rose-600" size={22} />
              Scam Prevention Warning: Never Pay Booking Tokens Online
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Fraudulent escort agents in Delhi NCR routinely scam tourists by asking for ₹500 to ₹2,000 "registration fees", 
              "medical deposit", or "cab fare" on Google Pay/PhonePe prior to arrival. <strong>Never transfer money online</strong>. 
              Legitimate independent companions in Noida always operate on direct Cash on Delivery. If an agency demands an advance, 
              cancel immediately.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/safety-guide/" className="text-xs font-bold text-rose-600 hover:text-rose-700 underline">
                Read our Complete Safety & Anti-Scam Manual →
              </Link>
              <span className="text-slate-300">•</span>
              <Link to="/noida-escorts/" className="text-xs font-bold text-slate-700 hover:text-slate-900 underline">
                View 2026 Transparent Rate List →
              </Link>
            </div>
          </div>

          {/* Chapter 4: Key Guides & Institutional Link Directory */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-black mb-3">Complete Noida Knowledge & Institutional Directory</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-2xl">
              Access all official institutional resources, policy documents, and customer service desks:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs font-semibold">
              <Link to="/noida-escorts/" className="p-3 bg-slate-800/80 hover:bg-rose-600 rounded-xl transition-colors flex items-center justify-between">
                <span>Noida Rate List (2026)</span>
                <ChevronRight size={14} className="opacity-60" />
              </Link>
              <Link to="/safety-guide/" className="p-3 bg-slate-800/80 hover:bg-rose-600 rounded-xl transition-colors flex items-center justify-between">
                <span>Anti-Scam Protocols</span>
                <ChevronRight size={14} className="opacity-60" />
              </Link>
              <Link to="/booking/" className="p-3 bg-slate-800/80 hover:bg-rose-600 rounded-xl transition-colors flex items-center justify-between">
                <span>24/7 Outcall Booking</span>
                <ChevronRight size={14} className="opacity-60" />
              </Link>
              <Link to="/noida-areas/" className="p-3 bg-slate-800/80 hover:bg-rose-600 rounded-xl transition-colors flex items-center justify-between">
                <span>18 Sectors Index</span>
                <ChevronRight size={14} className="opacity-60" />
              </Link>
              <Link to="/gallery/" className="p-3 bg-slate-800/80 hover:bg-rose-600 rounded-xl transition-colors flex items-center justify-between">
                <span>Photo Gallery</span>
                <ChevronRight size={14} className="opacity-60" />
              </Link>
              <Link to="/faq/" className="p-3 bg-slate-800/80 hover:bg-rose-600 rounded-xl transition-colors flex items-center justify-between">
                <span>Help & FAQs</span>
                <ChevronRight size={14} className="opacity-60" />
              </Link>
              <Link to="/about/" className="p-3 bg-slate-800/80 hover:bg-rose-600 rounded-xl transition-colors flex items-center justify-between">
                <span>About Escorts Hub</span>
                <ChevronRight size={14} className="opacity-60" />
              </Link>
              <Link to="/contact/" className="p-3 bg-slate-800/80 hover:bg-rose-600 rounded-xl transition-colors flex items-center justify-between">
                <span>Contact Desk</span>
                <ChevronRight size={14} className="opacity-60" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. Master FAQ Accordion (SEO Rich Snippets) ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            Common Inquiries About Noida Escorts & Outcalls
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:text-rose-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-rose-50 text-rose-600' : ''}`}>
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 5. Similar Keywords & Intent Cloud ── */}
      <section className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimilarKeywordsCloud localityName="Noida" />
        </div>
      </section>

      {/* ── 6. Bottom Sticky CTA Bar ── */}
      <div className="bg-slate-950 text-white py-12 px-4 border-t border-slate-800 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-black mb-3 text-white">Ready for Discreet VIP Companionship in Noida?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            Connect directly with verified models stationed across Sector 18, 62, and Expressway. Fast 20-minute arrival with zero advance payment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <MessageCircle size={16} /> WhatsApp Dispatch (+91 8218125815)
            </a>
            <a
              href={CONTACT.phoneHref}
              className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Phone size={16} /> Call Helpline: {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NoidaMasterHubPage;
