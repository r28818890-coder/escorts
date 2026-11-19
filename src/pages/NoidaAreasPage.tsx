import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Sparkles, Heart, UserCheck, Users, Flame, ChevronRight } from 'lucide-react';
import { NOIDA_LOCALITIES, PORTAL_CATEGORIES } from '@/config/portalData';
import { BRAND } from '@/config/site';
import SEO from '@/components/common/SEO';

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Heart': return <Heart size={14} className="text-amber-600" />;
    case 'UserCheck': return <UserCheck size={14} className="text-emerald-600" />;
    case 'Users': return <Users size={14} className="text-indigo-600" />;
    case 'Flame': return <Flame size={14} className="text-rose-600" />;
    default: return <Sparkles size={14} className="text-amber-600" />;
  }
};

export const NoidaAreasPage: React.FC = () => {
  const areasSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${BRAND.domain}/areas#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${BRAND.domain}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Areas',
        item: `${BRAND.domain}/areas`,
      },
    ],
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pt-6 pb-20">
      <SEO
        title={`Noida & NCR Areas Directory - ${BRAND.name}`}
        description="Browse verified companions and independent escort services across 18 prime sectors in Noida, Greater Noida, and Ghaziabad."
        schema={areasSchema}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight size={13} />
          <span className="text-amber-600 font-bold">Areas</span>
        </nav>
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full border border-amber-400 bg-amber-50 shadow-sm">
            <MapPin size={14} className="text-amber-600" />
            <span className="text-xs font-black text-amber-900 uppercase tracking-wider">
              Noida & NCR Hyperlocal Index
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight">
            Noida & NCR Localities Directory
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Select your preferred neighborhood or hotel hub in Noida, Greater Noida, or Ghaziabad to view active classified ads, verified models, and 24/7 hotel outcall companions.
          </p>
        </div>

        {/* Localities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {NOIDA_LOCALITIES.map((loc) => (
            <div
              key={loc.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-lg transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-1.5">
                  <MapPin size={16} className="text-amber-600" />
                  {loc.name}
                </h2>
                <span className="text-[10px] bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full font-bold border border-amber-200">
                  {loc.zone}
                </span>
              </div>

              <p className="text-xs text-slate-500">{loc.landmark}</p>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                {PORTAL_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/${cat.slug}/${loc.slug}`}
                    className="text-xs bg-slate-50 hover:bg-amber-50 text-slate-700 hover:text-amber-900 px-2.5 py-1 rounded-lg border border-slate-200 transition-colors flex items-center gap-1 font-medium"
                  >
                    {getCategoryIcon(cat.iconName)}
                    <span>{cat.name}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to={`/area/${loc.slug}`}
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 group"
                >
                  <span>Explore {loc.name} Area Guide &amp; Hotels</span>
                  <ChevronRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default NoidaAreasPage;
