import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  MapPin, 
  Star, 
  Eye, 
  ChevronRight, 
  AlertTriangle, 
  Sparkles, 
  CheckCircle, 
  Lock 
} from 'lucide-react';
import { INITIAL_CLASSIFIED_ADS, ClassifiedAd, SAFETY_TIPS } from '@/config/portalData';
import { BRAND } from '@/config/site';
import SEO from '@/components/common/SEO';
import LiveActivityToast from '@/components/common/LiveActivityToast';
import { trackCallClick, trackWhatsAppClick } from '@/services/analytics';

export const AdDetailPage: React.FC = () => {
  const { slug } = useParams<{ category: string; locality: string; slug: string }>();

  let userAds: ClassifiedAd[] = [];
  try {
    const raw = localStorage.getItem('noida_user_ads');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) userAds = parsed;
    }
  } catch {}

  const allAds = [...userAds, ...INITIAL_CLASSIFIED_ADS];
  const ad = allAds.find((a) => a.slug === slug) || allAds[0];
  const uniqueImages = Array.from(new Set(ad.images || []));
  const [selectedImage, setSelectedImage] = useState<string>(uniqueImages[0] || '/ecj-mark.svg');

  useEffect(() => {
    if (uniqueImages.length > 0) {
      setSelectedImage(uniqueImages[0]);
    }
  }, [ad.slug]);

  const whatsappUrl = `https://wa.me/${ad.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hello! I saw your verified profile on ${BRAND.name}: "${ad.title}". Please confirm your availability and meeting details in ${ad.locality}, ${ad.city || 'Noida'}.`
  )}`;

  return (
    <div key={ad.slug} className="bg-[#f8fafc] min-h-screen text-[#0f172a] pt-6 pb-20 page-enter">
      
      <LiveActivityToast />

      <SEO
        title={`${ad.title.slice(0, 40)} | ${BRAND.name}`}
        description={`${ad.description.slice(0, 140)}... Verified companion in ${ad.locality}, Noida.`}
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: ad.title,
              description: ad.description,
              provider: {
                '@type': 'LocalBusiness',
                name: BRAND.name,
                telephone: '+918218125815',
                image: `${BRAND.domain}${ad.images[0]}`,
              },
              areaServed: {
                '@type': 'City',
                name: `${ad.locality}, Noida`,
              },
            },
            {
              '@type': 'BreadcrumbList',
              '@id': `${BRAND.domain}/${ad.categorySlug}/${ad.localitySlug}/${ad.slug}#breadcrumb`,
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: `${BRAND.domain}/`,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: ad.categorySlug.replace('-', ' '),
                  item: `${BRAND.domain}/${ad.categorySlug}`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: ad.locality,
                  item: `${BRAND.domain}/${ad.categorySlug}/${ad.localitySlug}`,
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: ad.title,
                  item: `${BRAND.domain}/${ad.categorySlug}/${ad.localitySlug}/${ad.slug}`,
                },
              ],
            },
          ],
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap font-medium">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight size={13} />
          <Link to={`/${ad.categorySlug}`} className="hover:text-amber-600 transition-colors capitalize">
            {ad.categorySlug.replace('-', ' ')}
          </Link>
          <ChevronRight size={13} />
          <Link to={`/${ad.categorySlug}/${ad.localitySlug}`} className="hover:text-amber-600 transition-colors">
            {ad.locality}
          </Link>
          <ChevronRight size={13} />
          <span className="text-amber-600 font-bold line-clamp-1">{ad.title}</span>
        </nav>

        {/* Ad Main Card */}
        <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm mb-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
            
            {/* Left: Image Box & Interactive Gallery */}
            <div className="md:col-span-5 flex flex-col gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                <img
                  src={selectedImage}
                  alt={ad.alt || `${ad.title.split(' - ')[0]} ${ad.age} Yrs VIP Escort in ${ad.locality}`}
                  width={500}
                  height={667}
                  className="w-full h-full object-cover transition-all duration-300"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {ad.isVerified && (
                    <span className="bg-emerald-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <ShieldCheck size={14} /> 100% Real
                    </span>
                  )}
                  {ad.isVip && (
                    <span className="bg-rose-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Sparkles size={13} /> VIP
                    </span>
                  )}
                </div>
              </div>

              {/* Multi-Photo Thumbnails (Only Rendered if Multiple Distinct Photos Exist) */}
              {uniqueImages.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {uniqueImages.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(imgSrc)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        selectedImage === imgSrc ? 'border-rose-500 scale-105 shadow-md' : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={imgSrc} alt="" width={64} height={64} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    </button>
                  ))}
                </div>
              )}

              {/* Quick Stats Bar */}
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
                  <span className="text-slate-500 block text-[10px]">Location</span>
                  <span className="font-bold text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                    <MapPin size={12} className="text-rose-600" /> {ad.locality}
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
                  <span className="text-slate-500 block text-[10px]">Rating</span>
                  <span className="font-bold text-rose-600 flex items-center justify-center gap-1 mt-0.5">
                    <Star size={12} className="fill-current text-rose-500" /> {ad.rating} ({ad.reviewsCount})
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Info & Contact CTAs */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-rose-50 text-rose-900 border border-rose-300 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md">
                    {ad.locality}, Noida
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Eye size={13} /> {ad.views} views • {ad.postedAt}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                  {ad.title}
                </h1>

                {/* Verified Status Banner */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-5 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block">
                      Verification Status
                    </span>
                    <span className="text-lg sm:text-xl font-black text-emerald-700 flex items-center gap-1.5 mt-0.5">
                      <ShieldCheck size={18} className="text-emerald-600" /> 100% Genuine & Active
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block">
                      Availability
                    </span>
                    <span className="text-sm font-bold text-rose-700">
                      Open 24/7 Outcall & In-call
                    </span>
                  </div>
                </div>

                {/* Services List */}
                <div className="mb-5">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                    Services & Specialties
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {ad.services.map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-50 text-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 flex items-center gap-1.5 font-medium"
                      >
                        <CheckCircle size={13} className="text-emerald-600" />
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                    Description & Guidelines
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-xl border border-slate-200">
                    {ad.description}
                  </p>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <a
                    href={`tel:+91${ad.phone.replace(/\D/g, '')}`}
                    onClick={() => trackCallClick(ad.phone, 'ad_detail_call')}
                    className="py-2.5 px-2 sm:py-3.5 sm:px-4 rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer active:scale-95 transition-transform"
                  >
                    <Phone size={14} />
                    <span>Call: {ad.phone}</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(ad.whatsapp, 'ad_detail_wa')}
                    className="py-2.5 px-2 sm:py-3.5 sm:px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95 cursor-pointer"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <p className="text-[10px] text-center text-slate-500 flex items-center justify-center gap-1">
                  <Lock size={11} className="text-rose-600" />
                  Direct communication. Mention "{BRAND.name}" for instant priority response.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Safety Warning Box */}
        <div className="bg-rose-50 border border-rose-300 rounded-3xl p-6 mb-8 flex items-start gap-4">
          <AlertTriangle size={24} className="text-rose-700 shrink-0 mt-1" />
          <div className="space-y-1 text-xs text-rose-900">
            <h4 className="font-bold text-sm text-rose-950">Noida Safety Notice</h4>
            <p>
              Never pay advance deposits through unfamiliar links before meeting in person. Always choose reputed hotels or private suites in central Noida localities.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdDetailPage;
