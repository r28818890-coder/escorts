import React from 'react';
import SEO from '@/components/common/SEO';
import { BRAND } from '@/config/site';
import { Sparkles, Camera } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200',
    title: '5-Star Luxury Suite Outcall Experience',
    category: 'Hotel Outcalls',
  },
  {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
    title: 'Private Resort Wellness Setup',
    category: 'Resorts & Suites',
  },
  {
    url: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1200',
    title: 'VIP Lounge & Reception Ambiance',
    category: 'VIP Ambiance',
  },
  {
    url: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1200',
    title: 'Executive Suite Accompaniment',
    category: 'Hotel Outcalls',
  },
  {
    url: 'https://images.unsplash.com/photo-1608248593859-99ce64e43f11?auto=format&fit=crop&q=80&w=1200',
    title: 'Relaxation & Companion Ambiance',
    category: 'VIP Ambiance',
  },
  {
    url: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=1200',
    title: 'Private Suite Lounge Jaipur',
    category: 'Resorts & Suites',
  },
];

const GalleryPage: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pb-24">
      <SEO
        title={`VIP Gallery & Suite Visuals | ${BRAND.name}`}
        description={`Explore verified photos and luxury suite ambiance at ${BRAND.name}, Jaipur.`}
      />

      {/* Hero */}
      <div className="pt-10 pb-12 px-4 bg-gradient-to-b from-slate-100 to-[#f8fafc] border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-300 bg-rose-50 text-rose-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <Camera size={14} className="text-rose-600" /> High-Definition Visuals
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
            VIP Suite & Hotel Gallery
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover the luxury ambiance, 5-star hotel setups, and discreet private suite environments across Jaipur.
          </p>
        </div>
      </div>

      {/* HD Photo Grid */}
      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img src={item.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <span className="text-[10px] uppercase tracking-widest text-rose-900 bg-rose-50 border border-rose-300 px-2 py-0.5 rounded-full font-bold inline-block mb-1.5">{item.category}</span>
                <p className="text-sm text-slate-900 font-bold leading-tight">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
