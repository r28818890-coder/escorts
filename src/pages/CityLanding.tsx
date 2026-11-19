import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  HelpCircle, 
  ChevronDown, 
  Hotel, 
  Navigation, 
  Flame, 
  ArrowRight,
  ChevronRight,
  Shield,
  CreditCard
} from 'lucide-react';
import { BRAND, CONTACT } from '@/config/site';
import { NOIDA_AREAS_DATA, getNoidaAreaDetail, getAllAreaKeywords } from '@/data/noidaAreasData';
import { INITIAL_CLASSIFIED_ADS } from '@/config/portalData';
import AdCard from '@/components/common/AdCard';
import SEO from '@/components/common/SEO';
import SimilarKeywordsCloud from '@/components/common/SimilarKeywordsCloud';
import NotFoundPage from '@/pages/NotFoundPage';

export const CityLanding: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getNoidaAreaDetail(slug) : undefined;
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  if (!area) {
    return <NotFoundPage />;
  }

  // Filter verified classified ads for this locality
  const localAds = INITIAL_CLASSIFIED_ADS.filter(ad => ad.localitySlug === area.slug);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // Structured Data (FAQPage + LocalBusiness + BreadcrumbList)
  const canonicalUrl = `${BRAND.domain}/area/${area.slug}/`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EntertainmentBusiness',
        '@id': `${canonicalUrl}#business`,
        name: `${BRAND.name} - ${area.name}`,
        description: area.metaDescription,
        url: canonicalUrl,
        telephone: `+91${CONTACT.phone}`,
        image: BRAND.ogImage,
        priceRange: '₹2,500 - ₹20,000',
        paymentAccepted: 'Cash, UPI',
        currenciesAccepted: 'INR',
        address: {
          '@type': 'PostalAddress',
          streetAddress: area.landmarks.join(', '),
          addressLocality: area.name,
          addressRegion: 'Uttar Pradesh',
          postalCode: '201301',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: area.geo.lat,
          longitude: area.geo.lng
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.95',
          reviewCount: '128'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: area.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BRAND.domain}/`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Noida Areas',
            item: `${BRAND.domain}/noida-areas/`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: area.name,
            item: canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] font-sans pb-20">
      <SEO
        title={area.metaTitle}
        description={area.metaDescription}
        schema={schema}
        keywords={getAllAreaKeywords(area).join(', ')}
      />

      {/* Top Breadcrumb Nav */}
      <div className="bg-slate-100/80 border-b border-slate-200 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link to="/" className="hover:text-rose-600 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/noida-areas" className="hover:text-rose-600 transition-colors">Noida Areas</Link>
            <ChevronRight size={12} />
            <span className="text-rose-600 font-bold">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <div className="relative pt-10 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-[#f8fafc] border-b border-slate-200">
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
              <MapPin size={13} className="text-rose-600" /> {area.zone} • {area.name}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
              <ShieldCheck size={13} className="text-emerald-600" /> 100% Real Photo Verified
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
              <Clock size={13} className="text-amber-600" /> Fast {area.eta} Arrival
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
            {area.h1}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mb-6 leading-relaxed">
            {area.overview[0]}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`${CONTACT.whatsapp1Href}?text=${encodeURIComponent(`Hello ${BRAND.name}, I want to book a verified companion in ${area.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-md hover:brightness-110 transition-transform flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle size={16} /> WhatsApp Inquiry ({area.eta})
            </a>
            <a
              href={CONTACT.phoneHref}
              className="px-6 py-3 bg-white border border-slate-300 text-slate-900 font-bold uppercase tracking-wider text-xs rounded-xl flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
            >
              <Phone size={16} className="text-rose-600" />
              Call Hotline: {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-6 border-t border-slate-200/80">
            <div className="p-3 bg-white border border-slate-200 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Outcall Speed</span>
              <span className="text-sm sm:text-base font-black text-slate-900">{area.eta}</span>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Nearest Metro</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 truncate block">{area.metro.split('(')[0]}</span>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Active Verified Models</span>
              <span className="text-sm sm:text-base font-black text-emerald-600">{localAds.length} Profiles Available</span>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Payment Policy</span>
              <span className="text-sm sm:text-base font-black text-indigo-600">Zero Advance (COD)</span>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">

        {/* 1. Verified Model Classifieds for this Area */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">
                <Flame size={14} /> 100% Real Photo Verified
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Verified Companions in {area.name}
              </h2>
            </div>
            <a
              href={`${CONTACT.whatsapp1Href}?text=${encodeURIComponent(`Hello ${BRAND.name}, please share currently active profiles in ${area.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition-colors"
            >
              <MessageCircle size={14} /> Live WhatsApp Catalog
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {localAds.map((ad, idx) => (
              <AdCard key={ad.id} ad={ad} featured={idx < 2} />
            ))}
          </div>
        </section>

        {/* 2. Detailed Localized Content Narrative */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
              Executive Companion &amp; Outcall Guide for {area.name}
            </h2>
            <p className="text-xs text-slate-500">
              Verified local information, transit nodes, and high-profile hospitality standards across {area.name}, Noida.
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
            {area.overview.slice(1).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Navigation size={16} className="text-rose-600" /> Transit &amp; Landmarks
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Metro Hub:</strong> {area.metro}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Key Waypoints:</strong> {area.landmarks.join(', ')}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Travel Time:</strong> {area.driveTime} ({area.eta} doorstep dispatch).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-600" /> Strict Zero-Advance Guarantee
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {area.discretionNotice}
              </p>
              <p className="text-xs text-rose-700 font-bold">
                ✓ Pay 100% in cash directly to your companion upon arrival at your room door.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Recommended 4-Star & 5-Star Hotels for Outcalls */}
        <section>
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
              <Hotel size={14} /> Luxury Outcall Hospitality
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Recommended 4-Star &amp; 5-Star Hotels in {area.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {area.hotelOutcallGuide}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {area.hotels.map((h, idx) => (
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
                  ✓ Doorstep Outcall ETA: {area.eta}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Transparent Rates & Session Formats */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-1">Honest &amp; Clear Pricing</span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Transparent Session Rates in {area.name}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              No hidden room protection tokens, no advance payments, and zero surprise fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {area.pricing.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">{p.tier}</span>
                <div className="text-2xl font-black text-slate-900">{p.rate}</div>
                <span className="text-xs font-bold text-slate-700 block">{p.duration}</span>
                <p className="text-xs text-slate-500 pt-2 border-t border-slate-200 leading-relaxed">{p.includes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Client Reviews for this Sector */}
        <section>
          <div className="mb-6">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">Authentic Client Feedback</span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Recent Client Reviews in {area.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {area.reviews.map((rev, idx) => (
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
        </section>

        {/* 6. Popular Searches & Similar Keyword Cloud */}
        <SimilarKeywordsCloud area={area} />

        {/* 7. Localized FAQ Accordion */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle size={22} className="text-rose-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Frequently Asked Questions in {area.name}
            </h2>
          </div>

          <div className="space-y-3">
            {area.faqs.map((faq, idx) => (
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
        </section>

        {/* 7. Nearby Noida Areas Cross-Linking Mesh */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <MapPin size={16} className="text-rose-600" />
            Explore Verified Escorts in Neighboring Noida &amp; NCR Sectors:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {area.adjacentSectors.map((adj, idx) => (
              <Link
                key={idx}
                to={`/area/${adj.slug}`}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-rose-400 text-slate-700 hover:text-rose-600 transition-colors group flex items-center justify-between font-medium"
              >
                <span className="flex items-center gap-1.5 truncate">
                  <MapPin size={11} className="text-rose-600 shrink-0" /> {adj.name}
                </span>
                <ArrowRight size={12} className="text-slate-400 group-hover:text-rose-600 shrink-0" />
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default CityLanding;
