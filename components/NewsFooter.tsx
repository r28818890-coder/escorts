import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { PageId } from '../types';
import logoImage from '../logo/Logo_page-0001.jpg';

interface NewsFooterProps {
  onNavigate?: (pageId: PageId) => void;
}

const NewsFooter: React.FC<NewsFooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img 
                    src={logoImage} 
                    alt="Business Nesta Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-widest leading-none">Business Nesta</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">LLP</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                To become a leading business consultancy in India, recognized for trust, innovation, and results.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.('home')}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.('startup-certificate')}
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.('contact')}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.('terms')}
                    className="hover:text-white transition-colors"
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.('refund')}
                    className="hover:text-white transition-colors"
                  >
                    Refund Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Top Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.('startup-certificate')}
                    className="hover:text-white transition-colors"
                  >
                    Startup India Registration
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.('business-loan')}
                    className="hover:text-white transition-colors"
                  >
                    Business Loans
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.('seed-fund')}
                    className="hover:text-white transition-colors"
                  >
                    Seed Funding
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.('digital-marketing')}
                    className="hover:text-white transition-colors"
                  >
                    Digital Marketing
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.('iso-certificate')}
                    className="hover:text-white transition-colors"
                  >
                    ISO Certification
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-1 text-white" />
                  <div className="flex flex-col">
                    <a href="tel:+919660030903" className="hover:text-white transition-colors">+91-9660030903</a>
                    <a href="tel:+919660020702" className="hover:text-white transition-colors">+91-9660020702</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-white" />
                  <a href="mailto:info@businessnesta.com" className="hover:text-white transition-colors">info@businessnesta.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-white" />
                  <span>
                    7th Floor, Galaxy Avenue, Tonk Road, Jaipur, 302015
                  </span>
                </li>
              </ul>
            </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 Business Nesta LLP. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://www.facebook.com/share/1DKejxtc4C/"
                target="_blank"
                rel="noreferrer"
                aria-label="BusinessNesta Facebook"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Facebook size={14} />
              </a>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-500">
                <Twitter size={14} />
              </div>
              <a
                href="https://www.instagram.com/businessnesta_official?igsh=MWI4OWttbzUwdHE0Mw=="
                target="_blank"
                rel="noreferrer"
                aria-label="BusinessNesta Instagram"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/business-nesta-81b410385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                aria-label="BusinessNesta LinkedIn"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Linkedin size={14} />
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewsFooter;