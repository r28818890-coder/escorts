import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { CONTACT } from '@/config/site';

const GoogleMapEmbed: React.FC = () => {
  return (
    <section className="py-8 md:py-20 px-2.5 md:px-4 bg-[#fffaf0] relative overflow-hidden">
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
          <h2 className="text-xl md:text-4xl font-display font-black text-slate-900 mb-2">
            ECJ Near <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8f641d] to-[#d6aa47]">Pink City, Jaipur</span>
          </h2>
          <p className="text-slate-600 text-xs md:text-base max-w-xl mx-auto">
            Khandela House, Sansar Chandra Road, behind Amber Tower, Pink City, Jaipur.
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
            <div className="bg-white border border-[#d6aa47]/40 rounded-xl p-3.5 md:p-5 shadow-sm">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#e11d48]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#e11d48]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#e11d48] mb-0.5">Address</p>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                    Khandela House, Sansar Chandra Road,<br />
                    Behind Amber Tower, Pink City, Jaipur – 302001
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white border border-[#d6aa47]/40 rounded-xl p-3.5 md:p-5 shadow-sm">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#e11d48]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={14} className="text-[#e11d48]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#e11d48] mb-0.5">Hours</p>
                  <p className="text-xs md:text-sm text-slate-700">Open <span className="text-[#8f641d] font-bold">24 Hours</span>, 7 Days a Week</p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href={CONTACT.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gradient-to-r from-[#8f641d] to-[#d6aa47] text-white font-bold text-xs rounded-xl shadow-md"
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
            className="lg:col-span-2 rounded-xl md:rounded-2xl overflow-hidden border border-[#d6aa47]/40 shadow-lg h-[240px] md:h-[380px]"
          >
            <iframe
              title="Escorts Hub Jaipur Location — Pink City, Jaipur"
              src={CONTACT.embedMapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
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
