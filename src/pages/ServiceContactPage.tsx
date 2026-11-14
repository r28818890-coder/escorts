import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND, CONTACT } from '@/config/site';
import SEO from '@/components/common/SEO';

const ServiceContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '', website_hp: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website_hp) return;

    setStatus('submitting');
    
    const waText = `Hello ${BRAND.name}! Inquiry:
Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email || 'N/A'}
Message: ${formData.message}`;

    const waUrl = `https://wa.me/${CONTACT.whatsapp1}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');

    setStatus('success');
    setFormData({ name: '', email: '', mobile: '', message: '', website_hp: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pb-24">
      <SEO 
        title={`Contact Us | ${BRAND.name}`} 
        description={`Get in touch with ${BRAND.name} for verified companion bookings, inquiries, and hotel outcall coordination.`} 
        schema={[
          {
            '@type': 'ContactPage',
            '@id': `${BRAND.domain}/contact#webpage`,
            url: `${BRAND.domain}/contact`,
            name: `Contact ${BRAND.name}`,
            description: `Official 24/7 contact directory and concierge helpline for ${BRAND.name} in Noida & NCR.`,
            mainEntity: {
              '@type': 'LocalBusiness',
              '@id': `${BRAND.domain}/#business`,
              name: BRAND.name,
              telephone: CONTACT.phoneDisplay,
              email: CONTACT.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: CONTACT.address,
                addressLocality: 'Noida',
                addressRegion: 'Uttar Pradesh',
                postalCode: '201301',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: CONTACT.phoneDisplay,
                contactType: 'customer service',
                areaServed: 'IN',
                availableLanguage: ['en', 'hi'],
              },
            },
          },
        ]}
      />

      {/* Hero */}
      <div className="pt-10 pb-12 px-4 bg-gradient-to-b from-slate-100 to-[#f8fafc] border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-300 bg-rose-50 text-rose-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles size={14} className="text-rose-600" /> 24/7 VIP Support
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
            Contact <span className="text-rose-600">{BRAND.name}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are here to assist with verified profile bookings, hotel outcalls, and companion coordination 24 hours a day, 7 days a week.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">Direct VIP Hotline</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-0.5">Call Helpline</h4>
                  <a href={CONTACT.phoneHref} className="text-sm font-bold text-rose-600 hover:underline">
                    {CONTACT.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">24/7 Direct line for immediate assistance</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-0.5">WhatsApp VIP Coordination</h4>
                  <div className="flex flex-col gap-1 text-xs sm:text-sm font-bold">
                    <a href={CONTACT.whatsapp1Href} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">
                      WhatsApp 1: {CONTACT.whatsapp1Display}
                    </a>
                    <a href={CONTACT.whatsapp2Href} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">
                      WhatsApp 2: {CONTACT.whatsapp2Display}
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">Fast profile photo sharing and confirmation</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-0.5">Operating Hours</h4>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">{CONTACT.hours}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Round-the-clock hotel & resort doorstep outcall</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-0.5">Service Coverage</h4>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">All 20+ Localities in Jaipur, Rajasthan</p>
                  <p className="text-xs text-slate-500 mt-0.5">Sindhi Camp, MI Road, Vaishali Nagar, Malviya Nagar, C-Scheme</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-1">Send an Instant Message</h3>
              <p className="text-xs text-slate-500">Fill out this quick form to connect with our coordinator directly on WhatsApp.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="website_hp" value={formData.website_hp} onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })} className="hidden" />

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:border-rose-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:border-rose-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Locality / Inquiry *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Inquiring about VIP Russian companion in MI Road / 5-star hotel outcall..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:border-rose-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:brightness-105 transition-all cursor-pointer"
              >
                <Send size={14} /> Send WhatsApp Request
              </button>

              {status === 'success' && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-medium">
                  <CheckCircle size={15} /> Message opened in WhatsApp successfully!
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceContactPage;
