import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Search, ArrowRight, BookOpen, ShieldCheck, Sparkles, Calendar } from 'lucide-react';
import { BRAND } from '@/config/site';
import SEO from '@/components/common/SEO';
import { BlogPost } from '@/types';
import { getLiveBlogs, getBacklinkStats, getPublishingMetrics } from '@/services/autoPublishEngine';

/**
 * Live Blog Posts Sourced Dynamically from the Automated Publishing Engine
 * - 10 Blogs Live Immediately Today (November 15, 2026)
 * - 120 Blogs Auto-Published: 2x Daily at 6:00 AM & 7:00 PM for 60 Days
 * - Sorted Descending: 1st Blog is always the newest/latest published article
 */
export const BLOG_POSTS: BlogPost[] = getLiveBlogs();

export const Insights: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Dynamic live blogs list (auto-sorted newest first)
  const livePosts = useMemo(() => getLiveBlogs(), []);
  const backlinkStats = useMemo(() => getBacklinkStats(), []);

  // Extract categories dynamically
  const categories = useMemo(() => {
    return Array.from(new Set(livePosts.map((post) => post.category)));
  }, [livePosts]);

  // Search & category filter
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
        title="Call Girl Noida & Escorts Service Noida Guides | Escorts Hub"
        description="Daily verified city guides on call girl noida, escorts service noida, 5-star hotel outcalls, safety protocols, and direct cash booking across Noida & NCR."
      />

      {/* Hero Header */}
      <div className="pt-10 pb-12 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-amber-500/20 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 text-xs font-black uppercase tracking-wider mb-3 shadow-inner">
            <BookOpen size={14} className="text-amber-400" /> VIP Journal &amp; City Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mb-3 leading-tight tracking-tight">
            Call Girl Noida &amp; <span className="text-amber-400">Escorts Service Noida</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Latest verified updates, safe hotel outcall guidelines, anti-scam warnings, and locality advice updated 2x daily (6:00 AM &amp; 7:00 PM).
          </p>

          {/* Live Syndication Bar */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 bg-slate-900/80 border border-slate-800 rounded-full px-5 py-2">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {livePosts.length} Live Articles
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-amber-400 font-medium">
              <Sparkles size={12} /> Auto-Live: 6 AM &amp; 7 PM Daily
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck size={12} className="text-emerald-400" /> {backlinkStats.liveCount} Active Backlink Citations
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-10 max-w-7xl">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search guides, hotels, or sectors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === null
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              All Articles ({livePosts.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Grid (Sorted Newest First) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-amber-400 transition-all flex flex-col justify-between group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black tracking-widest text-amber-900 bg-amber-50 border border-amber-300 px-2.5 py-0.5 rounded-full uppercase">
                      {post.category}
                    </span>
                    {idx === 0 && (
                      <span className="text-[9px] font-black uppercase tracking-wider bg-rose-600 text-white px-2 py-0.5 rounded-full shadow-sm animate-pulse">
                        Latest
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-black text-slate-900 mb-2 group-hover:text-amber-700 transition-colors line-clamp-2">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
                <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                  <Calendar size={12} className="text-slate-400" /> {post.date}
                </span>
                <Link to={`/blog/${post.slug}`} className="flex items-center gap-1 hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
