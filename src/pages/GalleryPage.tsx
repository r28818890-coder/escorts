import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import { BRAND } from '@/config/site';
import { Camera, ShieldCheck, MapPin } from 'lucide-react';
import { INITIAL_CLASSIFIED_ADS } from '@/config/portalData';

const galleryItems = INITIAL_CLASSIFIED_ADS.slice(0, 18).map(ad => ({
  url: ad.images[0],
  title: ad.title,
  alt: ad.alt || `${ad.title.split(' - ')[0]} ${ad.age} Yrs VIP Escort in ${ad.locality}`,
  locality: ad.locality,
  age: ad.age,
  link: `/${ad.categorySlug}/${ad.localitySlug}/${ad.slug}`
}));

const GalleryPage: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pb-24">
      <SEO
        title={`VIP Gallery & Verified Model Visuals | ${BRAND.name}`}
        description={`Explore verified photos and luxury suite ambiance at ${BRAND.name}, Noida. 100% genuine photo verified companion directory.`}
      />

      {/* Hero */}
      <div className="pt-10 pb-12 px-4 bg-gradient-to-b from-slate-100 to-[#f8fafc] border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-300 bg-amber-50 text-amber-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <Camera size={14} className="text-amber-600" /> 100% Verified HD Visuals
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
            VIP Companions &amp; Outcall Gallery
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover real-photo verified independent models, corporate hostesses, and luxury suite companions across all 18 Noida &amp; NCR sectors.
          </p>
        </div>
      </div>

      {/* HD Photo Grid */}
      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Link 
              to={item.link} 
              key={index} 
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="aspect-[3/4] overflow-hidden bg-slate-100 relative">
                <img 
                  src={item.url} 
                  alt={item.alt} 
                  width={400} 
                  height={533} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  loading="lazy" 
                  decoding="async" 
                />
                <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow flex items-center gap-1">
                  <ShieldCheck size={11} /> 100% Real
                </div>
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-amber-900 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full font-bold inline-flex items-center gap-1">
                  <MapPin size={10} className="text-amber-600" /> {item.locality}
                </span>
                <p className="text-sm text-slate-900 font-bold leading-tight group-hover:text-amber-700 transition-colors">
                  {item.title}
                </p>
                <p className="text-[11px] text-slate-500">
                  {item.alt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
