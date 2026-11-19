import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Sparkles, ShieldCheck, Hotel, Tag, ArrowUpRight } from 'lucide-react';
import { NoidaAreaDetail, SimilarKeywordGroup, generateSimilarKeywordGroups } from '@/data/noidaAreasData';

interface SimilarKeywordsCloudProps {
  area?: NoidaAreaDetail;
  categorySlug?: string;
  categoryName?: string;
  localityName?: string;
  customGroups?: SimilarKeywordGroup[];
}

const getGroupIcon = (groupName: string) => {
  switch (groupName) {
    case 'Core Local Searches':
      return <Tag size={15} className="text-amber-600 shrink-0" />;
    case 'Companion Types & Profiles':
      return <Sparkles size={15} className="text-purple-600 shrink-0" />;
    case 'Hotels & Transit Queries':
      return <Hotel size={15} className="text-indigo-600 shrink-0" />;
    case 'Zero Advance & COD Terms':
      return <ShieldCheck size={15} className="text-emerald-600 shrink-0" />;
    default:
      return <Search size={15} className="text-rose-600 shrink-0" />;
  }
};

const resolveKeywordLink = (keyword: string, areaSlug?: string, defaultCategory: string = 'call-girls'): string => {
  const kw = keyword.toLowerCase();
  const slug = areaSlug ? `/${areaSlug}` : '';

  if (kw.includes('russian') || kw.includes('foreign') || kw.includes('european')) {
    return `/russian-escorts${slug}`;
  }
  if (kw.includes('trans') || kw.includes('shemale') || kw.includes('ts ')) {
    return `/transsexual${slug}`;
  }
  if (kw.includes('advance') || kw.includes('cod') || kw.includes('cash on delivery') || kw.includes('scam') || kw.includes('genuine')) {
    return '/safety-guide';
  }
  if (kw.includes('room service') || kw.includes('booking') || kw.includes('whatsapp') || kw.includes('number')) {
    return '/booking';
  }
  if (kw.includes('escort') || kw.includes('call girl')) {
    return `/${defaultCategory}${slug}`;
  }
  return areaSlug ? `/area/${areaSlug}` : `/${defaultCategory}`;
};

export const SimilarKeywordsCloud: React.FC<SimilarKeywordsCloudProps> = ({
  area,
  categorySlug = 'call-girls',
  categoryName = 'Call Girls & Escorts',
  localityName,
  customGroups
}) => {
  const targetName = localityName || area?.name || 'Noida';
  const groups: SimilarKeywordGroup[] = customGroups || (area ? generateSimilarKeywordGroups(area) : []);

  if (!groups || groups.length === 0) {
    return null;
  }

  return (
    <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Search size={12} className="text-amber-600" />
            Hyperlocal Search Terms &amp; LSI Clusters
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            Popular Searches &amp; Similar Keywords in {targetName}
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Explore verified companion categories, hotel outcall corridors, transit points, and zero-advance payment terms.
          </p>
        </div>
      </div>

      {/* 4-Column Keyword Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((group, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200/60">
                {getGroupIcon(group.groupName)}
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  {group.groupName}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.keywords.map((kw, kIdx) => {
                  const targetHref = resolveKeywordLink(kw, area?.slug, categorySlug);
                  return (
                    <Link
                      key={kIdx}
                      to={targetHref}
                      title={`Explore ${kw}`}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-white hover:bg-amber-50 hover:text-amber-900 border border-slate-200 hover:border-amber-400 px-2.5 py-1 rounded-lg transition-all shadow-2xs hover:shadow-sm group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-amber-500 transition-colors shrink-0" />
                      <span className="capitalize">{kw}</span>
                      <ArrowUpRight size={10} className="text-slate-400 group-hover:text-amber-600 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Discretion Footnote */}
      <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <ShieldCheck size={13} className="text-emerald-600 shrink-0" />
          <span>All search variations reflect 100% verified independent companions with zero online advance deposit.</span>
        </span>
        <Link to="/booking" className="font-bold text-amber-700 hover:text-amber-800 shrink-0">
          Instant 20-Min Hotel Booking →
        </Link>
      </div>
    </section>
  );
};

export default SimilarKeywordsCloud;
