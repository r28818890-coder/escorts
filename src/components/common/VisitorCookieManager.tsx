import React, { useEffect, useState } from 'react';
import { Sparkles, Cookie, Check, X, ShieldCheck, Heart, MessageSquare } from 'lucide-react';
import { BRAND, CONTACT } from '@/config/site';

// Helper cookie utilities
export const setCookie = (name: string, value: string, days: number = 365) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `; expires=${date.toUTCString()}`;
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/; SameSite=Lax`;
};

export const getCookie = (name: string): string | null => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
};

export const VisitorCookieManager: React.FC = () => {
  const [showCookieConsent, setShowCookieConsent] = useState<boolean>(false);
  const [showWelcomeBackPopup, setShowWelcomeBackPopup] = useState<boolean>(false);
  const [visitCount, setVisitCount] = useState<number>(1);

  useEffect(() => {
    // 1. Read existing cookie & local storage
    const consentCookie = getCookie('jaipur_portal_cookie_consent');
    const existingVisitorId = getCookie('jaipur_portal_visitor_id');
    const storedVisits = parseInt(localStorage.getItem('jaipur_portal_visit_count') || '0', 10);
    const newCount = storedVisits + 1;

    setVisitCount(newCount);
    localStorage.setItem('jaipur_portal_visit_count', newCount.toString());
    localStorage.setItem('jaipur_portal_last_visit', new Date().toISOString());

    if (!existingVisitorId) {
      const randomId = 'v_' + Math.random().toString(36).substring(2, 10);
      setCookie('jaipur_portal_visitor_id', randomId, 365);
      setCookie('jaipur_portal_first_visit', new Date().toISOString(), 365);
    }

    setCookie('jaipur_portal_visit_count', newCount.toString(), 365);

    // 2. Determine Cookie Banner Visibility
    if (!consentCookie) {
      setShowCookieConsent(true);
    }

    // 3. Returning Visitor Welcome Back Perk Banner (2nd visit or later)
    if (newCount >= 2 && consentCookie === 'accepted') {
      const dismissedSession = sessionStorage.getItem('jaipur_portal_welcome_dismissed');
      if (!dismissedSession) {
        const timer = setTimeout(() => {
          setShowWelcomeBackPopup(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleAcceptCookies = () => {
    setCookie('jaipur_portal_cookie_consent', 'accepted', 365);
    setShowCookieConsent(false);
    if (visitCount >= 2) {
      setShowWelcomeBackPopup(true);
    }
  };

  const handleDeclineCookies = () => {
    setCookie('jaipur_portal_cookie_consent', 'declined', 30);
    setShowCookieConsent(false);
  };

  const dismissWelcomePopup = () => {
    setShowWelcomeBackPopup(false);
    sessionStorage.setItem('jaipur_portal_welcome_dismissed', 'true');
  };

  const handleWhatsAppReturnOffer = () => {
    const message = `Hello Jaipur Escorts Club! I am a returning visitor to your directory (Visit #${visitCount}). I want to inquire about verified companion availability.`;
    window.open(`https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent(message)}`, '_blank');
    dismissWelcomePopup();
  };

  return (
    <>
      {/* 1. COMPACT COOKIE CONSENT BANNER */}
      {showCookieConsent && (
        <div className="fixed bottom-[72px] left-3 right-3 md:left-6 md:right-auto md:bottom-6 md:max-w-md z-[110] bg-slate-900 border border-rose-500/40 rounded-xl md:rounded-2xl p-3.5 md:p-5 shadow-2xl backdrop-blur-md text-white">
          <div className="flex items-start gap-2.5">
            <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400 shrink-0 mt-0.5">
              <Cookie className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-rose-300 text-xs md:text-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-rose-400 shrink-0" /> Cookies & Experience
              </h4>
              <p className="text-[11px] md:text-xs text-slate-300 mt-0.5 leading-tight">
                We use secure browser storage to remember your verified browsing preferences on {BRAND.name}.
              </p>

              <div className="flex items-center gap-2 mt-2.5">
                <button
                  onClick={handleAcceptCookies}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-rose-600 to-indigo-600 hover:brightness-110 text-white font-bold text-[10px] md:text-xs flex items-center gap-1 shadow transition cursor-pointer"
                >
                  <Check className="w-3 h-3" /> Accept & Continue
                </button>
                <button
                  onClick={handleDeclineCookies}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 text-[10px] md:text-xs transition cursor-pointer"
                >
                  Essential Only
                </button>
              </div>
            </div>
            <button
              onClick={handleDeclineCookies}
              className="text-slate-400 hover:text-white p-1 shrink-0 cursor-pointer"
              aria-label="Close Cookie Banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 2. SLEEK RETURNING VISITOR WELCOME BACK POPUP CARD */}
      {showWelcomeBackPopup && (
        <div className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-sm flex items-center justify-center p-3">
          <div className="bg-slate-900 border border-rose-500/50 rounded-2xl p-5 md:p-8 max-w-[340px] md:max-w-md w-full text-center relative shadow-2xl text-white">
            <button
              onClick={dismissWelcomePopup}
              className="absolute top-3 right-3 text-slate-400 hover:text-rose-400 p-1.5 bg-slate-800 rounded-full cursor-pointer"
              aria-label="Close Welcome Popup"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-rose-600 to-indigo-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
              <Heart className="w-6 h-6 md:w-8 md:h-8 fill-current text-white" />
            </div>

            <div className="inline-block px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold uppercase tracking-wider mb-2">
              Returning Guest (Visit #{visitCount})
            </div>

            <h3 className="text-lg md:text-2xl font-black text-white mb-1.5 tracking-tight">
              Welcome Back to {BRAND.name}!
            </h3>

            <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-5">
              Browse 100% verified model profiles with 24/7 direct WhatsApp booking and zero advance deposit scams.
            </p>

            <div className="space-y-2.5">
              <button
                onClick={handleWhatsAppReturnOffer}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white font-bold text-xs md:text-sm flex items-center justify-center gap-2 shadow-md transition transform hover:scale-[1.01] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" /> Inquire on WhatsApp
              </button>

              <button
                onClick={dismissWelcomePopup}
                className="w-full py-2 rounded-xl bg-slate-800 text-slate-400 text-[11px] font-medium transition cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-center gap-1.5 text-slate-400 text-[10px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Jaipur Rajasthan • 24/7 Hotel Outcall</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VisitorCookieManager;
