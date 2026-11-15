import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone, MessageCircle, Sparkles, MapPin, Shield, Heart, UserCheck, Users, Flame } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PORTAL_CATEGORIES, NOIDA_LOCALITIES } from '@/config/portalData';
import { BRAND, CONTACT } from '@/config/site';
import SecretAdminDashboard from '@/components/admin/SecretAdminDashboard';

interface HeaderProps {
  onOpenPostAd?: () => void;
}

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Heart': return <Heart size={16} className="text-amber-600" />;
    case 'UserCheck': return <UserCheck size={16} className="text-emerald-600" />;
    case 'Users': return <Users size={16} className="text-indigo-600" />;
    case 'Flame': return <Flame size={16} className="text-rose-600" />;
    default: return <Sparkles size={16} className="text-amber-600" />;
  }
};

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [localitiesOpen, setLocalitiesOpen] = useState(false);
  const [adminDashboardOpen, setAdminDashboardOpen] = useState(false);
  const lastLogoTapRef = useRef<number>(0);
  const location = useLocation();

  const handleLogoDoubleTap = (e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastLogoTapRef.current < 400) {
      e.preventDefault();
      e.stopPropagation();
      setAdminDashboardOpen(true);
    }
    lastLogoTapRef.current = now;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoriesOpen(false);
    setLocalitiesOpen(false);
  }, [location]);

  return (
    <>
      {/* ── Top Announcement Bar: Noida & NCR ────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-slate-900 text-slate-200 h-6 sm:h-7 flex items-center border-b border-amber-500/30 text-[10px] sm:text-xs font-semibold">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-3 md:px-6">
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 text-[9px] font-black uppercase tracking-wider px-2 py-0.2 rounded-full flex items-center gap-1 shadow-sm">
              <MapPin size={10} /> Noida & NCR
            </span>
            <span className="text-slate-300 truncate max-w-[200px] sm:max-w-none">
              100% Real Photo Verified Escorts • 24/7 Hotel Outcall Visits
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <Link to="/safety-guide" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
              <Shield size={11} className="text-emerald-400" /> Safety Guide
            </Link>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-emerald-400 font-bold hidden sm:inline">24/7 Hotel Outcall</span>
          </div>
        </div>
      </div>

      {/* ── Main Compact Sticky Header ─────────────────────────────── */}
      <header
        className={`fixed top-6 sm:top-7 left-0 right-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md border-b ${
          isScrolled
            ? 'py-2 border-slate-200 shadow-md'
            : 'py-2.5 sm:py-3 border-slate-200/80 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2 px-3 md:px-6">
          
          {/* Logo & Brand Name */}
          <Link
            to="/"
            onClick={handleLogoDoubleTap}
            className="flex items-center gap-2.5 z-50 group min-w-0 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-0.5"
            title="Double-tap for Secret Admin Mode"
            aria-label="Escorts Hub Noida - Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 border border-amber-500/70 p-1 group-hover:scale-105 group-hover:border-amber-400 transition-all shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center justify-center">
              <img
                src="/ecj-mark.svg"
                alt="Escorts Hub Noida official crest logo"
                width={40}
                height={40}
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-slate-950 tracking-tight text-base sm:text-lg leading-none group-hover:text-amber-600 transition-colors whitespace-nowrap">
                  Escorts Hub <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-rose-600 to-amber-600">Noida</span>
                </span>
                <span className="bg-gradient-to-r from-rose-600 to-red-600 text-white text-[8px] font-black uppercase px-1.5 py-0.2 rounded-full shrink-0 shadow-sm">
                  18+
                </span>
              </div>
              <span className="text-[7.5px] sm:text-[9px] font-bold tracking-widest text-amber-700 uppercase mt-0.5 flex items-center gap-1 whitespace-nowrap">
                <MapPin size={9} className="text-amber-600 shrink-0" /> NOIDA &amp; NCR VIP COMPANIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-slate-700 font-semibold text-xs tracking-wide">
            <Link to="/" className="hover:text-amber-600 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
              Home
            </Link>

            {/* Categories Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <button className="hover:text-amber-600 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 flex items-center gap-1 transition-colors cursor-pointer">
                <span>Categories</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${categoriesOpen ? 'rotate-180 text-amber-600' : ''}`} />
              </button>

              {categoriesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-2 space-y-1 z-50">
                  {PORTAL_CATEGORIES.map((c) => (
                    <Link
                      key={c.id}
                      to={`/${c.slug}`}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center">
                        {getCategoryIcon(c.iconName)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold">{c.name}</span>
                        <span className="text-[10px] text-slate-500 line-clamp-1">{c.tagline}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Noida & NCR Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocalitiesOpen(true)}
              onMouseLeave={() => setLocalitiesOpen(false)}
            >
              <button className="hover:text-amber-600 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 flex items-center gap-1 transition-colors cursor-pointer">
                <span>Noida & NCR Areas</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${localitiesOpen ? 'rotate-180 text-amber-600' : ''}`} />
              </button>

              {localitiesOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-2 max-h-80 overflow-y-auto z-50">
                  <div className="px-3 py-1.5 text-[10px] font-black text-amber-700 uppercase tracking-wider border-b border-slate-100 flex items-center gap-1">
                    <MapPin size={11} /> 18 Localities in Noida & NCR
                  </div>
                  <div className="py-1 space-y-0.5">
                    {NOIDA_LOCALITIES.map((loc) => (
                      <Link
                        key={loc.id}
                        to={`/call-girls/${loc.slug}`}
                        className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs text-slate-700 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                        onClick={() => setLocalitiesOpen(false)}
                      >
                        <div className="flex items-center gap-1.5">
                          <MapPin size={11} className="text-amber-600 shrink-0" />
                          <span>{loc.name}</span>
                        </div>
                        <span className="text-[9px] text-slate-400 font-normal">{loc.zone}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/call-girls" className="hover:text-amber-600 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
              Call Girls
            </Link>
            <Link to="/russian-escorts" className="hover:text-amber-600 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
              Russian Escorts
            </Link>
            <Link to="/adult-meetings" className="hover:text-amber-600 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
              Adult Meetings
            </Link>
            <Link to="/booking" className="text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-lg font-bold transition-colors">
              Book Now
            </Link>
          </nav>

          {/* Action Buttons: Call Helpline & Mobile Menu Trigger (WhatsApp removed from Header) */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:+91${CONTACT.phone}`}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-sm active:scale-95"
              title="Call Helpline"
            >
              <Phone size={13} className="text-slate-950 shrink-0" />
              <span className="hidden sm:inline font-black">{CONTACT.phoneDisplay}</span>
              <span className="sm:hidden font-black">Call</span>
            </a>

            {/* RHS Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden text-slate-800 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} className="text-slate-900" /> : <Menu size={24} className="text-slate-900" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ─────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={() => setMobileMenuOpen(false)} />

          {/* Drawer Content */}
          <div className="relative w-full max-w-xs sm:max-w-sm h-full bg-white text-slate-900 shadow-2xl p-5 overflow-y-auto flex flex-col justify-between z-10">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 border border-amber-500/70 p-1 shadow-[0_0_10px_rgba(245,158,11,0.25)] flex items-center justify-center">
                    <img src="/ecj-mark.svg" alt="Escorts Hub Noida logo" width={36} height={36} className="w-full h-full object-contain rounded-lg" />
                  </div>
                  <span className="font-black text-sm text-slate-950">Escorts Hub <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-amber-600">Noida</span></span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Booking Quick CTA */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <Link
                  to="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm text-center"
                >
                  <Sparkles size={14} /> Book Outcall
                </Link>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent('Hello! I am inquiring about verified VIP companions in Noida & NCR.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm text-center"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>

              {/* Categories */}
              <div className="space-y-1 mb-5">
                <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-2 mb-2">
                  Categories
                </div>
                {PORTAL_CATEGORIES.map((c) => (
                  <Link
                    key={c.id}
                    to={`/${c.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl text-slate-800 font-bold text-xs hover:bg-amber-50 hover:text-amber-800 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center">
                      {getCategoryIcon(c.iconName)}
                    </div>
                    <span>{c.name}</span>
                  </Link>
                ))}
              </div>

              {/* Top Localities */}
              <div className="space-y-2">
                <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-2">
                  Noida & NCR Areas
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {NOIDA_LOCALITIES.slice(0, 10).map((loc) => (
                    <Link
                      key={loc.id}
                      to={`/call-girls/${loc.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-lg bg-slate-50 text-[11px] font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-800 border border-slate-200/80 text-center flex items-center justify-center gap-1 truncate"
                    >
                      <MapPin size={10} className="text-amber-600 shrink-0" />
                      <span className="truncate">{loc.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-4 border-t border-slate-200 mt-6 flex gap-2">
              <a
                href={`tel:+91${CONTACT.phone}`}
                className="flex-1 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Phone size={13} className="text-emerald-400" /> Call
              </a>
              <Link
                to="/safety-guide"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-200"
              >
                <Shield size={13} className="text-emerald-600" /> Safety
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Secret Double-Tap Admin Dashboard Modal */}
      <SecretAdminDashboard
        isOpen={adminDashboardOpen}
        onClose={() => setAdminDashboardOpen(false)}
      />
    </>
  );
};

export default Header;
