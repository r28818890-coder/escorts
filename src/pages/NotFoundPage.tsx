import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';
import SEO from '@/components/common/SEO';
import { BRAND } from '@/config/site';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex items-center justify-center px-4 font-body">
      <SEO title={`Page Not Found | 404 - ${BRAND.name}`} description="The page you are looking for does not exist." />
      
      <div className="max-w-md w-full text-center relative z-10 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center mx-auto mb-4 text-rose-600">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <h1 className="text-6xl font-black text-slate-900 mb-2 tracking-tight">404</h1>
        <h2 className="text-xl font-bold text-slate-800 mb-3">Page Not Found</h2>
        <p className="text-slate-500 text-xs sm:text-sm mb-6 leading-relaxed">
          The listing or page you are trying to access might have been moved or is no longer active on {BRAND.name}.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-600 to-indigo-600 text-white font-bold uppercase tracking-wider text-xs rounded-full hover:brightness-110 transition-all shadow-sm"
        >
          <Home size={15} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
