import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, Share2, Facebook, Twitter, Linkedin, Phone, MessageCircle } from 'lucide-react';
import { BLOG_POSTS } from '@/pages/Insights';
import { BRAND, CONTACT } from '@/config/site';
import SEO from '@/components/common/SEO';
import NotFoundPage from '@/pages/NotFoundPage';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = BLOG_POSTS.find(p => p.slug === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return <NotFoundPage />;
  }

  const currentUrl = window.location.href;

  const getRelatedPosts = () => {
    return BLOG_POSTS.filter(p => post.relatedPosts?.includes(p.slug));
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pb-24">
      <SEO 
        title={`${post.metaTitle || post.title} | ${BRAND.name}`}
        description={post.metaDescription || post.excerpt}
        url={currentUrl}
        type="article"
        schema={{
          '@type': 'Article',
          '@id': `${BRAND.domain}/blog/${post.slug}#article`,
          headline: post.title,
          description: post.metaDescription || post.excerpt,
          image: post.image || BRAND.ogImage,
          datePublished: post.date,
          author: {
            '@type': 'Organization',
            name: BRAND.name,
            url: BRAND.domain,
          },
          publisher: {
            '@type': 'Organization',
            name: BRAND.name,
            logo: {
              '@type': 'ImageObject',
              url: `${BRAND.domain}/ecj-logo.svg`,
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${BRAND.domain}/blog/${post.slug}`,
          },
        }}
      />

      {/* Hero Section */}
      <div className="pt-10 pb-12 px-4 bg-gradient-to-b from-slate-100 to-[#f8fafc] border-b border-slate-200">
        <div className="container mx-auto max-w-4xl">
          <button 
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-rose-600 uppercase tracking-wider transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft size={16} /> Back to City Guides
          </button>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] font-black tracking-widest text-rose-900 bg-rose-50 border border-rose-300 px-3 py-1 rounded-full uppercase">
              {post.category}
            </span>
            <span className="flex items-center text-xs text-slate-500 font-medium">
              <Clock size={12} className="mr-1 text-slate-400" />
              {post.date}
            </span>
            <span className="flex items-center text-xs text-slate-500 font-medium">
              <Clock size={12} className="mr-1 text-slate-400" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-2">
            {post.keywords?.map((keyword, index) => (
              <span key={index} className="text-xs text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full flex items-center gap-1 font-medium shadow-2xs">
                <Tag size={10} className="text-rose-600" />
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Social Share Sidebar (Desktop) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 flex flex-col items-center gap-4">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold rotate-180" style={{ writingMode: 'vertical-rl' }}>Share</span>
              <div className="w-px h-8 bg-slate-200"></div>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${post.title}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-11 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <article className="prose prose-slate max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-h3:text-xl prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-rose-600 hover:prose-a:underline">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* In-Article CTA */}
            <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-black mb-1">Looking for Verified Companions in Jaipur?</h4>
                <p className="text-xs sm:text-sm text-rose-100 font-medium">100% photo-verified independent models & 24/7 hotel outcall visits.</p>
              </div>
              <a
                href={CONTACT.whatsapp1Href + '?text=' + encodeURIComponent(`Hello Escorts Hub Jaipur, I read your guide "${post.title}" and would like to inquire about verified companion availability.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 bg-white text-slate-950 font-bold text-xs rounded-full hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-sm"
              >
                <MessageCircle size={15} className="text-emerald-600" /> WhatsApp Coordination
              </a>
            </div>

            {/* Mobile Share */}
            <div className="flex lg:hidden items-center gap-4 py-4 border-t border-slate-100 mt-8">
              <span className="text-xs text-slate-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Share2 size={14} /> Share:
              </span>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Facebook size={16} />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${post.title}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-500 transition-colors">
                <Twitter size={16} />
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {getRelatedPosts().length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-xl font-black text-slate-900 mb-6">Read More Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getRelatedPosts().map(related => (
                <Link 
                  key={related.id} 
                  to={`/blog/${related.slug}`}
                  className="group block bg-white border border-slate-200 rounded-2xl p-5 hover:border-rose-400 transition-all shadow-sm"
                >
                  <span className="text-[10px] font-black tracking-widest text-rose-900 bg-rose-50 border border-rose-300 px-2 py-0.5 rounded-full uppercase mb-2 inline-block">
                    {related.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-black text-slate-900 mb-1.5 group-hover:text-rose-600 transition-colors line-clamp-2">
                    {related.title}
                  </h4>
                  <p className="text-slate-500 text-xs line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetail;