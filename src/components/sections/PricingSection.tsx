import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, Crown, CheckCircle2, Phone, MessageCircle, ArrowRight, Sparkles, Globe, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildWebsiteWhatsAppUrl } from '@/utils/whatsapp';

const packages = [
  {
    name: 'Standard VIP',
    badge: 'Popular',
    badgeColor: '#25D366',
    icon: Star,
    color: '#e11d48',
    services: [
      { name: 'Local Indian Model (1-2 Hr Date)', slug: 'call-girls', price60: 2500, price90: 3500, price120: 5000 },
      { name: 'College Model Companion', slug: 'vip-escorts', price60: 3000, price90: 4500, price120: 6000 },
      { name: 'Independent Hotel Outcall', slug: 'call-girls', price60: 2500, price90: 3500, price120: 5000 },
    ],
  },
  {
    name: 'Executive Elite',
    badge: 'Best Value',
    badgeColor: '#4f46e5',
    icon: Crown,
    color: '#4f46e5',
    services: [
      { name: 'Celebrity & Air Hostess Model', slug: 'vip-escorts', price60: 5000, price90: 7500, price120: 10000 },
      { name: 'VIP Russian / Foreign Companion', slug: 'vip-escorts', price60: 7000, price90: 10000, price120: 14000 },
      { name: 'Luxury Dinner & Event Date', slug: 'adult-meetings', price60: 4000, price90: 6000, price120: 8000 },
    ],
  },
  {
    name: 'Overnight VIP',
    badge: 'Full Night',
    badgeColor: '#e11d48',
    icon: Sparkles,
    color: '#e11d48',
    services: [
      { name: 'Full Night Luxury Hotel Stay', slug: 'vip-escorts', price60: 12000, price90: 16000, price120: 20000 },
      { name: 'Weekend Palace & Resort Tour', slug: 'vip-escorts', price60: 18000, price90: 25000, price120: 30000 },
      { name: 'Discreet Private Outcall Stay', slug: 'call-girls', price60: 10000, price90: 14000, price120: 18000 },
    ],
  },
];

const durations = [
  { label: 'Short Date', key: 'price60' as const },
  { label: 'Half Night', key: 'price90' as const },
  { label: 'Full Night', key: 'price120' as const },
];

const extraServicesList = [
  'Standard VIP Coordination',
  ' 5-Star Hotel Outcall Arrangement',
  ' Airport Pickup Accompaniment',
  ' Multi-Day Jaipur Tour Companion',
];

export const PricingSection: React.FC = () => {
  const [activeDuration, setActiveDuration] = useState<'price60' | 'price90' | 'price120'>('price60');
  const [currency, setCurrency] = useState<'INR' | 'USD' | 'EUR'>('INR');
  const [selectedExtraService, setSelectedExtraService] = useState<string>(extraServicesList[0]);

  // Convert INR to target currency
  const formatPrice = (inrPrice: number | null) => {
    if (inrPrice === null) return 'N/A';
    if (currency === 'USD') return `$${Math.round(inrPrice / 83)}`;
    if (currency === 'EUR') return `€${Math.round(inrPrice / 90)}`;
    return `₹${inrPrice.toLocaleString('en-IN')}`;
  };

  const handleWhatsAppBooking = (serviceName: string) => {
    const durLabel = durations.find(d => d.key === activeDuration)?.label || 'Short Date';
    const fullServiceText = `${serviceName} (${durLabel})`;
    const extraText = selectedExtraService.startsWith('Standard') ? '' : selectedExtraService;
    
    const whatsappUrl = buildWebsiteWhatsAppUrl(fullServiceText, extraText);
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="pricing" aria-label="Escort Rates">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-300 bg-rose-50 text-rose-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles size={14} className="text-rose-600" /> Rates & Transparent Formats
          </span>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
            Transparent <span className="text-rose-600">Pricing</span> — Zero Advance Fees
          </h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            All prices are direct settlement with no middlemen. Select preferred format or custom requests below.
          </p>
        </div>

        {/* Currency & Duration Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 md:mb-12 bg-slate-50 border border-slate-200 rounded-2xl p-3 md:p-4">
          {/* Duration Toggle */}
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-rose-600" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-600 mr-1">Duration:</span>
            <div className="inline-flex bg-white border border-slate-200 rounded-full p-1 gap-1">
              {durations.map((dur) => (
                <button
                  key={dur.key}
                  onClick={() => setActiveDuration(dur.key)}
                  className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full font-bold text-[10px] md:text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    activeDuration === dur.key
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {dur.label}
                </button>
              ))}
            </div>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-rose-600" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-600">Currency:</span>
            <div className="inline-flex bg-white border border-slate-200 rounded-lg p-1 gap-1">
              {(['INR', 'USD', 'EUR'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                    currency === curr ? 'bg-rose-600 text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {curr === 'INR' ? '₹ INR' : curr === 'USD' ? '$ USD' : '€ EUR'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Add-on Selection */}
        <div className="mb-8 p-3.5 md:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-900">
          <span className="flex items-center gap-2 font-bold text-rose-700">
            <PlusCircle className="w-4 h-4 text-rose-600" /> Optional Coordination Requirement:
          </span>
          <select
            value={selectedExtraService}
            onChange={(e) => setSelectedExtraService(e.target.value)}
            className="bg-white text-slate-800 border border-slate-300 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-rose-500 w-full sm:w-auto cursor-pointer"
          >
            {extraServicesList.map((extra) => (
              <option key={extra} value={extra}>{extra}</option>
            ))}
          </select>
        </div>

        {/* Package Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {packages.map((pkg, pIdx) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pIdx}
                variants={itemVariants}
                className="bg-white border border-slate-200 hover:border-rose-400 rounded-2xl p-6 relative flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center">
                        <Icon size={20} className="text-rose-600" />
                      </div>
                      <h3 className="text-lg font-black text-slate-900">{pkg.name}</h3>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white"
                      style={{ backgroundColor: pkg.badgeColor }}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  {/* Services List */}
                  <div className="space-y-3 mb-8">
                    {pkg.services.map((svc, sIdx) => {
                      const price = svc[activeDuration];
                      return (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0 group/item"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-rose-600 shrink-0" />
                            <Link
                              to={`/${svc.slug}`}
                              className="text-xs font-medium text-slate-800 hover:text-rose-600 transition-colors"
                            >
                              {svc.name}
                            </Link>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-sm text-rose-600">
                              {formatPrice(price)}
                            </span>
                            <button
                              onClick={() => handleWhatsAppBooking(svc.name)}
                              className="px-2 py-0.5 rounded-lg bg-emerald-50 hover:bg-[#25D366] hover:text-white text-emerald-800 text-[10px] font-bold transition-all border border-emerald-300 cursor-pointer"
                            >
                              Inquire
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Action */}
                <button
                  onClick={() => handleWhatsAppBooking(`${pkg.name} Package`)}
                  className="w-full py-3 bg-slate-900 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle size={15} />
                  Book {pkg.name}
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
