import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, Heart, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Warm Welcome & Consultation',
    shortTitle: 'Arrive & Unwind',
    icon: Sparkles,
    heading: 'Personalized Consultation',
    content: 'From the very moment you enter Jaipur Spa, the ambience — soft lighting, calming scents and peaceful music — begins your healing journey. Our receptionist warmly welcomes you and guides you to a pre-session consultation. Your dedicated therapist takes time to understand your specific wellness goals, areas of tension, pain points and personal preferences before the session begins.',
    features: [
      'Complimentary welcome herbal tea',
      'Private changing suite',
      'Personalized therapy plan discussion',
      'Preference for pressure level & oils'
    ]
  },
  {
    id: 2,
    title: 'Premium Therapy Room',
    shortTitle: 'Your Private Suite',
    icon: Star,
    heading: 'Private Luxury Suite',
    content: 'Every guest at Jaipur Spa receives a fully private, sanitized therapy suite. Our suites are equipped with imported massage beds, temperature control, soft ambient lighting and your choice of background music. Fresh premium-grade therapeutic oils and sanitized linens are prepared for your exclusive use. Privacy, comfort and hygiene are our core commitments.',
    features: [
      '100% private suite',
      'Freshly sanitized between each guest',
      'Premium therapeutic-grade oils',
      'Temperature-controlled environment'
    ]
  },
  {
    id: 3,
    title: 'Expert Therapy Session',
    shortTitle: 'The Treatment',
    icon: Heart,
    heading: 'Certified Expert Therapy',
    content: "Our certified therapists bring years of specialized training in traditional Thai healing arts, Balinese massage, Swedish techniques and more. Every movement is deliberate, precise and adapted to your body's unique needs. Whether you seek deep tissue relief from chronic muscle tension or a gentle aromatherapy session for stress relief, your therapist delivers a genuinely transformative experience.",
    features: [
      'Certified therapists trained in traditional Thai arts',
      'Technique adapted to your body',
      '9 signature therapies available',
      'Available 24 hours, 7 days a week'
    ]
  },
  {
    id: 4,
    title: 'Post-Session Wellness',
    shortTitle: 'Refresh & Restore',
    icon: Leaf,
    heading: 'The Afterglow Experience',
    content: "Your Jaipur Spa experience doesn't end when the massage does. After your session, relax in our post-treatment lounge with complimentary herbal tea and refreshments. Allow your body to fully integrate the healing before stepping back into the world. Our team is available to recommend at-home care routines or schedule your next visit for continued wellness.",
    features: [
      'Complimentary herbal tea after session',
      'Post-treatment relaxation lounge',
      'Home care wellness advice',
      'Easy rebooking for next visit'
    ]
  }
];

const GrowthProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-label mb-4">THE Jaipur Spa JOURNEY</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Your Path to <span className="text-[#e11d48]">Pure Bliss</span>
          </h2>
          <p className="text-lg text-[#a3a3a3] leading-relaxed">
            From the moment you arrive to the moment you leave refreshed — every step is thoughtfully crafted for your total relaxation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 relative overflow-hidden group ${
                    isActive
                      ? 'bg-white/10 shadow-[0_4px_20px_rgba(225, 29, 72,0.1)]'
                      : 'bg-transparent hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#e11d48]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? 'bg-[#e11d48]/20 text-[#e11d48]' : 'bg-[#1a1a1a] text-[#a3a3a3] group-hover:text-[#e11d48]'
                  }`}>
                    <step.icon size={20} />
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-wider mb-1 transition-colors ${
                      isActive ? 'text-[#e11d48]' : 'text-[#a3a3a3]'
                    }`}>
                      Step {step.id}
                    </div>
                    <div className={`font-bold transition-colors ${
                      isActive ? 'text-white' : 'text-[#e5e5e5]'
                    }`}>
                      {step.shortTitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Content Panel */}
          <div className="lg:w-2/3">
            <div className="bg-[#0a0a0a] border border-[#e11d48]/20 rounded-3xl p-6 sm:p-10 min-h-[500px] relative overflow-hidden shadow-2xl backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-[#e11d48]/10 border border-[#e11d48]/30 flex items-center justify-center text-[#e11d48]">
                      {React.createElement(steps[activeStep].icon, { size: 28 })}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                        {steps[activeStep].heading}
                      </h3>
                      <div className="h-1 w-16 bg-[#e11d48] rounded-full" />
                    </div>
                  </div>
                  
                  <p className="text-[#a3a3a3] leading-relaxed mb-8 text-lg">
                    {steps[activeStep].content}
                  </p>

                  <div className="mt-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {steps[activeStep].features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-[#e11d48] shrink-0 mt-0.5" />
                          <span className="text-[#e5e5e5] text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-10 flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10">
                    <button 
                      onClick={() => window.dispatchEvent(new CustomEvent('open-lead-modal'))}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#be123c] to-[#e11d48] text-black font-bold text-sm tracking-widest uppercase rounded-full hover:scale-105 transition-transform"
                    >
                      Book Your Session Now
                      <ArrowRight size={16} />
                    </button>
                    <a 
                      href="tel:+917357678356"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white/10 hover:border-[#e11d48]/30 transition-colors"
                    >
                      Call +91 7357678356
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthProcess;