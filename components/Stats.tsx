import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Lightbulb, Handshake, TrendingUp } from 'lucide-react';
import { StatItem } from '../types';

// Adapting the Stats section to display Core Values from Page 4 of PDF
const values = [
  { 
    label: 'Trust & Integrity', 
    desc: 'Transparent, ethical, and dependable relationships.',
    icon: <ShieldCheck className="w-10 h-10 mb-4 text-gray-800" /> 
  },
  { 
    label: 'Client Success First', 
    desc: 'Your growth is our priority. Real impact.',
    icon: <UserCheck className="w-10 h-10 mb-4 text-gray-800" /> 
  },
  { 
    label: 'Innovation', 
    desc: 'Creative solutions for an ever-changing market.',
    icon: <Lightbulb className="w-10 h-10 mb-4 text-gray-800" /> 
  },
  { 
    label: 'Collaboration', 
    desc: 'Trusted partners in your business journey.',
    icon: <Handshake className="w-10 h-10 mb-4 text-gray-800" /> 
  },
  { 
    label: 'Continuous Growth', 
    desc: 'Delivering better solutions for long-lasting value.',
    icon: <TrendingUp className="w-10 h-10 mb-4 text-gray-800" /> 
  },
];

const Stats: React.FC = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_45%)]" />
      <div className="absolute inset-y-0 w-1/2 right-0 opacity-10 bg-gradient-to-l from-white" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="inline-flex items-center gap-2 text-xs tracking-[0.5em] uppercase text-gray-400">
            <span className="w-8 h-px bg-gray-600" />
            Core Values
            <span className="w-8 h-px bg-gray-600" />
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">How we show up for founders</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Every engagement blends strategic clarity with reliable execution so you scale with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((val, index) => (
            <motion.div 
              key={val.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm p-6 text-left hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-3 mb-5 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                {React.cloneElement(val.icon as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-semibold mb-3">{val.label}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;