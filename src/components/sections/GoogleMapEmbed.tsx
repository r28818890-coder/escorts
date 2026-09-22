import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { CONTACT } from '@/config/site';

const GoogleMapEmbed: React.FC = () => {
  return (
    <section className="py-8 md:py-20 px-2.5 md:px-4 bg-[#0a0a0a] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] md:w-[600px] h-[250px] bg-[radial-gradient(ellipse_at_top,_rgba(190, 18, 60,0.08),_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-12"
        >
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-[#e11d48] border border-[#e11d48]/30 bg-[#e11d48]/5 px-3 py-1 rounded-full mb-2">
            Find Us
          </span>
          <h2 className="text-xl md:text-4xl font-display font-black text-white mb-2">
            Spa Near <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#be123c] to-[#e11d48]">Sindhi Camp, Jaipur</span>
          </h2>
          <p className="text-[#a3a3a3] text-xs md:text-base max-w-xl mx-auto">
            3 minutes from Jaipur Railway Station. Opposite Polo Victory Cinema, Motilal Atal Road.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-start">

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            {/* Address Card */}
            <div className="bg-white/5 border border-[#e11d48]/20 rounded-xl p-3.5 md:p-5">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#e11d48]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#e11d48]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#e11d48] mb-0.5">Address</p>
                  <p className="text-xs md:text-sm text-[#e5e5e5] leading-relaxed">
                    Motilal Atal Rd, Opposite Polo Victory Cinema,<br />
                    Sindhi Camp, Jaipur – 302001
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white/5 border border-[#e11d48]/20 rounded-xl p-3.5 md:p-5">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#e11d48]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={14} className="text-[#e11d48]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#e11d48] mb-0.5">Hours</p>
                  <p className="text-xs md:text-sm text-[#e5e5e5]">Open <span className="text-[#e11d48] font-bold">24 Hours</span>, 7 Days a Week</p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href={CONTACT.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gradient-to-r from-[#be123c] to-[#e11d48] text-black font-bold text-xs rounded-xl shadow-md"
            >
              <Navigation size={14} />
              Get Directions on Google Maps
            </a>
          </motion.div>

          {/* Google Map Embed - Compact Mobile Height */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 rounded-xl md:rounded-2xl overflow-hidden border border-[#e11d48]/20 shadow-2xl h-[240px] md:h-[380px]"
          >
            <iframe
              title="Jaipur Spa Location — Sindhi Camp, Jaipur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6!2d75.8016!3d26.9239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b3f3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sJaipur Spa%20HOTEL%20%26%20SPA!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>

        {/* Distance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {[
            ' 3 min from Railway Station',
            ' 1 min from Bus Stand',
            '️ 5 min from MI Road',
            '️ 8 min from Civil Lines',
            '️ 25 min from Airport',
          ].map((badge) => (
            <span
              key={badge}
              className="text-[10px] md:text-xs font-semibold text-[#a3a3a3] border border-white/10 bg-white/5 px-2.5 py-1 rounded-full"
            >
              {badge}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default GoogleMapEmbed;
