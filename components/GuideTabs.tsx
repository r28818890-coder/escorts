import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, IndianRupee, MousePointer, ShieldCheck, FileText, Globe, Award, Zap } from 'lucide-react';
import { PageId } from '../types';

enum ServiceType {
  COMPLIANCE = 'COMPLIANCE',
  FUNDING = 'FUNDING',
  DIGITAL = 'DIGITAL',
}

const tabs = [
  { id: ServiceType.COMPLIANCE, label: 'Registration & Compliance' },
  { id: ServiceType.FUNDING, label: 'Funding & Loans' },
  { id: ServiceType.DIGITAL, label: 'Digital Growth' },
];

interface GuideTabsProps {
  onNavigate?: (pageId: PageId) => void;
}

const GuideTabs: React.FC<GuideTabsProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<ServiceType>(ServiceType.COMPLIANCE);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Guided by Business Nesta</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive solutions covering every essential step in a business journey.</p>
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

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === ServiceType.COMPLIANCE && (
              <motion.div
                key="compliance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              >
                 <ServiceCard title="Startup India Certificates" icon={<Award />} onClick={() => onNavigate?.('startup-certificate')} />
                 <ServiceCard title="Tax Exemption" icon={<ShieldCheck />} onClick={() => onNavigate?.('tax-exemption')} />
                 <ServiceCard title="ISO Certificate" icon={<FileText />} onClick={() => onNavigate?.('iso-certificate')} />
                 <ServiceCard title="IEC Certificate" icon={<Globe />} onClick={() => onNavigate?.('iec-certificate')} />
                 <ServiceCard title="MSME Certificate" icon={<Briefcase />} onClick={() => onNavigate?.('msme-certificate')} />
                 <ServiceCard title="FSSAI" icon={<CheckSquare />} onClick={() => onNavigate?.('fssai')} />
                 <ServiceCard title="Trademark" icon={<ShieldCheck />} onClick={() => onNavigate?.('trademark')} />
                 <ServiceCard title="Legal Compliance" icon={<FileText />} onClick={() => onNavigate?.('legal-compliance')} />
              </motion.div>
            )}

            {activeTab === ServiceType.FUNDING && (
              <motion.div
                key="funding"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              >
                 <ServiceCard title="Seed Funding Consultancy" icon={<IndianRupee />} onClick={() => onNavigate?.('seed-funding-consultancy')} />
                 <ServiceCard title="Grant Funds" icon={<IndianRupee />} onClick={() => onNavigate?.('grant-funds')} />
                 <ServiceCard title="Business Loan" icon={<Briefcase />} onClick={() => onNavigate?.('business-loan')} />
                 <ServiceCard title="Project Loan" icon={<FileText />} onClick={() => onNavigate?.('project-loan')} />
                 <ServiceCard title="CGTMSE" icon={<ShieldCheck />} onClick={() => onNavigate?.('cgtmse')} />
                 <ServiceCard title="Mudra Loan" icon={<IndianRupee />} onClick={() => onNavigate?.('mudra-loan')} />
                 <ServiceCard title="Agricultural Loan" icon={<Zap />} onClick={() => onNavigate?.('agricultural-loan')} />
                 <ServiceCard title="CGSS" icon={<ShieldCheck />} onClick={() => onNavigate?.('cgss')} />
              </motion.div>
            )}

            {activeTab === ServiceType.DIGITAL && (
              <motion.div
                key="digital"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              >
                 <ServiceCard title="Digital Marketing" icon={<Globe />} onClick={() => onNavigate?.('digital-marketing')} />
                 <ServiceCard title="Website Development" icon={<MousePointer />} onClick={() => onNavigate?.('website-development')} />
                 <ServiceCard title="Logo Design" icon={<Zap />} onClick={() => onNavigate?.('logo-design')} />
                 <ServiceCard title="Artificial Intelligence (AI)" icon={<Zap />} onClick={() => onNavigate?.('ai-services')} />
                 <ServiceCard title="Whatsapp Blue Tick" icon={<CheckSquare />} onClick={() => onNavigate?.('whatsapp-blue-tick')} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const CheckSquare = ({ className }: { className?: string }) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 11 12 14 22 4"></polyline>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
  </svg>
);

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
       {React.cloneElement(icon as React.ReactElement, { size: 20 })}
     </div>
     <span className={`font-bold text-lg leading-tight ${highlight ? 'text-white' : 'text-gray-900'}`}>{title}</span>
  </button>
);

export default GuideTabs;