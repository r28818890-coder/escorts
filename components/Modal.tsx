import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { formatLeadMessage, openWhatsAppWithMessage } from '../utils/whatsapp';

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    // Show modal after 4 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-lead-modal', handleOpen as EventListener);
    return () => {
      window.removeEventListener('open-lead-modal', handleOpen as EventListener);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 md:p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-20 text-gray-500 hover:text-black bg-white rounded-full p-2 shadow-sm transition-colors"
            >
              <X size={20} />
            </button>

            {/* Left Side (Image/Content) */}
            <div className="w-full md:w-2/5 bg-black text-white p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-white/60 text-xs font-bold tracking-widest uppercase mb-4">Business Nesta</h3>
                 <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 md:mb-6">
                    Let's Scale Up<br/>Your Business
                 </h2>
                 <p className="text-xs md:text-sm text-gray-300 mb-6 md:mb-8">
                   Join hundreds of successful entrepreneurs who trusted us with their journey.
                 </p>
                 <div className="flex -space-x-2 opacity-80">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://picsum.photos/id/${i+30}/40/40`} className="w-8 h-8 rounded-full border-2 border-black" alt="User" />
                    ))}
                 </div>
               </div>
               {/* Decorative Circle */}
               <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gray-800 rounded-full opacity-30"></div>
            </div>

            {/* Right Side (Form) */}
            <div className="w-full md:w-3/5 p-6 md:p-10 overflow-y-auto">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Get Expert Consultation</h2>
              <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">Drop your details and we will reach out to you within 24 hours.</p>

              <form
                className="space-y-3 md:space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const message = formatLeadMessage({
                    'Name': formData.name,
                    'Email': formData.email,
                    'Phone': formData.phone,
                    'Requested': 'Call back / consultation (popup form)',
                  });
                  openWhatsAppWithMessage(message);
                  setIsOpen(false);
                }}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2.5 md:px-4 md:py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2.5 md:px-4 md:py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2.5 md:px-4 md:py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                  />
                </div>
                
                <button className="w-full bg-black text-white font-bold py-2.5 md:py-3 rounded hover:bg-gray-800 transition-all flex items-center justify-center gap-2 uppercase text-xs md:text-sm tracking-wider">
                  Request Call Back <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;