import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Shield, Clock, Star, Heart } from 'lucide-react';

const values = [
  {
    title: 'Certified Thai Therapists',
    description: 'All our therapists are trained in traditional Thai healing arts and hold internationally recognized wellness certifications.',
    icon: Leaf
  },
  {
    title: 'Hygienic & Safe',
    description: 'Every therapy suite is sanitized before and after each session. We use fresh linens, premium oils and hospital-grade hygiene protocols.',
    icon: Shield
  },
  {
    title: 'Open 24 Hours',
    description: 'Day or night, Jaipur Spa is always welcoming you. Book a late-night session or an early morning rejuvenation — we never close.',
    icon: Clock
  },
  {
    title: 'Premium Luxury Experience',
    description: 'From the moment you enter our serene reception to the last drop of herbal tea after your session — every detail is crafted for luxury.',
    icon: Star
  },
  {
    title: 'Personalized Wellness',
    description: 'Each therapy begins with a personal consultation so your therapist understands your specific stress, pain or relaxation goals.',
    icon: Heart
  }
];

const Stats: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-label mb-4">WHY Jaipur Spa</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#e5e5e5] mb-6">
            Where Ancient Healing Meets <span className="text-[#e11d48]">Modern Luxury</span>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`bg-white/5 border border-[#e11d48]/20 rounded-2xl p-8 hover:border-[#e11d48]/40 hover:shadow-[0_8px_40px_rgba(225, 29, 72,0.15)] transition-all duration-300 group ${idx === 3 ? 'lg:col-span-1 lg:col-start-1' : ''} ${idx === 4 ? 'lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <div className="w-14 h-14 rounded-full bg-[#111111] border border-[#e11d48]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-6 h-6 text-[#e11d48]" />
              </div>
              <h3 className="text-xl font-bold text-[#e5e5e5] mb-4 group-hover:text-[#e11d48] transition-colors">{value.title}</h3>
              <p className="text-[#a3a3a3] leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;