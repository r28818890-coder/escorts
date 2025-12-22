import React, { useState, useEffect } from 'react';
import { Menu, Phone, X, Mail } from 'lucide-react';
import { PageId } from '../types';
import logoImage from '../logo/Logo_page-0001.jpg';

interface HeaderProps {
  onNavigate: (pageId: PageId) => void;
  onScrollToServices?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onScrollToServices }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300">
      {/* Top Bar / Marquee */}
      <div className="bg-black text-white text-[10px] sm:text-xs font-medium overflow-hidden h-9 flex items-center">
        <div className="bg-gray-800 px-3 sm:px-4 py-1 h-full flex items-center z-10 font-bold uppercase tracking-wider">
          Updates
        </div>
        <div className="whitespace-nowrap overflow-hidden flex-1 relative h-full flex items-center">
          <div className="animate-marquee inline-block px-3 sm:px-4 font-light tracking-wide">
            BUSINESS NESTA LLP • From Startup to Scale Up • Company Registration • Funding • Digital Growth • Call us: +91-9660030903 • Email: info@businessnesta.com
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`container mx-auto px-4 md:px-8 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className={`relative flex items-center justify-center transition-all duration-300 ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
            <img 
              src={logoImage} 
              alt="Business Nesta Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className={`font-bold text-black tracking-widest leading-none transition-all duration-300 ${isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}`}>
              Business Nesta
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-600 font-medium text-sm tracking-wide">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="hover:text-black transition-colors"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => onScrollToServices?.()}
            className="hover:text-black transition-colors"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="hover:text-black transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
           <a href="tel:+919660030903" className="flex items-center gap-2 text-sm font-bold text-gray-800 hover:text-black">
             <Phone size={16} />
             +91-9660030903
           </a>
           <button
             onClick={() => onNavigate('contact')}
             className="bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-sm flex items-center gap-2 font-medium text-sm transition-all shadow-lg"
           >
             Get Consultation
           </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl flex flex-col p-4 gap-4">
          <button
            type="button"
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
            className="text-gray-900 font-medium p-3 hover:bg-gray-50 rounded text-left"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => {
              onScrollToServices?.();
              setMobileMenuOpen(false);
            }}
            className="text-gray-900 font-medium p-3 hover:bg-gray-50 rounded text-left"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => { onNavigate('terms'); setMobileMenuOpen(false); }}
            className="text-gray-900 font-medium p-3 hover:bg-gray-50 rounded text-left"
          >
            Terms & Conditions
          </button>
          <button
            type="button"
            onClick={() => { onNavigate('refund'); setMobileMenuOpen(false); }}
            className="text-gray-900 font-medium p-3 hover:bg-gray-50 rounded text-left"
          >
            Refund Policy
          </button>
          <button
            type="button"
            onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
            className="text-gray-900 font-medium p-3 hover:bg-gray-50 rounded text-left"
          >
            Contact
          </button>
          <div className="border-t pt-4 mt-2 flex flex-col gap-3">
             <a href="tel:+919660030903" className="flex items-center gap-2 text-gray-800 font-bold p-2 justify-center bg-gray-50 rounded">
               <Phone size={18} /> +91-9660030903
             </a>
             <button
               onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
               className="bg-black text-white px-4 py-3 rounded flex justify-center items-center gap-2 font-bold w-full"
             >
               Get Consultation
             </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;