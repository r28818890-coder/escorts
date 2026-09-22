import React, { useState } from 'react';
import { X, Star, CheckCircle, ShieldCheck } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  adTitle: string;
  onReviewSubmitted?: (review: { author: string; rating: number; comment: string }) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  adTitle,
  onReviewSubmitted,
}) => {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    if (onReviewSubmitted) {
      onReviewSubmitted({
        author: author.trim() || 'Verified Guest',
        rating,
        comment: comment.trim(),
      });
    }

    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setAuthor('');
    setComment('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-2xl">
        
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X size={16} />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">Thank You For Your Review!</h3>
            <p className="text-xs text-slate-600 mb-5">
              Your feedback has been verified and added to the companion rating score.
            </p>
            <button
              onClick={handleClose}
              className="py-2.5 px-6 rounded-xl bg-rose-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-rose-700 cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">
              <ShieldCheck size={14} /> Verified Client Feedback
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-1 tracking-tight">
              Rate & Review Listing
            </h3>
            <p className="text-xs text-slate-500 line-clamp-1 mb-5">{adTitle}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Rating (1 to 5 Stars)
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 text-2xl transition-transform hover:scale-125 cursor-pointer"
                    >
                      <Star
                        size={28}
                        className={`${
                          (hoverRating || rating) >= star
                            ? 'text-rose-500 fill-current'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-rose-600 ml-2">
                    {rating} / 5 Stars
                  </span>
                </div>
              </div>

              {/* Author Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Name / Alias (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul S. / Verified Guest"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-rose-500 focus:outline-none"
                />
              </div>

              {/* Review Comment */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Experience & Review *
                </label>
                <textarea
                  rows={3}
                  placeholder="Write feedback regarding promptness, genuine appearance, and hospitality..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-rose-500 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-rose-600/20 cursor-pointer"
              >
                Submit Verified Review
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewModal;
