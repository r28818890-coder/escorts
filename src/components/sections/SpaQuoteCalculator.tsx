import React, { useState } from 'react';
import { Calculator, Users, Clock, Sparkles, MessageCircle, ArrowRight, CheckCircle2, PlusCircle } from 'lucide-react';
import { buildWebsiteWhatsAppUrl } from '@/utils/whatsapp';

interface SpaTherapyOption {
  name: string;
  price60: number;
  price90: number;
  price120: number;
}

const therapyOptions: SpaTherapyOption[] = [
  { name: 'Swedish Relaxation Massage', price60: 999, price90: 1299, price120: 1599 },
  { name: 'Traditional Thai Massage', price60: 1099, price90: 1399, price120: 1699 },
  { name: 'Deep Tissue Muscle Relief', price60: 1199, price90: 1499, price120: 1899 },
  { name: 'Organic Aromatherapy', price60: 1299, price90: 1599, price120: 1999 },
  { name: 'Balinese Herbal Massage', price60: 1199, price90: 1499, price120: 1799 },
  { name: 'Couple Luxury Suite Ritual', price60: 2499, price90: 2999, price120: 3599 },
  { name: 'Herbal Body Scrub & Steam', price60: 1499, price90: 1899, price120: 2299 },
];

const extraAddons = [
  { name: 'None (Standard)', price: 0 },
  { name: 'Extended 30m Extra Massage', price: 499 },
  { name: 'Herbal Hot Compress', price: 399 },
  { name: 'Special Organic Aroma Oil', price: 299 },
  { name: 'Purifying Steam Bath Add-on', price: 499 },
];

const SpaQuoteCalculator: React.FC = () => {
  const [guestType, setGuestType] = useState<'solo' | 'couple'>('solo');
  const [selectedTherapyIndex, setSelectedTherapyIndex] = useState<number>(0);
  const [durationKey, setDurationKey] = useState<'price60' | 'price90' | 'price120'>('price90');
  const [selectedAddonIndex, setSelectedAddonIndex] = useState<number>(0);

  const currentTherapy = therapyOptions[selectedTherapyIndex];
  const basePrice = currentTherapy[durationKey];
  const addonPrice = extraAddons[selectedAddonIndex].price;
  const guestMultiplier = guestType === 'couple' && !currentTherapy.name.includes('Couple') ? 1.9 : 1;

  const totalEstimate = Math.round((basePrice + addonPrice) * guestMultiplier);

  const durationLabels: Record<string, string> = {
    price60: '60 Mins',
    price90: '90 Mins',
    price120: '120 Mins',
  };

  const handleSendQuoteWhatsApp = () => {
    const dur = durationLabels[durationKey];
    const addonText = extraAddons[selectedAddonIndex].name.startsWith('None') ? '' : extraAddons[selectedAddonIndex].name;
    const summary = `${currentTherapy.name} (${dur}, ${guestType === 'couple' ? '2 Guests' : '1 Guest'}) - Total Estimate: ₹${totalEstimate.toLocaleString('en-IN')}`;
    
    const whatsappUrl = buildWebsiteWhatsAppUrl(summary, addonText);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-8 md:py-20 px-2.5 md:px-4 bg-[#070707] border-t border-b border-[#e11d48]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-12">
          <span className="section-label mb-2">INSTANT ESTIMATE CALCULATOR</span>
          <h2 className="text-xl md:text-5xl font-display font-bold text-white mb-2">
            Calculate Your <span className="text-[#e11d48]">Spa Session Price</span>
          </h2>
          <p className="text-[#a3a3a3] text-xs md:text-base">
            Select guests, therapy & duration for a real-time transparent rate estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 max-w-5xl mx-auto">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-[#0a0a0a] border border-[#e11d48]/20 rounded-2xl md:rounded-3xl p-4 md:p-8 space-y-4 shadow-xl">
            {/* Guest Selection */}
            <div>
              <label className="block text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#e11d48] mb-2 flex items-center gap-1.5">
                <Users size={14} /> 1. Guests
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setGuestType('solo')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition ${
                    guestType === 'solo'
                      ? 'bg-gradient-to-r from-[#be123c] to-[#e11d48] text-black border-[#e11d48]'
                      : 'bg-white/5 text-[#a3a3a3] border-white/10 hover:text-white'
                  }`}
                >
                   Solo Guest
                </button>
                <button
                  onClick={() => setGuestType('couple')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition ${
                    guestType === 'couple'
                      ? 'bg-gradient-to-r from-[#be123c] to-[#e11d48] text-black border-[#e11d48]'
                      : 'bg-white/5 text-[#a3a3a3] border-white/10 hover:text-white'
                  }`}
                >
                   Couple (2 Guests)
                </button>
              </div>
            </div>

            {/* Therapy Select */}
            <div>
              <label className="block text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#e11d48] mb-2 flex items-center gap-1.5">
                <Sparkles size={14} /> 2. Therapy Type
              </label>
              <select
                value={selectedTherapyIndex}
                onChange={(e) => setSelectedTherapyIndex(Number(e.target.value))}
                className="w-full bg-[#111] border border-white/20 rounded-xl px-3 py-2 text-xs md:text-sm text-white focus:outline-none focus:border-[#e11d48]"
              >
                {therapyOptions.map((t, idx) => (
                  <option key={idx} value={idx}>{t.name}</option>
                ))}
              </select>
            </div>

            {/* Duration Select */}
            <div>
              <label className="block text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#e11d48] mb-2 flex items-center gap-1.5">
                <Clock size={14} /> 3. Session Duration
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['price60', 'price90', 'price120'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setDurationKey(key)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border transition ${
                      durationKey === key
                        ? 'bg-[#e11d48] text-black border-[#e11d48]'
                        : 'bg-white/5 text-[#a3a3a3] border-white/10 hover:text-white'
                    }`}
                  >
                    {durationLabels[key]}
                  </button>
                ))}
              </div>
            </div>

            {/* Add-on Select */}
            <div>
              <label className="block text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#e11d48] mb-2 flex items-center gap-1.5">
                <PlusCircle size={14} /> 4. Add-on Customization
              </label>
              <select
                value={selectedAddonIndex}
                onChange={(e) => setSelectedAddonIndex(Number(e.target.value))}
                className="w-full bg-[#111] border border-white/20 rounded-xl px-3 py-2 text-xs md:text-sm text-white focus:outline-none focus:border-[#e11d48]"
              >
                {extraAddons.map((addon, idx) => (
                  <option key={idx} value={idx}>
                    {addon.name} {addon.price > 0 ? `(+₹${addon.price})` : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Estimate Display Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-[#e11d48]/40 rounded-2xl md:rounded-3xl p-5 md:p-8 flex flex-col justify-between shadow-2xl text-center">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#e11d48]/20 border border-[#e11d48]/40 flex items-center justify-center mx-auto mb-3 text-[#e11d48]">
                <Calculator size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#a3a3a3] block mb-1">
                Estimated Session Rate
              </span>
              <div className="text-3xl md:text-5xl font-mono font-black text-[#e11d48] mb-2">
                ₹{totalEstimate.toLocaleString('en-IN')}
              </div>
              <p className="text-[11px] text-[#d4d4d4] mb-4">
                Includes all taxes & private suite usage. Zero hidden fees.
              </p>

              <div className="bg-black/60 border border-white/10 rounded-xl p-3 text-left space-y-1.5 text-xs mb-4">
                <div className="flex justify-between text-gray-300">
                  <span>Therapy:</span>
                  <span className="font-bold text-white">{currentTherapy.name}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Duration:</span>
                  <span className="font-bold text-white">{durationLabels[durationKey]}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Guests:</span>
                  <span className="font-bold text-white">{guestType === 'couple' ? '2 Guests' : '1 Guest'}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSendQuoteWhatsApp}
              className="w-full py-3.5 bg-gradient-to-r from-[#25D366] to-emerald-500 text-white font-bold text-xs md:text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <MessageCircle size={16} /> Send Quote to WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaQuoteCalculator;
