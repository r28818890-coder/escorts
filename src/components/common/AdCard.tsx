import React, { useState } from 'react';
import { Phone, MessageCircle, ShieldCheck, MapPin, Star, Sparkles } from 'lucide-react';
import { ClassifiedAd } from '@/config/portalData';
import { BRAND } from '@/config/site';
import { Link } from 'react-router-dom';
import ReviewModal from '@/components/common/ReviewModal';

interface AdCardProps {
  ad: ClassifiedAd;
  featured?: boolean;
}

export const AdCard: React.FC<AdCardProps> = ({ ad, featured = false }) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [ratingState, setRatingState] = useState({
    rating: ad.rating,
    count: ad.reviewsCount,
  });

  const whatsappUrl = `https://wa.me/${ad.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hello! I saw your verified profile on ${BRAND.name}: "${ad.title}". Please confirm your availability in ${ad.locality}, ${ad.city || 'Noida'}.`
  )}`;

  const handleReviewSubmitted = (review: { author: string; rating: number; comment: string }) => {
    setRatingState((prev) => ({
      rating: parseFloat(((prev.rating * prev.count + review.rating) / (prev.count + 1)).toFixed(1)),
      count: prev.count + 1,
    }));
  };

  return (
    <>
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        adTitle={ad.title}
        onReviewSubmitted={handleReviewSubmitted}
      />

      <div
        className={`ad-card-item group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
          featured || ad.isVip
            ? 'border-amber-400/90 shadow-sm ring-1 ring-amber-400/30 hover:shadow-md'
            : 'border-slate-200/90 shadow-sm hover:border-amber-400/70 hover:shadow-md'
        }`}
      >
        {/* Top Image Box */}
        <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
          <Link to={`/${ad.categorySlug}/${ad.localitySlug}/${ad.slug}`} className="block w-full h-full">
            <img
              src={ad.images[0] || '/ecj-mark.svg'}
              alt={ad.alt || ad.title}
              width={400}
              height={533}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading={featured ? "eager" : "lazy"}
              fetchPriority={featured ? "high" : "auto"}
              decoding="async"
            />
          </Link>

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-1.5 left-1.5 right-1.5 flex items-center justify-between gap-1 pointer-events-none">
            <div className="flex items-center gap-1">
              {ad.isVerified && (
                <span className="bg-emerald-600 text-white text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full shadow flex items-center gap-0.5">
                  <ShieldCheck size={9} /> 100% Real
                </span>
              )}
              {ad.isVip && (
                <span className="bg-gradient-to-r from-amber-600 to-amber-500 text-white text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full shadow flex items-center gap-0.5">
                  <Sparkles size={8} /> VIP
                </span>
              )}
            </div>

            {ad.isOnline && (
              <span className="bg-slate-900/90 backdrop-blur-sm text-emerald-400 border border-emerald-500/40 text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            )}
          </div>

          {/* Location & Verified Badge (Rate tag removed as required) */}
          <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between pointer-events-none">
            <span className="bg-slate-900/85 backdrop-blur-md px-1.5 py-0.5 rounded-md text-[9px] sm:text-[10px] text-white font-semibold flex items-center gap-1 border border-white/10 shadow-sm">
              <MapPin size={9} className="text-amber-400 shrink-0" />
              <span className="truncate max-w-[95px] sm:max-w-[130px]">{ad.locality}</span>
            </span>
            {ad.age ? (
              <span className="bg-slate-900/85 backdrop-blur-md px-1.5 py-0.5 rounded-md text-[9px] sm:text-[10px] text-amber-300 font-bold border border-white/10 shadow-sm">
                {ad.age} Yrs
              </span>
            ) : null}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-2 sm:p-2.5 flex flex-col justify-between flex-1 space-y-1.5 bg-white">
          <div>
            <Link
              to={`/${ad.categorySlug}/${ad.localitySlug}/${ad.slug}`}
              className="block group-hover:text-amber-700 transition-colors"
            >
              <h3 className="font-bold text-[11px] sm:text-xs text-slate-900 line-clamp-1 leading-snug">
                {ad.title}
              </h3>
            </Link>

            {/* Quick rating & reviews */}
            <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-500 mt-0.5">
              <button
                type="button"
                onClick={() => setIsReviewModalOpen(true)}
                className="flex items-center gap-0.5 text-amber-700 font-bold hover:underline cursor-pointer"
                title="Rate this profile"
              >
                <Star size={10} className="fill-amber-500 text-amber-500" />
                <span>{ratingState.rating}</span>
                <span className="text-slate-400 font-normal">({ratingState.count})</span>
              </button>

              <span className="text-emerald-700 font-bold text-[8px] sm:text-[9px] uppercase tracking-wider bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200">
                24/7 Outcall
              </span>
            </div>
          </div>

          {/* Action CTAs: Mini Call & WhatsApp Side by Side */}
          <div className="grid grid-cols-2 gap-1 pt-0.5">
            <a
              href={`tel:+91${ad.phone.replace(/\D/g, '')}`}
              className="py-1.5 px-1 sm:py-2 sm:px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1 border border-slate-300 transition-colors active:scale-95"
              aria-label={`Call ${ad.title}`}
            >
              <Phone size={11} className="text-slate-900" />
              <span>Call</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 px-1 sm:py-2 sm:px-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1 transition-all shadow-sm active:scale-95"
              aria-label={`WhatsApp ${ad.title}`}
            >
              <MessageCircle size={11} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdCard;
