import React, { useState } from 'react';
import { Phone, MessageCircle, ShieldCheck, MapPin, Star, Sparkles } from 'lucide-react';
import { ClassifiedAd } from '@/config/portalData';
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
    `Hello! I saw your verified profile on Jaipur Escorts Club: "${ad.title}". Please confirm your availability in ${ad.locality}, Jaipur.`
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
        className={`group relative bg-white rounded-xl overflow-hidden border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between ${
          featured || ad.isVip
            ? 'border-rose-400 shadow-md ring-1 ring-rose-400/30'
            : 'border-slate-200 shadow-sm hover:border-rose-400/80'
        }`}
      >
        {/* Top Banner Image Box */}
        <div className="relative aspect-[1/1] overflow-hidden bg-slate-100">
          <Link to={`/${ad.categorySlug}/${ad.localitySlug}/${ad.slug}`} className="block w-full h-full">
            <img
              src={ad.images[0] || '/jaipur_escorts_club_logo.jpg'}
              alt={ad.title}
              width={360}
              height={360}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </Link>

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-1.5 left-1.5 right-1.5 flex items-center justify-between gap-1 pointer-events-none">
            <div className="flex items-center gap-1">
              {ad.isVerified && (
                <span className="bg-emerald-600 text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded shadow flex items-center gap-0.5">
                  <ShieldCheck size={10} /> Real
                </span>
              )}
              {ad.isVip && (
                <span className="bg-rose-600 text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded shadow flex items-center gap-0.5">
                  <Sparkles size={9} /> VIP
                </span>
              )}
            </div>

            {ad.isOnline && (
              <span className="bg-white/90 backdrop-blur-sm text-emerald-700 border border-emerald-300 text-[9px] font-bold px-1.5 py-0.5 rounded shadow flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Online
              </span>
            )}
          </div>

          {/* Location Tag */}
          <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between pointer-events-none">
            <span className="bg-slate-900/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] text-white font-semibold flex items-center gap-0.5">
              <MapPin size={9} className="text-rose-400" />
              {ad.locality}
            </span>
            {ad.age && (
              <span className="bg-slate-900/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] text-rose-200 font-bold">
                {ad.age} Yrs
              </span>
            )}
          </div>
        </div>

        {/* Daylight High-Contrast Card Body */}
        <div className="p-2.5 flex flex-col justify-between flex-1 space-y-2">
          <div>
            <Link
              to={`/${ad.categorySlug}/${ad.localitySlug}/${ad.slug}`}
              className="block group-hover:text-rose-600 transition-colors"
            >
              <h3 className="font-bold text-xs text-slate-900 line-clamp-1 leading-snug">
                {ad.title}
              </h3>
            </Link>

            {/* Quick rating & reviews */}
            <div className="flex items-center justify-between text-[10px] text-slate-500 mt-1">
              <button
                type="button"
                onClick={() => setIsReviewModalOpen(true)}
                className="flex items-center gap-1 text-rose-600 font-bold hover:underline cursor-pointer"
                title="Rate this profile"
              >
                <Star size={10} className="fill-rose-500 text-rose-500" />
                <span>{ratingState.rating}</span>
                <span className="text-slate-400 font-normal">({ratingState.count})</span>
              </button>

              <span className="text-emerald-700 font-bold text-[9px] uppercase tracking-wider bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200">
                24/7 Outcall
              </span>
            </div>
          </div>

          {/* Action CTAs: Mini Call & WhatsApp */}
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            <a
              href={`tel:+91${ad.phone.replace(/\D/g, '')}`}
              className="py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] flex items-center justify-center gap-1 border border-slate-300 transition-colors active:scale-95"
              aria-label={`Call ${ad.title}`}
            >
              <Phone size={11} className="text-slate-900" />
              <span>Call</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 px-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-all shadow-sm active:scale-95"
              aria-label={`WhatsApp ${ad.title}`}
            >
              <MessageCircle size={11} />
              <span>Chat</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdCard;
