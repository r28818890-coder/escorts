import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';
import { createWhatsAppLink } from '@/utils/whatsapp';

interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: { label: string; icon: string; value: string }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Where do you feel the most tightness or discomfort?',
    subtitle: 'Select your primary tension focus area',
    options: [
      { label: 'Neck & Upper Shoulders (Desk/Tech Neck)', icon: '', value: 'neck' },
      { label: 'Lower Back & Spine Stiffness', icon: '', value: 'back' },
      { label: 'Heavy Legs & Feet Fatigue', icon: '', value: 'legs' },
      { label: 'Mental Stress & Insomnia', icon: '', value: 'stress' },
      { label: 'Dull Skin & Body Detox Needs', icon: '', value: 'skin' },
    ],
  },
  {
    id: 2,
    question: 'What pressure level do you prefer?',
    subtitle: 'Every therapy is customized by our therapists',
    options: [
      { label: 'Gentle & Soothing (Pure Relaxation)', icon: '', value: 'gentle' },
      { label: 'Medium Firm (Balanced Relief)', icon: '️', value: 'medium' },
      { label: 'Deep & Intense (Deep Knots & Muscle Release)', icon: '', value: 'deep' },
    ],
  },
  {
    id: 3,
    question: 'What is your main goal for today’s session?',
    subtitle: 'Helps us tailor your experience',
    options: [
      { label: 'Instant Muscle Pain Relief', icon: '', value: 'pain' },
      { label: 'Deep Sleep & Stress Reduction', icon: '', value: 'sleep' },
      { label: 'Flexibility & Energy Boost', icon: '', value: 'flexibility' },
      { label: 'Radiant Skin Exfoliation', icon: '', value: 'glow' },
    ],
  },
];

interface QuizRecommendation {
  title: string;
  price: string;
  duration: string;
  desc: string;
  reasons: string[];
}

const getRecommendation = (answers: Record<number, string>): QuizRecommendation => {
  const painArea = answers[1] || 'neck';
  const pressure = answers[2] || 'medium';
  const goal = answers[3] || 'pain';

  if (pressure === 'deep' || painArea === 'back') {
    return {
      title: 'Deep Tissue Massage',
      price: '₹1,199',
      duration: '60 / 90 Mins',
      desc: 'Targeted deep myofascial release for persistent muscle knots and lower back stiffness.',
      reasons: ['Breaks down chronic muscle adhesions', 'Improves spinal mobility', 'Relieves tension knots'],
    };
  }

  if (painArea === 'stress' || goal === 'sleep') {
    return {
      title: 'Aroma Therapy',
      price: '₹1,299',
      duration: '60 / 90 Mins',
      desc: 'Infused with lavender & sandalwood essential oils for nervous system relaxation.',
      reasons: ['Lowers cortisol stress levels', 'Promotes deep restful sleep', 'Restores mental focus'],
    };
  }

  if (goal === 'glow' || painArea === 'skin') {
    return {
      title: 'Body Scrub & Herbal Steam',
      price: '₹1,499',
      duration: '60 Mins',
      desc: 'Organic exfoliation scrub combined with herbal steam jet for radiant skin renewal.',
      reasons: ['Removes dead skin cells', 'Deep pore detox', 'Hydrates & softens skin'],
    };
  }

  return {
    title: 'Traditional Thai Massage',
    price: '₹1,099',
    duration: '60 / 90 Mins',
    desc: 'Ancient yoga stretching & energy line pressure points for whole-body restoration.',
    reasons: ['Increases joint flexibility', 'Recharges energy flow', 'Relieves whole-body fatigue'],
  };
};

export const TherapyQuizWidget: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleSelectOption = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: value }));
    if (currentStep < quizQuestions.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setAnswers({});
    setIsCompleted(false);
  };

  const rec = getRecommendation(answers);
  const currentQ = quizQuestions.find(q => q.id === currentStep) || quizQuestions[0];

  return (
    <section className="py-8 md:py-20 px-2.5 md:px-4 bg-[#050505] relative overflow-hidden border-b border-[#e11d48]/10">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-12">
          <span className="section-label mb-2">PERSONALIZED THERAPY FINDER</span>
          <h2 className="text-xl md:text-5xl font-display font-bold text-white mb-2">
            Which Therapy Suits You <span className="text-[#e11d48]">Best</span>?
          </h2>
          <p className="text-[#a3a3a3] text-xs md:text-base">
            Take our 10-second 3-step interactive quiz to receive a customized recommendation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-[#0a0a0a] border border-[#e11d48]/20 rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-2xl backdrop-blur-md">
          {!isCompleted ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#e11d48]">
                  Step {currentStep} of {quizQuestions.length}
                </span>
                <div className="flex gap-1">
                  {quizQuestions.map(q => (
                    <div
                      key={q.id}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        q.id === currentStep ? 'w-6 bg-[#e11d48]' : q.id < currentStep ? 'w-3 bg-[#be123c]' : 'w-3 bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-sm md:text-2xl font-display font-bold text-white mb-1">
                    {currentQ.question}
                  </h3>
                  <p className="text-[10px] md:text-xs text-[#a3a3a3] mb-4">{currentQ.subtitle}</p>

                  <div className="space-y-2">
                    {currentQ.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(opt.value)}
                        className="w-full text-left p-2.5 md:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#e11d48]/50 hover:bg-[#e11d48]/10 transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base md:text-xl">{opt.icon}</span>
                          <span className="text-xs md:text-sm font-medium text-[#e5e5e5] group-hover:text-white">
                            {opt.label}
                          </span>
                        </div>
                        <ArrowRight size={14} className="text-[#a3a3a3] group-hover:text-[#e11d48] transition-colors" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-2"
            >
              <div className="w-12 h-12 rounded-full bg-[#e11d48]/20 border border-[#e11d48]/40 flex items-center justify-center mx-auto mb-3 text-[#e11d48]">
                <Sparkles size={24} />
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#e11d48] block mb-1">
                Your Personalized Recommendation
              </span>
              <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-1">
                {rec.title}
              </h3>
              <p className="text-xs md:text-sm text-[#e11d48] font-bold mb-3">
                Starting at {rec.price} ({rec.duration})
              </p>
              <p className="text-xs text-[#a3a3a3] max-w-md mx-auto mb-4 leading-relaxed">
                {rec.desc}
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-4 text-left max-w-md mx-auto">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white block mb-1.5">
                  Why this is perfect for you:
                </span>
                <ul className="space-y-1">
                  {rec.reasons.map((r, i) => (
                    <li key={i} className="text-xs text-[#d4d4d4] flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-[#25D366] shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={createWhatsAppLink(`Hi Jaipur Spa! My Quiz Recommendation is ${rec.title} (${rec.price}). I want to book a session.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-[#be123c] to-[#e11d48] text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-transform shadow-lg"
                >
                  Book Recommended Therapy
                </a>
                <button
                  onClick={handleReset}
                  className="px-4 py-3 bg-zinc-800 text-gray-400 font-bold text-xs uppercase tracking-widest rounded-xl hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <RotateCcw size={12} /> Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TherapyQuizWidget;
