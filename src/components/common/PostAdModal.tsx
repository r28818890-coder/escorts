import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  CheckCircle, 
  Upload, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Sparkles,
  ExternalLink,
  Layers,
  Camera
} from 'lucide-react';
import { PORTAL_CATEGORIES, NOIDA_LOCALITIES, ClassifiedAd } from '@/config/portalData';
import { BRAND, CONTACT } from '@/config/site';

interface PostAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdSubmitted?: (newAd: ClassifiedAd) => void;
}

interface AdFormData {
  title: string;
  categoryId: string;
  localitySlug: string;
  phone: string;
  whatsapp: string;
  services: string;
  description: string;
  age: string;
  photoUrl: string;
}

export const PostAdModal: React.FC<PostAdModalProps> = ({ isOpen, onClose, onAdSubmitted }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AdFormData>({
    title: '',
    categoryId: 'call-girls',
    localitySlug: 'sector-18',
    phone: CONTACT.phone,
    whatsapp: CONTACT.whatsapp1,
    services: 'Hotel Outcall, Private In-Call, Thai Massage, Dinner Date',
    description: 'Verified independent model available for pleasant companionship and relaxing meetings in Noida & NCR. Real photos and prompt WhatsApp response.',
    age: '23',
    photoUrl: '/images/model_1.jpg',
  });
  const [createdAd, setCreatedAd] = useState<ClassifiedAd | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setFormData((prev) => ({ ...prev, photoUrl: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const matchedLocality = NOIDA_LOCALITIES.find((l) => l.slug === formData.localitySlug);
    const matchedCat = PORTAL_CATEGORIES.find((c) => c.slug === formData.categoryId);

    const safeTitle = formData.title.trim() || `Verified ${matchedCat?.name || 'Companion'} in ${matchedLocality?.name || 'Noida'}`;
    const safeSlug = `${safeTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}-${Date.now().toString().slice(-4)}`;

    const newAd: ClassifiedAd = {
      id: `ad-user-${Date.now()}`,
      title: safeTitle,
      slug: safeSlug,
      categoryId: formData.categoryId,
      categorySlug: formData.categoryId,
      locality: matchedLocality?.name || 'Sector 18 Noida',
      localitySlug: formData.localitySlug,
      city: 'Noida',
      age: parseInt(formData.age) || 23,
      phone: formData.phone.trim() || CONTACT.phone,
      whatsapp: (formData.whatsapp || formData.phone || CONTACT.whatsapp1).replace(/\D/g, ''),
      images: [formData.photoUrl || '/images/model_1.jpg'],
      isVerified: true,
      isVip: true,
      isOnline: true,
      rating: 5.0,
      reviewsCount: 1,
      services: formData.services.split(',').map((s) => s.trim()).filter(Boolean),
      description: formData.description.trim() || `100% Verified ad posted live on ${BRAND.name} Portal.`,
      postedAt: 'Just now',
      views: 1,
    };

    // Save to LocalStorage
    try {
      const stored = JSON.parse(localStorage.getItem('noida_user_ads') || localStorage.getItem('noida_user_ads') || '[]');
      stored.unshift(newAd);
      localStorage.setItem('noida_user_ads', JSON.stringify(stored));
    } catch (err) {
      console.error(err);
    }

    // Broadcast globally to all listeners on website
    window.dispatchEvent(new CustomEvent('noida-ad-created', { detail: newAd }));

    if (onAdSubmitted) {
      onAdSubmitted(newAd);
    }

    setCreatedAd(newAd);
    setIsSuccess(true);
  };

  const handleNavigateToAd = () => {
    if (createdAd) {
      const targetUrl = `/${createdAd.categorySlug}/${createdAd.localitySlug}/${createdAd.slug}`;
      handleClose();
      navigate(targetUrl);
    }
  };

  const handleNavigateToArea = () => {
    if (createdAd) {
      const targetUrl = `/${createdAd.categorySlug}/${createdAd.localitySlug}`;
      handleClose();
      navigate(targetUrl);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setCreatedAd(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-2.5 sm:p-4 bg-black/85 backdrop-blur-md">
      
      {/* Modal Container: 100% Window & Mobile Fit */}
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-[#0d0d0d] border border-rose-600/40 rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.95)] overflow-hidden">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#121212] px-5 py-4 border-b border-[#242424] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <Sparkles size={16} />
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-display font-black text-white leading-tight">
                {isSuccess ? 'Ad Successfully Published' : 'Post Free Ad in Noida & NCR'}
              </h2>
              <span className="text-[10px] text-rose-400 font-bold uppercase tracking-wider">
                {isSuccess ? 'Live on Website Now' : '100% Free • Instant Real-Time Placement'}
              </span>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-[#1e1e1e] hover:bg-[#2e2e2e] text-[#a3a3a3] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          
          {isSuccess && createdAd ? (
            /* ── SUCCESS STATE (WHERE AD IS ADDED) ───────────────────── */
            <div className="text-center py-4 space-y-5">
              
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/20">
                <CheckCircle size={36} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-display font-black text-white mb-1">
                  Your Ad is Now LIVE!
                </h3>
                <p className="text-xs sm:text-sm text-[#a3a3a3] max-w-md mx-auto">
                  Your listing has been instantly broadcasted and pinned to top priority across all corresponding Noida categories and locality directories.
                </p>
              </div>

              {/* Placement Details Box */}
              <div className="bg-[#141414] border border-[#2e2e2e] rounded-2xl p-4 text-left space-y-2.5 max-w-lg mx-auto">
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider block border-b border-[#252525] pb-1.5">
                  Live Placement Locations:
                </span>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#888]">1. Homepage VIP Showcase:</span>
                  <span className="font-bold text-emerald-400">Position #1 (Top)</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#888]">2. Category Directory:</span>
                  <span className="font-bold text-white">/{createdAd.categorySlug}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#888]">3. Hyperlocal Area Hub:</span>
                  <span className="font-bold text-rose-400">/{createdAd.categorySlug}/{createdAd.localitySlug}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#888]">4. Direct WhatsApp & Call:</span>
                  <span className="font-bold text-emerald-400">Active ({createdAd.phone})</span>
                </div>
              </div>

              {/* Action Navigation Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <button
                  onClick={handleNavigateToAd}
                  className="flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white font-black text-xs uppercase tracking-wider hover:brightness-110 flex items-center justify-center gap-1.5 shadow-lg shadow-rose-600/20 cursor-pointer"
                >
                  <ExternalLink size={15} />
                  <span>View Your Single Ad Page</span>
                </button>

                <button
                  onClick={handleNavigateToArea}
                  className="sm:w-48 py-3.5 px-4 rounded-xl bg-[#1e1e1e] hover:bg-[#2a2a2a] text-white font-bold text-xs uppercase tracking-wider border border-[#333] transition-colors cursor-pointer"
                >
                  <span>View in {createdAd.locality}</span>
                </button>
              </div>

            </div>
          ) : (
            /* ── FORM STATE ─────────────────────────────────────────── */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category & Locality */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Layers size={13} /> Select Category *
                  </label>
                  <select
                    value={formData.categoryId}
                    onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                    className="w-full bg-[#171717] border border-[#2a2a2a] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-rose-500 focus:outline-none"
                    required
                  >
                    {PORTAL_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.slug}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <MapPin size={13} /> Noida & NCR Locality *
                  </label>
                  <select
                    value={formData.localitySlug}
                    onChange={(e) => setFormData({ ...formData, localitySlug: e.target.value })}
                    className="w-full bg-[#171717] border border-[#2a2a2a] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-rose-500 focus:outline-none"
                    required
                  >
                    {NOIDA_LOCALITIES.map((loc) => (
                      <option key={loc.id} value={loc.slug}>
                        {loc.name} ({loc.landmark})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-1.5">
                  Ad Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g. VIP Model in Vaishali Nagar / 5-Star Hotel Companion"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-[#171717] border border-[#2a2a2a] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-rose-500 focus:outline-none"
                  required
                />
              </div>

              {/* Image Upload / Selector */}
              <div>
                <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1"><Camera size={13} /> Profile Photo</span>
                  <span className="text-[10px] text-[#737373]">JPG, PNG or Default Model</span>
                </label>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#1f1f1f] border border-[#333] shrink-0">
                    <img
                      src={formData.photoUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <label className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#171717] hover:bg-[#222] border border-[#2e2e2e] text-xs text-[#d4d4d4] font-medium cursor-pointer transition-colors">
                    <Upload size={14} className="text-rose-400" />
                    <span>Upload Custom Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Phone size={13} /> Calling Phone *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9521413060"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#171717] border border-[#2a2a2a] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-rose-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <MessageCircle size={13} /> WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 919521413060"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-[#171717] border border-[#2a2a2a] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-rose-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Age & Timing */}
              <div>
                <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-1.5">
                  Age / Experience *
                </label>
                <input
                  type="number"
                  min="18"
                  max="50"
                  placeholder="e.g. 23"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full bg-[#171717] border border-[#2a2a2a] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-rose-500 focus:outline-none"
                />
              </div>

              {/* Services Tags */}
              <div>
                <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-1.5">
                  Services Offered (Comma separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hotel Outcall, Private In-Call, Dinner Date"
                  value={formData.services}
                  onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                  className="w-full bg-[#171717] border border-[#2a2a2a] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-rose-500 focus:outline-none"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-1.5">
                  Full Description & Guidelines *
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your hospitality, meeting rules, timing, and locations in Noida..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-[#171717] border border-[#2a2a2a] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-rose-500 focus:outline-none"
                  required
                />
              </div>

              {/* Sticky Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-110 active:scale-[0.99] transition-all shadow-xl shadow-rose-600/30 cursor-pointer"
                >
                  Publish Free Ad Live Now
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default PostAdModal;
