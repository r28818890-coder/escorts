import React, { useState } from 'react';
import { Search, MapPin, Layers, X, Sparkles, ShieldCheck, Zap, Hotel, Home as HomeIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PORTAL_CATEGORIES, JAIPUR_LOCALITIES } from '@/config/portalData';

interface JaipurSearchBarProps {
  initialCategory?: string;
  initialLocality?: string;
  onFilterChange?: (category: string, locality: string, query: string, activeChips?: string[]) => void;
}

export const JaipurSearchBar: React.FC<JaipurSearchBarProps> = ({
  initialCategory = 'all',
  initialLocality = 'all',
  onFilterChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLocality, setSelectedLocality] = useState(initialLocality);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const navigate = useNavigate();

  const FILTER_CHIPS = [
    { id: 'verified', label: 'Verified 100% Real', icon: ShieldCheck },
    { id: 'online', label: 'Available Now', icon: Zap },
    { id: 'outcall', label: 'Hotel Outcall', icon: Hotel },
    { id: 'incall', label: 'Private Suite', icon: HomeIcon },
    { id: 'top-rated', label: 'Top Rated 5★', icon: Sparkles },
  ];

  const toggleChip = (chipId: string) => {
    const updated = selectedChips.includes(chipId)
      ? selectedChips.filter((c) => c !== chipId)
      : [...selectedChips, chipId];
    setSelectedChips(updated);
    if (onFilterChange) {
      onFilterChange(selectedCategory, selectedLocality, searchQuery, updated);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFilterChange) {
      onFilterChange(selectedCategory, selectedLocality, searchQuery, selectedChips);
    } else {
      let targetPath = '/';
      if (selectedCategory !== 'all' && selectedLocality !== 'all') {
        targetPath = `/${selectedCategory}/${selectedLocality}`;
      } else if (selectedCategory !== 'all') {
        targetPath = `/${selectedCategory}`;
      } else if (selectedLocality !== 'all') {
        targetPath = `/call-girls/${selectedLocality}`;
      }
      navigate(targetPath);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white border border-slate-200/90 rounded-2xl p-3 sm:p-4 shadow-md">
      
      {/* Category Pills (Quick Switcher) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-3 border-b border-slate-100 scrollbar-none">
        <button
          type="button"
          onClick={() => {
            setSelectedCategory('all');
            if (onFilterChange) onFilterChange('all', selectedLocality, searchQuery, selectedChips);
          }}
          className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
          }`}
        >
          All Categories
        </button>

        {PORTAL_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              setSelectedCategory(cat.slug);
              if (onFilterChange) onFilterChange(cat.slug, selectedLocality, searchQuery, selectedChips);
            }}
            className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              selectedCategory === cat.slug
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Main Search Controls */}
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-2.5">
        
        {/* Category Select */}
        <div className="md:col-span-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Layers size={16} />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              if (onFilterChange) onFilterChange(e.target.value, selectedLocality, searchQuery, selectedChips);
            }}
            className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-rose-500 focus:bg-white transition-all cursor-pointer appearance-none"
            aria-label="Select Category"
          >
            <option value="all">All Service Categories</option>
            {PORTAL_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Locality Select */}
        <div className="md:col-span-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-rose-500">
            <MapPin size={16} />
          </div>
          <select
            value={selectedLocality}
            onChange={(e) => {
              setSelectedLocality(e.target.value);
              if (onFilterChange) onFilterChange(selectedCategory, e.target.value, searchQuery, selectedChips);
            }}
            className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-rose-500 focus:bg-white transition-all cursor-pointer appearance-none"
            aria-label="Select Jaipur Locality"
          >
            <option value="all">All 20 Jaipur Localities</option>
            {JAIPUR_LOCALITIES.map((loc) => (
              <option key={loc.id} value={loc.slug}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>

        {/* Free Text Input */}
        <div className="md:col-span-4 relative flex items-center gap-1.5">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder="Search model, age, hotel..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (onFilterChange) onFilterChange(selectedCategory, selectedLocality, e.target.value, selectedChips);
              }}
              className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  if (onFilterChange) onFilterChange(selectedCategory, selectedLocality, '', selectedChips);
                }}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-700"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1 transition-all shadow-sm shrink-0"
          >
            <span>Search</span>
          </button>
        </div>
      </form>

      {/* Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pt-1 scrollbar-none">
        {FILTER_CHIPS.map((chip) => {
          const Icon = chip.icon;
          const isSelected = selectedChips.includes(chip.id);
          return (
            <button
              key={chip.id}
              type="button"
              onClick={() => toggleChip(chip.id)}
              className={`shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-rose-50 border-rose-400 text-rose-900 shadow-sm'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Icon size={12} className={isSelected ? 'text-rose-600' : 'text-slate-400'} />
              <span>{chip.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default JaipurSearchBar;
