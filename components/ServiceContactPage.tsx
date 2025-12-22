import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PageId } from '../types';
import { formatLeadMessage, openWhatsAppWithMessage } from '../utils/whatsapp';

interface ServiceContactPageProps {
  onBack?: (pageId: PageId) => void;
}

const ServiceContactPage: React.FC<ServiceContactPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  return (
    <div className="w-full font-sans text-gray-800 animate-fadeIn bg-white">
      <div className="bg-[#0a0a0a] text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[5000ms]"></div>

        {onBack && (
          <button
            type="button"
            onClick={() => onBack('home')}
            className="absolute left-6 top-6 z-20 inline-flex items-center gap-2 text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <span className="inline-block rotate-180">&rarr;</span>
            <span>Back to Home</span>
          </button>
        )}

        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 relative z-10 mt-8 md:mt-0">Let's Connect</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light relative z-10">
          We help you navigate the complexities of business growth. Reach out to us for a consultation.
        </p>
      </div>

      <div className="container mx-auto px-6 py-20 -mt-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {[
            { icon: Phone, title: 'Call Us', text: '+91-9660030903', sub: 'Mon-Sat: 10AM - 7PM' },
            { icon: Mail, title: 'Email Us', text: 'info@businessnesta.com', sub: 'Response within 2 hours' },
            { icon: MapPin, title: 'Visit Office', text: 'Jaipur, Rajasthan', sub: 'Galaxy Avenue, Tonk Road' }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 shadow-xl rounded-xl border-t-4 border-black text-center group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-black group-hover:bg-black group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-lg font-serif font-bold mb-1 text-gray-800 group-hover:text-blue-600 transition-colors">
                {item.text}
              </p>
              <p className="text-sm text-gray-500">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100 grid md:grid-cols-2">
          <div className="relative h-full min-h-[400px] group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
              alt="Office"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
            <div className="absolute bottom-10 left-10 right-10 text-white transform group-hover:-translate-y-2 transition-transform duration-500">
              <h2 className="text-3xl font-serif font-bold mb-4 drop-shadow-lg">Visit our HQ</h2>
              <p className="opacity-90 font-light drop-shadow-md">
                Experience premium consultancy in a space designed for success.
              </p>
            </div>
          </div>

          <div className="p-10 md:p-16 bg-white">
            <h2 className="text-3xl font-serif font-bold mb-8">Send a Message</h2>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const message = formatLeadMessage({
                  'First Name': formData.firstName,
                  'Last Name': formData.lastName,
                  'Email': formData.email,
                  'Message': formData.message,
                  'Requested': 'Website contact form',
                });
                openWhatsAppWithMessage(message);
              }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-black transition-colors">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="w-full p-4 bg-gray-50 border-b-2 border-gray-200 focus:border-black outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-black transition-colors">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    className="w-full p-4 bg-gray-50 border-b-2 border-gray-200 focus:border-black outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-black transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-4 bg-gray-50 border-b-2 border-gray-200 focus:border-black outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-black transition-colors">
                  Message
                </label>
                <textarea
                  rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full p-4 bg-gray-50 border-b-2 border-gray-200 focus:border-black outline-none transition-colors"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full md:w-auto">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContactPage;


