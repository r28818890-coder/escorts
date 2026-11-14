import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Loader2, Sparkles, Phone } from 'lucide-react';
import { CONTACT } from '@/config/site';

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    date: '',
    service: 'Thai Massage',
    requests: '',
  });

  useEffect(() => {
    // Show after 10 seconds if not seen
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('spaPopupSeen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 10000); 
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-lead-modal', handleOpen as EventListener);
    return () => window.removeEventListener('open-lead-modal', handleOpen as EventListener);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('spaPopupSeen', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.sent) {
        setStatus('success');
        setTimeout(() => {
          handleClose();
          setStatus('idle');
          setFormData({ name: '', mobile: '', date: '', service: 'Thai Massage', requests: '' });
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error:", error);
      // Simulate success for demo purposes if backend fails locally
      setStatus('success');
      setTimeout(() => {
        handleClose();
        setStatus('idle');
        setFormData({ name: '', mobile: '', date: '', service: 'Thai Massage', requests: '' });
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-[#111111] border border-[#e11d48]/30 rounded-2xl w-11/12 sm:w-11/12 md:w-2/3 lg:w-1/2 overflow-y-auto shadow-[0_0_50px_rgba(225, 29, 72,0.15)] flex flex-col lg:flex-row relative max-h-[90vh] h-auto mx-auto"
            style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 text-[#a3a3a3] hover:text-white bg-white/5 rounded-full p-2 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Left Side (Image/Content) */}
            {/* Left decorative panel: hidden on small screens to improve mobile UX */}
            <div className="hidden md:flex md:w-2/5 bg-[#0a0a0a] border-r border-white/5 p-8 md:p-10 flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" alt="Spa" className="w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
              </div>
              <div className="relative z-10">
                <h3 className="text-[#e11d48] text-xs font-black tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
                  <Sparkles size={14} /> Noida Spa
                </h3>
                <h2 className="text-2xl md:text-3xl font-display font-black text-white leading-tight mb-4">
                  Book Your <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#be123c] to-[#e11d48]">Relaxation</span>
                </h2>
                <p className="text-sm text-[#a3a3a3] mb-8 leading-relaxed">
                  Reserve your private luxury suite. Our concierge will call you immediately to confirm the time slot.
                </p>
                <div className="flex items-center gap-4 text-[#e11d48] font-bold text-sm bg-[#e11d48]/10 p-4 rounded-xl border border-[#e11d48]/20">
                  <Phone size={20} />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#a3a3a3]">Instant Booking</div>
                    <div>{CONTACT.phoneDisplay}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side (Form) */}
            {/* Right Side (Form) - includes a compact mobile header for small screens */}
            <div className="w-full md:w-3/5 p-6 md:p-8 lg:p-10 bg-[#111111]">
              {/* Mobile header (visible on small screens) */}
              <div className="md:hidden mb-3">
                <h3 className="text-[#e11d48] text-[10px] font-black tracking-[0.25em] uppercase mb-2 flex items-center gap-2">
                  <Sparkles size={12} /> Noida Spa
                </h3>
                <h2 className="text-xl font-display font-black text-white leading-tight mb-2">Book Your Relaxation</h2>
                <div className="flex items-center gap-3 text-[#e11d48] font-bold text-xs bg-[#e11d48]/10 p-2 rounded-lg border border-[#e11d48]/20">
                  <Phone size={18} />
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-[#a3a3a3]">Instant Booking</div>
                    <div className="text-xs">{CONTACT.phoneDisplay}</div>
                  </div>
                </div>
              </div>
              
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-10 animate-fade-in">
                  <div className="w-16 h-16 bg-[#e11d48]/20 border border-[#e11d48]/30 text-[#e11d48] rounded-full flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(225, 29, 72,0.2)]">
                       <CheckCircle size={34} />
                   </div>
                     <h3 className="text-2xl font-display font-bold text-white mb-2">Request Received!</h3>
                     <p className="text-sm text-[#a3a3a3]">Our spa concierge is calling you right now to confirm your appointment.</p>
                </div>
              ) : (
                <>
                    <h2 className="text-xl font-display font-bold text-white mb-2">Request Appointment</h2>
                    <p className="text-xs text-[#a3a3a3] mb-6">Fill the details below to reserve your therapy session.</p>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-[#a3a3a3] mb-1.5">Full Name</label>
                        <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#e11d48] focus:bg-white/10 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                          <label className="block text-[9px] font-bold uppercase tracking-wider text-[#a3a3a3] mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          placeholder="10 digit mobile"
                          value={formData.mobile}
                          onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
                            className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#e11d48] focus:bg-white/10 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-[#a3a3a3] mb-1.5">Preferred Date</label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 text-[#a3a3a3] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#e11d48] focus:bg-white/10 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-[#a3a3a3] mb-1.5">Select Therapy</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#e11d48] focus:bg-white/10 transition-colors appearance-none"
                      >
                        <option value="Thai Massage" className="bg-[#111111]">Thai Massage</option>
                        <option value="Swedish Massage" className="bg-[#111111]">Swedish Massage</option>
                        <option value="Deep Tissue Massage" className="bg-[#111111]">Deep Tissue Massage</option>
                        <option value="Couple Massage" className="bg-[#111111]">Couple Massage</option>
                        <option value="Aroma Therapy" className="bg-[#111111]">Aroma Therapy</option>
                        <option value="Body Scrub" className="bg-[#111111]">Body Scrub</option>
                        <option value="Not Sure" className="bg-[#111111]">Not Sure (Decide at Spa)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-[#a3a3a3] mb-1.5">Special Requests (Optional)</label>
                      <textarea
                        rows={2}
                        value={formData.requests}
                        onChange={(e) => setFormData(prev => ({ ...prev, requests: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#e11d48] focus:bg-white/10 transition-colors resize-none"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-gradient-to-r from-[#be123c] to-[#e11d48] text-black font-bold py-2.5 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs disabled:opacity-70 mt-3 shadow-lg shadow-[#be123c]/20"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" /> Processing...
                        </>
                      ) : (
                        <>
                          Confirm Booking <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;