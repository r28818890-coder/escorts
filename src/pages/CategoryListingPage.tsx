import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  ChevronRight, 
  ShieldCheck, 
  PlusCircle, 
  Flame, 
  Sparkles,
  HelpCircle,
  ChevronDown,
  Phone,
  MessageCircle,
  CheckCircle,
  Star,
  Layers,
  ArrowRight,
  Heart,
  UserCheck,
  Users,
  Hotel,
  Clock
} from 'lucide-react';
import { 
  PORTAL_CATEGORIES, 
  NOIDA_LOCALITIES, 
  INITIAL_CLASSIFIED_ADS, 
  ClassifiedAd,
  getCategoryBySlug,
  getLocalityBySlug
} from '@/config/portalData';
import { getNoidaAreaDetail } from '@/data/noidaAreasData';
import { generateLocalizedSeo } from '@/config/seoContentGenerator';
import SEO from '@/components/common/SEO';
import SimilarKeywordsCloud from '@/components/common/SimilarKeywordsCloud';
import NoidaSearchBar from '@/components/common/NoidaSearchBar';
import AdCard from '@/components/common/AdCard';
import PostAdModal from '@/components/common/PostAdModal';
import LiveActivityToast from '@/components/common/LiveActivityToast';
import { BRAND, CONTACT } from '@/config/site';

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Heart': return <Heart size={22} className="text-rose-600" />;
    case 'UserCheck': return <UserCheck size={22} className="text-emerald-600" />;
    case 'Users': return <Users size={22} className="text-indigo-600" />;
    case 'Flame': return <Flame size={22} className="text-rose-600" />;
    default: return <Sparkles size={22} className="text-indigo-600" />;
  }
};

export const CategoryListingPage: React.FC = () => {
  const { category, locality } = useParams<{ category: string; locality?: string }>();
  
  const currentCategory = getCategoryBySlug(category || 'vip-escorts') || PORTAL_CATEGORIES[0];
  const currentLocality = locality ? getLocalityBySlug(locality) : undefined;
  const areaDetail = currentLocality ? getNoidaAreaDetail(currentLocality.slug) : undefined;

  const [allAds, setAllAds] = useState<ClassifiedAd[]>(INITIAL_CLASSIFIED_ADS);
  const [filteredAds, setFilteredAds] = useState<ClassifiedAd[]>(INITIAL_CLASSIFIED_ADS);
  const [isPostAdOpen, setIsPostAdOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('noida_user_ads') || '[]');
      if (Array.isArray(stored) && stored.length > 0) {
        setAllAds([...stored, ...INITIAL_CLASSIFIED_ADS]);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    let result = [...allAds];

    // Filter by category
    if (currentCategory && currentCategory.slug !== 'all') {
      result = result.filter((ad) => ad.categorySlug === currentCategory.slug);
    }

    // Filter by locality
    if (currentLocality) {
      result = result.filter((ad) => ad.localitySlug === currentLocality.slug);
    }

    setFilteredAds(result);
  }, [category, locality, allAds]);

  const handleFilterChange = (cat: string, loc: string, query: string, activeChips: string[] = []) => {
    let result = [...allAds];

    if (cat && cat !== 'all') {
      result = result.filter((ad) => ad.categorySlug === cat);
    }
    if (loc && loc !== 'all') {
      result = result.filter((ad) => ad.localitySlug === loc);
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

  const seoData = generateLocalizedSeo(currentCategory, currentLocality);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div key={`${category}-${locality || 'all'}`} className="bg-[#f8fafc] min-h-screen text-[#0f172a] pt-6 pb-20 page-enter">
      
      {/* Live Social Proof Activity Toast */}
      <LiveActivityToast />

      <SEO
        title={seoData.metaTitle}
        description={seoData.metaDescription}
        schema={seoData.schema}
        keywords={seoData.keywords?.join(', ')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Hierarchy */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap font-medium">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight size={13} />
          <Link to={`/${currentCategory.slug}`} className="hover:text-amber-600 transition-colors">
            {currentCategory.name}
          </Link>
          {currentLocality && (
            <>
              <ChevronRight size={13} />
              <span className="text-amber-600 font-bold">{currentLocality.name}</span>
            </>
          )}
        </nav>

        {/* Top Hero Header */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 mb-8 relative overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-4xl">
            
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                {getCategoryIcon(currentCategory.iconName)}
              </div>
              <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                NOIDA & NCR • {currentLocality ? currentLocality.name.toUpperCase() : 'ALL SECTORS'}
              </span>
              <span className="bg-emerald-50 text-emerald-800 border border-emerald-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck size={12} className="text-emerald-600" /> 100% Real Phone Verified
              </span>
              {areaDetail && (
                <span className="bg-rose-50 text-rose-800 border border-rose-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Clock size={12} className="text-rose-600" /> Fast {areaDetail.eta} Arrival
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
              {seoData.h1}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              {seoData.introText}
            </p>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
              {seoData.landmarkHighlights}
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
              {currentCategory.subcategories.map((sub, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-50 text-slate-800 px-3 py-1 rounded-lg border border-slate-200 flex items-center gap-1 font-medium"
                >
                  <CheckCircle size={11} className="text-amber-600" />
                  {sub}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-8">
          <NoidaSearchBar
            initialCategory={currentCategory.slug}
            initialLocality={currentLocality?.slug || 'all'}
          />
        </div>

        {/* Localities Quick Switcher Matrix */}
        <div className="mb-10">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <MapPin size={14} className="text-amber-600" />
            Switch Noida & NCR Area for {currentCategory.name}:
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <Link
              to={`/${currentCategory.slug}`}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                !currentLocality
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              All Noida & NCR
            </Link>
            {NOIDA_LOCALITIES.map((loc) => (
              <Link
                key={loc.id}
                to={`/${currentCategory.slug}/${loc.slug}`}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  currentLocality?.slug === loc.slug
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <MapPin size={11} className={currentLocality?.slug === loc.slug ? 'text-white' : 'text-amber-600'} />
                <span>{loc.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Live Classifieds Listings */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                <Flame size={18} />
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-slate-900">
                Active Listings in {currentLocality ? `${currentLocality.name}` : 'Noida & NCR'}
              </h2>
            </div>

            <a
              href={`${CONTACT.whatsapp1Href}?text=${encodeURIComponent(`Hello ${BRAND.name}! I am checking verified ${currentCategory.name} listings in ${currentLocality ? currentLocality.name : 'Noida'}.` )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <MessageCircle size={14} /> WhatsApp Support
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-3.5">
            {filteredAds.map((ad, idx) => (
              <AdCard key={ad.id} ad={ad} featured={idx < 4} />
            ))}
          </div>
        </div>

        {/* Service Highlights (4 Pillars) */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
            Why Choose {currentCategory.name} in {currentLocality ? currentLocality.name : 'Noida'}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {seoData.servicesBreakdown.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 text-xs font-black">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-sm text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Tiers & Hospitality Standards */}
        <div className="mb-16 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
            Available Sessions & Meeting Formats in {currentLocality ? currentLocality.name : 'Noida'}
          </h2>
          <p className="text-xs text-slate-500 mb-6">
            Verified independent service providers offering customized companionship formats in {currentLocality ? currentLocality.name : 'Noida'}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {seoData.pricingOverview.map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block">{p.tier}</span>
                <span className="text-base font-bold text-slate-900 block">{p.duration}</span>
                <p className="text-xs text-slate-500 pt-2 border-t border-slate-200">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Hotels in Locality (if locality selected) */}
        {areaDetail && areaDetail.hotels && (
          <div className="mb-16">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                <Hotel size={14} /> Luxury Outcall Hospitality
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Recommended 4-Star &amp; 5-Star Hotels for Outcalls in {currentLocality?.name}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {areaDetail.hotelOutcallGuide}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {areaDetail.hotels.map((h, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:border-indigo-400 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {h.stars}
                    </span>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 pt-1">{h.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{h.notes}</p>
                  <div className="pt-2 text-[11px] text-emerald-600 font-bold">
                    ✓ Outcall Doorstep ETA: {areaDetail.eta}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Client Reviews in Locality (if locality selected) */}
        {areaDetail && areaDetail.reviews && areaDetail.reviews.length > 0 && (
          <div className="mb-16">
            <div className="mb-6">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">Verified Client Experiences</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Recent Client Reviews in {currentLocality?.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {areaDetail.reviews.map((rev, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">{rev.clientName}</h3>
                      <span className="text-xs text-slate-500">{rev.hotelOrLocation}</span>
                    </div>
                    <div className="flex text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    "{rev.reviewText}"
                  </p>
                  <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span>Verified Hotel Outcall</span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Popular Searches & Similar Keywords Cloud */}
        <div className="mb-14">
          <SimilarKeywordsCloud 
            area={areaDetail} 
            categorySlug={currentCategory.slug} 
            categoryName={currentCategory.name} 
            localityName={currentLocality?.name} 
            customGroups={seoData.similarKeywordGroups} 
          />
        </div>

        {/* Localized FAQ Accordion */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle size={20} className="text-rose-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Frequently Asked Questions - {currentCategory.name} in {currentLocality ? currentLocality.name : 'Noida'}
            </h2>
          </div>

          <div className="space-y-3">
            {seoData.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-rose-600 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-rose-600 transition-transform duration-200 ${
                      openFaqIdx === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 ${
                    openFaqIdx === idx ? 'block' : 'hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Noida Areas Cross-Linking Mesh */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <MapPin size={16} className="text-rose-600" />
            Explore {currentCategory.name} in Neighboring Noida Localities:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {seoData.nearbyLocalities.map((near, idx) => (
              <Link
                key={idx}
                to={`/${currentCategory.slug}/${near.slug}`}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-rose-400 text-slate-700 hover:text-rose-600 transition-colors group flex items-center justify-between font-medium"
              >
                <span className="flex items-center gap-1">
                  <MapPin size={11} className="text-rose-600" /> {near.name}
                </span>
                <span className="text-[10px] text-slate-400 group-hover:text-rose-600">{near.distance}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoryListingPage;
