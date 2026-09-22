import React, { useState, useEffect } from 'react';
import { AlertTriangle, ShieldCheck, CheckCircle, XCircle } from 'lucide-react';

export const AgeVerificationModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('jaipur_portal_age_verified');
    if (!verified) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('jaipur_portal_age_verified', 'true');
    setIsOpen(false);
  };

  const handleDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0d0d0d] border border-rose-600/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(225,29,72,0.3)] text-center">
        
        {/* Warning Icon Badge */}
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-rose-950/40 border border-rose-500/50 flex items-center justify-center text-rose-500 shadow-[0_0_20px_rgba(225,29,72,0.3)]">
          <span className="text-2xl font-black">18+</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-black text-white mb-2">
          Adult Content Warning
        </h2>
        <p className="text-xs uppercase tracking-widest text-rose-400 font-bold mb-4">
          Restricted to Adults (18 Years & Above)
        </p>

        <div className="bg-[#171717] rounded-xl p-4 mb-6 border border-[#2a2a2a] text-left text-xs sm:text-sm text-[#a3a3a3] space-y-2 leading-relaxed">
          <p className="flex items-start gap-2">
            <ShieldCheck size={16} className="text-rose-500 shrink-0 mt-0.5" />
            <span>This website contains adult classifieds, wellness massages, and companion listings strictly for adults residing in or visiting <strong>Jaipur, Rajasthan</strong>.</span>
          </p>
          <p className="flex items-start gap-2">
            <AlertTriangle size={16} className="text-rose-400 shrink-0 mt-0.5" />
            <span>By entering, you confirm you are at least <strong>18 years of age</strong> (or age of majority in your jurisdiction) and consent to viewing adult-oriented text and imagery.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white font-black text-sm uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-rose-600/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <CheckCircle size={18} />
            I Am 18+ (Enter Portal)
          </button>
          <button
            onClick={handleDecline}
            className="sm:w-32 py-3.5 px-4 rounded-xl bg-[#1f1f1f] hover:bg-[#2a2a2a] text-[#a3a3a3] hover:text-white font-bold text-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <XCircle size={16} />
            Decline
          </button>
        </div>

        <p className="mt-4 text-[10px] text-[#737373]">
          By proceeding, you accept our Terms of Service & Privacy Policy for Jaipur Classifieds.
        </p>
      </div>
    </div>
  );
};

export default AgeVerificationModal;
