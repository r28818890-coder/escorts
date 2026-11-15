import React, { useState } from 'react';
import { Clock, Calendar, UserCheck, Sparkles, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CONTACT } from '@/config/site';

const SERVICES_LIST = [
  { title: 'VIP Russian Companion', price: 7000 },
  { title: 'College Model Escort', price: 3000 },
  { title: 'Independent Hotel Outcall', price: 2500 },
  { title: 'Full Night Luxury Accompaniment', price: 12000 },
  { title: 'Dinner & Event Date', price: 4000 },
  { title: 'Executive Suite Visit', price: 5000 },
];

const TIME_SLOTS = [
  { label: 'Immediate (20-30 Mins)', period: 'Fast' },
  { label: '12:00 PM - 02:00 PM', period: 'Afternoon' },
  { label: '04:00 PM - 06:00 PM', period: 'Evening' },
  { label: '08:00 PM - 10:00 PM', period: 'Night' },
  { label: '11:00 PM - 02:00 AM', period: 'Late Night' },
  { label: 'Full Night (10 PM - 6 AM)', period: 'Overnight' },
];

const DURATIONS = [
  { id: '1hr', label: '1 - 2 Hours (Short Meeting)' },
  { id: 'half', label: '4 - 5 Hours (Half Night)' },
  { id: 'full', label: 'Full Night (Overnight Stay)' },
];

const COMPANION_OPTIONS = [
  { id: 'female', label: 'VIP Female Model', icon: '💃' },
  { id: 'russian', label: 'Foreign / Russian Model', icon: '👑' },
  { id: 'independent', label: 'Independent Hostess', icon: '✨' },
];

export const InteractiveSlotBooking: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>(SERVICES_LIST[0].title);
  const [selectedDate, setSelectedDate] = useState<string>('Today');
  const [customDate, setCustomDate] = useState<string>('');
  const [selectedDuration, setSelectedDuration] = useState<string>(DURATIONS[0].id);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(TIME_SLOTS[0].label);
  const [selectedCompanion, setSelectedCompanion] = useState<string>(COMPANION_OPTIONS[0].id);
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const dateStr = selectedDate === 'Custom' && customDate ? customDate : selectedDate;
    const durLabel = DURATIONS.find((d) => d.id === selectedDuration)?.label || selectedDuration;
    const companionLabel = COMPANION_OPTIONS.find((t) => t.id === selectedCompanion)?.label || selectedCompanion;

    const message = `Hello We Noida Escorts! I would like to book a verified meeting:
• Category: ${selectedService}
• Date: ${dateStr}
• Time Slot: ${selectedTimeSlot}
• Duration: ${durLabel}
• Preference: ${companionLabel}
• Name: ${guestName || 'Guest'}
• Phone: ${guestPhone || 'Direct WhatsApp'}`;

    const url = `https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-10 md:py-20 px-3 md:px-6 bg-slate-900 text-white relative overflow-hidden" id="slot-booking">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-2">
            <Clock className="w-3.5 h-3.5" /> 24-Hour Live Coordination
          </div>
          <h2 className="text-2xl md:text-5xl font-black text-white tracking-tight">
            Reserve Your Preferred Slot
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mt-1.5 text-xs md:text-sm">
            Select category, date, timing & companion preference for direct WhatsApp confirmation.
          </p>
        </div>

        {/* Booking Card Form Container */}
        <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-slate-800/90 border border-slate-700 shadow-2xl space-y-5 md:space-y-6">
          
          {/* Step 1: Select Category */}
          <div>
            <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Step 1: Choose Companion Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SERVICES_LIST.map((service) => {
                const isSelected = selectedService === service.title;
                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setSelectedService(service.title)}
                    className={`py-2 px-2.5 rounded-xl text-[11px] md:text-xs font-medium border text-center transition cursor-pointer ${
                      isSelected
                        ? 'bg-rose-600 text-white font-bold border-rose-500 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {service.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Date & Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Date Selection */}
            <div>
              <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> Step 2: Select Date
              </label>
              <div className="flex gap-2 mb-2.5">
                {['Today', 'Tomorrow', 'Custom'].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDate(d)}
                    className={`flex-1 py-2 px-2 rounded-xl text-[11px] md:text-xs font-semibold border transition cursor-pointer ${
                      selectedDate === d
                        ? 'bg-rose-600 text-white border-rose-500 font-bold'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {d === 'Today' ? ' Today' : d === 'Tomorrow' ? '️ Tomorrow' : ' Pick Date'}
                  </button>
                ))}
              </div>
              {selectedDate === 'Custom' && (
                <input
                  type="date"
                  value={customDate}
                  onChange={(e) => setCustomDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-500"
                />
              )}
            </div>

            {/* Duration Selector */}
            <div>
              <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> Step 3: Meeting Duration
              </label>
              <div className="space-y-1.5">
                {DURATIONS.map((dur) => (
                  <button
                    key={dur.id}
                    type="button"
                    onClick={() => setSelectedDuration(dur.id)}
                    className={`w-full py-2 px-3 rounded-xl text-[11px] md:text-xs font-medium border text-left transition cursor-pointer ${
                      selectedDuration === dur.id
                        ? 'bg-rose-600/20 text-rose-300 border-rose-500 font-bold'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {dur.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Time Slot Picker */}
          <div>
            <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> Step 4: 24-Hour Time Slot
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 md:gap-2">
              {TIME_SLOTS.map((slot, index) => {
                const isSelected = selectedTimeSlot === slot.label;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedTimeSlot(slot.label)}
                    className={`py-2 px-1.5 rounded-xl border text-[10px] md:text-xs font-medium text-center transition cursor-pointer ${
                      isSelected
                        ? 'bg-rose-600 text-white font-bold border-rose-500 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-rose-500/40'
                    }`}
                  >
                    <div>{slot.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 5: Companion Preference */}
          <div>
            <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4" /> Step 5: Model Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {COMPANION_OPTIONS.map((opt) => {
                const isSelected = selectedCompanion === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedCompanion(opt.id)}
                    className={`py-2.5 px-3 rounded-xl text-left border text-[11px] md:text-xs flex items-center gap-2 transition cursor-pointer ${
                      isSelected
                        ? 'bg-rose-600/20 text-rose-300 border-rose-500 font-bold'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    <span>{opt.icon}</span>
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Guest Form & WhatsApp Instant Booking CTA */}
          <form onSubmit={handleWhatsAppBooking} className="pt-2 border-t border-slate-700 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name (Optional)"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-500"
              />
              <input
                type="tel"
                placeholder="Your Phone / WhatsApp"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl md:rounded-2xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white font-bold text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg transition transform hover:scale-[1.01] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" /> Confirm & Inquire on WhatsApp
            </button>
          </form>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] text-slate-400 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Real Photo Authentication
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> 100% Real Photo Verification
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSlotBooking;
