import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Phone, User, CheckCircle2 } from 'lucide-react';
import { BRAND, CONTACT } from '@/config/site';

const LeadCaptureModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteHp, setWebsiteHp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Only open when explicitly requested via button click event
    const handleOpenModal = () => {
      setIsOpen(true);
    };

    window.addEventListener('open-lead-modal', handleOpenModal);
    return () => window.removeEventListener('open-lead-modal', handleOpenModal);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (websiteHp) return; // Silent honeypot spam protection

    if (name.trim().length < 2) {
      setError('Please enter a valid name.');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setIsSubmitting(true);
    
    // Format the message with user's details
    const message = `Hi ${BRAND.name}! I would like to book a verified companion outcall. \n\n*Name:* ${name}\n*Number:* ${phone}\n\nPlease share available profiles.`;
    
    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent(message)}`;
    
    // Redirect the user to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success in UI and auto close
    setIsSuccess(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setIsOpen(false);
    }, 3500);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${CONTACT.whatsapp1}?text=Hi, I am interested in booking a spa session.`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal Content - Compact Mobile Sizing */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-[340px] md:max-w-md bg-[#0a0a0a] border border-[#e11d48]/30 rounded-2xl shadow-2xl overflow-hidden text-white"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors z-10 p-1"
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>

            {/* Header Area */}
            <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] p-4 md:p-6 text-center relative overflow-hidden">
              <Gift className="w-8 h-8 md:w-12 md:h-12 text-[#e11d48] mx-auto mb-2 relative z-10" />
              <h2 className="text-lg md:text-2xl font-display font-bold text-white relative z-10">
                Special Welcome Offer
              </h2>
              <p className="text-xs md:text-sm text-[#a3a3a3] mt-1 relative z-10">
                Get <span className="text-[#e11d48] font-bold">10% OFF</span> on your first Spa Therapy!
              </p>
            </div>

            {/* Body / Form Area */}
            <div className="p-4 md:p-6">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-center py-4"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1">Offer Claimed!</h3>
                  <p className="text-xs text-[#a3a3a3] mb-4">
                    Our team will contact you shortly to confirm your appointment.
                  </p>
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs hover:bg-green-700 transition-colors"
                  >
                    Chat on WhatsApp Now
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Invisible Honeypot */}
                  <input type="text" value={websiteHp} onChange={e => setWebsiteHp(e.target.value)} tabIndex={-1} className="hidden" aria-hidden="true" />

                  <p className="text-xs text-center text-[#d4d4d4] mb-3">
                    Enter your details to unlock this discount:
                  </p>
                  
                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-white/40" />
                      </div>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs md:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#e11d48]/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-4 w-4 text-white/40" />
                      </div>
                      <input
                        type="tel"
                        placeholder="10-digit Mobile Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        maxLength={10}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs md:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#e11d48]/50 transition-all"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-400 text-[11px] text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#be123c] to-[#e11d48] text-black font-bold py-3 px-4 rounded-xl text-xs md:text-sm transition-all flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                    ) : (
                      'Claim 10% Discount Now'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadCaptureModal;
