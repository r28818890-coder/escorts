import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

import { BLOG_POSTS } from '@/pages/Insights';

const articles = BLOG_POSTS.slice(0, 3).map(post => ({
  id: post.id,
  tag: post.tag,
  date: post.date,
  title: post.title,
  desc: post.excerpt,
  slug: post.slug,
}));

const InsightsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Side */}
          <div className="lg:col-span-5">
            <span className="section-label mb-6">WELLNESS JOURNAL</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Expert <span className="text-[#e11d48]">Insights.</span>
            </h2>
            <p className="text-lg text-[#a3a3a3] mb-10 max-w-md leading-relaxed">
              Discover the healing benefits of massage therapy, spa wellness tips, and relaxation guides for Jaipur residents.
            </p>
            
            <Link to="/blog" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#be123c] to-[#e11d48] rounded-full text-black font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform shadow-lg shadow-[#be123c]/20">
              Read All Articles
              <ArrowRight size={16} />
            </Link>
          </div>
          
          {/* Right Side (Accordion Cards) */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {articles.map((article, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={article.id}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/10 border-[#e11d48]/50 shadow-[0_4px_20px_rgba(225, 29, 72,0.15)]' : 'bg-white/5 border-white/10 hover:border-[#e11d48]/30'}`}
                  >
                    <button
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 pr-4">
                        <span className="text-xs font-bold text-[#e11d48] uppercase tracking-wider bg-[#e11d48]/10 px-3 py-1 rounded-full w-fit">
                          {article.tag}
                        </span>
                        <span className="text-xs text-[#a3a3a3] font-medium flex items-center gap-1">
                          <Clock size={12} />
                          {article.date}
                        </span>
                      </div>
                      
                      <ArrowRight 
                        className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90 text-[#e11d48]' : 'text-white/40'}`}
                        size={20}
                      />
                    </button>
                    
                    <div className="px-6 pb-2">
                      <h3 className={`text-xl md:text-2xl font-bold font-display leading-snug transition-colors ${isOpen ? 'text-white' : 'text-[#e5e5e5]'}`}>
                        {article.title}
                      </h3>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pt-4 text-[#a3a3a3] leading-relaxed">
                            <p className="mb-6">{article.desc}</p>
                            <Link to={`/blog/${article.slug}`} className="inline-flex items-center gap-2 text-[#e11d48] font-bold text-sm uppercase tracking-wide hover:text-white transition-colors">
                              Read Full Article
                              <ArrowRight size={16} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;