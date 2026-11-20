import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Building, 
  Lock, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { BRAND, CONTACT } from '@/config/site';
import { NOIDA_LOCALITIES, PORTAL_CATEGORIES } from '@/config/portalData';
import SEO from '@/components/common/SEO';

const BookingPage: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState(NOIDA_LOCALITIES[0].slug);
  const [selectedCategory, setSelectedCategory] = useState(PORTAL_CATEGORIES[0].slug);
  const [hotelType, setHotelType] = useState('5-Star Hotel Outcall');
  const [timing, setTiming] = useState('Instant (15-25 Mins)');
  const [clientNotes, setClientNotes] = useState('');

  const currentLocality = NOIDA_LOCALITIES.find(l => l.slug === selectedSector) || NOIDA_LOCALITIES[0];
  const currentCategory = PORTAL_CATEGORIES.find(c => c.slug === selectedCategory) || PORTAL_CATEGORIES[0];

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Escorts Hub Noida!\n\nI want to book an outcall companion:\n• Sector/Area: ${currentLocality.name}\n• Category: ${currentCategory.name}\n• Stay Type: ${hotelType}\n• Timing: ${timing}\n${clientNotes ? `• Notes: ${clientNotes}\n` : ''}\nPlease share verified available profiles for 20-min outcall.`
    );
  };

  const bookingSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://wenoidaescorts.com/booking#webpage',
    'url': 'https://wenoidaescorts.com/booking',
    'name': '24/7 Outcall Companion Booking in Noida',
    'description': 'Direct outcall booking desk for verified escorts and call girls across all 18 Noida & NCR sectors with verified companion service.',
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://wenoidaescorts.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Booking',
          'item': 'https://wenoidaescorts.com/booking'
        }
      ]
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pb-20">
      
      {/* Technical SEO */}
      <SEO
        title="Fast 24/7 Outcall Booking in Noida | Escorts Hub"
        description="Book verified outcall escorts in Noida with verified hotel outcall. Fast 20-min hotel arrival in Sector 18, 62 & Expressway. Call or WhatsApp +91 8218125815 now."
        url="https://wenoidaescorts.com/booking"
        schema={bookingSchema}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-6 pb-12 px-4 sm:px-6 border-b border-amber-500/20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-6 font-medium">
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight size={13} />
            <span className="text-amber-400 font-bold">Booking</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-black uppercase tracking-widest text-amber-300">
              Direct Outcall Dispatch Desk
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Fast 24/7 Companion Booking in Noida
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Instant 20-minute hotel outcall delivery across Sector 18, Sector 62, Noida Expressway, Greater Noida & Ghaziabad borders. 100% Direct hotel outcall with verified companion service.
          </p>
        </div>
      </section>

      {/* Main Booking Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-600 block mb-1">
                Step 1 of 2
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Select Your Noida Outcall Details
              </h2>
            </div>

            {/* Locality Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <MapPin size={14} className="text-amber-600" />
                Select Noida Sector or NCR Destination:
              </label>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {NOIDA_LOCALITIES.map((loc) => (
                  <option key={loc.id} value={loc.slug}>
                    {loc.name} ({loc.landmark})
                  </option>
                ))}
              </select>
            </div>

            {/* Category Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Sparkles size={14} className="text-amber-600" />
                Preferred Companion Category:
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {PORTAL_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.slug}>
                    {cat.name} — {cat.tagline}
                  </option>
                ))}
              </select>
            </div>

            {/* Hotel / Stay Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Building size={14} className="text-amber-600" />
                Accommodation / Stay Type:
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                {[
                  '5-Star Luxury Hotel',
                  '4-Star Business Hotel',
                  'Boutique Hotel / Suite',
                  'Private Residence'
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setHotelType(type)}
                    className={`py-2.5 px-3 rounded-xl border text-left transition-all ${
                      hotelType === type
                        ? 'bg-amber-50 border-amber-500 text-amber-900 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Arrival Timing */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Clock size={14} className="text-amber-600" />
                Preferred Arrival Window:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                {[
                  'Instant (15-25 Mins)',
                  'Tonight 9-11 PM',
                  'Late Night Outcall'
                ].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTiming(t)}
                    className={`py-2.5 px-2 rounded-xl border text-center transition-all ${
                      timing === t
                        ? 'bg-amber-50 border-amber-500 text-amber-900 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Notes */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">
                Specific Preferences or Hotel Details (Optional):
              </label>
              <input
                type="text"
                value={clientNotes}
                onChange={(e) => setClientNotes(e.target.value)}
                placeholder="e.g. Radisson Blu Sector 18, prefer Russian or College companion"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-3">
              <a
                href={`https://wa.me/918218125815?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[52px]"
              >
                <MessageCircle size={20} />
                Send Outcall Request on WhatsApp (8218125815)
              </a>

              <a
                href={CONTACT.phoneHref}
                className="w-full py-3.5 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[48px]"
              >
                <Phone size={18} />
                Direct Call Dispatch: {CONTACT.phoneDisplay}
              </a>
            </div>

            {/* Anti-Scam Notice */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
              <AlertCircle size={18} className="text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Strict Verified Companion Policy:</strong>
                Never transfer money online, pay registration fees, or scan QR codes. Pay cash directly to your companion upon meeting in your hotel room.
              </div>
            </div>

          </div>

          {/* Right Column: 4-Step Process & Trust Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 4-Step Workflow */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-base font-black text-slate-900 uppercase tracking-wider text-xs flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                4-Step Effortless Booking Process
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center shrink-0">1</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Choose Sector & Hotel</h4>
                    <p className="text-slate-500 mt-0.5">Select your sector across Sector 18, 62, Expressway, or Greater Noida.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center shrink-0">2</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Instant Photo Verification</h4>
                    <p className="text-slate-500 mt-0.5">Our coordinator shares real-time live selfies and confirms exact availability.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center shrink-0">3</span>
                  <div>
                    <h4 className="font-bold text-slate-900">20-Min Doorstep Outcall</h4>
                    <p className="text-slate-500 mt-0.5">Your companion arrives discreetly at your hotel lobby or room door.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center shrink-0">4</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Meet & Direct Hotel Outcall</h4>
                    <p className="text-slate-500 mt-0.5">Inspect in person, enjoy refined companionship, and settle payment in cash.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Discretion & Privacy Assurance */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-3">
              <span className="text-amber-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                <Lock size={14} /> VIP Confidentiality Assured
              </span>
              <h4 className="font-black text-lg">100% Discreet & Confidential</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We never store personal customer numbers, call histories, or hotel addresses. All conversations on WhatsApp are treated under strict privacy non-disclosure agreements.
              </p>
            </div>

            {/* Popular Hotel Hubs in Noida */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Recommended Noida Outcall Hotels
              </h4>
              <ul className="space-y-1.5 text-slate-600">
                <li>• Radisson Blu Hotel Noida (Sector 18)</li>
                <li>• Crowne Plaza Greater Noida (Surajpur)</li>
                <li>• Jaypee Greens Golf & Spa Resort (Greater Noida)</li>
                <li>• Mosaic Hotel (Sector 18 Metro Gate 2)</li>
                <li>• Sandal Suites by Lemon Tree (Expressway 137)</li>
                <li>• Savoy Suites (Sector 16 / 18 Corridor)</li>
              </ul>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BookingPage;
