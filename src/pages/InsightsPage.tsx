import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Search, ArrowRight, BookOpen, Calendar, Sparkles } from 'lucide-react';
import { BRAND } from '@/config/site';
import SEO from '@/components/common/SEO';
import { getLiveBlogs, getBacklinkStats } from '@/services/autoPublishEngine';

const InsightsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Dynamic live blogs list (auto-sorted newest first)
  const livePosts = useMemo(() => getLiveBlogs(), []);
  const backlinkStats = useMemo(() => getBacklinkStats(), []);

  // Extract unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(livePosts.map((post) => post.category)));
  }, [livePosts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return livePosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.tag && post.tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [livePosts, searchTerm, selectedCategory]);

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pb-24">
      <SEO
        title={`Call Girl Noida & Escorts Service Noida City Guides | ${BRAND.name}`}
        description={`Verified daily guides on call girl noida, escorts service noida, 5-star hotel outcalls, and safe booking protocols across Noida & NCR.`}
      />

      {/* Hero Section */}
      <div className="pt-10 pb-12 px-4 bg-gradient-to-b from-slate-100 to-[#f8fafc] border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-300 bg-rose-50 text-rose-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <BookOpen size={14} className="text-rose-600" /> VIP Journal &amp; City Guides
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
            Call Girl Noida &amp; <span className="text-amber-600">Escorts Service Noida</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Authentic city insights, hotel outcall recommendations, safety advice, and companion guides updated 2x daily (6:00 AM &amp; 7:00 PM).
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-500 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-slate-700">{livePosts.length} Live Articles</span>
            <span>•</span>
            <span className="text-slate-600">Daily 15 Auto-Backlinks ({backlinkStats.liveCount} Active)</span>
          </div>
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
              All Articles ({livePosts.length})
            </button>
            {categories.map((category) => (
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

        {/* Blog Grid (Sorted Newest First) */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:border-rose-400 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="p-6 flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-black tracking-widest text-rose-900 uppercase bg-rose-50 border border-rose-300 px-2.5 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      {index === 0 && (
                        <span className="text-[9px] font-black uppercase tracking-wider bg-rose-600 text-white px-2 py-0.5 rounded-full">
                          Latest
                        </span>
                      )}
                    </div>
                    <span className="flex items-center text-xs text-slate-400 font-medium">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-100 mt-auto">
                    <span className="text-slate-500 font-medium flex items-center gap-1 text-[11px]">
                      <Calendar size={12} className="text-slate-400" />
                      {post.date}
                    </span>
                    <span className="text-rose-600 font-bold flex items-center group-hover:translate-x-1 transition-transform text-xs">
                      Read Guide <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InsightsPage;
