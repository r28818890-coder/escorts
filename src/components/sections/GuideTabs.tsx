import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart,
  ShieldCheck,
  Award,
  Wind,
  Smile,
  Star,
  Leaf,
  Droplets,
  Sparkles,
  Crown,
  Gift
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Tab Identifiers
enum ServiceType {
  TREATMENTS = 'TREATMENTS',
  WELLNESS = 'WELLNESS',
  PACKAGES = 'PACKAGES',
}

// Tab Configuration
const tabs = [
  { id: ServiceType.TREATMENTS, label: 'Treatments' },
  { id: ServiceType.WELLNESS, label: 'Wellness Rituals' },
  { id: ServiceType.PACKAGES, label: 'Spa Packages' },
];

const GuideTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ServiceType>(ServiceType.TREATMENTS);
  const navigate = useNavigate();

  // Navigation Handler
  const handleNavigate = (pageId: string) => {
    navigate(`/${pageId}`);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Guided by Jaipur Spa</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our premium therapies, wellness rituals, and couples experiences in Jaipur.</p>
        </div>

        {/* Tabs Header */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-full shadow-sm border border-gray-200 inline-flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-black text-white shadow-lg' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* 1. Treatments Tab */}
            {activeTab === ServiceType.TREATMENTS && (
              <motion.div
                key="treatments"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              >
                 <ServiceCard title="Thai Massage" icon={<Award />} onClick={() => handleNavigate('thai-massage')} />
                 <ServiceCard title="Swedish Massage" icon={<Heart />} onClick={() => handleNavigate('swedish-massage')} />
                 <ServiceCard title="Deep Tissue Massage" icon={<ShieldCheck />} onClick={() => handleNavigate('deep-tissue-massage')} />
                 <ServiceCard title="Aroma Therapy" icon={<Wind />} onClick={() => handleNavigate('aroma-therapy')} />
                 <ServiceCard title="Balinese Massage" icon={<Smile />} onClick={() => handleNavigate('balinese-massage')} />
                 <ServiceCard title="Full Body Massage" icon={<Star />} onClick={() => handleNavigate('full-body-massage')} />
              </motion.div>
            )}

            {/* 2. Wellness Rituals Tab */}
            {activeTab === ServiceType.WELLNESS && (
              <motion.div
                key="wellness"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              >
                 <ServiceCard title="Couple Massage" icon={<Heart />} onClick={() => handleNavigate('couple-massage')} />
                 <ServiceCard title="Body Scrub" icon={<Leaf />} onClick={() => handleNavigate('body-scrub')} />
                 <ServiceCard title="Steam Bath" icon={<Droplets />} onClick={() => handleNavigate('steam-bath')} />
                 <ServiceCard title="Relaxation Packages" icon={<Sparkles />} onClick={() => handleNavigate('thai-massage')} />
                 <ServiceCard title="Private Suites" icon={<Crown />} onClick={() => handleNavigate('couple-massage')} />
                 <ServiceCard title="Gift Vouchers" icon={<Gift />} onClick={() => handleNavigate('full-body-massage')} />
              </motion.div>
            )}

            {/* 3. Spa Packages Tab */}
            {activeTab === ServiceType.PACKAGES && (
              <motion.div
                key="packages"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              >
                 <ServiceCard title="Pamper Package" icon={<Sparkles />} onClick={() => handleNavigate('aroma-therapy')} />
                 <ServiceCard title="Recovery Package" icon={<ShieldCheck />} onClick={() => handleNavigate('deep-tissue-massage')} />
                 <ServiceCard title="Romantic Package" icon={<Heart />} onClick={() => handleNavigate('couple-massage')} />
                 <ServiceCard title="Detox Package" icon={<Droplets />} onClick={() => handleNavigate('steam-bath')} />
                 <ServiceCard title="Luxury Spa Menu" icon={<Star />} onClick={() => handleNavigate('full-body-massage')} />
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Component for Service Card (Exact Design Retained)
const ServiceCard = (
  { title, icon, highlight = false, onClick }: 
  { title: string; icon: React.ReactNode; highlight?: boolean; onClick?: () => void }
) => (
  <button
    type="button"
    onClick={onClick}
    className={`p-6 rounded-xl border flex items-center gap-4 transition-all hover:shadow-lg cursor-pointer text-left w-full ${
      highlight 
        ? 'bg-black text-white border-black' 
        : 'bg-white text-gray-900 border-gray-100 hover:border-gray-300'
    }`}
  >
     <div className={`p-3 rounded-full flex-shrink-0 ${highlight ? 'bg-gray-800' : 'bg-gray-100 text-gray-800'}`}>
      {React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}
     </div>
     <span className={`font-bold text-lg leading-tight ${highlight ? 'text-white' : 'text-gray-900'}`}>{title}</span>
  </button>
);

export default GuideTabs;