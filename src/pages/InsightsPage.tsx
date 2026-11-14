import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Search, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '@/pages/Insights';
import { BRAND } from '@/config/site';
import SEO from '@/components/common/SEO';

const InsightsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories
  const categories = Array.from(new Set(BLOG_POSTS.map(post => post.category)));

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pb-24">
      <SEO 
        title={`City Guides & Verified Insights | ${BRAND.name}`}
        description={`Read verified guides on VIP companion etiquette, hotel outcall recommendations, and Noida area safety tips from ${BRAND.name}.`}
      />

      {/* Hero Section */}
      <div className="pt-10 pb-12 px-4 bg-gradient-to-b from-slate-100 to-[#f8fafc] border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-300 bg-rose-50 text-rose-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <BookOpen size={14} className="text-rose-600" /> VIP Journal & City Guides
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
            Escorts Hub Noida <span className="text-amber-600">Guides</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Authentic city insights, hotel outcall recommendations, safety advice, and companion guides across Noida.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-10 max-w-7xl">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 text-slate-900 rounded-full py-2.5 pl-11 pr-5 focus:outline-none focus:border-rose-500 shadow-sm text-xs"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                selectedCategory === null 
                  ? 'bg-rose-600 text-white shadow-sm' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  selectedCategory === category 
                    ? 'bg-rose-600 text-white shadow-sm' 
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:border-rose-400 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="p-6 flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black tracking-widest text-rose-900 uppercase bg-rose-50 border border-rose-300 px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center text-xs text-slate-400 font-medium">
                      <Clock size={12} className="mr-1 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-lg font-black text-slate-900 mb-2.5 group-hover:text-rose-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 mb-6 line-clamp-3 text-xs leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Tag size={12} className="text-rose-600" />
                      <span>{post.tag}</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-rose-600 transition-colors uppercase tracking-wider">
                      Read Guide <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-rose-600" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-lg font-black text-slate-900 mb-2">No guides found</h3>
            <p className="text-xs text-slate-500">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory(null); }}
              className="mt-4 text-rose-600 font-bold text-xs hover:underline cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InsightsPage;
