import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, Sparkles, Copy, Check, ExternalLink, ThumbsUp, Bot, RefreshCw, RotateCcw } from 'lucide-react';
import { BRAND, CONTACT } from '@/config/site';

const KEYWORD_CHIPS = [
  { id: 'k1', label: ' Verified Profiles', text: `${BRAND.name} provides 100% genuine photo verified companion listings in Noida!` },
  { id: 'k2', label: ' Verified Companion Fee', text: 'Clean payment policy with verified companion screening.' },
  { id: 'k3', label: ' 5-Star Hotel Outcall', text: 'Companions arrive promptly at hotel rooms within 30 minutes.' },
  { id: 'k4', label: ' 100% Discretion', text: 'Utmost privacy, polite behavior, and total confidentiality maintained.' },
  { id: 'k5', label: ' Sindhi Camp & MI Road', text: 'Fastest service in Sindhi Camp, MI Road, and Vaishali Nagar.' },
  { id: 'k6', label: ' Russian Models', text: 'Stunning VIP Russian models with professional hosting etiquette.' },
];

export const ReviewGatingSystem: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [selectedChips, setSelectedChips] = useState<string[]>(['k1', 'k2', 'k4']);
  const [generatedReviewText, setGeneratedReviewText] = useState<string>('');
  const [copiedText, setCopiedText] = useState<boolean>(false);
  const [privateFeedback, setPrivateFeedback] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const synthesizeLocalWebsiteReview = (chipIds: string[]) => {
    const selectedTexts = KEYWORD_CHIPS.filter((c) => chipIds.includes(c.id)).map((c) => c.text);
    
    const openers = [
      `Had a wonderful 5-star experience with ${BRAND.name}!`,
      `Outstanding coordination today through ${BRAND.name} Noida!`,
      `Truly verified and reliable companion platform in Noida.`,
      `Best escort portal in the Pink City with real photos.`
    ];

    const closers = [
      'Will definitely book again on my next trip to Noida!',
      `Highly recommended for anyone visiting Noida looking for verified companion service.`,
      `Worth every rupee. 10/10 rating for genuineness and quick WhatsApp response!`,
      `Available 24 hours which is a huge benefit for business travelers.`
    ];

    const pickRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    const mainBody = selectedTexts.length > 0 ? selectedTexts.join(' ') : 'Prompt coordination and 100% genuine photos.';
    return `${pickRandom(openers)} ${mainBody} ${pickRandom(closers)}`;
  };

  useEffect(() => {
    if (rating >= 4) {
      setGeneratedReviewText(synthesizeLocalWebsiteReview(selectedChips));
    }
  }, [rating]);

  const handleChipToggle = (chipId: string) => {
    const updated = selectedChips.includes(chipId)
      ? selectedChips.filter((id) => id !== chipId)
      : [...selectedChips, chipId];
    
    setSelectedChips(updated);
    setGeneratedReviewText(synthesizeLocalWebsiteReview(updated));
  };

  const handleRegenerateText = () => {
    setGeneratedReviewText(synthesizeLocalWebsiteReview(selectedChips));
  };

  const handleResetForm = () => {
    setRating(0);
    setHoverRating(0);
    setSelectedChips(['k1', 'k2', 'k4']);
    setGeneratedReviewText('');
    setCopiedText(false);
    setPrivateFeedback('');
    setIsSubmitted(false);
  };

  const handleCopyAndGoogleRedirect = () => {
    navigator.clipboard.writeText(generatedReviewText).catch(() => {});
    setCopiedText(true);
    setIsSubmitted(true);

    setTimeout(() => {
      const targetUrl = CONTACT.directReviewLink || CONTACT.mapLink;
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      
      setTimeout(() => {
        handleResetForm();
      }, 3500);
    }, 1000);
  };

  const handlePrivateFeedbackWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello (${BRAND.name})! Client Feedback (Rating: ${rating} Stars):\n\n"${privateFeedback || 'I had an issue during my booking.'}"\n\nPlease check.`;
    window.open(`https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent(message)}`, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => {
      handleResetForm();
    }, 3000);
  };

  return (
    <section className="py-8 md:py-14 px-2 md:px-4 bg-slate-950 text-white relative overflow-hidden border-t-2 border-slate-800" id="review-booster">
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 md:mb-8">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-600 text-white text-[10px] md:text-xs font-black uppercase tracking-widest mb-2 shadow-md">
            <Sparkles className="w-3.5 h-3.5 fill-current" /> RATE YOUR EXPERIENCE
          </div>
          <h2 className="text-xl md:text-4xl font-black text-white tracking-tight">
            Client Rating & Verification Feedback
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mt-1 text-[11px] md:text-sm font-medium">
            Tap a star rating below to share your experience with Escorts Hub Noida.
          </p>
        </div>

        {/* STAGE 1: STAR RATING SELECTION */}
        <div className="p-3 md:p-6 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 shadow-xl text-center space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-[11px] md:text-base font-bold text-slate-200 uppercase tracking-wide">
              {rating === 0 ? ' Tap a Star (1 to 5 Stars):' : `Your Rating: ${rating} / 5 Stars`}
            </h3>

            {rating > 0 && (
              <button
                type="button"
                onClick={handleResetForm}
                className="text-slate-400 hover:text-rose-400 text-[9px] md:text-xs flex items-center gap-1 bg-slate-800 px-2 py-0.5 rounded border border-slate-700 transition cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            )}
          </div>

          {/* Compact Star Rating Row */}
          <div className="flex items-center justify-center gap-1.5 md:gap-3 py-1">
            {[1, 2, 3, 4, 5].map((star) => {
              const active = star <= (hoverRating || rating);
              return (
                <button
                  key={star}
                  type="button"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => {
                    setRating(star);
                    setIsSubmitted(false);
                  }}
                  className="p-1 transition-transform transform hover:scale-125 focus:outline-none cursor-pointer"
                  aria-label={`Rate ${star} stars`}
                >
                  <Star
                    className={`w-7 h-7 md:w-10 md:h-10 transition-all ${
                      active ? 'text-rose-500 fill-rose-500 drop-shadow-[0_0_10px_rgba(225,29,72,0.8)] scale-105' : 'text-slate-700 hover:text-rose-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {rating === 0 && (
            <p className="text-slate-400 text-[10px] md:text-xs italic">
              Click 5 stars above to generate an authentic client review text.
            </p>
          )}

          {rating > 0 && (
            <div className="inline-block px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] md:text-xs font-black tracking-wider uppercase">
              {rating === 5 ? ' 5 Stars — Excellent Experience!' : rating === 4 ? ' 4 Stars — Great Experience!' : '️ Needs Attention'}
            </div>
          )}
        </div>

        {/* STAGE 2A: COMPACT 5-STAR GENERATOR BOX */}
        {rating >= 4 && !isSubmitted && (
          <div className="mt-3.5 md:mt-6 p-3 md:p-5 rounded-xl md:rounded-2xl bg-gradient-to-b from-slate-900 to-black border-2 border-rose-500/60 shadow-xl space-y-2.5 md:space-y-4 animate-fade-in">
            
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <div className="flex items-center gap-1.5 text-rose-300 font-bold text-xs md:text-base">
                <ThumbsUp className="w-4 h-4 text-rose-400 shrink-0" />
                <span>5-Star Copy-Paste Review Text</span>
              </div>

              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-600 text-white text-[9px] md:text-[10px] font-black uppercase tracking-wider shadow">
                <Sparkles className="w-3 h-3 fill-current" /> Auto-Generated
              </div>
            </div>

            <p className="text-slate-300 text-[10px] md:text-xs font-medium">
              Tap topic chips below to customize keywords:
            </p>

            {/* Compact Keyword Chips */}
            <div className="flex flex-wrap gap-1 md:gap-2">
              {KEYWORD_CHIPS.map((chip) => {
                const isSelected = selectedChips.includes(chip.id);
                return (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={() => handleChipToggle(chip.id)}
                    className={`px-2 py-0.5 rounded-lg text-[9px] md:text-[10px] font-bold border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-rose-600 text-white border-rose-500 shadow scale-105'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-rose-400'
                    }`}
                  >
                    {isSelected ? ' ' : '+ '}{chip.label}
                  </button>
                );
              })}
            </div>

            {/* Compact Editable Review Textarea Box */}
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shadow-inner relative space-y-1">
              <div className="flex items-center justify-between text-rose-300 text-[10px] font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <Bot className="w-3.5 h-3.5 text-rose-400" /> Review Text:
                </span>
                <button
                  type="button"
                  onClick={handleRegenerateText}
                  className="text-rose-400 hover:text-white text-[9px] font-bold flex items-center gap-1 bg-rose-500/20 px-1.5 py-0.5 rounded border border-rose-400/40 cursor-pointer"
                >
                  <RefreshCw className="w-2.5 h-2.5" /> New Text
                </button>
              </div>

              <textarea
                rows={2}
                value={generatedReviewText}
                onChange={(e) => setGeneratedReviewText(e.target.value)}
                className="w-full bg-slate-900 p-2 rounded-lg text-slate-100 font-sans text-[11px] md:text-xs border border-slate-700 focus:outline-none focus:border-rose-500 leading-relaxed"
              />
            </div>

            {/* Compact Single Full-Width Button */}
            <div className="pt-1">
              <button
                onClick={handleCopyAndGoogleRedirect}
                className="w-full py-2.5 md:py-3 px-4 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white font-black text-xs md:text-sm flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(225,29,72,0.5)] transition transform hover:scale-[1.01] active:scale-95 uppercase tracking-wide cursor-pointer"
              >
                {copiedText ? (
                  <>
                    <Check className="w-4 h-4 text-white" /> Copied! Opening Google Maps...
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> ⭐ COPY REVIEW & POST ON GOOGLE MAPS <ExternalLink className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* THANK YOU / SUCCESS SCREEN */}
        {isSubmitted && (
          <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/60 text-center space-y-2 animate-fade-in">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="text-sm md:text-base font-bold text-white">Thank You for Your Review!</h3>
            <p className="text-[11px] text-slate-300">
              Review text copied to clipboard. Form will reset shortly...
            </p>
            <button
              onClick={handleResetForm}
              className="px-3 py-1 bg-rose-600 text-white font-bold text-[10px] rounded-lg cursor-pointer"
            >
              Reset Form Now
            </button>
          </div>
        )}

        {/* STAGE 2B: PRIVATE FEEDBACK */}
        {rating >= 1 && rating <= 3 && !isSubmitted && (
          <div className="mt-4 p-3 md:p-5 rounded-xl bg-slate-900 border border-slate-700 shadow-xl space-y-2">
            <div className="flex items-center gap-2 text-rose-400">
              <Star className="w-4 h-4 text-rose-400 fill-rose-400 shrink-0" />
              <h3 className="text-xs md:text-base font-bold text-white">Submit Your Feedback Directly</h3>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Please share how we can improve your booking experience with {BRAND.name}.
            </p>

            <form onSubmit={handlePrivateFeedbackWhatsApp} className="space-y-2">
              <textarea
                rows={2}
                required
                placeholder="Write your feedback here..."
                value={privateFeedback}
                onChange={(e) => setPrivateFeedback(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-rose-500"
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-rose-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" /> Send WhatsApp Feedback
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewGatingSystem;
